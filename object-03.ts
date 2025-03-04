class Person2 {
  // name is a private member variable
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}
      
const person2 = new Person2("Jane");

console.log(person2.getName());