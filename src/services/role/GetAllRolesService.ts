import {getRepository} from 'typeorm';
import {Role} from '@/entities/Role';

export class GetAllRolesService {
    async execute() {
        const repo = getRepository(Role);

        return await repo.find();
    }
}
