const express = require("express");
const app = express();
const data = require("./data/data");
const cors = require("cors");

app.use(express.json());
app.use(cors()); // Add this line to enable CORS for all routes

// ROUTES

app.get("/data", async (req, res) => {
  try {
    res.send(data);
  } catch (error) {
    res.status(500).send({ error: "error, see server logs" });
  }
});

// SHOULD BE AT THE END

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port: ${port}`));
