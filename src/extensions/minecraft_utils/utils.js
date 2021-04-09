const log = require('../../util/log');
const Cast = require('../../util/cast');

class MinecraftUtils {

    //  port = "53199";
    port = "14711";
    commandIntervalMsec = 200;
    absoluteStr = 'absolute';
    relativeStr = 'relative';
    host = 'localhost';
    agentEntityID = null;

    constructor() {
    }

    _createWebSocket() {
        return new WebSocket("ws://" + this.host + ":" + this.port);
    }

    setLatestExecuteTIme() {
        this.latestExecuteTime = Date.now();
    }

    async _checkState(ws) {
        await this._checkWebsocketState.bind(this, ws);
        await this._checkExecTime();
    }

    async _checkWebsocketState(ws) {
        return new Promise(((resolve, reject) => {
            if (ws.readyState === WebSocket.CLOSED || ws.readyState === WebSocket.CLOSING) {
                ws = this._createWebSocket(this.host);
                ws.onopen = function (e) {
                    resolve();
                }
                ws.onerror = function (e) {
                    reject();
                }
            } else {
                resolve();
            }
        }));
    }

    async _checkExecTime() {
        const elapsedTime = Date.now() - this.latestExecuteTime;
        if (elapsedTime < this.commandIntervalMsec) {
            await this._sleep(this.commandIntervalMsec - elapsedTime);
        }
    }

    async _sleep(msec) {
        return new Promise(function (resolve) {
            setTimeout(function () { resolve() }, msec);
        })
    }

    /**
     * Create data for a menu in scratch-blocks format, consisting of an array of objects with text and
     * value properties. The text is a translated string, and the value is one-indexed.
     * @param  {object[]} info - An array of info objects each having a name property.
     * @return {array} - An array of objects with text and value properties.
     * @private
     */
    _buildMenu(info) {
        return info.map((entry, index) => {
            const obj = {};
            obj.text = entry.name;
            obj.value = String(index);
            return obj;
        });
    }

    _searchCoordinateMode(args) {
        if (typeof args.STARTX === 'string' && args.STARTX.indexOf('~') !== -1) return this.relativeStr;
        if (typeof args.STARTY === 'string' && args.STARTY.indexOf('~') !== -1) return this.relativeStr;
        if (typeof args.STARTZ === 'string' && args.STARTZ.indexOf('~') !== -1) return this.relativeStr;
        if (typeof args.ENDX === 'string' && args.ENDX.indexOf('~') !== -1) return this.relativeStr;
        if (typeof args.ENDY === 'string' && args.ENDY.indexOf('~') !== -1) return this.relativeStr;
        if (typeof args.ENDZ === 'string' && args.ENDZ.indexOf('~') !== -1) return this.relativeStr;

        return this.absoluteStr;
    }

    async _sendCommand(command, ws) {
        await this._checkState(this.host, ws, this.latestExecuteTime);
        return new Promise(((resolve, reject) => {
            ws.send(command);
            this.latestExecuteTime = Date.now();
            resolve();
            ws.onerror = function (e) {
                this.latestExecuteTime = Date.now();
                reject();
            }.bind(this);
        }).bind(this));
    }

    _convertStartPosToRelative(args) {
        let startRelCoord = new Object();
        startRelCoord.X = typeof args.STARTX === 'string' ? Cast.toNumber(this.posX) + Cast.toNumber(args.STARTX.split('~')[1]) : Cast.toNumber(args.STARTX);
        startRelCoord.Y = typeof args.STARTY === 'string' ? Cast.toNumber(this.posY) + Cast.toNumber(args.STARTY.split('~')[1]) : Cast.toNumber(args.STARTY);
        startRelCoord.Z = typeof args.STARTZ === 'string' ? Cast.toNumber(this.posZ) + Cast.toNumber(args.STARTZ.split('~')[1]) : Cast.toNumber(args.STARTZ);
        return startRelCoord;
    }

    _convertEndPosToRelative(args) {
        let endRelCoord = new Object();
        endRelCoord.X = typeof args.ENDX === 'string' ? Cast.toNumber(this.posX) + Cast.toNumber(args.ENDX.split('~')[1]) : Cast.toNumber(args.ENDX);
        endRelCoord.Y = typeof args.ENDY === 'string' ? Cast.toNumber(this.posY) + Cast.toNumber(args.ENDY.split('~')[1]) : Cast.toNumber(args.ENDY);
        endRelCoord.Z = typeof args.ENDZ === 'string' ? Cast.toNumber(this.posZ) + Cast.toNumber(args.ENDZ.split('~')[1]) : Cast.toNumber(args.ENDZ);
        return endRelCoord;
    }

    setHost(args) {
        this.host = args.TEXT;
    }

}

module.exports = MinecraftUtils;