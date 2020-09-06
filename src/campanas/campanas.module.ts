import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampanaController } from './campanas.controller';
import { CampanaService } from './campanas.service';
import { Campanas } from './entities/campana.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Campanas])],
  exports: [TypeOrmModule],
  controllers: [CampanaController],
  providers: [CampanaService]
})
export class CampanaModule {}
