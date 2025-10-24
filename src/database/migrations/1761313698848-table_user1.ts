import { MigrationInterface, QueryRunner } from "typeorm";

export class TableUser11761313698848 implements MigrationInterface {
    name = 'TableUser11761313698848'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categoria" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "detalle" character varying NOT NULL, CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "direction" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "direction"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`DROP TABLE "categoria"`);
    }

}
