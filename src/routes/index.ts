import { Router } from 'express';
import { CreateTicketController } from '@/controllers/ticket/CreateTicketController';
import { CreateUserController } from '@/controllers/user/CreateUserController';
import { DeleteTicketController } from '@/controllers/ticket/DeleteTicketController';
import { GetAllRolesController } from '@/controllers/role/GetAllRolesController';
import { GetAllTicketsController } from '@/controllers/ticket/GetAllTicketsController';
import { GetAllUsersController } from '@/controllers/user/GetAllUsersController';
import { GetOneTicketController } from '@/controllers/ticket/GetOneTicketController';
import { GetOneUserController } from '@/controllers/user/GetOneUserController';
import { GetUsersAssignedController } from '@/controllers/user/GetUsersAssignedController';
import { GetUsersRoleController } from '@/controllers/user/GetUsersRoleController';
import { UpdateTicketController } from '@/controllers/ticket/UpdateTicketController';
import { UpdateUserController } from '@/controllers/user/UpdateUserController';
import { ValidateUserController } from "@/controllers/user/ValidateUserController";

const routes = Router();

routes
    .route("/api/v1/roles")
    .get(new GetAllRolesController().handle);

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
    .get(new GetAllUsersController().handle)
    .post(new CreateUserController().handle);

routes
    .route("/api/v1/users/:id")
    .get(new GetOneUserController().handle)
    .put(new UpdateUserController().handle);

routes
    .route("/api/v1/users/:name")
    .get(new GetUsersRoleController().handle);

routes
    .route("/api/v1/users/assigned")
    .get(new GetUsersAssignedController().handle);

routes
    .route("/api/v1/users/validate")
    .post(new ValidateUserController().handle);

export { routes };
