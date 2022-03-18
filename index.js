const { app, BrowserWindow, globalShortcut } = require("electron");
const path = require("path");


const loadMainWindow = () => {
    const mainWindow = new BrowserWindow({
        width : 1200,
        height: 800,
		transparent: true,
		fullscreen: true,
		frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.setResizable(false);
    mainWindow.loadFile(path.join(__dirname, "index.html"));
}

app.on("ready", loadMainWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        loadMainWindow();
    }
});

app.on('browser-window-focus', function () {
    globalShortcut.register("CommandOrControl+Alt+Delete", () => {});
	globalShortcut.register("Alt+F4", () => {});
});