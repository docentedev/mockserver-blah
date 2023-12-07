const getData = (req, res) => {
    let response = {
        "dispatches": [
            {
                "id": 126718,
                "etaDate": 16572072800000,
                "etaEndDate": 1657215059000,
                "pickupDate": null,
                "externalSystemOrderId": "v509829974TESTREG01-21",
                "orderType": "Despacho a Domicilio",
                "size": null,
                "height": null,
                "width": null,
                "length": null,
                "weight": null,
                "createdAt": 1681838750095,
                "updatedAt": 1700086584344,
                "reprint": true,
                "externalDriverId": null,
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
                "courier": {
                    "id": 275,
                    "name": "Beetrack",
                    "code": "BEETRACK",
                    "dni": "11111111-1",
                    "phoneNumber": "56999999999",
                    "enable": true,
                    "countryId": 1,
                    "type": {
                        "id": 18,
                        "name": "Transporte Last Mile"
                    },
                    "virtual": true,
                    "shippingEarly": true
                },
                "vehicle": {
                    "id": 589,
                    "name": "Antonio Garabito",
                    "enable": true,
                    "licencePlate": "CGKT94",
                    "vehicleTypeId": 16,
                    "courierId": 271,
                    "propulsionTypeId": 3,
                    "status": "NO_DRIVER"
                },
                "driver": null,
                "origin": {
                    "id": 127741,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "name": "JUMBO ACONCAGUA",
                    "email": "",
                    "phoneNumber": "34-2590400",
                    "address": {
                        "street": "Av. Hermanos Maristas 805",
                        "postalCode": "2100802",
                        "location": {
                            "latitude": -32.82651,
                            "longitude": -70.60254
                        },
                        "landmark": "",
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
                        }
                    },
                    "knownSourceId": 498,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 498,
                        "externalId": "J780",
                        "name": "JUMBO ACONCAGUA",
                        "enable": true,
                        "identification": {
                            "type": "CL_ID",
                            "value": "81.201.000-K"
                        },
                        "email": "",
                        "phoneNumber": "34-2590400",
                        "address": {
                            "street": "Av. Hermanos Maristas 805",
                            "postalCode": "2100802",
                            "location": {
                                "latitude": -32.82651,
                                "longitude": -70.60254
                            },
                            "landmark": "",
                            "country": {
                                "code": "CL",
                                "name": "Chile"
                            },
                            "adminZone": {
                                "code": "05",
                                "name": "Valparaíso"
                            },
                            "subAdminZone1": {
                                "code": "053",
                                "name": "Los Andes"
                            },
                            "subAdminZone2": {
                                "code": "05301",
                                "name": "Los Andes"
                            }
                        },
                        "knownSourceType": {
                            "id": 1,
                            "name": "Cencosud Store",
                            "enable": true
                        },
                        "retailChain": {
                            "id": 9,
                            "name": "Spid (Chile)",
                            "enable": true,
                            "businessUnitId": 4,
                            "countryId": 1,
                            "code": "SPID_CL"
                        }
                    },
                    "type": "STORE"
                },
                "destination": {
                    "id": 127188,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "name": "JUMBO ACONCAGUA",
                    "email": "",
                    "phoneNumber": "34-2590400",
                    "address": {
                        "street": "Av. Hermanos Maristas 805",
                        "postalCode": "2100802",
                        "location": {
                            "latitude": -32.82651,
                            "longitude": -70.60254
                        },
                        "landmark": "",
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
                        }
                    },
                    "knownSourceId": 498,
                    "knownSourceTypeId": 1,
                    "isClient": false
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": false
                },
                "ownerKnownSource": {
                    "id": 498,
                    "externalId": "J780",
                    "name": "JUMBO ACONCAGUA",
                    "enable": true,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "email": "",
                    "phoneNumber": "34-2590400",
                    "address": {
                        "street": "Av. Hermanos Maristas 805",
                        "postalCode": "2100802",
                        "location": {
                            "latitude": -32.82651,
                            "longitude": -70.60254
                        },
                        "landmark": "",
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
                        }
                    },
                    "knownSourceType": {
                        "id": 1,
                        "name": "Cencosud Store",
                        "enable": true
                    },
                    "retailChain": {
                        "id": 9,
                        "name": "Spid (Chile)",
                        "enable": true,
                        "businessUnitId": 4,
                        "countryId": 1,
                        "code": "SPID_CL"
                    }
                },
                "packages": [
                    {
                        "id": 129437,
                        "lpn": "v509829974TESTREG01-21",
                        "tracking": "v509829974TESTREG01-21",
                        "gddNumber": "v509829974TESTREG01-21",
                        "bigTicket": true,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm-stg.cencosud.com/dispatch/labels/2023/April/18/v509829974TESTREG01-21.pdf",
                        "courierPackageId": "v509829974TESTREG01-21",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": "9003",
                        "lastSubStatusDesc": "Asignado en vehículo",
                        "splitLabel": false,
                        "details": [
                            {
                                "id": 185619,
                                "sku": "3976",
                                "skuDescription": "test5 Cerezas Dole x kg",
                                "skuImageUrl": "",
                                "quantity": 7,
                                "unitPrice": 1590,
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
                        "id": 595401,
                        "name": "bulks",
                        "value": "5"
                    },
                    {
                        "id": 595403,
                        "name": "tags",
                        "value": "[{\"cigarros\":\"NO\"},{\"alcoholicos\":\"NO\"},{\"congelados\":\"NO\"},{\"Ítems\":1},{\"Unidades\":1}]"
                    },
                    {
                        "id": 595405,
                        "name": "items",
                        "value": "[{\"name\":\"Bolsa\",\"description\":\"Bolsa\",\"code\":\"\",\"original_quantity\":1,\"quantity\":1},{\"name\":\"Bolsa\",\"description\":\"Bolsa\",\"code\":\"\",\"original_quantity\":1,\"quantity\":2}, {\"name\":\"Bolsa\",\"description\":\"Bolsa\",\"code\":\"\",\"original_quantity\":1,\"quantity\":2}]"
                    },
                    {
                        "id": 595400,
                        "name": "pickup_address",
                        "value": "{\"name\":\"St #4 NW FL\",\"latitude\":-32.82744,\"longitude\":-70.602695}"
                    },
                    {
                        "id": 595399,
                        "name": "flag",
                        "value": "SPID35"
                    },
                    {
                        "id": 595402,
                        "name": "groups",
                        "value": "[{\"category\":\"TIPOS DE NEGOCIOS\",\"name\":\"SPID35\"},{\"category\":\"Tipo\",\"name\":\"Agendamiento\"}]"
                    },
                    {
                        "id": 595404,
                        "name": "identifier",
                        "value": "v509829972-01"
                    }
                ],
                "deliveryWindow": {
                    "min": 16572072800000,
                    "max": 1657215059000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "commitShipDate": null,
                "lpns": [
                    "v509829974TESTREG01-21"
                ],
                "trackings": [
                    "v509829974TESTREG01-21"
                ]
            },
            {
                "id": 121989,
                "etaDate": 1674151200000,
                "etaEndDate": 1674158400000,
                "pickupDate": null,
                "externalSystemOrderId": "v83668300jmch-16-TEST",
                "orderType": "Despacho a Domicilio",
                "size": null,
                "height": null,
                "width": null,
                "length": null,
                "weight": null,
                "createdAt": 1674163448402,
                "updatedAt": 1700086589383,
                "reprint": true,
                "externalDriverId": null,
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
                "courier": {
                    "id": 268,
                    "name": "Home Delivery Chile",
                    "code": "HOME_DELIVERY",
                    "dni": "93834000-5",
                    "phoneNumber": "56999999999",
                    "enable": true,
                    "countryId": 1,
                    "type": {
                        "id": 18,
                        "name": "Transporte Last Mile"
                    },
                    "virtual": true,
                    "shippingEarly": true
                },
                "vehicle": {
                    "id": 589,
                    "name": "Antonio Garabito",
                    "enable": true,
                    "licencePlate": "CGKT94",
                    "vehicleTypeId": 16,
                    "courierId": 271,
                    "propulsionTypeId": 3,
                    "status": "NO_DRIVER"
                },
                "driver": null,
                "origin": {
                    "id": 122958,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "name": "JUMBO KENNEDY",
                    "email": "",
                    "phoneNumber": "2-3558400",
                    "address": {
                        "street": "Av. Kennedy 9001",
                        "postalCode": "7591567",
                        "location": {
                            "latitude": -33.39154,
                            "longitude": -70.54593
                        },
                        "landmark": "",
                        "country": {
                            "code": "CL",
                            "name": "Chile"
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
                    "knownSourceId": 112,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 112,
                        "externalId": "J502",
                        "name": "JUMBO KENNEDY",
                        "enable": true,
                        "identification": {
                            "type": "CL_ID",
                            "value": "81.201.000-K"
                        },
                        "email": "",
                        "phoneNumber": "+56987654321",
                        "address": {
                            "street": "Av. Kennedy 9001",
                            "postalCode": "7591567",
                            "location": {
                                "latitude": -33.39154,
                                "longitude": -70.54593
                            },
                            "landmark": "",
                            "country": {
                                "code": "CL",
                                "name": "Chile"
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
                        }
                    },
                    "type": "STORE"
                },
                "destination": {
                    "id": 122404,
                    "identification": {
                        "type": "rutCHL",
                        "value": "188407684"
                    },
                    "name": "Juan Pérez Pérez",
                    "email": "juanperez@gmail.com",
                    "phoneNumber": "56956186039",
                    "address": {
                        "street": "Las Carmelitas 385",
                        "location": {
                            "latitude": -33.4058672725479,
                            "longitude": -70.5584041723203
                        },
                        "country": {
                            "code": "CL",
                            "name": "Chile"
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
                    "isClient": true
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": false
                },
                "ownerKnownSource": {
                    "id": 112,
                    "externalId": "J502",
                    "name": "JUMBO KENNEDY",
                    "enable": true,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "email": "",
                    "phoneNumber": "+56987654321",
                    "address": {
                        "street": "Av. Kennedy 9001",
                        "postalCode": "7591567",
                        "location": {
                            "latitude": -33.39154,
                            "longitude": -70.54593
                        },
                        "landmark": "",
                        "country": {
                            "code": "CL",
                            "name": "Chile"
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
                    }
                },
                "packages": [
                    {
                        "id": 124449,
                        "lpn": "v83668300jmch-16-TEST",
                        "tracking": "v83668300jmch-16-TEST",
                        "gddNumber": "v83668300jmch-16-TEST",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm-stg.cencosud.com/dispatch/labels/2023/January/19/v83668300jmch-16-TEST.pdf",
                        "courierPackageId": "v83668300jmch-16-TEST",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": "9003",
                        "lastSubStatusDesc": "Asignado en vehículo",
                        "splitLabel": false,
                        "details": [
                            {
                                "id": 167917,
                                "sku": "267558",
                                "skuDescription": "Spaghetti N° 5 bolsa 400 g",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/453113-100-100/Spaghetti-N°-5-bolsa-400-g.jpg?v=637662990054370000",
                                "quantity": 1,
                                "unitPrice": 1019,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167908,
                                "sku": "1897401",
                                "skuDescription": "Sal ajo pimienta 300 g",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/469668-100-100/Sal-ajo-pimienta-300-g.jpg?v=637789897450700000",
                                "quantity": 1,
                                "unitPrice": 1299,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167909,
                                "sku": "1897402",
                                "skuDescription": "Sal mostaza 300 g",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/465491-100-100/Sal-mostaza-300-g.jpg?v=637769389881170000",
                                "quantity": 1,
                                "unitPrice": 1299,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167910,
                                "sku": "264584",
                                "skuDescription": "Arroz grado 1 gran selección grano largo y ancho 1 kg",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/459002-100-100/Arroz-grado-1-gran-seleccion-grano-largo-y-ancho-1-kg.jpg?v=637704239522370000",
                                "quantity": 1,
                                "unitPrice": 1499,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167911,
                                "sku": "264767",
                                "skuDescription": "Azúcar blanca 1 kg",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/470718-100-100/Azucar-blanca-granulada-1-kg.jpg?v=637800400209970000",
                                "quantity": 1,
                                "unitPrice": 1149,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167912,
                                "sku": "266032",
                                "skuDescription": "Harina sin polvos de hornear 1 kg",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/453089-100-100/Harina-sin-polvos-de-hornear-1-kg.jpg?v=637662989900730000",
                                "quantity": 1,
                                "unitPrice": 1159,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167913,
                                "sku": "395904",
                                "skuDescription": "Salsa de tomate italiana 6 un. 200 g",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/416180-100-100/Salsa-de-tomate-italiana-6-un-200-g-c-u.jpg?v=637479989959670000",
                                "quantity": 1,
                                "unitPrice": 2819,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167914,
                                "sku": "264982",
                                "skuDescription": "Cabellitos 400 g",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/456070-100-100/Cabellitos-400-g.jpg?v=637672394693130000",
                                "quantity": 1,
                                "unitPrice": 949,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167915,
                                "sku": "173731",
                                "skuDescription": "Pilas alcalina D2 2 un.",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/458952-100-100/Pilas-alcalina-D2-2-un.jpg?v=637703390495530000",
                                "quantity": 1,
                                "unitPrice": 4690,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167916,
                                "sku": "265758",
                                "skuDescription": "Espirales 400 g",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/456071-100-100/Espirales-400-g.jpg?v=637672394698830000",
                                "quantity": 1,
                                "unitPrice": 949,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167918,
                                "sku": "265549",
                                "skuDescription": "Corbatas 400 g",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/456080-100-100/Corbatas-400-g.jpg?v=637672394741870000",
                                "quantity": 1,
                                "unitPrice": 949,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167919,
                                "sku": "265797",
                                "skuDescription": "Canutos 400 g",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/456073-100-100/Canutos-400-g.jpg?v=637672394713970000",
                                "quantity": 1,
                                "unitPrice": 949,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167920,
                                "sku": "264425",
                                "skuDescription": "Aceite vegetal 1 L",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/485087-100-100/Aceite-vegetal-1-L.jpg?v=637891751764870000",
                                "quantity": 1,
                                "unitPrice": 3499,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167921,
                                "sku": "671314",
                                "skuDescription": "Aceite de Maravilla libre de colesterol 1 L",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/467643-100-100/Aceite-de-Maravilla-libre-de-colesterol-1-L.jpg?v=637782183967430000",
                                "quantity": 1,
                                "unitPrice": 3959,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167922,
                                "sku": "1841854",
                                "skuDescription": "Atún lomitos agua 104 g drenado",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/417841-100-100/Atun-lomitos-agua-104-g-drenado.jpg?v=637493652788930000",
                                "quantity": 7,
                                "unitPrice": 1269,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167923,
                                "sku": "1843154",
                                "skuDescription": "Yoghurt batido multipack berries 12 x 115 g",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/435192-100-100/Yoghurt-batido-multipack-berries-12-x-115-g.jpg?v=637564232235030000",
                                "quantity": 1,
                                "unitPrice": 2769,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167924,
                                "sku": "1830175",
                                "skuDescription": "Pan molde Dúo XL 760 g",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/412590-100-100/Pan-de-molde-duo-XL-760-g.jpg?v=637469615378330000",
                                "quantity": 1,
                                "unitPrice": 2389,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167925,
                                "sku": "1051187",
                                "skuDescription": "Mayonesa 394 g",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/469514-100-100/Mayonesa-394-g.jpg?v=637788245598070000",
                                "quantity": 1,
                                "unitPrice": 2869,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167926,
                                "sku": "1860647",
                                "skuDescription": "Cereal Trix 700g",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/426813-100-100/Cereal-Trix-700-g.jpg?v=637528066157130000",
                                "quantity": 1,
                                "unitPrice": 4549,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167927,
                                "sku": "1860645",
                                "skuDescription": "Cereal Chocapic Sin Azúcar Añadida 720 g",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/499264-100-100/Cereal-Chocapic-720g.jpg?v=637940102808130000",
                                "quantity": 1,
                                "unitPrice": 4549,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167928,
                                "sku": "298047",
                                "skuDescription": "Paté de Jamón PF 125 g",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/342807-100-100/Principal-17331.jpg?v=637285410474730000",
                                "quantity": 2,
                                "unitPrice": 549,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167929,
                                "sku": "1570037",
                                "skuDescription": "Leche en polvo entera 1440 g",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/413890-100-100/Leche-en-polvo-entera-Colun-1440-g.jpg?v=637473107770130000",
                                "quantity": 1,
                                "unitPrice": 9149,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167930,
                                "sku": "1793578",
                                "skuDescription": "Saborizante de leche sabor chocolate 1 kg",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/445154-100-100/1793578-01_73465.jpg?v=637617217681500000",
                                "quantity": 1,
                                "unitPrice": 5949,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167931,
                                "sku": "498204002",
                                "skuDescription": "Galletas Triton Chocolate 126g",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/430784-100-100/Galletas-Triton-chocolate-126g.jpg?v=637542027762230000",
                                "quantity": 8,
                                "unitPrice": 680,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167932,
                                "sku": "990052",
                                "skuDescription": "Galletas salvado tripack 642 g",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/396452-100-100/Galletas-de-Salvado-Bagley-Tripack-642-g-Con-omega-9.jpg?v=637469295001970000",
                                "quantity": 1,
                                "unitPrice": 1919,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 167933,
                                "sku": "498166003-PAK",
                                "skuDescription": "Pack 6 un. Bebida láctea chocolate 170 ml",
                                "skuImageUrl": "https://jumbo.vteximg.com.br/arquivos/ids/409689-100-100/Pack-bebida-lactea-Shake-Shake-chocolate-6-unid-170-ml-c-u.jpg?v=637469366154430000",
                                "quantity": 1,
                                "unitPrice": 2994,
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
                        "id": 510089,
                        "name": "tags",
                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"\"},{\"name\":\"Local de Origen\",\"value\":\"JA-Jumbo Kennedy\"},{\"name\":\"Comuna\",\"value\":\"Las Condes\"},{\"name\":\"Promesa\",\"value\":null},{\"name\":\"Ventanahoraria_inicio\",\"value\":\"09:00\"},{\"name\":\"Ventanahoraria_fin\",\"value\":\"11:00\"},{\"name\":\"Ítems\",\"value\":4},{\"name\":\"Unidades\",\"value\":40},{\"name\":\"Transportadora\",\"value\":\"AG Kennedy\"},{\"name\":\"Cliente que recibe\",\"value\":\"Juan Pérez Pérez\"},{\"name\":\"Origen\",\"value\":\"App\"},{\"name\":\"Congelados\",\"value\":\"Si\"},{\"name\":\"Prime\",\"value\":\"no\"},{\"name\":\"VIP\",\"value\":\"no\"},{\"name\":\"Cigarros\",\"value\":\"no\"},{\"name\":\"Alcoholicos\",\"value\":\"no\"}]"
                    },
                    {
                        "id": 510099,
                        "name": "flag",
                        "value": "Jumbo"
                    },
                    {
                        "id": 510100,
                        "name": "pickup_address",
                        "value": "{\"name\":\"Av. Kennedy 9001, Las Condes\",\"latitude\":-33.480186,\"longitude\":-70.751607}"
                    },
                    {
                        "id": 510101,
                        "name": "min_delivery_time",
                        "value": "2022-11-21 17:00:00"
                    },
                    {
                        "id": 510102,
                        "name": "contact_email",
                        "value": "xmarinlo@gmail.com"
                    },
                    {
                        "id": 510090,
                        "name": "mode",
                        "value": "3"
                    },
                    {
                        "id": 510092,
                        "name": "longitude",
                        "value": "-70.5584041723203"
                    },
                    {
                        "id": 510087,
                        "name": "service_time",
                        "value": "20"
                    },
                    {
                        "id": 510093,
                        "name": "priority",
                        "value": "1"
                    },
                    {
                        "id": 510094,
                        "name": "max_delivery_time",
                        "value": "2022-11-21 19:00:00"
                    },
                    {
                        "id": 510105,
                        "name": "bulks",
                        "value": "N/A"
                    },
                    {
                        "id": 510097,
                        "name": "load",
                        "value": "10.3"
                    },
                    {
                        "id": 510098,
                        "name": "contact_address",
                        "value": "Las Carmelitas 385"
                    },
                    {
                        "id": 510095,
                        "name": "contact_phone",
                        "value": "56956186039"
                    },
                    {
                        "id": 510086,
                        "name": "contact_id",
                        "value": "186140036"
                    },
                    {
                        "id": 510104,
                        "name": "groups",
                        "value": "[{\"category\":\"TIPOS DE NEGOCIOS\",\"name\":\"Jumbo Kennedy\"},{\"category\":\"Tipo\",\"name\":\"Agendamiento\"}]"
                    },
                    {
                        "id": 510096,
                        "name": "latitude",
                        "value": "-33.40586727254793"
                    },
                    {
                        "id": 510088,
                        "name": "identifier",
                        "value": "v83668300jmch-16-TEST"
                    },
                    {
                        "id": 510091,
                        "name": "originalId",
                        "value": "v83668300jmch-16-TEST"
                    },
                    {
                        "id": 510103,
                        "name": "contact_name",
                        "value": "Juan Pérez Pérez"
                    }
                ],
                "deliveryWindow": {
                    "min": 1674151200000,
                    "max": 1674158400000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "commitShipDate": null,
                "lpns": [
                    "v83668300jmch-16-TEST"
                ],
                "trackings": [
                    "v83668300jmch-16-TEST"
                ]
            },
            {
                "id": 114882,
                "etaDate": 1669690800000,
                "etaEndDate": 1669777199000,
                "pickupDate": null,
                "externalSystemOrderId": "1279640049971-01",
                "orderType": "Despacho a Domicilio",
                "size": null,
                "height": null,
                "width": null,
                "length": null,
                "weight": null,
                "createdAt": 1669666023529,
                "updatedAt": 1699977722946,
                "reprint": true,
                "externalDriverId": null,
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
                "courier": {
                    "id": 268,
                    "name": "Home Delivery Chile",
                    "code": "HOME_DELIVERY",
                    "dni": "93834000-5",
                    "phoneNumber": "56999999999",
                    "enable": true,
                    "countryId": 1,
                    "type": {
                        "id": 18,
                        "name": "Transporte Last Mile"
                    },
                    "virtual": true,
                    "shippingEarly": true
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 115756,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "name": "JUMBO ACONCAGUA",
                    "email": "",
                    "phoneNumber": "34-2590400",
                    "address": {
                        "street": "Av. Hermanos Maristas 805",
                        "postalCode": "2100802",
                        "location": {
                            "latitude": -32.82651,
                            "longitude": -70.60254
                        },
                        "landmark": "",
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
                        }
                    },
                    "knownSourceId": 125,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 125,
                        "externalId": "J780",
                        "name": "JUMBO LOS ANDES",
                        "enable": true,
                        "identification": {
                            "type": "CL_ID",
                            "value": "81.201.000-K"
                        },
                        "email": "",
                        "phoneNumber": "34-2590400",
                        "address": {
                            "street": "Av. Hermanos Maristas 805",
                            "postalCode": "2100802",
                            "location": {
                                "latitude": -32.82651,
                                "longitude": -70.60254
                            },
                            "landmark": "",
                            "country": {
                                "code": "CL",
                                "name": "Chile"
                            },
                            "adminZone": {
                                "code": "05",
                                "name": "Valparaíso"
                            },
                            "subAdminZone1": {
                                "code": "053",
                                "name": "Los Andes"
                            },
                            "subAdminZone2": {
                                "code": "05301",
                                "name": "Los Andes"
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
                        }
                    },
                    "type": "STORE"
                },
                "destination": {
                    "id": 115212,
                    "identification": {
                        "type": "rutCHL",
                        "value": "182228575"
                    },
                    "name": "Roberto Alarcon Ravelo",
                    "email": "roberto.alarconravelo@cencosud.cl",
                    "phoneNumber": "+56959154054",
                    "address": {
                        "street": "Arturo Prat 300",
                        "location": {
                            "latitude": -32.845053,
                            "longitude": -70.6025874
                        },
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
                        }
                    },
                    "isClient": true
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": false
                },
                "ownerKnownSource": {
                    "id": 125,
                    "externalId": "J780",
                    "name": "JUMBO LOS ANDES",
                    "enable": true,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "email": "",
                    "phoneNumber": "34-2590400",
                    "address": {
                        "street": "Av. Hermanos Maristas 805",
                        "postalCode": "2100802",
                        "location": {
                            "latitude": -32.82651,
                            "longitude": -70.60254
                        },
                        "landmark": "",
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
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
                    }
                },
                "packages": [
                    {
                        "id": 117128,
                        "lpn": "1279640049971-01",
                        "tracking": "1279640049971-01",
                        "gddNumber": "1279640049971-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm-stg.cencosud.com/dispatch/labels/2022/November/28/1279640049971-01.pdf",
                        "courierPackageId": "1279640049971-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": "9003",
                        "lastSubStatusDesc": "Asignado en vehículo",
                        "splitLabel": false,
                        "details": [
                            {
                                "id": 130778,
                                "sku": "264598",
                                "skuDescription": "Arroz Grado 2 Tucapel 1 kg, Graneado, Grano largo y ancho",
                                "skuImageUrl": "https://jumboprepro.vteximg.com.br/arquivos/ids/207344-55-55/arroz.jpg?v=637320846978670000",
                                "quantity": 2,
                                "unitPrice": 1229,
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
                        "id": 390401,
                        "name": "tags",
                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"\"},{\"name\":\"Local de Origen\",\"value\":\"JA-Jumbo Los Andes\"},{\"name\":\"Comuna\",\"value\":\"Los Andes\"},{\"name\":\"Promesa\",\"value\":null},{\"name\":\"Ventanahoraria_inicio\",\"value\":\"00:00\"},{\"name\":\"Ventanahoraria_fin\",\"value\":\"23:59\"},{\"name\":\"Ítems\",\"value\":1},{\"name\":\"Unidades\",\"value\":1},{\"name\":\"Transportadora\",\"value\":\"Z5 Pingueral Concepcion\"},{\"name\":\"Cliente que recibe\",\"value\":\"Roberto Alarcon Ravelo\"},{\"name\":\"Origen\",\"value\":\"Web\"},{\"name\":\"Congelados\",\"value\":\" \"},{\"name\":\"Prime\",\"value\":\"\"},{\"name\":\"VIP\",\"value\":\"\"}]"
                    },
                    {
                        "id": 390414,
                        "name": "contact_phone",
                        "value": "+56959154054"
                    },
                    {
                        "id": 390403,
                        "name": "identifier",
                        "value": "1279640049971-01"
                    },
                    {
                        "id": 390409,
                        "name": "load",
                        "value": "10.3"
                    },
                    {
                        "id": 390408,
                        "name": "contact_email",
                        "value": "roberto.alarconravelo@cencosud.cl"
                    },
                    {
                        "id": 390405,
                        "name": "max_delivery_time",
                        "value": "2022-11-29 23:59:59"
                    },
                    {
                        "id": 390398,
                        "name": "flag",
                        "value": "JUMBO"
                    },
                    {
                        "id": 390412,
                        "name": "contact_name",
                        "value": "Roberto Alarcon Ravelo"
                    },
                    {
                        "id": 390410,
                        "name": "groups",
                        "value": "[{\"category\":\"TIPOS DE NEGOCIOS\",\"name\":\"Jumbo Los Andes\"},{\"category\":\"Tipo\",\"name\":\"Agendamiento\"}]"
                    },
                    {
                        "id": 390413,
                        "name": "contact_address",
                        "value": "Arturo Prat 300 null , Los Andes,null"
                    },
                    {
                        "id": 390406,
                        "name": "originalId",
                        "value": "1279640049971-01"
                    },
                    {
                        "id": 390396,
                        "name": "service_time",
                        "value": "20"
                    },
                    {
                        "id": 390400,
                        "name": "priority",
                        "value": "1"
                    },
                    {
                        "id": 390402,
                        "name": "min_delivery_time",
                        "value": "2022-11-29 00:00:00"
                    },
                    {
                        "id": 390397,
                        "name": "pickup_address",
                        "value": "{\"name\":\"St #4 NW FL\",\"latitude\":-32.82744,\"longitude\":-70.602695}"
                    },
                    {
                        "id": 390415,
                        "name": "bulks",
                        "value": "N/A"
                    },
                    {
                        "id": 390407,
                        "name": "contact_id",
                        "value": "182228575"
                    },
                    {
                        "id": 390411,
                        "name": "longitude",
                        "value": "-70.60258739999999"
                    },
                    {
                        "id": 390399,
                        "name": "mode",
                        "value": "3"
                    },
                    {
                        "id": 390404,
                        "name": "latitude",
                        "value": "-32.845053"
                    }
                ],
                "deliveryWindow": {
                    "min": 1669690800000,
                    "max": 1669777199000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "commitShipDate": null,
                "lpns": [
                    "1279640049971-01"
                ],
                "trackings": [
                    "1279640049971-01"
                ]
            },
            {
                "id": 115804,
                "etaDate": 1671530400000,
                "etaEndDate": 1671541259000,
                "pickupDate": null,
                "externalSystemOrderId": "1284690050863-01",
                "orderType": "Despacho a Domicilio",
                "size": null,
                "height": null,
                "width": null,
                "length": null,
                "weight": null,
                "createdAt": 1671485367888,
                "updatedAt": 1695665990314,
                "reprint": true,
                "externalDriverId": null,
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
                "courier": {
                    "id": 268,
                    "name": "Home Delivery Chile",
                    "code": "HOME_DELIVERY",
                    "dni": "93834000-5",
                    "phoneNumber": "56999999999",
                    "enable": true,
                    "countryId": 1,
                    "type": {
                        "id": 18,
                        "name": "Transporte Last Mile"
                    },
                    "virtual": true,
                    "shippingEarly": true
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 116692,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "name": "JUMBO ACONCAGUA",
                    "email": "",
                    "phoneNumber": "34-2590400",
                    "address": {
                        "street": "Av. Hermanos Maristas 805",
                        "postalCode": "2100802",
                        "location": {
                            "latitude": -32.82651,
                            "longitude": -70.60254
                        },
                        "landmark": "",
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
                        }
                    },
                    "knownSourceId": 125,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 125,
                        "externalId": "J780",
                        "name": "JUMBO LOS ANDES",
                        "enable": true,
                        "identification": {
                            "type": "CL_ID",
                            "value": "81.201.000-K"
                        },
                        "email": "",
                        "phoneNumber": "34-2590400",
                        "address": {
                            "street": "Av. Hermanos Maristas 805",
                            "postalCode": "2100802",
                            "location": {
                                "latitude": -32.82651,
                                "longitude": -70.60254
                            },
                            "landmark": "",
                            "country": {
                                "code": "CL",
                                "name": "Chile"
                            },
                            "adminZone": {
                                "code": "05",
                                "name": "Valparaíso"
                            },
                            "subAdminZone1": {
                                "code": "053",
                                "name": "Los Andes"
                            },
                            "subAdminZone2": {
                                "code": "05301",
                                "name": "Los Andes"
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
                        }
                    },
                    "type": "STORE"
                },
                "destination": {
                    "id": 116138,
                    "identification": {
                        "type": "rutCHL",
                        "value": "182228575"
                    },
                    "name": "Roberto Alarcon Ravelo",
                    "email": "roberto.alarconravelo@cencosud.cl",
                    "phoneNumber": "+56959154054",
                    "address": {
                        "street": "Arturo Prat 300",
                        "location": {
                            "latitude": -32.845053,
                            "longitude": -70.6025874
                        },
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
                        }
                    },
                    "isClient": true
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": false
                },
                "ownerKnownSource": {
                    "id": 125,
                    "externalId": "J780",
                    "name": "JUMBO LOS ANDES",
                    "enable": true,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "email": "",
                    "phoneNumber": "34-2590400",
                    "address": {
                        "street": "Av. Hermanos Maristas 805",
                        "postalCode": "2100802",
                        "location": {
                            "latitude": -32.82651,
                            "longitude": -70.60254
                        },
                        "landmark": "",
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
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
                    }
                },
                "packages": [
                    {
                        "id": 118069,
                        "lpn": "1284690050863-01",
                        "tracking": "1284690050863-01",
                        "gddNumber": "1284690050863-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm-stg.cencosud.com/dispatch/labels/2022/December/19/1284690050863-01.pdf",
                        "courierPackageId": "1284690050863-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": "9003",
                        "lastSubStatusDesc": "Asignado en vehículo",
                        "splitLabel": false,
                        "details": [
                            {
                                "id": 133479,
                                "sku": "1623060",
                                "skuDescription": "Atún Robinson Crusoe Lata 120 g drenado, 170 g neto, En Agua",
                                "skuImageUrl": "https://jumboprepro.vteximg.com.br/arquivos/ids/207376-55-55/atun_agua_F2.jpg?v=637648263280930000",
                                "quantity": 1,
                                "unitPrice": 1499,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 133480,
                                "sku": "1422251",
                                "skuDescription": "Sémola Vivo con salsa berries 150 g",
                                "skuImageUrl": "https://jumboprepro.vteximg.com.br/arquivos/ids/202178-55-55/vivo.jpg?v=636858427594700000",
                                "quantity": 1,
                                "unitPrice": 599,
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
                        "id": 400605,
                        "name": "priority",
                        "value": "1"
                    },
                    {
                        "id": 400612,
                        "name": "originalId",
                        "value": "1284690050863-01"
                    },
                    {
                        "id": 400601,
                        "name": "pickup_address",
                        "value": "{\"name\":\"St #4 NW FL\",\"latitude\":-32.82744,\"longitude\":-70.602695}"
                    },
                    {
                        "id": 400602,
                        "name": "flag",
                        "value": "JUMBO"
                    },
                    {
                        "id": 400615,
                        "name": "tags",
                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"\"},{\"name\":\"Local de Origen\",\"value\":\"JA-Jumbo Los Andes\"},{\"name\":\"Comuna\",\"value\":\"Los Andes\"},{\"name\":\"Promesa\",\"value\":null},{\"name\":\"Ventanahoraria_inicio\",\"value\":\"07:00\"},{\"name\":\"Ventanahoraria_fin\",\"value\":\"10:00\"},{\"name\":\"Ítems\",\"value\":2},{\"name\":\"Unidades\",\"value\":2},{\"name\":\"Transportadora\",\"value\":\"Z1 Los Andes (San Felipe)\"},{\"name\":\"Cliente que recibe\",\"value\":\"Roberto Alarcon Ravelo\"},{\"name\":\"Origen\",\"value\":\"Web\"},{\"name\":\"Congelados\",\"value\":\"Congelados\"},{\"name\":\"Prime\",\"value\":\"\"},{\"name\":\"VIP\",\"value\":\"\"}]"
                    },
                    {
                        "id": 400617,
                        "name": "contact_phone",
                        "value": "+56959154054"
                    },
                    {
                        "id": 400604,
                        "name": "mode",
                        "value": "3"
                    },
                    {
                        "id": 400616,
                        "name": "contact_address",
                        "value": "Arturo Prat 300 null , Los Andes,null"
                    },
                    {
                        "id": 400608,
                        "name": "contact_id",
                        "value": "182228575"
                    },
                    {
                        "id": 400614,
                        "name": "contact_name",
                        "value": "Roberto Alarcon Ravelo"
                    },
                    {
                        "id": 400599,
                        "name": "min_delivery_time",
                        "value": "2022-12-20 07:00:00"
                    },
                    {
                        "id": 400613,
                        "name": "longitude",
                        "value": "-70.60258739999999"
                    },
                    {
                        "id": 400606,
                        "name": "latitude",
                        "value": "-32.845053"
                    },
                    {
                        "id": 400610,
                        "name": "load",
                        "value": "10.3"
                    },
                    {
                        "id": 400611,
                        "name": "groups",
                        "value": "[{\"category\":\"TIPOS DE NEGOCIOS\",\"name\":\"Jumbo Los Andes\"},{\"category\":\"Tipo\",\"name\":\"Agendamiento\"}]"
                    },
                    {
                        "id": 400600,
                        "name": "service_time",
                        "value": "20"
                    },
                    {
                        "id": 400607,
                        "name": "max_delivery_time",
                        "value": "2022-12-20 10:00:59"
                    },
                    {
                        "id": 400609,
                        "name": "contact_email",
                        "value": "roberto.alarconravelo@cencosud.cl"
                    },
                    {
                        "id": 400603,
                        "name": "identifier",
                        "value": "1284690050863-01"
                    }
                ],
                "deliveryWindow": {
                    "min": 1671530400000,
                    "max": 1671541259000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "commitShipDate": null,
                "lpns": [
                    "1284690050863-01"
                ],
                "trackings": [
                    "1284690050863-01"
                ]
            },
            {
                "id": 115805,
                "etaDate": 1671548400000,
                "etaEndDate": 1671559259000,
                "pickupDate": null,
                "externalSystemOrderId": "1284850050887-01",
                "orderType": "Despacho a Domicilio",
                "size": null,
                "height": null,
                "width": null,
                "length": null,
                "weight": null,
                "createdAt": 1671540422244,
                "updatedAt": 1671540428270,
                "reprint": true,
                "externalDriverId": null,
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
                "courier": {
                    "id": 268,
                    "name": "Home Delivery Chile",
                    "code": "HOME_DELIVERY",
                    "dni": "93834000-5",
                    "phoneNumber": "56999999999",
                    "enable": true,
                    "countryId": 1,
                    "type": {
                        "id": 18,
                        "name": "Transporte Last Mile"
                    },
                    "virtual": true,
                    "shippingEarly": true
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 116693,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "name": "JUMBO ACONCAGUA",
                    "email": "",
                    "phoneNumber": "34-2590400",
                    "address": {
                        "street": "Av. Hermanos Maristas 805",
                        "postalCode": "2100802",
                        "location": {
                            "latitude": -32.82651,
                            "longitude": -70.60254
                        },
                        "landmark": "",
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
                        }
                    },
                    "knownSourceId": 125,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 125,
                        "externalId": "J780",
                        "name": "JUMBO LOS ANDES",
                        "enable": true,
                        "identification": {
                            "type": "CL_ID",
                            "value": "81.201.000-K"
                        },
                        "email": "",
                        "phoneNumber": "34-2590400",
                        "address": {
                            "street": "Av. Hermanos Maristas 805",
                            "postalCode": "2100802",
                            "location": {
                                "latitude": -32.82651,
                                "longitude": -70.60254
                            },
                            "landmark": "",
                            "country": {
                                "code": "CL",
                                "name": "Chile"
                            },
                            "adminZone": {
                                "code": "05",
                                "name": "Valparaíso"
                            },
                            "subAdminZone1": {
                                "code": "053",
                                "name": "Los Andes"
                            },
                            "subAdminZone2": {
                                "code": "05301",
                                "name": "Los Andes"
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
                        }
                    },
                    "type": "STORE"
                },
                "destination": {
                    "id": 116139,
                    "identification": {
                        "type": "rutCHL",
                        "value": "184067358"
                    },
                    "name": "alexander iturra",
                    "email": "alexander.iturra@cencosud.cl",
                    "phoneNumber": "+56979594505",
                    "address": {
                        "street": "Arturo Prat 400",
                        "location": {
                            "latitude": -32.8451499,
                            "longitude": -70.60345
                        },
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
                        }
                    },
                    "isClient": true
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": false
                },
                "ownerKnownSource": {
                    "id": 125,
                    "externalId": "J780",
                    "name": "JUMBO LOS ANDES",
                    "enable": true,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "email": "",
                    "phoneNumber": "34-2590400",
                    "address": {
                        "street": "Av. Hermanos Maristas 805",
                        "postalCode": "2100802",
                        "location": {
                            "latitude": -32.82651,
                            "longitude": -70.60254
                        },
                        "landmark": "",
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
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
                    }
                },
                "packages": [
                    {
                        "id": 118070,
                        "lpn": "1284850050887-01",
                        "tracking": "1284850050887-01",
                        "gddNumber": "1284850050887-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm-stg.cencosud.com/dispatch/labels/2022/December/20/1284850050887-01.pdf",
                        "courierPackageId": "1284850050887-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "splitLabel": false,
                        "details": [
                            {
                                "id": 133481,
                                "sku": "1623060",
                                "skuDescription": "Atún Robinson Crusoe Lata 120 g drenado, 170 g neto, En Agua",
                                "skuImageUrl": "https://jumboprepro.vteximg.com.br/arquivos/ids/207376-55-55/atun_agua_F2.jpg?v=637648263280930000",
                                "quantity": 2,
                                "unitPrice": 1499,
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
                        "id": 400619,
                        "name": "originalId",
                        "value": "1284850050887-01"
                    },
                    {
                        "id": 400628,
                        "name": "priority",
                        "value": "1"
                    },
                    {
                        "id": 400636,
                        "name": "contact_address",
                        "value": "Arturo Prat 400 ,1 ,(delivery   ),  Los Andes,Los Andes"
                    },
                    {
                        "id": 400627,
                        "name": "min_delivery_time",
                        "value": "2022-12-20 12:00:00"
                    },
                    {
                        "id": 400620,
                        "name": "service_time",
                        "value": "20"
                    },
                    {
                        "id": 400631,
                        "name": "load",
                        "value": "10.3"
                    },
                    {
                        "id": 400635,
                        "name": "contact_phone",
                        "value": "+56979594505"
                    },
                    {
                        "id": 400624,
                        "name": "flag",
                        "value": "JUMBO"
                    },
                    {
                        "id": 400618,
                        "name": "contact_id",
                        "value": "184067358"
                    },
                    {
                        "id": 400625,
                        "name": "contact_name",
                        "value": "alexander iturra"
                    },
                    {
                        "id": 400621,
                        "name": "tags",
                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"(delivery   ), \"},{\"name\":\"Local de Origen\",\"value\":\"JA-Jumbo Los Andes\"},{\"name\":\"Comuna\",\"value\":\"Los Andes\"},{\"name\":\"Promesa\",\"value\":null},{\"name\":\"Ventanahoraria_inicio\",\"value\":\"12:00\"},{\"name\":\"Ventanahoraria_fin\",\"value\":\"15:00\"},{\"name\":\"Ítems\",\"value\":1},{\"name\":\"Unidades\",\"value\":2},{\"name\":\"Transportadora\",\"value\":\"Z1 Los Andes (San Felipe)\"},{\"name\":\"Cliente que recibe\",\"value\":\"alexander iturra\"},{\"name\":\"Origen\",\"value\":\"Web\"},{\"name\":\"Congelados\",\"value\":\"Congelados\"},{\"name\":\"Prime\",\"value\":\"\"},{\"name\":\"VIP\",\"value\":\"\"}]"
                    },
                    {
                        "id": 400633,
                        "name": "identifier",
                        "value": "1284850050887-01"
                    },
                    {
                        "id": 400623,
                        "name": "pickup_address",
                        "value": "{\"name\":\"St #4 NW FL\",\"latitude\":-32.82744,\"longitude\":-70.602695}"
                    },
                    {
                        "id": 400632,
                        "name": "contact_email",
                        "value": "alexander.iturra@cencosud.cl"
                    },
                    {
                        "id": 400626,
                        "name": "mode",
                        "value": "3"
                    },
                    {
                        "id": 400629,
                        "name": "latitude",
                        "value": "-32.8451499"
                    },
                    {
                        "id": 400634,
                        "name": "groups",
                        "value": "[{\"category\":\"TIPOS DE NEGOCIOS\",\"name\":\"Jumbo Los Andes\"},{\"category\":\"Tipo\",\"name\":\"Agendamiento\"}]"
                    },
                    {
                        "id": 400622,
                        "name": "longitude",
                        "value": "-70.60345"
                    },
                    {
                        "id": 400630,
                        "name": "max_delivery_time",
                        "value": "2022-12-20 15:00:59"
                    }
                ],
                "deliveryWindow": {
                    "min": 1671548400000,
                    "max": 1671559259000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "commitShipDate": null,
                "lpns": [
                    "1284850050887-01"
                ],
                "trackings": [
                    "1284850050887-01"
                ]
            },
            {
                "id": 115812,
                "etaDate": 1671570000000,
                "etaEndDate": 1671580859000,
                "pickupDate": null,
                "externalSystemOrderId": "1284910050889-01",
                "orderType": "Despacho a Domicilio",
                "size": null,
                "height": null,
                "width": null,
                "length": null,
                "weight": null,
                "createdAt": 1671563199435,
                "updatedAt": 1671563205209,
                "reprint": true,
                "externalDriverId": null,
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
                "courier": {
                    "id": 268,
                    "name": "Home Delivery Chile",
                    "code": "HOME_DELIVERY",
                    "dni": "93834000-5",
                    "phoneNumber": "56999999999",
                    "enable": true,
                    "countryId": 1,
                    "type": {
                        "id": 18,
                        "name": "Transporte Last Mile"
                    },
                    "virtual": true,
                    "shippingEarly": true
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 116700,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "name": "JUMBO ACONCAGUA",
                    "email": "",
                    "phoneNumber": "34-2590400",
                    "address": {
                        "street": "Av. Hermanos Maristas 805",
                        "postalCode": "2100802",
                        "location": {
                            "latitude": -32.82651,
                            "longitude": -70.60254
                        },
                        "landmark": "",
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
                        }
                    },
                    "knownSourceId": 125,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 125,
                        "externalId": "J780",
                        "name": "JUMBO LOS ANDES",
                        "enable": true,
                        "identification": {
                            "type": "CL_ID",
                            "value": "81.201.000-K"
                        },
                        "email": "",
                        "phoneNumber": "34-2590400",
                        "address": {
                            "street": "Av. Hermanos Maristas 805",
                            "postalCode": "2100802",
                            "location": {
                                "latitude": -32.82651,
                                "longitude": -70.60254
                            },
                            "landmark": "",
                            "country": {
                                "code": "CL",
                                "name": "Chile"
                            },
                            "adminZone": {
                                "code": "05",
                                "name": "Valparaíso"
                            },
                            "subAdminZone1": {
                                "code": "053",
                                "name": "Los Andes"
                            },
                            "subAdminZone2": {
                                "code": "05301",
                                "name": "Los Andes"
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
                        }
                    },
                    "type": "STORE"
                },
                "destination": {
                    "id": 116146,
                    "identification": {
                        "type": "rutCHL",
                        "value": "184067358"
                    },
                    "name": "alexander iturra",
                    "email": "alexander.iturra@cencosud.cl",
                    "phoneNumber": "+56979594505",
                    "address": {
                        "street": "Arturo Prat 400",
                        "location": {
                            "latitude": -32.8451499,
                            "longitude": -70.60345
                        },
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
                        }
                    },
                    "isClient": true
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": false
                },
                "ownerKnownSource": {
                    "id": 125,
                    "externalId": "J780",
                    "name": "JUMBO LOS ANDES",
                    "enable": true,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "email": "",
                    "phoneNumber": "34-2590400",
                    "address": {
                        "street": "Av. Hermanos Maristas 805",
                        "postalCode": "2100802",
                        "location": {
                            "latitude": -32.82651,
                            "longitude": -70.60254
                        },
                        "landmark": "",
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
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
                    }
                },
                "packages": [
                    {
                        "id": 118078,
                        "lpn": "1284910050889-01",
                        "tracking": "1284910050889-01",
                        "gddNumber": "1284910050889-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm-stg.cencosud.com/dispatch/labels/2022/December/20/1284910050889-01.pdf",
                        "courierPackageId": "1284910050889-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "splitLabel": false,
                        "details": [
                            {
                                "id": 133495,
                                "sku": "1623060",
                                "skuDescription": "Atún Robinson Crusoe Lata 120 g drenado, 170 g neto, En Agua",
                                "skuImageUrl": "https://jumboprepro.vteximg.com.br/arquivos/ids/207376-55-55/atun_agua_F2.jpg?v=637648263280930000",
                                "quantity": 2,
                                "unitPrice": 1499,
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
                        "id": 400693,
                        "name": "pickup_address",
                        "value": "{\"name\":\"St #4 NW FL\",\"latitude\":-32.82744,\"longitude\":-70.602695}"
                    },
                    {
                        "id": 400703,
                        "name": "contact_email",
                        "value": "alexander.iturra@cencosud.cl"
                    },
                    {
                        "id": 400692,
                        "name": "longitude",
                        "value": "-70.60345"
                    },
                    {
                        "id": 400702,
                        "name": "load",
                        "value": "10.3"
                    },
                    {
                        "id": 400696,
                        "name": "contact_name",
                        "value": "alexander iturra"
                    },
                    {
                        "id": 400700,
                        "name": "latitude",
                        "value": "-32.8451499"
                    },
                    {
                        "id": 400708,
                        "name": "contact_address",
                        "value": "Arturo Prat 400 ,1 ,(delivery   ),  Los Andes,Los Andes"
                    },
                    {
                        "id": 400709,
                        "name": "bulks",
                        "value": "N/A"
                    },
                    {
                        "id": 400691,
                        "name": "service_time",
                        "value": "20"
                    },
                    {
                        "id": 400694,
                        "name": "flag",
                        "value": "JUMBO"
                    },
                    {
                        "id": 400697,
                        "name": "mode",
                        "value": "3"
                    },
                    {
                        "id": 400698,
                        "name": "priority",
                        "value": "1"
                    },
                    {
                        "id": 400707,
                        "name": "min_delivery_time",
                        "value": "2022-12-20 18:00:00"
                    },
                    {
                        "id": 400690,
                        "name": "contact_id",
                        "value": "184067358"
                    },
                    {
                        "id": 400704,
                        "name": "groups",
                        "value": "[{\"category\":\"TIPOS DE NEGOCIOS\",\"name\":\"Jumbo Los Andes\"},{\"category\":\"Tipo\",\"name\":\"Agendamiento\"}]"
                    },
                    {
                        "id": 400706,
                        "name": "originalId",
                        "value": "1284910050889-01"
                    },
                    {
                        "id": 400699,
                        "name": "identifier",
                        "value": "1284910050889-01"
                    },
                    {
                        "id": 400705,
                        "name": "contact_phone",
                        "value": "+56979594505"
                    },
                    {
                        "id": 400695,
                        "name": "max_delivery_time",
                        "value": "2022-12-20 21:00:59"
                    },
                    {
                        "id": 400701,
                        "name": "tags",
                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"(delivery   ), \"},{\"name\":\"Local de Origen\",\"value\":\"JA-Jumbo Los Andes\"},{\"name\":\"Comuna\",\"value\":\"Los Andes\"},{\"name\":\"Promesa\",\"value\":null},{\"name\":\"Ventanahoraria_inicio\",\"value\":\"18:00\"},{\"name\":\"Ventanahoraria_fin\",\"value\":\"21:00\"},{\"name\":\"Ítems\",\"value\":1},{\"name\":\"Unidades\",\"value\":2},{\"name\":\"Transportadora\",\"value\":\"Z1 Los Andes (San Felipe)\"},{\"name\":\"Cliente que recibe\",\"value\":\"alexander iturra\"},{\"name\":\"Origen\",\"value\":\"Web\"},{\"name\":\"Congelados\",\"value\":\"Congelados\"},{\"name\":\"Prime\",\"value\":\"\"},{\"name\":\"VIP\",\"value\":\"\"}]"
                    }
                ],
                "deliveryWindow": {
                    "min": 1671570000000,
                    "max": 1671580859000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "commitShipDate": null,
                "lpns": [
                    "1284910050889-01"
                ],
                "trackings": [
                    "1284910050889-01"
                ]
            },
            {
                "id": 115813,
                "etaDate": 1671570000000,
                "etaEndDate": 1671580859000,
                "pickupDate": null,
                "externalSystemOrderId": "1284920050891-01",
                "orderType": "Despacho a Domicilio",
                "size": null,
                "height": null,
                "width": null,
                "length": null,
                "weight": null,
                "createdAt": 1671566789706,
                "updatedAt": 1671566795502,
                "reprint": true,
                "externalDriverId": null,
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
                "courier": {
                    "id": 268,
                    "name": "Home Delivery Chile",
                    "code": "HOME_DELIVERY",
                    "dni": "93834000-5",
                    "phoneNumber": "56999999999",
                    "enable": true,
                    "countryId": 1,
                    "type": {
                        "id": 18,
                        "name": "Transporte Last Mile"
                    },
                    "virtual": true,
                    "shippingEarly": true
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 116701,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "name": "JUMBO ACONCAGUA",
                    "email": "",
                    "phoneNumber": "34-2590400",
                    "address": {
                        "street": "Av. Hermanos Maristas 805",
                        "postalCode": "2100802",
                        "location": {
                            "latitude": -32.82651,
                            "longitude": -70.60254
                        },
                        "landmark": "",
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
                        }
                    },
                    "knownSourceId": 125,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 125,
                        "externalId": "J780",
                        "name": "JUMBO LOS ANDES",
                        "enable": true,
                        "identification": {
                            "type": "CL_ID",
                            "value": "81.201.000-K"
                        },
                        "email": "",
                        "phoneNumber": "34-2590400",
                        "address": {
                            "street": "Av. Hermanos Maristas 805",
                            "postalCode": "2100802",
                            "location": {
                                "latitude": -32.82651,
                                "longitude": -70.60254
                            },
                            "landmark": "",
                            "country": {
                                "code": "CL",
                                "name": "Chile"
                            },
                            "adminZone": {
                                "code": "05",
                                "name": "Valparaíso"
                            },
                            "subAdminZone1": {
                                "code": "053",
                                "name": "Los Andes"
                            },
                            "subAdminZone2": {
                                "code": "05301",
                                "name": "Los Andes"
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
                        }
                    },
                    "type": "STORE"
                },
                "destination": {
                    "id": 116147,
                    "identification": {
                        "type": "rutCHL",
                        "value": "182228575"
                    },
                    "name": "Roberto Alarcon Ravelo",
                    "email": "roberto.alarconravelo@cencosud.cl",
                    "phoneNumber": "+56959154054",
                    "address": {
                        "street": "Arturo Prat 300",
                        "location": {
                            "latitude": -32.845053,
                            "longitude": -70.6025874
                        },
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
                        }
                    },
                    "isClient": true
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": false
                },
                "ownerKnownSource": {
                    "id": 125,
                    "externalId": "J780",
                    "name": "JUMBO LOS ANDES",
                    "enable": true,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "email": "",
                    "phoneNumber": "34-2590400",
                    "address": {
                        "street": "Av. Hermanos Maristas 805",
                        "postalCode": "2100802",
                        "location": {
                            "latitude": -32.82651,
                            "longitude": -70.60254
                        },
                        "landmark": "",
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
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
                    }
                },
                "packages": [
                    {
                        "id": 118079,
                        "lpn": "1284920050891-01",
                        "tracking": "1284920050891-01",
                        "gddNumber": "1284920050891-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm-stg.cencosud.com/dispatch/labels/2022/December/20/1284920050891-01.pdf",
                        "courierPackageId": "1284920050891-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "splitLabel": false,
                        "details": [
                            {
                                "id": 133496,
                                "sku": "1623060",
                                "skuDescription": "Atún Robinson Crusoe Lata 120 g drenado, 170 g neto, En Agua",
                                "skuImageUrl": "https://jumboprepro.vteximg.com.br/arquivos/ids/207376-55-55/atun_agua_F2.jpg?v=637648263280930000",
                                "quantity": 9,
                                "unitPrice": 1499,
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
                        "id": 400727,
                        "name": "contact_phone",
                        "value": "+56959154054"
                    },
                    {
                        "id": 400717,
                        "name": "latitude",
                        "value": "-32.845053"
                    },
                    {
                        "id": 400728,
                        "name": "bulks",
                        "value": "N/A"
                    },
                    {
                        "id": 400722,
                        "name": "tags",
                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"\"},{\"name\":\"Local de Origen\",\"value\":\"JA-Jumbo Los Andes\"},{\"name\":\"Comuna\",\"value\":\"Los Andes\"},{\"name\":\"Promesa\",\"value\":null},{\"name\":\"Ventanahoraria_inicio\",\"value\":\"18:00\"},{\"name\":\"Ventanahoraria_fin\",\"value\":\"21:00\"},{\"name\":\"Ítems\",\"value\":1},{\"name\":\"Unidades\",\"value\":9},{\"name\":\"Transportadora\",\"value\":\"Z1 Los Andes (San Felipe)\"},{\"name\":\"Cliente que recibe\",\"value\":\"Roberto Alarcon Ravelo\"},{\"name\":\"Origen\",\"value\":\"Web\"},{\"name\":\"Congelados\",\"value\":\"Congelados\"},{\"name\":\"Prime\",\"value\":\"\"},{\"name\":\"VIP\",\"value\":\"\"}]"
                    },
                    {
                        "id": 400710,
                        "name": "service_time",
                        "value": "20"
                    },
                    {
                        "id": 400711,
                        "name": "pickup_address",
                        "value": "{\"name\":\"St #4 NW FL\",\"latitude\":-32.82744,\"longitude\":-70.602695}"
                    },
                    {
                        "id": 400718,
                        "name": "contact_id",
                        "value": "182228575"
                    },
                    {
                        "id": 400720,
                        "name": "load",
                        "value": "10.3"
                    },
                    {
                        "id": 400715,
                        "name": "identifier",
                        "value": "1284920050891-01"
                    },
                    {
                        "id": 400712,
                        "name": "flag",
                        "value": "JUMBO"
                    },
                    {
                        "id": 400725,
                        "name": "min_delivery_time",
                        "value": "2022-12-20 18:00:00"
                    },
                    {
                        "id": 400723,
                        "name": "longitude",
                        "value": "-70.60258739999999"
                    },
                    {
                        "id": 400714,
                        "name": "mode",
                        "value": "3"
                    },
                    {
                        "id": 400726,
                        "name": "contact_address",
                        "value": "Arturo Prat 300 null , Los Andes,null"
                    },
                    {
                        "id": 400716,
                        "name": "priority",
                        "value": "1"
                    },
                    {
                        "id": 400719,
                        "name": "contact_email",
                        "value": "roberto.alarconravelo@cencosud.cl"
                    },
                    {
                        "id": 400724,
                        "name": "contact_name",
                        "value": "Roberto Alarcon Ravelo"
                    },
                    {
                        "id": 400713,
                        "name": "max_delivery_time",
                        "value": "2022-12-20 21:00:59"
                    },
                    {
                        "id": 400721,
                        "name": "groups",
                        "value": "[{\"category\":\"TIPOS DE NEGOCIOS\",\"name\":\"Jumbo Los Andes\"},{\"category\":\"Tipo\",\"name\":\"Agendamiento\"}]"
                    },
                    {
                        "id": 400729,
                        "name": "originalId",
                        "value": "1284920050891-01"
                    }
                ],
                "deliveryWindow": {
                    "min": 1671570000000,
                    "max": 1671580859000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "commitShipDate": null,
                "lpns": [
                    "1284920050891-01"
                ],
                "trackings": [
                    "1284920050891-01"
                ]
            },
            {
                "id": 115815,
                "etaDate": 1671616800000,
                "etaEndDate": 1671627659000,
                "pickupDate": null,
                "externalSystemOrderId": "1284930050893-01",
                "orderType": "Despacho a Domicilio",
                "size": null,
                "height": null,
                "width": null,
                "length": null,
                "weight": null,
                "createdAt": 1671570769954,
                "updatedAt": 1671570775741,
                "reprint": true,
                "externalDriverId": null,
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
                "courier": {
                    "id": 268,
                    "name": "Home Delivery Chile",
                    "code": "HOME_DELIVERY",
                    "dni": "93834000-5",
                    "phoneNumber": "56999999999",
                    "enable": true,
                    "countryId": 1,
                    "type": {
                        "id": 18,
                        "name": "Transporte Last Mile"
                    },
                    "virtual": true,
                    "shippingEarly": true
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 116703,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "name": "JUMBO ACONCAGUA",
                    "email": "",
                    "phoneNumber": "34-2590400",
                    "address": {
                        "street": "Av. Hermanos Maristas 805",
                        "postalCode": "2100802",
                        "location": {
                            "latitude": -32.82651,
                            "longitude": -70.60254
                        },
                        "landmark": "",
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
                        }
                    },
                    "knownSourceId": 125,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 125,
                        "externalId": "J780",
                        "name": "JUMBO LOS ANDES",
                        "enable": true,
                        "identification": {
                            "type": "CL_ID",
                            "value": "81.201.000-K"
                        },
                        "email": "",
                        "phoneNumber": "34-2590400",
                        "address": {
                            "street": "Av. Hermanos Maristas 805",
                            "postalCode": "2100802",
                            "location": {
                                "latitude": -32.82651,
                                "longitude": -70.60254
                            },
                            "landmark": "",
                            "country": {
                                "code": "CL",
                                "name": "Chile"
                            },
                            "adminZone": {
                                "code": "05",
                                "name": "Valparaíso"
                            },
                            "subAdminZone1": {
                                "code": "053",
                                "name": "Los Andes"
                            },
                            "subAdminZone2": {
                                "code": "05301",
                                "name": "Los Andes"
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
                        }
                    },
                    "type": "STORE"
                },
                "destination": {
                    "id": 116149,
                    "identification": {
                        "type": "rutCHL",
                        "value": "184067358"
                    },
                    "name": "alexander iturra",
                    "email": "alexander.iturra@cencosud.cl",
                    "phoneNumber": "+56979594505",
                    "address": {
                        "street": "Arturo Prat 400",
                        "location": {
                            "latitude": -32.8451499,
                            "longitude": -70.60345
                        },
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
                        }
                    },
                    "isClient": true
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": false
                },
                "ownerKnownSource": {
                    "id": 125,
                    "externalId": "J780",
                    "name": "JUMBO LOS ANDES",
                    "enable": true,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "email": "",
                    "phoneNumber": "34-2590400",
                    "address": {
                        "street": "Av. Hermanos Maristas 805",
                        "postalCode": "2100802",
                        "location": {
                            "latitude": -32.82651,
                            "longitude": -70.60254
                        },
                        "landmark": "",
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
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
                    }
                },
                "packages": [
                    {
                        "id": 118081,
                        "lpn": "1284930050893-01",
                        "tracking": "1284930050893-01",
                        "gddNumber": "1284930050893-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm-stg.cencosud.com/dispatch/labels/2022/December/20/1284930050893-01.pdf",
                        "courierPackageId": "1284930050893-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "splitLabel": false,
                        "details": [
                            {
                                "id": 133498,
                                "sku": "1623060",
                                "skuDescription": "Atún Robinson Crusoe Lata 120 g drenado, 170 g neto, En Agua",
                                "skuImageUrl": "https://jumboprepro.vteximg.com.br/arquivos/ids/207376-55-55/atun_agua_F2.jpg?v=637648263280930000",
                                "quantity": 2,
                                "unitPrice": 1499,
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
                        "id": 400771,
                        "name": "contact_email",
                        "value": "alexander.iturra@cencosud.cl"
                    },
                    {
                        "id": 400761,
                        "name": "pickup_address",
                        "value": "{\"name\":\"St #4 NW FL\",\"latitude\":-32.82744,\"longitude\":-70.602695}"
                    },
                    {
                        "id": 400763,
                        "name": "contact_name",
                        "value": "alexander iturra"
                    },
                    {
                        "id": 400770,
                        "name": "originalId",
                        "value": "1284930050893-01"
                    },
                    {
                        "id": 400774,
                        "name": "tags",
                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"(delivery   ), \"},{\"name\":\"Local de Origen\",\"value\":\"JA-Jumbo Los Andes\"},{\"name\":\"Comuna\",\"value\":\"Los Andes\"},{\"name\":\"Promesa\",\"value\":null},{\"name\":\"Ventanahoraria_inicio\",\"value\":\"07:00\"},{\"name\":\"Ventanahoraria_fin\",\"value\":\"10:00\"},{\"name\":\"Ítems\",\"value\":1},{\"name\":\"Unidades\",\"value\":2},{\"name\":\"Transportadora\",\"value\":\"Z1 Los Andes (San Felipe)\"},{\"name\":\"Cliente que recibe\",\"value\":\"alexander iturra\"},{\"name\":\"Origen\",\"value\":\"Web\"},{\"name\":\"Congelados\",\"value\":\"Congelados\"},{\"name\":\"Prime\",\"value\":\"\"},{\"name\":\"VIP\",\"value\":\"\"}]"
                    },
                    {
                        "id": 400777,
                        "name": "bulks",
                        "value": "N/A"
                    },
                    {
                        "id": 400759,
                        "name": "service_time",
                        "value": "20"
                    },
                    {
                        "id": 400765,
                        "name": "priority",
                        "value": "1"
                    },
                    {
                        "id": 400766,
                        "name": "max_delivery_time",
                        "value": "2022-12-21 10:00:59"
                    },
                    {
                        "id": 400758,
                        "name": "contact_id",
                        "value": "184067358"
                    },
                    {
                        "id": 400762,
                        "name": "flag",
                        "value": "JUMBO"
                    },
                    {
                        "id": 400767,
                        "name": "latitude",
                        "value": "-32.8451499"
                    },
                    {
                        "id": 400769,
                        "name": "load",
                        "value": "10.3"
                    },
                    {
                        "id": 400773,
                        "name": "contact_phone",
                        "value": "+56979594505"
                    },
                    {
                        "id": 400768,
                        "name": "identifier",
                        "value": "1284930050893-01"
                    },
                    {
                        "id": 400764,
                        "name": "mode",
                        "value": "3"
                    },
                    {
                        "id": 400772,
                        "name": "groups",
                        "value": "[{\"category\":\"TIPOS DE NEGOCIOS\",\"name\":\"Jumbo Los Andes\"},{\"category\":\"Tipo\",\"name\":\"Agendamiento\"}]"
                    },
                    {
                        "id": 400776,
                        "name": "contact_address",
                        "value": "Arturo Prat 400 ,1 ,(delivery   ),  Los Andes,Los Andes"
                    },
                    {
                        "id": 400760,
                        "name": "longitude",
                        "value": "-70.60345"
                    },
                    {
                        "id": 400775,
                        "name": "min_delivery_time",
                        "value": "2022-12-21 07:00:00"
                    }
                ],
                "deliveryWindow": {
                    "min": 1671616800000,
                    "max": 1671627659000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "commitShipDate": null,
                "lpns": [
                    "1284930050893-01"
                ],
                "trackings": [
                    "1284930050893-01"
                ]
            },
            {
                "id": 115874,
                "etaDate": 1671678000000,
                "etaEndDate": 1671764399000,
                "pickupDate": null,
                "externalSystemOrderId": "1285100051241-01",
                "orderType": "Despacho a Domicilio",
                "size": null,
                "height": null,
                "width": null,
                "length": null,
                "weight": null,
                "createdAt": 1671632177923,
                "updatedAt": 1671632183604,
                "reprint": true,
                "externalDriverId": null,
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
                "courier": {
                    "id": 268,
                    "name": "Home Delivery Chile",
                    "code": "HOME_DELIVERY",
                    "dni": "93834000-5",
                    "phoneNumber": "56999999999",
                    "enable": true,
                    "countryId": 1,
                    "type": {
                        "id": 18,
                        "name": "Transporte Last Mile"
                    },
                    "virtual": true,
                    "shippingEarly": true
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 116762,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "name": "JUMBO ACONCAGUA",
                    "email": "",
                    "phoneNumber": "34-2590400",
                    "address": {
                        "street": "Av. Hermanos Maristas 805",
                        "postalCode": "2100802",
                        "location": {
                            "latitude": -32.82651,
                            "longitude": -70.60254
                        },
                        "landmark": "",
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
                        }
                    },
                    "knownSourceId": 125,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 125,
                        "externalId": "J780",
                        "name": "JUMBO LOS ANDES",
                        "enable": true,
                        "identification": {
                            "type": "CL_ID",
                            "value": "81.201.000-K"
                        },
                        "email": "",
                        "phoneNumber": "34-2590400",
                        "address": {
                            "street": "Av. Hermanos Maristas 805",
                            "postalCode": "2100802",
                            "location": {
                                "latitude": -32.82651,
                                "longitude": -70.60254
                            },
                            "landmark": "",
                            "country": {
                                "code": "CL",
                                "name": "Chile"
                            },
                            "adminZone": {
                                "code": "05",
                                "name": "Valparaíso"
                            },
                            "subAdminZone1": {
                                "code": "053",
                                "name": "Los Andes"
                            },
                            "subAdminZone2": {
                                "code": "05301",
                                "name": "Los Andes"
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
                        }
                    },
                    "type": "STORE"
                },
                "destination": {
                    "id": 116208,
                    "identification": {
                        "type": "rutCHL",
                        "value": "263254147"
                    },
                    "name": "Glennys rodriguez",
                    "email": "glennysmaria.rodriguez@cencosud.cl",
                    "phoneNumber": "+56971267811",
                    "address": {
                        "street": "Arturo Prat 300",
                        "location": {
                            "latitude": -33.1173021,
                            "longitude": -71.5532783
                        },
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "051",
                            "name": "Valparaíso"
                        },
                        "subAdminZone2": {
                            "code": "05101",
                            "name": "Valparaíso"
                        }
                    },
                    "isClient": true
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": false
                },
                "ownerKnownSource": {
                    "id": 125,
                    "externalId": "J780",
                    "name": "JUMBO LOS ANDES",
                    "enable": true,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "email": "",
                    "phoneNumber": "34-2590400",
                    "address": {
                        "street": "Av. Hermanos Maristas 805",
                        "postalCode": "2100802",
                        "location": {
                            "latitude": -32.82651,
                            "longitude": -70.60254
                        },
                        "landmark": "",
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
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
                    }
                },
                "packages": [
                    {
                        "id": 118189,
                        "lpn": "1285100051241-01",
                        "tracking": "1285100051241-01",
                        "gddNumber": "1285100051241-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm-stg.cencosud.com/dispatch/labels/2022/December/21/1285100051241-01.pdf",
                        "courierPackageId": "1285100051241-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "splitLabel": false,
                        "details": [
                            {
                                "id": 133610,
                                "sku": "302880-PAK",
                                "skuDescription": "Pack leche descremada Surlat 1 L, 6 unid.",
                                "skuImageUrl": "https://jumboprepro.vteximg.com.br/arquivos/ids/207320-55-55/Pack-leche-descremada-Surlat-1-L-6-unid-1-218.jpg?v=637255827198770000",
                                "quantity": 1,
                                "unitPrice": 5394,
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
                        "id": 401729,
                        "name": "tags",
                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"\"},{\"name\":\"Local de Origen\",\"value\":\"JA-Jumbo Los Andes\"},{\"name\":\"Comuna\",\"value\":\"Valparaíso\"},{\"name\":\"Promesa\",\"value\":null},{\"name\":\"Ventanahoraria_inicio\",\"value\":\"00:00\"},{\"name\":\"Ventanahoraria_fin\",\"value\":\"23:59\"},{\"name\":\"Ítems\",\"value\":1},{\"name\":\"Unidades\",\"value\":1},{\"name\":\"Transportadora\",\"value\":\"Z2 Antofagasta (Mejillones Hornitos)\"},{\"name\":\"Cliente que recibe\",\"value\":\"Glennys Rodriguez\"},{\"name\":\"Origen\",\"value\":\"Web\"},{\"name\":\"Congelados\",\"value\":\" \"},{\"name\":\"Prime\",\"value\":\"\"},{\"name\":\"VIP\",\"value\":\"\"}]"
                    },
                    {
                        "id": 401733,
                        "name": "contact_address",
                        "value": "Arturo Prat 300 ,12 , Valparaíso,null"
                    },
                    {
                        "id": 401721,
                        "name": "service_time",
                        "value": "20"
                    },
                    {
                        "id": 401739,
                        "name": "contact_name",
                        "value": "Glennys rodriguez"
                    },
                    {
                        "id": 401722,
                        "name": "pickup_address",
                        "value": "{\"name\":\"St #4 NW FL\",\"latitude\":-32.82744,\"longitude\":-70.602695}"
                    },
                    {
                        "id": 401725,
                        "name": "flag",
                        "value": "JUMBO"
                    },
                    {
                        "id": 401736,
                        "name": "contact_id",
                        "value": "263254147"
                    },
                    {
                        "id": 401738,
                        "name": "bulks",
                        "value": "N/A"
                    },
                    {
                        "id": 401731,
                        "name": "min_delivery_time",
                        "value": "2022-12-22 00:00:00"
                    },
                    {
                        "id": 401732,
                        "name": "longitude",
                        "value": "-71.5532783"
                    },
                    {
                        "id": 401735,
                        "name": "originalId",
                        "value": "1285100051241-01"
                    },
                    {
                        "id": 401737,
                        "name": "latitude",
                        "value": "-33.1173021"
                    },
                    {
                        "id": 401724,
                        "name": "contact_email",
                        "value": "glennysmaria.rodriguez@cencosud.cl"
                    },
                    {
                        "id": 401728,
                        "name": "contact_phone",
                        "value": "+56971267811"
                    },
                    {
                        "id": 401727,
                        "name": "priority",
                        "value": "1"
                    },
                    {
                        "id": 401734,
                        "name": "groups",
                        "value": "[{\"category\":\"TIPOS DE NEGOCIOS\",\"name\":\"Jumbo Los Andes\"},{\"category\":\"Tipo\",\"name\":\"Agendamiento\"}]"
                    },
                    {
                        "id": 401730,
                        "name": "load",
                        "value": "10.3"
                    },
                    {
                        "id": 401726,
                        "name": "mode",
                        "value": "3"
                    },
                    {
                        "id": 401720,
                        "name": "identifier",
                        "value": "1285100051241-01"
                    },
                    {
                        "id": 401723,
                        "name": "max_delivery_time",
                        "value": "2022-12-22 23:59:59"
                    }
                ],
                "deliveryWindow": {
                    "min": 1671678000000,
                    "max": 1671764399000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "commitShipDate": null,
                "lpns": [
                    "1285100051241-01"
                ],
                "trackings": [
                    "1285100051241-01"
                ]
            },
            {
                "id": 115877,
                "etaDate": 1671645600000,
                "etaEndDate": 1671656459000,
                "pickupDate": null,
                "externalSystemOrderId": "1285110051243-01",
                "orderType": "Despacho a Domicilio",
                "size": null,
                "height": null,
                "width": null,
                "length": null,
                "weight": null,
                "createdAt": 1671635932804,
                "updatedAt": 1671635938422,
                "reprint": true,
                "externalDriverId": null,
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
                "courier": {
                    "id": 268,
                    "name": "Home Delivery Chile",
                    "code": "HOME_DELIVERY",
                    "dni": "93834000-5",
                    "phoneNumber": "56999999999",
                    "enable": true,
                    "countryId": 1,
                    "type": {
                        "id": 18,
                        "name": "Transporte Last Mile"
                    },
                    "virtual": true,
                    "shippingEarly": true
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 116766,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "name": "JUMBO ACONCAGUA",
                    "email": "",
                    "phoneNumber": "34-2590400",
                    "address": {
                        "street": "Av. Hermanos Maristas 805",
                        "postalCode": "2100802",
                        "location": {
                            "latitude": -32.82651,
                            "longitude": -70.60254
                        },
                        "landmark": "",
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
                        }
                    },
                    "knownSourceId": 125,
                    "knownSourceTypeId": 1,
                    "isClient": false,
                    "knownSource": {
                        "id": 125,
                        "externalId": "J780",
                        "name": "JUMBO LOS ANDES",
                        "enable": true,
                        "identification": {
                            "type": "CL_ID",
                            "value": "81.201.000-K"
                        },
                        "email": "",
                        "phoneNumber": "34-2590400",
                        "address": {
                            "street": "Av. Hermanos Maristas 805",
                            "postalCode": "2100802",
                            "location": {
                                "latitude": -32.82651,
                                "longitude": -70.60254
                            },
                            "landmark": "",
                            "country": {
                                "code": "CL",
                                "name": "Chile"
                            },
                            "adminZone": {
                                "code": "05",
                                "name": "Valparaíso"
                            },
                            "subAdminZone1": {
                                "code": "053",
                                "name": "Los Andes"
                            },
                            "subAdminZone2": {
                                "code": "05301",
                                "name": "Los Andes"
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
                        }
                    },
                    "type": "STORE"
                },
                "destination": {
                    "id": 116212,
                    "identification": {
                        "type": "rutCHL",
                        "value": "184067358"
                    },
                    "name": "alexander iturra",
                    "email": "alexander.iturra@cencosud.cl",
                    "phoneNumber": "+56979594505",
                    "address": {
                        "street": "Arturo Prat 400",
                        "location": {
                            "latitude": -32.8451499,
                            "longitude": -70.60345
                        },
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
                        }
                    },
                    "isClient": true
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": false
                },
                "ownerKnownSource": {
                    "id": 125,
                    "externalId": "J780",
                    "name": "JUMBO LOS ANDES",
                    "enable": true,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "email": "",
                    "phoneNumber": "34-2590400",
                    "address": {
                        "street": "Av. Hermanos Maristas 805",
                        "postalCode": "2100802",
                        "location": {
                            "latitude": -32.82651,
                            "longitude": -70.60254
                        },
                        "landmark": "",
                        "country": {
                            "code": "CL",
                            "name": "Chile"
                        },
                        "adminZone": {
                            "code": "05",
                            "name": "Valparaíso"
                        },
                        "subAdminZone1": {
                            "code": "053",
                            "name": "Los Andes"
                        },
                        "subAdminZone2": {
                            "code": "05301",
                            "name": "Los Andes"
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
                    }
                },
                "packages": [
                    {
                        "id": 118196,
                        "lpn": "1285110051243-01",
                        "tracking": "1285110051243-01",
                        "gddNumber": "1285110051243-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm-stg.cencosud.com/dispatch/labels/2022/December/21/1285110051243-01.pdf",
                        "courierPackageId": "1285110051243-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "splitLabel": false,
                        "details": [
                            {
                                "id": 133623,
                                "sku": "1255406",
                                "skuDescription": "Aceite de maravilla 900 ml",
                                "skuImageUrl": "https://jumboprepro.vteximg.com.br/arquivos/ids/207354-55-55/Principal-12845.jpg?v=637320913692900000",
                                "quantity": 1,
                                "unitPrice": 1649,
                                "measures": {
                                    "height": 1,
                                    "width": 1,
                                    "length": 1,
                                    "weight": 1
                                }
                            },
                            {
                                "id": 133624,
                                "sku": "1623060",
                                "skuDescription": "Atún Robinson Crusoe Lata 120 g drenado, 170 g neto, En Agua",
                                "skuImageUrl": "https://jumboprepro.vteximg.com.br/arquivos/ids/207376-55-55/atun_agua_F2.jpg?v=637648263280930000",
                                "quantity": 1,
                                "unitPrice": 1499,
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
                        "id": 401766,
                        "name": "identifier",
                        "value": "1285110051243-01"
                    },
                    {
                        "id": 401768,
                        "name": "mode",
                        "value": "3"
                    },
                    {
                        "id": 401772,
                        "name": "min_delivery_time",
                        "value": "2022-12-21 15:00:00"
                    },
                    {
                        "id": 401774,
                        "name": "contact_email",
                        "value": "alexander.iturra@cencosud.cl"
                    },
                    {
                        "id": 401764,
                        "name": "pickup_address",
                        "value": "{\"name\":\"St #4 NW FL\",\"latitude\":-32.82744,\"longitude\":-70.602695}"
                    },
                    {
                        "id": 401773,
                        "name": "load",
                        "value": "10.3"
                    },
                    {
                        "id": 401778,
                        "name": "originalId",
                        "value": "1285110051243-01"
                    },
                    {
                        "id": 401763,
                        "name": "longitude",
                        "value": "-70.60345"
                    },
                    {
                        "id": 401767,
                        "name": "contact_name",
                        "value": "alexander iturra"
                    },
                    {
                        "id": 401771,
                        "name": "max_delivery_time",
                        "value": "2022-12-21 18:00:59"
                    },
                    {
                        "id": 401779,
                        "name": "contact_address",
                        "value": "Arturo Prat 400 ,1 ,(delivery   ),  Los Andes,Los Andes"
                    },
                    {
                        "id": 401770,
                        "name": "latitude",
                        "value": "-32.8451499"
                    },
                    {
                        "id": 401761,
                        "name": "contact_id",
                        "value": "184067358"
                    },
                    {
                        "id": 401776,
                        "name": "contact_phone",
                        "value": "+56979594505"
                    },
                    {
                        "id": 401769,
                        "name": "priority",
                        "value": "1"
                    },
                    {
                        "id": 401775,
                        "name": "groups",
                        "value": "[{\"category\":\"TIPOS DE NEGOCIOS\",\"name\":\"Jumbo Los Andes\"},{\"category\":\"Tipo\",\"name\":\"Agendamiento\"}]"
                    },
                    {
                        "id": 401777,
                        "name": "tags",
                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"(delivery   ), \"},{\"name\":\"Local de Origen\",\"value\":\"JA-Jumbo Los Andes\"},{\"name\":\"Comuna\",\"value\":\"Los Andes\"},{\"name\":\"Promesa\",\"value\":null},{\"name\":\"Ventanahoraria_inicio\",\"value\":\"15:00\"},{\"name\":\"Ventanahoraria_fin\",\"value\":\"18:00\"},{\"name\":\"Ítems\",\"value\":2},{\"name\":\"Unidades\",\"value\":2},{\"name\":\"Transportadora\",\"value\":\"Z1 Los Andes (San Felipe)\"},{\"name\":\"Cliente que recibe\",\"value\":\"alexander iturra\"},{\"name\":\"Origen\",\"value\":\"Web\"},{\"name\":\"Congelados\",\"value\":\"Congelados\"},{\"name\":\"Prime\",\"value\":\"\"},{\"name\":\"VIP\",\"value\":\"\"}]"
                    },
                    {
                        "id": 401780,
                        "name": "bulks",
                        "value": "N/A"
                    },
                    {
                        "id": 401765,
                        "name": "flag",
                        "value": "JUMBO"
                    },
                    {
                        "id": 401762,
                        "name": "service_time",
                        "value": "20"
                    }
                ],
                "deliveryWindow": {
                    "min": 1671645600000,
                    "max": 1671656459000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "commitShipDate": null,
                "lpns": [
                    "1285110051243-01"
                ],
                "trackings": [
                    "1285110051243-01"
                ]
            }
        ],
        "pagination": {
            "totalPages": 40,
            "totalElements": 396,
            "page": 1,
            "pageSize": 10,
            "numberOfElements": 10,
            "isLast": false,
            "isFirst": true
        }
    }
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
