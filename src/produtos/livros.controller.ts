import { LivrosService } from './livros.service';
import { Livro } from './livro.model';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"


@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  list(): Livro[] {
    return this.livrosService.list();
  }

  @Get(':id')
  findById(@Param() params) {
    return this.livrosService.findById(0);
  }

  @Post()
  create(@Body() livro: Livro) {
    this.livrosService.create(livro);
    return livro;
  }

  @Put(':id')
  update(@Param() params, @Body() livro: Livro) : Livro {
    this.livrosService.update(livro);
    return livro;
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.livrosService.delete(params.id);
  }

}