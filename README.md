# fever-iPadMode #

## disclaimer ##
[fever](http://feedafever.com/), its website and all related files are copyright of Shaun Inman.

## how to apply the hack ##

- copy `ipadmode.js` to `/firewall/app/views/default/scripts/`
- in `ipadmode.js` set `im.defaultiPadMode` to `1` for the hack to autoload 
- add the following to `/firewall/app/views/default/reader/header.php`


    `<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js"></script>`
   
 	`<script type="text/javascript" src="firewall/app/views/default/scripts/ipadmode.js?v=<?php e($this->version);?>"></script>`

## how it looks ##
### browser view ###
![browser-mode](http://github.com/niepi/fever-iPadMode/raw/master/browser-mode.png   "browser-mode")


### iPad view ###
![browser-mode](http://github.com/niepi/fever-iPadMode/raw/master/ipad-mode.png   "ipad-mode")

