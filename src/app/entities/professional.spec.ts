import { makeProfessional } from '@test/factories/professional-factory';
import { Registration } from './registration';
import { Name } from './name';

describe('Professional', () => {
  it('should be able to create a professional', async () => {
    const professional = await makeProfessional();

    expect(professional.name.value).toEqual('Jane Doe');
    expect(professional.registration.value).toEqual('123456');
  });

  it('should be able to create an inactive professional', async () => {
    const professional = await makeProfessional({ isActive: false });

    expect(professional.isActive).toEqual(false);
  });

  it('should be able set name', async () => {
    const professional = await makeProfessional();

    professional.name = new Name('Mary Jane');

    expect(professional.name.value).toEqual('Mary Jane');
  });

  it('should be able set registration', async () => {
    const professional = await makeProfessional();

    professional.registration = new Registration('654321');

    expect(professional.registration.value).toEqual('654321');
  });

  it('should be able set isActive', async () => {
    const professional = await makeProfessional();

    professional.isActive = false;

    expect(professional.isActive).toEqual(false);
  });
});
