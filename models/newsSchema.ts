import * as mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
  hat: { type: String },
  tittle: { type: String },
  text: { type: String },
  author: { type: String },
  image: { type: String },
  publishDate: { type: Date },
  link: { type: String },
  active: { type: Boolean },
});

export default NewsSchema;
