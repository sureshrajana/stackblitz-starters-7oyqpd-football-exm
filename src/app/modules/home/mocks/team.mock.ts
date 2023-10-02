import { ApiTeamResponse } from "../models";

export const getTeam = (): ApiTeamResponse => ((
    {
        "results": 1,
        "paging": {
            "current": 1,
            "total": 1
        },
        "response": [
            {   
                "team": {
                    "id": 50,
                    "name": "Manchester City",
                    "code": "MAC",
                    "country": "England",
                    "founded": 1880,
                    "national": false,
                    "logo": "https://media-4.api-sports.io/football/teams/50.png"
                },
                "venue": {
                    "id": 555,
                    "name": "Etihad Stadium",
                    "address": "Rowsley Street",
                    "city": "Manchester",
                    "capacity": 55097,
                    "surface": "grass",
                    "image": "https://media-4.api-sports.io/football/venues/555.png"
                }
            }
        ]
    }
));
