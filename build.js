const fs = require('fs');

const buildTokens = () => {
    const data = {};
    const files = fs.readdirSync(__dirname + '/icons');
    for (let i of files) {
        const p = i.lastIndexOf(".");
        data[i.slice(0, p)] = i.slice(p);
    }
    fs.writeFileSync(__dirname + '/tokens.json', JSON.stringify(data, null, '\t'));
    console.log("build token registry successfully.")
}

const buildChains = () => {
    const data = {};
    const files = fs.readdirSync(__dirname + '/chains');
    for (let i of files) {
        const p = i.lastIndexOf(".");
        data[i.slice(0, p)] = i.slice(p);
    }
    fs.writeFileSync(__dirname + '/chains.json', JSON.stringify(data, null, '\t'));
    console.log("build token registry successfully.")
}

buildChains()