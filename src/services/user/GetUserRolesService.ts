import { getRepository } from 'typeorm';
import { User } from '@/entities/User';

type UserGetRequest = {
    name: string;
};

export class GetUserRolesService {
    async execute({ name }: UserGetRequest) {
        return await getRepository(User)
            .createQueryBuilder("user")
            .innerJoinAndSelect("user.roles", "role", "role.name = :name", { name })
            .getMany();
    }
}
