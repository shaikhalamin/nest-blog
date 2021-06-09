import {
  BeforeInsert,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import * as bcrypt from 'bcrypt';
import { Profile } from './profile';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  is_active: boolean;

  @OneToOne(() => Profile, (profile) => profile.user)
  profile: Profile;

  @BeforeInsert()
  async hashPassword() {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }

  async validatePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  }
}
