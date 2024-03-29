/**
 * HTTP Server code
 * Created by mike on 15/08/15.
 */

var http = require("http");
var url = require("url");

function start(route, handle) {

    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(handle, pathname, response, request);
    }

    const port = process.env.PORT || 8080;
    http.createServer(onRequest).listen(port);
}

exports.start = start;
