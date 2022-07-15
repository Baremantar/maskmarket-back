import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
    type: 'postgres',
    host: '',
    port: 5432,
    username: '',
    password: '',
    database: '',

    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrations: [__dirname + '/database/migrations/**/*{.ts,.js}'],
}

export default config;