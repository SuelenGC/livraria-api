import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"

@Controller('produtos')
export class ProdutosController {

  @Get()
  list(): string {
    return 'Lista todos os produtos';
  }

  @Get(':id')
  find(@Param() params) {
    return `Retorna os dados do produto ${params.id}`;
  }

  @Post()
  create(@Body() produto) {
    console.log(produto);
    return 'Produto criado';
  }

  @Put(':id')
  update(@Param() params, @Body() produto) {
    return `Produto atualizado ${params.id}`;
  }

  @Delete(':id')
  delete(@Param() params) {
    return `Produto apagado ${params.id}`;
  }

}