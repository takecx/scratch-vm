// import { Rcon } from 'rcon-client'

const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');
const formatMessage = require('format-message');

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
                    opcode: 'setBlock',
                    blockType: BlockType.COMMAND,
                    text: '[BLOCK]ブロックを([X],[Y],[Z])に置く',
                    arguments: {
                        BLOCK: {
                            type: ArgumentType.STRING,
                            defaultValue: '石(stone)'
                        },
                        X: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        Y: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        Z: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
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
                },
                {
                    opcode: 'changePosX',
                    blockType: BlockType.COMMAND,
                    text: 'Xを[VALUE]だけ変える',
                    arguments: {
                        VALUE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'changePosY',
                    blockType: BlockType.COMMAND,
                    text: 'Yを[VALUE]だけ変える',
                    arguments: {
                        VALUE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'changePosZ',
                    blockType: BlockType.COMMAND,
                    text: 'Zを[VALUE]だけ変える',
                    arguments: {
                        VALUE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'getBlocks',
                    text: formatMessage({
                        id: 'minecraft.blockInfo',
                        default: '[BLOCK]',
                        description: 'name of minecraft blocks.'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        BLOCK: {
                            type: ArgumentType.NUMBER,
                            menu: 'BLOCK',
                            defaultValue: 0
                        }
                    }
                }
            ],
            menus: {
                BLOCK: {
                    acceptReporters: true,
                    items: this._buildMenu(this.BLOCK_INFO)
                }
            }
        };
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

    /**
     * An array of info about each drum.
     * @type {object[]}
     * @param {string} name - the translatable name to display in the drums menu.
     * @param {string} blockID - the ID of the minecraft block.
     */
    get BLOCK_INFO() {
        return [
            {
                name: formatMessage({
                    id: 'minecraft.air',
                    default: '空気(air)'
                }),
                blockID: '0',
                blockData: '0'
            },
            {
                name: formatMessage({
                    id: 'minecraft.stone',
                    default: '石(stone)'
                }),
                blockID: '1',
                blockData: '0'
            },
            {
                name: formatMessage({
                    id: 'minecraft.granite',
                    default: '花崗岩(granite)'
                }),
                blockID: '1',
                blockData: '1'
            }
        ];
    }

    changePosX(args) {
        const stage = this.runtime.getTargetForStage();
        if (stage) {
            stage.posX = stage.posX + Cast.toNumber(args.VALUE);
        }
    }
    changePosY(args) {
        const stage = this.runtime.getTargetForStage();
        if (stage) {
            stage.posY = stage.posY + Cast.toNumber(args.VALUE);
        }
    }
    changePosZ(args) {
        const stage = this.runtime.getTargetForStage();
        if (stage) {
            stage.posZ = stage.posZ + Cast.toNumber(args.VALUE);
        }
    }

    setBlock(args) {
        const blockID = args.BLOCK.blockID;
        const blockData = args.BLOCK.blockData;
        const command = [`world.setBlock(${Math.trunc(args.X)},${Math.trunc(args.Y)},${Math.trunc(args.Z)},${blockID},${blockData})`];
        this.sendCommand(command);

    }

    getBlocks(args) {
        return this.BLOCK_INFO[args.BLOCK];
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
