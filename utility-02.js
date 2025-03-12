var myCar = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};
console.log(myCar); // { make: 'Ford', model: 'Focus', mileage: 12000 }
// The `Required` utility type makes all properties of a type required. In this example, the mileage property is optional in the Car interface, but the Required utility type forces it to be defined in the myCar object. The output is { make: 'Ford', model: 'Focus', mileage: 12000 }.
