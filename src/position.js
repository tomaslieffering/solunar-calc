const LunarCalculation = require('./calcutions/lunar-calculation');
const SolarCalculation = require('./calcutions/solar-calculation');

/**
 * A class that represents the position a user wants to get a
 * solunar calculation for.
 */
class Position {
/**
 *
 * @param {float} latitude - The latitude of the position
 * @param {float} longitude - The longitude of the position
 */
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  /**
   * Performs the lunar calculation
   */
  doLunar() {
    const lunar = new LunarCalculation(this.latitude, this.longitude);
    lunar.add();
  }

  /**
   * Performs the solar calculation
   */
  doSolar() {
    const solar = new SolarCalculation(this.latitude, this.longitude);
    solar.add();
  }
}

module.exports = Position;
