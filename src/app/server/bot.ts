import { Bot } from "grammy";
import { apiThrottler } from "@grammyjs/transformer-throttler";

import botHandlers from "app/handlers/bot";
import { getFullName } from "app/helpers/name";
import env from "./env";

const bot = new Bot(env.BOT_TOKEN);

bot.command("start", async (ctx) => {
  ctx.reply(`Hi ${getFullName(ctx.from!)} 👋`);
});

bot.api
  .setMyCommands([
    { command: "start", description: "Start bot" },
    { command: "status", description: "Check bot status" },
    { command: "me", description: "See info about yourself" },
  ])
  .then(() => {
    console.log("commands have been uploaded to BotFather");
  })
  .catch((e) => console.error("Failed to upload commands to bot", e));

bot.catch((err) => {
  console.error(`Error while handling update ${err.ctx.update.update_id}:`);
  console.error(err.error);
});

bot.api.config.use(apiThrottler());

bot.use(botHandlers);

export default bot;
