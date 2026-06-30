# 32個目「配当生活年数シミュレーター」手動アップロード用

## 変更ファイル一覧

以下の順番で GitHub にアップロードしてください。

1. `script.js`
2. `index.html`
3. `dividend-life-years.html`
4. `category-investment.html`
5. `category-fire.html`
6. `sitemap.xml`
7. `manual-upload-dividend-life-years.md`

## 追加内容

- 32個目のツールとして「配当生活年数シミュレーター」を追加
- 入力項目を追加
  - 現在資産
  - 毎月生活費
  - 想定配当利回り
  - 毎月追加投資額
  - 想定年利
  - 運用継続有無
  - 配当再投資有無
  - インフレ率
- 表示結果を追加
  - 配当生活可能年数
  - 年間配当金
  - 月平均配当金
  - 資産残高推移
  - FIRE継続可能性
  - 新NISA活用時の改善効果
  - おすすめ改善ポイント
- トップページからのリンクを追加
- 人気ツールランキングに追加
- フッターリンクに追加
- 投資カテゴリ、FIREカテゴリからの内部リンクを追加
- FAQを追加
- SEOタイトルとメタディスクリプションを追加
- AdSenseコードとAnalyticsコードを既存ページと同じ形式で維持
- `sitemap.xml` に `https://side-income-simulator.vercel.app/dividend-life-years.html` を追加
- 初期計算を個別保護し、1つのツールの計算エラーが他ツールへ波及しないように改善

## アップロード後の確認URL

- `https://side-income-simulator.vercel.app/dividend-life-years.html`
- `https://side-income-simulator.vercel.app/index.html#dividend-life-years`
- `https://side-income-simulator.vercel.app/category-investment.html`
- `https://side-income-simulator.vercel.app/category-fire.html`
- `https://side-income-simulator.vercel.app/sitemap.xml`

## 確認済み

- `script.js` の構文チェックOK
- `sitemap.xml` のXML構文チェックOK
- トップページのカード数は32件
- `index.html#dividend-life-years` で正常表示
- 初期値で計算結果が表示されることを確認
- `dividend-life-years.html` から該当ツールへ遷移することを確認
- 投資カテゴリ、FIREカテゴリから内部リンクで辿れることを確認
