import { Length } from 'class-validator';

export class CreateUserDto {
  @Length(4, 28)
  username: string;

  @Length(4, 28)
  displayName: string;

  @Length(8, 48)
  password: string;
}
