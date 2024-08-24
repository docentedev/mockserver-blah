/**
 * @typedef Driver
 * @property {string} id
 * @property {string} fullName
 * @property {number} providerId
 * @property {string} updatedAt 
 * @property {string} deletedAt
 * @property {Country} country
 */

/**
 * @typedef Response
 * @property {Driver[]} data
 * @property {Meta} meta
 */

/**
 * @returns {Response}
 */
const getData = (req, res) => {
    /**
     * @type {Response}
     */
    let response = {
        "data": [
            {
                "id": "198cdac6-8272-4960-99b7-33d211d73c6b",
                "fullName": "Mauricio Cucco",
                "providerId": 44,
                "updatedAt": "2024-02-20T03:07:33.192Z",
                "deletedAt": null,
                "country": {
                    "id": 5,
                    "name": "Argentina",
                    "code": "AR"
                },
                "transitoryOrders": [
                    {
                        "id": 114964,
                        "externalSystemOrderId": "v509829974MAURITEST-02"
                    }
                ],
                "vehicle": {
                    "id": 3354,
                    "licencePlate": "KFWZ47",
                    "vehicleType": {
                        "id": 1,
                        "name": "TRUCK"
                    }
                },
                "provider": {
                    "id": 44,
                    "name": "Baum"
                }
            },
            {
                "id": "441d08a5-6d3d-4f29-8a8e-e9786358b60e",
                "fullName": "Jose PalmaGuevara",
                "providerId": 1,
                "updatedAt": "2024-04-24T23:57:17.695Z",
                "deletedAt": null,
                "country": {
                    "id": 1,
                    "name": "Chile",
                    "code": "CL"
                },
                "transitoryOrders": [],
                "vehicle": {
                    "id": 544,
                    "licencePlate": "RTHW75",
                    "vehicleType": {
                        "id": 2,
                        "name": "VAN"
                    }
                },
                "provider": {
                    "id": 1,
                    "name": "Boosmap Chile"
                }
            },
            {
                "id": "8500e4a0-f998-438d-9faf-22955c69c2de",
                "fullName": "Silvia Dominguez",
                "providerId": 1,
                "updatedAt": "2024-04-24T23:24:00.176Z",
                "deletedAt": null,
                "country": {
                    "id": 1,
                    "name": "Chile",
                    "code": "CL"
                },
                "transitoryOrders": [],
                "vehicle": {
                    "id": 639,
                    "licencePlate": "LVGT55",
                    "vehicleType": {
                        "id": 4,
                        "name": "CAR"
                    }
                },
                "provider": {
                    "id": 1,
                    "name": "Boosmap Chile"
                }
            },
            {
                "id": "cfc95ff9-10c5-4ae6-81de-779d4b80e442",
                "fullName": "Juana González",
                "providerId": 1,
                "updatedAt": "2024-04-24T22:59:39.091Z",
                "deletedAt": null,
                "country": {
                    "id": 1,
                    "name": "Chile",
                    "code": "CL"
                },
                "transitoryOrders": [],
                "vehicle": {
                    "id": 869,
                    "licencePlate": "DJGK-82",
                    "vehicleType": {
                        "id": 4,
                        "name": "CAR"
                    }
                },
                "provider": {
                    "id": 1,
                    "name": "Boosmap Chile"
                }
            },
            {
                "id": "eb917f97-8122-4b77-a516-36ac6f257994",
                "fullName": "Aquiles Soto",
                "providerId": 1,
                "updatedAt": "2024-03-26T22:14:42.781Z",
                "deletedAt": null,
                "country": {
                    "id": 1,
                    "name": "Chile",
                    "code": "CL"
                },
                "transitoryOrders": [],
                "vehicle": {
                    "id": 1047,
                    "licencePlate": "RVWX69",
                    "vehicleType": {
                        "id": 4,
                        "name": "CAR"
                    }
                },
                "provider": {
                    "id": 1,
                    "name": "Boosmap Chile"
                }
            },
            {
                "id": "aa7c1384-2a8d-4f2e-b817-e04dca6b18ff",
                "fullName": "Walter Vasquez",
                "providerId": 1,
                "updatedAt": "2024-02-19T01:33:46.729Z",
                "deletedAt": null,
                "country": {
                    "id": 1,
                    "name": "Chile",
                    "code": "CL"
                },
                "transitoryOrders": [],
                "vehicle": {
                    "id": 296,
                    "licencePlate": "RRYK-15",
                    "vehicleType": {
                        "id": 4,
                        "name": "CAR"
                    }
                },
                "provider": {
                    "id": 1,
                    "name": "Boosmap Chile"
                }
            },
            {
                "id": "117bf798-9d09-4e6e-a39d-a1fd2d0eb714",
                "fullName": "Miguel Ruiz",
                "providerId": 1,
                "updatedAt": "2024-01-26T03:37:12.951Z",
                "deletedAt": null,
                "country": {
                    "id": 1,
                    "name": "Chile",
                    "code": "CL"
                },
                "transitoryOrders": [],
                "vehicle": {
                    "id": 241,
                    "licencePlate": "RWW57",
                    "vehicleType": {
                        "id": 7,
                        "name": "MOTORCYCLE"
                    }
                },
                "provider": {
                    "id": 1,
                    "name": "Boosmap Chile"
                }
            }
        ],
        "meta": {
            "isFirst": true,
            "isLast": true,
            "numberOfElements": 6,
            "page": 1,
            "pageSize": 10,
            "totalElements": 6,
            "totalPages": 1
        }
    };
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
