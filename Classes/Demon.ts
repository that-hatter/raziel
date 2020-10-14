import { Alignment, Role } from "../modules/enums";
import { MagSet, Card, Raw } from "./Card";
import { Ability } from "./Effect";
import { Message } from "eris";
import { Bot } from "./Bot";
import * as util from "../modules/util";
import * as strings from "../modules/strings";

const alignmentArray = [
  Alignment.Light,
  Alignment.Dark,
  Alignment.Neutral,
  Alignment.Law,
  Alignment.Chaos,
];

export class Demon extends Card {
  public readonly type: number;
  public readonly level: number;
  public readonly race: number;
  public readonly fusion: number;
  public readonly atk: number;
  public readonly hp: number;
  public readonly alignment: number;
  public readonly weakness: number;
  public readonly resistance: number;
  public readonly cost: MagSet;
  public readonly emit: MagSet;

  constructor(raw: Raw) {
    const abilities: Ability[] = [new Ability(raw.effect1, raw.ability1)];
    if (raw.effect2.trim() != "[None]") {
      abilities.push(new Ability(raw.effect2, raw.ability2));
    }

    super(raw.id, Role.Demon, raw.name, raw.flavor, ...abilities);

    this.type = raw.type;
    this.level = raw.level;
    this.race = raw.race;
    this.fusion = raw.fusion;
    this.atk = raw.atk;
    this.hp = raw.hp;
    this.alignment = raw.alignment;
    this.weakness = raw.weakness;
    this.resistance = raw.resistance;
    this.cost = {
      neutral: raw.cost_neutral,
      law: raw.cost_law,
      chaos: raw.cost_chaos,
      light: raw.cost_light,
      dark: raw.cost_dark,
    };
    this.emit = {
      neutral: raw.emit_neutral,
      law: raw.emit_law,
      chaos: raw.emit_chaos,
      light: raw.emit_light,
      dark: raw.emit_dark,
    };
  }

  public isAlignment(aln: Alignment): boolean {
    return (this.alignment & aln) === aln;
  }

  public get typeString(): string | undefined {
    return strings.types[this.type];
  }

  public get raceString(): string | undefined {
    return strings.races[this.race];
  }

  public get fusionString(): string | undefined {
    return strings.fusions[this.fusion];
  }

  public get alignmentString(): string | undefined {
    const matches = [];
    for (const aln of alignmentArray) {
      if (this.isAlignment(aln)) matches.push(strings.alignments[aln]);
    }
    return matches.join("/");
  }

  public get weaknessString(): string {
    return util.attributeString(this.weakness);
  }

  public get resistanceString(): string {
    return util.attributeString(this.resistance);
  }

  public get costString(): string {
    return util.magsetString(this.cost);
  }

  public get emitString(): string {
    return util.magsetString(this.emit);
  }

  public async display(msg: Message, bot: Bot): Promise<Message | void> {
    return await msg.channel.createMessage({
      embed: {
        color: bot.embedColor("demon"),
        title: this.name,
        description:
          `**Race**: ${this.raceString} **Type**: ${this.typeString}` +
          `\n**Level**: ${this.level} **ATK**: ${this.atk} **HP**: ${this.hp}` +
          `\n**Summon Type**: ${this.fusionString}` +
          `\n**Alignment**: ${this.alignmentString}` +
          `\n**Cost**: ${this.costString}` +
          `\n**Emission**: ${this.emitString}` +
          `\n**Resistance**: ${this.resistanceString}` +
          `\n**Weakness**: ${this.weaknessString}`,
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
      },
    });
  }
}
