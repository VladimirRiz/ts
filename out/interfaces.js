const rect1 = {
    id: '123',
    color: 'white',
    size: {
        width: 12,
        height: 13,
    },
};
const rect2 = {
    id: '1234',
    size: {
        width: 14,
        height: 18,
    },
};
rect2.color = 'black';
// rect2.id = 223;
const rect3 = {};
const rect4 = {};
const rect5 = {
    id: '424',
    size: {
        width: 44,
        height: 22,
    },
    getArea: () => {
        return this.size.width * this.size.height;
    },
};
class Clock {
    constructor() {
        this.time = new Date();
    }
    setTime(date) {
        this.time = date;
    }
}
const css = {
    border: '1px solid black',
    marginTop: '1px',
};
//# sourceMappingURL=interfaces.js.map