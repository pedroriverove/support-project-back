import {getRepository} from 'typeorm';
import {User} from '@/entities/User';

type AssignedUsersRequest = {
    id: string;
};

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

    async getAssignedUsers({id}: AssignedUsersRequest) {
        return await getRepository(User)
            .createQueryBuilder("user")
            .innerJoinAndSelect(
                "user.roles",
                "role",
                "role.name = :name",
                {name: "dev"})
            .leftJoinAndSelect(
                "user.creator",
                "creator",
                "creator.creator_user_id = :id",
                {id})
            .loadRelationCountAndMap("user.countTotalTickets",
                "user.assigned",
                "assigned",
                (qb) => qb.andWhere('assigned.creator_user_id = :id', {id}))
            .loadRelationCountAndMap("user.countTicketsToBeSolved",
                "user.assigned",
                "assigned",
                (qb) => qb.andWhere('assigned.status_id = :status', {status: 1}) && qb.andWhere('assigned.creator_user_id = :id', {id}))
            .loadRelationCountAndMap("user.countSolvedTickets",
                "user.assigned",
                "assigned",
                (qb) => qb.andWhere('assigned.status_id = :status', {status: 2}) && qb.andWhere('assigned.creator_user_id = :id', {id}))
            .loadRelationCountAndMap("user.countRejectedTickets",
                "user.assigned",
                "assigned",
                (qb) => qb.andWhere('assigned.status_id = :status', {status: 3}) && qb.andWhere('assigned.creator_user_id = :id', {id}))
            .loadRelationCountAndMap("user.countCanceledTickets",
                "user.assigned",
                "assigned",
                (qb) => qb.andWhere('assigned.status_id = :status', {status: 4}) && qb.andWhere('assigned.creator_user_id = :id', {id}))
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
