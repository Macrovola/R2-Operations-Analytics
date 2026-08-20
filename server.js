/**
 * R2 PMO Operations Analytics — optional API layer.
 *
 * The site runs fully static (open index.html or deploy to GitHub Pages).
 * This Express server is included to demonstrate the full-stack shape:
 * it serves the same /data/portfolio-data.json as a JSON API and hosts
 * the static front end. Run it only if you want the API endpoints.
 *
 *   npm install
 *   npm start          ->  http://localhost:3000
 *
 * Endpoints:
 *   GET /                      static site (index.html)
 *   GET /api/portfolio         full data object
 *   GET /api/metrics           headline metrics only
 *   GET /api/cst26             CST26 fiscal assessment slice
 *   GET /api/odc               ODC / SOA financial position slice
 *   GET /api/health           { status: "ok" }
 */
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = path.join(__dirname, "..");
const DATA_PATH = path.join(ROOT, "data", "portfolio-data.json");

function loadData() {
  // read on each request so edits to the JSON are picked up without a restart
  return JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
}

app.use(express.static(ROOT));

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

app.get("/api/portfolio", (_req, res) => {
  try { res.json(loadData()); }
  catch (e) { res.status(500).json({ error: "data layer unavailable" }); }
});

app.get("/api/metrics", (_req, res) => {
  try { res.json(loadData().headline); }
  catch (e) { res.status(500).json({ error: "data layer unavailable" }); }
});

app.get("/api/cst26", (_req, res) => {
  try { res.json(loadData().cst26); }
  catch (e) { res.status(500).json({ error: "data layer unavailable" }); }
});

app.get("/api/odc", (_req, res) => {
  try { res.json(loadData().odc); }
  catch (e) { res.status(500).json({ error: "data layer unavailable" }); }
});

app.listen(PORT, () => {
  console.log(`R2 Ops Analytics running at http://localhost:${PORT}`);
});
