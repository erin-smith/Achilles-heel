const mongoose = require("mongoose");

const { Schema } = mongoose;

const WorldSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  background_image: {
    type: String
  },
  levels:
        [
          {
            type: Schema.Types.ObjectId,
            ref: "Level"
          }
        ]

});

const World = mongoose.model("World", WorldSchema);

module.exports = World;
