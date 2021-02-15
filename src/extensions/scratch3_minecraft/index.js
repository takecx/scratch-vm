// import { Rcon } from 'rcon-client'

const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');

class Scratch3Minecraft {

    constructor(runtime) {
        this.runtime = runtime;

        this.ws1 = null;
        this.ws2 = null;
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
                },
                {
                    opcode: 'getPlayerPosition',
                    blockType: BlockType.COMMAND,
                    text: '現在位置を調べる'
                },
                {
                    opcode: 'getPosX',
                    text: 'X',
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'getPosY',
                    text: 'Y',
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'getPosZ',
                    text: 'Z',
                    blockType: BlockType.REPORTER
                }


            ],
            menus: {
            }
        };
    }

    getPosX() {
        const stage = this.runtime.getTargetForStage();
        if (stage) {
            return stage.posX;
        }
        return 0;
    }
    getPosY() {
        const stage = this.runtime.getTargetForStage();
        if (stage) {
            return stage.posY;
        }
        return 0;
    }
    getPosZ() {
        const stage = this.runtime.getTargetForStage();
        if (stage) {
            return stage.posZ;
        }
        return 0;
    }

    setHost(args) {
        this.host = args.TEXT;
    }

    sendCommand(commands) {
        if (this.ws1 === null || this.ws1.readyState === 3) {
            this.ws1 = new WebSocket("ws://" + this.host + ":14711");
            this.ws1.onopen = function (e) {
                log.log('onopen !!');
                log.log(e);
                commands.forEach(command => {
                    e.currentTarget.send(command);
                });
                e.currentTarget.close();
            }
            this.ws1.onmessage = function (e) {
                log.log('onmessage !!');
                log.log(e);
                e.currentTarget.close();
            }
            this.ws1.onclose = function (e) {
                log.log('onclose !!');
                log.log(e);
                // e.currentTarget = null;
            };
            this.ws1.onerror = function (e) {
                log.log('onerror !!');
                log.log(e);
            };
        }
    }

    chat(args) {
        const command = ["chat.post(" + args.TEXT + ")"];
        this.sendCommand(command);
    }

    getPlayerPosition() {
        if (this.ws1 === null || this.ws1.readyState === 3) {
            this.ws1 = new WebSocket("ws://" + this.host + ":14711");
            this.ws1.onopen = function (e) {
                log.log('onopen !!');
                log.log(e);
                e.currentTarget.send("world.getPlayerIds()");
            }
            this.ws1.onmessage = this.createGetPosWs.bind(this);
            this.ws1.onclose = function (e) {
                log.log('onclose !!');
                log.log(e);
                // e.currentTarget = null;
            };
            this.ws1.onerror = function (e) {
                log.log('onerror !!');
                log.log(e);
            };
        }
    }



    createGetPosWs(event) {
        log.log('getposws')
        const playerID = event.data.replace(/\r?\n/g, "");
        if (this.ws2 === null || this.ws2.readyState === 3) {
            this.ws2 = new WebSocket("ws://" + this.host + ":14711");
            this.ws2.onopen = function (e) {
                log.log('onopen !!');
                log.log(e);
                e.currentTarget.send("entity.getPos(" + playerID + ")");
            }
            this.ws2.onmessage = function (e) {
                log.log('onmessage on ws2');
                log.log(e);
                let posX = e.data.split(',')[0];
                let posY = e.data.split(',')[1];
                let posZ = e.data.split(',')[2];
                const stage = this.runtime.getTargetForStage();
                stage.posX = Cast.toNumber(posX);
                stage.posY = Cast.toNumber(posY);
                stage.posZ = Cast.toNumber(posZ);
                e.currentTarget.close();
            }.bind(this);
            this.ws2.onclose = function (e) {
                log.log('onclose ws2');
                log.log(e);
                this.ws1.close();
            }.bind(this);
        }
    }

}

module.exports = Scratch3Minecraft;
