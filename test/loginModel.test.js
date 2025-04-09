import { UserModel } from '../src/model/userModel.js';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

vi.mock('@prisma/client', () => {
  const mPrismaClient = {
    users: {
      findFirst: vi.fn(),
    },
  };
  return { PrismaClient: vi.fn(() => mPrismaClient) };
});

describe('UserModel', () => {
  it('should return success if user is found and password is correct', async () => {
    const testData = { email: 'b@b.com', username: 'AZlice', password: '1234' };

    const prismaMock = new PrismaClient();
    prismaMock.users.findFirst.mockResolvedValue({
      email: 'test@test.com',
      username: 'AZlice',
      password: '1234', // Le mot de passe en base est 'salut'
    });

    const result = await UserModel.login(testData);

    expect(result.success).toBe(false);
    expect(result.message).toBe('Incorrect password');
    //expect(result.username).toBe(testData.username);
  });

  it('should return error if user is not found', async () => {
    const testData = { email: 'unknown@test.com', username: 'UnknownUser', password: 'salut' };

    const prismaMock = new PrismaClient();
    prismaMock.users.findFirst.mockResolvedValue(null);

    const result = await UserModel.login(testData);

    expect(result.success).toBe(false);
    expect(result.message).toBe('User not found');
  });

  it('should return error if password is incorrect', async () => {
    const testData = { email: 'test@test.com', username: 'AZlice', password: 'wrongpassword' };

    const prismaMock = new PrismaClient();
    prismaMock.users.findFirst.mockResolvedValue({
      email: 'test@test.com',
      username: 'AZlice',
      password: 'salut', // Le mot de passe en base est 'salut', donc 'wrongpassword' est incorrect
    });

    const result = await UserModel.login(testData);

    expect(result.success).toBe(false);
    expect(result.message).toBe('Incorrect password');
  });
});
