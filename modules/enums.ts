// type of card
export enum Role {
  Demon = 1,
  Partner,
  Spell,
  Item,
}

// battle position of demon or partner
export enum Type {
  Grounded = 1,
  Flying,
}

// g}er of partner
export enum Gender {
  Male = 1,
  Female,
}

// fusion type according to required materials
export enum Fusion {
  Normal = 0,
  Double = 2,
  Triple = 3,
}

// race of demon
export enum Race {
  Deity = 1,
  Megami,
  Herald,
  Avian,
  Tree,
  Genma,
  Avatar,
  Holy,
  Enigma,
  Hero,
  Fury,
  Lady,
  Kishin,
  Dragon,
  Divine,
  Flight,
  Yoma,
  Fairy,
  Snake,
  Beast,
  Jirae,
  Night,
  Fallen,
  Brute,
  Femme,
  Vile,
  Raptor,
  Wood,
  Reaper,
  Wilder,
  Jaki,
  Undead,
  Vermin,
  Tyrant,
  Drake,
  Haunt,
  Spirit,
  Foul,
  Entity,
  Zealot,
  General,
  Uma,
  Zoma,
  Rumor,
  Element,
  Godly,
  Ghost,
  Cyber,
  Amatsu,
  Mitama,
  Kunitsu,
  Machine,
  Fiend,
  Great,
  Kohi,
  Shinshou,
  Tenma,
  Vaccine,
  Virus,
  DeityEmperor,
  Messian,
  Therian,
  Touki,
  Gaean,
  Meta,
  Ranger,
}

// demon alignment (attribute)
export enum Alignment {
  Light = 0x1,
  Dark = 0x2,
  Neutral = 0x4,
  Law = 0x8,
  Chaos = 0x10,
}

// attribute of spell/effect (not demon)
export enum Attribute {
  Phys = 0x1,
  Magic = 0x2,
  Fire = 0x4,
  Ice = 0x8,
  Electric = 0x10,
  Force = 0x20,
  Psy = 0x40,
  Expel = 0x80,
  Death = 0x100,
  Almighty = 0x200,
  Curse = 0x400,
  Sealing = 0x800,
  Restoration = 0x1000,
  Reflect = 0x2000,
  Paralyze = 0x4000,
}

// the type of item
export enum Categ {
  Tool = 1,
  Electronic,
  Armor,
  Weapon,
  Jewel,
  Talisman,
  Sword,
  Theater,
}

// type of item according to usage
export enum Usage {
  Placed = 1,
  Equipment,
  Consumable,
  Instant,
}

export enum Series {
  Base = 0,
  G = 1000000,
  P = 2000000,
  S = 3000000,
}
