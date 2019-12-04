require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/v1", require("./router"));

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));