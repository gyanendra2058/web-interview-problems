var module = (function () {
    let _obj;
    let _createSingleton = function () {
        _obj = {
            name: 'test singleton',
            printName: function () {
                console.log(this.name);
            }
        };
        return _obj;
    };
    var _getSingleton = function () {
        if (!_obj) {
            _obj = _createSingleton()
        }
        return _obj;
    };

    return {
        getSingleton: _getSingleton
    };
})();

var singletonObj = module.getSingleton();
var sameSingletonObj = module.getSingleton();

console.log(singletonObj === sameSingletonObj)