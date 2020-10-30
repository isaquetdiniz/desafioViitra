import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class ClientUser {
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
  cep: number;

  @Column()
  cidade: string;

  @Column()
  estado: string;
}
