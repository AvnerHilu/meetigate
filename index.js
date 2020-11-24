const express  = require ('express');
const exphbs = require('express-handlebars');

const app = express();
const fs = require('fs');

fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    dataObj = JSON.parse(data);
    data2 = JSON.stringify(dataObj);
    console.log(dataObj.info.agenda);
});

app.use('/img', express.static(__dirname + '/img'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set ('view engine','handlebars');

app.get('/',(req,res)=>{

    res.render('index',{
        data : data2
    });
});

app.get('/Previous',(req,res)=>{

    res.send('Previous interactions');
});

app.get('/company',(req,res)=>{

    res.send('Company');
});
 
app.get('/info',(req,res)=>{

    res.render('info');
});

app.get('/attendees',(req,res)=>{

    res.send('Attendees');
});




const port = 5000;
app.listen (port,() => {

    console.log (`listening on ${port}`);
    
});


