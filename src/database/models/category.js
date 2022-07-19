const sequelize = require("sequelize")

const createCategory = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  
/*   Category.associate = (db) => {
    Category.hasMany(db.PostCategory, { as: 'postCategory', foreignKey: 'categoryId' })
  } */
  return Category;
};

module.exports = createCategory;