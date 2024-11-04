const fs = require('fs');
const path = require('path');

const read = (filename) => {
    const filePath = path.join(__dirname, filename);
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(jsonData);
    return data;
}

const readRes = (status, filename) => (req, res) => {
    let response = read('../jsons/' + filename + '.json');
    res.statusCode = status;
    res.json(response);
};

module.exports = {
    read,
    readRes
};