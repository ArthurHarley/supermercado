import {
  Component,
  inject,
  OnInit
} from '@angular/core';

import {
  RouterModule
} from '@angular/router';

import {
  CommonModule
} from '@angular/common';

import { FakeStore } from '../services/fake-store';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil implements OnInit {

  private fakeStore =
    inject(FakeStore);

  usuario: any = null;

  ngOnInit() {

    console.log('PERFIL ONINIT');

    this.fakeStore
      .getUserById(1)
      .subscribe({

        next: (data) => {

          console.log(
            'USUARIO RECEBIDO',
            data
          );

          this.usuario = data;

        },

        error: (err) => {

          console.error(
            'ERRO PERFIL',
            err
          );

        }

      });

  }

}
