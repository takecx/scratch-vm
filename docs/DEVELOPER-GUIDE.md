# Remote Controller Mod - 開発者ガイド

このガイドでは、Remote Controller Modの内部構造を理解し、カスタマイズや拡張開発を行うための詳細な情報を提供します。

## 目次

1. [アーキテクチャ概要](#アーキテクチャ概要)
2. [コードベース構造](#コードベース構造)
3. [新しいAPIコマンドの追加](#新しいapiコマンドの追加)
4. [Scratch拡張機能の開発](#scratch拡張機能の開発)
5. [ネットワーク通信の拡張](#ネットワーク通信の拡張)
6. [バージョン間の移植](#バージョン間の移植)
7. [テストとデバッグ](#テストとデバッグ)
8. [コントリビューション](#コントリビューション)

## アーキテクチャ概要

### 全体システム構成

```
┌─────────────────┐    WebSocket/TCP     ┌─────────────────┐
│  Scratch GUI    │ ←─────────────────→ │  Minecraft Mod  │
│  (Frontend)     │      Port 14711      │  (Backend)      │
└─────────────────┘      Port 14712      └─────────────────┘
         │                                         │
         ▼                                         ▼
┌─────────────────┐                      ┌─────────────────┐
│  scratch-vm     │                      │   APIHandler    │
│  (Extension)    │                      │   (Commands)    │
└─────────────────┘                      └─────────────────┘
```

### レイヤー構造

1. **プレゼンテーション層** (Scratch GUI)
   - ユーザーインターフェース
   - ブロックの描画とイベント処理

2. **ロジック層** (scratch-vm)
   - ブロックの実行エンジン
   - WebSocket通信

3. **通信層** (WebSocket/TCP Server)
   - プロトコル変換
   - 接続管理

4. **アプリケーション層** (APIHandler)
   - コマンド解析
   - Minecraft API呼び出し

5. **データ層** (Minecraft Server)
   - ワールドデータ
   - エンティティ管理

## コードベース構造

### RemoteControllerMod の構造

```
src/main/java/com/github/takecx/remotecontrollermod/
├── Remotecontrollermod.java          # メインModクラス
├── APIHandler.java                   # APIコマンド処理
├── WSServer.java                     # WebSocketサーバー
├── SocketServer.java                 # TCPソケットサーバー
├── network/
│   ├── NetworkHandler.java          # ネットワーク設定
│   ├── SocketServerManager.java     # サーバー管理
│   └── CommandPacket.java           # パケット定義
├── messages/
│   ├── MoveCameraMessageToClient.java
│   └── MessageHandlerOnClient.java
├── blocks/
│   └── StarBlock.java               # カスタムブロック
├── lists/
│   ├── BlockList.java               # ブロック登録
│   └── ItemList.java                # アイテム登録
└── stages/
    ├── BaseStage.java               # ステージ基底クラス
    └── Stage1_*.java                # 具体的なステージ
```

### scratch-vm の構造

```
src/extensions/scratch3_minecraft/
├── index.js                         # メイン拡張機能
├── minecraft_utils/
│   └── utils.js                     # WebSocket通信ユーティリティ
├── block_info.js                    # ブロック情報
├── entity_info.js                   # エンティティ情報
├── particle_info.js                 # パーティクル情報
└── enchant_info.js                  # エンチャント情報
```

## 新しいAPIコマンドの追加

### 1. APIハンドラーでのコマンド定義

`APIHandler.java` にコマンドを追加：

```java
public class APIHandler {
    // コマンド定数の定義
    protected static final String WORLD_SET_TIME = "world.setTime";
    
    public Object Process(String commandStrIn) throws Exception {
        // 既存のif-else文に追加
        else if (cmd.equals(WORLD_SET_TIME)) {
            long timeValue = Long.parseLong(args);
            myWorld.setDayTime(timeValue);
            return null;
        }
        // ...
    }
}
```

### 2. コマンドのドキュメント化

コマンドの上にJavaDocコメントを追加：

```java
/**
 * ワールドの時刻を設定します
 * world.setTime(time)
 * @param time 設定する時刻値（0-24000）
 */
protected static final String WORLD_SET_TIME = "world.setTime";
```

### 3. Scratch拡張機能への追加

`src/extensions/scratch3_minecraft/index.js` でブロックを定義：

```javascript
getInfo() {
    return {
        id: 'minecraft',
        name: 'Minecraft',
        blocks: [
            // 既存のブロック...
            {
                opcode: 'setTime',
                blockType: BlockType.COMMAND,
                text: '時刻を [TIME] に設定',
                arguments: {
                    TIME: {
                        type: ArgumentType.NUMBER,
                        defaultValue: 6000
                    }
                }
            }
        ]
    };
}

setTime(args) {
    const time = args.TIME;
    this.sendCommand(`world.setTime(${time})`);
}
```

### 4. 多言語対応

`src/extensions/scratch3_minecraft/index.js` で翻訳を追加：

```javascript
const translations = {
    'ja': {
        'minecraft.setTime': '時刻を [TIME] に設定'
    },
    'en': {
        'minecraft.setTime': 'set time to [TIME]'
    }
};
```

## Scratch拡張機能の開発

### ブロックタイプの種類

```javascript
// コマンドブロック（実行のみ）
{
    blockType: BlockType.COMMAND,
    text: 'コマンドを実行'
}

// レポーターブロック（値を返す）
{
    blockType: BlockType.REPORTER,
    text: 'プレイヤー位置'
}

// ブーリアンブロック（真偽値）
{
    blockType: BlockType.BOOLEAN,
    text: 'プレイヤーがいる'
}

// ハットブロック（イベント）
{
    blockType: BlockType.HAT,
    text: 'ブロックが置かれたとき'
}
```

### 引数タイプの種類

```javascript
arguments: {
    COORDINATE: {
        type: ArgumentType.NUMBER,
        defaultValue: 0
    },
    BLOCK_TYPE: {
        type: ArgumentType.STRING,
        menu: 'blocks'
    },
    DROPDOWN: {
        type: ArgumentType.STRING,
        menu: 'weather',
        defaultValue: 'clear'
    }
}
```

### ドロップダウンメニューの定義

```javascript
menus: {
    blocks: {
        acceptReporters: true,
        items: [
            { text: '石', value: 'minecraft:stone' },
            { text: '土', value: 'minecraft:dirt' },
            { text: '草ブロック', value: 'minecraft:grass_block' }
        ]
    },
    weather: [
        { text: '晴れ', value: 'clear' },
        { text: '雨', value: 'rain' },
        { text: '雷雨', value: 'thunder' }
    ]
}
```

### 条件付きブロック表示

```javascript
getInfo() {
    const blocks = [
        // 基本ブロック
        {
            opcode: 'basicCommand',
            blockType: BlockType.COMMAND,
            text: '基本コマンド'
        }
    ];
    
    // 開発モードでのみ表示
    if (this.isDevelopmentMode()) {
        blocks.push({
            opcode: 'debugCommand',
            blockType: BlockType.COMMAND,
            text: 'デバッグコマンド'
        });
    }
    
    return {
        id: 'minecraft',
        name: 'Minecraft',
        blocks: blocks
    };
}
```

## ネットワーク通信の拡張

### WebSocketメッセージハンドラーの追加

`WSServer.java` にカスタムメッセージ処理を追加：

```java
@Override
public void onMessage(WebSocket conn, String message) {
    try {
        // JSON形式のメッセージ処理
        if (message.startsWith("{")) {
            JsonObject json = JsonParser.parseString(message).getAsJsonObject();
            String command = json.get("command").getAsString();
            JsonArray params = json.getAsJsonArray("params");
            
            // カスタム処理
            handleJsonCommand(command, params);
        } else {
            // 従来の文字列処理
            handleStringCommand(message);
        }
    } catch (Exception e) {
        LOGGER.error("Message processing error", e);
        conn.send("ERROR: " + e.getMessage());
    }
}

private void handleJsonCommand(String command, JsonArray params) {
    // JSON形式のコマンド処理
}
```

### 新しい通信プロトコルの追加

HTTP RESTエンドポイントの追加：

```java
@Mod.EventBusSubscriber(bus = Mod.EventBusSubscriber.Bus.MOD)
public static class HttpServerSetup {
    
    @SubscribeEvent
    public static void onServerStarting(FMLServerStartingEvent event) {
        // HTTP サーバーの開始
        HttpServer httpServer = new HttpServer(14713);
        httpServer.addEndpoint("/api/player/pos", this::getPlayerPosition);
        httpServer.addEndpoint("/api/world/block", this::setBlock);
        httpServer.start();
    }
    
    private String getPlayerPosition(HttpRequest request) {
        // プレイヤー位置のJSON応答
        Vector3d pos = getPlayerPos();
        return String.format("{\"x\": %f, \"y\": %f, \"z\": %f}", 
                           pos.x, pos.y, pos.z);
    }
}
```

### セキュリティの実装

認証機能の追加：

```java
public class AuthenticationHandler {
    private final Map<String, String> validTokens = new HashMap<>();
    
    public boolean isValidToken(String token) {
        return validTokens.containsKey(token);
    }
    
    public String generateToken(String clientId) {
        String token = UUID.randomUUID().toString();
        validTokens.put(token, clientId);
        return token;
    }
    
    @Override
    public void onMessage(WebSocket conn, String message) {
        // トークン検証
        if (!authenticateConnection(conn, message)) {
            conn.send("ERROR: Authentication required");
            conn.close();
            return;
        }
        
        // 通常の処理
        super.onMessage(conn, message);
    }
}
```

## バージョン間の移植

### Minecraft APIの変更への対応

バージョン固有のAPIラッパー：

```java
public abstract class MinecraftVersionWrapper {
    public abstract void setBlock(BlockPos pos, String blockType);
    public abstract String getBlockType(BlockPos pos);
    
    public static MinecraftVersionWrapper getInstance() {
        String version = getMinecraftVersion();
        switch (version) {
            case "1.20.1":
                return new Minecraft1201Wrapper();
            case "1.16.5":
                return new Minecraft1165Wrapper();
            case "1.12.2":
                return new Minecraft1122Wrapper();
            default:
                throw new UnsupportedOperationException("Unsupported version: " + version);
        }
    }
}

public class Minecraft1201Wrapper extends MinecraftVersionWrapper {
    @Override
    public void setBlock(BlockPos pos, String blockType) {
        String[] parts = blockType.split(":");
        Block block = ForgeRegistries.BLOCKS.getValue(new ResourceLocation(parts[0], parts[1]));
        world.setBlock(pos, block.defaultBlockState(), 3);
    }
}

public class Minecraft1122Wrapper extends MinecraftVersionWrapper {
    @Override
    public void setBlock(BlockPos pos, String blockType) {
        String[] parts = blockType.split(":");
        Block block = ForgeRegistries.BLOCKS.getValue(new ResourceLocation(parts[0], parts[1]));
        world.setBlockState(pos, block.getDefaultState());
    }
}
```

### 設定ファイルによる分岐

`config/minecraft-api-mapping.json`:

```json
{
    "1.20.1": {
        "world_method": "setBlock",
        "block_state_method": "defaultBlockState",
        "grass_block": "minecraft:grass_block"
    },
    "1.16.5": {
        "world_method": "setBlockState", 
        "block_state_method": "getDefaultState",
        "grass_block": "minecraft:grass_block"
    },
    "1.12.2": {
        "world_method": "setBlockState",
        "block_state_method": "getDefaultState", 
        "grass_block": "minecraft:grass"
    }
}
```

## テストとデバッグ

### 単体テストの作成

```java
public class APIHandlerTest {
    private APIHandler apiHandler;
    private MockServerWorld mockWorld;
    
    @BeforeEach
    void setUp() {
        mockWorld = new MockServerWorld();
        apiHandler = new APIHandler();
        apiHandler.setWorld(mockWorld);
    }
    
    @Test
    void testSetBlock() throws Exception {
        // テスト実行
        Object result = apiHandler.Process("world.setBlock(0,64,0,minecraft:stone)");
        
        // 検証
        assertNull(result);
        verify(mockWorld).setBlock(new BlockPos(0, 64, 0), any());
    }
    
    @Test
    void testGetPlayerPos() throws Exception {
        // モックの設定
        when(mockWorld.getPlayers()).thenReturn(Arrays.asList(mockPlayer));
        when(mockPlayer.position()).thenReturn(new Vec3(10, 64, 20));
        
        // テスト実行
        Object result = apiHandler.Process("player.getPos()");
        
        // 検証
        assertEquals("10.0,64.0,20.0", result);
    }
}
```

### 統合テストの作成

```java
@Mod.EventBusSubscriber(bus = Mod.EventBusSubscriber.Bus.FORGE)
public class IntegrationTest {
    
    @SubscribeEvent
    public static void onServerStarted(FMLServerStartedEvent event) {
        if (isTestMode()) {
            runIntegrationTests();
        }
    }
    
    private static void runIntegrationTests() {
        TestSuite suite = new TestSuite();
        suite.addTest(new WebSocketConnectionTest());
        suite.addTest(new CommandExecutionTest());
        suite.addTest(new ScratchIntegrationTest());
        
        TestRunner runner = new TestRunner();
        runner.run(suite);
    }
}
```

### ログ設定の最適化

`log4j2.xml` でデバッグログの設定：

```xml
<Configuration>
    <Appenders>
        <File name="RemoteControllerLog" fileName="logs/remotecontroller.log">
            <PatternLayout pattern="[%d{HH:mm:ss}] [%level] %msg%n"/>
        </File>
    </Appenders>
    
    <Loggers>
        <Logger name="com.github.takecx.remotecontrollermod" level="DEBUG" additivity="false">
            <AppenderRef ref="RemoteControllerLog"/>
        </Logger>
    </Loggers>
</Configuration>
```

### パフォーマンス測定

```java
public class PerformanceProfiler {
    private static final Map<String, Long> timings = new HashMap<>();
    
    public static void startTiming(String operation) {
        timings.put(operation, System.nanoTime());
    }
    
    public static void endTiming(String operation) {
        long startTime = timings.get(operation);
        long duration = System.nanoTime() - startTime;
        LOGGER.info("Operation {} took {} ms", operation, duration / 1_000_000);
    }
    
    // 使用例
    public Object Process(String commandStrIn) throws Exception {
        PerformanceProfiler.startTiming("command_processing");
        try {
            // コマンド処理
            return processCommand(commandStrIn);
        } finally {
            PerformanceProfiler.endTiming("command_processing");
        }
    }
}
```

## コントリビューション

### 開発環境のセットアップ

1. **フォークとクローン**
   ```bash
   git clone https://github.com/your-fork/RemoteControllerMod.git
   cd RemoteControllerMod
   git remote add upstream https://github.com/original/RemoteControllerMod.git
   ```

2. **開発ブランチの作成**
   ```bash
   git checkout -b feature/new-api-command
   ```

3. **コード品質チェック**
   ```bash
   # コードフォーマット
   ./gradlew spotlessApply
   
   # 静的解析
   ./gradlew checkstyleMain
   
   # テスト実行
   ./gradlew test
   ```

### プルリクエストのガイドライン

1. **コミットメッセージの形式**
   ```
   feat: add world.setTime command
   
   - Implemented time setting functionality
   - Added corresponding Scratch block
   - Updated API documentation
   
   Closes #123
   ```

2. **必須チェック項目**
   - [ ] すべてのテストがパス
   - [ ] コードスタイルに準拠
   - [ ] ドキュメントが更新されている
   - [ ] バックワード互換性が保たれている

3. **レビュープロセス**
   - 機能テスト
   - コードレビュー
   - ドキュメント確認
   - パフォーマンステスト

### リリースプロセス

1. **バージョン管理**
   ```
   MAJOR.MINOR.PATCH-mcVERSION
   例: 1.2.0-mc1.20.1
   ```

2. **リリースノートの作成**
   ```markdown
   ## [1.2.0] - 2024-01-15
   
   ### Added
   - 新しいAPIコマンド `world.setTime`
   - Scratchブロック「時刻を設定」
   
   ### Changed
   - パフォーマンス改善
   
   ### Fixed
   - WebSocket接続の安定性向上
   ```

3. **マルチバージョンリリース**
   ```bash
   # 各バージョンブランチでリリース
   git checkout 1-20-1
   ./gradlew build publish
   
   git checkout 1-16-5
   ./gradlew build publish
   
   git checkout 1-12-2
   ./gradlew build publish
   ```

## 高度なカスタマイゼーション

### プラグインアーキテクチャの実装

```java
public interface ModPlugin {
    String getName();
    void initialize(APIHandler apiHandler);
    void registerCommands(CommandRegistry registry);
}

public class PluginManager {
    private final List<ModPlugin> plugins = new ArrayList<>();
    
    public void loadPlugin(Class<? extends ModPlugin> pluginClass) {
        try {
            ModPlugin plugin = pluginClass.getDeclaredConstructor().newInstance();
            plugin.initialize(apiHandler);
            plugin.registerCommands(commandRegistry);
            plugins.add(plugin);
            LOGGER.info("Loaded plugin: {}", plugin.getName());
        } catch (Exception e) {
            LOGGER.error("Failed to load plugin: {}", pluginClass.getSimpleName(), e);
        }
    }
}

// プラグインの例
public class BuildingPlugin implements ModPlugin {
    @Override
    public void registerCommands(CommandRegistry registry) {
        registry.register("building.createHouse", this::createHouse);
        registry.register("building.createTower", this::createTower);
    }
    
    private Object createHouse(String args) {
        // 家の自動生成ロジック
        return null;
    }
}
```

### 設定システムの実装

```java
public class ModConfig {
    @ConfigProperty(name = "network.websocket.port", defaultValue = "14711")
    private int websocketPort;
    
    @ConfigProperty(name = "network.socket.port", defaultValue = "14712")
    private int socketPort;
    
    @ConfigProperty(name = "security.authentication.enabled", defaultValue = "false")
    private boolean authenticationEnabled;
    
    public static ModConfig load() {
        // 設定ファイルの読み込み
        Properties props = loadConfigFile();
        ModConfig config = new ModConfig();
        
        // リフレクションを使用して設定値を注入
        injectConfigValues(config, props);
        
        return config;
    }
}
```

このガイドを参考に、Remote Controller Modのカスタマイズや拡張開発を行ってください。不明な点があれば、GitHubのIssuesやDiscussionsでお気軽にお尋ねください。