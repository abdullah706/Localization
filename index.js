const express = require('express');
const exphbs  = require('express-handlebars');
 

const port = 3000;
const app = express();
 

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.get('/:lang?',  (req, res) => {
    res.send('Authors API');
  });
 
app.listen(port,  () => {
    console.log(`Server started port:${port}`);
});