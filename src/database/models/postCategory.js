const sequelize = require("sequelize")

const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      },
    categoryId: {
      type: DataTypes.INTEGER,
      },
  });

  PostCategory.associate = (db) => {
    db.BlogPost.belongsToMany(db.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'categoryId'
    })
    db.Category.belongsToMany(db.BlogPost, {
      as: 'blogpost',
      through: PostCategory,
      foreignKey: 'postId'
    })
  }
  return PostCategory;
};

module.exports = PostCategory;