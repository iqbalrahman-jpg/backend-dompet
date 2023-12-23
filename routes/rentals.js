var express = require('express');
var router = express.Router();
var connection = require('../library/database');

router.get('/', (req, res) => {
  const query = 'SELECT * FROM pesanan_rental';
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM pesanan_rental WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    res.json(results);
  });
});

router.patch('/:id', (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  const query = 'UPDATE pesanan_rental SET `status` = ? WHERE id = ?';
  connection.query(query, [status, id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    res.json(results);
  });
});

module.exports = router;
