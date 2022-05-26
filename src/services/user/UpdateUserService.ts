import {getRepository} from 'typeorm';
import {User} from '@/entities/User';

type UserUpdateRequest = {
    id: string;
    role_id: number;
    fullname: string;
};

export class UpdateUserService {
    async execute({
                      id,
                      role_id,
                      fullname
                  }: UserUpdateRequest) {
        const repo = getRepository(User);

        const user = await repo.findOne(id);

        if (!user) return new Error("User does not exists!!");

        user.role_id = role_id ? role_id : user.role_id;
        user.fullname = fullname ? fullname : user.fullname;

        const update = await repo.save(user)

        return await repo.findOne(update.id, {relations: ["roles"]});
    }
}
