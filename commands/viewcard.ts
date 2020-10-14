import { Message } from "eris";
import { Bot } from "../Classes/Bot";
import { Command } from "../Classes/Command";
import { vulgate } from "../modules/vulgate";

const names = ["card", "viewcard"];
const desc = [
  "Displays information regarding the specified card.",
  "The query can either be the card's name or serial number",
  "Both are not case-sensitive.",
];
const usage = "<name|serial>";

const func = async (
  args: string[],
  msg: Message,
  bot: Bot
): Promise<Message | void> => {
  const matches = vulgate.getExactsOrFuzzies(args.join(" "));
  if (matches.first) {
    return matches.size == 1
      ? await matches.first.display(msg, bot)
      : await matches.display(msg, bot);
  }
};

export const viewcard = new Command(names, desc, func, usage);
