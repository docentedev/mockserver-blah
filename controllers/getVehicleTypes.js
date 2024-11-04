const getData = (req, res) => {
    const { } = req.body;

    const response = [
        {
            "id": 1,
            "name": "TRUCK"
        },
        {
            "id": 2,
            "name": "VAN"
        },
        {
            "id": 3,
            "name": "PICKUP_TRUCK"
        },
        {
            "id": 4,
            "name": "CAR"
        },
        {
            "id": 5,
            "name": "BICYCLE"
        },
        {
            "id": 6,
            "name": "ELECTRIC_CAR"
        },
        {
            "id": 7,
            "name": "MOTORCYCLE"
        },
        {
            "id": 8,
            "name": "OTHER"
        },
    ];
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
