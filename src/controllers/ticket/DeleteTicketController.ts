import {Request, Response} from 'express';
import {DeleteTicketService} from '@/services/ticket/DeleteTicketService';

export class DeleteTicketController {
    async handle(req: Request, res: Response) {
        const {id} = req.params;

        const service = new DeleteTicketService

        const result = await service.execute(id);

        if (result instanceof Error) return res.status(400).json(result.message);

        return res.status(204).end();
    }
}
