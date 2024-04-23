const getData = (req, res) => {
    const { } = req.body;

    const response = [
        {
            "id": 1,
            "code": "CL"
        },
        {
            "id": 2,
            "code": "AR"
        },
        {
            "id": 3,
            "code": "CO"
        },
        {
            "id": 4,
            "code": "PE"
        },
        {
            "id": 5,
            "code": "BR"
        }
    ];
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
