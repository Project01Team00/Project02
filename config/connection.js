const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;


//mysql://x48wzj2ctmirltt0:o2imnn7oa55d8u9h@kfgk8u2ogtoylkq9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/rdor3qo2tejjcvxd