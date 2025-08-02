# CLAUDE.md

このファイルは、このリポジトリでコードを扱う際にClaude Code (claude.ai/code) へのガイダンスを提供します。

## プロジェクト概要

Remote Controller Modは、WebSocketサーバーとソケットサーバーを通じてMinecraftのリモート制御を可能にするMinecraft 1.20.1用のMinecraft Forgeモッドです。このモッドにより、外部アプリケーション（Scratch 3.0など）がコマンドを送信してブロックの配置、エンティティの生成、天候の変更、プレイヤーのテレポートなどを行うことでMinecraftと連携できます。

## 開発コマンド

### ビルドと開発
- **モッドのビルド**: `gradlew build`
- **クリーンビルド**: `gradlew clean build`
- **Minecraftクライアントの実行**: `gradlew runClient`
- **Minecraftサーバーの実行**: `gradlew runServer`
- **データ生成**: `gradlew runData`
- **ソース生成**: `gradlew genEclipseRuns` または `gradlew genIntellijRuns`

### バージョン情報
- Minecraftバージョン: 1.20.1
- Forgeバージョン: 47.4.0
- Javaバージョン: 17
- モッドバージョン: 1.1.0+mc1.20.1

## アーキテクチャ

### コアコンポーネント

#### メインModクラス
- **Remotecontrollermod.java** (`src/main/java/com/github/takecx/remotecontrollermod/`): メインのModエントリーポイント:
  - サーバー開始時にポート14711でWebSocketサーバーを開始
  - ポート14712でSocketサーバーを開始
  - ネットワークハンドラーとイベントリスナーを登録

#### サーバーコンポーネント
- **WSServer.java**: 外部クライアントからのコマンドを受信するWebSocketサーバーの実装
- **SocketServer.java**: 代替接続方法用のTCPソケットサーバー
- **APIHandler.java**: すべてのMinecraft API呼び出しを処理するコアコマンドプロセッサ

#### 通信プロトコル
モッドは外部クライアントが以下のような文字列コマンドを送信するコマンドベースのプロトコルを使用:
- `player.getPos()` - プレイヤー位置の取得
- `world.setBlock(x,y,z,minecraft:block_type)` - ブロックの配置
- `world.spawnEntity(x,y,z,minecraft:entity_type)` - エンティティの生成
- `chat.post(message)` - チャットメッセージの送信
- `world.changeWeather(clear|rain|thunder)` - 天候の変更
- `world.runCommand(command)` - Minecraftコマンドの直接実行

### ネットワークパッケージ構造
- **NetworkHandler.java**: モッドネットワーク登録の処理
- **CommandPacket.java**: ネットワークパケット定義
- **SocketServerManager.java**: ソケットサーバーのライフサイクル管理

### 外部依存関係
モッドには`src/main/java/org/java_websocket/`にバンドルされたWebSocketライブラリと`src/main/java/org/slf4j/`にSLF4Jログが含まれています。

## 主要機能
- リモートブロック配置（単一および複数ブロック）
- エンティティ生成
- プレイヤーテレポート
- 天候制御
- ゲームモードと難易度変更
- パーティクル生成
- チャットメッセージ
- エンチャント付与
- 昼夜・時間制御
- Minecraftコマンドの直接実行

## 開発ノート
- モッドはMinecraft Forge 1.20.1をターゲット
- 難読化解除に公式マッピングを使用
- `utils/`ディレクトリにリソースID抽出用ユーティリティを含む
- WebSocket（ポート14711）とTCPソケット（ポート14712）の両方の接続をサポート
- カスタムScratch 3.0拡張機能との連携を想定して設計

## バージョン管理方針
このModは複数のMinecraftバージョンをサポートしています:
- **1.20.1** (メインブランチ)
- **1.16.5** 
- **1.12.2**

各Minecraftバージョンごとに実装が異なる場合は、専用のブランチを作成して対応します。新しいMinecraftバージョンへの対応や既存バージョンでの機能追加・修正を行う際は、対応するブランチで作業を行ってください。バージョン固有の実装の違いにより、ブランチ間でのマージは慎重に行う必要があります。

## Scratchとの連携

このModは、カスタマイズされたScratch 3.0環境と連携して動作します：

### 関連リポジトリ
- **scratch-vm** (`C:\Users\takeshi\source\repos\scratch-vm`): Scratch 3.0の仮想マシン
- **scratch-gui** (`C:\Users\takeshi\source\repos\scratch-gui`): Scratch 3.0のユーザーインターフェース

### Scratchのバージョン管理
Scratchリポジトリも、RemoteControllerModと同様にMinecraftバージョンごとにブランチ管理を行っています：

#### scratch-vm
- **1-20-1** (現在のブランチ): Minecraft 1.20.1対応
- **1-16-5**: Minecraft 1.16.5対応  
- **1-12-2**: Minecraft 1.12.2対応
- **develop**: 開発ブランチ

#### scratch-gui  
- **1-16-5**: Minecraft 1.16.5対応
- **1-12-2**: Minecraft 1.12.2対応
- **develop**: 開発ブランチ（メイン）

**重要**: 新機能開発や修正を行う際は、対象となるMinecraftバージョンに対応するブランチで作業してください。RemoteControllerModとScratch拡張機能の両方で、同じMinecraftバージョンのブランチを使用することで一貫性を保つことができます。

### Minecraft拡張機能の実装
- **拡張機能の場所**: `scratch-vm/src/extensions/scratch3_minecraft/`
- **WebSocket通信**: `minecraft_utils/utils.js`でWebSocket接続を管理（ポート14711使用）
- **ブロック定義**: `index.js`でScratchブロックとMinecraftコマンドのマッピングを定義
- **リソース情報**: `block_info.js`, `entity_info.js`, `particle_info.js`でMinecraftのアイテム、エンティティ、パーティクル情報を管理

### 主要なScratchブロック機能
- チャットメッセージ送信
- ブロック配置（単一・複数）
- エンティティ生成
- プレイヤーテレポート
- 天候変更
- ゲームモード・難易度変更
- パーティクル生成
- エンチャント付与
- 時間制御
- 接続ホスト変更
- 座標取得（絶対座標・相対座標サポート）

### デプロイメント
Scratch GUIは特定のMinecraftバージョン用にデプロイできます：
```bash
# Minecraft 1.12.2用
npm run deploy -- -e 1-12-2
# Minecraft 1.16.5用  
npm run deploy -- -e 1-16-5
```

### 通信プロトコル
- **接続方式**: WebSocket（ポート14711）
- **コマンド形式**: 文字列ベース（例：`world.setBlock(x,y,z,minecraft:block_type)`）
- **座標系**: 絶対座標と相対座標（`~`プレフィックス）をサポート
- **コマンド間隔**: 200ms間隔でのコマンド送信制御