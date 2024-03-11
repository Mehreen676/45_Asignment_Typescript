// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two // Define the function to store car information
function car_info(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    extras.forEach(function (extra) {
        Object.keys(extra).forEach(function (key) {
            car[key] = extra[key];
        });
    });
    return car;
}
// Call the function with the required information and two other name-value pairs
var car_details = car_info("Audi", "e-tron", { color: "blue" }, { year: 2024 });
// Print the returned Object to ensure all the information was stored correctly
console.log(car_details);
