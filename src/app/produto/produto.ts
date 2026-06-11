import {
  Component,
  inject,
  ChangeDetectorRef
} from '@angular/core';

import {
  ActivatedRoute,
  RouterModule
} from '@angular/router';

import { FakeStore } from '../services/fake-store';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './produto.html',
  styleUrl: './produto.css'
})
export class Produto {

  private route = inject(ActivatedRoute);

  private fakeStore = inject(FakeStore);

  private cdr = inject(ChangeDetectorRef);

  produto: any = null;

  constructor() {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.fakeStore
      .getProductById(id)
      .subscribe({

        next: (data) => {

          console.log(
            'Produto recebido:',
            data
          );

          this.produto = data;

          this.cdr.detectChanges();

        },

        error: (err) => {

          console.error(err);

        }

      });

  }

  adicionarAoCarrinho() {

    if (!this.produto) {
      return;
    }

    const carrinho =
      JSON.parse(
        localStorage.getItem('carrinho') || '[]'
      );

    carrinho.push(this.produto);

    localStorage.setItem(
      'carrinho',
      JSON.stringify(carrinho)
    );

    alert('Produto adicionado ao carrinho!');

  }

}
