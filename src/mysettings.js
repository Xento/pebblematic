/* global module */

var Settings = require('settings');

// Set a configurable with the open callback
Settings.config(
  { url: 'http://xento.github.io/pebblematic/config.html',
   autoSave: true
  },
  function(e) {
    console.log('opening configurable');
    // Reset color to red before opening the webview
  },
  function(e) {
    console.log('closed configurable');
    
    // Show the parsed response
    console.log(JSON.stringify(e.options));
    
    if (e.failed) {
      // Show the raw response if parsing failed
      console.log(e.response);
    }
  }
);

module.exports = { 
  localurl: Settings.option('localurl'),
  remoteurl: Settings.option('remoteurl'),
  username: Settings.option('username'),
  password: Settings.option('password')
};