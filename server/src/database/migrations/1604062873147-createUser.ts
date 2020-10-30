import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUser1604062873147 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "clientUser",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "cpf",
            type: "int",
          },
          {
            name: "dataNascimento",
            type: "date",
          },
          {
            name: "endereco",
            type: "varchar",
          },
          {
            name: "cep",
            type: "int",
          },
          {
            name: "cidade",
            type: "varchar",
          },
          {
            name: "estado",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user");
  }
}
