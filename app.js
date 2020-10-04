const express = require('express');
const morgan = require('morgan');

const contactRouter = require('./routes/contactRoute');

const app = express();

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, dd, RequestVerificationToken,UserExecutionContext, access_token, app_hash");
    res.header("Access-Control-Allow-Credentials", "true");
    res.removeHeader("x-powered-by");
    if ('OPTIONS' === req.method) {
        res.send(200);
    } else {
        next();
    }
});

// Serving static files
app.use(express.static(`${__dirname}/public`));

app.use('/api/v1/contacts', contactRouter);

module.exports = app;
