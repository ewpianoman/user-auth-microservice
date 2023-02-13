const mongoose = require('mongoose');
let count = 0;

const options = {
  autoIndex: false,
  poolSize: 10,
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const connectWithRetry = () => {
  console.log('MongoDB connection with retry');
  mongoose.connect('mongodb://localhost:27017/user-auth', options).then(() => {
      console.log('MongoDB is connected');
  }).catch(err => {
      console.log('MongoDb connection unsuccessful, retry after 5 seconds.', ++count);
      setTimeout(connectWithRetry, 5000)
  })
};

exports.mongoose = mongoose;