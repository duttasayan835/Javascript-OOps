class Temperature {
  constructor() {
    this.celsius = 0;
    this.fahrenheit = 32;
  }
  get getCelsius() {
    return this.celsius;
  }
  set setCelsius(value) {
    if (typeof value === "number") {
      this.celsius = value;
      this.fahrenheit = 32 + value * 1.8;
    } else {
      console.log("Invalid input");
    }
  }
  get getfahrenheit() {
    return this.fahrenheit;
  }
  set setfahrenheit(value) {
    if (typeof value === "number") {
      this.fahrenheit = value;
      this.celsius = ((value - 32) * 5) / 9;
    } else {
      console.log("Invalid Input");
    }
  }
}
const temperature = new Temperature();
console.log(`Initial Celsius: ${temperature.getCelsius}°C`); // Initial Celsius: 0°C
console.log(`Initial Fahrenheit: ${temperature.getFahrenheit}°F`); // Initial Fahrenheit: 32°F

temperature.setCelsius = 25;
console.log(`Celsius: ${temperature.getCelsius}°C`); // Celsius: 25°C
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`); // Fahrenheit: 77°F

temperature.setFahrenheit = 68;
console.log(`Celsius: ${temperature.getCelsius}°C`); // Celsius: 20°C
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`); // Fahrenheit: 68°F
