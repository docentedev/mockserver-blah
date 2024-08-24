const getData = (req, res) => {
    let response = [
        {
            "E781": [
                {
                    "id": 219,
                    "createdAt": "2021-06-01T02:50:19.594Z",
                    "updatedAt": "2021-06-01T02:50:19.594Z",
                    "dni": "76568660-1",
                    "name": "Transporte Interno Easy Belloto",
                    "code": "TI-EASY-E781",
                    "phoneNumber": "32-2999300",
                    "enable": true,
                    "countryId": 1,
                    "courierTypeId": 16
                },
                {
                    "id": 288,
                    "createdAt": "2022-04-18T16:21:15.711Z",
                    "updatedAt": "2022-04-18T16:21:15.711Z",
                    "dni": "76568660-1",
                    "name": "Transporte Operador Logístico Easy El Belloto Ii2",
                    "code": "TOL-EASY-E7812",
                    "phoneNumber": "32-2999300",
                    "enable": true,
                    "countryId": 1,
                    "courierTypeId": 17
                }
            ]
        },
    ];
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
