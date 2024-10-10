// // export default () => ({
// //   type: process.env.TYPE,
// //   host: process.env.HOST,
// //   port: parseInt(process.env.PORT),
// //   username: process.env.USERNAME,
// //   password: process.env.PASSWORD,
// //   database: process.env.DATABASE,
// //   autoLoadEntities: process.env.AUTO_LOAD_ENTITIES === 'true',
// //   synchronize: process.env.SYNCHRONIZE === 'true',
// // });

// import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import * as dotenv from 'dotenv';

// dotenv.config();

// export const typeOrmConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   url: process.env.URL,
//   autoLoadEntities: true,
//   synchronize: process.env.SYNCHRONIZE === 'true',
// };
