class Person3 {
  public readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
      
const person3 = new Person3("Jane");
// person3.name = "David";  // Error: Cannot assign to 'name' because it is a read-only property.

console.log(person3.getName());