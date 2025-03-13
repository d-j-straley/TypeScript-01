// Try creating a new interface and extending it like below
// something wrong here


interface Rectangle4 {
  height4: number,
  width4: number
}

interface ColoredRectangle4 extends Rectangle4 {
  color4: string
}

const coloredRectangle4: ColoredRectangle4 = {
  height4: 20,
  width4: 10,
  color4: "red"
};

console.log(coloredRectangle4);