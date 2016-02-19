var util = {};

util.merge = function(target) {

    //get all the arguments passed
    var sources = [].slice.call(arguments, 1);

    sources.forEach(function(source) {
        for (var prop in source) {
            target[prop] = source[prop];
        }
    });
    
    return target;

};

util.toArray = function(obj) {
    var arr = Object.keys(obj).map(function(k) {
        return obj[k]
    });

    return arr;
};

util.validate = function(obj) {
    var isValid = false;
    if (/^[\],:{}\s]*$/.test(obj.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

        isValid = true;

    }

    return isValid;
};

util.getKeys = function(obj) {

    var keys = [];
    for (var key in obj) {
        keys.push(key);
    }
    return keys;
}



module.exports = util;