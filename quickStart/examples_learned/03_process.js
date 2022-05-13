const { app, BrowserWindow, ipcMain } = require("electron");

const path = require("path");
const fs = require("fs");
const url = path.resolve("root", "resource");

console.log(fs.existsSync(url));

ipcMain.on("renderer-send", (event, data) => {
  console.log(data);
  event.reply("main-send", "I've already received your message!");
});
let mainWin;
app.on("ready", () => {
  mainWin = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWin.loadFile("index.html");
  // to open devtool
  mainWin.webContents.openDevTools({ mode: "right" });
  mainWin.once("ready-to-show", () => {
    mainWin.show();
  });
});

ipcMain.on("move-application", (event, data) => {
  mainWin && mainWin.setPosition(data.posX, data.posY);
});
