import { Component } from '@angular/core';
import { AuthRequestDto } from '../../services/models'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationControllerService } from '../../services/services';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../services/token/token.service';

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
    private authService: AuthenticationControllerService,
    private tokenService: TokenService) { 
  
  }

  login() {
    this.errorMsg = [];
    this.authService.getToken({ body: this.authRequest })
      .subscribe({
        next: (response) => {
          debugger
          this.tokenService.token = response.accessToken as string;
          this.router.navigate(['/vehiculos']);
        },
        error: (errorResponse) => {
          debugger
          console.error(errorResponse.error);
          this.errorMsg.push(errorResponse.error.message);
        }
      });
  }

  register(){
    this.router.navigate(['/registrarse']);
  }
}
