const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorldSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    background_image: {
        type: String
    },
    levels: {
        level: [
            {
              type: Schema.Types.ObjectId,
              ref: "Level"
            }
          ]
    }
});

const World = mongoose.model("World", WorldSchema);

module.exports = World;