const express = require('express')

const app = express()
const accueilRoute = require("./routes/accueil")
const serviceRoute = require("./routes/service")
const contactRoute = require("./routes/contact")

app.use(
    (req, res,next) =>{
        // recuperer la date et verifier si le jour et l'heure sont conforme à l'heure de disponibilité du site
        const date = new Date();
        const day = date.getDay() //jour actuel
        const hour = date.getHours() //heure actuel
        

        if (day > 5 || hour > 17) {
            res.send("Site est disponible dans les jours ouvrable de 9h à 17h")
            res.end()
        }
        else{
            next()
        }
        
    }
)

// Routes
app.use("/", accueilRoute)
app.use("/service", serviceRoute)
app.use("/contact", contactRoute)

module.exports = app;