const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Banco de dados conectado com sucesso!', db.connection.host))
    .catch(err => console.error(err));
