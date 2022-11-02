function add(a, b) {
    return a + b;
}
const toUppercase = (str) => str.trim().toUpperCase();
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() };
    }
    return { x: a, y: b };
}
console.log('Empty: ', position());
console.log('One param: ', position(34));
console.log('Two params ', position(10, 26));
//# sourceMappingURL=function.js.map