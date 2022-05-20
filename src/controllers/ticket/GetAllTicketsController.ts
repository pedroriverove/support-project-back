import { Request, Response } from 'express';
import { GetAllTicketsService } from '@/services/ticket/GetAllTicketsService';

export class GetAllTicketsController {
    async handle(req: Request, res: Response) {
        const service = new GetAllTicketsService();

        const tickets = await service.execute();

        return res.json(tickets);
    }
}
