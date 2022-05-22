import { Router } from 'express';
import { CreateTicketController } from '@/controllers/ticket/CreateTicketController';
import { DeleteTicketController } from '@/controllers/ticket/DeleteTicketController';
import { GetAllTicketsController } from '@/controllers/ticket/GetAllTicketsController';
import { GetAllUsersController } from '@/controllers/user/GetAllUsersController';
import { GetOneTicketController } from '@/controllers/ticket/GetOneTicketController';
import { GetUserRoleController } from '@/controllers/user/GetUserRoleController';
import { UpdateTicketController } from '@/controllers/ticket/UpdateTicketController';

const routes = Router();

routes
    .route("/api/v1/tickets")
    .get(new GetAllTicketsController().handle)
    .post(new CreateTicketController().handle);

routes
    .route("/api/v1/tickets/:id")
    .get(new GetOneTicketController().handle)
    .put(new UpdateTicketController().handle)
    .delete(new DeleteTicketController().handle);

routes
    .route("/api/v1/users")
    .get(new GetAllUsersController().handle);

routes
    .route("/api/v1/users/:name")
    .get(new GetUserRoleController().handle);

export { routes };
