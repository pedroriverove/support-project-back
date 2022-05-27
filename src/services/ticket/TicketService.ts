import {getRepository} from 'typeorm';
import {Ticket} from '@/entities/Ticket';

type AssignedTicketsRequest = {
    id: string;
};

type OneRequest = {
    id: string;
};

export class TicketService {
    async getAll() {
        const repo = getRepository(Ticket);

        return await repo.find({
            relations: ["userCreator", "userAssigned", "status"]
        });
    }

    async getAssignedTickets({id}: AssignedTicketsRequest) {
        return await getRepository(Ticket)
            .createQueryBuilder("ticket")
            .leftJoinAndSelect('ticket.userCreator', 'userCreator')
            .leftJoinAndSelect('ticket.status', 'status')
            .where('ticket.assigned_user_id = :id', {id})
            .getMany();
    }

    async getOneById({id}: OneRequest) {
        const repo = getRepository(Ticket);

        const ticket = await repo.findOne(id, {relations: ["userCreator", "userAssigned", "status"]});

        if (!ticket) return new Error("Ticket does not exists!!");

        return ticket;
    }
}
