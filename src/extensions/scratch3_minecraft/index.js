const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');
const formatMessage = require('format-message');
const BlockInfo = require('./block_info');
const EntityInfo = require('./entity_info');

const blockIconURI = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMjAwMTA5MDQvL0VOIgogICAgICAgICAgICAgICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+Cgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICB3aWR0aD0iMmluIiBoZWlnaHQ9IjEuMjRpbiIKICAgICB2aWV3Qm94PSIwIDAgNjAwIDM3MiI+CiAgPHBhdGggaWQ9IumBuOaKnuevhOWbsiAjMSIKICAgICAgICBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiCiAgICAgICAgZD0iTSA0OTAuMDAsMTY2LjAwCiAgICAgICAgICAgQyA0OTAuMDAsMTY2LjAwIDQ3Ny4wMCwxNjUuMDAgNDc3LjAwLDE2NS4wMAogICAgICAgICAgICAgNDc3LjAwLDE2NS4wMCA0NzcuMDAsMTgyLjAwIDQ3Ny4wMCwxODIuMDAKICAgICAgICAgICAgIDQ3Ny4wMCwxODIuMDAgNDkwLjAwLDE4MS4wMCA0OTAuMDAsMTgxLjAwCiAgICAgICAgICAgICA0OTAuMDAsMTgxLjAwIDQ4OS4wMCwyMjUuMDAgNDg5LjAwLDIyNS4wMAogICAgICAgICAgICAgNDg5LjAwLDIyNS4wMCA1MDkuMDAsMjI1LjAwIDUwOS4wMCwyMjUuMDAKICAgICAgICAgICAgIDUwOS4wMCwyMjUuMDAgNTA5LjAwLDE4MS4wMCA1MDkuMDAsMTgxLjAwCiAgICAgICAgICAgICA1MDkuMDAsMTgxLjAwIDUyNC4wMCwxODIuMDAgNTI0LjAwLDE4Mi4wMAogICAgICAgICAgICAgNTI0LjAwLDE4Mi4wMCA1MjQuMDAsMTY1LjAwIDUyNC4wMCwxNjUuMDAKICAgICAgICAgICAgIDUyNC4wMCwxNjUuMDAgNTA5LjAwLDE2Ni4wMCA1MDkuMDAsMTY2LjAwCiAgICAgICAgICAgICA1MDkuNDEsMTU0LjExIDUxNi44MSwxNTcuMTYgNTI1LjAwLDE1OS4wMAogICAgICAgICAgICAgNTI1LjAwLDE1OS4wMCA1MjguMDAsMTQ1LjAwIDUyOC4wMCwxNDUuMDAKICAgICAgICAgICAgIDUxNy4zMiwxNDIuMTcgNDk4LjA1LDE0MC4yNiA0OTIuMDAsMTUyLjAyCiAgICAgICAgICAgICA0ODkuNjMsMTU2LjYxIDQ5MC4wMCwxNjEuMDIgNDkwLjAwLDE2Ni4wMCBaCiAgICAgICAgICAgTSAzMS4wNCwxNDUuMDAKICAgICAgICAgICBDIDMxLjA0LDE0NS4wMCAzMS4wNCwxNTcuMDAgMzEuMDQsMTU3LjAwCiAgICAgICAgICAgICAzMS4wNCwxNTcuMDAgMzIuMDAsMTY3LjAwIDMyLjAwLDE2Ny4wMAogICAgICAgICAgICAgMzIuMDAsMTY3LjAwIDMyLjAwLDIwMS4wMCAzMi4wMCwyMDEuMDAKICAgICAgICAgICAgIDMyLjAwLDIwMS4wMCAzMS4wNCwyMTMuMDAgMzEuMDQsMjEzLjAwCiAgICAgICAgICAgICAzMS4wNCwyMTMuMDAgMzEuMDQsMjI1LjAwIDMxLjA0LDIyNS4wMAogICAgICAgICAgICAgMzEuMDQsMjI1LjAwIDUwLjAwLDIyNS4wMCA1MC4wMCwyMjUuMDAKICAgICAgICAgICAgIDUwLjAwLDIyNS4wMCA0OS4wMCwyMTAuMDAgNDkuMDAsMjEwLjAwCiAgICAgICAgICAgICA0OS4wMCwyMTAuMDAgNDkuMDAsMTc1LjAwIDQ5LjAwLDE3NS4wMAogICAgICAgICAgICAgNDkuMDAsMTc1LjAwIDYxLjY3LDIxMi4wMCA2MS42NywyMTIuMDAKICAgICAgICAgICAgIDY1LjUwLDIyMy40OSA2NC41NCwyMjQuODYgNzIuMDAsMjI1LjAwCiAgICAgICAgICAgICA3Mi4wMCwyMjUuMDAgODMuMDAsMjI1LjAwIDgzLjAwLDIyNS4wMAogICAgICAgICAgICAgODMuMDAsMjI1LjAwIDk5LjAwLDE3NC4wMCA5OS4wMCwxNzQuMDAKICAgICAgICAgICAgIDk5LjAwLDE3NC4wMCA5OS4wMCwxODkuMDAgOTkuMDAsMTg5LjAwCiAgICAgICAgICAgICA5OS4wMCwxODkuMDAgOTkuMDAsMjI1LjAwIDk5LjAwLDIyNS4wMAogICAgICAgICAgICAgOTkuMDAsMjI1LjAwIDExOC4wMCwyMjUuMDAgMTE4LjAwLDIyNS4wMAogICAgICAgICAgICAgMTE4LjAwLDIyNS4wMCAxMTcuMDAsMTkwLjAwIDExNy4wMCwxOTAuMDAKICAgICAgICAgICAgIDExNy4wMCwxOTAuMDAgMTE4LjAwLDE0NS4wMCAxMTguMDAsMTQ1LjAwCiAgICAgICAgICAgICAxMTguMDAsMTQ1LjAwIDk5LjAwLDE0NS4wMCA5OS4wMCwxNDUuMDAKICAgICAgICAgICAgIDkwLjIzLDE0NS4wNSA5Mi4zNCwxNDUuOTcgODguMzMsMTU4LjAwCiAgICAgICAgICAgICA4OC4zMywxNTguMDAgNzUuMDAsMTk5LjAwIDc1LjAwLDE5OS4wMAogICAgICAgICAgICAgNzUuMDAsMTk5LjAwIDYzLjY3LDE2OC4wMCA2My42NywxNjguMDAKICAgICAgICAgICAgIDYzLjY3LDE2OC4wMCA1Ny4wMCwxNDUuMDAgNTcuMDAsMTQ1LjAwCiAgICAgICAgICAgICA1Ny4wMCwxNDUuMDAgMzEuMDQsMTQ1LjAwIDMxLjA0LDE0NS4wMCBaCiAgICAgICAgICAgTSAxMjkuMDAsMTQ1LjAwCiAgICAgICAgICAgQyAxMjkuMDAsMTQ3Ljc3IDEyOC41MCwxNTYuNDggMTMwLjAyLDE1OC40MAogICAgICAgICAgICAgMTMyLjAzLDE2MC45MyAxNDUuNDIsMTYwLjAwIDE0OS4wMCwxNjAuMDAKICAgICAgICAgICAgIDE0OS4wMCwxNjAuMDAgMTQ5LjAwLDE0NS4wMCAxNDkuMDAsMTQ1LjAwCiAgICAgICAgICAgICAxNDkuMDAsMTQ1LjAwIDEyOS4wMCwxNDUuMDAgMTI5LjAwLDE0NS4wMCBaCiAgICAgICAgICAgTSA1NDAuMDAsMTUxLjAwCiAgICAgICAgICAgQyA1NDAuMDAsMTUxLjAwIDU0MC4wMCwxNjYuMDAgNTQwLjAwLDE2Ni4wMAogICAgICAgICAgICAgNTQwLjAwLDE2Ni4wMCA1MjkuMDAsMTY1LjAwIDUyOS4wMCwxNjUuMDAKICAgICAgICAgICAgIDUyNy41MywxNzAuMTkgNTI3LjUzLDE3Ni44MSA1MjkuMDAsMTgyLjAwCiAgICAgICAgICAgICA1MjkuMDAsMTgyLjAwIDU0MC4wMCwxODEuMDAgNTQwLjAwLDE4MS4wMAogICAgICAgICAgICAgNTQwLjAwLDE4MS4wMCA1NDAuMDAsMjA0LjAwIDU0MC4wMCwyMDQuMDAKICAgICAgICAgICAgIDU0MC4wMSwyMDguNzggNTQwLjM0LDIxNi44OCA1NDMuMDEsMjIwLjkwCiAgICAgICAgICAgICA1NDcuMDEsMjI2LjkzIDU1NC41OCwyMjcuMDMgNTYxLjAwLDIyNy4wMAogICAgICAgICAgICAgNTY0LjAxLDIyNi45OSA1NzAuMDIsMjI3LjEyIDU3MS45OSwyMjQuNDQKICAgICAgICAgICAgIDU3My42NiwyMjIuMTUgNTcyLjA3LDIxNC4yNiA1NzEuOTksMjExLjAwCiAgICAgICAgICAgICA1NjguNjUsMjExLjI3IDU2NC4xNCwyMTIuNTQgNTYxLjMxLDIxMC4yNgogICAgICAgICAgICAgNTU5LjAwLDIwOC4zOSA1NTkuMDUsMjA1LjcwIDU1OS4wMCwyMDMuMDAKICAgICAgICAgICAgIDU1OS4wMCwyMDMuMDAgNTU5LjAwLDE4MS4wMCA1NTkuMDAsMTgxLjAwCiAgICAgICAgICAgICA1NTkuMDAsMTgxLjAwIDU3MS4wMCwxODIuMDAgNTcxLjAwLDE4Mi4wMAogICAgICAgICAgICAgNTcyLjQ3LDE3Ni44MSA1NzIuNDcsMTcwLjE5IDU3MS4wMCwxNjUuMDAKICAgICAgICAgICAgIDU3MS4wMCwxNjUuMDAgNTU5LjAwLDE2Ni4wMCA1NTkuMDAsMTY2LjAwCiAgICAgICAgICAgICA1NTkuMDAsMTY2LjAwIDU2MC4wMCwxNTEuMDAgNTYwLjAwLDE1MS4wMAogICAgICAgICAgICAgNTYwLjAwLDE1MS4wMCA1NDAuMDAsMTUxLjAwIDU0MC4wMCwxNTEuMDAgWgogICAgICAgICAgIE0gMjg3LjAwLDIwOS4wMAogICAgICAgICAgIEMgMjg3LjAwLDIwOS4wMCAyNzAuMDAsMjA0LjAwIDI3MC4wMCwyMDQuMDAKICAgICAgICAgICAgIDI2Ni45MSwyMDguMDQgMjY0LjQyLDIxMS4zNiAyNTkuMDAsMjExLjg5CiAgICAgICAgICAgICAyNTAuOTIsMjEyLjY4IDI0Ni40NywyMDguNjggMjQ1LjAwLDIwMS4wMAogICAgICAgICAgICAgMjQ1LjAwLDIwMS4wMCAyODguMDAsMjAxLjAwIDI4OC4wMCwyMDEuMDAKICAgICAgICAgICAgIDI4Ni41NCwxODkuOTYgMjg2LjM0LDE3OC4xMiAyNzYuOTYsMTcwLjM5CiAgICAgICAgICAgICAyNjUuMjcsMTYwLjc2IDI0NC41MywxNjEuODggMjM0LjE4LDE3My4wNAogICAgICAgICAgICAgMjI4Ljk3LDE3OC42NyAyMjYuNzMsMTg2LjQ3IDIyNi4xOCwxOTQuMDAKICAgICAgICAgICAgIDIyNS45OCwxOTYuODUgMjI2LjQzLDE5OS4yMiAyMjYuOTIsMjAyLjAwCiAgICAgICAgICAgICAyMjkuNjksMjE3Ljc1IDIzOS45NiwyMjYuODEgMjU2LjAwLDIyNy4wMAogICAgICAgICAgICAgMjY0LjA5LDIyNy4wOSAyNzEuMjQsMjI2LjE2IDI3Ny45OCwyMjEuMjEKICAgICAgICAgICAgIDI4Mi40OSwyMTcuOTAgMjg0LjY0LDIxMy45MSAyODcuMDAsMjA5LjAwIFoKICAgICAgICAgICBNIDM1Mi4wMCwyMDYuMDAKICAgICAgICAgICBDIDM1Mi4wMCwyMDYuMDAgMzM0LjAwLDIwNC4wMCAzMzQuMDAsMjA0LjAwCiAgICAgICAgICAgICAzMjYuOTUsMjE4Ljc2IDMxMi42MiwyMTAuNDEgMzExLjc2LDE5Ny4wMAogICAgICAgICAgICAgMzEwLjY5LDE4MC4zNyAzMjMuOTAsMTc1LjE1IDMzMC42MSwxODIuMjMKICAgICAgICAgICAgIDMzMi4xOSwxODMuOTAgMzMzLjA2LDE4NS45NCAzMzQuMDAsMTg4LjAwCiAgICAgICAgICAgICAzMzQuMDAsMTg4LjAwIDM1Mi4wMCwxODQuMDAgMzUyLjAwLDE4NC4wMAogICAgICAgICAgICAgMzUwLjMxLDE3OS4xOCAzNDguNjQsMTc0LjkzIDM0NC44MiwxNzEuMzMKICAgICAgICAgICAgIDMzNC41OSwxNjEuNjkgMzEzLjc1LDE2MS40MyAzMDMuMDEsMTcwLjM0CiAgICAgICAgICAgICAyOTUuODUsMTc2LjI5IDI5Mi44NCwxODQuOTMgMjkyLjE4LDE5NC4wMAogICAgICAgICAgICAgMjkxLjIwLDIwNy41NSAyOTguOTYsMjIxLjEzIDMxMi4wMCwyMjUuNDgKICAgICAgICAgICAgIDMyNy41OCwyMzAuNjcgMzUwLjAxLDIyNC43OCAzNTIuMDAsMjA2LjAwIFoKICAgICAgICAgICBNIDE3OC4wMCwxNzIuMDAKICAgICAgICAgICBDIDE3OC4wMCwxNzIuMDAgMTc4LjAwLDE2Ni4wMCAxNzguMDAsMTY2LjAwCiAgICAgICAgICAgICAxNzguMDAsMTY2LjAwIDE1OS4wMCwxNjYuMDAgMTU5LjAwLDE2Ni4wMAogICAgICAgICAgICAgMTU5LjAwLDE2Ni4wMCAxNjAuMDAsMTgxLjAwIDE2MC4wMCwxODEuMDAKICAgICAgICAgICAgIDE2MC4wMCwxODEuMDAgMTYwLjAwLDIwOS4wMCAxNjAuMDAsMjA5LjAwCiAgICAgICAgICAgICAxNjAuMDAsMjA5LjAwIDE1OS4wMCwyMjUuMDAgMTU5LjAwLDIyNS4wMAogICAgICAgICAgICAgMTU5LjAwLDIyNS4wMCAxNzkuMDAsMjI1LjAwIDE3OS4wMCwyMjUuMDAKICAgICAgICAgICAgIDE3OS4wMCwyMjUuMDAgMTc4LjAwLDIwMC4wMCAxNzguMDAsMjAwLjAwCiAgICAgICAgICAgICAxNzguMDEsMTkyLjcxIDE3OC44NCwxODkuMTggMTg1LjAxLDE4NC40MgogICAgICAgICAgICAgMTkyLjg5LDE3OC4zNCAxOTkuODIsMTgyLjM4IDIwMC4wMCwxOTIuMDAKICAgICAgICAgICAgIDIwMC4xNCwxOTkuODMgMjAwLjY1LDIxOC4yMSAxOTkuMDAsMjI1LjAwCiAgICAgICAgICAgICAxOTkuMDAsMjI1LjAwIDIyMC4wMCwyMjUuMDAgMjIwLjAwLDIyNS4wMAogICAgICAgICAgICAgMjIwLjAwLDIyNS4wMCAyMTkuMDAsMTg3LjAwIDIxOS4wMCwxODcuMDAKICAgICAgICAgICAgIDIxOC44OCwxNzYuOTMgMjE1LjU0LDE2OC41OSAyMDUuMDAsMTY1Ljc2CiAgICAgICAgICAgICAyMDIuMDcsMTY0Ljk4IDE5OS4wMiwxNjQuOTQgMTk2LjAwLDE2NS4wMQogICAgICAgICAgICAgMTg4LjA1LDE2NS4yMSAxODQuNTEsMTY4LjAzIDE3OC4wMCwxNzIuMDAgWgogICAgICAgICAgIE0gMzc5LjAwLDE3My4wMAogICAgICAgICAgIEMgMzc5LjAwLDE3My4wMCAzNzkuMDAsMTY2LjAwIDM3OS4wMCwxNjYuMDAKICAgICAgICAgICAgIDM3OS4wMCwxNjYuMDAgMzYwLjAwLDE2Ni4wMCAzNjAuMDAsMTY2LjAwCiAgICAgICAgICAgICAzNjAuMDAsMTY2LjAwIDM2MS4wMCwxODMuMDAgMzYxLjAwLDE4My4wMAogICAgICAgICAgICAgMzYxLjAwLDE4My4wMCAzNjEuMDAsMjA4LjAwIDM2MS4wMCwyMDguMDAKICAgICAgICAgICAgIDM2MS4wMCwyMDguMDAgMzYwLjAwLDIyNS4wMCAzNjAuMDAsMjI1LjAwCiAgICAgICAgICAgICAzNjAuMDAsMjI1LjAwIDM4MC4wMCwyMjUuMDAgMzgwLjAwLDIyNS4wMAogICAgICAgICAgICAgMzgwLjAwLDIxMi43MiAzNzMuODgsMTg3LjE2IDM5MC4wMCwxODIuNzgKICAgICAgICAgICAgIDM5NC4xNCwxODEuMzkgMzk5LjU5LDE4Mi44MCA0MDQuMDAsMTgyLjc4CiAgICAgICAgICAgICA0MDQuMDAsMTgyLjc4IDQwOC4wMCwxNjYuMDAgNDA4LjAwLDE2Ni4wMAogICAgICAgICAgICAgMzk2LjQ0LDE2My4xOSAzODcuNjksMTY0Ljc5IDM3OS4wMCwxNzMuMDAgWgogICAgICAgICAgIE0gNDE0LjAwLDE4Mi4wMAogICAgICAgICAgIEMgNDE2Ljc4LDE4Mi43MCA0MjguNTUsMTg1LjA1IDQzMC44MywxODQuNjIKICAgICAgICAgICAgIDQzMy42NSwxODQuMDkgNDM1LjE2LDE4MS41OSA0MzguMDEsMTgwLjE3CiAgICAgICAgICAgICA0NDQuNzAsMTc2Ljg2IDQ1MS4wOSwxNzkuMjIgNDUyLjAwLDE4Ny4wMAogICAgICAgICAgICAgNDQwLjI2LDE4Ny4wMCA0MjQuODQsMTg2LjYwIDQxNi4yMiwxOTYuMDkKICAgICAgICAgICAgIDQwOC41MCwyMDQuNjAgNDExLjUyLDIxOS4zMSA0MjIuMDAsMjI0LjAzCiAgICAgICAgICAgICA0MzEuMjAsMjI4LjE4IDQ0My43MCwyMjYuMTIgNDUyLjAwLDIyMS4wMAogICAgICAgICAgICAgNDUyLjAwLDIyMS4wMCA0NTIuMDAsMjI1LjAwIDQ1Mi4wMCwyMjUuMDAKICAgICAgICAgICAgIDQ1Mi4wMCwyMjUuMDAgNDcxLjAwLDIyNS4wMCA0NzEuMDAsMjI1LjAwCiAgICAgICAgICAgICA0NzEuMDAsMjI1LjAwIDQ3MS4wMCwxODguMDAgNDcxLjAwLDE4OC4wMAogICAgICAgICAgICAgNDcwLjk0LDE4My4xNCA0NzAuMjksMTc3LjA3IDQ2Ny4zNSwxNzMuMDQKICAgICAgICAgICAgIDQ2MS43NCwxNjUuMzYgNDUwLjYzLDE2NC45NiA0NDIuMDAsMTY1LjAwCiAgICAgICAgICAgICA0MjguOTIsMTY1LjA2IDQxOC45NCwxNjkuMTEgNDE0LjAwLDE4Mi4wMCBaCiAgICAgICAgICAgTSAxMjkuMDAsMTY2LjAwCiAgICAgICAgICAgQyAxMjkuMDAsMTY2LjAwIDEzMC4wMCwxODMuMDAgMTMwLjAwLDE4My4wMAogICAgICAgICAgICAgMTMwLjAwLDE4My4wMCAxMzAuMDAsMjA4LjAwIDEzMC4wMCwyMDguMDAKICAgICAgICAgICAgIDEzMC4wMCwyMDguMDAgMTI5LjAwLDIyNS4wMCAxMjkuMDAsMjI1LjAwCiAgICAgICAgICAgICAxMjkuMDAsMjI1LjAwIDE0OS4wMCwyMjUuMDAgMTQ5LjAwLDIyNS4wMAogICAgICAgICAgICAgMTQ5LjAwLDIyNS4wMCAxNDkuMDAsMTY2LjAwIDE0OS4wMCwxNjYuMDAKICAgICAgICAgICAgIDE0OS4wMCwxNjYuMDAgMTI5LjAwLDE2Ni4wMCAxMjkuMDAsMTY2LjAwIFoKICAgICAgICAgICBNIDI2OS4wMCwxODguMDAKICAgICAgICAgICBDIDI2OS4wMCwxODguMDAgMjQ1LjAwLDE4OC4wMCAyNDUuMDAsMTg4LjAwCiAgICAgICAgICAgICAyNDUuNzUsMTg1LjQ1IDI0Ni4zNywxODMuMzMgMjQ4LjM5LDE4MS40MwogICAgICAgICAgICAgMjUxLjg4LDE3OC4xNCAyNjUuMjksMTc1LjUzIDI2OS4wMCwxODguMDAgWgogICAgICAgICAgIE0gNDUyLjAwLDE5OS4wMAogICAgICAgICAgIEMgNDUxLjk2LDIwMS45MyA0NTIuMTUsMjA0LjM5IDQ1MC40MCwyMDYuOTUKICAgICAgICAgICAgIDQ0Ny4zOSwyMTEuMzUgNDM2Ljc3LDIxNC43NiA0MzIuNjAsMjEwLjQyCiAgICAgICAgICAgICA0MzEuNzAsMjA5LjQ4IDQzMS4yOSwyMDguMjggNDMxLjI5LDIwNy4wMAogICAgICAgICAgICAgNDMxLjI5LDIwMS41NiA0MzcuODMsMjAwLjQ4IDQ0Mi4wMCwyMDAuMDcKICAgICAgICAgICAgIDQ0Mi4wMCwyMDAuMDcgNDUyLjAwLDE5OS4wMCA0NTIuMDAsMTk5LjAwIFoiIC8+Cjwvc3ZnPgo='

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
            blockIconURI: blockIconURI,
            blocks: [
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
                            defaultValue: this.BUILDING_BLOCK_INFO[0].name
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
                            defaultValue: this.BUILDING_BLOCK_INFO[0].name
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
                        id: 'minecraft.buildingBlockInfo',
                        default: '建築ブロック：[BLOCK]',
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
                },
                {
                    opcode: 'searchBlock',
                    text: formatMessage({
                        id: 'minecraft.searchBlock',
                        default: '([STARTX],[STARTY],[STARTZ])のブロックを調べる'
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
                },
                {
                    opcode: 'getSearchedBlock',
                    text: formatMessage({
                        id: 'minecraft.getSearchedBlock',
                        default: '調べたブロック'
                    }),
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'checkBlockType',
                    text: formatMessage({
                        id: 'minecraft.checkBlockType',
                        default: '調べたブロックが[TARGETBLOCK]である'
                    }),
                    blockType: BlockType.BOOLEAN,
                    arguments: {
                        TARGETBLOCK: {
                            type: ArgumentType.STRING,
                            defaultValue: this.BUILDING_BLOCK_INFO[0].name
                        }
                    }
                },
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
                }
            ],
            menus: {
                BLOCK: {
                    acceptReporters: true,
                    items: this._buildMenu(this.BUILDING_BLOCK_INFO)
                },
                ENTITY: {
                    acceptReporters: true,
                    items: this._buildMenu(this.ENTITY_INFO)
                }
            }
        };
    }

    /* --------------------------------------
    *************** Utility ****************
    --------------------------------------- */
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
    get BUILDING_BLOCK_INFO() {
        return BlockInfo.genBuildingBlockInfo();
    }

    get ENTITY_INFO() {
        return EntityInfo.genEntityInfo();
    }

    get PARTICLE_INFO() {
        return ParticleInfo.genParticleInfo();
    }

    _createWebSocket() {
        return new WebSocket("ws://" + this.host + ":14711");
    }

    getPlayerPosAsync() {
        this.posUpdating = true;
        return new Promise(((resolve, reject) => {
            const server1 = this._createWebSocket();
            server1.onopen = function (e) {
                e.currentTarget.send('world.getPlayerIds()');
            };
            server1.onmessage = function (e) {
                const playerID = e.data.replace(/\r?\n/g, '');
                const server2 = this._createWebSocket();
                server2.onopen = function (ev) {
                    ev.currentTarget.send(`entity.getPos(${playerID})`);
                };
                server2.onmessage = function (ev) {
                    const posX = ev.data.split(',')[0];
                    const posY = ev.data.split(',')[1];
                    const posZ = ev.data.split(',')[2];
                    const stage = this.runtime.getTargetForStage();
                    stage.posX = Cast.toNumber(posX);
                    stage.posY = Cast.toNumber(posY);
                    stage.posZ = Cast.toNumber(posZ);
                    server2.close();
                }.bind(this);
                server2.onclose = function (ev) {
                    resolve();
                };
            }.bind(this);
            server1.onerror = function (err) {
                reject(err);
            };
        }));
    }

    waitForValidCondition() {
        return new Promise((resolve, reject) => {
            const maxNumberOfAttempts = 40;
            const intervalTime = 50; //ms

            let currentAttempt = 0;
            const interval = setInterval(() => {
                if (currentAttempt > maxNumberOfAttempts - 1) {
                    clearInterval(interval);
                    reject(new Error('Maximum number of attempts exceeded'));
                } else if (this.posUpdating === false && this.blockSearching == false) {
                    clearInterval(interval);
                    resolve();
                }
                currentAttempt++;
            }, intervalTime);
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

    /* --------------------------------------
    *************** REPORTER ****************
    --------------------------------------- */
    getBlocks(args) {
        return this.BUILDING_BLOCK_INFO[args.BLOCK];
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

    setBlock(args) {
        this.waitForValidCondition().then(() => {
            const coordinateMode = this._searchCoordinateMode(args);
            if (coordinateMode === this.absoluteStr) {
                this._setBlockToAbsCoord(args);
            } else if (coordinateMode === this.relativeStr) {
                this._setBlockToRelativeCoord(args);
            }
        });
    }

    _setBlockToAbsCoord(args) {
        const [blockID, blockData] = this._findBlockInfo(args.BLOCK);
        const command = [`world.setBlock(${Math.trunc(args.STARTX)},${Math.trunc(args.STARTY)},${Math.trunc(args.STARTZ)},${blockID},${blockData})`];
        this._sendCommand(command);
    }


    _setBlockToRelativeCoord(args) {
        const [blockID, blockData] = this._findBlockInfo(args.BLOCK);
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
                const X = typeof args.STARTX === 'string' ? Cast.toNumber(posX) + Cast.toNumber(args.STARTX.split('~')[1]) : Cast.toNumber(args.STARTX);
                const Y = typeof args.STARTY === 'string' ? Cast.toNumber(posY) + Cast.toNumber(args.STARTY.split('~')[1]) : Cast.toNumber(args.STARTY);
                const Z = typeof args.STARTZ === 'string' ? Cast.toNumber(posZ) + Cast.toNumber(args.STARTZ.split('~')[1]) : Cast.toNumber(args.STARTZ);
                const command = [`world.setBlock(${Math.trunc(X)},${Math.trunc(Y)},${Math.trunc(Z)},${blockID},${blockData})`];
                this.sendCommand(command);
                e.currentTarget.close();
            }.bind(this);
            ws2.onclose = function (e) {
            };
            e.currentTarget.close();
        }.bind(this);
        ws1.onclose = function (e) {
        };
        ws1.onerror = function (e) {
        };
    }

    setBlocks(args) {
        this.waitForValidCondition().then(() => {
            const coordinateMode = this._searchCoordinateMode(args);
            if (coordinateMode === this.absoluteStr) {
                this._setBlocksToAbsCoord(args);
            } else if (coordinateMode === this.relativeStr) {
                this._setBlocksToRelativeCoord(args);
            }
        });
    }

    _setBlocksToAbsCoord(args) {
        const [blockID, blockData] = this._findBlockInfo(args.BLOCK);
        const command = [`world.setBlocks(${Math.trunc(args.STARTX)},${Math.trunc(args.STARTY)},${Math.trunc(args.STARTZ)},${Math.trunc(args.ENDX)},${Math.trunc(args.ENDY)},${Math.trunc(args.ENDZ)},${blockID},${blockData})`];
        this._sendCommand(command);
    }

    _setBlocksToRelativeCoord(args) {
        const [blockID, blockData] = this._findBlockInfo(args.BLOCK);
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
                const startX = typeof args.STARTX === 'string' ? Cast.toNumber(posX) + Cast.toNumber(args.STARTX.split('~')[1]) : Cast.toNumber(args.STARTX);
                const startY = typeof args.STARTY === 'string' ? Cast.toNumber(posY) + Cast.toNumber(args.STARTY.split('~')[1]) : Cast.toNumber(args.STARTY);
                const startZ = typeof args.STARTZ === 'string' ? Cast.toNumber(posZ) + Cast.toNumber(args.STARTZ.split('~')[1]) : Cast.toNumber(args.STARTZ);
                const endX = typeof args.ENDX === 'string' ? Cast.toNumber(posX) + Cast.toNumber(args.ENDX.split('~')[1]) : Cast.toNumber(args.ENDX);
                const endY = typeof args.ENDY === 'string' ? Cast.toNumber(posY) + Cast.toNumber(args.ENDY.split('~')[1]) : Cast.toNumber(args.ENDY);
                const endZ = typeof args.ENDZ === 'string' ? Cast.toNumber(posZ) + Cast.toNumber(args.ENDZ.split('~')[1]) : Cast.toNumber(args.ENDZ);
                const command = [`world.setBlocks(${Math.trunc(startX)},${Math.trunc(startY)},${Math.trunc(startZ)},${Math.trunc(endX)},${Math.trunc(endY)},${Math.trunc(endZ)},${blockID},${blockData})`];
                this.sendCommand(command);
                e.currentTarget.close();
            }.bind(this);
            ws2.onclose = function (e) {
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
            const targetBlock = this.BUILDING_BLOCK_INFO.find((b) => b.name === block)
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
        this.waitForValidCondition().then(() => {
            const coordinateMode = this._searchCoordinateMode(args);
            if (coordinateMode === this.absoluteStr) {
                this._spawnEntityToAbsCoord(args);
            } else if (coordinateMode === this.relativeStr) {
                this._spawnEntityToRelativeCoord(args);
            }
        });
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
            this._sendRelativePositionCommand(args, 'world.spawnEntity', playerID);
            e.currentTarget.close();
        }.bind(this);
        ws1.onclose = function (e) {
        };
        ws1.onerror = function (e) {
        };
    }

    _sendRelativePositionCommand(args, commandStr, commandArg) {
        const ws = this._createWebSocket();
        ws.onopen = function (e) {
            e.currentTarget.send(`entity.getPos(${commandArg})`);
        };
        ws.onmessage = function (e) {
            const posX = e.data.split(',')[0];
            const posY = e.data.split(',')[1];
            const posZ = e.data.split(',')[2];
            const X = typeof args.STARTX === 'string' ? Cast.toNumber(posX) + Cast.toNumber(args.STARTX.split('~')[1]) : Cast.toNumber(args.STARTX);
            const Y = typeof args.STARTY === 'string' ? Cast.toNumber(posY) + Cast.toNumber(args.STARTY.split('~')[1]) : Cast.toNumber(args.STARTY);
            const Z = typeof args.STARTZ === 'string' ? Cast.toNumber(posZ) + Cast.toNumber(args.STARTZ.split('~')[1]) : Cast.toNumber(args.STARTZ);
            const command = [`${commandStr}(${commandArg},${Math.trunc(X)},${Math.trunc(Y)},${Math.trunc(Z)})`];
            this.sendCommand(command);
            e.currentTarget.close();
        }.bind(this);
        ws.onclose = function (e) {
        };
    }

    teleport(args) {
        this.waitForValidCondition().then(() => {
            const coordinateMode = this._searchCoordinateMode(args);
            if (coordinateMode === this.absoluteStr) {
                this._teleportToAbsCoord(args);
            } else if (coordinateMode === this.relativeStr) {
                this._teleportToRelativeCoord(args);
            }
        });
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

    searchBlock(args) {
        this.waitForValidCondition().then(() => {
            this.blockSearching = true;
            const coordinateMode = this._searchCoordinateMode(args);
            if (coordinateMode === this.absoluteStr) {
                this._searchBlockToAbsCoord(args);
            } else if (coordinateMode === this.relativeStr) {
                this._searchBlockToRelativeCoord(args);
            }
        });
    }

    _searchBlockToAbsCoord(args) {
        const ws = this._createWebSocket();
        ws.onopen = function (e) {
            e.currentTarget.send(`world.getBlockWithData(${args.STARTX},${args.STARTY},${args.STARTZ})`);
        };
        ws.onmessage = function (e) {
            const actualBlock = e.data.replace(/\r?\n/g, "");
            this.searchBlockID = actualBlock.split(',')[0];
            this.searchBlockData = actualBlock.split(',')[1];
            e.currentTarget.close();
        }.bind(this);
        ws.onclose = function (e) {
            this.blockSearching = false;
        }.bind(this);
        ws.onerror = function (e) {
        };
    }

    _searchBlockToRelativeCoord(args) {

    }

    getSearchedBlock() {
        return this.BUILDING_BLOCK_INFO.find(b => b.blockID === this.searchBlockID && b.blockData === this.searchBlockData).name;
    }
    checkBlockType(args) {
        const targetBlock = typeof args.TARGETBLOCK === 'string' ? args.TARGETBLOCK : args.TARGETBLOCK.name;
        return targetBlock === this.getSearchedBlock();
    }

    _checkBlockTypeToAbsCoord(args) {
        const ws = this._createWebSocket();
        ws.onopen = function (e) {
            e.currentTarget.send(`world.getBlockWithData(${args.STARTX},${args.STARTY},${args.STARTZ})`);
        };
        ws.onmessage = function (e) {
            log.log(e);
            const actualBlock = e.data.replace(/\r?\n/g, "");
            const actualBlockID = actualBlock.split(',')[0];
            const actualBlockData = actualBlock.split(',')[1];
            const [expectedBlockID, expectedBlockData] = this._findBlockInfo(args.BLOCK);
            log.log(`${actualBlockID} ${actualBlockData} ${expectedBlockID} ${expectedBlockData}`);
            log.log(expectedBlockID === actualBlockID);
            log.log(expectedBlockData === actualBlockData);
            this.blockTypeCheckResult = (expectedBlockID === actualBlockID) && (expectedBlockData === actualBlockData);
            e.currentTarget.close();
        }.bind(this);
        ws.onclose = function (e) {
            log.log('onclose');
            this.blockTypeChecking = false;
        }.bind(this);
        ws.onerror = function (e) {
            log.log('onerror');
        };
    }

    waitForFinishBlockTypeCheck() {
        return new Promise((resolve, reject) => {
            const maxNumberOfAttempts = 40;
            const intervalTime = 50; //ms

            let currentAttempt = 0;
            const interval = setInterval(() => {
                if (currentAttempt > maxNumberOfAttempts - 1) {
                    clearInterval(interval);
                    reject(new Error('Maximum number of attempts exceeded'));
                } else if (this.blockTypeChecking === false) {
                    clearInterval(interval);
                    resolve();
                }
                currentAttempt++;
            }, intervalTime);
        });
    }

    _checkBlockTypeToRelativeCoord(args) {

    }


    }
}

module.exports = Scratch3Minecraft;
