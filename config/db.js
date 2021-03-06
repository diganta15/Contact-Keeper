const mongoose =  require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () =>{
    try{
        mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        }).then(() => console.log('MongoDB connected'));
        console.log("MongoDB connected ...")
    }
    catch(err){
        console.error(err.message);
        process.exit(1)
    }

}

module.exports = connectDB;