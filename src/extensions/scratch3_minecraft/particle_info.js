const formatMessage = require('format-message');

// 1.12.2に無いぽいもの
// 玄武岩の三角州の灰	minecraft:ash
// ソウルサンドの泡	minecraft:bubble_column_up
// ソウルサンドの泡の最上部	minecraft:bubble_pop
// 焚き火の煙	minecraft:campfire_cosy_smoke
// 干草の俵の上においた焚き火の煙	minecraft:campfire_signal_smoke
// コンポスターのきらめき	minecraft:composter
// 真紅の森の胞子	minecraft:crimson_spore
// マグマブロックの泡	minecraft:current_down
// イルカが泳ぐときのパーティクル	minecraft:dolphin
// したたるハチミツ	minecraft:dripping_honey
// したたる泣く黒曜石	minecraft:dripping_obsidian_tear
// スプラッシュポーションなどの渦巻	minecraft:effect
// エルダーガーディアンの呪い	minecraft:elder_guardian
// エンチャントされた武器で攻撃したときのパーティクル	minecraft:enchanted_hit
// ステータス効果の渦巻	minecraft:entity_effect
// エンダードラゴン撃破	minecraft:explosion_emitter
// ハチミツのしずく	minecraft:falling_honey
// 溶岩のしずく	minecraft:falling_lava
// ミツバチから落ちる蜜	minecraft:falling_nectar
// 泣く黒曜石のしずく	minecraft:falling_obsidian_tear
// 水のしずく	minecraft:falling_water
// 花火の閃光	minecraft:flash
// 食べたときなどのパーティクル	minecraft:item
// 滴り落ちたハチミツ	minecraft:landing_honey
// 滴り落ちた溶岩	minecraft:landing_lava
// 滴り落ちた泣く黒曜石	minecraft:landing_obsidian_tear
// コンジットのパーティクル	minecraft:nautilus
// 消えるときの煙	minecraft:poof
// 雨	minecraft:rain
// くしゃみ	minecraft:sneeze
// ソウルスピードのパーティクル	minecraft:soul
// ソウルファイヤの炎	minecraft:soul_fire_flame
// イカスミ	minecraft:squid_ink
// 水中	minecraft:underwater
// 歪んだ森の胞子	minecraft:warped_spore

exports.genParticleInfo = () => {
    return [
        {
            name: formatMessage({
                id: 'minecraft.dragonbreath',
                default: 'ドラゴンブレス'
            }),
            particleName: 'dragonbreath',
            particleName1165: 'minecraft:dragon_breath'
        },
        {
            name: formatMessage({
                id: 'minecraft.mobSpellAmbient',
                default: 'ビーコン'
            }),
            particleName: 'mobSpellAmbient',
            particleName1165: 'minecraft:ambient_entity_effect'
        },
        {
            name: formatMessage({
                id: 'minecraft.angryVillager',
                default: '怒り'
            }),
            particleName: 'angryVillager',
            particleName1165: 'minecraft:angry_villager'
        },
        {
            name: formatMessage({
                id: 'minecraft.barrier',
                default: 'バリア'
            }),
            particleName: 'barrier',
            particleName1165: 'minecraft:barrier'
        },
        {
            name: formatMessage({
                id: 'minecraft.blockcrack',
                default: 'ブロックのひび'
            }),
            particleName: 'blockcrack',
            particleName1165: 'minecraft:block'
        },
        {
            name: formatMessage({
                id: 'minecraft.blockdust',
                default: 'ブロックのごみ'
            }),
            particleName: 'blockdust',
            particleName1165: ''
        },
        {
            name: formatMessage({
                id: 'minecraft.bubble',
                default: '泡'
            }),
            particleName: 'bubble',
            particleName1165: 'minecraft:bubble'
        },
        {
            name: formatMessage({
                id: 'minecraft.cloud',
                default: '雲'
            }),
            particleName: 'cloud',
            particleName1165: 'minecraft:cloud'
        },
        {
            name: formatMessage({
                id: 'minecraft.crit',
                default: 'クリティカルヒット'
            }),
            particleName: 'crit',
            particleName1165: 'minecraft:crit'
        },
        {
            name: formatMessage({
                id: 'minecraft.damageIndicator',
                default: 'ダメージインジケーター'
            }),
            particleName: 'damageIndicator',
            particleName1165: 'minecraft:damage_indicator'
        },
        {
            name: formatMessage({
                id: 'minecraft.depthsuspend',
                default: 'depthsuspend'
            }),
            particleName: 'depthsuspend',
            particleName1165: ''
        },
        {
            name: formatMessage({
                id: 'minecraft.dripLava',
                default: '滴る溶岩'
            }),
            particleName: 'dripLava',
            particleName1165: 'minecraft:dripping_lava'
        },
        {
            name: formatMessage({
                id: 'minecraft.dripWater',
                default: '滴る水滴'
            }),
            particleName: 'dripWater',
            particleName1165: 'minecraft:dripping_water'
        },
        {
            name: formatMessage({
                id: 'minecraft.droplet',
                default: '滴'
            }),
            particleName: 'droplet',
            particleName1165: ''
        },
        {
            name: formatMessage({
                id: 'minecraft.enchantmenttable',
                default: 'エンチャントテーブル'
            }),
            particleName: 'enchantmenttable',
            particleName1165: 'minecraft:enchant'
        },
        {
            name: formatMessage({
                id: 'minecraft.endRod',
                default: 'エンドロッド'
            }),
            particleName: 'endRod',
            particleName1165: 'minecraft:end_rod'
        },
        {
            name: formatMessage({
                id: 'minecraft.explode',
                default: '爆発'
            }),
            particleName: 'explode',
            particleName1165: 'minecraft:explosion'
        },
        {
            name: formatMessage({
                id: 'minecraft.fallingdust',
                default: '落ちてくる塵'
            }),
            particleName: 'fallingdust',
            particleName1165: 'minecraft:falling_dust'
        },
        {
            name: formatMessage({
                id: 'minecraft.fireworksSpark',
                default: '花火'
            }),
            particleName: 'fireworksSpark',
            particleName1165: 'minecraft:firework'
        },
        {
            name: formatMessage({
                id: 'minecraft.flame',
                default: '炎'
            }),
            particleName: 'flame',
            particleName1165: 'minecraft:flame'
        },
        {
            name: formatMessage({
                id: 'minecraft.footstep',
                default: '足跡'
            }),
            particleName: 'footstep',
            particleName1165: ''
        },
        {
            name: formatMessage({
                id: 'minecraft.happyVillager',
                default: '幸せな村人'
            }),
            particleName: 'happyVillager',
            particleName1165: 'minecraft:happy_villager'
        },
        {
            name: formatMessage({
                id: 'minecraft.heart',
                default: 'ハート'
            }),
            particleName: 'heart',
            particleName1165: 'minecraft:heart'
        },
        {
            name: formatMessage({
                id: 'minecraft.hugeexplosion',
                default: '巨大爆発'
            }),
            particleName: 'hugeexplosion',
            particleName1165: ''
        },
        {
            name: formatMessage({
                id: 'minecraft.ironcrack',
                default: '鉄のひび'
            }),
            particleName: 'ironcrack',
            particleName1165: ''
        },
        {
            name: formatMessage({
                id: 'minecraft.instantSpell',
                default: 'インスタント'
            }),
            particleName: 'instantSpell',
            particleName1165: 'minecraft:instant_effect'
        },
        {
            name: formatMessage({
                id: 'minecraft.largeexplosion',
                default: '大爆発'
            }),
            particleName: 'largeexplosion',
            particleName1165: ''
        },
        {
            name: formatMessage({
                id: 'minecraft.largesmoke',
                default: '大きな煙'
            }),
            particleName: 'largesmoke',
            particleName1165: 'minecraft:large_smoke'
        },
        {
            name: formatMessage({
                id: 'minecraft.lava',
                default: '溶岩'
            }),
            particleName: 'lava',
            particleName1165: 'minecraft:lava'
        },
        {
            name: formatMessage({
                id: 'minecraft.magicCrit',
                default: 'エンチャント武器のクリティカルの閃光'
            }),
            particleName: 'magicCrit',
            particleName1165: ''
        },
        {
            name: formatMessage({
                id: 'minecraft.mobSpell',
                default: 'mobSpell'
            }),
            particleName: 'mobSpell',
            particleName1165: ''
        },
        {
            name: formatMessage({
                id: 'minecraft.mobappearance',
                default: 'mobappearance'
            }),
            particleName: 'mobappearance',
            particleName1165: ''
        },
        {
            name: formatMessage({
                id: 'minecraft.note',
                default: '音符'
            }),
            particleName: 'note',
            particleName1165: 'minecraft:note'
        },
        {
            name: formatMessage({
                id: 'minecraft.portal',
                default: 'ポータル'
            }),
            particleName: 'portal',
            particleName1165: 'minecraft:portal'
        },
        {
            name: formatMessage({
                id: 'minecraft.reddust',
                default: 'レッドストーンの煙'
            }),
            particleName: 'reddust',
            particleName1165: 'minecraft:dust'
        },
        {
            name: formatMessage({
                id: 'minecraft.slime',
                default: 'スライムのしぶき'
            }),
            particleName: 'slime',
            particleName1165: 'minecraft:item_slime'
        },
        {
            name: formatMessage({
                id: 'minecraft.smoke',
                default: '煙'
            }),
            particleName: 'smoke',
            particleName1165: 'minecraft:smoke'
        },
        {
            name: formatMessage({
                id: 'minecraft.snowballpoof',
                default: '雪玉の破壊'
            }),
            particleName: 'snowballpoof',
            particleName1165: 'minecraft:item_snowball'
        },
        {
            name: formatMessage({
                id: 'minecraft.snowshovel',
                default: '雪かき'
            }),
            particleName: 'snowshovel',
            particleName1165: ''
        },
        {
            name: formatMessage({
                id: 'minecraft.spell',
                default: 'spell'
            }),
            particleName: 'spell',
            particleName1165: ''
        },
        {
            name: formatMessage({
                id: 'minecraft.spit',
                default: 'つば'
            }),
            particleName: 'spit',
            particleName1165: 'minecraft:spit'
        },
        {
            name: formatMessage({
                id: 'minecraft.splash',
                default: '水しぶき'
            }),
            particleName: 'splash',
            particleName1165: 'minecraft:splash'
        },
        {
            name: formatMessage({
                id: 'minecraft.suspended',
                default: 'suspended'
            }),
            particleName: 'suspended',
            particleName1165: ''
        },
        {
            name: formatMessage({
                id: 'minecraft.sweepAttack',
                default: 'なぎ払い攻撃'
            }),
            particleName: 'sweepAttack',
            particleName1165: 'minecraft:sweep_attack'
        },
        {
            name: formatMessage({
                id: 'minecraft.take',
                default: 'take'
            }),
            particleName: 'take',
            particleName1165: ''
        },
        {
            name: formatMessage({
                id: 'minecraft.totem',
                default: '不死のトーテム'
            }),
            particleName: 'totem',
            particleName1165: 'minecraft:totem_of_undying'
        },
        {
            name: formatMessage({
                id: 'minecraft.townaura',
                default: '菌糸の胞子'
            }),
            particleName: 'townaura',
            particleName1165: 'minecraft:mycelium'
        },
        {
            name: formatMessage({
                id: 'minecraft.wake',
                default: '釣り'
            }),
            particleName: 'wake',
            particleName1165: 'minecraft:fishing'
        },
        {
            name: formatMessage({
                id: 'minecraft.witchMagic',
                default: 'ウィッチの魔法'
            }),
            particleName: 'witchMagic',
            particleName1165: 'minecraft:witch'
        }
    ];
};