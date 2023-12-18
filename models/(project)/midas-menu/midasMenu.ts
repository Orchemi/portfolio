import { Schema, model, models } from 'mongoose';

const MidasMenuSchema = new Schema({
  date: {
    type: String, // YYYY-MM-DD
    required: true,
  },
  menus: {
    type: {
      BREAKFAST: { type: String, default: '' },
      LUNCH: { type: String, default: '' },
      DINNER: { type: String, default: '' },
    },
    required: true,
  },
});

const MidasMenu = models.MidasMenu || model('MidasMenu', MidasMenuSchema);

export default MidasMenu;
