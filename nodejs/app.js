const exp=require('express');
const ehbs=require('express-handlebars');

var app=exp()

app.engine('handlebars',ehbs({defaultLayout:'main'}));
app.set('view engine','handlebars');
app.use(exp.static('views/static'));
app.use(exp.urlencoded())

app.post('/getdata',(req,res)=>{
    res.send(req.body);
});

app.get('/',(req,res)=>{
    res.render("index");
});

app.get('/about',(req,res)=>{
    res.render("about");
});

app.get('/contact',(req,res)=>{
    res.render("contact");
})



app.listen(3000);