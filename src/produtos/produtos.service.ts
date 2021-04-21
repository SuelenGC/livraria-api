import { Injectable } from "@nestjs/common";
import { Produto } from "./produto.model";

@Injectable()
export class ProdutosService {
  produtos: Produto[] = [
    new Produto("LIV01", "Livro TDD na Prática", 29.9),
    new Produto("LIV02", "Iniciando com Flutter", 34.5),
    new Produto("LIV03", "Começando com NestJS e NodeJS", 30)
  ]

  list(): Produto[] {
    return this.produtos;
  }

  findById(id: number) : Produto {
    return this.produtos[0];
  }

  create(produto: Produto) {
    this.produtos.push(produto);
  }

  update(produto: Produto) : Produto {
    return produto;
  }

  delete(id: number) {
    this.produtos.pop();
  }

}