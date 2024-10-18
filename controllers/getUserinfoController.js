const { read } = require("./utils");

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const getData = async (req, res) => {
    const { } = req.body;
    await sleep(1000);
    const response2 = read('getUserinfoController.json');
    res.statusCode = 200;
    res.json(response2);
};

module.exports = {
    getData
};
