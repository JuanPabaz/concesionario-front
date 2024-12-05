import { Component } from '@angular/core';
import { AuthRequestDto, Usuario, UsuarioResponseDto } from '../../services/models';
import { AuthenticationControllerService } from '../../services/services';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  errorMsg: Array<string> = [];
  registerRequest: Usuario = {nombreCompleto: '', username: '', password: ''};

  constructor(private authService: AuthenticationControllerService,
    private router: Router
  ) { 
  }

  login() {
    this.router.navigate(['/login']);
  }

  register(){
    this.errorMsg = [];
    this.authService.addNewUser({ body: this.registerRequest })
    .subscribe({
      next: (response) => {
        this.router.navigate(['/login']);
      },error: (error) => {
        console.error(error.error);
        this.errorMsg.push(error.error.message);
      }
    })
  }
}
