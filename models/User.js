const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    display_name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    score: {
        type: Number,
        default: 0
    },
    avatar: {
        type: String
    },
    completed_levels:
        [
            {
              type: Schema.Types.ObjectId,
              ref: "Level"
            }
        ]
});


const User = mongoose.model("User", UserSchema);

module.exports = User;
