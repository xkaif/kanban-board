export type BoardId = string;
export type ColumnId = string;

export interface Column {
  id: ColumnId;
  title: string;
}

export interface Board {
  id: BoardId;
  name: string;
  columns: Column[];
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
  return {
    id: 'board-1',
    name: 'Board 1',
    columns: [
      { id: 'column-todo', title: 'To Do' },
      { id: 'column-in-progress', title: 'In Progress' },
      { id: 'column-done', title: 'Done' },
    ],
  };
}


