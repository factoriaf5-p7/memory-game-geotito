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
    create: jest.fn().mockImplementation((theme) => {
      const newThemes = {
        id: 2,
        ...theme,
      };
      themes.push(newThemes);
      return Promise.resolve(newThemes);
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

  it('should create a theme and return the theme created', async () => {
    const newTheme = {
      name: 'salsa bands',
      cards: ['salsa band 1', 'salsa band 2', 'salsa band 3'],
    };
    expect(await service.create(newTheme)).toMatchObject({
      id: expect.any(Number),
    });
  });
});
