/**
 * PlexController
 *
 * @description :: Server-side logic for managing Plexes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var request = require("request");

module.exports = {
	RefreshSection : function (req, res) {
    //Extract to config
    var plexIp = "192.168.1.49";
    var plexPort = "32400"
    var plexShowSection = 1;

    var plexRefreshUrl = "http://" + plexIp + ":" + plexPort + "/library/sections/" + plexShowSection + "/refresh";

    request(plexRefreshUrl, function (error, response, body) {
      return res.json({"Success" : true})
    });

  },

  Sections : function (req, res) {
    return res.json({"Method" : "Not implemented"});
  }
};

