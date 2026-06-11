import {
  Component,
  signal,
  inject,
  OnInit
} from '@angular/core';

import {
  RouterOutlet,
  RouterModule
} from '@angular/router';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  protected readonly title =
    signal('supermercado');

  private auth =
    inject(AuthService);

  usuario: any = null;

  ngOnInit() {

    console.log('APP ONINIT');

    this.usuario =
      this.auth.getUsuario();

  }

  sair() {

    this.auth.logout();

    window.location.reload();

  }

}