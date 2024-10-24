const { sum } = require('./index');

describe('sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds -1 + 1 to equal 0', () => {
    expect(sum(-1, 1)).toBe(0);
  });

  test('adds 0.1 + 0.2 to be close to 0.3', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
