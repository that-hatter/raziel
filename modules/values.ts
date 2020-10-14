import {
  Role,
  Type,
  Gender,
  Fusion,
  Race,
  Alignment,
  Attribute,
  Categ,
  Series,
  Usage,
} from "./enums";

type StringToValue = { [k: string]: number };

export const roles: StringToValue = {
  demon: Role.Demon,
  partner: Role.Partner,
  spell: Role.Spell,
  item: Role.Item,
};

export const types: StringToValue = {
  grounded: Type.Grounded,
  flying: Type.Flying,
};

export const genders: StringToValue = {
  male: Gender.Male,
  female: Gender.Female,
};

export const fusions: StringToValue = {
  normal: Fusion.Normal,
  "double-fused": Fusion.Double,
  "tri-fused": Fusion.Triple,
};

export const races: StringToValue = {
  deity: Race.Deity,
  megami: Race.Megami,
  herald: Race.Herald,
  avian: Race.Avian,
  tree: Race.Tree,
  genma: Race.Genma,
  avatar: Race.Avatar,
  holy: Race.Holy,
  enigma: Race.Enigma,
  hero: Race.Hero,
  fury: Race.Fury,
  lady: Race.Lady,
  kishin: Race.Kishin,
  dragon: Race.Dragon,
  divine: Race.Divine,
  flight: Race.Flight,
  yoma: Race.Yoma,
  fairy: Race.Fairy,
  snake: Race.Snake,
  beast: Race.Beast,
  jirae: Race.Jirae,
  night: Race.Night,
  fallen: Race.Fallen,
  brute: Race.Brute,
  femme: Race.Femme,
  vile: Race.Vile,
  raptor: Race.Raptor,
  wood: Race.Wood,
  reaper: Race.Reaper,
  wilder: Race.Wilder,
  jaki: Race.Jaki,
  undead: Race.Undead,
  vermin: Race.Vermin,
  tyrant: Race.Tyrant,
  drake: Race.Drake,
  haunt: Race.Haunt,
  spirit: Race.Spirit,
  foul: Race.Foul,
  entity: Race.Entity,
  zealot: Race.Zealot,
  general: Race.General,
  uma: Race.Uma,
  zoma: Race.Zoma,
  rumor: Race.Rumor,
  element: Race.Element,
  godly: Race.Godly,
  ghost: Race.Ghost,
  cyber: Race.Cyber,
  amatsu: Race.Amatsu,
  mitama: Race.Mitama,
  kunitsu: Race.Kunitsu,
  machine: Race.Machine,
  fiend: Race.Fiend,
  great: Race.Great,
  kohi: Race.Kohi,
  shinshou: Race.Shinshou,
  tenma: Race.Tenma,
  vaccine: Race.Vaccine,
  virus: Race.Virus,
  "deity emperor": Race.DeityEmperor,
  messian: Race.Messian,
  therian: Race.Therian,
  touki: Race.Touki,
  gaean: Race.Gaean,
  meta: Race.Meta,
  ranger: Race.Ranger,
};

export const alignments: StringToValue = {
  light: Alignment.Light,
  dark: Alignment.Dark,
  neutral: Alignment.Neutral,
  law: Alignment.Law,
  chaos: Alignment.Chaos,
};

export const attributes: StringToValue = {
  phys: Attribute.Phys,
  magic: Attribute.Magic,
  fire: Attribute.Fire,
  ice: Attribute.Ice,
  electric: Attribute.Electric,
  force: Attribute.Force,
  psy: Attribute.Psy,
  expel: Attribute.Expel,
  death: Attribute.Death,
  almighty: Attribute.Almighty,
  curse: Attribute.Curse,
  sealing: Attribute.Sealing,
  restoration: Attribute.Restoration,
  reflect: Attribute.Reflect,
  paralyze: Attribute.Paralyze,
};

export const categs: StringToValue = {
  tool: Categ.Tool,
  electronic: Categ.Electronic,
  armor: Categ.Armor,
  weapon: Categ.Weapon,
  jewel: Categ.Jewel,
  talisman: Categ.Talisman,
  sword: Categ.Sword,
  "vr theater": Categ.Theater,
};

export const usages: StringToValue = {
  placed: Usage.Placed,
  equipment: Usage.Equipment,
  consumable: Usage.Consumable,
  instant: Usage.Instant,
};

export const series: StringToValue = {
  base: Series.Base,
  G: Series.G,
  P: Series.P,
  S: Series.S,
};
