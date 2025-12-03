import { Column } from './column';

export type BoardId = string;

/**
 * Represents one Kanban board (one project).
 */
export class Board {
  public columns: Column[];

  constructor(
    public readonly id: BoardId,
    public name: string,
    columns?: Column[],
  ) {
    this.columns = columns ? [...columns] : [];
  }

  addColumn(column: Column): void {
    this.columns.push(column);
  }

  removeColumn(columnId: string): void {
    this.columns = this.columns.filter((column) => column.id !== columnId);
  }

  getColumn(columnId: string): Column | undefined {
    return this.columns.find((column) => column.id === columnId);
  }
}

/**
 * Creates the initial board with the three default columns.
 *
 * This covers the user story:
 * - "To Do"
 * - "In Progress"
 * - "Done"
 */
export function createDefaultBoard(): Board {
  return new Board('board-1', 'Board 1', [
    new Column('column-todo', 'To Do'),
    new Column('column-in-progress', 'In Progress'),
    new Column('column-done', 'Done'),
  ]);
}

