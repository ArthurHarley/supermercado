import {
  Component,
  Inject,
  PLATFORM_ID,
  signal
} from '@angular/core';

import {
  isPlatformBrowser
} from '@angular/common';

import {
  RouterOutlet,
  RouterModule
} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('supermercado');

  usuario: any = null;

  constructor(
    @Inject(PLATFORM_ID)
    private platformId: Object
  ) {

    if (isPlatformBrowser(this.platformId)) {

      const dados =
        localStorage.getItem('usuario');

      if (dados) {

        this.usuario =
          JSON.parse(dados);

      }

    }

  }

  sair() {

    if (isPlatformBrowser(this.platformId)) {

      localStorage.removeItem('token');

      localStorage.removeItem('usuario');

      window.location.reload();

    }

  }

}
