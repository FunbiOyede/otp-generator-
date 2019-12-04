const expect = require("chai").expect;
let OtpGenerator = require("../src/index");
let password = new OtpGenerator();

describe("OTP GENERATOR", function() {
  it("should return default of 6 digits when the length of otp is not specified", function(done) {
    let otp = password.generate();
    expect(otp.token.length).to.equal(6);
    done();
  });
});
