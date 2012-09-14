module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'Task',
    {
      title: {
        type:      DataTypes.STRING,
        allowNull: false
      },

      details:     DataTypes.TEXT
    },

    {
      timestamps: false,
      underscored: true
    }
  )
}
