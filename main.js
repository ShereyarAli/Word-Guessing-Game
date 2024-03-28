
console.log("hi")
const electron = require("electron");
const app = electron.app;
const browserWindow = electron.BrowserWindow;
const path  = require("path");
const url = require("url");

let win;

function createWindow(){
  win = new browserWindow();
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }));
  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null;
  })
}

app.on('ready', createWindow);