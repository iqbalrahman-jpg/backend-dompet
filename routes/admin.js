var express = require('express');
var router = express.Router();
var connection = require('../library/database');

router.get('/', (req, res) => {
  const query = 'SELECT * FROM admin';

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
  const query = 'SELECT * FROM admin WHERE id = ?';
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
  const query = 'INSERT INTO admin (`nama`, `username`, `password`, `email`, `telp`) VALUES (?,?,?,?,?)';
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
  const query = 'UPDATE admin SET `nama` = ?, `username` = ?, `password` = ?, `email` = ?, `telp` = ?, `status` = ? WHERE id = ?';
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
  const query = 'DELETE FROM admin WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    res.json(results);
  });
});

module.exports = router;
