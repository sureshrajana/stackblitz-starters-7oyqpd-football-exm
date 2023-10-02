export interface SimpleLeague {
    id: number;
    name: string;
    logo: string;
}

export interface Season {
    year: number;
    current: boolean;
    start: string;
    end: string;
}

export interface LeagueInfo {
    league: SimpleLeague,
    seasons: Season[]
}

export interface ApiLeagueResponse {
    results: number;
    paging: {
        current: number;
        total: number;
    }
    response: LeagueInfo [],
}