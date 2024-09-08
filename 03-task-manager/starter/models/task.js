const mongoose = require('mongoose');



const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide a srting'],
    },
    completed: {
        type: Boolean,
    }
});

module.exports = mongoose.model('Task', TaskSchema); // this model takes two arguments, the name of the model and the schema of the model.