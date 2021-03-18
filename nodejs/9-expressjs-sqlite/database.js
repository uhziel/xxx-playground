const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, err => {
    if (err) {
      // Cannot open database
      console.error(err.message);
      throw err;
    }else{
        console.log('Connected to the SQLite3 database.')
        db.run(`CREATE TABLE IF NOT EXISTS user_activity (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            token VARCHAR(100),
            clientname VARCHAR(100),
            clientip VARCHAR(100)
            );`,
        (err) => {
            if (err) {
                console.error(err.message);
                throw err;
            }
        });
    }
});

module.exports = db
