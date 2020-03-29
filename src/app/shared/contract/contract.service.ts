import { GameType } from './../game-type/game-type';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { AppConfig } from '@app/shared/app-config/app-config';
import { GameTypeData } from '../game-type/game-type';
import { IWinningEntry } from '../picks/picks-entry';

declare let require: any;
declare let window: any;

const Web3 = require('web3');
const TruffleContract = require('@truffle/contract');
const tokenAbi =  require('../../../../build/contracts/FiddyFiddy.json');

@Injectable({
	providedIn: 'root'
})
export class ContractService {
	private web3: any;
	private fiddyFiddy = TruffleContract(tokenAbi);
	private userAccount: string;

	constructor(private snackBar: MatSnackBar) {}

	resolveContract(): Promise<boolean> {
		const thi$ = () => this;

		// Checking if Web3 has been injected by the browser (Mist/MetaMask)
		if (typeof window.ethereum !== 'undefined') {
			return new Promise((resolve, reject) => {
				window.ethereum.enable()
					.then(() => {
						thi$().web3 = new Web3(window.ethereum);
						thi$().fiddyFiddy.setProvider(thi$().web3.currentProvider);
						return thi$().fiddyFiddy.deployed();
					})
					.then((contract: any) => {
						console.dir(contract);
						return thi$().web3.eth.getAccounts();
					})
					.then((accounts: any[]) => {
						thi$().userAccount = accounts[0];
						return resolve(true);
					})
					.catch((error: any) => {
						return reject(error);
					});
			});
		} else {
			thi$().displayError('You do not have an ethereum provider enabled. You could try MetaMask if you do not have a wallet provider.');
			// Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
			Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
			// fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
			thi$().web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));

			thi$().fiddyFiddy.setProvider(this.web3.currentProvider);

			return new Promise((resolve, reject) => {
				thi$().web3.eth.getAccounts()
					.then((accounts: any[]) => {
						thi$().userAccount = accounts[0];
						return resolve(true);
					})
					.catch((error: any) => {
						return reject(error);
					});
				});
		}
	}

	getUserInfo(): Promise<{}> {
		const thi$ = () => this;
		return new Promise((resolve, reject) => {
			thi$().fiddyFiddy.deployed()
				.then((instance: any) => {
					return instance.getAdmissionStatus.call(thi$().userAccount, { from: thi$().userAccount });
				})
				.then((isAdmitted: boolean) => {
					return resolve({ userAddress: thi$().userAccount, isAdmitted });
				})
				.catch((error: any) => {
					return reject(error);
				});
		});
	}

	postPicks(weekNumber: number, picks: number[], gameTypeData: GameTypeData): Promise<string> {
		const thi$ = () => this;
		let truffleContract: any;
		let picksBytes: string;
		return new Promise((resolve, reject) => {
			thi$().fiddyFiddy.deployed()
				.then((instance: any) => {
					truffleContract = instance;
					const ticketPrice = window.web3.toWei(gameTypeData.etherValue, 'ether');
					picksBytes = thi$().convertPicksToSha3(picks);
					return truffleContract.admitAndPostPicks(weekNumber, picksBytes,
						{
							from: thi$().userAccount,
							value: ticketPrice
						}
					);
				})
				.then((transaction: any) => {
					// Get the picks from the blockchain as a sanity check
					return truffleContract.getWeeklyEntries.call(thi$().userAccount, weekNumber, gameTypeData.gameType);
				})
				.then((storedPickSets: string[]) => {
					const thisStoredPickSet: string = storedPickSets.find((set: string) => set === picksBytes);
					if (thisStoredPickSet) {
						return resolve(thisStoredPickSet);
					} else {
						const errorMsg = `Picks sent does not match the picks posted. Sent: ${picksBytes}, Returned: ${storedPickSets.toString}`;
						return reject(errorMsg);
					}
				})
				.catch((error: any) => {
					return reject(error);
				});
		});
	}

	convertPicksToSha3(picks: number[]): string {
		let picksAsString = '';
		picks.forEach((pick, index) => {
			picksAsString += pick;
			if (index < picks.length - 1) {
				picksAsString += ' ';
			}
		});
		return window.web3.sha3(picksAsString);
	}

	setAppConfig(config: AppConfig): Promise<boolean> {
		const thi$ = () => this;
		return new Promise((resolve, reject) => {
			thi$().fiddyFiddy.deployed()
				.then((instance: any) => {
					if (config.admin !== thi$().userAccount) {
						return reject('You are not the owner of FiddyFiddy and cannot access admin functions.');
					}

					// const weekBigNumber: any = window.web3.toBigNumber(config.weekNumber);
					return instance.setConfig(
						config.weekNumber /* weekNumber */,
						config.contractLocked,
						config.stakeholder,
						config.founder,
						{ from: thi$().userAccount }
					);
				})
				.then((transaction: any) => {
					if (transaction.receipt) {
						return resolve(true);
					} else {
						return reject('There was an error setting the config');
					}
				})
				.catch((error: any) => {
					return reject(error);
				});
		});
	}

	getAppConfig(): Promise<AppConfig> {
		const thi$ = () => this;
		return new Promise((resolve, reject) => {
			thi$().fiddyFiddy.deployed()
				.then((instance: any) => {
					return instance.getConfig.call();
				})
				.then((config: any) => {
					const weekNumber: number = config[0].toNumber();
					const contractLocked: boolean = config[1];
					const admin: string = config[2];
					const stakeholder: string = config[3];
					const founder: string = config[4];
					const appConfig: AppConfig = { weekNumber, contractLocked, admin, stakeholder, founder };
					return resolve(appConfig);
				})
				.catch((error: any) => {
					reject(error);
				});
		});
	}

	addWinningEntry(winningEntry: IWinningEntry): Promise<boolean> {
		const thi$ = () => this;
		return new Promise((resolve, reject) => {
			thi$().fiddyFiddy.deployed()
				.then((instance: any) => {
					return instance.addWinningEntry(
						winningEntry.weekNumber,
						winningEntry.gameType,
						winningEntry.player,
						winningEntry.evm_picks
					);
				})
				.then((transaction: any) => {
					if (transaction.receipt) {
						return resolve(true);
					} else {
						return reject('There was an error adding the winning entry');
					}
				})
				.catch((error: any) => {
					return reject(error);
				});
		});
	}

	payoutWinnings(weekNumber: number, gameType: GameType): Promise<boolean> {
		const thi$ = () => this;
		return new Promise((resolve, reject) => {
			thi$().fiddyFiddy.deployed()
				.then((instance: any) => {
					return instance.payoutWinnings(weekNumber, gameType);
				})
				.then((payoutSuccessful: boolean) => {
					return resolve(payoutSuccessful);
				})
				.catch((error: any) => {
					return reject(error);
				});
		});
	}

	displayError(errorMsg: string): void {
		this.snackBar.open(errorMsg, '', {
			duration: 5000,
			panelClass: 'bg-danger'
		});
	}

}
