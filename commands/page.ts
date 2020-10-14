import { Message } from "eris";
import { Bot } from "../Classes/Bot";
import { Command } from "../Classes/Command";

const names = ["page", "p"];
const desc = ["Switches the page of the latest paginable content."];
const usage = "<pagenumber>";

const func = async (
  args: string[],
  msg: Message,
  bot: Bot
): Promise<Message | void> => {
  const pg = bot.paginables[msg.channel.id];
  if (pg && (!pg.user || pg.user == msg.author.id)) {
    const n = Number(args[0]);
    if (!isNaN(n)) return await pg.switch(n);
  }
};

export const page = new Command(names, desc, func, usage);
