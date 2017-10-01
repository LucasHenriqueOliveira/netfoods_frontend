const
    express = require('express'),
    app = express();

app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] != 'https') {
        res.redirect('https://' + req.headers.host + req.url)
    } else {
        next()
    }
});

app.use(express.static('www'));

const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log('listening on port', port);
});