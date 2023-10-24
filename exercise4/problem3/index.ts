class Shape {
    constructor(public a: number) {}
}

export class Circle extends Shape {
    area: number;

    constructor(a: number) {
        super(a);
        this.area = Math.PI * a * a;
    }
}

export class Rectangle extends Shape {
    constructor(public a: number, public b: number) {
        super(a);
    }

    get area(): number {
        return this.a * this.b;
    }
}

export function sumOfAllAreas(...shapes: { area: number }[]): number {
    return shapes.reduce((total, shape) => total + shape.area, 0);
}

const circle1 = new Circle(2);
const circle2 = new Circle(3);
const rect1 = new Rectangle(2, 4);
const rect2 = new Rectangle(3, 2);

console.log(circle1);
console.log(circle2);
console.log(rect1);
console.log(rect2);

console.log(sumOfAllAreas(circle1, circle2)); // ~ 40. ...
console.log(sumOfAllAreas(circle1, rect1));   // ~ 20. ...
