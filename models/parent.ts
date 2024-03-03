import { Schema, model, models } from 'mongoose';
import { ChildSchema } from './child';
import { BookSchema } from './book';

const ParentSchema = new Schema({
  email: String,
  username: String,
  password: String,
  children: [ChildSchema],
  books: [BookSchema],
});

const Parent = models.Parent || model("Parent", ParentSchema);

export { Parent };
