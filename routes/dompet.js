var express = require("express");
var router = express.Router();
var connection = require("../library/database");

router.get("/", (req, res) => {
  const query = "SELECT * FROM dompet";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    res.json(results);
  });
});

router.get("/:id", (req, res) => {
  const query = "SELECT * FROM dompet WHERE id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const { jenis, deskripsi } = req.body;
  const query =
    "INSERT INTO dompet (`jenis`, `deskripsi`) VALUES (?,?)";
  connection.query(query, [jenis, deskripsi], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    res.send("Data inserted successfully");
  });
});

router.patch("/:id", (req, res) => {
  const { jenis, deskripsi } = req.body;
  const { id } = req.params;
  const query =
    "UPDATE dompet SET `jenis` = ?, `deskripsi` = ? WHERE id = ?";
  connection.query(query, [jenis, deskripsi, id], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    res.json(results);
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM dompet WHERE id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    res.json(results);
  });
});

module.exports = router;
