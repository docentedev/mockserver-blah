const trackingEventsPackStatusCtrl = (req, res) => {
    const { } = req.body;

    const response = [
        {
            "id": 101,
            "code": "998",
            "description": "Facturado",
            "subStatus": []
        },
        {
            "id": 5,
            "code": "999",
            "description": "Notificado",
            "subStatus": []
        },
        {
            "id": 100,
            "code": "1001",
            "description": "Estado Desconocido",
            "subStatus": []
        },
        {
            "id": 132,
            "code": "1003",
            "description": "Regestionado",
            "subStatus": []
        },
        {
            "id": 88,
            "code": "17",
            "description": "En cliente",
            "subStatus": []
        },
        {
            "id": 89,
            "code": "18",
            "description": "En picking",
            "subStatus": [
                {
                    "id": 96,
                    "code": "64",
                    "description": "Picking aceptado",
                    "subStatusId": 89
                }
            ]
        },
        {
            "id": 87,
            "code": "16",
            "description": "En tránsito",
            "subStatus": [
                {
                    "id": 95,
                    "code": "9004",
                    "description": "Llegó a destino",
                    "subStatusId": 87
                },
                {
                    "id": 93,
                    "code": "9002",
                    "description": "En ruta a destino",
                    "subStatusId": 87
                },
                {
                    "id": 94,
                    "code": "9003",
                    "description": "Asignado en vehículo",
                    "subStatusId": 87
                }
            ]
        },
        {
            "id": 86,
            "code": "14",
            "description": "Recogido",
            "subStatus": []
        },
        {
            "id": 32,
            "code": "09",
            "description": "Recogido en Origen",
            "subStatus": []
        },
        {
            "id": 85,
            "code": "12",
            "description": "Rechazado",
            "subStatus": [
                {
                    "id": 92,
                    "code": "32",
                    "description": "Motivo Sistema",
                    "subStatusId": 85
                }
            ]
        },
        {
            "id": 13,
            "code": "1000",
            "description": "Caso Excepcional",
            "subStatus": []
        },
        {
            "id": 128,
            "code": "19",
            "description": "Conductor en Origen",
            "subStatus": []
        },
        {
            "id": 33,
            "code": "05",
            "description": "Recogido Devoluciones",
            "subStatus": [
                {
                    "id": 34,
                    "code": "62",
                    "description": "Recogido",
                    "subStatusId": 33
                },
                {
                    "id": 35,
                    "code": "63",
                    "description": "Courier",
                    "subStatusId": 33
                }
            ]
        },
        {
            "id": 38,
            "code": "06",
            "description": "No Recogido Devoluciones",
            "subStatus": [
                {
                    "id": 46,
                    "code": "96",
                    "description": "Motivo Transporte Definitivo",
                    "subStatusId": 38
                },
                {
                    "id": 47,
                    "code": "930",
                    "description": "Motivo Cliente Definitivo",
                    "subStatusId": 38
                },
                {
                    "id": 39,
                    "code": "03",
                    "description": "Cliente No Está",
                    "subStatusId": 38
                },
                {
                    "id": 41,
                    "code": "06",
                    "description": "Motivo Transporte",
                    "subStatusId": 38
                },
                {
                    "id": 42,
                    "code": "30",
                    "description": "Motivo Cliente",
                    "subStatusId": 38
                },
                {
                    "id": 43,
                    "code": "68",
                    "description": "No Cumple Condiciones de Retiro",
                    "subStatusId": 38
                },
                {
                    "id": 44,
                    "code": "93",
                    "description": "Cliente No Está Definitivo",
                    "subStatusId": 38
                },
                {
                    "id": 40,
                    "code": "02",
                    "description": "Problemas en la dirección",
                    "subStatusId": 38
                },
                {
                    "id": 45,
                    "code": "92",
                    "description": "No Recogido Problemas en la dirección - Definitivo",
                    "subStatusId": 38
                }
            ]
        },
        {
            "id": 36,
            "code": "991",
            "description": "Entregado Devoluciones",
            "subStatus": [
                {
                    "id": 37,
                    "code": "01",
                    "description": "En Destino",
                    "subStatusId": 36
                }
            ]
        },
        {
            "id": 3,
            "code": "04",
            "description": "Entregado Parcial",
            "subStatus": []
        },
        {
            "id": 131,
            "code": "20",
            "description": "Recibido en Tienda",
            "subStatus": []
        },
        {
            "id": 133,
            "code": "39",
            "description": "No Entregado Same Day",
            "subStatus": []
        },
        {
            "id": 83,
            "code": "13",
            "description": "Orden validada",
            "subStatus": []
        },
        {
            "id": 6,
            "code": "08",
            "description": "En Tránsito",
            "subStatus": [
                {
                    "id": 15,
                    "code": "9000",
                    "description": "Ruta troncal",
                    "subStatusId": 6
                },
                {
                    "id": 14,
                    "code": "9002",
                    "description": "En ruta a destino",
                    "subStatusId": 6
                },
                {
                    "id": 97,
                    "code": "80",
                    "description": "Previo a entrega",
                    "subStatusId": 6
                },
                {
                    "id": 16,
                    "code": "9001",
                    "description": "Gestionado CT",
                    "subStatusId": 6
                },
                {
                    "id": 99,
                    "code": "9005",
                    "description": "En Ruta a Recoger",
                    "subStatusId": 6
                },
                {
                    "id": 137,
                    "code": "9007",
                    "description": "Asignado en vehículo",
                    "subStatusId": 6
                },
                {
                    "id": 98,
                    "code": "9004",
                    "description": "Llegó a destino",
                    "subStatusId": 6
                },
                {
                    "id": 138,
                    "code": "9003",
                    "description": "Asignado en vehículo",
                    "subStatusId": 6
                },
                {
                    "id": 129,
                    "code": "9006",
                    "description": "Listo para Recoger",
                    "subStatusId": 6
                }
            ]
        },
        {
            "id": 7,
            "code": "03",
            "description": "No Entregado",
            "subStatus": [
                {
                    "id": 30,
                    "code": "02",
                    "description": "Problemas en la dirección (Reintentable)",
                    "subStatusId": 7
                },
                {
                    "id": 19,
                    "code": "52",
                    "description": "Daño Producto",
                    "subStatusId": 7
                },
                {
                    "id": 18,
                    "code": "51",
                    "description": "Expectativa",
                    "subStatusId": 7
                },
                {
                    "id": 23,
                    "code": "93",
                    "description": "Cliente No Está Definitivo",
                    "subStatusId": 7
                },
                {
                    "id": 21,
                    "code": "55",
                    "description": "Nota De Credito",
                    "subStatusId": 7
                },
                {
                    "id": 20,
                    "code": "53",
                    "description": "Producto No Corresponde",
                    "subStatusId": 7
                },
                {
                    "id": 25,
                    "code": "96",
                    "description": "Motivos Transporte Definitivo",
                    "subStatusId": 7
                },
                {
                    "id": 24,
                    "code": "930",
                    "description": "Motivos Cliente Definitivo",
                    "subStatusId": 7
                },
                {
                    "id": 135,
                    "code": "05",
                    "description": "Problema producto",
                    "subStatusId": 7
                },
                {
                    "id": 136,
                    "code": "94",
                    "description": "Problema producto definitivo",
                    "subStatusId": 7
                },
                {
                    "id": 17,
                    "code": "30",
                    "description": "Motivo Cliente",
                    "subStatusId": 7
                },
                {
                    "id": 28,
                    "code": "06",
                    "description": "Motivo Transporte",
                    "subStatusId": 7
                },
                {
                    "id": 29,
                    "code": "03",
                    "description": "Cliente No Está",
                    "subStatusId": 7
                },
                {
                    "id": 22,
                    "code": "92",
                    "description": "Problemas en la dirección Definitivo",
                    "subStatusId": 7
                }
            ]
        },
        {
            "id": 84,
            "code": "10",
            "description": "Cancelado",
            "subStatus": [
                {
                    "id": 90,
                    "code": "31",
                    "description": "Motivo Cliente",
                    "subStatusId": 84
                },
                {
                    "id": 91,
                    "code": "32",
                    "description": "Motivo Sistema",
                    "subStatusId": 84
                }
            ]
        },
        {
            "id": 130,
            "code": "1002",
            "description": "Cancelado",
            "subStatus": []
        },
        {
            "id": 82,
            "code": "11",
            "description": "Falla por sistema externo",
            "subStatus": []
        },
        {
            "id": 4,
            "code": "02",
            "description": "Entregado",
            "subStatus": [
                {
                    "id": 26,
                    "code": "61",
                    "description": "En Cliente",
                    "subStatusId": 4
                },
                {
                    "id": 27,
                    "code": "41",
                    "description": "En Expedicion",
                    "subStatusId": 4
                },
                {
                    "id": 31,
                    "code": "01",
                    "description": "Entregado a Domicilio",
                    "subStatusId": 4
                }
            ]
        },
        {
            "id": 139,
            "code": "1004",
            "description": "Reintentar Entrega",
            "subStatus": []
        },
        {
            "id": 48,
            "code": "07",
            "description": "No Entregado Devoluciones",
            "subStatus": []
        }
    ];
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    trackingEventsPackStatusCtrl
};
