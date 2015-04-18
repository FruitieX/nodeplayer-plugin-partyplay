nodeplayer-plugin-partyplay
===========================

[![Build Status](https://travis-ci.org/FruitieX/nodeplayer-plugin-partyplay.svg?branch=master)](https://travis-ci.org/FruitieX/nodeplayer-plugin-partyplay)

Web-based party playlist manager for nodeplayer

Setup
-----

1. Enable the `partyplay` module after `express`, `socketio` and `rest` in `core.json`
2. It is highly advicable to setup the `plugin-verifymac` module to prevent clients from
   tampering with song data
3. Partyplay can be accessed from `http(s)://yourdomain/partyplay` or if you're using `setAsRoot`
   in the `plugin-partyplay.json` config file: `http(s)://yourdomain`
4. Additionally, read the below notes on REST API paths

### Custom REST API paths

The partyplay module adds the following custom REST API paths,
make sure they are publicly accessible (they should be unless you've configured otherwise):

- `/api/partyplay/append` - custom song queueing that only allows appending song to end of queue
- `/api/partyplay/vote` - API path for song votes

Additionally, make sure the following REST API paths are publicly accessible
(ie. if you have enabled the `plugin-passport` module, remove them from `protectedPaths` in
the `plugin-passport.json` config file):

- `/search`
