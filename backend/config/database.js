import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

// Conectar ao MongoDB
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI, {
      });
      console.log("Conectado ao MongoDB com sucesso!");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error.message);
      process.exit(1);
    }
  };
  
  export default connectDB;