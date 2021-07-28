const electron = require('electron');
const remote = electron.remote;

var buttonMinimize;
var buttonMaximize;
var buttonClose;

function onLoad(){
    buttonMinimize = document.getElementsById('#button-minimize');
    buttonMaximize = document.getElementsById('#button-maximize');
    buttonClose = document.getElementsById('#button-close');
}

buttonMinimize.on('click', () => {
    ipcRenderer.send('minimize', true)
});

buttonMaximize.on('click', () => {
    ipcRenderer.send('maximize', true)
});

buttonClose.on('click', () => {
    window.close();
});