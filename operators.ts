interface Person {
	name: string;
	age: number;
}

type PersonKeys = keyof Person;

let key: PersonKeys = 'name';
key = 'age';
// key = 'surname'

type User = {
	_id: string;
	name: string;
	email: string;
	createdAt: Date;
};

type UserWithoutMeta1 = Exclude<keyof User, '_id' | 'createdAt'>;
type UserWithoutMeta2 = Pick<User, 'name' | 'email'>;

let u1: UserWithoutMeta1 = 'name';
// u1 = '_id'
u1 = 'email';
