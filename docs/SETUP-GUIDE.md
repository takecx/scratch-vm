# Remote Controller Mod - セットアップガイド

このガイドでは、Remote Controller Modの環境構築から初回起動まで、初心者にも分かりやすく説明します。

## 目次

1. [システム要件](#システム要件)
2. [開発環境セットアップ](#開発環境セットアップ)
3. [プロジェクトのビルド](#プロジェクトのビルド)
4. [Modの実行とテスト](#modの実行とテスト)
5. [Scratch環境のセットアップ](#scratch環境のセットアップ)
6. [接続テスト](#接続テスト)
7. [バージョン別セットアップ](#バージョン別セットアップ)

## システム要件

### 最小要件

- **OS**: Windows 10/11, macOS 10.15+, Ubuntu 18.04+
- **Java**: OpenJDK 17 以上
- **メモリ**: 4GB RAM（8GB推奨）
- **ストレージ**: 2GB以上の空き容量

### 推奨要件

- **OS**: Windows 11, macOS 12+, Ubuntu 20.04+
- **Java**: OpenJDK 17
- **メモリ**: 8GB RAM
- **ストレージ**: 5GB以上の空き容量
- **GPU**: 統合グラフィックス以上

## 開発環境セットアップ

### 1. Java 17のインストール

#### Windows
1. [Adoptium](https://adoptium.net/)からOpenJDK 17をダウンロード
2. インストーラーを実行し、デフォルト設定でインストール
3. 環境変数の設定を確認：
   ```cmd
   java -version
   ```

#### macOS
```bash
# Homebrewを使用
brew install openjdk@17

# 環境変数の設定
echo 'export PATH="/opt/homebrew/opt/openjdk@17/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

#### Linux (Ubuntu)
```bash
sudo apt update
sudo apt install openjdk-17-jdk

# バージョン確認
java -version
```

### 2. Git のインストール

#### Windows
- [Git for Windows](https://git-scm.com/download/win)をダウンロードしてインストール

#### macOS/Linux
```bash
# macOS
brew install git

# Ubuntu
sudo apt install git
```

### 3. IDEのセットアップ（推奨）

#### IntelliJ IDEA
1. [IntelliJ IDEA Community Edition](https://www.jetbrains.com/idea/download/)をダウンロード
2. インストール後、以下のプラグインを有効化：
   - Minecraft Development
   - Gradle

#### Visual Studio Code
1. [VS Code](https://code.visualstudio.com/)をダウンロード
2. 以下の拡張機能をインストール：
   - Extension Pack for Java
   - Gradle for Java

## プロジェクトのビルド

### 1. リポジトリのクローン

```bash
# メインリポジトリ
git clone https://github.com/your-username/RemoteControllerMod.git
cd RemoteControllerMod

# ブランチの確認
git branch -a

# 使用したいMinecraftバージョンのブランチに切り替え
git checkout 1-20-1  # Minecraft 1.20.1の場合
```

### 2. 初回セットアップ

#### Windows
```cmd
# Gradleラッパーの実行権限確認
gradlew.bat --version

# IDEファイルの生成
gradlew.bat genIntellijRuns
```

#### macOS/Linux
```bash
# 実行権限の付与
chmod +x gradlew

# IDEファイルの生成
./gradlew genIntellijRuns
```

### 3. 依存関係の解決とビルド

```bash
# 依存関係のダウンロード
./gradlew build

# 初回は時間がかかります（15-30分）
# Minecraft 1.20.1のソースコードとForgeのダウンロードが行われます
```

### 4. IDEでのプロジェクト読み込み

#### IntelliJ IDEA
1. `File` → `Open` → プロジェクトフォルダを選択
2. `Import Gradle project`を選択
3. デフォルト設定でインポート
4. Gradle sync完了まで待機

#### VS Code
1. プロジェクトフォルダを開く
2. Java拡張機能がプロジェクトを認識するまで待機
3. `Ctrl+Shift+P` → `Java: Reload Projects`

## Modの実行とテスト

### 1. 開発環境での実行

#### コマンドライン
```bash
# クライアント（通常のMinecraft）を起動
./gradlew runClient

# サーバーを起動
./gradlew runServer
```

#### IntelliJ IDEA
1. Gradle ウィンドウを開く
2. `Tasks` → `forgegradle runs` → `runClient`をダブルクリック
3. または`Tasks` → `forgegradle runs` → `runServer`

### 2. Modの確認

1. Minecraftが起動したらModメニューを確認
2. `Remote Controller Mod`が表示されていることを確認
3. ワールドを作成またはサーバーに接続

### 3. 接続の確認

サーバー起動時にコンソールに以下のメッセージが表示されることを確認：

```
[INFO] RemoteControllerMod is starting up!
[INFO] HELLO from server starting
[INFO] WebSocket server started on ws://localhost:14711
[INFO] Socket server started on localhost:14712
```

## Scratch環境のセットアップ

### 1. Node.js のインストール

#### Windows
1. [Node.js](https://nodejs.org/)からLTS版をダウンロード
2. インストーラーを実行

#### macOS/Linux
```bash
# macOS
brew install node

# Ubuntu
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2. Scratch リポジトリのセットアップ

```bash
# scratch-vmのクローン
git clone https://github.com/your-username/scratch-vm.git
cd scratch-vm

# 対応するブランチに切り替え
git checkout 1-20-1  # Minecraft 1.20.1対応ブランチ

# 依存関係のインストール
npm install

# scratch-guiのクローン
cd ..
git clone https://github.com/your-username/scratch-gui.git
cd scratch-gui

# 対応するブランチに切り替え
git checkout 1-20-1  # または develop

# 依存関係のインストール
npm install

# scratch-vmをリンク
npm link ../scratch-vm
```

### 3. Scratch の起動

```bash
# 開発サーバーの起動
npm start

# ブラウザで http://localhost:8601 にアクセス
```

### 4. Minecraft拡張機能の確認

1. Scratchが起動したら左下の拡張機能アイコンをクリック
2. 「Minecraft」拡張機能が表示されていることを確認
3. 拡張機能を選択してブロックパレットに追加

## 接続テスト

### 1. Minecraft 側の準備

1. Minecraft開発環境でワールドを作成
2. サーバーまたはシングルプレイで起動
3. コンソールでWebSocketサーバーの起動を確認

### 2. Scratch からの接続テスト

1. Scratchで新しいプロジェクトを作成
2. Minecraft拡張機能を追加
3. 以下のブロックでテスト：

```
プレイヤー位置を取得
↓
変数「位置」に格納
↓
「プレイヤー位置: [位置]」と言う
```

### 3. 基本的な動作テスト

```
# 1. 位置確認
プレイヤー位置を取得

# 2. チャットテスト  
「Hello from Scratch!」をチャットに送信

# 3. ブロック配置テスト
座標 (プレイヤーX + 1, プレイヤーY, プレイヤーZ) に minecraft:diamond_block を配置

# 4. 天候変更テスト
天候を 晴れ に変更
```

## バージョン別セットアップ

### Minecraft 1.20.1（最新）
- ブランチ: `1-20-1`
- Java: 17
- Forge: 47.4.0
- 特記事項: 最新の機能をすべて利用可能

### Minecraft 1.16.5
- ブランチ: `master`（1.16.5ベース）
- Java: 8以上
- Forge: 36.1.2
- 特記事項: 安定版、多くのModとの互換性あり

### Minecraft 1.12.2
- ブランチ: `1-12-2`
- Java: 8
- Forge: 14.23.5.2855
- 特記事項: レガシーサポート、一部機能制限あり

### バージョン切り替え方法

```bash
# RemoteControllerMod
cd RemoteControllerMod
git checkout 1-20-1  # または master, 1-12-2

# scratch-vm
cd ../scratch-vm  
git checkout 1-20-1  # 対応するブランチ

# scratch-gui
cd ../scratch-gui
git checkout develop  # または対応するブランチ

# 再ビルド
cd ../RemoteControllerMod
./gradlew clean build

cd ../scratch-gui
npm run deploy -- -e 1-20-1  # バージョン指定ビルド
```

## トラブルシューティング（基本編）

### ビルドエラー

**問題**: `Could not resolve all files for configuration`
```bash
# 解決方法
./gradlew clean
./gradlew build --refresh-dependencies
```

**問題**: Java バージョンエラー
```bash
# Javaバージョンの確認
java -version
./gradlew -version

# JAVA_HOMEの設定（Windows）
set JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.x
```

### 接続エラー

**問題**: WebSocket接続失敗
1. Minecraftサーバーが起動していることを確認
2. ポート14711が使用可能か確認
3. ファイアウォール設定を確認

**問題**: Scratchでブロックが表示されない
1. ブランチが一致していることを確認
2. `npm link`が正しく実行されていることを確認
3. ブラウザキャッシュをクリア

### パフォーマンスの問題

**問題**: ビルドが遅い
```bash
# Gradleデーモンの有効化
echo "org.gradle.daemon=true" >> gradle.properties
echo "org.gradle.parallel=true" >> gradle.properties
```

**問題**: Minecraftの動作が重い
1. メモリ割り当ての調整：
   ```bash
   # gradle.propertiesで調整
   org.gradle.jvmargs=-Xmx4G -XX:MaxMetaspaceSize=1G
   ```

## 次のステップ

1. [API Reference](API-REFERENCE.md)でコマンドの詳細を確認
2. [User Guide](USER-GUIDE.md)で実際の使用方法を学習
3. [Troubleshooting Guide](TROUBLESHOOTING.md)で問題解決方法を確認
4. [Developer Guide](DEVELOPER-GUIDE.md)でカスタマイズ方法を学習

## サポート

問題が解決しない場合は：

1. [GitHub Issues](https://github.com/your-username/RemoteControllerMod/issues)で既知の問題を確認
2. 新しいIssueを作成して詳細を報告
3. 以下の情報を含めてください：
   - OS とバージョン
   - Java バージョン
   - Minecraft/Forgeバージョン
   - エラーメッセージの全文
   - 実行したコマンド