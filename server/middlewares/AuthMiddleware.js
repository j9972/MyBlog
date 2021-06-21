// 이 부분이 중요한거 같음, 이유는 다른 파일들이 이 파일을 이용해서 변수들을 가져다 씀

const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");

  if (!accessToken) return res.json({ error: "User not logged in!" });

  try {
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