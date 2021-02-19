const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');
const formatMessage = require('format-message');
const BlockInfo = require('./block_info');
const EntityInfo = require('./entity_info');

class Scratch3Minecraft {

    constructor(runtime) {
        this.runtime = runtime;

        this.host = 'localhost';

        this.absoluteStr = 'absolute';
        this.relativeStr = 'relative';
    }

    getInfo() {
        return {
            id: 'minecraft',
            name: 'Minecraft',
            blocks: [
                {
                    opcode: 'setHost',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'minecraft.setHost',
                        default: '[TEXT]に接続する',
                        description: 'connection host.'
                    }),
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
                    text: formatMessage({
                        id: 'minecraft.chat',
                        default: '[TEXT]と言う',
                        description: 'chat.'
                    }),
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
                    text: formatMessage({
                        id: 'minecraft.setBlock',
                        default: '[BLOCK]ブロックを([STARTX],[STARTY],[STARTZ])に置く',
                        description: 'setBlock.'
                    }),
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
                    text: formatMessage({
                        id: 'minecraft.setBlocks',
                        default: '[BLOCK]ブロックを([STARTX],[STARTY],[STARTZ])から([ENDX],[ENDY],[ENDZ])まで置く',
                        description: 'setBlocks.'
                    }),
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
                    text: formatMessage({
                        id: 'minecraft.getPlayerPosition',
                        default: '現在位置を調べる',
                        description: 'getPlayerPosition.'
                    })
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
                    text: formatMessage({
                        id: 'minecraft.changePosX',
                        default: 'Xを[VALUE]だけ変える',
                        description: 'changePosX.'
                    }),
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
                    text: formatMessage({
                        id: 'minecraft.changePosY',
                        default: 'Yを[VALUE]だけ変える',
                        description: 'changePosY.'
                    }),
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
                    text: formatMessage({
                        id: 'minecraft.changePosZ',
                        default: 'Zを[VALUE]だけ変える',
                        description: 'changePosZ.'
                    }),
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
                },
                {
                    opcode: 'spawnEntity',
                    text: formatMessage({
                        id: 'minecraft.spawnEntity',
                        default: '([STARTX],[STARTY],[STARTZ])に[ENTITY]を召喚する',
                        description: 'spawn entity'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
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
                        ENTITY: {
                            type: ArgumentType.STRING,
                            defaultValue: this.ENTITY_INFO[0].name
                        }
                    }
                },
                {
                    opcode: 'getEntities',
                    text: formatMessage({
                        id: 'minecraft.entityInfo',
                        default: '[ENTITY]',
                        description: 'name of minecraft entities.'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        ENTITY: {
                            type: ArgumentType.NUMBER,
                            menu: 'ENTITY',
                            defaultValue: 0
                        }
                    }
                },
                {
                {
                    opcode: 'teleport',
                    text: formatMessage({
                        id: 'minecraft.teleport',
                        default: '([STARTX],[STARTY],[STARTZ])にテレポートする',
                        description: 'teleport'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
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
                }
            ],
            menus: {
                BLOCK: {
                    acceptReporters: true,
                    items: this._buildMenu(this.BLOCK_INFO)
                },
                ENTITY: {
                    acceptReporters: true,
                    items: this._buildMenu(this.ENTITY_INFO)
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
        return BlockInfo.genBuildingBlockInfo();
    }

    get ENTITY_INFO() {
        return EntityInfo.genEntityInfo();
    }

    /* --------------------------------------
    *************** REPORTER ****************
    --------------------------------------- */
    getBlocks(args) {
        return this.BLOCK_INFO[args.BLOCK];
    }

    getEntities(args) {
        return this.ENTITY_INFO[args.ENTITY];
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

    _searchCoordinateMode(args) {
        if (typeof args.STARTX === 'string' && args.STARTX.indexOf('~') !== -1) return this.relativeStr;
        if (typeof args.STARTY === 'string' && args.STARTY.indexOf('~') !== -1) return this.relativeStr;
        if (typeof args.STARTZ === 'string' && args.STARTZ.indexOf('~') !== -1) return this.relativeStr;
        if (typeof args.ENDX === 'string' && args.ENDX.indexOf('~') !== -1) return this.relativeStr;
        if (typeof args.ENDY === 'string' && args.ENDY.indexOf('~') !== -1) return this.relativeStr;
        if (typeof args.ENDZ === 'string' && args.ENDZ.indexOf('~') !== -1) return this.relativeStr;

        return this.absoluteStr;
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
        const ws1 = this._createWebSocket();
        ws1.onopen = function (e) {
            e.currentTarget.send("world.getPlayerIds()");
        };
        ws1.onmessage = function (e) {
            const playerID = e.data.replace(/\r?\n/g, "");
            const ws2 = this._createWebSocket();
            ws2.onopen = function (e) {
                e.currentTarget.send(`entity.getPos(${playerID})`);
            };
            ws2.onmessage = function (e) {
                const posX = e.data.split(',')[0];
                const posY = e.data.split(',')[1];
                const posZ = e.data.split(',')[2];
                const ws3 = this._createWebSocket();
                ws3.onopen = function (e) {
                    const X = typeof args.STARTX === 'string' ? Cast.toNumber(posX) + Cast.toNumber(args.STARTX.split('~')[1]) : Cast.toNumber(args.STARTX);
                    const Y = typeof args.STARTY === 'string' ? Cast.toNumber(posY) + Cast.toNumber(args.STARTY.split('~')[1]) : Cast.toNumber(args.STARTY);
                    const Z = typeof args.STARTZ === 'string' ? Cast.toNumber(posZ) + Cast.toNumber(args.STARTZ.split('~')[1]) : Cast.toNumber(args.STARTZ);
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
        const coordinateMode = this._searchCoordinateMode(args);
        if (coordinateMode === this.absoluteStr) {
            this._setBlocksToAbsCoord(args);
        } else if (coordinateMode === this.relativeStr) {
            this._setBlocksToRelativeCoord(args);
        }
    }

    _setBlocksToAbsCoord(args) {
        const [blockID, blockData] = this.findBlockInfo(args.BLOCK);
        const command = [`world.setBlocks(${Math.trunc(args.STARTX)},${Math.trunc(args.STARTY)},${Math.trunc(args.STARTZ)},${Math.trunc(args.ENDX)},${Math.trunc(args.ENDY)},${Math.trunc(args.ENDZ)},${blockID},${blockData})`];
        this.sendCommand(command);
    }

    _createWebSocket() {
        return new WebSocket("ws://" + this.host + ":14711");
    }

    _setBlocksToRelativeCoord(args) {
        const [blockID, blockData] = this.findBlockInfo(args.BLOCK);
        const ws1 = this._createWebSocket();
        ws1.onopen = function (e) {
            e.currentTarget.send("world.getPlayerIds()");
        };
        ws1.onmessage = function (e) {
            const playerID = e.data.replace(/\r?\n/g, "");
            const ws2 = this._createWebSocket();
            ws2.onopen = function (e) {
                e.currentTarget.send(`entity.getPos(${playerID})`);
            };
            ws2.onmessage = function (e) {
                const posX = e.data.split(',')[0];
                const posY = e.data.split(',')[1];
                const posZ = e.data.split(',')[2];
                const ws3 = this._createWebSocket();
                ws3.onopen = function (e) {
                    const startX = typeof args.STARTX === 'string' ? Cast.toNumber(posX) + Cast.toNumber(args.STARTX.split('~')[1]) : Cast.toNumber(args.STARTX);
                    const startY = typeof args.STARTY === 'string' ? Cast.toNumber(posY) + Cast.toNumber(args.STARTY.split('~')[1]) : Cast.toNumber(args.STARTY);
                    const startZ = typeof args.STARTZ === 'string' ? Cast.toNumber(posZ) + Cast.toNumber(args.STARTZ.split('~')[1]) : Cast.toNumber(args.STARTZ);
                    const endX = typeof args.ENDX === 'string' ? Cast.toNumber(posX) + Cast.toNumber(args.ENDX.split('~')[1]) : Cast.toNumber(args.ENDX);
                    const endY = typeof args.ENDY === 'string' ? Cast.toNumber(posY) + Cast.toNumber(args.ENDY.split('~')[1]) : Cast.toNumber(args.ENDY);
                    const endZ = typeof args.ENDZ === 'string' ? Cast.toNumber(posZ) + Cast.toNumber(args.ENDZ.split('~')[1]) : Cast.toNumber(args.ENDZ);
                    const command = [`world.setBlocks(${Math.trunc(startX)},${Math.trunc(startY)},${Math.trunc(startZ)},${Math.trunc(endX)},${Math.trunc(endY)},${Math.trunc(endZ)},${blockID},${blockData})`];
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
        const ws = this._createWebSocket();
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
    }

    chat(args) {
        const command = ["chat.post(" + args.TEXT + ")"];
        this.sendCommand(command);
    }

    getPlayerPosition() {
        const ws = this._createWebSocket();
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
        const ws = this._createWebSocket();
        ws.onopen = function (e) {
            e.currentTarget.send(`entity.getPos(${playerID})`);
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

    spawnEntity(args) {
        const coordinateMode = this._searchCoordinateMode(args);
        if (coordinateMode === this.absoluteStr) {
            this._spawnEntityToAbsCoord(args);
        } else if (coordinateMode === this.relativeStr) {
            this._spawnEntityToRelativeCoord(args);
        }
    }

    _spawnEntityToAbsCoord(args) {
        const entityName = this._findEntityInfo(args.ENTITY);
        const command = [`world.spawnEntity(${entityName},${Math.trunc(args.STARTX)},${Math.trunc(args.STARTY)},${Math.trunc(args.STARTZ)})`];
        this.sendCommand(command);
    }

    _findEntityInfo(entityName) {
        let entity = null;
        if (typeof entityName === 'string') {
            const targetEntity = this.ENTITY_INFO.find((e) => e.name === entityName);
            entity = targetEntity.entityName;
        } else {
            entity = entityName.entityName;
        }
        return entity;
    }

    _spawnEntityToRelativeCoord(args) {
        const entityName = this._findEntityInfo(args.ENTITY);
        const ws1 = this._createWebSocket();
        ws1.onopen = function (e) {
            e.currentTarget.send("world.getPlayerIds()");
        };
        ws1.onmessage = function (e) {
            const playerID = e.data.replace(/\r?\n/g, "");
            const ws2 = this._createWebSocket();
            ws2.onopen = function (e) {
                e.currentTarget.send("entity.getPos(" + playerID + ")");
            };
            ws2.onmessage = function (e) {
                const posX = e.data.split(',')[0];
                const posY = e.data.split(',')[1];
                const posZ = e.data.split(',')[2];
                const ws3 = this._createWebSocket();
                ws3.onopen = function (e) {
                    const X = typeof args.STARTX === 'string' ? Cast.toNumber(posX) + Cast.toNumber(args.STARTX.split('~')[1]) : Cast.toNumber(args.STARTX);
                    const Y = typeof args.STARTY === 'string' ? Cast.toNumber(posY) + Cast.toNumber(args.STARTY.split('~')[1]) : Cast.toNumber(args.STARTY);
                    const Z = typeof args.STARTZ === 'string' ? Cast.toNumber(posZ) + Cast.toNumber(args.STARTZ.split('~')[1]) : Cast.toNumber(args.STARTZ);
                    const command = [`world.spawnEntity(${entityName},${Math.trunc(X)},${Math.trunc(Y)},${Math.trunc(Z)})`];
                    this.sendCommand(command);
                }.bind(this);
    teleport(args) {
        const coordinateMode = this._searchCoordinateMode(args);
        if (coordinateMode === this.absoluteStr) {
            this._teleportToAbsCoord(args);
        } else if (coordinateMode === this.relativeStr) {
            this._teleportToRelativeCoord(args);
        }
    }

    _teleportToAbsCoord(args) {
        const ws1 = this._createWebSocket();
        ws1.onopen = function (e) {
            e.currentTarget.send("world.getPlayerIds()");
        };
        ws1.onmessage = function (e) {
            const playerID = e.data.replace(/\r?\n/g, "");
            const command = [`entity.setPos(${playerID},${Math.trunc(args.STARTX)},${Math.trunc(args.STARTY)},${Math.trunc(args.STARTZ)})`];
            this.sendCommand(command);
            e.currentTarget.close();
        }.bind(this);
        ws1.onclose = function (e) {
        };
        ws1.onerror = function (e) {
        };
    }

    _teleportToRelativeCoord(args) {
        const ws1 = this._createWebSocket();
        ws1.onopen = function (e) {
            e.currentTarget.send("world.getPlayerIds()");
        };
        ws1.onmessage = function (e) {
            const playerID = e.data.replace(/\r?\n/g, "");
            this._sendRelativePositionCommand(args, 'entity.setPos', playerID);
            e.currentTarget.close();
        }.bind(this);
        ws1.onclose = function (e) {
        };
        ws1.onerror = function (e) {
        };

    }
}

module.exports = Scratch3Minecraft;
