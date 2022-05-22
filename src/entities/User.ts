import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Role } from '@/entities/Role';

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    role_id: number;

    @ManyToOne(() => Role)
    @JoinColumn({ name: "role_id" })
    roles: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    fullname: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }
}
