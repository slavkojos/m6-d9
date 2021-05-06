module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    "article",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        required: true,
      },
      content: {
        type: DataTypes.STRING,
        required: true,
      },
    },
    { timestamps: true }
  );
  /* Cart.associate = (models) => {
    Cart.belongsTo(models.User);
    Cart.belongsTo(models.Product);
  }; */
  return Article;
};
