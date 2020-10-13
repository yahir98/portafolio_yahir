
//Install express server
const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname,'./www')));


app.get('*', function(req,res) {

return res.sendFile(path.join(__dirname,'./dist/portafolio/index.html'));


});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
