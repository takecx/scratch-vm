# Remote Controller Mod - API リファレンス

このドキュメントでは、Remote Controller Modで利用可能なすべてのAPIコマンドの詳細な仕様を説明します。

## 目次

1. [基本的な使用方法](#基本的な使用方法)
2. [プレイヤー関連API](#プレイヤー関連api)
3. [ワールド関連API](#ワールド関連api)
4. [エンティティ関連API](#エンティティ関連api)
5. [チャット関連API](#チャット関連api)
6. [エンチャント関連API](#エンチャント関連api)
7. [パラメータ仕様](#パラメータ仕様)
8. [エラーハンドリング](#エラーハンドリング)

## 基本的な使用方法

すべてのAPIコマンドは以下の形式で実行します：

```
コマンド名(引数1,引数2,...)
```

### 接続方法

- **WebSocket**: `ws://localhost:14711`
- **TCP Socket**: `localhost:14712`

### 座標系について

- 絶対座標: `10,64,-5` のように直接数値を指定
- 相対座標: `~1,~,~-2` のように`~`プレフィックスを使用（Scratch拡張機能でサポート）

## プレイヤー関連API

### player.getPos()

プレイヤーの現在位置を取得します。

**構文:**
```
player.getPos()
```

**パラメータ:** なし

**戻り値:** `x,y,z` 形式の座標文字列

**例:**
```
player.getPos()
→ "100.5,64.0,-200.3"
```

## ワールド関連API

### world.getPlayerIds()

ワールド内のすべてのプレイヤーIDのリストを取得します。

**構文:**
```
world.getPlayerIds()
```

**パラメータ:** なし

**戻り値:** `|`区切りのプレイヤーIDリスト

**例:**
```
world.getPlayerIds()
→ "123|456|789"
```

### world.getBlockWithData(x,y,z)

指定座標のブロック情報を取得します。

**構文:**
```
world.getBlockWithData(x,y,z)
```

**パラメータ:**
- `x` (int): X座標
- `y` (int): Y座標  
- `z` (int): Z座標

**戻り値:** ブロックの内部名

**例:**
```
world.getBlockWithData(100,64,-200)
→ "block.minecraft.stone"
```

### world.setBlock(x,y,z,block_type)

指定座標に単一のブロックを配置します。

**構文:**
```
world.setBlock(x,y,z,block_type)
```

**パラメータ:**
- `x` (int): X座標
- `y` (int): Y座標
- `z` (int): Z座標
- `block_type` (string): ブロックタイプ（例: `minecraft:stone`）

**戻り値:** なし

**例:**
```
world.setBlock(100,64,-200,minecraft:diamond_block)
```

### world.setBlocks(x1,y1,z1,x2,y2,z2,block_type)

指定した範囲にブロックを一括配置します。

**構文:**
```
world.setBlocks(x1,y1,z1,x2,y2,z2,block_type)
```

**パラメータ:**
- `x1,y1,z1` (int): 開始座標
- `x2,y2,z2` (int): 終了座標
- `block_type` (string): ブロックタイプ

**戻り値:** なし

**例:**
```
world.setBlocks(0,60,0,10,65,10,minecraft:glass)
```

### world.spawnEntity(x,y,z,entity_type)

指定座標にエンティティを生成します。

**構文:**
```
world.spawnEntity(x,y,z,entity_type)
```

**パラメータ:**
- `x` (int): X座標
- `y` (int): Y座標
- `z` (int): Z座標
- `entity_type` (string): エンティティタイプ（例: `minecraft:cow`）

**戻り値:** なし

**例:**
```
world.spawnEntity(100,64,-200,minecraft:zombie)
```

### world.changeWeather(weather_type)

天候を変更します。

**構文:**
```
world.changeWeather(weather_type)
```

**パラメータ:**
- `weather_type` (string): 天候タイプ
  - `clear`: 晴れ
  - `rain`: 雨
  - `thunder`: 雷雨

**戻り値:** なし

**例:**
```
world.changeWeather(rain)
```

### world.changeGameMode(mode_id)

ゲームモードを変更します。

**構文:**
```
world.changeGameMode(mode_id)
```

**パラメータ:**
- `mode_id` (int): ゲームモードID
  - `0`: サバイバル
  - `1`: クリエイティブ
  - `2`: アドベンチャー
  - `3`: スペクテイター

**戻り値:** なし

**例:**
```
world.changeGameMode(1)
```

### world.changeDifficulty(difficulty_id)

難易度を変更します。

**構文:**
```
world.changeDifficulty(difficulty_id)
```

**パラメータ:**
- `difficulty_id` (int): 難易度ID
  - `0`: ピースフル
  - `1`: イージー
  - `2`: ノーマル
  - `3`: ハード

**戻り値:** なし

**例:**
```
world.changeDifficulty(2)
```

### world.spawnParticle(particle_type,x,y,z,dx,dy,dz,speed,count)

パーティクルエフェクトを生成します。

**構文:**
```
world.spawnParticle(particle_type,x,y,z,dx,dy,dz,speed,count)
```

**パラメータ:**
- `particle_type` (string): パーティクルタイプ（例: `minecraft:explosion`）
- `x,y,z` (int): 生成座標
- `dx,dy,dz` (int): 拡散範囲
- `speed` (float): パーティクル速度
- `count` (int): パーティクル数

**戻り値:** なし

**例:**
```
world.spawnParticle(minecraft:heart,100,64,-200,1,1,1,0.1,10)
```

### world.setDayTime(time)

ワールドの時刻を設定します。

**構文:**
```
world.setDayTime(time)
```

**パラメータ:**
- `time` (long): 時刻値
  - `0`: 日の出
  - `6000`: 正午
  - `12000`: 日没
  - `18000`: 深夜

**戻り値:** なし

**例:**
```
world.setDayTime(6000)
```

### world.runCommand(command)

Minecraftコマンドを直接実行します。

**構文:**
```
world.runCommand(command)
```

**パラメータ:**
- `command` (string): 実行するMinecraftコマンド（`/`なしで指定）

**戻り値:** なし

**例:**
```
world.runCommand(say Hello World!)
world.runCommand(give @p minecraft:diamond 64)
```

## エンティティ関連API

### entity.getPos()

エンティティの位置を取得します。

**構文:**
```
entity.getPos()
```

**パラメータ:** なし

**戻り値:** `x,y,z` 形式の座標文字列

### entity.setPos(x,y,z)

エンティティ（プレイヤー）の位置を設定します。

**構文:**
```
entity.setPos(x,y,z)
```

**パラメータ:**
- `x` (double): X座標
- `y` (double): Y座標
- `z` (double): Z座標

**戻り値:** なし

**例:**
```
entity.setPos(100.5,64,200.3)
```

## チャット関連API

### chat.post(message)

すべてのプレイヤーにチャットメッセージを送信します。

**構文:**
```
chat.post(message)
```

**パラメータ:**
- `message` (string): 送信するメッセージ

**戻り値:** なし

**例:**
```
chat.post(Hello, Minecraft World!)
```

## エンチャント関連API

### giveEnchant(enchantment,level)

プレイヤーの持っているアイテムにエンチャントを付与します。

**構文:**
```
giveEnchant(enchantment,level)
```

**パラメータ:**
- `enchantment` (string): エンチャント名（例: `minecraft:sharpness`）
- `level` (int): エンチャントレベル（1-5）

**戻り値:** なし

**例:**
```
giveEnchant(minecraft:sharpness,5)
giveEnchant(minecraft:protection,4)
```

## パラメータ仕様

### ブロックタイプ

ブロックタイプは `namespace:block_name` 形式で指定します：

**一般的なブロック:**
```
minecraft:stone          - 石
minecraft:grass_block    - 草ブロック
minecraft:dirt           - 土
minecraft:cobblestone    - 丸石
minecraft:oak_planks     - オークの木材
minecraft:glass          - ガラス
minecraft:diamond_block  - ダイヤモンドブロック
minecraft:gold_block     - 金ブロック
minecraft:iron_block     - 鉄ブロック
minecraft:tnt            - TNT
minecraft:water          - 水
minecraft:lava           - 溶岩
```

### エンティティタイプ

エンティティタイプは `namespace:entity_name` 形式で指定します：

**動物:**
```
minecraft:cow            - 牛
minecraft:pig            - 豚
minecraft:sheep          - 羊
minecraft:chicken        - 鶏
minecraft:horse          - 馬
```

**モンスター:**
```
minecraft:zombie         - ゾンビ
minecraft:skeleton       - スケルトン
minecraft:creeper        - クリーパー
minecraft:spider         - スパイダー
minecraft:enderman       - エンダーマン
```

**その他:**
```
minecraft:villager       - 村人
minecraft:item_frame     - 額縁
minecraft:armor_stand    - 防具立て
```

### パーティクルタイプ

**エフェクト系:**
```
minecraft:explosion           - 爆発
minecraft:heart              - ハート
minecraft:flame              - 炎
minecraft:smoke              - 煙
minecraft:bubble             - 泡
minecraft:portal             - ポータル
minecraft:enchant            - エンチャント
minecraft:crit               - クリティカル
```

### エンチャントタイプ

**武器系:**
```
minecraft:sharpness          - 鋭さ
minecraft:smite              - アンデッド特効
minecraft:bane_of_arthropods - 虫特効
minecraft:knockback          - ノックバック
minecraft:fire_aspect        - 火属性
minecraft:looting            - ドロップ増加
```

**防具系:**
```
minecraft:protection         - ダメージ軽減
minecraft:fire_protection    - 火炎耐性
minecraft:blast_protection   - 爆発耐性
minecraft:projectile_protection - 飛び道具耐性
minecraft:feather_falling    - 落下耐性
```

**道具系:**
```
minecraft:efficiency         - 効率
minecraft:unbreaking         - 耐久力
minecraft:fortune            - 幸運
minecraft:silk_touch         - シルクタッチ
```

## エラーハンドリング

### 一般的なエラー

1. **無効な座標**
   - 座標が数値でない場合
   - ワールド境界外の座標

2. **無効なリソース名**
   - 存在しないブロック/エンティティ/エンチャント名
   - 名前空間の形式が正しくない

3. **範囲エラー**
   - エンチャントレベルが範囲外
   - 難易度/ゲームモードIDが無効

4. **権限エラー**
   - サーバーサイドでのみ実行可能なコマンド
   - プレイヤーが存在しない

### デバッグのヒント

1. **接続確認**
   ```
   player.getPos()
   ```
   最初にこのコマンドを実行して接続を確認

2. **座標確認**
   ```
   world.getBlockWithData(x,y,z)
   ```
   ブロック配置前に座標を確認

3. **ログ確認**
   - Minecraftのログファイルでエラーメッセージを確認
   - コンソール出力でAPIHandlerのログを確認

## 使用例

### 基本的な建築

```
# 土台を作成
world.setBlocks(0,60,0,10,60,10,minecraft:stone)

# 壁を作成
world.setBlocks(0,61,0,0,65,10,minecraft:cobblestone)
world.setBlocks(10,61,0,10,65,10,minecraft:cobblestone)
world.setBlocks(0,61,0,10,65,0,minecraft:cobblestone)
world.setBlocks(0,61,10,10,65,10,minecraft:cobblestone)

# 屋根を作成
world.setBlocks(0,66,0,10,66,10,minecraft:oak_planks)
```

### 環境設定

```
# 昼に設定
world.setDayTime(6000)

# 晴れにする
world.changeWeather(clear)

# クリエイティブモードに変更
world.changeGameMode(1)

# 難易度をピースフルに
world.changeDifficulty(0)
```

### エフェクト演出

```
# 爆発エフェクト
world.spawnParticle(minecraft:explosion,100,64,-200,2,2,2,0.5,20)

# ハートエフェクト
world.spawnParticle(minecraft:heart,100,65,-200,1,1,1,0.1,10)

# チャットでアナウンス
chat.post(イベント開始！)
```

## 注意事項

1. **パフォーマンス**
   - 大量のブロック配置は`world.setBlocks()`を使用
   - コマンド間隔は200ms以上推奨

2. **座標系**
   - Y座標の範囲はワールドタイプにより異なる
   - 負の座標も使用可能

3. **権限**
   - サーバーでのみ動作するコマンドあり
   - チートコマンドが有効である必要がある場合あり

4. **互換性**
   - Minecraftバージョンによりブロック/エンティティ名が異なる場合あり
   - 新しいブロック/エンティティは古いバージョンで使用不可