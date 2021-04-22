import { Livro } from './livro.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'

@Injectable()
export class LivrosService {

  constructor(
    @InjectRepository(Livro)
    private livrosRepository: Repository<Livro>,
    ) {}

  async findAll(): Promise<Livro[]> {
    return await this.livrosRepository.find();
  }

  async findById(id: number) : Promise<Livro> {
    return await this.livrosRepository.findOne(id);
  }

  async create(livro: Livro) : Promise<Livro> {
    await this.livrosRepository.insert(livro);
    return await this.livrosRepository.findOne(livro.id);
  }

  async update(id: number, livro: Livro) {
    await this.livrosRepository.update(id, livro);
    return await this.livrosRepository.findOne(id);
  }

  async remove(id: number) : Promise<void> {
    await this.livrosRepository.delete(id);
  }
}