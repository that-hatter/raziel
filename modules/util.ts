import { MagSet } from "../Classes/Card";
import { Attribute } from "./enums";
import * as strings from "./strings";

const attributeArray = [
  Attribute.Phys,
  Attribute.Magic,
  Attribute.Fire,
  Attribute.Ice,
  Attribute.Electric,
  Attribute.Force,
  Attribute.Psy,
  Attribute.Expel,
  Attribute.Death,
  Attribute.Almighty,
  Attribute.Curse,
  Attribute.Sealing,
  Attribute.Restoration,
  Attribute.Reflect,
  Attribute.Paralyze,
];

export const attributeString = (atts: number): string => {
  const matches = [];
  for (const att of attributeArray) {
    if ((atts & att) == att) matches.push(strings.attributes[att]);
  }
  return matches.length > 0 ? matches.join(", ") : "[None]";
};

export const magsetString = (mags: MagSet): string => {
  let str = "";
  if (mags.light > 0) str += `Light ${mags.light} `;
  if (mags.dark > 0) str += `Dark ${mags.dark} `;
  if (mags.law > 0) str += `Law ${mags.law} `;
  if (mags.chaos > 0) str += `Chaos ${mags.chaos} `;
  if (mags.neutral > 0) {
    if (str.length > 0) str = str.substr(0, str.length - 1) + "/";
    str += String(mags.neutral);
  }
  return str;
};
