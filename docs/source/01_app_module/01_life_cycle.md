# Life Cycle

- Life Cycle details

  - `ready` : When the application initialization completed, this function will be called.
  - `browser-window-created` : When the electron finish to create the window, then call this function.
  - `before-quit` : before the window close.
  - `will-quit` : after window is closed, but before the program thread is closed.
  - `quit` : When the program is closed.

  - `whenReady().then()`: when the app is ready, it will go through this function.
    ```js
    app.whenReady().then(() => {
      const mainWin = new BrowserWindow({
        width: 800,
        height: 600,
      });
      mainWin.loadFile("index.html");
    });
    ```
  - `requestSingleInstanceLock()`: This function is used to limit the number of times an application can be opened. Only can open once! It will return `true` or `false`.
  - `sceond-instance`
