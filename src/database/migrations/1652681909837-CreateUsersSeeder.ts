import {getRepository, MigrationInterface, QueryRunner} from 'typeorm';
import {User} from '@/entities/User';

export class CreateUsersSeeder1652681909837 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        let users: { password: string; role_id: number; fullName: string; email: string; username: string }[];
        users = [
            {
                "role_id": 1,
                "username": "admin",
                "email": "admin@email.com",
                "fullName": "Antonio Fernández",
                "password": "password"
            },
            {
                "role_id": 2,
                "username": "user1",
                "email": "user1@email.com",
                "fullName": "Manuel López",
                "password": "password"
            },
            {
                "role_id": 2,
                "username": "user2",
                "email": "user2@email.com",
                "fullName": "José Gómez",
                "password": "password"
            },
            {
                "role_id": 2,
                "username": "user3",
                "email": "user3@email.com",
                "fullName": "Luis Pérez",
                "password": "password"
            }
        ];

        await this.insertEntity(users);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        getRepository(User)
            .createQueryBuilder()
            .softDelete();
    }

    public async insertEntity(inserts: Array<any>) {
        for (const insert of inserts) {
            const user: User = new User();

            user.role_id = insert.role_id;
            user.username = insert.username;
            user.email = insert.email;
            user.fullname = insert.fullName;
            user.password = insert.password;
            user.hashPassword();

            const userRepository = getRepository(User);
            await userRepository.save(user);
        }
    }

}
