const { app, BrowserWindow } = require("electron");

app.on("ready", () => {
  const mainWin = new BrowserWindow({
    width: 800,
    height: 600,
  });
  mainWin.loadFile("index.html");
});
