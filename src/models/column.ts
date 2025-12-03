import type { Card } from './card';

export type ColumnId = string;

/**
 * Represents one column within a board (e.g. "To Do", "In Progress", "Done").
 */
export class Column {
  public cards: Card[];

  constructor(
    public readonly id: ColumnId,
    public name: string,
    cards?: Card[],
  ) {
    this.cards = cards ? [...cards] : [];
  }

  addCard(card: Card): void {
    this.cards.push(card);
  }

  removeCard(cardId: string): void {
    this.cards = this.cards.filter((card) => card.id !== cardId);
  }

  moveCard(cardId: string, targetIndex: number): void {
    const index = this.cards.findIndex((card) => card.id === cardId);
    if (index === -1) return;

    const [card] = this.cards.splice(index, 1);
    const safeIndex = Math.max(0, Math.min(targetIndex, this.cards.length));
    this.cards.splice(safeIndex, 0, card);
  }
}


