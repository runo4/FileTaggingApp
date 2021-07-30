const { app, Menu, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ 
        width: 1200, 
        height: 900, 
        frame: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    mainWindow.setMinimumSize(1080, 810);

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/html/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // developer tool activated
    mainWindow.webContents.openDevTools();

    Menu.setApplicationMenu(null);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    //////////独自の機能//////////

    //最小化機能
    ipcMain.handle('window-minimize', () => {
        mainWindow.minimize();
    });

    //最大化機能
    let fullScreen = false;
    ipcMain.handle('window-maximize', () => {
        mainWindow.setFullScreen((fullScreen = !fullScreen));
    });

    //閉じる機能
    ipcMain.handle('window-close', () => {
        app.quit();
    })

    /////////独自の機能　ここまで///////////
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});