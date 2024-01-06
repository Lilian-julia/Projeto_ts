import { Produto} from '../../entities/produto';

export interface ProdutoRepository {
  getAllProdutos(): Promise<Produto[]>;
  createProduto(produtoData: Produto): Promise<Produto>;
  updateProduto(produtoId: number, updatedData: Partial<Produto>): Promise<Produto | null>;
  deleteProduto(produtoId: number): Promise<boolean>;
  getProdutoById(produtoId: number): Promise<Produto | null>;
  
}