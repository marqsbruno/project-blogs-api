'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('PostCategories', {
    postId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'BlogPosts',
        key: 'id'
      },
    },
    categoryId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Categories',
        key: 'id'
      },
    },
  });
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostCategories');  
  }
};
