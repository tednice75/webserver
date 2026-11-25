import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MembershipModule } from './membership/membership.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT) : 3306,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: 'huacsj',
    autoLoadEntities: true,
    synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
  }), MembershipModule],
  controllers: [AppController],
  providers: [AppService],
})



export class AppModule {
  constructor(private dataSource: DataSource) {
    console.log('AppModule constructor ', dataSource);
  }



}
