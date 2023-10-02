export interface Country {
    code: string;
    name: string;
    flag: string;
}

export interface ApiCountryResponse {
    results: number;
    paging: {
        current: number;
        total: number;
    }
    response: Country [],
}