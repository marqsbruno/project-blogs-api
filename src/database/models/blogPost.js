const sequelize = require("sequelize");
const PostCategory = require("./postCategory");

const createBlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    published: {
      type: DataTypes.DATE,
    },
    updated: {
      type: DataTypes.DATE,
    },
  },
  );

  BlogPost.associate = (db) => {
    BlogPost.belongsTo(db.User, { as: 'user', foreignKey: 'userId' })
  }
/*   BlogPost.associate = (db) => {
    BlogPost.hasMany(db.PostCategory, { as: 'postCategory', foreignKey: 'postId' })
  } */
  return BlogPost;
};

module.exports = createBlogPost;