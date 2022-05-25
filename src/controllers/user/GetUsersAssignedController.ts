import { Request, Response } from 'express';
import { GetUsersAssignedService } from '@/services/user/GetUsersAssignedService';

export class GetUsersAssignedController {
    async handle(req: Request, res: Response) {
        const service = new GetUsersAssignedService();

        const users = await service.execute();

        return res.json(users);
    }
}
