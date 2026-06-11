import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private itens: any[] = [];

  adicionar(produto: any) {

    this.itens.push(produto);

  }

  listar() {

    return this.itens;

  }

  remover(id: number) {

    this.itens = this.itens.filter(
      item => item.id !== id
    );

  }

  limpar() {

    this.itens = [];

  }

}