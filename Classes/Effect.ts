export class Effect {
  public readonly text: string;

  constructor(text: string) {
    this.text = text;
  }
}

export class Ability extends Effect {
  public readonly name: string;

  constructor(text: string, name: string) {
    super(text);
    this.name = name;
  }
}
