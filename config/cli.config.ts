import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { getEnvPath } from '../common/helper/env.helper';

const envFilePath: string = getEnvPath(`${__dirname}/../common/envs`);
dotenv.config({ path: envFilePath });

const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  port: +process.env.DATABASE_PORT,
  charset: 'utf8',
});

export default dataSource;
