import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class Comment1693769939641 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'comment',
        columns: [
          {
            name: 'commentId',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            isGenerated: true,
            isNullable: false,
          },
          {
            name: 'comment',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'commentPhoto',
            type: 'longtext',
            isNullable: true,
          },
          {
            name: 'commentState',
            type: 'tinyint',
            default: 1,
            isNullable: false,
          },
          {
            name: 'commentCreatedAt',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'commentUpdatedAt',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'userUserId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'postPostId',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
    );

    await queryRunner.createIndex(
      'comment',
      new TableIndex({
        name: 'IDX_COMMENT_ID',
        columnNames: ['commentId'],
      }),
    );

    const fkCommentUser = new TableForeignKey({
      columnNames: ['userUserId'],
      referencedColumnNames: ['userId'],
      referencedTableName: 'user',
    });

    const fkPostComment = new TableForeignKey({
      columnNames: ['postPostId'],
      referencedColumnNames: ['postId'],
      referencedTableName: 'post',
    });

    await queryRunner.createForeignKeys('comment', [
      fkCommentUser,
      fkPostComment,
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('comment');
  }
}
