import { Message } from "eris";
import { Series } from "../modules/enums";
import { Bot } from "./Bot";
import { Effect } from "./Effect";
import * as strings from "../modules/strings";
import * as values from "../modules/values";

export type Raw = {
  id: number;
  role: number;
  type: number;
  level: number;
  race: number;
  fusion: number;
  gender: number;
  categ: number;
  usage: number;
  atk: number;
  hp: number;
  alignment: number;
  attribute: number;
  weakness: number;
  resistance: number;
  cost_neutral: number;
  cost_law: number;
  cost_chaos: number;
  cost_light: number;
  cost_dark: number;
  emit_neutral: number;
  emit_law: number;
  emit_chaos: number;
  emit_light: number;
  emit_dark: number;
  name: string;
  flavor: string;
  ability1: string;
  ability2: string;
  effect1: string;
  effect2: string;
};

export type MagSet = {
  neutral: number;
  law: number;
  chaos: number;
  light: number;
  dark: number;
};

export abstract class Card {
  public readonly id: number;
  public readonly serial: string;
  public readonly role: number;
  public readonly name: string;
  public readonly flavor: string;
  public readonly effects: Effect[];
  public abstract display(msg: Message, bot: Bot): Promise<Message | void>;

  constructor(
    id: number,
    role: number,
    name: string,
    flavor: string,
    ...effects: Effect[]
  ) {
    this.id = id;
    this.serial =
      id < Series.G
        ? `${id % 1e6}`.padStart(3, "0")
        : `${strings.series[Math.floor(id / 1e6) * 1e6]}` +
          `${id % 1e6}`.padStart(4, "0");
    this.role = role;
    this.name = name;
    this.flavor = flavor;
    this.effects = [...effects];
  }

  public isSerial(s: string): boolean {
    const n = Number(s);
    return isNaN(n)
      ? Number(s.substr(1)) + values.series[s[0]] == this.id
      : n == this.id;
  }
}
