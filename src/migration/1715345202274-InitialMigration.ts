import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1715345202274 implements MigrationInterface {
    name = 'InitialMigration1715345202274'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "age" TO "date_of_birth"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "date_of_birth"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "date_of_birth" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "date_of_birth"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "date_of_birth" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "date_of_birth" TO "age"`);
    }

}
