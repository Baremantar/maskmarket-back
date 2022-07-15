import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: '',
        password: '',
        database: '',

        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/database/migrations/**/*{.ts,.js}'],

        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];