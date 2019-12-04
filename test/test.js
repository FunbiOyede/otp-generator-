const expect = require("chai").expect;
const should = require("chai").should();
let OtpGenerator = require("../src/index");
let validator = require("../src/index");

describe("OTP GENERATOR", function() {
  it("should return default of 6 digits when the length of otp is not specified", function() {
    let password = new OtpGenerator();
    let otp = password.generate();
    expect(otp.token.length).to.equal(6);
  });

  it("should return 8 digits when the length of otp is 8", function() {
    let password = new OtpGenerator();
    let otp = password.generate(8);
    expect(otp.token.length).to.equal(8);
  });
  it("should return an object when otp is generated", function() {
    let password = new OtpGenerator();
    let otp = password.generate();
    otp.should.be.an("object");
  });
  it("should return an object with status property with a value of false if otp does not validate", function() {
    let password = new OtpGenerator();
    let otpPassword = password.generate();
    let validateResponse = password.validate(otpPassword.token);
    validateResponse.should.equal(
      JSON.stringify({
        status: false,
        message: "OTP is not valid"
      })
    );
  });
});
