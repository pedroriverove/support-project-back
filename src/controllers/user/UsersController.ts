import {Request, Response} from 'express';
import {UserService} from '@/services/user/UserService';

export class UsersController {
    async getAll(req: Request, res: Response) {
        const service = new UserService();

        const users = await service.getAll();

        return res.json(users);
    }

    async getAssignedUsers(req: Request, res: Response) {
        const {id} = req.params;

        const service = new UserService();

        const result = await service.getAssignedUsers({id});

        if (result instanceof Error) return res.status(400).json(result.message);

        return res.json(result);
    }

    async getOneById(req: Request, res: Response) {
        const {id} = req.params;

        const service = new UserService();

        const result = await service.getOneById({id});

        if (result instanceof Error) return res.status(400).json(result.message);

        return res.json(result);
    }

    async getUsersByRole(req: Request, res: Response) {
        const {name} = req.params;

        const service = new UserService();

        const users = await service.getUsersByRole({name});

        return res.json(users);
    }
}
