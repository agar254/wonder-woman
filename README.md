# free-agario-bots
Free open source agar.io normal

## Change Log
New version - v2.0.0
* Bypass recaptcha v3
* Updated FB files
* New vanila userscript - potion hack

## Method Localhost windows
1. Download and extract the 'zip' file
2. Run `Install.bat` and wait for the installation and the window to close.
3. Run `Start.bat` and leave the window open.
4. Go Agario with Ogario or Vanilla extension. (you need [tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl) in chrome installed)
5. Choose the name and number of bots (Do not abuse the server so that people can grow)
6. in the ws it has to be put; `ws://localhost:8083`
7. Click `Connect` and `start bots`
8. Have fun :D

## Method VPS
-------
1. I use Debian GNU/Linux 9 (stretch) from Cloud Google.
2. Run `sudo apt install git` command - then will appear `N/Y` choose `Y`
3. Run `git clone https://github.com/Leon-Agar/NormalBots` command
4. Run `cd NormalBots` command
5. Run `sh install.sh` command - wait for everything to be installed
6. Run `node server` command and leave the process running
7. Go to Agario and place your VPS IP in the `ws` panel and click on the" Connect "button (the ip of vps must have 8083 at the end. example; `ws://12.264.84.94:8083`
8. On the top right of your browser you will see a shield with a red mark, click there and then click on "Load unsafe scripts"
9. After loading agar.io, click on the "Connect" button again, the status should read "Connected" in green.
10. Create a party and make sure you are logged into your agar.io account, then click on the "Start Bots" button, if the VPS IP does not have captcha, the button should turn red and say "Stop Bots" if you get an alert that says the IP has captcha, you must change the IP of VPS in some way to one without captcha
12. To stop bots click the "Stop Bots" button and wait 30 seconds for process to close you will see a countdown there
13. To run the bots again just run `node server`, make sure you "Load unsafe scripts", click "Connect" button and then click "Start Bots" button if you did everything right bots should start again
14. Always make sure you wait the 30 seconds for process to close or you are gonna get captcha on the VPS ip.
