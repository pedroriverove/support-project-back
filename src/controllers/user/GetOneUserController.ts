import { Request, Response } from 'express';
import { GetOneUserService } from '@/services/user/GetOneUserService';

export class GetOneUserController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const service = new GetOneUserService();

        const result = await service.execute({ id });

        if (result instanceof Error) return res.status(400).json(result.message);

        return res.json(result);
    }
}
