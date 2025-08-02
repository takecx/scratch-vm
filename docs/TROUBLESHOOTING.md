# Remote Controller Mod - トラブルシューティングガイド

このガイドでは、Remote Controller Modの使用中に発生する可能性のある一般的な問題と、その解決方法を詳しく説明します。

## 目次

1. [インストール・ビルド関連の問題](#インストール・ビルド関連の問題)
2. [接続関連の問題](#接続関連の問題)
3. [Modの動作問題](#modの動作問題)
4. [Scratch統合の問題](#scratch統合の問題)
5. [パフォーマンス問題](#パフォーマンス問題)
6. [バージョン互換性の問題](#バージョン互換性の問題)
7. [ログの確認方法](#ログの確認方法)
8. [よくある質問（FAQ）](#よくある質問faq)

## インストール・ビルド関連の問題

### Java関連のエラー

#### 問題: `Error: Could not find or load main class`

**原因**: Java環境が正しく設定されていない

**解決方法**:
```bash
# Javaバージョンの確認
java -version
javac -version

# JAVA_HOMEの設定確認（Windows）
echo %JAVA_HOME%

# JAVA_HOMEの設定確認（macOS/Linux）
echo $JAVA_HOME
```

**Windows での JAVA_HOME 設定**:
1. システムのプロパティ → 環境変数
2. `JAVA_HOME` = `C:\Program Files\Eclipse Adoptium\jdk-17.0.x`
3. `PATH` に `%JAVA_HOME%\bin` を追加

#### 問題: `Unsupported class file major version`

**原因**: Javaバージョンの不一致

**解決方法**:
```bash
# プロジェクトの要求Javaバージョン確認
cat build.gradle | grep languageVersion

# 正しいJavaバージョンのインストール
# Minecraft 1.20.1 = Java 17
# Minecraft 1.16.5 = Java 8以上  
# Minecraft 1.12.2 = Java 8
```

### Gradle関連のエラー

#### 問題: `Could not resolve all files for configuration`

**原因**: 依存関係の解決に失敗

**解決方法**:
```bash
# キャッシュのクリア
./gradlew clean
./gradlew --refresh-dependencies

# オフライン状態の無効化
./gradlew build --no-daemon --refresh-dependencies

# Gradleバージョンの確認
./gradlew --version
```

#### 問題: `Build failed with an exception`

**原因**: Gradle設定またはソースコードの問題

**解決方法**:
```bash
# 詳細なエラー情報の表示
./gradlew build --stacktrace --info

# キャッシュのクリア
./gradlew clean
rm -rf .gradle/

# 再ビルド
./gradlew build
```

### ForgeGradle関連のエラー

#### 問題: `Failed to download Minecraft`

**原因**: ネットワーク問題またはプロキシ設定

**解決方法**:
```bash
# プロキシ設定（必要な場合）
./gradlew -Dhttp.proxyHost=proxy.example.com -Dhttp.proxyPort=8080 build

# タイムアウト時間の延長
echo "systemProp.http.socketTimeout=60000" >> gradle.properties
echo "systemProp.http.connectionTimeout=60000" >> gradle.properties
```

#### 問題: `Mapping data not found`

**原因**: マッピングファイルのダウンロード失敗

**解決方法**:
```bash
# マッピングキャッシュのクリア
rm -rf ~/.gradle/caches/minecraft/

# 再ダウンロード
./gradlew clean setupDecompWorkspace
```

## 接続関連の問題

### WebSocket接続の問題

#### 問題: `Connection refused on ws://localhost:14711`

**原因**: WebSocketサーバーが起動していない

**診断方法**:
```bash
# ポートの使用状況確認（Windows）
netstat -an | findstr 14711

# ポートの使用状況確認（macOS/Linux）
netstat -an | grep 14711
lsof -i :14711
```

**解決方法**:
1. Minecraftサーバー/ワールドが起動していることを確認
2. Modが正しくロードされていることを確認
3. コンソールログでサーバー起動メッセージを確認

#### 問題: `WebSocket connection timeout`

**原因**: ファイアウォールまたはネットワーク設定

**解決方法**:
```bash
# ファイアウォール設定の確認（Windows）
# Windows Defender ファイアウォール → 受信の規則
# ポート14711, 14712の許可を追加

# ファイアウォール設定の確認（macOS）
sudo pfctl -sr | grep 14711

# ファイアウォール設定の確認（Linux）
sudo ufw status
sudo ufw allow 14711
sudo ufw allow 14712
```

### Socket接続の問題

#### 問題: `Socket connection error on port 14712`

**原因**: TCPソケットサーバーの問題

**解決方法**:
1. ポート競合の確認:
   ```bash
   # 他のプロセスがポートを使用していないか確認
   netstat -tulpn | grep 14712
   ```

2. Modのログ確認:
   ```
   [INFO] Socket server started on localhost:14712
   ```

3. 手動接続テスト:
   ```bash
   # telnetでの接続テスト
   telnet localhost 14712
   ```

### リモート接続の問題

#### 問題: `Cannot connect from external network`

**原因**: ローカルホスト制限

**解決方法**:
1. ホスト設定の変更（APIHandler.java）:
   ```java
   // "localhost" を "0.0.0.0" に変更
   String host = "0.0.0.0";
   ```

2. セキュリティ設定の確認
3. ポートフォワーディングの設定

## Modの動作問題

### Modロードの問題

#### 問題: `Mod not found in mod list`

**原因**: Modが正しくインストールされていない

**解決方法**:
1. Modファイルの場所確認:
   ```bash
   # 開発環境の場合
   ./gradlew runClient
   
   # 本番環境の場合
   # modsフォルダにjarファイルを配置
   ```

2. Forgeバージョンの互換性確認
3. mods.tomlファイルの設定確認

#### 問題: `ClassNotFoundException`

**原因**: 依存関係の問題

**解決方法**:
```bash
# 依存関係の確認
./gradlew dependencies

# クリーンビルド
./gradlew clean build

# 開発環境の再セットアップ
./gradlew genIntellijRuns
```

### API実行エラー

#### 問題: `Command not found: world.setBlock`

**原因**: コマンド構文の間違い

**解決方法**:
```bash
# 正しい構文の使用
world.setBlock(100,64,-200,minecraft:stone)

# 間違った例
world.setBlock 100 64 -200 minecraft:stone  # スペース区切り
world.setBlock(100,64,-200,stone)           # 名前空間なし
```

#### 問題: `Invalid coordinates`

**原因**: 座標の範囲エラー

**解決方法**:
1. ワールド境界の確認
2. Y座標の有効範囲確認（通常 -64 〜 320）
3. 数値形式の確認（整数必須の場合）

#### 問題: `Block/Entity not found`

**原因**: 無効なリソース名

**解決方法**:
```bash
# 正しい名前空間の使用
minecraft:stone          # 正しい
stone                   # 間違い

# バージョン固有の名前確認
# 1.12.2: minecraft:grass
# 1.16.5+: minecraft:grass_block
```

## Scratch統合の問題

### Node.js/npm関連の問題

#### 問題: `npm install fails`

**原因**: Node.jsバージョンまたは依存関係の問題

**解決方法**:
```bash
# Node.jsバージョンの確認
node --version
npm --version

# npmキャッシュのクリア
npm cache clean --force

# node_modulesの削除と再インストール
rm -rf node_modules package-lock.json
npm install
```

#### 問題: `Module not found: scratch-vm`

**原因**: リンク設定の問題

**解決方法**:
```bash
# scratch-vmのリンク設定
cd scratch-vm
npm link

# scratch-guiでのリンク
cd ../scratch-gui
npm link scratch-vm

# リンクの確認
npm list --link
```

### Scratch拡張機能の問題

#### 問題: `Minecraft extension not visible`

**原因**: ブランチの不一致またはビルドエラー

**解決方法**:
1. ブランチの確認:
   ```bash
   # scratch-vmとscratch-guiのブランチ一致確認
   git branch
   ```

2. ビルドエラーの確認:
   ```bash
   npm start 2>&1 | grep -i error
   ```

3. ブラウザキャッシュのクリア

#### 問題: `Blocks not working properly`

**原因**: APIの互換性問題

**解決方法**:
1. Minecraftバージョンとブランチの一致確認
2. APIハンドラーのエラーログ確認
3. コマンド構文の確認

## パフォーマンス問題

### メモリ不足

#### 問題: `OutOfMemoryError`

**原因**: JVMヒープサイズの不足

**解決方法**:
```bash
# gradle.propertiesでメモリ増量
echo "org.gradle.jvmargs=-Xmx4G -XX:MaxMetaspaceSize=1G" >> gradle.properties

# 実行時メモリの調整
java -Xmx2G -jar minecraft-server.jar
```

### CPU使用率の問題

#### 問題: `High CPU usage`

**原因**: 大量のコマンド実行またはループ処理

**解決方法**:
1. コマンド実行頻度の調整:
   ```javascript
   // Scratch側で200ms以上の間隔を設定
   setTimeout(() => {
       // コマンド実行
   }, 200);
   ```

2. 一括処理の使用:
   ```bash
   # 個別配置より一括配置を使用
   world.setBlocks(0,60,0,10,60,10,minecraft:stone)
   ```

### ネットワーク遅延

#### 問題: `Command execution delay`

**原因**: ネットワーク遅延またはキュー処理

**解決方法**:
1. ローカル接続の確認
2. コマンドバッファリングの最適化
3. 不要なコマンドの削減

## バージョン互換性の問題

### Minecraft バージョン間の違い

#### 問題: `Incompatible block/entity names`

**解決方法**:
バージョン固有の名前を使用:

```bash
# 1.12.2
minecraft:grass
minecraft:log
minecraft:planks

# 1.16.5+
minecraft:grass_block
minecraft:oak_log
minecraft:oak_planks
```

### Forge バージョンの互換性

#### 問題: `Forge version mismatch`

**解決方法**:
1. 対応表の確認:
   ```
   Minecraft 1.20.1 → Forge 47.4.0
   Minecraft 1.16.5 → Forge 36.1.2
   Minecraft 1.12.2 → Forge 14.23.5.2855
   ```

2. gradle.propertiesの更新:
   ```properties
   minecraft_version=1.20.1
   forge_version=47.4.0
   ```

## ログの確認方法

### Minecraft ログ

#### Windows
```
%APPDATA%\.minecraft\logs\latest.log
%APPDATA%\.minecraft\logs\debug.log
```

#### macOS
```
~/Library/Application Support/minecraft/logs/latest.log
```

#### Linux
```
~/.minecraft/logs/latest.log
```

### 開発環境ログ

```bash
# Gradle実行時のログ
./gradlew runClient --info

# コンソール出力のファイル保存
./gradlew runClient 2>&1 | tee minecraft.log
```

### ログレベルの調整

build.gradle での設定:
```gradle
runs {
    client {
        property 'forge.logging.console.level', 'debug'
        property 'forge.logging.markers', 'REGISTRIES'
    }
}
```

## よくある質問（FAQ）

### Q: コマンドが実行されない

**A**: 以下を確認してください:
1. サーバーサイドで実行していること
2. プレイヤーがワールドにいること
3. チートコマンドが有効であること
4. 構文が正しいこと

### Q: Scratchで拡張機能が見つからない

**A**: 以下を確認してください:
1. 正しいブランチを使用していること
2. `npm link` が正しく実行されていること
3. ブラウザキャッシュをクリアすること
4. 開発サーバーが正常に起動していること

### Q: ポート14711/14712が使用できない

**A**: 以下を試してください:
1. 他のプロセスがポートを使用していないか確認
2. ファイアウォール設定を確認
3. 管理者権限で実行
4. ポート番号を変更（設定ファイルで調整）

### Q: 大量のブロック配置でゲームが重くなる

**A**: 以下の対策を試してください:
1. `world.setBlocks()` を使用した一括配置
2. コマンド実行間隔を200ms以上に設定
3. 処理を小分けして実行
4. メモリ割り当ての増加

### Q: バージョンを変更したらビルドエラーが発生

**A**: 以下の手順で解決してください:
1. `./gradlew clean`
2. キャッシュディレクトリの削除: `rm -rf .gradle/`
3. Java バージョンの確認と変更
4. 依存関係の再取得: `./gradlew build --refresh-dependencies`

### Q: リモートから接続できない

**A**: 以下を設定してください:
1. ホストを "0.0.0.0" に変更
2. ファイアウォールでポートを開放
3. ルーターのポートフォワーディング設定
4. セキュリティリスクを理解した上で実施

## サポートとコミュニティ

問題が解決しない場合は:

1. **GitHub Issues**: [https://github.com/your-username/RemoteControllerMod/issues](https://github.com/your-username/RemoteControllerMod/issues)
2. **Discord コミュニティ**: [リンク]
3. **Wiki**: [https://github.com/your-username/RemoteControllerMod/wiki](https://github.com/your-username/RemoteControllerMod/wiki)

### Issue報告時に含める情報

- OS とバージョン
- Java バージョン (`java -version`)
- Minecraft/Forge バージョン
- 使用中のブランチ
- エラーメッセージの全文
- 再現手順
- 関連するログファイル