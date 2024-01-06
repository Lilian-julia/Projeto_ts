import { Request, Response } from 'express';
import { UsuarioUseCase } from '../../usecases/usuarioUseCase';

export class UsuarioController {
  constructor(private usuarioUseCase: UsuarioUseCase) {}

  async getAllUsuarios(req: Request, res: Response): Promise<void> {
    try {
      const usuarios = await this.usuarioUseCase.getAllUsuarios();
      res.status(200).json({ usuarios });
    } catch (error) {
      console.error('Erro ao obter todos os usuários:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  async cadastrarUsuario(req: Request, res: Response): Promise<void> {
    try {
      const usuarioData = req.body; 
      const usuarioCadastrado = await this.usuarioUseCase.cadastrarUsuario(usuarioData);
      res.status(201).json({ usuario: usuarioCadastrado });
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  async atualizarUsuario(req: Request, res: Response): Promise<void> {
    try {
      const usuarioId = req.params.id;
      const usuarioData = req.body; // Assumindo que os dados do usuário estão no corpo da requisição
      const updatedUsuario = await this.usuarioUseCase.atualizarUsuario(usuarioId, usuarioData);
      res.status(200).json({ Usuario: updatedUsuario });
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  async deletarUsuario(req: Request, res: Response): Promise<void> {
    try {
      const usuarioId = req.params.id;
      const usuarioDeletado = await this.usuarioUseCase.deletarUsuario(usuarioId);
      res.status(200).json({ usuario: usuarioDeletado });
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  async getUsuarioById(req: Request, res: Response): Promise<void> {
    try {
      const usuarioId = req.params.id;
      const usuarioById = await this.usuarioUseCase.getUsuarioById(usuarioId);
      res.status(200).json({ usuario: usuarioById });
    } catch (error) {
      console.error('Erro ao obter usuário pelo id:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  
}