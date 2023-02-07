import { Injectable } from '@nestjs/common';

interface CalculateImcRequest {
  height: number;
  weight: number;
}

type CalculateImcResponse = {
  value: number;
  status: string;
};

@Injectable()
export class CalculateImcService {
  async execute({
    height,
    weight,
  }: CalculateImcRequest): Promise<CalculateImcResponse> {
    const imc = weight / (height * height);

    let status = '';

    if (imc < 18.5) {
      status = 'meagerness';
    } else if (imc >= 18.5 && imc < 25) {
      status = 'normal';
    } else if (imc >= 25 && imc < 30) {
      status = 'overweight';
    } else if (imc >= 30 && imc < 40) {
      status = 'obesity';
    } else if (imc >= 40) {
      status = 'severe obesity';
    }

    return { value: imc, status };
  }
}
