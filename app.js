const express = require("express");
const data = require("./data.json");
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
  const stuff = await extractKeywords();
  let result = [];
  stuff.forEach((item) => result.push(item));
  await res.send(result);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
