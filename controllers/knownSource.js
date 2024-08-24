const getData = (req, res) => {
    let response = [
        {
            "id": 812,
            "createdAt": "2023-11-20T12:01:14.081Z",
            "updatedAt": "2023-11-20T12:01:14.081Z",
            "name": "Easy La Unión",
            "knownSourceExternalId": "E744",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 56,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY KENNEDY",
            "knownSourceExternalId": "E502",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 57,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY MAIPU",
            "knownSourceExternalId": "E503",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 58,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY RANCAGUA",
            "knownSourceExternalId": "E504",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 59,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY PORTAL TEMUCO",
            "knownSourceExternalId": "E506",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 60,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY PUERTO MONTT",
            "knownSourceExternalId": "E507",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 61,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY VIÑA DEL MAR",
            "knownSourceExternalId": "E508",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 62,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY FLORIDA",
            "knownSourceExternalId": "E510",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 63,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY COSTANERA",
            "knownSourceExternalId": "E511",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 64,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY LA REINA PADRE HURTADO",
            "knownSourceExternalId": "E512",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 65,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY EL LLANO SUBERCASEAUX",
            "knownSourceExternalId": "E513",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 66,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY LA DEHESA",
            "knownSourceExternalId": "E514",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 67,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY TEMUCO",
            "knownSourceExternalId": "E517",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 68,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY QUILÍN",
            "knownSourceExternalId": "E518",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 69,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY VALPARAISO",
            "knownSourceExternalId": "E520",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 70,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY LA SERENA",
            "knownSourceExternalId": "E521",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 71,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY CERRILLOS",
            "knownSourceExternalId": "E522",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 72,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY LINARES",
            "knownSourceExternalId": "E524",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 73,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY CHILLAN",
            "knownSourceExternalId": "E525",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 74,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY LOS ANGELES",
            "knownSourceExternalId": "E529",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 75,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY ANTOFAGASTA",
            "knownSourceExternalId": "E534",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 76,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY OSORNO DA VINCI",
            "knownSourceExternalId": "E585",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 77,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY TALCA EL ARENAL",
            "knownSourceExternalId": "E591",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 78,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY CURICO O'HIGGINS",
            "knownSourceExternalId": "E592",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 79,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY CALAMA",
            "knownSourceExternalId": "E614",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 80,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY ARICA COSTANERA",
            "knownSourceExternalId": "E619",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 81,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY CONCEPCION ALLESSANDRI",
            "knownSourceExternalId": "E633",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 82,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY OCHAGAVIA",
            "knownSourceExternalId": "E643",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 83,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY QUILLOTA",
            "knownSourceExternalId": "E646",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 84,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY QUILICURA",
            "knownSourceExternalId": "E655",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 85,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY PUENTE ALTO - BARNABITAS",
            "knownSourceExternalId": "E659",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 86,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY COPIAPO",
            "knownSourceExternalId": "E760",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 87,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY EL BELLOTO II",
            "knownSourceExternalId": "E781",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 88,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY SAN BERNARDO LAS LILAS",
            "knownSourceExternalId": "E843",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 89,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY LOS ANDES -  EL LABERINTO",
            "knownSourceExternalId": "E900",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 91,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY COLINA VALLE ALEGRE",
            "knownSourceExternalId": "E988",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 92,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY CHIGUAYANTE",
            "knownSourceExternalId": "E990",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 90,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "EASY CORONEL - MANUEL MONTT",
            "knownSourceExternalId": "E983",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 93,
            "createdAt": "2021-09-01T06:06:38.470Z",
            "updatedAt": "2021-09-01T06:06:38.470Z",
            "name": "PARIS CD ECOMMERCE CL",
            "knownSourceExternalId": "200-BOOSMAP",
            "groupCode": "PARIS",
            "isCd": true,
            "retailChainId": 2
        },
        {
            "id": 94,
            "createdAt": "2021-09-01T06:06:38.470Z",
            "updatedAt": "2021-09-01T06:06:38.470Z",
            "name": "PARIS CD ECOMMERCE CL",
            "knownSourceExternalId": "200-FLOCK",
            "groupCode": "PARIS",
            "isCd": true,
            "retailChainId": 2
        },
        {
            "id": 326,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS OVALLE",
            "knownSourceExternalId": "121",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 327,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS INDEPENDENCIA",
            "knownSourceExternalId": "125",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 328,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS TALCAHUANO",
            "knownSourceExternalId": "464",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 329,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS EL LLANO",
            "knownSourceExternalId": "424",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 330,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS SAN FELIPE",
            "knownSourceExternalId": "433",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 331,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS CORONEL",
            "knownSourceExternalId": "479",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 332,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS PUENTE ALTO",
            "knownSourceExternalId": "407",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 333,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS QUILLOTA",
            "knownSourceExternalId": "410",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 334,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS MELIPILLA",
            "knownSourceExternalId": "427",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 628,
            "createdAt": "2022-08-04T04:42:48.105Z",
            "updatedAt": "2022-08-04T04:42:48.105Z",
            "name": "DARKSTORE PLAZA OESTE",
            "knownSourceExternalId": "129",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 814,
            "createdAt": "2023-10-12T15:48:36.660Z",
            "updatedAt": "2023-10-12T15:48:36.660Z",
            "name": "SPID Irarrazaval",
            "knownSourceExternalId": "O862",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 9
        },
        {
            "id": 831,
            "createdAt": "2024-07-12T02:13:01.858Z",
            "updatedAt": "2024-07-12T02:13:01.858Z",
            "name": "DARKSTORE LA DEHESA",
            "knownSourceExternalId": "J414",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 620,
            "createdAt": "2022-05-20T13:01:11.058Z",
            "updatedAt": "2022-05-20T13:01:11.058Z",
            "name": "EASY CERRILLOS",
            "knownSourceExternalId": "211",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 815,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO TRONADOR",
            "knownSourceExternalId": "jumboargentinaqaj5259tronador",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 49,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO TEMUCO",
            "knownSourceExternalId": "J506",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 761,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO VISTA PUEBLO",
            "knownSourceExternalId": "jumboargentinaj5225vistapueblo",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 762,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO TUCUMAN",
            "knownSourceExternalId": "jumboargentinaj5227tucuman",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 763,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO ALMAGRO",
            "knownSourceExternalId": "jumboargentinaj5231almagro",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 764,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO SALTA",
            "knownSourceExternalId": "jumboargentinaj5251salta",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 765,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO TRONADOR",
            "knownSourceExternalId": "jumboargentinaj5259tronador",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 766,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO ACOYTE",
            "knownSourceExternalId": "jumboargentinaj5260acoyte",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 767,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO JUAN B. JUSTO",
            "knownSourceExternalId": "jumboargentinaj5263juanbjusto",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 768,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO LA PALMERA",
            "knownSourceExternalId": "jumboargentinaj5275lapalmera",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 769,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO ARENALES",
            "knownSourceExternalId": "jumboargentinaj5276arenales",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 770,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO COMODORO",
            "knownSourceExternalId": "jumboargentinaj5277comodoro",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 771,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO PACHECO NOVO",
            "knownSourceExternalId": "jumboargentinaj5626pacheconovo",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 772,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO SAN FERNANDO",
            "knownSourceExternalId": "jumboargentinaj5628sanfernando",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 773,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO AV. SANTA FE",
            "knownSourceExternalId": "jumboargentinaj5961santafe",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 774,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO PASEO DEL PILAR",
            "knownSourceExternalId": "jumboargentinaj662paseodelpilar",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 775,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO ESCALADA",
            "knownSourceExternalId": "jumboargentinaj5201escalada",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 750,
            "createdAt": "2023-07-06T17:01:10.312Z",
            "updatedAt": "2023-07-06T17:01:10.312Z",
            "name": "JUMBO LOMAS",
            "knownSourceExternalId": "jumboargentinaj5204lomas",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 819,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO SAN LORENZO",
            "knownSourceExternalId": "jumboargentinaj5245sanlorenzo",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 777,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO PALERMO",
            "knownSourceExternalId": "jumboargentinaj5206palermo",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 95,
            "createdAt": "2021-09-01T06:06:38.470Z",
            "updatedAt": "2021-09-01T06:06:38.470Z",
            "name": "PARIS CD ECOMMERCE CL",
            "knownSourceExternalId": "200-SPREAD",
            "groupCode": "PARIS",
            "isCd": true,
            "retailChainId": 2
        },
        {
            "id": 776,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO MARTINEZ",
            "knownSourceExternalId": "jumboargentinaj5202martinez",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 480,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Rawson (4431)",
            "knownSourceExternalId": "spidregars4431",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 778,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO QUILMES",
            "knownSourceExternalId": "jumboargentinaj5207quilmes",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 464,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Pinamar (4049)",
            "knownSourceExternalId": "spidregars4049",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 510,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Pilar (4211)",
            "knownSourceExternalId": "spidregars4211",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 779,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO MORON",
            "knownSourceExternalId": "jumboargentinaj5208moron",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 509,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Morón (4208)",
            "knownSourceExternalId": "spidregars4208",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 649,
            "createdAt": "2022-11-17T18:33:53.118Z",
            "updatedAt": "2022-11-17T18:33:53.118Z",
            "name": "Spid Montevideo (4137)",
            "knownSourceExternalId": "spidregars4137",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 650,
            "createdAt": "2022-11-17T21:44:57.587Z",
            "updatedAt": "2022-11-17T21:44:57.587Z",
            "name": "Spid Naón (4107)",
            "knownSourceExternalId": "spidregars4107",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 655,
            "createdAt": "2022-12-06T18:35:54.307Z",
            "updatedAt": "2022-12-06T18:35:54.307Z",
            "name": "Spid Rivadavia (4030)",
            "knownSourceExternalId": "spidregars4030",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 780,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO PILAR",
            "knownSourceExternalId": "jumboargentinaj5211pilar",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 738,
            "createdAt": "2023-02-09T21:44:59.333Z",
            "updatedAt": "2023-02-09T21:44:59.333Z",
            "name": "Spid Madero (4213)",
            "knownSourceExternalId": "spidregars4213",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 743,
            "createdAt": "2023-02-09T21:44:59.333Z",
            "updatedAt": "2023-02-09T21:44:59.333Z",
            "name": "Spid San Juan (4696)",
            "knownSourceExternalId": "spidregars4696",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 744,
            "createdAt": "2023-02-09T21:44:59.333Z",
            "updatedAt": "2023-02-09T21:44:59.333Z",
            "name": "Spid Escalada (4201)",
            "knownSourceExternalId": "spidregars4201",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 781,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO MADERO HARBOUR",
            "knownSourceExternalId": "jumboargentinaj5213maderoharbour",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 642,
            "createdAt": "2022-09-12T13:46:07.781Z",
            "updatedAt": "2022-09-12T13:46:07.781Z",
            "name": "EASY PORTAL OSORNO",
            "knownSourceExternalId": "E748",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 548,
            "createdAt": "2022-04-20T22:02:33.920Z",
            "updatedAt": "2022-04-20T22:02:33.920Z",
            "name": "MARKETPLACES STORES",
            "knownSourceExternalId": "MS001",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 735,
            "createdAt": "2023-01-24T21:58:26.075Z",
            "updatedAt": "2023-01-24T21:58:26.075Z",
            "name": "Hands free ALC",
            "knownSourceExternalId": "S12",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 808,
            "createdAt": "2023-10-26T02:34:44.480Z",
            "updatedAt": "2023-10-26T02:34:44.480Z",
            "name": "PARIS MAULE",
            "knownSourceExternalId": "131",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 782,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO ESCOBAR",
            "knownSourceExternalId": "jumboargentinaj5214escobar",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 783,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO NEUQUEN",
            "knownSourceExternalId": "jumboargentinaj5216neuquen",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 784,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO ROSARIO",
            "knownSourceExternalId": "jumboargentinaj5218rosario",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 785,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO NORDELTA",
            "knownSourceExternalId": "jumboargentinaj138nordelta",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 786,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO QUILMES II",
            "knownSourceExternalId": "jumboargentinaj5034quilmes2",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 787,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO LAS HERAS",
            "knownSourceExternalId": "jumboargentinaj121lasheras",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 788,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO MENDOZA",
            "knownSourceExternalId": "jumboargentinaj5222mendoza",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 789,
            "createdAt": "2023-07-17T15:01:06.066Z",
            "updatedAt": "2023-07-17T15:01:06.066Z",
            "name": "JUMBO SAN MARTIN",
            "knownSourceExternalId": "jumboargentinaj5205sanmartin",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 634,
            "createdAt": "2022-09-01T03:05:24.214Z",
            "updatedAt": "2022-09-01T03:05:24.214Z",
            "name": "SPID35 Bilbao Los Leones",
            "knownSourceExternalId": "O716",
            "groupCode": "Spid",
            "isCd": false,
            "retailChainId": 9
        },
        {
            "id": 790,
            "createdAt": "2023-07-26T21:58:27.981Z",
            "updatedAt": "2023-07-26T21:58:27.981Z",
            "name": "Spid Ilha",
            "knownSourceExternalId": "spidregbr728",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 7
        },
        {
            "id": 791,
            "createdAt": "2023-09-05T18:48:24.824Z",
            "updatedAt": "2023-09-05T18:48:24.824Z",
            "name": "JUMBO MAIPU",
            "knownSourceExternalId": "J403",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 809,
            "createdAt": "2023-10-26T02:34:44.480Z",
            "updatedAt": "2023-10-26T02:34:44.480Z",
            "name": "PARIS VALDIVIA",
            "knownSourceExternalId": "419",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 107,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LAS MARIPOSAS",
            "knownSourceExternalId": "N977",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 108,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL EL MANANTIAL",
            "knownSourceExternalId": "N694",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 109,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL BARROS ARANA",
            "knownSourceExternalId": "N569",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 110,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LOMAS DE SAN ANDRÉS",
            "knownSourceExternalId": "N783",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 671,
            "createdAt": "2022-12-07T20:10:26.336Z",
            "updatedAt": "2022-12-07T20:10:26.336Z",
            "name": "WONG SOL DE LA MOLINA",
            "knownSourceExternalId": "wongiot130wio",
            "groupCode": "WONG",
            "isCd": false,
            "retailChainId": 12
        },
        {
            "id": 672,
            "createdAt": "2022-12-07T20:10:42.404Z",
            "updatedAt": "2022-12-07T20:10:42.404Z",
            "name": "WONG PANORAMA",
            "knownSourceExternalId": "wongiot131wio",
            "groupCode": "WONG",
            "isCd": false,
            "retailChainId": 12
        },
        {
            "id": 673,
            "createdAt": "2022-12-07T20:10:56.106Z",
            "updatedAt": "2022-12-07T20:10:56.106Z",
            "name": "WONG ATE",
            "knownSourceExternalId": "wongioth12wio",
            "groupCode": "WONG",
            "isCd": false,
            "retailChainId": 12
        },
        {
            "id": 701,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO BOSA",
            "knownSourceExternalId": "metrocolombiaioswl10",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 702,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO BELLO . ANTIOQUIA",
            "knownSourceExternalId": "metrocolombiaioswl25",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 703,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO BANDERAS",
            "knownSourceExternalId": "metrocolombiaioswl26",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 704,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO AUTOSUR",
            "knownSourceExternalId": "metrocolombiaioswl18",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 749,
            "createdAt": "2023-07-03T10:22:51.154Z",
            "updatedAt": "2023-07-03T10:22:51.154Z",
            "name": "Spid Calle 80",
            "knownSourceExternalId": "spidregco338calle80",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 2007,
            "createdAt": "2023-09-11T15:15:14.713Z",
            "updatedAt": "2023-09-11T15:15:14.713Z",
            "name": "SPID Maricá",
            "knownSourceExternalId": "spidregbr745",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 7
        },
        {
            "id": 813,
            "createdAt": "2023-11-27T16:13:29.904Z",
            "updatedAt": "2023-11-27T16:13:29.904Z",
            "name": "SPID Barra Oceanica",
            "knownSourceExternalId": "spidregbr744",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 7
        },
        {
            "id": 645,
            "createdAt": "2022-10-26T13:24:23.187Z",
            "updatedAt": "2022-10-26T13:24:23.187Z",
            "name": "Spid Alpha Mall",
            "knownSourceExternalId": "spidregbr7",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 7
        },
        {
            "id": 646,
            "createdAt": "2022-10-26T13:24:23.366Z",
            "updatedAt": "2022-10-26T13:24:23.366Z",
            "name": "Spid 7 de Setembro",
            "knownSourceExternalId": "spidregbr6",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 7
        },
        {
            "id": 793,
            "createdAt": "2023-10-05T20:30:56.682Z",
            "updatedAt": "2023-10-05T20:30:56.682Z",
            "name": "SPID Glória",
            "knownSourceExternalId": "spidregbr781",
            "groupCode": "SPID_BR",
            "isCd": false,
            "retailChainId": 7
        },
        {
            "id": 674,
            "createdAt": "2022-12-07T20:13:57.490Z",
            "updatedAt": "2022-12-07T20:13:57.490Z",
            "name": "JUMBO 20 DE JULIO",
            "knownSourceExternalId": "jumbocolombiaioswl17",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 675,
            "createdAt": "2022-12-07T20:14:13.800Z",
            "updatedAt": "2022-12-07T20:14:13.800Z",
            "name": "JUMBO ALTOS DEL PRADO",
            "knownSourceExternalId": "jumbocolombiaioswl43",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 676,
            "createdAt": "2022-12-07T20:18:09.669Z",
            "updatedAt": "2022-12-07T20:18:09.669Z",
            "name": "JUMBO CALLE 170",
            "knownSourceExternalId": "jumbocolombiaioswl14",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 677,
            "createdAt": "2022-12-07T20:19:10.186Z",
            "updatedAt": "2022-12-07T20:19:10.186Z",
            "name": "JUMBO CALLE 80",
            "knownSourceExternalId": "jumbocolombiaioswl11",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 678,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO AUTOSUR",
            "knownSourceExternalId": "jumbocolombiaioswl18",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 816,
            "createdAt": "2024-03-25T14:12:30.322Z",
            "updatedAt": "2024-03-25T14:12:30.322Z",
            "name": "VE - EASY FLORIDA CENTER",
            "knownSourceExternalId": "VE510",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 817,
            "createdAt": "2024-03-25T14:13:13.350Z",
            "updatedAt": "2024-03-25T14:13:13.350Z",
            "name": "VE - EASY CERRILLOS",
            "knownSourceExternalId": "VE522",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 621,
            "createdAt": "2022-05-26T21:13:55.043Z",
            "updatedAt": "2022-05-26T21:13:55.043Z",
            "name": "EASY PORTAL ÑUÑOA",
            "knownSourceExternalId": "E775",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 643,
            "createdAt": "2022-09-21T18:48:57.370Z",
            "updatedAt": "2022-09-21T18:48:57.370Z",
            "name": "DARK STORE PARIS TEMUCO",
            "knownSourceExternalId": "130",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 651,
            "createdAt": "2022-11-30T19:14:29.351Z",
            "updatedAt": "2022-11-30T19:14:29.351Z",
            "name": "Bodega HB Importaciones",
            "knownSourceExternalId": "S11",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 283,
            "createdAt": "2021-09-01T06:06:38.611Z",
            "updatedAt": "2021-09-01T06:06:38.611Z",
            "name": "PARIS LYON",
            "knownSourceExternalId": "9",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 679,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO ZIPAQUIRA",
            "knownSourceExternalId": "metrocolombiaioswl77",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 630,
            "createdAt": "2022-08-19T15:08:40.507Z",
            "updatedAt": "2022-08-19T15:08:40.507Z",
            "name": "Spid Ovalo Papal Trujillo",
            "knownSourceExternalId": "spidregpep027",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 680,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO VENTURA",
            "knownSourceExternalId": "metrocolombiaioswl81",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 640,
            "createdAt": "2022-09-02T05:23:38.427Z",
            "updatedAt": "2022-09-02T05:23:38.427Z",
            "name": "Spid Ramos Mejia (4152)",
            "knownSourceExternalId": "spidregars4152",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 681,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO TINTALITO",
            "knownSourceExternalId": "metrocolombiaioswl71",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 682,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO SOGAMOSO",
            "knownSourceExternalId": "metrocolombiaioswl97",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 683,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO SIMON BOLIVAR",
            "knownSourceExternalId": "metrocolombiaioswl75",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 825,
            "createdAt": "2022-11-15T02:51:47.310Z",
            "updatedAt": "2022-11-15T02:51:47.310Z",
            "name": "WONG BENAVIDES",
            "knownSourceExternalId": "wongfoodqawlschv6iowfqawlt104",
            "groupCode": "WONG",
            "isCd": false,
            "retailChainId": 12
        },
        {
            "id": 684,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO SANTA LUCIA",
            "knownSourceExternalId": "metrocolombiaioswl195",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 685,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO SAN GIL",
            "knownSourceExternalId": "metrocolombiaioswl183",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 686,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO SAN CAYETANO",
            "knownSourceExternalId": "metrocolombiaioswl79",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 687,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO RIOHACHA",
            "knownSourceExternalId": "metrocolombiaioswl40",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 647,
            "createdAt": "2022-11-15T02:51:47.310Z",
            "updatedAt": "2022-11-15T02:51:47.310Z",
            "name": "WONG BENAVIDES",
            "knownSourceExternalId": "wongiot104wio",
            "groupCode": "WONG",
            "isCd": false,
            "retailChainId": 12
        },
        {
            "id": 688,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO PASTO UNICO",
            "knownSourceExternalId": "metrocolombiaioswl171",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 689,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO MOSQUERA",
            "knownSourceExternalId": "metrocolombiaioswl73",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 670,
            "createdAt": "2022-12-07T20:10:12.055Z",
            "updatedAt": "2022-12-07T20:10:12.055Z",
            "name": "WONG MARSANO",
            "knownSourceExternalId": "wongiot121wio",
            "groupCode": "WONG",
            "isCd": false,
            "retailChainId": 12
        },
        {
            "id": 690,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO MONTERIA",
            "knownSourceExternalId": "metrocolombiaioswl85",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 691,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO LIBERTADORES",
            "knownSourceExternalId": "metrocolombiaioswl80",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 692,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO LA 70",
            "knownSourceExternalId": "metrocolombiaioswl32",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 693,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO LA 30",
            "knownSourceExternalId": "metrocolombiaioswl49",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 694,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO IBAGUE",
            "knownSourceExternalId": "metrocolombiaioswl42",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 695,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO GIRON",
            "knownSourceExternalId": "metrocolombiaioswl39",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 656,
            "createdAt": "2022-12-07T20:05:25.182Z",
            "updatedAt": "2022-12-07T20:05:25.182Z",
            "name": "WONG DOS DE MAYO",
            "knownSourceExternalId": "wongiot101wio",
            "groupCode": "WONG",
            "isCd": false,
            "retailChainId": 12
        },
        {
            "id": 657,
            "createdAt": "2022-12-07T20:06:00.503Z",
            "updatedAt": "2022-12-07T20:06:00.503Z",
            "name": "WONG OVALO GUTIERREZ",
            "knownSourceExternalId": "wongiot102wio",
            "groupCode": "WONG",
            "isCd": false,
            "retailChainId": 12
        },
        {
            "id": 113,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL DIAGONAL",
            "knownSourceExternalId": "N688",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 658,
            "createdAt": "2022-12-07T20:06:16.454Z",
            "updatedAt": "2022-12-07T20:06:16.454Z",
            "name": "WONG AURORA",
            "knownSourceExternalId": "wongiot103wio",
            "groupCode": "WONG",
            "isCd": false,
            "retailChainId": 12
        },
        {
            "id": 659,
            "createdAt": "2022-12-07T20:06:49.189Z",
            "updatedAt": "2022-12-07T20:06:49.189Z",
            "name": "WONG CHACARILLA",
            "knownSourceExternalId": "wongiot106wio",
            "groupCode": "WONG",
            "isCd": false,
            "retailChainId": 12
        },
        {
            "id": 660,
            "createdAt": "2022-12-07T20:07:07.708Z",
            "updatedAt": "2022-12-07T20:07:07.708Z",
            "name": "WONG SAN BORJA",
            "knownSourceExternalId": "wongiot107wio",
            "groupCode": "WONG",
            "isCd": false,
            "retailChainId": 12
        },
        {
            "id": 661,
            "createdAt": "2022-12-07T20:07:24.718Z",
            "updatedAt": "2022-12-07T20:07:24.718Z",
            "name": "WONG LA MOLINA",
            "knownSourceExternalId": "wongiot108wio",
            "groupCode": "WONG",
            "isCd": false,
            "retailChainId": 12
        },
        {
            "id": 662,
            "createdAt": "2022-12-07T20:07:42.680Z",
            "updatedAt": "2022-12-07T20:07:42.680Z",
            "name": "WONG SAN MIGUEL",
            "knownSourceExternalId": "wongiot109wio",
            "groupCode": "WONG",
            "isCd": false,
            "retailChainId": 12
        },
        {
            "id": 663,
            "createdAt": "2022-12-07T20:08:06.440Z",
            "updatedAt": "2022-12-07T20:08:06.440Z",
            "name": "WONG CAMACHO",
            "knownSourceExternalId": "wongiot111wio",
            "groupCode": "WONG",
            "isCd": false,
            "retailChainId": 12
        },
        {
            "id": 664,
            "createdAt": "2022-12-07T20:08:40.470Z",
            "updatedAt": "2022-12-07T20:08:40.470Z",
            "name": "WONG LA PLANICIE",
            "knownSourceExternalId": "wongiot114wio",
            "groupCode": "WONG",
            "isCd": false,
            "retailChainId": 12
        },
        {
            "id": 665,
            "createdAt": "2022-12-07T20:08:53.947Z",
            "updatedAt": "2022-12-07T20:08:53.947Z",
            "name": "WONG ALDAVA",
            "knownSourceExternalId": "wongiot115wio",
            "groupCode": "WONG",
            "isCd": false,
            "retailChainId": 12
        },
        {
            "id": 666,
            "createdAt": "2022-12-07T20:09:07.636Z",
            "updatedAt": "2022-12-07T20:09:07.636Z",
            "name": "WONG ASIA",
            "knownSourceExternalId": "wongiot116wio",
            "groupCode": "WONG",
            "isCd": false,
            "retailChainId": 12
        },
        {
            "id": 667,
            "createdAt": "2022-12-07T20:09:21.253Z",
            "updatedAt": "2022-12-07T20:09:21.253Z",
            "name": "WONG CALIFORNIA",
            "knownSourceExternalId": "wongiot117wio",
            "groupCode": "WONG",
            "isCd": false,
            "retailChainId": 12
        },
        {
            "id": 668,
            "createdAt": "2022-12-07T20:09:35.595Z",
            "updatedAt": "2022-12-07T20:09:35.595Z",
            "name": "WONG LARCO",
            "knownSourceExternalId": "wongiot118wio",
            "groupCode": "WONG",
            "isCd": false,
            "retailChainId": 12
        },
        {
            "id": 669,
            "createdAt": "2022-12-07T20:09:51.278Z",
            "updatedAt": "2022-12-07T20:09:51.278Z",
            "name": "WONG BAJADA BALTA",
            "knownSourceExternalId": "wongiot120wio",
            "groupCode": "WONG",
            "isCd": false,
            "retailChainId": 12
        },
        {
            "id": 696,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO FLORIDABLANCA",
            "knownSourceExternalId": "metrocolombiaioswl34",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 697,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO FACATATIVA",
            "knownSourceExternalId": "metrocolombiaioswl74",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 698,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO DUITAMA",
            "knownSourceExternalId": "metrocolombiaioswl28",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 699,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO DOSQUEBRADAS",
            "knownSourceExternalId": "metrocolombiaioswl166",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 700,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO CARTAGO",
            "knownSourceExternalId": "metrocolombiaioswl33",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 635,
            "createdAt": "2022-09-01T03:14:23.669Z",
            "updatedAt": "2022-09-01T03:14:23.669Z",
            "name": "SPID35 Lo Castillo",
            "knownSourceExternalId": "O810",
            "groupCode": "Spid",
            "isCd": false,
            "retailChainId": 9
        },
        {
            "id": 550,
            "createdAt": "2022-05-12T21:06:08.596Z",
            "updatedAt": "2022-05-12T21:06:08.596Z",
            "name": "Spid Graystore Pershing",
            "knownSourceExternalId": "spidregpep012",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 286,
            "createdAt": "2021-09-09T18:14:10.911Z",
            "updatedAt": "2021-09-09T18:14:10.911Z",
            "name": "JUMBO FLORIDA",
            "knownSourceExternalId": "J410",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 707,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO YOPAL",
            "knownSourceExternalId": "jumbocolombiaioswl185",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 708,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO VALLE DE LILI",
            "knownSourceExternalId": "jumbocolombiaioswl13",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 709,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO UNICENTRO",
            "knownSourceExternalId": "jumbocolombiaioswl9",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 710,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO TUNJA",
            "knownSourceExternalId": "jumbocolombiaioswl76",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 711,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO TITAN",
            "knownSourceExternalId": "jumbocolombiaioswl167",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 712,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO SUBA",
            "knownSourceExternalId": "jumbocolombiaioswl70",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 713,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO SANTAFE",
            "knownSourceExternalId": "jumbocolombiaioswl148",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 714,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO SANTA MARTA",
            "knownSourceExternalId": "jumbocolombiaioswl45",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 715,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO SANTA ANA",
            "knownSourceExternalId": "jumbocolombiaioswl19",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 716,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO SAN SILVESTRE",
            "knownSourceExternalId": "jumbocolombiaioswl126",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 717,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO RIONEGRO",
            "knownSourceExternalId": "jumbocolombiaioswl27",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 718,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO PREMIUM PLAZA",
            "knownSourceExternalId": "jumbocolombiaioswl24",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 818,
            "createdAt": "2021-09-01T06:06:38.217Z",
            "updatedAt": "2021-09-01T06:06:38.217Z",
            "name": "VE - Easy Arica",
            "knownSourceExternalId": "VE619",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 425,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid San Luis (4057)",
            "knownSourceExternalId": "spidregars4057",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 448,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid San Isidro (4401)",
            "knownSourceExternalId": "spidregars4401",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 719,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO POPAYAN",
            "knownSourceExternalId": "jumbocolombiaioswl36",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 720,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO PASTO",
            "knownSourceExternalId": "jumbocolombiaioswl128",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 426,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Talcahuano",
            "knownSourceExternalId": "spidregars4302",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 427,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Panorama",
            "knownSourceExternalId": "spidregpep001",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 284,
            "createdAt": "2021-09-01T06:06:38.611Z",
            "updatedAt": "2021-09-01T06:06:38.611Z",
            "name": "PARIS PLAZA VESPUCIO",
            "knownSourceExternalId": "89",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 285,
            "createdAt": "2021-09-01T06:06:38.611Z",
            "updatedAt": "2021-09-01T06:06:38.611Z",
            "name": "PARIS COSTANERA CENTER",
            "knownSourceExternalId": "115",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 644,
            "createdAt": "2022-09-21T11:44:58.171Z",
            "updatedAt": "2022-09-21T11:44:58.171Z",
            "name": "DARK STORE PARIS SERENA",
            "knownSourceExternalId": "128",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 287,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS VALPARAISO",
            "knownSourceExternalId": "13",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 622,
            "createdAt": "2022-07-05T15:59:55.505Z",
            "updatedAt": "2022-07-05T15:59:55.505Z",
            "name": "Spid Méier",
            "knownSourceExternalId": "spidregbr2",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 7
        },
        {
            "id": 826,
            "createdAt": "2022-12-07T20:06:49.189Z",
            "updatedAt": "2022-12-07T20:06:49.189Z",
            "name": "WONG CHACARILLA",
            "knownSourceExternalId": "wongfoodqawlschv6iowfqawlt106",
            "groupCode": "WONG",
            "isCd": false,
            "retailChainId": 12
        },
        {
            "id": 705,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO ALQUERIA",
            "knownSourceExternalId": "metrocolombiaioswl124",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 736,
            "createdAt": "2023-02-09T17:12:56.958Z",
            "updatedAt": "2023-02-09T17:12:56.958Z",
            "name": "Spid San Fernando (4628)",
            "knownSourceExternalId": "spidregars4628",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 706,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "METRO  FONTIBON",
            "knownSourceExternalId": "metrocolombiaioswl78",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 14
        },
        {
            "id": 428,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Cedritos",
            "knownSourceExternalId": "spidregco301cedritos",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 797,
            "createdAt": "2023-10-12T15:48:35.715Z",
            "updatedAt": "2023-10-12T15:48:35.715Z",
            "name": "SPID Calle 170",
            "knownSourceExternalId": "spidregco339calle170",
            "groupCode": "SPID_CO",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 798,
            "createdAt": "2023-10-12T15:48:35.882Z",
            "updatedAt": "2023-10-12T15:48:35.882Z",
            "name": "SPID Loshayuelos",
            "knownSourceExternalId": "spidregco340loshayuelos",
            "groupCode": "SPID_CO",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 799,
            "createdAt": "2023-10-12T15:48:36.042Z",
            "updatedAt": "2023-10-12T15:48:36.042Z",
            "name": "SPID Suba",
            "knownSourceExternalId": "spidregco341suba",
            "groupCode": "SPID_CO",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 800,
            "createdAt": "2023-10-12T15:48:36.218Z",
            "updatedAt": "2023-10-12T15:48:36.218Z",
            "name": "SPID Autosur",
            "knownSourceExternalId": "spidregco342autosur",
            "groupCode": "SPID_CO",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 801,
            "createdAt": "2023-10-12T15:48:36.369Z",
            "updatedAt": "2023-10-12T15:48:36.369Z",
            "name": "SPID 20 de Julio",
            "knownSourceExternalId": "spidregco34320julio",
            "groupCode": "SPID_CO",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 802,
            "createdAt": "2023-10-12T15:48:36.517Z",
            "updatedAt": "2023-10-12T15:48:36.517Z",
            "name": "SPID Las Vegas",
            "knownSourceExternalId": "spidregco344lasvegas",
            "groupCode": "SPID_CO",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 803,
            "createdAt": "2023-10-12T15:48:36.660Z",
            "updatedAt": "2023-10-12T15:48:36.660Z",
            "name": "SPID La 65",
            "knownSourceExternalId": "spidregco345la65",
            "groupCode": "SPID_CO",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 804,
            "createdAt": "2023-10-12T15:48:36.808Z",
            "updatedAt": "2023-10-12T15:48:36.808Z",
            "name": "SPID Bello",
            "knownSourceExternalId": "spidregco346bello",
            "groupCode": "SPID_CO",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 805,
            "createdAt": "2023-10-12T15:48:36.951Z",
            "updatedAt": "2023-10-12T15:48:36.951Z",
            "name": "SPID Altos del Prado",
            "knownSourceExternalId": "spidregco347altosdelprado",
            "groupCode": "SPID_CO",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 806,
            "createdAt": "2023-10-12T15:48:37.102Z",
            "updatedAt": "2023-10-12T15:48:37.102Z",
            "name": "SPID Valle del Lili",
            "knownSourceExternalId": "spidregco348valledellili",
            "groupCode": "SPID_CO",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 522,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Corferias",
            "knownSourceExternalId": "spidregco333corferias",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 523,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Salitre",
            "knownSourceExternalId": "spidregco337salitre",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 524,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Calle49caracas",
            "knownSourceExternalId": "spidregco304calle49caracas",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 525,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Javeriana",
            "knownSourceExternalId": "spidregco335javeriana",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 526,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Calle45caracas",
            "knownSourceExternalId": "spidregco309calle45caracas",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 527,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Surtifruverav.9",
            "knownSourceExternalId": "spidregco312surtifruverav9",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 528,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Calle95",
            "knownSourceExternalId": "spidregco303calle95",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 529,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Antiguocountry",
            "knownSourceExternalId": "spidregco305antiguocountry",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 623,
            "createdAt": "2022-07-05T15:59:55.691Z",
            "updatedAt": "2022-07-05T15:59:55.691Z",
            "name": "Spid Nelson Mandela",
            "knownSourceExternalId": "spidregbr3",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 7
        },
        {
            "id": 624,
            "createdAt": "2022-07-05T15:59:55.885Z",
            "updatedAt": "2022-07-05T15:59:55.885Z",
            "name": "Spid Parque das Rosas",
            "knownSourceExternalId": "spidregbr4",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 7
        },
        {
            "id": 625,
            "createdAt": "2022-07-05T15:59:56.071Z",
            "updatedAt": "2022-07-05T15:59:56.071Z",
            "name": "Spid Barra",
            "knownSourceExternalId": "spidregbr5",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 7
        },
        {
            "id": 740,
            "createdAt": "2023-02-14T17:32:25.282Z",
            "updatedAt": "2023-02-14T17:32:25.282Z",
            "name": "SPID Metrô Carioca",
            "knownSourceExternalId": "spidregbr779",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 7
        },
        {
            "id": 741,
            "createdAt": "2023-02-14T17:32:25.476Z",
            "updatedAt": "2023-02-14T17:32:25.476Z",
            "name": "SPID Farme do Amoedo",
            "knownSourceExternalId": "spidregbr780",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 7
        },
        {
            "id": 636,
            "createdAt": "2022-09-01T03:17:07.995Z",
            "updatedAt": "2022-09-01T03:17:07.995Z",
            "name": "SPID35 El Alba",
            "knownSourceExternalId": "O624",
            "groupCode": "Spid",
            "isCd": false,
            "retailChainId": 9
        },
        {
            "id": 114,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL FREIRE",
            "knownSourceExternalId": "N737",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 115,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL PALOMAR",
            "knownSourceExternalId": "N841",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 116,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LA HERRADURA",
            "knownSourceExternalId": "N658",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 117,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL ANIBAL PINTO",
            "knownSourceExternalId": "N551",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 118,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LA CANTERA",
            "knownSourceExternalId": "N845",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 745,
            "createdAt": "2023-03-29T04:44:35.175Z",
            "updatedAt": "2023-03-29T04:44:35.175Z",
            "name": "SPID Las Condes Trigales",
            "knownSourceExternalId": "O496",
            "groupCode": "Spid",
            "isCd": false,
            "retailChainId": 9
        },
        {
            "id": 734,
            "createdAt": "2023-01-10T14:22:41.736Z",
            "updatedAt": "2023-01-10T14:22:41.736Z",
            "name": "EASY SANTA AMALIA",
            "knownSourceExternalId": "E874",
            "groupCode": "EASY",
            "isCd": false,
            "retailChainId": 3
        },
        {
            "id": 1,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO VALPARAISO",
            "knownSourceExternalId": "J520",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 2,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO LA SERENA",
            "knownSourceExternalId": "J521",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 3,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO ANTOFAGASTA",
            "knownSourceExternalId": "J534",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 4,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO CALAMA",
            "knownSourceExternalId": "J614",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 5,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO ARICA",
            "knownSourceExternalId": "J619",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 6,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO SUPER ULRIKSEN",
            "knownSourceExternalId": "J656",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 7,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO IQUIQUE",
            "knownSourceExternalId": "J660",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 742,
            "createdAt": "2023-03-02T01:24:04.489Z",
            "updatedAt": "2023-03-02T01:24:04.489Z",
            "name": "PARIS CD RENCA PAQUETERIA",
            "knownSourceExternalId": "100-SPREAD",
            "groupCode": "PARIS",
            "isCd": true,
            "retailChainId": 2
        },
        {
            "id": 8,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO COPIAPO",
            "knownSourceExternalId": "J760",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 9,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO BELLOTO",
            "knownSourceExternalId": "J781",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 10,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO PUNTO ENCUENTRO",
            "knownSourceExternalId": "J796",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 11,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO ANTOFAGASTA SUR",
            "knownSourceExternalId": "J817",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 12,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO SUPER COPIAPO (JUMBO SÚPER)",
            "knownSourceExternalId": "J844",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 753,
            "createdAt": "2023-07-13T14:08:38.252Z",
            "updatedAt": "2023-07-13T14:08:38.252Z",
            "name": "LAURO DE FREITAS",
            "knownSourceExternalId": "gbarbosab108",
            "groupCode": "GBARBOSA",
            "isCd": false,
            "retailChainId": 16
        },
        {
            "id": 626,
            "createdAt": "2022-07-08T16:00:40.670Z",
            "updatedAt": "2022-07-08T16:00:40.670Z",
            "name": "Spid Pardo Miraflores",
            "knownSourceExternalId": "spidregpep025",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 627,
            "createdAt": "2022-07-08T16:00:40.897Z",
            "updatedAt": "2022-07-08T16:00:40.897Z",
            "name": "Spid Camacho",
            "knownSourceExternalId": "spidregpep026",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 13,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO MAIPU",
            "knownSourceExternalId": "J503",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 451,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Sucre (4012)",
            "knownSourceExternalId": "spidregars4012",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 653,
            "createdAt": "2022-12-06T16:26:29.458Z",
            "updatedAt": "2022-12-06T16:26:29.458Z",
            "name": "Spid Camacua (4403)",
            "knownSourceExternalId": "spidregars4403",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 654,
            "createdAt": "2022-12-06T16:33:35.475Z",
            "updatedAt": "2022-12-06T16:33:35.475Z",
            "name": "Spid Tronador (4259)",
            "knownSourceExternalId": "spidregars4259",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 737,
            "createdAt": "2023-02-09T19:39:53.719Z",
            "updatedAt": "2023-02-09T19:39:53.719Z",
            "name": "Spid La Marina",
            "knownSourceExternalId": "spidregpep028",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 739,
            "createdAt": "2023-02-09T19:48:07.498Z",
            "updatedAt": "2023-02-09T19:48:07.498Z",
            "name": "Spid Vicente López (4304)",
            "knownSourceExternalId": "spidregars4304",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 14,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO VIÑA",
            "knownSourceExternalId": "J508",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 754,
            "createdAt": "2023-07-13T14:08:46.172Z",
            "updatedAt": "2023-07-13T14:08:46.172Z",
            "name": "FREIRA DE SANTANA",
            "knownSourceExternalId": "gbarbosab015",
            "groupCode": "GBARBOSA",
            "isCd": false,
            "retailChainId": 16
        },
        {
            "id": 755,
            "createdAt": "2023-07-13T14:08:46.172Z",
            "updatedAt": "2023-07-13T14:08:46.172Z",
            "name": "VITORIDA DA CONQUISTA",
            "knownSourceExternalId": "gbarbosab112",
            "groupCode": "GBARBOSA",
            "isCd": false,
            "retailChainId": 16
        },
        {
            "id": 756,
            "createdAt": "2023-07-13T14:08:46.172Z",
            "updatedAt": "2023-07-13T14:08:46.172Z",
            "name": "STELLA MARIS - MACEIO",
            "knownSourceExternalId": "gbarbosab084",
            "groupCode": "GBARBOSA",
            "isCd": false,
            "retailChainId": 16
        },
        {
            "id": 757,
            "createdAt": "2023-07-13T14:08:46.172Z",
            "updatedAt": "2023-07-13T14:08:46.172Z",
            "name": "GUARAJUBA",
            "knownSourceExternalId": "gbarbosab274",
            "groupCode": "GBARBOSA",
            "isCd": false,
            "retailChainId": 16
        },
        {
            "id": 758,
            "createdAt": "2023-07-13T14:08:46.172Z",
            "updatedAt": "2023-07-13T14:08:46.172Z",
            "name": "PADRE VALDEVINO",
            "knownSourceExternalId": "gbarbosab198",
            "groupCode": "GBARBOSA",
            "isCd": false,
            "retailChainId": 16
        },
        {
            "id": 759,
            "createdAt": "2023-07-13T14:08:46.172Z",
            "updatedAt": "2023-07-13T14:08:46.172Z",
            "name": "JARDINS",
            "knownSourceExternalId": "gbarbosab006",
            "groupCode": "GBARBOSA",
            "isCd": false,
            "retailChainId": 16
        },
        {
            "id": 530,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Alhambra",
            "knownSourceExternalId": "spidregco334alhambra",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 15,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO FLORIDA",
            "knownSourceExternalId": "J510",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 16,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO EL LLANO",
            "knownSourceExternalId": "J513",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 17,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO PEÑALOLEN",
            "knownSourceExternalId": "J519",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 18,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO CON CON",
            "knownSourceExternalId": "J739",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 19,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO PAJARITOS",
            "knownSourceExternalId": "J770",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 20,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO ÑUÑOA",
            "knownSourceExternalId": "J775",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 21,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO 14 NORTE / VIÑA DEL MAR",
            "knownSourceExternalId": "J875",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 22,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO INDEPENDENCIA",
            "knownSourceExternalId": "J989",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 760,
            "createdAt": "2023-07-13T14:08:46.172Z",
            "updatedAt": "2023-07-13T14:08:46.172Z",
            "name": "CD ARACAJU",
            "knownSourceExternalId": "gbarbosab101",
            "groupCode": "GBARBOSA",
            "isCd": false,
            "retailChainId": 16
        },
        {
            "id": 751,
            "createdAt": "2023-07-13T13:52:16.880Z",
            "updatedAt": "2023-07-13T13:52:16.880Z",
            "name": "Costa Azul - Salvador",
            "knownSourceExternalId": "gbarbosab035",
            "groupCode": "GBARBOSA",
            "isCd": false,
            "retailChainId": 16
        },
        {
            "id": 531,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Cra3centro",
            "knownSourceExternalId": "spidregco336cra3centro",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 532,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Calle148",
            "knownSourceExternalId": "spidregco329calle148",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 533,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Surtifruverautonorte",
            "knownSourceExternalId": "spidregco311surtifruverautonorte",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 429,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Recreio",
            "knownSourceExternalId": "spidregbr1",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 7
        },
        {
            "id": 632,
            "createdAt": "2022-08-30T05:43:15.376Z",
            "updatedAt": "2022-08-30T05:43:15.376Z",
            "name": "SPID35 Providencia",
            "knownSourceExternalId": "O557",
            "groupCode": "Spid",
            "isCd": false,
            "retailChainId": 9
        },
        {
            "id": 748,
            "createdAt": "2023-05-16T15:56:30.775Z",
            "updatedAt": "2023-05-16T15:56:30.775Z",
            "name": "SPID Las Condes",
            "knownSourceExternalId": "O714",
            "groupCode": "Spid",
            "isCd": false,
            "retailChainId": 9
        },
        {
            "id": 807,
            "createdAt": "2023-10-13T14:50:37.727Z",
            "updatedAt": "2023-10-13T14:50:37.727Z",
            "name": "SPID San Damian",
            "knownSourceExternalId": "O865",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 9
        },
        {
            "id": 746,
            "createdAt": "2023-03-29T18:17:43.231Z",
            "updatedAt": "2023-03-29T18:17:43.231Z",
            "name": "QUICKCOMMERCE FLEMING",
            "knownSourceExternalId": "O727",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 9
        },
        {
            "id": 832,
            "createdAt": "2024-07-12T16:46:41.705Z",
            "updatedAt": "2024-07-12T16:46:41.705Z",
            "name": "DARKSTORE MAIPU",
            "knownSourceExternalId": "jumbo-46",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 119,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL CORONEL",
            "knownSourceExternalId": "N679",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 120,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL MANUEL MONTT (CORONEL)",
            "knownSourceExternalId": "N983",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 121,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL CURACAVÍ",
            "knownSourceExternalId": "N818",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 122,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL CURAUMA",
            "knownSourceExternalId": "N561",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 123,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL CURICÓ",
            "knownSourceExternalId": "N645",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 124,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL CAMILO HENRIQUEZ",
            "knownSourceExternalId": "N687",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 125,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL CURICÓ CENTRO",
            "knownSourceExternalId": "N838",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 126,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LOS BOLDOS",
            "knownSourceExternalId": "N909",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 792,
            "createdAt": "2023-09-26T14:06:27.293Z",
            "updatedAt": "2023-09-26T14:06:27.293Z",
            "name": "Spid Marsano",
            "knownSourceExternalId": "spidregpep020",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 127,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL DOÑIHUE ",
            "knownSourceExternalId": "N831",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 810,
            "createdAt": "2023-10-30T13:43:32.080Z",
            "updatedAt": "2023-10-30T13:43:32.080Z",
            "name": "Spid Lomas",
            "knownSourceExternalId": "spidregars4204",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 128,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL EL BOSQUE",
            "knownSourceExternalId": "N702",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 129,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL ESTACIÓN CENTRAL",
            "knownSourceExternalId": "N606",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 130,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL HUASCO",
            "knownSourceExternalId": "N902",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 131,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL PEDRO FONTOVA",
            "knownSourceExternalId": "N692",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 132,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL DORSAL",
            "knownSourceExternalId": "N802",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 133,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL VIVACETA",
            "knownSourceExternalId": "N611",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 134,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL TARAPACÁ",
            "knownSourceExternalId": "N590",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 135,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL ALTO HOSPICIO",
            "knownSourceExternalId": "N811",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 136,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LA ISLITA",
            "knownSourceExternalId": "N923",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 137,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL J J PÉREZ",
            "knownSourceExternalId": "N544",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 138,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL ZENTENO",
            "knownSourceExternalId": "N549",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 139,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL INTERMODAL",
            "knownSourceExternalId": "N601",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 140,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LA CISTERNA, PARADERO 18",
            "knownSourceExternalId": "N765",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 141,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LA CRUZ",
            "knownSourceExternalId": "N839",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 142,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL TRINIDAD",
            "knownSourceExternalId": "N834",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 144,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL EL ALBA",
            "knownSourceExternalId": "N766",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 145,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LOS PENSAMIENTOS",
            "knownSourceExternalId": "N699",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 146,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LA LIGUA",
            "knownSourceExternalId": "N753",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 147,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LA PINTANA",
            "knownSourceExternalId": "N605",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 148,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL PLAZA DON CARLOS",
            "knownSourceExternalId": "N626",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 150,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL PATIO LA REINA",
            "knownSourceExternalId": "N971",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 151,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL SAN JOAQUIN",
            "knownSourceExternalId": "N648",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 152,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL CIENFUEGOS",
            "knownSourceExternalId": "N730",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 153,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LAS COMPAÑIAS",
            "knownSourceExternalId": "N790",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 154,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL BALMACEDA",
            "knownSourceExternalId": "N827",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 155,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LA FLORIDA (LA SERENA)",
            "knownSourceExternalId": "N836",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 157,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LABRANZA",
            "knownSourceExternalId": "N978",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 158,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL VALLE GRANDE",
            "knownSourceExternalId": "N651",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 159,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LOS DOMINICOS",
            "knownSourceExternalId": "N609",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 160,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL ARTESANOS",
            "knownSourceExternalId": "N635",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 161,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL FLEMING",
            "knownSourceExternalId": "N639",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 824,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL huerfanos",
            "knownSourceExternalId": "homologhuerfanos",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 794,
            "createdAt": "2023-10-05T20:32:48.951Z",
            "updatedAt": "2023-10-05T20:32:48.951Z",
            "name": "SISA Agua Santa",
            "knownSourceExternalId": "aguasanta",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 795,
            "createdAt": "2023-10-05T20:33:36.182Z",
            "updatedAt": "2023-10-05T20:33:36.182Z",
            "name": "SISA Pedro Fontova",
            "knownSourceExternalId": "pedrofontova",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 811,
            "createdAt": "2022-05-19T07:15:23.322Z",
            "updatedAt": "2022-05-19T07:15:23.322Z",
            "name": "SISA Temuco Pablo Neruda",
            "knownSourceExternalId": "temucopabloneruda",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 162,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL CANTAGALLO",
            "knownSourceExternalId": "N776",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 163,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL APOQUINDO",
            "knownSourceExternalId": "N777",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 164,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL URMENETA",
            "knownSourceExternalId": "N691",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 271,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL PEÑABLANCA",
            "knownSourceExternalId": "N638",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 165,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LIMACHE VIEJO",
            "knownSourceExternalId": "N657",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 166,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LINARES",
            "knownSourceExternalId": "N524",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 167,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL YUMBEL",
            "knownSourceExternalId": "N683",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 168,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL EL GABINO",
            "knownSourceExternalId": "N553",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 169,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LAS REJAS",
            "knownSourceExternalId": "N603",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 170,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL CHACABUCO",
            "knownSourceExternalId": "N665",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 171,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL PASCUAL BABURIZZA",
            "knownSourceExternalId": "N852",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 172,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL VILLAGRÁN",
            "knownSourceExternalId": "N742",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 173,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL AVENIDA ALEMANA",
            "knownSourceExternalId": "N761",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 174,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL MACHALÍ",
            "knownSourceExternalId": "N924",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 177,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL PAJARITOS VESPUCIO",
            "knownSourceExternalId": "N757",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 178,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL MAIPÚ CENTRO",
            "knownSourceExternalId": "N806",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 179,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL EL BOSQUE, MAIPÚ",
            "knownSourceExternalId": "N987",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 180,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL PAJARITOS LAS PARCELAS",
            "knownSourceExternalId": "N604",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 181,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL CIUDAD SATÉLITE",
            "knownSourceExternalId": "N769",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 23,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO BILBAO",
            "knownSourceExternalId": "J501",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 182,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL VICUÑA MACKENA",
            "knownSourceExternalId": "N595",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 183,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL MANSO",
            "knownSourceExternalId": "N667",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 184,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL MOLINA",
            "knownSourceExternalId": "N973",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 185,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL MULCHÉN",
            "knownSourceExternalId": "N927",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 186,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL BUSTAMANTE",
            "knownSourceExternalId": "N593",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 187,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL CÉSAR ERCILLA",
            "knownSourceExternalId": "N585",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 188,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL RAHUE",
            "knownSourceExternalId": "N824",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 189,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL OVALLE",
            "knownSourceExternalId": "N908",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 631,
            "createdAt": "2022-08-30T05:40:00.626Z",
            "updatedAt": "2022-08-30T05:40:00.626Z",
            "name": "SPID35 Maitencillo",
            "knownSourceExternalId": "J872",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 190,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL OVALLE CENTRO",
            "knownSourceExternalId": "N979",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 191,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL OCHAGAVIA",
            "knownSourceExternalId": "N643",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 192,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL PADRE HURTADO",
            "knownSourceExternalId": "N976",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 193,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL PAINE",
            "knownSourceExternalId": "N914",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 194,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL PEÑAFLOR",
            "knownSourceExternalId": "N755",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 196,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL GRECIA",
            "knownSourceExternalId": "N736",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 197,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL CONSISTORIAL",
            "knownSourceExternalId": "N991",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 198,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL PROVIDENCIA",
            "knownSourceExternalId": "N669",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 200,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LA TRAVESÍA",
            "knownSourceExternalId": "N594",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 24,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO KENNEDY",
            "knownSourceExternalId": "J502",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 25,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO COSTANERA",
            "knownSourceExternalId": "J511",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 143,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SPID Enrique Olivares",
            "knownSourceExternalId": "N764",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 201,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LA FARFANA",
            "knownSourceExternalId": "N589",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 202,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL CONCHA Y TORO",
            "knownSourceExternalId": "N672",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 203,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL EL PEÑÓN",
            "knownSourceExternalId": "N918",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 204,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL VALLE VOLCANES",
            "knownSourceExternalId": "N587",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 205,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL DIEGO PORTALES (PUERO MONTT)",
            "knownSourceExternalId": "N734",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 206,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL SARGENTO SILVA",
            "knownSourceExternalId": "N904",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 208,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL COLÓN",
            "knownSourceExternalId": "N906",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 209,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LO MARCOLETA",
            "knownSourceExternalId": "N634",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 210,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LO CAMPINO",
            "knownSourceExternalId": "N636",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 211,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL PRAT",
            "knownSourceExternalId": "N540",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 212,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LAS ARAUCARIAS",
            "knownSourceExternalId": "N848",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 213,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL PORTAL QUILLOTA",
            "knownSourceExternalId": "N646",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 214,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LOS PINOS",
            "knownSourceExternalId": "N822",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 215,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL VALENCIA",
            "knownSourceExternalId": "N813",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 216,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LOS CARRERAS",
            "knownSourceExternalId": "N537",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 217,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL FREIRE EL BELLO",
            "knownSourceExternalId": "N538",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 218,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL CLAUDIO VICUÑA",
            "knownSourceExternalId": "N543",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 26,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO LA REINA",
            "knownSourceExternalId": "J512",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 27,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO LA DEHESA",
            "knownSourceExternalId": "J514",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 219,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL DIEGO PORTALES (QUILPUÉ)",
            "knownSourceExternalId": "N693",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 220,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL PORTAL EL BELLOTO",
            "knownSourceExternalId": "N781",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 222,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL CATAMARCA",
            "knownSourceExternalId": "N759",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 223,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL REPÚBLICA DE CHILE",
            "knownSourceExternalId": "N803",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 224,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL CENTRO REX",
            "knownSourceExternalId": "N807",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 225,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL VILLA EL TENIENTE",
            "knownSourceExternalId": "N829",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 226,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL BOSQUES DE SAN FRANCISCO",
            "knownSourceExternalId": "N915",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 227,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL RECOLETA",
            "knownSourceExternalId": "N823",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 228,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL RENCA",
            "knownSourceExternalId": "N706",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 229,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL SAN ANTONIO",
            "knownSourceExternalId": "N756",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 230,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL EUCALIPTUS",
            "knownSourceExternalId": "N847",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 231,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL ALMIRANTE RIVEROS",
            "knownSourceExternalId": "N926",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 232,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SAN FRANCISCO DE MOSTAZAL",
            "knownSourceExternalId": "N832",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 233,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL YUNGAY",
            "knownSourceExternalId": "N731",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 234,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL MERCED",
            "knownSourceExternalId": "N664",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 149,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SPID35 La Reina Av Larrain",
            "knownSourceExternalId": "N707",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 544,
            "createdAt": "2021-12-14T13:15:54.365Z",
            "updatedAt": "2021-12-14T13:15:54.365Z",
            "name": "SANTA ISABEL PIRQUE",
            "knownSourceExternalId": "N877",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 156,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LA UNIÓN",
            "knownSourceExternalId": "N744",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 175,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SPID Maipu 3 Poniente",
            "knownSourceExternalId": "N758",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 176,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SPID Ciudad Satélite",
            "knownSourceExternalId": "N654",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 195,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SPID Tobalaba",
            "knownSourceExternalId": "N698",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 199,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SPID35 SISA Las Condes Francisco Bilbao",
            "knownSourceExternalId": "N704",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 545,
            "createdAt": "2021-12-14T13:15:54.365Z",
            "updatedAt": "2021-12-14T13:15:54.365Z",
            "name": "SANTA ISABEL COLINA",
            "knownSourceExternalId": "N878",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 96,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL 14 DE FEBRERO",
            "knownSourceExternalId": "N797",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 97,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL MAIPÚ (ANTOFAGASTA)",
            "knownSourceExternalId": "N798",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 98,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL PEDRO AGUIRRE CERDA",
            "knownSourceExternalId": "N729",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 99,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL ARICA LYNCH",
            "knownSourceExternalId": "N804",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 100,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL RENATO ROCCA ARICA",
            "knownSourceExternalId": "N812",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 101,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL CALAMA",
            "knownSourceExternalId": "N820",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 102,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL CALERA DE TANGO",
            "knownSourceExternalId": "N747",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 103,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL CASABLANCA",
            "knownSourceExternalId": "N849",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 104,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL CHIGUAYANTE",
            "knownSourceExternalId": "N835",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 105,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL LAS PALMAS",
            "knownSourceExternalId": "N907",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 106,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL EL ROBLE",
            "knownSourceExternalId": "N663",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 111,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL COLLAO",
            "knownSourceExternalId": "N801",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 112,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL VEGA MONUMENTAL",
            "knownSourceExternalId": "N678",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 821,
            "createdAt": "2023-10-05T20:32:48.951Z",
            "updatedAt": "2023-10-05T20:32:48.951Z",
            "name": "SANTA ISABEL SAN PABLO",
            "knownSourceExternalId": "sanpablo",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 247,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL TALAGANTE",
            "knownSourceExternalId": "N975",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 269,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL VICTORIA",
            "knownSourceExternalId": "N985",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 258,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL FUNDO EL CARMEN",
            "knownSourceExternalId": "N597",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 207,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL PUERTO VARAS",
            "knownSourceExternalId": "N733",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 822,
            "createdAt": "2023-10-05T20:32:48.951Z",
            "updatedAt": "2023-10-05T20:32:48.951Z",
            "name": "SISA Agua Santa",
            "knownSourceExternalId": "homologaguasanta",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 235,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL SAN FERNANDO",
            "knownSourceExternalId": "N740",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 236,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL SAN PEDRO DEL MAR",
            "knownSourceExternalId": "N596",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 288,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS LA SERENA",
            "knownSourceExternalId": "21",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 289,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS ALTO LAS CONDES",
            "knownSourceExternalId": "20",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 290,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS ARAUCO MAIPÚ",
            "knownSourceExternalId": "102",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 291,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS PORTAL RANCAGUA ",
            "knownSourceExternalId": "40",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 292,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS PORTAL TEMUCO",
            "knownSourceExternalId": "41",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 293,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS FLORIDA CENTER ",
            "knownSourceExternalId": "64",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 294,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS PORTAL LA DEHESA",
            "knownSourceExternalId": "123",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 295,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS QUILIN",
            "knownSourceExternalId": "118",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 298,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS TEMUCO CENTRO (PRAT)",
            "knownSourceExternalId": "87",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 299,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS PLAZA OESTE",
            "knownSourceExternalId": "10",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 300,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS PLAZA TREBOL",
            "knownSourceExternalId": "16",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 301,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS BARROS ARANA",
            "knownSourceExternalId": "17",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 302,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS MARINA ARAUCO",
            "knownSourceExternalId": "22",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 303,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS TOBALABA",
            "knownSourceExternalId": "23",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 304,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS PLAZA NORTE ",
            "knownSourceExternalId": "37",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 305,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS TALCA",
            "knownSourceExternalId": "38",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 306,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS CALAMA",
            "knownSourceExternalId": "39",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 307,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS PLAZA LOS ANGELES",
            "knownSourceExternalId": "44",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 308,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS CHILLAN - EL ROBLE",
            "knownSourceExternalId": "60",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 309,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS PUERTO MONTT",
            "knownSourceExternalId": "25",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 310,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS AHUMADA",
            "knownSourceExternalId": "26",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 311,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS ANTOFAGASTA",
            "knownSourceExternalId": "30",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 312,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS IQUIQUE",
            "knownSourceExternalId": "103",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 313,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS CURICO",
            "knownSourceExternalId": "19",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 314,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS BANDERA",
            "knownSourceExternalId": "104",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 315,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS SAN BERNARDO",
            "knownSourceExternalId": "101",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 316,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS ESTACION CENTRAL",
            "knownSourceExternalId": "106",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 317,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS PORTAL OSORNO",
            "knownSourceExternalId": "109",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 318,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS SAN ANTONIO",
            "knownSourceExternalId": "111",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 319,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS COPIAPO",
            "knownSourceExternalId": "105",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 320,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS PORTAL ÑUÑOA",
            "knownSourceExternalId": "108",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 321,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS EL BELLOTO",
            "knownSourceExternalId": "107",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 322,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS ARICA",
            "knownSourceExternalId": "110",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 323,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS RANCAGUA REX",
            "knownSourceExternalId": "116",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 324,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS QUILICURA",
            "knownSourceExternalId": "119",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 325,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS COQUIMBO",
            "knownSourceExternalId": "124",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 430,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid 466 - Armada Argentina",
            "knownSourceExternalId": "spidregars4466",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 431,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Ricchieri",
            "knownSourceExternalId": "spidregars4460",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 432,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Velez 1",
            "knownSourceExternalId": "spidregars4444",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 433,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid 34 Patricia.",
            "knownSourceExternalId": "spidregars4402",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 296,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS ALAMEDA",
            "knownSourceExternalId": "1",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 435,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Salta",
            "knownSourceExternalId": "spidregars4251",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 436,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Tucuman",
            "knownSourceExternalId": "spidregars4227",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 437,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Mendoza",
            "knownSourceExternalId": "spidregars4222",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 438,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Neuquén",
            "knownSourceExternalId": "spidregars4216",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 439,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid 2 Sarmiento Y Alen.",
            "knownSourceExternalId": "spidregars4171",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 440,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Sarmiento",
            "knownSourceExternalId": "spidregars4125",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 441,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid 114 - Juan B. Justo",
            "knownSourceExternalId": "spidregars4114",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 473,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Jumbo Las Heras",
            "knownSourceExternalId": "spidregars4121",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 443,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Terminal",
            "knownSourceExternalId": "spidregars4071",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 28,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO LOS DOMINICOS",
            "knownSourceExternalId": "J624",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 445,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Mitre",
            "knownSourceExternalId": "spidregars4040",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 446,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid 32 - Buchardo",
            "knownSourceExternalId": "spidregars4032",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 447,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Cerro",
            "knownSourceExternalId": "spidregars4029",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 29,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO LOS TRAPENSES",
            "knownSourceExternalId": "J762",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 449,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Lomas De Zamora",
            "knownSourceExternalId": "spidregars4009",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 450,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Sm010 - Larrea",
            "knownSourceExternalId": "spidregars4010",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 30,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO LO CASTILLO (JUMBO SÚPER)",
            "knownSourceExternalId": "J810",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 452,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Paraguay",
            "knownSourceExternalId": "spidregars4016",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 31,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO PUERTAS DE CHICUREO",
            "knownSourceExternalId": "J988",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 454,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Sm020 - Lanus",
            "knownSourceExternalId": "spidregars4020",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 455,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Santa Fe",
            "knownSourceExternalId": "spidregars4022",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 456,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Savoy",
            "knownSourceExternalId": "spidregars4026",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 32,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO CHAMISERO (JUMBO SÚPER)",
            "knownSourceExternalId": "J992",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 458,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Uriburu",
            "knownSourceExternalId": "spidregars4035",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 459,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Adrogue",
            "knownSourceExternalId": "spidregars4037",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 33,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO RANCAGUA",
            "knownSourceExternalId": "J504",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 461,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Boulevard",
            "knownSourceExternalId": "spidregars4045",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 462,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Esmeralda",
            "knownSourceExternalId": "spidregars4046",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 34,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO PTE. ALTO",
            "knownSourceExternalId": "J613",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 465,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Elcano",
            "knownSourceExternalId": "spidregars4054",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 467,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Vea Luro Y Guido",
            "knownSourceExternalId": "spidregars4056",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 35,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO CONCHA Y TORO",
            "knownSourceExternalId": "J659",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 469,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Alberti",
            "knownSourceExternalId": "spidregars4059",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 36,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO MIRAFLORES (JUMBO SÚPER)",
            "knownSourceExternalId": "J754",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 472,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Sm119 - Araoz",
            "knownSourceExternalId": "spidregars4119",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 474,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Vea Padua",
            "knownSourceExternalId": "spidregars4150",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 475,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Moron Ii",
            "knownSourceExternalId": "spidregars4154",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 38,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO MEMBRILLAR (JUMBO SÚPER)",
            "knownSourceExternalId": "J825",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 477,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Moreno Ii",
            "knownSourceExternalId": "spidregars4161",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 478,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Bella Vista",
            "knownSourceExternalId": "spidregars4163",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 479,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Vea 21 Paso De Los Ande",
            "knownSourceExternalId": "spidregars4188",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 297,
            "createdAt": "2021-12-02T21:44:12.578Z",
            "updatedAt": "2021-12-02T21:44:12.578Z",
            "name": "PARIS PARQUE ARAUCO",
            "knownSourceExternalId": "88",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 828,
            "createdAt": "2024-07-11T04:24:54.630Z",
            "updatedAt": "2024-07-11T04:24:54.630Z",
            "name": "SPID Morandé",
            "knownSourceExternalId": "O495",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 9
        },
        {
            "id": 470,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid La Plata (4063)",
            "knownSourceExternalId": "spidregars4063",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 481,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid La Horqueta (4235)",
            "knownSourceExternalId": "spidregars4235",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 463,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Gascón (4048)",
            "knownSourceExternalId": "spidregars4048",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 466,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Juan B Justo (4055)",
            "knownSourceExternalId": "spidregars4055",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 483,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Vea Edison",
            "knownSourceExternalId": "spidregars4241",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 484,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Jose Maria Moreno",
            "knownSourceExternalId": "spidregars4247",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 486,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Vea Chacabuco.",
            "knownSourceExternalId": "spidregars4440",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 487,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Nuevo Centro",
            "knownSourceExternalId": "spidregars4451",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 489,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid San Cristobal",
            "knownSourceExternalId": "spidregars4630",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 490,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Vea Calle 47",
            "knownSourceExternalId": "spidregars4640",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 491,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Cordoba",
            "knownSourceExternalId": "spidregars4659",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 39,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO SAN BERNARDO",
            "knownSourceExternalId": "J843",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 40,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO CHILLAN",
            "knownSourceExternalId": "J532",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 495,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Sm697 - Pacheco",
            "knownSourceExternalId": "spidregars4697",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 496,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Sm700 - Cordoba",
            "knownSourceExternalId": "spidregars4702",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 497,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Directorio",
            "knownSourceExternalId": "spidregars4701",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 41,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO TALCA",
            "knownSourceExternalId": "J591",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 499,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Sm063 - Hipermercado",
            "knownSourceExternalId": "spidregars4942",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 500,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Venado Tuerto",
            "knownSourceExternalId": "spidregars4953",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 501,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Vea Av. San Martín 6795",
            "knownSourceExternalId": "spidregars4973",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 42,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO CURICO",
            "knownSourceExternalId": "J592",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 43,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO CONCE. HUALPEN",
            "knownSourceExternalId": "J633",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 44,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO VICENTE MENDEZ(JUMBO SÚPER)",
            "knownSourceExternalId": "J649",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 507,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Palermo",
            "knownSourceExternalId": "spidregars4206",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 45,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO PEDRO DE VALDIVIA (JUMBO SÚPER)",
            "knownSourceExternalId": "J676",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 46,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO CONCE. CENTRO",
            "knownSourceExternalId": "J809",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 47,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO SANTA CRUZ (JUMBO SÚPER)",
            "knownSourceExternalId": "J851",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 48,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO TALCA (JUMBO SÚPER)",
            "knownSourceExternalId": "J957",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 50,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO PTO. MONTT",
            "knownSourceExternalId": "J507",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 513,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Rosario",
            "knownSourceExternalId": "spidregars4218",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 514,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Almagro",
            "knownSourceExternalId": "spidregars4231",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 51,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO LOS ANGELES",
            "knownSourceExternalId": "J695",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 516,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Acoyte",
            "knownSourceExternalId": "spidregars4260",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 519,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Comodoro",
            "knownSourceExternalId": "spidregars4277",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 534,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Larcomar",
            "knownSourceExternalId": "spidregpep002",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 535,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid San Felipe",
            "knownSourceExternalId": "spidregpep003",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 536,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Barranco-ovalo Balta",
            "knownSourceExternalId": "spidregpep004",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 537,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Chorrillos",
            "knownSourceExternalId": "spidregpep005",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 538,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Canadá",
            "knownSourceExternalId": "spidregpep006",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 539,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Aldabas",
            "knownSourceExternalId": "spidregpep007",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 540,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid San Juan De Miraflores",
            "knownSourceExternalId": "spidregpep008",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 541,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Ate",
            "knownSourceExternalId": "spidregpep009",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 52,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO OSORNO",
            "knownSourceExternalId": "J748",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 53,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO PUERTO VARAS (JUMBO SÚPER)",
            "knownSourceExternalId": "J919",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 54,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO VALDIVIA",
            "knownSourceExternalId": "J955",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 55,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO LOS PABLOS (JUMBO SÚPER)",
            "knownSourceExternalId": "J970",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 37,
            "createdAt": "2021-09-01T06:06:38.213Z",
            "updatedAt": "2021-09-01T06:06:38.213Z",
            "name": "JUMBO LOS ANDES",
            "knownSourceExternalId": "J780",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 721,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO MERCURIO SOACHA",
            "knownSourceExternalId": "jumbocolombiaioswl48",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 722,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO MEGA MALL",
            "knownSourceExternalId": "jumbocolombiaioswl84",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 723,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO LAS VEGAS",
            "knownSourceExternalId": "jumbocolombiaioswl22",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 724,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO HAYUELOS",
            "knownSourceExternalId": "jumbocolombiaioswl15",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 725,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO GUATAPURI",
            "knownSourceExternalId": "jumbocolombiaioswl87",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 726,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO GIRARDOT",
            "knownSourceExternalId": "jumbocolombiaioswl47",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 727,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO DE LA 65",
            "knownSourceExternalId": "jumbocolombiaioswl23",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 728,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO CHIPICHAPE",
            "knownSourceExternalId": "jumbocolombiaioswl31",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 729,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO CHIA",
            "knownSourceExternalId": "jumbocolombiaioswl44",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 730,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO CARRERA 30",
            "knownSourceExternalId": "jumbocolombiaioswl16",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 731,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO CARIBE PLAZA",
            "knownSourceExternalId": "jumbocolombiaioswl83",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 732,
            "createdAt": "2022-12-07T20:22:12.146Z",
            "updatedAt": "2022-12-07T20:22:12.146Z",
            "name": "JUMBO CANAVERALL",
            "knownSourceExternalId": "jumbocolombiaioswl108",
            "groupCode": "JUMBO",
            "isCd": false,
            "retailChainId": 1
        },
        {
            "id": 823,
            "createdAt": "2024-06-04T03:17:14.840Z",
            "updatedAt": "2024-06-04T03:17:14.840Z",
            "name": "VP Paris Alto Las Condes",
            "knownSourceExternalId": "VP-20",
            "groupCode": "PARIS",
            "isCd": false,
            "retailChainId": 2
        },
        {
            "id": 521,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Calle93",
            "knownSourceExternalId": "spidregco324calle93",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 6
        },
        {
            "id": 633,
            "createdAt": "2022-08-30T05:45:36.908Z",
            "updatedAt": "2022-08-30T05:45:36.908Z",
            "name": "SPID35 Apoquindo",
            "knownSourceExternalId": "O783",
            "groupCode": "Spid",
            "isCd": false,
            "retailChainId": 9
        },
        {
            "id": 638,
            "createdAt": "2022-09-01T05:32:25.643Z",
            "updatedAt": "2022-09-01T05:32:25.643Z",
            "name": "SPID35 O El Llano",
            "knownSourceExternalId": "O513",
            "groupCode": "Spid",
            "isCd": false,
            "retailChainId": 9
        },
        {
            "id": 829,
            "createdAt": "2024-07-11T07:43:30.092Z",
            "updatedAt": "2024-07-11T07:43:30.092Z",
            "name": "Prueba",
            "knownSourceExternalId": "P798",
            "groupCode": "Spid",
            "isCd": false,
            "retailChainId": 9
        },
        {
            "id": 542,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Aramburú",
            "knownSourceExternalId": "spidregpep010",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 520,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Pacheco Novo (4626)",
            "knownSourceExternalId": "spidregars4626",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 504,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Unicenter (4202)",
            "knownSourceExternalId": "spidregars4202",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 517,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid JBJusto (4263)",
            "knownSourceExternalId": "spidregars4263",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 518,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid La Palmera (4275)",
            "knownSourceExternalId": "spidregars4275",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 485,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid San Bernardo (4248)",
            "knownSourceExternalId": "spidregars4248",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 493,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Manzanares (4665)",
            "knownSourceExternalId": "spidregars4665",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 453,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Quintana (4018)",
            "knownSourceExternalId": "spidregars4018",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 506,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid San Martín (4205)",
            "knownSourceExternalId": "spidregars4205",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 482,
            "createdAt": "2021-12-12T12:43:35.376Z",
            "updatedAt": "2021-12-12T12:43:35.376Z",
            "name": "Spid Av Beiro (4237)",
            "knownSourceExternalId": "spidregars4237",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": null
        },
        {
            "id": 237,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL SAN PEDRO DE LA PAZ",
            "knownSourceExternalId": "N778",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 238,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL GRAJALES",
            "knownSourceExternalId": "N612",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 239,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL BANDERA",
            "knownSourceExternalId": "N600",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 240,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL HUÉRFANO",
            "knownSourceExternalId": "N771",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 241,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL COMPAÑÍA",
            "knownSourceExternalId": "N607",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 242,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL SAN DIEGO",
            "knownSourceExternalId": "N608",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 243,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL SANTIAGOPORTUGAL",
            "knownSourceExternalId": "N682",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 244,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL MAPOCHO",
            "knownSourceExternalId": "N763",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 245,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL  DOWN TOWN",
            "knownSourceExternalId": "N767",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 246,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL FRANKLIN",
            "knownSourceExternalId": "N602",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 248,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL TALCA NORTE",
            "knownSourceExternalId": "N741",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 249,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL COLIN",
            "knownSourceExternalId": "N828",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 250,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL MALL EL TREBOL",
            "knownSourceExternalId": "N671",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 251,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL MALL TALCAHUANO",
            "knownSourceExternalId": "N680",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 252,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL SEVILLA",
            "knownSourceExternalId": "N547",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 253,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL BULNES",
            "knownSourceExternalId": "N554",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 254,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL PADRE LAS CASAS",
            "knownSourceExternalId": "N625",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 255,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL RODRIGUEZ",
            "knownSourceExternalId": "N732",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 256,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL CARRERA",
            "knownSourceExternalId": "N743",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 257,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL CAUPOLICÁN",
            "knownSourceExternalId": "N517",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 259,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL MANUEL MONTT (TEMUCO)",
            "knownSourceExternalId": "N826",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 260,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL CHACABUCO",
            "knownSourceExternalId": "N684",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 261,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL RUBÉN DARÍO",
            "knownSourceExternalId": "N928",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 262,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL VALLENAR",
            "knownSourceExternalId": "N901",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 263,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL URUGUAY",
            "knownSourceExternalId": "N536",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 264,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL PEDRO MONTT",
            "knownSourceExternalId": "N552",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 265,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL PLAZA ECHAURREN",
            "knownSourceExternalId": "N722",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 266,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL BRASIL",
            "knownSourceExternalId": "N805",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 267,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL PLAYA ANCHA",
            "knownSourceExternalId": "N840",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 268,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL BARRIO I",
            "knownSourceExternalId": "N911",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 270,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL VILLA ALEMANA",
            "knownSourceExternalId": "N539",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 272,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL TRONCOS VIEJOS",
            "knownSourceExternalId": "N842",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 273,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL VIÑA ARLEGUI",
            "knownSourceExternalId": "N541",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 274,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL PLAZA VIÑA",
            "knownSourceExternalId": "N542",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 275,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL VILLANELO",
            "knownSourceExternalId": "N545",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 276,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL RAFEAL SOTOMAYOR",
            "knownSourceExternalId": "N548",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 277,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL MALL MARINA",
            "knownSourceExternalId": "N572",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 278,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL UNO PONIENTE",
            "knownSourceExternalId": "N662",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 279,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL QUILLOTA",
            "knownSourceExternalId": "N674",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 280,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL VIANA",
            "knownSourceExternalId": "N808",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 281,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL AGUA SANTA",
            "knownSourceExternalId": "N711",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 282,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SANTA ISABEL VITACURA",
            "knownSourceExternalId": "N701",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 221,
            "createdAt": "2021-09-01T06:06:38.335Z",
            "updatedAt": "2021-09-01T06:06:38.335Z",
            "name": "SPID San Pablo",
            "knownSourceExternalId": "N689",
            "groupCode": "SISA",
            "isCd": false,
            "retailChainId": 4
        },
        {
            "id": 830,
            "createdAt": "2024-07-11T23:57:15.698Z",
            "updatedAt": "2024-07-11T23:57:15.698Z",
            "name": "Prueba",
            "knownSourceExternalId": "P701",
            "groupCode": "SPID",
            "isCd": false,
            "retailChainId": 9
        }
    ];
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
