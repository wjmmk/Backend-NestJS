import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './config/configuration'
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ProductModule } from './product/product.module';
import { CampanaController } from './campanas/campanas.controller';
import { CampanaService } from './campanas/campanas.service';
import { CampanaModule } from './campanas/campanas.module';

@Module({
  imports: [ConfigModule.forRoot({
            load: [configuration]
           }),

            MongooseModule.forRoot(process.env.CONEXION,
            { useNewUrlParser: true, useFindAndModify: false }), 

            ProductModule,

            TypeOrmModule.forRoot({
              type: 'mysql',
              host: process.env.HOST,
              port: 3306,
              username: process.env.USER_NAME,
              password: process.env.PASSWORD,
              database: process.env.DATABASE,
              synchronize: false,
              entities: ['dist/**/*.entity{.ts,.js}'],
              migrations: ['project2/migrations/*.ts'],
              cli: { migrationsDir: 'project2/migrations' },
            }),

            CampanaModule
            ],
  controllers: [AppController, CampanaController],
  providers: [AppService, CampanaService],
})
export class AppModule {}
