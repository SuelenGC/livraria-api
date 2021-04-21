import { ProdutosService } from './produtos.service';
import { Produto } from './produto.model';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"


@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}

  @Get()
  list(): Produto[] {
    return this.produtosService.list();
  }

  @Get(':id')
  findById(@Param() params) {
    return this.produtosService.findById(0);
  }

  @Post()
  create(@Body() produto: Produto) {
    this.produtosService.create(produto);
    return produto;
  }

  @Put(':id')
  update(@Param() params, @Body() produto: Produto) : Produto {
    this.produtosService.update(produto);
    return produto;
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.produtosService.delete(params.id);
  }

}