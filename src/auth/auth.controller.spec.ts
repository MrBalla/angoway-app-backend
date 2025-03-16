import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const mockAuthService = {
      signin: jest.fn()
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService
        }
      ]
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  describe('signin', () => {
    it('should call authService.signin with correct parameters', async () => {
      const signInDto = {
        email: 'test@example.com',
        name: 'Test User',
        password: 'password123'
      };

      await controller.signin(signInDto);
      expect(authService.signin).toHaveBeenCalledWith(signInDto);
    });

    it('should return the result from authService.signin', async () => {
      const signInDto = {
        email: 'test@example.com',
        name: 'Test User',
        password: 'password123'
      };
      const expectedResult = { token: 'jwt-token' };
      
      jest.spyOn(authService, 'signin').mockResolvedValue(expectedResult);
      
      const result = await controller.signin(signInDto);
      expect(result).toEqual(expectedResult);
    });

    it('should handle empty input data', async () => {
      const emptyDto = {};
      
      await controller.signin(emptyDto);
      expect(authService.signin).toHaveBeenCalledWith(emptyDto);
    });

    it('should handle null values in input data', async () => {
      const nullDto = {
        email: null,
        name: null,
        password: null
      };
      
      await controller.signin(nullDto);
      expect(authService.signin).toHaveBeenCalledWith(nullDto);
    });
  });
});
