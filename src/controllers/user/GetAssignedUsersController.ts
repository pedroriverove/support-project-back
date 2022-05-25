import { Request, Response } from 'express';
import { GetAssignedUsersService } from '@/services/user/GetAssignedUsersService';

export class GetAssignedUsersController {
    async handle(req: Request, res: Response) {
        const service = new GetAssignedUsersService();

        const users = await service.execute();

        return res.json(users);
    }
}
