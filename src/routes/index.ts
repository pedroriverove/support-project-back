import {Router} from 'express';
import {CreateTicketController} from '@/controllers/ticket/CreateTicketController';
import {CreateUserController} from '@/controllers/user/CreateUserController';
import {DeleteTicketController} from '@/controllers/ticket/DeleteTicketController';
import {GetAllRolesController} from '@/controllers/role/GetAllRolesController';
import {GetAllTicketsController} from '@/controllers/ticket/GetAllTicketsController';
import {GetAllUsersController} from '@/controllers/user/GetAllUsersController';
import {GetAssignedUsersController} from '@/controllers/user/GetAssignedUsersController';
import {GetOneTicketController} from '@/controllers/ticket/GetOneTicketController';
import {GetOneUserController} from '@/controllers/user/GetOneUserController';
import {GetUserRolesController} from '@/controllers/user/GetUserRolesController';
import {UpdateTicketController} from '@/controllers/ticket/UpdateTicketController';
import {UpdateUserController} from '@/controllers/user/UpdateUserController';
import {ValidateUserController} from "@/controllers/user/ValidateUserController";

const routes = Router();

routes
    .route("/api/v1/assigned-users")
    .get(new GetAssignedUsersController().handle);

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
    .route("/api/v1/user-roles/:name")
    .get(new GetUserRolesController().handle);

routes
    .route("/api/v1/users")
    .get(new GetAllUsersController().handle)
    .post(new CreateUserController().handle);

routes
    .route("/api/v1/users/:id")
    .get(new GetOneUserController().handle)
    .put(new UpdateUserController().handle);

routes
    .route("/api/v1/users/validate")
    .post(new ValidateUserController().handle);

export {routes};
