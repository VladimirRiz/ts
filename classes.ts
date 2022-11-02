class Typescript {
	version: string;

	constructor(version: string) {
		this.version = version;
	}

	info(name: string): string {
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
	readonly numberOfWheels: number = 4;

	constructor(readonly model: string) {}
}

//============

class Animal {
	protected voice: string = '';
	public color: string = 'black';

	constructor() {
		this.go();
	}

	private go(): void {
		console.log('Go');
	}
}

class Cat extends Animal {
	public setVoice(voice: string): void {
		console.log(voice);
	}
}

const cat = new Cat();

cat.setVoice('Test');
console.log(cat.color);

//===========

abstract class Component {
	abstract render(): void;
	abstract info(): string;
}

class AppComponent extends Component {
	render(): void {
		console.log('Render');
	}
	info(): string {
		return 'This is info';
	}
}
