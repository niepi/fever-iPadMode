# fever-iPadMode #

## disclaimer ##
[fever][id], its website and all related files are copyright of Shaun Inman.

## how to apply the hack ##

- copy ipad-mode.js to `/firewall/app/views/default/scripts/`
- add the following to `/firewall/app/views/default/reader/header.php`

    `<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js"></script>`
   
     `<script type="text/javascript" src="firewall/app/views/default/scripts/ipadmode.js?v=<?php e($this->version);?>"></script>`

## how it looks ##

### standard browser view ###

[browser-mode]: http://github.com/niepi/fever-iPadMode/raw/master/img/browser-mode.png   "browser-mode"


### iPad view ###
[browser-mode]: http://github.com/niepi/fever-iPadMode/raw/master/img/ipad-mode.png   "ipad-mode"



## links

[id]: http://feedafever.com/ "fever"

