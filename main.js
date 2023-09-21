// 引入node的 path 和url模块
<<<<<<< HEAD
const path = require('path')
const url = require('url');
// 获取在 package.json 中的命令脚本传入的参数，来判断是开发还是生产环境
const mode = process.argv[2];

const { app, BrowserWindow, Menu } = require('electron');
=======
const path = require("path");
const url = require("url");
// 获取在 package.json 中的命令脚本传入的参数，来判断是开发还是生产环境
const mode = process.argv[2];

const { app, BrowserWindow, Menu } = require("electron");
>>>>>>> 5fa98031565d58c7b20cde812e14acb37bee1553
Menu.setApplicationMenu(null);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
<<<<<<< HEAD
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      contextIsolation: false,
    }
  })

  // win.loadFile('index.html')

  win.webContents.openDevTools({
    mode: "right"
  })

  if (mode === 'dev') {
    win.loadURL("http://localhost:3000/")
  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, './build/index.html'),
      protocol: 'file:',
      slashes: true
    }))
=======
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      contextIsolation: false,
    },
  });

  // win.loadFile('index.html')

  if (mode === "dev") {
    win.webContents.openDevTools({
      mode: "right",
    });
    win.loadURL("http://localhost:3000/");
  } else {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, "./build/index.html"),
        protocol: "file:",
        slashes: true,
      })
    );
>>>>>>> 5fa98031565d58c7b20cde812e14acb37bee1553
  }
}

app.whenReady().then(() => {
<<<<<<< HEAD
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
=======
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
>>>>>>> 5fa98031565d58c7b20cde812e14acb37bee1553
