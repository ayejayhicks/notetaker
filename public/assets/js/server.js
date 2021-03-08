const express = require('express');
const fs = require('fs');
// const apiRoutes = require("./routes/apiRoutes");
// const htmlRoutes = require('./routes/htmlRoutes');


const app = express();
// const app = apiRoutes();
// const app = htmlRoutes();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static('Develop/public'));


require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app)

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });