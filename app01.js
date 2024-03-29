const ex = require("express")
const router = require("./src/routes/common_router")

const app = ex();

app.set("views", "./src/views")
app.set("view engine","ejs")

app.use("/", router)


app.listen(3000,()=>console.log("quiz01 서버연결"))
