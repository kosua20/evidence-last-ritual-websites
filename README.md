# Evidence The Last Ritual

This repository contains everything needed to complete the game Evidence The Last Ritual without resorting to online walkthroughs or the Internet Archive.

## The restoration project

Following Lexis Numerique foreclosure in 2014 and the end of the In Memoriam Revival Project a few years ago, the second game is not playable anymore: when creating a user it is not possible to receive the email containing the password, and some of the initial puzzles are missing along with many of the websites designed for the game.
This project aims at providing a (relatively) easy to setup solution to all these issues. Everything is setup locally on the user computer, which will run a small local server while the game is launched.

### Goals

This local server has two roles:

* replace the game official server (located at `www.inmemoriamdev.com`) for managing user accounts, recording progress and sending emails
* allow access to all websites providing hints and anwsers to the game puzzles, originally created and hosted by the game developers

The first is achieved not by sending real emails to you, but by providing a fake website where you will be able to read all emails sent by the protagonists (the 'webmail').
The second is achieved by providing redirections from the websites URLs to local restored copies, along with a fake search engine.

Both the webmail and search engine can be accessed from the `www.inmemoriamdev.com` address once everything is setup.

### Compatibility

This project has been tested from the start of the game to the end with:

* the US four CD-ROM version
* the French DVD version

Some data could not be retrieved from the game server or the websites, including:

* Images on `www.castelodosmouros.com`, `www.clairekettley.net`, `www.viagensnotempo.com`
* Videos on `www.phoenix-investigators.org`, `www.smokingbug.com`, `www.xineph.com`
* Parts of websites that were behind a login: `www.losamigosdedante.org`, `www.naadirossem.net`, `www.phoenix-investigators.org`, `www.skl-network.com`
* Missing flash page entitled "Mission" on `www.st-dominic-f.org`
* Blogs are missing secondary pages (unrelevant posts, archives, categories): `www.alcina-cooking.com`, `www.californianbloggers.com`, `www.clairekettley.net`, `www.julie-webzine.net`, `www.theo-makarios.info`
* `www.psykokronik.net` is a complete reconstruction from salvaged bits
* The text messages that the server could send to a user phone number

### Future improvements

* Restore some of the missing websites data mentioned above
* Find someone with a backup of the text messages data
* Some emails are sent to the server with an additional condition (`mail_cond.php`), which the server is ignoring for now
* Support user update/deletion and other game requests (`verif_level_player.php` ?)
* Extend support to the first In Memoriam / Missing Since January game
* Extend support to the first game add-on The 13th Victim

## Setup

* Install a portable Apache/PHP/MySQL server: I have successfully used [UwAmp](https://www.uwamp.com/) for this
* Clone the repository in `UwAmp/www/` directory
* Copy `_config/httpd_uwamp.conf` to `UwAmp/bin/apache/conf/`
* Copy `_config/my_uwamp.ini` to `UwAmp/bin/mysql/`
* Copy `_config/php_uwamp.ini` to `UwAmp/bin/php/phpVersionDir/`
* Add the lines contained in the `_config/hosts` file to your system `hosts` file. If you are not familiar, the hosts file can declare redirections from a website URL to another for all applications on your computer. You can follow this [WikiHow guide](https://www.wikihow.com/Edit-the-Hosts-File-on-Windows) to edit it.

The first time you play:

* Start the UwAmp server
* Launch the game
* Create a new account, specifying a username and a (fake) email address. I recommend using an address of the form username@inmemoriamdev.com, so that opening the 'Mail' shortcut in the game directly opens the project pseudo-webmail page. You can specify whether you are a returning player from the first game or not. Some versions of the game also offered an option for receiving text messages, but note that this will not work.
* Once submitted, click on the button to open the pseudo-webmail at `www.inmemoriamdev.com`. You should have received a first email containing the password to input in the game.
* Log in the game and start playing

Then, each time you want to play the game:

* Start the UwAmp server
* Launch the game
* Check your 'emails' at `www.inmemoriamdev.com` :)

### Notes

The password is also stored in `www/www.inmemoriamdev.com/scriptIM2/password.txt`, and all received game requests are logged in `www/www.inmemoriamdev.com/scriptIM2/log.txt`. The password can also be retrieved from the save file, at `%USER%/Documents/TODO`.

## Special thanks

* [The J Man](https://www.justgamesretro.com/evidence-the-last-ritual-offline-guide) for providing a detailed guide of puzzle answers and links to the corresponding archived websites
* [123Pazu](https://www.youtube.com/@123Pazu) and [FactOfSin](https://www.youtube.com/@FactOfSin) for providing the two only let's play videos of the game on YouTube
* [The Internet Archive](http://archive.org) for hosting copies of some of the websites captured by crawlers
* [hartator](https://github.com/hartator/wayback-machine-downloader) for maintaining an automation tool for recovering websites from the Internet Archive
* [Softbreakers](http://www.softbreakers.com/p/xinephcom.html) for the initial In Memoriam Revival Project




