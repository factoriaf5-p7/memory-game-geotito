import { Schema } from 'mongoose';

export const ThemeSchema = new Schema({
  name: { type: String, unique: true, required: true },
  cards: [
    {
      type: String,
    },
  ],
});
