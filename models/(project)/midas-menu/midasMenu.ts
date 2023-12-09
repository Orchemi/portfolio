import { Schema, model, models } from 'mongoose';

const MidasMenuSchema = new Schema({
  key: {
    type: String,
    required: true,
  },
  menu: {
    type: String,
    required: true,
  },
});

const MidasMenu = models.MidasMenu || model('MidasMenu', MidasMenuSchema);

export default MidasMenu;
