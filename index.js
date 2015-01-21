/**
 * Support additional XML response type
 * @link https://github.com/wankdanker/node-object-to-xml
 */
module.exports.extension = function() {
    "use strict";

    var xml = require('object-to-xml');

    twee.getApplication().use(function(req, res, next){
        res.xml = function(variables) {
            res.set('Content-Type', 'text/xml');
            res.send(xml({'?xml version="1.0" encoding="utf-8"?' : null, response: variables}));
        };

        next();
    });
};
