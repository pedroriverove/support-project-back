import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from 'typeorm';

@Entity("status")
export class Status {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
