const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use(express.static("public"));
const videoRoute = require("./routes/api/videos");
app.use("/", videoRoute);

const port = 5000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
