# Remote Controller Mod - ドキュメント

このディレクトリには、Remote Controller Modの包括的なドキュメントが含まれています。

## 📚 利用可能なドキュメント

### 🚀 [セットアップガイド](SETUP-GUIDE.md)
初心者向けの環境構築手順を詳しく説明しています。
- システム要件
- 開発環境のセットアップ
- プロジェクトのビルド
- Scratch環境のセットアップ
- 接続テスト

### 📖 [APIリファレンス](API-REFERENCE.md)
利用可能なすべてのAPIコマンドの完全な仕様書です。
- 基本的な使用方法
- プレイヤー関連API
- ワールド関連API
- エンティティ関連API
- パラメータ仕様

### 👤 [ユーザーガイド](USER-GUIDE.md)
実際の使用方法を豊富な実例とともに説明しています。
- Scratchでのプログラミング入門
- 建築プロジェクト
- ゲーム制作
- 教育活用例
- ベストプラクティス

### 🔧 [トラブルシューティング](TROUBLESHOOTING.md)
一般的な問題とその解決方法を網羅しています。
- インストール・ビルド関連
- 接続関連の問題
- Modの動作問題
- パフォーマンス問題
- よくある質問（FAQ）

### 🛠️ [開発者ガイド](DEVELOPER-GUIDE.md)
カスタマイズや拡張開発のための詳細情報です。
- アーキテクチャ概要
- 新しいAPIコマンドの追加
- Scratch拡張機能の開発
- バージョン間の移植
- テストとデバッグ

## 📋 ドキュメント使用の流れ

### 初めて使用する場合
1. **[セットアップガイド](SETUP-GUIDE.md)** で環境を構築
2. **[APIリファレンス](API-REFERENCE.md)** でコマンドを確認
3. **[ユーザーガイド](USER-GUIDE.md)** で実践的な使い方を学習

### 問題が発生した場合
1. **[トラブルシューティング](TROUBLESHOOTING.md)** で解決方法を検索
2. 解決しない場合は GitHub Issues で報告

### カスタマイズしたい場合
1. **[開発者ガイド](DEVELOPER-GUIDE.md)** で拡張方法を学習
2. **[APIリファレンス](API-REFERENCE.md)** で既存機能を理解

## 🌟 主な機能

- **複数Minecraftバージョン対応**: 1.12.2、1.16.5、1.20.1
- **デュアル通信方式**: WebSocket（14711）とTCPソケット（14712）
- **豊富なAPI**: ブロック配置、エンティティ生成、天候制御など
- **Scratch統合**: 直感的なビジュアルプログラミング
- **教育活用**: プログラミング教育に最適

## 🎯 使用例

### 基本的なブロック配置
```javascript
world.setBlock(100,64,100,minecraft:diamond_block)
```

### 範囲指定での一括配置
```javascript
world.setBlocks(0,60,0,10,65,10,minecraft:glass)
```

### 天候の変更
```javascript
world.changeWeather(rain)
```

### チャットメッセージ
```javascript
chat.post(Hello, Minecraft World!)
```

## 🔗 関連リンク

- **メインリポジトリ**: [RemoteControllerMod](https://github.com/your-username/RemoteControllerMod)
- **Scratch VM**: [scratch-vm](https://github.com/your-username/scratch-vm)
- **Scratch GUI**: [scratch-gui](https://github.com/your-username/scratch-gui)
- **Issues**: [バグ報告・機能要望](https://github.com/your-username/RemoteControllerMod/issues)
- **Discussions**: [質問・議論](https://github.com/your-username/RemoteControllerMod/discussions)

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は [LICENSE](../LICENSE) ファイルをご確認ください。

## 🤝 コントリビューション

コントリビューションを歓迎します！詳細は [開発者ガイド](DEVELOPER-GUIDE.md) の「コントリビューション」セクションをご確認ください。

## 💬 サポート

- **GitHub Issues**: バグ報告や機能要望
- **GitHub Discussions**: 質問や議論
- **Discord**: リアルタイムサポート（リンク準備中）

---

📝 **ドキュメントの更新**: このドキュメントは定期的に更新されます。最新版は常にGitHubリポジトリでご確認ください。