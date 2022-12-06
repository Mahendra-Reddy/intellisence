import express from 'express';
import bodyParser from 'body-parser';
import referenca from './routes/referencia.js'

const port = 5353
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next()
   });

app.use('/', referenca)

app.listen(port, () => {
    console.log(`server is running in port: ${port}`)
})