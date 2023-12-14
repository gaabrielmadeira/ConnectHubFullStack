import { MigrationInterface, QueryRunner } from "typeorm";

export class FixCreatedAtContact1700959404487 implements MigrationInterface {
    name = 'FixCreatedAtContact1700959404487'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "createdAt" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "createdAt" DROP DEFAULT`);
    }

}
