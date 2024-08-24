const getData = (req, res) => {
    let response = {
        "took": 5,
        "timed_out": false,
        "_shards": {
            "total": 5,
            "successful": 5,
            "skipped": 0,
            "failed": 0
        },
        "hits": {
            "total": {
                "value": 631,
                "relation": "eq"
            },
            "max_score": null,
            "hits": [
                {
                    "_index": "routes",
                    "_type": "_doc",
                    "_id": "5fc2c511-15b9-4521-a2e4-5806372c7686",
                    "_score": null,
                    "_source": {
                        "eta_date": "2024-08-22T21:00:59.000Z",
                        "status_history": [
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T17:59:57.856Z",
                                "status": "ASSIGNED"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T18:02:32.557Z",
                                "status": "IN_PROGRESS"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T18:14:55.704Z",
                                "status": "FINISHED"
                            }
                        ],
                        "created_at": "2024-08-22T17:59:57.856Z",
                        "in_progress_at": "2024-08-22T18:02:32.557Z",
                        "traveled_distance": 2.173,
                        "created_by": "veronicagabriela.mendez@jumbo.com.ar",
                        "vehicle": {
                            "licence_plate": "KDT096",
                            "vehicle_type": "PICKUP_TRUCK",
                            "id": "5958"
                        },
                        "driver": {
                            "associated_stores": [
                                {
                                    "code": "jumboargentinaj5207quilmes",
                                    "retailChainCode": "JUMBO_AR",
                                    "retailChainName": "Jumbo (Argentina)",
                                    "name": "JUMBO QUILMES",
                                    "lat": -34.75774084,
                                    "long": -58.27442241
                                },
                                {
                                    "code": "jumboargentinaj5204lomas",
                                    "retailChainCode": "JUMBO_AR",
                                    "retailChainName": "Jumbo (Argentina)",
                                    "name": "JUMBO LOMAS",
                                    "lat": -34.79239254,
                                    "long": -58.41694458
                                }
                            ],
                            "phone": "+541166541614",
                            "name": "Tiago Fleitas",
                            "id": "95febc90-ffb7-41ae-a024-fcd93768e9fa"
                        },
                        "updated_at": "2024-08-22T17:59:57.856Z",
                        "courier": {
                            "name": null,
                            "id": null
                        },
                        "provider": {
                            "name": "Food Delivery",
                            "id": "46"
                        },
                        "updated_by": "veronicagabriela.mendez@jumbo.com.ar",
                        "orders": [
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": "-58.41694458",
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": "868",
                                    "lat": "-34.79239254"
                                },
                                "last_status_code": "01",
                                "eta_date": "2024-08-22T17:00:00.000Z",
                                "finished_at": "2024-08-22T18:14:55.704Z",
                                "order_nr": "24106075",
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T17:59:57.856Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T18:02:32.557Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T18:02:35.240Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T18:14:47.736Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T18:14:55.704Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24444724JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24141129,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.4084016,
                                                "created_at": "2024-08-22T18:02:32.557Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7876683,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.4084017,
                                                "created_at": "2024-08-22T18:02:35.240Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7876683,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.4084017,
                                                "created_at": "2024-08-22T18:14:47.736Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7876683,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.406327,
                                                "created_at": "2024-08-22T18:14:55.704Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7799309,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24444724JRSA-01_24141129_1724350492044-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24444724JRSA-01_24141129_1724350492044-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"Miguel Weiss\",\"observation\":\"\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"Envío a Domicilio\"}]"
                                    }
                                ],
                                "external_system_order_id": "v24444724JRSA-01",
                                "route_priority": 1,
                                "id": "bf51cc1wapm05l88xj",
                                "items": 1,
                                "eta_end_date": "2024-08-22T21:00:59.000Z",
                                "status": "02",
                                "customer": {
                                    "address": "Gral. José María Paz 161, Observaciones: Hay una garita de seguridad enfrente.",
                                    "lng": "-58.399007900000000",
                                    "city": "Lomas de Zamora",
                                    "phone": "+541134130858",
                                    "commune": "Temperley",
                                    "name": "Miguel Weiss",
                                    "id": "bf51ccvwum05l88xi",
                                    "state": "Buenos Aires",
                                    "postal_code": "1834",
                                    "lat": "-34.773139500000000",
                                    "email": "miguel_weiss@hotmail.com"
                                }
                            }
                        ],
                        "id": "5fc2c511-15b9-4521-a2e4-5806372c7686",
                        "eta_end_date": "2024-08-22T18:14:55.704Z",
                        "status": "FINISHED"
                    },
                    "sort": [
                        1724349597856
                    ]
                },
                {
                    "_index": "routes",
                    "_type": "_doc",
                    "_id": "ea7d1071-96a8-4e34-a240-65de43f53eb4",
                    "_score": null,
                    "_source": {
                        "eta_date": "2024-08-23T00:30:59.000Z",
                        "status_history": [
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T17:26:18.736Z",
                                "status": "PLANNED"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T19:33:45.625Z",
                                "status": "ASSIGNED"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T21:31:18.982Z",
                                "status": "IN_PROGRESS"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T21:32:26.721Z",
                                "status": "FINISHED"
                            }
                        ],
                        "created_at": "2024-08-22T17:26:18.736Z",
                        "in_progress_at": "2024-08-22T21:31:18.982Z",
                        "traveled_distance": 8.886,
                        "type": "PLANNED",
                        "created_by": "vgmendez",
                        "vehicle": {
                            "licence_plate": "AE764TA",
                            "vehicle_type": "VAN",
                            "id": 12409
                        },
                        "driver": {
                            "associated_stores": [
                                {
                                    "code": "jumboargentinaj5259tronador",
                                    "retailChainCode": "JUMBO_AR",
                                    "retailChainName": "Jumbo (Argentina)",
                                    "name": "JUMBO TRONADOR",
                                    "id": 854,
                                    "lat": -34.58294277,
                                    "long": -58.46528794
                                },
                                {
                                    "code": "jumboargentinaj5206palermo",
                                    "retailChainCode": "JUMBO_AR",
                                    "retailChainName": "Jumbo (Argentina)",
                                    "name": "JUMBO PALERMO",
                                    "id": 870,
                                    "lat": -34.57318184,
                                    "long": -58.42682027
                                },
                                {
                                    "code": "jumboargentinaj5208moron",
                                    "retailChainCode": "JUMBO_AR",
                                    "retailChainName": "Jumbo (Argentina)",
                                    "name": "JUMBO MORON",
                                    "id": 872,
                                    "lat": -34.63442354,
                                    "long": -58.62936668
                                },
                                {
                                    "code": "jumboargentinaj5204lomas",
                                    "retailChainCode": "JUMBO_AR",
                                    "retailChainName": "Jumbo (Argentina)",
                                    "name": "JUMBO LOMAS",
                                    "id": 868,
                                    "lat": -34.79239254,
                                    "long": -58.41694458
                                }
                            ],
                            "phone": "+541133543463",
                            "name": "Victor Hugo Coronel",
                            "id": "9356d93a-8a37-489e-a307-de9be51bb1b9",
                            "email": "victorcoronel888@gmail.com"
                        },
                        "updated_at": "2024-08-22T19:33:45.628Z",
                        "courier": {
                            "name": null,
                            "id": null
                        },
                        "provider": {
                            "name": "Food Delivery",
                            "id": 46
                        },
                        "updated_by": "veronicagabriela.mendez@jumbo.com.ar",
                        "orders": [
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T21:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T21:31:34.963Z",
                                "last_status_desc": "Listo para Recoger",
                                "order_nr": 24087807,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T17:26:18.736Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T21:31:18.982Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T21:31:23.359Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T21:31:25.099Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T21:31:34.963Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24437135JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24122834,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.3725002,
                                                "created_at": "2024-08-22T21:31:18.982Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7409159,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.3725002,
                                                "created_at": "2024-08-22T21:31:23.359Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7409159,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.3725002,
                                                "created_at": "2024-08-22T21:31:25.099Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7409159,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.3725002,
                                                "created_at": "2024-08-22T21:31:34.963Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7409159,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24437135JRSA-01_24122834_1724362290389-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24437135JRSA-01_24122834_1724362290389-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"cecilia brunet\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
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
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"invoiceValue\",\"value\":0}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "0"
                                    }
                                ],
                                "external_system_order_id": "v24437135JRSA-01",
                                "route_priority": 1,
                                "id": "bf51cc18kam05k0z1v",
                                "items": 1,
                                "eta_end_date": "2024-08-23T00:30:59.000Z",
                                "customer": {
                                    "address": "Pasaje Planes, 55",
                                    "lng": "-58.393151600000000",
                                    "city": "Remedios de Escalada",
                                    "phone": "+541150508072",
                                    "commune": "N/A",
                                    "name": "cecilia brunet",
                                    "id": "bf51cc3mkm05k0z1u",
                                    "state": "Buenos Aires",
                                    "postal_code": "1826",
                                    "lat": "-34.716161200000000",
                                    "email": "ceciliabrunet@yahoo.com.ar"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T21:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T21:31:50.141Z",
                                "last_status_desc": "Listo para Recoger",
                                "order_nr": 24090440,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T17:26:18.736Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T21:31:18.982Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T21:31:40.665Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T21:31:41.812Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T21:31:50.141Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24438244JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24125480,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.3725002,
                                                "created_at": "2024-08-22T21:31:18.982Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7409159,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.3725002,
                                                "created_at": "2024-08-22T21:31:40.665Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7409159,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.3725002,
                                                "created_at": "2024-08-22T21:31:41.812Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7409159,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.3725002,
                                                "created_at": "2024-08-22T21:31:50.141Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7409159,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24438244JRSA-01_24125480_1724362306788-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24438244JRSA-01_24125480_1724362306788-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"cecilia brunet\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
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
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"invoiceValue\",\"value\":0}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "0"
                                    }
                                ],
                                "external_system_order_id": "v24438244JRSA-01",
                                "route_priority": 2,
                                "id": "bf51cctzym05k0z1x",
                                "items": 1,
                                "eta_end_date": "2024-08-23T00:30:59.000Z",
                                "customer": {
                                    "address": "Pasaje Planes, 55",
                                    "lng": "-58.393151600000000",
                                    "city": "Remedios de Escalada",
                                    "phone": "+541150508072",
                                    "commune": "N/A",
                                    "name": "cecilia brunet",
                                    "id": "bf51cc17y7m05k0z1w",
                                    "state": "Buenos Aires",
                                    "postal_code": "1826",
                                    "lat": "-34.716161200000000",
                                    "email": "ceciliabrunet@yahoo.com.ar"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T21:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T21:32:09.101Z",
                                "last_status_desc": "Listo para Recoger",
                                "order_nr": 24082807,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T17:26:18.736Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T21:31:18.982Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T21:31:56.373Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T21:31:58.982Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T21:32:09.101Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24434385JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24117828,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.3725002,
                                                "created_at": "2024-08-22T21:31:18.982Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7409159,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.3725002,
                                                "created_at": "2024-08-22T21:31:56.373Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7409159,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.3725002,
                                                "created_at": "2024-08-22T21:31:58.982Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7409159,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.3725002,
                                                "created_at": "2024-08-22T21:32:09.101Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7409159,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24434385JRSA-01_24117828_1724362325086-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24434385JRSA-01_24117828_1724362325086-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"Fabian Giusti\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
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
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"Comentarios del usuario\",\"value\":\"Esq. Pichincha\"},{\"name\":\"invoiceValue\",\"value\":0}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "0"
                                    }
                                ],
                                "external_system_order_id": "v24434385JRSA-01",
                                "route_priority": 3,
                                "id": "bf51cc1ra8m05k0z1t",
                                "items": 1,
                                "eta_end_date": "2024-08-23T00:30:59.000Z",
                                "customer": {
                                    "address": "General Madariaga, 1114",
                                    "lng": "-58.373272300000000",
                                    "city": "Lanús",
                                    "phone": "+541158361587",
                                    "commune": "N/A",
                                    "name": "Fabian Giusti",
                                    "id": "bf51cchh1m05k0z1s",
                                    "state": "Buenos Aires",
                                    "postal_code": "1826",
                                    "lat": "-34.708340500000000",
                                    "email": "fabiangm@gmail.com"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T21:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T21:32:26.721Z",
                                "last_status_desc": "Notificado",
                                "order_nr": 24113374,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T17:26:18.736Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T21:31:18.982Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T21:32:15.080Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T21:32:17.989Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T21:32:26.721Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24449270JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24148441,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.3725002,
                                                "created_at": "2024-08-22T21:31:18.982Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7409159,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.3725002,
                                                "created_at": "2024-08-22T21:32:15.080Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7409159,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.3725002,
                                                "created_at": "2024-08-22T21:32:17.989Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7409159,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.3725002,
                                                "created_at": "2024-08-22T21:32:26.721Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7409159,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24449270JRSA-01_24148441_1724362342985-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24449270JRSA-01_24148441_1724362342985-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"ANDREA GONZALEZ\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
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
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"}]"
                                    }
                                ],
                                "external_system_order_id": "v24449270JRSA-01",
                                "route_priority": 4,
                                "id": "bf51cc21fom05k0z1z",
                                "items": 1,
                                "eta_end_date": "2024-08-23T00:30:59.000Z",
                                "customer": {
                                    "address": "Bolaños 3860",
                                    "lng": "-58.351013499999990",
                                    "city": "Monte Chingolo",
                                    "phone": "+541141589020",
                                    "commune": "N/A",
                                    "name": "ANDREA GONZALEZ",
                                    "id": "bf51cc1067m05k0z1y",
                                    "state": "Buenos Aires",
                                    "postal_code": null,
                                    "lat": "-34.718686400000000",
                                    "email": "adgcarcare@hotmail.com"
                                },
                                "status": "02"
                            }
                        ],
                        "id": "ea7d1071-96a8-4e34-a240-65de43f53eb4",
                        "eta_end_date": "2024-08-22T21:32:26.721Z",
                        "status": "FINISHED"
                    },
                    "sort": [
                        1724347578736
                    ]
                },
                {
                    "_index": "routes",
                    "_type": "_doc",
                    "_id": "70cd1ff5-0d68-426b-80d9-1a85c040db36",
                    "_score": null,
                    "_source": {
                        "eta_date": "2024-08-23T00:30:59.000Z",
                        "status_history": [
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T17:26:06.015Z",
                                "status": "PLANNED"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T19:57:47.509Z",
                                "status": "ASSIGNED"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T20:10:00.097Z",
                                "status": "IN_PROGRESS"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T21:12:00.848Z",
                                "status": "FINISHED"
                            }
                        ],
                        "created_at": "2024-08-22T17:26:06.015Z",
                        "in_progress_at": "2024-08-22T20:10:00.097Z",
                        "traveled_distance": 9.121,
                        "type": "PLANNED",
                        "created_by": "vgmendez",
                        "vehicle": {
                            "licence_plate": "AC854XS",
                            "vehicle_type": "CAR",
                            "id": 373
                        },
                        "driver": {
                            "associated_stores": [
                                {
                                    "code": "jumboargentinaj5204lomas",
                                    "retailChainCode": "JUMBO_AR",
                                    "retailChainName": "Jumbo (Argentina)",
                                    "name": "JUMBO LOMAS",
                                    "id": 868,
                                    "lat": -34.79239254,
                                    "long": -58.41694458
                                }
                            ],
                            "phone": "1123029224",
                            "name": "Francisco Alvarez",
                            "id": "00f05cb5-688d-4c98-9b60-62215587687d",
                            "email": "franciscoalvarez108@gmail.com"
                        },
                        "updated_at": "2024-08-22T19:58:54.011Z",
                        "courier": {
                            "name": null,
                            "id": null
                        },
                        "provider": null,
                        "updated_by": "veronicagabriela.mendez@jumbo.com.ar",
                        "orders": [
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T21:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T20:18:53.408Z",
                                "last_status_desc": "Listo para Recoger",
                                "order_nr": 24103310,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T17:26:06.015Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T20:10:00.097Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T20:18:19.338Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T20:18:28.273Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T20:18:53.408Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24445834JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24138364,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.4175266,
                                                "created_at": "2024-08-22T20:10:00.097Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7931724,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.4140664,
                                                "created_at": "2024-08-22T20:18:19.338Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.781244,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.4140464,
                                                "created_at": "2024-08-22T20:18:28.273Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7812297,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.4140716,
                                                "created_at": "2024-08-22T20:18:53.408Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7812537,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24445834JRSA-01_24138364_1724357926525-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24445834JRSA-01_24138364_1724357926525-shipping.jpg"
                                            },
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24445834JRSA-01_24138364_1724357915315-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24445834JRSA-01_24138364_1724357915315-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"Cyntia Laura Smyth\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
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
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"invoiceValue\",\"value\":0}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "0"
                                    }
                                ],
                                "external_system_order_id": "v24445834JRSA-01",
                                "route_priority": 1,
                                "id": "bf51cc1r0bm05k0p8l",
                                "items": 1,
                                "eta_end_date": "2024-08-23T00:30:59.000Z",
                                "customer": {
                                    "address": "General José María Paz 1293",
                                    "lng": "-58.414230000000000",
                                    "city": "Lomas de Zamora",
                                    "phone": "+541149287007",
                                    "commune": "N/A",
                                    "name": "Cyntia Laura Smyth",
                                    "id": "bf51cc1zfwm05k0p8k",
                                    "state": "Buenos Aires",
                                    "postal_code": "1834",
                                    "lat": "-34.781237500000000",
                                    "email": "cyntiasmyth@gmail.com"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T21:00:00.000Z",
                                "last_status_code": "01",
                                "sub_status": null,
                                "finished_at": "2024-08-22T20:30:12.929Z",
                                "order_nr": 24114428,
                                "destination": null,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T19:58:54.011Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T20:10:00.097Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T20:28:47.016Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T20:29:03.333Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T20:30:12.929Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24448545JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24149496,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.4175266,
                                                "created_at": "2024-08-22T20:10:00.097Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7931724,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.4142102,
                                                "created_at": "2024-08-22T20:28:47.016Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7812236,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.4037627,
                                                "created_at": "2024-08-22T20:29:03.333Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7749038,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.4038311,
                                                "created_at": "2024-08-22T20:30:12.929Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7751602,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24448545JRSA-01_24149496_1724358607359-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24448545JRSA-01_24149496_1724358607359-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"Roberto Marino\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
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
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"invoiceValue\",\"value\":0}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "0"
                                    }
                                ],
                                "external_system_order_id": "v24448545JRSA-01",
                                "route_priority": 2,
                                "id": "9o68sjuom05ph6xb",
                                "items": 1,
                                "eta_end_date": "2024-08-23T00:30:59.000Z",
                                "status": "02",
                                "customer": {
                                    "address": "Coronel Brandsen 350",
                                    "lng": "-58.403805100000000",
                                    "city": "Temperley",
                                    "phone": "+541158182176",
                                    "commune": "N/A",
                                    "name": "Roberto Marino",
                                    "id": "9o68s1wr8m05ph6xa",
                                    "state": "PROVINCIA DE BUENOS AIRES",
                                    "postal_code": "1834",
                                    "lat": "-34.774993600000000",
                                    "email": "roberto.marino@marino-asoc.com.ar"
                                }
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T21:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T20:37:30.419Z",
                                "last_status_desc": "Listo para Recoger",
                                "order_nr": 24091538,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T17:26:06.015Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T20:10:00.097Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T20:35:01.226Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T20:37:21.266Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T20:37:30.419Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24438682JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24126578,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.4175266,
                                                "created_at": "2024-08-22T20:10:00.097Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7931724,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.4039355,
                                                "created_at": "2024-08-22T20:35:01.226Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7750494,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.4044983,
                                                "created_at": "2024-08-22T20:37:21.266Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.769725,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.4044983,
                                                "created_at": "2024-08-22T20:37:30.419Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.769725,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24438682JRSA-01_24126578_1724359045642-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24438682JRSA-01_24126578_1724359045642-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"Eduardo Barbieri\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
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
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"Comentarios del usuario\",\"value\":\"1 F\"},{\"name\":\"invoiceValue\",\"value\":0}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "0"
                                    }
                                ],
                                "external_system_order_id": "v24438682JRSA-01",
                                "route_priority": 3,
                                "id": "bf51cchdzm05k0p8j",
                                "items": 1,
                                "eta_end_date": "2024-08-23T00:30:59.000Z",
                                "customer": {
                                    "address": "Avenida Hipólito Yrigoyen, 9786",
                                    "lng": "-58.404371299999990",
                                    "city": "Lomas de Zamora",
                                    "phone": "+541164544234",
                                    "commune": "N/A",
                                    "name": "Eduardo Barbieri",
                                    "id": "bf51cc1klm05k0p8i",
                                    "state": "Buenos Aires",
                                    "postal_code": "1832",
                                    "lat": "-34.769790900000000",
                                    "email": "eduardonbarbieri@gmail.com"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T21:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T21:01:48.595Z",
                                "last_status_desc": "Listo para Recoger",
                                "order_nr": 24001283,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T17:26:06.015Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T20:10:00.097Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T20:41:32.213Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T20:44:26.692Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T21:01:48.595Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24403649JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24036195,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.4175266,
                                                "created_at": "2024-08-22T20:10:00.097Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7931724,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.4042574,
                                                "created_at": "2024-08-22T20:41:32.213Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7679841,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.4060548,
                                                "created_at": "2024-08-22T20:44:26.692Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7641985,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.386035,
                                                "created_at": "2024-08-22T21:01:48.595Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7699183,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24403649JRSA-01_24036195_1724360464788-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24403649JRSA-01_24036195_1724360464788-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"maria cecilia manfredi\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "invoiceValue",
                                        "value": "0"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"invoiceValue\",\"value\":0}]"
                                    }
                                ],
                                "external_system_order_id": "v24403649JRSA-01",
                                "route_priority": 4,
                                "id": "bf51cctfnm05k0p8f",
                                "items": 1,
                                "eta_end_date": "2024-08-23T00:30:59.000Z",
                                "customer": {
                                    "address": "Loria, 595",
                                    "lng": "-58.414757800000000",
                                    "city": "Lomas de Zamora",
                                    "phone": "+541138805128",
                                    "commune": "Lomas de Zamora",
                                    "name": "maria cecilia manfredi",
                                    "id": "bf51cc1z10m05k0p8e",
                                    "state": "Buenos Aires",
                                    "postal_code": null,
                                    "lat": "-34.761012500000000",
                                    "email": "fredimanfredi@hotmail.com"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T21:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T21:05:01.152Z",
                                "last_status_desc": "Listo para Recoger",
                                "order_nr": 24069962,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T17:26:06.015Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T20:10:00.097Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T21:03:23.718Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T21:03:37.198Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T21:05:01.152Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24426752JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24104972,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.4175266,
                                                "created_at": "2024-08-22T20:10:00.097Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7931724,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.3857285,
                                                "created_at": "2024-08-22T21:03:23.718Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7699433,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.3857296,
                                                "created_at": "2024-08-22T21:03:37.198Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7699186,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.3859725,
                                                "created_at": "2024-08-22T21:05:01.152Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7698526,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24426752JRSA-01_24104972_1724360622262-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24426752JRSA-01_24104972_1724360622262-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"Susana Rial\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "invoiceValue",
                                        "value": "0"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"invoiceValue\",\"value\":0}]"
                                    }
                                ],
                                "external_system_order_id": "v24426752JRSA-01",
                                "route_priority": 5,
                                "id": "bf51ccn87m05k0p8h",
                                "items": 1,
                                "eta_end_date": "2024-08-23T00:30:59.000Z",
                                "customer": {
                                    "address": "Iberá, 173",
                                    "lng": "-58.386270100000000",
                                    "city": "Temperley",
                                    "phone": "+541150192036",
                                    "commune": "N/A",
                                    "name": "Susana Rial",
                                    "id": "bf51cc3rem05k0p8g",
                                    "state": "PROVINCIA DE BUENOS AIRES",
                                    "postal_code": "1834",
                                    "lat": "-34.769152400000000",
                                    "email": "cristianvedani@gmail.com"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T21:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T21:12:00.848Z",
                                "last_status_desc": "Listo para Recoger",
                                "order_nr": 24111776,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T17:26:06.015Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T20:10:00.097Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T21:05:05.916Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T21:11:33.248Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T21:12:00.848Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24448848JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24146843,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.4175266,
                                                "created_at": "2024-08-22T20:10:00.097Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7931724,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.3866329,
                                                "created_at": "2024-08-22T21:05:05.916Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7698547,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.3873224,
                                                "created_at": "2024-08-22T21:11:33.248Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7569,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.3873807,
                                                "created_at": "2024-08-22T21:12:00.848Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.756887,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24448848JRSA-01_24146843_1724361099966-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24448848JRSA-01_24146843_1724361099966-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"Gabriela Kadar\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
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
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"invoiceValue\",\"value\":0}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "0"
                                    }
                                ],
                                "external_system_order_id": "v24448848JRSA-01",
                                "route_priority": 6,
                                "id": "bf51ccv81m05k0p8n",
                                "items": 1,
                                "eta_end_date": "2024-08-23T00:30:59.000Z",
                                "customer": {
                                    "address": "Pirovano 644",
                                    "lng": "-58.387347299999980",
                                    "city": "Lomas de Zamora",
                                    "phone": "+541131783039",
                                    "commune": "N/A",
                                    "name": "Gabriela Kadar",
                                    "id": "bf51cc1n2zm05k0p8m",
                                    "state": "Buenos Aires",
                                    "postal_code": null,
                                    "lat": "-34.756834400000000",
                                    "email": "gskadar1972@gmail.com"
                                },
                                "status": "02"
                            }
                        ],
                        "id": "70cd1ff5-0d68-426b-80d9-1a85c040db36",
                        "eta_end_date": "2024-08-22T21:12:00.848Z",
                        "status": "FINISHED"
                    },
                    "sort": [
                        1724347566015
                    ]
                },
                {
                    "_index": "routes",
                    "_type": "_doc",
                    "_id": "075800b5-5c13-4394-8659-cb90e87c4e40",
                    "_score": null,
                    "_source": {
                        "eta_date": "2024-08-23T00:30:59.000Z",
                        "status_history": [
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T17:25:39.944Z",
                                "status": "PLANNED"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T19:55:47.853Z",
                                "status": "ASSIGNED"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T20:00:01.933Z",
                                "status": "IN_PROGRESS"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T20:12:32.829Z",
                                "status": "FINISHED"
                            }
                        ],
                        "created_at": "2024-08-22T17:25:39.944Z",
                        "in_progress_at": "2024-08-22T20:00:01.933Z",
                        "traveled_distance": 5.098,
                        "type": "PLANNED",
                        "created_by": "vgmendez",
                        "vehicle": {
                            "licence_plate": "HUR407",
                            "vehicle_type": "CAR",
                            "id": 374
                        },
                        "driver": {
                            "associated_stores": [
                                {
                                    "code": "jumboargentinaj5204lomas",
                                    "retailChainCode": "JUMBO_AR",
                                    "retailChainName": "Jumbo (Argentina)",
                                    "name": "JUMBO LOMAS",
                                    "id": 868,
                                    "lat": -34.79239254,
                                    "long": -58.41694458
                                }
                            ],
                            "phone": "1162200723",
                            "name": "GASTON GONZALEZ",
                            "id": "8c5d14d6-bacd-4ad1-9b19-d32a79aa3749",
                            "email": "gastongonzalez153@gmail.com"
                        },
                        "updated_at": "2024-08-22T19:55:47.855Z",
                        "courier": {
                            "name": null,
                            "id": null
                        },
                        "provider": null,
                        "updated_by": "veronicagabriela.mendez@jumbo.com.ar",
                        "orders": [
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T21:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T20:05:31.074Z",
                                "last_status_desc": "Listo para Recoger",
                                "order_nr": 24103547,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T17:25:39.944Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T20:00:01.932Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T20:00:26.391Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T20:00:33.378Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T20:05:31.074Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24445950JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24138601,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.432819,
                                                "created_at": "2024-08-22T20:00:01.932Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.808837,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.4305489,
                                                "created_at": "2024-08-22T20:00:26.391Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8118149,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.4302925,
                                                "created_at": "2024-08-22T20:00:33.378Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8121576,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.423092,
                                                "created_at": "2024-08-22T20:05:31.074Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8186817,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24445950JRSA-01_24138601_1724357124894-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24445950JRSA-01_24138601_1724357124894-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"Edgardo Feito\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
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
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"invoiceValue\",\"value\":0}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "0"
                                    }
                                ],
                                "external_system_order_id": "v24445950JRSA-01",
                                "route_priority": 1,
                                "id": "1gqgr32sm05k0549",
                                "items": 1,
                                "eta_end_date": "2024-08-23T00:30:59.000Z",
                                "customer": {
                                    "address": "Euskal Echea 196",
                                    "lng": "-58.425817100000000",
                                    "city": "Llavallol",
                                    "phone": "+541136311217",
                                    "commune": "N/A",
                                    "name": "Edgardo Feito",
                                    "id": "1gqgrlq3m05k0548",
                                    "state": "Buenos Aires",
                                    "postal_code": "1836",
                                    "lat": "-34.800462600000000",
                                    "email": "edgardofeito@outlook.com"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T21:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T20:06:30.600Z",
                                "last_status_desc": "Listo para Recoger",
                                "order_nr": 24106809,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T17:25:39.944Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T20:00:01.933Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T20:05:38.202Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T20:05:40.748Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T20:06:30.600Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24447353JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24141867,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.432819,
                                                "created_at": "2024-08-22T20:00:01.933Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.808837,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.4230394,
                                                "created_at": "2024-08-22T20:05:38.202Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8186469,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.4230394,
                                                "created_at": "2024-08-22T20:05:40.748Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8186469,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.423,
                                                "created_at": "2024-08-22T20:06:30.600Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8186118,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24447353JRSA-01_24141867_1724357147258-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24447353JRSA-01_24141867_1724357147258-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"Marcela Medina\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
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
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"invoiceValue\",\"value\":0}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "0"
                                    }
                                ],
                                "external_system_order_id": "v24447353JRSA-01",
                                "route_priority": 2,
                                "id": "1gqgr201pm05k054d",
                                "items": 1,
                                "eta_end_date": "2024-08-23T00:30:59.000Z",
                                "customer": {
                                    "address": "Duhalde 190",
                                    "lng": "-58.434310300000010",
                                    "city": "Llavallol",
                                    "phone": "+5411540735735",
                                    "commune": "N/A",
                                    "name": "Marcela Medina",
                                    "id": "1gqgr1qfqm05k054c",
                                    "state": "Buenos Aires",
                                    "postal_code": "1836",
                                    "lat": "-34.805257700000000",
                                    "email": "marcelamedina20@yahoo.com.ar"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T21:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T20:12:32.829Z",
                                "last_status_desc": "Listo para Recoger",
                                "order_nr": 24106607,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T17:25:39.944Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T20:00:01.933Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T20:06:35.916Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T20:06:38.614Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T20:12:32.829Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24447310JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24141665,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.432819,
                                                "created_at": "2024-08-22T20:00:01.933Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.808837,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.4229916,
                                                "created_at": "2024-08-22T20:06:35.916Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8186133,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.4229939,
                                                "created_at": "2024-08-22T20:06:38.614Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8186274,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.423035,
                                                "created_at": "2024-08-22T20:12:32.829Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8186078,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24447310JRSA-01_24141665_1724357270015-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24447310JRSA-01_24141665_1724357270015-shipping.jpg"
                                            },
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24447310JRSA-01_24141665_1724357265629-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24447310JRSA-01_24141665_1724357265629-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"mercedes monin\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
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
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"invoiceValue\",\"value\":0}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "0"
                                    }
                                ],
                                "external_system_order_id": "v24447310JRSA-01",
                                "route_priority": 3,
                                "id": "1gqgr2169m05k054b",
                                "items": 1,
                                "eta_end_date": "2024-08-23T00:30:59.000Z",
                                "customer": {
                                    "address": "Enrique Policastro 2067",
                                    "lng": "-58.422958100000020",
                                    "city": "Malvinas Argentinas",
                                    "phone": "+541156388128",
                                    "commune": "N/A",
                                    "name": "mercedes monin",
                                    "id": "1gqgr1p16m05k054a",
                                    "state": "Buenos Aires",
                                    "postal_code": "1851",
                                    "lat": "-34.818629400000000",
                                    "email": "serviciosmaster@gmail.com"
                                },
                                "status": "02"
                            }
                        ],
                        "id": "075800b5-5c13-4394-8659-cb90e87c4e40",
                        "eta_end_date": "2024-08-22T20:12:32.829Z",
                        "status": "FINISHED"
                    },
                    "sort": [
                        1724347539944
                    ]
                },
                {
                    "_index": "routes",
                    "_type": "_doc",
                    "_id": "ed5dc2b1-cba9-4933-aa21-e05126d6dddc",
                    "_score": null,
                    "_source": {
                        "eta_date": "2024-08-23T00:30:59.000Z",
                        "status_history": [
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T17:25:30.131Z",
                                "status": "PLANNED"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T19:34:00.808Z",
                                "status": "ASSIGNED"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T19:50:35.311Z",
                                "status": "IN_PROGRESS"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T20:29:01.373Z",
                                "status": "FINISHED"
                            }
                        ],
                        "created_at": "2024-08-22T17:25:30.131Z",
                        "in_progress_at": "2024-08-22T19:50:35.311Z",
                        "traveled_distance": 6.527,
                        "type": "PLANNED",
                        "created_by": "vgmendez",
                        "vehicle": {
                            "licence_plate": "KDT096",
                            "vehicle_type": "PICKUP_TRUCK",
                            "id": 5958
                        },
                        "driver": {
                            "associated_stores": [
                                {
                                    "code": "jumboargentinaj5207quilmes",
                                    "retailChainCode": "JUMBO_AR",
                                    "retailChainName": "Jumbo (Argentina)",
                                    "name": "JUMBO QUILMES",
                                    "id": 871,
                                    "lat": -34.75774084,
                                    "long": -58.27442241
                                },
                                {
                                    "code": "jumboargentinaj5204lomas",
                                    "retailChainCode": "JUMBO_AR",
                                    "retailChainName": "Jumbo (Argentina)",
                                    "name": "JUMBO LOMAS",
                                    "id": 868,
                                    "lat": -34.79239254,
                                    "long": -58.41694458
                                }
                            ],
                            "phone": "+541166541614",
                            "name": "Tiago Fleitas",
                            "id": "95febc90-ffb7-41ae-a024-fcd93768e9fa",
                            "email": "tiagofleitas3100@gmail.com"
                        },
                        "updated_at": "2024-08-22T19:34:00.810Z",
                        "courier": {
                            "name": null,
                            "id": null
                        },
                        "provider": {
                            "name": "Food Delivery",
                            "id": 46
                        },
                        "updated_by": "veronicagabriela.mendez@jumbo.com.ar",
                        "orders": [
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T21:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T19:51:03.110Z",
                                "last_status_desc": "Listo para Recoger",
                                "order_nr": 24093345,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T17:25:30.131Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T19:50:35.311Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T19:50:50.690Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T19:50:55.122Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T19:51:03.110Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24439476JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24128386,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.369033,
                                                "created_at": "2024-08-22T19:50:35.311Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8012864,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.3690499,
                                                "created_at": "2024-08-22T19:50:50.690Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.801305,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.3690499,
                                                "created_at": "2024-08-22T19:50:55.122Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.801305,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.3690633,
                                                "created_at": "2024-08-22T19:51:03.110Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8013183,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24439476JRSA-01_24128386_1724356258904-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24439476JRSA-01_24128386_1724356258904-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"MARIA CECILIA BEVCAR\",\"observation\":\"\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"3 C\"},{\"name\":\"invoiceValue\",\"value\":0}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "0"
                                    }
                                ],
                                "external_system_order_id": "v24439476JRSA-01",
                                "route_priority": 1,
                                "id": "15iqvk1ox5m05jzxjn",
                                "items": 1,
                                "eta_end_date": "2024-08-23T00:30:59.000Z",
                                "customer": {
                                    "address": "DIAGONAL TOLL Y BERNADET J A, 1482",
                                    "lng": "-58.384174898000000",
                                    "city": "Almirante Brown",
                                    "phone": "+541153360304",
                                    "commune": "Adrogue",
                                    "name": "MARIA CECILIA BEVCAR",
                                    "id": "15iqvk22yem05jzxjm",
                                    "state": "Buenos Aires",
                                    "postal_code": "1846",
                                    "lat": "-34.799710204100000",
                                    "email": "cebevcar@yahoo.com.ar"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T21:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T19:51:15.980Z",
                                "last_status_desc": "Notificado",
                                "order_nr": 24111494,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T17:25:30.131Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T19:50:41.534Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T19:51:06.317Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T19:51:09.531Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T19:51:15.980Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24448797JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24146561,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.3690463,
                                                "created_at": "2024-08-22T19:50:41.534Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8012996,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.3690633,
                                                "created_at": "2024-08-22T19:51:06.317Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8013183,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.3690633,
                                                "created_at": "2024-08-22T19:51:09.531Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8013183,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.3690633,
                                                "created_at": "2024-08-22T19:51:15.980Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8013183,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24448797JRSA-01_24146561_1724356273093-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24448797JRSA-01_24146561_1724356273093-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"Sonia Aguilar\",\"observation\":\"\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
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
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"}]"
                                    }
                                ],
                                "external_system_order_id": "v24448797JRSA-01",
                                "route_priority": 2,
                                "id": "15iqvkh8dm05jzxjr",
                                "items": 1,
                                "eta_end_date": "2024-08-23T00:30:59.000Z",
                                "customer": {
                                    "address": "Ferré 1509",
                                    "lng": "-58.365661700000000",
                                    "city": "Rafael Calzada",
                                    "phone": "+541169540672",
                                    "commune": "N/A",
                                    "name": "Sonia Aguilar",
                                    "id": "15iqvk6cm05jzxjq",
                                    "state": "Buenos Aires",
                                    "postal_code": null,
                                    "lat": "-34.796909900000000",
                                    "email": "gibians@hotmail.com"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T21:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T20:29:01.373Z",
                                "last_status_desc": "Listo para Recoger",
                                "order_nr": 24100848,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T17:25:30.131Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T19:50:46.850Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T19:51:19.799Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T20:28:54.526Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T20:29:01.373Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24444135JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24135902,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.36905,
                                                "created_at": "2024-08-22T19:50:46.850Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.801303,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.3690633,
                                                "created_at": "2024-08-22T19:51:19.799Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8013183,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.3690253,
                                                "created_at": "2024-08-22T20:28:54.526Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8013428,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.3690503,
                                                "created_at": "2024-08-22T20:29:01.373Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8012501,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24444135JRSA-01_24135902_1724358537829-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24444135JRSA-01_24135902_1724358537829-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"Christian Vasquez Martinez\",\"observation\":\"\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
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
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"invoiceValue\",\"value\":0}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "0"
                                    }
                                ],
                                "external_system_order_id": "v24444135JRSA-01",
                                "route_priority": 3,
                                "id": "15iqvk8q8m05jzxjp",
                                "items": 1,
                                "eta_end_date": "2024-08-23T00:30:59.000Z",
                                "customer": {
                                    "address": "Centenario de Mayo, 2269",
                                    "lng": "-58.369283000000000",
                                    "city": "Almte Brown",
                                    "phone": "+541135700868",
                                    "commune": "Rafael Calzada",
                                    "name": "Christian Vasquez Martinez",
                                    "id": "15iqvkeszm05jzxjo",
                                    "state": "PROVINCIA DE BUENOS AIRES",
                                    "postal_code": "1847",
                                    "lat": "-34.801190800000000",
                                    "email": "chrivasmar@gmail.com"
                                },
                                "status": "02"
                            }
                        ],
                        "id": "ed5dc2b1-cba9-4933-aa21-e05126d6dddc",
                        "eta_end_date": "2024-08-22T20:29:01.373Z",
                        "status": "FINISHED"
                    },
                    "sort": [
                        1724347530131
                    ]
                },
                {
                    "_index": "routes",
                    "_type": "_doc",
                    "_id": "c10a10fc-7ef6-40cd-b1d0-82f0adfe981e",
                    "_score": null,
                    "_source": {
                        "eta_date": "2024-08-23T00:30:59.000Z",
                        "status_history": [
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T17:25:19.229Z",
                                "status": "PLANNED"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T19:58:15.967Z",
                                "status": "ASSIGNED"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T21:52:06.974Z",
                                "status": "IN_PROGRESS"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T22:47:18.211Z",
                                "status": "FINISHED"
                            }
                        ],
                        "created_at": "2024-08-22T17:25:19.229Z",
                        "in_progress_at": "2024-08-22T21:52:06.974Z",
                        "traveled_distance": 27.320999999999998,
                        "type": "PLANNED",
                        "created_by": "vgmendez",
                        "vehicle": {
                            "licence_plate": "AE286QB",
                            "vehicle_type": "CAR",
                            "id": 17932
                        },
                        "driver": {
                            "associated_stores": [
                                {
                                    "code": "jumboargentinaj5204lomas",
                                    "retailChainCode": "JUMBO_AR",
                                    "retailChainName": "Jumbo (Argentina)",
                                    "name": "JUMBO LOMAS",
                                    "id": 868,
                                    "lat": -34.79239254,
                                    "long": -58.41694458
                                }
                            ],
                            "phone": "+541166933181",
                            "name": "MARIANO SOCODOBER",
                            "id": "8d6f8abf-356a-413d-b5d6-1257cd5c42ad",
                            "email": "mariano.socodober980@gmail.com"
                        },
                        "updated_at": "2024-08-22T20:42:58.826Z",
                        "courier": {
                            "name": null,
                            "id": null
                        },
                        "provider": {
                            "name": "Cencosud",
                            "id": 38
                        },
                        "updated_by": "veronicagabriela.mendez@jumbo.com.ar",
                        "orders": [
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T21:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T21:53:50.595Z",
                                "last_status_desc": "Listo para Recoger",
                                "order_nr": 24074861,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T17:25:19.228Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T21:52:06.974Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T21:53:12.489Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T21:53:17.664Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T21:53:50.595Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24428649JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24109871,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.38418,
                                                "created_at": "2024-08-22T21:52:06.974Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8930533,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.38418,
                                                "created_at": "2024-08-22T21:53:12.489Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8930533,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.38418,
                                                "created_at": "2024-08-22T21:53:17.664Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8930533,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.38418,
                                                "created_at": "2024-08-22T21:53:50.595Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8930533,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24428649JRSA-01_24109871_1724363618462-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24428649JRSA-01_24109871_1724363618462-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"Nicolas tkach\",\"observation\":\"\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
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
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"Comentarios del usuario\",\"value\":\"Observaciones: entre santo domingo y juan 23\"},{\"name\":\"invoiceValue\",\"value\":0}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "0"
                                    }
                                ],
                                "external_system_order_id": "v24428649JRSA-01",
                                "route_priority": 1,
                                "id": "15iqvklpum05jzp4v",
                                "items": 1,
                                "eta_end_date": "2024-08-23T00:30:59.000Z",
                                "customer": {
                                    "address": "Marcos Tiglio, 1342",
                                    "lng": "-58.398142500000000",
                                    "city": "Almte Brown",
                                    "phone": "+541140351644",
                                    "commune": "Burzaco",
                                    "name": "Nicolas tkach",
                                    "id": "15iqvk1i0am05jzp4u",
                                    "state": "PROVINCIA DE BUENOS AIRES",
                                    "postal_code": "1852",
                                    "lat": "-34.822114600000000",
                                    "email": "nicolasstkach@gmail.com"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T21:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T21:54:39.196Z",
                                "last_status_desc": "Listo para Recoger",
                                "order_nr": 24064084,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T17:25:19.228Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T21:52:22.658Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T21:53:59.129Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T21:54:02.291Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T21:54:39.196Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24425633JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24099078,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.38418,
                                                "created_at": "2024-08-22T21:52:22.658Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8930533,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.38418,
                                                "created_at": "2024-08-22T21:53:59.129Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8930533,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.38418,
                                                "created_at": "2024-08-22T21:54:02.291Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8930533,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.38418,
                                                "created_at": "2024-08-22T21:54:39.196Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8930533,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24425633JRSA-01_24099078_1724363667362-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24425633JRSA-01_24099078_1724363667362-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"Eduardo Emilio capparelli\",\"observation\":\"\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
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
                                        "name": "invoiceValue",
                                        "value": "0"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"invoiceValue\",\"value\":0}]"
                                    }
                                ],
                                "external_system_order_id": "v24425633JRSA-01",
                                "route_priority": 2,
                                "id": "15iqvk1e4zm05jzp4t",
                                "items": 1,
                                "eta_end_date": "2024-08-23T00:30:59.000Z",
                                "customer": {
                                    "address": "Alcorta, 1350",
                                    "lng": "-58.382786900000000",
                                    "city": "Almte Brown",
                                    "phone": "+541132587977",
                                    "commune": "Burzaco",
                                    "name": "Eduardo Emilio capparelli",
                                    "id": "15iqvk19crm05jzp4s",
                                    "state": "PROVINCIA DE BUENOS AIRES",
                                    "postal_code": "1852",
                                    "lat": "-34.827253900000000",
                                    "email": "eduardocapparelli@hotmail.com"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T21:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T22:45:27.382Z",
                                "last_status_desc": "Notificado",
                                "order_nr": 24113195,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T17:25:19.228Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T21:52:36.249Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T21:54:47.933Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T22:44:19.397Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T22:45:27.382Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24449234JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24148262,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.38418,
                                                "created_at": "2024-08-22T21:52:36.249Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8930533,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.38418,
                                                "created_at": "2024-08-22T21:54:47.933Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8930533,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.4784416,
                                                "created_at": "2024-08-22T22:44:19.397Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.9143268,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.4802993,
                                                "created_at": "2024-08-22T22:45:27.382Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.9138898,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24449234JRSA-01_24148262_1724366709353-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24449234JRSA-01_24148262_1724366709353-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"MIGUEL LUCAS MAURIZI\",\"observation\":\"\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"Envío a Domicilio\"}]"
                                    }
                                ],
                                "external_system_order_id": "v24449234JRSA-01",
                                "route_priority": 3,
                                "id": "15iqvkjam05jzp4z",
                                "items": 1,
                                "eta_end_date": "2024-08-23T00:30:59.000Z",
                                "customer": {
                                    "address": "A. Tornquist 1351",
                                    "lng": "-58.383757700000000",
                                    "city": "Almte Brown",
                                    "phone": "+541134074368",
                                    "commune": "Longchamps",
                                    "name": "MIGUEL LUCAS MAURIZI",
                                    "id": "15iqvk1gpbm05jzp4y",
                                    "state": "PROVINCIA DE BUENOS AIRES",
                                    "postal_code": "1854",
                                    "lat": "-34.862814800000000",
                                    "email": "miguel.maurizi@usal.edu.ar"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T21:00:00.000Z",
                                "last_status_code": "01",
                                "sub_status": null,
                                "finished_at": "2024-08-22T22:46:23.317Z",
                                "order_nr": 24120033,
                                "destination": null,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T20:42:58.826Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T21:52:49.460Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T22:45:36.659Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T22:45:39.783Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T22:46:23.317Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "jart-N-24441365-01",
                                        "status_code": "02",
                                        "pack_id": 24155107,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.38418,
                                                "created_at": "2024-08-22T21:52:49.460Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8930533,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.4804327,
                                                "created_at": "2024-08-22T22:45:36.659Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.913935,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.4804327,
                                                "created_at": "2024-08-22T22:45:39.783Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.913935,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.4798346,
                                                "created_at": "2024-08-22T22:46:23.317Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.9151639,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/jart-N-24441365-01_24155107_1724366760984-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "jart-N-24441365-01_24155107_1724366760984-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"delia rodriguez\",\"observation\":\"\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [],
                                "external_system_order_id": "jart-N-24441365-01",
                                "route_priority": 4,
                                "id": "15iqvk12y2m05r1vvz",
                                "items": 1,
                                "eta_end_date": "2024-08-22T23:00:00.000Z",
                                "status": "02",
                                "customer": {
                                    "address": "Raúl Soldi 570 null",
                                    "lng": "-58.384007399999990",
                                    "city": "B1856 Glew",
                                    "phone": "+541158915265",
                                    "commune": "B1856 Glew",
                                    "name": "delia rodriguez",
                                    "id": "15iqvk23q9m05r1vvy",
                                    "state": "Llavallol",
                                    "postal_code": null,
                                    "lat": "-34.892999500000000",
                                    "email": "delibel@hotmail.com"
                                }
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T21:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T22:47:18.211Z",
                                "last_status_desc": "Listo para Recoger",
                                "order_nr": 24106603,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T17:25:19.228Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T21:53:04.444Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T22:46:34.189Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T22:46:42.335Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T22:47:18.211Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24447294JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24141661,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.38418,
                                                "created_at": "2024-08-22T21:53:04.444Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8930533,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.4796827,
                                                "created_at": "2024-08-22T22:46:34.189Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.9154862,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.4796827,
                                                "created_at": "2024-08-22T22:46:42.335Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.9154862,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.4794672,
                                                "created_at": "2024-08-22T22:47:18.211Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.9170474,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24447294JRSA-01_24141661_1724366811475-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24447294JRSA-01_24141661_1724366811475-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"Marilina Bolañez\",\"observation\":\"\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"Envío a Domicilio\"},{\"name\":\"invoiceValue\",\"value\":0}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "0"
                                    }
                                ],
                                "external_system_order_id": "v24447294JRSA-01",
                                "route_priority": 5,
                                "id": "15iqvk14lcm05jzp4x",
                                "items": 1,
                                "eta_end_date": "2024-08-23T00:30:59.000Z",
                                "customer": {
                                    "address": "Cáceres 0, Lote Barrio: 445",
                                    "lng": "-58.479624800000000",
                                    "city": "Pres. Perón",
                                    "phone": "+541168831564",
                                    "commune": "La Magdalena Barrio Privado",
                                    "name": "Marilina Bolañez",
                                    "id": "15iqvkj6nm05jzp4w",
                                    "state": "PROVINCIA DE BUENOS AIRES",
                                    "postal_code": "1804",
                                    "lat": "-34.919529700000010",
                                    "email": "marilinab.makeup@gmail.com"
                                },
                                "status": "02"
                            }
                        ],
                        "id": "c10a10fc-7ef6-40cd-b1d0-82f0adfe981e",
                        "eta_end_date": "2024-08-22T22:47:18.211Z",
                        "status": "FINISHED"
                    },
                    "sort": [
                        1724347519229
                    ]
                },
                {
                    "_index": "routes",
                    "_type": "_doc",
                    "_id": "417ad4fc-06e5-4f71-bb0c-952d101eb257",
                    "_score": null,
                    "_source": {
                        "eta_date": "2024-08-22T21:00:59.000Z",
                        "status_history": [
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T14:10:18.614Z",
                                "status": "PLANNED"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T17:47:13.951Z",
                                "status": "ASSIGNED"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T17:54:56.830Z",
                                "status": "IN_PROGRESS"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T18:38:36.803Z",
                                "status": "FINISHED"
                            }
                        ],
                        "created_at": "2024-08-22T14:10:18.614Z",
                        "in_progress_at": "2024-08-22T17:54:56.830Z",
                        "traveled_distance": 10.239,
                        "type": "PLANNED",
                        "created_by": "sacampos",
                        "vehicle": {
                            "licence_plate": "AC854XS",
                            "vehicle_type": "CAR",
                            "id": 373
                        },
                        "driver": {
                            "associated_stores": [
                                {
                                    "code": "jumboargentinaj5204lomas",
                                    "retailChainCode": "JUMBO_AR",
                                    "retailChainName": "Jumbo (Argentina)",
                                    "name": "JUMBO LOMAS",
                                    "id": 868,
                                    "lat": -34.79239254,
                                    "long": -58.41694458
                                }
                            ],
                            "phone": "1123029224",
                            "name": "Francisco Alvarez",
                            "id": "00f05cb5-688d-4c98-9b60-62215587687d",
                            "email": "franciscoalvarez108@gmail.com"
                        },
                        "updated_at": "2024-08-22T17:47:13.954Z",
                        "courier": {
                            "name": null,
                            "id": null
                        },
                        "provider": null,
                        "updated_by": "veronicagabriela.mendez@jumbo.com.ar",
                        "orders": [
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T17:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T18:03:46.742Z",
                                "last_status_desc": "Notificado",
                                "order_nr": 24101523,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T14:10:18.614Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T17:54:56.829Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T17:55:03.758Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T18:03:35.383Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T18:03:46.742Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24445025JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24136577,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.4165004,
                                                "created_at": "2024-08-22T17:54:56.829Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7937178,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.4173245,
                                                "created_at": "2024-08-22T17:55:03.758Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7942119,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.4290055,
                                                "created_at": "2024-08-22T18:03:35.383Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8111857,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.4291083,
                                                "created_at": "2024-08-22T18:03:46.742Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8112217,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24445025JRSA-01_24136577_1724349819427-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24445025JRSA-01_24136577_1724349819427-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"Melinda Hernandez\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
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
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"}]"
                                    }
                                ],
                                "external_system_order_id": "v24445025JRSA-01",
                                "route_priority": 1,
                                "id": "1gqgr1sslm05d0wvx",
                                "items": 1,
                                "eta_end_date": "2024-08-22T21:00:59.000Z",
                                "customer": {
                                    "address": "Ucrania 798, Esquina Mercedes",
                                    "lng": "-58.429262800000000",
                                    "city": "Llavallol",
                                    "phone": "+541164958169",
                                    "commune": "N/A",
                                    "name": "Melinda Hernandez",
                                    "id": "1gqgrbqxm05d0wvw",
                                    "state": "Buenos Aires",
                                    "postal_code": "0000",
                                    "lat": "-34.811103800000000",
                                    "email": "melindahernandezrp@gmail.com"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T17:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T18:13:19.221Z",
                                "last_status_desc": "Notificado",
                                "order_nr": 24092298,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T14:10:18.614Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T17:54:56.829Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T18:06:36.665Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T18:09:32.788Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T18:13:19.221Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24439021JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24127338,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.4165004,
                                                "created_at": "2024-08-22T17:54:56.829Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7937178,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.4299313,
                                                "created_at": "2024-08-22T18:06:36.665Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8116578,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.4275608,
                                                "created_at": "2024-08-22T18:09:32.788Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8182817,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.427246,
                                                "created_at": "2024-08-22T18:13:19.221Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8199136,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24439021JRSA-01_24127338_1724350179963-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24439021JRSA-01_24127338_1724350179963-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"monica pombo\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"entre carmona y moreno\"}]"
                                    }
                                ],
                                "external_system_order_id": "v24439021JRSA-01",
                                "route_priority": 2,
                                "id": "1gqgru4bm05d0wvt",
                                "items": 1,
                                "eta_end_date": "2024-08-22T21:00:59.000Z",
                                "customer": {
                                    "address": "Portugal, 2324",
                                    "lng": "-58.427599400000010",
                                    "city": "Malvinas Argentinas",
                                    "phone": "+541133992006",
                                    "commune": "N/A",
                                    "name": "monica pombo",
                                    "id": "1gqgr18wm05d0wvs",
                                    "state": "Buenos Aires",
                                    "postal_code": "1846",
                                    "lat": "-34.818207699999990",
                                    "email": "cjw824@gmail.com"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T17:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T18:17:24.523Z",
                                "last_status_desc": "Notificado",
                                "order_nr": 24096335,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T14:10:18.614Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T17:54:56.830Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T18:13:25.069Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T18:16:38.455Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T18:17:24.523Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24440592JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24131383,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.4165004,
                                                "created_at": "2024-08-22T17:54:56.830Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7937178,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.4266298,
                                                "created_at": "2024-08-22T18:13:25.069Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8195969,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.41994,
                                                "created_at": "2024-08-22T18:16:38.455Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.82189,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.4199783,
                                                "created_at": "2024-08-22T18:17:24.523Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.82187,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24440592JRSA-01_24131383_1724350626052-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24440592JRSA-01_24131383_1724350626052-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"Erica Betiana Martínez\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
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
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"}]"
                                    }
                                ],
                                "external_system_order_id": "v24440592JRSA-01",
                                "route_priority": 3,
                                "id": "1gqgrfpxm05d0wvv",
                                "items": 1,
                                "eta_end_date": "2024-08-22T21:00:59.000Z",
                                "customer": {
                                    "address": "Florida, 585",
                                    "lng": "-58.419838500000000",
                                    "city": "Almte Brown",
                                    "phone": "+541162520533",
                                    "commune": "Malvinas Argentinas",
                                    "name": "Erica Betiana Martínez",
                                    "id": "1gqgrmv4m05d0wvu",
                                    "state": "PROVINCIA DE BUENOS AIRES",
                                    "postal_code": null,
                                    "lat": "-34.821613300000000",
                                    "email": "betianacarteras@outlook.com.ar"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T17:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T18:38:36.803Z",
                                "last_status_desc": "Listo para Recoger",
                                "order_nr": 24064861,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T14:10:18.614Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T17:54:56.830Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T18:21:54.937Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T18:35:47.565Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T18:38:36.803Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24425778JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24099855,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.4165004,
                                                "created_at": "2024-08-22T17:54:56.830Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7937178,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.4201267,
                                                "created_at": "2024-08-22T18:21:54.937Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8217217,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.3931708,
                                                "created_at": "2024-08-22T18:35:47.565Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8027835,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.3932415,
                                                "created_at": "2024-08-22T18:38:36.803Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8028292,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24425778JRSA-01_24099855_1724351757784-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24425778JRSA-01_24099855_1724351757784-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"Rosario Lopez\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "invoiceValue",
                                        "value": "0"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"invoiceValue\",\"value\":0}]"
                                    }
                                ],
                                "external_system_order_id": "v24425778JRSA-01",
                                "route_priority": 4,
                                "id": "1gqgr1ozcm05d0wvr",
                                "items": 1,
                                "eta_end_date": "2024-08-22T21:00:00.000Z",
                                "customer": {
                                    "address": "Pres Uriburu, 890",
                                    "lng": "-58.393577576000000",
                                    "city": "Almte Brown",
                                    "phone": "+541128674159",
                                    "commune": "Adrogue",
                                    "name": "Rosario Lopez",
                                    "id": "1gqgr196km05d0wvq",
                                    "state": "PROVINCIA DE BUENOS AIRES",
                                    "postal_code": "0000",
                                    "lat": "-34.802257538000000",
                                    "email": "rosario.lopezspada@icloud.com"
                                },
                                "status": "02"
                            }
                        ],
                        "id": "417ad4fc-06e5-4f71-bb0c-952d101eb257",
                        "eta_end_date": "2024-08-22T18:38:36.803Z",
                        "status": "FINISHED"
                    },
                    "sort": [
                        1724335818614
                    ]
                },
                {
                    "_index": "routes",
                    "_type": "_doc",
                    "_id": "56320213-fc0c-4523-99b7-50c63fb70f67",
                    "_score": null,
                    "_source": {
                        "eta_date": "2024-08-22T21:00:59.000Z",
                        "status_history": [
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T14:10:15.766Z",
                                "status": "PLANNED"
                            }
                        ],
                        "created_at": "2024-08-22T14:10:15.766Z",
                        "type": "PLANNED",
                        "created_by": "sacampos",
                        "vehicle": null,
                        "driver": null,
                        "updated_at": "2024-08-22T14:10:15.766Z",
                        "courier": {
                            "name": null,
                            "id": null
                        },
                        "updated_by": "Veronica Gabriela Mendez",
                        "orders": [
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T17:00:00.000Z",
                                "last_status_code": "9003",
                                "finished_at": null,
                                "last_status_desc": "Notificado",
                                "order_nr": 24103459,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T14:10:15.766Z",
                                        "status": "08"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24445881JRSA-01",
                                        "status_code": "08",
                                        "pack_id": 24138513,
                                        "sub_status_code": "9003"
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
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
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"}]"
                                    }
                                ],
                                "external_system_order_id": "v24445881JRSA-01",
                                "route_priority": 1,
                                "id": "1gqgr237im05d0uon",
                                "items": 1,
                                "eta_end_date": "2024-08-22T21:00:59.000Z",
                                "customer": {
                                    "address": "Manuelita Rosas 1350, Entre Peña y Gallo",
                                    "lng": "-58.376322599999990",
                                    "city": "Banfield",
                                    "phone": "+541142485020",
                                    "commune": "N/A",
                                    "name": "Oscar Luis De Volder",
                                    "id": "1gqgr1dmem05d0uom",
                                    "state": "Buenos Aires",
                                    "postal_code": null,
                                    "lat": "-34.745023300000010",
                                    "email": "oscardevolder@fibertel.com.ar"
                                },
                                "status": "08"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T17:00:00.000Z",
                                "last_status_code": "9003",
                                "finished_at": null,
                                "last_status_desc": "Listo para Recoger",
                                "order_nr": 24104203,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T14:10:15.766Z",
                                        "status": "08"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24446205JRSA-01",
                                        "status_code": "08",
                                        "pack_id": 24139257,
                                        "sub_status_code": "9003"
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
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
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"invoiceValue\",\"value\":0}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "0"
                                    }
                                ],
                                "external_system_order_id": "v24446205JRSA-01",
                                "route_priority": 2,
                                "id": "1gqgrb32m05d0uop",
                                "items": 1,
                                "eta_end_date": "2024-08-22T21:00:59.000Z",
                                "customer": {
                                    "address": "Túnez 1815",
                                    "lng": "-58.373307100000020",
                                    "city": "Banfield",
                                    "phone": "+541157190723",
                                    "commune": "N/A",
                                    "name": "Juan Sartini",
                                    "id": "1gqgr4rwm05d0uoo",
                                    "state": "Buenos Aires",
                                    "postal_code": "1828",
                                    "lat": "-34.743579000000000",
                                    "email": "juansartini04@gmail.com"
                                },
                                "status": "08"
                            }
                        ],
                        "id": "56320213-fc0c-4523-99b7-50c63fb70f67",
                        "eta_end_date": null,
                        "status": "PLANNED"
                    },
                    "sort": [
                        1724335815766
                    ]
                },
                {
                    "_index": "routes",
                    "_type": "_doc",
                    "_id": "4fe14dc0-96ea-4fa5-b22b-01180eeab73a",
                    "_score": null,
                    "_source": {
                        "eta_date": "2024-08-22T21:00:59.000Z",
                        "status_history": [
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T14:10:13.561Z",
                                "status": "PLANNED"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T17:14:40.477Z",
                                "status": "ASSIGNED"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T17:44:37.742Z",
                                "status": "IN_PROGRESS"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T18:24:54.256Z",
                                "status": "FINISHED"
                            }
                        ],
                        "created_at": "2024-08-22T14:10:13.561Z",
                        "in_progress_at": "2024-08-22T17:44:37.742Z",
                        "traveled_distance": 14.187,
                        "type": "PLANNED",
                        "created_by": "sacampos",
                        "vehicle": {
                            "licence_plate": "AE286QB",
                            "vehicle_type": "CAR",
                            "id": 17932
                        },
                        "driver": {
                            "associated_stores": [
                                {
                                    "code": "jumboargentinaj5204lomas",
                                    "retailChainCode": "JUMBO_AR",
                                    "retailChainName": "Jumbo (Argentina)",
                                    "name": "JUMBO LOMAS",
                                    "id": 868,
                                    "lat": -34.79239254,
                                    "long": -58.41694458
                                }
                            ],
                            "phone": "+541166933181",
                            "name": "MARIANO SOCODOBER",
                            "id": "8d6f8abf-356a-413d-b5d6-1257cd5c42ad",
                            "email": "mariano.socodober980@gmail.com"
                        },
                        "updated_at": "2024-08-22T17:14:40.480Z",
                        "courier": {
                            "name": null,
                            "id": null
                        },
                        "provider": {
                            "name": "Cencosud",
                            "id": 38
                        },
                        "updated_by": "veronicagabriela.mendez@jumbo.com.ar",
                        "orders": [
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T17:00:00.000Z",
                                "last_status_code": "01",
                                "sub_status": null,
                                "finished_at": "2024-08-22T17:47:40.867Z",
                                "order_nr": 24112420,
                                "destination": null,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T16:52:11.617Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T17:44:37.742Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T17:46:35.266Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T17:46:39.195Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T17:47:40.867Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "jart-F-24435606-01",
                                        "status_code": "02",
                                        "pack_id": 24147487,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.428454,
                                                "created_at": "2024-08-22T17:44:37.742Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7816978,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.4361044,
                                                "created_at": "2024-08-22T17:46:35.266Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7865136,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.4361044,
                                                "created_at": "2024-08-22T17:46:39.195Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7865136,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.4395623,
                                                "created_at": "2024-08-22T17:47:40.867Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7895702,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/jart-F-24435606-01_24147487_1724348835890-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "jart-F-24435606-01_24147487_1724348835890-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"paula gimena cañoto\",\"observation\":\"\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [],
                                "external_system_order_id": "jart-F-24435606-01",
                                "route_priority": 1,
                                "id": "15iqvk1111m05it3aj",
                                "items": 1,
                                "eta_end_date": "2024-08-22T19:00:00.000Z",
                                "status": "02",
                                "customer": {
                                    "address": "Doyhenard 354 null",
                                    "lng": "-58.424929400000000",
                                    "city": "B1836 Llavallol",
                                    "phone": "+541133258511",
                                    "commune": "B1836 Llavallol",
                                    "name": "paula gimena cañoto",
                                    "id": "15iqvkm1cm05it3ai",
                                    "state": "Llavallol",
                                    "postal_code": null,
                                    "lat": "-34.799517800000000",
                                    "email": "paulacanoto@hotmail.com"
                                }
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T17:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T18:12:56.411Z",
                                "last_status_desc": "Listo para Recoger",
                                "order_nr": 24084928,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T14:10:13.561Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T17:45:01.077Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T18:11:51.432Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T18:12:35.314Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T18:12:56.411Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24435567JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24119951,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.4281023,
                                                "created_at": "2024-08-22T17:45:01.077Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7830034,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.4845494,
                                                "created_at": "2024-08-22T18:11:51.432Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8252285,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.4847097,
                                                "created_at": "2024-08-22T18:12:35.314Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8247846,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.4827736,
                                                "created_at": "2024-08-22T18:12:56.411Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8236806,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24435567JRSA-01_24119951_1724350363791-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24435567JRSA-01_24119951_1724350363791-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"MICAELA Martinelli\",\"observation\":\"\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
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
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"invoiceValue\",\"value\":0}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "0"
                                    }
                                ],
                                "external_system_order_id": "v24435567JRSA-01",
                                "route_priority": 2,
                                "id": "1gqgrdfnm05d0szj",
                                "items": 1,
                                "eta_end_date": "2024-08-22T21:00:59.000Z",
                                "customer": {
                                    "address": "Mariano Acosta, 1348",
                                    "lng": "-58.484477800000000",
                                    "city": "Esteban Echeverría",
                                    "phone": "+541136226943",
                                    "commune": "El Jagüel",
                                    "name": "MICAELA Martinelli",
                                    "id": "1gqgrssdm05d0szi",
                                    "state": "Buenos Aires",
                                    "postal_code": "1805",
                                    "lat": "-34.826447400000000",
                                    "email": "micaelamartinelli5@gmail.com"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T17:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T18:14:14.769Z",
                                "last_status_desc": "Listo para Recoger",
                                "order_nr": 24082378,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T14:10:13.561Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T17:45:17.954Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T18:13:20.071Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T18:13:37.308Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T18:14:14.769Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24434149JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24117399,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.4303305,
                                                "created_at": "2024-08-22T17:45:17.954Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7838582,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.4819626,
                                                "created_at": "2024-08-22T18:13:20.071Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8241763,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.4819626,
                                                "created_at": "2024-08-22T18:13:37.308Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8241763,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.4781987,
                                                "created_at": "2024-08-22T18:14:14.769Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8244156,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24434149JRSA-01_24117399_1724350434661-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24434149JRSA-01_24117399_1724350434661-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"MICAELA Martinelli\",\"observation\":\"\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
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
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"invoiceValue\",\"value\":0}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "0"
                                    }
                                ],
                                "external_system_order_id": "v24434149JRSA-01",
                                "route_priority": 3,
                                "id": "1gqgr1sdom05d0szh",
                                "items": 1,
                                "eta_end_date": "2024-08-22T21:00:59.000Z",
                                "customer": {
                                    "address": "Mariano Acosta, 1348",
                                    "lng": "-58.484477800000000",
                                    "city": "Esteban Echeverría",
                                    "phone": "+541136226943",
                                    "commune": "El Jagüel",
                                    "name": "MICAELA Martinelli",
                                    "id": "1gqgr2bjm05d0szg",
                                    "state": "Buenos Aires",
                                    "postal_code": "1805",
                                    "lat": "-34.826447400000000",
                                    "email": "micaelamartinelli5@gmail.com"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T17:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T18:22:32.234Z",
                                "last_status_desc": "Listo para Recoger",
                                "order_nr": 23990676,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T14:10:13.561Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T17:45:39.661Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T18:22:01.056Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T18:22:12.074Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T18:22:32.234Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24400025JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24025575,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.4324625,
                                                "created_at": "2024-08-22T17:45:39.661Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7846743,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.4773907,
                                                "created_at": "2024-08-22T18:22:01.056Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8239792,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.4773907,
                                                "created_at": "2024-08-22T18:22:12.074Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8239792,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.4715909,
                                                "created_at": "2024-08-22T18:22:32.234Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.804564,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24400025JRSA-01_24025575_1724350938583-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24400025JRSA-01_24025575_1724350938583-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"STELLA VALENTINI\",\"observation\":\"\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "invoiceValue",
                                        "value": "0"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"invoiceValue\",\"value\":0}]"
                                    }
                                ],
                                "external_system_order_id": "v24400025JRSA-01",
                                "route_priority": 4,
                                "id": "1gqgr1kg7m05d0szd",
                                "items": 1,
                                "eta_end_date": "2024-08-22T21:00:59.000Z",
                                "customer": {
                                    "address": "E Perez Iglesias, 345",
                                    "lng": "-58.471298218000000",
                                    "city": "ESTEBAN ECHEVERRIA",
                                    "phone": "+541122092439",
                                    "commune": "MONTE GRANDE",
                                    "name": "STELLA VALENTINI",
                                    "id": "1gqgrb0pm05d0szc",
                                    "state": "Buenos Aires",
                                    "postal_code": "1842",
                                    "lat": "-34.804489136000000",
                                    "email": "stelliavalentini@hotmail.com"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T17:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T18:23:30.135Z",
                                "last_status_desc": "Notificado",
                                "order_nr": 23991367,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T14:10:13.561Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T17:46:04.119Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T18:22:42.944Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T18:23:06.774Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T18:23:30.135Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24400162JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24026266,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.4338696,
                                                "created_at": "2024-08-22T17:46:04.119Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7853751,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.4716042,
                                                "created_at": "2024-08-22T18:22:42.944Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8045619,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.4712179,
                                                "created_at": "2024-08-22T18:23:06.774Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8043914,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.4716859,
                                                "created_at": "2024-08-22T18:23:30.135Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8028924,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24400162JRSA-01_24026266_1724350992489-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24400162JRSA-01_24026266_1724350992489-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"STELLA VALENTINI\",\"observation\":\"\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [],
                                "external_system_order_id": "v24400162JRSA-01",
                                "route_priority": 5,
                                "id": "1gqgr63fm05d0szf",
                                "items": 1,
                                "eta_end_date": "2024-08-22T21:00:59.000Z",
                                "customer": {
                                    "address": "E Perez Iglesias, 345",
                                    "lng": "-58.471298218000000",
                                    "city": "ESTEBAN ECHEVERRIA",
                                    "phone": "+541122092439",
                                    "commune": "MONTE GRANDE",
                                    "name": "STELLA VALENTINI",
                                    "id": "1gqgr1g7wm05d0sze",
                                    "state": "Buenos Aires",
                                    "postal_code": "1842",
                                    "lat": "-34.804489136000000",
                                    "email": "stelliavalentini@hotmail.com"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T17:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T18:24:54.256Z",
                                "last_status_desc": "Notificado",
                                "order_nr": 24103503,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T14:10:13.561Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T17:46:23.841Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T18:23:42.635Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T18:23:46.480Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T18:24:54.256Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24445924JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24138557,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.4352849,
                                                "created_at": "2024-08-22T17:46:23.841Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7860865,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.4722196,
                                                "created_at": "2024-08-22T18:23:42.635Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8021951,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.4722196,
                                                "created_at": "2024-08-22T18:23:46.480Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8021951,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.470715,
                                                "created_at": "2024-08-22T18:24:54.256Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.79986,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24445924JRSA-01_24138557_1724351059978-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24445924JRSA-01_24138557_1724351059978-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"PATRICIA FANTACONE\",\"observation\":\"\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
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
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"}]"
                                    }
                                ],
                                "external_system_order_id": "v24445924JRSA-01",
                                "route_priority": 6,
                                "id": "1gqgr1o7om05d0szl",
                                "items": 1,
                                "eta_end_date": "2024-08-22T21:00:59.000Z",
                                "customer": {
                                    "address": "SANTA FILOMENA 495",
                                    "lng": "-58.436007200000000",
                                    "city": "Lomas de Zamora",
                                    "phone": "+541159204915",
                                    "commune": "Lomas de Zamora",
                                    "name": "PATRICIA FANTACONE",
                                    "id": "1gqgr4z7m05d0szk",
                                    "state": "Buenos Aires",
                                    "postal_code": "1832",
                                    "lat": "-34.773764000000000",
                                    "email": "patriciaifa@gmail.com"
                                },
                                "status": "02"
                            }
                        ],
                        "id": "4fe14dc0-96ea-4fa5-b22b-01180eeab73a",
                        "eta_end_date": "2024-08-22T18:24:54.256Z",
                        "status": "FINISHED"
                    },
                    "sort": [
                        1724335813561
                    ]
                },
                {
                    "_index": "routes",
                    "_type": "_doc",
                    "_id": "70931aea-2343-4953-a3af-8aea8f3d6929",
                    "_score": null,
                    "_source": {
                        "eta_date": "2024-08-22T17:00:59.000Z",
                        "status_history": [
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T09:56:38.092Z",
                                "status": "PLANNED"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T15:10:06.499Z",
                                "status": "ASSIGNED"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T15:24:51.357Z",
                                "status": "IN_PROGRESS"
                            },
                            {
                                "offline": 0,
                                "created_at": "2024-08-22T16:15:56.594Z",
                                "status": "FINISHED"
                            }
                        ],
                        "created_at": "2024-08-22T09:56:38.092Z",
                        "in_progress_at": "2024-08-22T15:24:51.357Z",
                        "traveled_distance": 12.642,
                        "type": "PLANNED",
                        "created_by": "dscallie",
                        "vehicle": {
                            "licence_plate": "AE286QB",
                            "vehicle_type": "CAR",
                            "id": 17932
                        },
                        "driver": {
                            "associated_stores": [
                                {
                                    "code": "jumboargentinaj5204lomas",
                                    "retailChainCode": "JUMBO_AR",
                                    "retailChainName": "Jumbo (Argentina)",
                                    "name": "JUMBO LOMAS",
                                    "id": 868,
                                    "lat": -34.79239254,
                                    "long": -58.41694458
                                }
                            ],
                            "phone": "+541166933181",
                            "name": "MARIANO SOCODOBER",
                            "id": "8d6f8abf-356a-413d-b5d6-1257cd5c42ad",
                            "email": "mariano.socodober980@gmail.com"
                        },
                        "updated_at": "2024-08-22T15:10:06.502Z",
                        "courier": {
                            "name": null,
                            "id": null
                        },
                        "provider": {
                            "name": "Cencosud",
                            "id": 38
                        },
                        "updated_by": "samanta.campos@jumbo.com.ar",
                        "orders": [
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T13:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T15:29:06.483Z",
                                "last_status_desc": "Notificado",
                                "order_nr": 24092684,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T09:56:38.092Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T15:24:51.357Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T15:27:41.262Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T15:27:45.361Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T15:29:06.483Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24439196JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24127724,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.3889414,
                                                "created_at": "2024-08-22T15:24:51.357Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7735829,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.3795699,
                                                "created_at": "2024-08-22T15:27:41.262Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7716142,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.3795699,
                                                "created_at": "2024-08-22T15:27:45.361Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7716142,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.3781372,
                                                "created_at": "2024-08-22T15:29:06.483Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7733698,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24439196JRSA-01_24127724_1724340512778-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24439196JRSA-01_24127724_1724340512778-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"MONICA LILIAN PEREZ\",\"observation\":\"\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
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
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"Comentarios del usuario\",\"value\":\"#46b81fd9e77e920bfd4c1ca995c435628dcd8faf1c53993947a054dbabd344ff06b66cba4c1e46f153d9c652566b6dab94101605cf699e231022bf5a4e1ce4da4818a6e31af61ad9ab2fea7e1e225c5c58dd11b9d1375b148960670fa6b8680912a265eb0adbb77786954c37f07ac33a1d262506884662ddb5aa4a4b0ddb1e\"}]"
                                    }
                                ],
                                "external_system_order_id": "v24439196JRSA-01",
                                "route_priority": 1,
                                "id": "1gqgrmlhm053yonr",
                                "items": 1,
                                "eta_end_date": "2024-08-22T17:00:59.000Z",
                                "customer": {
                                    "address": "San Benito, 495",
                                    "lng": "-58.413743800000010",
                                    "city": "Lomas de Zamora",
                                    "phone": "+541167430942",
                                    "commune": "Turdera",
                                    "name": "MONICA LILIAN PEREZ",
                                    "id": "1gqgr2pym053yonq",
                                    "state": "Buenos Aires",
                                    "postal_code": null,
                                    "lat": "-34.792163300000000",
                                    "email": "lilianperez89@hotmail.com"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T13:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T15:30:20.121Z",
                                "last_status_desc": "Notificado",
                                "order_nr": 24037406,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T09:56:38.092Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T15:25:19.019Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T15:29:32.614Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T15:29:40.274Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T15:30:20.121Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24417905JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24072352,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.3880349,
                                                "created_at": "2024-08-22T15:25:19.019Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7748446,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.3776693,
                                                "created_at": "2024-08-22T15:29:32.614Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7739686,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.3776693,
                                                "created_at": "2024-08-22T15:29:40.274Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7739686,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.3768354,
                                                "created_at": "2024-08-22T15:30:20.121Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7780338,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24417905JRSA-01_24072352_1724340601809-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24417905JRSA-01_24072352_1724340601809-shipping.jpg"
                                            },
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24417905JRSA-01_24072352_1724340599631-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24417905JRSA-01_24072352_1724340599631-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"gerard cockshott\",\"observation\":\"\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [],
                                "external_system_order_id": "v24417905JRSA-01",
                                "route_priority": 2,
                                "id": "1gqgrbs3m053yonj",
                                "items": 1,
                                "eta_end_date": "2024-08-22T17:00:59.000Z",
                                "customer": {
                                    "address": "San Benito, 72",
                                    "lng": "-58.409065600000000",
                                    "city": "Ciudad Autónoma Buenos Aires",
                                    "phone": "+541166650134",
                                    "commune": "N/A",
                                    "name": "gerard cockshott",
                                    "id": "1gqgr1e7m053yoni",
                                    "state": "Ciudad Autónoma de Buenos Aires",
                                    "postal_code": "1846",
                                    "lat": "-34.798719000000000",
                                    "email": "gcockshott@hotmail.com"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T13:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T15:31:46.744Z",
                                "last_status_desc": "Notificado",
                                "order_nr": 23969523,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T09:56:38.092Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T15:26:09.920Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T15:30:34.367Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T15:30:37.560Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T15:31:46.744Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24391184JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24004412,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.3842555,
                                                "created_at": "2024-08-22T15:26:09.920Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7731848,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.3766607,
                                                "created_at": "2024-08-22T15:30:34.367Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7791202,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.3766607,
                                                "created_at": "2024-08-22T15:30:37.560Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7791202,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.37577,
                                                "created_at": "2024-08-22T15:31:46.744Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7801483,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24391184JRSA-01_24004412_1724340685092-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24391184JRSA-01_24004412_1724340685092-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"MIGUEL ALEJANDRO BUJAN\",\"observation\":\"\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "invoiceValue",
                                        "value": "0"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"invoiceValue\",\"value\":0}]"
                                    }
                                ],
                                "external_system_order_id": "v24391184JRSA-01",
                                "route_priority": 3,
                                "id": "1gqgrja0m053yonh",
                                "items": 1,
                                "eta_end_date": "2024-08-22T17:00:59.000Z",
                                "customer": {
                                    "address": "Reconquista, 151",
                                    "lng": "-58.405410000000000",
                                    "city": "Turdera",
                                    "phone": "+541142980263",
                                    "commune": "N/A",
                                    "name": "MIGUEL ALEJANDRO BUJAN",
                                    "id": "1gqgr1dblm053yong",
                                    "state": "Buenos Aires",
                                    "postal_code": "1833",
                                    "lat": "-34.792070800000000",
                                    "email": "alejandrombujan@yahoo.com"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T13:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T16:02:35.285Z",
                                "last_status_desc": "Notificado",
                                "order_nr": 24080996,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T09:56:38.092Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T15:26:25.342Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T15:31:56.019Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T16:01:28.882Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T16:02:35.285Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24433266JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24116017,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.3826265,
                                                "created_at": "2024-08-22T15:26:25.342Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7722944,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.37577,
                                                "created_at": "2024-08-22T15:31:56.019Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7801483,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.37577,
                                                "created_at": "2024-08-22T16:01:28.882Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7801483,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.3624595,
                                                "created_at": "2024-08-22T16:02:35.285Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8001385,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24433266JRSA-01_24116017_1724342533133-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24433266JRSA-01_24116017_1724342533133-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"OLGA VIDAL\",\"observation\":\"\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
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
                                        "name": "tags",
                                        "value": "[{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"Comentarios del usuario\",\"value\":\"casa\"},{\"name\":\"invoiceValue\",\"value\":0}]"
                                    },
                                    {
                                        "name": "invoiceValue",
                                        "value": "0"
                                    }
                                ],
                                "external_system_order_id": "v24433266JRSA-01",
                                "route_priority": 4,
                                "id": "1gqgr14lem053yonl",
                                "items": 1,
                                "eta_end_date": "2024-08-22T17:00:59.000Z",
                                "customer": {
                                    "address": "Solís, 160",
                                    "lng": "-58.394268600000000",
                                    "city": "Temperley",
                                    "phone": "+541135869332",
                                    "commune": "N/A",
                                    "name": "OLGA VIDAL",
                                    "id": "1gqgr1c4nm053yonk",
                                    "state": "PROVINCIA DE BUENOS AIRES",
                                    "postal_code": "1834",
                                    "lat": "-34.768537600000010",
                                    "email": "olgavidal25@hotmail.com"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T13:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T16:06:44.807Z",
                                "last_status_desc": "Notificado",
                                "order_nr": 24095608,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T09:56:38.092Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T15:26:44.252Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T16:02:51.291Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T16:02:59.115Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T16:04:26.022Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T16:04:38.959Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T16:04:50.676Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T16:06:44.807Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24440295JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24130654,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.3818171,
                                                "created_at": "2024-08-22T15:26:44.252Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7718231,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.3633171,
                                                "created_at": "2024-08-22T16:02:51.291Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8006238,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.3633171,
                                                "created_at": "2024-08-22T16:02:59.115Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8006238,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.3695258,
                                                "created_at": "2024-08-22T16:04:26.022Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8037647,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.3701769,
                                                "created_at": "2024-08-22T16:04:38.959Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8041079,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.3701769,
                                                "created_at": "2024-08-22T16:04:50.676Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8041079,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.3740191,
                                                "created_at": "2024-08-22T16:06:44.807Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8013644,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24440295JRSA-01_24130654_1724342794096-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24440295JRSA-01_24130654_1724342794096-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"Grisel Micael Flore\",\"observation\":\"\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"Piso Barrio: 12,Departamento Barrio: 5,Observaciones: torre 1 - Recibe Nora Ferrari\"}]"
                                    }
                                ],
                                "external_system_order_id": "v24440295JRSA-01",
                                "route_priority": 5,
                                "id": "1gqgr6pgm053yont",
                                "items": 1,
                                "eta_end_date": "2024-08-22T17:00:59.000Z",
                                "customer": {
                                    "address": "14 de Julio, 10",
                                    "lng": "-58.382584100000000",
                                    "city": "Lomas de Zamora",
                                    "phone": "+541158176179",
                                    "commune": "Temperley",
                                    "name": "Grisel Micael Flore",
                                    "id": "1gqgr11u2m053yons",
                                    "state": "Buenos Aires",
                                    "postal_code": "1834",
                                    "lat": "-34.768667700000000",
                                    "email": "griselmflores@gmail.com"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T13:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T16:14:02.442Z",
                                "last_status_desc": "Notificado",
                                "order_nr": 24087700,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T09:56:38.092Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T15:27:02.182Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T16:07:04.348Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T16:13:09.483Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T16:14:02.442Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24437086JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24122726,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.3811213,
                                                "created_at": "2024-08-22T15:27:02.182Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7714906,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.3740072,
                                                "created_at": "2024-08-22T16:07:04.348Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8013489,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.3784366,
                                                "created_at": "2024-08-22T16:13:09.483Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8034995,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.3834283,
                                                "created_at": "2024-08-22T16:14:02.442Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8063255,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24437086JRSA-01_24122726_1724343207992-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24437086JRSA-01_24122726_1724343207992-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"Florencia Hermosilla\",\"observation\":\"\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [],
                                "external_system_order_id": "v24437086JRSA-01",
                                "route_priority": 6,
                                "id": "1gqgr1z3ym053yonp",
                                "items": 1,
                                "eta_end_date": "2024-08-22T17:00:59.000Z",
                                "customer": {
                                    "address": "Rio Negro, 2546",
                                    "lng": "-58.341155200000000",
                                    "city": "Almte Brown",
                                    "phone": "+541164414626",
                                    "commune": "Rafael Calzada",
                                    "name": "Florencia Hermosilla",
                                    "id": "1gqgrn4sm053yono",
                                    "state": "PROVINCIA DE BUENOS AIRES",
                                    "postal_code": "1847",
                                    "lat": "-34.781904400000000",
                                    "email": "delfinaespinolahermosilla@gmail.com"
                                },
                                "status": "02"
                            },
                            {
                                "seller": {
                                    "address": "Gral. Frías",
                                    "lng": -58.41694458,
                                    "name": "JUMBO LOMAS",
                                    "externalId": "jumboargentinaj5204lomas",
                                    "id": 868,
                                    "lat": -34.79239254
                                },
                                "eta_date": "2024-08-22T13:00:00.000Z",
                                "last_status_code": "01",
                                "finished_at": "2024-08-22T16:15:56.594Z",
                                "last_status_desc": "Notificado",
                                "order_nr": 24084350,
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2024-08-22T09:56:38.092Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2024-08-22T15:27:24.775Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2024-08-22T16:14:14.351Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2024-08-22T16:14:17.863Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2024-08-22T16:15:56.594Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v24435279JRSA-01",
                                        "status_code": "02",
                                        "pack_id": 24119371,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -58.3797839,
                                                "created_at": "2024-08-22T15:27:24.775Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.7712966,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -58.383425,
                                                "created_at": "2024-08-22T16:14:14.351Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8063233,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -58.383425,
                                                "created_at": "2024-08-22T16:14:17.863Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8063233,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -58.387894,
                                                "created_at": "2024-08-22T16:15:56.594Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -34.8088507,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v24435279JRSA-01_24119371_1724343342550-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v24435279JRSA-01_24119371_1724343342550-shipping.jpg"
                                            }
                                        ],
                                        "tags": [
                                            {
                                                "name": "form_data",
                                                "value": "{\"received_by_client\":\"true\",\"receiver_name\":\"jorge luis guardamagna\",\"observation\":\"\"}"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "JUMBO_AR",
                                    "name": "Jumbo (Argentina)"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"Piso Barrio: 1,Departamento Barrio: 0\"}]"
                                    }
                                ],
                                "external_system_order_id": "v24435279JRSA-01",
                                "route_priority": 7,
                                "id": "1gqgr1h7km053yonn",
                                "items": 1,
                                "eta_end_date": "2024-08-22T17:00:59.000Z",
                                "customer": {
                                    "address": "Av. San Martín, 2006",
                                    "lng": "-58.370606200000000",
                                    "city": "Almte Brown",
                                    "phone": "+541132584979",
                                    "commune": "Rafael Calzada",
                                    "name": "jorge luis guardamagna",
                                    "id": "1gqgrtsm053yonm",
                                    "state": "PROVINCIA DE BUENOS AIRES",
                                    "postal_code": "1847",
                                    "lat": "-34.799207400000000",
                                    "email": "produccionesdeportivas2021@gmail.com"
                                },
                                "status": "02"
                            }
                        ],
                        "id": "70931aea-2343-4953-a3af-8aea8f3d6929",
                        "eta_end_date": "2024-08-22T16:15:56.594Z",
                        "status": "FINISHED"
                    },
                    "sort": [
                        1724320598092
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
