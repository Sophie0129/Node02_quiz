const ex = require("express")
const ctrl = require("../controller/common_controller")
const router = ex.Router();

router.get("/", ctrl.index)
router.get("/member/login", ctrl.login)
router.get("/member/list", ctrl.list)
router.get("/member/info", ctrl.info)
router.get("/member/login_check", ctrl.loginChk)


module.exports = router;