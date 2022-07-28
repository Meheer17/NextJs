import mongoose from 'mongoose';
const connection = {}

async function connect() {
  if(connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  connection.isConnected = db.connections[0].readyState;
}

export default connect