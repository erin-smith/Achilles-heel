const mongoose = require("mongoose");

const { Schema } = mongoose;

const WorldSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  mapStyle: {
    type: String
  },
  mapToken: {
    type: String
  },
  mapBounds: [Array, Number],
  mapCenter: [
    Number
  ],
  mapNames: [
    {
      url: {
        type: String,
      },
      size: [Number],
      position: [Number]
    }
  ],
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
