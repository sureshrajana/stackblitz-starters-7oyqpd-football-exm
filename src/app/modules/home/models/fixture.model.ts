export interface Team {
    id: number;
    name: string;
    logo: string;
    winner: boolean;
}

export interface Teams {
    home: Team;
    away: Team;
}

export interface Fixture {
    teams: Teams;
    goals: {
        home: number;
        away: number;
    }
}

export interface ApiFixtureResponse {
    results: number;
    paging: {
        current: number;
        total: number;
    }
    response: Fixture [],
}