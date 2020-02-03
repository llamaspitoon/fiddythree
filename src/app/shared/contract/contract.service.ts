import { GameType } from './../game-type/game-type';
import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';
import * as Web3 from 'web3';
import * as TruffleContract from 'truffle-contract';

declare let require: any;
declare let window: any;

import * as tokenAbi from '../../../../build/contracts/FiddyFiddy.json';
import { AppConfig } from '@app/shared/app-config/app-config';
import { GameTypeData } from '../game-type/game-type.js';
import { IWinningEntry } from '../picks/picks-entry.js';

@Injectable({
	providedIn: 'root'
})
export class ContractService {
	private _fiddyFiddy: any = TruffleContract(tokenAbi);
	private _userAccount: string;

	constructor(private _snackBar: MatSnackBar) {
		// If no web3 instance, then direct user to turn on or install MetaMask
		if (typeof window.web3 === 'undefined') {
			this.displayError('You do not have an ethereum provider enabled. You could try MetaMask if you do not have a wallet provider.');
		}

		window.web3 = window.ethereum
			? new Web3(window.ethereum)
			: new Web3(window.web3.currentProvider);

		this._fiddyFiddy.setProvider(window.web3.currentProvider);

		// If window.ethereum, then the MetaMask "Privacy Mode" is enabled
		if (window.ethereum) {
			this.enableAccessToProvider(window.ethereum);
		} else {
			this._userAccount = window.web3.eth.accounts[0];
		}
	}

	async enableAccessToProvider(ethereum: any) {
		try {
			await ethereum.enable();
			this._userAccount = window.web3.eth.accounts[0];
		} catch {
			this.displayError('You cannot play if you do not allow FiddyFiddy to interact with your address.');
		}
	}

	getUserInfo(): Promise<{}> {
		const thi$ = () => this;

		return new Promise((resolve, reject) => {
			thi$()._fiddyFiddy.deployed()
				.then((instance: any) => {
					return instance.getAdmissionStatus.call(thi$()._userAccount, { from: thi$()._userAccount });
				})
				.then((isAdmitted: boolean) => {
					return resolve({ userAddress: thi$()._userAccount, isAdmitted });
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
			thi$()._fiddyFiddy.deployed()
				.then((instance: any) => {
					truffleContract = instance;
					const ticketPrice = window.web3.toWei(gameTypeData.etherValue, 'ether');
					picksBytes = thi$().convertPicksToSha3(picks);
					return truffleContract.admitAndPostPicks(weekNumber, picksBytes,
						{
							from: thi$()._userAccount,
							value: ticketPrice
						}
					);
				})
				.then((transaction: any) => {
					// Get the picks from the blockchain as a sanity check
					return truffleContract.getWeeklyEntries.call(thi$()._userAccount, weekNumber, gameTypeData.gameType);
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
			thi$()._fiddyFiddy.deployed()
				.then((instance: any) => {
					if (config.admin !== thi$()._userAccount) {
						return reject('You are not the owner of FiddyFiddy and cannot access admin functions.');
					}

					const weekBigNumber: any = window.web3.toBigNumber(config.weekNumber);
					return instance.setConfig(
						weekBigNumber /* weekNumber */,
						config.contractLocked,
						config.stakeholder,
						config.founder,
						{ from: thi$()._userAccount }
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
			thi$()._fiddyFiddy.deployed()
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
					return reject(error);
				});
		});
	}

	addWinningEntry(winningEntry: IWinningEntry): Promise<boolean> {
		const thi$ = () => this;
		return new Promise((resolve, reject) => {
			thi$()._fiddyFiddy.deployed()
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
			thi$()._fiddyFiddy.deployed()
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
		this._snackBar.open(errorMsg, '', {
			duration: 5000,
			panelClass: 'bg-danger'
		});
	}

}
