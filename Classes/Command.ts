import { Message } from "eris";
import { Bot } from "./Bot";

export class Command {
  public readonly names: string[];
  private func: (
    args: string[],
    msg: Message,
    client: Bot
  ) => Promise<void | Message>;
  public readonly desc: string[];
  public readonly usage?: string;
  private mod: boolean;
  private admin: boolean;
  private owner: boolean;
  private condition?: (args: string[], msg: Message, client: Bot) => boolean;

  constructor(
    names: string[],
    desc: string[],
    func: (
      args: string[],
      msg: Message,
      client: Bot
    ) => Promise<void | Message>,
    usage?: string,
    condition?: (args: string[], msg: Message, client: Bot) => boolean,
    mod: boolean = false,
    admin: boolean = false,
    owner: boolean = false
  ) {
    this.names = names;
    this.desc = desc;
    this.func = func;
    this.usage = usage;
    this.mod = mod;
    this.admin = admin;
    this.owner = owner;
    this.condition = condition;
  }

  public async exec(args: string[], msg: Message, client: Bot) {
    try {
      if (this.mod && !msg.member?.permission.has("manageMessages")) return;
      if (this.admin && !msg.member?.permission.has("administrator")) return;
      if (this.owner && !client.isOwner(msg.author.id)) return;
      if (this.condition && !this.condition(args, msg, client)) return;
      return await this.func(args, msg, client);
    } catch (err) {
      console.log(err);
    }
  }

  public async showHelp(msg: Message, client: Bot) {
    const label = this.names[0];
    const embedFields = [];

    if (this.usage) {
      embedFields.push({
        name: "Usage:",
        value: `\`${client.prefix + label} ${this.usage}\``,
        inline: false,
      });
    }

    if (this.names.length > 1) {
      const aliases = [...this.names];
      aliases.shift();
      embedFields.push({
        name: "Aliases:",
        value: aliases.map((nm) => `\`${client.prefix + nm}\``).join(", "),
        inline: false,
      });
    }

    return await msg.channel.createMessage({
      embed: {
        color: client.embedColor("help"),
        title: `__${client.prefix + label}__`,
        description: this.desc.join("\n"),
        fields: embedFields,
      },
    });
  }
}
