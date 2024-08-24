const getData = (req, res) => {
    const {
        licencePlate,
        vehicleTypeId,
        propulsionTypeId,
        countryCode
    } = req.body;

    let response = {
        "dispatches": [
            {
                "id": 24130316,
                "etaDate": 1724425200000,
                "etaEndDate": 1724432459000,
                "pickupDate": 1724394638878,
                "externalSystemOrderId": "v140238073jmch-01",
                "orderType": "72",
                "size": null,
                "height": null,
                "width": null,
                "length": null,
                "weight": null,
                "externalSystem": {
                    "id": 18,
                    "name": "Sales Order",
                    "description": "Service Enterprise System to Manage Sales Order",
                    "type": "INTERNAL",
                    "groupCode": "CENCOMMERCE",
                    "enable": true
                },
                "dispatchType": {
                    "id": 24,
                    "name": "Despacho desde Tienda On Demand",
                    "code": "SFS_ON_DEMAND",
                    "enable": true,
                    "shippingEarly": false
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 24673571,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "name": "JUMBO ANTOFAGASTA",
                    "email": "",
                    "phoneNumber": "55-2694400",
                    "address": {
                        "street": "Angamos 745",
                        "postalCode": "1270236",
                        "landmark": "",
                        "location": {
                            "latitude": -23.66751128786648,
                            "longitude": -70.40503413160576
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "02",
                            "name": "Antofagasta"
                        },
                        "subAdminZone1": {
                            "code": "021",
                            "name": "Antofagasta"
                        },
                        "subAdminZone2": {
                            "code": "02101",
                            "name": "Antofagasta"
                        }
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 91,
                        "externalId": "J534",
                        "name": "JUMBO ANTOFAGASTA",
                        "enable": true,
                        "identification": {
                            "type": "CL_ID",
                            "value": "81.201.000-K"
                        },
                        "email": "",
                        "phoneNumber": "55-2694400",
                        "address": {
                            "street": "Angamos 745",
                            "postalCode": "1270236",
                            "landmark": "",
                            "location": {
                                "latitude": -23.66751128786648,
                                "longitude": -70.40503413160576
                            },
                            "country": {
                                "code": "",
                                "name": ""
                            },
                            "adminZone": {
                                "code": "",
                                "name": ""
                            },
                            "subAdminZone1": {
                                "code": "",
                                "name": ""
                            },
                            "subAdminZone2": {
                                "code": "",
                                "name": ""
                            }
                        },
                        "knownSourceType": {
                            "id": 1,
                            "name": "Cencosud Store",
                            "enable": true
                        },
                        "retailChain": {
                            "id": 1,
                            "name": "Jumbo",
                            "enable": true,
                            "businessUnitId": 1,
                            "countryId": 1,
                            "code": "JUMBO_CL"
                        },
                        "ruleName": "CL_JUMBO_HOME_DELIVERY"
                    },
                    "type": null,
                    "ruleName": "CL_JUMBO_HOME_DELIVERY"
                },
                "destination": {
                    "id": 24378586,
                    "name": "Tania Matos",
                    "email": "tmatos.prev@gmail.com",
                    "phoneNumber": "989697619",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Avenida Bonilla 9421, casa 9421",
                        "postalCode": "Antofagasta",
                        "landmark": "Oriones",
                        "location": {
                            "latitude": -23.578225,
                            "longitude": -70.379634
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "02",
                            "name": "Antofagasta"
                        },
                        "subAdminZone1": {
                            "code": "021",
                            "name": "Antofagasta"
                        },
                        "subAdminZone2": {
                            "code": "02101",
                            "name": "Antofagasta"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "233798657"
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": true
                },
                "ownerKnownSource": {
                    "id": 91,
                    "externalId": "J534",
                    "name": "JUMBO ANTOFAGASTA",
                    "enable": true,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "email": "",
                    "phoneNumber": "55-2694400",
                    "address": {
                        "street": "Angamos 745",
                        "postalCode": "1270236",
                        "landmark": "",
                        "location": {
                            "latitude": -23.66751128786648,
                            "longitude": -70.40503413160576
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "",
                            "name": ""
                        },
                        "subAdminZone1": {
                            "code": "",
                            "name": ""
                        },
                        "subAdminZone2": {
                            "code": "",
                            "name": ""
                        }
                    },
                    "knownSourceType": {
                        "id": 1,
                        "name": "Cencosud Store",
                        "enable": true
                    },
                    "retailChain": {
                        "id": 1,
                        "name": "Jumbo",
                        "enable": true,
                        "businessUnitId": 1,
                        "countryId": 1,
                        "code": "JUMBO_CL"
                    },
                    "ruleName": "CL_JUMBO_HOME_DELIVERY"
                },
                "packages": [
                    {
                        "id": 24165392,
                        "lpn": "v140238073jmch-01",
                        "tracking": "v140238073jmch-01",
                        "gddNumber": "v140238073jmch-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/August/23/v140238073jmch-01.pdf",
                        "courierPackageId": "v140238073jmch-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1724425200000,
                    "max": 1724432459000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "v140238073jmch-01"
                ],
                "trackings": [
                    "v140238073jmch-01"
                ],
                "wasCreatedInCourier": false,
                "createdAt": 1724394638879,
                "updatedAt": 1724394649073
            },
            {
                "id": 24130315,
                "etaDate": 1724425200000,
                "etaEndDate": 1724432459000,
                "pickupDate": 1724394630179,
                "externalSystemOrderId": "v140238070jmch-01",
                "orderType": "72",
                "size": null,
                "height": null,
                "width": null,
                "length": null,
                "weight": null,
                "externalSystem": {
                    "id": 18,
                    "name": "Sales Order",
                    "description": "Service Enterprise System to Manage Sales Order",
                    "type": "INTERNAL",
                    "groupCode": "CENCOMMERCE",
                    "enable": true
                },
                "dispatchType": {
                    "id": 24,
                    "name": "Despacho desde Tienda On Demand",
                    "code": "SFS_ON_DEMAND",
                    "enable": true,
                    "shippingEarly": false
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 24673570,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "name": "DARKSTORE LA DEHESA",
                    "email": "",
                    "phoneNumber": "2-8760400",
                    "address": {
                        "street": "Av. La Dehesa 1445",
                        "postalCode": "8320000",
                        "landmark": "",
                        "location": {
                            "latitude": -33.35710050784878,
                            "longitude": -70.51448828941555
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "13",
                            "name": "Metropolitana de Santiago"
                        },
                        "subAdminZone1": {
                            "code": "131",
                            "name": "Santiago"
                        },
                        "subAdminZone2": {
                            "code": "13115",
                            "name": "Lo Barnechea"
                        }
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 1216,
                        "externalId": "J414",
                        "name": "DARKSTORE LA DEHESA",
                        "enable": true,
                        "identification": {
                            "type": "CL_ID",
                            "value": "81.201.000-K"
                        },
                        "email": "",
                        "phoneNumber": "2-8760400",
                        "address": {
                            "street": "Av. La Dehesa 1445",
                            "postalCode": "8320000",
                            "landmark": "",
                            "location": {
                                "latitude": -33.35710050784878,
                                "longitude": -70.51448828941555
                            },
                            "country": {
                                "code": "",
                                "name": ""
                            },
                            "adminZone": {
                                "code": "",
                                "name": ""
                            },
                            "subAdminZone1": {
                                "code": "",
                                "name": ""
                            },
                            "subAdminZone2": {
                                "code": "",
                                "name": ""
                            }
                        },
                        "knownSourceType": {
                            "id": 1,
                            "name": "Cencosud Store",
                            "enable": true
                        },
                        "retailChain": {
                            "id": 1,
                            "name": "Jumbo",
                            "enable": true,
                            "businessUnitId": 1,
                            "countryId": 1,
                            "code": "JUMBO_CL"
                        },
                        "ruleName": "CL_JUMBO_HOME_DELIVERY"
                    },
                    "type": null,
                    "ruleName": "CL_JUMBO_HOME_DELIVERY"
                },
                "destination": {
                    "id": 24378585,
                    "name": "claudia prohens",
                    "email": "claudiaprohens@hotmail.com",
                    "phoneNumber": "+56992340792",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Camino del Pregonero 2762, Casa",
                        "postalCode": "Santiago",
                        "landmark": "portón negro",
                        "location": {
                            "latitude": -33.3431273,
                            "longitude": -70.5094575
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "13",
                            "name": "Metropolitana de Santiago"
                        },
                        "subAdminZone1": {
                            "code": "131",
                            "name": "Santiago"
                        },
                        "subAdminZone2": {
                            "code": "13115",
                            "name": "Lo Barnechea"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "96673116"
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": true
                },
                "ownerKnownSource": {
                    "id": 1216,
                    "externalId": "J414",
                    "name": "DARKSTORE LA DEHESA",
                    "enable": true,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "email": "",
                    "phoneNumber": "2-8760400",
                    "address": {
                        "street": "Av. La Dehesa 1445",
                        "postalCode": "8320000",
                        "landmark": "",
                        "location": {
                            "latitude": -33.35710050784878,
                            "longitude": -70.51448828941555
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "",
                            "name": ""
                        },
                        "subAdminZone1": {
                            "code": "",
                            "name": ""
                        },
                        "subAdminZone2": {
                            "code": "",
                            "name": ""
                        }
                    },
                    "knownSourceType": {
                        "id": 1,
                        "name": "Cencosud Store",
                        "enable": true
                    },
                    "retailChain": {
                        "id": 1,
                        "name": "Jumbo",
                        "enable": true,
                        "businessUnitId": 1,
                        "countryId": 1,
                        "code": "JUMBO_CL"
                    },
                    "ruleName": "CL_JUMBO_HOME_DELIVERY"
                },
                "packages": [
                    {
                        "id": 24165391,
                        "lpn": "v140238070jmch-01",
                        "tracking": "v140238070jmch-01",
                        "gddNumber": "v140238070jmch-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/August/23/v140238070jmch-01.pdf",
                        "courierPackageId": "v140238070jmch-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1724425200000,
                    "max": 1724432459000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "v140238070jmch-01"
                ],
                "trackings": [
                    "v140238070jmch-01"
                ],
                "wasCreatedInCourier": false,
                "createdAt": 1724394630179,
                "updatedAt": 1724394636761
            },
            {
                "id": 24130314,
                "etaDate": 1724425200000,
                "etaEndDate": 1724461259000,
                "pickupDate": 1724394587269,
                "externalSystemOrderId": "v2470961mofp-01",
                "orderType": "422",
                "size": null,
                "height": null,
                "width": null,
                "length": null,
                "weight": null,
                "externalSystem": {
                    "id": 18,
                    "name": "Sales Order",
                    "description": "Service Enterprise System to Manage Sales Order",
                    "type": "INTERNAL",
                    "groupCode": "CENCOMMERCE",
                    "enable": true
                },
                "dispatchType": {
                    "id": 24,
                    "name": "Despacho desde Tienda On Demand",
                    "code": "SFS_ON_DEMAND",
                    "enable": true,
                    "shippingEarly": false
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 24673569,
                    "identification": {
                        "type": null,
                        "value": "81.201.000-K"
                    },
                    "name": "METRO LA MOLINA",
                    "email": null,
                    "phoneNumber": null,
                    "address": {
                        "street": "Av.La Molina 1068 J.Prado La Molina 1068",
                        "postalCode": null,
                        "landmark": null,
                        "location": {
                            "latitude": -12.069912255138659,
                            "longitude": -76.95782656138893
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "14",
                            "name": "Lima"
                        },
                        "subAdminZone1": {
                            "code": "127",
                            "name": "Lima"
                        },
                        "subAdminZone2": {
                            "code": "140101",
                            "name": "Lima"
                        }
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 1183,
                        "externalId": "metroios001mio",
                        "name": "METRO LA MOLINA",
                        "enable": true,
                        "identification": {
                            "type": null,
                            "value": "81.201.000-K"
                        },
                        "email": null,
                        "phoneNumber": null,
                        "address": {
                            "street": "Av.La Molina 1068 J.Prado La Molina 1068",
                            "postalCode": null,
                            "landmark": null,
                            "location": {
                                "latitude": -12.069912255138659,
                                "longitude": -76.95782656138893
                            },
                            "country": {
                                "code": "",
                                "name": ""
                            },
                            "adminZone": {
                                "code": "",
                                "name": ""
                            },
                            "subAdminZone1": {
                                "code": "",
                                "name": ""
                            },
                            "subAdminZone2": {
                                "code": "",
                                "name": ""
                            }
                        },
                        "knownSourceType": {
                            "id": 1,
                            "name": "Cencosud Store",
                            "enable": true
                        },
                        "retailChain": {
                            "id": 13,
                            "name": "Metro (Perú)",
                            "enable": true,
                            "businessUnitId": 10,
                            "countryId": 5,
                            "code": "METRO_PE"
                        },
                        "ruleName": null
                    },
                    "type": null,
                    "ruleName": null
                },
                "destination": {
                    "id": 24378584,
                    "name": "CECILIA GLORIA CHALCO CARPIO",
                    "email": "chalco.cecilia@gmail.com",
                    "phoneNumber": "+51996028032",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Las Azucenas 106",
                        "postalCode": "150107",
                        "landmark": null,
                        "location": {
                            "latitude": -11.9785772,
                            "longitude": -76.7845174
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "14",
                            "name": "Lima"
                        },
                        "subAdminZone1": {
                            "code": "127",
                            "name": "Lima"
                        },
                        "subAdminZone2": {
                            "code": "Chaclacayo",
                            "name": "Chaclacayo"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "29410862"
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": true
                },
                "ownerKnownSource": {
                    "id": 1183,
                    "externalId": "metroios001mio",
                    "name": "METRO LA MOLINA",
                    "enable": true,
                    "identification": {
                        "type": null,
                        "value": "81.201.000-K"
                    },
                    "email": null,
                    "phoneNumber": null,
                    "address": {
                        "street": "Av.La Molina 1068 J.Prado La Molina 1068",
                        "postalCode": null,
                        "landmark": null,
                        "location": {
                            "latitude": -12.069912255138659,
                            "longitude": -76.95782656138893
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "",
                            "name": ""
                        },
                        "subAdminZone1": {
                            "code": "",
                            "name": ""
                        },
                        "subAdminZone2": {
                            "code": "",
                            "name": ""
                        }
                    },
                    "knownSourceType": {
                        "id": 1,
                        "name": "Cencosud Store",
                        "enable": true
                    },
                    "retailChain": {
                        "id": 13,
                        "name": "Metro (Perú)",
                        "enable": true,
                        "businessUnitId": 10,
                        "countryId": 5,
                        "code": "METRO_PE"
                    },
                    "ruleName": null
                },
                "packages": [
                    {
                        "id": 24165390,
                        "lpn": "v2470961mofp-01",
                        "tracking": "v2470961mofp-01",
                        "gddNumber": "v2470961mofp-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/August/23/v2470961mofp-01.pdf",
                        "courierPackageId": "v2470961mofp-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1724425200000,
                    "max": 1724461259000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "v2470961mofp-01"
                ],
                "trackings": [
                    "v2470961mofp-01"
                ],
                "wasCreatedInCourier": false,
                "createdAt": 1724394587269,
                "updatedAt": 1724394589553
            },
            {
                "id": 24130313,
                "etaDate": 1724418000000,
                "etaEndDate": 1724425259000,
                "pickupDate": 0,
                "externalSystemOrderId": "v53469114sisa-01",
                "orderType": "Despacho a Domicilio",
                "size": null,
                "height": null,
                "width": null,
                "length": null,
                "weight": null,
                "externalSystem": {
                    "id": 18,
                    "name": "Sales Order",
                    "description": "Service Enterprise System to Manage Sales Order",
                    "type": "INTERNAL",
                    "groupCode": "CENCOMMERCE",
                    "enable": true
                },
                "dispatchType": {
                    "id": 24,
                    "name": "Despacho desde Tienda On Demand",
                    "code": "SFS_ON_DEMAND",
                    "enable": true,
                    "shippingEarly": false
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 24673568,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "name": "SANTA ISABEL LOMAS DE SAN ANDRÉS",
                    "email": "",
                    "phoneNumber": "2-3362426",
                    "address": {
                        "street": "Ramón Carrasco 52",
                        "postalCode": "4091085",
                        "landmark": "",
                        "location": {
                            "latitude": -36.7897366547152,
                            "longitude": -73.0604947737267
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "08",
                            "name": "Biobío"
                        },
                        "subAdminZone1": {
                            "code": "081",
                            "name": "Concepción"
                        },
                        "subAdminZone2": {
                            "code": "08101",
                            "name": "Concepción"
                        }
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 158,
                        "externalId": "N783",
                        "name": "SANTA ISABEL LOMAS DE SAN ANDRÉS",
                        "enable": true,
                        "identification": {
                            "type": "CL_ID",
                            "value": "81.201.000-K"
                        },
                        "email": "",
                        "phoneNumber": "2-3362426",
                        "address": {
                            "street": "Ramón Carrasco 52",
                            "postalCode": "4091085",
                            "landmark": "",
                            "location": {
                                "latitude": -36.789736654715185,
                                "longitude": -73.06049477372673
                            },
                            "country": {
                                "code": "",
                                "name": ""
                            },
                            "adminZone": {
                                "code": "",
                                "name": ""
                            },
                            "subAdminZone1": {
                                "code": "",
                                "name": ""
                            },
                            "subAdminZone2": {
                                "code": "",
                                "name": ""
                            }
                        },
                        "knownSourceType": {
                            "id": 1,
                            "name": "Cencosud Store",
                            "enable": true
                        },
                        "retailChain": {
                            "id": 4,
                            "name": "Santa Isabel",
                            "enable": true,
                            "businessUnitId": 1,
                            "countryId": 1,
                            "code": "SISA_CL"
                        },
                        "ruleName": null
                    },
                    "type": null,
                    "ruleName": null
                },
                "destination": {
                    "id": 24378583,
                    "name": "María Luisa Saavedra Ruiz",
                    "email": "mluisasaavedra@gmail.com",
                    "phoneNumber": "+56990044996",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Basilio Urrutia 5073",
                        "postalCode": null,
                        "landmark": null,
                        "location": {
                            "latitude": -36.7569898,
                            "longitude": -73.0874954
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "08",
                            "name": "Biobío"
                        },
                        "subAdminZone1": {
                            "code": "081",
                            "name": "Concepción"
                        },
                        "subAdminZone2": {
                            "code": "08110",
                            "name": "Talcahuano"
                        }
                    },
                    "identification": {
                        "type": "rutCHL",
                        "value": "122081729"
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": null
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": true
                },
                "ownerKnownSource": {
                    "id": 158,
                    "externalId": "N783",
                    "name": "SANTA ISABEL LOMAS DE SAN ANDRÉS",
                    "enable": true,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "email": "",
                    "phoneNumber": "2-3362426",
                    "address": {
                        "street": "Ramón Carrasco 52",
                        "postalCode": "4091085",
                        "landmark": "",
                        "location": {
                            "latitude": -36.789736654715185,
                            "longitude": -73.06049477372673
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "",
                            "name": ""
                        },
                        "subAdminZone1": {
                            "code": "",
                            "name": ""
                        },
                        "subAdminZone2": {
                            "code": "",
                            "name": ""
                        }
                    },
                    "knownSourceType": {
                        "id": 1,
                        "name": "Cencosud Store",
                        "enable": true
                    },
                    "retailChain": {
                        "id": 4,
                        "name": "Santa Isabel",
                        "enable": true,
                        "businessUnitId": 1,
                        "countryId": 1,
                        "code": "SISA_CL"
                    },
                    "ruleName": null
                },
                "packages": [
                    {
                        "id": 24165389,
                        "lpn": "v53469114sisa-01",
                        "tracking": "v53469114sisa-01",
                        "gddNumber": "v53469114sisa-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/August/23/v53469114sisa-01.pdf",
                        "courierPackageId": "v53469114sisa-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1724418000000,
                    "max": 1724425259000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "v53469114sisa-01"
                ],
                "trackings": [
                    "v53469114sisa-01"
                ],
                "wasCreatedInCourier": false,
                "createdAt": 1724394516148,
                "updatedAt": 1724394517232
            },
            {
                "id": 24130312,
                "etaDate": 1724421600000,
                "etaEndDate": 1724428800000,
                "pickupDate": 0,
                "externalSystemOrderId": "v53469112sisa-01",
                "orderType": "Despacho a Domicilio",
                "size": null,
                "height": null,
                "width": null,
                "length": null,
                "weight": null,
                "externalSystem": {
                    "id": 18,
                    "name": "Sales Order",
                    "description": "Service Enterprise System to Manage Sales Order",
                    "type": "INTERNAL",
                    "groupCode": "CENCOMMERCE",
                    "enable": true
                },
                "dispatchType": {
                    "id": 24,
                    "name": "Despacho desde Tienda On Demand",
                    "code": "SFS_ON_DEMAND",
                    "enable": true,
                    "shippingEarly": false
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 24673567,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "name": "SANTA ISABEL FUNDO EL CARMEN",
                    "email": "",
                    "phoneNumber": "2-3362426",
                    "address": {
                        "street": "Los Creadores 191",
                        "postalCode": "4802739",
                        "landmark": "",
                        "location": {
                            "latitude": -38.7172510158597,
                            "longitude": -72.6511931755034
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "09",
                            "name": "La Araucanía"
                        },
                        "subAdminZone1": {
                            "code": "091",
                            "name": "Cautín"
                        },
                        "subAdminZone2": {
                            "code": "09101",
                            "name": "Temuco"
                        }
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 306,
                        "externalId": "N597",
                        "name": "SANTA ISABEL FUNDO EL CARMEN",
                        "enable": true,
                        "identification": {
                            "type": "CL_ID",
                            "value": "81.201.000-K"
                        },
                        "email": "",
                        "phoneNumber": "2-3362426",
                        "address": {
                            "street": "Los Creadores 191",
                            "postalCode": "4802739",
                            "landmark": "",
                            "location": {
                                "latitude": -38.71725101585965,
                                "longitude": -72.65119317550341
                            },
                            "country": {
                                "code": "",
                                "name": ""
                            },
                            "adminZone": {
                                "code": "",
                                "name": ""
                            },
                            "subAdminZone1": {
                                "code": "",
                                "name": ""
                            },
                            "subAdminZone2": {
                                "code": "",
                                "name": ""
                            }
                        },
                        "knownSourceType": {
                            "id": 1,
                            "name": "Cencosud Store",
                            "enable": true
                        },
                        "retailChain": {
                            "id": 4,
                            "name": "Santa Isabel",
                            "enable": true,
                            "businessUnitId": 1,
                            "countryId": 1,
                            "code": "SISA_CL"
                        },
                        "ruleName": null
                    },
                    "type": null,
                    "ruleName": null
                },
                "destination": {
                    "id": 24378582,
                    "name": "Macarena Rivas Calvo",
                    "email": "macarena_rivascalvo@hotmail.com",
                    "phoneNumber": "+56996368808",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "San Ernesto 990, 411",
                        "postalCode": null,
                        "landmark": null,
                        "location": {
                            "latitude": -38.740348,
                            "longitude": -72.6115318
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "09",
                            "name": "La Araucanía"
                        },
                        "subAdminZone1": {
                            "code": "091",
                            "name": "Cautín"
                        },
                        "subAdminZone2": {
                            "code": "09101",
                            "name": "Temuco"
                        }
                    },
                    "identification": {
                        "type": "rutCHL",
                        "value": "140825670"
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": null
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": true
                },
                "ownerKnownSource": {
                    "id": 306,
                    "externalId": "N597",
                    "name": "SANTA ISABEL FUNDO EL CARMEN",
                    "enable": true,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "email": "",
                    "phoneNumber": "2-3362426",
                    "address": {
                        "street": "Los Creadores 191",
                        "postalCode": "4802739",
                        "landmark": "",
                        "location": {
                            "latitude": -38.71725101585965,
                            "longitude": -72.65119317550341
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "",
                            "name": ""
                        },
                        "subAdminZone1": {
                            "code": "",
                            "name": ""
                        },
                        "subAdminZone2": {
                            "code": "",
                            "name": ""
                        }
                    },
                    "knownSourceType": {
                        "id": 1,
                        "name": "Cencosud Store",
                        "enable": true
                    },
                    "retailChain": {
                        "id": 4,
                        "name": "Santa Isabel",
                        "enable": true,
                        "businessUnitId": 1,
                        "countryId": 1,
                        "code": "SISA_CL"
                    },
                    "ruleName": null
                },
                "packages": [
                    {
                        "id": 24165388,
                        "lpn": "v53469112sisa-01",
                        "tracking": "v53469112sisa-01",
                        "gddNumber": "v53469112sisa-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/August/23/v53469112sisa-01.pdf",
                        "courierPackageId": "v53469112sisa-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1724421600000,
                    "max": 1724428800000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "v53469112sisa-01"
                ],
                "trackings": [
                    "v53469112sisa-01"
                ],
                "wasCreatedInCourier": false,
                "createdAt": 1724394508759,
                "updatedAt": 1724394509356
            },
            {
                "id": 24130311,
                "etaDate": 1724446800000,
                "etaEndDate": 1724459459000,
                "pickupDate": 1724394445150,
                "externalSystemOrderId": "v24454788JRSA-01",
                "orderType": "322",
                "size": null,
                "height": null,
                "width": null,
                "length": null,
                "weight": null,
                "externalSystem": {
                    "id": 18,
                    "name": "Sales Order",
                    "description": "Service Enterprise System to Manage Sales Order",
                    "type": "INTERNAL",
                    "groupCode": "CENCOMMERCE",
                    "enable": true
                },
                "dispatchType": {
                    "id": 24,
                    "name": "Despacho desde Tienda On Demand",
                    "code": "SFS_ON_DEMAND",
                    "enable": true,
                    "shippingEarly": false
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 24673566,
                    "identification": {
                        "type": "ARG_ID",
                        "value": ""
                    },
                    "name": "JUMBO LOMAS",
                    "email": "",
                    "phoneNumber": "",
                    "address": {
                        "street": "Gral. Frías",
                        "postalCode": "B1836",
                        "landmark": "",
                        "location": {
                            "latitude": -34.79239254,
                            "longitude": -58.41694458
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "06",
                            "name": "Buenos Aires"
                        },
                        "subAdminZone1": {
                            "code": "6490",
                            "name": "Lomas de Zamora"
                        },
                        "subAdminZone2": {
                            "code": "06490010002",
                            "name": "Llavallol"
                        }
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 868,
                        "externalId": "jumboargentinaj5204lomas",
                        "name": "JUMBO LOMAS",
                        "enable": true,
                        "identification": {
                            "type": "ARG_ID",
                            "value": ""
                        },
                        "email": "",
                        "phoneNumber": "",
                        "address": {
                            "street": "Gral. Frías",
                            "postalCode": "B1836",
                            "landmark": "",
                            "location": {
                                "latitude": -34.79239254,
                                "longitude": -58.41694458
                            },
                            "country": {
                                "code": "",
                                "name": ""
                            },
                            "adminZone": {
                                "code": "",
                                "name": ""
                            },
                            "subAdminZone1": {
                                "code": "",
                                "name": ""
                            },
                            "subAdminZone2": {
                                "code": "",
                                "name": ""
                            }
                        },
                        "knownSourceType": {
                            "id": 1,
                            "name": "Cencosud Store",
                            "enable": true
                        },
                        "retailChain": {
                            "id": 17,
                            "name": "Jumbo (Argentina)",
                            "enable": true,
                            "businessUnitId": 4,
                            "countryId": 2,
                            "code": "JUMBO_AR"
                        },
                        "ruleName": null
                    },
                    "type": null,
                    "ruleName": null
                },
                "destination": {
                    "id": 24378581,
                    "name": "maria laura luna",
                    "email": "laaura.lu@gmail.com",
                    "phoneNumber": "+541127783929",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Miguel Cane 1436, entre alsina y buttler",
                        "postalCode": "1856",
                        "landmark": null,
                        "location": {
                            "latitude": -34.8882261,
                            "longitude": -58.36747509999998
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "06",
                            "name": "Buenos Aires"
                        },
                        "subAdminZone1": {
                            "code": "Glew",
                            "name": "Glew"
                        },
                        "subAdminZone2": {
                            "code": "N/A",
                            "name": "N/A"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "34321545"
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": true
                },
                "ownerKnownSource": {
                    "id": 868,
                    "externalId": "jumboargentinaj5204lomas",
                    "name": "JUMBO LOMAS",
                    "enable": true,
                    "identification": {
                        "type": "ARG_ID",
                        "value": ""
                    },
                    "email": "",
                    "phoneNumber": "",
                    "address": {
                        "street": "Gral. Frías",
                        "postalCode": "B1836",
                        "landmark": "",
                        "location": {
                            "latitude": -34.79239254,
                            "longitude": -58.41694458
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "",
                            "name": ""
                        },
                        "subAdminZone1": {
                            "code": "",
                            "name": ""
                        },
                        "subAdminZone2": {
                            "code": "",
                            "name": ""
                        }
                    },
                    "knownSourceType": {
                        "id": 1,
                        "name": "Cencosud Store",
                        "enable": true
                    },
                    "retailChain": {
                        "id": 17,
                        "name": "Jumbo (Argentina)",
                        "enable": true,
                        "businessUnitId": 4,
                        "countryId": 2,
                        "code": "JUMBO_AR"
                    },
                    "ruleName": null
                },
                "packages": [
                    {
                        "id": 24165387,
                        "lpn": "v24454788JRSA-01",
                        "tracking": "v24454788JRSA-01",
                        "gddNumber": "v24454788JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/August/23/v24454788JRSA-01.pdf",
                        "courierPackageId": "v24454788JRSA-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1724446800000,
                    "max": 1724459459000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "v24454788JRSA-01"
                ],
                "trackings": [
                    "v24454788JRSA-01"
                ],
                "wasCreatedInCourier": false,
                "createdAt": 1724394445150,
                "updatedAt": 1724394447393
            },
            {
                "id": 24130310,
                "etaDate": 1724427000000,
                "etaEndDate": 1724434259000,
                "pickupDate": 1724394409595,
                "externalSystemOrderId": "v140238057jmch-01",
                "orderType": "72",
                "size": null,
                "height": null,
                "width": null,
                "length": null,
                "weight": null,
                "externalSystem": {
                    "id": 18,
                    "name": "Sales Order",
                    "description": "Service Enterprise System to Manage Sales Order",
                    "type": "INTERNAL",
                    "groupCode": "CENCOMMERCE",
                    "enable": true
                },
                "dispatchType": {
                    "id": 24,
                    "name": "Despacho desde Tienda On Demand",
                    "code": "SFS_ON_DEMAND",
                    "enable": true,
                    "shippingEarly": false
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 24673565,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "name": "JUMBO CONCE. HUALPEN",
                    "email": "",
                    "phoneNumber": "41-2720600",
                    "address": {
                        "street": "Costanera Rivera Norte 9781",
                        "postalCode": "4030000",
                        "landmark": "",
                        "location": {
                            "latitude": -36.80578063021592,
                            "longitude": -73.08987604139661
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "08",
                            "name": "Biobío"
                        },
                        "subAdminZone1": {
                            "code": "081",
                            "name": "Concepción"
                        },
                        "subAdminZone2": {
                            "code": "08101",
                            "name": "Concepción"
                        }
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 131,
                        "externalId": "J633",
                        "name": "JUMBO CONCE. HUALPEN",
                        "enable": true,
                        "identification": {
                            "type": "CL_ID",
                            "value": "81.201.000-K"
                        },
                        "email": "",
                        "phoneNumber": "41-2720600",
                        "address": {
                            "street": "Costanera Rivera Norte 9781",
                            "postalCode": "4030000",
                            "landmark": "",
                            "location": {
                                "latitude": -36.80578063021592,
                                "longitude": -73.08987604139661
                            },
                            "country": {
                                "code": "",
                                "name": ""
                            },
                            "adminZone": {
                                "code": "",
                                "name": ""
                            },
                            "subAdminZone1": {
                                "code": "",
                                "name": ""
                            },
                            "subAdminZone2": {
                                "code": "",
                                "name": ""
                            }
                        },
                        "knownSourceType": {
                            "id": 1,
                            "name": "Cencosud Store",
                            "enable": true
                        },
                        "retailChain": {
                            "id": 1,
                            "name": "Jumbo",
                            "enable": true,
                            "businessUnitId": 1,
                            "countryId": 1,
                            "code": "JUMBO_CL"
                        },
                        "ruleName": "CL_JUMBO_HOME_DELIVERY"
                    },
                    "type": null,
                    "ruleName": "CL_JUMBO_HOME_DELIVERY"
                },
                "destination": {
                    "id": 24378580,
                    "name": "Daniela Riquelme",
                    "email": "danielariquelme@gmail.com",
                    "phoneNumber": "962470318",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Zenón Urrutia 2712, casa b",
                        "postalCode": "4100000",
                        "landmark": null,
                        "location": {
                            "latitude": -36.86335532411612,
                            "longitude": -73.03965640740967
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "11",
                            "name": "Junin"
                        },
                        "subAdminZone1": {
                            "code": "104",
                            "name": "Concepcion"
                        },
                        "subAdminZone2": {
                            "code": "08103",
                            "name": "Chiguayante"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "158534606"
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": true
                },
                "ownerKnownSource": {
                    "id": 131,
                    "externalId": "J633",
                    "name": "JUMBO CONCE. HUALPEN",
                    "enable": true,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "email": "",
                    "phoneNumber": "41-2720600",
                    "address": {
                        "street": "Costanera Rivera Norte 9781",
                        "postalCode": "4030000",
                        "landmark": "",
                        "location": {
                            "latitude": -36.80578063021592,
                            "longitude": -73.08987604139661
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "",
                            "name": ""
                        },
                        "subAdminZone1": {
                            "code": "",
                            "name": ""
                        },
                        "subAdminZone2": {
                            "code": "",
                            "name": ""
                        }
                    },
                    "knownSourceType": {
                        "id": 1,
                        "name": "Cencosud Store",
                        "enable": true
                    },
                    "retailChain": {
                        "id": 1,
                        "name": "Jumbo",
                        "enable": true,
                        "businessUnitId": 1,
                        "countryId": 1,
                        "code": "JUMBO_CL"
                    },
                    "ruleName": "CL_JUMBO_HOME_DELIVERY"
                },
                "packages": [
                    {
                        "id": 24165386,
                        "lpn": "v140238057jmch-01",
                        "tracking": "v140238057jmch-01",
                        "gddNumber": "v140238057jmch-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/August/23/v140238057jmch-01.pdf",
                        "courierPackageId": "v140238057jmch-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1724427000000,
                    "max": 1724434259000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "v140238057jmch-01"
                ],
                "trackings": [
                    "v140238057jmch-01"
                ],
                "wasCreatedInCourier": false,
                "createdAt": 1724394409596,
                "updatedAt": 1724394412201
            },
            {
                "id": 24130309,
                "etaDate": 1724423400000,
                "etaEndDate": 1724430600000,
                "pickupDate": 1724394379725,
                "externalSystemOrderId": "v140238052jmch-01",
                "orderType": "72",
                "size": null,
                "height": null,
                "width": null,
                "length": null,
                "weight": null,
                "externalSystem": {
                    "id": 18,
                    "name": "Sales Order",
                    "description": "Service Enterprise System to Manage Sales Order",
                    "type": "INTERNAL",
                    "groupCode": "CENCOMMERCE",
                    "enable": true
                },
                "dispatchType": {
                    "id": 24,
                    "name": "Despacho desde Tienda On Demand",
                    "code": "SFS_ON_DEMAND",
                    "enable": true,
                    "shippingEarly": false
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 24673564,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "name": "DARKSTORE KENNEDY",
                    "email": "",
                    "phoneNumber": "2-3558400",
                    "address": {
                        "street": "Av. Kennedy 9001",
                        "postalCode": "7591567",
                        "landmark": "",
                        "location": {
                            "latitude": -33.39157914850497,
                            "longitude": -70.545955089287
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "13",
                            "name": "Metropolitana de Santiago"
                        },
                        "subAdminZone1": {
                            "code": "131",
                            "name": "Santiago"
                        },
                        "subAdminZone2": {
                            "code": "13114",
                            "name": "Las Condes"
                        }
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 112,
                        "externalId": "J502",
                        "name": "DARKSTORE KENNEDY",
                        "enable": true,
                        "identification": {
                            "type": "CL_ID",
                            "value": "81.201.000-K"
                        },
                        "email": "",
                        "phoneNumber": "2-3558400",
                        "address": {
                            "street": "Av. Kennedy 9001",
                            "postalCode": "7591567",
                            "landmark": "",
                            "location": {
                                "latitude": -33.39157914850497,
                                "longitude": -70.545955089287
                            },
                            "country": {
                                "code": "",
                                "name": ""
                            },
                            "adminZone": {
                                "code": "",
                                "name": ""
                            },
                            "subAdminZone1": {
                                "code": "",
                                "name": ""
                            },
                            "subAdminZone2": {
                                "code": "",
                                "name": ""
                            }
                        },
                        "knownSourceType": {
                            "id": 1,
                            "name": "Cencosud Store",
                            "enable": true
                        },
                        "retailChain": {
                            "id": 1,
                            "name": "Jumbo",
                            "enable": true,
                            "businessUnitId": 1,
                            "countryId": 1,
                            "code": "JUMBO_CL"
                        },
                        "ruleName": "CL_JUMBO_HOME_DELIVERY"
                    },
                    "type": null,
                    "ruleName": "CL_JUMBO_HOME_DELIVERY"
                },
                "destination": {
                    "id": 24378579,
                    "name": "monica freig",
                    "email": "monicafreig@hotmail.com",
                    "phoneNumber": "992774754",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Américo Vespucio Norte 1776, 21",
                        "postalCode": "Santiago",
                        "landmark": null,
                        "location": {
                            "latitude": -33.3982862,
                            "longitude": -70.588655
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "13",
                            "name": "Metropolitana de Santiago"
                        },
                        "subAdminZone1": {
                            "code": "131",
                            "name": "Santiago"
                        },
                        "subAdminZone2": {
                            "code": "13132",
                            "name": "Vitacura"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "64422294"
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": true
                },
                "ownerKnownSource": {
                    "id": 112,
                    "externalId": "J502",
                    "name": "DARKSTORE KENNEDY",
                    "enable": true,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "email": "",
                    "phoneNumber": "2-3558400",
                    "address": {
                        "street": "Av. Kennedy 9001",
                        "postalCode": "7591567",
                        "landmark": "",
                        "location": {
                            "latitude": -33.39157914850497,
                            "longitude": -70.545955089287
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "",
                            "name": ""
                        },
                        "subAdminZone1": {
                            "code": "",
                            "name": ""
                        },
                        "subAdminZone2": {
                            "code": "",
                            "name": ""
                        }
                    },
                    "knownSourceType": {
                        "id": 1,
                        "name": "Cencosud Store",
                        "enable": true
                    },
                    "retailChain": {
                        "id": 1,
                        "name": "Jumbo",
                        "enable": true,
                        "businessUnitId": 1,
                        "countryId": 1,
                        "code": "JUMBO_CL"
                    },
                    "ruleName": "CL_JUMBO_HOME_DELIVERY"
                },
                "packages": [
                    {
                        "id": 24165385,
                        "lpn": "v140238052jmch-01",
                        "tracking": "v140238052jmch-01",
                        "gddNumber": "v140238052jmch-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/August/23/v140238052jmch-01.pdf",
                        "courierPackageId": "v140238052jmch-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1724423400000,
                    "max": 1724430600000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "v140238052jmch-01"
                ],
                "trackings": [
                    "v140238052jmch-01"
                ],
                "wasCreatedInCourier": false,
                "createdAt": 1724394379725,
                "updatedAt": 1724394388256
            },
            {
                "id": 24130308,
                "etaDate": 1724428800000,
                "etaEndDate": 1724436000000,
                "pickupDate": 1724394379620,
                "externalSystemOrderId": "v140238064jmch-01",
                "orderType": "72",
                "size": null,
                "height": null,
                "width": null,
                "length": null,
                "weight": null,
                "externalSystem": {
                    "id": 18,
                    "name": "Sales Order",
                    "description": "Service Enterprise System to Manage Sales Order",
                    "type": "INTERNAL",
                    "groupCode": "CENCOMMERCE",
                    "enable": true
                },
                "dispatchType": {
                    "id": 24,
                    "name": "Despacho desde Tienda On Demand",
                    "code": "SFS_ON_DEMAND",
                    "enable": true,
                    "shippingEarly": false
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 24673563,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "name": "DARKSTORE COSTANERA",
                    "email": "cenco@cencosud.cl",
                    "phoneNumber": "2-3362426",
                    "address": {
                        "street": "Av. Andres Bello 2425",
                        "postalCode": "7500000",
                        "landmark": null,
                        "location": {
                            "latitude": -33.41789950208208,
                            "longitude": -70.60650736230298
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "13",
                            "name": "Metropolitana de Santiago"
                        },
                        "subAdminZone1": {
                            "code": "131",
                            "name": "Santiago"
                        },
                        "subAdminZone2": {
                            "code": "13123",
                            "name": "Providencia"
                        }
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 1227,
                        "externalId": "J411",
                        "name": "DARKSTORE COSTANERA",
                        "enable": true,
                        "identification": {
                            "type": "CL_ID",
                            "value": "81.201.000-K"
                        },
                        "email": "cenco@cencosud.cl",
                        "phoneNumber": "2-3362426",
                        "address": {
                            "street": "Av. Andres Bello 2425",
                            "postalCode": "7500000",
                            "landmark": null,
                            "location": {
                                "latitude": -33.41789950208208,
                                "longitude": -70.60650736230298
                            },
                            "country": {
                                "code": "",
                                "name": ""
                            },
                            "adminZone": {
                                "code": "",
                                "name": ""
                            },
                            "subAdminZone1": {
                                "code": "",
                                "name": ""
                            },
                            "subAdminZone2": {
                                "code": "",
                                "name": ""
                            }
                        },
                        "knownSourceType": {
                            "id": 1,
                            "name": "Cencosud Store",
                            "enable": true
                        },
                        "retailChain": {
                            "id": 1,
                            "name": "Jumbo",
                            "enable": true,
                            "businessUnitId": 1,
                            "countryId": 1,
                            "code": "JUMBO_CL"
                        },
                        "ruleName": "CL_JUMBO_HOME_DELIVERY"
                    },
                    "type": null,
                    "ruleName": "CL_JUMBO_HOME_DELIVERY"
                },
                "destination": {
                    "id": 24378578,
                    "name": "NICOLE BRAVO",
                    "email": "nicoleabj@gmail.com",
                    "phoneNumber": "993677237",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "La Castellana Norte 100, dpto 71",
                        "postalCode": "7550000",
                        "landmark": null,
                        "location": {
                            "latitude": -33.4105239,
                            "longitude": -70.5779584
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "13",
                            "name": "Metropolitana de Santiago"
                        },
                        "subAdminZone1": {
                            "code": "131",
                            "name": "Santiago"
                        },
                        "subAdminZone2": {
                            "code": "13114",
                            "name": "Las Condes"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "160823607"
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": true
                },
                "ownerKnownSource": {
                    "id": 1227,
                    "externalId": "J411",
                    "name": "DARKSTORE COSTANERA",
                    "enable": true,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "email": "cenco@cencosud.cl",
                    "phoneNumber": "2-3362426",
                    "address": {
                        "street": "Av. Andres Bello 2425",
                        "postalCode": "7500000",
                        "landmark": null,
                        "location": {
                            "latitude": -33.41789950208208,
                            "longitude": -70.60650736230298
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "",
                            "name": ""
                        },
                        "subAdminZone1": {
                            "code": "",
                            "name": ""
                        },
                        "subAdminZone2": {
                            "code": "",
                            "name": ""
                        }
                    },
                    "knownSourceType": {
                        "id": 1,
                        "name": "Cencosud Store",
                        "enable": true
                    },
                    "retailChain": {
                        "id": 1,
                        "name": "Jumbo",
                        "enable": true,
                        "businessUnitId": 1,
                        "countryId": 1,
                        "code": "JUMBO_CL"
                    },
                    "ruleName": "CL_JUMBO_HOME_DELIVERY"
                },
                "packages": [
                    {
                        "id": 24165384,
                        "lpn": "v140238064jmch-01",
                        "tracking": "v140238064jmch-01",
                        "gddNumber": "v140238064jmch-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/August/23/v140238064jmch-01.pdf",
                        "courierPackageId": "v140238064jmch-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1724428800000,
                    "max": 1724436000000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "v140238064jmch-01"
                ],
                "trackings": [
                    "v140238064jmch-01"
                ],
                "wasCreatedInCourier": false,
                "createdAt": 1724394379621,
                "updatedAt": 1724394388652
            },
            {
                "id": 24130307,
                "etaDate": 1724419800000,
                "etaEndDate": 1724427000000,
                "pickupDate": 1724394261667,
                "externalSystemOrderId": "v140238034jmch-01",
                "orderType": "72",
                "size": null,
                "height": null,
                "width": null,
                "length": null,
                "weight": null,
                "externalSystem": {
                    "id": 18,
                    "name": "Sales Order",
                    "description": "Service Enterprise System to Manage Sales Order",
                    "type": "INTERNAL",
                    "groupCode": "CENCOMMERCE",
                    "enable": true
                },
                "dispatchType": {
                    "id": 24,
                    "name": "Despacho desde Tienda On Demand",
                    "code": "SFS_ON_DEMAND",
                    "enable": true,
                    "shippingEarly": false
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 24673562,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "name": "JUMBO ÑUÑOA",
                    "email": "",
                    "phoneNumber": "2-5628800",
                    "address": {
                        "street": "Av. Jose Pedro Alessandri 1166",
                        "postalCode": "7800002",
                        "landmark": "",
                        "location": {
                            "latitude": -33.46490577897376,
                            "longitude": -70.5979252813141
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "13",
                            "name": "Metropolitana de Santiago"
                        },
                        "subAdminZone1": {
                            "code": "131",
                            "name": "Santiago"
                        },
                        "subAdminZone2": {
                            "code": "13120",
                            "name": "Ñuñoa"
                        }
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 108,
                        "externalId": "J775",
                        "name": "JUMBO ÑUÑOA",
                        "enable": true,
                        "identification": {
                            "type": "CL_ID",
                            "value": "81.201.000-K"
                        },
                        "email": "",
                        "phoneNumber": "2-5628800",
                        "address": {
                            "street": "Av. Jose Pedro Alessandri 1166",
                            "postalCode": "7800002",
                            "landmark": "",
                            "location": {
                                "latitude": -33.46490577897376,
                                "longitude": -70.5979252813141
                            },
                            "country": {
                                "code": "",
                                "name": ""
                            },
                            "adminZone": {
                                "code": "",
                                "name": ""
                            },
                            "subAdminZone1": {
                                "code": "",
                                "name": ""
                            },
                            "subAdminZone2": {
                                "code": "",
                                "name": ""
                            }
                        },
                        "knownSourceType": {
                            "id": 1,
                            "name": "Cencosud Store",
                            "enable": true
                        },
                        "retailChain": {
                            "id": 1,
                            "name": "Jumbo",
                            "enable": true,
                            "businessUnitId": 1,
                            "countryId": 1,
                            "code": "JUMBO_CL"
                        },
                        "ruleName": "CL_JUMBO_HOME_DELIVERY"
                    },
                    "type": null,
                    "ruleName": "CL_JUMBO_HOME_DELIVERY"
                },
                "destination": {
                    "id": 24378577,
                    "name": "Iris Gonzalez",
                    "email": "iris.gonre@gmail.com",
                    "phoneNumber": "+56987020701",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Avenida Italia 1831, Casa D",
                        "postalCode": "7750000",
                        "landmark": "Tocar timbre casa D, sino llamar 987020701 o segunda opción 942597658",
                        "location": {
                            "latitude": -33.4511713,
                            "longitude": -70.6237939
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "13",
                            "name": "Metropolitana de Santiago"
                        },
                        "subAdminZone1": {
                            "code": "131",
                            "name": "Santiago"
                        },
                        "subAdminZone2": {
                            "code": "13120",
                            "name": "Ñuñoa"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "161954535"
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": true
                },
                "ownerKnownSource": {
                    "id": 108,
                    "externalId": "J775",
                    "name": "JUMBO ÑUÑOA",
                    "enable": true,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "email": "",
                    "phoneNumber": "2-5628800",
                    "address": {
                        "street": "Av. Jose Pedro Alessandri 1166",
                        "postalCode": "7800002",
                        "landmark": "",
                        "location": {
                            "latitude": -33.46490577897376,
                            "longitude": -70.5979252813141
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "",
                            "name": ""
                        },
                        "subAdminZone1": {
                            "code": "",
                            "name": ""
                        },
                        "subAdminZone2": {
                            "code": "",
                            "name": ""
                        }
                    },
                    "knownSourceType": {
                        "id": 1,
                        "name": "Cencosud Store",
                        "enable": true
                    },
                    "retailChain": {
                        "id": 1,
                        "name": "Jumbo",
                        "enable": true,
                        "businessUnitId": 1,
                        "countryId": 1,
                        "code": "JUMBO_CL"
                    },
                    "ruleName": "CL_JUMBO_HOME_DELIVERY"
                },
                "packages": [
                    {
                        "id": 24165383,
                        "lpn": "v140238034jmch-01",
                        "tracking": "v140238034jmch-01",
                        "gddNumber": "v140238034jmch-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/August/23/v140238034jmch-01.pdf",
                        "courierPackageId": "v140238034jmch-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1724419800000,
                    "max": 1724427000000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "v140238034jmch-01"
                ],
                "trackings": [
                    "v140238034jmch-01"
                ],
                "wasCreatedInCourier": false,
                "createdAt": 1724394261667,
                "updatedAt": 1724394268407
            }
        ]
    }

    res.json(response);
};

module.exports = {
    getData
};
