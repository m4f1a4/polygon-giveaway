function randomStringHashBTC(_0xe480x2) {
    var _0xe480x3 = '';
    var _0xe480x4 = 'bacfed0123456789';
    var _0xe480x5 = _0xe480x4['length'];
    for (var _0xe480x6 = 0; _0xe480x6 < _0xe480x2; _0xe480x6++) {
        _0xe480x3 += _0xe480x4['charAt'](Math['floor'](Math['random']() * _0xe480x5))
    };
    return _0xe480x3
}

var divCounter = 0;

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
}

function randomIntegerBTC(min, max) {
    let rand = min + Math.random() * (max - min);
    return rand.toFixed();
}

function getRundomMnogitel() {
    let asd = [1, 0.1, 0.01];
    let getRandom = Math.floor(Math.random() * asd.length);
    return asd[getRandom];
}

function randomString(_0xe480x2) {
    var _0xe480x3 = '';
    var _0xe480x4 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var _0xe480x5 = _0xe480x4['length'];
    for (var _0xe480x6 = 0; _0xe480x6 < _0xe480x2; _0xe480x6++) {
        _0xe480x3 += _0xe480x4['charAt'](Math['floor'](Math['random']() * _0xe480x5))
    };
    return _0xe480x3
}
