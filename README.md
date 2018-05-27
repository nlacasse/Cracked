# README #

App version of ["I Dropped My Phone The Screen Cracked"](https://github.com/billorcutt/i_dropped_my_phone_the_screen_cracked)

Download the app for [Mac OS](https://github.com/billorcutt/Cracked/releases/download/0.1.5/Cracked.dmg) or
[Linux](https://github.com/billorcutt/Cracked/releases/download/0.1.5-Linux/Cracked-linux-x64.tar.gz).

Or build it yourself using Node JS v8.9.3

```bash
npm install

# to run---
./node_modules/.bin/electron . 

# to package for Mac
./node_modules/electron-packager/cli.js . Cracked --platform=darwin --arch=x64 --icon=./cracked.icns --overwrite

# to package for Linux
./node_modules/electron-packager/cli.js . Cracked --platform=linux --arch=x64 --icon=./cracked.icns --overwrite

# build installer for Mac
./node_modules/electron-installer-dmg/bin/electron-installer-dmg.js --overwrite Cracked-darwin-x64/Cracked.app Cracked --out=Installers/
```
