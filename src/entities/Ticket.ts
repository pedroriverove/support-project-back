import {
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn, Column
} from 'typeorm';
import { Status } from '@/entities/Status';
import { User } from '@/entities/User';

@Entity("tickets")
export class Ticket {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    creator_user_id: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: "creator_user_id" })
    userCreator: number;

    @Column()
    assigned_user_id!: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: "assigned_user_id" })
    userAssigned!: number;

    @Column()
    status_id: number;

    @ManyToOne(() => Status)
    @JoinColumn({ name: "status_id" })
    status: number;

    @Column()
    name: string;

    @Column()
    description!: string;

    @CreateDateColumn()
    assignment_date!: Date | string;

    @CreateDateColumn()
    resolution_date!: Date | string;

    @CreateDateColumn()
    created_at: Date | string;
}
