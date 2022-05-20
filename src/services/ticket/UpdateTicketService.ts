import { getRepository } from 'typeorm';
import { Ticket } from '@/entities/Ticket';
import { User } from '@/entities/User';
import { Status } from '@/entities/Status';

type TicketUpdateRequest = {
    id: string;
    creator_user_id: number;
    assigned_user_id: number;
    status_id: number;
    name: string;
    description: string;
    assignment_date: string;
    resolution_date: string;
};

export class UpdateTicketService {
    async execute({
                      id,
                      creator_user_id,
                      assigned_user_id,
                      status_id,
                      name,
                      description,
                      assignment_date,
                      resolution_date
                  }: TicketUpdateRequest) {
        const repo = getRepository(Ticket);
        const repoUser = getRepository(User);
        const repoStatus = getRepository(Status);

        const ticket = await repo.findOne(id);

        if (!ticket) return new Error("Ticket does not exists!!");

        if (!(await repoUser.findOne(creator_user_id))) return new Error("User does not exists");

        if (!(await repoStatus.findOne(status_id))) return new Error("Status does not exists");

        ticket.creator_user_id = creator_user_id ? creator_user_id : ticket.creator_user_id;
        ticket.assigned_user_id = assigned_user_id ? assigned_user_id : ticket.assigned_user_id;
        ticket.status_id = status_id ? status_id : ticket.status_id;
        ticket.name = name ? name : ticket.name;
        ticket.description = description ? description : ticket.description;
        ticket.assignment_date = assignment_date ? assignment_date : ticket.assignment_date;
        ticket.resolution_date = resolution_date ? resolution_date : ticket.resolution_date;

        await repo.save(ticket);

        return ticket;
    }
}
