import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTickets1652637203774 implements MigrationInterface {

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
                        type: "bigint"
                    },
                    {
                        name: "assigned_user_id",
                        type: "bigint",
                        isNullable: true
                    },
                    {
                        name: "status_id",
                        type: "bigint"
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "description",
                        type: "text",
                        isNullable: true
                    },
                    {
                        name: "assignment_date",
                        type: "datetime",
                        isNullable: true
                    },
                    {
                        name: "resolution_date",
                        type: "datetime",
                        isNullable: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP"
                    },
                ],
                foreignKeys: [
                    {
                        name: "tickets_creator_user_id_foreign",
                        columnNames: ["creator_user_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "tickets_assigned_user_id_foreign",
                        columnNames: ["assigned_user_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "tickets_status_id_foreign",
                        columnNames: ["status_id"],
                        referencedTableName: "status",
                        referencedColumnNames: ["id"]
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tickets");
    }

}
