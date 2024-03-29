import { DataSourceOptions } from "typeorm";

const config: DataSourceOptions = {
    type: 'postgres',
    host: process.env['DB_HOST'],
    port: +process.env['DB_PORT'],
    username: process.env['DB_USERNAME'],
    password: process.env['DB_PASSWORD'],
    database: process.env['DB_NAME'],

    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: [__dirname + 'database/migrations/**/*{.ts,.js}'],

    synchronize: false,
}

export default config;