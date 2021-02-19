const formatMessage = require('format-message');

exports.genEntityInfo = () => {
    return [
        {
            name: formatMessage({
                id: 'minecraft.wither_skeleton',
                default: 'ウィザースケルトン'
            }),
            entityName: 'wither_skeleton'
        },
        {
            name: formatMessage({
                id: 'minecraft.elder_guardian',
                default: 'エルダーガーディアン'
            }),
            entityName: 'elder_guardian'
        },
        {
            name: formatMessage({
                id: 'minecraft.armor_stand',
                default: '防具立て'
            }),
            entityName: 'armor_stand'
        }
    ];
};