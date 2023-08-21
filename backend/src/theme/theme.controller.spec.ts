import { Test, TestingModule } from '@nestjs/testing';
import { ThemeController } from './theme.controller';
import { CreateThemeDTO } from './dto/theme.dto';
import { ThemeService } from './theme.service';

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

describe('ThemeController', () => {
  let controller: ThemeController;
  const mockThemeService = {
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
      controllers: [ThemeController],
      providers: [ThemeService],
    })
      .overrideProvider(ThemeService)
      .useValue(mockThemeService)
      .compile();

    controller = module.get<ThemeController>(ThemeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a themes list', async () => {
    expect(await controller.findAll()).toMatchObject({ themes });
  });

  it('should create a theme and return the theme created', async () => {
    const newTheme = {
      name: 'salsa bands',
      cards: ['salsa band 1', 'salsa band 2', 'salsa band 3'],
    };
    expect(await controller.create(newTheme)).toMatchObject({
      id: expect.any(Number),
    });
  });

  it('should return an specific theme', async () => {
    expect(await controller.findOne('rock bands')).toMatchObject({
      name: 'rock bands',
      cards: ['rock band 1', 'rock band 2', 'rock band 3'],
    });
  });

  it('should update a theme and return the theme updated', async () => {
    const updatedTheme = {
      name: 'indie bands UPDATED',
      cards: ['indie band 1', 'indie band 2', 'indie band 3'],
    };
    expect(await controller.update('indie bands', updatedTheme)).toMatchObject(
      updatedTheme,
    );
  });
});
