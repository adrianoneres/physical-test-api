export interface JwtProps {
  id: string;
  name: string;
  email: string;
  username: string;
}

export abstract class JwtProvider {
  abstract generate(props: JwtProps): Promise<string>;
  abstract verify(token: string): Promise<JwtProps>;
}
