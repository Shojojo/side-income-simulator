# GitHub手動アップロード用: AdSense審査前品質チェック修正

## 変更ファイル一覧

- `script.js`
- `style.css`
- `sitemap.xml`
- `side-income.html`
- `ai-hourly.html`
- `take-home.html`
- `tax.html`
- `nisa.html`
- `fire.html`
- `retirement.html`
- `privacy.html`
- `disclaimer.html`
- `contact.html`
- `operator.html`
- `article-side-income.html`
- `article-fire-strategy.html`
- `article-side-tax.html`
- `article-ai-side-business.html`

## 修正内容

- フッターの `privacy.html`、`disclaimer.html`、`contact.html`、`operator.html` が404になる問題を修正
- トップページのおすすめ記事リンク4件が404になる問題を修正
- `AI副業時給`、`副業手取り`、`新NISA` の個別入口HTMLを追加
- 古い入口ページのAnalytics IDとAdSenseコードを本番コードへ統一
- 各HTMLにメタタイトルとメタディスクリプションを設定
- `script.js` で各ツール表示時のタイトルとメタディスクリプションを切り替えるように修正
- `sitemap.xml` に全ツール、記事、運営系ページを追加
- スマホ表示向けに記事・運営系ページ用の共通スタイルを追加

## 確認結果

- 全HTMLリンク切れチェック: OK
- `script.js` 内部リンクチェック: OK
- ローカルHTTP 200チェック: 22件すべてOK
- 文字化けチェック: OK
- トップと8ツールの表示チェック: OK
- AdSenseコード確認: OK
- Analyticsコード確認: OK
- メタタイトル確認: OK
- メタディスクリプション確認: OK
- 横スクロール崩れチェック: OK
