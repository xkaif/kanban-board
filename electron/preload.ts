import { contextBridge } from 'electron';

// Expose protected methods that allow the renderer process to use
// the APIs in a safe way
// Note: This is a placeholder. Storage APIs (loadBoards, saveBoards) will be added here.
contextBridge.exposeInMainWorld('api', {
  // Add your safe APIs here
  // Example:
  // getVersion: () => process.versions.electron,
  // loadBoards: () => ipcRenderer.invoke('load-boards'),
  // saveBoards: (boards: Board[]) => ipcRenderer.invoke('save-boards', boards),
});
