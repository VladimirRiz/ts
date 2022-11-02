interface Rect {
	readonly id: string;
	color?: string;
	size: {
		width: number;
		height: number;
	};
}

const rect1: Rect = {
	id: '123',
	color: 'white',
	size: {
		width: 12,
		height: 13,
	},
};

const rect2: Rect = {
	id: '1234',
	size: {
		width: 14,
		height: 18,
	},
};

rect2.color = 'black';
// rect2.id = 223;

const rect3 = {} as Rect;
const rect4 = <Rect>{};

//=======

interface RectWithArea extends Rect {
	getArea: () => number;
}

const rect5: RectWithArea = {
	id: '424',
	size: {
		width: 44,
		height: 22,
	},
	getArea: (): number => {
		return this.size.width * this.size.height;
	},
};

//========

interface IClock {
	time: Date;
	setTime(date: Date): void;
}

class Clock implements IClock {
	time: Date = new Date();
	setTime(date: Date): void {
		this.time = date;
	}
}

//===========

interface Styles {
	[key: string]: string;
}

const css: Styles = {
	border: '1px solid black',
	marginTop: '1px',
};
