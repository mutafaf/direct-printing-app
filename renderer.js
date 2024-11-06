const { ipcRenderer } = require('electron');

document.getElementById('print').addEventListener('click', () => {
    ipcRenderer.send('print-content');
});
