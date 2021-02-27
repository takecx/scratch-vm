const formatMessage = require('format-message');

exports.genParticleInfo = () => {
    return [
        {
            name: formatMessage({
                id: 'minecraft.dragonbreath',
                default: 'ドラゴンブレス'
            }),
            particleName: 'dragonbreath'
        },
        {
            name: formatMessage({
                id: 'minecraft.mobSpellAmbient',
                default: 'ビーコン'
            }),
            particleName: 'mobSpellAmbient'
        },
        {
            name: formatMessage({
                id: 'minecraft.angryVillager',
                default: '怒り'
            }),
            particleName: 'angryVillager'
        },
        {
            name: formatMessage({
                id: 'minecraft.barrier',
                default: 'バリア'
            }),
            particleName: 'barrier'
        }
    ];
};