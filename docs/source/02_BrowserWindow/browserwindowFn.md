# Browser Window Object

We can use `new BrowserWindow({})` to create our app window, and we can specify the window's width and height.

- `loadFile` : it is used to load local file, we can use relative path and absolute path. It is not only can load the file that is belong to this project, also can load the file is out side of the project root folder.

  ```js
  app.on("ready", () => {
    const mainWin = new BrowserWindow({
      width: 800,
      height: 600,
      frame: false, //default is true, to config whether the app need the outside border/frame
      resizabale: false, // default is true, Specify whether the user can change the window size
      show: false, // default is true, config the window is display or not.
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
    });
    mainWin.loadFile("./index.html");
    mainWin.once("ready-to-show", () => {
      // At is stage to show the window, it is can save us time to open the app
      mainWin.show();
    });
  });
  ```

  - The `loadFile` function not only can load `html` file, but also can load other types file. But recommand to load `html` file.

- `loadURL`: It is used to load a remote file.
  ```js
  mainWin.loadFile("http://www.google.com");
  ```
- `maxWidth, maxHeight, minWidth, minHeight`
  ```js
  const mainWin = new BrowserWindow({
    width: 800,
    height: 600,
    maxWidth: 1000,
    maxHeight: 800,
    minWidth: 600,
    minHeight: 400,
  });
  ```
- `show()` : to control the window display.
- `webPreferences:{}`: to config node environment in web.
- `setBounds()` : to setup where to display the app on screen.

```js
mainWin.setBounds({
  x: 500,
  y: 300,
});
```

- `show`:

```js
mainWin.on("show", () => {
  mainWin.maximize();
  //minimize()
  //close()
});
```
