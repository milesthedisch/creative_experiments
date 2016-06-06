module.exports = function utils(){
    
    var ERR = {
        '001': 'Dom node is undefined.',
        '002': 'Define a class name or an array of class names as the 2nd argument.'
    };

    var publicAPI = publicAPI === undefined ? {} : publicAPI;

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
    }

    return publicAPI;
};
