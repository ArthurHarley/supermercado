import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FakeStore } from '../services/fake-store';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil {

  private fakeStore = inject(FakeStore);

  usuario: any;

  constructor() {

    this.fakeStore
      .getUserById(1)
      .subscribe({

        next: (data) => {

          this.usuario = data;

        }

      });

  }

}
