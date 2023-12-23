var express = require('express');
var router = express.Router();
var connection = require('../library/database');

router.get('/', (req, res) => {
  const query = 'SELECT * FROM pesanan_rental';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM pesanan_rental WHERE id_akun = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    res.json(results);
  });
});

router.post('/', (req, res) => {
  const { id_akun, id_rental, customer, telp, alamat, tujuan, unit, lama, catatan, tanggal, tanggal_pesan, harga } = req.body;

  const query = 'INSERT INTO pesanan_rental (`id_akun`, `id_rental`, `customer`, `telp`, `alamat`, `tujuan`, `unit`, `lama`, `catatan`, `tanggal`, `tanggal_pesan`, `harga`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  connection.query(query, [id_akun, id_rental, customer, telp, alamat, tujuan, unit, lama, catatan, tanggal, tanggal_pesan, harga],(err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    res.send('Data inserted successfully');

  });
});

module.exports = router;
