var nodeplayerConfig = require('nodeplayer').config;

var defaultConfig = {};

defaultConfig.badVotePercent = 0.51; // remove songs where (downVotes / totalVotes) > this
defaultConfig.songMaxDuration = 8 * 60 * 1000; // max allowed song duration
defaultConfig.setAsRoot = true; // should requests to '/' be redirected to this module?

module.exports = defaultConfig;
