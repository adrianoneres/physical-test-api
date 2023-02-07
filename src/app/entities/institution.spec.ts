import { makeInstitution } from '@test/factories/institution-factory';
import { Name } from './name';

describe('Institution', () => {
  it('should be able to create an institution', async () => {
    const institution = await makeInstitution();

    expect(institution.name.value).toEqual('Test Institution');
  });

  it('should be able to create an inactive institution', async () => {
    const institution = await makeInstitution({ isActive: false });

    expect(institution.isActive).toEqual(false);
  });

  it('should be able set name', async () => {
    const institution = await makeInstitution();

    institution.name = new Name('New Name Institution');

    expect(institution.name.value).toEqual('New Name Institution');
  });

  it('should be able set isActive', async () => {
    const institution = await makeInstitution();

    institution.isActive = false;

    expect(institution.isActive).toEqual(false);
  });
});
