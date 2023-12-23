var express = require("express");
var router = express.Router();
var connection = require("../library/database");

router.get("/", (req, res) => {
  const query = "SELECT * FROM saldo";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const { dompet_tipe, jumlah } = req.body;
  const query =
    "INSERT INTO saldo (`dompet_tipe`, `jumlah`) VALUES (?,?)";
  connection.query(query, [dompet_tipe, jumlah], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    res.send("Data inserted successfully");
  });
});

router.patch("/:id", (req, res) => {
  const { dompet_tipe, jumlah } = req.body;
  const { id } = req.params;
  const query =
    "UPDATE saldo SET `dompet_tipe` = ?, `jumlah` = ? WHERE id = ?";
  connection.query(query, [dompet_tipe, jumlah, id], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    res.json(results);
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM saldo WHERE id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    res.json(results);
  });
});

module.exports = router;
