import {getRepository} from 'typeorm';
import {Ticket} from '@/entities/Ticket';

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

    async getOneById({id}: OneRequest) {
        const repo = getRepository(Ticket);

        const ticket = await repo.findOne(id, {relations: ["userCreator", "userAssigned", "status"]});

        if (!ticket) return new Error("Ticket does not exists!!");

        return ticket;
    }
}
