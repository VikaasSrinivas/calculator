const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname)); // Serve HTML from same folder

app.post("/calculate", (req, res) => {
  const { num1, num2, operator } = req.body;
  let result;

  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  switch (operator) {
    case "+": result = n1 + n2; break;
    case "-": result = n1 - n2; break;
    case "*": result = n1 * n2; break;
    case "/": result = n2 !== 0 ? n1 / n2 : "Cannot divide by zero"; break;
    default: result = "Invalid operator";
  }

  res.json({ result });
});

app.listen(port, () => {
  console.log(`Calculator server running at http://localhost:${port}`);
});
