// Try creating a new interface and extending it like below
// what is the difference between this and class inheritance?

interface Rectangle5 {
  height4: number,
  width4: number
}

interface ColoredRectangle5 extends Rectangle5 {
  color4: string
}

// How is the following possible without an "implements" keyword?
// The interface is not a class, so it does not have to be implemented
// The interface is a contract that the object must follow
const coloredRectangle5: ColoredRectangle5 = {
  height4: 20,
  width4: 10,
  color4: "red"
};

console.log(coloredRectangle5);