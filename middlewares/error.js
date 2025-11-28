function error(req, res, next) {
    res.statuts(500).json({ message: `Errore, riprova` })
}

module.exports = error