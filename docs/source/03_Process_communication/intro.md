# Process communication details

- Main Process

  - run in nodejs environment.
    so we can run all nodejs API.

  ```js
  const path = require("path");
  const fs = require("fs");
  const url = path.resolve("root", "resource");
  console.log(fs.existsSync(url));
  ```

- Render Process
  Js files related to index.html

  - when we create a browserwindow(), it will create a render process for us. Usually, it will not share data(context) with main process, but in a real dev project, we need it to share the conetxt.

    ```js
    app.on("ready", () => {
    const mainWin = new BrowserWindow({
      width: 800,
      height: 600,

      webPreferences: {
        nodeIntegration: true,
        // this is to open the context for render and main process
        contextIsolation: false,
      },
    });
    mainWin.loadFile("./index.html");
    ```

- Communication between processes

  - Using `IPC` communicate

    - `ipcMain` is a module comes from main process
      to deal with the data sent by render process.

      ```js
      const { app, BrowserWindow, ipcMain } = require("electron");

      const path = require("path");
      const fs = require("fs");
      const url = path.resolve("root", "resource");

      console.log(fs.existsSync(url));

      // receive data here
      ipcMain.on("renderer-send", (event, data) => {
        console.log(data);
        // replay the message
        event.reply("main-send", "I've already received your message!");
      });

      app.on("ready", () => {
        const mainWin = new BrowserWindow({
          width: 800,
          height: 600,
          webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
          },
        });
        mainWin.loadFile("index.html");
      });
      ```

    - `ipcRenderer` is a module comes from render process
      to deal with the data sent by main process.

      ```html
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=p, initial-scale=1.0" />
          <title>Document</title>
        </head>
        <body>
          <p>hello</p>
          <button class="btn">Click</button>

          <script>
            // send message
            const { ipcRenderer } = require("electron");
            document.querySelector(".btn").addEventListener("click", () => {
              ipcRenderer.send(
                "renderer-send",
                "this message is coming from render process"
              );
            });
            ipcRenderer.on("main-send", (event, data) => {
              console.log(data);
            });
          </script>
        </body>
      </html>
      ```

      - open dev tool

      ```js
      mainWin.webContents.openDevTools({ mode: "right" });
      mainWindow.webContents.openDevTools({ mode: "bottom" });
      mainWindow.webContents.openDevTools({ mode: "left" });
      mainWindow.webContents.openDevTools({ mode: "undocked" });
      ```

      - close dev tool

      ```js
      mainWindow.webContents.closeDevTools();
      ```
