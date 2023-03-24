const mongoose = require('mongoose');

const connectaDB = async () => {
    try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_user}:${process.env.DB_pass}@ds2023a.s6ebkzb.mongodb.net/?retryWrites=true&w=majority`)
    } catch (err) {console.log("Ocorreu um erro ao se conetar com o banco de dados",err)
    } return console.log("Ligação ao banco de dados realizada com sucesso")

    }
    
module.exports = connectaDB;
