const express = require("express");
const data = require("./data.json");
const globalData = require("./globals-en_us.json");
const cors = require("cors");
const app = express();
const port = 4000;
async function extractKeywords() {
  let keyWords = new Set();
  const arr = await data.map((card) => card.keywords);
  await arr.map((arr) => arr.map((item) => keyWords.add(item)));
  return keyWords;
}
app.use(cors());
app.get("/", (req, res) => {
  res.send(data);
});
app.get("/keywords", async (req, res) => {
  res.send(globalData.keywords);
});
app.get("/regions", (req, res) => {
  res.send(globalData.regions);
});
app.get("/keywords");
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
