import { Request, Response } from 'express';
import { ValidateUserService } from '@/services/user/ValidateUserService';

export class ValidateUserController {
    async handle(req: Request, res: Response) {
        const {
            field,
            value
        } = req.body;

        const service = new ValidateUserService();

        const result = await service.execute({
            field,
            value
        });

        if (result instanceof Error) return res.status(400).json(result.message);

        return res.json(result);
    }
}
