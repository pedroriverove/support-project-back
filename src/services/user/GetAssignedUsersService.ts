import { getRepository } from 'typeorm';
import { User } from '@/entities/User';

export class GetAssignedUsersService {
    async execute() {
        return await getRepository(User)
            .createQueryBuilder("user")
            .innerJoin("user.roles", "role", "role.name = :name", { name: "dev" })
            .loadRelationCountAndMap("user.countTotalTickets",
                "user.assigned",
                "assigned")
            .loadRelationCountAndMap("user.countTicketsToBeSolved",
                "user.assigned",
                "assigned",
                (qb) => qb.where('assigned.status_id = :status', { status: 1 }))
            .loadRelationCountAndMap("user.countSolvedTickets",
                "user.assigned",
                "assigned",
                (qb) => qb.where('assigned.status_id = :status', { status: 2 }))
            .loadRelationCountAndMap("user.countRejectedTickets",
                "user.assigned",
                "assigned",
                (qb) => qb.where('assigned.status_id = :status', { status: 3 }))
            .loadRelationCountAndMap("user.countCanceledTickets",
                "user.assigned",
                "assigned",
                (qb) => qb.where('assigned.status_id = :status', { status: 4 }))
            .getMany();
    }
}
