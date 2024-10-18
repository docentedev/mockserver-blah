const fs = require('fs');
const path = require('path');

const read = (filename) => {
    const filePath = path.join(__dirname, filename);
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(jsonData);
    return data;
}

module.exports = {
    read
};