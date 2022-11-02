var _this = this;
var rect1 = {
    id: '123',
    color: 'white',
    size: {
        width: 12,
        height: 13,
    },
};
var rect2 = {
    id: '1234',
    size: {
        width: 14,
        height: 18,
    },
};
rect2.color = 'black';
// rect2.id = 223;
var rect3 = {};
var rect4 = {};
var rect5 = {
    id: '424',
    size: {
        width: 44,
        height: 22,
    },
    getArea: function () {
        return _this.size.width * _this.size.height;
    },
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '1px',
};
//# sourceMappingURL=interfaces.js.map