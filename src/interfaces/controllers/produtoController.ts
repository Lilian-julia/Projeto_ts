import { Request, Response } from 'express';
import { ProdutoUseCase } from '../../usecases/produtoUseCase';

export class ProdutoController {
  constructor(private produtoUseCase: ProdutoUseCase) {}

  async getAllProdutos(req: Request, res: Response): Promise<void> {
    try {
      const produtos = await this.produtoUseCase.getAllProdutos();
      res.status(200).json({ produtos });
    } catch (error) {
      console.error('Erro ao obter todos os produtos:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  async cadastrarProduto(req: Request, res: Response): Promise<void> {
    try {
      const produtoData = req.body; 
      const produtoCadastrado = await this.produtoUseCase.cadastrarProduto(produtoData);
      res.status(201).json({ produto: produtoCadastrado });
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  async atualizarProduto(req: Request, res: Response): Promise<void> {
    try {
      const produtoId = req.params;
      const produtoData = req.body; // Assumindo que os dados do usuário estão no corpo da requisição
      const updatedProduto = await this.produtoUseCase.atualizarProduto(produtoId, produtoData);
      res.status(201).json({ produto:updatedProduto });
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  async deletarProduto(req: Request, res: Response): Promise<void> {
    try {
      const produtoId = req.params
      const deletedProduto = await this.produtoUseCase.deletarProduto(produtoId);
      res.status(201).json({ produto: deletedProduto });
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  async getProdutoById(req: Request, res: Response): Promise<void> {
    try {
      const produtoId = req.params;
      const produtoById = await this.produtoUseCase.getProdutoById(produtoId);
      res.status(201).json({ usuario: produtoById });
    } catch (error) {
      console.error('Erro ao obter produto pelo id:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }


}