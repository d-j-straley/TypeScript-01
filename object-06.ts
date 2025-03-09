interface Shape {
  getArea: () => number;
}
      
class Rectangle2 implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}
      
/* this started off as an interface
and then was implmented in the Rectangle class
and then the Square class inherited from Rectangle
so as to extend it via inheritance.
*/

class Square extends Rectangle2 {
  public constructor(width: number) {
    super(width, width);
  }
  // getArea gets inherited from Rectangle
}

const mySq = new Square(20);

console.log(mySq.getArea());