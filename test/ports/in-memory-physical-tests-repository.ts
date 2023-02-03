import { PhysicalTest } from '@app/entities/physical-test';
import {
  FindByNameAndDateProps,
  PhysicalTestsRepository,
} from '@app/ports/physical-tests-repository';

export class InMemoryPhysicalTestsRepository extends PhysicalTestsRepository {
  public physicalTests: PhysicalTest[] = [];

  findAll(): Promise<PhysicalTest[]> {
    return Promise.resolve(this.physicalTests);
  }

  findByid(id: string): Promise<PhysicalTest | null> {
    return Promise.resolve(
      this.physicalTests.find(item => item.id === id) || null,
    );
  }

  findByNameOrDate(props: FindByNameAndDateProps): Promise<PhysicalTest[]> {
    return Promise.resolve(
      this.physicalTests.filter(
        item =>
          item.name.value === props.name || item.date.value === props.date,
      ) || [],
    );
  }

  create(physicalTest: PhysicalTest): Promise<void> {
    this.physicalTests.push(physicalTest);
    return Promise.resolve();
  }

  save(physicalTest: PhysicalTest): Promise<void> {
    const index = this.physicalTests.findIndex(
      item => item.id === physicalTest.id,
    );

    if (index) {
      this.physicalTests[index] = physicalTest;
    }

    return Promise.resolve();
  }

  delete(id: string): Promise<void> {
    const index = this.physicalTests.findIndex(item => item.id === id);

    if (index) {
      this.physicalTests.splice(index, 1);
    }

    return Promise.resolve();
  }
}
