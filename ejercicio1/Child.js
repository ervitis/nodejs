var Child = function() {}

var util = require('util');
var Padre = require('./Parent');

module.exports = Child;

util.inherits(Child, Padre);
