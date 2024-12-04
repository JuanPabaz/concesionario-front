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
    this.authService.getToken({body: this.authRequest})
    .subscribe(
      {
        next: (response) => {
          this.router.navigate(['/vehiculos']);
        },
        error: (error) => {
          console.log(error);
          this.errorMsg.push("Usuario o contraseña incorrectos");
        }
      }
    );
  }

  register(){
    this.router.navigate(['/registrarse']);
  }
}
