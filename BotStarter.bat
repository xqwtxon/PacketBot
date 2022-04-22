@echo off
TITLE PacketBot for Packet Client
:: You cant say .env is missing! That is important file dumbass...
if exist ".env" ( 
	set env=".env"
	goto MODULES
	pause>nul|(echo [PRESS ANY KEY TO EXIT])
) else (
	echo .env Not found? :(
	echo Redownload it, or clone project again...
	pause>nul|(echo [PRESS ANY KEY TO EXIT])
)
:: Bruh install nodejs and install packages!
:MODULES
if exist "node_modules/" (
	set modules="node_modules"
	goto START
) else (
	if exist "C:\Program Files\nodejs\" (
		npm i
		npm init -y :: if packages.json is missing
	) else (
		echo Hey, Install NodeJs before running this.
		echo https://nodejs.org/en/download/
		pause>nul|(echo [PRESS ANY KEY TO EXIT])
	)
)
:: Fuck ur ass, Main will should exist... 
:START
if exist "PacketBot.js" (
	node .
) else (
	echo PacketBot.js Not found? :(
	echo Redownload it, or clone project again...
	pause>nul|(echo [PRESS ANY KEY TO EXIT])
)