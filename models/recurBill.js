module.exports = function (sequelize, DataTypes) {
  const RecurBill = sequelize.define("RecurBill", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      len: [1]
    },
    frequency: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    }
  });

  RecurBill.associate = function (models) {
    models.RecurBill.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    models.RecurBill.hasMany(models.Bill, {
      onDelete: "cascade",
      hooks: true
    });
  };
  return RecurBill;
}