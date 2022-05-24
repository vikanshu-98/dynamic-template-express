const express  =  require('express');
const path  =  require('path');
const port     = process.env.PORT ||3300;
const app      =  express();
const hbs      = require('hbs')

// middleware
app.use('/css',express.static(path.join(__dirname,'../node_modules/bootstrap/dist/css')));
app.use('/js',express.static(path.join(__dirname,'../node_modules/bootstrap/dist/js')));
app.use('/jq',express.static(path.join(__dirname,'../node_modules/jquery/dist')));
app.use(express.static(path.join(__dirname,'../public')));
app.set('view engine','hbs');
hbs.registerPartials(path.join(__dirname,'../template/partials'))
app.set('views',path.join(__dirname,'../template/views'));
app.get('/',(req,res)=>{
    res.render('index');
})














app.listen(port,()=>{console.log(`Listen port no is ${port}`);})
