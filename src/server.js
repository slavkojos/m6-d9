const express = require("express");
const cors = require("cors");
const db = require("./db");
const services = require("./services");
const app = express();
const listEndpoints = require("express-list-endpoints");

app.use(cors());
app.use(express.json());
app.use("/api", services);
const port = process.env.PORT || 5000;

db.sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => console.log("server is running: " + port));
  console.log(listEndpoints(app));
  app.on("error", (error) => console.info(" ❌ Server is not running due to : ", error));
});
