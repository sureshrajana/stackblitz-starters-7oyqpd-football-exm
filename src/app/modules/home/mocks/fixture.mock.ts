import { ApiFixtureResponse } from "../models";

export const getFixture = (): ApiFixtureResponse => ((
    {
        "results": 1,
        "paging": {
            "current": 1,
            "total": 1
        },
        "response": [
            {
                "teams": {
                    "home": {
                        "id": 48,
                        "name": "West Ham",
                        "logo": "https://media-4.api-sports.io/football/teams/48.png",
                        "winner": false
                    },
                    "away": {
                        "id": 50,
                        "name": "Manchester City",
                        "logo": "https://media-4.api-sports.io/football/teams/50.png",
                        "winner": true
                    }
                },
                "goals": {
                    "home": 1,
                    "away": 3
                },
            },
            {
                "teams": {
                    "home": {
                        "id": 50,
                        "name": "Manchester City",
                        "logo": "https://media-4.api-sports.io/football/teams/50.png",
                        "winner": true
                    },
                    "away": {
                        "id": 36,
                        "name": "Fulham",
                        "logo": "https://media-4.api-sports.io/football/teams/36.png",
                        "winner": false
                    }
                },
                "goals": {
                    "home": 5,
                    "away": 1
                },
                
            },
            {
                "teams": {
                    "home": {
                        "id": 62,
                        "name": "Sheffield Utd",
                        "logo": "https://media-4.api-sports.io/football/teams/62.png",
                        "winner": false
                    },
                    "away": {
                        "id": 50,
                        "name": "Manchester City",
                        "logo": "https://media-4.api-sports.io/football/teams/50.png",
                        "winner": true
                    }
                },
                "goals": {
                    "home": 1,
                    "away": 2
                },
            },
            {
                "teams": {
                    "home": {
                        "id": 50,
                        "name": "Manchester City",
                        "logo": "https://media-4.api-sports.io/football/teams/50.png",
                        "winner": true
                    },
                    "away": {
                        "id": 34,
                        "name": "Newcastle",
                        "logo": "https://media-4.api-sports.io/football/teams/34.png",
                        "winner": false
                    }
                },
                "goals": {
                    "home": 1,
                    "away": 0
                },
            },
            {
                "teams": {
                    "home": {
                        "id": 44,
                        "name": "Burnley",
                        "logo": "https://media-4.api-sports.io/football/teams/44.png",
                        "winner": false
                    },
                    "away": {
                        "id": 50,
                        "name": "Manchester City",
                        "logo": "https://media-4.api-sports.io/football/teams/50.png",
                        "winner": true
                    }
                },
                "goals": {
                    "home": 0,
                    "away": 3
                },
            }
        ]
        
    }
));
