const { read } = require("./utils");

const getData = (req, res) => {
    let response = read('fulfillmentStatusPackGroup.json');
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
