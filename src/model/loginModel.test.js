jest.mock('@prisma/client', () => {
    const mPrismaClient = {
      users: {
        findFirst: jest.fn(),
      },
    };
    return { PrismaClient: jest.fn(() => mPrismaClient) };
  });
  
  describe('LoginModel', () => {
    it('should return success if user is found and password is correct', async () => {
      const { PrismaClient } = require('@prisma/client');
      const loginModel = require('./loginModel');
  
      const testData = { email: 'test@test.com', username: 'AZlice', password: 'salut' };
  
      // Mock du retour de la base de données
      const prismaMock = new PrismaClient();
      prismaMock.users.findFirst.mockResolvedValue({
        email: 'test@test.com',
        username: 'AZlice',
        password: 'salut', // Le mot de passe en base est 'salut'
      });
  
      // Exécution de la fonction login
      const result = await loginModel.LoginModel.login(testData);
  
      // Vérification des résultats
      expect(result.success).toBe(true);
      expect(result.message).toBe('Successfully connected');
      expect(result.userName).toBe(testData.username);
    });
  
    it('should return error if user is not found', async () => {
      const { PrismaClient } = require('@prisma/client');
      const loginModel = require('./loginModel');
  
      const testData = { email: 'unknown@test.com', username: 'UnknownUser', password: 'salut' };
  
      // Mock du retour de la base de données : aucun utilisateur trouvé
      const prismaMock = new PrismaClient();
      prismaMock.users.findFirst.mockResolvedValue(null);
  
      // Exécution de la fonction login
      const result = await loginModel.LoginModel.login(testData);
  
      // Vérification des résultats
      expect(result.success).toBe(false);
      expect(result.message).toBe('User not found');
    });
  
    it('should return error if password is incorrect', async () => {
      const { PrismaClient } = require('@prisma/client');
      const loginModel = require('./loginModel');
  
      const testData = { email: 'test@test.com', username: 'AZlice', password: 'wrongpassword' };
  
      // Mock du retour de la base de données
      const prismaMock = new PrismaClient();
      prismaMock.users.findFirst.mockResolvedValue({
        email: 'test@test.com',
        username: 'AZlice',
        password: 'salut', // Le mot de passe en base est 'salut', donc 'wrongpassword' est incorrect
      });
  
      // Exécution de la fonction login
      const result = await loginModel.LoginModel.login(testData);
  
      // Vérification des résultats
      expect(result.success).toBe(false);
      expect(result.message).toBe('Password is incorrect');
    });
  });
  
  

