const { read } = require("./utils");

const getData = (req, res) => {
    let response = read('known-sources_post-by-external-ids.json');
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
