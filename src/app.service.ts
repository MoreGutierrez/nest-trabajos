import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  //GEt (obtener todos los tracks)
  async getTracks(){
    let respuesta = await fetch('http://localhost:3030/tracks');
    let datos = await respuesta.json();
    return datos;
  }


  //GET by ID (obtener track por ID)
  async getTrackById(id: string){
    let respuesta = await fetch('http://localhost:3030/tracks/' + id);
    let datos = await respuesta.json();
    return datos;
  }


  //PUT (actualicé el track 1 completo)
  async updateTrack(id: string, body: any){
    let respuesta = await fetch('http://localhost:3030/tracks/' + id, 
    {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    });
    let datos = await respuesta.json();
    return datos;
  }

  //EDIT (actualizar un track existente|modifiqué el título del track 5)
  async editTrack(id: string, body: any){
    let respuesta = await fetch('http://localhost:3030/tracks/' + id, 
    {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    });
    let datos = await respuesta.json();
    return datos;
  }


  //DELETE (eliminar un track existente|eliminé el track de ID 1)
  async deleteTrack(id: string){
    let respuesta = await fetch('http://localhost:3030/tracks/' + id, 
    {
      method: 'DELETE',
    });
    let datos = await respuesta.json();
    return datos;
  }
}
