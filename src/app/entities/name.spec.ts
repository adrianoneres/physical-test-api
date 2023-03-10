import { InvalidNameLengthError } from '@errors/invalid-name-length-error';
import { Name } from './name';

describe('Name', () => {
  it('should be able to create a name', () => {
    const name = new Name('John Doe');

    expect(name.value).toBeTruthy();
  });

  it('should not be able to create a name with less than 3 characters', () => {
    expect(() => new Name('J')).toThrow(InvalidNameLengthError);
  });

  it('should not be able to create a name with more than 240 characters', () => {
    expect(() => new Name('J'.repeat(241))).toThrow(InvalidNameLengthError);
  });
});
