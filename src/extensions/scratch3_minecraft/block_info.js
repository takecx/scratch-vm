const formatMessage = require('format-message');

exports.genBuildingBlockInfo = () => {
    return [
        {
            name: formatMessage({
                id: 'minecraft.stone',
                default: '石'
            }),
            itemID: 'minecraft:stone',
            blockID: '1',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.granite',
                default: '花崗岩'
            }),
            itemID: 'minecraft:granite',
            blockID: '1',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.polished_granite',
                default: '磨かれた花崗岩'
            }),
            itemID: 'minecraft:polished_granite',
            blockID: '1',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.Diorite',
                default: '閃緑岩'
            }),
            itemID: 'minecraft:diorite',
            blockID: '1',
            blockData: '3'
        },
        {
            name: formatMessage({
                id: 'minecraft.PolishedDiorite',
                default: '磨かれた閃緑岩'
            }),
            itemID: 'minecraft:polished_diorite',
            blockID: '1',
            blockData: '4'
        },
        {
            name: formatMessage({
                id: 'minecraft.Andesite',
                default: '安山岩'
            }),
            itemID: 'minecraft:andesite',
            blockID: '1',
            blockData: '5'
        },
        {
            name: formatMessage({
                id: 'minecraft.PolishedAndesite',
                default: '磨かれた安山岩'
            }),
            itemID: 'minecraft:polished_andesite',
            blockID: '1',
            blockData: '6'
        },
        {
            name: formatMessage({
                id: 'minecraft.Grass',
                default: '草'
            }),
            itemID: 'minecraft:grass',
            blockID: '2',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Dirt',
                default: '土'
            }),
            itemID: 'minecraft:dirt',
            blockID: '3',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.CoarseDirt',
                default: '粗い土'
            }),
            itemID: 'minecraft:coarse_dirt',
            blockID: '3',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.Podzol',
                default: 'ポドゾル'
            }),
            itemID: 'minecraft:podzol',
            blockID: '3',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.Cobblestone',
                default: '丸石'
            }),
            itemID: 'minecraft:cobblestone',
            blockID: '4',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.OakWoodPlank',
                default: 'オークの板材'
            }),
            itemID: 'minecraft:oak_planks',
            blockID: '5',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.SpruceWoodPlank',
                default: 'トウヒの板材'
            }),
            itemID: 'minecraft:spruce_planks',
            blockID: '5',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.BirchWoodPlank',
                default: 'シラカバの板材'
            }),
            itemID: 'minecraft:birch_planks',
            blockID: '5',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.JungleWoodPlank',
                default: 'ジャングルの板材'
            }),
            itemID: 'minecraft:jungle_planks',
            blockID: '5',
            blockData: '3'
        },
        {
            name: formatMessage({
                id: 'minecraft.AcaciaWoodPlank',
                default: 'アカシアの板材'
            }),
            itemID: 'minecraft:acacia_planks',
            blockID: '5',
            blockData: '4'
        },
        {
            name: formatMessage({
                id: 'minecraft.DarkOakWoodPlank',
                default: 'ダークオークの板材'
            }),
            itemID: 'minecraft:dark_oak_planks',
            blockID: '5',
            blockData: '5'
        },
        {
            name: formatMessage({
                id: 'minecraft.Bedrock',
                default: '岩盤'
            }),
            itemID: 'minecraft:bedrock',
            blockID: '7',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Sand',
                default: '砂'
            }),
            itemID: 'minecraft:sand',
            blockID: '12',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.RedSand',
                default: '赤い砂'
            }),
            itemID: 'minecraft:red_sand',
            blockID: '12',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.Gravel',
                default: '砂利'
            }),
            itemID: 'minecraft:gravel',
            blockID: '13',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.GoldOre',
                default: '金鉱石'
            }),
            itemID: 'minecraft:gold_ore',
            blockID: '14',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.IronOre',
                default: '鉄鉱石'
            }),
            itemID: 'minecraft:iron_ore',
            blockID: '15',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.CoalOre',
                default: '石炭'
            }),
            itemID: 'minecraft:coal_ore',
            blockID: '16',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.OakWood',
                default: 'オークの木'
            }),
            itemID: 'minecraft:oak_log',
            blockID: '17',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.SpruceWood',
                default: 'トウヒの木'
            }),
            itemID: 'minecraft:spruce_log',
            blockID: '17',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.BirchWood',
                default: 'シラカバの木'
            }),
            itemID: 'minecraft:birch_log',
            blockID: '17',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.JungleWood',
                default: 'ジャングルの木'
            }),
            itemID: 'minecraft:jungle_log',
            blockID: '17',
            blockData: '3'
        },
        {
            name: formatMessage({
                id: 'minecraft.Sponge',
                default: 'スポンジ'
            }),
            itemID: 'minecraft:sponge',
            blockID: '19',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.WetSponge',
                default: '濡れたスポンジ'
            }),
            itemID: 'minecraft:wet_sponge',
            blockID: '19',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.Glass',
                default: 'ガラス'
            }),
            itemID: 'minecraft:glass',
            blockID: '20',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.LapisLazuliOre',
                default: 'ラピスラズリ鉱石'
            }),
            itemID: 'minecraft:lapis_ore',
            blockID: '21',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.LapisLazuliBlock',
                default: 'ラピスラズリブロック'
            }),
            itemID: 'minecraft:lapis_block',
            blockID: '22',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Sandstone',
                default: '砂岩'
            }),
            itemID: 'minecraft:sandstone',
            blockID: '24',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.ChiseledSandstone',
                default: '模様入りの砂岩'
            }),
            itemID: 'minecraft:chiseled_sandstone',
            blockID: '24',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.SmoothSandstone',
                default: '滑らかな砂岩'
            }),
            itemID: 'minecraft:cut_sandstone',
            blockID: '24',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.WhiteWool',
                default: '白色の羊毛'
            }),
            itemID: 'minecraft:white_wool',
            blockID: '35',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.OrangeWool',
                default: 'オレンジの羊毛'
            }),
            itemID: 'minecraft:orange_wool',
            blockID: '35',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.Magenta',
                default: '赤紫色の羊毛'
            }),
            itemID: 'minecraft:magenta_wool',
            blockID: '35',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.LightBlueWool',
                default: '空色の羊毛'
            }),
            itemID: 'minecraft:light_blue_wool',
            blockID: '35',
            blockData: '3'
        },
        {
            name: formatMessage({
                id: 'minecraft.YellowWool',
                default: '黄色の羊毛'
            }),
            itemID: 'minecraft:yellow_wool',
            blockID: '35',
            blockData: '4'
        },
        {
            name: formatMessage({
                id: 'minecraft.LimeWool',
                default: '黄緑色の羊毛'
            }),
            itemID: 'minecraft:lime_wool',
            blockID: '35',
            blockData: '5'
        },
        {
            name: formatMessage({
                id: 'minecraft.PinkWool',
                default: '桃色の羊毛'
            }),
            itemID: 'minecraft:pink_wool',
            blockID: '35',
            blockData: '6'
        },
        {
            name: formatMessage({
                id: 'minecraft.GrayWool',
                default: '灰色の羊毛'
            }),
            itemID: 'minecraft:gray_wool',
            blockID: '35',
            blockData: '7'
        },
        {
            name: formatMessage({
                id: 'minecraft.LightGrayWool',
                default: '薄灰色の羊毛'
            }),
            itemID: 'minecraft:light_gray_wool',
            blockID: '35',
            blockData: '8'
        },
        {
            name: formatMessage({
                id: 'minecraft.CyanWool',
                default: '青緑色の羊毛'
            }),
            itemID: 'minecraft:cyan_wool',
            blockID: '35',
            blockData: '9'
        },
        {
            name: formatMessage({
                id: 'minecraft.PurpleWool',
                default: '紫色の羊毛'
            }),
            itemID: 'minecraft:purple_wool',
            blockID: '35',
            blockData: '10'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlueWool',
                default: '青色の羊毛'
            }),
            itemID: 'minecraft:blue_wool',
            blockID: '35',
            blockData: '11'
        },
        {
            name: formatMessage({
                id: 'minecraft.BrownWool',
                default: '茶色の羊毛'
            }),
            itemID: 'minecraft:brown_wool',
            blockID: '35',
            blockData: '12'
        },
        {
            name: formatMessage({
                id: 'minecraft.GreenWool',
                default: '緑色の羊毛'
            }),
            itemID: 'minecraft:green_wool',
            blockID: '35',
            blockData: '13'
        },
        {
            name: formatMessage({
                id: 'minecraft.RedWool',
                default: '赤色の羊毛'
            }),
            itemID: 'minecraft:red_wool',
            blockID: '35',
            blockData: '14'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlackWool',
                default: '黒色の羊毛'
            }),
            itemID: 'minecraft:black_wool',
            blockID: '35',
            blockData: '15'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlockOfGold',
                default: '金ブロック'
            }),
            itemID: 'minecraft:gold_block',
            blockID: '41',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlockOfIron',
                default: '鉄ブロック'
            }),
            itemID: 'minecraft:iron_block',
            blockID: '42',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.StoneSlab',
                default: '石のハーフブロック'
            }),
            itemID: 'minecraft:stone_slab',
            blockID: '44',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.SandstoneSlab',
                default: '砂岩のハーフブロック'
            }),
            itemID: 'minecraft:sandstone_slab',
            blockID: '44',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.CobblestoneSlab',
                default: '丸石のハーフブロック'
            }),
            itemID: 'minecraft:cobblestone_slab',
            blockID: '44',
            blockData: '3'
        },
        {
            name: formatMessage({
                id: 'minecraft.BricksSlab',
                default: 'レンガのハーフブロック'
            }),
            itemID: 'minecraft:brick_slab',
            blockID: '44',
            blockData: '4'
        },
        {
            name: formatMessage({
                id: 'minecraft.StoneBrickSlab',
                default: '石レンガのハーフブロック'
            }),
            itemID: 'minecraft:stone_brick_slab',
            blockID: '44',
            blockData: '5'
        },
        {
            name: formatMessage({
                id: 'minecraft.NetherBrickSlab',
                default: 'ネザーレンガのハーフブロック'
            }),
            itemID: 'minecraft:nether_brick_slab',
            blockID: '44',
            blockData: '6'
        },
        {
            name: formatMessage({
                id: 'minecraft.QuartzSlab',
                default: 'クォーツのハーフブロック'
            }),
            itemID: 'minecraft:quartz_slab',
            blockID: '44',
            blockData: '7'
        },
        {
            name: formatMessage({
                id: 'minecraft.Bricks',
                default: 'レンガ'
            }),
            itemID: 'minecraft:bricks',
            blockID: '45',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Bookshelf',
                default: '本棚'
            }),
            itemID: 'minecraft:bookshelf',
            blockID: '47',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.MossStone',
                default: '苔むした丸石'
            }),
            itemID: 'minecraft:mossy_cobblestone',
            blockID: '48',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Obsidian',
                default: '黒曜石'
            }),
            itemID: 'minecraft:obsidian',
            blockID: '49',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.OakWoodStairs',
                default: 'オークの木の階段'
            }),
            itemID: 'minecraft:oak_stairs',
            blockID: '53',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.DiamondOre',
                default: 'ダイアモンド鉱石'
            }),
            itemID: 'minecraft:diamond_ore',
            blockID: '56',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.DiamondBlock',
                default: 'ダイアモンドブロック'
            }),
            itemID: 'minecraft:diamond_block',
            blockID: '57',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.CobblestoneStairs',
                default: '丸石の階段'
            }),
            itemID: 'minecraft:cobblestone_stairs',
            blockID: '67',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.RedstoneOre',
                default: 'レッドストーン鉱石'
            }),
            itemID: 'minecraft:redstone_ore',
            blockID: '73',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Ice',
                default: '氷'
            }),
            itemID: 'minecraft:ice',
            blockID: '79',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Snow',
                default: '雪'
            }),
            itemID: 'minecraft:snow',
            blockID: '78',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Clay',
                default: '粘土'
            }),
            itemID: 'minecraft:clay',
            blockID: '82',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Pumpkin',
                default: 'カボチャ'
            }),
            itemID: 'minecraft:pumpkin',
            blockID: '86',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Netherrack',
                default: 'ネザーラック'
            }),
            itemID: 'minecraft:netherrack',
            blockID: '87',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.SoulSand',
                default: 'ソウルサンド'
            }),
            itemID: 'minecraft:soul_sand',
            blockID: '88',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Glowstone',
                default: 'グロウストーン'
            }),
            itemID: 'minecraft:glowstone',
            blockID: '89',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.JackoLantern',
                default: 'ジャック・オー・ランタン'
            }),
            itemID: 'minecraft:jack_o_lantern',
            blockID: '91',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.WhiteStainedGlass',
                default: '白色の色付きガラス'
            }),
            itemID: 'minecraft:white_stained_glass',
            blockID: '95',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.OrangeStainedGlass',
                default: '橙色の色付きガラス'
            }),
            itemID: 'minecraft:orange_stained_glass',
            blockID: '95',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.MagentaStainedGlass',
                default: '赤紫色の色付きガラス'
            }),
            itemID: 'minecraft:magenta_stained_glass',
            blockID: '95',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.LightBlueStainedGlass',
                default: '空色の色付きガラス'
            }),
            itemID: 'minecraft:light_blue_stained_glass',
            blockID: '95',
            blockData: '3'
        },
        {
            name: formatMessage({
                id: 'minecraft.YellowStainedGlass',
                default: '黄色の色付きガラス'
            }),
            itemID: 'minecraft:yellow_stained_glass',
            blockID: '95',
            blockData: '4'
        },
        {
            name: formatMessage({
                id: 'minecraft.LimeStainedGlass',
                default: '黄緑色の色付きガラス'
            }),
            itemID: 'minecraft:lime_stained_glass',
            blockID: '95',
            blockData: '5'
        },
        {
            name: formatMessage({
                id: 'minecraft.PinkStainedGlass',
                default: '桃色の色付きガラス'
            }),
            itemID: 'minecraft:pink_stained_glass',
            blockID: '95',
            blockData: '6'
        },
        {
            name: formatMessage({
                id: 'minecraft.GrayStainedGlass',
                default: '灰色の色付きガラス'
            }),
            itemID: 'minecraft:gray_stained_glass',
            blockID: '95',
            blockData: '7'
        },
        {
            name: formatMessage({
                id: 'minecraft.LightGrayStainedGlass',
                default: '薄灰色の色付きガラス'
            }),
            itemID: 'minecraft:light_gray_stained_glass',
            blockID: '95',
            blockData: '8'
        },
        {
            name: formatMessage({
                id: 'minecraft.CyanStainedGlass',
                default: '青緑色の色付きガラス'
            }),
            itemID: 'minecraft:cyan_stained_glass',
            blockID: '95',
            blockData: '9'
        },
        {
            name: formatMessage({
                id: 'minecraft.PurpleStainedGlass',
                default: '紫色の色付きガラス'
            }),
            itemID: 'minecraft:purple_stained_glass',
            blockID: '95',
            blockData: '10'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlueStainedGlass',
                default: '青色の色付きガラス'
            }),
            itemID: 'minecraft:blue_stained_glass',
            blockID: '95',
            blockData: '11'
        },
        {
            name: formatMessage({
                id: 'minecraft.BrownStainedGlass',
                default: '茶色の色付きガラス'
            }),
            itemID: 'minecraft:brown_stained_glass',
            blockID: '95',
            blockData: '12'
        },
        {
            name: formatMessage({
                id: 'minecraft.GreenStainedGlass',
                default: '緑色の色付きガラス'
            }),
            itemID: 'minecraft:green_stained_glass',
            blockID: '95',
            blockData: '13'
        },
        {
            name: formatMessage({
                id: 'minecraft.RedStainedGlass',
                default: '赤色の色付きガラス'
            }),
            itemID: 'minecraft:red_stained_glass',
            blockID: '95',
            blockData: '14'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlackStainedGlass',
                default: '黒色の色付きガラス'
            }),
            itemID: 'minecraft:black_stained_glass',
            blockID: '95',
            blockData: '15'
        },
        {
            name: formatMessage({
                id: 'minecraft.StoneBricks',
                default: '石レンガ'
            }),
            itemID: 'minecraft:stone_bricks',
            blockID: '98',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.MossyStoneBricks',
                default: '苔むした石レンガ'
            }),
            itemID: 'minecraft:mossy_stone_bricks',
            blockID: '98',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.CrackedStoneBricks',
                default: 'ひび割れた石レンガ'
            }),
            itemID: 'minecraft:cracked_stone_bricks',
            blockID: '98',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.ChiseledStoneBricks',
                default: '模様入りの石レンガ'
            }),
            itemID: 'minecraft:chiseled_stone_bricks',
            blockID: '98',
            blockData: '3'
        },
        {
            name: formatMessage({
                id: 'minecraft.MelonBlock',
                default: 'メロン'
            }),
            itemID: 'minecraft:melon',
            blockID: '103',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.BrickStairs',
                default: 'レンガの階段'
            }),
            itemID: 'minecraft:brick_stairs',
            blockID: '108',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.StoneBrickStairs',
                default: '石レンガの階段'
            }),
            itemID: 'minecraft:stone_brick_stairs',
            blockID: '109',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Mycelium',
                default: '菌糸'
            }),
            itemID: 'minecraft:mycelium',
            blockID: '110',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.NetherBrick',
                default: 'ネザーレンガ'
            }),
            itemID: 'minecraft:nether_bricks',
            blockID: '112',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.NetherBrickStairs',
                default: 'ネザーレンガの階段'
            }),
            itemID: 'minecraft:nether_brick_stairs',
            blockID: '114',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.EndStone',
                default: 'エンドストーン'
            }),
            itemID: 'minecraft:end_stone',
            blockID: '121',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.OakWoodSlab',
                default: 'オークの木のハーフブロック'
            }),
            itemID: 'minecraft:oak_slab',
            blockID: '126',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.SpruceWoodSlab',
                default: 'トウヒの木のハーフブロック'
            }),
            itemID: 'minecraft:spruce_slab',
            blockID: '126',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.JungleWoodSlab',
                default: 'ジャングルの木のハーフブロック'
            }),
            itemID: 'minecraft:jungle_slab',
            blockID: '126',
            blockData: '3'
        },
        {
            name: formatMessage({
                id: 'minecraft.AcaciaWoodSlab',
                default: 'アカシアの木のハーフブロック'
            }),
            itemID: 'minecraft:acacia_slab',
            blockID: '126',
            blockData: '4'
        },
        {
            name: formatMessage({
                id: 'minecraft.DarkOakWoodSlab',
                default: 'ダークオークの木のハーフブロック'
            }),
            itemID: 'minecraft:dark_oak_slab',
            blockID: '126',
            blockData: '5'
        },
        {
            name: formatMessage({
                id: 'minecraft.SandstoneStairs',
                default: 'サンドストーンの階段'
            }),
            itemID: 'minecraft:sandstone_stairs',
            blockID: '128',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.EmeraldOre',
                default: 'エメラルド鉱石'
            }),
            itemID: 'minecraft:emerald_ore',
            blockID: '129',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.EmeraldBlock',
                default: 'エメラルドブロック'
            }),
            itemID: 'minecraft:emerald_block',
            blockID: '133',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.SpruceWoodStairs',
                default: 'トウヒの木の階段'
            }),
            itemID: 'minecraft:spruce_stairs',
            blockID: '134',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.BirchWoodStairs',
                default: 'シラカバの木の階段'
            }),
            itemID: 'minecraft:birch_stairs',
            blockID: '135',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.JungleWoodStairs',
                default: 'ジャングルの木の階段'
            }),
            itemID: 'minecraft:jungle_stairs',
            blockID: '136',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.NetherQuartzOre',
                default: 'ネザークォーツ鉱石'
            }),
            itemID: 'minecraft:nether_quartz_ore',
            blockID: '153',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.QuartzBlock',
                default: 'クォーツブロック'
            }),
            itemID: 'minecraft:quartz_block',
            blockID: '155',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.ChiseledQuartzBlock',
                default: '模様入りクォーツブロック'
            }),
            itemID: 'minecraft:chiseled_quartz_block',
            blockID: '155',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.PillarQuartzBlock',
                default: 'クォーツの柱'
            }),
            itemID: 'minecraft:quartz_pillar',
            blockID: '155',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.QuartzStairs',
                default: 'クォーツの階段'
            }),
            itemID: 'minecraft:quartz_stairs',
            blockID: '156',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.WhiteTerracotta',
                default: '白色のテラコッタ'
            }),
            itemID: 'minecraft:white_terracotta',
            blockID: '159',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.OrangeTerracotta',
                default: '橙色のテラコッタ'
            }),
            itemID: 'minecraft:orange_terracotta',
            blockID: '159',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.MagentaTerracotta',
                default: '赤紫色のテラコッタ'
            }),
            itemID: 'minecraft:magenta_terracotta',
            blockID: '159',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.LightBlueTerracotta',
                default: '空色のテラコッタ'
            }),
            itemID: 'minecraft:light_blue_terracotta',
            blockID: '159',
            blockData: '3'
        },
        {
            name: formatMessage({
                id: 'minecraft.YellowTerracotta',
                default: '黃色のテラコッタ'
            }),
            itemID: 'minecraft:yellow_terracotta',
            blockID: '159',
            blockData: '4'
        },
        {
            name: formatMessage({
                id: 'minecraft.LimeTerracotta',
                default: '黄緑色のテラコッタ'
            }),
            itemID: 'minecraft:lime_terracotta',
            blockID: '159',
            blockData: '5'
        },
        {
            name: formatMessage({
                id: 'minecraft.PinkTerracotta',
                default: '桃色のテラコッタ'
            }),
            itemID: 'minecraft:pink_terracotta',
            blockID: '159',
            blockData: '6'
        },
        {
            name: formatMessage({
                id: 'minecraft.GrayTerracotta',
                default: '灰色のテラコッタ'
            }),
            itemID: 'minecraft:gray_terracotta',
            blockID: '159',
            blockData: '7'
        },
        {
            name: formatMessage({
                id: 'minecraft.LightGrayTerracotta',
                default: '薄灰色のテラコッタ'
            }),
            itemID: 'minecraft:light_gray_terracotta',
            blockID: '159',
            blockData: '8'
        },
        {
            name: formatMessage({
                id: 'minecraft.CyanTerracotta',
                default: '青緑色のテラコッタ'
            }),
            itemID: 'minecraft:cyan_terracotta',
            blockID: '159',
            blockData: '9'
        },
        {
            name: formatMessage({
                id: 'minecraft.PurpleTerracotta',
                default: '紫色のテラコッタ'
            }),
            itemID: 'minecraft:purple_terracotta',
            blockID: '159',
            blockData: '10'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlueTerracotta',
                default: '青色のテラコッタ'
            }),
            itemID: 'minecraft:blue_terracotta',
            blockID: '159',
            blockData: '11'
        },
        {
            name: formatMessage({
                id: 'minecraft.BrownTerracotta',
                default: '茶色のテラコッタ'
            }),
            itemID: 'minecraft:brown_terracotta',
            blockID: '159',
            blockData: '12'
        },
        {
            name: formatMessage({
                id: 'minecraft.GreenTerracotta',
                default: '緑色のテラコッタ'
            }),
            itemID: 'minecraft:green_terracotta',
            blockID: '159',
            blockData: '13'
        },
        {
            name: formatMessage({
                id: 'minecraft.RedTerracotta',
                default: '赤色のテラコッタ'
            }),
            itemID: 'minecraft:red_terracotta',
            blockID: '159',
            blockData: '14'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlackTerracotta',
                default: '黒色のテラコッタ'
            }),
            itemID: 'minecraft:black_terracotta',
            blockID: '159',
            blockData: '15'
        },
        {
            name: formatMessage({
                id: 'minecraft.AcaciaWood',
                default: 'アカシアの木'
            }),
            itemID: 'minecraft:acacia_log',
            blockID: '162',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.DarkOakWood',
                default: 'ダークオークの木'
            }),
            itemID: 'minecraft:dark_oak_log',
            blockID: '162',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.AcaciaWoodStairs',
                default: 'アカシアの木の階段'
            }),
            itemID: 'minecraft:acacia_stairs',
            blockID: '163',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.DarkOakWoodStairs',
                default: 'ダークオークの木の階段'
            }),
            itemID: 'minecraft:dark_oak_stairs',
            blockID: '164',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Prismarine',
                default: '海晶ブロック'
            }),
            itemID: 'minecraft:prismarine',
            blockID: '168',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.PrismarineBricks',
                default: '海晶レンガ'
            }),
            itemID: 'minecraft:prismarine_bricks',
            blockID: '168',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.DarkPrismarine',
                default: '暗海晶ブロック'
            }),
            itemID: 'minecraft:dark_prismarine',
            blockID: '168',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.SeaLantern',
                default: 'シーランタン'
            }),
            itemID: 'minecraft:sea_lantern',
            blockID: '169',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.HayBale',
                default: '干草の俵'
            }),
            itemID: 'minecraft:hay_block',
            blockID: '170',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.HardenedClay',
                default: 'テラコッタ'
            }),
            itemID: 'minecraft:terracotta',
            blockID: '172',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlockofCoal',
                default: '石炭ブロック'
            }),
            itemID: 'minecraft:coal_block',
            blockID: '173',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.PackedIce',
                default: '氷塊'
            }),
            itemID: 'minecraft:packed_ice',
            blockID: '174',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.RedSandstone',
                default: '赤い砂岩'
            }),
            itemID: 'minecraft:red_sandstone',
            blockID: '179',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.ChiseledRedSandstone',
                default: '模様入りの赤い砂岩'
            }),
            itemID: 'minecraft:chiseled_red_sandstone',
            blockID: '179',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.SmoothRedSandstone',
                default: '滑らかな赤い砂岩'
            }),
            itemID: 'minecraft:cut_red_sandstone',
            blockID: '179',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.RedSandstoneStairs',
                default: '赤い砂岩の階段'
            }),
            itemID: 'minecraft:red_sandstone_stairs',
            blockID: '180',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.RedSandstoneSlab',
                default: '赤い砂岩のハーフブロック'
            }),
            itemID: 'minecraft:red_sandstone_slab',
            blockID: '182',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.PurpurBlock',
                default: 'プルプァブロック'
            }),
            itemID: 'minecraft:purpur_block',
            blockID: '201',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.PurpurPillar',
                default: 'プルプァの柱'
            }),
            itemID: 'minecraft:purpur_pillar',
            blockID: '202',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.PurpurStairs',
                default: 'プルプァの階段'
            }),
            itemID: 'minecraft:purpur_stairs',
            blockID: '203',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.PurpurSlab',
                default: 'プルプァのハーフブロック'
            }),
            itemID: 'minecraft:purpur_slab',
            blockID: '205',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.EndStoneBricks',
                default: 'エンドストーンレンガ'
            }),
            itemID: 'minecraft:end_stone_bricks',
            blockID: '206',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.MagmaBlock',
                default: 'マグマブロック'
            }),
            itemID: 'minecraft:magma_block',
            blockID: '213',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.NetherWartBlock',
                default: 'ネザーウォートブロック'
            }),
            itemID: 'minecraft:nether_wart_block',
            blockID: '214',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.RedNetherBrick',
                default: '赤いネザーレンガ'
            }),
            itemID: 'minecraft:red_nether_bricks',
            blockID: '215',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.BoneBlock',
                default: '骨ブロック'
            }),
            itemID: 'minecraft:bone_block',
            blockID: '216',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.WhiteConcrete',
                default: '白色のコンクリート'
            }),
            itemID: 'minecraft:white_concrete',
            blockID: '251',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.OrangeConcrete',
                default: '橙色のコンクリート'
            }),
            itemID: 'minecraft:orange_concrete',
            blockID: '251',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.MagentaConcrete',
                default: '赤紫色のコンクリート'
            }),
            itemID: 'minecraft:magenta_concrete',
            blockID: '251',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.LightBlueConcrete',
                default: '空色色のコンクリート'
            }),
            itemID: 'minecraft:light_blue_concrete',
            blockID: '251',
            blockData: '3'
        },
        {
            name: formatMessage({
                id: 'minecraft.YellowConcrete',
                default: '黄色のコンクリート'
            }),
            itemID: 'minecraft:yellow_concrete',
            blockID: '251',
            blockData: '4'
        },
        {
            name: formatMessage({
                id: 'minecraft.LimeConcrete',
                default: '黄緑色のコンクリート'
            }),
            itemID: 'minecraft:lime_concrete',
            blockID: '251',
            blockData: '5'
        },
        {
            name: formatMessage({
                id: 'minecraft.PinkConcrete',
                default: '桃色のコンクリート'
            }),
            itemID: 'minecraft:pink_concrete',
            blockID: '251',
            blockData: '6'
        },
        {
            name: formatMessage({
                id: 'minecraft.GrayConcrete',
                default: '灰色のコンクリート'
            }),
            itemID: 'minecraft:gray_concrete',
            blockID: '251',
            blockData: '7'
        },
        {
            name: formatMessage({
                id: 'minecraft.LightGrayConcrete',
                default: '薄灰色のコンクリート'
            }),
            itemID: 'minecraft:light_gray_concrete',
            blockID: '251',
            blockData: '8'
        },
        {
            name: formatMessage({
                id: 'minecraft.CyanConcrete',
                default: '青緑色のコンクリート'
            }),
            itemID: 'minecraft:cyan_concrete',
            blockID: '251',
            blockData: '9'
        },
        {
            name: formatMessage({
                id: 'minecraft.PurpleConcrete',
                default: '紫色のコンクリート'
            }),
            itemID: 'minecraft:purple_concrete',
            blockID: '251',
            blockData: '10'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlueConcrete',
                default: '青色のコンクリート'
            }),
            itemID: 'minecraft:blue_concrete',
            blockID: '251',
            blockData: '11'
        },
        {
            name: formatMessage({
                id: 'minecraft.BrownConcrete',
                default: '茶色のコンクリート'
            }),
            itemID: 'minecraft:brown_concrete',
            blockID: '251',
            blockData: '12'
        },
        {
            name: formatMessage({
                id: 'minecraft.GreenConcrete',
                default: '緑色のコンクリート'
            }),
            itemID: 'minecraft:green_concrete',
            blockID: '251',
            blockData: '13'
        },
        {
            name: formatMessage({
                id: 'minecraft.RedConcrete',
                default: '赤色のコンクリート'
            }),
            itemID: 'minecraft:red_concrete',
            blockID: '251',
            blockData: '14'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlackConcrete',
                default: '黒色のコンクリート'
            }),
            itemID: 'minecraft:black_concrete',
            blockID: '251',
            blockData: '15'
        },
        {
            name: formatMessage({
                id: 'minecraft.WhiteConcretePowder',
                default: '白色のコンクリートパウダー'
            }),
            itemID: 'minecraft:white_concrete_powder',
            blockID: '252',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.OrangeConcretePowder',
                default: '橙色のコンクリートパウダー'
            }),
            itemID: 'minecraft:orange_concrete_powder',
            blockID: '252',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.MagentaConcretePowder',
                default: '赤紫色のコンクリートパウダー'
            }),
            itemID: 'minecraft:magenta_concrete_powder',
            blockID: '252',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.LightBlueConcretePowder',
                default: '空色のコンクリートパウダー'
            }),
            itemID: 'minecraft:light_blue_concrete_powder',
            blockID: '252',
            blockData: '3'
        },
        {
            name: formatMessage({
                id: 'minecraft.YellowConcretePowder',
                default: '黃色のコンクリートパウダー'
            }),
            itemID: 'minecraft:yellow_concrete_powder',
            blockID: '252',
            blockData: '4'
        },
        {
            name: formatMessage({
                id: 'minecraft.LimeConcretePowder',
                default: '黄緑色のコンクリートパウダー'
            }),
            itemID: 'minecraft:lime_concrete_powder',
            blockID: '252',
            blockData: '5'
        },
        {
            name: formatMessage({
                id: 'minecraft.PinkConcretePowder',
                default: '桃色のコンクリートパウダー'
            }),
            itemID: 'minecraft:pink_concrete_powder',
            blockID: '252',
            blockData: '6'
        },
        {
            name: formatMessage({
                id: 'minecraft.GrayConcretePowder',
                default: '灰色のコンクリートパウダー'
            }),
            itemID: 'minecraft:gray_concrete_powder',
            blockID: '252',
            blockData: '7'
        },
        {
            name: formatMessage({
                id: 'minecraft.LightGrayConcretePowder',
                default: '薄灰色のコンクリートパウダー'
            }),
            itemID: 'minecraft:light_gray_concrete_powder',
            blockID: '252',
            blockData: '8'
        },
        {
            name: formatMessage({
                id: 'minecraft.CyanConcretePowder',
                default: '青緑色のコンクリートパウダー'
            }),
            itemID: 'minecraft:cyan_concrete_powder',
            blockID: '252',
            blockData: '9'
        },
        {
            name: formatMessage({
                id: 'minecraft.PurpleConcretePowder',
                default: '紫色のコンクリートパウダー'
            }),
            itemID: 'minecraft:purple_concrete_powder',
            blockID: '252',
            blockData: '10'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlueConcretePowder',
                default: '青色のコンクリートパウダー'
            }),
            itemID: 'minecraft:blue_concrete_powder',
            blockID: '252',
            blockData: '11'
        },
        {
            name: formatMessage({
                id: 'minecraft.BrownConcretePowder',
                default: '茶色のコンクリートパウダー'
            }),
            itemID: 'minecraft:brown_concrete_powder',
            blockID: '252',
            blockData: '12'
        },
        {
            name: formatMessage({
                id: 'minecraft.GreenConcretePowder',
                default: '緑色のコンクリートパウダー'
            }),
            itemID: 'minecraft:green_concrete_powder',
            blockID: '252',
            blockData: '13'
        },
        {
            name: formatMessage({
                id: 'minecraft.RedConcretePowder',
                default: '赤色のコンクリートパウダー'
            }),
            itemID: 'minecraft:red_concrete_powder',
            blockID: '252',
            blockData: '14'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlackConcretePowder',
                default: '黒色のコンクリートパウダー'
            }),
            itemID: 'minecraft:black_concrete_powder',
            blockID: '252',
            blockData: '15'
        }
    ];
};

exports.genDecorationBlockInfo = () => {
    return [
        {
            name: formatMessage({
                id: 'minecraft.OakSapling',
                default: 'オークの苗木'
            }),
            itemID: 'minecraft:oak_sapling',
            blockID: '6',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.SpruceSapling',
                default: 'トウヒの苗木'
            }),
            itemID: 'minecraft:spruce_sapling',
            blockID: '6',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.BirchSapling',
                default: 'シラカバの苗木'
            }),
            itemID: 'minecraft:birch_sapling',
            blockID: '6',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.JungleSapling',
                default: 'ジャングルの苗木'
            }),
            itemID: 'minecraft:jungle_sapling',
            blockID: '6',
            blockData: '3'
        },
        {
            name: formatMessage({
                id: 'minecraft.AcaciaSapling',
                default: 'アカシアの苗木'
            }),
            itemID: 'minecraft:acacia_sapling',
            blockID: '6',
            blockData: '4'
        },
        {
            name: formatMessage({
                id: 'minecraft.DarkOakSapling',
                default: 'ダークオークの苗木'
            }),
            itemID: 'minecraft:dark_oak_sapling',
            blockID: '6',
            blockData: '5'
        },
        {
            name: formatMessage({
                id: 'minecraft.OakLeaves',
                default: 'オークの葉'
            }),
            itemID: 'minecraft:oak_leaves',
            blockID: '18',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.SpruceLeaves',
                default: 'トウヒの葉'
            }),
            itemID: 'minecraft:spruce_leaves',
            blockID: '18',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.BirchLeaves',
                default: 'シラカバの葉'
            }),
            itemID: 'minecraft:birch_leaves',
            blockID: '18',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.JungleLeaves',
                default: 'ジャングルの葉'
            }),
            itemID: 'minecraft:jungle_leaves',
            blockID: '18',
            blockData: '3'
        },
        {
            name: formatMessage({
                id: 'minecraft.Cobweb',
                default: '蜘蛛の巣'
            }),
            itemID: 'minecraft:cobweb',
            blockID: '30',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Grass',
                default: '草'
            }),
            itemID: 'minecraft:grass',
            blockID: '31',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.Fern',
                default: 'シダ'
            }),
            itemID: 'minecraft:fern',
            blockID: '31',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.DeadShrub',
                default: '枯れ木'
            }),
            itemID: 'minecraft:dead_bush',
            blockID: '31',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Dandelion',
                default: 'タンポポ'
            }),
            itemID: 'minecraft:dandelion',
            blockID: '37',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Poppy',
                default: 'ポピー'
            }),
            itemID: 'minecraft:poppy',
            blockID: '38',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlueOrchid',
                default: 'ヒスイラン'
            }),
            itemID: 'minecraft:blue_orchid',
            blockID: '38',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.Allium',
                default: 'アリウム'
            }),
            itemID: 'minecraft:allium',
            blockID: '38',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.AzureBluet',
                default: 'ヒナソウ'
            }),
            itemID: 'minecraft:azure_bluet',
            blockID: '38',
            blockData: '3'
        },
        {
            name: formatMessage({
                id: 'minecraft.RedTulip',
                default: '赤色のチューリップ'
            }),
            itemID: 'minecraft:red_tulip',
            blockID: '38',
            blockData: '4'
        },
        {
            name: formatMessage({
                id: 'minecraft.OrangeTulip',
                default: '橙色のチューリップ'
            }),
            itemID: 'minecraft:orange_tulip',
            blockID: '38',
            blockData: '5'
        },
        {
            name: formatMessage({
                id: 'minecraft.WhiteTulip',
                default: '白色のチューリップ'
            }),
            itemID: 'minecraft:white_tulip',
            blockID: '38',
            blockData: '6'
        },
        {
            name: formatMessage({
                id: 'minecraft.PinkTulip',
                default: '桃色のチューリップ'
            }),
            itemID: 'minecraft:pink_tulip',
            blockID: '38',
            blockData: '7'
        },
        {
            name: formatMessage({
                id: 'minecraft.OxeyeDaisy',
                default: 'フランスギク'
            }),
            itemID: 'minecraft:oxeye_daisy',
            blockID: '38',
            blockData: '8'
        },
        {
            name: formatMessage({
                id: 'minecraft.Mushroom',
                default: 'マッシュルーム'
            }),
            itemID: 'minecraft:brown_mushroom',
            blockID: '39',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.RedMushroom',
                default: '赤いマッシュルーム'
            }),
            itemID: 'minecraft:red_mushroom',
            blockID: '40',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Torch',
                default: 'たいまつ'
            }),
            itemID: 'minecraft:torch',
            blockID: '50',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Chest',
                default: 'チェスト'
            }),
            itemID: 'minecraft:chest',
            blockID: '54',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.CraftingTable',
                default: '作業台'
            }),
            itemID: 'minecraft:crafting_table',
            blockID: '58',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Furnace',
                default: 'かまど'
            }),
            itemID: 'minecraft:furnace',
            blockID: '61',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Ladder',
                default: 'はしご'
            }),
            itemID: 'minecraft:ladder',
            blockID: '65',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Snow',
                default: '雪'
            }),
            itemID: 'minecraft:snow',
            blockID: '78',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Cactus',
                default: 'サボテン'
            }),
            itemID: 'minecraft:cactus',
            blockID: '81',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Jukebox',
                default: 'ジュークボックス'
            }),
            itemID: 'minecraft:jukebox',
            blockID: '84',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.OakFence',
                default: 'オークのフェンス'
            }),
            itemID: 'minecraft:oak_fence',
            blockID: '85',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.StoneMonsterEgg',
                default: 'シルバーフィッシュ入りの石'
            }),
            itemID: 'minecraft:infested_stone',
            blockID: '97',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.CobblestoneMonsterEgg',
                default: 'シルバーフィッシュ入りの丸石'
            }),
            itemID: 'minecraft:infested_cobblestone',
            blockID: '97',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.StoneBrickMonsterEgg',
                default: 'シルバーフィッシュ入りの石レンガ'
            }),
            itemID: 'minecraft:infested_stone_bricks',
            blockID: '97',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.MossyStoneBrickMonsterEgg',
                default: 'シルバーフィッシュ入り苔むした石レンガ'
            }),
            itemID: 'minecraft:infested_mossy_stone_bricks',
            blockID: '97',
            blockData: '3'
        },
        {
            name: formatMessage({
                id: 'minecraft.CrackedStoneBrickMonsterEgg',
                default: 'シルバーフィッシュ入りのひび割れた石レンガ'
            }),
            itemID: 'minecraft:infested_cracked_stone_bricks',
            blockID: '97',
            blockData: '4'
        },
        {
            name: formatMessage({
                id: 'minecraft.ChiseledStoneBrickMonsterEgg',
                default: 'シルバーフィッシュ入りの模様入り石レンガ'
            }),
            itemID: 'minecraft:infested_chiseled_stone_bricks',
            blockID: '97',
            blockData: '5'
        },
        {
            name: formatMessage({
                id: 'minecraft.IronBars',
                default: '鉄格子'
            }),
            itemID: 'minecraft:iron_bars',
            blockID: '101',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.GlassPane',
                default: '板ガラス'
            }),
            itemID: 'minecraft:glass_pane',
            blockID: '102',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Vines',
                default: 'ツタ'
            }),
            itemID: 'minecraft:vine',
            blockID: '106',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.LilyPad',
                default: 'スイレンの葉'
            }),
            itemID: 'minecraft:lily_pad',
            blockID: '111',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.NetherBrickFence',
                default: 'ネザーレンガのフェンス'
            }),
            itemID: 'minecraft:nether_brick_fence',
            blockID: '113',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.EnchantmentTable',
                default: 'エンチャントテーブル'
            }),
            itemID: 'minecraft:enchanting_table',
            blockID: '116',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.EndPortalFrame',
                default: 'エンドポータル'
            }),
            itemID: 'minecraft:end_portal_frame',
            blockID: '120',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.EnderChest',
                default: 'エンダーチェスト'
            }),
            itemID: 'minecraft:ender_chest',
            blockID: '130',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.CobblestoneWall',
                default: '丸石の壁'
            }),
            itemID: 'minecraft:cobblestone_wall',
            blockID: '139',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.MossyCobblestoneWall',
                default: '苔むした丸石の壁'
            }),
            itemID: 'minecraft:mossy_cobblestone_wall',
            blockID: '139',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.Anvil',
                default: '金床'
            }),
            itemID: 'minecraft:anvil',
            blockID: '145',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.WhiteStainedGlassPane',
                default: '白色の板ガラス'
            }),
            itemID: 'minecraft:white_stained_glass_pane',
            blockID: '160',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.OrangeStainedGlassPane',
                default: '橙色の板ガラス'
            }),
            itemID: 'minecraft:orange_stained_glass_pane',
            blockID: '160',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.MagentaStainedGlassPane',
                default: '赤紫色の板ガラス'
            }),
            itemID: 'minecraft:magenta_stained_glass_pane',
            blockID: '160',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.LightBlueStainedGlassPane',
                default: '空色の板ガラス'
            }),
            itemID: 'minecraft:light_blue_stained_glass_pane',
            blockID: '160',
            blockData: '3'
        },
        {
            name: formatMessage({
                id: 'minecraft.YellowStainedGlassPane',
                default: '黃色の板ガラス'
            }),
            itemID: 'minecraft:yellow_stained_glass_pane',
            blockID: '160',
            blockData: '4'
        },
        {
            name: formatMessage({
                id: 'minecraft.LimeStainedGlassPane',
                default: '黄緑色の板ガラス'
            }),
            itemID: 'minecraft:lime_stained_glass_pane',
            blockID: '160',
            blockData: '5'
        },
        {
            name: formatMessage({
                id: 'minecraft.PinkStainedGlassPane',
                default: '桃色の板ガラス'
            }),
            itemID: 'minecraft:pink_stained_glass_pane',
            blockID: '160',
            blockData: '6'
        },
        {
            name: formatMessage({
                id: 'minecraft.GrayStainedGlassPane',
                default: '灰色の板ガラス'
            }),
            itemID: 'minecraft:gray_stained_glass_pane',
            blockID: '160',
            blockData: '7'
        },
        {
            name: formatMessage({
                id: 'minecraft.LightGrayStainedGlassPane',
                default: '薄灰色の板ガラス'
            }),
            itemID: 'minecraft:light_gray_stained_glass_pane',
            blockID: '160',
            blockData: '8'
        },
        {
            name: formatMessage({
                id: 'minecraft.CyanStainedGlassPane',
                default: '青緑色の板ガラス'
            }),
            itemID: 'minecraft:cyan_stained_glass_pane',
            blockID: '160',
            blockData: '9'
        },
        {
            name: formatMessage({
                id: 'minecraft.PurpleStainedGlassPane',
                default: '紫色の板ガラス'
            }),
            itemID: 'minecraft:purple_stained_glass_pane',
            blockID: '160',
            blockData: '10'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlueStainedGlassPane',
                default: '青色の板ガラス'
            }),
            itemID: 'minecraft:blue_stained_glass_pane',
            blockID: '160',
            blockData: '11'
        },
        {
            name: formatMessage({
                id: 'minecraft.BrownStainedGlassPane',
                default: '茶色の板ガラス'
            }),
            itemID: 'minecraft:brown_stained_glass_pane',
            blockID: '160',
            blockData: '12'
        },
        {
            name: formatMessage({
                id: 'minecraft.GreenStainedGlassPane',
                default: '緑色の板ガラス'
            }),
            itemID: 'minecraft:green_stained_glass_pane',
            blockID: '160',
            blockData: '13'
        },
        {
            name: formatMessage({
                id: 'minecraft.RedStainedGlassPane',
                default: '赤色の板ガラス'
            }),
            itemID: 'minecraft:red_stained_glass_pane',
            blockID: '160',
            blockData: '14'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlackStainedGlassPane',
                default: '黒色の板ガラス'
            }),
            itemID: 'minecraft:black_stained_glass_pane',
            blockID: '160',
            blockData: '15'
        },
        {
            name: formatMessage({
                id: 'minecraft.AcaciaLeaves',
                default: 'アカシアの葉'
            }),
            itemID: 'minecraft:acacia_leaves',
            blockID: '161',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.DarkOakLeaves',
                default: 'ダークオークの葉'
            }),
            itemID: 'minecraft:dark_oak_leaves',
            blockID: '161',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.SlimeBlock',
                default: 'スライムブロック'
            }),
            itemID: 'minecraft:slime_block',
            blockID: '165',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.WhiteCarpet',
                default: '白色のカーペット'
            }),
            itemID: 'minecraft:white_carpet',
            blockID: '171',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.OrangeCarpet',
                default: '橙色のカーペット'
            }),
            itemID: 'minecraft:orange_carpet',
            blockID: '171',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.MagentaCarpet',
                default: '赤紫色のカーペット'
            }),
            itemID: 'minecraft:magenta_carpet',
            blockID: '171',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.LightBlueCarpet',
                default: '空色のカーペット'
            }),
            itemID: 'minecraft:light_blue_carpet',
            blockID: '171',
            blockData: '3'
        },
        {
            name: formatMessage({
                id: 'minecraft.YellowCarpet',
                default: '黃色のカーペット'
            }),
            itemID: 'minecraft:yellow_carpet',
            blockID: '171',
            blockData: '4'
        },
        {
            name: formatMessage({
                id: 'minecraft.LimeCarpet',
                default: '黄緑色のカーペット'
            }),
            itemID: 'minecraft:lime_carpet',
            blockID: '171',
            blockData: '5'
        },
        {
            name: formatMessage({
                id: 'minecraft.PinkCarpet',
                default: '桃色のカーペット'
            }),
            itemID: 'minecraft:pink_carpet',
            blockID: '171',
            blockData: '6'
        },
        {
            name: formatMessage({
                id: 'minecraft.GrayCarpet',
                default: '灰色のカーペット'
            }),
            itemID: 'minecraft:gray_carpet',
            blockID: '171',
            blockData: '7'
        },
        {
            name: formatMessage({
                id: 'minecraft.LightGrayCarpet',
                default: '薄灰色のカーペット'
            }),
            itemID: 'minecraft:light_gray_carpet',
            blockID: '171',
            blockData: '8'
        },
        {
            name: formatMessage({
                id: 'minecraft.CyanCarpet',
                default: '青緑色のカーペット'
            }),
            itemID: 'minecraft:cyan_carpet',
            blockID: '171',
            blockData: '9'
        },
        {
            name: formatMessage({
                id: 'minecraft.PurpleCarpet',
                default: '紫色のカーペット'
            }),
            itemID: 'minecraft:purple_carpet',
            blockID: '171',
            blockData: '10'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlueCarpet',
                default: '青色のカーペット'
            }),
            itemID: 'minecraft:blue_carpet',
            blockID: '171',
            blockData: '11'
        },
        {
            name: formatMessage({
                id: 'minecraft.BrownCarpet',
                default: '茶色のカーペット'
            }),
            itemID: 'minecraft:brown_carpet',
            blockID: '171',
            blockData: '12'
        },
        {
            name: formatMessage({
                id: 'minecraft.GreenCarpet',
                default: '緑色のカーペット'
            }),
            itemID: 'minecraft:green_carpet',
            blockID: '171',
            blockData: '13'
        },
        {
            name: formatMessage({
                id: 'minecraft.RedCarpet',
                default: '赤色のカーペット'
            }),
            itemID: 'minecraft:red_carpet',
            blockID: '171',
            blockData: '14'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlackCarpet',
                default: '黒色のカーペット'
            }),
            itemID: 'minecraft:black_carpet',
            blockID: '171',
            blockData: '15'
        },
        {
            name: formatMessage({
                id: 'minecraft.Sunflower',
                default: 'ひまわり'
            }),
            itemID: 'minecraft:sunflower',
            blockID: '175',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Lilac',
                default: 'ライラック'
            }),
            itemID: 'minecraft:lilac',
            blockID: '175',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.DoubleTallgrass',
                default: '高い草'
            }),
            itemID: 'minecraft:tall_grass',
            blockID: '175',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.LargeFern',
                default: '大きなシダ'
            }),
            itemID: 'minecraft:large_fern',
            blockID: '175',
            blockData: '3'
        },
        {
            name: formatMessage({
                id: 'minecraft.RoseBush',
                default: 'バラの低木'
            }),
            itemID: 'minecraft:rose_bush',
            blockID: '175',
            blockData: '4'
        },
        {
            name: formatMessage({
                id: 'minecraft.Peony',
                default: 'ボタン'
            }),
            itemID: 'minecraft:peony',
            blockID: '175',
            blockData: '5'
        },
        {
            name: formatMessage({
                id: 'minecraft.SpruceFence',
                default: 'トウヒのフェンス'
            }),
            itemID: 'minecraft:spruce_fence',
            blockID: '188',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.BirchFence',
                default: 'シラカバのフェンス'
            }),
            itemID: 'minecraft:birch_fence',
            blockID: '189',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.JungleFence',
                default: 'ジャングルのフェンス'
            }),
            itemID: 'minecraft:jungle_fence',
            blockID: '190',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.DarkOakFence',
                default: 'ダークオークのフェンス'
            }),
            itemID: 'minecraft:dark_oak_fence',
            blockID: '191',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.AcaciaFence',
                default: 'アカシアのフェンス'
            }),
            itemID: 'minecraft:acacia_fence',
            blockID: '192',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.EndRod',
                default: 'エンドロッド'
            }),
            itemID: 'minecraft:end_rod',
            blockID: '198',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.ChorusPlant',
                default: 'コーラスプラント'
            }),
            itemID: 'minecraft:chorus_plant',
            blockID: '199',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.ChorusFlower',
                default: 'コーラスフラワー'
            }),
            itemID: 'minecraft:chorus_flower',
            blockID: '200',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.WhiteShulkerBox',
                default: '白色のシュルカーボックス'
            }),
            itemID: 'minecraft:white_shulker_box',
            blockID: '219',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.OrangeShulkerBox',
                default: '橙色のシュルカーボックス'
            }),
            itemID: 'minecraft:orange_shulker_box',
            blockID: '219',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.MagentaShulkerBox',
                default: '赤紫色のシュルカーボックス'
            }),
            itemID: 'minecraft:magenta_shulker_box',
            blockID: '219',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.LightBlueShulkerBox',
                default: '空色のシュルカーボックス'
            }),
            itemID: 'minecraft:light_blue_shulker_box',
            blockID: '219',
            blockData: '3'
        },
        {
            name: formatMessage({
                id: 'minecraft.YellowShulkerBox',
                default: '黃色のシュルカーボックス'
            }),
            itemID: 'minecraft:yellow_shulker_box',
            blockID: '219',
            blockData: '4'
        },
        {
            name: formatMessage({
                id: 'minecraft.LimeShulkerBox',
                default: '黄緑色のシュルカーボックス'
            }),
            itemID: 'minecraft:lime_shulker_box',
            blockID: '219',
            blockData: '5'
        },
        {
            name: formatMessage({
                id: 'minecraft.PinkShulkerBox',
                default: '桃色のシュルカーボックス'
            }),
            itemID: 'minecraft:pink_shulker_box',
            blockID: '219',
            blockData: '6'
        },
        {
            name: formatMessage({
                id: 'minecraft.GrayShulkerBox',
                default: '灰色のシュルカーボックス'
            }),
            itemID: 'minecraft:gray_shulker_box',
            blockID: '219',
            blockData: '7'
        },
        {
            name: formatMessage({
                id: 'minecraft.LightGrayShulkerBox',
                default: '薄灰色のシュルカーボックス'
            }),
            itemID: 'minecraft:light_gray_shulker_box',
            blockID: '219',
            blockData: '8'
        },
        {
            name: formatMessage({
                id: 'minecraft.CyanShulkerBox',
                default: '青緑色のシュルカーボックス'
            }),
            itemID: 'minecraft:cyan_shulker_box',
            blockID: '219',
            blockData: '9'
        },
        {
            name: formatMessage({
                id: 'minecraft.PurpleShulkerBox',
                default: '紫色のシュルカーボックス'
            }),
            itemID: 'minecraft:purple_shulker_box',
            blockID: '219',
            blockData: '10'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlueShulkerBox',
                default: '青色のシュルカーボックス'
            }),
            itemID: 'minecraft:blue_shulker_box',
            blockID: '219',
            blockData: '11'
        },
        {
            name: formatMessage({
                id: 'minecraft.BrownShulkerBox',
                default: '茶色のシュルカーボックス'
            }),
            itemID: 'minecraft:brown_shulker_box',
            blockID: '219',
            blockData: '12'
        },
        {
            name: formatMessage({
                id: 'minecraft.GreenShulkerBox',
                default: '緑色のシュルカーボックス'
            }),
            itemID: 'minecraft:green_shulker_box',
            blockID: '219',
            blockData: '13'
        },
        {
            name: formatMessage({
                id: 'minecraft.RedShulkerBox',
                default: '赤色のシュルカーボックス'
            }),
            itemID: 'minecraft:red_shulker_box',
            blockID: '219',
            blockData: '14'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlackShulkerBox',
                default: '黒色のシュルカーボックス'
            }),
            itemID: 'minecraft:black_shulker_box',
            blockID: '219',
            blockData: '15'
        },
        {
            name: formatMessage({
                id: 'minecraft.WhiteGlazedTerracotta',
                default: '白色の彩釉テラコッタ'
            }),
            itemID: 'minecraft:white_glazed_terracotta',
            blockID: '235',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.OrangeGlazedTerracotta',
                default: '橙色の彩釉テラコッタ'
            }),
            itemID: 'minecraft:orange_glazed_terracotta',
            blockID: '236',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.MagentaGlazedTerracotta',
                default: '赤紫色の彩釉テラコッタ'
            }),
            itemID: 'minecraft:magenta_glazed_terracotta',
            blockID: '237',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.LightBlueGlazedTerracotta',
                default: '空色の彩釉テラコッタ'
            }),
            itemID: 'minecraft:light_blue_glazed_terracotta',
            blockID: '238',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.YellowGlazedTerracotta',
                default: '黃色の彩釉テラコッタ'
            }),
            itemID: 'minecraft:yellow_glazed_terracotta',
            blockID: '239',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.LimeGlazedTerracotta',
                default: '黄緑色の彩釉テラコッタ'
            }),
            itemID: 'minecraft:lime_glazed_terracotta',
            blockID: '240',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.PinkGlazedTerracotta',
                default: '桃色の彩釉テラコッタ'
            }),
            itemID: 'minecraft:pink_glazed_terracotta',
            blockID: '241',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.GrayGlazedTerracotta',
                default: '灰色の彩釉テラコッタ'
            }),
            itemID: 'minecraft:gray_glazed_terracotta',
            blockID: '242',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.LightGrayGlazedTerracotta',
                default: '薄灰色の彩釉テラコッタ'
            }),
            itemID: 'minecraft:light_gray_glazed_terracotta',
            blockID: '243',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.CyanGlazedTerracotta',
                default: '青緑色の彩釉テラコッタ'
            }),
            itemID: 'minecraft:cyan_glazed_terracotta',
            blockID: '244',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.PurpleGlazedTerracotta',
                default: '紫色の彩釉テラコッタ'
            }),
            itemID: 'minecraft:purple_glazed_terracotta',
            blockID: '245',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlueGlazedTerracotta',
                default: '青色の彩釉テラコッタ'
            }),
            itemID: 'minecraft:blue_glazed_terracotta',
            blockID: '246',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.BrownGlazedTerracotta',
                default: '茶色の彩釉テラコッタ'
            }),
            itemID: 'minecraft:brown_glazed_terracotta',
            blockID: '247',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.GreenGlazedTerracotta',
                default: '緑色の彩釉テラコッタ'
            }),
            itemID: 'minecraft:green_glazed_terracotta',
            blockID: '248',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.RedGlazedTerracotta',
                default: '赤色の彩釉テラコッタ'
            }),
            itemID: 'minecraft:red_glazed_terracotta',
            blockID: '249',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlackGlazedTerracotta',
                default: '黒色の彩釉テラコッタ'
            }),
            itemID: 'minecraft:black_glazed_terracotta',
            blockID: '250',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Painting',
                default: '絵画'
            }),
            itemID: 'minecraft:painting',
            blockID: '321',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.Sign',
                default: '看板'
            }),
            itemID: 'minecraft:sign',
            blockID: '323',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.WhiteBed',
                default: '白色のベッド'
            }),
            itemID: 'minecraft:white_bed',
            blockID: '355',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.OrangeBed',
                default: '橙色のベッド'
            }),
            itemID: 'minecraft:orange_bed',
            blockID: '355',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.MagentaBed',
                default: '赤紫色のベッド'
            }),
            itemID: 'minecraft:magenta_bed',
            blockID: '355',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.LightBlueBed',
                default: '空色のベッド'
            }),
            itemID: 'minecraft:light_blue_bed',
            blockID: '355',
            blockData: '3'
        },
        {
            name: formatMessage({
                id: 'minecraft.YellowBed',
                default: '黃色のベッド'
            }),
            itemID: 'minecraft:yellow_bed',
            blockID: '355',
            blockData: '4'
        },
        {
            name: formatMessage({
                id: 'minecraft.LimeBed',
                default: '黄緑色のベッド'
            }),
            itemID: 'minecraft:lime_bed',
            blockID: '355',
            blockData: '5'
        },
        {
            name: formatMessage({
                id: 'minecraft.PinkBed',
                default: '桃色のベッド'
            }),
            itemID: 'minecraft:pink_bed',
            blockID: '355',
            blockData: '6'
        },
        {
            name: formatMessage({
                id: 'minecraft.GrayBed',
                default: '灰色のベッド'
            }),
            itemID: 'minecraft:gray_bed',
            blockID: '355',
            blockData: '7'
        },
        {
            name: formatMessage({
                id: 'minecraft.LightGrayBed',
                default: '薄灰色のベッド'
            }),
            itemID: 'minecraft:light_gray_bed',
            blockID: '355',
            blockData: '8'
        },
        {
            name: formatMessage({
                id: 'minecraft.CyanBed',
                default: '青緑色のベッド'
            }),
            itemID: 'minecraft:cyan_bed',
            blockID: '355',
            blockData: '9'
        },
        {
            name: formatMessage({
                id: 'minecraft.PurpleBed',
                default: '紫色のベッド'
            }),
            itemID: 'minecraft:purple_bed',
            blockID: '355',
            blockData: '10'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlueBed',
                default: '青色のベッド'
            }),
            itemID: 'minecraft:blue_bed',
            blockID: '355',
            blockData: '11'
        },
        {
            name: formatMessage({
                id: 'minecraft.BrownBed',
                default: '茶色のベッド'
            }),
            itemID: 'minecraft:brown_bed',
            blockID: '355',
            blockData: '12'
        },
        {
            name: formatMessage({
                id: 'minecraft.GreenBed',
                default: '緑色のベッド'
            }),
            itemID: 'minecraft:green_bed',
            blockID: '355',
            blockData: '13'
        },
        {
            name: formatMessage({
                id: 'minecraft.RedBed',
                default: '赤色のベッド'
            }),
            itemID: 'minecraft:red_bed',
            blockID: '355',
            blockData: '14'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlackBed',
                default: '黒色のベッド'
            }),
            itemID: 'minecraft:black_bed',
            blockID: '355',
            blockData: '15'
        },
        {
            name: formatMessage({
                id: 'minecraft.ItemFrame',
                default: '額縁'
            }),
            itemID: 'minecraft:item_frame',
            blockID: '389',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.FlowerPot',
                default: '植木鉢'
            }),
            itemID: 'minecraft:flower_pot',
            blockID: '390',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.SkeletonSkull',
                default: 'スケルトンの頭'
            }),
            itemID: 'minecraft:skeleton_skull',
            blockID: '397',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.WitherSkeletonSkull',
                default: 'ウィザースケルトンの頭'
            }),
            itemID: 'minecraft:wither_skeleton_skull',
            blockID: '397',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.ZombieSkull',
                default: 'ゾンビの頭'
            }),
            itemID: 'minecraft:zombie_head',
            blockID: '397',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.HumanSkull',
                default: 'プレイヤーの頭'
            }),
            itemID: 'minecraft:player_head',
            blockID: '397',
            blockData: '3'
        },
        {
            name: formatMessage({
                id: 'minecraft.CreeperSkull',
                default: 'クリーパーの頭'
            }),
            itemID: 'minecraft:creeper_head',
            blockID: '397',
            blockData: '4'
        },
        {
            name: formatMessage({
                id: 'minecraft.DragonSkull',
                default: 'ドラゴンの頭'
            }),
            itemID: 'minecraft:dragon_head',
            blockID: '397',
            blockData: '5'
        },
        {
            name: formatMessage({
                id: 'minecraft.ArmorStand',
                default: '防具立て'
            }),
            itemID: 'minecraft:armor_stand',
            blockID: '416',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.WhiteBanner',
                default: '白色の旗'
            }),
            itemID: 'minecraft:black_banner',
            blockID: '425',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.OrangeBanner',
                default: '橙色の旗'
            }),
            itemID: 'minecraft:red_banner',
            blockID: '425',
            blockData: '1'
        },
        {
            name: formatMessage({
                id: 'minecraft.MagentaBanner',
                default: '赤紫色の旗'
            }),
            itemID: 'minecraft:green_banner',
            blockID: '425',
            blockData: '2'
        },
        {
            name: formatMessage({
                id: 'minecraft.LightBlueBanner',
                default: '空色の旗'
            }),
            itemID: 'minecraft:brown_banner',
            blockID: '425',
            blockData: '3'
        },
        {
            name: formatMessage({
                id: 'minecraft.YellowBanner',
                default: '黃色の旗'
            }),
            itemID: 'minecraft:blue_banner',
            blockID: '425',
            blockData: '4'
        },
        {
            name: formatMessage({
                id: 'minecraft.LimeBanner',
                default: '黄緑色の旗'
            }),
            itemID: 'minecraft:purple_banner',
            blockID: '425',
            blockData: '5'
        },
        {
            name: formatMessage({
                id: 'minecraft.PinkBanner',
                default: '桃色の旗'
            }),
            itemID: 'minecraft:cyan_banner',
            blockID: '425',
            blockData: '6'
        },
        {
            name: formatMessage({
                id: 'minecraft.GrayBanner',
                default: '灰色の旗'
            }),
            itemID: 'minecraft:light_gray_banner',
            blockID: '425',
            blockData: '7'
        },
        {
            name: formatMessage({
                id: 'minecraft.LightGrayBanner',
                default: '薄灰色の旗'
            }),
            itemID: 'minecraft:gray_banner',
            blockID: '425',
            blockData: '8'
        },
        {
            name: formatMessage({
                id: 'minecraft.CyanBanner',
                default: '青緑色の旗'
            }),
            itemID: 'minecraft:pink_banner',
            blockID: '425',
            blockData: '9'
        },
        {
            name: formatMessage({
                id: 'minecraft.PurpleBanner',
                default: '紫色の旗'
            }),
            itemID: 'minecraft:lime_banner',
            blockID: '425',
            blockData: '10'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlueBanner',
                default: '青色の旗'
            }),
            itemID: 'minecraft:yellow_banner',
            blockID: '425',
            blockData: '11'
        },
        {
            name: formatMessage({
                id: 'minecraft.BrownBanner',
                default: '茶色の旗'
            }),
            itemID: 'minecraft:light_blue_banner',
            blockID: '425',
            blockData: '12'
        },
        {
            name: formatMessage({
                id: 'minecraft.GreenBanner',
                default: '緑色の旗'
            }),
            itemID: 'minecraft:magenta_banner',
            blockID: '425',
            blockData: '13'
        },
        {
            name: formatMessage({
                id: 'minecraft.RedBanner',
                default: '赤色の旗'
            }),
            itemID: 'minecraft:orange_banner',
            blockID: '425',
            blockData: '14'
        },
        {
            name: formatMessage({
                id: 'minecraft.BlackBanner',
                default: '黒色の旗'
            }),
            itemID: 'minecraft:white_banner',
            blockID: '425',
            blockData: '15'
        },
        {
            name: formatMessage({
                id: 'minecraft.EndCrystal',
                default: 'エンドクリスタル'
            }),
            itemID: 'minecraft:end_crystal',
            blockID: '426',
            blockData: '0'
        }
    ];
}

exports.genRedStoneBlockInfo = () => {
    return [{
        itemID: 'minecraft:dispenser',
        itemID: 'minecraft:grass_block',
        blockData: 0,
        blockID: 23,
        name: formatMessage({
            id: 'minecraft.Dispenser',
            default: 'ディスペンサー'
        })
    },
    {
        itemID: 'minecraft:note_block',
        blockData: 0,
        blockID: 25,
        name: formatMessage({
            id: 'minecraft.NoteBlock',
            default: '音符ブロック'
        })
    },
    {
        itemID: 'minecraft:dirt',
        itemID: 'minecraft:piston',
        blockData: 0,
        blockID: 33,
        name: formatMessage({
            id: 'minecraft.Piston',
            default: 'ピストン'
        })
    },
    {
        itemID: 'minecraft:sticky_piston',
        blockData: 0,
        blockID: 29,
        name: formatMessage({
            id: 'minecraft.StickyPiston',
            default: '粘着ピストン'
        })
    },
    {
        itemID: 'minecraft:cobblestone',
        itemID: 'minecraft:tnt',
        blockData: 0,
        blockID: 46,
        name: formatMessage({
            id: 'minecraft.TNT',
            default: 'TNT'
        })
    },
    {
        itemID: 'minecraft:lever',
        itemID: 'minecraft:oak_sapling',
        blockData: 0,
        blockID: 69,
        name: formatMessage({
            id: 'minecraft.Lever',
            default: 'レバー'
        })
    },
    {
        itemID: 'minecraft:bedrock',
        itemID: 'minecraft:stone_pressure_plate',
        blockData: 0,
        blockID: 70,
        name: formatMessage({
            id: 'minecraft.StonePressurePlate',
            default: '石の感圧板'
        })
    },
    {
        itemID: 'minecraft:oak_pressure_plate',
        blockData: 0,
        blockID: 72,
        name: formatMessage({ id: 'minecraft.WoodenPressurePlate', default: '木の感圧板' })
    },
    {
        blockData: 0,
        blockID: 75,
        name: formatMessage({ id: 'minecraft.RedstoneTorch(off)', default: 'レッドストーントーチ(off)' })
    },
    {
        itemID: 'minecraft:redstone_torch',
        blockData: 0,
        blockID: 76,
        name: formatMessage({ id: 'minecraft.RedstoneTorch(on)', default: 'レッドストーントーチ(on)' })
    },
    {
        itemID: 'minecraft:stone_button',
        blockData: 0,
        blockID: 77,
        name: formatMessage({ id: 'minecraft.StoneButton', default: '石のボタン' })
    },
    {
        itemID: 'minecraft:oak_trapdoor',
        blockData: 0,
        blockID: 96,
        name: formatMessage({ id: 'minecraft.WoodenTrapdoor', default: '木のトラップドア' })
    },
    {
        itemID: 'minecraft:oak_fence_gate',
        itemID: 'minecraft:stone',
        blockData: 0,
        blockID: 107,
        name: formatMessage({ id: 'minecraft.OakFenceGate', default: 'オークのフェンスゲート' })
    },
    {
        itemID: 'minecraft:oak_leaves',
        itemID: 'minecraft:spruce_fence_gate',
        blockData: 0,
        blockID: 183,
        name: formatMessage({ id: 'minecraft.SpruceFenceGate', default: 'トウヒのフェンスゲート' })
    },
    {
        itemID: 'minecraft:birch_fence_gate',
        blockData: 0,
        blockID: 184,
        name: formatMessage({ id: 'minecraft.BirchFenceGate', default: 'シラカバのフェンスゲート' })
    },
    {
        itemID: 'minecraft:jungle_fence_gate',
        blockData: 0,
        blockID: 185,
        name: formatMessage({ id: 'minecraft.JungleFenceGate', default: 'ジャングルのフェンスゲート' })
    },
    {
        itemID: 'minecraft:dark_oak_fence_gate',
        blockData: 0,
        blockID: 186,
        name: formatMessage({ id: 'minecraft.DarkOakFenceGate', default: 'ダークオークのフェンスゲート' })
    },
    {
        itemID: 'minecraft:acacia_fence_gate',
        blockData: 0,
        blockID: 187,
        name: formatMessage({ id: 'minecraft.AcaciaFenceGate', default: 'アカシアのフェンスゲート' })
    },
    {
        itemID: 'minecraft:redstone_lamp',
        itemID: 'minecraft:sand',
        blockData: 0,
        blockID: 123,
        name: formatMessage({ id: 'minecraft.RedstoneLamp(inactive)', default: 'レッドストーンランプ(inactive)' })
    },
    {
        blockData: 0,
        blockID: 124,
        name: formatMessage({ id: 'minecraft.RedstoneLamp(active)', default: 'レッドストーンランプ(active)' })
    },
    {
        itemID: 'minecraft:gravel',
        itemID: 'minecraft:tripwire_hook',
        blockData: 0,
        blockID: 131,
        name: formatMessage({ id: 'minecraft.TripwireHook', default: 'トリップワイヤーフック' })
    },
    {
        itemID: 'minecraft:gold_ore',
        itemID: 'minecraft:oak_button',
        blockData: 0,
        blockID: 143,
        name: formatMessage({ id: 'minecraft.WoodenButtons', default: '木のボタン' })
    },
    {
        itemID: 'minecraft:trapped_chest',
        blockData: 0,
        blockID: 146,
        name: formatMessage({ id: 'minecraft.TrappedChest', default: 'トラップチェスト' })
    },
    {
        itemID: 'minecraft:light_weighted_pressure_plate',
        blockData: 0,
        blockID: 147,
        name: formatMessage({ id: 'minecraft.WeightedPressurePlate(light)', default: '重量感圧板(軽)' })
    },
    {
        itemID: 'minecraft:heavy_weighted_pressure_plate',
        blockData: 0,
        blockID: 148,
        name: formatMessage({ id: 'minecraft.WeightedPressurePlate(heavy)', default: '重量感圧板(重)' })
    },
    {
        itemID: 'minecraft:daylight_detector',
        itemID: 'minecraft:iron_ore',
        blockData: 0,
        blockID: 151,
        name: formatMessage({ id: 'minecraft.DaylightDetector', default: '日照センサー' })
    },
    {
        itemID: 'minecraft:redstone_block',
        blockData: 0,
        blockID: 152,
        name: formatMessage({ id: 'minecraft.BlockofRedstone', default: 'レッドストーンブロック' })
    },
    {
        itemID: 'minecraft:hopper',
        blockData: 0,
        blockID: 154,
        name: formatMessage({ id: 'minecraft.Hopper', default: 'ホッパー' })
    },
    {
        itemID: 'minecraft:dropper',
        blockData: 0,
        blockID: 158,
        name: formatMessage({ id: 'minecraft.Dropper', default: 'ドロッパー' })
    },
    {
        itemID: 'minecraft:coal_ore',
        itemID: 'minecraft:iron_trapdoor',
        blockData: 0,
        blockID: 167,
        name: formatMessage({ id: 'minecraft.IronTrapdoor', default: '鉄のトラップドア' })
    },
    {
        itemID: 'minecraft:lapis_ore',
        itemID: 'minecraft:observer',
        blockData: 0,
        blockID: 218,
        name: formatMessage({ id: 'minecraft.Observer', default: 'オブザーバー' })
    },
    {
        itemID: 'minecraft:iron_door',
        blockData: 0,
        blockID: 330,
        name: formatMessage({ id: 'minecraft.IronDoor', default: '鉄のドア' })
    },
    {
        itemID: 'minecraft:oak_door',
        blockData: 0,
        blockID: 324,
        name: formatMessage({ id: 'minecraft.OakDoor', default: 'オークのドア' })
    },
    {
        blockData: 0,
        blockID: 330,
        name: formatMessage({ id: 'minecraft.IronDoor', default: '鉄のドア' })
    },
    {
        itemID: 'minecraft:iron_block',
        itemID: 'minecraft:spruce_door',
        blockData: 0,
        blockID: 427,
        name: formatMessage({ id: 'minecraft.SpruceDoor', default: 'トウヒのドア' })
    },
    {
        itemID: 'minecraft:birch_door',
        blockData: 0,
        blockID: 428,
        name: formatMessage({ id: 'minecraft.BirchDoor', default: 'シラカバのドア' })
    },
    {
        itemID: 'minecraft:jungle_door',
        blockData: 0,
        blockID: 429,
        name: formatMessage({ id: 'minecraft.JungleDoor', default: 'ジャングルのドア' })
    },
    {
        itemID: 'minecraft:acacia_door',
        blockData: 0,
        blockID: 430,
        name: formatMessage({ id: 'minecraft.AcaciaDoor', default: 'アカシアのドア' })
    },
    {
        itemID: 'minecraft:dark_oak_door',
        blockData: 0,
        blockID: 431,
        name: formatMessage({ id: 'minecraft.DarkOakDoor', default: 'ダークオークのドア' })
    },
    {
        itemID: 'minecraft:repeater',
        itemID: 'minecraft:white_wool',
        blockData: 0,
        blockID: 356,
        name: formatMessage({ id: 'minecraft.RedstoneRepeater', default: 'レッドストーンリピーター' })
    },
    {
        itemID: 'minecraft:comparator',
        itemID: 'minecraft:red_mushroom',
        blockData: 0,
        blockID: 404,
        name: formatMessage({ id: 'minecraft.RedstoneComparator', default: 'レッドストーンコンパレーター' })
    },
    {
        itemID: 'minecraft:redstone',
        blockData: 0,
        blockID: 331,
        name: formatMessage({ id: 'minecraft.RedstoneDust', default: 'レッドストーンダスト' })
    }];
}

exports.genTransportationBlockInfo = () => {
    return [{
        itemID: 'minecraft:powered_rail',
        blockData: 0,
        blockID: 27,
        name: formatMessage({ id: 'minecraft.PoweredRail', default: 'パワードレール' })
    },
    {
        itemID: 'minecraft:detector_rail',
        blockData: 0,
        blockID: 28,
        name: formatMessage({ id: 'minecraft.DetectorRail', default: 'ディテクターレール' })
    },
    {
        itemID: 'minecraft:rail',
        blockData: 0,
        blockID: 66,
        name: formatMessage({ id: 'minecraft.Rail', default: 'レール' })
    },
    {
        itemID: 'minecraft:activator_rail',
        blockData: 0,
        blockID: 157,
        name: formatMessage({ id: 'minecraft.ActivatorRail', default: 'アクティベーターレール' })
    },
    {
        itemID: 'minecraft:minecart',
        blockData: 0,
        blockID: 328,
        name: formatMessage({ id: 'minecraft.Minecart', default: 'トロッコ' })
    },
    {
        itemID: 'minecraft:saddle',
        blockData: 0,
        blockID: 329,
        name: formatMessage({ id: 'minecraft.Saddle', default: '鞍' })
    },
    {
        itemID: 'minecraft:chest_minecart',
        blockData: 0,
        blockID: 342,
        name: formatMessage({ id: 'minecraft.MinecartwithChest', default: 'チェスト付きトロッコ' })
    },
    {
        itemID: 'minecraft:furnace_minecart',
        blockData: 0,
        blockID: 343,
        name: formatMessage({ id: 'minecraft.MinecartwithFurnace', default: 'かまど付きトロッコ' })
    },
    {
        itemID: 'minecraft:tnt_minecart',
        blockData: 0,
        blockID: 407,
        name: formatMessage({ id: 'minecraft.MinecartwithTNT', default: 'TNT付きトロッコ ' })
    },
    {
        itemID: 'minecraft:hopper_minecart',
        blockData: 0,
        blockID: 408,
        name: formatMessage({ id: 'minecraft.MinecartwithHopper', default: 'ホッパー付きトロッコ' })
    },
    {
        itemID: 'minecraft:brown_mushroom',
        itemID: 'minecraft:carrot_on_a_stick',
        blockData: 0,
        blockID: 398,
        name: formatMessage({ id: 'minecraft.CarrotonaStick', default: 'ニンジン付きの棒' })
    },
    {
        itemID: 'minecraft:elytra',
        blockData: 0,
        blockID: 443,
        name: formatMessage({ id: 'minecraft.Elytra', default: 'エリトラ' })
    },
    {
        itemID: 'minecraft:oak_boat',
        blockData: 0,
        blockID: 333,
        name: formatMessage({ id: 'minecraft.OakBoat', default: 'オークのボート' })
    },
    {
        itemID: 'minecraft:spruce_boat',
        blockData: 0,
        blockID: 444,
        name: formatMessage({ id: 'minecraft.SpruceBoat', default: 'トウヒのボート' })
    },
    {
        itemID: 'minecraft:birch_boat',
        blockData: 0,
        blockID: 445,
        name: formatMessage({ id: 'minecraft.BirchBoat', default: 'シラカバのボート' })
    },
    {
        itemID: 'minecraft:jungle_boat',
        blockData: 0,
        blockID: 446,
        name: formatMessage({ id: 'minecraft.JungleBoat', default: 'ジャングルのボート' })
    },
    {
        itemID: 'minecraft:acacia_boat',
        blockData: 0,
        blockID: 447,
        name: formatMessage({ id: 'minecraft.AcaciaBoat', default: 'アカシアのボート' })
    },
    {
        itemID: 'minecraft:dark_oak_boat',
        blockData: 0,
        blockID: 448,
        name: formatMessage({ id: 'minecraft.DarkOakBoat', default: 'ダークオークボート' })
    }];
}

exports.genMiscellaneousBlockInfo = () => {
    return [
        {
            itemID: 'minecraft:beacon',
            blockData: 0,
            blockID: '138',
            name: formatMessage({ id: 'minecraft.Beacon', default: 'ビーコン' })
        },
        {
            itemID: 'minecraft:coal',
            blockData: 0,
            blockID: '263',
            name: formatMessage({ id: 'minecraft.Coal', default: '石炭' })
        },
        {
            itemID: 'minecraft:charcoal',
            blockData: 0,
            blockID: '263:1',
            name: formatMessage({ id: 'minecraft.Charcoal', default: '木炭' })
        },
        {
            itemID: 'minecraft:diamond',
            blockData: 0,
            blockID: '264',
            name: formatMessage({ id: 'minecraft.Diamond', default: 'ダイヤモンド' })
        },
        {
            itemID: 'minecraft:iron_ingot',
            blockData: 0,
            blockID: '265',
            name: formatMessage({ id: 'minecraft.Iron_Ingot', default: '鉄インゴット' })
        },
        {
            itemID: 'minecraft:gold_ingot',
            blockData: 0,
            blockID: '266',
            name: formatMessage({ id: 'minecraft.Gold_Ingot', default: '金インゴット' })
        },
        {
            itemID: 'minecraft:stick',
            blockData: 0,
            blockID: '280',
            name: formatMessage({ id: 'minecraft.Stick', default: '棒' })
        },
        {
            itemID: 'minecraft:bowl',
            blockData: 0,
            blockID: '281',
            name: formatMessage({ id: 'minecraft.Bowl', default: 'ボウル' })
        },
        {
            itemID: 'minecraft:string',
            blockData: 0,
            blockID: '287',
            name: formatMessage({ id: 'minecraft.String', default: '糸' })
        },
        {
            itemID: 'minecraft:feather',
            blockData: 0,
            blockID: '288',
            name: formatMessage({ id: 'minecraft.Feather', default: '羽根' })
        },
        {
            itemID: 'minecraft:gunpowder',
            blockData: 0,
            blockID: '289',
            name: formatMessage({ id: 'minecraft.Gunpowder', default: '火薬' })
        },
        {
            itemID: 'minecraft:wheat_seeds',
            blockData: 0,
            blockID: '295',
            name: formatMessage({ id: 'minecraft.Wheat_Seeds', default: '小麦の種' })
        },
        {
            itemID: 'minecraft:wheat',
            blockData: 0,
            blockID: '296',
            name: formatMessage({ id: 'minecraft.Wheat', default: '小麦' })
        },
        {
            itemID: 'minecraft:flint',
            blockData: 0,
            blockID: '318',
            name: formatMessage({ id: 'minecraft.Flint', default: '火打石' })
        },
        {
            itemID: 'minecraft:bucket',
            blockData: 0,
            blockID: '325',
            name: formatMessage({ id: 'minecraft.Bucket', default: 'バケツ' })
        },
        {
            itemID: 'minecraft:water_bucket',
            blockData: 0,
            blockID: '326',
            name: formatMessage({ id: 'minecraft.Water_Bucket', default: '水入りバケツ' })
        },
        {
            itemID: 'minecraft:lava_bucket',
            blockData: 0,
            blockID: '327',
            name: formatMessage({ id: 'minecraft.Lava_Bucket', default: '溶岩入りバケツ' })
        },
        {
            itemID: 'minecraft:snowball',
            blockData: 0,
            blockID: '332',
            name: formatMessage({ id: 'minecraft.Snowball', default: '雪玉' })
        },
        {
            itemID: 'minecraft:leather',
            blockData: 0,
            blockID: '334',
            name: formatMessage({ id: 'minecraft.Leather', default: '革' })
        },
        {
            itemID: 'minecraft:milk_bucket',
            blockData: 0,
            blockID: '335',
            name: formatMessage({ id: 'minecraft.Milk_Bucket', default: '牛乳入りバケツ' })
        },
        {
            itemID: 'minecraft:brick',
            blockData: 0,
            blockID: '336',
            name: formatMessage({ id: 'minecraft.Brick', default: 'レンガ' })
        },
        {
            itemID: 'minecraft:clay',
            itemID: 'minecraft:clay_ball',
            blockData: 0,
            blockID: '337',
            name: formatMessage({ id: 'minecraft.Clay', default: '粘土玉' })
        },
        {
            itemID: 'minecraft:sugar_cane',
            blockData: 0,
            blockID: '338',
            name: formatMessage({ id: 'minecraft.Sugar_canes', default: 'サトウキビ' })
        },
        {
            itemID: 'minecraft:paper',
            blockData: 0,
            blockID: '339',
            name: formatMessage({ id: 'minecraft.Paper', default: '紙' })
        },
        {
            itemID: 'minecraft:book',
            blockData: 0,
            blockID: '340',
            name: formatMessage({ id: 'minecraft.Book', default: '本' })
        },
        {
            itemID: 'minecraft:slime_ball',
            blockData: 0,
            blockID: '341',
            name: formatMessage({ id: 'minecraft.Slimeball', default: 'スライムボール' })
        },
        {
            itemID: 'minecraft:egg',
            blockData: 0,
            blockID: '344',
            name: formatMessage({ id: 'minecraft.Egg', default: '卵' })
        },
        {
            itemID: 'minecraft:glowstone_dust',
            blockData: 0,
            blockID: '348',
            name: formatMessage({ id: 'minecraft.Glowstone_Dust', default: 'グロウストーンダスト' })
        },
        {
            itemID: 'minecraft:ink_sac',
            blockData: 0,
            blockID: '351',
            name: formatMessage({ id: 'minecraft.Ink_Sac', default: 'イカスミ' })
        },
        {
            itemID: 'minecraft:red_dye',
            blockData: 0,
            blockID: '351:1',
            name: formatMessage({ id: 'minecraft.Rose_Dye', default: '赤色の染料' })
        },
        {
            itemID: 'minecraft:green_dye',
            blockData: 0,
            blockID: '351:2',
            name: formatMessage({ id: 'minecraft.Green_Dye', default: '緑色の染料' })
        },
        {
            itemID: 'minecraft:brown_dye',
            blockData: 0,
            blockID: '351:3',
            name: formatMessage({ id: 'minecraft.Brown_Dye', default: '茶色の染料' })
        },
        {
            itemID: 'minecraft:blue_dye',
            blockData: 0,
            blockID: '351:4',
            name: formatMessage({ id: 'minecraft.Blue_Dye', default: '青色の染料' })
        },
        {
            itemID: 'minecraft:purple_dye',
            blockData: 0,
            blockID: '351:5',
            name: formatMessage({ id: 'minecraft.Purple_Dye', default: '紫色の染料' })
        },
        {
            itemID: 'minecraft:cyan_dye',
            blockData: 0,
            blockID: '351:6',
            name: formatMessage({ id: 'minecraft.Cyan_Dye', default: '青緑色の染料' })
        },
        {
            itemID: 'minecraft:light_gray_dye',
            blockData: 0,
            blockID: '351:7',
            name: formatMessage({ id: 'minecraft.LightGray_Dye', default: '薄灰色の染料' })
        },
        {
            itemID: 'minecraft:gray_dye',
            blockData: 0,
            blockID: '351:8',
            name: formatMessage({ id: 'minecraft.Gray_Dye', default: '灰色の染料' })
        },
        {
            itemID: 'minecraft:pink_dye',
            blockData: 0,
            blockID: '351:9',
            name: formatMessage({ id: 'minecraft.Pink_Dye', default: '桃色の染料' })
        },
        {
            itemID: 'minecraft:lime_dye',
            blockData: 0,
            blockID: '351:10',
            name: formatMessage({ id: 'minecraft.Lime_Dye', default: '黄緑色の染料' })
        },
        {
            itemID: 'minecraft:yellow_dye',
            blockData: 0,
            blockID: '351:11',
            name: formatMessage({ id: 'minecraft.Yellow_Dye', default: '黄色の染料' })
        },
        {
            itemID: 'minecraft:light_blue_dye',
            blockData: 0,
            blockID: '351:12',
            name: formatMessage({ id: 'minecraft.LightBlue_Dye', default: '空色の染料' })
        },
        {
            itemID: 'minecraft:magenta_dye',
            blockData: 0,
            blockID: '351:13',
            name: formatMessage({ id: 'minecraft.Magenta_Dye', default: '赤紫色の染料' })
        },
        {
            itemID: 'minecraft:orange_dye',
            blockData: 0,
            blockID: '351:14',
            name: formatMessage({ id: 'minecraft.Orange_Dye', default: '橙色の染料' })
        },
        {
            itemID: 'minecraft:white_dye',
            blockData: 0,
            blockID: '351:15',
            name: formatMessage({ id: 'minecraft.White_Dye', default: '白色の染料' })
        },
        {
            itemID: 'minecraft:bone',
            blockData: 0,
            blockID: '352',
            name: formatMessage({ id: 'minecraft.Bone', default: '骨' })
        },
        {
            itemID: 'minecraft:sugar',
            blockData: 0,
            blockID: '353',
            name: formatMessage({ id: 'minecraft.Sugar', default: '砂糖' })
        },
        {
            itemID: 'minecraft:pumpkin_seeds',
            blockData: 0,
            blockID: '361',
            name: formatMessage({ id: 'minecraft.Pumpkin_Seeds', default: 'カボチャの種' })
        },
        {
            itemID: 'minecraft:melon_seeds',
            blockData: 0,
            blockID: '362',
            name: formatMessage({ id: 'minecraft.Melon_Seeds', default: 'スイカの種' })
        },
        {
            itemID: 'minecraft:ender_pearl',
            blockData: 0,
            blockID: '368',
            name: formatMessage({ id: 'minecraft.Ender_Pearl', default: 'エンダーパール' })
        },
        {
            itemID: 'minecraft:blaze_rod',
            blockData: 0,
            blockID: '369',
            name: formatMessage({ id: 'minecraft.Blaze_Rod', default: 'ブレイズロッド' })
        },
        {
            itemID: 'minecraft:gold_nugget',
            blockData: 0,
            blockID: '371',
            name: formatMessage({ id: 'minecraft.Gold_Nugget', default: '金塊' })
        },
        {
            itemID: 'minecraft:nether_wart',
            blockData: 0,
            blockID: '115',
            name: formatMessage({ id: 'minecraft.Nether_Wart', default: 'ネザーウォート' })
        },
        {
            itemID: 'minecraft:ender_eye',
            blockData: 0,
            blockID: '381',
            name: formatMessage({ id: 'minecraft.Eye_of_Ender', default: 'エンダーアイ' })
        },
        {
            itemID: 'minecraft:bat_spawn_egg',
            blockData: 0,
            blockID: '383:65',
            name: formatMessage({ id: 'minecraft.Spawn_Bat', default: 'コウモリのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:blaze_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Blaze', default: 'ブレイズのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:cave_spider_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Cave_Spider', default: '洞窟グモのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:chiken_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Chicken', default: 'ニワトリのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:cow_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Cow', default: 'ウシのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:creeper_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Creeper', default: 'クリーパーのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:donkey_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Donkey', default: 'ロバのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:elder_guardian_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Elder_Guardian', default: 'エルダーガーディアンのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:enderman_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Enderman', default: 'エンダーマンのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:endermite_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Endermite', default: 'エンダーマイトのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:evoker_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Evoker', default: 'エヴォーカーのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:ghast_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Ghast', default: 'ガストのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:guardian_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Guardian', default: 'ガーディアンのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:horse_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Horse', default: 'ウマのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:husk_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Husk', default: 'ハスクのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:llama_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Llama', default: 'ラマのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:magmacube_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_MagmaCube', default: 'マグマキューブのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:mooshroom_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Mooshroom', default: 'ムーシュルームのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:mule_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Mule', default: 'ラバのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:ocelot_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Ocelot', default: 'ヤマネコのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:parrot_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Parrot', default: 'オウムのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:pig_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Pig', default: 'ブタのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:polarbear_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_PolarBear', default: 'シロクマのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:rabbit_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Rabbit', default: 'ウサギのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:sheep_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Sheep', default: '羊のスポーンエッグ' })
        },
        {
            itemID: 'minecraft:shulker_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Shulker', default: 'シュルカーのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:silverfish_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Silverfish', default: 'シルバーフィッシュのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:skeleton_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Skeleton', default: 'スケルトンのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:skeleton_horse_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_SkeletonHorse', default: 'スケルトンホースのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:slime_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Slime', default: 'スライムのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:spider_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Spider', default: 'クモのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:squid_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Squid', default: 'イカのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:stray_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Stray', default: 'ストレイのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:vex_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Vex', default: 'ヴェックスのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:villager_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Villager', default: '村人のスポーンエッグ' })
        },
        {
            itemID: 'minecraft:vindicator_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Vindicator', default: 'ヴィンディケーターのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:witch_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Witch', default: 'ウィッチのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:wither_skeleton_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_WitherSkeleton', default: 'ウィザースケルトンのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:wolf_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Wolf', default: 'オオカミのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:zombie_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_Zombie', default: 'ゾンビのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:zombie_horse_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_ZombieHorse', default: 'ゾンビホースのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:zombified_piglin_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_ZombiePigMan', default: 'ゾンビピッグマンのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:zombie_villager_spawn_egg',
            blockData: 0,
            blockID: '383',
            name: formatMessage({ id: 'minecraft.Spawn_VillagerZombie', default: '村人ゾンビのスポーンエッグ' })
        },
        {
            itemID: 'minecraft:experience_bottle',
            blockData: 0,
            blockID: '384',
            name: formatMessage({ id: 'minecraft.Bottle_o_Enchanting', default: 'エンチャントの瓶' })
        },
        {
            itemID: 'minecraft:fire_charge',
            blockData: 0,
            blockID: '385',
            name: formatMessage({ id: 'minecraft.Fire_Charge', default: 'ファイヤーチャージ' })
        },
        {
            itemID: 'minecraft:writable_book',
            blockData: 0,
            blockID: '386',
            name: formatMessage({ id: 'minecraft.Book_and_Quill', default: '本と羽根ペン' })
        },
        {
            itemID: 'minecraft:emerald',
            blockData: 0,
            blockID: '388',
            name: formatMessage({ id: 'minecraft.Emerald', default: 'エメラルド' })
        },
        {
            itemID: 'minecraft:map',
            blockData: 0,
            blockID: '395',
            name: formatMessage({ id: 'minecraft.Empty_Map', default: '白紙の地図' })
        },
        {
            itemID: 'minecraft:nether_star',
            blockData: 0,
            blockID: '399',
            name: formatMessage({ id: 'minecraft.Nether_Star', default: 'ネザースター' })
        },
        {
            itemID: 'minecraft:firework_star',
            blockData: 0,
            blockID: '402',
            name: formatMessage({ id: 'minecraft.Firework_Star', default: '花火の星' })
        },
        {
            itemID: 'minecraft:nether_brick',
            blockData: 0,
            blockID: '112',
            name: formatMessage({ id: 'minecraft.Nether_Brick', default: 'ネザーレンガ' })
        },
        {
            itemID: 'minecraft:quartz',
            blockData: 0,
            blockID: '406',
            name: formatMessage({ id: 'minecraft.Nether_Quartz', default: 'ネザークォーツ' })
        },
        {
            itemID: 'minecraft:prismarine_shard',
            blockData: 0,
            blockID: '409',
            name: formatMessage({ id: 'minecraft.Prismarine_Shard', default: 'プリズマリンの欠片' })
        },
        {
            itemID: 'minecraft:prismarine_crystals',
            blockData: 0,
            blockID: '410',
            name: formatMessage({ id: 'minecraft.Prismarine_Crystals', default: 'プリズマリンクリスタル' })
        },
        {
            itemID: 'minecraft:rabbit_hide',
            blockData: 0,
            blockID: '415',
            name: formatMessage({ id: 'minecraft.Rabbit_Hide', default: 'ウサギの皮' })
        },
        {
            itemID: 'minecraft:iron_horse_armor',
            blockData: 0,
            blockID: '417',
            name: formatMessage({ id: 'minecraft.Iron_Horse_Armor', default: '鉄の馬鎧' })
        },
        {
            itemID: 'minecraft:golden_horse_armor',
            blockData: 0,
            blockID: '418',
            name: formatMessage({ id: 'minecraft.Gold_Horse_Armor', default: '金の馬鎧' })
        },
        {
            itemID: 'minecraft:diamond_horse_armor',
            blockData: 0,
            blockID: '419',
            name: formatMessage({ id: 'minecraft.Diamond_Horse_Armor', default: 'ダイヤモンドの馬鎧' })
        },
        {
            itemID: 'minecraft:chorus_fruit',
            blockData: 0,
            blockID: '432',
            name: formatMessage({ id: 'minecraft.Chorus_Fruit', default: 'コーラスフルーツ' })
        },
        {
            itemID: 'minecraft:popped_chorus_fruit',
            blockData: 0,
            blockID: '433',
            name: formatMessage({ id: 'minecraft.Popped_Chorus_Fruit', default: '焼いたコーラスフルーツ' })
        },
        {
            itemID: 'minecraft:beetroot_seeds',
            blockData: 0,
            blockID: '435',
            name: formatMessage({ id: 'minecraft.Beetroot_Seeds', default: 'ビートルートの種' })
        },
        {
            itemID: 'minecraft:shulker_shell',
            blockData: 0,
            blockID: '450',
            name: formatMessage({ id: 'minecraft.Shulker_Shell', default: 'シュルカーの殻' })
        },
        {
            itemID: 'minecraft:iron_nugget',
            blockData: 0,
            blockID: '452',
            name: formatMessage({ id: 'minecraft.Iron_Nugget', default: '鉄塊' })
        },
        {
            itemID: 'minecraft:music_disc_13',
            blockData: 0,
            blockID: '2256',
            name: formatMessage({ id: 'minecraft.Music_Disc_C418_13', default: 'レコード_C418_13' })
        },
        {
            itemID: 'minecraft:music_disc_cat',
            blockData: 0,
            blockID: '2257',
            name: formatMessage({ id: 'minecraft.Music_Disc_C418_cat', default: 'レコード_C418_cat' })
        },
        {
            itemID: 'minecraft:music_disc_blocks',
            blockData: 0,
            blockID: '2258',
            name: formatMessage({ id: 'minecraft.Music_Disc_C418_blocks', default: 'レコード_C418_blocks' })
        },
        {
            itemID: 'minecraft:music_disc_chirp',
            blockData: 0,
            blockID: '2259',
            name: formatMessage({ id: 'minecraft.Music_Disc_C418_chirp', default: 'レコード_C418_chirp' })
        },
        {
            itemID: 'minecraft:music_disc_far',
            blockData: 0,
            blockID: '2260',
            name: formatMessage({ id: 'minecraft.Music_Disc_C418_far', default: 'レコード_C418_far' })
        },
        {
            itemID: 'minecraft:music_disc_mall',
            blockData: 0,
            blockID: '2261',
            name: formatMessage({ id: 'minecraft.Music_Disc_C418_mall', default: 'レコード_C418_mall' })
        },
        {
            itemID: 'minecraft:music_disc_mellohi',
            blockData: 0,
            blockID: '2262',
            name: formatMessage({ id: 'minecraft.Music_Disc_C418_mellohi', default: 'レコード_C418_mellohi' })
        },
        {
            itemID: 'minecraft:music_disc_stal',
            blockData: 0,
            blockID: '2263',
            name: formatMessage({ id: 'minecraft.Music_Disc_C418_stal', default: 'レコード_C418_stal' })
        },
        {
            itemID: 'minecraft:music_disc_strad',
            blockData: 0,
            blockID: '2264',
            name: formatMessage({ id: 'minecraft.Music_Disc_C418_strad', default: 'レコード_C418_strad' })
        },
        {
            itemID: 'minecraft:music_disc_ward',
            blockData: 0,
            blockID: '2265',
            name: formatMessage({ id: 'minecraft.Music_Disc_C418_ward', default: 'レコード_C418_ward' })
        },
        {
            itemID: 'minecraft:music_disc_11',
            blockData: 0,
            blockID: '2266',
            name: formatMessage({ id: 'minecraft.Music_Disc_C418_11', default: 'レコード_C418_11' })
        },
        {
            itemID: 'minecraft:music_disc_wait',
            blockData: 0,
            blockID: '2267',
            name: formatMessage({ id: 'minecraft.Music_Disc_C418_wait', default: 'レコード_C418_wait' })
        }
    ];
}

exports.genFoodstuffsBlockInfo = () => {
    return [
        {
            itemID: 'minecraft:apple',
            blockData: 0,
            blockID: '260',
            name: formatMessage({ id: 'minecraft.Apple', default: 'リンゴ' })
        },
        {
            itemID: 'minecraft:mushroom_stew',
            blockData: 0,
            blockID: '282',
            name: formatMessage({ id: 'minecraft.Mushroom_Stew', default: 'キノコシチュー' })
        },
        {
            itemID: 'minecraft:bread',
            blockData: 0,
            blockID: '297',
            name: formatMessage({ id: 'minecraft.Bread', default: 'パン' })
        },
        {
            itemID: 'minecraft:porkchop',
            blockData: 0,
            blockID: '319',
            name: formatMessage({ id: 'minecraft.Raw_Porkchop', default: '生の豚肉' })
        },
        {
            itemID: 'minecraft:cooked_porkchop',
            blockData: 0,
            blockID: '320',
            name: formatMessage({ id: 'minecraft.Cooked_Porkchop', default: '焼き豚' })
        },
        {
            itemID: 'minecraft:golden_apple',
            blockData: 0,
            blockID: '322',
            name: formatMessage({ id: 'minecraft.Golden_Apple', default: '金のリンゴ' })
        },
        {
            itemID: 'minecraft:enchanted_golden_apple',
            blockData: '1',
            blockID: '322',
            name: formatMessage({ id: 'minecraft.Enchanted_Golden_Apple', default: 'エンチャントされた金のリンゴ' })
        },
        {
            itemID: 'minecraft:cod',
            blockData: 0,
            blockID: '349',
            name: formatMessage({ id: 'minecraft.Raw_Fish', default: '生魚' })
        },
        {
            itemID: 'minecraft:salmon',
            blockData: '1',
            blockID: '349',
            name: formatMessage({ id: 'minecraft.Raw_Salmon', default: '生鮭' })
        },
        {
            itemID: 'minecraft:tropical_fish',
            blockData: '2',
            blockID: '349',
            name: formatMessage({ id: 'minecraft.Clownfish', default: '熱帯魚' })
        },
        {
            itemID: 'minecraft:pufferfish',
            blockData: '3',
            blockID: '349',
            name: formatMessage({ id: 'minecraft.Pufferfish', default: 'フグ' })
        },
        {
            itemID: 'minecraft:cooked_cod',
            blockData: 0,
            blockID: '350',
            name: formatMessage({ id: 'minecraft.Cooked_Fish', default: '焼き魚' })
        },
        {
            itemID: 'minecraft:cooked_salmon',
            blockData: '1',
            blockID: '350',
            name: formatMessage({ id: 'minecraft.Cooked_Salmon', default: '焼き鮭' })
        },
        {
            itemID: 'minecraft:cake',
            blockData: 0,
            blockID: '354',
            name: formatMessage({ id: 'minecraft.Cake', default: 'ケーキ' })
        },
        {
            itemID: 'minecraft:cookie',
            blockData: 0,
            blockID: '357',
            name: formatMessage({ id: 'minecraft.Cookie', default: 'クッキー' })
        },
        {
            itemID: 'minecraft:melon_slice',
            blockData: 0,
            blockID: '360',
            name: formatMessage({ id: 'minecraft.Melon_Slice', default: 'スイカの薄切り' })
        },
        {
            itemID: 'minecraft:beef',
            blockData: 0,
            blockID: '363',
            name: formatMessage({ id: 'minecraft.Raw_Beef', default: '生の牛肉' })
        },
        {
            itemID: 'minecraft:cooked_beef',
            blockData: 0,
            blockID: '364',
            name: formatMessage({ id: 'minecraft.Steak', default: 'ステーキ' })
        },
        {
            itemID: 'minecraft:chicken',
            blockData: 0,
            blockID: '365',
            name: formatMessage({ id: 'minecraft.Raw_Chicken', default: '生の鶏肉' })
        },
        {
            itemID: 'minecraft:cooked_chicken',
            blockData: 0,
            blockID: '366',
            name: formatMessage({ id: 'minecraft.Cooked_Chicken', default: '焼き鳥' })
        },
        {
            itemID: 'minecraft:rotten_flesh',
            blockData: 0,
            blockID: '367',
            name: formatMessage({ id: 'minecraft.Rotten_Flesh', default: '腐った肉' })
        },
        {
            itemID: 'minecraft:spider_eye',
            blockData: 0,
            blockID: '375',
            name: formatMessage({ id: 'minecraft.Spider_Eye', default: 'クモの目' })
        },
        {
            itemID: 'minecraft:carrot',
            blockData: 0,
            blockID: '391',
            name: formatMessage({ id: 'minecraft.Carrot', default: 'ニンジン' })
        },
        {
            itemID: 'minecraft:potato',
            blockData: 0,
            blockID: '392',
            name: formatMessage({ id: 'minecraft.Potato', default: 'ジャガイモ' })
        },
        {
            itemID: 'minecraft:baked_potato',
            blockData: 0,
            blockID: '393',
            name: formatMessage({ id: 'minecraft.Baked_Potato', default: 'ベイクドポテト' })
        },
        {
            itemID: 'minecraft:poisonous_potato',
            blockData: 0,
            blockID: '394',
            name: formatMessage({ id: 'minecraft.Poisonous_Potato', default: '青くなったジャガイモ' })
        },
        {
            itemID: 'minecraft:pumpkin_pie',
            blockData: 0,
            blockID: '400',
            name: formatMessage({ id: 'minecraft.Pumpkin_Pie', default: 'パンプキンパイ' })
        },
        {
            itemID: 'minecraft:rabbit',
            blockData: 0,
            blockID: '411',
            name: formatMessage({ id: 'minecraft.Raw_Rabbit', default: '生の兎肉' })
        },
        {
            itemID: 'minecraft:cooked_rabbit',
            blockData: 0,
            blockID: '412',
            name: formatMessage({ id: 'minecraft.Cooked_Rabbit', default: '焼き兎肉' })
        },
        {
            itemID: 'minecraft:rabbit_stew',
            blockData: 0,
            blockID: '413',
            name: formatMessage({ id: 'minecraft.Rabbit_Stew', default: 'ウサギシチュー' })
        },
        {
            itemID: 'minecraft:mutton',
            blockData: 0,
            blockID: '423',
            name: formatMessage({ id: 'minecraft.Raw_Mutton', default: '生の羊肉' })
        },
        {
            itemID: 'minecraft:cooked_mutton',
            blockData: 0,
            blockID: '424',
            name: formatMessage({ id: 'minecraft.Cooked_Mutton', default: '焼き羊肉' })
        },
        {
            itemID: 'minecraft:beetroot',
            blockData: 0,
            blockID: '434',
            name: formatMessage({ id: 'minecraft.Beetroot', default: 'ビートルート' })
        },
        {
            itemID: 'minecraft:beetroot_soup',
            blockData: 0,
            blockID: '436',
            name: formatMessage({ id: 'minecraft.Beetroot_Soup', default: 'ビートルートスープ' })
        }
    ];
}

exports.genToolsBlockInfo = () => {
    return [
        {
            itemID: 'minecraft:wooden_shovel',
            blockData: 0,
            blockID: '269',
            name: formatMessage({ id: 'minecraft.WoodenShovel', default: '木のシャベル' })
        },
        {
            itemID: 'minecraft:stone_shovel',
            blockData: 0,
            blockID: '273',
            name: formatMessage({ id: 'minecraft.StoneShovel', default: '石のシャベル' })
        },
        {
            itemID: 'minecraft:iron_shovel',
            blockData: 0,
            blockID: '256',
            name: formatMessage({ id: 'minecraft.IronShovel', default: '鉄のシャベル' })
        },
        {
            itemID: 'minecraft:golden_shovel',
            blockData: 0,
            blockID: '284',
            name: formatMessage({ id: 'minecraft.GoldShovel', default: '金のシャベル' })
        },
        {
            itemID: 'minecraft:diamond_shovel',
            blockData: 0,
            blockID: '277',
            name: formatMessage({ id: 'minecraft.DiamondShovel', default: 'ダイヤモンドのシャベル' })
        },
        {
            itemID: 'minecraft:wooden_pickaxe',
            blockData: 0,
            blockID: '270',
            name: formatMessage({ id: 'minecraft.WoodenPickaxe', default: '木のツルハシ' })
        },
        {
            itemID: 'minecraft:stone_pickaxe',
            blockData: 0,
            blockID: '274',
            name: formatMessage({ id: 'minecraft.StonePickaxe', default: '石のツルハシ' })
        },
        {
            itemID: 'minecraft:iron_pickaxe',
            blockData: 0,
            blockID: '257',
            name: formatMessage({ id: 'minecraft.IronPickaxe', default: '鉄のツルハシ' })
        },
        {
            itemID: 'minecraft:golden_pickaxe',
            blockData: 0,
            blockID: '285',
            name: formatMessage({ id: 'minecraft.GoldPickaxe', default: '金のツルハシ' })
        },
        {
            itemID: 'minecraft:diamond_pickaxe',
            blockData: 0,
            blockID: '278',
            name: formatMessage({ id: 'minecraft.DiamondPickaxe', default: 'ダイヤモンドのツルハシ' })
        },
        {
            itemID: 'minecraft:wooden_axe',
            blockData: 0,
            blockID: '271',
            name: formatMessage({ id: 'minecraft.WoodenAxe', default: '木の斧' })
        },
        {
            itemID: 'minecraft:stone_axe',
            blockData: 0,
            blockID: '275',
            name: formatMessage({ id: 'minecraft.StoneAxe', default: '石の斧' })
        },
        {
            itemID: 'minecraft:iron_axe',
            blockData: 0,
            blockID: '258',
            name: formatMessage({ id: 'minecraft.IronAxe', default: '鉄の斧' })
        },
        {
            itemID: 'minecraft:golden_axe',
            blockData: 0,
            blockID: '286',
            name: formatMessage({ id: 'minecraft.GoldAxe', default: '金の斧' })
        },
        {
            itemID: 'minecraft:diamond_axe',
            blockData: 0,
            blockID: '279',
            name: formatMessage({ id: 'minecraft.DiamondAxe', default: 'ダイヤモンドの斧' })
        },
        {
            itemID: 'minecraft:wooden_hoe',
            blockData: 0,
            blockID: '290',
            name: formatMessage({ id: 'minecraft.WoodenHoe', default: '木のクワ' })
        },
        {
            itemID: 'minecraft:stone_hoe',
            blockData: 0,
            blockID: '291',
            name: formatMessage({ id: 'minecraft.StoneHoe', default: '石のクワ' })
        },
        {
            itemID: 'minecraft:iron_hoe',
            blockData: 0,
            blockID: '292',
            name: formatMessage({ id: 'minecraft.IronHoe', default: '鉄のクワ' })
        },
        {
            itemID: 'minecraft:golden_hoe',
            blockData: 0,
            blockID: '294',
            name: formatMessage({ id: 'minecraft.GoldHoe', default: '金のクワ' })
        },
        {
            itemID: 'minecraft:diamond_hoe',
            blockData: 0,
            blockID: '293',
            name: formatMessage({ id: 'minecraft.DiamondHoe', default: 'ダイヤモンドのクワ' })
        },
        {
            itemID: 'minecraft:flint_and_steel',
            blockData: 0,
            blockID: '259',
            name: formatMessage({ id: 'minecraft.Flint_and_Steel', default: '火打石と打ち金' })
        },
        {
            itemID: 'minecraft:compass',
            blockData: 0,
            blockID: '345',
            name: formatMessage({ id: 'minecraft.Compass', default: 'コンパス' })
        },
        {
            itemID: 'minecraft:fishing_rod',
            blockData: 0,
            blockID: '346',
            name: formatMessage({ id: 'minecraft.Fishing_Rod', default: '釣竿' })
        },
        {
            itemID: 'minecraft:clock',
            blockData: 0,
            blockID: '347',
            name: formatMessage({ id: 'minecraft.Clock', default: '時計' })
        },
        {
            itemID: 'minecraft:shears',
            blockData: 0,
            blockID: '359',
            name: formatMessage({ id: 'minecraft.Shears', default: 'ハサミ' })
        },
        {
            itemID: 'minecraft:lead',
            blockData: 0,
            blockID: '420',
            name: formatMessage({ id: 'minecraft.Lead', default: 'リード' })
        },
        {
            itemID: 'minecraft:name_tag',
            blockData: '0',
            blockID: '421',
            name: formatMessage({ id: 'minecraft.Name_Tag', default: '名札' })
        }
    ];
}

exports.genCombatBlockInfo = () => {
    return [
        {
            itemID: 'minecraft:bow',
            blockData: 0,
            blockID: '261',
            name: formatMessage({ id: 'minecraft.Bow', default: '弓' })
        },
        {
            itemID: 'minecraft:arrow',
            blockData: 0,
            blockID: '262',
            name: formatMessage({ id: 'minecraft.Arrow', default: '矢' })
        },
        {
            itemID: 'minecraft:wooden_sword',
            blockData: 0,
            blockID: '268',
            name: formatMessage({ id: 'minecraft.WoodenSword', default: '木の剣' })
        },
        {
            itemID: 'minecraft:stone_sword',
            blockData: 0,
            blockID: '272',
            name: formatMessage({ id: 'minecraft.StoneSword', default: '石の剣' })
        },
        {
            itemID: 'minecraft:iron_sword',
            blockData: 0,
            blockID: '267',
            name: formatMessage({ id: 'minecraft.IronSword', default: '鉄の剣' })
        },
        {
            itemID: 'minecraft:golden_sword',
            blockData: 0,
            blockID: '283',
            name: formatMessage({ id: 'minecraft.GoldSword', default: '金の剣' })
        },
        {
            itemID: 'minecraft:diamond_sword',
            blockData: 0,
            blockID: '276',
            name: formatMessage({ id: 'minecraft.DiamondSword', default: 'ダイヤモンドの剣' })
        },
        {
            itemID: 'minecraft:leather_helmet',
            blockData: 0,
            blockID: '298',
            name: formatMessage({ id: 'minecraft.LeatherCap', default: '革の帽子' })
        },
        {
            itemID: 'minecraft:chainmail_helmet',
            blockData: 0,
            blockID: '302',
            name: formatMessage({ id: 'minecraft.ChainHelmet', default: 'チェーンのヘルメット' })
        },
        {
            itemID: 'minecraft:iron_helmet',
            blockData: 0,
            blockID: '306',
            name: formatMessage({ id: 'minecraft.IronHelmet', default: '鉄のヘルメット' })
        },
        {
            itemID: 'minecraft:golden_helmet',
            blockData: 0,
            blockID: '314',
            name: formatMessage({ id: 'minecraft.GoldHelmet', default: '金のヘルメット' })
        },
        {
            itemID: 'minecraft:diamond_helmet',
            blockData: 0,
            blockID: '310',
            name: formatMessage({ id: 'minecraft.DiamondHelmet', default: 'ダイヤモンドのヘルメット' })
        },
        {
            itemID: 'minecraft:leather_chestplate',
            blockData: 0,
            blockID: '299',
            name: formatMessage({ id: 'minecraft.LeatherTunic', default: '革の上着' })
        },
        {
            itemID: 'minecraft:chainmail_chestplate',
            blockData: 0,
            blockID: '303',
            name: formatMessage({ id: 'minecraft.ChainChestplate', default: 'チェーンのチェストプレート' })
        },
        {
            itemID: 'minecraft:iron_chestplate',
            blockData: 0,
            blockID: '307',
            name: formatMessage({ id: 'minecraft.IronChestplate', default: '鉄のチェストプレート' })
        },
        {
            itemID: 'minecraft:golden_chestplate',
            blockData: 0,
            blockID: '315',
            name: formatMessage({ id: 'minecraft.GoldChestplate', default: '金のチェストプレート' })
        },
        {
            itemID: 'minecraft:diamond_chestplate',
            blockData: 0,
            blockID: '311',
            name: formatMessage({ id: 'minecraft.DiamondChestplate', default: 'ダイヤモンドのチェストプレート' })
        },
        {
            itemID: 'minecraft:leather_leggings',
            blockData: 0,
            blockID: '300',
            name: formatMessage({ id: 'minecraft.LeatherPants', default: '革のズボン' })
        },
        {
            itemID: 'minecraft:chainmail_leggings',
            blockData: 0,
            blockID: '304',
            name: formatMessage({ id: 'minecraft.ChainLeggings', default: 'チェーンのレギンス' })
        },
        {
            itemID: 'minecraft:iron_leggings',
            blockData: 0,
            blockID: '308',
            name: formatMessage({ id: 'minecraft.IronLeggings', default: '鉄のレギンス' })
        },
        {
            itemID: 'minecraft:golden_leggings',
            blockData: 0,
            blockID: '316',
            name: formatMessage({ id: 'minecraft.GoldLeggings', default: '金のレギンス' })
        },
        {
            itemID: 'minecraft:diamond_leggings',
            blockData: 0,
            blockID: '312',
            name: formatMessage({ id: 'minecraft.DiamondLeggings', default: 'ダイヤモンドのレギンス' })
        },
        {
            itemID: 'minecraft:leather_boots',
            blockData: 0,
            blockID: '301',
            name: formatMessage({ id: 'minecraft.LeatherBoots', default: '革のブーツ' })
        },
        {
            itemID: 'minecraft:chainmail_boots',
            blockData: 0,
            blockID: '305',
            name: formatMessage({ id: 'minecraft.ChainBoots', default: 'チェーンのブーツ' })
        },
        {
            itemID: 'minecraft:iron_boots',
            blockData: 0,
            blockID: '309',
            name: formatMessage({ id: 'minecraft.IronBoots', default: '鉄のブーツ' })
        },
        {
            itemID: 'minecraft:golden_boots',
            blockData: 0,
            blockID: '317',
            name: formatMessage({ id: 'minecraft.GoldBoots', default: '金のブーツ' })
        },
        {
            itemID: 'minecraft:diamond_boots',
            blockData: 0,
            blockID: '313',
            name: formatMessage({ id: 'minecraft.DiamondBoots', default: 'ダイヤモンドのブーツ' })
        },
        {
            itemID: 'minecraft:shield',
            blockData: 0,
            blockID: '442',
            name: formatMessage({ id: 'minecraft.Shield', default: '盾' })
        },
        {
            itemID: 'minecraft:totem_of_undying',
            blockData: 0,
            blockID: '449',
            name: formatMessage({ id: 'minecraft.Totem_of_Undying', default: '不死のトーテム' })
        },
        {
            itemID: 'minecraft:spectral_arrow',
            blockData: '0',
            blockID: '439',
            name: formatMessage({ id: 'minecraft.SpectralArrow', default: '光の矢' })
        }
    ];
}

exports.genBrewingBlockInfo = () => {
    return [
        {
            itemID: 'minecraft:ghast_tear',
            blockData: 0,
            blockID: '370',
            name: formatMessage({ id: 'minecraft.Ghast_Tear', default: 'ガストの涙' })
        },
        {
            itemID: 'minecraft:glass_bottle',
            blockData: 0,
            blockID: '374',
            name: formatMessage({ id: 'minecraft.Glass_Bottle', default: 'ガラス瓶' })
        },
        {
            itemID: 'minecraft:fermented_spider_eye',
            blockData: 0,
            blockID: '376',
            name: formatMessage({ id: 'minecraft.Fermented_Spider_Eye', default: '発酵したクモの目' })
        },
        {
            itemID: 'minecraft:blaze_powder',
            blockData: 0,
            blockID: '377',
            name: formatMessage({ id: 'minecraft.Blaze_Powder', default: 'ブレイズパウダー' })
        },
        {
            itemID: 'minecraft:magma_cream',
            blockData: 0,
            blockID: '378',
            name: formatMessage({ id: 'minecraft.Magma_Cream', default: 'マグマクリーム' })
        },
        {
            itemID: 'minecraft:brewing_stand',
            blockData: 0,
            blockID: '117',
            name: formatMessage({ id: 'minecraft.Brewing_Stand', default: '醸造台' })
        },
        {
            itemID: 'minecraft:cauldron',
            blockData: 0,
            blockID: '118',
            name: formatMessage({ id: 'minecraft.Cauldron', default: '大釜' })
        },
        {
            itemID: 'minecraft:glistering_melon_slice',
            blockData: 0,
            blockID: '382',
            name: formatMessage({ id: 'minecraft.Glistering_Melon_Slice', default: 'きらめくスイカの薄切り' })
        },
        {
            itemID: 'minecraft:golden_carrot',
            blockData: 0,
            blockID: '396',
            name: formatMessage({ id: 'minecraft.Golden_Carrot', default: '金のニンジン' })
        },
        {
            itemID: 'minecraft:rabbit_foot',
            blockData: 0,
            blockID: '414',
            name: formatMessage({
                id: 'minecraft.Rabbits_Foot', default: 'ウサギの足'
            })
        },
        {
            itemID: 'minecraft:dragon_breath',
            blockData: '0',
            blockID: '437',
            name: formatMessage({
                id: 'minecraft.Dragons_Breath', default: 'ドラゴンブレス'
            })
        }
    ];
}

exports.genExtraBlockInfo = () => {
    return [
        {
            name: formatMessage({
                id: 'minecraft.air',
                default: '空気'
            }),
            itemID: 'minecraft:air',
            blockID: '0',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.CommandBlock',
                default: 'コマンドブロック'
            }),
            itemID: 'minecraft:command_block',
            blockID: '137',
            blockData: '0'
        },
        {
            name: formatMessage({
                id: 'minecraft.barrierBlock',
                default: 'バリアーブロック'
            }),
            itemID: 'minecraft:barrier',
            blockID: '166',
            blockData: '0'
        }

    ];
}