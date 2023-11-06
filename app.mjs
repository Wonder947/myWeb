import './config.mjs';
import express from 'express';

const app = express();
app.set('view engine', 'hbs');


app.get('/', (req, res)=>{
    res.render('home.hbs', {});
});

app.listen(process.env.PORT || 3000);
