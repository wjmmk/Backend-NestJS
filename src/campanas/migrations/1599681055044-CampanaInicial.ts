import {MigrationInterface, QueryRunner} from "typeorm";

export class CampanaInicial1599681055044 implements MigrationInterface {
    name = 'CampanaInicial1599681055044'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `campanas` (`id` varchar(36) NOT NULL, `names` text NOT NULL, `surnames` text NOT NULL, `phones` decimal NOT NULL, `addresses` text NOT NULL, `create_at` date NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `campanas`");
    }

}
