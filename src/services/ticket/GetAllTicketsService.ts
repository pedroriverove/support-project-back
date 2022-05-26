import {getRepository} from 'typeorm';
import {Ticket} from '@/entities/Ticket';

export class GetAllTicketsService {
    async execute() {
        const repo = getRepository(Ticket);

        return await repo.find({
            relations: ["userCreator", "userAssigned", "status"]
        });
    }
}
