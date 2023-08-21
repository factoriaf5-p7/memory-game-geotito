import { Document } from 'mongoose';

export interface Theme extends Document {
  readonly name: string;
  readonly cards: Array<string>;
}
