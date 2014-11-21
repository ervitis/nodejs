var fs = require('fs');

var saveFile, f;

f = {
    'name': 'ejercicio2',
    'text': 'texto fichero\n',
    'extension': 'txt'
};

saveFile = function(obj, onSuccess, onFail) {
    var path = [__dirname, '/', obj.name, '.', obj.extension].join('');

    fs.writeFile(path, obj.text, function(err) {
        if (err) {
            console.log('Error');

            if (typeof onFail === 'function') {
                onFail(err);
            }
        } else {
            if (typeof onSuccess === 'function') {
                onSuccess(obj);
            }
        }
    });
}

saveFile(f, function(f) {
    console.log('Fichero guardado');
}, function(err) {
    console.log('Error al guardar el fichero');
});
