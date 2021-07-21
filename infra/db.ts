import * as mongoose from 'mongoose';

class Db {
   private DB_URL = 'mongodb://localhost:27017/db_portal';

   createConnection() {
      mongoose.set('useNewUrlParser', true);
      mongoose.set('useFindAndModify', false);
      mongoose.set('useCreateIndex', true);
      mongoose.set('useUnifiedTopology', true);
      mongoose.connect(this.DB_URL);
  }
}

export default Db;