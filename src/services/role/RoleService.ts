import {getRepository} from 'typeorm';
import {Role} from '@/entities/Role';

export class RoleService {
    async getAll() {
        const repo = getRepository(Role);

        return await repo.find();
    }
}
