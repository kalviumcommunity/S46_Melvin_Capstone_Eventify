import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("📦 Connected to MongoDB");
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};

const isConnected = () => {
  return mongoose.connection.readyState === 1;
};

const disconnectFromDB = () => {
  return mongoose.disconnect();
};

const handleTermination = async (signal) => {
  console.log(`Received signal ${signal}, disconnecting from MongoDB...`);
  await disconnectFromDB();
  process.exit(0);
};

process.on("SIGINT", handleTermination);
process.on("SIGTERM", handleTermination);

export { connectToDB, isConnected, disconnectFromDB, handleTermination };
