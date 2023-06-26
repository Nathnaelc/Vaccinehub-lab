const express = require("express");
const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    // const { email, password } = req.body;
  } catch (err) {
    next(err);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    // const { email, password } = req.body;
  } catch (err) {
    next(err);
  }
});

module.exports = router;
