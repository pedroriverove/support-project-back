import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Status} from '@/entities/Status';
import {User} from '@/entities/User';

@Entity("tickets")
export class Ticket {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    creator_user_id: number;

    @ManyToOne(() => User)
    @JoinColumn({name: "creator_user_id"})
    userCreator: any;

    @Column()
    assigned_user_id!: number;

    @ManyToOne(() => User)
    @JoinColumn({name: "assigned_user_id"})
    userAssigned!: any;

    @Column()
    status_id: number;

    @ManyToOne(() => Status)
    @JoinColumn({name: "status_id"})
    status: any;

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
