const express = require('express');

const app = express();

var x = '1';

app.get('/', (req, res) => {
    res.set('hello');
    process.exit(1);
});

app.listen(3000, () => {
    console.log('6666');
});

const obj = {
    // foo
    hello() {
        console.log('hello');
    },
};
