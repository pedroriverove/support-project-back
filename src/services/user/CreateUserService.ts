import { getRepository } from 'typeorm';
import { User } from '@/entities/User';

type UserRequest = {
    role_id: number;
    username: string;
    email: string;
    fullname: string;
    password: string;
};

export class CreateUserService {
    async execute({
                      role_id,
                      username,
                      email,
                      fullname,
                      password
                  }: UserRequest): Promise<Error | User> {
        const repo = getRepository(User);

        const usernameExists = await repo.createQueryBuilder("user")
            .where('user.username = :username', { username })
            .getOne();

        if (usernameExists) return new Error("Username already exists!!");

        const emailExists = await repo.createQueryBuilder("user")
            .where('user.email = :email', { email })
            .getOne();

        if (emailExists) return new Error("Email already exists!!");

        const user = repo.create({
            role_id,
            username,
            email,
            fullname,
            password
        });

        user.hashPassword();

        const create = await repo.save(user)

        return await repo.findOne(create.id, { relations: ["roles"] });
    }
}
