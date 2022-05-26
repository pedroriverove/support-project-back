import {getRepository, MigrationInterface, QueryRunner} from 'typeorm';
import {Role} from '@/entities/Role';

export class CreateRolesSeeder1652680067128 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        let roles: { name: string; description: string }[];
        roles = [
            {
                "name": "admin",
                "description": "Administrador"
            },
            {
                "name": "dev",
                "description": "Desarrollador"
            }
        ];

        await this.insertEntity(roles);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        getRepository(Role)
            .createQueryBuilder()
            .softDelete();
    }

    public async insertEntity(inserts: Array<any>) {
        for (const insert of inserts) {
            let role: Role = new Role();

            role.name = insert.name;
            role.description = insert.description;

            await getRepository(Role)
                .save(role);
        }
    }

}
