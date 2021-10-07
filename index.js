const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Getting to know you, Getting to know all about you 🎶' ))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))