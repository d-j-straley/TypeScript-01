interface Shape {
  getArea: () => number;
}

class Rectangle3 implements Shape {
  // using protected for these members allows access from classes that extend from this class, such as Square
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}

class Square3 extends Rectangle3 {
  public constructor(width: number) {
    super(width, width);
  }

  // this toString replaces the toString from Rectangle
  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}

const mySq3 = new Square3(20);
const myRect3 = new Rectangle3(20, 30);
console.log(myRect3.toString());
console.log(mySq3.toString());