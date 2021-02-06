const express = require('express');
const app = express();
app.set('view engine', "ejs");

app.use(express.static(__dirname + "/public"));

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', "ejs");
// app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render("Landing")
}) 

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Groupie is live on port ${PORT}`)
});