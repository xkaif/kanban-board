export type CardId = string;

/**
 * Represents a single task/item on the board.
 */
export class Card {
  public description: string;
  public status: string;
  public createdAt: Date;

  constructor(
    public readonly id: CardId,
    public title: string,
    options?: {
      description?: string;
      status?: string;
      createdAt?: Date;
    },
  ) {
    this.description = options?.description ?? '';
    this.status = options?.status ?? 'To Do';
    this.createdAt = options?.createdAt ?? new Date();
  }
}


