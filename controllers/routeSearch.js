const getData = (req, res) => {
    let response = {
        "took": 14,
        "timed_out": false,
        "_shards": {
            "total": 5,
            "successful": 5,
            "skipped": 0,
            "failed": 0
        },
        "hits": {
            "total": {
                "value": 10000,
                "relation": "gte"
            },
            "max_score": null,
            "hits": [
                {
                    "_index": "routes",
                    "_type": "_doc",
                    "_id": "bd7e9287-fc05-4cbd-9b92-e648ac6ba72e",
                    "_score": null,
                    "_source": {
                        "eta_date": "2024-10-24T20:30:00.000Z",
                        "status_history": [
                            {
                                "offline": 0,
                                "created_at": "2024-10-24T18:49:44.115Z",
                                "status": "ASSIGNED"
                            }
                        ],
                        "created_at": "2024-10-24T18:49:44.115Z",
                        "created_by": "sebastian.cardenascardenas@externos-cl.cencosud.com",
                        "vehicle": {
                            "licence_plate": "HDHD58",
                            "vehicle_type": "CAR",
                            "id": "15347"
                        },
                        "driver": {
                            "associated_stores": [
                                {
                                    "code": "E585",
                                    "retailChainCode": "EASY_CL",
                                    "retailChainName": "Easy",
                                    "name": "EASY OSORNO DA VINCI",
                                    "lat": -40.5801681532546,
                                    "long": -73.1161420569321
                                },
                                {
                                    "code": "J748",
                                    "retailChainCode": "JUMBO_CL",
                                    "retailChainName": "Jumbo",
                                    "name": "JUMBO OSORNO",
                                    "lat": -40.574499733461366,
                                    "long": -73.1298399195181
                                },
                                {
                                    "code": "E748",
                                    "retailChainCode": "EASY_CL",
                                    "retailChainName": "Easy",
                                    "name": "EASY PORTAL OSORNO",
                                    "lat": -40.5733972806691,
                                    "long": -73.1300292018659
                                },
                                {
                                    "code": "109",
                                    "retailChainCode": "PARIS_CL",
                                    "retailChainName": "Paris",
                                    "name": "PARIS PORTAL OSORNO",
                                    "lat": -40.57343549562481,
                                    "long": -73.13033378706216
                                }
                            ],
                            "phone": "+56965216184",
                            "name": "ANDRES NAILEF IMILPAN",
                            "id": "b7d54b24-e572-466b-846a-4ca083addd1f"
                        },
                        "updated_at": "2024-10-24T18:49:44.115Z",
                        "courier": {
                            "name": null,
                            "id": null
                        },
                        "provider": {
                            "name": "Appelt",
                            "id": "2"
                        },
                        "updated_by": "sebastian.cardenascardenas@externos-cl.cencosud.com",
                        "orders": [
                            {
                                "seller": {
                                    "address": "Plaza Yungay 645",
                                    "lng": "-73.1298399195181",
                                    "name": "JUMBO OSORNO",
                                    "externalId": "J748",
                                    "id": "140",
                                    "lat": "-40.574499733461366"
                                },
                                "last_status_code": "9003",
                                "eta_date": "2024-10-24T18:30:00.000Z",
                                "finished_at": null,
                                "order_nr": "25872233",
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-10-24T18:49:44.115Z",
                                        "status": "08"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v146201977jmch-01",
                                        "status_code": "08",
                                        "pack_id": 25912803,
                                        "sub_status_code": "9003"
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_CL",
                                    "name": "Jumbo"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "invoiceValue",
                                        "value": "6849200"
                                    },
                                    {
                                        "name": "url",
                                        "value": "https://public-url-shortener.ecomm.cencosud.com/-6WVxm1jTU9ZMWH96rJFz"
                                    },
                                    {
                                        "name": "Transportadora",
                                        "value": "Z1 Osorno"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"invoiceValue\",\"value\":6849200},{\"name\":\"url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/-6WVxm1jTU9ZMWH96rJFz\"},{\"name\":\"Transportadora\",\"value\":\"Z1 Osorno\"}]"
                                    }
                                ],
                                "external_system_order_id": "v146201977jmch-01",
                                "route_priority": 1,
                                "id": "6fu1bykm2nnqx5f",
                                "items": 1,
                                "eta_end_date": "2024-10-24T20:00:00.000Z",
                                "status": "08",
                                "customer": {
                                    "address": "Samuel Burgos 1513, cada esquina",
                                    "lng": "-73.125345299999990",
                                    "city": "Osorno",
                                    "phone": "+56938982959",
                                    "commune": "Osorno",
                                    "name": "María Mancilla Carrillo",
                                    "id": "6fuj7hm2nnqx5e",
                                    "state": "Los Lagos",
                                    "postal_code": "Osorno",
                                    "lat": "-40.583806100000000",
                                    "email": "poco.m3.mancilla@icloud.com"
                                }
                            },
                            {
                                "seller": {
                                    "address": "Plaza Yungay 645",
                                    "lng": "-73.1298399195181",
                                    "name": "JUMBO OSORNO",
                                    "externalId": "J748",
                                    "id": "140",
                                    "lat": "-40.574499733461366"
                                },
                                "last_status_code": "9003",
                                "eta_date": "2024-10-24T19:00:00.000Z",
                                "finished_at": null,
                                "order_nr": "25873287",
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-10-24T18:49:44.115Z",
                                        "status": "08"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v146205519jmch-01",
                                        "status_code": "08",
                                        "pack_id": 25913859,
                                        "sub_status_code": "9003"
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_CL",
                                    "name": "Jumbo"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "Transportadora",
                                        "value": "Z1 Osorno"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"Torre 1\"},{\"name\":\"invoiceValue\",\"value\":11690900},{\"name\":\"url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/8mo2HTgZkQLxcmlPC5C7v\"},{\"name\":\"Transportadora\",\"value\":\"Z1 Osorno\"}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "11690900"
                                    },
                                    {
                                        "name": "url",
                                        "value": "https://public-url-shortener.ecomm.cencosud.com/8mo2HTgZkQLxcmlPC5C7v"
                                    }
                                ],
                                "external_system_order_id": "v146205519jmch-01",
                                "route_priority": 1,
                                "id": "6fue6hm2nnqx5h",
                                "items": 1,
                                "eta_end_date": "2024-10-24T20:30:00.000Z",
                                "status": "08",
                                "customer": {
                                    "address": "Doctor Guillermo Buhler 2140, 104",
                                    "lng": "-73.124453499913220",
                                    "city": "Osorno",
                                    "phone": "+56959377291",
                                    "commune": "Osorno",
                                    "name": "Paulina Ernst Casas",
                                    "id": "6fu1z2jm2nnqx5g",
                                    "state": "Los Lagos",
                                    "postal_code": "Osorno",
                                    "lat": "-40.592987002486150",
                                    "email": "pernstcasas@gmail.com"
                                }
                            }
                        ],
                        "id": "bd7e9287-fc05-4cbd-9b92-e648ac6ba72e",
                        "eta_end_date": null,
                        "status": "ASSIGNED"
                    },
                    "sort": [
                        1729795784115
                    ]
                },
                {
                    "_index": "routes",
                    "_type": "_doc",
                    "_id": "a96db070-209c-4c06-a6b0-6452c60d143d",
                    "_score": null,
                    "_source": {
                        "eta_date": "2024-10-24T21:00:00.000Z",
                        "status_history": [
                            {
                                "offline": 0,
                                "created_at": "2024-10-24T18:49:36.731Z",
                                "status": "ASSIGNED"
                            }
                        ],
                        "created_at": "2024-10-24T18:49:36.731Z",
                        "created_by": "cma8059",
                        "vehicle": {
                            "licence_plate": "KFXD75",
                            "vehicle_type": "CAR",
                            "id": "8029"
                        },
                        "driver": {
                            "associated_stores": [
                                {
                                    "code": "E843",
                                    "retailChainCode": "EASY_CL",
                                    "retailChainName": "Easy",
                                    "name": "EASY SAN BERNARDO LAS LILAS",
                                    "lat": -33.6334709920089,
                                    "long": -70.7089328449849
                                },
                                {
                                    "code": "J843",
                                    "retailChainCode": "JUMBO_CL",
                                    "retailChainName": "Jumbo",
                                    "name": "JUMBO SAN BERNARDO",
                                    "lat": -33.63383876812627,
                                    "long": -70.70984433588002
                                }
                            ],
                            "phone": "+56981729834",
                            "name": "Luis Eduardo Martinez Contreras",
                            "id": "a99518ae-6acf-43c7-940f-337214691349"
                        },
                        "updated_at": "2024-10-24T18:49:36.731Z",
                        "courier": {
                            "name": null,
                            "id": null
                        },
                        "provider": {
                            "name": "Boosmap Chile",
                            "id": "1"
                        },
                        "updated_by": "cma8059",
                        "orders": [
                            {
                                "seller": {
                                    "address": "Av. Portales 3698",
                                    "lng": "-70.70984433588002",
                                    "name": "JUMBO SAN BERNARDO",
                                    "externalId": "J843",
                                    "id": "127",
                                    "lat": "-33.63383876812627"
                                },
                                "last_status_code": "9003",
                                "eta_date": "2024-10-24T18:30:00.000Z",
                                "finished_at": null,
                                "order_nr": "25873174",
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-10-24T18:49:36.731Z",
                                        "status": "08"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v146205121jmch-01",
                                        "status_code": "08",
                                        "pack_id": 25913746,
                                        "sub_status_code": "9003"
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_CL",
                                    "name": "Jumbo"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "Transportadora",
                                        "value": "AG San Bernardo"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"condominio cumbres de nos, camino padre hurtado altura 18380\"},{\"name\":\"invoiceValue\",\"value\":29357000},{\"name\":\"url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/c5wuWtX7FITT9UDDfhvmi\"},{\"name\":\"Transportadora\",\"value\":\"AG San Bernardo\"}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "29357000"
                                    },
                                    {
                                        "name": "url",
                                        "value": "https://public-url-shortener.ecomm.cencosud.com/c5wuWtX7FITT9UDDfhvmi"
                                    }
                                ],
                                "external_system_order_id": "v146205121jmch-01",
                                "route_priority": 1,
                                "id": "fw2bby1r1om2nnqrgo",
                                "items": 1,
                                "eta_end_date": "2024-10-24T20:30:00.000Z",
                                "status": "08",
                                "customer": {
                                    "address": "Alicahue 1105, Casa F86",
                                    "lng": "-70.676294228836070",
                                    "city": "Maipo",
                                    "phone": "+56963610061",
                                    "commune": "San Bernardo",
                                    "name": "Romina Castro",
                                    "id": "fw2bby1vsm2nnqrgn",
                                    "state": "Metropolitana de Santiago",
                                    "postal_code": "Maipo",
                                    "lat": "-33.630701850931914",
                                    "email": "romy.castroh@gmail.com"
                                }
                            },
                            {
                                "seller": {
                                    "address": "Av. Portales 3698",
                                    "lng": "-70.70984433588002",
                                    "name": "JUMBO SAN BERNARDO",
                                    "externalId": "J843",
                                    "id": "127",
                                    "lat": "-33.63383876812627"
                                },
                                "last_status_code": "9003",
                                "eta_date": "2024-10-24T19:00:00.000Z",
                                "finished_at": null,
                                "order_nr": "25873763",
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-10-24T18:49:36.731Z",
                                        "status": "08"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v146207126jmch-01",
                                        "status_code": "08",
                                        "pack_id": 25914336,
                                        "sub_status_code": "9003"
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_CL",
                                    "name": "Jumbo"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "Transportadora",
                                        "value": "AG San Bernardo"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"invoiceValue\",\"value\":7615800},{\"name\":\"url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/DG4RhiRcW7n8DBpqUernN\"},{\"name\":\"Transportadora\",\"value\":\"AG San Bernardo\"}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "7615800"
                                    },
                                    {
                                        "name": "url",
                                        "value": "https://public-url-shortener.ecomm.cencosud.com/DG4RhiRcW7n8DBpqUernN"
                                    }
                                ],
                                "external_system_order_id": "v146207126jmch-01",
                                "route_priority": 2,
                                "id": "fw2bbyk7fm2nnqrgq",
                                "items": 1,
                                "eta_end_date": "2024-10-24T21:00:00.000Z",
                                "status": "08",
                                "customer": {
                                    "address": "Los Alamos 2590",
                                    "lng": "-70.637010000000000",
                                    "city": "Santiago",
                                    "phone": "+56957298111",
                                    "commune": "La Pintana",
                                    "name": "Claudia Silva",
                                    "id": "fw2bby1rtrm2nnqrgp",
                                    "state": "Metropolitana de Santiago",
                                    "postal_code": "Santiago",
                                    "lat": "-33.625749899999995",
                                    "email": "claudia.silvaotero@gmail.com"
                                }
                            }
                        ],
                        "id": "a96db070-209c-4c06-a6b0-6452c60d143d",
                        "eta_end_date": null,
                        "status": "ASSIGNED"
                    },
                    "sort": [
                        1729795776731
                    ]
                },
                {
                    "_index": "routes",
                    "_type": "_doc",
                    "_id": "1e24102e-8dec-4039-99b9-c639219bd382",
                    "_score": null,
                    "_source": {
                        "eta_date": "2024-10-24T20:30:00.000Z",
                        "status_history": [
                            {
                                "offline": 0,
                                "created_at": "2024-10-24T18:49:33.985Z",
                                "status": "ASSIGNED"
                            }
                        ],
                        "created_at": "2024-10-24T18:49:33.985Z",
                        "created_by": "damaris.gonzalez@externos-cl.cencosud.com",
                        "vehicle": {
                            "licence_plate": "LSXY-65",
                            "vehicle_type": "TRUCK",
                            "id": "6001"
                        },
                        "driver": {
                            "associated_stores": [
                                {
                                    "code": "105",
                                    "retailChainCode": "PARIS_CL",
                                    "retailChainName": "Paris",
                                    "name": "PARIS COPIAPO",
                                    "lat": -27.382202260733546,
                                    "long": -70.317146304699
                                },
                                {
                                    "code": "E760",
                                    "retailChainCode": "EASY_CL",
                                    "retailChainName": "Easy",
                                    "name": "EASY COPIAPO",
                                    "lat": -27.3832038630621,
                                    "long": -70.3152388163445
                                },
                                {
                                    "code": "J760",
                                    "retailChainCode": "JUMBO_CL",
                                    "retailChainName": "Jumbo",
                                    "name": "JUMBO COPIAPO",
                                    "lat": -27.382137263688012,
                                    "long": -70.31710436722501
                                },
                                {
                                    "code": "N841",
                                    "retailChainCode": "SISA_CL",
                                    "retailChainName": "Santa Isabel",
                                    "name": "SANTA ISABEL PALOMAR",
                                    "lat": -27.378867007029204,
                                    "long": -70.3324414182088
                                }
                            ],
                            "phone": "+56955320024",
                            "name": "DAYANA AVILES MARAMBIO",
                            "id": "c8e1041d-6964-49ab-a255-0461a1ed18e7"
                        },
                        "updated_at": "2024-10-24T18:49:33.985Z",
                        "courier": {
                            "name": null,
                            "id": null
                        },
                        "provider": {
                            "name": "Transportes Campillay",
                            "id": "17"
                        },
                        "updated_by": "damaris.gonzalez@externos-cl.cencosud.com",
                        "orders": [
                            {
                                "seller": {
                                    "address": "Av. Copayapu 2406",
                                    "lng": "-70.31710436722501",
                                    "name": "JUMBO COPIAPO",
                                    "externalId": "J760",
                                    "id": "96",
                                    "lat": "-27.382137263688012"
                                },
                                "last_status_code": "9003",
                                "eta_date": "2024-10-24T19:00:00.000Z",
                                "finished_at": null,
                                "order_nr": "25873292",
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-10-24T18:49:33.985Z",
                                        "status": "08"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v146205529jmch-01",
                                        "status_code": "08",
                                        "pack_id": 25913864,
                                        "sub_status_code": "9003"
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_CL",
                                    "name": "Jumbo"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "PRIME",
                                        "value": "true"
                                    },
                                    {
                                        "name": "Transportadora",
                                        "value": "Z1 Copiapó"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"invoiceValue\",\"value\":7809000},{\"name\":\"url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/862sKlc01A_f85bHBPfTh\"},{\"name\":\"Transportadora\",\"value\":\"Z1 Copiapó\"}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "7809000"
                                    },
                                    {
                                        "name": "url",
                                        "value": "https://public-url-shortener.ecomm.cencosud.com/862sKlc01A_f85bHBPfTh"
                                    }
                                ],
                                "external_system_order_id": "v146205529jmch-01",
                                "route_priority": 1,
                                "id": "fw2bby20mgm2nnqpcg",
                                "items": 1,
                                "eta_end_date": "2024-10-24T20:30:00.000Z",
                                "status": "08",
                                "customer": {
                                    "address": "Juan Martínez 381, 4",
                                    "lng": "-70.347196600000000",
                                    "city": "Copiapo",
                                    "phone": "+56997577971",
                                    "commune": "Copiapó",
                                    "name": "Cristian Morales",
                                    "id": "fw2bby3vim2nnqpcf",
                                    "state": "Copiapo",
                                    "postal_code": "1530000",
                                    "lat": "-27.357505500000000",
                                    "email": "cristian.morales.h@gmail.com"
                                }
                            },
                            {
                                "seller": {
                                    "address": "Av. Copayapu 2406",
                                    "lng": "-70.31710436722501",
                                    "name": "JUMBO COPIAPO",
                                    "externalId": "J760",
                                    "id": "96",
                                    "lat": "-27.382137263688012"
                                },
                                "last_status_code": "9003",
                                "eta_date": "2024-10-24T19:00:00.000Z",
                                "finished_at": null,
                                "order_nr": "25873567",
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-10-24T18:49:33.985Z",
                                        "status": "08"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v146206483jmch-01",
                                        "status_code": "08",
                                        "pack_id": 25914140,
                                        "sub_status_code": "9003"
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_CL",
                                    "name": "Jumbo"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "PRIME",
                                        "value": "true"
                                    },
                                    {
                                        "name": "Transportadora",
                                        "value": "Z1 Copiapó"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"invoiceValue\",\"value\":3504800},{\"name\":\"url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/EJzwKwhlWDQa7-u0h0AIJ\"},{\"name\":\"Transportadora\",\"value\":\"Z1 Copiapó\"}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "3504800"
                                    },
                                    {
                                        "name": "url",
                                        "value": "https://public-url-shortener.ecomm.cencosud.com/EJzwKwhlWDQa7-u0h0AIJ"
                                    }
                                ],
                                "external_system_order_id": "v146206483jmch-01",
                                "route_priority": 2,
                                "id": "fw2bby1mw2m2nnqpci",
                                "items": 1,
                                "eta_end_date": "2024-10-24T20:30:00.000Z",
                                "status": "08",
                                "customer": {
                                    "address": "Borgoño 451, 203 b",
                                    "lng": "-70.344417300000000",
                                    "city": "Copiapo",
                                    "phone": "+56950096043",
                                    "commune": "Copiapó",
                                    "name": "Gledy León Araya",
                                    "id": "fw2bbygzpm2nnqpch",
                                    "state": "Copiapo",
                                    "postal_code": "1530000",
                                    "lat": "-27.353649000000000",
                                    "email": "gledyleon45@gmail.com"
                                }
                            }
                        ],
                        "id": "1e24102e-8dec-4039-99b9-c639219bd382",
                        "eta_end_date": null,
                        "status": "ASSIGNED"
                    },
                    "sort": [
                        1729795773985
                    ]
                },
                {
                    "_index": "routes",
                    "_type": "_doc",
                    "_id": "ad36e01c-b558-4806-ae58-ef01ea084191",
                    "_score": null,
                    "_source": {
                        "eta_date": "2024-10-24T21:30:59.000Z",
                        "status_history": [
                            {
                                "offline": 0,
                                "created_at": "2024-10-24T18:49:28.280Z",
                                "status": "ASSIGNED"
                            }
                        ],
                        "created_at": "2024-10-24T18:49:28.280Z",
                        "created_by": "carlos.montero@externos-cl.cencosud.com",
                        "vehicle": {
                            "licence_plate": "FLYB60",
                            "vehicle_type": "CAR",
                            "id": "16338"
                        },
                        "driver": {
                            "associated_stores": [
                                {
                                    "code": "J403",
                                    "retailChainCode": "JUMBO_CL",
                                    "retailChainName": "Jumbo",
                                    "name": "DARKSTORE MAIPU",
                                    "lat": -33.47988379382734,
                                    "long": -70.75157908800772
                                },
                                {
                                    "code": "N758",
                                    "retailChainCode": "SPID_CL",
                                    "retailChainName": "Spid (Chile)",
                                    "name": "SPID Maipu 3 Poniente",
                                    "lat": -33.50430403483458,
                                    "long": -70.78020357510434
                                },
                                {
                                    "code": "N758",
                                    "retailChainCode": "SISA_CL",
                                    "retailChainName": "Santa Isabel",
                                    "name": "SISA Maipu 3 Poniente",
                                    "lat": -33.50430403483458,
                                    "long": -70.78020357510434
                                }
                            ],
                            "phone": "+56927667802",
                            "name": "Maria Isabel Aguirre Beltran",
                            "id": "93b7cdf6-ccb3-4b7a-9fdf-bcd9209474ac"
                        },
                        "updated_at": "2024-10-24T18:49:28.280Z",
                        "courier": {
                            "name": null,
                            "id": null
                        },
                        "provider": {
                            "name": "Boosmap Chile",
                            "id": "1"
                        },
                        "updated_by": "carlos.montero@externos-cl.cencosud.com",
                        "orders": [
                            {
                                "seller": {
                                    "address": "Av. Americo Vespucio 1001",
                                    "lng": "-70.75157908800772",
                                    "name": "DARKSTORE MAIPU",
                                    "externalId": "J403",
                                    "id": "805",
                                    "lat": "-33.47988379382734"
                                },
                                "last_status_code": "9003",
                                "eta_date": "2024-10-24T18:30:00.000Z",
                                "finished_at": null,
                                "order_nr": "25873852",
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-10-24T18:49:28.280Z",
                                        "status": "08"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v146207484jmch-01",
                                        "status_code": "08",
                                        "pack_id": 25914425,
                                        "sub_status_code": "9003"
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_CL",
                                    "name": "Jumbo"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "PRIME",
                                        "value": "true"
                                    },
                                    {
                                        "name": "Transportadora",
                                        "value": "AG Maipu (Nuevo)"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"invoiceValue\",\"value\":5987800},{\"name\":\"url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/iXtSTNt5judzu_2p8_JVZ\"},{\"name\":\"Transportadora\",\"value\":\"AG Maipu (Nuevo)\"}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "5987800"
                                    },
                                    {
                                        "name": "url",
                                        "value": "https://public-url-shortener.ecomm.cencosud.com/iXtSTNt5judzu_2p8_JVZ"
                                    }
                                ],
                                "external_system_order_id": "v146207484jmch-01",
                                "route_priority": 1,
                                "id": "6fug9hm2nnqkx8",
                                "items": 1,
                                "eta_end_date": "2024-10-24T20:30:59.000Z",
                                "status": "08",
                                "customer": {
                                    "address": "Ernesto Pinto Lagarrigue 5464",
                                    "lng": "-70.745984100000000",
                                    "city": "Santiago",
                                    "phone": "+56996526242",
                                    "commune": "Maipú",
                                    "name": "tamara sotelo fredes",
                                    "id": "6fu1bc4m2nnqkx7",
                                    "state": "Metropolitana de Santiago",
                                    "postal_code": "Santiago",
                                    "lat": "-33.469580500000000",
                                    "email": "tamysotelofredes@gmail.com"
                                }
                            },
                            {
                                "seller": {
                                    "address": "Av. Americo Vespucio 1001",
                                    "lng": "-70.75157908800772",
                                    "name": "DARKSTORE MAIPU",
                                    "externalId": "J403",
                                    "id": "805",
                                    "lat": "-33.47988379382734"
                                },
                                "last_status_code": "9003",
                                "eta_date": "2024-10-24T19:30:00.000Z",
                                "finished_at": null,
                                "order_nr": "25873766",
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-10-24T18:49:28.280Z",
                                        "status": "08"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v146207147jmch-01",
                                        "status_code": "08",
                                        "pack_id": 25914339,
                                        "sub_status_code": "9003"
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_CL",
                                    "name": "Jumbo"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "Transportadora",
                                        "value": "AG Maipu (Nuevo)"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"invoiceValue\",\"value\":5416200},{\"name\":\"url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/hrewrsBSQX-mGbOEwn22s\"},{\"name\":\"Transportadora\",\"value\":\"AG Maipu (Nuevo)\"}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "5416200"
                                    },
                                    {
                                        "name": "url",
                                        "value": "https://public-url-shortener.ecomm.cencosud.com/hrewrsBSQX-mGbOEwn22s"
                                    }
                                ],
                                "external_system_order_id": "v146207147jmch-01",
                                "route_priority": 2,
                                "id": "6fu11qmm2nnqkxa",
                                "items": 1,
                                "eta_end_date": "2024-10-24T21:30:59.000Z",
                                "status": "08",
                                "customer": {
                                    "address": "Ingeniero Roberto Llona 5441",
                                    "lng": "-70.751389000000000",
                                    "city": "Santiago",
                                    "phone": "+56998959049",
                                    "commune": "Maipú",
                                    "name": "johana reyes",
                                    "id": "6fu2340m2nnqkx9",
                                    "state": "Metropolitana de Santiago",
                                    "postal_code": "9250000",
                                    "lat": "-33.469324600000000",
                                    "email": "johana.reyes.martinez@gmail.com"
                                }
                            }
                        ],
                        "id": "ad36e01c-b558-4806-ae58-ef01ea084191",
                        "eta_end_date": null,
                        "status": "ASSIGNED"
                    },
                    "sort": [
                        1729795768280
                    ]
                },
                {
                    "_index": "routes",
                    "_type": "_doc",
                    "_id": "a13357d7-6b13-4c30-915c-6ecdb1fc7efc",
                    "_score": null,
                    "_source": {
                        "eta_date": "2024-10-24T20:30:59.000Z",
                        "status_history": [
                            {
                                "offline": 0,
                                "created_at": "2024-10-24T18:49:13.331Z",
                                "status": "ASSIGNED"
                            }
                        ],
                        "created_at": "2024-10-24T18:49:13.331Z",
                        "created_by": "noemi.bravo@externos-cl.cencosud.com",
                        "vehicle": {
                            "licence_plate": "HGCH33",
                            "vehicle_type": "CAR",
                            "id": "18780"
                        },
                        "driver": {
                            "associated_stores": [
                                {
                                    "code": "103",
                                    "retailChainCode": "PARIS_CL",
                                    "retailChainName": "Paris",
                                    "name": "PARIS IQUIQUE",
                                    "lat": -20.21390646185766,
                                    "long": -70.15028405885735
                                },
                                {
                                    "code": "J660",
                                    "retailChainCode": "JUMBO_CL",
                                    "retailChainName": "Jumbo",
                                    "name": "JUMBO IQUIQUE",
                                    "lat": -20.238383858854345,
                                    "long": -70.14485637419853
                                },
                                {
                                    "code": "N590",
                                    "retailChainCode": "SISA_CL",
                                    "retailChainName": "Santa Isabel",
                                    "name": "SANTA ISABEL TARAPACÁ",
                                    "lat": -20.213901288626047,
                                    "long": -70.15028970503894
                                },
                                {
                                    "code": "N811",
                                    "retailChainCode": "SISA_CL",
                                    "retailChainName": "Santa Isabel",
                                    "name": "SANTA ISABEL ALTO HOSPICIO",
                                    "lat": -20.27567024877767,
                                    "long": -70.0969794896954
                                }
                            ],
                            "phone": "+56955203944",
                            "name": "Francisco Hernandez",
                            "id": "549a6565-e8f1-4751-94d3-1e9224a8a124"
                        },
                        "updated_at": "2024-10-24T18:49:13.331Z",
                        "courier": {
                            "name": null,
                            "id": null
                        },
                        "provider": {
                            "name": "Transportes DNG",
                            "id": "20"
                        },
                        "updated_by": "noemi.bravo@externos-cl.cencosud.com",
                        "orders": [
                            {
                                "seller": {
                                    "address": "Av. Heroes De La Concepcion 2855",
                                    "lng": "-70.14485637419853",
                                    "name": "JUMBO IQUIQUE",
                                    "externalId": "J660",
                                    "id": "95",
                                    "lat": "-20.238383858854345"
                                },
                                "last_status_code": "9003",
                                "eta_date": "2024-10-24T18:30:00.000Z",
                                "finished_at": null,
                                "order_nr": "25873041",
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-10-24T18:49:13.331Z",
                                        "status": "08"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v146204662jmch-01",
                                        "status_code": "08",
                                        "pack_id": 25913612,
                                        "sub_status_code": "9003"
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_CL",
                                    "name": "Jumbo"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"invoiceValue\",\"value\":4811800},{\"name\":\"url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/2QAbBeE2ngZ_n60YV34gq\"},{\"name\":\"Transportadora\",\"value\":\"Z1 Iquique\"}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "4811800"
                                    },
                                    {
                                        "name": "url",
                                        "value": "https://public-url-shortener.ecomm.cencosud.com/2QAbBeE2ngZ_n60YV34gq"
                                    },
                                    {
                                        "name": "PRIME",
                                        "value": "true"
                                    },
                                    {
                                        "name": "Transportadora",
                                        "value": "Z1 Iquique"
                                    }
                                ],
                                "external_system_order_id": "v146204662jmch-01",
                                "route_priority": 1,
                                "id": "dcx7ezpm2nnq9eg",
                                "items": 1,
                                "eta_end_date": "2024-10-24T20:00:59.000Z",
                                "status": "08",
                                "customer": {
                                    "address": "Rancagua 2750",
                                    "lng": "-70.132149000000000",
                                    "city": "Iquique",
                                    "phone": "+56978679676",
                                    "commune": "Iquique",
                                    "name": "paulina zepeda",
                                    "id": "dcx7srtm2nnq9ef",
                                    "state": "Tarapacá",
                                    "postal_code": "Iquique",
                                    "lat": "-20.236229000000000",
                                    "email": "paulinaignacia377@gmail.com"
                                }
                            },
                            {
                                "seller": {
                                    "address": "Av. Heroes De La Concepcion 2855",
                                    "lng": "-70.14485637419853",
                                    "name": "JUMBO IQUIQUE",
                                    "externalId": "J660",
                                    "id": "95",
                                    "lat": "-20.238383858854345"
                                },
                                "last_status_code": "9003",
                                "eta_date": "2024-10-24T19:00:00.000Z",
                                "finished_at": null,
                                "order_nr": "25873555",
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-10-24T18:49:13.331Z",
                                        "status": "08"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v146206447jmch-01",
                                        "status_code": "08",
                                        "pack_id": 25914128,
                                        "sub_status_code": "9003"
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_CL",
                                    "name": "Jumbo"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"entre primeras piedras y san pedro\"},{\"name\":\"invoiceValue\",\"value\":7869500},{\"name\":\"url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/9R6mjYra7e0vOTb56hhBL\"},{\"name\":\"Transportadora\",\"value\":\"Z1 Iquique\"}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "7869500"
                                    },
                                    {
                                        "name": "url",
                                        "value": "https://public-url-shortener.ecomm.cencosud.com/9R6mjYra7e0vOTb56hhBL"
                                    },
                                    {
                                        "name": "Transportadora",
                                        "value": "Z1 Iquique"
                                    }
                                ],
                                "external_system_order_id": "v146206447jmch-01",
                                "route_priority": 2,
                                "id": "dcx7lvam2nnq9ei",
                                "items": 1,
                                "eta_end_date": "2024-10-24T20:30:59.000Z",
                                "status": "08",
                                "customer": {
                                    "address": "Salitrera Virginia 2913A",
                                    "lng": "-70.129793286323550",
                                    "city": "Santiago",
                                    "phone": "+56934482587",
                                    "commune": "Iquique",
                                    "name": "Andrés Estica",
                                    "id": "dcx71iytm2nnq9eh",
                                    "state": "Metropolitana de Santiago",
                                    "postal_code": "Santiago",
                                    "lat": "-20.242084243634825",
                                    "email": "andres.estica65@gmail.com"
                                }
                            }
                        ],
                        "id": "a13357d7-6b13-4c30-915c-6ecdb1fc7efc",
                        "eta_end_date": null,
                        "status": "ASSIGNED"
                    },
                    "sort": [
                        1729795753331
                    ]
                },
                {
                    "_index": "routes",
                    "_type": "_doc",
                    "_id": "6a0bb3ea-4f66-4071-b008-d0ef50116d6e",
                    "_score": null,
                    "_source": {
                        "eta_date": "2024-10-24T21:00:59.000Z",
                        "status_history": [
                            {
                                "offline": 0,
                                "created_at": "2024-10-24T18:48:42.261Z",
                                "status": "ASSIGNED"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-10-24T18:49:07.012Z",
                                "status": "IN_PROGRESS"
                            }
                        ],
                        "created_at": "2024-10-24T18:48:42.261Z",
                        "in_progress_at": "2024-10-24T18:49:07.012Z",
                        "created_by": "carlos.montero@externos-cl.cencosud.com",
                        "vehicle": {
                            "licence_plate": "KHRR37",
                            "vehicle_type": "CAR",
                            "id": "7816"
                        },
                        "driver": {
                            "associated_stores": [
                                {
                                    "code": "J403",
                                    "retailChainCode": "JUMBO_CL",
                                    "retailChainName": "Jumbo",
                                    "name": "DARKSTORE MAIPU",
                                    "lat": -33.47988379382734,
                                    "long": -70.75157908800772
                                }
                            ],
                            "phone": "+56981693509",
                            "name": "Héctor Arias Diaz",
                            "id": "81c0b347-b9d7-4f6b-86ab-be0dfe36d40d"
                        },
                        "updated_at": "2024-10-24T18:48:42.261Z",
                        "courier": {
                            "name": null,
                            "id": null
                        },
                        "provider": {
                            "name": "Boosmap Chile",
                            "id": "1"
                        },
                        "updated_by": "carlos.montero@externos-cl.cencosud.com",
                        "orders": [
                            {
                                "seller": {
                                    "address": "Av. Americo Vespucio 1001",
                                    "lng": "-70.75157908800772",
                                    "name": "DARKSTORE MAIPU",
                                    "externalId": "J403",
                                    "id": "805",
                                    "lat": "-33.47988379382734"
                                },
                                "last_status_code": "",
                                "eta_date": "2024-10-24T19:00:00.000Z",
                                "finished_at": null,
                                "order_nr": "25873940",
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-10-24T18:48:42.261Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-10-24T18:49:07.012Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v146207807jmch-01",
                                        "status_code": "09",
                                        "pack_id": 25914513,
                                        "sub_status_code": null,
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -70.7525671,
                                                "created_at": "2024-10-24T18:49:07.012Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -33.4795056,
                                                "status": "09"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v146207807jmch-01_25914513_1729795740097-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v146207807jmch-01_25914513_1729795740097-shipping.jpg"
                                            },
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v146207807jmch-01_25914513_1729795737627-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v146207807jmch-01_25914513_1729795737627-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_CL",
                                    "name": "Jumbo"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "Transportadora",
                                        "value": "AG Maipu (Nuevo)"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"casa donde hay una casa de perro de techo naranja y auto gris\"},{\"name\":\"invoiceValue\",\"value\":6801300},{\"name\":\"url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/rH1GEojVa_eaue9qM57xb\"},{\"name\":\"Transportadora\",\"value\":\"AG Maipu (Nuevo)\"}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "6801300"
                                    },
                                    {
                                        "name": "url",
                                        "value": "https://public-url-shortener.ecomm.cencosud.com/rH1GEojVa_eaue9qM57xb"
                                    }
                                ],
                                "external_system_order_id": "v146207807jmch-01",
                                "route_priority": 1,
                                "id": "6fu14yqm2nnplfe",
                                "items": 1,
                                "eta_end_date": "2024-10-24T21:00:59.000Z",
                                "status": "09",
                                "customer": {
                                    "address": "Aulin 128, 128",
                                    "lng": "-70.739160000000000",
                                    "city": "Santiago",
                                    "phone": "+56976817760",
                                    "commune": "Maipú",
                                    "name": "NELSON MUÑOZ IBARRA",
                                    "id": "6fu2mxm2nnplfd",
                                    "state": "Metropolitana de Santiago",
                                    "postal_code": "9250000",
                                    "lat": "-33.470930000000000",
                                    "email": "winelss@gmail.com"
                                }
                            },
                            {
                                "seller": {
                                    "address": "Av. Americo Vespucio 1001",
                                    "lng": "-70.75157908800772",
                                    "name": "DARKSTORE MAIPU",
                                    "externalId": "J403",
                                    "id": "805",
                                    "lat": "-33.47988379382734"
                                },
                                "last_status_code": "",
                                "eta_date": "2024-10-24T19:00:00.000Z",
                                "finished_at": null,
                                "order_nr": "25874045",
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-10-24T18:48:42.261Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-10-24T18:49:19.538Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v146208216jmch-01",
                                        "status_code": "09",
                                        "pack_id": 25914618,
                                        "sub_status_code": null,
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -70.7524634,
                                                "created_at": "2024-10-24T18:49:19.538Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -33.4795267,
                                                "status": "09"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v146208216jmch-01_25914618_1729795753722-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v146208216jmch-01_25914618_1729795753722-shipping.jpg"
                                            },
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v146208216jmch-01_25914618_1729795752209-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v146208216jmch-01_25914618_1729795752209-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_CL",
                                    "name": "Jumbo"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "PRIME",
                                        "value": "true"
                                    },
                                    {
                                        "name": "Transportadora",
                                        "value": "AG Maipu (Nuevo)"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"invoiceValue\",\"value\":5472400},{\"name\":\"url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/OMYR2AHT9Zb9EGeOGRpeJ\"},{\"name\":\"Transportadora\",\"value\":\"AG Maipu (Nuevo)\"}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "5472400"
                                    },
                                    {
                                        "name": "url",
                                        "value": "https://public-url-shortener.ecomm.cencosud.com/OMYR2AHT9Zb9EGeOGRpeJ"
                                    }
                                ],
                                "external_system_order_id": "v146208216jmch-01",
                                "route_priority": 2,
                                "id": "6fu1sd3m2nnplfg",
                                "items": 1,
                                "eta_end_date": "2024-10-24T21:00:59.000Z",
                                "status": "09",
                                "customer": {
                                    "address": "Avenida Hugo Bravo 950",
                                    "lng": "-70.753130000000000",
                                    "city": "Santiago",
                                    "phone": "+56985026053",
                                    "commune": "Maipú",
                                    "name": "Luciana Aybar",
                                    "id": "6fukym2nnplff",
                                    "state": "Metropolitana de Santiago",
                                    "postal_code": "Santiago",
                                    "lat": "-33.474593100000000",
                                    "email": "lucianaaybar001@gmail.com"
                                }
                            }
                        ],
                        "id": "6a0bb3ea-4f66-4071-b008-d0ef50116d6e",
                        "eta_end_date": null,
                        "status": "IN_PROGRESS"
                    },
                    "sort": [
                        1729795722261
                    ]
                },
                {
                    "_index": "routes",
                    "_type": "_doc",
                    "_id": "a96ddb71-1bed-4f81-9fdb-fd234424f4c0",
                    "_score": null,
                    "_source": {
                        "eta_date": "2024-10-24T20:30:00.000Z",
                        "status_history": [
                            {
                                "offline": 0,
                                "created_at": "2024-10-24T18:48:41.009Z",
                                "status": "ASSIGNED"
                            }
                        ],
                        "created_at": "2024-10-24T18:48:41.009Z",
                        "created_by": "jesus.quero@externos-cl.cencosud.com",
                        "vehicle": {
                            "licence_plate": "KFZL73",
                            "vehicle_type": "CAR",
                            "id": "13521"
                        },
                        "driver": {
                            "associated_stores": [
                                {
                                    "code": "J513",
                                    "retailChainCode": "JUMBO_CL",
                                    "retailChainName": "Jumbo",
                                    "name": "JUMBO EL LLANO",
                                    "lat": -33.485683470789425,
                                    "long": -70.65153734683788
                                },
                                {
                                    "code": "J519",
                                    "retailChainCode": "JUMBO_CL",
                                    "retailChainName": "Jumbo",
                                    "name": "JUMBO PEÑALOLEN",
                                    "lat": -33.4880007150512,
                                    "long": -70.55668904314159
                                }
                            ],
                            "phone": "+56976660768",
                            "name": "Osvaldo Reyes Ureta",
                            "id": "a5a498dc-09ef-4e78-b5a0-ad425ae1430f"
                        },
                        "updated_at": "2024-10-24T18:48:41.009Z",
                        "courier": {
                            "name": null,
                            "id": null
                        },
                        "provider": {
                            "name": "Zubale",
                            "id": "13"
                        },
                        "updated_by": "jesus.quero@externos-cl.cencosud.com",
                        "orders": [
                            {
                                "seller": {
                                    "address": "Av. Sanchez Fontecilla 12000",
                                    "lng": "-70.55668904314159",
                                    "name": "JUMBO PEÑALOLEN",
                                    "externalId": "J519",
                                    "id": "105",
                                    "lat": "-33.4880007150512"
                                },
                                "last_status_code": "9003",
                                "eta_date": "2024-10-24T18:30:00.000Z",
                                "finished_at": null,
                                "order_nr": "25874254",
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-10-24T18:48:41.009Z",
                                        "status": "08"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v146209015jmch-01",
                                        "status_code": "08",
                                        "pack_id": 25914827,
                                        "sub_status_code": "9003"
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_CL",
                                    "name": "Jumbo"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "url",
                                        "value": "https://public-url-shortener.ecomm.cencosud.com/M8BXMu3dkAWV7NN2vta7V"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "2519900"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"invoiceValue\",\"value\":2519900},{\"name\":\"url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/M8BXMu3dkAWV7NN2vta7V\"},{\"name\":\"Transportadora\",\"value\":\"AG Peñalolen\"}]"
                                    },
                                    {
                                        "name": "Transportadora",
                                        "value": "AG Peñalolen"
                                    },
                                    {
                                        "name": "PRIME",
                                        "value": "true"
                                    }
                                ],
                                "external_system_order_id": "v146209015jmch-01",
                                "route_priority": 0,
                                "id": "6fuyxjm2nnpkgc",
                                "items": 1,
                                "eta_end_date": "2024-10-24T20:30:00.000Z",
                                "status": "08",
                                "customer": {
                                    "address": "Avenida Quilín Sur 10501, 126",
                                    "lng": "-70.531443700000000",
                                    "city": "Santiago",
                                    "phone": "+56993500729",
                                    "commune": "Santiago",
                                    "name": "jeanette fuentes cid",
                                    "id": "6fur7am2nnpkgb",
                                    "state": "Metropolitana de Santiago",
                                    "postal_code": "Santiago",
                                    "lat": "-33.503520000000000",
                                    "email": "jeanette.fuentes.cid@gmail.com"
                                }
                            },
                            {
                                "seller": {
                                    "address": "Av. Sanchez Fontecilla 12000",
                                    "lng": "-70.55668904314159",
                                    "name": "JUMBO PEÑALOLEN",
                                    "externalId": "J519",
                                    "id": "105",
                                    "lat": "-33.4880007150512"
                                },
                                "last_status_code": "9003",
                                "eta_date": "2024-10-24T18:30:00.000Z",
                                "finished_at": null,
                                "order_nr": "25873231",
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-10-24T18:48:41.009Z",
                                        "status": "08"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v146205314jmch-01",
                                        "status_code": "08",
                                        "pack_id": 25913803,
                                        "sub_status_code": "9003"
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_CL",
                                    "name": "Jumbo"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "PRIME",
                                        "value": "true"
                                    },
                                    {
                                        "name": "Transportadora",
                                        "value": "AG Peñalolen"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"invoiceValue\",\"value\":18063200},{\"name\":\"url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/uFXugBFjDQlv3NzMO-7C2\"},{\"name\":\"Transportadora\",\"value\":\"AG Peñalolen\"}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "18063200"
                                    },
                                    {
                                        "name": "url",
                                        "value": "https://public-url-shortener.ecomm.cencosud.com/uFXugBFjDQlv3NzMO-7C2"
                                    }
                                ],
                                "external_system_order_id": "v146205314jmch-01",
                                "route_priority": 1,
                                "id": "6fueucm2nnpkge",
                                "items": 1,
                                "eta_end_date": "2024-10-24T20:30:00.000Z",
                                "status": "08",
                                "customer": {
                                    "address": "Los Coigües 7103",
                                    "lng": "-70.559041700000000",
                                    "city": "Santiago",
                                    "phone": "+56991590594",
                                    "commune": "Peñalolén",
                                    "name": "Marcelo ORELLANA",
                                    "id": "6fu1miam2nnpkgd",
                                    "state": "Metropolitana de Santiago",
                                    "postal_code": "7910000",
                                    "lat": "-33.503922300000000",
                                    "email": "marcelo.orellana@gruporh.cl"
                                }
                            },
                            {
                                "seller": {
                                    "address": "Av. Sanchez Fontecilla 12000",
                                    "lng": "-70.55668904314159",
                                    "name": "JUMBO PEÑALOLEN",
                                    "externalId": "J519",
                                    "id": "105",
                                    "lat": "-33.4880007150512"
                                },
                                "last_status_code": "9003",
                                "eta_date": "2024-10-24T18:30:00.000Z",
                                "finished_at": null,
                                "order_nr": "25874120",
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-10-24T18:48:41.009Z",
                                        "status": "08"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v146208515jmch-01",
                                        "status_code": "08",
                                        "pack_id": 25914693,
                                        "sub_status_code": "9003"
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_CL",
                                    "name": "Jumbo"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "url",
                                        "value": "https://public-url-shortener.ecomm.cencosud.com/FKoAFQen1Rh7mXHS_EMen"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "2520600"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"Comentarios del usuario\",\"value\":\"tocar la campana\"},{\"name\":\"invoiceValue\",\"value\":2520600},{\"name\":\"url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/FKoAFQen1Rh7mXHS_EMen\"},{\"name\":\"Transportadora\",\"value\":\"AG Peñalolen\"}]"
                                    },
                                    {
                                        "name": "Transportadora",
                                        "value": "AG Peñalolen"
                                    },
                                    {
                                        "name": "PRIME",
                                        "value": "true"
                                    }
                                ],
                                "external_system_order_id": "v146208515jmch-01",
                                "route_priority": 2,
                                "id": "6fu1v1km2nnpkgg",
                                "items": 1,
                                "eta_end_date": "2024-10-24T20:30:00.000Z",
                                "status": "08",
                                "customer": {
                                    "address": "Las Camelias 8216",
                                    "lng": "-70.546036899999990",
                                    "city": "Santiago",
                                    "phone": "+56999963348",
                                    "commune": "Peñalolén",
                                    "name": "cecilia derpich",
                                    "id": "6fu4zgm2nnpkgf",
                                    "state": "Metropolitana de Santiago",
                                    "postal_code": "7910000",
                                    "lat": "-33.475900299999990",
                                    "email": "cecilia.derpich@gmail.com"
                                }
                            }
                        ],
                        "id": "a96ddb71-1bed-4f81-9fdb-fd234424f4c0",
                        "eta_end_date": null,
                        "status": "ASSIGNED"
                    },
                    "sort": [
                        1729795721009
                    ]
                },
                {
                    "_index": "routes",
                    "_type": "_doc",
                    "_id": "5e8b8071-2aba-4389-b276-4a4d66f5cbbc",
                    "_score": null,
                    "_source": {
                        "eta_date": "2024-10-24T20:00:00.000Z",
                        "status_history": [
                            {
                                "offline": 0,
                                "created_at": "2024-10-24T18:48:27.271Z",
                                "status": "ASSIGNED"
                            }
                        ],
                        "created_at": "2024-10-24T18:48:27.271Z",
                        "created_by": "cma8059",
                        "vehicle": {
                            "licence_plate": "PTFW20",
                            "vehicle_type": "CAR",
                            "id": "20059"
                        },
                        "driver": {
                            "associated_stores": [
                                {
                                    "code": "J843",
                                    "retailChainCode": "JUMBO_CL",
                                    "retailChainName": "Jumbo",
                                    "name": "JUMBO SAN BERNARDO",
                                    "lat": -33.63383876812627,
                                    "long": -70.70984433588002
                                }
                            ],
                            "phone": "+56987474712",
                            "name": "Gonzalo Silva Espinoza",
                            "id": "cbfeefe4-4d55-4580-8c11-0e46061c465e"
                        },
                        "updated_at": "2024-10-24T18:48:27.271Z",
                        "courier": {
                            "name": null,
                            "id": null
                        },
                        "provider": {
                            "name": "Boosmap Chile",
                            "id": "1"
                        },
                        "updated_by": "cma8059",
                        "orders": [
                            {
                                "seller": {
                                    "address": "Av. Portales 3698",
                                    "lng": "-70.70984433588002",
                                    "name": "JUMBO SAN BERNARDO",
                                    "externalId": "J843",
                                    "id": "127",
                                    "lat": "-33.63383876812627"
                                },
                                "last_status_code": "9003",
                                "eta_date": "2024-10-24T18:00:00.000Z",
                                "finished_at": null,
                                "order_nr": "25871992",
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-10-24T18:48:27.271Z",
                                        "status": "08"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v146201189jmch-01",
                                        "status_code": "08",
                                        "pack_id": 25912562,
                                        "sub_status_code": "9003"
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_CL",
                                    "name": "Jumbo"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "PRIME",
                                        "value": "true"
                                    },
                                    {
                                        "name": "Transportadora",
                                        "value": "Z2 San Bernardo"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"invoiceValue\",\"value\":5594800},{\"name\":\"url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/X5q5tuAP1XfOakEBOPIFt\"},{\"name\":\"Transportadora\",\"value\":\"Z2 San Bernardo\"}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "5594800"
                                    },
                                    {
                                        "name": "url",
                                        "value": "https://public-url-shortener.ecomm.cencosud.com/X5q5tuAP1XfOakEBOPIFt"
                                    }
                                ],
                                "external_system_order_id": "v146201189jmch-01",
                                "route_priority": 1,
                                "id": "fw2bby1p0dm2nnp9vf",
                                "items": 1,
                                "eta_end_date": "2024-10-24T20:00:00.000Z",
                                "status": "08",
                                "customer": {
                                    "address": "Calle Alcalde Julio Arangua Nuñez Norte 367",
                                    "lng": "-70.851363200000000",
                                    "city": "Talagante",
                                    "phone": "+56971030749",
                                    "commune": "Peñaflor",
                                    "name": "Tania Roco",
                                    "id": "fw2bby14lfm2nnp9ve",
                                    "state": "Metropolitana de Santiago",
                                    "postal_code": "Talagante",
                                    "lat": "-33.598054200000000",
                                    "email": "tanny.roco@live.com"
                                }
                            }
                        ],
                        "id": "5e8b8071-2aba-4389-b276-4a4d66f5cbbc",
                        "eta_end_date": null,
                        "status": "ASSIGNED"
                    },
                    "sort": [
                        1729795707271
                    ]
                },
                {
                    "_index": "routes",
                    "_type": "_doc",
                    "_id": "eeb75998-856b-4fe6-9cc4-389f6d114bbc",
                    "_score": null,
                    "_source": {
                        "eta_date": "2024-10-24T20:30:00.000Z",
                        "status_history": [
                            {
                                "offline": 0,
                                "created_at": "2024-10-24T18:48:17.393Z",
                                "status": "ASSIGNED"
                            }
                        ],
                        "created_at": "2024-10-24T18:48:17.393Z",
                        "created_by": "tulio.arana@externos-cl.cencosud.com",
                        "vehicle": {
                            "licence_plate": "TOUCH-WCD071",
                            "vehicle_type": "MOTORCYCLE",
                            "id": "5316"
                        },
                        "driver": {
                            "associated_stores": [
                                {
                                    "code": "37",
                                    "retailChainCode": "PARIS_CL",
                                    "retailChainName": "Paris",
                                    "name": "PARIS PLAZA NORTE ",
                                    "lat": -33.364689272139955,
                                    "long": -70.67961124314583
                                },
                                {
                                    "code": "J512",
                                    "retailChainCode": "JUMBO_CL",
                                    "retailChainName": "Jumbo",
                                    "name": "DARKSTORE LA REINA",
                                    "lat": -33.42759872128231,
                                    "long": -70.54045533874493
                                },
                                {
                                    "code": "E512",
                                    "retailChainCode": "EASY_CL",
                                    "retailChainName": "Easy",
                                    "name": "EASY LA REINA PADRE HURTADO",
                                    "lat": -33.4280678999318,
                                    "long": -70.5407857314981
                                },
                                {
                                    "code": "125",
                                    "retailChainCode": "PARIS_CL",
                                    "retailChainName": "Paris",
                                    "name": "PARIS INDEPENDENCIA",
                                    "lat": -33.42391237352133,
                                    "long": -70.65344695848559
                                },
                                {
                                    "code": "J989",
                                    "retailChainCode": "JUMBO_CL",
                                    "retailChainName": "Jumbo",
                                    "name": "JUMBO INDEPENDENCIA",
                                    "lat": -33.42376401681683,
                                    "long": -70.6536079
                                }
                            ],
                            "phone": "+56957605542",
                            "name": "GIBSON RONALD PALACIO VERA",
                            "id": "fafcbc8f-a6ac-4b3d-8484-0b65729f86eb"
                        },
                        "updated_at": "2024-10-24T18:48:17.393Z",
                        "courier": {
                            "name": null,
                            "id": null
                        },
                        "provider": {
                            "name": "Zubale",
                            "id": "13"
                        },
                        "updated_by": "tulio.arana@externos-cl.cencosud.com",
                        "orders": [
                            {
                                "seller": {
                                    "address": "Av. Independencia 565",
                                    "lng": "-70.6536079",
                                    "name": "JUMBO INDEPENDENCIA",
                                    "externalId": "J989",
                                    "id": "110",
                                    "lat": "-33.42376401681683"
                                },
                                "last_status_code": "9003",
                                "eta_date": "2024-10-24T18:30:00.000Z",
                                "finished_at": null,
                                "order_nr": "25874194",
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-10-24T18:48:17.393Z",
                                        "status": "08"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v146208808jmch-01",
                                        "status_code": "08",
                                        "pack_id": 25914767,
                                        "sub_status_code": "9003"
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_CL",
                                    "name": "Jumbo"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "PRIME",
                                        "value": "true"
                                    },
                                    {
                                        "name": "Transportadora",
                                        "value": "AG Independencia"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"Comentarios del usuario\",\"value\":\"Entrar derecho, pasillo del medio local 73\"},{\"name\":\"invoiceValue\",\"value\":2993000},{\"name\":\"url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/tV8R9uCeJTWg6YhRp3G_2\"},{\"name\":\"Transportadora\",\"value\":\"AG Independencia\"}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "2993000"
                                    },
                                    {
                                        "name": "url",
                                        "value": "https://public-url-shortener.ecomm.cencosud.com/tV8R9uCeJTWg6YhRp3G_2"
                                    }
                                ],
                                "external_system_order_id": "v146208808jmch-01",
                                "route_priority": 1,
                                "id": "6fu1wpum2nnp28t",
                                "items": 1,
                                "eta_end_date": "2024-10-24T20:30:00.000Z",
                                "status": "08",
                                "customer": {
                                    "address": "Moneda 835, local 73, PASEO SAN AGUSTIN, galera",
                                    "lng": "-70.648493399999990",
                                    "city": "Santiago",
                                    "phone": "+56949748929",
                                    "commune": "Santiago",
                                    "name": "karina quintanilla",
                                    "id": "6fuqiwm2nnp28s",
                                    "state": "Metropolitana de Santiago",
                                    "postal_code": "Santiago",
                                    "lat": "-33.441553100000000",
                                    "email": "karinaq1992@gmail.com"
                                }
                            },
                            {
                                "seller": {
                                    "address": "Av. Independencia 565",
                                    "lng": "-70.6536079",
                                    "name": "JUMBO INDEPENDENCIA",
                                    "externalId": "J989",
                                    "id": "110",
                                    "lat": "-33.42376401681683"
                                },
                                "last_status_code": "9003",
                                "eta_date": "2024-10-24T18:30:00.000Z",
                                "finished_at": null,
                                "order_nr": "25874221",
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-10-24T18:48:17.393Z",
                                        "status": "08"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v146208890jmch-01",
                                        "status_code": "08",
                                        "pack_id": 25914794,
                                        "sub_status_code": "9003"
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_CL",
                                    "name": "Jumbo"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "PRIME",
                                        "value": "true"
                                    },
                                    {
                                        "name": "Transportadora",
                                        "value": "AG Independencia"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"invoiceValue\",\"value\":3138200},{\"name\":\"url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/Z9xNBcb7CSLYQE9QfF0ta\"},{\"name\":\"Transportadora\",\"value\":\"AG Independencia\"}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "3138200"
                                    },
                                    {
                                        "name": "url",
                                        "value": "https://public-url-shortener.ecomm.cencosud.com/Z9xNBcb7CSLYQE9QfF0ta"
                                    }
                                ],
                                "external_system_order_id": "v146208890jmch-01",
                                "route_priority": 2,
                                "id": "6fu1kqwm2nnp28v",
                                "items": 1,
                                "eta_end_date": "2024-10-24T20:30:00.000Z",
                                "status": "08",
                                "customer": {
                                    "address": "Esmeralda 678",
                                    "lng": "-70.647132599999990",
                                    "city": "Santiago",
                                    "phone": "+56973566013",
                                    "commune": "Santiago",
                                    "name": "Carla Gutierrez",
                                    "id": "6fudlwm2nnp28u",
                                    "state": "Metropolitana de Santiago",
                                    "postal_code": "Santiago",
                                    "lat": "-33.434756400000000",
                                    "email": "carla.gm6@gmail.com"
                                }
                            }
                        ],
                        "id": "eeb75998-856b-4fe6-9cc4-389f6d114bbc",
                        "eta_end_date": null,
                        "status": "ASSIGNED"
                    },
                    "sort": [
                        1729795697393
                    ]
                },
                {
                    "_index": "routes",
                    "_type": "_doc",
                    "_id": "49a97507-8b59-4da9-b68c-ca86f6cbc41b",
                    "_score": null,
                    "_source": {
                        "eta_date": "2024-10-24T20:30:59.000Z",
                        "status_history": [
                            {
                                "offline": 0,
                                "created_at": "2024-10-24T18:48:12.518Z",
                                "status": "ASSIGNED"
                            }
                        ],
                        "created_at": "2024-10-24T18:48:12.518Z",
                        "created_by": "carlos.montero@externos-cl.cencosud.com",
                        "vehicle": {
                            "licence_plate": "HCCH85",
                            "vehicle_type": "CAR",
                            "id": "17840"
                        },
                        "driver": {
                            "associated_stores": [
                                {
                                    "code": "J403",
                                    "retailChainCode": "JUMBO_CL",
                                    "retailChainName": "Jumbo",
                                    "name": "DARKSTORE MAIPU",
                                    "lat": -33.47988379382734,
                                    "long": -70.75157908800772
                                }
                            ],
                            "phone": "+56957331628",
                            "name": "Gustavo Escobar Morales",
                            "id": "0ec52b02-7379-404c-b39f-cefc05b455e2"
                        },
                        "updated_at": "2024-10-24T18:48:12.518Z",
                        "courier": {
                            "name": null,
                            "id": null
                        },
                        "provider": {
                            "name": "Boosmap Chile",
                            "id": "1"
                        },
                        "updated_by": "carlos.montero@externos-cl.cencosud.com",
                        "orders": [
                            {
                                "seller": {
                                    "address": "Av. Americo Vespucio 1001",
                                    "lng": "-70.75157908800772",
                                    "name": "DARKSTORE MAIPU",
                                    "externalId": "J403",
                                    "id": "805",
                                    "lat": "-33.47988379382734"
                                },
                                "last_status_code": "9003",
                                "eta_date": "2024-10-24T18:30:00.000Z",
                                "finished_at": null,
                                "order_nr": "25873706",
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-10-24T18:48:12.518Z",
                                        "status": "08"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v146206965jmch-01",
                                        "status_code": "08",
                                        "pack_id": 25914279,
                                        "sub_status_code": "9003"
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_CL",
                                    "name": "Jumbo"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "Transportadora",
                                        "value": "AG Maipu (Nuevo)"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"invoiceValue\",\"value\":4925100},{\"name\":\"url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/ojbI6YORbWDwGA8nriyXM\"},{\"name\":\"Transportadora\",\"value\":\"AG Maipu (Nuevo)\"}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "4925100"
                                    },
                                    {
                                        "name": "url",
                                        "value": "https://public-url-shortener.ecomm.cencosud.com/ojbI6YORbWDwGA8nriyXM"
                                    }
                                ],
                                "external_system_order_id": "v146206965jmch-01",
                                "route_priority": 1,
                                "id": "6fu17x6m2nnoyhf",
                                "items": 1,
                                "eta_end_date": "2024-10-24T20:30:59.000Z",
                                "status": "08",
                                "customer": {
                                    "address": "Francisco Errázuriz 1280, 54B",
                                    "lng": "-70.714626400000000",
                                    "city": "Santiago",
                                    "phone": "+56961821543",
                                    "commune": "Renca",
                                    "name": "leonelsy figueredo",
                                    "id": "6fur5hm2nnoyhe",
                                    "state": "Metropolitana de Santiago",
                                    "postal_code": "Santiago",
                                    "lat": "-33.405471600000000",
                                    "email": "adily_111@hotmail.com"
                                }
                            },
                            {
                                "seller": {
                                    "address": "Av. Americo Vespucio 1001",
                                    "lng": "-70.75157908800772",
                                    "name": "DARKSTORE MAIPU",
                                    "externalId": "J403",
                                    "id": "805",
                                    "lat": "-33.47988379382734"
                                },
                                "last_status_code": "9003",
                                "eta_date": "2024-10-24T18:30:00.000Z",
                                "finished_at": null,
                                "order_nr": "25873873",
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-10-24T18:48:12.518Z",
                                        "status": "08"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v146207567jmch-01",
                                        "status_code": "08",
                                        "pack_id": 25914446,
                                        "sub_status_code": "9003"
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_CL",
                                    "name": "Jumbo"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "Transportadora",
                                        "value": "AG Maipu (Nuevo)"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"invoiceValue\",\"value\":2026900},{\"name\":\"url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/k0tAuYP4Dw_w6t-1oIP6j\"},{\"name\":\"Transportadora\",\"value\":\"AG Maipu (Nuevo)\"}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "2026900"
                                    },
                                    {
                                        "name": "url",
                                        "value": "https://public-url-shortener.ecomm.cencosud.com/k0tAuYP4Dw_w6t-1oIP6j"
                                    }
                                ],
                                "external_system_order_id": "v146207567jmch-01",
                                "route_priority": 2,
                                "id": "6fumyhm2nnoyhh",
                                "items": 1,
                                "eta_end_date": "2024-10-24T20:30:59.000Z",
                                "status": "08",
                                "customer": {
                                    "address": "Blanco Encalada 1591, 12",
                                    "lng": "-70.704662200000000",
                                    "city": "Santiago",
                                    "phone": "+56936515654",
                                    "commune": "Renca",
                                    "name": "Valentina Núñez Jara",
                                    "id": "6fugevm2nnoyhg",
                                    "state": "Metropolitana de Santiago",
                                    "postal_code": "Santiago",
                                    "lat": "-33.401388500000000",
                                    "email": "valentina.nunez.j@gmail.com"
                                }
                            }
                        ],
                        "id": "49a97507-8b59-4da9-b68c-ca86f6cbc41b",
                        "eta_end_date": null,
                        "status": "ASSIGNED"
                    },
                    "sort": [
                        1729795692518
                    ]
                }
            ]
        }
    };
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
