const { Userinfo } = require("../model/main");

exports.signup = (req, res) => {
  res.render("signup");
};

exports.signup_post = (req, res) => {
  var data = {
    mbti: req.body.mbti,
    id: req.body.id,
    pw: req.body.pw,
    email: req.body.email,
    name: req.body.name,
    birth: req.body.birth,
    nick: req.body.nick,
    gender: req.body.gender,
  };
  Userinfo.findOne({
    where: {
      id: req.body.id,
    },
  }).then((result) => {
    if (result) {
      res.send("같은 ID의 사용자가 있습니다.");
    } else {
      Userinfo.create(data).then(() => {
        res.send("가입완료");
      });
    }
  });
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.signin_post = (req, res) => {
  res.send("로그인완료");
};

exports.find = (req, res) => {
  res.render("find");
};

// profile

exports.profile = (req, res) => {
  res.render("profile");
};

exports.profile_upload = (req, res) => {
  res.send("업로드완");
};
exports.matching = (req, res) => {
  res.render("matching");
};
