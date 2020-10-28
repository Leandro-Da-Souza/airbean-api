const { Router } = require('express')
const path = require('path')
const router = new Router()
const fs = require('fs');
const uuid = require('uuid-random');
const { generateOrderNr, generateETA } = require('../utils/utils');

const beanPath = path.join(__dirname, '../data/menu.json')

router.get('/', async (req, res) => {
    console.log(beanPath)
    const menu = fs.createReadStream(beanPath);
    menu.pipe(res);
});

router.post('/', async (req, res) => {
    const order = {
        eta: generateETA(),
        orderNr: generateOrderNr(),
    }

    setTimeout(() => {
        res.send(order);
    }, 2000);
});

router.get('/key', (req, res) => {
    const key = {
        key: uuid()
    }
    res.send(JSON.stringify(key));
})

module.exports = router