import mongoose from 'mongoose';

const connectDB = (url) => {
  return mongoose.connect(MONGO_URL);
};

export default connectDB;
