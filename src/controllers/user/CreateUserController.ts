import { Request, Response } from 'express';
import { CreateUserService } from '@/services/user/CreateUserService';

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const {
            role_id,
            username,
            email,
            fullname,
            password
        } = req.body;

        const service = new CreateUserService();

        const result = await service.execute({
            role_id,
            username,
            email,
            fullname,
            password
        });

        if (result instanceof Error) return res.status(400).json(result.message);

        return res.json(result);
    }
}
