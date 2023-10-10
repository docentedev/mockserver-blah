const getPropulsionTypes = (req, res) => {
    const {} = req.body;

    const response = [
        {
            "id": 1,
            "name": "DIESEL"
        },
        {
            "id": 2,
            "name": "ELECTRIC"
        },
        {
            "id": 3,
            "name": "GAS"
        },
        {
            "id": 4,
            "name": "GASOLINE"
        },
        {
            "id": 5,
            "name": "OTHER"
        },
        {
            "id": 6,
            "name": "NO_ENGINE"
        }
    ];
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getPropulsionTypes
};
