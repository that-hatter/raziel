import Fuse from "fuse.js";
import { AdvancedMessageContent, Message } from "eris";
import { Bot } from "./Bot";
import { Card } from "./Card";

export class Pile {
  private cards: Card[];
  private fuse?: Fuse<Card>;

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  public get size(): number {
    return this.cards.length;
  }

  public get first(): Card | undefined {
    return this.cards[0];
  }

  public get clone(): Pile {
    return new Pile(this.cards);
  }

  public filter(func: (c: Card) => boolean): Pile {
    return new Pile(this.cards.filter(func));
  }

  public getCardWithSerial(serial: string): Card | undefined {
    for (const c of this.cards) {
      if (c.isSerial(serial)) return c;
    }
  }

  public getMatchList(query: string): Pile {
    if (!this.fuse) this.fuse = new Fuse(this.cards, { keys: ["name"] });
    return new Pile(this.fuse.search(query).map((f) => f.item));
  }

  public getExactsOrFuzzies(query: string): Pile {
    const smatch = this.getCardWithSerial(query);
    if (smatch) return new Pile([smatch]);
    const nmatches = this.getMatchList(query);
    return nmatches.first && nmatches.first.name.toLowerCase() == query
      ? nmatches.filter((m) => m.name == nmatches.first?.name)
      : nmatches;
  }

  public async display(msg: Message, bot: Bot): Promise<Message | void> {
    const pages: AdvancedMessageContent[] = [];
    const maxPage = Math.ceil(this.size / 10);

    for (let i = 0, p = 1, str = ""; i < this.size; i++) {
      const c = this.cards[i];
      str += " ".repeat(5 - c.serial.length) + c.serial + "| " + c.name + "\n";

      if (i % 10 == 9 || i == this.size - 1) {
        pages.push({
          embed: {
            title: this.size + " possible matches.",
            description: "```\n" + str + "```",
            footer: {
              text: "Page " + p + " of " + maxPage,
            },
          },
        });
        str = "";
        p++;
      }
    }

    return await bot.addPaginable(msg, pages);
  }
}
