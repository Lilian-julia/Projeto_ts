import express from 'express';
import { UsuarioController } from '../../../interfaces/controllers/usuarioController';
import { UsuarioUseCase } from '../../../usecases/usuarioUseCase'

const router = express.Router();
const usuarioController = new UsuarioController();

router.get('/usuarios', usuarioController.getAllUsuarios);
router.post('/usuarios', usuarioController.cadastrarUsuario);
router.put('/usuarios/:id', usuarioController.atualizarUsuario);
router.delete('/usuarios/:id', usuarioController.deletarUsuario);
router.get('/usuarios/:id', usuarioController.getUsuarioById);

export default router;