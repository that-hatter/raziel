import { Role } from "../modules/enums";
import { MagSet, Card, Raw } from "./Card";
import { Ability } from "./Effect";
import { Bot } from "./Bot";
import { Message } from "eris";
import * as strings from "../modules/strings";
import * as util from "../modules/util";

export class Partner extends Card {
  public readonly type: number;
  public readonly gender: number;
  public readonly atk: number;
  public readonly hp: number;
  public readonly emit: MagSet;

  constructor(raw: Raw) {
    const abilities: Ability[] = [new Ability(raw.effect1, raw.ability1)];
    if (raw.effect2.trim() != "[None]") {
      abilities.push(new Ability(raw.effect2, raw.ability2));
    }

    super(raw.id, Role.Demon, raw.name, raw.flavor, ...abilities);

    this.type = raw.type;
    this.gender = raw.gender;
    this.atk = raw.atk;
    this.hp = raw.hp;
    this.emit = {
      neutral: raw.emit_neutral,
      law: raw.emit_law,
      chaos: raw.emit_chaos,
      light: raw.emit_light,
      dark: raw.emit_dark,
    };
  }

  public get typeString(): string | undefined {
    return strings.types[this.type];
  }

  public get genderString(): string | undefined {
    return strings.genders[this.gender];
  }

  public get emitString(): string {
    return util.magsetString(this.emit);
  }

  public async display(msg: Message, bot: Bot): Promise<Message | void> {
    return await msg.channel.createMessage({
      embed: {
        color: bot.embedColor("partner"),
        title: this.name,
        description:
          `**Gender**: ${this.genderString}` +
          `\n**Type**: ${this.typeString}` +
          `\n**ATK**: ${this.atk} **HP**: ${this.hp}` +
          `\n**Emission**: ${this.emitString}`,
        fields: [
          ...this.effects.map((a) => {
            return {
              name: (a as Ability).name,
              value: a.text,
            };
          }),
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
