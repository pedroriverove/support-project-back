import {Request, Response} from 'express';
import {TicketService} from '@/services/ticket/TicketService';

export class TicketController {
    async getAll(req: Request, res: Response) {
        const service = new TicketService();

        const tickets = await service.getAll();

        return res.json(tickets);
    }

    async getOneById(req: Request, res: Response) {
        const {id} = req.params;

        const service = new TicketService();

        const result = await service.getOneById({id});

        if (result instanceof Error) return res.status(400).json(result.message);

        return res.json(result);
    }
}
