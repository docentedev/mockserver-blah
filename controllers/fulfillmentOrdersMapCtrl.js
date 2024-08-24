const getData = (req, res) => {
    const { dispatch: { statusCodeList } } = req.body;
    let code = 0;
    if (statusCodeList) {
        code = statusCodeList.length === 0 ? 0 : statusCodeList[0];
    }

    const response = {
        "dispatches": [
            {
                "id": 139618,
                "etaDate": 1715824800000,
                "etaEndDate": 1715824800000,
                "pickupDate": 0,
                "externalSystemOrderId": "v26982614-189",
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
                    "id": 28,
                    "name": "Despacho desde Tienda On Demand",
                    "code": "SFS_ON_DEMAND",
                    "enable": true,
                    "shippingEarly": false
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 141859,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "name": "JUMBO LOS TRAPENSES",
                    "email": "",
                    "phoneNumber": "2-6748526",
                    "address": {
                        "street": "Av. Camino Los Trapenses 3515",
                        "postalCode": "7700148",
                        "landmark": "",
                        "location": {
                            "latitude": -33.34311,
                            "longitude": -70.54446
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
                        "id": 117,
                        "externalId": "J762",
                        "name": "JUMBO LOS TRAPENSES",
                        "enable": true,
                        "identification": {
                            "type": "CL_ID",
                            "value": "81.201.000-K"
                        },
                        "email": "",
                        "phoneNumber": "2-6748526",
                        "address": {
                            "street": "Av. Camino Los Trapenses 3515",
                            "postalCode": "7700148",
                            "landmark": "",
                            "location": {
                                "latitude": -33.34311,
                                "longitude": -70.54446
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 141098,
                    "name": "Claudia Valenzuela",
                    "email": "yelisbeth.sira@gmail.com",
                    "phoneNumber": "56911223344",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Av. Cristóbal Colón 3335",
                        "postalCode": null,
                        "landmark": null,
                        "location": {
                            "latitude": -33.4255531932382,
                            "longitude": -70.5888785046301
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
                    "identification": {
                        "type": "rutCHL",
                        "value": "123456789"
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": null
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": false
                },
                "ownerKnownSource": {
                    "id": 117,
                    "externalId": "J762",
                    "name": "JUMBO LOS TRAPENSES",
                    "enable": true,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "email": "",
                    "phoneNumber": "2-6748526",
                    "address": {
                        "street": "Av. Camino Los Trapenses 3515",
                        "postalCode": "7700148",
                        "landmark": "",
                        "location": {
                            "latitude": -33.34311,
                            "longitude": -70.54446
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
                    }
                },
                "packages": [
                    {
                        "id": 142828,
                        "lpn": "v26982614-189",
                        "tracking": "v26982614-189",
                        "gddNumber": "v26982614-189",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm-stg.cencosud.com/dispatch/labels/2024/May/15/v26982614-189.pdf",
                        "courierPackageId": "v26982614-189",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [
                    {
                        "id": 775111,
                        "name": "latitude",
                        "value": "-33.50531469999999"
                    },
                    {
                        "id": 775112,
                        "name": "contact_id",
                        "value": "186140036"
                    },
                    {
                        "id": 775113,
                        "name": "service_time",
                        "value": "20"
                    },
                    {
                        "id": 775114,
                        "name": "identifier",
                        "value": "v26982614-189"
                    },
                    {
                        "id": 775115,
                        "name": "max_delivery_time",
                        "value": "2023-01-29 11:00:00"
                    },
                    {
                        "id": 775116,
                        "name": "mode",
                        "value": "3"
                    },
                    {
                        "id": 775117,
                        "name": "priority",
                        "value": "1"
                    },
                    {
                        "id": 775118,
                        "name": "groups",
                        "value": "[{\"category\":\"TIPOS DE NEGOCIOS\",\"name\":\"Jumbo costanera\"},{\"category\":\"Tipo\",\"name\":\"Agendamiento\"}]"
                    },
                    {
                        "id": 775119,
                        "name": "contact_phone",
                        "value": "56956186039"
                    },
                    {
                        "id": 775120,
                        "name": "tags",
                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"Prueba el comentario\"},{\"name\":\"Local de Origen\",\"value\":\"JA-Jumbo Costanera\"},{\"name\":\"Comuna\",\"value\":\"Providencia\"},{\"name\":\"Promesa\",\"value\":null},{\"name\":\"Ventanahoraria_inicio\",\"value\":\"20:00\"},{\"name\":\"Ventanahoraria_fin\",\"value\":\"22:00\"},{\"name\":\"Ítems\",\"value\":3},{\"name\":\"Unidades\",\"value\":40},{\"name\":\"Transportadora\",\"value\":\"AG Costanera\"},{\"name\":\"Cliente que recibe\",\"value\":\"Ximena Marin\"},{\"name\":\"Origen\",\"value\":\"App\"},{\"name\":\"Congelados\",\"value\":\"no\"},{\"name\":\"Prime\",\"value\":\"No\"},{\"name\":\"VIP\",\"value\":\"No\"},{\"name\":\"Colaborador\",\"value\":\"Sí\"},{\"name\":\"Alimentos frescos\",\"value\":\"Sí\"},{\"name\":\"Cigarros\",\"value\":\"No\"},{\"name\":\"Alcoholicos\",\"value\":\"Si\"},{\"name\":\"url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/B0VfnFfCKp5EF00P4jjkY%22%7D\"}]"
                    },
                    {
                        "id": 775121,
                        "name": "load",
                        "value": "10.3"
                    },
                    {
                        "id": 775122,
                        "name": "originalId",
                        "value": "v26982614-189"
                    },
                    {
                        "id": 775123,
                        "name": "pickup_address",
                        "value": "{\"name\":\"Av. Pdte. Kennedy 9001, Las Condes.\",\"latitude\":-33.480186,\"longitude\":-70.751607}"
                    },
                    {
                        "id": 775124,
                        "name": "contact_email",
                        "value": "nicolasm@gmail.com"
                    },
                    {
                        "id": 775125,
                        "name": "flag",
                        "value": "Jumbo"
                    },
                    {
                        "id": 775126,
                        "name": "contact_address",
                        "value": "Avenida Andrés Bello, Santiago, Providencia"
                    },
                    {
                        "id": 775127,
                        "name": "contact_name",
                        "value": "Nicolas medina"
                    },
                    {
                        "id": 775128,
                        "name": "longitude",
                        "value": "-70.7239264"
                    },
                    {
                        "id": 775129,
                        "name": "bulks",
                        "value": "N/A"
                    },
                    {
                        "id": 775130,
                        "name": "min_delivery_time",
                        "value": "2023-01-29 09:00:00"
                    }
                ],
                "deliveryWindow": {
                    "min": 1715824800000,
                    "max": 1715824800000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "v26982614-189"
                ],
                "trackings": [
                    "v26982614-189"
                ],
                "createdAt": 1715786131804,
                "updatedAt": 1715815134262
            },
            {
                "id": 139619,
                "etaDate": 1715824800000,
                "etaEndDate": 1715824800000,
                "pickupDate": 0,
                "externalSystemOrderId": "v26982614-190",
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
                    "id": 28,
                    "name": "Despacho desde Tienda On Demand",
                    "code": "SFS_ON_DEMAND",
                    "enable": true,
                    "shippingEarly": false
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 141860,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "name": "JUMBO LOS TRAPENSES",
                    "email": "",
                    "phoneNumber": "2-6748526",
                    "address": {
                        "street": "Av. Camino Los Trapenses 3515",
                        "postalCode": "7700148",
                        "landmark": "",
                        "location": {
                            "latitude": -33.34311,
                            "longitude": -70.54446
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
                        "id": 117,
                        "externalId": "J762",
                        "name": "JUMBO LOS TRAPENSES",
                        "enable": true,
                        "identification": {
                            "type": "CL_ID",
                            "value": "81.201.000-K"
                        },
                        "email": "",
                        "phoneNumber": "2-6748526",
                        "address": {
                            "street": "Av. Camino Los Trapenses 3515",
                            "postalCode": "7700148",
                            "landmark": "",
                            "location": {
                                "latitude": -33.34311,
                                "longitude": -70.54446
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 141099,
                    "name": "Claudia Valenzuela",
                    "email": "yelisbeth.sira@gmail.com",
                    "phoneNumber": "56911223344",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Av. Cristóbal Colón 3335",
                        "postalCode": null,
                        "landmark": null,
                        "location": {
                            "latitude": -33.4255531932382,
                            "longitude": -70.5888785046301
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
                    "identification": {
                        "type": "rutCHL",
                        "value": "123456789"
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": null
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": false
                },
                "ownerKnownSource": {
                    "id": 117,
                    "externalId": "J762",
                    "name": "JUMBO LOS TRAPENSES",
                    "enable": true,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "email": "",
                    "phoneNumber": "2-6748526",
                    "address": {
                        "street": "Av. Camino Los Trapenses 3515",
                        "postalCode": "7700148",
                        "landmark": "",
                        "location": {
                            "latitude": -33.34311,
                            "longitude": -70.54446
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
                    }
                },
                "packages": [
                    {
                        "id": 142829,
                        "lpn": "v26982614-190",
                        "tracking": "v26982614-190",
                        "gddNumber": "v26982614-190",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm-stg.cencosud.com/dispatch/labels/2024/May/15/v26982614-190.pdf",
                        "courierPackageId": "v26982614-190",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [
                    {
                        "id": 775131,
                        "name": "latitude",
                        "value": "-33.50531469999999"
                    },
                    {
                        "id": 775132,
                        "name": "contact_id",
                        "value": "186140036"
                    },
                    {
                        "id": 775133,
                        "name": "identifier",
                        "value": "v26982614-190"
                    },
                    {
                        "id": 775134,
                        "name": "service_time",
                        "value": "20"
                    },
                    {
                        "id": 775135,
                        "name": "max_delivery_time",
                        "value": "2023-01-29 11:00:00"
                    },
                    {
                        "id": 775136,
                        "name": "mode",
                        "value": "3"
                    },
                    {
                        "id": 775137,
                        "name": "priority",
                        "value": "1"
                    },
                    {
                        "id": 775138,
                        "name": "groups",
                        "value": "[{\"category\":\"TIPOS DE NEGOCIOS\",\"name\":\"Jumbo costanera\"},{\"category\":\"Tipo\",\"name\":\"Agendamiento\"}]"
                    },
                    {
                        "id": 775139,
                        "name": "contact_phone",
                        "value": "56956186039"
                    },
                    {
                        "id": 775140,
                        "name": "tags",
                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"Prueba el comentario\"},{\"name\":\"Local de Origen\",\"value\":\"JA-Jumbo Costanera\"},{\"name\":\"Comuna\",\"value\":\"Providencia\"},{\"name\":\"Promesa\",\"value\":null},{\"name\":\"Ventanahoraria_inicio\",\"value\":\"20:00\"},{\"name\":\"Ventanahoraria_fin\",\"value\":\"22:00\"},{\"name\":\"Ítems\",\"value\":3},{\"name\":\"Unidades\",\"value\":40},{\"name\":\"Transportadora\",\"value\":\"AG Costanera\"},{\"name\":\"Cliente que recibe\",\"value\":\"Ximena Marin\"},{\"name\":\"Origen\",\"value\":\"App\"},{\"name\":\"Congelados\",\"value\":\"no\"},{\"name\":\"Prime\",\"value\":\"No\"},{\"name\":\"VIP\",\"value\":\"No\"},{\"name\":\"Colaborador\",\"value\":\"Sí\"},{\"name\":\"Alimentos frescos\",\"value\":\"Sí\"},{\"name\":\"Cigarros\",\"value\":\"No\"},{\"name\":\"Alcoholicos\",\"value\":\"Si\"},{\"name\":\"url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/B0VfnFfCKp5EF00P4jjkY%22%7D\"}]"
                    },
                    {
                        "id": 775141,
                        "name": "load",
                        "value": "10.3"
                    },
                    {
                        "id": 775142,
                        "name": "pickup_address",
                        "value": "{\"name\":\"Av. Pdte. Kennedy 9001, Las Condes.\",\"latitude\":-33.480186,\"longitude\":-70.751607}"
                    },
                    {
                        "id": 775143,
                        "name": "contact_email",
                        "value": "nicolasm@gmail.com"
                    },
                    {
                        "id": 775144,
                        "name": "flag",
                        "value": "Jumbo"
                    },
                    {
                        "id": 775145,
                        "name": "contact_address",
                        "value": "Avenida Andrés Bello, Santiago, Providencia"
                    },
                    {
                        "id": 775146,
                        "name": "contact_name",
                        "value": "Nicolas medina"
                    },
                    {
                        "id": 775147,
                        "name": "longitude",
                        "value": "-70.7239264"
                    },
                    {
                        "id": 775148,
                        "name": "originalId",
                        "value": "v26982614-190"
                    },
                    {
                        "id": 775149,
                        "name": "bulks",
                        "value": "N/A"
                    },
                    {
                        "id": 775150,
                        "name": "min_delivery_time",
                        "value": "2023-01-29 09:00:00"
                    }
                ],
                "deliveryWindow": {
                    "min": 1715824800000,
                    "max": 1715824800000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "v26982614-190"
                ],
                "trackings": [
                    "v26982614-190"
                ],
                "createdAt": 1715786145898,
                "updatedAt": 1715786150549
            },
            {
                "id": 139620,
                "etaDate": 1715824800000,
                "etaEndDate": 1715824800000,
                "pickupDate": 0,
                "externalSystemOrderId": "v26982614-191",
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
                    "id": 28,
                    "name": "Despacho desde Tienda On Demand",
                    "code": "SFS_ON_DEMAND",
                    "enable": true,
                    "shippingEarly": false
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 141861,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "name": "JUMBO LOS TRAPENSES",
                    "email": "",
                    "phoneNumber": "2-6748526",
                    "address": {
                        "street": "Av. Camino Los Trapenses 3515",
                        "postalCode": "7700148",
                        "landmark": "",
                        "location": {
                            "latitude": -33.34311,
                            "longitude": -70.54446
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
                        "id": 117,
                        "externalId": "J762",
                        "name": "JUMBO LOS TRAPENSES",
                        "enable": true,
                        "identification": {
                            "type": "CL_ID",
                            "value": "81.201.000-K"
                        },
                        "email": "",
                        "phoneNumber": "2-6748526",
                        "address": {
                            "street": "Av. Camino Los Trapenses 3515",
                            "postalCode": "7700148",
                            "landmark": "",
                            "location": {
                                "latitude": -33.34311,
                                "longitude": -70.54446
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 141100,
                    "name": "Claudia Valenzuela",
                    "email": "yelisbeth.sira@gmail.com",
                    "phoneNumber": "56911223344",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Av. Cristóbal Colón 3335",
                        "postalCode": null,
                        "landmark": null,
                        "location": {
                            "latitude": -33.4255531932382,
                            "longitude": -70.5888785046301
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
                    "identification": {
                        "type": "rutCHL",
                        "value": "123456789"
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": null
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": false
                },
                "ownerKnownSource": {
                    "id": 117,
                    "externalId": "J762",
                    "name": "JUMBO LOS TRAPENSES",
                    "enable": true,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "email": "",
                    "phoneNumber": "2-6748526",
                    "address": {
                        "street": "Av. Camino Los Trapenses 3515",
                        "postalCode": "7700148",
                        "landmark": "",
                        "location": {
                            "latitude": -33.34311,
                            "longitude": -70.54446
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
                    }
                },
                "packages": [
                    {
                        "id": 142830,
                        "lpn": "v26982614-191",
                        "tracking": "v26982614-191",
                        "gddNumber": "v26982614-191",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm-stg.cencosud.com/dispatch/labels/2024/May/15/v26982614-191.pdf",
                        "courierPackageId": "v26982614-191",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [
                    {
                        "id": 775151,
                        "name": "latitude",
                        "value": "-33.50531469999999"
                    },
                    {
                        "id": 775152,
                        "name": "contact_id",
                        "value": "186140036"
                    },
                    {
                        "id": 775153,
                        "name": "identifier",
                        "value": "v26982614-191"
                    },
                    {
                        "id": 775154,
                        "name": "service_time",
                        "value": "20"
                    },
                    {
                        "id": 775155,
                        "name": "max_delivery_time",
                        "value": "2023-01-29 11:00:00"
                    },
                    {
                        "id": 775156,
                        "name": "mode",
                        "value": "3"
                    },
                    {
                        "id": 775157,
                        "name": "priority",
                        "value": "1"
                    },
                    {
                        "id": 775158,
                        "name": "groups",
                        "value": "[{\"category\":\"TIPOS DE NEGOCIOS\",\"name\":\"Jumbo costanera\"},{\"category\":\"Tipo\",\"name\":\"Agendamiento\"}]"
                    },
                    {
                        "id": 775159,
                        "name": "contact_phone",
                        "value": "56956186039"
                    },
                    {
                        "id": 775160,
                        "name": "tags",
                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"Prueba el comentario\"},{\"name\":\"Local de Origen\",\"value\":\"JA-Jumbo Costanera\"},{\"name\":\"Comuna\",\"value\":\"Providencia\"},{\"name\":\"Promesa\",\"value\":null},{\"name\":\"Ventanahoraria_inicio\",\"value\":\"20:00\"},{\"name\":\"Ventanahoraria_fin\",\"value\":\"22:00\"},{\"name\":\"Ítems\",\"value\":3},{\"name\":\"Unidades\",\"value\":40},{\"name\":\"Transportadora\",\"value\":\"AG Costanera\"},{\"name\":\"Cliente que recibe\",\"value\":\"Ximena Marin\"},{\"name\":\"Origen\",\"value\":\"App\"},{\"name\":\"Congelados\",\"value\":\"no\"},{\"name\":\"Prime\",\"value\":\"No\"},{\"name\":\"VIP\",\"value\":\"No\"},{\"name\":\"Colaborador\",\"value\":\"Sí\"},{\"name\":\"Alimentos frescos\",\"value\":\"Sí\"},{\"name\":\"Cigarros\",\"value\":\"No\"},{\"name\":\"Alcoholicos\",\"value\":\"Si\"},{\"name\":\"url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/B0VfnFfCKp5EF00P4jjkY%22%7D\"}]"
                    },
                    {
                        "id": 775161,
                        "name": "load",
                        "value": "10.3"
                    },
                    {
                        "id": 775162,
                        "name": "pickup_address",
                        "value": "{\"name\":\"Av. Pdte. Kennedy 9001, Las Condes.\",\"latitude\":-33.480186,\"longitude\":-70.751607}"
                    },
                    {
                        "id": 775163,
                        "name": "contact_email",
                        "value": "nicolasm@gmail.com"
                    },
                    {
                        "id": 775164,
                        "name": "flag",
                        "value": "Jumbo"
                    },
                    {
                        "id": 775165,
                        "name": "contact_address",
                        "value": "Avenida Andrés Bello, Santiago, Providencia"
                    },
                    {
                        "id": 775166,
                        "name": "contact_name",
                        "value": "Nicolas medina"
                    },
                    {
                        "id": 775167,
                        "name": "originalId",
                        "value": "v26982614-191"
                    },
                    {
                        "id": 775168,
                        "name": "longitude",
                        "value": "-70.7239264"
                    },
                    {
                        "id": 775169,
                        "name": "bulks",
                        "value": "N/A"
                    },
                    {
                        "id": 775170,
                        "name": "min_delivery_time",
                        "value": "2023-01-29 09:00:00"
                    }
                ],
                "deliveryWindow": {
                    "min": 1715824800000,
                    "max": 1715824800000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "v26982614-191"
                ],
                "trackings": [
                    "v26982614-191"
                ],
                "createdAt": 1715786158900,
                "updatedAt": 1715786161011
            },
            {
                "id": 139621,
                "etaDate": 1715824800000,
                "etaEndDate": 1715824800000,
                "pickupDate": 0,
                "externalSystemOrderId": "v26982614-192",
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
                    "id": 28,
                    "name": "Despacho desde Tienda On Demand",
                    "code": "SFS_ON_DEMAND",
                    "enable": true,
                    "shippingEarly": false
                },
                "vehicle": null,
                "driver": null,
                "origin": {
                    "id": 141862,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "name": "JUMBO LOS TRAPENSES",
                    "email": "",
                    "phoneNumber": "2-6748526",
                    "address": {
                        "street": "Av. Camino Los Trapenses 3515",
                        "postalCode": "7700148",
                        "landmark": "",
                        "location": {
                            "latitude": -33.34311,
                            "longitude": -70.54446
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
                        "id": 117,
                        "externalId": "J762",
                        "name": "JUMBO LOS TRAPENSES",
                        "enable": true,
                        "identification": {
                            "type": "CL_ID",
                            "value": "81.201.000-K"
                        },
                        "email": "",
                        "phoneNumber": "2-6748526",
                        "address": {
                            "street": "Av. Camino Los Trapenses 3515",
                            "postalCode": "7700148",
                            "landmark": "",
                            "location": {
                                "latitude": -33.34311,
                                "longitude": -70.54446
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 141101,
                    "name": "Claudia Valenzuela",
                    "email": "yelisbeth.sira@gmail.com",
                    "phoneNumber": "56911223344",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Av. Cristóbal Colón 3335",
                        "postalCode": null,
                        "landmark": null,
                        "location": {
                            "latitude": -33.4255531932382,
                            "longitude": -70.5888785046301
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
                    "identification": {
                        "type": "rutCHL",
                        "value": "123456789"
                    },
                    "knownSourceId": null,
                    "knownSourceTypeId": null
                },
                "scheduledTime": {
                    "id": 1,
                    "name": "Horario de Tienda",
                    "description": "Horario de atención a público",
                    "enable": false
                },
                "ownerKnownSource": {
                    "id": 117,
                    "externalId": "J762",
                    "name": "JUMBO LOS TRAPENSES",
                    "enable": true,
                    "identification": {
                        "type": "CL_ID",
                        "value": "81.201.000-K"
                    },
                    "email": "",
                    "phoneNumber": "2-6748526",
                    "address": {
                        "street": "Av. Camino Los Trapenses 3515",
                        "postalCode": "7700148",
                        "landmark": "",
                        "location": {
                            "latitude": -33.34311,
                            "longitude": -70.54446
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
                    }
                },
                "packages": [
                    {
                        "id": 142831,
                        "lpn": "v26982614-192",
                        "tracking": "v26982614-192",
                        "gddNumber": "v26982614-192",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm-stg.cencosud.com/dispatch/labels/2024/May/15/v26982614-192.pdf",
                        "courierPackageId": "v26982614-192",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [
                    {
                        "id": 775171,
                        "name": "identifier",
                        "value": "v26982614-192"
                    },
                    {
                        "id": 775172,
                        "name": "latitude",
                        "value": "-33.50531469999999"
                    },
                    {
                        "id": 775173,
                        "name": "contact_id",
                        "value": "186140036"
                    },
                    {
                        "id": 775174,
                        "name": "service_time",
                        "value": "20"
                    },
                    {
                        "id": 775175,
                        "name": "max_delivery_time",
                        "value": "2023-01-29 11:00:00"
                    },
                    {
                        "id": 775176,
                        "name": "mode",
                        "value": "3"
                    },
                    {
                        "id": 775177,
                        "name": "priority",
                        "value": "1"
                    },
                    {
                        "id": 775178,
                        "name": "groups",
                        "value": "[{\"category\":\"TIPOS DE NEGOCIOS\",\"name\":\"Jumbo costanera\"},{\"category\":\"Tipo\",\"name\":\"Agendamiento\"}]"
                    },
                    {
                        "id": 775179,
                        "name": "contact_phone",
                        "value": "56956186039"
                    },
                    {
                        "id": 775180,
                        "name": "tags",
                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"Prueba el comentario\"},{\"name\":\"Local de Origen\",\"value\":\"JA-Jumbo Costanera\"},{\"name\":\"Comuna\",\"value\":\"Providencia\"},{\"name\":\"Promesa\",\"value\":null},{\"name\":\"Ventanahoraria_inicio\",\"value\":\"20:00\"},{\"name\":\"Ventanahoraria_fin\",\"value\":\"22:00\"},{\"name\":\"Ítems\",\"value\":3},{\"name\":\"Unidades\",\"value\":40},{\"name\":\"Transportadora\",\"value\":\"AG Costanera\"},{\"name\":\"Cliente que recibe\",\"value\":\"Ximena Marin\"},{\"name\":\"Origen\",\"value\":\"App\"},{\"name\":\"Congelados\",\"value\":\"no\"},{\"name\":\"Prime\",\"value\":\"No\"},{\"name\":\"VIP\",\"value\":\"No\"},{\"name\":\"Colaborador\",\"value\":\"Sí\"},{\"name\":\"Alimentos frescos\",\"value\":\"Sí\"},{\"name\":\"Cigarros\",\"value\":\"No\"},{\"name\":\"Alcoholicos\",\"value\":\"Si\"},{\"name\":\"url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/B0VfnFfCKp5EF00P4jjkY%22%7D\"}]"
                    },
                    {
                        "id": 775181,
                        "name": "load",
                        "value": "10.3"
                    },
                    {
                        "id": 775182,
                        "name": "pickup_address",
                        "value": "{\"name\":\"Av. Pdte. Kennedy 9001, Las Condes.\",\"latitude\":-33.480186,\"longitude\":-70.751607}"
                    },
                    {
                        "id": 775183,
                        "name": "contact_email",
                        "value": "nicolasm@gmail.com"
                    },
                    {
                        "id": 775184,
                        "name": "flag",
                        "value": "Jumbo"
                    },
                    {
                        "id": 775185,
                        "name": "contact_address",
                        "value": "Avenida Andrés Bello, Santiago, Providencia"
                    },
                    {
                        "id": 775186,
                        "name": "contact_name",
                        "value": "Nicolas medina"
                    },
                    {
                        "id": 775187,
                        "name": "originalId",
                        "value": "v26982614-192"
                    },
                    {
                        "id": 775188,
                        "name": "longitude",
                        "value": "-70.7239264"
                    },
                    {
                        "id": 775189,
                        "name": "bulks",
                        "value": "N/A"
                    },
                    {
                        "id": 775190,
                        "name": "min_delivery_time",
                        "value": "2023-01-29 09:00:00"
                    }
                ],
                "deliveryWindow": {
                    "min": 1715824800000,
                    "max": 1715824800000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "v26982614-192"
                ],
                "trackings": [
                    "v26982614-192"
                ],
                "createdAt": 1715786173346,
                "updatedAt": 1715786175833
            },
            {
                "id": 20860101,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713976683692,
                "externalSystemOrderId": "v22902287JRSA-01",
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
                    "id": 21252612,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21083313,
                    "name": "Martin Cal",
                    "email": "martinezequiel.cal@gmail.com",
                    "phoneNumber": "+5491156656745",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Vicente Damonte, 954",
                        "postalCode": "1824",
                        "landmark": null,
                        "location": {
                            "latitude": -34.6985719,
                            "longitude": -58.3817404
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
                            "code": "6434",
                            "name": "Lanús"
                        },
                        "subAdminZone2": {
                            "code": "N/A",
                            "name": "N/A"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "38837876"
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
                    }
                },
                "packages": [
                    {
                        "id": 20888553,
                        "lpn": "v22902287JRSA-01",
                        "tracking": "v22902287JRSA-01",
                        "gddNumber": "v22902287JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/24/v22902287JRSA-01.pdf",
                        "courierPackageId": "v22902287JRSA-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "v22902287JRSA-01"
                ],
                "trackings": [
                    "v22902287JRSA-01"
                ],
                "createdAt": 1713976683692,
                "updatedAt": 1713962298623
            },
            {
                "id": 20859581,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713975686322,
                "externalSystemOrderId": "v22901979JRSA-01",
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
                    "id": 21252078,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21082783,
                    "name": "Nora Usaurou",
                    "email": "nusaurou@hotmail.com",
                    "phoneNumber": "+541128426919",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Ituzaingó, 224",
                        "postalCode": "1834",
                        "landmark": null,
                        "location": {
                            "latitude": -34.7704016,
                            "longitude": -58.39428599999999
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "PROVINCIA ",
                            "name": "PROVINCIA DE BUENOS AIRES"
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
                        "value": "6422584"
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
                    }
                },
                "packages": [
                    {
                        "id": 20888033,
                        "lpn": "v22901979JRSA-01",
                        "tracking": "v22901979JRSA-01",
                        "gddNumber": "v22901979JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/24/v22901979JRSA-01.pdf",
                        "courierPackageId": "v22901979JRSA-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "v22901979JRSA-01"
                ],
                "trackings": [
                    "v22901979JRSA-01"
                ],
                "createdAt": 1713975686322,
                "updatedAt": 1713961307748
            },
            {
                "id": 20858051,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713972863568,
                "externalSystemOrderId": "v22899947JRSA-01",
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
                    "id": 21250524,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21081237,
                    "name": "Alexis Chas",
                    "email": "alexischas@hotmail.com",
                    "phoneNumber": "+541154946941",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Capitán Calle Rosales, 167",
                        "postalCode": "1838",
                        "landmark": null,
                        "location": {
                            "latitude": -34.8025892,
                            "longitude": -58.4440499
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
                            "code": "Luis Guill",
                            "name": "Luis Guillon"
                        },
                        "subAdminZone2": {
                            "code": "N/A",
                            "name": "N/A"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "35907664"
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
                    }
                },
                "packages": [
                    {
                        "id": 20886486,
                        "lpn": "v22899947JRSA-01",
                        "tracking": "v22899947JRSA-01",
                        "gddNumber": "v22899947JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/24/v22899947JRSA-01.pdf",
                        "courierPackageId": "v22899947JRSA-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "v22899947JRSA-01"
                ],
                "trackings": [
                    "v22899947JRSA-01"
                ],
                "createdAt": 1713972863568,
                "updatedAt": 1713958471228
            },
            {
                "id": 20857157,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713971225232,
                "externalSystemOrderId": "v22899150JRSA-01",
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
                    "id": 21249619,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21080340,
                    "name": "Stella Maris Perez",
                    "email": "perezsm70@gmail.com",
                    "phoneNumber": "+541150214372",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Manuel Castro, 2048",
                        "postalCode": "1828",
                        "landmark": null,
                        "location": {
                            "latitude": -34.7357353,
                            "longitude": -58.39872320000001
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
                            "code": "Banfield",
                            "name": "Banfield"
                        },
                        "subAdminZone2": {
                            "code": "N/A",
                            "name": "N/A"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "21476537"
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
                    }
                },
                "packages": [
                    {
                        "id": 20885590,
                        "lpn": "v22899150JRSA-01",
                        "tracking": "v22899150JRSA-01",
                        "gddNumber": "v22899150JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/24/v22899150JRSA-01.pdf",
                        "courierPackageId": "v22899150JRSA-01",
                        "lastStatusCode": "08",
                        "lastStatusDesc": "En Tránsito",
                        "lastSubStatusCode": "9006",
                        "lastSubStatusDesc": "Listo para Recoger",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "9006",
                    "description": "Listo para Recoger"
                },
                "measures": null,
                "lpns": [
                    "v22899150JRSA-01"
                ],
                "trackings": [
                    "v22899150JRSA-01"
                ],
                "createdAt": 1713971225232,
                "updatedAt": 1713961196705
            },
            {
                "id": 20856933,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713970849260,
                "externalSystemOrderId": "v22900427JRSA-01",
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
                    "id": 21249387,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21080114,
                    "name": "Debora Mendoza",
                    "email": "debym1@hotmail.com",
                    "phoneNumber": "+541136460905",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Juan de Garay, 3330",
                        "postalCode": "1834",
                        "landmark": null,
                        "location": {
                            "latitude": -34.7650669,
                            "longitude": -58.35744439999999
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "PROVINCIA ",
                            "name": "PROVINCIA DE BUENOS AIRES"
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
                        "value": "26788544"
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
                    }
                },
                "packages": [
                    {
                        "id": 20885366,
                        "lpn": "v22900427JRSA-01",
                        "tracking": "v22900427JRSA-01",
                        "gddNumber": "v22900427JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/24/v22900427JRSA-01.pdf",
                        "courierPackageId": "v22900427JRSA-01",
                        "lastStatusCode": "08",
                        "lastStatusDesc": "En Tránsito",
                        "lastSubStatusCode": "9006",
                        "lastSubStatusDesc": "Listo para Recoger",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "9006",
                    "description": "Listo para Recoger"
                },
                "measures": null,
                "lpns": [
                    "v22900427JRSA-01"
                ],
                "trackings": [
                    "v22900427JRSA-01"
                ],
                "createdAt": 1713970849260,
                "updatedAt": 1713959417214
            },
            {
                "id": 20856860,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713970743815,
                "externalSystemOrderId": "v22898970JRSA-01",
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
                    "id": 21249314,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21080041,
                    "name": "german gallarini",
                    "email": "ggallarini@hotmail.com",
                    "phoneNumber": "+541155736472",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Tres Sargentos, 1435",
                        "postalCode": "1869",
                        "landmark": null,
                        "location": {
                            "latitude": -34.6854156,
                            "longitude": -58.36677210000001
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
                            "code": "6035",
                            "name": "Avellaneda"
                        },
                        "subAdminZone2": {
                            "code": "Gerli",
                            "name": "Gerli"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "23292676"
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
                    }
                },
                "packages": [
                    {
                        "id": 20885293,
                        "lpn": "v22898970JRSA-01",
                        "tracking": "v22898970JRSA-01",
                        "gddNumber": "v22898970JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/24/v22898970JRSA-01.pdf",
                        "courierPackageId": "v22898970JRSA-01",
                        "lastStatusCode": "08",
                        "lastStatusDesc": "En Tránsito",
                        "lastSubStatusCode": "9006",
                        "lastSubStatusDesc": "Listo para Recoger",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "9006",
                    "description": "Listo para Recoger"
                },
                "measures": null,
                "lpns": [
                    "v22898970JRSA-01"
                ],
                "trackings": [
                    "v22898970JRSA-01"
                ],
                "createdAt": 1713970743815,
                "updatedAt": 1713960952571
            },
            {
                "id": 20856024,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713969230442,
                "externalSystemOrderId": "v22899933JRSA-01",
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
                    "id": 21248462,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21079199,
                    "name": "Ana Maria PEREZ BARREIRO",
                    "email": "aperezbarreiro@yahoo.com.ar",
                    "phoneNumber": "+541169988451",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Carlos Pellegrini, 1090",
                        "postalCode": null,
                        "landmark": null,
                        "location": {
                            "latitude": -34.8225416,
                            "longitude": -58.3907575
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "PROVINCIA ",
                            "name": "PROVINCIA DE BUENOS AIRES"
                        },
                        "subAdminZone1": {
                            "code": "Almte Bro",
                            "name": "Almte Brown"
                        },
                        "subAdminZone2": {
                            "code": "Burzaco",
                            "name": "Burzaco"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "12705810"
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
                    }
                },
                "packages": [
                    {
                        "id": 20884456,
                        "lpn": "v22899933JRSA-01",
                        "tracking": "v22899933JRSA-01",
                        "gddNumber": "v22899933JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/24/v22899933JRSA-01.pdf",
                        "courierPackageId": "v22899933JRSA-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "v22899933JRSA-01"
                ],
                "trackings": [
                    "v22899933JRSA-01"
                ],
                "createdAt": 1713969230442,
                "updatedAt": 1713954854849
            },
            {
                "id": 20855955,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713969109268,
                "externalSystemOrderId": "v22899892JRSA-01",
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
                    "id": 21248393,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21079130,
                    "name": "Mariela Montes",
                    "email": "marielanmontes@hotmail.com",
                    "phoneNumber": "+541130810935",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Boulogne Sur Mer, 1541",
                        "postalCode": "1828",
                        "landmark": null,
                        "location": {
                            "latitude": -34.7441241,
                            "longitude": -58.3762033
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
                            "code": "66490010001",
                            "name": "Banfield"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "29173694"
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
                    }
                },
                "packages": [
                    {
                        "id": 20884387,
                        "lpn": "v22899892JRSA-01",
                        "tracking": "v22899892JRSA-01",
                        "gddNumber": "v22899892JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/24/v22899892JRSA-01.pdf",
                        "courierPackageId": "v22899892JRSA-01",
                        "lastStatusCode": "08",
                        "lastStatusDesc": "En Tránsito",
                        "lastSubStatusCode": "9006",
                        "lastSubStatusDesc": "Listo para Recoger",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "9006",
                    "description": "Listo para Recoger"
                },
                "measures": null,
                "lpns": [
                    "v22899892JRSA-01"
                ],
                "trackings": [
                    "v22899892JRSA-01"
                ],
                "createdAt": 1713969109268,
                "updatedAt": 1713959578053
            },
            {
                "id": 20855937,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713969082293,
                "externalSystemOrderId": "v22899867JRSA-01",
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
                    "id": 21248373,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21079112,
                    "name": "MELINDA HERNANDEZ",
                    "email": "melindahernandezrp@gmail.com",
                    "phoneNumber": "+541164958169",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Ucrania, 798",
                        "postalCode": "0000",
                        "landmark": null,
                        "location": {
                            "latitude": -34.8111038,
                            "longitude": -58.4292628
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
                            "code": "Llavallol",
                            "name": "Llavallol"
                        },
                        "subAdminZone2": {
                            "code": "N/A",
                            "name": "N/A"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "95776057"
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
                    }
                },
                "packages": [
                    {
                        "id": 20884369,
                        "lpn": "v22899867JRSA-01",
                        "tracking": "v22899867JRSA-01",
                        "gddNumber": "v22899867JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/24/v22899867JRSA-01.pdf",
                        "courierPackageId": "v22899867JRSA-01",
                        "lastStatusCode": "08",
                        "lastStatusDesc": "En Tránsito",
                        "lastSubStatusCode": "9006",
                        "lastSubStatusDesc": "Listo para Recoger",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "9006",
                    "description": "Listo para Recoger"
                },
                "measures": null,
                "lpns": [
                    "v22899867JRSA-01"
                ],
                "trackings": [
                    "v22899867JRSA-01"
                ],
                "createdAt": 1713969082293,
                "updatedAt": 1713960201844
            },
            {
                "id": 20855915,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713969018552,
                "externalSystemOrderId": "v22899848JRSA-01",
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
                    "id": 21248351,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21079090,
                    "name": "Gloria Elissetche",
                    "email": "gloriaeliss@hotmail.com",
                    "phoneNumber": "+541153772016",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Triunvirato, 1162",
                        "postalCode": null,
                        "landmark": null,
                        "location": {
                            "latitude": -34.7770197,
                            "longitude": -58.3800579
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
                            "code": "Temperley",
                            "name": "Temperley"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "20201784"
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
                    }
                },
                "packages": [
                    {
                        "id": 20884347,
                        "lpn": "v22899848JRSA-01",
                        "tracking": "v22899848JRSA-01",
                        "gddNumber": "v22899848JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/24/v22899848JRSA-01.pdf",
                        "courierPackageId": "v22899848JRSA-01",
                        "lastStatusCode": "08",
                        "lastStatusDesc": "En Tránsito",
                        "lastSubStatusCode": "9006",
                        "lastSubStatusDesc": "Listo para Recoger",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "9006",
                    "description": "Listo para Recoger"
                },
                "measures": null,
                "lpns": [
                    "v22899848JRSA-01"
                ],
                "trackings": [
                    "v22899848JRSA-01"
                ],
                "createdAt": 1713969018552,
                "updatedAt": 1713957805967
            },
            {
                "id": 20855228,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713967626133,
                "externalSystemOrderId": "v22899168JRSA-01",
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
                    "id": 21247650,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21078395,
                    "name": "Marcela Nepomoceno",
                    "email": "marcelanep@gmail.com",
                    "phoneNumber": "+541161703020",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Moldes, 485",
                        "postalCode": null,
                        "landmark": null,
                        "location": {
                            "latitude": -34.7907937,
                            "longitude": -58.4319361
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
                            "code": "Llavallol",
                            "name": "Llavallol"
                        },
                        "subAdminZone2": {
                            "code": "N/A",
                            "name": "N/A"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "29910258"
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
                    }
                },
                "packages": [
                    {
                        "id": 20883660,
                        "lpn": "v22899168JRSA-01",
                        "tracking": "v22899168JRSA-01",
                        "gddNumber": "v22899168JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/24/v22899168JRSA-01.pdf",
                        "courierPackageId": "v22899168JRSA-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "v22899168JRSA-01"
                ],
                "trackings": [
                    "v22899168JRSA-01"
                ],
                "createdAt": 1713967626133,
                "updatedAt": 1713953236683
            },
            {
                "id": 20854599,
                "etaDate": 1713963600000,
                "etaEndDate": 1713970800000,
                "pickupDate": 1713966224086,
                "externalSystemOrderId": "jart-N-22858007-01",
                "orderType": "331",
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
                    "id": 21247004,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21077757,
                    "name": "JAVIER GUTIERREZ",
                    "email": "rulodjav@hotmail.com",
                    "phoneNumber": "+541165328113",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Carranza Angel Justiniano 1925 número 1925, null",
                        "postalCode": null,
                        "landmark": null,
                        "location": {
                            "latitude": -34.852578,
                            "longitude": -58.3996507
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "Llavallol",
                            "name": "Llavallol"
                        },
                        "subAdminZone1": {
                            "code": "B1854APK ",
                            "name": "B1854APK Longchamps"
                        },
                        "subAdminZone2": {
                            "code": "B1854APK ",
                            "name": "B1854APK Longchamps"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "25747082"
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
                    }
                },
                "packages": [
                    {
                        "id": 20883028,
                        "lpn": "jart-N-22858007-01",
                        "tracking": "jart-N-22858007-01",
                        "gddNumber": "jart-N-22858007-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/24/jart-N-22858007-01.pdf",
                        "courierPackageId": "jart-N-22858007-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": "9003",
                        "lastSubStatusDesc": "Asignado en vehículo",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713963600000,
                    "max": 1713970800000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "jart-N-22858007-01"
                ],
                "trackings": [
                    "jart-N-22858007-01"
                ],
                "createdAt": 1713966224086,
                "updatedAt": 1713954141088
            },
            {
                "id": 20854182,
                "etaDate": 1713978000000,
                "etaEndDate": 1713992459000,
                "pickupDate": 1713965264819,
                "externalSystemOrderId": "v22897211JRSA-01",
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
                    "id": 21246569,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21077335,
                    "name": "Norma Alonso",
                    "email": "alonsopriano@hotmail.com",
                    "phoneNumber": "+541126303347",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Francia, 1612",
                        "postalCode": null,
                        "landmark": null,
                        "location": {
                            "latitude": -34.8582205,
                            "longitude": -58.3911554
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
                            "code": "Longchamp",
                            "name": "Longchamps"
                        },
                        "subAdminZone2": {
                            "code": "N/A",
                            "name": "N/A"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "12386372"
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
                    }
                },
                "packages": [
                    {
                        "id": 20882611,
                        "lpn": "v22897211JRSA-01",
                        "tracking": "v22897211JRSA-01",
                        "gddNumber": "v22897211JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/24/v22897211JRSA-01.pdf",
                        "courierPackageId": "v22897211JRSA-01",
                        "lastStatusCode": "08",
                        "lastStatusDesc": "En Tránsito",
                        "lastSubStatusCode": "9006",
                        "lastSubStatusDesc": "Listo para Recoger",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713978000000,
                    "max": 1713992459000
                },
                "status": {
                    "code": "9006",
                    "description": "Listo para Recoger"
                },
                "measures": null,
                "lpns": [
                    "v22897211JRSA-01"
                ],
                "trackings": [
                    "v22897211JRSA-01"
                ],
                "createdAt": 1713965264819,
                "updatedAt": 1713954412163
            },
            {
                "id": 20853977,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713964709038,
                "externalSystemOrderId": "v22898060JRSA-01",
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
                    "id": 21246361,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21077129,
                    "name": "Romina Giselle Garcia",
                    "email": "rggarcia.23@gmail.com",
                    "phoneNumber": "+541158215593",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Juan Piñeiro, 137",
                        "postalCode": "1826",
                        "landmark": null,
                        "location": {
                            "latitude": -34.7066197,
                            "longitude": -58.3935973
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
                            "code": "6434",
                            "name": "Lanús"
                        },
                        "subAdminZone2": {
                            "code": "Lanús Oes",
                            "name": "Lanús Oeste"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "39489338"
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
                    }
                },
                "packages": [
                    {
                        "id": 20882406,
                        "lpn": "v22898060JRSA-01",
                        "tracking": "v22898060JRSA-01",
                        "gddNumber": "v22898060JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/24/v22898060JRSA-01.pdf",
                        "courierPackageId": "v22898060JRSA-01",
                        "lastStatusCode": "08",
                        "lastStatusDesc": "En Tránsito",
                        "lastSubStatusCode": "9006",
                        "lastSubStatusDesc": "Listo para Recoger",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "9006",
                    "description": "Listo para Recoger"
                },
                "measures": null,
                "lpns": [
                    "v22898060JRSA-01"
                ],
                "trackings": [
                    "v22898060JRSA-01"
                ],
                "createdAt": 1713964709038,
                "updatedAt": 1713963225521
            },
            {
                "id": 20853756,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713964120103,
                "externalSystemOrderId": "v22897884JRSA-01",
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
                    "id": 21246132,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21076902,
                    "name": "Valeria elizabeth Nuvoli",
                    "email": "jnepomoceno@hotmail.com",
                    "phoneNumber": "+541151656685",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Cayetano Donizetti, 247",
                        "postalCode": "1832",
                        "landmark": null,
                        "location": {
                            "latitude": -34.7539184,
                            "longitude": -58.4260257
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
                            "code": "60490",
                            "name": "Lomas de Zamora"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "21769282"
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
                    }
                },
                "packages": [
                    {
                        "id": 20882185,
                        "lpn": "v22897884JRSA-01",
                        "tracking": "v22897884JRSA-01",
                        "gddNumber": "v22897884JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/24/v22897884JRSA-01.pdf",
                        "courierPackageId": "v22897884JRSA-01",
                        "lastStatusCode": "08",
                        "lastStatusDesc": "En Tránsito",
                        "lastSubStatusCode": "9006",
                        "lastSubStatusDesc": "Listo para Recoger",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "9006",
                    "description": "Listo para Recoger"
                },
                "measures": null,
                "lpns": [
                    "v22897884JRSA-01"
                ],
                "trackings": [
                    "v22897884JRSA-01"
                ],
                "createdAt": 1713964120103,
                "updatedAt": 1713963023783
            },
            {
                "id": 20853701,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713963950340,
                "externalSystemOrderId": "v22897832JRSA-01",
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
                    "id": 21246077,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21076847,
                    "name": "Sergio D Amico",
                    "email": "sergiobdamico@gmail.com",
                    "phoneNumber": "+541142144974",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "King, 482",
                        "postalCode": "1845",
                        "landmark": null,
                        "location": {
                            "latitude": -34.7869539,
                            "longitude": -58.3760801
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
                            "code": "José Marm",
                            "name": "José Marmol"
                        },
                        "subAdminZone2": {
                            "code": "N/A",
                            "name": "N/A"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "12673381"
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
                    }
                },
                "packages": [
                    {
                        "id": 20882130,
                        "lpn": "v22897832JRSA-01",
                        "tracking": "v22897832JRSA-01",
                        "gddNumber": "v22897832JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/24/v22897832JRSA-01.pdf",
                        "courierPackageId": "v22897832JRSA-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "v22897832JRSA-01"
                ],
                "trackings": [
                    "v22897832JRSA-01"
                ],
                "createdAt": 1713963950340,
                "updatedAt": 1713949552865
            },
            {
                "id": 20853609,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713963722849,
                "externalSystemOrderId": "v22896777JRSA-01",
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
                    "id": 21245983,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21076755,
                    "name": "edith rodriguez",
                    "email": "rodriguez_edithb@yahoo.com.ar",
                    "phoneNumber": "+541160574569",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "San Luis, 1070",
                        "postalCode": null,
                        "landmark": null,
                        "location": {
                            "latitude": -34.7901528,
                            "longitude": -58.41234659999999
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
                            "code": "Turdera",
                            "name": "Turdera"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "24694136"
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
                    }
                },
                "packages": [
                    {
                        "id": 20882038,
                        "lpn": "v22896777JRSA-01",
                        "tracking": "v22896777JRSA-01",
                        "gddNumber": "v22896777JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/24/v22896777JRSA-01.pdf",
                        "courierPackageId": "v22896777JRSA-01",
                        "lastStatusCode": "08",
                        "lastStatusDesc": "En Tránsito",
                        "lastSubStatusCode": "9006",
                        "lastSubStatusDesc": "Listo para Recoger",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "9006",
                    "description": "Listo para Recoger"
                },
                "measures": null,
                "lpns": [
                    "v22896777JRSA-01"
                ],
                "trackings": [
                    "v22896777JRSA-01"
                ],
                "createdAt": 1713963722849,
                "updatedAt": 1713963685711
            },
            {
                "id": 20853524,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713963498918,
                "externalSystemOrderId": "v22897659JRSA-01",
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
                    "id": 21245894,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21076670,
                    "name": "Jaqueline alarcon",
                    "email": "jaquelinalarcon92@gmail.com",
                    "phoneNumber": "+541176181598",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Luis Piedra Buena, 4174",
                        "postalCode": "1844",
                        "landmark": null,
                        "location": {
                            "latitude": -34.7817025,
                            "longitude": -58.35267289999999
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
                            "code": "José Márm",
                            "name": "José Mármol"
                        },
                        "subAdminZone2": {
                            "code": "N/A",
                            "name": "N/A"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "36542465"
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
                    }
                },
                "packages": [
                    {
                        "id": 20881953,
                        "lpn": "v22897659JRSA-01",
                        "tracking": "v22897659JRSA-01",
                        "gddNumber": "v22897659JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/24/v22897659JRSA-01.pdf",
                        "courierPackageId": "v22897659JRSA-01",
                        "lastStatusCode": "08",
                        "lastStatusDesc": "En Tránsito",
                        "lastSubStatusCode": "9006",
                        "lastSubStatusDesc": "Listo para Recoger",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "9006",
                    "description": "Listo para Recoger"
                },
                "measures": null,
                "lpns": [
                    "v22897659JRSA-01"
                ],
                "trackings": [
                    "v22897659JRSA-01"
                ],
                "createdAt": 1713963498918,
                "updatedAt": 1713963144708
            },
            {
                "id": 20852881,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713961480983,
                "externalSystemOrderId": "v22897141JRSA-01",
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
                    "id": 21245229,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21076015,
                    "name": "carola perez",
                    "email": "carolaf_perez@hotmail.com",
                    "phoneNumber": "+541151207508",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Coronel Suárez, 898",
                        "postalCode": "1836",
                        "landmark": null,
                        "location": {
                            "latitude": -34.77890250000001,
                            "longitude": -58.3989312
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "PROVINCIA ",
                            "name": "PROVINCIA DE BUENOS AIRES"
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
                        "value": "27582513"
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
                    }
                },
                "packages": [
                    {
                        "id": 20881310,
                        "lpn": "v22897141JRSA-01",
                        "tracking": "v22897141JRSA-01",
                        "gddNumber": "v22897141JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/24/v22897141JRSA-01.pdf",
                        "courierPackageId": "v22897141JRSA-01",
                        "lastStatusCode": "08",
                        "lastStatusDesc": "En Tránsito",
                        "lastSubStatusCode": "9006",
                        "lastSubStatusDesc": "Listo para Recoger",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "9006",
                    "description": "Listo para Recoger"
                },
                "measures": null,
                "lpns": [
                    "v22897141JRSA-01"
                ],
                "trackings": [
                    "v22897141JRSA-01"
                ],
                "createdAt": 1713961480983,
                "updatedAt": 1713956420811
            },
            {
                "id": 20852771,
                "etaDate": 1713978000000,
                "etaEndDate": 1713992459000,
                "pickupDate": 1713961112587,
                "externalSystemOrderId": "v22897052JRSA-01",
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
                    "id": 21245115,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21075905,
                    "name": "hector abete",
                    "email": "emt.6@hotmail.com",
                    "phoneNumber": "+541167622770",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Pringles, 3844",
                        "postalCode": "1825",
                        "landmark": null,
                        "location": {
                            "latitude": -34.723376,
                            "longitude": -58.35624499999999
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
                            "code": "Monte Chi",
                            "name": "Monte Chingolo"
                        },
                        "subAdminZone2": {
                            "code": "N/A",
                            "name": "N/A"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "10104005"
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
                    }
                },
                "packages": [
                    {
                        "id": 20881200,
                        "lpn": "v22897052JRSA-01",
                        "tracking": "v22897052JRSA-01",
                        "gddNumber": "v22897052JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/24/v22897052JRSA-01.pdf",
                        "courierPackageId": "v22897052JRSA-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": "9003",
                        "lastSubStatusDesc": "Asignado en vehículo",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713978000000,
                    "max": 1713992459000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "v22897052JRSA-01"
                ],
                "trackings": [
                    "v22897052JRSA-01"
                ],
                "createdAt": 1713961112587,
                "updatedAt": 1713955204190
            },
            {
                "id": 20852555,
                "etaDate": 1713970800000,
                "etaEndDate": 1713978000000,
                "pickupDate": 1713960156774,
                "externalSystemOrderId": "jart-n22880746-01",
                "orderType": "331",
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
                    "id": 21244895,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21075689,
                    "name": "berenice culos",
                    "email": "biiree87@gmail.com",
                    "phoneNumber": "02262591007",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Cornelio Saavedra 186, null",
                        "postalCode": null,
                        "landmark": null,
                        "location": {
                            "latitude": -34.7619561,
                            "longitude": -58.4056367
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "Llavallol",
                            "name": "Llavallol"
                        },
                        "subAdminZone1": {
                            "code": "B1832DJC ",
                            "name": "B1832DJC Lomas de Zamora"
                        },
                        "subAdminZone2": {
                            "code": "B1832DJC ",
                            "name": "B1832DJC Lomas de Zamora"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "32885975"
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
                    }
                },
                "packages": [
                    {
                        "id": 20880984,
                        "lpn": "jart-n22880746-01",
                        "tracking": "jart-n22880746-01",
                        "gddNumber": "jart-n22880746-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/24/jart-n22880746-01.pdf",
                        "courierPackageId": "jart-n22880746-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": "9003",
                        "lastSubStatusDesc": "Asignado en vehículo",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713970800000,
                    "max": 1713978000000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "jart-n22880746-01"
                ],
                "trackings": [
                    "jart-n22880746-01"
                ],
                "createdAt": 1713960156774,
                "updatedAt": 1713955050561
            },
            {
                "id": 20849271,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713921577244,
                "externalSystemOrderId": "v22893360JRSA-01",
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
                    "id": 21241541,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21072400,
                    "name": "Marta Piemonte",
                    "email": "martapiemonte@gmail.com",
                    "phoneNumber": "+541158306795",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Pasaje Etcheverry, 997",
                        "postalCode": "1845",
                        "landmark": null,
                        "location": {
                            "latitude": -34.7956125,
                            "longitude": -58.37796309999999
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
                            "code": "José Márm",
                            "name": "José Mármol"
                        },
                        "subAdminZone2": {
                            "code": "N/A",
                            "name": "N/A"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "17589639"
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
                    }
                },
                "packages": [
                    {
                        "id": 20877700,
                        "lpn": "v22893360JRSA-01",
                        "tracking": "v22893360JRSA-01",
                        "gddNumber": "v22893360JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/24/v22893360JRSA-01.pdf",
                        "courierPackageId": "v22893360JRSA-01",
                        "lastStatusCode": "08",
                        "lastStatusDesc": "En Tránsito",
                        "lastSubStatusCode": "9006",
                        "lastSubStatusDesc": "Listo para Recoger",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "9006",
                    "description": "Listo para Recoger"
                },
                "measures": null,
                "lpns": [
                    "v22893360JRSA-01"
                ],
                "trackings": [
                    "v22893360JRSA-01"
                ],
                "createdAt": 1713921577244,
                "updatedAt": 1713963791705
            },
            {
                "id": 20848387,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713917257243,
                "externalSystemOrderId": "v22890031JRSA-01",
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
                    "id": 21240644,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21071513,
                    "name": "DARÍO  ESPINDOLA ",
                    "email": "javidario84@gmail.com",
                    "phoneNumber": "+541125728146",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Ernesto Nazaret, 302",
                        "postalCode": "1834",
                        "landmark": null,
                        "location": {
                            "latitude": -34.7510623,
                            "longitude": -58.35968
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
                            "code": "Temperley",
                            "name": "Temperley"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "31025992"
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
                    }
                },
                "packages": [
                    {
                        "id": 20876816,
                        "lpn": "v22890031JRSA-01",
                        "tracking": "v22890031JRSA-01",
                        "gddNumber": "v22890031JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/24/v22890031JRSA-01.pdf",
                        "courierPackageId": "v22890031JRSA-01",
                        "lastStatusCode": "08",
                        "lastStatusDesc": "En Tránsito",
                        "lastSubStatusCode": "9006",
                        "lastSubStatusDesc": "Listo para Recoger",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "9006",
                    "description": "Listo para Recoger"
                },
                "measures": null,
                "lpns": [
                    "v22890031JRSA-01"
                ],
                "trackings": [
                    "v22890031JRSA-01"
                ],
                "createdAt": 1713917257243,
                "updatedAt": 1713956785324
            },
            {
                "id": 20847792,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713914586226,
                "externalSystemOrderId": "v22891941JRSA-01",
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
                    "id": 21240034,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21070914,
                    "name": "Guadalupe Pretti",
                    "email": "guadalupe_pretti@hotmail.com",
                    "phoneNumber": "+541142450434",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Cochabamba, 370",
                        "postalCode": null,
                        "landmark": null,
                        "location": {
                            "latitude": -34.7446611,
                            "longitude": -58.3907729
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
                            "code": "Banfield",
                            "name": "Banfield"
                        },
                        "subAdminZone2": {
                            "code": "N/A",
                            "name": "N/A"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "32155731"
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
                    }
                },
                "packages": [
                    {
                        "id": 20876211,
                        "lpn": "v22891941JRSA-01",
                        "tracking": "v22891941JRSA-01",
                        "gddNumber": "v22891941JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/23/v22891941JRSA-01.pdf",
                        "courierPackageId": "v22891941JRSA-01",
                        "lastStatusCode": "08",
                        "lastStatusDesc": "En Tránsito",
                        "lastSubStatusCode": "9006",
                        "lastSubStatusDesc": "Listo para Recoger",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "9006",
                    "description": "Listo para Recoger"
                },
                "measures": null,
                "lpns": [
                    "v22891941JRSA-01"
                ],
                "trackings": [
                    "v22891941JRSA-01"
                ],
                "createdAt": 1713914586226,
                "updatedAt": 1713945741396
            },
            {
                "id": 20844683,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713907154197,
                "externalSystemOrderId": "v22890187JRSA-01",
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
                    "id": 21236859,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21067774,
                    "name": "susana mendez",
                    "email": "suedme15@gmail.com",
                    "phoneNumber": "+541157074316",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Valentín Alsina, 736",
                        "postalCode": "1846",
                        "landmark": null,
                        "location": {
                            "latitude": -34.80123520000001,
                            "longitude": -58.3889046
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
                            "code": "6028",
                            "name": "Almirante Brown"
                        },
                        "subAdminZone2": {
                            "code": "N/A",
                            "name": "N/A"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "14501693"
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
                    }
                },
                "packages": [
                    {
                        "id": 20873095,
                        "lpn": "v22890187JRSA-01",
                        "tracking": "v22890187JRSA-01",
                        "gddNumber": "v22890187JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/23/v22890187JRSA-01.pdf",
                        "courierPackageId": "v22890187JRSA-01",
                        "lastStatusCode": "08",
                        "lastStatusDesc": "En Tránsito",
                        "lastSubStatusCode": "9006",
                        "lastSubStatusDesc": "Listo para Recoger",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "9006",
                    "description": "Listo para Recoger"
                },
                "measures": null,
                "lpns": [
                    "v22890187JRSA-01"
                ],
                "trackings": [
                    "v22890187JRSA-01"
                ],
                "createdAt": 1713907154197,
                "updatedAt": 1713956666984
            },
            {
                "id": 20842995,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713904045565,
                "externalSystemOrderId": "v22889602JRSA-01",
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
                    "id": 21235148,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21066073,
                    "name": "ANGELA ANASTASI DE FERNANDEZ",
                    "email": "11069641@jumbo.com.ar",
                    "phoneNumber": "+541142022280",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Avenida Santa Fe, 987",
                        "postalCode": "1828",
                        "landmark": null,
                        "location": {
                            "latitude": -34.74614770000001,
                            "longitude": -58.41889579999997
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
                            "code": "Banfield",
                            "name": "Banfield"
                        },
                        "subAdminZone2": {
                            "code": "N/A",
                            "name": "N/A"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "11069641"
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
                    }
                },
                "packages": [
                    {
                        "id": 20871405,
                        "lpn": "v22889602JRSA-01",
                        "tracking": "v22889602JRSA-01",
                        "gddNumber": "v22889602JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/23/v22889602JRSA-01.pdf",
                        "courierPackageId": "v22889602JRSA-01",
                        "lastStatusCode": "08",
                        "lastStatusDesc": "En Tránsito",
                        "lastSubStatusCode": "9006",
                        "lastSubStatusDesc": "Listo para Recoger",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "9006",
                    "description": "Listo para Recoger"
                },
                "measures": null,
                "lpns": [
                    "v22889602JRSA-01"
                ],
                "trackings": [
                    "v22889602JRSA-01"
                ],
                "createdAt": 1713904045565,
                "updatedAt": 1713961994575
            },
            {
                "id": 20828211,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713868835200,
                "externalSystemOrderId": "v22882590JRSA-01",
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
                    "id": 21220037,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21051140,
                    "name": "Jesica Laniewski",
                    "email": "jesica.l@hotmail.com",
                    "phoneNumber": "+541169269070",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Aráoz, 531",
                        "postalCode": "1828",
                        "landmark": null,
                        "location": {
                            "latitude": -34.7355287,
                            "longitude": -58.4023884
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
                            "code": "Banfield",
                            "name": "Banfield"
                        },
                        "subAdminZone2": {
                            "code": "N/A",
                            "name": "N/A"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "36359757"
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
                    }
                },
                "packages": [
                    {
                        "id": 20856581,
                        "lpn": "v22882590JRSA-01",
                        "tracking": "v22882590JRSA-01",
                        "gddNumber": "v22882590JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/23/v22882590JRSA-01.pdf",
                        "courierPackageId": "v22882590JRSA-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": null,
                        "lastSubStatusDesc": null,
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "v22882590JRSA-01"
                ],
                "trackings": [
                    "v22882590JRSA-01"
                ],
                "createdAt": 1713868835200,
                "updatedAt": 1713854444227
            },
            {
                "id": 20824863,
                "etaDate": 1713963600000,
                "etaEndDate": 1713978059000,
                "pickupDate": 1713834140187,
                "externalSystemOrderId": "v22880746JRSA-01",
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
                    "id": 21216590,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21047783,
                    "name": "Berenice Culós",
                    "email": "biiree87@gmail.com",
                    "phoneNumber": "+542262591007",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Cornelio Saavedra, 186",
                        "postalCode": null,
                        "landmark": null,
                        "location": {
                            "latitude": -34.761958,
                            "longitude": -58.4056396
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
                            "code": "N/A",
                            "name": "N/A"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "32885975"
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
                    }
                },
                "packages": [
                    {
                        "id": 20853233,
                        "lpn": "v22880746JRSA-01",
                        "tracking": "v22880746JRSA-01",
                        "gddNumber": "v22880746JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/23/v22880746JRSA-01.pdf",
                        "courierPackageId": "v22880746JRSA-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": "9003",
                        "lastSubStatusDesc": "Asignado en vehículo",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713963600000,
                    "max": 1713978059000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "v22880746JRSA-01"
                ],
                "trackings": [
                    "v22880746JRSA-01"
                ],
                "createdAt": 1713834140187,
                "updatedAt": 1713954929422
            },
            {
                "id": 20822387,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713825404052,
                "externalSystemOrderId": "v22879253JRSA-01",
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
                    "id": 21214021,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21045272,
                    "name": "Fabiola Villalba Gomez",
                    "email": "fabiivillalba@gmail.com",
                    "phoneNumber": "+541125113012",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Gral. Hornos, 250",
                        "postalCode": "1804",
                        "landmark": null,
                        "location": {
                            "latitude": -34.8661587,
                            "longitude": -58.5114981
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "2",
                            "name": "Ciudad Autónoma de Buenos Aires"
                        },
                        "subAdminZone1": {
                            "code": "6270",
                            "name": "Ezeiza"
                        },
                        "subAdminZone2": {
                            "code": "Ezeiza",
                            "name": "Ezeiza"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "94185404"
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
                    }
                },
                "packages": [
                    {
                        "id": 20850728,
                        "lpn": "v22879253JRSA-01",
                        "tracking": "v22879253JRSA-01",
                        "gddNumber": "v22879253JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/22/v22879253JRSA-01.pdf",
                        "courierPackageId": "v22879253JRSA-01",
                        "lastStatusCode": "08",
                        "lastStatusDesc": "En Tránsito",
                        "lastSubStatusCode": "9006",
                        "lastSubStatusDesc": "Listo para Recoger",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "9006",
                    "description": "Listo para Recoger"
                },
                "measures": null,
                "lpns": [
                    "v22879253JRSA-01"
                ],
                "trackings": [
                    "v22879253JRSA-01"
                ],
                "createdAt": 1713825404052,
                "updatedAt": 1713940469761
            },
            {
                "id": 20780121,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713711244625,
                "externalSystemOrderId": "v22860961JRSA-01",
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
                    "id": 21170673,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 21002551,
                    "name": "Abril Quimey Pittaluga Soria",
                    "email": "soriaquimey4@gmail.com",
                    "phoneNumber": "+541126672724",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Valentín Vergara, 1451",
                        "postalCode": "1828",
                        "landmark": null,
                        "location": {
                            "latitude": -34.743753,
                            "longitude": -58.3946365
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
                            "code": "66490010001",
                            "name": "Banfield"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "44711261"
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
                    }
                },
                "packages": [
                    {
                        "id": 20808271,
                        "lpn": "v22860961JRSA-01",
                        "tracking": "v22860961JRSA-01",
                        "gddNumber": "v22860961JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/21/v22860961JRSA-01.pdf",
                        "courierPackageId": "v22860961JRSA-01",
                        "lastStatusCode": "08",
                        "lastStatusDesc": "En Tránsito",
                        "lastSubStatusCode": "9006",
                        "lastSubStatusDesc": "Listo para Recoger",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "9006",
                    "description": "Listo para Recoger"
                },
                "measures": null,
                "lpns": [
                    "v22860961JRSA-01"
                ],
                "trackings": [
                    "v22860961JRSA-01"
                ],
                "createdAt": 1713711244625,
                "updatedAt": 1713940452019
            },
            {
                "id": 20770104,
                "etaDate": 1713992400000,
                "etaEndDate": 1714005059000,
                "pickupDate": 1713652572166,
                "externalSystemOrderId": "v22857154JRSA-01",
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
                    "id": 21160352,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 20992446,
                    "name": "gaston pelliza suchovinski",
                    "email": "pellizag@gmail.com",
                    "phoneNumber": "+541154247224",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "Norma Fontenla, 65",
                        "postalCode": "1834",
                        "landmark": null,
                        "location": {
                            "latitude": -34.766669,
                            "longitude": -58.370269399999984
                        },
                        "country": {
                            "code": "",
                            "name": ""
                        },
                        "adminZone": {
                            "code": "PROVINCIA ",
                            "name": "PROVINCIA DE BUENOS AIRES"
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
                        "value": "28631715"
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
                    }
                },
                "packages": [
                    {
                        "id": 20798246,
                        "lpn": "v22857154JRSA-01",
                        "tracking": "v22857154JRSA-01",
                        "gddNumber": "v22857154JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/20/v22857154JRSA-01.pdf",
                        "courierPackageId": "v22857154JRSA-01",
                        "lastStatusCode": "08",
                        "lastStatusDesc": "En Tránsito",
                        "lastSubStatusCode": "9006",
                        "lastSubStatusDesc": "Listo para Recoger",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713992400000,
                    "max": 1714005059000
                },
                "status": {
                    "code": "9006",
                    "description": "Listo para Recoger"
                },
                "measures": null,
                "lpns": [
                    "v22857154JRSA-01"
                ],
                "trackings": [
                    "v22857154JRSA-01"
                ],
                "createdAt": 1713652572166,
                "updatedAt": 1713945929561
            },
            {
                "id": 20710715,
                "etaDate": 1713978000000,
                "etaEndDate": 1713992459000,
                "pickupDate": 1713475679404,
                "externalSystemOrderId": "v22827859JRSA-01",
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
                    "id": 21099171,
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
                        }
                    },
                    "type": null
                },
                "destination": {
                    "id": 20932260,
                    "name": "Patricia Abbruzzese",
                    "email": "patriciaabbruzzese@hotmail.com",
                    "phoneNumber": "+541141959291",
                    "isClient": false,
                    "type": null,
                    "address": {
                        "street": "29 de Septiembre, 3860",
                        "postalCode": null,
                        "landmark": null,
                        "location": {
                            "latitude": -34.7206865,
                            "longitude": -58.3925218
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
                            "code": "6434",
                            "name": "Lanús"
                        },
                        "subAdminZone2": {
                            "code": "Remedios ",
                            "name": "Remedios de Escalada"
                        }
                    },
                    "identification": {
                        "type": null,
                        "value": "23102913"
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
                    }
                },
                "packages": [
                    {
                        "id": 20738794,
                        "lpn": "v22827859JRSA-01",
                        "tracking": "v22827859JRSA-01",
                        "gddNumber": "v22827859JRSA-01",
                        "bigTicket": false,
                        "totalComplements": 0,
                        "numberComplement": 1,
                        "labelImgUrl": "https://daas-files.ecomm.cencosud.com/dispatch/labels/2024/April/18/v22827859JRSA-01.pdf",
                        "courierPackageId": "v22827859JRSA-01",
                        "lastStatusCode": "999",
                        "lastStatusDesc": "Notificado",
                        "lastSubStatusCode": "9003",
                        "lastSubStatusDesc": "Asignado en vehículo",
                        "splitLabel": false
                    }
                ],
                "tags": [],
                "deliveryWindow": {
                    "min": 1713978000000,
                    "max": 1713992459000
                },
                "status": {
                    "code": "999",
                    "description": "Notificado"
                },
                "measures": null,
                "lpns": [
                    "v22827859JRSA-01"
                ],
                "trackings": [
                    "v22827859JRSA-01"
                ],
                "createdAt": 1713475679404,
                "updatedAt": 1713954949915
            }
        ],
        "pagination": {
            "totalPages": 1,
            "totalElements": 32,
            "page": 1,
            "pageSize": 1000,
            "numberOfElements": 32,
            "isLast": true,
            "isFirst": true
        }
    };
    res.statusCode = 201;
    res.json(response);
};

module.exports = {
    getData
};
