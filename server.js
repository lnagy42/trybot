var apiai = require('apiai');

var app = apiai(“98ba98c2c62049b0a3600dda8512ac89“);

var request = app.textRequest('Bonjour Olympe, bienvenue au monde', {
    sessionId: 'Some unique sessionId'
});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();