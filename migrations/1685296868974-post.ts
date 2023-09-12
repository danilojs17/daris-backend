import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class Post1685296868974 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'post',
        columns: [
          {
            name: 'postId',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            isGenerated: true,
            isNullable: false,
          },
          {
            name: 'postDescription',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'postPhoto',
            type: 'longtext',
            isNullable: true,
          },
          {
            name: 'postState',
            type: 'tinyint',
            default: 1,
            isNullable: false,
          },
          {
            name: 'postCreatedAt',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'postUpdatedAt',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'userUserId',
            type: 'int',
            isNullable: false,
          },
        ],
      }),
    );

    await queryRunner.createIndex(
      'post',
      new TableIndex({
        name: 'IDX_POST_ID',
        columnNames: ['postId'],
      }),
    );

    const fkPostUser = new TableForeignKey({
      columnNames: ['userUserId'],
      referencedColumnNames: ['userId'],
      referencedTableName: 'user',
    });

    await queryRunner.createForeignKey('post', fkPostUser);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('post');
  }
}
