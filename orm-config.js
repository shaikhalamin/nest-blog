// eslint-disable-next-line @typescript-eslint/no-var-requires
const { SnakeNamingStrategy } = require('typeorm-naming-strategies');

module.exports = {
  type: 'mysql',
  host: process.env.MYSQL_HOST || 'nest_database_container',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: true,
  keepConnectionAlive: true,
  logging: true,
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
