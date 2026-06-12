const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

function getGCD(a, b) {
  while (b !== 0n) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function getLCM(a, b) {
  return (a * b) / getGCD(a, b);
}

function isNaturalNumber(str) {
  if (!str || !/^\d+$/.test(str)) return false;
  let num = parseInt(str, 10);
  return num > 0;
}

app.get("/app/maksudurrahmanprio_gmail_com", (req, res) => {
  const { x, y } = req.query;
  if (!isNaturalNumber(x) || !isNaturalNumber(y)) {
    res.setHeader("Content-Type", "text/plain");
    return res.send("NaN");
  }

  const numX = BigInt(x);
  const numY = BigInt(y);

  const result = getLCM(numX, numY);
  res.setHeader("Content-Type", "text/plain");
  res.send(result.toString());
});

app.listen(port, () => {
  console.log(` App listening on port ${port}`);
});
