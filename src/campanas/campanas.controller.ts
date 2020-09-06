import { Controller, Post, Body, Res, HttpStatus, Param, Get, Delete, Put } from '@nestjs/common';
import { CreateCampanaDTO } from './dto/campana.dto';
import { CampanaService } from './campanas.service';


@Controller('campanas')
export class CampanaController {

    constructor(private campanaService: CampanaService) {}

    @Post()
    create(@Body() createUserDto: CreateCampanaDTO, @Res() response) {
        this.campanaService.createUser(createUserDto).then(
            usuario => {
                response.status(HttpStatus.CREATED).json(usuario);
            }).catch( () => {
                response.status(HttpStatus.FORBIDDEN).json( {usuario: 'Error al momento de crear un Usuario !!!'});
            });
    }

    @Get(':id')
    getUser(@Res() response, @Param('id') idUsuario) {
        this.campanaService.getUser(idUsuario).then( 
            usuario => {
                response.status(HttpStatus.OK).json(usuario);
            }).catch( () => {
                response.status(HttpStatus.FORBIDDEN).json( {usuario: 'Error al momento de obtener el usuario !!!'});
            })
    }

    @Get()
    getAll(@Res() response) {
        this.campanaService.getAll().then( 
            usuarioList => {
                response.status(HttpStatus.OK).json(usuarioList);
            }).catch( () => {
                response.status(HttpStatus.FORBIDDEN).json( {usuario: 'Error al momento de obtener todos los usuarios !!!'});
            })
    }

    @Put(':id')
    update(@Body() updateMensajeDto: CreateCampanaDTO, @Res() response, @Param('id') idUsuario) {
        this.campanaService.updateUser(idUsuario, updateMensajeDto).then( usuario => {
            response.status(HttpStatus.OK).json(usuario);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json( {usuario: 'Error al momento de actualizar el Usuario !!!'});
        })
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') idUsuario) {
        this.campanaService.deleteUser(idUsuario).then( resp => {
            response.status(HttpStatus.OK).json(resp);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json( {usuario: 'Error al momento de eliminar el Usuario !!!'});
        })
    }
}
