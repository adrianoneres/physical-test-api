export interface JwtProps {
  id: string;
  name: string;
}

export abstract class JwtProvider {
  abstract generate(props: JwtProps): Promise<string>;
  abstract verify(token: string): Promise<JwtProps>;
}
