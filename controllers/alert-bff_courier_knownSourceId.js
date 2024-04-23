const getData = (req, res) => {
    let response = [];
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
