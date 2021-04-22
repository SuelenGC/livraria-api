import { Injectable } from "@nestjs/common";
import { Livro } from "./livro.model";

@Injectable()
export class LivrosService {
  livros: Livro[] = [
    new Livro("LIV01", "Livro TDD na Prática", 29.9),
    new Livro("LIV02", "Iniciando com Flutter", 34.5),
    new Livro("LIV03", "Começando com NestJS e NodeJS", 30)
  ]

  list(): Livro[] {
    return this.livros;
  }

  findById(id: number) : Livro {
    return this.livros[0];
  }

  create(livro: Livro) {
    this.livros.push(livro);
  }

  update(livro: Livro) : Livro {
    return livro;
  }

  delete(id: number) {
    this.livros.pop();
  }

}