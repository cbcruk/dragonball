const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const url = require('url')
const isDev = require('electron-is-dev')
const { postTemplates } = require('./fetch')

let win

function createWindow() {
  const startUrl = isDev
    ? 'http://localhost:3000'
    : url.format({
        pathname: path.join(__dirname, '../index.html'),
        protocol: 'file:',
        slashes: true
      })

  win = new BrowserWindow({
    width: 900,
    height: 680,
    icon: path.join(__dirname, '../public/icon.png'),
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.setMenu(null)
  win.setTitle('드래곤볼')
  win.loadURL(startUrl)

  if (isDev) {
    win.webContents.openDevTools()
  }

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

ipcMain.handle('post-templates', async (_event, data) => {
  const response = await postTemplates(data)
  return response
})
