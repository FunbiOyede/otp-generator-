class OTP {
  constructor() {
    this.digits = "0123456789";
    this.alphabet = "abcdefghijklmnopqrstuvwxyz";
    this.alphabetToUpperCase = this.alphabet.toUpperCase();
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
   * @returns {string} password
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
      OptionsForGenerating.alphabet = OptionsForGenerating.hasOwnProperty(
        "alphabet"
      )
        ? options.alphabet
        : true;
      OptionsForGenerating.alphabetToUpperCase = OptionsForGenerating.hasOwnProperty(
        "alphabetToUpperCase"
      )
        ? options.alphabetToUpperCase
        : true;
      OptionsForGenerating.specialCharacters = OptionsForGenerating.hasOwnProperty(
        "specialCharacters"
      )
        ? options.specialCharacters
        : true;

      this.charConcatenate(OptionsForGenerating);

      for (let i = 0; i < Length; ++i) {
        let indexChar = this.randomHandler(0, this.chars.length);
        this.password += this.chars[indexChar];
      }
      return {
        token: this.password,
        status: true,
        message: "OTP generated"
      };
    } else {
      throw new Error("lenght is undefined");
    }
  }

  /**
   *
   * @param {string} token
   * @returns {object} json object
   */
  validate(token) {
    console.log(this.password);
    if (token === null) {
      return JSON.stringify({
        status: false,
        message: "OTP does not exit"
      });
    }
    if (token !== this.password) {
      return JSON.stringify({
        status: false,
        message: "OTP is not valid"
      });
    }
    if (token === this.password) {
      return JSON.stringify({
        status: true,
        message: "OTP is valid"
      });
    }
  }

  /**
   *
   * @param {object} generatedOptions
   * @function concatenate chars
   */
  charConcatenate(generatedOptions) {
    this.chars =
      ((generatedOptions.digits || "") && this.digits) +
      ((generatedOptions.alphabet || "") && this.alphabet) +
      ((generatedOptions.alphabetToUpperCase || "") &&
        this.alphabetToUpperCase) +
      ((generatedOptions.specialCharacters || "") && this.specialCharacters);
  }
}

let opt = new OTP();
let genOTP = opt.generate(10, {
  digits: true,
  specialCharacters: false,
  alphabet: true
});

console.log(genOTP);

// Validate method
console.log(opt.validate(genOTP.token));
