import { Usuario} from '../../entities/usuario';

export interface UsuarioRepository {
  getAllUsuarios(): Promise<Usuario[]>;
  createUsuario(usuarioData: Usuario): Promise<Usuario>;
  updateUsuario(usuarioId: number, updatedData: Partial<Usuario>): Promise<Usuario | null>;
  deleteUsuario(usuarioId: number): Promise<boolean>;
  getUsuarioById(usuarioId: number): Promise<Usuario | null>;

}