
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


const itemList = [];

app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
  
});

app.post('/submit', (req, res) => {
    const item = req.body.todo;
    itemList.push(item);
    res.render('index.ejs', { itemList }); // Pass itemList directly.
  });
app.post('/del', (req, res) => {
    const itemdel = req.body.itemIndex;
    itemList.splice(itemdel, 1);
    res.render('index.ejs', { itemList }); // Pass itemList directly.
  });
  app.post('/edit', (req, res) => {
    const index = req.body.itemIn;
    
    itemList[index]=req.body.editedItem;
    res.render('index.ejs', { itemList }); // Pass itemList directly.
  });
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


