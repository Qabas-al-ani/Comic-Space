const mongoose = require('mongoose');

const { Schema } = mongoose;

const comicSchema = new Schema({
  comicId: {
    type: Number,
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
});

const Comic = mongoose.model('Comic', comicSchema);

module.exports = Comic;
