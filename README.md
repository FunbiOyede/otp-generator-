# nodejs-OTP

This is a simple package that generates and validates OTPs (One Time Passwords).

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

1.  `digits (Default: true)` true value includes digits in OTP
2.  `alphabet (Default: true)` true value includes alphabeth in OTP
3.  `alphabetToUpperCase (Default: true)` true value includes alphabethToUpperCase in OTP
4.  `specialCharacters (Default: true)` true value includes specialCharacters in OTP

### Sample

Generate Sample

```
const otpGenerator = require('packagename');

const otp = new otpGenerator();

otp.generate(10,{digits:true,alphabet:true,alphabetToUpperCase:true,specialCharacters:true})

```

This will generate a ten digit OTP and the success response will be:

```
{
token: 'dwe7XW&RF&',
status: true,
message: 'OTP generated'
}

```

Validate Sample

```
const otpGenerator = require('packagename');

const otp = new otpGenerator();

otp.validate(token)

```

Responses

1. Successful Validation

```
{
"status":true,
"message":"OTP is valid"
}
```

2. Does not exist. If null

```
{
"status":false,
"message":"OTP does not exit"
}
```

3 .Invalid. Does not match

```
{
"status":false,
"message":"OTP is not valid"
}
```
