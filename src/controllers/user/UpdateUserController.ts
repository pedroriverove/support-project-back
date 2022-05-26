import { Request, Response } from 'express';
import { UpdateUserService } from '@/services/user/UpdateUserService';

export class UpdateUserController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const {
            role_id,
            fullname
        } = req.body;

        const service = new UpdateUserService();

        const result = await service.execute({
            id,
            role_id,
            fullname,
        });

        if (result instanceof Error) return res.status(400).json(result.message);

        return res.json(result);
    }
}
