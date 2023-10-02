export interface TeamInfo {
    id: number;
    code: string;
    country: string;
    founded: number;
    logo: string;
    name: string;
    national: boolean;
}

export interface Stadium {
    id: number;
    name: string;
    address: string;
    city: string;
    capacity: number;
    surface: string;
    image: string;
}

export interface TeamData {
    team: TeamInfo,
    venue: Stadium
}

export interface ApiTeamResponse {
    results: number;
    paging: {
        current: number;
        total: number;
    }
    response: TeamData [],
}
