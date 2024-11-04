const getData = (req, res) => {
    const { } = req.body;

    const response = [
        {
            "id": 1,
            "name": "UNAVAILABLE"
        },
        {
            "id": 2,
            "name": "AVAILABLE"
        },
        {
            "id": 3,
            "name": "IN-ROUTE"
        },
        {
            "id": 4,
            "name": "INACTIVE"
        }
    ];
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
