import { MigrationInterface, QueryRunner } from "typeorm";

export class FixCreatedAt1700594859632 implements MigrationInterface {
    name = 'FixCreatedAt1700594859632'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "createdAt" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "createdAt" DROP DEFAULT`);
    }

}
