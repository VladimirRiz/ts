class Typescript {
    constructor(version) {
        this.version = version;
    }
    info(name) {
        return `[${name}]: Typescript version is ${this.version}`;
    }
}
// class Car {
// 	readonly model: string;
// 	readonly numberOfWheels: number = 4;
// 	constructor(theModel: string) {
// 		this.model = theModel;
// 	}
// }
class Car {
    constructor(model) {
        this.model = model;
        this.numberOfWheels = 4;
    }
}
//============
class Animal {
    constructor() {
        this.voice = '';
        this.color = 'black';
        this.go();
    }
    go() {
        console.log('Go');
    }
}
class Cat extends Animal {
    setVoice(voice) {
        console.log(voice);
    }
}
const cat = new Cat();
cat.setVoice('Test');
console.log(cat.color);
//===========
class Component {
}
class AppComponent extends Component {
    render() {
        console.log('Render');
    }
    info() {
        return 'This is info';
    }
}
//# sourceMappingURL=classes.js.map