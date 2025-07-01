const mongosse = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongosse.connect(db);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1); 
    }
}
module.exports = connectDB;