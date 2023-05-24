
const Schema = require("mongoose").Schema;

const veggiesSchema = new Schema(
  {
    name: { type: String },
    photo: { type: String},
    // available: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    price: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
});

module.exports = veggiesSchema;