import { useState } from 'react';
import { Board, createDefaultBoard } from './models/board';

function App() {
  const [board] = useState<Board>(() => createDefaultBoard());

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
              {/* Placeholder card matching the wireframe idea */}
              <article className="card card--placeholder">
                <h3 className="card-title">Title</h3>
                <div className="card-badges">
                  <span className="card-badge">Preview Description</span>
                  <span className="card-badge">Status</span>
                </div>
              </article>
            </div>

            <button className="column-add-card" aria-label="Add card">
              +
            </button>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;

