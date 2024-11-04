const getData = (req, res) => {
    let response = { "statusCode": 500, "message": "Internal server error" };
    res.statusCode = 500;
    res.json(response);
};

module.exports = {
    getData
};
