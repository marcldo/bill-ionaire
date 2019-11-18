module.exports = function (sequelize, DataTypes) {
  const Bill = sequelize.define("Bill", {
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      len: [1]
    },
    dueDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });

  Bill.associate = function (models) {
    models.Bill.belongsTo(models.RecurBill, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Bill;
}