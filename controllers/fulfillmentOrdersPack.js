const { read } = require("./utils");

const getData = (req, res) => {
    let response = read('fulfillmentOrdersPack.json');
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
