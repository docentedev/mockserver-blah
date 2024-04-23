const getData = (req, res) => {
    let response = [
        {
            "id": 1,
            "name": "Boosmap Chile",
            "country": {
                "id": 1,
                "name": "Chile",
                "code": "CL"
            }
        },
        {
            "id": 2,
            "name": "Appelt",
            "country": {
                "id": 1,
                "name": "Chile",
                "code": "CL"
            }
        },
        {
            "id": 3,
            "name": "Claudio Moraga",
            "country": {
                "id": 1,
                "name": "Chile",
                "code": "CL"
            }
        },
        {
            "id": 4,
            "name": "Contardo",
            "country": {
                "id": 1,
                "name": "Chile",
                "code": "CL"
            }
        },
        {
            "id": 5,
            "name": "DSL",
            "country": {
                "id": 1,
                "name": "Chile",
                "code": "CL"
            }
        },
        {
            "id": 6,
            "name": "Foxer",
            "country": {
                "id": 1,
                "name": "Chile",
                "code": "CL"
            }
        },
        {
            "id": 7,
            "name": "Karri",
            "country": {
                "id": 1,
                "name": "Chile",
                "code": "CL"
            }
        },
        {
            "id": 8,
            "name": "Touch Chile",
            "country": {
                "id": 1,
                "name": "Chile",
                "code": "CL"
            }
        },
        {
            "id": 9,
            "name": "Transdany",
            "country": {
                "id": 1,
                "name": "Chile",
                "code": "CL"
            }
        },
        {
            "id": 10,
            "name": "Transportes FE",
            "country": {
                "id": 1,
                "name": "Chile",
                "code": "CL"
            }
        },
        {
            "id": 11,
            "name": "Uber direct",
            "country": {
                "id": 1,
                "name": "Chile",
                "code": "CL"
            }
        },
        {
            "id": 12,
            "name": "Windgroup Chile",
            "country": {
                "id": 1,
                "name": "Chile",
                "code": "CL"
            }
        },
        {
            "id": 13,
            "name": "Zubale",
            "country": {
                "id": 1,
                "name": "Chile",
                "code": "CL"
            }
        },
        {
            "id": 14,
            "name": "Turismo Dany",
            "country": {
                "id": 1,
                "name": "Chile",
                "code": "CL"
            }
        },
        {
            "id": 15,
            "name": "Transporte Rojas",
            "country": {
                "id": 1,
                "name": "Chile",
                "code": "CL"
            }
        },
        {
            "id": 16,
            "name": "Transortes DSL",
            "country": {
                "id": 1,
                "name": "Chile",
                "code": "CL"
            }
        },
        {
            "id": 17,
            "name": "Transportes Campillay",
            "country": {
                "id": 1,
                "name": "Chile",
                "code": "CL"
            }
        },
        {
            "id": 18,
            "name": "Kowski Chile",
            "country": {
                "id": 1,
                "name": "Chile",
                "code": "CL"
            }
        },
        {
            "id": 19,
            "name": "Transecom Chile",
            "country": {
                "id": 1,
                "name": "Chile",
                "code": "CL"
            }
        },
        {
            "id": 20,
            "name": "Transportes DNG",
            "country": {
                "id": 1,
                "name": "Chile",
                "code": "CL"
            }
        },
        {
            "id": 21,
            "name": "Tabilo",
            "country": {
                "id": 1,
                "name": "Chile",
                "code": "CL"
            }
        },
        {
            "id": 22,
            "name": "TFE",
            "country": {
                "id": 1,
                "name": "Chile",
                "code": "CL"
            }
        },
        {
            "id": 23,
            "name": "Rappi Cargo",
            "country": {
                "id": 1,
                "name": "Chile",
                "code": "CL"
            }
        },
        {
            "id": 24,
            "name": "Kowski Peru",
            "country": {
                "id": 5,
                "name": "Peru",
                "code": "PE"
            }
        },
        {
            "id": 25,
            "name": "Touch Peru",
            "country": {
                "id": 5,
                "name": "Peru",
                "code": "PE"
            }
        },
        {
            "id": 26,
            "name": "Transecom Peru",
            "country": {
                "id": 5,
                "name": "Peru",
                "code": "PE"
            }
        },
        {
            "id": 27,
            "name": "Windgroup Peru",
            "country": {
                "id": 5,
                "name": "Peru",
                "code": "PE"
            }
        },
        {
            "id": 28,
            "name": "Zubale Peru",
            "country": {
                "id": 5,
                "name": "Peru",
                "code": "PE"
            }
        },
        {
            "id": 29,
            "name": "Transportes De La Cruz",
            "country": {
                "id": 5,
                "name": "Peru",
                "code": "PE"
            }
        },
        {
            "id": 30,
            "name": "Veloz",
            "country": {
                "id": 5,
                "name": "Peru",
                "code": "PE"
            }
        },
        {
            "id": 31,
            "name": "Boosmap Peru",
            "country": {
                "id": 5,
                "name": "Peru",
                "code": "PE"
            }
        },
        {
            "id": 32,
            "name": "Taxi Monterrico",
            "country": {
                "id": 5,
                "name": "Peru",
                "code": "PE"
            }
        },
        {
            "id": 33,
            "name": "Touch Colombia",
            "country": {
                "id": 4,
                "name": "Colombia",
                "code": "CO"
            }
        },
        {
            "id": 34,
            "name": "Zubale Colombia",
            "country": {
                "id": 4,
                "name": "Colombia",
                "code": "CO"
            }
        },
        {
            "id": 35,
            "name": "Quick Help",
            "country": {
                "id": 4,
                "name": "Colombia",
                "code": "CO"
            }
        },
        {
            "id": 36,
            "name": "Telepostal",
            "country": {
                "id": 4,
                "name": "Colombia",
                "code": "CO"
            }
        }
    ];
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
