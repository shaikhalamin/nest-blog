import {
  AfterInsert,
  Column,
  Entity,
  InsertEvent,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ default: true })
  is_active: boolean;

  @AfterInsert()
  resetCounters(event: InsertEvent<User>) {
    console.log('before user inserting...:', event);
  }
}
