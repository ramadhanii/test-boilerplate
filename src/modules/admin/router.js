import { Router } from "express";
import {
  create,
  fetchAll,
  fetchOne,
  update,
  remove,
  signin,
  signout,
  requestPassword,
  resetPassword,
} from "./controller/index.js";
import rulesCreate from "./rules/create.js";
import { authAdminLocal, authAdminJwt } from "#src/middleware/auth/index.js";
import validation from "#src/middleware/validation/index.js";
const router = Router();

// Caller function for global error handling
// Route all calls through this to try hand handle error
// https://www.youtube.com/watch?v=s5YoXms0ECs
const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch((e) => next(e));

router.post("/", authAdminJwt(), validation(rulesCreate), create);
router.get("/", authAdminJwt(), fetchAll);
router.get("/:id", authAdminJwt(), fetchOne);
router.put("/:id", authAdminJwt(), update);
router.delete("/:id", authAdminJwt(), remove);
router.post("/signin", authAdminLocal(), signin);
router.post("/signout", signout);
router.post("/request-password", requestPassword);
router.post("/reset-password", resetPassword);
router.post("/secret", authAdminJwt(), (req, res, next) => {
  res.json(req.user);
});

export default router;
