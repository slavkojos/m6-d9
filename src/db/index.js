const { Sequelize, DataTypes } = require("sequelize");
const Article = require("./articles");
const Author = require("./authors");
const Review = require("./reviews");
const Category = require("./categories");
const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
  host: process.env.PGHOST,
  dialect: "postgres",
});

const models = {
  Article: Article(sequelize, DataTypes),
  Author: Author(sequelize, DataTypes),
  Review: Review(sequelize, DataTypes),
  Category: Category(sequelize, DataTypes),
  sequelize: sequelize,
};

models.Article.belongsTo(models.Author);
models.Author.hasMany(models.Article);

models.Article.belongsTo(models.Category);
models.Category.hasMany(models.Article);

models.Article.hasOne(models.Review);

// models.Product.belongsTo(models.Category)
// models.Category.hasMany(models.Product)

// models.Product.belongsToMany(models.User, {through:models.Cart})
// models.User.belongsToMany(models.Product, {through:models.Cart})

// models.Cart.belongsTo(models.User)
// models.User.hasMany(models.Cart)

// models.Cart.belongsTo(models.Product)
// models.Product.hasMany(models.Cart)

/* Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
}); */
sequelize
  .authenticate()
  .then(() => console.log("Connection established"))
  .catch((e) => console.log("Connection failed ", e));

module.exports = models;
