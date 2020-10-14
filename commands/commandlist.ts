import { Message } from "eris";
import { Command } from "../Classes/Command";
import { commands } from "./index";
import * as config from "../config.json";
import { Bot } from "../Classes/Bot";

const names = ["commands", "commandlist"];
const desc = ["Gives a list of available commands for the bot."];

const func = async (
  args: string[],
  msg: Message,
  bot: Bot
): Promise<Message | void> => {
  let main = "";
  for (const cmd of commands) {
    main += `\`${config.prefix + cmd.names[0]}`;
    if (cmd.usage) main += " " + cmd.usage;
    main += `\` | ${cmd.desc[0]}\n`;
  }

  return await msg.channel.createMessage({
    embed: {
      color: bot.embedColor("help"),
      title: "Raziel Commands",
      description: main + "\n",
    },
  });
};

export const cmdlist = new Command(names, desc, func);
