import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('practica');
  usuarios:{nombre: string, contrasena: string}[]=[];

  nuevoUsuario={
    nombre:'',
    contrasena:'',
  }

  registrar(){
    if(this.nuevoUsuario.nombre.trim() && this.nuevoUsuario.contrasena.trim()){
      this.usuarios.push({...this.nuevoUsuario});
      this.nuevoUsuario={nombre:'', contrasena:''};
    }
  }
}
