/**
 * A class for performing solar calculations
 */
class SolarCalculation {
/**
 *
 * @param {float} latitude - The latitude position for the lunar calculation
 * @param {float} longitude - The longitude position for the lunar calculation
 */
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  /**
   * Dummy function - Adds together the latitude and longitude
   */
  add() {
    console.log(this.latitude + this.longitude);
  }
}

module.exports = SolarCalculation;
