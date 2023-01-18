const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000;
const cors = require("cors")
require("dotenv").config();

app.use(express.json())
app.use(cors())

app.use("/users", require("./routes/users"))
app.use("/posts", require("./routes/posts"))

app.listen(PORT, ()=>console.log(`servidor levantado en el puerto ${PORT}`))