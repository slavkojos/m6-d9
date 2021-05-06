module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    "author",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING,
        required: true,
      },
      last_name: {
        type: DataTypes.STRING,
        required: true,
      },
    },
    { timestamps: false }
  );
  Author.associate = (models) => {
    Author.hasMany;
  };
  /* Cart.associate = (models) => {
      Cart.belongsTo(models.User);
      Cart.belongsTo(models.Product);
    }; */
  return Author;
};
