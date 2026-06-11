import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Produto } from './produto/produto';
import { Login } from './login/login';
import { Perfil } from './perfil/perfil';
import { Carrinho } from './carrinho/carrinho';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'produto/:id', component: Produto },
    { path: 'login', component: Login },
    { path: 'perfil', component: Perfil },
    { path: 'carrinho', component: Carrinho }
];
