import {
    MigrationInterface,
    QueryRunner,
    Table
} from 'typeorm';

export class CreateTickets1652637197992 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tickets",
                columns: [
                    {
                        name: "id",
                        type: "bigint",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: "creator_user_id",
                        type: "int"
                    },
                    {
                        name: "assigned_user_id",
                        type: "int"
                    },
                    {
                        name: "status_id",
                        type: "int"
                    },
                    {
                        name: "assignment_date",
                        type: "datetime"
                    },
                    {
                        name: "resolution_date",
                        type: "datetime"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP"
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tickets");
    }

}
