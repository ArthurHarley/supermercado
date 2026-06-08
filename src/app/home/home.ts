import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { FakeStore } from '../services/fake-store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  private fakeStore = inject(FakeStore);

  private router = inject(Router);

  produtos: any[] = [];

  constructor() {

    this.fakeStore.getProducts().subscribe({
      next: (data: any) => {
        this.produtos = data;
      },
      error: (err) => {
        console.error(err);
      }
    });

  }

  abrirProduto(id: number) {

    this.router.navigate(
      ['/produto', id]
    );

  }

}
