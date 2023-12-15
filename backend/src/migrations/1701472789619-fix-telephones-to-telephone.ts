import { MigrationInterface, QueryRunner } from "typeorm";

export class FixTelephonesToTelephone1701472789619 implements MigrationInterface {
    name = 'FixTelephonesToTelephone1701472789619'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "telephones" TO "telephone"`);
        await queryRunner.query(`ALTER TABLE "clients" RENAME COLUMN "telephones" TO "telephone"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" RENAME COLUMN "telephone" TO "telephones"`);
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "telephone" TO "telephones"`);
    }

}
