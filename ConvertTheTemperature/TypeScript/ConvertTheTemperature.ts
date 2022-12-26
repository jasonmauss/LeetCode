// Solution for: https://leetcode.com/problems/convert-the-temperature/
const convertTemperature = (celsius: number): number[] => {

    let kelvin:number = celsius + 273.15;
    let fahrenheit:number = (celsius * 1.80) + 32.00;

    return [kelvin, fahrenheit];

};




// some test cases
console.log(convertTemperature(36.50)); // [309.65000,97.70000]
console.log(convertTemperature(122.11)); // [395.26000,251.79800]