const sqlite = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: {
    directory: "./database/migrations",
    tableName: 'dbmigrations',
  },
  seeds: {
    directory: "./database/seeds",
  },
  useNullAsDefault: true
}

module.exports = {

  development: {
    ...sqlite,
    connection: {
      filename: './database/auth.db3'
    }
  },

  testing: {
    ...sqlite,
    connection: {
      filename: './database/authTest.db3'
    }
  },

};
