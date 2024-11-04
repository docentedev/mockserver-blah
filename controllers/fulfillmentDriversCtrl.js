const { read } = require("./utils");

const getData = (req, res) => {
    const { } = req.body;

    const response = read('fulfillmentDriversCtrl.json');
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
