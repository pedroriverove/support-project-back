import { Request, Response } from 'express';
import { UpdateTicketService } from '@/services/ticket/UpdateTicketService';

export class UpdateTicketController {
    async handle(req: Request, res: Response) {
        const {id} = req.params;
        const {
            creator_user_id,
            assigned_user_id,
            status_id,
            name,
            description,
            assignment_date,
            resolution_date
        } = req.body;

        const service = new UpdateTicketService();

        const result = await service.execute({
            id,
            creator_user_id,
            assigned_user_id,
            status_id,
            name,
            description,
            assignment_date,
            resolution_date
        });

        if (result instanceof Error) return res.status(400).json(result.message);

        return res.json(result);
    }
}
