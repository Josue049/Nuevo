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

 usuarios: { nombre: string; contrasena: string }[] = [
    { nombre: 'alice', contrasena: 'pass123' },
    { nombre: 'bob', contrasena: 'qwerty' },
    { nombre: 'carla', contrasena: 'secret' }
  ];

  nuevoUsuario={
    nombre:'',
    contrasena:'',
  }

  editIndex: number | null=null;

  registrar(){
    // Si alguno de los campos está vacío, no hacemos nada
    if (!this.nuevoUsuario.nombre.trim() || !this.nuevoUsuario.contrasena.trim()) {
      return;
    }

    if (this.editIndex === null) {
      // Nuevo usuario
      this.usuarios.push({ ...this.nuevoUsuario });
    } else {
      // Actualizar usuario existente
      this.usuarios[this.editIndex] = { ...this.nuevoUsuario };
    }

    // Limpiar formulario y estado de edición
    this.nuevoUsuario = { nombre: '', contrasena: '' };
    this.editIndex = null;
  }

  editar(index: number){
    this.nuevoUsuario={...this.usuarios[index]};
    this.editIndex=index;
  }

  eliminar(index: number){
    this.usuarios.splice(index,1);
  }
}