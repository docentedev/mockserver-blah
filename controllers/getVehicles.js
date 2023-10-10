const getData = (req, res) => {
    let response = {
        "data": [
            {
                "id": 49,
                "licencePlate": "PPPB16222_111",
                "statusDetail": "This is a test from fl",
                "createdAt": "2023-08-16T21:58:37.572Z",
                "updatedAt": "2023-08-17T00:44:02.620Z",
                "createdBy": "tmsmember_bis",
                "deletedAt": null,
                "driver": null,
                "vehicleType": {
                    "id": 1,
                    "name": "TRUCK"
                },
                "propulsionType": {
                    "id": 1,
                    "name": "DIESEL"
                },
                "country": {
                    "id": 1,
                    "name": "Chile",
                    "code": "CL"
                },
                "status": {
                    "id": 2,
                    "name": "AVAILABLE"
                }
            },
            {
                "id": 51,
                "licencePlate": "PPPB162",
                "statusDetail": "This is a test from daas-bff",
                "createdAt": "2023-08-16T23:01:10.258Z",
                "updatedAt": "2023-08-16T23:01:10.258Z",
                "createdBy": "tmsmember",
                "deletedAt": null,
                "driver": null,
                "vehicleType": {
                    "id": 1,
                    "name": "TRUCK"
                },
                "propulsionType": {
                    "id": 1,
                    "name": "DIESEL"
                },
                "country": {
                    "id": 1,
                    "name": "Chile",
                    "code": "CL"
                },
                "status": {
                    "id": 2,
                    "name": "AVAILABLE"
                }
            },
            {
                "id": 25,
                "licencePlate": "PPPB16",
                "statusDetail": "This is a test",
                "createdAt": "2023-08-11T19:41:36.199Z",
                "updatedAt": "2023-08-11T19:41:36.199Z",
                "createdBy": "tmsmember",
                "deletedAt": null,
                "driver": null,
                "vehicleType": {
                    "id": 1,
                    "name": "TRUCK"
                },
                "propulsionType": {
                    "id": 1,
                    "name": "DIESEL"
                },
                "country": {
                    "id": 5,
                    "name": "Argentina",
                    "code": "AR"
                },
                "status": {
                    "id": 2,
                    "name": "AVAILABLE"
                }
            },
            {
                "id": 52,
                "licencePlate": "PPPB16222",
                "statusDetail": "This is a test from daas-bff",
                "createdAt": "2023-08-16T23:55:05.327Z",
                "updatedAt": "2023-08-17T00:26:38.788Z",
                "createdBy": "tmsmember_bis",
                "deletedAt": null,
                "driver": null,
                "vehicleType": {
                    "id": 1,
                    "name": "TRUCK"
                },
                "propulsionType": {
                    "id": 1,
                    "name": "DIESEL"
                },
                "country": {
                    "id": 1,
                    "name": "Chile",
                    "code": "CL"
                },
                "status": {
                    "id": 2,
                    "name": "AVAILABLE"
                }
            },
            {
                "id": 53,
                "licencePlate": "PPPB19",
                "statusDetail": "This is a test",
                "createdAt": "2023-08-17T03:00:39.574Z",
                "updatedAt": "2023-08-17T03:00:39.574Z",
                "createdBy": "tmsmember",
                "deletedAt": null,
                "driver": null,
                "vehicleType": {
                    "id": 1,
                    "name": "TRUCK"
                },
                "propulsionType": {
                    "id": 1,
                    "name": "DIESEL"
                },
                "country": {
                    "id": 5,
                    "name": "Argentina",
                    "code": "AR"
                },
                "status": {
                    "id": 2,
                    "name": "AVAILABLE"
                }
            },
            {
                "id": 27,
                "licencePlate": "PPPB16",
                "statusDetail": "This is a test from daas-bff",
                "createdAt": "2023-08-11T21:21:19.260Z",
                "updatedAt": "2023-08-11T21:21:19.260Z",
                "createdBy": "tmsmember",
                "deletedAt": null,
                "driver": null,
                "vehicleType": {
                    "id": 1,
                    "name": "TRUCK"
                },
                "propulsionType": {
                    "id": 1,
                    "name": "DIESEL"
                },
                "country": {
                    "id": 1,
                    "name": "Chile",
                    "code": "CL"
                },
                "status": {
                    "id": 2,
                    "name": "AVAILABLE"
                }
            },
            {
                "id": 84,
                "licencePlate": "PPPB19111",
                "statusDetail": null,
                "createdAt": "2023-08-17T20:44:11.707Z",
                "updatedAt": "2023-08-23T03:38:01.314Z",
                "createdBy": "daniel.jara@cencosud.cl",
                "deletedAt": null,
                "driver": {
                    "id": "65dfc6aa-f896-447b-80a9-f238f002f1be",
                    "name": "Test4",
                    "lastName": "TMSsds",
                    "phone": "+56911223344",
                    "email": "daas-bff@test.cl",
                    "provider": {
                        "id": 8,
                        "name": "Touch Chile"
                    }
                },
                "vehicleType": {
                    "id": 1,
                    "name": "TRUCK"
                },
                "propulsionType": {
                    "id": 1,
                    "name": "DIESEL"
                },
                "country": {
                    "id": 3,
                    "name": "Brasil",
                    "code": "BR"
                },
                "status": {
                    "id": 2,
                    "name": "AVAILABLE"
                }
            },
            {
                "id": 28,
                "licencePlate": "PPPB167",
                "statusDetail": "This is a test from daas-bff",
                "createdAt": "2023-08-11T21:25:24.565Z",
                "updatedAt": "2023-08-11T21:25:24.565Z",
                "createdBy": "tmsmember",
                "deletedAt": null,
                "driver": null,
                "vehicleType": {
                    "id": 1,
                    "name": "TRUCK"
                },
                "propulsionType": {
                    "id": 1,
                    "name": "DIESEL"
                },
                "country": {
                    "id": 1,
                    "name": "Chile",
                    "code": "CL"
                },
                "status": {
                    "id": 2,
                    "name": "AVAILABLE"
                }
            },
            {
                "id": 66,
                "licencePlate": "PPPB12",
                "statusDetail": null,
                "createdAt": "2023-08-17T04:30:59.994Z",
                "updatedAt": "2023-08-17T04:30:59.994Z",
                "createdBy": "tmsmember",
                "deletedAt": null,
                "driver": null,
                "vehicleType": {
                    "id": 1,
                    "name": "TRUCK"
                },
                "propulsionType": {
                    "id": 1,
                    "name": "DIESEL"
                },
                "country": {
                    "id": 1,
                    "name": "Chile",
                    "code": "CL"
                },
                "status": {
                    "id": 2,
                    "name": "AVAILABLE"
                }
            },
            {
                "id": 72,
                "licencePlate": "PPPB19",
                "statusDetail": null,
                "createdAt": "2023-08-17T18:06:57.379Z",
                "updatedAt": "2023-08-17T18:06:57.379Z",
                "createdBy": "tmsmember",
                "deletedAt": null,
                "driver": null,
                "vehicleType": {
                    "id": 1,
                    "name": "TRUCK"
                },
                "propulsionType": {
                    "id": 1,
                    "name": "DIESEL"
                },
                "country": {
                    "id": 1,
                    "name": "Chile",
                    "code": "CL"
                },
                "status": {
                    "id": 2,
                    "name": "AVAILABLE"
                }
            }
        ],
        "meta": {
            isFirst: true,
            numberOfElements: 10,
            page: 1,
            isLast: true,
            pageSize: 10,
            totalElements: 10,
            totalPages: 1,
        }
    };
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
