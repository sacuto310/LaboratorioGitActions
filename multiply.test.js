const multiply = require('./multiply');

test('multiply two numbers', () => {
  expect(multiply(2, 2)).toBe(4);
});