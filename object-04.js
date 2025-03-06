var Person3 = /** @class */ (function () {
    function Person3(name) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }
    Person3.prototype.getName = function () {
        return this.name;
    };
    return Person3;
}());
var person3 = new Person3("Jane");
person3.name = "David";
console.log(person3.getName());
