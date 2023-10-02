import { ApiLeagueResponse } from "../models";

export const getLeague = (): ApiLeagueResponse => ((
    {
        "results": 1,
        "paging": {
            "current": 1,
            "total": 1
        },
        "response": [
            {
                "league": {
                    "id": 39,
                    "name": "Premier League",
                    "logo": "https://media-4.api-sports.io/football/leagues/39.png"
                },
                "seasons": [
                    {
                        "year": 2023,
                        "start": "2023-08-11",
                        "end": "2024-05-19",
                        "current": true,
                    }
                ]
            }
        ]
    }
));
