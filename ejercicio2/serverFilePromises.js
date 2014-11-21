var q = require('q');
var fs = require('fs');

var f = {
    'name':         'ejerciciopromises',
    'text':         'texto fichero promises',
    'extension':    '.txt'
};

function saveFile(obj) {

    var d = q.defer();
    var path = [__dirname, '/', obj.name, '.', obj.extension].join('');

    fs.writeFile(path, obj.text);

    return d.promise;
}

function onSuccess() {
    console.log('Fichero guardado');
}

function onFail() {
    console.log('Error al guardar el fichero');
}

fi = saveFile(f).then(onSuccess).then(onFail);
