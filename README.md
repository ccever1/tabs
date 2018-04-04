### :point_right: This starter repo has moved to the [ionic-team/starters](https://github.com/ionic-team/starters/tree/master/ionic-angular/official/tabs) repo! :point_left:
安装地址
www.bubuko.com/infodetail-2361551.html



cnpm install -g ionic@3.13.2 
cnpm install -g cordova@6.5.0
ionic cordova platform add android
android manager google play
ionic cordova build android
http://www.jb51.net/diannaojichu/396473.html
keytool -genkey -alias tzky.keystore -keyalg RSA -validity 40000 -keystore tzky.keystore


release-signing.properties
====================================
key.store=tzky.keystore
key.alias=tzky.keystore
key.store.password=11111111
====================================

ionic cordova build android --prod --release
adb kill-server
adb start-server

adb install android-release.apk
