interface Shape {
    allArea(): number;
}

export class Circle implements Shape {
    constructor(public radius: number) {}

    allArea(): number {
        return this.radius ** 2 * Math.PI;
    }
}

export class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}

    allArea(): number {
        return this.width * this.height;
    }
}

export function sumOfAllAreas(...shapes: Shape[]): number {
    return shapes.reduce((total, shape) => total + shape.allArea(), 0);
}

const circle1 = new Circle(2);
const circle2 = new Circle(3);
const rect1 = new Rectangle(2, 4);
const rect2 = new Rectangle(3, 2);

console.log(sumOfAllAreas(circle1, circle2)); // ~ 40.84...
console.log(sumOfAllAreas(circle1, rect1));   // ~ 20.84...
