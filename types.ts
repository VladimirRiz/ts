const str: string = 'Hello world';

const isFetching: boolean = true;

const int: number = 42;
const float: number = 4.2;

const numberArr: number[] = [1, 2, 3, 4, 5, 6, 7];
const numberArr2: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];

const words: string[] = ['hello', 'world'];

//Tuple
const contact: [string, number] = ['Rick', 1234567];

//Any
let variable: any = 42;
variable = 'String';

//======
function sayMyName(name: string): void {
	console.log(name);
}

sayMyName('Rick');

//Never
function throwError(message: string): never {
	throw new Error(message);
}

function infinite(): never {
	while (true) {}
}

//Type
type Login = string;

const login: Login = 'admin';

type ID = string | number;
const id: ID = '12312';
const id2: ID = 1234;

type SomeType = string | null | undefined;
