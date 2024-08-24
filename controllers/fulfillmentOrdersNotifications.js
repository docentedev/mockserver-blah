const getData = (req, res) => {
    let response = {"data":[],"pagination":{"page":1,"size":0,"totalPage":0,"totalCount":0}};
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
