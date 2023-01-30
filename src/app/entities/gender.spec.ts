import { InvalidGenderError } from '@errors/invalid-gender-error';
import { Gender } from './gender';

describe('Gender', () => {
  it('should be able to create a gender', () => {
    const gender = new Gender('M');

    expect(gender.value).toBeTruthy();
  });

  it('should not be able to create a gender with an invalid value', () => {
    expect(() => new Gender('I')).toThrow(InvalidGenderError);
  });
});
