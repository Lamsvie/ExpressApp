const express = require("express")

const router = express.Router()

router.get("/", (req, res, next) =>{
    res.send(`
        <a href="/">Accueil</a></br><a href="/service">Service</a></br><a href="/contact">Contact</a>

        <p>Bonjour vous etes sur la page Accueil. Merci!!!</p>
        `)
})


module.exports = router;