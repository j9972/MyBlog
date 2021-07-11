// 이 부분이 중요한거 같음, 이유는 다른 파일들이 이 파일을 이용해서 변수들을 가져다 씀

const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");

  if (!accessToken) return res.json({ error: "User not logged in!" });

  try {
    // 뇌피셜: accessToken(유저)를 json형식으로 validToken -> 이를 하나의 유저로 보고 -> 유저가 맞다면 next()로 유저 인증후 다음 절차로 넘어가게 만듬
    const validToken = verify(accessToken, "importantsecret");
    req.user = validToken;
    if (validToken) {
      return next();
    }
  } catch (err) {
    console.log(err, 'here is the err')
    return res.json({ error: err });
  }
};

module.exports = { validateToken };