import {NextFunction, Request, Response} from 'express';
import {getRepository} from 'typeorm';
import {User} from "@/entities/User";

export const CheckRole = (roles: Array<string>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const id = res.locals.jwtPayload.userId;

        const userRepository = getRepository(User);
        let user: User;

        try {
            user = await userRepository.findOneOrFail(id, {
                relations: ["roles"]
            });
        } catch (id) {
            res.status(401).send();
        }

        if (roles.indexOf(user.roles.name) > -1) next();
        else res.status(401).send();
    };
};
