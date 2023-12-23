var express = require('express');
var router = express.Router();
var connection = require('../library/database');

router.get('/', (req, res) => {
  const query = 'SELECT * FROM akun';

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
  const query = 'SELECT * FROM akun WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    res.json(results);
  });
});

router.post('/', (req, res) => {
  const { nama, username, password, email, telp  } = req.body;
  const query = 'INSERT INTO akun (`nama`, `username`, `password`, `email`, `telp`) VALUES (?,?,?,?,?)';
  connection.query(query, [nama, username, password, email, telp],(err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    res.send('Data inserted successfully');
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { nama, username, password, email, telp, status } = req.body;
  const query = 'UPDATE akun SET `nama` = ?, `username` = ?, `password` = ?, `email` = ?, `telp` = ?, `status` = ? WHERE id = ?';
  connection.query(query, [nama, username, password, email, telp, status, id],(err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    res.send('Data update successfully');
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM akun WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    res.json(results);
  });
});

module.exports = router;
