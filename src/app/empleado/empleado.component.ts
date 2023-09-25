import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent {
  nombre = 'Juan';
  apellido = 'Pérez';
  private edad = 18; // Se pueden encapsular los datos
  //empresa = 'Píldoras Informáticas';
  getEdad() {
    return this.edad; //Mostrar datos a través de getter
  }
}
