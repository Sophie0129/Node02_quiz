const service = require("../service/member/member_service")

const index = (req, res) => {
    console.log("index로 넘어가는중")
    res.render("index")
    
}
const login = (req, res) => {
    console.log("login로 넘어가는중")
    const matchmember = service.matchmember();
    console.log("matchmemeber 연결")
    res.render("./member/login", {matchmember})
    
}
const list = (req, res) => {
    console.log("list로 넘어가는중")
    res.render("./member/list")
    
}
const info = (req, res) => {
    console.log("info로 넘어가는중")
    res.render("./member/info")
    
}
const loginChk = (req, res) => {
    console.log("logincheck로 넘어가는중")
    res.render("../member/login_check")
    
}

module.exports = {index, login, list, info, loginChk}