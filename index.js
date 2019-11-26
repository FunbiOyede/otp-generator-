class OTP {
  constructor() {
    this.digits = "0123456789";
    this.alphabeth = "abcdefghijklmnopqrstuvwxyz";
    this.alphabethToUpperCase = this.alphabeth.toUpperCase();
    this.specialCharacters = "!#$%&()*+/<>?@[]^{}~";
    this.chars = "";
    this.password = "";
  }

  /**
   *
   * @param {number} min
   * @param {number} max
   * @returns {number} random number depending on the maximum and minimum values
   *
   */

  randomHandler(min, max) {
    return Math.floor(Math.random() * max - min * 10);
  }

  /**
   *
   * @param {number} length  length of passowrd
   * @param {object} options
   */
  generate(length, options) {
    if (length !== undefined) {
      let Length = length || 6;
      let OptionsForGenerating = { ...options } || {};

      OptionsForGenerating.digits = OptionsForGenerating.hasOwnProperty(
        "digits"
      )
        ? options.digits
        : true;
      OptionsForGenerating.alphabeth = OptionsForGenerating.hasOwnProperty(
        "alphabeth"
      )
        ? options.alphabeth
        : true;
      OptionsForGenerating.alphabethToUpperCase = OptionsForGenerating.hasOwnProperty(
        "alphabethToUpperCase"
      )
        ? options.alphabethToUpperCase
        : true;
      OptionsForGenerating.specialCharacters = OptionsForGenerating.hasOwnProperty(
        "specialCharacters"
      )
        ? options.specialCharacters
        : true;

      this.charContenation(OptionsForGenerating);

      for (let i = 0; i < Length; ++i) {
        let indexChar = this.randomHandler(0, this.chars.length);
        this.password += this.chars[indexChar];
      }
      return this.password;
    } else {
      throw new Error("lenght is undefined");
    }
  }

  charContenation(generatedOptions) {
    this.chars =
      ((generatedOptions.digits || "") && this.digits) +
      ((generatedOptions.alphabeth || "") && this.alphabeth) +
      ((generatedOptions.alphabethToUpperCase || "") &&
        this.alphabethToUpperCase) +
      ((generatedOptions.specialCharacters || "") && this.specialCharacters);
  }
}

let opt = new OTP();
console.log(
  opt.generate(10, { digits: true, specialCharacters: false, alphabeth: true })
);
