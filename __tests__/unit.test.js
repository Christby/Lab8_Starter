// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// tests for isPhoneNumber
test('(123)-456-7890 is a valid phone number', () => {
    expect(functions.isPhoneNumber('(123)-456-7890')).toBe(true);
});

test('(123) 456-7890 is a valid phone number', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('1234567890 is not a valid phone number', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test('(abc) def-ghij is not a valid phone number', () => {
    expect(functions.isPhoneNumber('(abc) def-ghij')).toBe(false);
});

// tests for isEmail
test('12345@ucsd.edu is a valid email', () => {
    expect(functions.isEmail('12345@ucsd.edu')).toBe(true);
});

test('helloworld@random.hel is a valid email', () => {
    expect(functions.isEmail('helloworld@random.hel')).toBe(true);
});

test('helloworld@random.hello is not a valid email', () => {
    expect(functions.isEmail('helloworld@random.hello')).toBe(false);
});

test('ddd.com@ucsd.edu is not a valid email', () => {
    expect(functions.isEmail('ddd.com@ucsd.edu')).toBe(false);
});

// tests for isStrongPassword
test('hello is a strong password', () => {
    expect(functions.isStrongPassword('hello')).toBe(true);
});

test('fosifnwYYYY is a strong password', () => {
    expect(functions.isStrongPassword('fosifnwYYYY')).toBe(true);
});

test('a is not a strong password', () => {
    expect(functions.isStrongPassword('a')).toBe(false);
});

test('12345 is not a strong password', () => {
    expect(functions.isStrongPassword('12345')).toBe(false);
});

// tests for isDate
test('10/05/2002 is a valid date', () => {
    expect(functions.isDate('10/05/2002')).toBe(true);
});

test('05/27/2023 is a valid date', () => {
    expect(functions.isDate('05/27/2023')).toBe(true);
});

test('200/50/2023 is not a valid date', () => {
    expect(functions.isDate('200/50/2023')).toBe(false);
});

test('02/29/20232023 is not a valid date', () => {
    expect(functions.isDate('02/29/20232023')).toBe(false);
});

// tests for isHexColor
test('#123456 is a valid hex color', () => {
    expect(functions.isHexColor('#123456')).toBe(true);
});

test('#123 is a valid hex color', () => {
    expect(functions.isHexColor('#123')).toBe(true);
});

test('#1234567 is not a valid hex color', () => {
    expect(functions.isHexColor('#1234567')).toBe(false);
});

test('#12345 is not a valid hex color', () => {
    expect(functions.isHexColor('#12345')).toBe(false);
});