import mongoose from 'mongoose';
const MONGO_URI = 'mongodb+srv://youssefmarzoug:19041@cluster0.7rbusfz.mongodb.net/?retryWrites=true&w=majority';
const connectToDatabase = async () => {
	try {
		mongoose.set('strictQuery', false);
		const connect = await mongoose.connect(MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		console.log(`MongoDb Connected: ${connect.connection.host}`);
	} catch (error) {
		console.log(`Error: ${error.message}`);
	}
};

export default connectToDatabase;
