import {Request, Response} from 'express';
import {AuthService} from '@/services/auth/AuthService';

export class AuthController {
    async getLogin(req: Request, res: Response) {
        let {username, password} = req.body;

        if (!(username && password)) {
            res.status(400).send();
        }

        const service = new AuthService();

        const result = await service.getLogin({username, password});

        if (result instanceof Error) return res.status(401).json(result.message);

        return res.json(result);
    }

    async getOneById(req: Request, res: Response) {
        const {id} = req.params;

        const service = new AuthService();

        const result = await service.getOneById({id});

        if (result instanceof Error) return res.status(400).json(result.message);

        return res.json(result);
    }
}
