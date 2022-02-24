const express = require('express')

const PORT = process.env.PORT || 3000

const app = express()

app.get("/", (res,req)=>{
    req.send("<h1 style=\"font-family: roboto;\">Hello World</h1>")
})

app.listen(PORT, ()=>{
    console.log("Server on port ", PORT)
})