import { useState, FormEvent } from 'react';
import type { Column } from '../models/column';

interface CardFormProps {
  isOpen: boolean;
  onClose: () => void;
  columns: Column[];
  onSubmit: (title: string, description: string, columnId: string) => void;
}

export function CardForm({ isOpen, onClose, columns, onSubmit }: CardFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedColumnId, setSelectedColumnId] = useState<string>(
    columns.length > 0 ? columns[0].id : ''
  );

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim() && selectedColumnId) {
      onSubmit(title.trim(), description.trim(), selectedColumnId);
      setTitle('');
      setDescription('');
      setSelectedColumnId(columns.length > 0 ? columns[0].id : '');
      onClose();
    }
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setSelectedColumnId(columns.length > 0 ? columns[0].id : '');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleCancel}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Neue Karte erstellen</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="card-title">Titel *</label>
            <input
              id="card-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Kartentitel eingeben"
              required
              autoFocus
            />
          </div>
          <div className="form-group">
            <label htmlFor="card-description">Beschreibung</label>
            <textarea
              id="card-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Beschreibung eingeben (optional)"
              rows={3}
            />
          </div>
          <div className="form-group">
            <label htmlFor="card-status">Status *</label>
            <select
              id="card-status"
              value={selectedColumnId}
              onChange={(e) => setSelectedColumnId(e.target.value)}
              required
            >
              {columns.map((column) => (
                <option key={column.id} value={column.id}>
                  {column.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-actions">
            <button type="button" onClick={handleCancel}>
              Abbrechen
            </button>
            <button type="submit">Erstellen</button>
          </div>
        </form>
      </div>
    </div>
  );
}

