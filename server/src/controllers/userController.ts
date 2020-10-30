import { Request, Response } from "express";
import User from "../models/User";

class UserController {
  async listAll(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ message: `listAll is working!` });
  }
  async list(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ message: `list is working!` });
  }
  async create(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ message: `create is working!` });
  }
  async update(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ message: `listAll is working!` });
  }
  async delete(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ message: `listAll is working!` });
  }
}
