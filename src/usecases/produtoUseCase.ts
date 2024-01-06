import { Produto } from '../entities/produto.ts';
import { ProdutoRepository } from '../interfaces/repositories/produtoRepository';

export class ProdutoUseCase {
  constructor(private produtoRepository: ProdutoRepository) {}

  async getAllProdutos(): Promise<Produto[]> {
   
    const allProducts = await this.produtoRepository.getAllProdutos();
   
    return allProducts;
  }

  async cadastrarProduto(produtoData: Produto): Promise<Produto> {
    
    const createdProduct: Produto = await this.produtoRepository.createProduto(produtoData);
   
    return createdProduct;
  }

  async atualizarProduto(produtoId: number, updatedData: Partial<Produto>): Promise<Produto | null> {
   
    const updatedProduct = await this.produtoRepository.updateProduto(produtoId, updatedData);
    
    return updatedProduct;
  }

  async deletarProduto(produtoId: number): Promise<boolean> {
  
    const result = await this.produtoRepository.deleteProduto(produtoId);
    
    return result;
  }

  async getProdutoById(produtoId: number): Promise<Produto | null> {
 
    const product = await this.produtoRepository.getProdutoById(produtoId);
    
    return product;
  }

  
}