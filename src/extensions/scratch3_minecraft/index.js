const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');
const formatMessage = require('format-message');
const BlockInfo = require('./block_info');
const EntityInfo = require('./entity_info');
const ParticleInfo = require('./particle_info');
const Enchants = require('./enchant_info');

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
                    opcode: 'getBuildingBlocks',
                    text: formatMessage({
                        id: 'minecraft.buildingBlockInfo',
                        default: '建築ブロック：[BLOCK]',
                        description: 'name of minecraft blocks.'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        BLOCK: {
                            type: ArgumentType.NUMBER,
                            menu: 'BUILDINGBLOCK',
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'getDecorationBlocks',
                    text: formatMessage({
                        id: 'minecraft.decorationBlockInfo',
                        default: '装飾ブロック：[BLOCK]',
                        description: 'name of minecraft decoration blocks.'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        BLOCK: {
                            type: ArgumentType.NUMBER,
                            menu: 'DECORATIONBLOCK',
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'getRedstoneBlocks',
                    text: formatMessage({
                        id: 'minecraft.redstoneBlockInfo',
                        default: 'レッドストーン：[BLOCK]',
                        description: 'name of minecraft decoration blocks.'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        BLOCK: {
                            type: ArgumentType.NUMBER,
                            menu: 'REDSTONEBLOCK',
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'getTransportationBlocks',
                    text: formatMessage({
                        id: 'minecraft.transportationBlockInfo',
                        default: '移動[BLOCK]',
                        description: 'name of minecraft transportation blocks.'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        BLOCK: {
                            type: ArgumentType.NUMBER,
                            menu: 'TRANSPORTATIONBLOCK',
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
                },
                {
                    opcode: 'changeWeather',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'minecraft.changeWeather',
                        default: '天気を[WEATHER]に変える'
                    }),
                    arguments: {
                        WEATHER: {
                            type: ArgumentType.NUMBER,
                            menu: 'WEATHER',
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'changeGameMode',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'minecraft.changeGameMode',
                        default: '[GAMEMODE]にする'
                    }),
                    arguments: {
                        GAMEMODE: {
                            type: ArgumentType.NUMBER,
                            menu: 'GAMEMODE',
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'changeDifficulty',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'minecraft.changeDifficulty',
                        default: '[DIFFICULTY]にする'
                    }),
                    arguments: {
                        DIFFICULTY: {
                            type: ArgumentType.NUMBER,
                            menu: 'DIFFICULTY',
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'giveEnchant',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'minecraft.giveEnchant',
                        default: 'レベル[LEVEL]の[ENCHANT]を付与する'
                    }),
                    arguments: {
                        LEVEL: {
                            type: ArgumentType.NUMBER,
                            menu: 'LEVEL',
                            defaultValue: 0
                        },
                        ENCHANT: {
                            type: ArgumentType.NUMBER,
                            menu: 'ENCHANT',
                            defaultValue: 0
                        }
                    }
                }
                ,
                {
                    opcode: 'spawnParticle',
                    text: formatMessage({
                        id: 'minecraft.spawnParticle',
                        default: '([STARTX],[STARTY],[STARTZ])から([ENDX],[ENDY],[ENDZ])まで速さ[SPEED]で[PARTICLE]を[COUNT]回発生させる',
                        description: 'spawnParticle.'
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
                        },
                        SPEED: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        },
                        PARTICLE: {
                            type: ArgumentType.NUMBER,
                            menu: 'PARTICLE',
                            defaultValue: 0
                        },
                        COUNT: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    }
                }
            ],
            menus: {
                BUILDINGBLOCK: {
                    acceptReporters: true,
                    items: this._buildMenu(this.BUILDING_BLOCK_INFO)
                },
                DECORATIONBLOCK: {
                    acceptReporters: true,
                    items: this._buildMenu(this.DECORATION_BLOCK_INFO)
                },
                REDSTONEBLOCK: {
                    acceptReporters: true,
                    items: this._buildMenu(this.REDSTONE_BLOCK_INFO)
                },
                TRANSPORTATIONBLOCK: {
                    acceptReporters: true,
                    items: this._buildMenu(this.TRANSPORTATION_BLOCK_INFO)
                },
                ENTITY: {
                    acceptReporters: true,
                    items: this._buildMenu(this.ENTITY_INFO)
                },
                WEATHER: {
                    acceptReporters: true,
                    items: this._buildMenu(this.WEATHER_TYPES)
                },
                GAMEMODE: {
                    acceptReporters: true,
                    items: this._buildMenu(this.GAMEMODES)
                },
                DIFFICULTY: {
                    acceptReporters: true,
                    items: this._buildMenu(this.DIFFICULTIES)
                },
                LEVEL: {
                    acceptReporters: true,
                    items: this._buildMenu(this.LEVELS)
                },
                ENCHANT: {
                    acceptReporters: true,
                    items: this._buildMenu(this.ENCHANTS)
                },
                PARTICLE: {
                    acceptReporters: true,
                    items: this._buildMenu(this.PARTICLE_INFO)
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

    get DECORATION_BLOCK_INFO() {
        return BlockInfo.genDecorationBlockInfo();
    }

    get REDSTONE_BLOCK_INFO() {
        return BlockInfo.genRedStoneBlockInfo();
    }

    get TRANSPORTATION_BLOCK_INFO() {
        return BlockInfo.genTransportationBlockInfo();
    }

    get ENTITY_INFO() {
        return EntityInfo.genEntityInfo();
    }

    get PARTICLE_INFO() {
        return ParticleInfo.genParticleInfo();
    }

    get WEATHER_TYPES() {
        return [
            {
                name: formatMessage({
                    id: 'minecraft.clear',
                    default: '晴れ'
                }),
                weather: 'clear'
            },
            {
                name: formatMessage({
                    id: 'minecraft.rain',
                    default: '雨'
                }),
                weather: 'rain'
            },
            {
                name: formatMessage({
                    id: 'minecraft.thunder',
                    default: '雷'
                }),
                weather: 'thunder'
            }];
    }

    get GAMEMODES() {
        return [
            {
                name: formatMessage({
                    id: 'minecraft.survival',
                    default: 'サバイバルモード'
                }),
                mode: 0
            },
            {
                name: formatMessage({
                    id: 'minecraft.creative',
                    default: 'クリエイティブモード'
                }),
                mode: 1
            },
            {
                name: formatMessage({
                    id: 'minecraft.adventure',
                    default: 'アドベンチャーモード'
                }),
                mode: 2
            },
            {
                name: formatMessage({
                    id: 'minecraft.spectator',
                    default: 'スペクテイターモード'
                }),
                mode: 3
            }
        ];
    }

    get DIFFICULTIES() {
        return [
            {
                name: formatMessage({
                    id: 'minecraft.peaceful',
                    default: 'ピースフル'
                }),
                difficulty: 0
            },
            {
                name: formatMessage({
                    id: 'minecraft.easy',
                    default: 'イージー'
                }),
                difficulty: 1
            },
            {
                name: formatMessage({
                    id: 'minecraft.normal',
                    default: 'ノーマル'
                }),
                difficulty: 2
            },
            {
                name: formatMessage({
                    id: 'minecraft.hard',
                    default: 'ハード'
                }),
                difficulty: 3
            }
        ];
    }

    get LEVELS() {
        return [
            {
                name: formatMessage({
                    id: 'minecraft.firstlevel',
                    default: '1'
                })
            },
            {
                name: formatMessage({
                    id: 'minecraft.secondlevel',
                    default: '2'
                })
            },
            {
                name: formatMessage({
                    id: 'minecraft.thirdlevel',
                    default: '3'
                })
            },
            {
                name: formatMessage({
                    id: 'minecraft.fourthlevel',
                    default: '4'
                })
            },
            {
                name: formatMessage({
                    id: 'minecraft.fifthlevel',
                    default: '5'
                })
            }
        ];
    }

    get ENCHANTS() {
        return Enchants.getEnchantInfo();
    }

    _createWebSocket() {
        return new WebSocket("ws://" + this.host + ":14711");
    }

    async getPlayerIDAsync() {
        return new Promise(((resolve, reject) => {
            const server = this._createWebSocket();
            server.onopen = function (e) {
                e.currentTarget.send('world.getPlayerIds()');
            };
            server.onmessage = function (e) {
                const playerID = e.data.replace(/\r?\n/g, '');
                e.currentTarget.close();
                resolve(playerID);
            };
            server.onerror = function (e) {
                reject();
            }
        }));
    }
    async updatePlayerPosAsync() {
        const playerID = await this.getPlayerIDAsync();
        return new Promise(((resolve, reject) => {
            const server = this._createWebSocket();

            server.onopen = function (e) {
                e.currentTarget.send(`entity.getPos(${playerID})`);
            };
            server.onmessage = function (e) {
                const posX = e.data.split(',')[0];
                const posY = e.data.split(',')[1];
                const posZ = e.data.split(',')[2];
                const stage = this.runtime.getTargetForStage();
                stage.posX = Cast.toNumber(posX);
                stage.posY = Cast.toNumber(posY);
                stage.posZ = Cast.toNumber(posZ);
                e.currentTarget.close();
            }.bind(this);
            server.onclose = function (e) {
                resolve();
            };
            server.onerror = function (e) {
                reject();
            }
        }));
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

    async _sendCommand(command) {
        return new Promise(((resolve, reject) => {
            const ws = this._createWebSocket();
            ws.onopen = function (e) {
                e.currentTarget.send(command);
                e.currentTarget.close();
            };
            ws.onclose = function (e) {
                resolve();
            };
            ws.onerror = function (e) {
                reject();
            };
        }));
    }

    _convertStartPosToRelative(args) {
        let startRelCoord = new Object();
        const stage = this.runtime.getTargetForStage();
        startRelCoord.X = typeof args.STARTX === 'string' ? Cast.toNumber(stage.posX) + Cast.toNumber(args.STARTX.split('~')[1]) : Cast.toNumber(args.STARTX);
        startRelCoord.Y = typeof args.STARTY === 'string' ? Cast.toNumber(stage.posY) + Cast.toNumber(args.STARTY.split('~')[1]) : Cast.toNumber(args.STARTY);
        startRelCoord.Z = typeof args.STARTZ === 'string' ? Cast.toNumber(stage.posZ) + Cast.toNumber(args.STARTZ.split('~')[1]) : Cast.toNumber(args.STARTZ);
        return startRelCoord;
    }

    _convertEndPosToRelative(args) {
        let endRelCoord = new Object();
        const stage = this.runtime.getTargetForStage();
        endRelCoord.X = typeof args.ENDX === 'string' ? Cast.toNumber(stage.posX) + Cast.toNumber(args.ENDX.split('~')[1]) : Cast.toNumber(args.ENDX);
        endRelCoord.Y = typeof args.ENDY === 'string' ? Cast.toNumber(stage.posY) + Cast.toNumber(args.ENDY.split('~')[1]) : Cast.toNumber(args.ENDY);
        endRelCoord.Z = typeof args.ENDZ === 'string' ? Cast.toNumber(stage.posZ) + Cast.toNumber(args.ENDZ.split('~')[1]) : Cast.toNumber(args.ENDZ);
        return endRelCoord;
    }

    _findBlockInfo(block) {
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

    _findEntityInfo(entityName) {
        let entity = null;
        if (typeof entityName === 'string' && Number.isNaN(Cast.toNumber(entityName))) {
            const targetEntity = this.ENTITY_INFO.find((e) => e.name === entityName);
            entity = targetEntity.entityName;
        } else {
            const index = Cast.toNumber(entityName);
            entity = this.ENTITY_INFO[index].entityName;
        }
        return entity;
    }

    _findParticleInfo(particleName) {
        let particle = null;
        if (typeof particleName === 'string' && Number.isNaN(Cast.toNumber(particleName))) {
            const targetParticle = this.PARTICLE_INFO.find((e) => e.name === particleName);
            particle = targetParticle.particleName;
        } else {
            const index = Cast.toNumber(particleName);
            particle = this.PARTICLE_INFO[index].particleName;
        }
        return particle;
    }

    /* --------------------------------------
    *************** REPORTER ****************
    --------------------------------------- */
    getBuildingBlocks(args) {
        return this.BUILDING_BLOCK_INFO[args.BLOCK];
    }

    getDecorationBlocks(args) {
        return this.DECORATION_BLOCK_INFO[args.BLOCK];
    }

    getRedstoneBlocks(args) {
        return this.REDSTONE_BLOCK_INFO[args.BLOCK];
    }

    getTransportationBlocks(args) {
        return this.TRANSPORTATION_BLOCK_INFO[args.BLOCK];
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

    getSearchedBlock() {
        const targetBlock = this.BUILDING_BLOCK_INFO.find(b => b.blockID === this.searchBlockID && b.blockData === this.searchBlockData);
        if (typeof targetBlock === 'undefined') {
            return '不明';
        }
        return targetBlock.name;
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

    setHost(args) {
        this.host = args.TEXT;
    }

    async setBlock(args) {
        const coordinateMode = this._searchCoordinateMode(args);
        if (coordinateMode === this.absoluteStr) {
            await this._setBlockToAbsCoord(args);
        } else if (coordinateMode === this.relativeStr) {
            await this._setBlockToRelativeCoord(args);
        }
    }

    async _setBlockToAbsCoord(args) {
        const [blockID, blockData] = this._findBlockInfo(args.BLOCK);
        const command = `world.setBlock(${Math.trunc(args.STARTX)},${Math.trunc(args.STARTY)},${Math.trunc(args.STARTZ)},${blockID},${blockData})`;
        await this._sendCommand(command);
    }

    async _setBlockToRelativeCoord(args) {
        const [blockID, blockData] = this._findBlockInfo(args.BLOCK);
        await this.updatePlayerPosAsync();
        const relCoord = this._convertStartPosToRelative(args);
        const command = `world.setBlock(${Math.trunc(relCoord.X)},${Math.trunc(relCoord.Y)},${Math.trunc(relCoord.Z)},${blockID},${blockData})`;
        await this._sendCommand(command);
    }

    async setBlocks(args) {
        const coordinateMode = this._searchCoordinateMode(args);
        if (coordinateMode === this.absoluteStr) {
            await this._setBlocksToAbsCoord(args);
        } else if (coordinateMode === this.relativeStr) {
            await this._setBlocksToRelativeCoord(args);
        }
    }

    async _setBlocksToAbsCoord(args) {
        const [blockID, blockData] = this._findBlockInfo(args.BLOCK);
        const command = `world.setBlocks(${Math.trunc(args.STARTX)},${Math.trunc(args.STARTY)},${Math.trunc(args.STARTZ)},${Math.trunc(args.ENDX)},${Math.trunc(args.ENDY)},${Math.trunc(args.ENDZ)},${blockID},${blockData})`;
        await this._sendCommand(command);
    }

    async _setBlocksToRelativeCoord(args) {
        const [blockID, blockData] = this._findBlockInfo(args.BLOCK);
        await this.updatePlayerPosAsync();
        const startRelCoord = this._convertStartPosToRelative(args);
        const endRelCoord = this._convertEndPosToRelative(args);
        const command = `world.setBlocks(${Math.trunc(startRelCoord.X)},${Math.trunc(startRelCoord.Y)},${Math.trunc(startRelCoord.Z)},${Math.trunc(endRelCoord.X)},${Math.trunc(endRelCoord.Y)},${Math.trunc(endRelCoord.Z)},${blockID},${blockData})`;
        await this._sendCommand(command);
    }

    async chat(args) {
        const command = "chat.post(" + args.TEXT + ")";
        await this._sendCommand(command);
    }

    async getPlayerPosition() {
        await this.updatePlayerPosAsync();
    }

    async spawnEntity(args) {
        const coordinateMode = this._searchCoordinateMode(args);
        if (coordinateMode === this.absoluteStr) {
            await this._spawnEntityToAbsCoord(args);
        } else if (coordinateMode === this.relativeStr) {
            await this._spawnEntityToRelativeCoord(args);
        }
    }

    async _spawnEntityToAbsCoord(args) {
        const entityName = this._findEntityInfo(args.ENTITY);
        const command = `world.spawnEntity(${entityName},${Math.trunc(args.STARTX)},${Math.trunc(args.STARTY)},${Math.trunc(args.STARTZ)})`;
        await this._sendCommand(command);
    }

    async _spawnEntityToRelativeCoord(args) {
        const entityName = this._findEntityInfo(args.ENTITY);
        await this.updatePlayerPosAsync();
        const relCoord = this._convertStartPosToRelative(args);
        const command = `world.spawnEntity(${entityName},${Math.trunc(relCoord.X)},${Math.trunc(relCoord.Y)},${Math.trunc(relCoord.Z)})`;
        await this._sendCommand(command);
    }

    async teleport(args) {
        const coordinateMode = this._searchCoordinateMode(args);
        if (coordinateMode === this.absoluteStr) {
            await this._teleportToAbsCoord(args);
        } else if (coordinateMode === this.relativeStr) {
            await this._teleportToRelativeCoord(args);
        }
    }

    async _teleportToAbsCoord(args) {
        const playerID = await this.getPlayerIDAsync();
        const command = `entity.setPos(${playerID},${Math.trunc(args.STARTX)},${Math.trunc(args.STARTY)},${Math.trunc(args.STARTZ)})`;
        await this._sendCommand(command);
    }

    async _teleportToRelativeCoord(args) {
        const playerID = await this.getPlayerIDAsync();
        await this.updatePlayerPosAsync();
        const relCoord = this._convertStartPosToRelative(args);
        const command = `entity.setPos(${playerID},${Math.trunc(relCoord.X)},${Math.trunc(relCoord.Y)},${Math.trunc(relCoord.Z)})`;
        await this._sendCommand(command);
    }

    async searchBlock(args) {
        const coordinateMode = this._searchCoordinateMode(args);
        if (coordinateMode === this.absoluteStr) {
            await this._searchBlockToAbsCoord(args);
        } else if (coordinateMode === this.relativeStr) {
            await this._searchBlockToRelativeCoord(args);
        }
    }

    async _searchBlockToAbsCoord(args) {
        return new Promise(((resolve, reject) => {
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
                resolve();
            }.bind(this);
            ws.onerror = function (e) {
                reject();
            };
        }));
    }

    async _searchBlockToRelativeCoord(args) {
        await this.updatePlayerPosAsync();
        const relCoord = this._convertStartPosToRelative(args);
        args.STARTX = Cast.toString(Math.trunc(relCoord.X));
        args.STARTY = Cast.toString(Math.trunc(relCoord.Y));
        args.STARTZ = Cast.toString(Math.trunc(relCoord.Z));
        await this._searchBlockToAbsCoord(args);
    }

    checkBlockType(args) {
        const targetBlock = typeof args.TARGETBLOCK === 'string' ? args.TARGETBLOCK : args.TARGETBLOCK.name;
        return targetBlock === this.getSearchedBlock();
    }

    async changeWeather(args) {
        const weather = this.WEATHER_TYPES[args.WEATHER].weather;
        const command = `world.changeWeather(${weather})`;
        await this._sendCommand(command);
    }

    async changeGameMode(args) {
        const gamemode = this.GAMEMODES[args.GAMEMODE].mode;
        const command = `world.changeGameMode(${gamemode})`;
        await this._sendCommand(command);
    }

    async changeDifficulty(args) {
        const difficulty = this.DIFFICULTIES[args.DIFFICULTY].difficulty;
        const command = `world.changeDifficulty(${difficulty})`;
        await this._sendCommand(command);
    }

    async giveEnchant(args) {
        const level = this.LEVELS[args.LEVEL].name;
        const enchantId = this.ENCHANTS[args.ENCHANT].id;
        const command = `giveEnchant(${enchantId},${level})`;
        await this._sendCommand(command);
    }

    async spawnParticle(args) {
        const coordinateMode = this._searchCoordinateMode(args);
        if (coordinateMode === this.absoluteStr) {
            await this._spawnParticleToAbsCoord(args);
        } else if (coordinateMode === this.relativeStr) {
            await this._spawnParticleToRelativeCoord(args);
        }
    }

    async _spawnParticleToAbsCoord(args) {
        const particleName = this._findParticleInfo(args.PARTICLE);
        const command = `world.spawnParticle(${particleName},${Math.trunc(args.STARTX)},${Math.trunc(args.STARTY)},${Math.trunc(args.STARTZ)},${Math.trunc(args.ENDX)},${Math.trunc(args.ENDY)},${Math.trunc(args.ENDZ)},${args.SPEED},${args.COUNT})`;
        await this._sendCommand(command);
    }

    async _spawnParticleToRelativeCoord(args) {
        const particleName = this._findParticleInfo(args.PARTICLE);
        await this.updatePlayerPosAsync();
        const startRelCoord = this._convertStartPosToRelative(args);
        const endRelCoord = this._convertEndPosToRelative(args);
        const command = `world.spawnParticle(${particleName},${Math.trunc(startRelCoord.X)},${Math.trunc(startRelCoord.Y)},${Math.trunc(startRelCoord.Z)},${Math.trunc(endRelCoord.X)},${Math.trunc(endRelCoord.Y)},${Math.trunc(endRelCoord.Z)},${args.SPEED},${args.COUNT})`;
        await this._sendCommand(command);
    }

}

module.exports = Scratch3Minecraft;
