const getData = (req, res) => {
    let response = {
        ok: true,
    };
    res.statusCode = 500;
    res.json(response);
};

module.exports = {
    getData
};
