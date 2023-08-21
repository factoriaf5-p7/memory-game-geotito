import { Body, Controller, Post } from '@nestjs/common';
import { ThemeService } from './theme.service';
import { CreateThemeDTO } from './dto/theme.dto';

@Controller('theme')
export class ThemeController {
  constructor(private themeService: ThemeService) {}

  @Post()
  async create(@Body() createThemeDTO: CreateThemeDTO) {
    return await this.themeService.create(createThemeDTO);
  }
}
