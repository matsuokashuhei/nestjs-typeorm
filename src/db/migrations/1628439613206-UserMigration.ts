import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1628439613206 implements MigrationInterface {
    name = 'UserMigration1628439613206'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`nestjs_development\`.\`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`nestjs_development\`.\`user\``);
    }

}
