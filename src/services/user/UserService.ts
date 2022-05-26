import {getRepository} from 'typeorm';
import {User} from '@/entities/User';

type OneRequest = {
    id: string;
};

type SearchRequest = {
    name: string;
};

export class UserService {
    async getAll() {
        const repo = getRepository(User);

        return await repo.find({
            relations: ["roles"]
        });
    }

    async getAssignedUsers() {
        return await getRepository(User)
            .createQueryBuilder("user")
            .innerJoin("user.roles", "role", "role.name = :name", {name: "dev"})
            .loadRelationCountAndMap("user.countTotalTickets",
                "user.assigned",
                "assigned")
            .loadRelationCountAndMap("user.countTicketsToBeSolved",
                "user.assigned",
                "assigned",
                (qb) => qb.where('assigned.status_id = :status', {status: 1}))
            .loadRelationCountAndMap("user.countSolvedTickets",
                "user.assigned",
                "assigned",
                (qb) => qb.where('assigned.status_id = :status', {status: 2}))
            .loadRelationCountAndMap("user.countRejectedTickets",
                "user.assigned",
                "assigned",
                (qb) => qb.where('assigned.status_id = :status', {status: 3}))
            .loadRelationCountAndMap("user.countCanceledTickets",
                "user.assigned",
                "assigned",
                (qb) => qb.where('assigned.status_id = :status', {status: 4}))
            .getMany();
    }

    async getOneById({id}: OneRequest) {
        const repo = getRepository(User);

        const user = await repo.findOneOrFail(id, {
            relations: ["roles"]
        });

        if (!user) return new Error("User does not exists!!");

        return user;
    }

    async getUsersByRole({name}: SearchRequest) {
        return await getRepository(User)
            .createQueryBuilder("user")
            .innerJoinAndSelect("user.roles", "role", "role.name = :name", {name})
            .getMany();
    }
}
