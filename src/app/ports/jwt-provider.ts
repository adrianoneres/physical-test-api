export interface JwtProps {
  id: string;
  name: string;
}

export abstract class JwtProvider {
  abstract generate(data: JwtProps): Promise<string>;
  abstract verify(token: string): Promise<JwtProps>;
}
