import { Test, TestingModule } from '@nestjs/testing';
import { ThemeService } from './theme.service';
import { CreateThemeDTO } from './dto/theme.dto';

const themes: CreateThemeDTO[] = [
  {
    name: 'rock bands',
    cards: ['rock band 1', 'rock band 2', 'rock band 3'],
  },
  {
    name: 'indie bands',
    cards: ['indie band 1', 'indie band 2', 'indie band 3'],
  },
];

describe('ThemeService', () => {
  let service: ThemeService;
  const mockThemeRepositoryService = {
    findAll: jest.fn().mockImplementation(() => Promise.resolve({ themes })),
    create: jest.fn().mockImplementation((theme) => {
      const newThemes = {
        id: 2,
        ...theme,
      };
      themes.push(newThemes);
      return Promise.resolve(newThemes);
    }),
    findOne: jest.fn().mockImplementation((name) => {
      const foundTheme = themes.find((theme) => theme.name === name);
      return Promise.resolve(foundTheme);
    }),
    update: jest.fn().mockImplementation((name, updatedData) => {
      const foundIndex: any = themes.find((theme) => theme.name === name);
      const updatedTheme = {
        ...themes[foundIndex],
        ...updatedData,
      };
      themes[foundIndex] = updatedTheme;
      return Promise.resolve(updatedTheme);
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThemeService],
    })
      .overrideProvider(ThemeService)
      .useValue(mockThemeRepositoryService)
      .compile();

    service = module.get<ThemeService>(ThemeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a themes list', async () => {
    expect(await service.findAll()).toMatchObject({ themes });
  });

  it('should create a theme and return the theme created', async () => {
    const newTheme = {
      name: 'salsa bands',
      cards: ['salsa band 1', 'salsa band 2', 'salsa band 3'],
    };
    expect(await service.create(newTheme)).toMatchObject({
      id: expect.any(Number),
    });
  });

  it('should return an specific theme', async () => {
    expect(await service.findOne('rock bands')).toMatchObject({
      name: 'rock bands',
      cards: ['rock band 1', 'rock band 2', 'rock band 3'],
    });
  });

  it('should update a theme and return the theme updated', async () => {
    const updatedTheme = {
      name: 'indie bands UPDATED',
      cards: ['indie band 1', 'indie band 2', 'indie band 3'],
    };
    expect(await service.update('indie bands', updatedTheme)).toMatchObject(
      updatedTheme,
    );
  });
});
