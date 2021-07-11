module.exports = (sequelize, DataTypes) => {
    const Likes = sequelize.define("Likes");
    // column이 들어가지 않는 이유는 postId랑 연동되서 그런듯
    return Likes;
  };