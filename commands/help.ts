import { Message } from "eris";
import { Bot } from "../Classes/Bot";
import { Command } from "../Classes/Command";

const names = ["help"];
const desc = [
  "Explains how to use the specified command.",
  "Also provides usage format and list of aliases",
];
const usage = "<commandname>";

const func = async (
  args: string[],
  msg: Message,
  bot: Bot
): Promise<Message | void> => {
  const cmd = bot.findCommand(args[0] || "help");
  if (cmd) return await cmd.showHelp(msg, bot);
  return await msg.channel.createMessage({
    embed: {
      color: bot.embedColor("error"),
      title: "Command not found",
      description: `Sorry, I couldn't find a command matching \`${args[0]}\``,
    },
  });
};

export const help = new Command(names, desc, func, usage);
