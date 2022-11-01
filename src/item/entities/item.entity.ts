import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ name: 'name', type: 'varchar', length: 50 })
  name: string;

  @Column({ name: 'model', type: 'varchar', length: 50 })
  model: string;

  @Column({ name: 'licensePlate', type: 'varchar', length: 10 })
  licensePlate: string;

  @Column({ name: 'photo', type: 'varchar', length: 255 })
  photo: string;
}
