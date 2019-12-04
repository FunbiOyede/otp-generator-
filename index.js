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

  generate(Length = 6, options) {
    if (Length !== undefined) {
      const OptionsForGenerating = { ...options } || {};
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
        const indexChar = this.randomHandler(0, this.chars.length);
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

  /**
   *
   * @param {string} token
   * @returns {object} json object
   */

  validate(password) {
    if (password.token === null) {
      return JSON.stringify({
        status: false,
        message: "OTP does not exit"
      });
    }
    if (password.token !== this.password) {
      return JSON.stringify({
        status: false,
        message: "OTP is not valid"
      });
    }
    if (password.token === this.password) {
      return JSON.stringify({
        status: true,
        message: "OTP is valid"
      });
    }
  }
}

module.exports = OTP;
