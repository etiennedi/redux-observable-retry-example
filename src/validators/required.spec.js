import { required } from './required';

describe('required validator', () => {
  it('does not crash on undefined', () => {
    expect(() => {
      required();
    }).not.toThrow();
  });

  it('returns an error with an empty string', () => {
    expect(required('')).toEqual(jasmine.any(String));
  });

  it('returns no error with a non-empty string', () => {
    expect(required('I am a string')).toBeUndefined();
  });
});
