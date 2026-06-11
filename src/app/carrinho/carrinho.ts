import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css'
})
export class Carrinho {

  private carrinhoService =
    inject(CarrinhoService);

  produtos =
    this.carrinhoService.listar();

  remover(id: number) {

    this.carrinhoService.remover(id);

    this.produtos =
      this.carrinhoService.listar();

  }

}
