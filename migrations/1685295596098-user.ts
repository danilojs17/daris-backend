import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class User1685295596098 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'userId',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true,
            isNullable: false,
          },
          {
            name: 'username',
            type: 'varchar',
            length: '32',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'userPassword',
            type: 'varchar',
            length: '150',
            isNullable: false,
          },
          {
            name: 'userFullname',
            type: 'varchar',
            length: '32',
            isNullable: false,
          },
          {
            name: 'userLastname',
            type: 'varchar',
            length: '32',
            isNullable: false,
          },
          {
            name: 'userEmail',
            type: 'varchar',
            length: '45',
            isNullable: true,
          },
          {
            name: 'userPhone',
            type: 'varchar',
            length: '12',
            isNullable: false,
          },
          {
            name: 'userState',
            type: 'tinyint',
            default: 1,
            isNullable: false,
          },
          {
            name: 'userCreatedAt',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'userUpdatedAt',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );

    await queryRunner.createIndex(
      'user',
      new TableIndex({
        name: 'IDX_USER_ID',
        columnNames: ['userId'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }
}
