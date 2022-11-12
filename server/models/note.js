const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  name:String,
  phoneno:String,
  address1:String,
  address2:String,
  city:String,
  state:String,
   user: {
     type: mongoose.Schema.Types.ObjectId,
     ref: "User"
   }
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
