const getData = (req, res) => {
    const { } = req.body;

    const response = [
        {
            "id": 45,
            "createdAt": "2021-03-01T23:34:44.480Z",
            "updatedAt": "2021-07-30T13:19:10.480Z",
            "externalId": "1236",
            "name": "PARIS PORTAL LA DEHESA 2",
            "identificationCode": "83274300-3",
            "email": "nathalie.lopez@paris.cl",
            "phoneNumber": "600 400 6400",
            "enable": true,
            "address": "Av. La Dehesa 1445",
            "latitude": "-34.35736",
            "longitude": "-80.51526",
            "landmark": "",
            "logo": null,
            "postalCode": "7690130",
            "subAdminZone3Id": null,
            "identificationType": "CL_ID",
            "isCd": false,
            "pickupPointName": "Paris Portal La Dehesa - Acceso Personal Same Day",
            "knownSourceType": {
                "id": 1,
                "createdAt": "2021-03-01T23:34:39.059Z",
                "updatedAt": "2021-03-01T23:34:39.059Z",
                "name": "Cencosud Store",
                "enable": true
            },
            "retailChain": {
                "id": 2,
                "createdAt": "2021-03-01T23:34:37.879Z",
                "updatedAt": "2021-03-01T23:34:37.879Z",
                "name": "Paris",
                "enable": true,
                "businessUnitId": 3,
                "countryId": 1,
                "code": "PARIS_CL"
            },
            "subAdminZone2Id": {
                "id": 272,
                "code": "13115",
                "name": "Lo Barnechea",
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
                            "createdAt": "2021-03-01T23:34:35.972Z",
                            "updatedAt": "2021-03-01T23:34:35.972Z",
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
                "createdAt": "2021-03-01T23:34:35.972Z",
                "updatedAt": "2021-03-01T23:34:35.972Z",
                "name": "Chile",
                "currency": "Pesos",
                "currencySymbol": "$",
                "code": "CL",
                "enable": true
            },
            "adminZoneId": null,
            "subAdminZone1Id": null
        },
        {
            "id": 44,
            "createdAt": "2021-03-01T23:34:44.480Z",
            "updatedAt": "2021-07-30T13:19:10.480Z",
            "externalId": "123",
            "name": "PARIS PORTAL LA DEHESA",
            "identificationCode": "83274300-3",
            "email": "nathalie.lopez@paris.cl",
            "phoneNumber": "600 400 6400",
            "enable": true,
            "address": "Av. La Dehesa 1445",
            "latitude": "-33.35736",
            "longitude": "-70.51526",
            "landmark": "",
            "logo": null,
            "postalCode": "7690130",
            "subAdminZone3Id": null,
            "identificationType": "CL_ID",
            "isCd": false,
            "pickupPointName": "Paris Portal La Dehesa - Acceso Personal Same Day",
            "knownSourceType": {
                "id": 1,
                "createdAt": "2021-03-01T23:34:39.059Z",
                "updatedAt": "2021-03-01T23:34:39.059Z",
                "name": "Cencosud Store",
                "enable": true
            },
            "retailChain": {
                "id": 2,
                "createdAt": "2021-03-01T23:34:37.879Z",
                "updatedAt": "2021-03-01T23:34:37.879Z",
                "name": "Paris",
                "enable": true,
                "businessUnitId": 3,
                "countryId": 1,
                "code": "PARIS_CL"
            },
            "subAdminZone2Id": {
                "id": 272,
                "code": "13115",
                "name": "Lo Barnechea",
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
                            "createdAt": "2021-03-01T23:34:35.972Z",
                            "updatedAt": "2021-03-01T23:34:35.972Z",
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
                "createdAt": "2021-03-01T23:34:35.972Z",
                "updatedAt": "2021-03-01T23:34:35.972Z",
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
