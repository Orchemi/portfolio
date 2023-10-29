import { Schema, model, models } from 'mongoose';

const GreetingSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: [String],
  },
  {
    timestamps: true,
  },
);

const Greeting = models.Greeting || model('Greeting', GreetingSchema);

export default Greeting;
