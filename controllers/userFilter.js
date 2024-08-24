const filterDataByUsernameOrEmail = (data, text) => {
    if (text) {
        // { user?: string, email?: string }
        return data.filter((item) => {
            return item.user?.toLowerCase().includes(text.toLowerCase()) || item.email?.toLowerCase().includes(text.toLowerCase());
        });
    }
    return data;
}

const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};
    
const getData = async (req, res) => {
    await sleep(1000);
    console.log(req.body, req.query);
    let response = {
        "items": filterDataByUsernameOrEmail([
            {
                "id": 16,
                "email": "francisco.aguayourbina@externos-cl.cencosud.com",
                "user": "ee6052",
                "name": "Francisco",
                "lastName": "Aguayo Urbina",
                "isExternal": false,
                "lastLogin": 1684344201095,
                "isActive": true,
                "role": {
                    "id": 83,
                    "name": "METRICS_ANALYST",
                    "description": "Analista de Métricas (Metrics)",
                    "privileges": [
                        {
                            "id": 93,
                            "createdAt": "2021-10-08T22:10:04.849Z",
                            "updatedAt": "2021-10-08T22:10:04.849Z",
                            "name": "metrics:read",
                            "description": "Leer el Metricas (Metabase)"
                        }
                    ]
                },
                "knownSources": [],
                "observation": null
            },
            {
                "id": 17,
                "email": "roberto.requena@cencosud.cl",
                "user": "rrequeto",
                "name": "Roberto",
                "lastName": "Requena",
                "isExternal": false,
                "lastLogin": 1675024504875,
                "isActive": false,
                "role": {
                    "id": 77,
                    "name": "DAAS_ROOT",
                    "description": "Super Administrador",
                    "privileges": [
                        {
                            "id": 78,
                            "createdAt": "2021-10-08T22:10:04.849Z",
                            "updatedAt": "2021-10-08T22:10:04.849Z",
                            "name": "root:root",
                            "description": "Super administrador"
                        }
                    ]
                },
                "knownSources": [
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
                        "id": 628,
                        "createdAt": "2022-08-04T04:42:48.105Z",
                        "updatedAt": "2022-08-04T04:42:48.105Z",
                        "name": "DARKSTORE PLAZA OESTE",
                        "knownSourceExternalId": "129",
                        "groupCode": "PARIS",
                        "isCd": false,
                        "retailChainId": 2
                    }
                ],
                "observation": null
            },
            {
                "id": 18,
                "email": "elias.salehmuse@cencosud.cl",
                "user": "esalehmu",
                "name": "Elias",
                "lastName": "Saleh Muse",
                "isExternal": false,
                "lastLogin": 1700515725740,
                "isActive": true,
                "role": {
                    "id": 77,
                    "name": "DAAS_ROOT",
                    "description": "Super Administrador",
                    "privileges": [
                        {
                            "id": 78,
                            "createdAt": "2021-10-08T22:10:04.849Z",
                            "updatedAt": "2021-10-08T22:10:04.849Z",
                            "name": "root:root",
                            "description": "Super administrador"
                        }
                    ]
                },
                "knownSources": [
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
                        "id": 751,
                        "createdAt": "2023-07-13T13:52:16.880Z",
                        "updatedAt": "2023-07-13T13:52:16.880Z",
                        "name": "Costa Azul - Salvador",
                        "knownSourceExternalId": "gbarbosab035",
                        "groupCode": "GBARBOSA",
                        "isCd": false,
                        "retailChainId": 16
                    }
                ],
                "observation": null
            },
            {
                "id": 20,
                "email": "edgardo.pezoasoto@externos-cl.cencosud.com",
                "user": "ee5976",
                "name": "Edgardo",
                "lastName": "Pezoa Soto",
                "isExternal": false,
                "lastLogin": 1648147650889,
                "isActive": false,
                "role": {
                    "id": 78,
                    "name": "DAAS_ADMIN",
                    "description": "Administrador",
                    "privileges": [
                        {
                            "id": 93,
                            "createdAt": "2021-10-08T22:10:04.849Z",
                            "updatedAt": "2021-10-08T22:10:04.849Z",
                            "name": "metrics:read",
                            "description": "Leer el Metricas (Metabase)"
                        },
                        {
                            "id": 94,
                            "createdAt": "2021-10-08T22:10:04.849Z",
                            "updatedAt": "2021-10-08T22:10:04.849Z",
                            "name": "search:read",
                            "description": "Leer el Search"
                        },
                        {
                            "id": 91,
                            "createdAt": "2021-10-08T22:10:04.849Z",
                            "updatedAt": "2021-10-08T22:10:04.849Z",
                            "name": "label:read",
                            "description": "Leer el Label"
                        },
                        {
                            "id": 81,
                            "createdAt": "2021-10-08T22:10:04.849Z",
                            "updatedAt": "2021-10-08T22:10:04.849Z",
                            "name": "manifest:all",
                            "description": "Todas las Funcionalidades del Manifest"
                        },
                        {
                            "id": 80,
                            "createdAt": "2021-10-08T22:10:04.849Z",
                            "updatedAt": "2021-10-08T22:10:04.849Z",
                            "name": "cage:all",
                            "description": "Todas las Funcionalidades de Consolidación de Carga (Jaulas)"
                        },
                        {
                            "id": 79,
                            "createdAt": "2021-10-08T22:10:04.849Z",
                            "updatedAt": "2021-10-08T22:10:04.849Z",
                            "name": "packing:all",
                            "description": "Todas las Funcionalidades de Empaquetado"
                        }
                    ]
                },
                "knownSources": [
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
                        "id": 289,
                        "createdAt": "2021-12-02T21:44:12.578Z",
                        "updatedAt": "2021-12-02T21:44:12.578Z",
                        "name": "PARIS ALTO LAS CONDES",
                        "knownSourceExternalId": "20",
                        "groupCode": "PARIS",
                        "isCd": false,
                        "retailChainId": 2
                    }
                ],
                "observation": null
            },
            {
                "id": 21,
                "email": "juan.veganzones@cencosud.cl",
                "user": "javeganzo",
                "name": "Juan Alejandro",
                "lastName": "Romero Veganzones",
                "isExternal": false,
                "lastLogin": 1691774255968,
                "isActive": true,
                "role": {
                    "id": 77,
                    "name": "DAAS_ROOT",
                    "description": "Super Administrador",
                    "privileges": [
                        {
                            "id": 78,
                            "createdAt": "2021-10-08T22:10:04.849Z",
                            "updatedAt": "2021-10-08T22:10:04.849Z",
                            "name": "root:root",
                            "description": "Super administrador"
                        }
                    ]
                },
                "knownSources": [
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
                        "id": 663,
                        "createdAt": "2022-12-07T20:08:06.440Z",
                        "updatedAt": "2022-12-07T20:08:06.440Z",
                        "name": "WONG CAMACHO",
                        "knownSourceExternalId": "wongiot111wio",
                        "groupCode": "WONG",
                        "isCd": false,
                        "retailChainId": 12
                    }
                ],
                "observation": "PO del Equipo de Devoluciones"
            },
            {
                "id": 22,
                "email": "julio.quintanasilva@cencosud.cl",
                "user": "juquinsi",
                "name": "Julio Cesar",
                "lastName": "Quintana Silva",
                "isExternal": false,
                "lastLogin": 1684852891297,
                "isActive": true,
                "role": {
                    "id": 88,
                    "name": "DISPATCHES_SUPERVISOR",
                    "description": "Supervisor de Despachos (Metrics/Manifest)",
                    "privileges": [
                        {
                            "id": 93,
                            "createdAt": "2021-10-08T22:10:04.849Z",
                            "updatedAt": "2021-10-08T22:10:04.849Z",
                            "name": "metrics:read",
                            "description": "Leer el Metricas (Metabase)"
                        },
                        {
                            "id": 81,
                            "createdAt": "2021-10-08T22:10:04.849Z",
                            "updatedAt": "2021-10-08T22:10:04.849Z",
                            "name": "manifest:all",
                            "description": "Todas las Funcionalidades del Manifest"
                        }
                    ]
                },
                "knownSources": [
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
                        "id": 742,
                        "createdAt": "2023-03-02T01:24:04.489Z",
                        "updatedAt": "2023-03-02T01:24:04.489Z",
                        "name": "PARIS CD RENCA PAQUETERIA",
                        "knownSourceExternalId": "100-SPREAD",
                        "groupCode": "PARIS",
                        "isCd": true,
                        "retailChainId": 2
                    }
                ],
                "observation": null
            },
            {
                "id": 24,
                "email": "joseantonio.huertavaldebenito@cencosud.cl",
                "user": "jhuertav",
                "name": "Jose Antonio",
                "lastName": "Huerta Valdebenito",
                "isExternal": false,
                "lastLogin": 1720032920435,
                "isActive": true,
                "role": {
                    "id": 77,
                    "name": "DAAS_ROOT",
                    "description": "Super Administrador",
                    "privileges": [
                        {
                            "id": 78,
                            "createdAt": "2021-10-08T22:10:04.849Z",
                            "updatedAt": "2021-10-08T22:10:04.849Z",
                            "name": "root:root",
                            "description": "Super administrador"
                        }
                    ]
                },
                "knownSources": [
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
                        "id": 812,
                        "createdAt": "2023-11-20T12:01:14.081Z",
                        "updatedAt": "2023-11-20T12:01:14.081Z",
                        "name": "Easy La Unión",
                        "knownSourceExternalId": "E744",
                        "groupCode": "EASY",
                        "isCd": false,
                        "retailChainId": 3
                    }
                ],
                "observation": null
            },
            {
                "id": 25,
                "email": null,
                "user": "mapezoa",
                "name": null,
                "lastName": null,
                "isExternal": false,
                "lastLogin": 0,
                "isActive": false,
                "role": {
                    "id": 78,
                    "name": "DAAS_ADMIN",
                    "description": "Administrador",
                    "privileges": [
                        {
                            "id": 93,
                            "createdAt": "2021-10-08T22:10:04.849Z",
                            "updatedAt": "2021-10-08T22:10:04.849Z",
                            "name": "metrics:read",
                            "description": "Leer el Metricas (Metabase)"
                        },
                        {
                            "id": 94,
                            "createdAt": "2021-10-08T22:10:04.849Z",
                            "updatedAt": "2021-10-08T22:10:04.849Z",
                            "name": "search:read",
                            "description": "Leer el Search"
                        },
                        {
                            "id": 91,
                            "createdAt": "2021-10-08T22:10:04.849Z",
                            "updatedAt": "2021-10-08T22:10:04.849Z",
                            "name": "label:read",
                            "description": "Leer el Label"
                        },
                        {
                            "id": 81,
                            "createdAt": "2021-10-08T22:10:04.849Z",
                            "updatedAt": "2021-10-08T22:10:04.849Z",
                            "name": "manifest:all",
                            "description": "Todas las Funcionalidades del Manifest"
                        },
                        {
                            "id": 80,
                            "createdAt": "2021-10-08T22:10:04.849Z",
                            "updatedAt": "2021-10-08T22:10:04.849Z",
                            "name": "cage:all",
                            "description": "Todas las Funcionalidades de Consolidación de Carga (Jaulas)"
                        },
                        {
                            "id": 79,
                            "createdAt": "2021-10-08T22:10:04.849Z",
                            "updatedAt": "2021-10-08T22:10:04.849Z",
                            "name": "packing:all",
                            "description": "Todas las Funcionalidades de Empaquetado"
                        }
                    ]
                },
                "knownSources": [
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
                        "id": 283,
                        "createdAt": "2021-09-01T06:06:38.611Z",
                        "updatedAt": "2021-09-01T06:06:38.611Z",
                        "name": "PARIS LYON",
                        "knownSourceExternalId": "9",
                        "groupCode": "PARIS",
                        "isCd": false,
                        "retailChainId": 2
                    }
                ],
                "observation": null
            },
            {
                "id": 26,
                "email": "ronald.vezgarueda@externos-cl.cencosud.com",
                "user": "ee8683",
                "name": "Ronald Javier",
                "lastName": "Vezga Rueda",
                "isExternal": false,
                "lastLogin": 1707312228922,
                "isActive": true,
                "role": {
                    "id": 77,
                    "name": "DAAS_ROOT",
                    "description": "Super Administrador",
                    "privileges": [
                        {
                            "id": 78,
                            "createdAt": "2021-10-08T22:10:04.849Z",
                            "updatedAt": "2021-10-08T22:10:04.849Z",
                            "name": "root:root",
                            "description": "Super administrador"
                        }
                    ]
                },
                "knownSources": [
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
                        "id": 791,
                        "createdAt": "2023-09-05T18:48:24.824Z",
                        "updatedAt": "2023-09-05T18:48:24.824Z",
                        "name": "JUMBO MAIPU",
                        "knownSourceExternalId": "J403",
                        "groupCode": "JUMBO",
                        "isCd": false,
                        "retailChainId": 1
                    }
                ],
                "observation": null
            },
            {
                "id": 27,
                "email": "patricio.gonzalez@cencosud.cl",
                "user": "patricgo",
                "name": "Patricio",
                "lastName": "Gonzalez",
                "isExternal": false,
                "lastLogin": 1643131390423,
                "isActive": false,
                "role": {
                    "id": 77,
                    "name": "DAAS_ROOT",
                    "description": "Super Administrador",
                    "privileges": [
                        {
                            "id": 78,
                            "createdAt": "2021-10-08T22:10:04.849Z",
                            "updatedAt": "2021-10-08T22:10:04.849Z",
                            "name": "root:root",
                            "description": "Super administrador"
                        }
                    ]
                },
                "knownSources": [
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
                        "id": 289,
                        "createdAt": "2021-12-02T21:44:12.578Z",
                        "updatedAt": "2021-12-02T21:44:12.578Z",
                        "name": "PARIS ALTO LAS CONDES",
                        "knownSourceExternalId": "20",
                        "groupCode": "PARIS",
                        "isCd": false,
                        "retailChainId": 2
                    }
                ],
                "observation": null
            }
        ], req.query.user || ''),
        "meta": {
            "totalItems": 3091,
            "itemCount": 10,
            "itemsPerPage": 10,
            "totalPages": 310,
            "currentPage": 1
        }
    };
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
