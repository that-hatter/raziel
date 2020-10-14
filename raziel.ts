import { Message } from "eris";
import { Bot } from "./Classes/Bot";

console.time("Prep");
const bot = new Bot();
console.timeLog("Prep");

bot.on("ready", () => {
  console.log("Connected!");
});

bot.on("messageCreate", async (msg: Message) => {
  if (msg.author.bot) return;

  if (msg.content.startsWith(bot.prefix)) {
    const args = msg.content.slice(bot.prefix.length).toLowerCase().split(" ");

    if (args.length > 0) {
      const cmd = bot.findCommand(String(args.shift()));
      if (cmd) {
        try {
          return await cmd.exec(args, msg, bot);
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
});

bot.connect();
