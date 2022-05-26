import * as jwt from 'jsonwebtoken';
import config from '@/config/config';
import {Request, Response} from 'express';
import {User} from '@/entities/User';
import {getRepository} from 'typeorm';
import {UserService} from "@/services/user/UserService";

export class AuthController {
    async login(req: Request, res: Response) {
        let {username, password} = req.body;

        if (!(username && password)) {
            res.status(400).send();
        }

        const userRepository = getRepository(User);
        let user: User;
        try {
            user = await userRepository.findOneOrFail({where: {username}});
        } catch (error) {
            res.status(401).send();
        }

        if (!user.checkIfUnencryptedPasswordIsValid(password)) {
            res.status(401).send();
            return;
        }

        const token = jwt.sign(
            {userId: user.id, username: user.username},
            config.jwtSecret,
            {expiresIn: "1h"}
        );

        return res.json(token);
    }

    async getOneById(req: Request, res: Response) {
        const {id} = req.params;

        const service = new UserService();

        const result = await service.getOneById({id});

        if (result instanceof Error) return res.status(400).json(result.message);

        return res.json(result);
    }
}
