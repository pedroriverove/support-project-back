import { Request, Response } from 'express';
import { GetUsersRoleService } from '@/services/user/GetUsersRoleService';

export class GetUserRoleController {
    async handle(req: Request, res: Response) {
        const { name } = req.params;

        const service = new GetUsersRoleService();

        const users = await service.execute({name});

        return res.json(users);
    }
}
