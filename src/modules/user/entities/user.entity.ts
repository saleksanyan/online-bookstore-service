import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToMany,
    JoinTable,
} from 'typeorm'
import { Role } from './role.entity'

@Entity({name : 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column({ type: 'date'})
    date_of_birth: Date

    @Column({ nullable: true })
    gender?: 'MALE' | 'FEMALE'

    @Column({ nullable: true })
    photo_path?: string

    @Column({ nullable: true })
    hashed_token?: string

    @Column({ default: true })
    exist_flag: boolean

    @ManyToMany(() => Role, { cascade: true })
    @JoinTable()
    roles!: Role[]
}
