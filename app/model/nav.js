'use strict';

module.exports = (app) => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;

  const Nav = app.model.define('t_nav', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nav: {
      type: STRING(30),
      unique: true,
      allowNull: false
    },
    description: {
      type: TEXT
    }
  }, {
    createdAt: 'createTime',
    updatedAt: 'updateTime'
  });

  Nav.associate = function () {
    Nav.hasMany(app.model.Link, {
      foreignKey: 'navId',
      as: 'link'
    })
  }

  return Nav;
};