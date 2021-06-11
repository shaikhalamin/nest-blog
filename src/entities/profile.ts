import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Experience } from './experience';
import { User } from './user';

@Entity({ name: 'profiles' })
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  full_name: string;

  @Column({ nullable: true })
  cv_name: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  postal_code: string;

  @Column({ nullable: true })
  date_of_birth: Date;

  @Column({ nullable: true })
  cityzenship: string;

  @Column({ nullable: true })
  maritial_status: string;

  @Column({ nullable: true })
  designation: string;

  @Column({ nullable: true })
  specialized_at: string;

  @Column({ nullable: true })
  picture_cover: string;

  @Column({ nullable: true })
  picture_about: string;

  @Column({ nullable: true })
  cv_file: string;

  @Column({ nullable: true })
  linkedin_profile_path: string;

  @Column({ nullable: true })
  github_profile_path: string;

  @Column({ nullable: true })
  twitter_profile_path: string;

  @Column({ type: 'text', nullable: true })
  about_info: string;

  @Column({ nullable: true })
  profile_title: string;

  @Column({ nullable: true })
  profile_meta: string;

  @Column({ type: 'text', nullable: true })
  profile_meta_descriptions: string;

  @Column({ nullable: true })
  smo_image: string;

  @OneToOne(() => User, (user) => user.profile)
  @JoinColumn()
  user: User;

  @OneToMany(() => Experience, (experience) => experience.profile)
  experiences: Experience[];
}
