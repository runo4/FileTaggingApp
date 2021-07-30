// Node.jsの機能は使えないので preload.js で最低限の機能のみ参照できるようにする
// const { ipcRenderer } = require('electron')
const { ipcRenderer } = window.native;