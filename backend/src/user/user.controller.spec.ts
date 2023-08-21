import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { CreateUserDTO } from './dto/user.dto';
import { UserService } from './user.service';

const users: CreateUserDTO[] = [
  {
    name: 'user 1',
    email: 'user1@mail.com',
  },
  {
    name: 'project 2',
    email: 'user2@mail.com',
  },
];

describe('UserController', () => {
  let controller: UserController;
  const mockUserService = {
    create: jest.fn().mockImplementation((user) => {
      const newUsers = {
        id: 2,
        ...user,
      };
      users.push(newUsers);
      return Promise.resolve(newUsers);
    }),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(mockUserService)
      .compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user and return the user created', async () => {
    const newUser = {
      name: 'user2',
      email: 'user2@mail.com',
    };
    expect(await controller.create(newUser)).toMatchObject({
      id: expect.any(Number),
    });
  });
});
