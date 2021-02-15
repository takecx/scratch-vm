// import { Rcon } from 'rcon-client'

const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');

class Scratch3Minecraft {

    constructor(runtime) {
        this.runtime = runtime;

        this.webSocket = null;
        this.host = 'localhost';
    }

    getInfo() {
        return {
            id: 'Minecraft',
            name: 'Minecraft',
            blocks: [
                {
                    opcode: 'setHost',
                    blockType: BlockType.COMMAND,
                    text: '[TEXT]に接続する',
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'localhost'
                        }
                    }
                },
                {
                    opcode: 'chat',
                    blockType: BlockType.COMMAND,
                    text: '[TEXT]と言う',
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'hello'
                        }
                    }
                }
            ],
            menus: {
            }
        };
    }
    // e.currentTarget.send("world.setBlocks(1,1,1,2,2,2,98)");
    // e.currentTarget.send("world.getPlayerId()");
    // e.currentTarget.send("getPos(1)");

    setHost(args) {
        this.host = args.TEXT;
    }

    sendCommand(commands) {
        log.log(this.webSocket);
        if (this.webSocket === null || this.webSocket.readyState === 3) {
            this.webSocket = new WebSocket("ws://" + this.host + ":14711");
            this.webSocket.onopen = function (e) {
                log.log('onopen !!');
                log.log(e);
                commands.forEach(command => {
                    e.currentTarget.send(command);
                });
                e.currentTarget.close();
            }
            this.webSocket.onmessage = function (e) {
                log.log('onmessage !!');
                log.log(e);
                e.currentTarget.close();
            }
            this.webSocket.onclose = function (e) {
                log.log('onclose !!');
                log.log(e);
                // e.currentTarget = null;
            };
            this.webSocket.onerror = function (e) {
                log.log('onerror !!');
                log.log(e);
            };
        }
    }

    chat(args) {
        const command = ["chat.post(" + args.TEXT + ")"];
        this.sendCommand(command);
    }
}

module.exports = Scratch3Minecraft;
