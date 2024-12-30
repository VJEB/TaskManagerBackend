require('dotenv').config();

module.exports = {
    migrationsDir: 'migrations', // Directory where migrations will be stored
    connectionString: process.env.MONGO_URI,
    schema: require('../src/schemas/task.schema.ts')
};
  