const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

// 서버측 localhost url에 localhost:3001/posts 라고 ( posts 페이지 에서는 "/"이거여도 posts를 붙여줘야한다.)
router.get("/", (req,res) => {
    res.json("okay lets do it");
})

router.post("/", async (req, res) => {
    const post = req.body;
    await Posts.create(post);
    res.json(post);
});


module.exports = router;