const path = require('path');
const url = require('url');
const utils = require('./http-helpers');

const actions = {
  GET(req, res) {
    /* if your router needs to pattern-match endpoints
     * var parsedUrl = url.parse(req.url);
     * var endPoint = parsedUrl.pathname === '/' ? '/index.html' : parsedUrl.pathname;
    */
    /*
     * DO SOMETHING - get asset, query database, etc. -> store as `data`
     * pass the result of that operation as data into responder -> store result status code as `statusCode`
     * pass the status code into responder
    */
    utils.respond(res, data, statusCode);
  },

  POST(req, res) {
    utils.prepareResponse(req, (data) => {
      // Do something with the data that was just collected by the helper
      // e.g., validate and save to db
      // either redirect or respond
      // should be based on result of the operation performed in response to the POST request intent
      // e.g., if user wants to save, and save fails, throw error
      utils.redirector(res, /* redirect path , optional status code -  defaults to 302 */);
    });
  },
};

exports.handleRequest = (req, res) => {
  const action = actions[req.method];
  return action ? action(req, res) : utils.send404(res);
};
