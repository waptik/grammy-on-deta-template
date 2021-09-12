import { Composer } from "grammy";
import { User } from "grammy/out/platform";

const composer = new Composer();

function getFullName(from: User) {
  return from.last_name
    ? `${from.first_name} ${from.last_name}`
    : from.first_name;
}

const filterCommands = composer.filter((ctx) =>
  ctx.chat ? ctx.chat.type === "private" : false
);

filterCommands.command("start", async (ctx) => {
  // Ignore the message if it's older than 2 seconds
  ctx.reply(`Hi ${getFullName(ctx.from!)} 👋`);
});

filterCommands.command("status", async (ctx) => {
  // Ignore the message if it's older than 2 seconds
  if (Date.now() / 1000 - ctx.msg.date < 2) {
    ctx.reply("The bot is up 👍.");
  }
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
