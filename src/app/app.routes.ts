import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'vehiculos',
        component: VehiculosComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];
