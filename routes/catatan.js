var express = require("express");
var router = express.Router();
var connection = require("../library/database");

router.get("/", (req, res) => {
  const query = "SELECT * FROM catatan";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const { nama, deskripsi } = req.body;
  const query =
    "INSERT INTO catatan (`nama`, `deskripsi`) VALUES (?,?)";
  connection.query(query, [nama, deskripsi], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    res.send("Data inserted successfully");
  });
});

router.patch("/:id", (req, res) => {
  const { nama, deskripsi } = req.body;
  const { id } = req.params;
  const query =
    "UPDATE catatan SET `nama` = ?, `deskripsi` = ? WHERE id = ?";
  connection.query(query, [nama, deskripsi, id], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    res.json(results);
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM catatan WHERE id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    res.json(results);
  });
});

module.exports = router;