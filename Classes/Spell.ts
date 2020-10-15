import { Role } from "../modules/enums";
import { Card, Raw } from "./Card";
import { Effect } from "./Effect";
import { Bot } from "./Bot";
import { Message } from "eris";
import * as util from "../modules/util";

export class Spell extends Card {
  public readonly attribute: number;

  constructor(raw: Raw) {
    super(raw.id, Role.Spell, raw.name, raw.flavor, new Effect(raw.effect1));
    this.attribute = raw.attribute;
  }

  public get attributeString() {
    return util.attributeString(this.attribute);
  }

  public async display(msg: Message, bot: Bot): Promise<Message | void> {
    return await msg.channel.createMessage({
      embed: {
        color: bot.embedColor("spell"),
        title: this.name,
        description: `**Attribute**: ${this.attributeString}`,
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
        thumbnail: {
          url: this.imgURL,
        },
      },
    });
  }
}
