import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import {Role} from '@/entities/Role';
import {Ticket} from '@/entities/Ticket';

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    role_id: number;

    @ManyToOne(() => Role)
    @JoinColumn({name: "role_id"})
    roles: any;

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

    @OneToMany(() => Ticket, ticket => ticket.userCreator)
    creator: Ticket[];

    @OneToMany(() => Ticket, ticket => ticket.userAssigned)
    assigned: Ticket[];

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }
}
