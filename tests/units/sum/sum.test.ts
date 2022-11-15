const sumFn = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sumFn(1, 2)).toBe(3);
});