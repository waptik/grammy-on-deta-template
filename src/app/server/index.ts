import { run } from "@grammyjs/runner";
import dotenv from "dotenv";
import { webhookCallback } from "grammy";

import app from "./express";
import bot from "./bot";
import env from "./env";

dotenv.config();

function main() {
  if (!env.DETA_PATH) {
    bot.catch(console.error);
    run(bot);
    console.log("Bot started");
    return;
  }

  const port = process.env.PORT || 8080;
  app.use(webhookCallback(bot));
  app.listen(port, async () => {
    const webhookUrl = `https://${env.DETA_PATH}.deta.dev`;

    console.log("Server listening on port", process.env.PORT);

    await bot.api.deleteWebhook();
    console.log(`Webhook deleted`);
    await bot.api.setWebhook(webhookUrl, {
      drop_pending_updates: true,
    });
  });
}

main();
export default app;
