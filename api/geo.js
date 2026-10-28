// Returns the visitor's country and region from Vercel's edge headers, so the page can pick
// the right cookie notice (opt-in for Quebec, the EU, the UK and others; none in the US).
module.exports = (req, res) => {
  const h = req.headers;
  res.setHeader("Cache-Control", "private, no-store");
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({
    country: String(h["x-vercel-ip-country"] || "").toUpperCase(),
    region: String(h["x-vercel-ip-country-region"] || "").toUpperCase()
  }));
};
