import Database from "better-sqlite3";
import path from "path";
import { Card, Raw } from "../Classes/Card";
import { Demon } from "../Classes/Demon";
import { Item } from "../Classes/Item";
import { Partner } from "../Classes/Partner";
import { Pile } from "../Classes/Pile";
import { Spell } from "../Classes/Spell";
import { Role } from "./enums";

const dir = path.join(__dirname, "..", "resources", "vulgate.db"); //TODO: better database directory management
const db = new Database(dir);
const stmt = db.prepare("select * from data,texts where data.id=texts.id");

const cards: Card[] = [];
for (const res of stmt.all()) {
  const raw: Raw = {
    id: res.id,
    role: res.role,
    type: res.type,
    level: res.level,
    race: res.race,
    fusion: res.fusion,
    gender: res.gender,
    categ: res.categ,
    usage: res.usage,
    atk: res.atk,
    hp: res.hp,
    alignment: res.alignment,
    attribute: res.attribute,
    weakness: res.weakness,
    resistance: res.resistance,
    cost_light: res.cost_light,
    cost_dark: res.cost_dark,
    cost_neutral: res.cost_neutral,
    cost_law: res.cost_law,
    cost_chaos: res.cost_chaos,
    emit_light: res.emit_light,
    emit_dark: res.emit_dark,
    emit_neutral: res.emit_neutral,
    emit_law: res.emit_law,
    emit_chaos: res.emit_chaos,
    name: res.name,
    flavor: res.flavor,
    ability1: res.ability1,
    ability2: res.ability2,
    effect1: res.effect1,
    effect2: res.effect2,
  };
  if (res.role == Role.Demon) cards.push(new Demon(raw));
  else if (res.role == Role.Partner) cards.push(new Partner(raw));
  else if (res.role == Role.Spell) cards.push(new Spell(raw));
  else if (res.role == Role.Item) cards.push(new Item(raw));
}

export const vulgate = new Pile(cards);
