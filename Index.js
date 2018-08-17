/*
 * Primary file for API
 *
 */

//Dependencies
var server = require('./lib/server');
//var workers = require('./lib/workers');

//Create a container for app
var app = {};

//
app.init = function(){
  // Start the server
  server.init();

  // Start the workers
  //workers.init(); 

};


// Execute
app.init();

// Export the app
module.exports = app;