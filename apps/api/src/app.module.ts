import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-ap-southeast-1.pooler.supabase.com',
      port: 6543,
      username: 'postgres.kyumxncevvtmrihtcuws',
      password: 'ifuhaveAny?askme317',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
