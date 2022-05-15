"use strict";

import { app, screen } from "electron";
import Launch from "./wins/launch";
import {
  DESIGNE_LAUNCH_WIDTH,
  DESIGNE_LAUNCH_HEIGHT,
  BASE_WIN_WIDTH,
  BASE_WIN_HEIGHT,
} from "./utils/constant";

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  const rect = screen.getPrimaryDisplay().bounds;
  const launchW = (rect.width / BASE_WIN_WIDTH) * DESIGNE_LAUNCH_WIDTH;
  const launchH = (rect.height / BASE_WIN_HEIGHT) * DESIGNE_LAUNCH_HEIGHT;

  const LaunchPage = new Launch({
    width: launchW,
    height: launchH,
  });

  LaunchPage.on("show", () => {
    console.log("start ....");
  });
});
