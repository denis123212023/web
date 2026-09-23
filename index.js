const express = require('express');
const ejs = require('ejs');
const fs = require('fs').promises; // Use promise-based fs for async/await  
const path = require('path'); // To resolve file paths  
const app = express();
const port = 3000;
let json_products



app.use(express.static("resource"))

app.set('view engine', 'ejs'); // or 'ejs', 'hbs', etc
app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`);
    const filePath = path.join(__dirname, 'objects.json');
    const data = await fs.readFile(filePath, 'utf8')
    json_products = JSON.parse(data);

});@


app.get('/', async (req, res) => {
    res.render('main');


});

app.get('/catalog', async (req, res) => {
    res.render('catalog', { json_products });

});

app.get('/product/:id', (req, res) => {
    const un_id = parseInt(req.params.id)
    console.log(json_products.length)
    //.log(un_id)
    for (let index = 0; index < json_products.length; index++) {
        const product = json_products[index];
        if (product.id == req.params.id) {
            res.render("product", { product })
            return
        }
    }
    //res.render('product')
});
//regex



