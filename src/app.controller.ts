import { Controller, Get, Param, Put, Body, Patch, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('AYACUCHO')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  } 

  //GEt (obtener todos los tracks)
  @Get('tracks')
  getTracks(){
    return this.appService.getTracks();
  }


  //GET by ID (obtener track por ID)
  @Get('tracks/:id')
  getTrackById(@Param('id') id: string){
    return this.appService.getTrackById(id); 
  }


  //PUT (actualicé el track 1 completo)
  @Put('tracks/:id')
  updateTrack(@Param('id') id: string, @Body() body: any){
    return this.appService.updateTrack(id, body);
  }
  
  //EDIT (actualizar un track existente|modifiqué el título del track 5)
  @Patch('tracks/:id')
  editTrack(@Param('id') id: string, @Body() body: any){
    return this.appService.editTrack(id, body);
  }

  //DELETE (eliminar un track existente|eliminé el track de ID 1)
  @Delete('tracks/:id')
  deleteTrack(@Param('id') id: string){
    return this.appService.deleteTrack(id); 
  }
}