import { MigrationInterface, QueryRunner } from "typeorm";

export class FixCreateAtContacts1700856592894 implements MigrationInterface {
    name = 'FixCreateAtContacts1700856592894'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "createdAt" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "createdAt" DROP DEFAULT`);
    }

}
