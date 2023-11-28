// configuracion-twitter.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-configuracion-twitter',
  templateUrl: './configuracion-twitter.component.html',
  styleUrls: ['./configuracion-twitter.component.css'],
})
export class ConfiguracionTwitterComponent implements OnInit {
  configForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.configForm = this.fb.group({
      username: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  guardarConfiguracion() {
    if (this.configForm.valid) {
      const username = this.configForm.get('username').value;

      // Aquí puedes realizar acciones adicionales, como guardar el nombre de usuario en tu servicio.
      // Por ejemplo:
      // this.miServicio.guardarNombreDeUsuario(username);

      console.log('Nombre de usuario guardado:', username);
    } else {
      // Realiza acciones adicionales si el formulario no es válido.
      console.log('El formulario no es válido. Por favor, complete correctamente.');
    }
  }
}

