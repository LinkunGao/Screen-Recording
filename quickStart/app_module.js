const { app, BrowserWindow } = require("electron");

app.on("quit", () => {
  console.log("quit");
});

app.on("before-quit", () => {
  console.log("before-quit");
});

app.on("will-quit", () => {
  console.log("will-quit");
});

app.on("browser-window-created", () => {
  console.log("browser-window-created");
});

app.on("ready", () => {
  console.log("ready");
});

app.whenReady().then(() => {
  const mainWin = new BrowserWindow({
    width: 800,
    height: 600,
  });
  mainWin.loadFile("index.html");
});
