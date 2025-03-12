interface Point {
  x: number;
  y: number;
}
            
let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;

console.log(pointPart); // { x: 10 }