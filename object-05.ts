interface Shape {
    /* Note that this is not a base class; it's an interface. */
  getArea: () => number;
}

class Rectangle implements Shape {
    // Note that this demonstrates how to implement an interface,
    // not how to extend a class.
    // Furthermore this demonstrates using inline access modifiers( i.e. "protected" and "readonly")
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

const myRect = new Rectangle(10,20);

console.log(myRect.getArea());