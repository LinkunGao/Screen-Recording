# Introduce Electron

- Development Environment

  - node
  - vscode

- Global Install

  ```bash
      npm install -g electron
  ```

- Local Install (recommand)

  ```bash
      npm install --save-dev eletron@18.0.3
  ```

- Initial first electron App

  ```js
  const { app, BrowserWindow } = require("electron");
  app.on("ready", () => {
    const mainWin = new BrowserWindow({
      width: 800,
      height: 600,
    });
    mainWin.loadFile("index.html");
  });
  ```

  - Then create a index.html file in the root folder.

  - In package.json
    ```json
    {
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "electron ."
      }
    }
    ```
