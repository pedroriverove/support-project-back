import { getRepository } from 'typeorm';
import { Ticket } from '@/entities/Ticket';

export class DeleteTicketService {
    async execute(id: string) {
        const repo = getRepository(Ticket);

        if (!(await repo.findOne(id))) return new Error("Ticket does not exists!");

        return repo.delete(id);
    }
}
