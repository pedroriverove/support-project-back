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
    .route("/api/v1/assigned-users/:id([0-9]+)")
    .get(
        [CheckJwt, CheckRole(["admin"])],
        new UsersController().getAssignedUsers
    );

routes
    .route("/api/v1/assigned-tickets/:id([0-9]+)")
    .get(
        [CheckJwt, CheckRole(["dev"])],
        new TicketController().getAssignedTickets
    );

routes
    .route("/api/v1/roles")
    .get(
        [CheckJwt, CheckRole(["admin"])],
        new RoleController().all
    );

routes
    .route("/api/v1/tickets")
    .get(
        [CheckJwt, CheckRole(["admin"])],
        new TicketController().getAll
    )
    .post(
        [CheckJwt, CheckRole(["admin"])],
        new CreateTicketController().handle
    );

routes
    .route("/api/v1/tickets/:id([0-9]+)")
    .get(
        [CheckJwt, CheckRole(["admin"])],
        new TicketController().getOneById
    )
    .put(
        [CheckJwt, CheckRole(["admin"])],
        new UpdateTicketController().handle
    )
    .delete(
        [CheckJwt, CheckRole(["admin"])],
        new DeleteTicketController().handle
    );

routes
    .route("/api/v1/user-roles/:name")
    .get(
        [CheckJwt, CheckRole(["admin"])],
        new UsersController().getUsersByRole
    );

routes
    .route("/api/v1/users")
    .get(
        [CheckJwt, CheckRole(["admin"])],
        new UsersController().getAll
    )
    .post(
        [CheckJwt, CheckRole(["admin"])],
        new CreateUserController().handle
    );

routes
    .route("/api/v1/users/:id([0-9]+)")
    .get(
        [CheckJwt, CheckRole(["admin", "dev"])],
        new UsersController().getOneById
    )
    .put(
        [CheckJwt, CheckRole(["admin"])],
        new UpdateUserController().handle
    );

routes
    .route("/api/v1/users/validate")
    .post(
        [CheckJwt, CheckRole(["admin"])],
        new ValidateUserController().handle
    );

export {routes};
