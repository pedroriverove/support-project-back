import {getRepository} from 'typeorm';
import {User} from '@/entities/User';

type UserGetRequest = {
    id: string;
};

export class GetOneUserService {
    async execute({id}: UserGetRequest) {
        const repo = getRepository(User);

        const user = await repo.findOne(id, {relations: ["roles"]});

        if (!user) return new Error("User does not exists!!");

        return user;
    }
}
