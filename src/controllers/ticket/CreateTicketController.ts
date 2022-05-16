import {
    Request,
    Response
} from 'express';
import { CreateTicketService } from '@/services/ticket/CreateTicketService';

export class CreateTicketController {
    async handle(req: Request, res: Response) {
        const { creator_user_id, assigned_user_id, status_id, name, description, assignment_date, resolution_date } = req.body;

        const service = new CreateTicketService();

        const result = await service.execute({
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
