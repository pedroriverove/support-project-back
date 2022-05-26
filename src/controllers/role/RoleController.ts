import {Request, Response} from 'express';
import {RoleService} from '@/services/role/RoleService';

export class RoleController {
    async all(req: Request, res: Response) {
        const service = new RoleService();

        const roles = await service.getAll();

        return res.json(roles);
    }
}
