import { PrismaClient } from '@prisma/client';
import { Usuario } from '../../entities/usuario';
import { UsuarioRepository } from '../../interfaces/repositories/usuarioRepository';

const prisma = new PrismaClient();

export class PrismaUsuarioRepository implements UsuarioRepository {
  async getAllUsuarios(): Promise<Usuario[]> {
    return prisma.usuario.findMany();
  }

  async createUsuario(usuarioData: Usuario): Promise<Usuario> {
    return prisma.usuario.create({
      data: usuarioData,
    });
  }

  async updateUsuario(usuarioId: number, updatedData: Partial<Usuario>): Promise<Usuario | null> {
    return prisma.usuario.update({
      where: { id: usuarioId },
      data: updatedData,
    });
  }

  async deleteUsuario(usuarioId: number): Promise<boolean> {
    const result = await prisma.usuario.delete({
      where: { id: usuarioId },
    });
    return !!result;
  }

  async getUsuarioById(usuarioId: number): Promise<Usuario | null> {
    return prisma.usuario.findUnique({
      where: { id: usuarioId },
    });
  }
}
