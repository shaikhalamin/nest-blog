import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Profile } from './profile';

@Entity('experiences')
export class Experience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  company_name: string;

  @Column({ nullable: true })
  company_email: string;

  @Column({ nullable: true })
  company_phone: string;

  @Column({ nullable: true })
  company_location: string;

  @Column({ nullable: true })
  company_city: string;

  @Column({ nullable: true })
  company_country: string;

  @Column({ nullable: true })
  company_website: string;

  @Column({ nullable: true })
  project_website: string;

  @Column({ nullable: true })
  designation: string;

  @Column({ nullable: true })
  job_type: string;

  @Column({ nullable: true, type: 'date' })
  date_from: Date;

  @Column({ nullable: true, type: 'date' })
  date_to: Date;

  @Column({ nullable: true, type: 'text' })
  job_responsibility: string;

  @Column({ nullable: true })
  work_stack: string;

  @ManyToOne(() => Profile, (profile) => profile.experiences)
  profile: Profile;
}
