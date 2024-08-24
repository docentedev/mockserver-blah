const getData = (req, res) => {
    let response = {
        ok: true,
    };
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
