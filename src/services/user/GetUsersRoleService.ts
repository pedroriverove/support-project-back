import { getRepository } from 'typeorm';
import { User } from '@/entities/User';

type TicketGetRequest = {
    name: string;
};

export class GetUsersRoleService {
    async execute({ name }: TicketGetRequest) {
        return await getRepository(User)
            .createQueryBuilder("user")
            .innerJoinAndSelect("user.roles", "role", "role.name = :name", { name })
            .getMany();
    }
}
