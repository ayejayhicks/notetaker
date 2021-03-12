const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const fs = require('fs');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static('Develop/public'));


require('./routes/apiRoutes')(app)
//require('./routes/htmlRoutes')(app)


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });