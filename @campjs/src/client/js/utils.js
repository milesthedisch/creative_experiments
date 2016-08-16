module.exports = function utils(){

    var publicAPI = publicAPI === undefined ? {} : publicAPI;

    var ERR = {
        '001': 'Dom node is undefined.',
        '002': 'Define a class name or an array of class names as the 2nd argument.',
        '003': 'Not valid Number',
        '004': 'Not finite Number'
    };

    var Tags = { 
            Function: '[object Function]',
            Object: '[object Object]',
            Array: '[object Array]',
            Number: '[object Number]',
            Boolean: '[object Boolean]',
            Window: '[object Window]',
            Document: '[object HTMLDocument]'
        };

    publicAPI['qSelect'] = function select(selector, el) {
        if (!el) {el = document;}
        if (typeof selector === 'string') {
            return el.querySelector(selector);
        } 
    };

    publicAPI['qSelectAll'] = function selectAll(selector, el) {
        if (!el) {el = document;}
        if (typeof selector === 'string') {
            var selectedElements = el.querySelectorAll(selector);
            return Array.prototype.slice.call(selectedElements);
        }
    };

    publicAPI['addClass'] = function(elm, className, cb){
        if (!className || className === undefined) {
            return ERR['002'];
        }
        if (!elm || className === undefined) {
            return ERR['001'];
        } else if (typeof cb === 'function' && !!cb) {
            elm.classList.add(className);
            cb(elm);
        } else {
            if (Array.isArray(className)) {
                className.forEach(function(_class, index, collection){
                    elm.classList.add(_class);
                });
            } else {    
                elm.classList.add(className);
            }
        }
    };

    publicAPI['removeClass'] = function(elm, className, cb){
        if (!className || className === undefined) {
            return ERR['002'];
        }
        if (!elm || className === undefined) {
            return ERR['001'];
        } else if (typeof cb === 'function' && !!cb) {
            elm.classList.remove(className);
            cb(elm);
        } else {
            if (Array.isArray(className)) {
                className.forEach(function(_class, index, collection){
                    elm.classList.remove(_class);
                });
            } else {    
                elm.classList.remove(className);
            }
        }
    };

    publicAPI['toggleClass'] = function toggleClass(elm, className, cb) {
        if (!className || className === undefined) {
            return ERR['002'];
        } 
        if (!elm || className === undefined) {
            return ERR['001'];
        }
        else if (typeof cb === 'function' && !!cb) {
            elm.classList.toggle(className);
            cb(elm);
        }
        else {
            if (Array.isArray(className)) {
                className.forEach(function(_class, i, col){
                    elm.classList.toggle(name);
                });
            } else {
                elm.classList.toggle(className);
            } 
        }
    };

    publicAPI['isNumber'] = function (value) {
         return typeof value == 'number' || (isObject(data) || objStringify(value) === Tags.Number);
    };

    publicAPI['isObject'] = function (value) {
        return !!value && typeof value == 'object';
    };

    publicAPI['objStringify'] = function (value) {
        return Object.prototype.toString.call(value);
    };

    publicAPI['semiTone'] = function (base, noteOffset) {

        if (!isNumber(base) || !isNumber(noteOffset)) {
            return TypeError(ERR[2]);
        } else if (!isFinite(base) || !isFinite(noteOffset)) {
            return TypeError(ERR[3]);
        }

        return base * Math.pow(2, noteOffset / 12);
    };

    // Add more methods here for the api. //
    publicAPI[''] = function () {

    };

    return publicAPI;
};
