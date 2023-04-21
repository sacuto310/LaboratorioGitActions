const rest = require('./rest');

test('substract two numbers', () => {
  expect(rest(3, 2)).toBe(1);
});