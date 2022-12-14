const { Schema, model } = require('mongoose');
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'user' },
  dateSent: Date,
  lastResponded: Date,
});

model('survey', surveySchema);
