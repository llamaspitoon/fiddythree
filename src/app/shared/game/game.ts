export interface IGameTeam {
	team: {
		team_id: number;
		name: string;
	};
	score: number;
	instancesChosen: number;
}

export interface IGame {
	_id?: string;
	home: IGameTeam;
	away: IGameTeam;
	homeChosenPercentage?: number;
}
