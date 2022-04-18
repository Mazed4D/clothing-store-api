import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  displayName: string;

  @Column({ select: false })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    console.log(process.env.NODE_ENV);
    this.password = await bcrypt.hash(this.password, 10);
  }
}
