import { Message } from "eris";
import { Categ, Role, Usage } from "../modules/enums";
import { Bot } from "./Bot";
import { Card, Raw } from "./Card";
import { Effect } from "./Effect";
import * as strings from "../modules/strings";

export class Item extends Card {
  public readonly categ: Categ;
  public readonly usage: Usage;

  constructor(raw: Raw) {
    super(raw.id, Role.Item, raw.name, raw.flavor, new Effect(raw.effect1));
    this.categ = raw.categ;
    this.usage = raw.usage;
  }

  public get categString(): string | undefined {
    return strings.categs[this.categ];
  }

  public get usageString(): string | undefined {
    return strings.usages[this.usage];
  }

  public async display(msg: Message, bot: Bot): Promise<Message | void> {
    return await msg.channel.createMessage({
      embed: {
        color: bot.embedColor("item"),
        title: this.name,
        description:
          `**Item Type**: ${this.categString}` +
          `\n**Usage**: ${this.usageString}`,
        fields: [
          {
            name: "Effect",
            value: this.effects[0].text,
          },
          {
            name: "Flavor",
            value: this.flavor,
          },
        ],
        footer: {
          text: this.serial,
        },
      },
    });
  }
}
