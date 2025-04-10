import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path    : 'login',
        loadComponent: () => import('./core/pages/login/login.component').then(m => m.LoginComponent)
    },
    {
        path    : 'signup',
        loadComponent: () => import('./core/pages/signup/signup.component').then(m => m.SignupComponent)
    }

];
