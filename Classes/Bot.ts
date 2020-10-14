import { token, prefix, colors, owners } from "../config.json";
import { AdvancedMessageContent, Client, Message } from "eris";
import { Command } from "./Command";
import { commands } from "../commands";
import { Paginable } from "./Paginable";

export class Bot extends Client {
  public readonly prefix: string;
  private commands: Command[];
  public readonly paginables: { [key: string]: Paginable };

  constructor() {
    super(token);
    this.prefix = prefix;
    this.commands = commands;
    this.paginables = {};
  }

  public embedColor(str: string): number {
    return Number(colors[str as keyof typeof colors] || 0x808080);
  }

  public findCommand(name: string): Command | void {
    for (const cmd of this.commands) {
      for (const nm of cmd.names) {
        if (nm == name) return cmd;
      }
    }
  }

  public isOwner(id: string): boolean {
    return (owners as string[]).includes(id);
  }

  public async addPaginable(
    msg: Message,
    pages: AdvancedMessageContent[],
    user?: boolean
  ): Promise<Message | void> {
    const pg = user
      ? new Paginable(pages, msg.author.id)
      : new Paginable(pages);
    this.paginables[msg.channel.id] = pg;
    return await pg.initialize(msg);
  }
}
