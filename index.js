const dotenv = require("dotenv");
const connectaDB = require("./src/database/connect");

dotenv.config();

connectaDB();

require("./modules/express");