import { Schema, model, models } from 'mongoose';
import { ChildSchema } from './child';

const BookSchema = new Schema({
  bookId: String,
  title: String,
  author: [String],
  created: Date,
  contents: String,
  cover: String,
  readers: [ChildSchema],
});

const Book = models.Book || model("Book", BookSchema);

export { Book, BookSchema };
