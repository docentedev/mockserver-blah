const getData = (req, res) => {
    let response = {
        "packages": [
            {
                "dispatchOrderId": 12345,
                "packId": 67890,
                "etaDate": 1678932000,
                "etaEndDate": 1678935600,
                "creationDate": 1678928400,
                "lpn": "LPN123",
                "gddNumber": "GDD456",
                "tracking": "TRACK789",
                "externalOrder": "EXT123",
                "transportOrder": "TRANSPORT456",
                "labelImgUrl": "https://example.com/labelimg.jpg",
                "courier": {
                    "id": 54321,
                    "name": "Example Courier",
                    "code": "COUR123",
                    "dni": "123456789",
                    "phoneNumber": "987654321",
                    "enable": true,
                    "countryId": 1,
                    "type": {
                        "id": 1,
                        "name": "Express"
                    }
                },
                "bigTicket": {
                    "bigTicket": true,
                    "splitLabel": false,
                    "totalComplements": 2,
                    "numberComplement": 1
                },
                "status": {
                    "code": "STATUS123",
                    "description": "In Transit"
                },
                "subStatus": {
                    "code": "SUBSTATUS456",
                    "description": "Pending"
                },
                "measures": {
                    "height": 20,
                    "length": 30,
                    "width": 15,
                    "weight": 5
                },
                "ownerKnownSource": {
                    "id": 987,
                    "externalId": "OWNER123",
                    "name": "John Doe",
                    "enable": true,
                    "email": "john@example.com",
                    "identification": {
                        "type": "ID",
                        "value": "123456789"
                    },
                    "phoneNumber": "555-1234",
                    "address": {
                        "adminZone": {
                            "code": "AZ123",
                            "name": "Admin Zone"
                        },
                        "country": {
                            "code": "US",
                            "name": "United States"
                        },
                        "street": "123 Main St",
                        "postalCode": "12345",
                        "landmark": "Nearby Park"
                    },
                    "knownSourceType": {
                        "id": 1,
                        "name": "Online Store",
                        "enable": true
                    },
                    "retailChain": {
                        "businessUnitId": 123,
                        "countryId": 1,
                        "code": "CHAIN456_CL",
                        "enable": true,
                        "id": 456,
                        "name": "Retail Chain"
                    }
                },
                "externalSystem": {
                    "id": 789,
                    "name": "External System",
                    "description": "An external system",
                    "type": "Type123",
                    "groupCode": "Group456",
                    "enable": true
                },
                "cageId": 789,
                "client": {
                    "identificationCode": "CLIENT123",
                    "name": "Client Name",
                    "email": "client@example.com",
                    "phoneNumber": "555-5678",
                    "address": "456 Client St",
                    "identificationType": "Passport"
                },
                "vehicle": {
                    "id": 234,
                    "name": "Delivery Van",
                    "enable": true,
                    "licencePlate": "ABC123",
                    "vehicleTypeId": 1,
                    "courierId": 54321
                }
            }
        ],
        "pagination": {
            "totalPages": 5,
            "totalElements": 25,
            "page": 1,
            "pageSize": 5,
            "numberOfElements": 5,
            "isLast": false,
            "isFirst": true
        }
    };
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
