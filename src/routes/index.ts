import {Router} from 'express';
import {AuthController} from '@/controllers/auth/AuthController';
import {CheckJwt} from "@/middlewares/CheckJwt";
import {CheckRole} from "@/middlewares/CheckRole";
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
    .route("/api/v1/auth/login")
    .post(new AuthController().getLogin);

routes
    .route("/api/v1/auth/:id([0-9]+)")
    .get(
        [CheckJwt, CheckRole(["admin", "dev"])],
        new AuthController().getOneById
    );

routes
    .route("/api/v1/assigned-users")
    .get(new UsersController().getAssignedUsers);

routes
    .route("/api/v1/assigned-tickets/:id([0-9]+)")
    .get(new TicketController().getAssignedTickets);

routes
    .route("/api/v1/roles")
    .get(new RoleController().all);

routes
    .route("/api/v1/tickets")
    .get(new TicketController().getAll)
    .post(new CreateTicketController().handle);

routes
    .route("/api/v1/tickets/:id([0-9]+)")
    .get(new TicketController().getOneById)
    .put(new UpdateTicketController().handle)
    .delete(new DeleteTicketController().handle);

routes
    .route("/api/v1/user-roles/:name")
    .get(new UsersController().getUsersByRole);

routes
    .route("/api/v1/users")
    .get(new UsersController().getAll)
    .post(new CreateUserController().handle);

routes
    .route("/api/v1/users/:id([0-9]+)")
    .get(new UsersController().getOneById)
    .put(new UpdateUserController().handle);

routes
    .route("/api/v1/users/validate")
    .post(new ValidateUserController().handle);

export {routes};
