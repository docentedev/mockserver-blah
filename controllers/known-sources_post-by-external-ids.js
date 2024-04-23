const getData = (req, res) => {
    let response = [
        {
            "id": 868,
            "createdAt": "2023-05-25T13:24:57.085Z",
            "updatedAt": "2023-05-25T13:24:57.085Z",
            "externalId": "jumboargentinaj5204lomas",
            "name": "JUMBO LOMAS",
            "identificationCode": "",
            "email": "",
            "phoneNumber": "",
            "enable": true,
            "address": "Gral. Frías",
            "latitude": "-34.792392540000000",
            "longitude": "-58.416944580000000",
            "landmark": "",
            "logo": "",
            "postalCode": "B1836",
            "subAdminZone3Id": null,
            "identificationType": "ARG_ID",
            "isCd": false,
            "pickupPointName": "",
            "knownSourceType": {
                "id": 1,
                "createdAt": "2021-03-25T16:48:32.498Z",
                "updatedAt": "2021-03-25T16:48:32.498Z",
                "name": "Cencosud Store",
                "enable": true
            },
            "retailChain": {
                "id": 17,
                "createdAt": "2023-05-22T15:39:30.202Z",
                "updatedAt": "2023-05-22T15:39:30.202Z",
                "name": "Jumbo (Argentina)",
                "enable": true,
                "businessUnitId": 4,
                "countryId": 2,
                "code": "JUMBO_AR"
            },
            "subAdminZone2Id": {
                "id": 11643,
                "code": "06490010002",
                "name": "Llavallol",
                "enable": true,
                "subAdmin1": {
                    "id": 131,
                    "code": "6490",
                    "name": "Lomas de Zamora",
                    "enable": true,
                    "adminZoneId": {
                        "id": 17,
                        "code": "06",
                        "name": "Buenos Aires",
                        "enable": true,
                        "country": {
                            "id": 2,
                            "createdAt": "2021-12-10T07:10:24.789Z",
                            "updatedAt": "2021-12-10T07:10:24.789Z",
                            "name": "Argentina",
                            "currency": "Peso argentino",
                            "currencySymbol": "$",
                            "code": "AR",
                            "enable": true
                        }
                    }
                }
            },
            "country": {
                "id": 2,
                "createdAt": "2021-12-10T07:10:24.789Z",
                "updatedAt": "2021-12-10T07:10:24.789Z",
                "name": "Argentina",
                "currency": "Peso argentino",
                "currencySymbol": "$",
                "code": "AR",
                "enable": true
            },
            "adminZoneId": null,
            "subAdminZone1Id": null
        },
        {
            "id": 704,
            "createdAt": "2022-08-31T23:17:08.028Z",
            "updatedAt": "2022-08-31T23:17:08.028Z",
            "externalId": "O624",
            "name": "SPID35 El Alba",
            "identificationCode": "81.201.000-K",
            "email": "LSTCL_G500_SPID_EL_ALBA@cencosud.cl",
            "phoneNumber": "+56936529363",
            "enable": true,
            "address": "CAMINO EL ALBA 11969",
            "latitude": "-33.401915498145160",
            "longitude": "-70.514448387489740",
            "landmark": "",
            "logo": "",
            "postalCode": "7550000",
            "subAdminZone3Id": null,
            "identificationType": "",
            "isCd": false,
            "pickupPointName": "",
            "knownSourceType": {
                "id": 1,
                "createdAt": "2021-03-25T16:48:32.498Z",
                "updatedAt": "2021-03-25T16:48:32.498Z",
                "name": "Cencosud Store",
                "enable": true
            },
            "retailChain": {
                "id": 9,
                "createdAt": "2021-10-06T15:51:39.677Z",
                "updatedAt": "2023-01-06T15:51:39.677Z",
                "name": "Spid (Chile)",
                "enable": true,
                "businessUnitId": 9,
                "countryId": 1,
                "code": "SPID_CL"
            },
            "subAdminZone2Id": {
                "id": 271,
                "code": "13114",
                "name": "Las Condes",
                "enable": true,
                "subAdmin1": {
                    "id": 44,
                    "code": "131",
                    "name": "Santiago",
                    "enable": true,
                    "adminZoneId": {
                        "id": 13,
                        "code": "13",
                        "name": "Metropolitana de Santiago",
                        "enable": true,
                        "country": {
                            "id": 1,
                            "createdAt": "2021-03-25T16:48:29.415Z",
                            "updatedAt": "2021-03-25T16:48:29.415Z",
                            "name": "Chile",
                            "currency": "Pesos",
                            "currencySymbol": "$",
                            "code": "CL",
                            "enable": true
                        }
                    }
                }
            },
            "country": {
                "id": 1,
                "createdAt": "2021-03-25T16:48:29.415Z",
                "updatedAt": "2021-03-25T16:48:29.415Z",
                "name": "Chile",
                "currency": "Pesos",
                "currencySymbol": "$",
                "code": "CL",
                "enable": true
            },
            "adminZoneId": null,
            "subAdminZone1Id": null
        }
    ];
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
