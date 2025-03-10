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
var Rectangle3 = /** @class */ (function () {
    // using protected for these members allows access from classes that extend from this class, such as Square
    function Rectangle3(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle3.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle3.prototype.toString = function () {
        return "Rectangle[width=".concat(this.width, ", height=").concat(this.height, "]");
    };
    return Rectangle3;
}());
var Square3 = /** @class */ (function (_super) {
    __extends(Square3, _super);
    function Square3(width) {
        return _super.call(this, width, width) || this;
    }
    // this toString replaces the toString from Rectangle
    Square3.prototype.toString = function () {
        return "Square[width=".concat(this.width, "]");
    };
    return Square3;
}(Rectangle3));
var mySq3 = new Square3(20);
var myRect3 = new Rectangle3(20, 30);
console.log(myRect3.toString());
console.log(mySq3.toString());
