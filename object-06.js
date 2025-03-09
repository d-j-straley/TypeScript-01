var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rectangle2 = /** @class */ (function () {
    function Rectangle2(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle2.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle2;
}());
/* this started off as an interface
and then was implmented in the Rectangle class
and then the Square class inherited from Rectangle
so as to extend it via inheritance.
*/
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        return _super.call(this, width, width) || this;
    }
    return Square;
}(Rectangle2));
var mySq = new Square(20);
console.log(mySq.getArea());
