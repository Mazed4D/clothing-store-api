import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'example',
  database: 'clothing',
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  synchronize: true,
};
