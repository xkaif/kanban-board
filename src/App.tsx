import { useState } from 'react';
import { Board, createDefaultBoard } from './models/board';
import { Card } from './models/card';
import { CardForm } from './components/CardForm';

function App() {
  const [board, setBoard] = useState<Board>(() => createDefaultBoard());
  const [isCardFormOpen, setIsCardFormOpen] = useState(false);

  const handleCreateCard = (title: string, description: string, columnId: string) => {
    // Find selected column
    const selectedColumn = board.getColumn(columnId);
    if (!selectedColumn) return;

    // Create new card with status matching column name
    const newCard = new Card(`card-${Date.now()}`, title, {
      description,
      status: selectedColumn.name,
    });

    // Add card to selected column
    selectedColumn.addCard(newCard);

    // Update board state (create new board instance to trigger re-render)
    setBoard(new Board(board.id, board.name, [...board.columns]));
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1 className="sidebar-title">Projects</h1>
        </div>

        <div className="sidebar-board-list">
          <button className="sidebar-board sidebar-board--active">Board 1</button>
          <button className="sidebar-board">Board 2</button>
          <button className="sidebar-board">Board 3</button>
        </div>

        <button className="sidebar-add-board" aria-label="Add board">
          +
        </button>
      </aside>

      <main className="board">
        {board.columns.map((column) => (
          <section key={column.id} className="column">
            <header className="column-header">
              <h2 className="column-title">{column.name}</h2>
            </header>

            <div className="column-body">
              {column.cards.length === 0 ? (
                <article className="card card--placeholder">
                  <h3 className="card-title">Title</h3>
                  <div className="card-badges">
                    <span className="card-badge">Preview Description</span>
                    <span className="card-badge">Status</span>
                  </div>
                </article>
              ) : (
                column.cards.map((card) => (
                  <article key={card.id} className="card">
                    <h3 className="card-title">{card.title}</h3>
                    {card.description && (
                      <p className="card-description">{card.description}</p>
                    )}
                    <div className="card-badges">
                      <span className="card-badge">{card.status}</span>
                    </div>
                  </article>
                ))
              )}
            </div>

            <button
              className="column-add-card"
              aria-label="Add card"
              onClick={() => setIsCardFormOpen(true)}
            >
              +
            </button>
          </section>
        ))}
      </main>

      <CardForm
        isOpen={isCardFormOpen}
        onClose={() => setIsCardFormOpen(false)}
        columns={board.columns}
        onSubmit={handleCreateCard}
      />
    </div>
  );
}

export default App;

