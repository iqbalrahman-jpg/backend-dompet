var express = require('express');
var router = express.Router();
var connection = require('../library/database');

router.get('/', (req, res) => {
  const query = 'SELECT * FROM pesanan_paket';

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
  const query = 'SELECT * FROM pesanan_paket WHERE id_akun = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    res.json(results);
  });
});

router.post('/', (req, res) => {
  const { id_akun, id_paket, alamat, telp, pax, id_rental, harga, tanggal, tanggal_pesan } = req.body;

  const query = 'INSERT INTO pesanan_paket (`id_akun`, `id_paket`, `alamat`, `telp`, `pax`, `id_rental`, `harga`, `tanggal`, `tanggal_pesan`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  connection.query(query, [id_akun, id_paket, alamat, telp, pax, id_rental, harga, tanggal, tanggal_pesan],(err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    res.send('Data inserted successfully');

  });
});

module.exports = router;