var express = require("express");
var router = express.Router();
var connection = require("../library/database");

router.get("/", (req, res) => {
  const query = "SELECT * FROM sementara";
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const { dompet_tipe, jenis, jumlah, deskripsi, waktu } = req.body;
  const query =
    "INSERT INTO sementara (`dompet_tipe`, `jenis`, `jumlah`, `deskripsi`, `waktu`) VALUES (?,?,?,?,?)";
  connection.query(query, [dompet_tipe, jenis, jumlah, deskripsi, waktu], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    res.send("Data inserted successfully");
  });
});

router.patch("/:id", (req, res) => {
  const { dompet_tipe, jenis, jumlah, deskripsi, waktu } = req.body;
  const { id } = req.params;
  const query =
    "UPDATE sementara SET `dompet_tipe` = ?, `jenis` = ?, `jumlah` = ?, `deskripsi` = ?, `waktu` = ? WHERE id = ?";
  connection.query(query, [dompet_tipe, jenis, jumlah, deskripsi, waktu, id], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    res.json(results);
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM sementara WHERE id = ?";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    res.json(results);
  });
});

module.exports = router;