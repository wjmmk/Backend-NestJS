import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ProductModule } from './product/product.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/test', { useNewUrlParser: true, useFindAndModify: false}), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
