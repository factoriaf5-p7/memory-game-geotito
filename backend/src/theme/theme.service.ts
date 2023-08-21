import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Theme } from './interfaces/theme.interface';
import { CreateThemeDTO } from './dto/theme.dto';

@Injectable()
export class ThemeService {
  constructor(
    @InjectModel('Theme') private readonly themeModel: Model<Theme>,
  ) {}

  async create(createThemeDTO: CreateThemeDTO): Promise<Theme> {
    const theme = new this.themeModel(createThemeDTO);
    return await theme.save();
  }
}
