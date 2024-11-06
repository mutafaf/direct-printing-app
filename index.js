const { app, BrowserWindow } = require('electron');
const { ipcMain } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // Optional for additional customization
            nodeIntegration: true, // Allow Node.js integration
            contextIsolation: false
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

ipcMain.on('print-content', (event) => {
    const win = BrowserWindow.getFocusedWindow(); // Get the current window

    // Print without dialog (silent mode)
    win.webContents.print({ silent: true, printBackground: true }, (success, errorType) => {
        if (!success) console.log(errorType);
        console.log("Print job sent successfully.");
    });
});