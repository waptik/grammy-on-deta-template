import { Bot } from "grammy";
import { apiThrottler } from "@grammyjs/transformer-throttler";

import botHandlers from "handlers/bot";
import env from "./env";

const bot = new Bot(env.BOT_TOKEN);

bot.catch((err) => {
  console.error(`Error while handling update ${err.ctx.update.update_id}:`);
  console.error(err.error);
});

bot.api.config.use(apiThrottler());

bot.use(botHandlers);

export default bot;
