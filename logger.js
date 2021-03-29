require("colour");

const Logger = {
    prefix: {
        i: 'INFO: '.green,
        w: 'WARN:'.yellow,
        e: 'ERROR:'.red
    },

    __: function(prefix, msg) {

        console.log(prefix + " " + new Date().toISOString() + " " + msg.white.bold);
    },

    error: function() {
        let msg = "";

        for (let i in arguments) {
            msg += arguments[i] + " ";
        }

        Logger.__(Logger.prefix.e, msg);
    },

    warn: function() {
        let msg = "";

        for (let i in arguments) {
            msg += arguments[i] + " ";
        }

        Logger.__(Logger.prefix.w, msg);
    },

    info: function() {
        let msg = "";

        for (let i in arguments) {
            msg += arguments[i] + " ";
        }

        Logger.__(Logger.prefix.i, msg);
    }

};
module.exports = Logger;
