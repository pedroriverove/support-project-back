import { Request, Response } from 'express';
import { GetUserRolesService } from '@/services/user/GetUserRolesService';

export class GetUserRolesController {
    async handle(req: Request, res: Response) {
        const { name } = req.params;

        const service = new GetUserRolesService();

        const users = await service.execute({ name });

        return res.json(users);
    }
}
