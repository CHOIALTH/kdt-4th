var express = require("express");
var controller = require("../controller/Cmain");
var controllerSign = require("../controller/Csign");
var controllerProfile = require("../controller/Cprofile");
var testcontroller = require("../controller/Ctest");
const router = express.Router();

router.get("/", controller.main);
// 서버 테스트 페이지
router.get("/test", testcontroller.test);

router.get("/signup", controllerSign.signup);
router.get("/signin", controllerSign.signin);

router.get("/profile", controllerProfile.profile);

module.exports = router;
