// import { Rcon } from 'rcon-client'

const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');
const formatMessage = require('format-message');

class Scratch3Minecraft {

    constructor(runtime) {
        this.runtime = runtime;

        this.websockets = [];
        this.host = 'localhost';

        this.absoluteStr = 'absolute';
        this.relativeStr = 'relative';
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
                    text: '[BLOCK]ブロックを([STARTX],[STARTY],[STARTZ])に置く',
                    arguments: {
                        BLOCK: {
                            type: ArgumentType.STRING,
                            defaultValue: this.BLOCK_INFO[0].name
                        },
                        STARTX: {
                            type: ArgumentType.STRING,
                            defaultValue: '0'
                        },
                        STARTY: {
                            type: ArgumentType.STRING,
                            defaultValue: '0'
                        },
                        STARTZ: {
                            type: ArgumentType.STRING,
                            defaultValue: '0'
                        }
                    }
                },
                {
                    opcode: 'setBlocks',
                    blockType: BlockType.COMMAND,
                    text: '[BLOCK]ブロックを([STARTX],[STARTY],[STARTZ])から([ENDX],[ENDY],[ENDZ])まで置く',
                    arguments: {
                        BLOCK: {
                            type: ArgumentType.STRING,
                            defaultValue: this.BLOCK_INFO[0].name
                        },
                        STARTX: {
                            type: ArgumentType.STRING,
                            defaultValue: '0'
                        },
                        STARTY: {
                            type: ArgumentType.STRING,
                            defaultValue: '0'
                        },
                        STARTZ: {
                            type: ArgumentType.STRING,
                            defaultValue: '0'
                        },
                        ENDX: {
                            type: ArgumentType.STRING,
                            defaultValue: '5'
                        },
                        ENDY: {
                            type: ArgumentType.STRING,
                            defaultValue: '5'
                        },
                        ENDZ: {
                            type: ArgumentType.STRING,
                            defaultValue: '5'
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
                    id: 'minecraft.stone',
                    default: '石'
                }),
                blockID: '1',
                blockData: '0'
            },
            {
                name: formatMessage({
                    id: 'minecraft.air',
                    default: '空気'
                }),
                blockID: '0',
                blockData: '0'
            },
            {
                name: formatMessage({
                    id: 'minecraft.granite',
                    default: '花崗岩'
                }),
                blockID: '1',
                blockData: '1'
            }
        ];
    }

    /* --------------------------------------
    *************** REPORTER ****************
    --------------------------------------- */
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

    /* --------------------------------------
    *************** COMMAND ****************
    --------------------------------------- */
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
        const coordinateMode = this._searchCoordinateMode(args);
        if (coordinateMode === this.absoluteStr) {
            this._setBlockToAbsCoord(args);
        } else if (coordinateMode === this.relativeStr) {
            this._setBlockToRelativeCoord(args);
        }
    }

    _setBlockToAbsCoord(args) {
        const [blockID, blockData] = this.findBlockInfo(args.BLOCK);
        const command = [`world.setBlock(${Math.trunc(args.STARTX)},${Math.trunc(args.STARTY)},${Math.trunc(args.STARTZ)},${blockID},${blockData})`];
        this.sendCommand(command);
    }

    _setBlockToRelativeCoord(args) {
        const [blockID, blockData] = this.findBlockInfo(args.BLOCK);
        const ws1 = new WebSocket("ws://" + this.host + ":14711");
        ws1.onopen = function (e) {
            e.currentTarget.send("world.getPlayerIds()");
        };
        ws1.onmessage = function (e) {
            const playerID = e.data.replace(/\r?\n/g, "");
            const ws2 = new WebSocket("ws://" + this.host + ":14711");
            ws2.onopen = function (e) {
                e.currentTarget.send("entity.getPos(" + playerID + ")");
            };
            ws2.onmessage = function (e) {
                const posX = e.data.split(',')[0];
                const posY = e.data.split(',')[1];
                const posZ = e.data.split(',')[2];
                const ws3 = new WebSocket("ws://" + this.host + ":14711");
                ws3.onopen = function (e) {
                    const X = Cast.toNumber(posX) + Cast.toNumber(args.STARTX.split('~')[1]);
                    const Y = Cast.toNumber(posY) + Cast.toNumber(args.STARTY.split('~')[1]);
                    const Z = Cast.toNumber(posZ) + Cast.toNumber(args.STARTZ.split('~')[1]);
                    const command = [`world.setBlock(${Math.trunc(X)},${Math.trunc(Y)},${Math.trunc(Z)},${blockID},${blockData})`];
                    this.sendCommand(command);
                }.bind(this);
                e.currentTarget.close();
            }.bind(this);
            ws2.onclose = function (e) {
                // e.currentTarget.close();
            };
            e.currentTarget.close();
        }.bind(this);
        ws1.onclose = function (e) {
        };
        ws1.onerror = function (e) {
        };
    }

    setBlocks(args) {
        const [blockID, blockData] = this.findBlockInfo(args.BLOCK);
        const command = [`world.setBlocks(${Math.trunc(args.STARTX)},${Math.trunc(args.STARTY)},${Math.trunc(args.STARTZ)},${Math.trunc(args.ENDX)},${Math.trunc(args.ENDY)},${Math.trunc(args.ENDZ)},${blockID},${blockData})`];
        this.sendCommand(command);
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

    findBlockInfo(block) {
        let blockID = null;
        let blockData = null;
        if (typeof block === 'string') {
            const targetBlock = this.BLOCK_INFO.find((b) => b.name === block)
            blockID = targetBlock.blockID;
            blockData = targetBlock.blockData;
        } else {
            blockID = block.blockID;
            blockData = block.blockData;
        }
        return [blockID, blockData];
    }

    setHost(args) {
        this.host = args.TEXT;
    }

    sendCommand(commands) {
        const ws = new WebSocket("ws://" + this.host + ":14711");
        ws.onopen = function (e) {
            commands.forEach(command => {
                e.currentTarget.send(command);
            });
            e.currentTarget.close();
        };
        ws.onmessage = function (e) {
            e.currentTarget.close();
        };
        ws.onclose = function (e) {
            // e.currentTarget = null;
        };
        ws.onerror = function (e) {
            log.log('onerror !!');
            log.log(e);
        };
        this.websockets.push(ws);
    }

    chat(args) {
        const command = ["chat.post(" + args.TEXT + ")"];
        this.sendCommand(command);
    }

    getPlayerPosition() {
        const ws = new WebSocket("ws://" + this.host + ":14711");
        ws.onopen = function (e) {
            e.currentTarget.send("world.getPlayerIds()");
        };
        ws.onmessage = function (e) {
            this.getPos(e);
            e.currentTarget.close();
        }.bind(this);
        ws.onclose = function (e) {
        };
        ws.onerror = function (e) {
        };
    }

    getPos(event) {
        const playerID = event.data.replace(/\r?\n/g, "");
        const ws = new WebSocket("ws://" + this.host + ":14711");
        ws.onopen = function (e) {
            e.currentTarget.send("entity.getPos(" + playerID + ")");
        };
        ws.onmessage = function (e) {
            const posX = e.data.split(',')[0];
            const posY = e.data.split(',')[1];
            const posZ = e.data.split(',')[2];
            const stage = this.runtime.getTargetForStage();
            stage.posX = Cast.toNumber(posX);
            stage.posY = Cast.toNumber(posY);
            stage.posZ = Cast.toNumber(posZ);
            e.currentTarget.close();
        }.bind(this);
        ws.onclose = function (e) {
            // e.currentTarget.close();
        };
    }
}

module.exports = Scratch3Minecraft;
