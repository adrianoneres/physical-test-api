import { PhysicalTest } from '@app/entities/physical-test';
import {
  CountProps,
  FindManyProps,
  PhysicalTestsRepository,
} from '@app/ports/physical-tests-repository';

export class InMemoryPhysicalTestsRepository extends PhysicalTestsRepository {
  public physicalTests: PhysicalTest[] = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  count(props: CountProps): Promise<number> {
    return Promise.resolve(this.physicalTests.length);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findMany(props: FindManyProps): Promise<PhysicalTest[]> {
    return Promise.resolve(this.physicalTests);
  }

  findByid(id: string): Promise<PhysicalTest | null> {
    return Promise.resolve(
      this.physicalTests.find(item => item.id === id) || null,
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

    if (index >= 0) {
      this.physicalTests[index] = physicalTest;
    }

    return Promise.resolve();
  }

  delete(id: string): Promise<void> {
    const index = this.physicalTests.findIndex(item => item.id === id);

    if (index >= 0) {
      this.physicalTests.splice(index, 1);
    }

    return Promise.resolve();
  }
}
