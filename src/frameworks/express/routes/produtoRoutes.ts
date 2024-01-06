import express from 'express';
import { ProdutoController } from '../../../interfaces/controllers/produtoController';

const router = express.Router();
const produtoController = new ProdutoController();

router.get('/produtos', produtoController.getAllProdutos);
router.post('/produtos', produtoController.cadastrarProduto);
router.put('/produtos/:id', produtoController.atualizarProduto);
router.delete('/produtos/:id', produtoController.deletarProduto);
router.get('/produtos/:id', produtoController.getProdutoById);

export default router;