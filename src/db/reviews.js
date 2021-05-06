module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "review",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      content: {
        type: DataTypes.STRING,
        required: true,
      },
      rating: {
        type: DataTypes.INTEGER,
        required: true,
      },
    },
    { timestamps: true }
  );
  /* Cart.associate = (models) => {
      Cart.belongsTo(models.User);
      Cart.belongsTo(models.Product);
    }; */
  return Review;
};
