/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////////////////
let mongoose = require('mongoose');

/////////////////////////////////////////////// /* Initialize */ //////////////////////////////////////////////////////////
let Schema = mongoose.Schema; // Save a Reference to the Schema Constructor

/////////////////////////////////////////////// /* Model*/ //////////////////////////////////////////////////////////

// Using the Schema constructor, create a new CommentSchema object

var commentSchema = new Schema({
  
  // `body` is of type String
  body: String

});

// This creates our model from the above schema, using mongoose's model method
var Comment = mongoose.model("Comment", commentSchema);

// Export the Comment model
module.exports = Comment;