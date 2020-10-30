import { getManager } from "typeorm";
import { Request, Response } from "express";
import ClientUser from "../models/User";

class UserController {
  async listAll(req: Request, res: Response): Promise<Response> {
    const manager = getManager();
    const users = await manager.find(ClientUser);

    if (!users) return res.status(404).json({ message: "Users not found!" });

    return res.status(200).json(users);
  }
  async list(req: Request, res: Response): Promise<Response> {
    const { id_user } = req.params;
    if (!id_user) return res.status(404).json({ message: "Params not found!" });

    const manager = getManager();
    const user = await manager.findOne(ClientUser, id_user);

    if (!user) return res.status(404).json({ message: "User not found!" });

    return res.status(200).json(user);
  }
  async create(req: Request, res: Response): Promise<Response> {
    const {
      nome,
      cpf,
      dataNascimento,
      endereco,
      estado,
      cidade,
      cep,
      email,
    } = req.body;

    if (
      !nome ||
      !cpf ||
      !dataNascimento ||
      !endereco ||
      !estado ||
      !cidade ||
      !cep ||
      !email
    )
      return res.status(404).json({ message: "Params are wrong!" });

    const manager = getManager();
    const newUser = manager.create(ClientUser, {
      nome,
      cpf,
      dataNascimento,
      endereco,
      estado,
      cidade,
      cep,
      email,
    });

    await manager.save(newUser);

    return res.status(200).json({ message: "User created!" });
  }
  async update(req: Request, res: Response): Promise<Response> {
    const { id_user } = req.params;
    const manager = getManager();
    if (!id_user) return res.status(404).json({ message: "Params not found!" });

    const user = await manager.findOne(ClientUser, id_user);

    if (!user) return res.status(404).json({ message: "User not found!" });

    const {
      nome,
      cpf,
      dataNascimento,
      endereco,
      estado,
      cidade,
      cep,
      email,
    } = req.body;

    if (
      !nome &&
      !cpf &&
      !dataNascimento &&
      !endereco &&
      !estado &&
      !cidade &&
      !cep &&
      !email
    )
      return res.status(404).json({ message: "Params are wrong!" });

    await manager.update(ClientUser, user, {
      nome: nome ? nome : user.nome,
      cpf: cpf ? cpf : user.cpf,
      dataNascimento: dataNascimento ? dataNascimento : user.dataNascimento,
      endereco: endereco ? endereco : user.endereco,
      estado: estado ? estado : user.estado,
      cidade: cidade ? cidade : user.cidade,
      cep: cep ? cep : user.cep,
      email: email ? email : user.email,
    });

    return res.status(200).json({ message: `User updated!` });
  }
  async delete(req: Request, res: Response): Promise<Response> {
    const { id_user } = req.params;
    if (!id_user) return res.status(404).json({ message: "Params not found!" });

    const manager = getManager();
    const user = await manager.findOne(ClientUser, id_user);

    if (!user) return res.status(404).json({ message: "User not found!" });

    await manager.delete(ClientUser, user);

    return res.status(200).json({ message: "User deleted!" });
  }
}

export default new UserController();
