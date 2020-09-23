const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://cristianmx10:uD9BAT4hxtLwR4fx@cluster0.8j4fg.azure.mongodb.net/dbexercise?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(db => console.log('Database connected.'))
    .catch(err => console.log(err))