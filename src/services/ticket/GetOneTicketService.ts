import { getRepository } from 'typeorm';
import { Ticket } from '@/entities/Ticket';

type TicketGetRequest = {
    id: string;
};

export class GetOneTicketService {
    async execute({ id }: TicketGetRequest) {
        const repo = getRepository(Ticket);

        const ticket = await repo.findOne(id, { relations: ["user", "status"] });

        if (!ticket) return new Error("Ticket does not exists!!");

        return ticket;
    }
}
