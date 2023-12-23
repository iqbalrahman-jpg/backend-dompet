var express = require("express");
var router = express.Router();
var connection = require("../library/database");

router.get("/", (req, res) => {
  const query = "SELECT * FROM pengeluaran";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    res.json(results);
  });
});

router.get("/tipe", (req, res) => {
  const query = "SELECT * FROM tipe_pengeluaran";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const { pengeluaran_tipe, dompet_tipe, jumlah, deskripsi, waktu } = req.body;
  const query =
    "INSERT INTO pengeluaran (`pengeluaran_tipe`, `dompet_tipe`, `jumlah`, `deskripsi`, `waktu`) VALUES (?,?,?,?,?)";
  connection.query(
    query,
    [pengeluaran_tipe, dompet_tipe, jumlah, deskripsi, waktu],
    (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        return;
      }
      res.send("Data inserted successfully");
    }
  );
});

router.post("/tipe", (req, res) => {
  const { jenis, deskripsi } = req.body;
  const query =
    "INSERT INTO tipe_pengeluaran (`jenis`, `deskripsi`) VALUES (?,?)";
  connection.query(query, [jenis, deskripsi], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    res.send("Data inserted successfully");
  });
});

router.patch("/:id", (req, res) => {
  const { pengeluaran_tipe, dompet_tipe, jumlah, deskripsi, waktu } = req.body;
  const { id } = req.params;
  const query =
    "UPDATE pengeluaran SET `pengeluaran_tipe` = ?, `dompet_tipe` = ?, `jumlah` = ?, `deskripsi` = ?, `waktu` = ? WHERE id = ?";
  connection.query(
    query,
    [pengeluaran_tipe, dompet_tipe, jumlah, deskripsi, waktu, id],
    (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        return;
      }
      res.json(results);
    }
  );
});

router.patch("/tipe/:id", (req, res) => {
  const { jenis, deskripsi } = req.body;
  const { id } = req.params;
  const query =
    "UPDATE tipe_pengeluaran SET `jenis` = ?, `deskripsi` = ? WHERE id = ?";
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
  const query = "DELETE FROM pengeluaran WHERE id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    res.json(results);
  });
});

router.delete("/tipe/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM tipe_pengeluaran WHERE id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    res.json(results);
  });
});

module.exports = router;
