import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  cpf: number;

  @Column("date")
  dataNascimento: number;

  @Column()
  email: string;

  @Column()
  endereco: string;

  @Column()
  cep: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;
}
