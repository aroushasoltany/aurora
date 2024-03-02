import { Schema, model, models } from 'mongoose';

const ChildSchema = new Schema({
  name: String,
  gender: String,
  dob: Date,
  avatar: {
    colour: String,
    icon: String,
  },
  favGenre: String,
  favBooks: String,
  favAnimal: String,
});

const Child = models.Child || model("Child", ChildSchema);

export { Child, ChildSchema };
