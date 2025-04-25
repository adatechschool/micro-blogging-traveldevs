import { describe, it, expect, vi, beforeEach } from 'vitest';
import { UserModel } from '../src/models/userModel.js';
import { PrismaClient } from '@prisma/client';

vi.mock('@prisma/client', () => {
  const mockPrisma = {
    users: {
      findUnique: vi.fn(),
      findMany: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
  };

  return {
    PrismaClient: vi.fn(() => mockPrisma),
  };
});

describe('UserModel', () => {
  let prismaMock;

  beforeEach(() => {
    prismaMock = new PrismaClient();
    vi.clearAllMocks();
  });

  it('should find user by ID', async () => {
    const mockUser = { id: 1, username: 'Alice' };
    prismaMock.users.findUnique.mockResolvedValue(mockUser);

    const result = await UserModel.findById(1);

    expect(result).toEqual(mockUser);
    expect(prismaMock.users.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
  });

  it('should return all users', async () => {
    const mockUsers = [{ id: 1 }, { id: 2 }];
    prismaMock.users.findMany.mockResolvedValue(mockUsers);

    const result = await UserModel.findAll();

    expect(result).toEqual(mockUsers);
    expect(prismaMock.users.findMany).toHaveBeenCalled();
  });

  it('should create a new user', async () => {
    const mockUser = { username: 'Bob' };
    prismaMock.users.create.mockResolvedValue(mockUser);

    const result = await UserModel.create(mockUser);

    expect(result).toEqual(mockUser);
    expect(prismaMock.users.create).toHaveBeenCalledWith({ data: mockUser });
  });

  // it('should update a user', async () => {
  //   const data = { username: 'Charlie' };
  //   const id = 1;
  //   const updatedUser = { id: 1, username: 'Charlie' };
  //   prismaMock.users.update.mockResolvedValue(updatedUser);

  //   const result = await UserModel.update(data, id);

  //   expect(result).toEqual(updatedUser);
  //   expect(prismaMock.users.update).toHaveBeenCalledWith({
  //     where: { id },
  //     data,
  //   });
  // });

  // it('should delete a user', async () => {
  //   const id = 1;
  //   const deletedUser = { id: 1 };
  //   prismaMock.users.delete.mockResolvedValue(deletedUser);

  //   const result = await UserModel.delete(id);

  //   expect(result).toEqual(deletedUser);
  //   expect(prismaMock.users.delete).toHaveBeenCalledWith({ where: { id } });
  // });
});





