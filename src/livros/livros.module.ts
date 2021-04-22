import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LivrosService } from './livros.service';
import { LivrosController } from './livros.controller';
import { Livro } from './livro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Livro])],
  providers: [LivrosService],
  controllers: [LivrosController],
})
export class LivrosModule { }