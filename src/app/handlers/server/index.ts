import { Router } from "express";

import env from "app/server/env";

const router = Router();

router.get("/", async (_, res) => {
  const url = `https://${env.DETA_PATH}.deta.dev`;
  res.send(`Hello World! Welcome to ${url}`);
});

router.get("/ping", async (_, res) => {
  res.send(`pong`);
});

export default router;
