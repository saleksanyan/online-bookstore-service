import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToMany,
    JoinTable,
} from 'typeorm'
import { Permission } from './permission.entity'

@Entity({ name: "roles" })
export class Role {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ unique: true })
    role_name!: string

    @Column({ unique: true })
    role_name_tag!: string

    @ManyToMany(() => Permission, { cascade: true })
    @JoinTable()
    permissions!: Permission[]
}
