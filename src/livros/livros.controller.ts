import { LivrosService } from './livros.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import { Livro } from './livro.entity';


@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  findAll() : Promise<Livro[]> {
    return this.livrosService.findAll();
  }

  @Get(':id')
  findById(@Param() params) : Promise<Livro> {
    return this.livrosService.findById(params.id);
  }

  @Post()
  create(@Body() livro: Livro) : Promise<Livro> {
    return this.livrosService.create(livro);
  }

  @Put(':id')
  update(@Param() params, @Body() livro: Livro) : Promise<Livro> {
    return this.livrosService.update(params.id, livro);
  }

  @Delete(':id')
  delete(@Param() params) : Promise<void> {
    return this.livrosService.remove(params.id);
  }
}