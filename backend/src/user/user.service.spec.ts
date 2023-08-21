import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/user.dto';

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

describe('UserService', () => {
  let service: UserService;
  const mockUserRepositoryService = {
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
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(mockUserRepositoryService)
      .compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user and return the user created', async () => {
    const newUser = {
      name: 'user2',
      email: 'user2@mail.com',
    };
    expect(await service.create(newUser)).toMatchObject({
      id: expect.any(Number),
    });
  });
});
