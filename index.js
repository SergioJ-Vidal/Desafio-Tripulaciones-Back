const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000;

require("dotenv").config();

app.use(express.json())
app.use("/users", require("./routes/users"))
app.use("/posts", require("./routes/posts"))
app.use("/news", require("./routes/news"))
app.use("/categories", require("./routes/categories"))

app.listen(PORT, ()=>console.log(`servidor levantado en el puerto ${PORT}`))