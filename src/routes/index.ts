import {Router} from 'express';
import {CreateTicketController} from '@/controllers/ticket/CreateTicketController';
import {CreateUserController} from '@/controllers/user/CreateUserController';
import {DeleteTicketController} from '@/controllers/ticket/DeleteTicketController';
import {RoleController} from '@/controllers/role/RoleController';
import {TicketController} from '@/controllers/ticket/TicketController';
import {UpdateTicketController} from '@/controllers/ticket/UpdateTicketController';
import {UpdateUserController} from '@/controllers/user/UpdateUserController';
import {UsersController} from '@/controllers/user/UsersController';
import {ValidateUserController} from '@/controllers/user/ValidateUserController';

const routes = Router();

routes
    .route("/api/v1/assigned-users")
    .get(new UsersController().assignedUsers);

routes
    .route("/api/v1/roles")
    .get(new RoleController().all);

routes
    .route("/api/v1/tickets")
    .get(new TicketController().all)
    .post(new CreateTicketController().handle);

routes
    .route("/api/v1/tickets/:id")
    .get(new TicketController().one)
    .put(new UpdateTicketController().handle)
    .delete(new DeleteTicketController().handle);

routes
    .route("/api/v1/user-roles/:name")
    .get(new UsersController().search);

routes
    .route("/api/v1/users")
    .get(new UsersController().all)
    .post(new CreateUserController().handle);

routes
    .route("/api/v1/users/:id")
    .get(new UsersController().one)
    .put(new UpdateUserController().handle);

routes
    .route("/api/v1/users/validate")
    .post(new ValidateUserController().handle);

export {routes};
