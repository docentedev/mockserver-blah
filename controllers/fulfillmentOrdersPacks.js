const { read } = require("./utils");

const getData = (req, res) => {
    let response = read('fulfillmentOrdersPacks.json');
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
