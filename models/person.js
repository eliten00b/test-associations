module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'Person',
    {
      name: {
        type:      DataTypes.STRING,
        allowNull: false
      }
    },

    {
      timestamps: false,
      underscored: true
    }
  )
}
