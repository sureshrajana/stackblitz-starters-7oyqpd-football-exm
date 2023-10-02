export interface StandingLeague {
    league: League;
}

export interface League {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    standings: Standing[][]
}

export interface Standing {
    rank: number;
    team: TeamBasic;
    points: number;
    goalsDiff: number;
    all: {
        played: number;
        win: number;
        draw: number;
        lose: number;
    }
}

export interface TeamBasic {
    id: number;
    name: string;
    logo: string;
}

export interface ApiStandingLeagueResponse {
    results: number;
    paging: {
        current: number;
        total: number;
    }
    response: StandingLeague [],
}
