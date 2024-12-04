import { Component } from '@angular/core';
import { AuthRequestDto } from '../../services/models'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationControllerService } from '../../services/services';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authRequest: AuthRequestDto = {username: '', password: ''};
  errorMsg: Array<string> = [];

  constructor(private router:Router, 
    private authService: AuthenticationControllerService) { 
  
  }

  login() {
    this.errorMsg = [];
    this.authService.getToken({ body: this.authRequest })
      .subscribe({
        next: (response) => {
          this.router.navigate(['/vehiculos']);
        },
        error: (errorResponse) => {
          this.handleErrorResponse(errorResponse);
        }
      });
  }

  handleErrorResponse(errorResponse: any) {
    if (errorResponse.error instanceof Blob) {
      // Si el error es un Blob, lo convertimos
      this.convertBlobToMessage(errorResponse.error);
    } else if (errorResponse.error && errorResponse.error.message) {
      // Si el error tiene un mensaje, lo mostramos directamente
      this.errorMsg.push(errorResponse.error.message);
    } else {
      // En otros casos, mostramos un mensaje genérico
      this.errorMsg.push(`Error ${errorResponse.status}: ${errorResponse.statusText || 'Desconocido'}`);
    }
  }

  // Función para convertir un Blob en un mensaje y agregarlo a errorMsg
  convertBlobToMessage(blob: Blob) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const errorMessage = JSON.parse(reader.result as string); // Convierte el blob a JSON
        this.errorMsg.push(errorMessage.message); // Muestra el mensaje de error
      } catch (e) {
        this.errorMsg.push("Error al procesar el mensaje de error.");
      }
    };

    // Lee el Blob como texto
    reader.readAsText(blob);
  }

  register(){
    this.router.navigate(['/registrarse']);
  }
}
