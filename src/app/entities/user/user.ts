import { randomUUID } from 'node:crypto';

import { Replace } from 'src/helpers/Replace';
import { Email } from './email';
import { Name } from './name';
import { Password } from './password';
import { Username } from './username';

export interface UserProps {
  name: Name;
  email: Email;
  username: Username;
  password: Password;
  isAdmin: boolean;
}

export class User {
  private _id: string;
  private props: UserProps;

  constructor(props: Replace<UserProps, { isAdmin?: boolean }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      isAdmin: props.isAdmin ?? false,
    };
  }

  public get id(): string {
    return this._id;
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

  public get isAdmin(): boolean {
    return this.props.isAdmin;
  }
}
