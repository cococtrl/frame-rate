const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const filmSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    director: String,
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Film', filmSchema);