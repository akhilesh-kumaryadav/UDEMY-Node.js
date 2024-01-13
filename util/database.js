const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "MySQLkhillesh@24", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
