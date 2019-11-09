module.exports = function(sequelize, DataTypes) {
  const Todo = sequelize.define('Todo', {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN,
  });
  return Todo;
  // this style allows you to use mutiple tabels
};
