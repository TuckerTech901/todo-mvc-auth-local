const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  //subject: {
    //type: String,
  //},
  //date: {
    //type: Date,
  //},
  //Replit throwing error re: userId; this object is not in Leon's code
  userId: {
    type: String,
    required: true,
  }

})

module.exports = mongoose.model('Todo', TodoSchema)
