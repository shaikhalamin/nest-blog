// eslint-disable-next-line @typescript-eslint/no-var-requires
const { SnakeNamingStrategy } = require('typeorm-naming-strategies');

module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'xxx423401',
  database: 'nest_test',
  synchronize: true,
  keepConnectionAlive: true,
  logging: false,
  entities: [`${__dirname}/**/entities/*.{ts,js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
  subscribers: [`${__dirname}/**/subscribers/*.{ts,js}`],
  cli: {
    entitiesDir: `${__dirname}/**/entities/*.{ts,js}`,
    migrationsDir: `${__dirname}/**/migrations/*.{ts,js}`,
    subscribersDir: `${__dirname}/**/subscribers/*.{ts,js}`,
  },
  namingStrategy: new SnakeNamingStrategy(),
};
