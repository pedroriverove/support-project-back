import * as jwt from 'jsonwebtoken';
import config from '@/config/config';
import {User} from '@/entities/User';
import {getRepository} from 'typeorm';
import AuthInterface from '@/interfaces/AuthInterface';

type LoginRequest = {
    username: string;
    password: string;
};

type OneRequest = {
    id: string;
};

export class AuthService {
    async getLogin({username, password}: LoginRequest) {
        const userRepository = getRepository(User);
        let user: User;

        try {
            user = await userRepository.findOneOrFail({where: {username}});
        } catch (error) {
            return new Error("Unauthorized!!");
        }

        if ((typeof user === 'undefined')) {
            return new Error("Unauthorized!!");
        }

        if (!user.checkIfUnencryptedPasswordIsValid(password)) {
            return new Error("Unauthorized!!");
        }

        const access_token = jwt.sign(
            {userId: user.id, username: user.username},
            config.jwtSecret,
            {expiresIn: "6h"}
        );

        const auth: AuthInterface = {
            user: user,
            access_token: access_token,
        };

        return auth;
    }

    async getOneById({id}: OneRequest) {
        const repo = getRepository(User);

        const user = await repo.findOneOrFail(id, {
            relations: ["roles"]
        });

        if (!user) return new Error("User does not exists!!");

        return user;
    }
}
