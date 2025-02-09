const express = require("express")
const app = express()
const port = 8090


app.get("/127.10.27.0.1", (req, res) => {
    res.redirect("https://fellps015.github.io/Test/")
})





app.listen(port, () => {
console.log(`Servidor rodando na porta:${port} com o acesso ao host:/127.10.27.0.1`)
})

