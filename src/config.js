import mongoose from "mongoose";

const connectDB = async () => {
  const URI = 'mongodb+srv://adautomarques937:aamjunior10@users.epw0g.mongodb.net/ponto-eletronico?retryWrites=true&w=majority'
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log('MongoDB Connected')

  } catch (err) {
    console.error('MongoDB connection error', err)
    process.exit(1)
  }
}

export default connectDB