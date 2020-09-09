require('./config/config');

const express = require('express')
const app = express()
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/user', (req, res) => {
    res.json('Get User')
});

app.post('/user', (req, res) => {
    let data = req.body;
    console.log(data);

    if (data.name === undefined) {
        res.status(400).json({
            ok: false,
            message: 'Nombre Requerido'
        });
    }

    res.json({
        person: data
    })
});

app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    })
});

app.delete('/user', (req, res) => {
    res.json('Delete User')
});


app.listen(process.env.PORT, () => {
    console.log(`Escuchado en el Puerto ${process.env.PORT }`);
})