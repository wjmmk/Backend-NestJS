import { Injectable } from '@nestjs/common';
import { Campanas } from './entities/campana.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCampanaDTO } from './dto/campana.dto';


@Injectable()
export class CampanaService {

    constructor(
        @InjectRepository(Campanas)
        private userRepository: Repository<Campanas>
      ) {}

      async getAll(): Promise<Campanas[]> {
          return await this.userRepository.find();
      }

      async getUser(id: number): Promise<Campanas> {
        return await this.userRepository.findOne(id);
      }

      async createUser(campanaNew: CreateCampanaDTO): Promise<Campanas> {
          const newCampana = new Campanas();
          newCampana.names = campanaNew.names;
          newCampana.surnames = campanaNew.surnames;
          newCampana.phones = campanaNew.phones;
          newCampana.addresses = campanaNew.addresses;
          newCampana.crate_at = campanaNew.crate_at;
          
          return this.userRepository.save(newCampana);
      }

      async updateUser(idCampana: number, campanaActualizar: CreateCampanaDTO): Promise<Campanas> {
          const campanaUpdate = await this.userRepository.findOne(idCampana);
          campanaUpdate.names = campanaActualizar.names;
          campanaUpdate.surnames = campanaActualizar.surnames;
          campanaUpdate.phones = campanaActualizar.phones;
          campanaUpdate.addresses = campanaActualizar.addresses;
          campanaUpdate.crate_at = campanaActualizar.crate_at;

          return await this.userRepository.save(campanaUpdate);
      }

      async deleteUser(idMensaje: number): Promise<any> {
          return await this.userRepository.delete(idMensaje);
      }
}
