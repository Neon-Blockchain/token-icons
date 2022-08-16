const fs = require('fs');

const buildTokens = () => {
    const data = {};
    const files = fs.readdirSync(__dirname + '/icons');
    for (let i of files) {
        data[i.slice(0, -4)] = 1;
    }
    fs.writeFileSync(__dirname + '/tokens.json', JSON.stringify(data, null, '\t'));
    console.log("build token registry successfully.")
}

buildTokens()