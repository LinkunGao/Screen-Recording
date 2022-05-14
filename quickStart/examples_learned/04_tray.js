const {
  app,
  BrowserWindow,
  ipcMain,
  Tray,
  Menu,
  nativeImage,
} = require("electron");

const path = require("path");

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

  const image = nativeImage.createFromPath(
    path.join(__dirname, "./icon/icons8.png")
  );
  const tray = new Tray(image.resize({ width: 28, height: 28 }));
  tray.setToolTip("recoding");

  const menu = Menu.buildFromTemplate([
    {
      label: "Quit",
      click: () => {
        console.log("quit");
        app.quit();
      },
    },
  ]);

  tray.setContextMenu(menu);

  mainWin.loadFile("index.html");
  // to open devtool
  mainWin.webContents.openDevTools({ mode: "right" });
  mainWin.once("ready-to-show", () => {
    mainWin.show();
  });
});
