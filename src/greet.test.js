import { greet } from './greet.js';
test('greet returns the exact greeting', () => {
  expect(greet('world')).toBe('hello, world');
});
