import {getRepository} from 'typeorm';
import {Ticket} from '@/entities/Ticket';

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
                      resolution_date
                  }: TicketRequest): Promise<Error | Ticket> {
        const repo = getRepository(Ticket);

        const ticket = repo.create({
            creator_user_id,
            assigned_user_id,
            status_id,
            name,
            description,
            assignment_date,
            resolution_date
        });

        const create = await repo.save(ticket)

        return await repo.findOne(create.id, {relations: ["userCreator", "userAssigned", "status"]});
    }
}
