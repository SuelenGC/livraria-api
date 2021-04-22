import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("livros")
export class Livro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo: string;

  @Column()
  nome: string;

  @Column("double")
  preco: number;
}