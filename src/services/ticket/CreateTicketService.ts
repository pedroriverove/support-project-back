import { getRepository } from 'typeorm';
import { Status } from '@/entities/Status';
import { Ticket } from '@/entities/Ticket';
import { User } from '@/entities/User';

type TicketRequest = {
    creator_user_id: number;
    assigned_user_id: number;
    status_id: number;
    name: string;
    description: string;
    assignment_date: string;
    resolution_date: string;
};

export class CreateTicketService {
    async execute({
                      creator_user_id,
                      assigned_user_id,
                      status_id,
                      name,
                      description,
                      assignment_date,
                      resolution_date }: TicketRequest):Promise<Error | Ticket> {
        const repo = getRepository(Ticket);
        const repoUser = getRepository(User);
        const repoStatus = getRepository(Status);

        if (!(await repoUser.findOne(creator_user_id))) return new Error("User does not exists!");

        if (!(await repoStatus.findOne(status_id))) return new Error("Status does not exists!");

        const ticket = repo.create({
            creator_user_id,
            assigned_user_id,
            status_id,
            name,
            description,
            assignment_date,
            resolution_date
        });

        await repo.save(ticket);

        return ticket;
    }
}
