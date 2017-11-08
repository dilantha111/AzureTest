module.exports = function (context, req) {
    const winston = require('winston');

    context.log('JavaScript HTTP trigger function processed a request.');
    // winston.log('info','JavaScript HTTP trigger function processed a request.');

    // winston.add(winston.transports.File, { filename: 'test.log'});

    // just adding some testing lines

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else if(req.params ) {
        context.res = {
            body: "passed arg " + req.params.id
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
};