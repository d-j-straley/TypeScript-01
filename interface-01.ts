// Try creating a new interface and extending it like below
// what is the difference between this and class inheritance?

interface Rectangle5 {
  height4: number,
  width4: number
}

interface ColoredRectangle4 extends Rectangle5 {
  color4: string
}

const coloredRectangle4: ColoredRectangle4 = {
  height4: 20,
  width4: 10,
  color4: "red"
};

console.log(coloredRectangle4);