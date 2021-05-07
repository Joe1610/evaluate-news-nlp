var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config();

const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.static("dist"));
app.use(express.json());
console.log(__dirname)

app.get('/', async function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

app.get('/test', async function (req, res) {
    res.send(mockAPIResponse)
})

app.post("/api", async(req, res) => {
    try {
        const url = req.body.url;
        const api = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${url}&lang=en`;
        const { data: response } = await axios.post(api);

        if(!response.sentence_list) {
            return res.status(404).send("NO Data");
        }
        res.send({
            score_tag: response.score_tag,
            confidence: response.confidence,
            irony: response.irony,
            agreement: response.agreement,
            subjectivity: response.subjectivity
        });
    } catch(error) {
        console.log(error.message);
    }
});

app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
