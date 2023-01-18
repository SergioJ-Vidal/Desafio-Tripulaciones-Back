const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000;

require("dotenv").config();

app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    
    next();
    
    });

app.use(express.json())
app.use("/users", require("./routes/users"))
app.use("/posts", require("./routes/posts"))
app.use("/news", require("./routes/news"))
app.use("/categories", require("./routes/categories"))

app.listen(PORT, ()=>console.log(`servidor levantado en el puerto ${PORT}`))