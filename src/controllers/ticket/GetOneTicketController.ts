import {Request, Response} from 'express';
import {GetOneTicketService} from '@/services/ticket/GetOneTicketService';

export class GetOneTicketController {
    async handle(req: Request, res: Response) {
        const {id} = req.params;

        const service = new GetOneTicketService();

        const result = await service.execute({id});

        if (result instanceof Error) return res.status(400).json(result.message);

        return res.json(result);
    }
}
