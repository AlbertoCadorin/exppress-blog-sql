// Importiamo il file di connessione al database
const connection = require('../data/db');

// Index
function index(req, res) {
    // prepariamo la query
    const sql = 'SELECT * FROM posts';
    // eseguiamo la query
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(results);
    })
};

// Show

function show(req, res) {
    const id = req.params.id
    // il ?  e un segnaposto 
    const sql = `SELECT * FROM posts WHERE id = ?`;

    // eseguiamo la query, gli passiamo un arry come secondo argomento che contiene i valori che antranno a sostituire il ?
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        if (results.length === 0) return res.status(404).json({ error: 'Post non trovato' })
        res.json(results[0]);
    })
}

// Delete

function destroy(req, res) {
    const id = req.params.id

    const sql = 'DELETE FROM posts WHERE id = ?'
    // prepariamo la query
    connection.query(sql, [id], (err) => {
        if (err) return res.status(500).json({ error: 'Failed to delete post' });
        res.sendStatus(204)
    })
}

module.exports = { index, show, destroy }