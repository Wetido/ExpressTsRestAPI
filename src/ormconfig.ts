import { ConnectionOptions } from 'typeorm';
 
const config: ConnectionOptions = {
  type: 'postgres',
  host: "localhost",
  port: Number("5432"),
  username: "postgres",
  password: "jakub1",
  database: "ts",
  entities: [
    __dirname + '/../**/*.entity{.ts,.js}',
  ],
};
 
export default config;