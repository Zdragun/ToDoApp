const app = require("../server/app")

app.listen(process.env.PORT || 5001,()=>console.log(`The server is running under port:${process.env.PORT || 3001}`));