const formatMessage = require('format-message');

exports.genBuildingBlockInfo = () => {
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
};