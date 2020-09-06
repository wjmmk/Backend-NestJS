import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration'
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ConfigModule.forRoot({
            load: [configuration]
  }),
            MongooseModule.forRoot(process.env.CONEXION,
            { useNewUrlParser: true, useFindAndModify: false }), 
            ProductModule,
            ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
