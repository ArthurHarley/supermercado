import {
  Injectable,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import {
  isPlatformBrowser
} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    @Inject(PLATFORM_ID)
    private platformId: Object
  ) {}

  getUsuario() {

    if (
      isPlatformBrowser(this.platformId)
    ) {

      const dados =
        localStorage.getItem('usuario');

      if (dados) {

        return JSON.parse(dados);

      }

    }

    return null;

  }

  salvarUsuario(
    usuario: any
  ) {

    if (
      isPlatformBrowser(this.platformId)
    ) {

      localStorage.setItem(
        'usuario',
        JSON.stringify(usuario)
      );

    }

  }

  salvarToken(
    token: string
  ) {

    if (
      isPlatformBrowser(this.platformId)
    ) {

      localStorage.setItem(
        'token',
        token
      );

    }

  }

  logout() {

    if (
      isPlatformBrowser(this.platformId)
    ) {

      localStorage.removeItem(
        'usuario'
      );

      localStorage.removeItem(
        'token'
      );

    }

  }

}
