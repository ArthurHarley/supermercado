import {
  Component,
  inject,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import {
  isPlatformBrowser
} from '@angular/common';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { FakeStore } from '../services/fake-store';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  private fakeStore =
    inject(FakeStore);

  private router =
    inject(Router);

  private auth =
    inject(AuthService);

  constructor(
    @Inject(PLATFORM_ID)
    private platformId: Object
  ) {}

  username = '';

  password = '';

  mensagem = '';

  entrar() {

    this.fakeStore
      .login(
        this.username,
        this.password
      )
      .subscribe({

        next: (res: any) => {

          this.auth.salvarToken(
            res.token
          );

          this.fakeStore
            .getUserById(1)
            .subscribe({

              next: (usuario: any) => {

                this.auth
                  .salvarUsuario(
                    usuario
                  );

                this.router.navigate(
                  ['/perfil']
                );

              },

              error: () => {

                this.mensagem =
                  'Erro ao carregar dados do usuário';

              }

            });

        },

        error: () => {

          this.mensagem =
            'Usuário ou senha inválidos';

        }

      });

  }

}
