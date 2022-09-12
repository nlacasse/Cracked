'use strict';

if (process.argv.length < 3) {
	console.log("please provide js file");
	return;
}

const fs = require('fs');
const path = require('path');
const scriptPath = path.join(__dirname,process.argv[2]);

const electron = require('electron');
const electronReload = require('electron-reload')(scriptPath)
const app = electron.app;  // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.
var monode = require('monode')();
global.monome_device = null;

monode.on('device', function(device) {
    if(device) {
        global.monome_device = device;
        console.log("monome device connected:", device);

        //tbd-make this configurable
        device.rotation = 180;
    }
});

monode.on('disconnect', function(device){
    global.monome_device = null;
    console.log('A device was disconnected:', device);
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
	var options = {width: 800, height: 600, webPreferences:{webSecurity:false, nodeIntegration: true, enableRemoteModule: true, contextIsolation:false}};

	// Create the browser window.
	var win = new BrowserWindow(options);
	win.webContents.openDevTools()

	// and load the index.html of the app.
	win.loadURL('file://' + __dirname + '/index-headless.html');

	win.webContents.on('dom-ready', () => {
		const src = fs.readFileSync(scriptPath);
		win.webContents.executeJavaScript(src).catch((error) => {
			//console.log(error);
		});
	});


	// Open the DevTools.
	//win.webContents.openDevTools();
});
