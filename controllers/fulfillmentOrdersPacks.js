const getData = (req, res) => {
    let response = {
        "dispatch": {
            "id": 24140428,
            "etaDate": 1724461200000,
            "etaEndDate": 1724473859000,
            "pickupDate": null,
            "externalSystemOrderId": "v24460045JRSA-01",
            "orderType": "322",
            "size": null,
            "height": null,
            "width": null,
            "length": null,
            "weight": null,
            "createdAt": 1724444417399,
            "updatedAt": 1724462661894,
            "reprint": true,
            "externalDriverId": "9356d93a-8a37-489e-a307-de9be51bb1b9",
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
            "courier": {
                "id": 285,
                "name": "Home Delivery Argentina",
                "code": "HOME_DELIVERY_AR",
                "dni": "11111111-1",
                "phoneNumber": "56999999999",
                "enable": true,
                "countryId": 2,
                "type": {
                    "id": 18,
                    "name": "Transporte Last Mile"
                },
                "virtual": true,
                "shippingEarly": false
            },
            "vehicle": null,
            "driver": null,
            "origin": {
                "id": 24683724,
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
                    "location": {
                        "latitude": -34.79239254,
                        "longitude": -58.41694458
                    },
                    "landmark": "",
                    "country": {
                        "code": "AR",
                        "name": "Argentina"
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
                "knownSourceId": 868,
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
                    "pickupPointName": "",
                    "address": {
                        "street": "Gral. Frías",
                        "postalCode": "B1836",
                        "location": {
                            "latitude": -34.79239254,
                            "longitude": -58.41694458
                        },
                        "landmark": "",
                        "country": {
                            "code": "AR",
                            "name": "Argentina"
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
                    }
                }
            },
            "destination": {
                "id": 24388714,
                "identification": {
                    "value": "27701810"
                },
                "name": "Maximiliano Guidobono",
                "email": "maxikkong@hotmail.com",
                "phoneNumber": "+541156589650",
                "address": {
                    "street": "Francisco Boga 1499",
                    "postalCode": "1852",
                    "location": {
                        "latitude": -34.8241326,
                        "longitude": -58.39743310000001
                    },
                    "landmark": "Mitad de cuadra",
                    "country": {
                        "code": "AR",
                        "name": "Argentina"
                    },
                    "adminZone": {
                        "code": "06",
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
                "knownSourceId": 868,
                "knownSourceTypeId": 1,
                "isClient": false
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
                "pickupPointName": "",
                "address": {
                    "street": "Gral. Frías",
                    "postalCode": "B1836",
                    "location": {
                        "latitude": -34.79239254,
                        "longitude": -58.41694458
                    },
                    "landmark": "",
                    "country": {
                        "code": "AR",
                        "name": "Argentina"
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
                }
            },
            "packages": [
                {
                    "id": 24175538,
                    "lpn": "v24460045JRSA-01",
                    "tracking": "v24460045JRSA-01",
                    "gddNumber": "v24460045JRSA-01",
                    "bigTicket": false,
                    "totalComplements": 0,
                    "numberComplement": 1,
                    "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/August/23/v24460045JRSA-01.pdf",
                    "courierPackageId": "v24460045JRSA-01",
                    "lastStatusCode": "02",
                    "lastStatusDesc": "Entregado",
                    "lastSubStatusCode": "01",
                    "lastSubStatusDesc": "Entregado a Domicilio",
                    "splitLabel": false,
                    "details": [
                        {
                            "id": 413904769,
                            "sku": "11410106001",
                            "skuDescription": "Harina 000 Morixe 1 Kg",
                            "skuImageUrl": "https://jumboargentina.vteximg.com.br/arquivos/ids/504011-55-55/Harina-Morixe-000-1-Kg-Tipo-000-Sin-Atributo-Sin-Atributo-1-118365.jpg?v=636815766627170000",
                            "quantity": 2,
                            "unitPrice": 157000,
                            "measures": {
                                "height": 1,
                                "width": 1,
                                "length": 1,
                                "weight": 1
                            }
                        },
                        {
                            "id": 413904770,
                            "sku": "11410106002",
                            "skuDescription": "Harina 0000 Morixe 1 Kg",
                            "skuImageUrl": "https://jumboargentina.vteximg.com.br/arquivos/ids/504009-55-55/Harina-Morixe-0000-1kg-Tipo-0000-Sin-Atributo-Sin-Atributo-1-118167.jpg?v=636815766619200000",
                            "quantity": 2,
                            "unitPrice": 200000,
                            "measures": {
                                "height": 1,
                                "width": 1,
                                "length": 1,
                                "weight": 1
                            }
                        },
                        {
                            "id": 413904771,
                            "sku": "11410306001",
                            "skuDescription": "Harina Leudante Morixe 1 Kg",
                            "skuImageUrl": "https://jumboargentina.vteximg.com.br/arquivos/ids/504010-55-55/Harina-Morixe-Leudante-Sin-Atributo-Sin-Atributo-Sin-Atributo-Sin-Atributo-1-118323.jpg?v=636815766623100000",
                            "quantity": 2,
                            "unitPrice": 230000,
                            "measures": {
                                "height": 1,
                                "width": 1,
                                "length": 1,
                                "weight": 1
                            }
                        },
                        {
                            "id": 413904772,
                            "sku": "21711313003",
                            "skuDescription": "Tostadas Clasicas Libres Riera 200 Gr",
                            "skuImageUrl": "https://jumboargentina.vteximg.com.br/arquivos/ids/803354-55-55/Tostadas-Clasicas-Libres-Riera-18-X-200g-1-1000072.jpg?v=638379382971270000",
                            "quantity": 4,
                            "unitPrice": 680000,
                            "measures": {
                                "height": 1,
                                "width": 1,
                                "length": 1,
                                "weight": 1
                            }
                        },
                        {
                            "id": 413904773,
                            "sku": "21520301007",
                            "skuDescription": "Levadura Calsa 100 Gr X 1un",
                            "skuImageUrl": "https://jumboargentina.vteximg.com.br/arquivos/ids/184532-55-55/Levadura-Calsa-Levadura-Calsa-100-Gr-1-20863.jpg?v=636383457626370000",
                            "quantity": 1,
                            "unitPrice": 75000,
                            "measures": {
                                "height": 1,
                                "width": 1,
                                "length": 1,
                                "weight": 1
                            }
                        },
                        {
                            "id": 413904774,
                            "sku": "21711313005",
                            "skuDescription": "Tostadas  Dulces Libres Riera 200 Gr",
                            "skuImageUrl": "https://jumboargentina.vteximg.com.br/arquivos/ids/803355-55-55/Tostadas-Dulces-Libres-Riera-18-X-200g-1-1000073.jpg?v=638379382975470000",
                            "quantity": 4,
                            "unitPrice": 680000,
                            "measures": {
                                "height": 1,
                                "width": 1,
                                "length": 1,
                                "weight": 1
                            }
                        },
                        {
                            "id": 413904775,
                            "sku": "13440733001",
                            "skuDescription": "Tampones Kotex Medio 12",
                            "skuImageUrl": "https://jumboargentina.vteximg.com.br/arquivos/ids/828466-55-55/Tampones-Kotex-Digitales-Medio-12-x-1-U-Tampones-Kotex-Medio-12-1-894712.jpg?v=638569353660070000",
                            "quantity": 1,
                            "unitPrice": 425000,
                            "measures": {
                                "height": 1,
                                "width": 1,
                                "length": 1,
                                "weight": 1
                            }
                        },
                        {
                            "id": 413904776,
                            "sku": "13440418002",
                            "skuDescription": "Toalla Kotex Alas Extra Suave Nocturna X16",
                            "skuImageUrl": "https://jumboargentina.vteximg.com.br/arquivos/ids/786917-55-55/Toalla-Kotex-Alas-Extra-Suave-Nocturna-X16-1-883201.jpg?v=638240061672300000",
                            "quantity": 1,
                            "unitPrice": 635000,
                            "measures": {
                                "height": 1,
                                "width": 1,
                                "length": 1,
                                "weight": 1
                            }
                        },
                        {
                            "id": 413904777,
                            "sku": "11450306007",
                            "skuDescription": "Arroz Doble Carolina Molinos Ala X1kg",
                            "skuImageUrl": "https://jumboargentina.vteximg.com.br/arquivos/ids/803590-55-55/Arroz-Doble-Carolina-Molinos-Ala-X1kg-1-1001320.jpg?v=638379924256700000",
                            "quantity": 2,
                            "unitPrice": 950000,
                            "measures": {
                                "height": 1,
                                "width": 1,
                                "length": 1,
                                "weight": 1
                            }
                        },
                        {
                            "id": 413904778,
                            "sku": "12610902002",
                            "skuDescription": "Aceite De Girasol Natura 1.5 L",
                            "skuImageUrl": "https://jumboargentina.vteximg.com.br/arquivos/ids/427751-55-55/Aceite-De-Girasol-Natura-15-L-1-247928.jpg?v=636495154762100000",
                            "quantity": 2,
                            "unitPrice": 599000,
                            "measures": {
                                "height": 1,
                                "width": 1,
                                "length": 1,
                                "weight": 1
                            }
                        },
                        {
                            "id": 413904779,
                            "sku": "14130209006",
                            "skuDescription": "Suavizante Comfort Fiber Protect 500ml",
                            "skuImageUrl": "https://jumboargentina.vteximg.com.br/arquivos/ids/765153-55-55/Suavizante-Comfort-Fiber-Protect-500ml-2-942485.jpg?v=638095018323430000",
                            "quantity": 2,
                            "unitPrice": 890000,
                            "measures": {
                                "height": 1,
                                "width": 1,
                                "length": 1,
                                "weight": 1
                            }
                        },
                        {
                            "id": 413904780,
                            "sku": "14130202016",
                            "skuDescription": "Suavizante Concentrado Comfort Energia Floral 500 Ml",
                            "skuImageUrl": "https://jumboargentina.vteximg.com.br/arquivos/ids/822707-55-55/Suavizante-Concentrado-Comfort-Energia-Floral-500-Ml-1-1008498.jpg?v=638508241180130000",
                            "quantity": 2,
                            "unitPrice": 890000,
                            "measures": {
                                "height": 1,
                                "width": 1,
                                "length": 1,
                                "weight": 1
                            }
                        },
                        {
                            "id": 413904781,
                            "sku": "11121501016",
                            "skuDescription": "Galletitas Surtido Bagley X400g",
                            "skuImageUrl": "https://jumboargentina.vteximg.com.br/arquivos/ids/814284-55-55/Galletitas-Surtido-Bagley-X400g-1-1008719.jpg?v=638452605695030000",
                            "quantity": 4,
                            "unitPrice": 670000,
                            "measures": {
                                "height": 1,
                                "width": 1,
                                "length": 1,
                                "weight": 1
                            }
                        },
                        {
                            "id": 413904782,
                            "sku": "14710311056",
                            "skuDescription": "Papel Higienico Higienol Hoja Simple Max Aloe Panal 4x100m",
                            "skuImageUrl": "https://jumboargentina.vteximg.com.br/arquivos/ids/789213-55-55/Papel-Higienico-Higienol-Max-Aloe-Panal-Hs-100-1-985603.jpg?v=638261246600430000",
                            "quantity": 4,
                            "unitPrice": 2138000,
                            "measures": {
                                "height": 1,
                                "width": 1,
                                "length": 1,
                                "weight": 1
                            }
                        },
                        {
                            "id": 413904783,
                            "sku": "21530101037",
                            "skuDescription": "Margarina Vegetal Danica 200g",
                            "skuImageUrl": "https://jumboargentina.vteximg.com.br/arquivos/ids/791825-55-55/Margarina-Vegetal-Cocina-Reposteria-Danica-200g-Margarina-Vegetal-Cocina-Reposteria-Danica-2-1-994007.jpg?v=638291793756170000",
                            "quantity": 2,
                            "unitPrice": 340000,
                            "measures": {
                                "height": 1,
                                "width": 1,
                                "length": 1,
                                "weight": 1
                            }
                        },
                        {
                            "id": 413904784,
                            "sku": "21530101039",
                            "skuDescription": "Margarina Vegetal Danica Dorada Cremosa  210g",
                            "skuImageUrl": "https://jumboargentina.vteximg.com.br/arquivos/ids/791846-55-55/Margarina-Vegetal-Dorada-Cremosa-Danica-210g-1-994103.jpg?v=638291793827630000",
                            "quantity": 1,
                            "unitPrice": 210000,
                            "measures": {
                                "height": 1,
                                "width": 1,
                                "length": 1,
                                "weight": 1
                            }
                        }
                    ],
                    "measures": {}
                }
            ],
            "tags": [
                {
                    "id": 654740207,
                    "name": "PRIME",
                    "value": "true"
                },
                {
                    "id": 654751525,
                    "name": "invoiceValue",
                    "value": "0"
                },
                {
                    "id": 654740208,
                    "name": "tags",
                    "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"Comentarios del usuario\",\"value\":\"Mitad de cuadra\"},{\"name\":\"invoiceValue\",\"value\":0}]"
                }
            ],
            "deliveryWindow": {
                "min": 1724461200000,
                "max": 1724473859000
            },
            "status": {
                "code": "01",
                "description": "Entregado a Domicilio"
            },
            "measures": null,
            "commitShipDate": null,
            "lpns": [
                "v24460045JRSA-01"
            ],
            "trackings": [
                "v24460045JRSA-01"
            ],
            "driverData": {}
        },
        "trackings": [
            {
                "name": "Recogido (ORIGIN)",
                "category": "ORIGIN",
                "active": true,
                "statusList": [
                    {
                        "code": "09",
                        "description": "Recogido",
                        "observations": null,
                        "date": 1724443721788,
                        "id": 32,
                        "photos": [
                            "https://s3-tms.ecomm.cencosud.com/jart-N-9564526-01_24183390_1724443719210-shipping.jpg"
                        ]
                    },
                    {
                        "code": "999",
                        "description": "Notificado",
                        "observations": "",
                        "date": 1724430019350,
                        "id": 1
                    }
                ],
                "tags": [
                    {
                        "name": "offline",
                        "value": "false"
                    }
                ]
            },
            {
                "name": "Asignado en vehículo (TRANSIT)",
                "category": "TRANSIT",
                "active": true,
                "statusList": [
                    {
                        "code": "9003",
                        "description": "Asignado en vehículo",
                        "observations": "Planned route 5156bc0a-1a79-4ecc-9815-2ebb4bb770a0",
                        "date": 1724433708169,
                        "id": 84
                    },
                    {
                        "code": "9006",
                        "description": "Listo para Recoger",
                        "observations": "",
                        "date": 1724433553198,
                        "id": 86
                    }
                ],
                "tags": []
            },
            {
                "name": "Llegó a destino (DESTINY)",
                "category": "DESTINY",
                "active": true,
                "statusList": [
                    {
                        "code": "9004",
                        "description": "Llegó a destino",
                        "observations": null,
                        "date": 1724448248990,
                        "id": 80
                    },
                    {
                        "code": "9002",
                        "description": "En ruta a destino",
                        "observations": null,
                        "date": 1724445393024,
                        "id": 14
                    }
                ],
                "tags": [
                    {
                        "name": "offline",
                        "value": "false"
                    }
                ]
            },
            {
                "name": "Entregado a Domicilio (DELIVERED)",
                "category": "DELIVERED",
                "active": true,
                "statusList": [
                    {
                        "code": "01",
                        "description": "Entregado a Domicilio",
                        "observations": null,
                        "date": 1724448261628,
                        "id": 31,
                        "photos": [
                            "https://s3-tms.ecomm.cencosud.com/v24460045JRSA-01_24175538_1724448258643-shipping.jpg"
                        ]
                    }
                ],
                "tags": [
                    {
                        "name": "received_by_client",
                        "value": "true"
                    },
                    {
                        "name": "offline",
                        "value": "false"
                    },
                    {
                        "name": "receiver_name",
                        "value": "Maximiliano Guidobono"
                    }
                ]
            }
        ]
    };
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
