// import { Rcon } from 'rcon-client'

const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');
// const Rcon = require('rcon-client');
// const Rcon = require('srcds-rcon');
// const nets = require('nets');
// const io = require('socket.io-client');
// const Rcon = require('modern-rcon');
const Rcon = require('rcon-srcds');
// import Rcon from 'rcon-srcds';

class Scratch3Minecraft {

    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'Minecraft',
            name: 'Minecraft',
            blocks: [
                {
                    opcode: 'writeLog',
                    blockType: BlockType.COMMAND,
                    text: 'log [TEXT]',
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

    writeLog(args) {
        const text = Cast.toString(args.TEXT);
        log.log(text);

        const server = new Rcon({ host: '127.0.0.1', port: 25010 });

        server.authenticate('')
            .then(() => {
                log.log('authenticated');
                return server.execute('status');
            })
            .then(log.log)
            .catch(console.error);



        // const rcon = new Rcon({ host: "localhost", port: 25575, passward: '' });

        // rcon.connect().then(() => {
        //     return rcon.send('say hahaha'); // That's a command for Minecraft
        // }).then(res => {
        //     console.log(res);
        // }).then(() => {
        //     return rcon.disconnect();
        // });


        // const url = 'localhost';
        // const options = {
        //     'force new connection': true,
        //     port: 25575
        // };

        // const socket = io.connect(url, options);
        // // socket.on('connect', () => {
        // //     log.log('connected!!');
        // // });
        // // socket.on('sendMsgFromServer', function (msg) { console.log("message:", msg); });

        // // サーバーからのデータ受け取り処理
        // socket.on('connect', () => { log.log('connected!!'); }); // 接続
        // socket.on('disconnect', () => { log.log('disconnected!!'); }); // 切断
        // // サーバーからクライアントへの送り返し
        // socket.on('s2c_message', (data) => { log.log(data.value) });
        // // クライアントからサーバーへ送信
        // socket.emit('c2s_broadcast', { value: 'say bbb' });

        // let rcon = Rcon({
        //     address: 'localhost',
        //     port: 25575
        // });
        // rcon.connect().then(() => {
        //     log.log('connected');
        // }).catch(console.error);
    }

    // https://developer.valvesoftware.com/wiki/Source_RCON_Protocol
    createRequest(type, id, body) {

        var size = Buffer.byteLength(body) + 14,
            buffer = new Buffer(size);

        buffer.writeInt32LE(size - 4, 0);
        buffer.writeInt32LE(id, 4);
        buffer.writeInt32LE(type, 8);
        buffer.write(body, 12, size - 2, "ascii");
        buffer.writeInt16LE(0, size - 2);

        return buffer;
    };

    readResponse(buffer) {

        const response = {
            size: buffer.readInt32LE(0),
            id: buffer.readInt32LE(4),
            type: buffer.readInt32LE(8),
            body: buffer.toString("ascii", 12, data.length - 2)
        }

        return response;
    };
}

module.exports = Scratch3Minecraft;
