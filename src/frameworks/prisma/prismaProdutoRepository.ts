import { PrismaClient } from '@prisma/client';
import { Produto } from '../../entities/produto';
import { ProdutoRepository } from '../../interfaces/repositories/produtoRepository';

const prisma = new PrismaClient();

export class PrismaProdutoRepository implements ProdutoRepository {
  async getAllProdutos(): Promise<Produto[]> {
    return prisma.produto.findMany();
  }

  async createProduto(produtoData: Produto): Promise<Produto> {
    return prisma.produto.create({
      data: produtoData,
    });
  }

  async updateProduto(produtoId: number, updatedData: Partial<Produto>): Promise<Produto | null> {
    return prisma.produto.update({
      where: { id: produtoId },
      data: updatedData,
    });
  }

  async deleteProduto(produtoId: number): Promise<boolean> {
    const result = await prisma.produto.delete({
      where: { id: produtoId },
    });
    return !!result;
  }

  async getProdutoById(produtoId: number): Promise<Produto | null> {
    return prisma.produto.findUnique({
      where: { id: produtoId },
    });
  }
}
