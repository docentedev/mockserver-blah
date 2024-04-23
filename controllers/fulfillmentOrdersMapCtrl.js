const getData = (req, res) => {
    const { dispatch: { statusCodeList } } = req.body;
    let code = 0;
    if (statusCodeList) {
        code = statusCodeList.length === 0 ? 0 : statusCodeList[0];
    }
    console.log(code);
    const response = {
        "dispatches": [
            {
                "id": 132468 + code,
                "etaDate": 1696453200000,
                "etaEndDate": 1696465859000,
                "pickupDate": 1696435129616,
                "externalSystemOrderId": "testmap-v19220848JRSA-01",
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
                    "id": 28,
                    "name": "Despacho desde Tienda On Demand",
                    "code": "SFS_ON_DEMAND",
                    "enable": true,
                    "shippingEarly": false
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 133917,
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
                            "latitude": -34.79239,
                            "longitude": -58.41694
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
                            "code": "Providenci",
                            "name": "Providencia"
                        }
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 1155,
                        "externalId": "jumboargentinaj5204lomas",
                        "name": "JUMBO LOMAS",
                        "enable": true,
                        "identification": {
                            "type": "ARG_ID",
                            "value": ""
                        },
                        "email": "",
                        "phoneNumber": "",
                        "knownSourceType": {
                            "id": 1,
                            "name": "Cencosud Store",
                            "enable": true
                        },
                        "retailChain": {
                            "id": 54,
                            "name": "Jumbo (Argentina)",
                            "enable": true,
                            "businessUnitId": 8,
                            "countryId": 5,
                            "code": "JUMBO_AR"
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 133292,
                    "name": "Micaela Sacchetti",
                    "email": "micsacchetti@gmail.com",
                    "phoneNumber": "+541163741734",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Pje. Etcheverry, 978",
                        "postalCode": "1845",
                        "landmark": null,
                        "location": {
                            "latitude": -34.7957262,
                            "longitude": -58.37806959999999
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "PROVINCIA",
                            "name": "PROVINCIA DE BUENOS AIRES"
                        },
                        "subAdminZone1": {
                            "code": "Almte Bro",
                            "name": "Almte Brown"
                        },
                        "subAdminZone2": {
                            "code": "José Marm",
                            "name": "José Marmol"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "37123050"
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": false
                },
                "ownerKnownSource": {
                    "id": 1155,
                    "externalId": "jumboargentinaj5204lomas",
                    "name": "JUMBO LOMAS",
                    "enable": true,
                    "identification": {
                        "type": "ARG_ID",
                        "value": ""
                    },
                    "email": "",
                    "phoneNumber": "",
                    "knownSourceType": {
                        "id": 1,
                        "name": "Cencosud Store",
                        "enable": true
                    },
                    "retailChain": {
                        "id": 54,
                        "name": "Jumbo (Argentina)",
                        "enable": true,
                        "businessUnitId": 8,
                        "countryId": 5,
                        "code": "JUMBO_AR"
                    }
                },
                "packages": [
                    {
                        "id": 135468,
                        "lpn": "testmap-v19220848JRSA-01",
                        "tracking": "testmap-v19220848JRSA-01",
                        "gddNumber": "testmap-v19220848JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm-stg.cencosud.com/dispatch/labels/2023/October/04/testmap-v19220848JRSA-01.pdf",
                        "courierPackageId": "testmap-v19220848JRSA-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1696453200000,
                    "max": 1696465859000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "testmap-v19220848JRSA-01"
                ],
                "trackings": [
                    "testmap-v19220848JRSA-01"
                ]
            },
            {
                "id": 132465 + code,
                "etaDate": 1696453200000,
                "etaEndDate": 1696465859000,
                "pickupDate": 1696434732315,
                "externalSystemOrderId": "testmap-v19219528JRSA-01",
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
                    "id": 28,
                    "name": "Despacho desde Tienda On Demand",
                    "code": "SFS_ON_DEMAND",
                    "enable": true,
                    "shippingEarly": false
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 133914,
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
                            "latitude": -34.79239,
                            "longitude": -58.41694
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
                            "code": "Providenci",
                            "name": "Providencia"
                        }
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 1155,
                        "externalId": "jumboargentinaj5204lomas",
                        "name": "JUMBO LOMAS",
                        "enable": true,
                        "identification": {
                            "type": "ARG_ID",
                            "value": ""
                        },
                        "email": "",
                        "phoneNumber": "",
                        "knownSourceType": {
                            "id": 1,
                            "name": "Cencosud Store",
                            "enable": true
                        },
                        "retailChain": {
                            "id": 54,
                            "name": "Jumbo (Argentina)",
                            "enable": true,
                            "businessUnitId": 8,
                            "countryId": 5,
                            "code": "JUMBO_AR"
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 133289,
                    "name": "Luciana Nancy Quintero",
                    "email": "luciananan1981@gmail.com",
                    "phoneNumber": "+541141734524",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Marcos Sastre, 118",
                        "postalCode": "1846",
                        "landmark": null,
                        "location": {
                            "latitude": -34.8122063,
                            "longitude": -58.4169378
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "6",
                            "name": "Buenos Aires"
                        },
                        "subAdminZone1": {
                            "code": "6515",
                            "name": "Malvinas Argentinas"
                        },
                        "subAdminZone2": {
                            "code": "N/A",
                            "name": "N/A"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "28732950"
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": false
                },
                "ownerKnownSource": {
                    "id": 1155,
                    "externalId": "jumboargentinaj5204lomas",
                    "name": "JUMBO LOMAS",
                    "enable": true,
                    "identification": {
                        "type": "ARG_ID",
                        "value": ""
                    },
                    "email": "",
                    "phoneNumber": "",
                    "knownSourceType": {
                        "id": 1,
                        "name": "Cencosud Store",
                        "enable": true
                    },
                    "retailChain": {
                        "id": 54,
                        "name": "Jumbo (Argentina)",
                        "enable": true,
                        "businessUnitId": 8,
                        "countryId": 5,
                        "code": "JUMBO_AR"
                    }
                },
                "packages": [
                    {
                        "id": 135465,
                        "lpn": "testmap-v19219528JRSA-01",
                        "tracking": "testmap-v19219528JRSA-01",
                        "gddNumber": "testmap-v19219528JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm-stg.cencosud.com/dispatch/labels/2023/October/04/testmap-v19219528JRSA-01.pdf",
                        "courierPackageId": "testmap-v19219528JRSA-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1696453200000,
                    "max": 1696465859000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "testmap-v19219528JRSA-01"
                ],
                "trackings": [
                    "testmap-v19219528JRSA-01"
                ]
            },
            {
                "id": 132464 + code,
                "etaDate": 1696438800000,
                "etaEndDate": 1696453259000,
                "pickupDate": 1696434637165,
                "externalSystemOrderId": "testmap-v19200938JRSA-01",
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
                    "id": 28,
                    "name": "Despacho desde Tienda On Demand",
                    "code": "SFS_ON_DEMAND",
                    "enable": true,
                    "shippingEarly": false
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 133913,
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
                            "latitude": -34.79239,
                            "longitude": -58.41694
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
                            "code": "Providenci",
                            "name": "Providencia"
                        }
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 1155,
                        "externalId": "jumboargentinaj5204lomas",
                        "name": "JUMBO LOMAS",
                        "enable": true,
                        "identification": {
                            "type": "ARG_ID",
                            "value": ""
                        },
                        "email": "",
                        "phoneNumber": "",
                        "knownSourceType": {
                            "id": 1,
                            "name": "Cencosud Store",
                            "enable": true
                        },
                        "retailChain": {
                            "id": 54,
                            "name": "Jumbo (Argentina)",
                            "enable": true,
                            "businessUnitId": 8,
                            "countryId": 5,
                            "code": "JUMBO_AR"
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 133288,
                    "name": "Mariano Negri",
                    "email": "negri.mariano@hotmail.com",
                    "phoneNumber": "+541138067240",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Leandro N. Alem, 260",
                        "postalCode": "1852",
                        "landmark": null,
                        "location": {
                            "latitude": -34.8313957,
                            "longitude": -58.3980827
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "6",
                            "name": "Buenos Aires"
                        },
                        "subAdminZone1": {
                            "code": "Burzaco",
                            "name": "Burzaco"
                        },
                        "subAdminZone2": {
                            "code": "N/A",
                            "name": "N/A"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "39281297"
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": false
                },
                "ownerKnownSource": {
                    "id": 1155,
                    "externalId": "jumboargentinaj5204lomas",
                    "name": "JUMBO LOMAS",
                    "enable": true,
                    "identification": {
                        "type": "ARG_ID",
                        "value": ""
                    },
                    "email": "",
                    "phoneNumber": "",
                    "knownSourceType": {
                        "id": 1,
                        "name": "Cencosud Store",
                        "enable": true
                    },
                    "retailChain": {
                        "id": 54,
                        "name": "Jumbo (Argentina)",
                        "enable": true,
                        "businessUnitId": 8,
                        "countryId": 5,
                        "code": "JUMBO_AR"
                    }
                },
                "packages": [
                    {
                        "id": 135464,
                        "lpn": "testmap-v19200938JRSA-01",
                        "tracking": "testmap-v19200938JRSA-01",
                        "gddNumber": "testmap-v19200938JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm-stg.cencosud.com/dispatch/labels/2023/October/04/testmap-v19200938JRSA-01.pdf",
                        "courierPackageId": "testmap-v19200938JRSA-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1696438800000,
                    "max": 1696453259000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "testmap-v19200938JRSA-01"
                ],
                "trackings": [
                    "testmap-v19200938JRSA-01"
                ]
            },
            {
                "id": 132462 + code,
                "etaDate": 1696424400000,
                "etaEndDate": 1696438859000,
                "pickupDate": 1696434502405,
                "externalSystemOrderId": "testmap-v19202989JRSA-01",
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
                    "id": 28,
                    "name": "Despacho desde Tienda On Demand",
                    "code": "SFS_ON_DEMAND",
                    "enable": true,
                    "shippingEarly": false
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 133911,
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
                            "latitude": -34.79239,
                            "longitude": -58.41694
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
                            "code": "Providenci",
                            "name": "Providencia"
                        }
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 1155,
                        "externalId": "jumboargentinaj5204lomas",
                        "name": "JUMBO LOMAS",
                        "enable": true,
                        "identification": {
                            "type": "ARG_ID",
                            "value": ""
                        },
                        "email": "",
                        "phoneNumber": "",
                        "knownSourceType": {
                            "id": 1,
                            "name": "Cencosud Store",
                            "enable": true
                        },
                        "retailChain": {
                            "id": 54,
                            "name": "Jumbo (Argentina)",
                            "enable": true,
                            "businessUnitId": 8,
                            "countryId": 5,
                            "code": "JUMBO_AR"
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 133286,
                    "name": "Mariela Parafioriti",
                    "email": "mariela.parafioriti@gmail.com",
                    "phoneNumber": "+541142420260",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Las Heras, 570",
                        "postalCode": "1832",
                        "landmark": null,
                        "location": {
                            "latitude": -34.7495253,
                            "longitude": -58.40286460000001
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "6",
                            "name": "Buenos Aires"
                        },
                        "subAdminZone1": {
                            "code": "6490",
                            "name": "Lomas de Zamora"
                        },
                        "subAdminZone2": {
                            "code": "N/A",
                            "name": "N/A"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "22717902"
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": false
                },
                "ownerKnownSource": {
                    "id": 1155,
                    "externalId": "jumboargentinaj5204lomas",
                    "name": "JUMBO LOMAS",
                    "enable": true,
                    "identification": {
                        "type": "ARG_ID",
                        "value": ""
                    },
                    "email": "",
                    "phoneNumber": "",
                    "knownSourceType": {
                        "id": 1,
                        "name": "Cencosud Store",
                        "enable": true
                    },
                    "retailChain": {
                        "id": 54,
                        "name": "Jumbo (Argentina)",
                        "enable": true,
                        "businessUnitId": 8,
                        "countryId": 5,
                        "code": "JUMBO_AR"
                    }
                },
                "packages": [
                    {
                        "id": 135462,
                        "lpn": "testmap-v19202989JRSA-01",
                        "tracking": "testmap-v19202989JRSA-01",
                        "gddNumber": "testmap-v19202989JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm-stg.cencosud.com/dispatch/labels/2023/October/04/testmap-v19202989JRSA-01.pdf",
                        "courierPackageId": "testmap-v19202989JRSA-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1696424400000,
                    "max": 1696438859000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "testmap-v19202989JRSA-01"
                ],
                "trackings": [
                    "testmap-v19202989JRSA-01"
                ]
            },
            {
                "id": 132460 + code,
                "etaDate": 1696453200000,
                "etaEndDate": 1696465859000,
                "pickupDate": 1696434399525,
                "externalSystemOrderId": "testmap-v19205311JRSA-01",
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
                    "id": 28,
                    "name": "Despacho desde Tienda On Demand",
                    "code": "SFS_ON_DEMAND",
                    "enable": true,
                    "shippingEarly": false
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 133909,
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
                            "latitude": -34.79239,
                            "longitude": -58.41694
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
                            "code": "Providenci",
                            "name": "Providencia"
                        }
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 1155,
                        "externalId": "jumboargentinaj5204lomas",
                        "name": "JUMBO LOMAS",
                        "enable": true,
                        "identification": {
                            "type": "ARG_ID",
                            "value": ""
                        },
                        "email": "",
                        "phoneNumber": "",
                        "knownSourceType": {
                            "id": 1,
                            "name": "Cencosud Store",
                            "enable": true
                        },
                        "retailChain": {
                            "id": 54,
                            "name": "Jumbo (Argentina)",
                            "enable": true,
                            "businessUnitId": 8,
                            "countryId": 5,
                            "code": "JUMBO_AR"
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 133284,
                    "name": "MONICA ALEJANDRA arbelo",
                    "email": "moarbelo@hotmail.com",
                    "phoneNumber": "+541161932657",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Avenida Almirante Brown, 2939",
                        "postalCode": "1834",
                        "landmark": null,
                        "location": {
                            "latitude": -34.7719936,
                            "longitude": -58.3966727
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "6",
                            "name": "Buenos Aires"
                        },
                        "subAdminZone1": {
                            "code": "Temperley",
                            "name": "Temperley"
                        },
                        "subAdminZone2": {
                            "code": "N/A",
                            "name": "N/A"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "20027088"
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": false
                },
                "ownerKnownSource": {
                    "id": 1155,
                    "externalId": "jumboargentinaj5204lomas",
                    "name": "JUMBO LOMAS",
                    "enable": true,
                    "identification": {
                        "type": "ARG_ID",
                        "value": ""
                    },
                    "email": "",
                    "phoneNumber": "",
                    "knownSourceType": {
                        "id": 1,
                        "name": "Cencosud Store",
                        "enable": true
                    },
                    "retailChain": {
                        "id": 54,
                        "name": "Jumbo (Argentina)",
                        "enable": true,
                        "businessUnitId": 8,
                        "countryId": 5,
                        "code": "JUMBO_AR"
                    }
                },
                "packages": [
                    {
                        "id": 135460,
                        "lpn": "testmap-v19205311JRSA-01",
                        "tracking": "testmap-v19205311JRSA-01",
                        "gddNumber": "testmap-v19205311JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm-stg.cencosud.com/dispatch/labels/2023/October/04/testmap-v19205311JRSA-01.pdf",
                        "courierPackageId": "testmap-v19205311JRSA-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1696453200000,
                    "max": 1696465859000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "testmap-v19205311JRSA-01"
                ],
                "trackings": [
                    "testmap-v19205311JRSA-01"
                ]
            },
            {
                "id": 132459 + code,
                "etaDate": 1696424400000,
                "etaEndDate": 1696438859000,
                "pickupDate": 1696434342140,
                "externalSystemOrderId": "testmap-v19207644JRSA-01",
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
                    "id": 28,
                    "name": "Despacho desde Tienda On Demand",
                    "code": "SFS_ON_DEMAND",
                    "enable": true,
                    "shippingEarly": false
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 133908,
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
                            "latitude": -34.79239,
                            "longitude": -58.41694
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
                            "code": "Providenci",
                            "name": "Providencia"
                        }
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 1155,
                        "externalId": "jumboargentinaj5204lomas",
                        "name": "JUMBO LOMAS",
                        "enable": true,
                        "identification": {
                            "type": "ARG_ID",
                            "value": ""
                        },
                        "email": "",
                        "phoneNumber": "",
                        "knownSourceType": {
                            "id": 1,
                            "name": "Cencosud Store",
                            "enable": true
                        },
                        "retailChain": {
                            "id": 54,
                            "name": "Jumbo (Argentina)",
                            "enable": true,
                            "businessUnitId": 8,
                            "countryId": 5,
                            "code": "JUMBO_AR"
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 133283,
                    "name": "Nahuel Montaña",
                    "email": "nahuelmonty22@gmail.com",
                    "phoneNumber": "+541132510713",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Félix de Álzaga, 4176",
                        "postalCode": "1823",
                        "landmark": null,
                        "location": {
                            "latitude": -34.7351357,
                            "longitude": -58.3639175
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "6",
                            "name": "Buenos Aires"
                        },
                        "subAdminZone1": {
                            "code": "6434",
                            "name": "Lanús"
                        },
                        "subAdminZone2": {
                            "code": "Monte Chi",
                            "name": "Monte Chingolo"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "39333759"
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": false
                },
                "ownerKnownSource": {
                    "id": 1155,
                    "externalId": "jumboargentinaj5204lomas",
                    "name": "JUMBO LOMAS",
                    "enable": true,
                    "identification": {
                        "type": "ARG_ID",
                        "value": ""
                    },
                    "email": "",
                    "phoneNumber": "",
                    "knownSourceType": {
                        "id": 1,
                        "name": "Cencosud Store",
                        "enable": true
                    },
                    "retailChain": {
                        "id": 54,
                        "name": "Jumbo (Argentina)",
                        "enable": true,
                        "businessUnitId": 8,
                        "countryId": 5,
                        "code": "JUMBO_AR"
                    }
                },
                "packages": [
                    {
                        "id": 135459,
                        "lpn": "testmap-v19207644JRSA-01",
                        "tracking": "testmap-v19207644JRSA-01",
                        "gddNumber": "testmap-v19207644JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm-stg.cencosud.com/dispatch/labels/2023/October/04/testmap-v19207644JRSA-01.pdf",
                        "courierPackageId": "testmap-v19207644JRSA-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1696424400000,
                    "max": 1696438859000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "testmap-v19207644JRSA-01"
                ],
                "trackings": [
                    "testmap-v19207644JRSA-01"
                ]
            },
            {
                "id": 132455 + code,
                "etaDate": 1696424400000,
                "etaEndDate": 1696438859000,
                "pickupDate": 1696434152598,
                "externalSystemOrderId": "testmap-v19205277JRSA-01",
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
                    "id": 28,
                    "name": "Despacho desde Tienda On Demand",
                    "code": "SFS_ON_DEMAND",
                    "enable": true,
                    "shippingEarly": false
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 133904,
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
                            "latitude": -34.79239,
                            "longitude": -58.41694
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
                            "code": "Providenci",
                            "name": "Providencia"
                        }
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 1155,
                        "externalId": "jumboargentinaj5204lomas",
                        "name": "JUMBO LOMAS",
                        "enable": true,
                        "identification": {
                            "type": "ARG_ID",
                            "value": ""
                        },
                        "email": "",
                        "phoneNumber": "",
                        "knownSourceType": {
                            "id": 1,
                            "name": "Cencosud Store",
                            "enable": true
                        },
                        "retailChain": {
                            "id": 54,
                            "name": "Jumbo (Argentina)",
                            "enable": true,
                            "businessUnitId": 8,
                            "countryId": 5,
                            "code": "JUMBO_AR"
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 133279,
                    "name": "Rocio hulen",
                    "email": "rociohulen28@gmail.com",
                    "phoneNumber": "+541138704065",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "La Pampa, 1051",
                        "postalCode": "1858",
                        "landmark": null,
                        "location": {
                            "latitude": -34.9196007,
                            "longitude": -58.39540479999999
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "PROVINCIA",
                            "name": "PROVINCIA DE BUENOS AIRES"
                        },
                        "subAdminZone1": {
                            "code": "Pres. Per",
                            "name": "Pres. Perón"
                        },
                        "subAdminZone2": {
                            "code": "Guernica",
                            "name": "Guernica"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "43198104"
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": false
                },
                "ownerKnownSource": {
                    "id": 1155,
                    "externalId": "jumboargentinaj5204lomas",
                    "name": "JUMBO LOMAS",
                    "enable": true,
                    "identification": {
                        "type": "ARG_ID",
                        "value": ""
                    },
                    "email": "",
                    "phoneNumber": "",
                    "knownSourceType": {
                        "id": 1,
                        "name": "Cencosud Store",
                        "enable": true
                    },
                    "retailChain": {
                        "id": 54,
                        "name": "Jumbo (Argentina)",
                        "enable": true,
                        "businessUnitId": 8,
                        "countryId": 5,
                        "code": "JUMBO_AR"
                    }
                },
                "packages": [
                    {
                        "id": 135455,
                        "lpn": "testmap-v19205277JRSA-01",
                        "tracking": "testmap-v19205277JRSA-01",
                        "gddNumber": "testmap-v19205277JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm-stg.cencosud.com/dispatch/labels/2023/October/04/testmap-v19205277JRSA-01.pdf",
                        "courierPackageId": "testmap-v19205277JRSA-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1696424400000,
                    "max": 1696438859000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "testmap-v19205277JRSA-01"
                ],
                "trackings": [
                    "testmap-v19205277JRSA-01"
                ]
            },
            {
                "id": 132452 + code,
                "etaDate": 1696438800000,
                "etaEndDate": 1696453259000,
                "pickupDate": 1696434098604,
                "externalSystemOrderId": "testmap-v19209531JRSA-01",
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
                    "id": 28,
                    "name": "Despacho desde Tienda On Demand",
                    "code": "SFS_ON_DEMAND",
                    "enable": true,
                    "shippingEarly": false
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 133901,
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
                            "latitude": -34.79239,
                            "longitude": -58.41694
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
                            "code": "Providenci",
                            "name": "Providencia"
                        }
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 1155,
                        "externalId": "jumboargentinaj5204lomas",
                        "name": "JUMBO LOMAS",
                        "enable": true,
                        "identification": {
                            "type": "ARG_ID",
                            "value": ""
                        },
                        "email": "",
                        "phoneNumber": "",
                        "knownSourceType": {
                            "id": 1,
                            "name": "Cencosud Store",
                            "enable": true
                        },
                        "retailChain": {
                            "id": 54,
                            "name": "Jumbo (Argentina)",
                            "enable": true,
                            "businessUnitId": 8,
                            "countryId": 5,
                            "code": "JUMBO_AR"
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 133276,
                    "name": "Marianela Balay",
                    "email": "marianelabalay@gmail.com",
                    "phoneNumber": "+541150265808",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Av. Sta. Fe, 1921",
                        "postalCode": "1868",
                        "landmark": null,
                        "location": {
                            "latitude": -34.6772725,
                            "longitude": -58.3869408
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "6",
                            "name": "Buenos Aires"
                        },
                        "subAdminZone1": {
                            "code": "6035",
                            "name": "Avellaneda"
                        },
                        "subAdminZone2": {
                            "code": "DDI piñey",
                            "name": "DDI piñeyro"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "34004176"
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": false
                },
                "ownerKnownSource": {
                    "id": 1155,
                    "externalId": "jumboargentinaj5204lomas",
                    "name": "JUMBO LOMAS",
                    "enable": true,
                    "identification": {
                        "type": "ARG_ID",
                        "value": ""
                    },
                    "email": "",
                    "phoneNumber": "",
                    "knownSourceType": {
                        "id": 1,
                        "name": "Cencosud Store",
                        "enable": true
                    },
                    "retailChain": {
                        "id": 54,
                        "name": "Jumbo (Argentina)",
                        "enable": true,
                        "businessUnitId": 8,
                        "countryId": 5,
                        "code": "JUMBO_AR"
                    }
                },
                "packages": [
                    {
                        "id": 135452,
                        "lpn": "testmap-v19209531JRSA-01",
                        "tracking": "testmap-v19209531JRSA-01",
                        "gddNumber": "testmap-v19209531JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm-stg.cencosud.com/dispatch/labels/2023/October/04/testmap-v19209531JRSA-01.pdf",
                        "courierPackageId": "testmap-v19209531JRSA-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1696438800000,
                    "max": 1696453259000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "testmap-v19209531JRSA-01"
                ],
                "trackings": [
                    "testmap-v19209531JRSA-01"
                ]
            },
            {
                "id": 132448 + code,
                "etaDate": 1696424400000,
                "etaEndDate": 1696438859000,
                "pickupDate": 1696433931459,
                "externalSystemOrderId": "testmap-v19211911JRSA-01",
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
                    "id": 28,
                    "name": "Despacho desde Tienda On Demand",
                    "code": "SFS_ON_DEMAND",
                    "enable": true,
                    "shippingEarly": false
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 133897,
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
                            "latitude": -34.79239,
                            "longitude": -58.41694
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
                            "code": "Providenci",
                            "name": "Providencia"
                        }
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 1155,
                        "externalId": "jumboargentinaj5204lomas",
                        "name": "JUMBO LOMAS",
                        "enable": true,
                        "identification": {
                            "type": "ARG_ID",
                            "value": ""
                        },
                        "email": "",
                        "phoneNumber": "",
                        "knownSourceType": {
                            "id": 1,
                            "name": "Cencosud Store",
                            "enable": true
                        },
                        "retailChain": {
                            "id": 54,
                            "name": "Jumbo (Argentina)",
                            "enable": true,
                            "businessUnitId": 8,
                            "countryId": 5,
                            "code": "JUMBO_AR"
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 133272,
                    "name": "Marcos sebastian Baez battistuti",
                    "email": "marcos_battisbaez@outlook.com",
                    "phoneNumber": "+541124761989",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Mariano Moreno, 1137",
                        "postalCode": "1838",
                        "landmark": null,
                        "location": {
                            "latitude": -34.81463,
                            "longitude": -58.4512854
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "6",
                            "name": "Buenos Aires"
                        },
                        "subAdminZone1": {
                            "code": "Luis Guil",
                            "name": "Luis Guillon"
                        },
                        "subAdminZone2": {
                            "code": "N/A",
                            "name": "N/A"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "34779717"
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": false
                },
                "ownerKnownSource": {
                    "id": 1155,
                    "externalId": "jumboargentinaj5204lomas",
                    "name": "JUMBO LOMAS",
                    "enable": true,
                    "identification": {
                        "type": "ARG_ID",
                        "value": ""
                    },
                    "email": "",
                    "phoneNumber": "",
                    "knownSourceType": {
                        "id": 1,
                        "name": "Cencosud Store",
                        "enable": true
                    },
                    "retailChain": {
                        "id": 54,
                        "name": "Jumbo (Argentina)",
                        "enable": true,
                        "businessUnitId": 8,
                        "countryId": 5,
                        "code": "JUMBO_AR"
                    }
                },
                "packages": [
                    {
                        "id": 135448,
                        "lpn": "testmap-v19211911JRSA-01",
                        "tracking": "testmap-v19211911JRSA-01",
                        "gddNumber": "testmap-v19211911JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm-stg.cencosud.com/dispatch/labels/2023/October/04/testmap-v19211911JRSA-01.pdf",
                        "courierPackageId": "testmap-v19211911JRSA-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1696424400000,
                    "max": 1696438859000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "testmap-v19211911JRSA-01"
                ],
                "trackings": [
                    "testmap-v19211911JRSA-01"
                ]
            },
            {
                "id": 132446 + code,
                "etaDate": 1696438800000,
                "etaEndDate": 1696453259000,
                "pickupDate": 1696433802953,
                "externalSystemOrderId": "testmap-v19214520JRSA-01",
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
                    "id": 28,
                    "name": "Despacho desde Tienda On Demand",
                    "code": "SFS_ON_DEMAND",
                    "enable": true,
                    "shippingEarly": false
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 133895,
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
                            "latitude": -34.79239,
                            "longitude": -58.41694
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
                            "code": "Providenci",
                            "name": "Providencia"
                        }
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 1155,
                        "externalId": "jumboargentinaj5204lomas",
                        "name": "JUMBO LOMAS",
                        "enable": true,
                        "identification": {
                            "type": "ARG_ID",
                            "value": ""
                        },
                        "email": "",
                        "phoneNumber": "",
                        "knownSourceType": {
                            "id": 1,
                            "name": "Cencosud Store",
                            "enable": true
                        },
                        "retailChain": {
                            "id": 54,
                            "name": "Jumbo (Argentina)",
                            "enable": true,
                            "businessUnitId": 8,
                            "countryId": 5,
                            "code": "JUMBO_AR"
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 133270,
                    "name": "RODOLFO OSVALDO TRABUCO",
                    "email": "fitogrua@hotmail.com",
                    "phoneNumber": "+541151033703",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Donato Álvarez, 1005",
                        "postalCode": "1804",
                        "landmark": null,
                        "location": {
                            "latitude": -34.866909,
                            "longitude": -58.522916699999996
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "6",
                            "name": "Buenos Aires"
                        },
                        "subAdminZone1": {
                            "code": "Ezeiza",
                            "name": "Ezeiza"
                        },
                        "subAdminZone2": {
                            "code": "N/A",
                            "name": "N/A"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "11916427"
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": 1
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": false
                },
                "ownerKnownSource": {
                    "id": 1155,
                    "externalId": "jumboargentinaj5204lomas",
                    "name": "JUMBO LOMAS",
                    "enable": true,
                    "identification": {
                        "type": "ARG_ID",
                        "value": ""
                    },
                    "email": "",
                    "phoneNumber": "",
                    "knownSourceType": {
                        "id": 1,
                        "name": "Cencosud Store",
                        "enable": true
                    },
                    "retailChain": {
                        "id": 54,
                        "name": "Jumbo (Argentina)",
                        "enable": true,
                        "businessUnitId": 8,
                        "countryId": 5,
                        "code": "JUMBO_AR"
                    }
                },
                "packages": [
                    {
                        "id": 135446,
                        "lpn": "testmap-v19214520JRSA-01",
                        "tracking": "testmap-v19214520JRSA-01",
                        "gddNumber": "testmap-v19214520JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm-stg.cencosud.com/dispatch/labels/2023/October/04/testmap-v19214520JRSA-01.pdf",
                        "courierPackageId": "testmap-v19214520JRSA-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1696438800000,
                    "max": 1696453259000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "testmap-v19214520JRSA-01"
                ],
                "trackings": [
                    "testmap-v19214520JRSA-01"
                ]
            }
        ],
        "pagination": {
            "totalPages": 2,
            "totalElements": 20,
            "page": 1,
            "pageSize": 10,
            "numberOfElements": 10,
            "isLast": false,
            "isFirst": true
        }
    };
    res.statusCode = 201;
    res.json(response);
};

module.exports = {
    getData
};
