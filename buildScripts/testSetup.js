// This file isn't transpiled

// Register Bable
require('babel-register')();

// Disable webpack features
require.extensions['.css'] = function() {};
