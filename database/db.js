const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://sonendraelon:task123@cluster0.bgrkr5p.mongodb.net/task-manager?retryWrites=true&w=majority';
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(mongoURI, options)
	.then(() => {
		console.log('Connected to MongoDB');
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error);
	});