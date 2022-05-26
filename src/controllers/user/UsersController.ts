import {Request, Response} from 'express';
import {UserService} from '@/services/user/UserService';

export class UsersController {
    async all(req: Request, res: Response) {
        const service = new UserService();

        const users = await service.getAll();

        return res.json(users);
    }

    async assignedUsers(req: Request, res: Response) {
        const service = new UserService();

        const users = await service.getAssignedUsers();

        return res.json(users);
    }

    async one(req: Request, res: Response) {
        const {id} = req.params;

        const service = new UserService();

        const result = await service.getOne({id});

        if (result instanceof Error) return res.status(400).json(result.message);

        return res.json(result);
    }

    async search(req: Request, res: Response) {
        const {name} = req.params;

        const service = new UserService();

        const users = await service.getSearch({name});

        return res.json(users);
    }
}
