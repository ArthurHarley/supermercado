import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Produto } from './produto/produto';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'produto/:id', component: Produto }
];
