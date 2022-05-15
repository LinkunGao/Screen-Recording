# Tray Intro

This is a system tray to enable the addition of icons and contexts to the system notification area.

It is running in main process. (`EventEmitter`)

```js
    const {app, Menu, Tray} = require('electron');

    let tray = null;
    app.whenReady().then(()=>{
        tray = new Tray('/path/to/my/icon');
        const contextMenu = Menu.buildFromTemplate([
            {label:'Item1',type:'radio'}
            {label:'Item2',type:'radio'}
            {label:'Item3',type:'radio',checked:true}
            {label:'Item4',type:'radio', click:()=>{
                console.log("hello")
            }}
        ]);
        tray.setToolTip('This is my application');
        tray.setContextMenu(contextMenu);
    })
```

We also can resize the icon.

```js
const { app, BrowserWindow, Tray, Menu, nativeImage } = require("electron");

const path = require("path");
let mainWin;
app.on("ready", () => {
  mainWin = new BrowserWindow({
    width: 800,
    height: 600,
  });

  const image = nativeImage.createFromPath(
    path.join(__dirname, "./icon/icons8-air-play-48.png")
  );
  const tray = new Tray(image.resize({ width: 24, height: 24 }));

  tray.setToolTip("recoding");

  mainWin.loadFile("index.html");
```
