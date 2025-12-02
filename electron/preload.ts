import { contextBridge } from 'electron';

// Expose protected methods that allow the renderer process to use
// the APIs in a safe way
contextBridge.exposeInMainWorld('electronAPI', {
  // Add your safe APIs here
  // Example:
  // getVersion: () => process.versions.electron,
});
