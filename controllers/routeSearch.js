const getData = (req, res) => {
    let response = {
        "took": 2,
        "timed_out": false,
        "_shards": {
            "total": 5,
            "successful": 5,
            "skipped": 0,
            "failed": 0
        },
        "hits": {
            "total": {
                "value": 1,
                "relation": "eq"
            },
            "max_score": 1,
            "hits": [
                {
                    "_index": "routes",
                    "_type": "_doc",
                    "_id": "0f7cd1e6-238e-49d9-98d7-764ef785cca7",
                    "_score": 1,
                    "_source": {
                        "eta_date": "2023-12-13T14:27:33.000Z",
                        "status_history": [
                            {
                                "offline": 0,
                                "created_at": "2023-12-13T13:57:05.741Z",
                                "status": "ASSIGNED"
                            },
                            {
                                "offline": 0,
                                "created_at": "2023-12-13T13:59:39.661Z",
                                "status": "IN_PROGRESS"
                            },
                            {
                                "offline": 0,
                                "created_at": "2023-12-13T14:13:59.845Z",
                                "status": "FINISHED"
                            }
                        ],
                        "created_at": "2023-12-13T13:57:05.741Z",
                        "in_progress_at": "2023-12-13T13:59:39.661Z",
                        "traveled_distance": 8.702,
                        "created_by": "constanza.figueroa@externos-cl.cencosud.com",
                        "vehicle": {
                            "licence_plate": "RHJH67",
                            "vehicle_type": "CAR",
                            "id": "226"
                        },
                        "driver": {
                            "associated_stores": [
                                {
                                    "code": "O727",
                                    "retailChainCode": "SPID_CL",
                                    "retailChainName": "Spid (Chile)",
                                    "name": "QUICKCOMMERCE FLEMING",
                                    "lat": -33.42333,
                                    "long": -70.53877
                                },
                                {
                                    "code": "J762",
                                    "retailChainCode": "SPID_CL",
                                    "retailChainName": "Spid (Chile)",
                                    "name": "SPID Los Trapenses",
                                    "lat": -33.34277,
                                    "long": -70.54467
                                },
                                {
                                    "code": "O865",
                                    "retailChainCode": "SPID_CL",
                                    "retailChainName": "Spid (Chile)",
                                    "name": "SPID San Damian",
                                    "lat": -33.37728,
                                    "long": -70.52667
                                },
                                {
                                    "code": "N704",
                                    "retailChainCode": "SPID_CL",
                                    "retailChainName": "Spid (Chile)",
                                    "name": "SPID35 SISA Las Condes Francisco Bilbao",
                                    "lat": -33.43567,
                                    "long": -70.59139
                                },
                                {
                                    "code": "O513",
                                    "retailChainCode": "SPID_CL",
                                    "retailChainName": "Spid (Chile)",
                                    "name": "SPID El Llano Subercaseaux",
                                    "lat": -33.48593,
                                    "long": -70.65162
                                },
                                {
                                    "code": "O714",
                                    "retailChainCode": "SPID_CL",
                                    "retailChainName": "Spid (Chile)",
                                    "name": "SPID Las Condes",
                                    "lat": -33.3718,
                                    "long": -70.51461
                                },
                                {
                                    "code": "O496",
                                    "retailChainCode": "SPID_CL",
                                    "retailChainName": "Spid (Chile)",
                                    "name": "SPID Las Condes Trigales",
                                    "lat": -33.40311,
                                    "long": -70.55624
                                },
                                {
                                    "code": "O873",
                                    "retailChainCode": "SPID_CL",
                                    "retailChainName": "Spid (Chile)",
                                    "name": "SPID35 Apoquindo",
                                    "lat": -33.4157,
                                    "long": -70.59349
                                },
                                {
                                    "code": "O624",
                                    "retailChainCode": "SPID_CL",
                                    "retailChainName": "Spid (Chile)",
                                    "name": "SPID35 El Alba",
                                    "lat": -33.40193,
                                    "long": -70.51444
                                },
                                {
                                    "code": "N548",
                                    "retailChainCode": "SPID_CL",
                                    "retailChainName": "Spid (Chile)",
                                    "name": "SPID Rafael Sotomayor",
                                    "lat": -32.97073,
                                    "long": -71.54239
                                },
                                {
                                    "code": "N777",
                                    "retailChainCode": "SPID_CL",
                                    "retailChainName": "Spid (Chile)",
                                    "name": "SPID Apoquindo",
                                    "lat": -33.40787,
                                    "long": -70.55374
                                },
                                {
                                    "code": "J508",
                                    "retailChainCode": "SPID_CL",
                                    "retailChainName": "Spid (Chile)",
                                    "name": "SPID Viña del Mar",
                                    "lat": -33.03526,
                                    "long": -71.52363
                                }
                            ],
                            "phone": "+56966799140",
                            "name": "Veronica Espinoza",
                            "id": "f57eb3fc-e609-4fd1-a672-7b1718c2e5c1"
                        },
                        "updated_at": "2023-12-13T13:57:05.741Z",
                        "courier": {
                            "name": null,
                            "id": null
                        },
                        "provider": {
                            "name": "Boosmap Chile",
                            "id": "1"
                        },
                        "updated_by": "constanza.figueroa@externos-cl.cencosud.com",
                        "orders": [
                            {
                                "seller": {
                                    "address": "Av. Camino Los Trapenses 3515",
                                    "lng": "-70.544669244718300",
                                    "name": "SPID Los Trapenses",
                                    "externalId": "J762",
                                    "id": "640",
                                    "lat": "-33.342770905593200"
                                },
                                "last_status_code": "01",
                                "eta_date": "2023-12-13T13:52:33.000Z",
                                "finished_at": "2023-12-13T14:13:59.845Z",
                                "order_nr": "17571297",
                                "status_history": [
                                    {
                                        "last_status_code": "9003",
                                        "created_at": "2023-12-13T13:57:05.741Z",
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "",
                                        "created_at": "2023-12-13T13:59:39.661Z",
                                        "is_regional": 0,
                                        "status": "09"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9002",
                                        "created_at": "2023-12-13T13:59:47.378Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "9004",
                                        "created_at": "2023-12-13T14:12:54.656Z",
                                        "is_regional": 0,
                                        "status": "08"
                                    },
                                    {
                                        "offline": 0,
                                        "last_status_code": "01",
                                        "created_at": "2023-12-13T14:13:59.845Z",
                                        "is_regional": 0,
                                        "status": "02"
                                    }
                                ],
                                "packs": [
                                    {
                                        "tracking_nr": "v500015871spid-01",
                                        "status_code": "02",
                                        "pack_id": 17594722,
                                        "sub_status_code": "01",
                                        "status_history": [
                                            {
                                                "offline": 0,
                                                "last_status_code": null,
                                                "lng": -70.5448973,
                                                "created_at": "2023-12-13T13:59:39.661Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -33.3432794,
                                                "status": "09"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9002",
                                                "lng": -70.5448886,
                                                "created_at": "2023-12-13T13:59:47.378Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -33.3432658,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "9004",
                                                "lng": -70.5016558,
                                                "created_at": "2023-12-13T14:12:54.656Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -33.3264828,
                                                "status": "08"
                                            },
                                            {
                                                "offline": 0,
                                                "last_status_code": "01",
                                                "lng": -70.5016491,
                                                "created_at": "2023-12-13T14:13:59.845Z",
                                                "event_source": null,
                                                "is_regional": 0,
                                                "lat": -33.3264845,
                                                "status": "02"
                                            }
                                        ],
                                        "photos": [
                                            {
                                                "data": "https://s3-tms.ecomm.cencosud.com/v500015871spid-01_17594722_1702476820687-shipping.jpg",
                                                "dataType": "IMAGE_URL",
                                                "description": "v500015871spid-01_17594722_1702476820687-shipping.jpg"
                                            }
                                        ]
                                    }
                                ],
                                "retail_chain": {
                                    "code": "SPID_CL",
                                    "name": "Spid (Chile)"
                                },
                                "dispatch_type": {
                                    "code": "SFS_ON_DEMAND",
                                    "enable": 1,
                                    "name": "Despacho desde Tienda On Demand"
                                },
                                "tags": [
                                    {
                                        "name": "contact_address",
                                        "value": "Argovia 139,  , Lo Barnechea, Santiago"
                                    },
                                    {
                                        "name": "groups",
                                        "value": "[{\"category\":\"TIPOS DE NEGOCIOS\",\"name\":\"SPID35 Los Trapenses\"},{\"category\":\"Tipo\",\"name\":\"SPID35\"}]"
                                    },
                                    {
                                        "name": "place",
                                        "value": "SPID35 Los Trapenses"
                                    },
                                    {
                                        "name": "mode",
                                        "value": "3"
                                    },
                                    {
                                        "name": "identifier",
                                        "value": "v500015871spid-01"
                                    },
                                    {
                                        "name": "contact_phone",
                                        "value": "56994493000"
                                    },
                                    {
                                        "name": "max_delivery_time",
                                        "value": "2023-12-13 11:27:33"
                                    },
                                    {
                                        "name": "min_delivery_time",
                                        "value": "2023-12-13 10:52:33"
                                    },
                                    {
                                        "name": "contact_name",
                                        "value": "Florencia Bortolaso"
                                    },
                                    {
                                        "name": "contact_id",
                                        "value": "162085069"
                                    },
                                    {
                                        "name": "latitude",
                                        "value": "-33.326534370641944"
                                    },
                                    {
                                        "name": "pickup_address",
                                        "value": "{\"name\":\"Av. Camino Los Trapenses 3515\",\"latitude\":-33.34326,\"longitude\":-70.54448}"
                                    },
                                    {
                                        "name": "longitude",
                                        "value": "-70.50162121653557"
                                    },
                                    {
                                        "name": "bulks",
                                        "value": "N/A"
                                    },
                                    {
                                        "name": "contact_email",
                                        "value": "fbortolaso@hotmail.com"
                                    },
                                    {
                                        "name": "originalId",
                                        "value": "v500015871spid-01"
                                    },
                                    {
                                        "name": "origin",
                                        "value": "3"
                                    },
                                    {
                                        "name": "status_id",
                                        "value": "1"
                                    },
                                    {
                                        "name": "substatus_code",
                                        "value": "042"
                                    },
                                    {
                                        "name": "action_type",
                                        "value": "UPDATE"
                                    },
                                    {
                                        "name": "items",
                                        "value": "[{\"name\":\"Bolsa\",\"description\":\"Bolsa\",\"code\":\"\",\"original_quantity\":1,\"quantity\":1}]"
                                    },
                                    {
                                        "name": "tags",
                                        "value": "[{\"name\":\"Comentarios del usuario\",\"value\":\"\"},{\"name\":\"Local de Origen\",\"value\":\"SPID35 Los Trapenses\"},{\"name\":\"Comuna\",\"value\":\"Lo Barnechea\"},{\"name\":\"Promesa\",\"value\":0},{\"name\":\"Ventanahoraria_inicio\",\"value\":\"10:52\"},{\"name\":\"Ventanahoraria_fin\",\"value\":\"10:52\"},{\"name\":\"Ítems\",\"value\":3},{\"name\":\"Unidades\",\"value\":6},{\"name\":\"Transportadora\",\"value\":\"Jumbo Los Trapenses\"},{\"name\":\"Cliente que recibe\",\"value\":\"Florencia Bortolaso\"},{\"name\":\"Origen\",\"value\":\"App\"},{\"name\":\"Congelados\",\"value\":\"NO\"},{\"name\":\"SPID35\",\"value\":\"Sí\"},{\"name\":\"Prime\",\"value\":\"Prime\"},{\"name\":\"VIP\",\"value\":\"\"},{\"name\":\"cigarros\",\"value\":\"NO\"},{\"name\":\"alcoholicos\",\"value\":\"NO\"},{\"name\":\"Url\",\"value\":\"https://public-url-shortener.ecomm.cencosud.com/YP1_3dUnzSprMu0P8wdA1\"}]"
                                    },
                                    {
                                        "name": "flag",
                                        "value": "SPID35"
                                    }
                                ],
                                "external_system_order_id": "v500015871spid-01",
                                "route_priority": 1,
                                "id": "1aw15halq3u5ec5",
                                "items": 1,
                                "eta_end_date": "2023-12-13T14:27:33.000Z",
                                "status": "02",
                                "customer": {
                                    "address": "Argovia 139",
                                    "lng": "-70.501621216535600",
                                    "city": "Santiago",
                                    "phone": "+56994493000",
                                    "name": "Florencia Bortolaso",
                                    "id": "1aw20aylq3u5ec4",
                                    "state": "Metropolitana de Santiago",
                                    "postal_code": null,
                                    "lat": "-33.326534370641900",
                                    "email": "fbortolaso@hotmail.com"
                                }
                            }
                        ],
                        "id": "0f7cd1e6-238e-49d9-98d7-764ef785cca7",
                        "eta_end_date": "2023-12-13T14:13:59.845Z",
                        "status": "FINISHED"
                    }
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
