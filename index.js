class OTP {
  constructor() {
    this.digits = "0123456789";
    this.alphabeth = "abcdefghijklmnopqrstuvwxyz";
    this.alphabethToUpperCase = this.alphabeth.toUpperCase();
    this.specialCharacters = "!#$%&()*+/<>?@[]^{}~";
    this.chars = "";
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
      if (OptionsForGenerating.hasOwnProperty("digits")) {
        OptionsForGenerating.digits = options.digits;
      } else {
        OptionsForGenerating.digits = true;
      }
      this.charContenation(OptionsForGenerating);
    } else {
      throw new Error("lenght is undefined");
    }
  }

  charContenation(generatedOptions) {
    this.chars = (generatedOptions.digits || "") && this.digits;
    console.log(this.chars);
  }
}

let opt = new OTP();
opt.generate(10, { digits: true });
