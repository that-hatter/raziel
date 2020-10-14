import { AdvancedMessageContent, Message } from "eris";

export class Paginable {
  private pages: AdvancedMessageContent[];
  private msg?: Message;
  public readonly user?: string;
  public readonly channel?: string;
  public readonly currentPage: number;
  public readonly maxPage: number;
  constructor(pages: AdvancedMessageContent[], user?: string) {
    this.pages = pages;
    this.user = user;
    this.currentPage = 0;
    this.maxPage = pages.length - 1;
  }

  public async switch(n: number): Promise<Message | void> {
    if (this.msg && this.pages[n - 1]) {
      return await this.msg.edit(this.pages[n - 1]);
    }
  }

  public async initialize(msg: Message): Promise<Message | void> {
    this.msg = await msg.channel.createMessage(this.pages[0]);
    return this.msg;
  }
}
