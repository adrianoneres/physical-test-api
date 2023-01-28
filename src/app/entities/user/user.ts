import { Email } from './email';
import { Name } from './name';
import { Password } from './password';
import { Username } from './username';

export interface UserProps {
  name: Name;
  email: Email;
  username: Username;
  password: Password;
  admin: boolean;
}

export class User {
  private props: UserProps;

  constructor(props: Omit<UserProps, 'admin'>) {
    this.props = {
      ...props,
      admin: false,
    };
  }

  public get name(): Name {
    return this.props.name;
  }

  public set name(name: Name) {
    this.props.name = name;
  }

  public get email(): Email {
    return this.props.email;
  }

  public set email(email: Email) {
    this.props.email = email;
  }

  public get username(): Username {
    return this.props.username;
  }

  public get password(): Password {
    return this.props.password;
  }

  public set password(password: Password) {
    this.props.password = password;
  }

  public get admin(): boolean {
    return this.props.admin;
  }
}
