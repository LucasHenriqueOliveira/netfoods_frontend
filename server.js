var express = require('express'),
app = express();

app.use(express.static('www'))

const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log('listening on port', port);
});