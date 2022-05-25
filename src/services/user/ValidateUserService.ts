import { getRepository } from 'typeorm';
import { User } from '@/entities/User';

type UserRequest = {
    field: string;
    value: string;
};

export class ValidateUserService {
    async execute({field, value}: UserRequest): Promise<Error | string | boolean> {
        const repo = getRepository(User);

        if (field === "email") {
            const query = await repo.createQueryBuilder("user")
                .where('user.email = :value', { value })
                .getOne();

            return (typeof query !== 'undefined') ? query.email : false;
        }

        if (field === "username") {
            const query = await repo.createQueryBuilder("user")
                .where('user.username = :value', { value })
                .getOne();

            return (typeof query !== 'undefined') ? query.username : false;
        }

        return false;
    }
}
