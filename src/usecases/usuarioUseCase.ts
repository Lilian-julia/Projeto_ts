import { Usuario } from '../entities/usuario';
import { UsuarioRepository } from '../interfaces/repositories/usuarioRepository';

export class UsuarioUseCase {
    constructor(private usuarioRepository: UsuarioRepository) {}

    async getAllUsuarios(): Promise<Usuario[]> {

        const allUsuarios = await this.usuarioRepository.getAllUsuarios();

        return allUsuarios;
      }
  
    async cadastrarUsuario(usuarioData: Usuario): Promise<Usuario> {
   
      const createdUser: Usuario = await this.usuarioRepository.createUsuario(usuarioData);
     
      return createdUser;
    }
  
    async atualizarUsuario(usuarioId: number, updatedData: Partial<Usuario>): Promise<Usuario | null> {
      
      const updatedUser = await this.usuarioRepository.updateUsuario(usuarioId, updatedData);
      
      return updatedUser;
    }
  
    async deletarUsuario(usuarioId: number): Promise<boolean> {
     
      const result = await this.usuarioRepository.deleteUsuario(usuarioId);
      
      return result;
    }
  
    async getUsuarioById(usuarioId: number): Promise<Usuario | null> {
      
      const user = await this.usuarioRepository.getUsuarioById(usuarioId);
      
      return user;
    }
  
    
}