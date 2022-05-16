import { Router } from "express";
import { CreateTicketController } from "../controllers/CreateTicketController";
import { DeleteTicketController } from "../controllers/DeleteTicketController";
import { GetAllTicketsController } from "../controllers/GetAllTicketsController";
import { GetOneTicketController } from "../controllers/GetOneTicketController";
import { UpdateTicketController } from "../controllers/UpdateTicketController";

const routes = Router();

routes
    .route("/tickets")
    .get(new GetAllTicketsController().handle)
    .post(new CreateTicketController().handle);

routes
    .route("/tickets/:id")
    .get(new GetOneTicketController().handle)
    .put(new UpdateTicketController().handle)
    .delete(new DeleteTicketController().handle);

export { routes };
