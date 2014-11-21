var util = require('util');

var Padre = function() {
    Padre.prototype.whoIs = function(mensaje) {
        console.log(mensaje);
    }
}

var Hijo = function() {
}

util.inherits(Hijo, Padre);

var hijo = new Hijo();
var padre = new Padre();

hijo.whoIs('soy el hijo');
padre.whoIs('soy el padre');
