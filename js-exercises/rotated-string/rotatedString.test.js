import { rotatedString } from './rotatedString';

describe('rotatedString', () => {
  it('rotatedString returns true for the given strings', () => {
    expect(rotatedString('abcde', 'bcdea')).toBeTruthy();
    expect(rotatedString('abcde', 'eabcd')).toBeTruthy();
  });

  it('rotatedString returns false for the given strings', () => {
    expect(rotatedString('abcde', 'abcde')).toBeFalsy();
    expect(rotatedString('abcde', 'abedc')).toBeFalsy();
  });
});
