// Register.
require('bones-mixin').registerDir(__dirname, 'backends');

// Register.
require('bones-mixin').registerDir(__dirname, 'applications');

// Load me.
require('bones').load(__dirname);
