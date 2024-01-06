import express from 'express';
import cors from 'cors';
import UsuarioRoutes from './routes/usuarioRoutes';
import ProdutoRoutes from './routes/produtoRoutes'; 

const app = express();

app.use(cors());
app.use(express.json());

app.use('/usuarios', UsuarioRoutes);
app.use('/produtos', ProdutoRoutes); 

export default app;