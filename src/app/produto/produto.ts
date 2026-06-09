import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

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

  produto: any = null;

  constructor() {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    console.log('ID recebido:', id);

    this.fakeStore.getProductById(id)
      .subscribe({
        next: (data) => {
          console.log('Produto recebido:', data);
          this.produto = data;
        },
        error: (err) => {
          console.error('Erro:', err);
        }
      });

  }

  // constructor() {

  //   const id = Number(
  //     this.route.snapshot.paramMap.get('id')
  //   );

  //   this.fakeStore.getProductById(id)
  //     .subscribe({
  //       next: (data) => {
  //         this.produto = data;
  //       }
  //     });

  // }

}
