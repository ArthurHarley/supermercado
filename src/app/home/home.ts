import {
  Component,
  inject,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import {
  Router,
  RouterModule
} from '@angular/router';

import { FakeStore } from '../services/fake-store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  private fakeStore = inject(FakeStore);

  private router = inject(Router);

  private cdr = inject(ChangeDetectorRef);

  produtos: any[] = [];

  ngOnInit() {

    console.log('HOME ONINIT');

    this.carregarProdutos();

  }

  carregarProdutos() {

    this.fakeStore.getProducts().subscribe({

      next: (data: any) => {

        console.log(
          'PRODUTOS RECEBIDOS',
          data.length
        );

        this.produtos = data;

        this.cdr.detectChanges();

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
