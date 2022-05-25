import { getRepository } from 'typeorm';
import { User } from '@/entities/User';

type UserUpdateRequest = {
    id: string;
    role_id: number;
    username: string;
    email: string;
    fullname: string;
    password: string;
};

export class UpdateUserService {
    async execute({
                      id,
                      role_id,
                      username,
                      email,
                      fullname,
                      password
                  }: UserUpdateRequest) {
        const repo = getRepository(User);

        const user = await repo.findOne(id);

        if (!user) return new Error("User does not exists!!");

        user.role_id = role_id ? role_id : user.role_id;
        user.username = username ? username : user.username;
        user.email = email ? email : user.email;
        user.fullname = fullname ? fullname : user.fullname;
        user.password = password ? password : user.password;

        const update = await repo.save(user)

        return await repo.findOne(update.id, { relations: ["roles"] });
    }
}
