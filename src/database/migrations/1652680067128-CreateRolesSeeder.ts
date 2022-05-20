import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { Role } from '@/entities/Role';

export class CreateRolesSeeder1652680067128 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        let roles: string[];
        roles = [
            "admin",
            "dev"
        ];

        await this.insertEntity(roles);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

    public async insertEntity(inserts: Array<string>) {
        for (const insert of inserts) {
            let role: Role = new Role();

            role.name = insert

            const userRepository = getRepository(Role);
            await userRepository.save(role);
        }
    }

}
