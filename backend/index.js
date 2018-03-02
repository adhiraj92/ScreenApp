var express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    todosRoutes = require('./routes/backend'),
    port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/backend', todosRoutes);

app.listen(port, function(){
    console.log("Server is running on port " + port);
})