'use strict';

module.exports = (app) => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;

  const Link = app.model.define('t_link', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    navId: {
      type: INTEGER
    },
    link: {
      type: STRING(2048),
      unique: true,
      allowNull: false
    },
    intro: {
      type: TEXT
    }
  }, {
    createdAt: 'createTime',
    updatedAt: 'updateTime'
  });

  Link.associate = function () {
    Link.belongsTo(app.model.Nav, {
      foreignKey: 'navId',
      as: 'nav'
    })
  }

  return Link;
};