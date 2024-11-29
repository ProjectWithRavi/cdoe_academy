const express = require("express");
require("dotenv").config();
const Router = require("./Src/Routes/myRoutes");
const app = express();
const port = process.env.Port;
require("./Src/confic/confic");
app.use(express.json());
app.use(Router);

app.listen(port, () => {
  console.log(`server run on port: http://${process.env.HOST}:${port}`);
});
