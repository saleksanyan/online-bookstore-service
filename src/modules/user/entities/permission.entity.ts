import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable } from 'typeorm';


@Entity({name: 'permissions'})
export class Permission {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  permission_name: string;
}