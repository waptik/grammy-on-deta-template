import { Composer } from "grammy";

import { getFullName } from "app/helpers/name";

const composer = new Composer();

const filterCommands = composer.filter((ctx) =>
  ctx.chat ? ctx.chat.type === "private" : false
);

filterCommands.command("status", async (ctx) => {
  ctx.reply("The bot is up 👍.");
});

// about user
filterCommands.command("me", async (ctx) => {
  const msg = `Hi ${getFullName(ctx.from!)}.
  
  Here's a little info about yourself on telegram:
  
  Your name: ${getFullName(ctx.from!)}
  Your Telegram user ID: ${ctx.from!.id}
  Your Telegram username: ${ctx.from!.username ? ctx.from!.username : "N/A"}
  

  ------------------------------------

  Bye Bye 👋
  
  `;

  await ctx.reply(msg);
});

export default composer;
