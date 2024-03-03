import { Schema, model, models } from 'mongoose';

const ChildSchema = new Schema({
  name: String,
  gender: String,
  dob: Date,
  avatar: String,
  favs: {
    genre: String,
    book: String,
    animal: String,
  },
});

const Child = models.Child || model("Child", ChildSchema);

export { Child, ChildSchema };
