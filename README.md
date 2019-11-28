# nodejs-otp

This is a simple package to generate and validate OTP (One Time Passwords)

### Installation

```
yarn add whatever generator

npm install whatever --save

```

### Usage

```
const otpGenerator = require('packagename');

const password = new otpGenerator();

password.generate(8,{digits:true,specialCharacters:true,alphabet:true})

```

- `length (optional | default = 6)` : length of password.
- `options - optional`
