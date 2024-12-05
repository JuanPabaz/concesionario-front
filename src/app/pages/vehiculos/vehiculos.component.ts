import { Component } from '@angular/core';
import { VehiculoDto } from '../../services/models';
import { VehiculoControllerService } from '../../services/services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehiculos',
  imports: [CommonModule],
  templateUrl: './vehiculos.component.html',
  styleUrl: './vehiculos.component.css'
})
export class VehiculosComponent {
  errorMsg: Array<string> = [];
  vehiculosList: VehiculoDto[] = [];

  constructor(private vehiculoService: VehiculoControllerService) { 
  }

  ngOnInit() {
    this.listarVehiculos();
  }

  listarVehiculos(){
    this.errorMsg = [];
    this.vehiculoService.listarVehiculos()
      .subscribe({
        next: (response) => {
          this.vehiculosList = response;
        },
        error: (errorResponse) => {
          console.error(errorResponse.error);
          this.errorMsg.push(errorResponse.error.message);
        }
      });
  }
}
