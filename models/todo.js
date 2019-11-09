module.exports = function(sequelize, DataTypes) {
  const Todo = sequelize.define('Todo', {
    text: {
      type: DataTypes.STRING,
      validate: {
        notempty: true,
      },
    },

    complete: DataTypes.BOOLEAN,
  });
  return Todo;
  // this style allows you to use mutiple tabels
};
