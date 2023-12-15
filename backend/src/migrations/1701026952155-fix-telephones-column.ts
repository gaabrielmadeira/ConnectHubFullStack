import { MigrationInterface, QueryRunner } from "typeorm";

export class FixTelephonesColumn1701026952155 implements MigrationInterface {
    name = 'FixTelephonesColumn1701026952155'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "telephone" TO "telephones"`);
        await queryRunner.query(`ALTER TABLE "clients" RENAME COLUMN "telephone" TO "telephones"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "telephones"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "telephones" character varying(15) array`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "telephones"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "telephones" character varying(15) array`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "telephones"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "telephones" character varying(15) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "telephones"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "telephones" character varying(15) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" RENAME COLUMN "telephones" TO "telephone"`);
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "telephones" TO "telephone"`);
    }

}
