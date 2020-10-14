import {
  Alignment,
  Attribute,
  Categ,
  Fusion,
  Gender,
  Race,
  Role,
  Series,
  Type,
  Usage,
} from "./enums";

type ValueToString = { [k: number]: string };

export const roles: ValueToString = {
  [Role.Demon]: "Demon",
  [Role.Partner]: "Partner",
  [Role.Spell]: "Spell",
  [Role.Item]: "Item",
};

export const types: ValueToString = {
  [Type.Grounded]: "Grounded",
  [Type.Flying]: "Flying",
};

export const genders: ValueToString = {
  [Gender.Male]: "Male",
  [Gender.Female]: "Female",
};

export const fusions: ValueToString = {
  [Fusion.Normal]: "Normal",
  [Fusion.Double]: "Double-fused",
  [Fusion.Triple]: "Tri-fused",
};

export const races: ValueToString = {
  [Race.Deity]: "Deity",
  [Race.Megami]: "Megami",
  [Race.Herald]: "Herald",
  [Race.Avian]: "Avian",
  [Race.Tree]: "Tree",
  [Race.Genma]: "Genma",
  [Race.Avatar]: "Avatar",
  [Race.Holy]: "Holy",
  [Race.Enigma]: "Enigma",
  [Race.Hero]: "Hero",
  [Race.Fury]: "Fury",
  [Race.Lady]: "Lady",
  [Race.Kishin]: "Kishin",
  [Race.Dragon]: "Dragon",
  [Race.Divine]: "Divine",
  [Race.Flight]: "Flight",
  [Race.Yoma]: "Yoma",
  [Race.Fairy]: "Fairy",
  [Race.Snake]: "Snake",
  [Race.Beast]: "Beast",
  [Race.Jirae]: "Jirae",
  [Race.Night]: "Night",
  [Race.Fallen]: "Fallen",
  [Race.Brute]: "Brute",
  [Race.Femme]: "Femme",
  [Race.Vile]: "Vile",
  [Race.Raptor]: "Raptor",
  [Race.Wood]: "Wood",
  [Race.Reaper]: "Reaper",
  [Race.Wilder]: "Wilder",
  [Race.Jaki]: "Jaki",
  [Race.Undead]: "Undead",
  [Race.Vermin]: "Vermin",
  [Race.Tyrant]: "Tyrant",
  [Race.Drake]: "Drake",
  [Race.Haunt]: "Haunt",
  [Race.Spirit]: "Spirit",
  [Race.Foul]: "Foul",
  [Race.Entity]: "Entity",
  [Race.Zealot]: "Zealot",
  [Race.General]: "General",
  [Race.Uma]: "UMA",
  [Race.Zoma]: "Zoma",
  [Race.Rumor]: "Rumor",
  [Race.Element]: "Element",
  [Race.Godly]: "Godly",
  [Race.Ghost]: "Ghost",
  [Race.Cyber]: "Cyber",
  [Race.Amatsu]: "Amatsu",
  [Race.Mitama]: "Mitama",
  [Race.Kunitsu]: "Kunitsu",
  [Race.Machine]: "Machine",
  [Race.Fiend]: "Fiend",
  [Race.Great]: "Great",
  [Race.Kohi]: "Kohi",
  [Race.Shinshou]: "Shinshou",
  [Race.Tenma]: "Tenma",
  [Race.Vaccine]: "Vaccine",
  [Race.Virus]: "Virus",
  [Race.DeityEmperor]: "Deity Emperor",
  [Race.Messian]: "Messian",
  [Race.Therian]: "Therian",
  [Race.Touki]: "Touki",
  [Race.Gaean]: "Gaean",
  [Race.Meta]: "Meta",
  [Race.Ranger]: "Ranger",
};

export const alignments: ValueToString = {
  [Alignment.Light]: "Light",
  [Alignment.Dark]: "Dark",
  [Alignment.Neutral]: "Neutral",
  [Alignment.Law]: "Law",
  [Alignment.Chaos]: "Chaos",
};

export const attributes: ValueToString = {
  [Attribute.Phys]: "Phys",
  [Attribute.Magic]: "Magic",
  [Attribute.Fire]: "Fire",
  [Attribute.Ice]: "Ice",
  [Attribute.Electric]: "Electric",
  [Attribute.Force]: "Force",
  [Attribute.Psy]: "Psy",
  [Attribute.Expel]: "Expel",
  [Attribute.Death]: "Death",
  [Attribute.Almighty]: "Almighty",
  [Attribute.Curse]: "Curse",
  [Attribute.Sealing]: "Sealing",
  [Attribute.Restoration]: "Restoration",
  [Attribute.Reflect]: "Reflect",
  [Attribute.Paralyze]: "Paralyze",
};

export const categs: ValueToString = {
  [Categ.Tool]: "Tool",
  [Categ.Electronic]: "Electronic",
  [Categ.Armor]: "Armor",
  [Categ.Weapon]: "Weapon",
  [Categ.Jewel]: "Jewel",
  [Categ.Talisman]: "Talisman",
  [Categ.Sword]: "Sword",
  [Categ.Theater]: "VR Theater",
};

export const usages: ValueToString = {
  [Usage.Placed]: "Placed",
  [Usage.Equipment]: "Equipment",
  [Usage.Consumable]: "Consumable",
  [Usage.Instant]: "Instant",
};

export const series: ValueToString = {
  [Series.Base]: "Base",
  [Series.G]: "G",
  [Series.P]: "P",
  [Series.S]: "S",
};
