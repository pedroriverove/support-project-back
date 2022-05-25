import { Request, Response } from 'express';
import { GetAllRolesService } from '@/services/role/GetAllRolesService';

export class GetAllRolesController {
    async handle(req: Request, res: Response) {
        const service = new GetAllRolesService();

        const roles = await service.execute();

        return res.json(roles);
    }
}
