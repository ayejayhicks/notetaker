const express = require('express');
const fs = require('fs');

const app = express();
const PORT = proccess.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static('Develop/public'));


require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: http://localhost: ${PORT}`);
  });