const cheerio = require('cheerio');
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const baseUrl = 'https://www.eluniversal.com.co'

app.get('/articles', (req, res)=>{
    axios.get(baseUrl)
    .then(response=>{
        const html = response.data;
        const $ = cheerio.load(html);
        const articles = []

        $('.info').each(function(){
            const title = $(this).find('.headline span').text();
            const href = $(this).find('a').attr('href');
            const url = `${baseUrl}`+href;

            articles.push({title, url});
        })
        res.json(articles);
    }).catch(err => res.json(err.message))
})

app.listen(3001, ()=> console.log('Listening in port 3001'))