import {getRepository, MigrationInterface, QueryRunner} from 'typeorm';
import {Status} from '@/entities/Status';

export class CreateStatusSeeder1652682058352 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        let status: string[];
        status = [
            "Por resolver",
            "Resuelto",
            "Rechazado",
            "Anulado"
        ];

        await this.insertEntity(status);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        getRepository(Status)
            .createQueryBuilder()
            .softDelete();
    }

    public async insertEntity(inserts: Array<string>) {
        for (const insert of inserts) {
            const status: Status = new Status();

            status.name = insert;

            const userRepository = getRepository(Status);
            await userRepository.save(status);
        }
    }
}
