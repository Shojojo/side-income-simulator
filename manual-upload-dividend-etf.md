# 配当ETF比較シミュレーター追加 手動アップロード用

## 変更ファイル一覧

- index.html
- script.js
- dividend-etf.html
- category-investment.html
- sitemap.xml

## アップロード順

1. dividend-etf.html
2. script.js
3. index.html
4. category-investment.html
5. sitemap.xml

## 完全内容

### index.html

~~~html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="W8lV0ZXsiS6lCYIRGsdxAnk8X0vIfJix8UBz6ie2gnc" />
    <meta name="description" content="副業、税金、投資、FIRE、老後資金、教育費、住宅ローン、固定費削減、AI副業効率化、副業時間管理、会社員キャッシュフロー、配当ETF比較まで、28種類の初心者向けシミュレーターを検索・カテゴリ別・人気順で探せるスマホ対応サイトです。">
    <title>【2026年対応】初心者向け資産シミュレーター28選｜検索・カテゴリ別で探せる</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="script.js?v=20260607-dividend-etf"></script>
  </head>
  <body></body>
</html>

~~~

### script.js

~~~javascript
var GA_MEASUREMENT_ID = window.GA_MEASUREMENT_ID || "G-XXXXXXXXXX";

(function () {
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === "G-XXXXXXXXXX") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  const gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
  document.head.appendChild(gaScript);

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false,
  });

  function sendGaPageView() {
    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: `${window.location.pathname}${window.location.search}${window.location.hash}`,
    });
  }

  window.addEventListener("hashchange", sendGaPageView);
  sendGaPageView();
})();

const seoDescription = "\u526f\u696d\u6708\u53ce\u3001AI\u526f\u696d\u6642\u7d66\u3001AI\u526f\u696d\u52b9\u7387\u5316\u3001\u526f\u696d\u6642\u7d66\u6539\u5584\u3001\u526f\u696d\u6642\u9593\u7ba1\u7406\u3001\u526f\u696d\u5229\u76ca\u7387\u3001\u526f\u696d\u624b\u53d6\u308a\u3001\u526f\u696d\u6240\u5f97\u7a0e\u3001\u526f\u696d\u4f4f\u6c11\u7a0e\u3001\u65b0NISA\u30fb\u7a4d\u7acb\u6295\u8cc7\u3001NISA\u53d6\u308a\u5d29\u3057\u3001\u30af\u30ec\u30ab\u7a4d\u7acb\u6bd4\u8f03\u3001iDeCo\u7bc0\u7a0e\u3001\u914d\u5f53\u91d1\u3001\u914d\u5f53ETF\u6bd4\u8f03\u3001\u914d\u5f53\u518d\u6295\u8cc7\u3001\u914d\u5f53\u751f\u6d3b\u9054\u6210\u3001FIRE\u9054\u6210\u3001\u4f1a\u793e\u54e1FIRE\u3001\u4f1a\u793e\u54e1\u30ad\u30e3\u30c3\u30b7\u30e5\u30d5\u30ed\u30fc\u3001\u30b5\u30a4\u30c9FIRE\u3001\u751f\u6d3b\u9632\u885b\u8cc7\u91d1\u3001\u56fa\u5b9a\u8cbb\u524a\u6e1b\u3001\u8001\u5f8c\u8cc7\u91d1\u3001\u6559\u80b2\u8cbb\u3001\u5b66\u8cc7\u4fdd\u967a\u6bd4\u8f03\u3001\u4f4f\u5b85\u30ed\u30fc\u30f3\u3001\u526f\u696d\u7a0e\u91d1\u30fb\u9752\u8272\u7533\u544a\u3092\u307e\u3068\u3081\u3066\u8a66\u7b97\u3067\u304d\u308b\u30b9\u30de\u30db\u5bfe\u5fdc\u306e\u8cc7\u7523\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u3067\u3059\u3002";
const descriptionMeta = document.querySelector('meta[name="description"]') || document.createElement("meta");
descriptionMeta.setAttribute("name", "description");
descriptionMeta.setAttribute("content", seoDescription);
document.head.appendChild(descriptionMeta);

const routeSeo = {
  top: {
    title: "【2026年対応】初心者向け資産シミュレーター28選｜検索・カテゴリ別で探せる",
    description: "副業、税金、投資、FIRE、老後資金、教育費、住宅ローン、固定費削減、AI副業効率化、副業時間管理、会社員キャッシュフロー、配当ETF比較まで、28種類の初心者向けシミュレーターを検索・カテゴリ別・人気順で探せるスマホ対応サイトです。",
  },
  "side-income": {
    title: "【2026年対応】初心者向け副業月収シミュレーター｜3分で収入計算",
    description: "\u6642\u7d66\u3001\u4f5c\u696d\u6642\u9593\u3001\u6848\u4ef6\u6570\u3001\u7a0e\u7387\u304b\u3089\u526f\u696d\u306e\u6708\u53ce\u30fb\u5e74\u53ce\u30fb\u7a0e\u5f15\u5f8c\u306e\u624b\u53d6\u308a\u76ee\u5b89\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  "ai-hourly": {
    title: "【2026年対応】初心者向けAI副業時給シミュレーター｜3分で効率計算",
    description: "\u6848\u4ef6\u5358\u4fa1\u3001\u4f5c\u696d\u6642\u9593\u3001\u6708\u6848\u4ef6\u6570\u304b\u3089AI\u526f\u696d\u306e\u6642\u7d66\u3001\u6708\u53ce\u3001AI\u6d3b\u7528\u6642\u306e\u52b9\u7387\u6539\u5584\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  "ai-efficiency": {
    title: "【2026年対応】初心者向けAI副業効率化シミュレーター｜3分で時給改善計算",
    description: "現在の副業作業時間、売上、AI導入有無、時間削減率、AIツール月額費用、外注費削減額、目標時給から、AI導入後の予想時給、削減時間、利益率改善、年間追加利益を試算できます。",
  },
  "hourly-improvement": {
    title: "【2026年対応】初心者向け副業時給改善シミュレーター｜3分でAI効率分析",
    description: "副業売上、作業時間、経費、外注費、AIツール利用有無、AI活用時間削減率、目標時給から、現在の実質時給とAI導入後の予想時給、改善余地を分析できます。",
  },
  "side-time-management": {
    title: "【2026年対応】初心者向け副業時間管理シミュレーター｜3分で継続時間を分析",
    description: "本業勤務時間、通勤時間、睡眠時間、家事時間、休日時間、副業作業時間、AI活用有無、AI時短率から、1日の自由時間、副業可能時間、継続可能性、FIRE達成への影響を分析できます。",
  },
  "side-profit-margin": {
    title: "【2026年対応】初心者向け副業利益率シミュレーター｜3分で利益分析",
    description: "\u526f\u696d\u58f2\u4e0a\u3001\u7d4c\u8cbb\u3001\u4f5c\u696d\u6642\u9593\u3001\u5e83\u544a\u8cbb\u3001\u5916\u6ce8\u8cbb\u3001AI\u30c4\u30fc\u30eb\u5229\u7528\u6709\u7121\u304b\u3089\u5229\u76ca\u984d\u3001\u5229\u76ca\u7387\u3001\u6642\u7d66\u63db\u7b97\u3001\u6539\u5584\u30dd\u30a4\u30f3\u30c8\u3092\u5206\u6790\u3067\u304d\u307e\u3059\u3002",
  },
  "take-home": {
    title: "【2026年対応】初心者向け副業手取り計算シミュレーター｜3分で税引後計算",
    description: "\u5e74\u9593\u526f\u696d\u58f2\u4e0a\u3001\u7d4c\u8cbb\u3001\u7a0e\u7387\u3001\u793e\u4f1a\u4fdd\u967a\u6599\u3001\u9752\u8272\u7533\u544a\u63a7\u9664\u304b\u3089\u526f\u696d\u306e\u6700\u7d42\u624b\u53d6\u308a\u984d\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  tax: {
    title: "【2026年対応】初心者向け副業税金シミュレーター｜3分で青色申告も確認",
    description: "\u5e74\u9593\u526f\u696d\u53ce\u5165\u3001\u7d4c\u8cbb\u3001\u6240\u5f97\u7a0e\u7387\u3001\u4f4f\u6c11\u7a0e\u7387\u3001\u9752\u8272\u7533\u544a\u63a7\u9664\u984d\u304b\u3089\u8ab2\u7a0e\u6240\u5f97\u3068\u624b\u53d6\u308a\u984d\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  "resident-tax": {
    title: "【2026年対応】初心者向け副業住民税シミュレーター｜3分で普通徴収も確認",
    description: "\u5e74\u9593\u526f\u696d\u58f2\u4e0a\u3001\u7d4c\u8cbb\u3001\u9752\u8272\u7533\u544a\u63a7\u9664\u3001\u57fa\u790e\u63a7\u9664\u3001\u4f4f\u6c11\u7a0e\u7387\u3001\u5747\u7b49\u5272\u984d\u304b\u3089\u526f\u696d\u306e\u4f4f\u6c11\u7a0e\u6982\u7b97\u3068\u666e\u901a\u5fb4\u53ce\u306e\u6ce8\u610f\u70b9\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",
  },
  "income-tax": {
    title: "【2026年対応】初心者向け副業所得税シミュレーター｜3分で税額計算",
    description: "\u5e74\u9593\u526f\u696d\u58f2\u4e0a\u3001\u7d4c\u8cbb\u3001\u9752\u8272\u7533\u544a\u63a7\u9664\u3001\u57fa\u790e\u63a7\u9664\u3001\u305d\u306e\u4ed6\u63a7\u9664\u3001\u6240\u5f97\u7a0e\u7387\u3001\u5fa9\u8208\u7279\u5225\u6240\u5f97\u7a0e\u7387\u304b\u3089\u526f\u696d\u306e\u6240\u5f97\u7a0e\u6982\u7b97\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",
  },
  nisa: {
    title: "【2026年対応】初心者向け新NISAシミュレーター｜3分で積立投資計算",
    description: "\u521d\u671f\u6295\u8cc7\u984d\u3001\u6bce\u6708\u7a4d\u7acb\u984d\u3001\u60f3\u5b9a\u5e74\u5229\u3001\u904b\u7528\u5e74\u6570\u304b\u3089\u65b0NISA\u306e\u5c06\u6765\u8cc7\u7523\u984d\u3068\u904b\u7528\u76ca\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  "nisa-withdrawal": {
    title: "【2026年対応】初心者向けNISA取り崩しシミュレーター｜3分で老後資金計算",
    description: "現在のNISA資産額、毎月追加投資額、想定年利、取り崩し開始年齢、毎月取り崩し額、運用継続有無、目標維持年数から、何年取り崩せるかと毎月使える額を試算できます。",
  },
  "credit-card-investment": {
    title: "【2026年対応】初心者向けクレカ積立比較シミュレーター｜3分でポイント計算",
    description: "\u6bce\u6708\u7a4d\u7acb\u984d\u3001\u7a4d\u7acb\u5e74\u6570\u3001\u60f3\u5b9a\u5e74\u5229\u3001\u30af\u30ec\u30ab\u9084\u5143\u7387\u3001\u30dd\u30a4\u30f3\u30c8\u518d\u6295\u8cc7\u6709\u7121\u3001NISA\u5229\u7528\u6709\u7121\u304b\u3089\u30af\u30ec\u30ab\u7a4d\u7acb\u3068\u901a\u5e38\u7a4d\u7acb\u306e\u5dee\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  ideco: {
    title: "【2026年対応】初心者向けiDeCo節税シミュレーター｜3分で節税計算",
    description: "\u5e74\u53ce\u3001\u8ab2\u7a0e\u6240\u5f97\u3001\u7a0e\u7387\u3001\u6bce\u6708\u306eiDeCo\u639b\u91d1\u3001\u904b\u7528\u5e74\u6570\u304b\u3089\u5e74\u9593\u7bc0\u7a0e\u984d\u3068\u5c06\u6765\u8cc7\u7523\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  fire: {
    title: "【2026年対応】初心者向けFIRE達成シミュレーター｜3分で必要資産計算",
    description: "\u73fe\u5728\u8cc7\u7523\u3001\u6bce\u6708\u7a4d\u7acb\u984d\u3001\u60f3\u5b9a\u5e74\u5229\u3001\u76ee\u6a19\u8cc7\u7523\u304b\u3089FIRE\u9054\u6210\u307e\u3067\u306e\u5e74\u6570\u3068\u5c06\u6765\u8cc7\u7523\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  "employee-fire": {
    title: "【2026年対応】初心者向け会社員FIRE年数シミュレーター｜3分で達成年数計算",
    description: "\u73fe\u5728\u5e74\u9f62\u3001\u73fe\u5728\u8cc7\u7523\u3001\u6bce\u6708\u7a4d\u7acb\u984d\u3001\u526f\u696d\u6708\u53ce\u3001\u5e74\u9593\u751f\u6d3b\u8cbb\u3001\u60f3\u5b9a\u5e74\u5229\u3001\u914d\u5f53\u53ce\u5165\u3001\u76ee\u6a19FIRE\u8cc7\u7523\u304b\u3089\u4f1a\u793e\u54e1\u306eFIRE\u9054\u6210\u5e74\u6570\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  "cash-flow": {
    title: "【2026年対応】初心者向け会社員キャッシュフローシミュレーター｜3分で家計改善",
    description: "給与収入、副業収入、家賃、食費、通信費、保険料、投資額、ローン返済額、その他支出から、毎月収支、年間貯蓄額、投資可能額、固定費改善余地、FIRE達成への影響を分析できます。",
  },
  dividend: {
    title: "【2026年対応】初心者向け配当金シミュレーター｜3分で年間配当計算",
    description: "\u521d\u671f\u6295\u8cc7\u984d\u3001\u6bce\u6708\u8ffd\u52a0\u6295\u8cc7\u984d\u3001\u60f3\u5b9a\u914d\u5f53\u5229\u56de\u308a\u3001\u904b\u7528\u5e74\u6570\u3001\u914d\u5f53\u518d\u6295\u8cc7\u6709\u7121\u304b\u3089\u5e74\u9593\u914d\u5f53\u91d1\u3001\u7d2f\u8a08\u914d\u5f53\u91d1\u3001\u6700\u7d42\u8cc7\u7523\u984d\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  "dividend-etf": {
    title: "【2026年対応】初心者向け配当ETF比較シミュレーター｜3分で高配当ETF比較",
    description: "初期投資額、毎月積立額、ETF選択、想定配当利回り、想定株価成長率、運用年数、配当再投資有無、新NISA利用有無から、年間配当金、累計配当金、最終資産額、ETF別比較を試算できます。",
  },
  "dividend-reinvestment": {
    title: "【2026年対応】初心者向け配当再投資シミュレーター｜3分で複利計算",
    description: "\u521d\u671f\u6295\u8cc7\u984d\u3001\u6bce\u6708\u8ffd\u52a0\u6295\u8cc7\u984d\u3001\u60f3\u5b9a\u914d\u5f53\u5229\u56de\u308a\u3001\u60f3\u5b9a\u682a\u4fa1\u6210\u9577\u7387\u3001\u904b\u7528\u5e74\u6570\u3001\u914d\u5f53\u518d\u6295\u8cc7\u6709\u7121\u304b\u3089\u6700\u7d42\u8cc7\u7523\u984d\u3001\u7d2f\u8a08\u914d\u5f53\u91d1\u3001\u518d\u6295\u8cc7\u306b\u3088\u308b\u5897\u52a0\u984d\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  "dividend-life": {
    title: "【2026年対応】初心者向け配当生活達成シミュレーター｜3分で必要資産計算",
    description: "毎月生活費、現在資産、毎月積立額、想定配当利回り、想定年利、運用年数、配当再投資有無から、配当生活に必要な資産額と達成予想年を試算できます。",
  },
  "side-fire": {
    title: "【2026年対応】初心者向けサイドFIREシミュレーター｜3分で必要資産計算",
    description: "\u73fe\u5728\u306e\u5e74\u9f62\u3001FIRE\u76ee\u6a19\u5e74\u9f62\u3001\u73fe\u5728\u8cc7\u7523\u3001\u6bce\u6708\u7a4d\u7acb\u984d\u3001\u60f3\u5b9a\u5e74\u5229\u3001\u6bce\u6708\u751f\u6d3b\u8cbb\u3001\u526f\u696d\u6708\u53ce\u3001\u914d\u5f53\u53ce\u5165\u304b\u3089\u30b5\u30a4\u30c9FIRE\u9054\u6210\u53ef\u80fd\u6027\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  "emergency-fund": {
    title: "【2026年対応】初心者向け生活防衛資金シミュレーター｜3分で必要額計算",
    description: "\u6bce\u6708\u751f\u6d3b\u8cbb\u3001\u5bb6\u65cf\u4eba\u6570\u3001\u96c7\u7528\u5f62\u614b\u3001\u73fe\u5728\u8caf\u84c4\u984d\u3001\u5931\u696d\u6642\u60f3\u5b9a\u671f\u9593\u3001\u526f\u696d\u53ce\u5165\u6709\u7121\u304b\u3089\u5fc5\u8981\u306a\u751f\u6d3b\u9632\u885b\u8cc7\u91d1\u3068\u4e0d\u8db3\u984d\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  "fixed-cost-reduction": {
    title: "【2026年対応】初心者向け固定費削減シミュレーター｜3分で年間節約額計算",
    description: "家賃、通信費、保険料、サブスク費用、食費、クレカ年会費、その他固定費から、毎月固定費合計、削減可能額、年間節約額、投資に回した場合の将来資産額を試算できます。",
  },
  retirement: {
    title: "【2026年対応】初心者向け老後資金シミュレーター｜3分で不足額計算",
    description: "\u73fe\u5728\u306e\u5e74\u9f62\u3001\u8caf\u84c4\u3001\u6bce\u6708\u306e\u7a4d\u7acb\u984d\u3001\u9000\u8077\u5f8c\u751f\u6d3b\u8cbb\u3001\u5e74\u91d1\u898b\u8fbc\u984d\u304b\u3089\u8001\u5f8c\u8cc7\u91d1\u306e\u4e0d\u8db3\u984d\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  education: {
    title: "【2026年対応】初心者向け教育費シミュレーター｜3分で必要額計算",
    description: "\u5b50\u3069\u3082\u306e\u4eba\u6570\u3001\u9032\u5b66\u30b3\u30fc\u30b9\u3001\u5927\u5b66\u9032\u5b66\u6709\u7121\u3001\u73fe\u5728\u306e\u8caf\u84c4\u984d\u3001\u6bce\u6708\u7a4d\u7acb\u984d\u304b\u3089\u5c06\u6765\u5fc5\u8981\u306a\u6559\u80b2\u8cbb\u3068\u4e0d\u8db3\u984d\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  "education-insurance": {
    title: "【2026年対応】初心者向け学資保険比較シミュレーター｜3分で受取額比較",
    description: "\u6bce\u6708\u7a4d\u7acb\u984d\u3001\u7a4d\u7acb\u5e74\u6570\u3001\u60f3\u5b9a\u5229\u56de\u308a\u3001\u5b66\u8cc7\u4fdd\u967a\u8fd4\u623b\u7387\u3001\u5b50\u3069\u3082\u306e\u5e74\u9f62\u3001\u5927\u5b66\u9032\u5b66\u4e88\u5b9a\u5e74\u9f62\u304b\u3089\u5b66\u8cc7\u4fdd\u967a\u3068\u901a\u5e38\u7a4d\u7acb\u6295\u8cc7\u3092\u6bd4\u8f03\u3067\u304d\u307e\u3059\u3002",
  },
  mortgage: {
    title: "【2026年対応】初心者向け住宅ローン返済シミュレーター｜3分で月額計算",
    description: "\u501f\u5165\u91d1\u984d\u3001\u982d\u91d1\u3001\u91d1\u5229\u3001\u8fd4\u6e08\u5e74\u6570\u3001\u30dc\u30fc\u30ca\u30b9\u8fd4\u6e08\u3001\u7e70\u4e0a\u8fd4\u6e08\u984d\u304b\u3089\u6bce\u6708\u8fd4\u6e08\u984d\u3001\u7dcf\u8fd4\u6e08\u984d\u3001\u5229\u606f\u7dcf\u984d\u3001\u5e74\u53ce\u306b\u5bfe\u3059\u308b\u8fd4\u6e08\u6bd4\u7387\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
};

const extraStyle = document.createElement("style");
extraStyle.textContent = `
  .faq-panel {
    display: grid;
    gap: 14px;
    margin-top: 16px;
    padding: 16px;
    border: 1px solid rgba(217, 222, 231, 0.92);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.92);
    box-shadow: var(--shadow);
  }

  .faq-panel h3 {
    margin: 0;
    font-size: 1.08rem;
    line-height: 1.3;
  }

  .faq-list {
    display: grid;
    gap: 10px;
  }

  .faq-list details {
    border: 1px solid var(--line);
    border-radius: 8px;
    background: #fbfcfe;
  }

  .faq-list summary {
    min-height: 44px;
    display: flex;
    align-items: center;
    padding: 10px 12px;
    font-weight: 800;
    cursor: pointer;
  }

  .faq-list p {
    padding: 0 12px 12px;
    color: var(--muted);
    font-size: 0.9rem;
    line-height: 1.65;
  }

  @media (min-width: 720px) {
    .tool-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .result-grid {
      grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
    }
  }

  .metric span.text-metric {
    font-size: 1rem;
    line-height: 1.45;
  }

  .top-search-panel {
    display: grid;
    gap: 14px;
    padding: 16px;
    border: 1px solid rgba(217, 222, 231, 0.92);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.96);
    box-shadow: var(--shadow);
  }

  .search-control {
    display: grid;
    gap: 10px;
  }

  .search-control input {
    width: 100%;
    min-height: 48px;
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: 0 12px;
    font-size: 1rem;
    background: #fff;
  }

  .search-actions,
  .quick-start-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 10px;
  }

  .search-actions a,
  .quick-start-grid a {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: 10px 12px;
    color: var(--text);
    text-align: center;
    text-decoration: none;
    font-weight: 800;
    background: #fbfcfe;
  }

  .search-actions a:hover,
  .quick-start-grid a:hover,
  .search-actions a:focus-visible,
  .quick-start-grid a:focus-visible {
    border-color: rgba(55, 111, 208, 0.4);
    background: rgba(232, 240, 254, 0.85);
  }

  .tool-card.is-hidden-by-search,
  .category-section.is-hidden-by-search {
    display: none;
  }

  .search-status {
    color: var(--muted);
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
document.head.appendChild(extraStyle);

document.body.innerHTML = `
  <main>
    <div class="app-shell">
      <header class="header">
        <h1>&#x8cc7;&#x7523;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h1>
        <p class="lead">&#x526f;&#x696d;&#x53ce;&#x5165;&#x3001;AI&#x6d3b;&#x7528;&#x3001;&#x7a0e;&#x91d1;&#x3001;FIRE&#x9054;&#x6210;&#x3001;&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x307e;&#x3067;&#x306e;&#x9053;&#x306e;&#x308a;&#x3092;&#x3001;&#x540c;&#x3058;&#x5165;&#x529b;&#x611f;&#x3067;&#x7d20;&#x65e9;&#x304f;&#x8a66;&#x305b;&#x308b;&#x8a08;&#x7b97;&#x30c4;&#x30fc;&#x30eb;&#x3067;&#x3059;&#x3002;</p>
        <nav class="tool-nav" aria-label="&#x30c4;&#x30fc;&#x30eb;&#x5207;&#x308a;&#x66ff;&#x3048;">
          <a href="#top" data-route="top">&#x30c8;&#x30c3;&#x30d7;</a>
          <a href="#side-income" data-route="side-income">&#x526f;&#x696d;&#x6708;&#x53ce;</a>
          <a href="#ai-hourly" data-route="ai-hourly">AI&#x526f;&#x696d;&#x6642;&#x7d66;</a>
          <a href="#ai-efficiency" data-route="ai-efficiency">AI副業効率化</a>
          <a href="#hourly-improvement" data-route="hourly-improvement">副業時給改善</a>
          <a href="#side-time-management" data-route="side-time-management">副業時間管理</a>
          <a href="#side-profit-margin" data-route="side-profit-margin">&#x526f;&#x696d;&#x5229;&#x76ca;&#x7387;</a>
          <a href="#take-home" data-route="take-home">&#x526f;&#x696d;&#x624b;&#x53d6;&#x308a;</a>
          <a href="#tax" data-route="tax">&#x7a0e;&#x91d1;&#x30fb;&#x9752;&#x8272;&#x7533;&#x544a;</a>
          <a href="#income-tax" data-route="income-tax">&#x526f;&#x696d;&#x6240;&#x5f97;&#x7a0e;</a>
          <a href="#resident-tax" data-route="resident-tax">&#x526f;&#x696d;&#x4f4f;&#x6c11;&#x7a0e;</a>
          <a href="#nisa" data-route="nisa">&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;</a>
          <a href="#nisa-withdrawal" data-route="nisa-withdrawal">NISA取り崩し</a>
          <a href="#credit-card-investment" data-route="credit-card-investment">&#x30af;&#x30ec;&#x30ab;&#x7a4d;&#x7acb;</a>
          <a href="#ideco" data-route="ideco">iDeCo&#x7bc0;&#x7a0e;</a>
          <a href="#dividend" data-route="dividend">&#x914d;&#x5f53;&#x91d1;</a>
          <a href="#dividend-etf" data-route="dividend-etf">配当ETF比較</a>
          <a href="#dividend-reinvestment" data-route="dividend-reinvestment">&#x914d;&#x5f53;&#x518d;&#x6295;&#x8cc7;</a>
          <a href="#dividend-life" data-route="dividend-life">配当生活達成</a>
          <a href="#fire" data-route="fire">FIRE&#x9054;&#x6210;</a>
          <a href="#employee-fire" data-route="employee-fire">&#x4f1a;&#x793e;&#x54e1;FIRE</a>
          <a href="#cash-flow" data-route="cash-flow">会社員キャッシュフロー</a>
          <a href="#side-fire" data-route="side-fire">&#x30b5;&#x30a4;&#x30c9;FIRE</a>
          <a href="#emergency-fund" data-route="emergency-fund">&#x751f;&#x6d3b;&#x9632;&#x885b;&#x8cc7;&#x91d1;</a>
          <a href="#fixed-cost-reduction" data-route="fixed-cost-reduction">固定費削減</a>
          <a href="#retirement" data-route="retirement">&#x8001;&#x5f8c;&#x8cc7;&#x91d1;</a>
          <a href="#education" data-route="education">&#x6559;&#x80b2;&#x8cbb;</a>
          <a href="#education-insurance" data-route="education-insurance">&#x5b66;&#x8cc7;&#x4fdd;&#x967a;</a>
          <a href="#mortgage" data-route="mortgage">&#x4f4f;&#x5b85;&#x30ed;&#x30fc;&#x30f3;</a>
        </nav>
      </header>

      <section class="view" data-view="top" aria-label="&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;&#x4e00;&#x89a7;">
        <section class="top-search-panel" aria-label="ツール検索">
          <section class="tool-heading">
            <h2>目的からツールを探す</h2>
            <p>副業、税金、FIRE、NISA、老後資金など、気になる言葉で28個のシミュレーターを絞り込めます。</p>
          </section>
          <div class="search-control">
            <label class="visually-hidden" for="topToolSearch">ツール検索</label>
            <input id="topToolSearch" type="search" placeholder="例: 副業 税金 FIRE NISA 老後 AI 固定費" autocomplete="off">
            <p class="search-status" id="topToolSearchStatus">28個のツールから検索できます。</p>
          </div>
          <div class="search-actions" aria-label="よく使う検索">
            <a href="#side-income">副業収入を計算</a>
            <a href="#take-home">手取りを確認</a>
            <a href="#nisa">NISAを試算</a>
            <a href="#fire">FIREを目指す</a>
          </div>
        </section>

        <section class="article-panel" aria-label="初心者おすすめ導線">
          <section class="tool-heading">
            <h2>初心者おすすめ導線</h2>
            <p>最初に見るツールを迷う場合は、目的別にこの順番で確認すると全体像をつかみやすくなります。</p>
          </section>
          <div class="quick-start-grid">
            <a href="#side-income">副業を始める</a>
            <a href="#ai-efficiency">AIで効率化する</a>
            <a href="#take-home">手取りを知る</a>
            <a href="#nisa">投資を始める</a>
            <a href="#fire">FIREを考える</a>
            <a href="#retirement">老後資金を確認</a>
          </div>
        </section>

        <section class="article-panel" aria-label="カテゴリ別ページ">
          <section class="tool-heading">
            <h2>カテゴリ別ページ</h2>
            <p>目的に近いカテゴリから、関連ツールと関連記事をまとめて確認できます。</p>
          </section>
          <div class="article-list">
            <a class="article-link" href="category-side-business.html">
              <strong>副業カテゴリ</strong>
              <span>副業収入、AI副業、手取り、会計、カード、効率化の記事へ移動</span>
            </a>
            <a class="article-link" href="category-tax.html">
              <strong>税金カテゴリ</strong>
              <span>所得税、住民税、青色申告、副業税金対策をまとめて確認</span>
            </a>
            <a class="article-link" href="category-investment.html">
              <strong>投資カテゴリ</strong>
              <span>新NISA、iDeCo、配当金、配当生活、証券口座比較へ移動</span>
            </a>
            <a class="article-link" href="category-fire.html">
              <strong>FIREカテゴリ</strong>
              <span>FIRE、会社員FIRE、サイドFIRE、配当生活を整理</span>
            </a>
            <a class="article-link" href="category-housing.html">
              <strong>住宅カテゴリ</strong>
              <span>住宅ローンと老後資金への影響を確認</span>
            </a>
            <a class="article-link" href="category-education.html">
              <strong>教育カテゴリ</strong>
              <span>教育費、学資保険比較、老後資金への影響を確認</span>
            </a>
            <a class="article-link" href="category-retirement.html">
              <strong>老後カテゴリ</strong>
              <span>老後資金、FIRE、iDeCo、新NISAをまとめて確認</span>
            </a>
          </div>
        </section>

        <section class="category-section" aria-label="&#x526f;&#x696d;&#x53ce;&#x76ca;&#x7cfb;">
          <div class="category-heading">
            <p class="eyebrow">Category 1</p>
            <h2>&#x526f;&#x696d;&#x53ce;&#x76ca;&#x7cfb;</h2>
          </div>
          <div class="tool-grid">
          <a class="tool-card" href="#side-income">
            <p class="eyebrow">Income</p>
            <h2>&#x526f;&#x696d;&#x6708;&#x53ce;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
            <p>&#x6642;&#x7d66;&#x3001;&#x4f5c;&#x696d;&#x6642;&#x9593;&#x3001;&#x6848;&#x4ef6;&#x6570;&#x3001;&#x7a0e;&#x7387;&#x304b;&#x3089;&#x3001;&#x6708;&#x53ce;&#x30fb;&#x5e74;&#x53ce;&#x30fb;&#x7a0e;&#x5f15;&#x5f8c;&#x306e;&#x76ee;&#x5b89;&#x3092;&#x8a08;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
            <div class="tool-meta">
              <span>&#x6708;&#x53ce;</span>
              <span>&#x5e74;&#x53ce;</span>
              <span>&#x7a0e;&#x5f15;&#x5f8c;</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#ai-hourly">
            <p class="eyebrow">AI Hourly</p>
            <h2>AI&#x526f;&#x696d;&#x6642;&#x7d66;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
            <p>&#x6848;&#x4ef6;&#x5358;&#x4fa1;&#x3001;&#x4f5c;&#x696d;&#x6642;&#x9593;&#x3001;&#x6708;&#x6848;&#x4ef6;&#x6570;&#x3001;AI&#x4f7f;&#x7528;&#x6709;&#x7121;&#x304b;&#x3089;&#x3001;&#x6642;&#x7d66;&#x3068;&#x6708;&#x53ce;&#x3001;AI&#x6d3b;&#x7528;&#x6642;&#x306e;&#x52b9;&#x7387;&#x6539;&#x5584;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
            <div class="tool-meta">
              <span>&#x6642;&#x7d66;</span>
              <span>&#x6708;&#x53ce;</span>
              <span>AI&#x52b9;&#x7387;</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#ai-efficiency">
            <p class="eyebrow">AI Efficiency</p>
            <h2>AI副業効率化シミュレーター</h2>
            <p>AIツール活用による作業時間削減、利益率改善、時給向上、年間追加利益の目安を試算します。</p>
            <div class="tool-meta">
              <span>予想時給</span>
              <span>削減時間</span>
              <span>追加利益</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#hourly-improvement">
            <p class="eyebrow">Hourly Improve</p>
            <h2>副業時給改善シミュレーター</h2>
            <p>副業売上、作業時間、経費、外注費、AI活用状況から、実質時給とAI導入後の改善余地を分析します。</p>
            <div class="tool-meta">
              <span>実質時給</span>
              <span>AI改善</span>
              <span>目標時給</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#side-time-management">
            <p class="eyebrow">Time</p>
            <h2>副業時間管理シミュレーター</h2>
            <p>本業、通勤、睡眠、家事、休日、副業時間から、副業を続けられる時間とAI時短による改善余地を分析します。</p>
            <div class="tool-meta">
              <span>自由時間</span>
              <span>継続可能性</span>
              <span>FIRE影響</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#side-profit-margin">
            <p class="eyebrow">Profit</p>
            <h2>&#x526f;&#x696d;&#x5229;&#x76ca;&#x7387;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
            <p>&#x526f;&#x696d;&#x58f2;&#x4e0a;&#x3001;&#x7d4c;&#x8cbb;&#x3001;&#x4f5c;&#x696d;&#x6642;&#x9593;&#x3001;&#x5e83;&#x544a;&#x8cbb;&#x3001;&#x5916;&#x6ce8;&#x8cbb;&#x304b;&#x3089;&#x3001;&#x5229;&#x76ca;&#x7387;&#x3068;&#x6642;&#x7d66;&#x52b9;&#x7387;&#x3092;&#x5206;&#x6790;&#x3057;&#x307e;&#x3059;&#x3002;</p>
            <div class="tool-meta">
              <span>&#x5229;&#x76ca;&#x984d;</span>
              <span>&#x5229;&#x76ca;&#x7387;</span>
              <span>&#x6642;&#x7d66;&#x52b9;&#x7387;</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          </div>
        </section>

        <section class="category-section" aria-label="&#x7a0e;&#x91d1;&#x7cfb;&#x30c4;&#x30fc;&#x30eb;">
          <div class="category-heading">
            <p class="eyebrow">Category 2</p>
            <h2>&#x7a0e;&#x91d1;&#x7cfb;&#x30c4;&#x30fc;&#x30eb;</h2>
          </div>
          <div class="tool-grid">
          <a class="tool-card" href="#tax">
            <p class="eyebrow">Tax</p>
            <h2>&#x526f;&#x696d;&#x7a0e;&#x91d1;&#x30fb;&#x9752;&#x8272;&#x7533;&#x544a;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
            <p>&#x5e74;&#x9593;&#x526f;&#x696d;&#x53ce;&#x5165;&#x3001;&#x7d4c;&#x8cbb;&#x3001;&#x6240;&#x5f97;&#x7a0e;&#x7387;&#x3001;&#x4f4f;&#x6c11;&#x7a0e;&#x7387;&#x3001;&#x9752;&#x8272;&#x7533;&#x544a;&#x63a7;&#x9664;&#x984d;&#x304b;&#x3089;&#x624b;&#x53d6;&#x308a;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
            <div class="tool-meta">
              <span>&#x8ab2;&#x7a0e;&#x6240;&#x5f97;</span>
              <span>&#x6240;&#x5f97;&#x7a0e;</span>
              <span>&#x624b;&#x53d6;&#x308a;</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#income-tax">
            <p class="eyebrow">Income Tax</p>
            <h2>&#x526f;&#x696d;&#x6240;&#x5f97;&#x7a0e;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
            <p>&#x5e74;&#x9593;&#x526f;&#x696d;&#x58f2;&#x4e0a;&#x3001;&#x7d4c;&#x8cbb;&#x3001;&#x9752;&#x8272;&#x7533;&#x544a;&#x63a7;&#x9664;&#x3001;&#x57fa;&#x790e;&#x63a7;&#x9664;&#x3001;&#x6240;&#x5f97;&#x7a0e;&#x7387;&#x304b;&#x3089;&#x3001;&#x6240;&#x5f97;&#x7a0e;&#x3068;&#x5fa9;&#x8208;&#x7279;&#x5225;&#x6240;&#x5f97;&#x7a0e;&#x306e;&#x76ee;&#x5b89;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
            <div class="tool-meta">
              <span>&#x6240;&#x5f97;&#x7a0e;</span>
              <span>&#x5fa9;&#x8208;&#x7a0e;</span>
              <span>&#x6708;&#x5e73;&#x5747;</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#resident-tax">
            <p class="eyebrow">Resident Tax</p>
            <h2>&#x526f;&#x696d;&#x4f4f;&#x6c11;&#x7a0e;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
            <p>&#x5e74;&#x9593;&#x526f;&#x696d;&#x58f2;&#x4e0a;&#x3001;&#x7d4c;&#x8cbb;&#x3001;&#x9752;&#x8272;&#x7533;&#x544a;&#x63a7;&#x9664;&#x3001;&#x57fa;&#x790e;&#x63a7;&#x9664;&#x3001;&#x4f4f;&#x6c11;&#x7a0e;&#x7387;&#x3001;&#x5747;&#x7b49;&#x5272;&#x984d;&#x304b;&#x3089;&#x4f4f;&#x6c11;&#x7a0e;&#x3068;&#x666e;&#x901a;&#x5fb4;&#x53ce;&#x306e;&#x6ce8;&#x610f;&#x70b9;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
            <div class="tool-meta">
              <span>&#x4f4f;&#x6c11;&#x7a0e;</span>
              <span>&#x666e;&#x901a;&#x5fb4;&#x53ce;</span>
              <span>&#x6708;&#x5e73;&#x5747;</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#take-home">
            <p class="eyebrow">Take Home</p>
            <h2>&#x526f;&#x696d;&#x624b;&#x53d6;&#x308a;&#x8a08;&#x7b97;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
            <p>&#x5e74;&#x9593;&#x526f;&#x696d;&#x58f2;&#x4e0a;&#x3001;&#x7d4c;&#x8cbb;&#x3001;&#x6240;&#x5f97;&#x7a0e;&#x7387;&#x3001;&#x4f4f;&#x6c11;&#x7a0e;&#x7387;&#x3001;&#x793e;&#x4f1a;&#x4fdd;&#x967a;&#x6599;&#x306e;&#x6709;&#x7121;&#x3001;&#x9752;&#x8272;&#x7533;&#x544a;&#x63a7;&#x9664;&#x984d;&#x304b;&#x3089;&#x6700;&#x7d42;&#x7684;&#x306a;&#x624b;&#x53d6;&#x308a;&#x984d;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
            <div class="tool-meta">
              <span>&#x6240;&#x5f97;</span>
              <span>&#x7a0e;&#x984d;</span>
              <span>&#x624b;&#x53d6;&#x308a;</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          </div>
        </section>

        <section class="category-section" aria-label="FIRE&#x7cfb;&#x30c4;&#x30fc;&#x30eb;">
          <div class="category-heading">
            <p class="eyebrow">Category 3</p>
            <h2>FIRE&#x7cfb;&#x30c4;&#x30fc;&#x30eb;</h2>
          </div>
          <div class="tool-grid">
          <a class="tool-card" href="#nisa">
            <p class="eyebrow">NISA</p>
            <h2>&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
            <p>&#x521d;&#x671f;&#x6295;&#x8cc7;&#x984d;&#x3001;&#x6bce;&#x6708;&#x7a4d;&#x7acb;&#x984d;&#x3001;&#x60f3;&#x5b9a;&#x5e74;&#x5229;&#x3001;&#x904b;&#x7528;&#x5e74;&#x6570;&#x3001;&#x76ee;&#x6a19;&#x91d1;&#x984d;&#x304b;&#x3089;&#x5c06;&#x6765;&#x8cc7;&#x7523;&#x984d;&#x3068;&#x904b;&#x7528;&#x76ca;&#x3001;&#x76ee;&#x6a19;&#x9054;&#x6210;&#x307e;&#x3067;&#x306e;&#x5e74;&#x6570;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
            <div class="tool-meta">
              <span>&#x5c06;&#x6765;&#x8cc7;&#x7523;</span>
              <span>&#x904b;&#x7528;&#x76ca;</span>
              <span>FIRE&#x76ee;&#x5b89;</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#nisa-withdrawal">
            <p class="eyebrow">NISA Withdrawal</p>
            <h2>NISA取り崩しシミュレーター</h2>
            <p>新NISAで運用した資産を、何年取り崩せるか、毎月いくら使えるか、老後資金やFIREとの関係まで試算します。</p>
            <div class="tool-meta">
              <span>取り崩し年数</span>
              <span>毎月可能額</span>
              <span>老後資金</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#credit-card-investment">
            <p class="eyebrow">Card Invest</p>
            <h2>&#x30af;&#x30ec;&#x30ab;&#x7a4d;&#x7acb;&#x6bd4;&#x8f03;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
            <p>&#x6bce;&#x6708;&#x7a4d;&#x7acb;&#x984d;&#x3001;&#x7a4d;&#x7acb;&#x5e74;&#x6570;&#x3001;&#x60f3;&#x5b9a;&#x5e74;&#x5229;&#x3001;&#x30af;&#x30ec;&#x30ab;&#x9084;&#x5143;&#x7387;&#x304b;&#x3089;&#x3001;&#x30dd;&#x30a4;&#x30f3;&#x30c8;&#x9084;&#x5143;&#x3068;&#x901a;&#x5e38;&#x7a4d;&#x7acb;&#x306e;&#x5dee;&#x3092;&#x6bd4;&#x8f03;&#x3057;&#x307e;&#x3059;&#x3002;</p>
            <div class="tool-meta">
              <span>&#x30dd;&#x30a4;&#x30f3;&#x30c8;</span>
              <span>&#x5dee;&#x984d;</span>
              <span>FIRE&#x76ee;&#x5b89;</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#ideco">
            <p class="eyebrow">iDeCo</p>
            <h2>iDeCo&#x7bc0;&#x7a0e;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
            <p>&#x5e74;&#x53ce;&#x3001;&#x8ab2;&#x7a0e;&#x6240;&#x5f97;&#x3001;&#x6240;&#x5f97;&#x7a0e;&#x7387;&#x3001;&#x4f4f;&#x6c11;&#x7a0e;&#x7387;&#x3001;&#x6bce;&#x6708;&#x306e;iDeCo&#x639b;&#x91d1;&#x304b;&#x3089;&#x3001;&#x5e74;&#x9593;&#x306e;&#x7bc0;&#x7a0e;&#x984d;&#x3068;&#x5c06;&#x6765;&#x8cc7;&#x7523;&#x306e;&#x76ee;&#x5b89;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
            <div class="tool-meta">
              <span>&#x7bc0;&#x7a0e;&#x984d;</span>
              <span>&#x5c06;&#x6765;&#x8cc7;&#x7523;</span>
              <span>&#x65b0;NISA&#x6bd4;&#x8f03;</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#fire">
            <p class="eyebrow">FIRE</p>
            <h2>FIRE&#x9054;&#x6210;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
            <p>&#x73fe;&#x5728;&#x8cc7;&#x7523;&#x3001;&#x6bce;&#x6708;&#x7a4d;&#x7acb;&#x984d;&#x3001;&#x60f3;&#x5b9a;&#x5e74;&#x5229;&#x3001;&#x76ee;&#x6a19;&#x8cc7;&#x7523;&#x3001;&#x5e74;&#x6570;&#x304b;&#x3089;&#x3001;&#x9054;&#x6210;&#x5e74;&#x6570;&#x3068;&#x5c06;&#x6765;&#x8cc7;&#x7523;&#x3092;&#x8a08;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
            <div class="tool-meta">
              <span>&#x9054;&#x6210;&#x5e74;&#x6570;</span>
              <span>&#x5c06;&#x6765;&#x8cc7;&#x7523;</span>
              <span>&#x7a4d;&#x7acb;&#x8a08;&#x753b;</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#employee-fire">
            <p class="eyebrow">Employee FIRE</p>
            <h2>&#x4f1a;&#x793e;&#x54e1;FIRE&#x5e74;&#x6570;&#x8a08;&#x7b97;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
            <p>&#x73fe;&#x5728;&#x8cc7;&#x7523;&#x3001;&#x7a4d;&#x7acb;&#x984d;&#x3001;&#x526f;&#x696d;&#x53ce;&#x5165;&#x3001;&#x914d;&#x5f53;&#x53ce;&#x5165;&#x304b;&#x3089;&#x3001;&#x4f1a;&#x793e;&#x54e1;&#x306e;FIRE&#x9054;&#x6210;&#x307e;&#x3067;&#x306e;&#x5e74;&#x6570;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
            <div class="tool-meta">
              <span>&#x9054;&#x6210;&#x5e74;&#x6570;</span>
              <span>&#x526f;&#x696d;&#x52b9;&#x679c;</span>
              <span>&#x30b5;&#x30a4;&#x30c9;FIRE&#x6bd4;&#x8f03;</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#cash-flow">
            <p class="eyebrow">Cash Flow</p>
            <h2>会社員キャッシュフローシミュレーター</h2>
            <p>給与収入、副業収入、家賃、食費、通信費、保険料、投資額、ローン返済額から、毎月収支とFIREへ向けた改善余地を分析します。</p>
            <div class="tool-meta">
              <span>毎月収支</span>
              <span>投資可能額</span>
              <span>固定費改善</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#dividend">
            <p class="eyebrow">Dividend</p>
            <h2>&#x914d;&#x5f53;&#x91d1;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
            <p>&#x521d;&#x671f;&#x6295;&#x8cc7;&#x984d;&#x3001;&#x6bce;&#x6708;&#x8ffd;&#x52a0;&#x6295;&#x8cc7;&#x984d;&#x3001;&#x60f3;&#x5b9a;&#x914d;&#x5f53;&#x5229;&#x56de;&#x308a;&#x304b;&#x3089;&#x3001;&#x5e74;&#x9593;&#x914d;&#x5f53;&#x91d1;&#x3068;&#x7d2f;&#x8a08;&#x914d;&#x5f53;&#x91d1;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
            <div class="tool-meta">
              <span>&#x5e74;&#x9593;&#x914d;&#x5f53;</span>
              <span>&#x7d2f;&#x8a08;&#x914d;&#x5f53;</span>
              <span>FIRE&#x76ee;&#x5b89;</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#dividend-etf">
            <p class="eyebrow">Dividend ETF</p>
            <h2>配当ETF比較シミュレーター</h2>
            <p>VYM、HDV、SPYD、VIGなどの高配当ETFを選び、配当収入、累計配当、最終資産額、FIREへの影響を比較します。</p>
            <div class="tool-meta">
              <span>ETF別比較</span>
              <span>年間配当</span>
              <span>新NISA目安</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#dividend-reinvestment">
            <p class="eyebrow">Reinvest</p>
            <h2>&#x914d;&#x5f53;&#x518d;&#x6295;&#x8cc7;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
            <p>&#x914d;&#x5f53;&#x91d1;&#x3092;&#x518d;&#x6295;&#x8cc7;&#x3057;&#x305f;&#x5834;&#x5408;&#x306e;&#x6700;&#x7d42;&#x8cc7;&#x7523;&#x984d;&#x3001;&#x7d2f;&#x8a08;&#x914d;&#x5f53;&#x91d1;&#x3001;&#x518d;&#x6295;&#x8cc7;&#x306b;&#x3088;&#x308b;&#x5897;&#x52a0;&#x984d;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
            <div class="tool-meta">
              <span>&#x6700;&#x7d42;&#x8cc7;&#x7523;</span>
              <span>&#x518d;&#x6295;&#x8cc7;&#x52b9;&#x679c;</span>
              <span>&#x65b0;NISA&#x6bd4;&#x8f03;</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#dividend-life">
            <p class="eyebrow">Dividend Life</p>
            <h2>配当生活達成シミュレーター</h2>
            <p>毎月生活費と配当利回りから、配当収入だけで生活費をまかなうための必要資産額と達成予想年を試算します。</p>
            <div class="tool-meta">
              <span>必要資産</span>
              <span>達成予想</span>
              <span>新NISA目安</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#side-fire">
            <p class="eyebrow">Side FIRE</p>
            <h2>&#x30b5;&#x30a4;&#x30c9;FIRE&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
            <p>&#x751f;&#x6d3b;&#x8cbb;&#x3001;&#x526f;&#x696d;&#x53ce;&#x5165;&#x3001;&#x914d;&#x5f53;&#x53ce;&#x5165;&#x3092;&#x8003;&#x616e;&#x3057;&#x3066;&#x3001;&#x5fc5;&#x8981;&#x8cc7;&#x7523;&#x984d;&#x3068;&#x30b5;&#x30a4;&#x30c9;FIRE&#x9054;&#x6210;&#x306e;&#x76ee;&#x5b89;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
            <div class="tool-meta">
              <span>&#x5fc5;&#x8981;&#x8cc7;&#x7523;</span>
              <span>&#x9054;&#x6210;&#x4e88;&#x60f3;</span>
              <span>&#x526f;&#x696d;&#x52b9;&#x679c;</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          </div>
        </section>

        <section class="category-section" aria-label="&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x7cfb;">
          <div class="category-heading">
            <p class="eyebrow">Category 4</p>
            <h2>&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x7cfb;</h2>
          </div>
          <div class="tool-grid">
          <a class="tool-card" href="#emergency-fund">
            <p class="eyebrow">Safety Fund</p>
            <h2>&#x751f;&#x6d3b;&#x9632;&#x885b;&#x8cc7;&#x91d1;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
            <p>&#x6bce;&#x6708;&#x751f;&#x6d3b;&#x8cbb;&#x3001;&#x5bb6;&#x65cf;&#x4eba;&#x6570;&#x3001;&#x96c7;&#x7528;&#x5f62;&#x614b;&#x304b;&#x3089;&#x3001;FIRE&#x3084;&#x6295;&#x8cc7;&#x306e;&#x524d;&#x306b;&#x78ba;&#x4fdd;&#x3057;&#x305f;&#x3044;&#x5b89;&#x5168;&#x8cc7;&#x91d1;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
            <div class="tool-meta">
              <span>&#x5fc5;&#x8981;&#x8cc7;&#x91d1;</span>
              <span>&#x4e0d;&#x8db3;&#x984d;</span>
              <span>FIRE&#x524d;&#x5b89;&#x5168;&#x8cc7;&#x91d1;</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#fixed-cost-reduction">
            <p class="eyebrow">Cost Cut</p>
            <h2>固定費削減シミュレーター</h2>
            <p>家賃、通信費、保険料、サブスク費用、食費、クレカ年会費から、削減可能額と年間節約額を試算します。</p>
            <div class="tool-meta">
              <span>固定費合計</span>
              <span>年間節約</span>
              <span>FIRE効果</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#retirement">
            <p class="eyebrow">Retirement</p>
            <h2>&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
            <p>&#x73fe;&#x5728;&#x306e;&#x5e74;&#x9f62;&#x30fb;&#x8caf;&#x84c4;&#x30fb;&#x6bce;&#x6708;&#x306e;&#x7a4d;&#x7acb;&#x984d;&#x304b;&#x3089;&#x3001;&#x9000;&#x8077;&#x6642;&#x70b9;&#x306e;&#x8cc7;&#x7523;&#x3068;&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x306e;&#x4e0d;&#x8db3;&#x984d;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
            <div class="tool-meta">
              <span>&#x9000;&#x8077;&#x6642;&#x8cc7;&#x7523;</span>
              <span>&#x4e0d;&#x8db3;&#x984d;</span>
              <span>&#x8ffd;&#x52a0;&#x7a4d;&#x7acb;</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#education">
            <p class="eyebrow">Education</p>
            <h2>&#x6559;&#x80b2;&#x8cbb;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
            <p>&#x5b50;&#x3069;&#x3082;&#x306e;&#x4eba;&#x6570;&#x3084;&#x9032;&#x5b66;&#x30b3;&#x30fc;&#x30b9;&#x304b;&#x3089;&#x3001;&#x5c06;&#x6765;&#x5fc5;&#x8981;&#x306a;&#x6559;&#x80b2;&#x8cbb;&#x3068;&#x6bce;&#x6708;&#x7a4d;&#x7acb;&#x306e;&#x4e0d;&#x8db3;&#x984d;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
            <div class="tool-meta">
              <span>&#x5fc5;&#x8981;&#x7dcf;&#x984d;</span>
              <span>&#x4e0d;&#x8db3;&#x984d;</span>
              <span>&#x5927;&#x5b66;&#x8cbb;&#x7528;</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#education-insurance">
            <p class="eyebrow">Education Insurance</p>
            <h2>&#x5b66;&#x8cc7;&#x4fdd;&#x967a;&#x6bd4;&#x8f03;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
            <p>&#x5b66;&#x8cc7;&#x4fdd;&#x967a;&#x306e;&#x53d7;&#x53d6;&#x984d;&#x3068;&#x901a;&#x5e38;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;&#x306e;&#x60f3;&#x5b9a;&#x8cc7;&#x7523;&#x984d;&#x3092;&#x6bd4;&#x8f03;&#x3057;&#x3001;&#x6559;&#x80b2;&#x8cbb;&#x4e0d;&#x8db3;&#x306e;&#x76ee;&#x5b89;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
            <div class="tool-meta">
              <span>&#x8fd4;&#x623b;&#x7387;</span>
              <span>&#x6295;&#x8cc7;&#x6bd4;&#x8f03;</span>
              <span>&#x6559;&#x80b2;&#x8cbb;</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#mortgage">
            <p class="eyebrow">Mortgage</p>
            <h2>&#x4f4f;&#x5b85;&#x30ed;&#x30fc;&#x30f3;&#x8fd4;&#x6e08;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
            <p>&#x501f;&#x5165;&#x91d1;&#x984d;&#x3001;&#x982d;&#x91d1;&#x3001;&#x91d1;&#x5229;&#x3001;&#x8fd4;&#x6e08;&#x5e74;&#x6570;&#x304b;&#x3089;&#x3001;&#x6bce;&#x6708;&#x8fd4;&#x6e08;&#x984d;&#x3068;&#x7dcf;&#x8fd4;&#x6e08;&#x984d;&#x3001;&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x3078;&#x306e;&#x5f71;&#x97ff;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
            <div class="tool-meta">
              <span>&#x6bce;&#x6708;&#x8fd4;&#x6e08;</span>
              <span>&#x5229;&#x606f;</span>
              <span>&#x8fd4;&#x6e08;&#x6bd4;&#x7387;</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>
          </div>
        </section>

        <section class="article-panel ranking-panel" aria-label="&#x4eba;&#x6c17;&#x30c4;&#x30fc;&#x30eb;">
          <section class="tool-heading">
            <h2>&#x4eba;&#x6c17;&#x30c4;&#x30fc;&#x30eb;</h2>
            <p>&#x76ee;&#x7684;&#x304c;&#x6c7a;&#x307e;&#x3063;&#x3066;&#x3044;&#x306a;&#x3044;&#x5834;&#x5408;&#x306f;&#x3001;&#x3088;&#x304f;&#x4f7f;&#x3046;&#x30c4;&#x30fc;&#x30eb;&#x304b;&#x3089;&#x8a66;&#x305b;&#x307e;&#x3059;&#x3002;</p>
          </section>
          <ol class="ranking-list">
            <li><a href="#side-income"><strong>&#x526f;&#x696d;&#x6708;&#x53ce;</strong><span>&#x6708;&#x53ce;&#x30fb;&#x5e74;&#x53ce;&#x306e;&#x5168;&#x4f53;&#x611f;&#x3092;&#x5148;&#x306b;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#ai-efficiency"><strong>AI副業効率化</strong><span>AI活用で時給、削減時間、年間追加利益を確認</span></a></li>
            <li><a href="#hourly-improvement"><strong>副業時給改善</strong><span>売上、作業時間、AI活用から実質時給を改善</span></a></li>
            <li><a href="#side-time-management"><strong>副業時間管理</strong><span>本業、睡眠、家事、副業時間から継続可能性を確認</span></a></li>
            <li><a href="#side-profit-margin"><strong>&#x526f;&#x696d;&#x5229;&#x76ca;&#x7387;</strong><span>&#x58f2;&#x4e0a;&#x30fb;&#x7d4c;&#x8cbb;&#x30fb;&#x4f5c;&#x696d;&#x6642;&#x9593;&#x304b;&#x3089;&#x5229;&#x76ca;&#x7387;&#x3092;&#x5206;&#x6790;</span></a></li>
            <li><a href="#take-home"><strong>&#x526f;&#x696d;&#x624b;&#x53d6;&#x308a;</strong><span>&#x7a0e;&#x91d1;&#x5f8c;&#x306e;&#x624b;&#x5143;&#x306b;&#x6b8b;&#x308b;&#x91d1;&#x984d;&#x3092;&#x8a66;&#x7b97;</span></a></li>
            <li><a href="#income-tax"><strong>&#x526f;&#x696d;&#x6240;&#x5f97;&#x7a0e;</strong><span>&#x6240;&#x5f97;&#x7a0e;&#x3068;&#x5fa9;&#x8208;&#x7279;&#x5225;&#x6240;&#x5f97;&#x7a0e;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#resident-tax"><strong>&#x526f;&#x696d;&#x4f4f;&#x6c11;&#x7a0e;</strong><span>&#x666e;&#x901a;&#x5fb4;&#x53ce;&#x306e;&#x6ce8;&#x610f;&#x70b9;&#x3068;&#x7a0e;&#x984d;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#nisa"><strong>&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;</strong><span>&#x7a4d;&#x7acb;&#x306e;&#x5c06;&#x6765;&#x984d;&#x3068;&#x904b;&#x7528;&#x76ca;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#nisa-withdrawal"><strong>NISA取り崩し</strong><span>老後に何年取り崩せるかと毎月使える額を確認</span></a></li>
            <li><a href="#credit-card-investment"><strong>&#x30af;&#x30ec;&#x30ab;&#x7a4d;&#x7acb;&#x6bd4;&#x8f03;</strong><span>&#x30dd;&#x30a4;&#x30f3;&#x30c8;&#x9084;&#x5143;&#x3068;&#x901a;&#x5e38;&#x7a4d;&#x7acb;&#x306e;&#x5dee;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#ideco"><strong>iDeCo&#x7bc0;&#x7a0e;</strong><span>&#x6bce;&#x6708;&#x306e;&#x639b;&#x91d1;&#x304b;&#x3089;&#x7bc0;&#x7a0e;&#x984d;&#x3068;&#x5c06;&#x6765;&#x8cc7;&#x7523;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#dividend"><strong>&#x914d;&#x5f53;&#x91d1;</strong><span>&#x5e74;&#x9593;&#x914d;&#x5f53;&#x91d1;&#x3068;&#x6708;&#x5e73;&#x5747;&#x914d;&#x5f53;&#x91d1;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#dividend-etf"><strong>配当ETF比較</strong><span>複数ETFの配当収入と資産成長を比較</span></a></li>
            <li><a href="#dividend-reinvestment"><strong>&#x914d;&#x5f53;&#x518d;&#x6295;&#x8cc7;</strong><span>&#x914d;&#x5f53;&#x3092;&#x518d;&#x6295;&#x8cc7;&#x3057;&#x305f;&#x5834;&#x5408;&#x306e;&#x8cc7;&#x7523;&#x6210;&#x9577;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#dividend-life"><strong>配当生活達成</strong><span>生活費を配当収入だけでまかなう必要資産を確認</span></a></li>
            <li><a href="#fire"><strong>FIRE&#x9054;&#x6210;</strong><span>&#x76ee;&#x6a19;&#x8cc7;&#x7523;&#x307e;&#x3067;&#x306e;&#x5e74;&#x6570;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#employee-fire"><strong>&#x4f1a;&#x793e;&#x54e1;FIRE</strong><span>&#x7a4d;&#x7acb;&#x3001;&#x526f;&#x696d;&#x3001;&#x914d;&#x5f53;&#x3092;&#x542b;&#x3081;&#x3066;&#x9054;&#x6210;&#x5e74;&#x6570;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#cash-flow"><strong>会社員キャッシュフロー</strong><span>毎月収支、投資可能額、固定費改善余地を確認</span></a></li>
            <li><a href="#side-fire"><strong>&#x30b5;&#x30a4;&#x30c9;FIRE</strong><span>&#x526f;&#x696d;&#x53ce;&#x5165;&#x3068;&#x914d;&#x5f53;&#x53ce;&#x5165;&#x3092;&#x542b;&#x3081;&#x3066;&#x9054;&#x6210;&#x53ef;&#x80fd;&#x6027;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#emergency-fund"><strong>&#x751f;&#x6d3b;&#x9632;&#x885b;&#x8cc7;&#x91d1;</strong><span>&#x6295;&#x8cc7;&#x3084;FIRE&#x306e;&#x524d;&#x306b;&#x78ba;&#x4fdd;&#x3057;&#x305f;&#x3044;&#x5b89;&#x5168;&#x8cc7;&#x91d1;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#fixed-cost-reduction"><strong>固定費削減</strong><span>毎月の固定費から年間節約額と投資効果を確認</span></a></li>
            <li><a href="#retirement"><strong>&#x8001;&#x5f8c;&#x8cc7;&#x91d1;</strong><span>&#x9000;&#x8077;&#x6642;&#x8cc7;&#x7523;&#x3068;&#x4e0d;&#x8db3;&#x984d;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#education-insurance"><strong>&#x5b66;&#x8cc7;&#x4fdd;&#x967a;&#x6bd4;&#x8f03;</strong><span>&#x5b66;&#x8cc7;&#x4fdd;&#x967a;&#x3068;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;&#x306e;&#x53d7;&#x53d6;&#x984d;&#x3092;&#x6bd4;&#x8f03;</span></a></li>
            <li><a href="#mortgage"><strong>&#x4f4f;&#x5b85;&#x30ed;&#x30fc;&#x30f3;</strong><span>&#x6bce;&#x6708;&#x8fd4;&#x6e08;&#x984d;&#x3068;&#x5e74;&#x53ce;&#x306b;&#x5bfe;&#x3059;&#x308b;&#x8fd4;&#x6e08;&#x6bd4;&#x7387;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
          </ol>
        </section>

        <section class="article-panel" aria-label="最新記事">
          <section class="tool-heading">
            <h2>最新記事</h2>
            <p>副業、税金、FIRE、NISA、iDeCo、老後資金の基礎を、ツールの結果と合わせて確認できます。</p>
          </section>
          <div class="article-list">
            <a class="article-link" href="article-side-income.html">
              <strong>&#x526f;&#x696d;&#x6708;&#x53ce;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;&#x306e;&#x4f7f;&#x3044;&#x65b9;</strong>
              <span>&#x6642;&#x7d66;&#x3001;&#x4f5c;&#x696d;&#x6642;&#x9593;&#x3001;&#x6848;&#x4ef6;&#x6570;&#x3092;&#x4f7f;&#x3063;&#x305f;&#x6708;&#x53ce;&#x306e;&#x898b;&#x65b9;</span>
            </a>
            <a class="article-link" href="article-fire-strategy.html">
              <strong>FIRE&#x9054;&#x6210;&#x306e;&#x57fa;&#x672c;&#x6226;&#x7565;</strong>
              <span>&#x76ee;&#x6a19;&#x8cc7;&#x7523;&#x3001;&#x7a4d;&#x7acb;&#x3001;&#x5229;&#x56de;&#x308a;&#x3092;&#x73fe;&#x5b9f;&#x7684;&#x306b;&#x8003;&#x3048;&#x308b;</span>
            </a>
            <a class="article-link" href="article-side-tax.html">
              <strong>&#x526f;&#x696d;&#x7a0e;&#x91d1;&#x306e;&#x57fa;&#x790e;&#x77e5;&#x8b58;</strong>
              <span>&#x53ce;&#x5165;&#x3001;&#x7d4c;&#x8cbb;&#x3001;&#x6240;&#x5f97;&#x3001;&#x9752;&#x8272;&#x7533;&#x544a;&#x306e;&#x5165;&#x308a;&#x53e3;</span>
            </a>
            <a class="article-link" href="article-ai-side-business.html">
              <strong>AI&#x526f;&#x696d;&#x3067;&#x53ce;&#x76ca;&#x3092;&#x4e0a;&#x3052;&#x308b;&#x65b9;&#x6cd5;</strong>
              <span>AI&#x3092;&#x4f7f;&#x3063;&#x3066;&#x4f5c;&#x696d;&#x6642;&#x9593;&#x3092;&#x77ed;&#x7e2e;&#x3057;&#x3001;&#x6642;&#x7d66;&#x3092;&#x9ad8;&#x3081;&#x308b;&#x8003;&#x3048;&#x65b9;</span>
            </a>
            <a class="article-link" href="article-side-income-50000.html">
              <strong>&#x526f;&#x696d;&#x3067;&#x6708;5&#x4e07;&#x5186;&#x3092;&#x7a3c;&#x3050;&#x65b9;&#x6cd5;</strong>
              <span>&#x6642;&#x9593;&#x8a2d;&#x8a08;&#x3001;&#x6848;&#x4ef6;&#x9078;&#x3073;&#x3001;&#x624b;&#x53d6;&#x308a;&#x7ba1;&#x7406;&#x306e;&#x5165;&#x308a;&#x53e3;</span>
            </a>
            <a class="article-link" href="article-side-income-100000.html">
              <strong>&#x526f;&#x696d;&#x3067;&#x6708;10&#x4e07;&#x5186;&#x3092;&#x76ee;&#x6307;&#x3059;&#x65b9;&#x6cd5;</strong>
              <span>&#x5358;&#x4fa1;&#x30a2;&#x30c3;&#x30d7;&#x3001;&#x7d99;&#x7d9a;&#x6848;&#x4ef6;&#x3001;&#x7a0e;&#x91d1;&#x7ba1;&#x7406;&#x306e;&#x8003;&#x3048;&#x65b9;</span>
            </a>
            <a class="article-link" href="article-resident-tax-guide.html">
              <strong>&#x526f;&#x696d;&#x306e;&#x4f4f;&#x6c11;&#x7a0e;&#x5b8c;&#x5168;&#x30ac;&#x30a4;&#x30c9;</strong>
              <span>&#x6240;&#x5f97;&#x5272;&#x3001;&#x5747;&#x7b49;&#x5272;&#x3001;&#x666e;&#x901a;&#x5fb4;&#x53ce;&#x306e;&#x6ce8;&#x610f;&#x70b9;</span>
            </a>
            <a class="article-link" href="article-income-tax-guide.html">
              <strong>&#x526f;&#x696d;&#x306e;&#x6240;&#x5f97;&#x7a0e;&#x5b8c;&#x5168;&#x30ac;&#x30a4;&#x30c9;</strong>
              <span>&#x58f2;&#x4e0a;&#x3001;&#x7d4c;&#x8cbb;&#x3001;&#x63a7;&#x9664;&#x3001;&#x5fa9;&#x8208;&#x7279;&#x5225;&#x6240;&#x5f97;&#x7a0e;&#x3092;&#x6574;&#x7406;</span>
            </a>
            <a class="article-link" href="article-blue-return-start.html">
              <strong>&#x9752;&#x8272;&#x7533;&#x544a;&#x306e;&#x59cb;&#x3081;&#x65b9;</strong>
              <span>&#x5c4a;&#x51fa;&#x3001;&#x5e33;&#x7c3f;&#x3001;&#x63a7;&#x9664;&#x3001;&#x4f1a;&#x8a08;&#x7ba1;&#x7406;&#x306e;&#x57fa;&#x672c;</span>
            </a>
            <a class="article-link" href="article-company-side-tax-saving.html">
              <strong>&#x4f1a;&#x793e;&#x54e1;&#x306e;&#x526f;&#x696d;&#x7a0e;&#x91d1;&#x5bfe;&#x7b56;</strong>
              <span>&#x7d4c;&#x8cbb;&#x7ba1;&#x7406;&#x3001;&#x4f4f;&#x6c11;&#x7a0e;&#x3001;&#x7d0d;&#x7a0e;&#x8cc7;&#x91d1;&#x306e;&#x6e96;&#x5099;</span>
            </a>
            <a class="article-link" href="article-fire-basic.html">
              <strong>FIRE&#x3068;&#x306f;&#x4f55;&#x304b;</strong>
              <span>&#x5fc5;&#x8981;&#x8cc7;&#x7523;&#x3001;4%&#x30eb;&#x30fc;&#x30eb;&#x3001;&#x30b5;&#x30a4;&#x30c9;FIRE&#x3092;&#x89e3;&#x8aac;</span>
            </a>
            <a class="article-link" href="article-new-nisa-start.html">
              <strong>&#x65b0;NISA&#x306e;&#x59cb;&#x3081;&#x65b9;</strong>
              <span>&#x3064;&#x307f;&#x305f;&#x3066;&#x6295;&#x8cc7;&#x67a0;&#x3001;&#x6210;&#x9577;&#x6295;&#x8cc7;&#x67a0;&#x3001;&#x7a4d;&#x7acb;&#x984d;&#x306e;&#x6c7a;&#x3081;&#x65b9;</span>
            </a>
            <a class="article-link" href="article-ideco-start.html">
              <strong>iDeCo&#x306e;&#x59cb;&#x3081;&#x65b9;</strong>
              <span>&#x7bc0;&#x7a0e;&#x52b9;&#x679c;&#x3001;&#x639b;&#x91d1;&#x3001;&#x65b0;NISA&#x3068;&#x306e;&#x4f7f;&#x3044;&#x5206;&#x3051;</span>
            </a>
            <a class="article-link" href="article-retirement-2000.html">
              <strong>&#x8001;&#x5f8c;&#x8cc7;&#x91d1;2000&#x4e07;&#x5186;&#x554f;&#x984c;&#x3068;&#x306f;</strong>
              <span>&#x5e74;&#x91d1;&#x3001;&#x751f;&#x6d3b;&#x8cbb;&#x3001;&#x5fc5;&#x8981;&#x984d;&#x306e;&#x8a66;&#x7b97;&#x65b9;&#x6cd5;</span>
            </a>
          </div>
        </section>

        <section class="article-panel" aria-label="おすすめ比較記事">
          <section class="tool-heading">
            <h2>おすすめ比較記事</h2>
            <p>副業や投資を始める前に、口座、会計ソフト、カード、AIツールを比較して準備できます。</p>
          </section>
          <div class="article-list">
            <a class="article-link" href="article-rakuten-sbi-securities-comparison.html">
              <strong>&#x697d;&#x5929;&#x8a3c;&#x5238; vs SBI&#x8a3c;&#x5238; &#x5b8c;&#x5168;&#x6bd4;&#x8f03;</strong>
              <span>&#x65b0;NISA&#x3001;&#x30af;&#x30ec;&#x30ab;&#x7a4d;&#x7acb;&#x3001;&#x9ad8;&#x914d;&#x5f53;&#x6295;&#x8cc7;&#x3092;&#x521d;&#x5fc3;&#x8005;&#x5411;&#x3051;&#x306b;&#x6574;&#x7406;</span>
            </a>
            <a class="article-link" href="article-securities-account-comparison.html">
              <strong>&#x521d;&#x5fc3;&#x8005;&#x5411;&#x3051;&#x304a;&#x3059;&#x3059;&#x3081;&#x8a3c;&#x5238;&#x53e3;&#x5ea7;&#x6bd4;&#x8f03;</strong>
              <span>NISA&#x5bfe;&#x5fdc;&#x3001;&#x624b;&#x6570;&#x6599;&#x3001;&#x30dd;&#x30a4;&#x30f3;&#x30c8;&#x9023;&#x643a;&#x3092;&#x521d;&#x5fc3;&#x8005;&#x5411;&#x3051;&#x306b;&#x6574;&#x7406;</span>
            </a>
            <a class="article-link" href="article-accounting-software-comparison.html">
              <strong>&#x526f;&#x696d;&#x5411;&#x3051;&#x304a;&#x3059;&#x3059;&#x3081;&#x4f1a;&#x8a08;&#x30bd;&#x30d5;&#x30c8;&#x6bd4;&#x8f03;</strong>
              <span>&#x78ba;&#x5b9a;&#x7533;&#x544a;&#x3001;&#x9752;&#x8272;&#x7533;&#x544a;&#x3001;&#x81ea;&#x52d5;&#x9023;&#x643a;&#x306e;&#x9078;&#x3073;&#x65b9;</span>
            </a>
            <a class="article-link" href="article-credit-card-comparison.html">
              <strong>&#x526f;&#x696d;&#x5411;&#x3051;&#x304a;&#x3059;&#x3059;&#x3081;&#x30af;&#x30ec;&#x30b8;&#x30c3;&#x30c8;&#x30ab;&#x30fc;&#x30c9;&#x6bd4;&#x8f03;</strong>
              <span>&#x7d4c;&#x8cbb;&#x7ba1;&#x7406;&#x3001;&#x660e;&#x7d30;&#x5206;&#x96e2;&#x3001;&#x4f1a;&#x8a08;&#x30bd;&#x30d5;&#x30c8;&#x9023;&#x643a;&#x3092;&#x78ba;&#x8a8d;</span>
            </a>
            <a class="article-link" href="article-ai-tools-comparison.html">
              <strong>&#x526f;&#x696d;&#x52b9;&#x7387;&#x5316;&#x304a;&#x3059;&#x3059;&#x3081;AI&#x30c4;&#x30fc;&#x30eb;&#x6bd4;&#x8f03;</strong>
              <span>&#x8abf;&#x67fb;&#x3001;&#x6587;&#x7ae0;&#x4f5c;&#x6210;&#x3001;&#x8cc7;&#x6599;&#x4f5c;&#x6210;&#x3092;AI&#x3067;&#x6642;&#x77ed;</span>
            </a>
          </div>
        </section>
      </section>

      <section class="view" data-view="side-income" aria-label="&#x526f;&#x696d;&#x6708;&#x53ce;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;">
        <section class="tool-heading">
          <h2>&#x526f;&#x696d;&#x6708;&#x53ce;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
          <p>&#x6642;&#x7d66;&#x3001;&#x6708;&#x306e;&#x4f5c;&#x696d;&#x6642;&#x9593;&#x3001;&#x6848;&#x4ef6;&#x6570;&#x3001;&#x7a0e;&#x7387;&#x3092;&#x5165;&#x308c;&#x308b;&#x3068;&#x3001;&#x6708;&#x53ce;&#x30fb;&#x5e74;&#x53ce;&#x30fb;&#x7a0e;&#x5f15;&#x5f8c;&#x306e;&#x76ee;&#x5b89;&#x304c;&#x3059;&#x3050;&#x306b;&#x66f4;&#x65b0;&#x3055;&#x308c;&#x307e;&#x3059;&#x3002;</p>
        </section>

        <section class="workspace" aria-label="&#x526f;&#x696d;&#x53ce;&#x5165;&#x306e;&#x8a08;&#x7b97;">
          <form class="input-panel" id="sideIncomeForm">
            <div class="field">
              <label for="hourly">&#x6642;&#x7d66; <span class="unit">&#x5186;</span></label>
              <input id="hourly" name="hourly" type="number" inputmode="numeric" min="0" max="100000" step="100" value="2000" required aria-describedby="hourlyError">
              <p class="error" id="hourlyError"></p>
            </div>
            <div class="field">
              <label for="hours">&#x4f5c;&#x696d;&#x6642;&#x9593; <span class="unit">&#x6642;&#x9593; / &#x6708;&#x30fb;1&#x6848;&#x4ef6;</span></label>
              <input id="hours" name="hours" type="number" inputmode="decimal" min="0" max="744" step="0.5" value="20" required aria-describedby="hoursError">
              <p class="error" id="hoursError"></p>
            </div>
            <div class="field">
              <label for="projects">&#x6848;&#x4ef6;&#x6570; <span class="unit">&#x4ef6; / &#x6708;</span></label>
              <input id="projects" name="projects" type="number" inputmode="numeric" min="0" max="100" step="1" value="3" required aria-describedby="projectsError">
              <p class="error" id="projectsError"></p>
            </div>
            <div class="field">
              <label for="tax">&#x7a0e;&#x7387; <span class="unit">%</span></label>
              <input id="tax" name="tax" type="number" inputmode="decimal" min="0" max="100" step="0.1" value="20" required aria-describedby="taxError">
              <p class="error" id="taxError"></p>
            </div>
            <div class="actions">
              <button type="reset">&#x30ea;&#x30bb;&#x30c3;&#x30c8;</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">&#x6708;&#x53ce;</p>
              <p class="amount" id="monthly">0&#x5186;</p>
            </div>
            <p class="notice" id="incomeNotice">&#x5165;&#x529b;&#x3092;&#x78ba;&#x8a8d;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;&#x30a8;&#x30e9;&#x30fc;&#x304c;&#x3042;&#x308b;&#x9805;&#x76ee;&#x306f;&#x8d64;&#x304f;&#x8868;&#x793a;&#x3055;&#x308c;&#x307e;&#x3059;&#x3002;</p>
            <div class="result-grid">
              <div class="metric">
                <strong>&#x5e74;&#x53ce;</strong>
                <span class="accent-blue" id="yearly">0&#x5186;</span>
                <small>&#x6708;&#x53ce; &#xd7; 12</small>
              </div>
              <div class="metric">
                <strong>&#x7a0e;&#x5f15;&#x5f8c; / &#x6708;</strong>
                <span class="accent-green" id="netMonthly">0&#x5186;</span>
                <small>&#x6708;&#x53ce;&#x304b;&#x3089;&#x7a0e;&#x7387;&#x5206;&#x3092;&#x5dee;&#x3057;&#x5f15;&#x304d;</small>
              </div>
              <div class="metric">
                <strong>&#x7a0e;&#x5f15;&#x5f8c; / &#x5e74;</strong>
                <span class="accent-amber" id="netYearly">0&#x5186;</span>
                <small>&#x7a0e;&#x5f15;&#x5f8c;&#x6708;&#x53ce; &#xd7; 12</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="&#x526f;&#x696d;&#x6708;&#x53ce;FAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>&#x6708;&#x53ce;&#x306f;&#x3069;&#x3046;&#x8a08;&#x7b97;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x6642;&#x7d66;&#x306b;&#x6708;&#x306e;&#x4f5c;&#x696d;&#x6642;&#x9593;&#x3068;&#x6848;&#x4ef6;&#x6570;&#x3092;&#x639b;&#x3051;&#x3066;&#x6982;&#x7b97;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x3002;&#x7a0e;&#x5f15;&#x5f8c;&#x306e;&#x91d1;&#x984d;&#x306f;&#x5165;&#x529b;&#x3057;&#x305f;&#x7a0e;&#x7387;&#x3092;&#x5dee;&#x3057;&#x5f15;&#x3044;&#x305f;&#x76ee;&#x5b89;&#x3067;&#x3059;&#x3002;</p>
            </details>
            <details>
              <summary>&#x7a0e;&#x7387;&#x306f;&#x4f55;%&#x3067;&#x5165;&#x308c;&#x308c;&#x3070;&#x3044;&#x3044;&#x3067;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x6240;&#x5f97;&#x7a0e;&#x3068;&#x4f4f;&#x6c11;&#x7a0e;&#x3092;&#x5408;&#x308f;&#x305b;&#x305f;&#x6982;&#x7b97;&#x3068;&#x3057;&#x3066;&#x3001;&#x307e;&#x305a;&#x306f;20%&#x524d;&#x5f8c;&#x3067;&#x8a66;&#x3057;&#x3001;&#x6240;&#x5f97;&#x3084;&#x63a7;&#x9664;&#x306b;&#x5408;&#x308f;&#x305b;&#x3066;&#x8abf;&#x6574;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;</p>
            </details>
            <details>
              <summary>&#x624b;&#x53d6;&#x308a;&#x3092;&#x3088;&#x308a;&#x8a73;&#x3057;&#x304f;&#x898b;&#x308b;&#x306b;&#x306f;&#xFF1F;</summary>
              <p>&#x7d4c;&#x8cbb;&#x3084;&#x9752;&#x8272;&#x7533;&#x544a;&#x63a7;&#x9664;&#x3082;&#x53cd;&#x6620;&#x3057;&#x305f;&#x3044;&#x5834;&#x5408;&#x306f;&#x3001;&#x526f;&#x696d;&#x624b;&#x53d6;&#x308a;&#x8a08;&#x7b97;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;&#x3084;&#x7a0e;&#x91d1;&#x7cfb;&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x4f75;&#x7528;&#x3059;&#x308b;&#x3068;&#x5168;&#x4f53;&#x50cf;&#x304c;&#x898b;&#x3048;&#x3084;&#x3059;&#x304f;&#x306a;&#x308a;&#x307e;&#x3059;&#x3002;</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="&#x526f;&#x696d;&#x6708;&#x53ce;&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;">
          <section class="tool-heading">
            <h2>&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;</h2>
            <p>&#x526f;&#x696d;&#x306e;&#x53ce;&#x76ca;&#x3092;&#x3001;&#x6642;&#x7d66;&#x30fb;&#x624b;&#x53d6;&#x308a;&#x30fb;&#x7a0e;&#x91d1;&#x306e;&#x89b3;&#x70b9;&#x304b;&#x3089;&#x78ba;&#x8a8d;&#x3067;&#x304d;&#x307e;&#x3059;&#x3002;</p>
          </section>
          <div class="related-links">
            <a href="#ai-hourly">AI&#x526f;&#x696d;&#x6642;&#x7d66;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#take-home">&#x526f;&#x696d;&#x624b;&#x53d6;&#x308a;&#x8a08;&#x7b97;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#tax">&#x526f;&#x696d;&#x7a0e;&#x91d1;&#x30fb;&#x9752;&#x8272;&#x7533;&#x544a;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="ai-hourly" aria-label="AI&#x526f;&#x696d;&#x6642;&#x7d66;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;">
        <section class="tool-heading">
          <h2>AI&#x526f;&#x696d;&#x6642;&#x7d66;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
          <p>&#x6848;&#x4ef6;&#x5358;&#x4fa1;&#x3001;&#x4f5c;&#x696d;&#x6642;&#x9593;&#x3001;&#x6708;&#x6848;&#x4ef6;&#x6570;&#x3001;AI&#x4f7f;&#x7528;&#x6709;&#x7121;&#x3092;&#x5165;&#x308c;&#x308b;&#x3068;&#x3001;&#x6642;&#x7d66;&#x30fb;&#x6708;&#x53ce;&#x30fb;AI&#x6d3b;&#x7528;&#x6642;&#x306e;&#x52b9;&#x7387;&#x6539;&#x5584;&#x306e;&#x76ee;&#x5b89;&#x304c;&#x3059;&#x3050;&#x306b;&#x66f4;&#x65b0;&#x3055;&#x308c;&#x307e;&#x3059;&#x3002;</p>
        </section>

        <section class="workspace" aria-label="AI&#x526f;&#x696d;&#x6642;&#x7d66;&#x306e;&#x8a08;&#x7b97;">
          <form class="input-panel" id="aiHourlyForm">
            <div class="field">
              <label for="projectPrice">&#x6848;&#x4ef6;&#x5358;&#x4fa1; <span class="unit">&#x5186;</span></label>
              <input id="projectPrice" name="projectPrice" type="number" inputmode="numeric" min="0" max="100000000" step="1000" value="50000" required aria-describedby="projectPriceError">
              <p class="error" id="projectPriceError"></p>
            </div>
            <div class="field">
              <label for="projectHours">&#x4f5c;&#x696d;&#x6642;&#x9593; <span class="unit">&#x6642;&#x9593; / 1&#x6848;&#x4ef6;</span></label>
              <input id="projectHours" name="projectHours" type="number" inputmode="decimal" min="0.1" max="1000" step="0.5" value="10" required aria-describedby="projectHoursError">
              <p class="error" id="projectHoursError"></p>
            </div>
            <div class="field">
              <label for="monthlyAiProjects">&#x6708;&#x6848;&#x4ef6;&#x6570; <span class="unit">&#x4ef6; / &#x6708;</span></label>
              <input id="monthlyAiProjects" name="monthlyAiProjects" type="number" inputmode="numeric" min="0" max="100" step="1" value="4" required aria-describedby="monthlyAiProjectsError">
              <p class="error" id="monthlyAiProjectsError"></p>
            </div>
            <label class="check-field" for="aiEnabled">
              <input id="aiEnabled" name="aiEnabled" type="checkbox" checked>
              <span>AI&#x3092;&#x4f7f;&#x7528;&#x3059;&#x308b;</span>
            </label>
            <div class="actions">
              <button type="reset">&#x30ea;&#x30bb;&#x30c3;&#x30c8;</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">&#x6642;&#x7d66;</p>
              <p class="amount" id="aiHourlyRate">0&#x5186;</p>
            </div>
            <p class="notice" id="aiHourlyNotice">&#x5165;&#x529b;&#x3092;&#x78ba;&#x8a8d;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;&#x30a8;&#x30e9;&#x30fc;&#x304c;&#x3042;&#x308b;&#x9805;&#x76ee;&#x306f;&#x8d64;&#x304f;&#x8868;&#x793a;&#x3055;&#x308c;&#x307e;&#x3059;&#x3002;</p>
            <div class="result-grid">
              <div class="metric">
                <strong>&#x6708;&#x53ce;</strong>
                <span class="accent-blue" id="aiMonthlyIncome">0&#x5186;</span>
                <small>&#x6848;&#x4ef6;&#x5358;&#x4fa1; &#xd7; &#x6708;&#x6848;&#x4ef6;&#x6570;</small>
              </div>
              <div class="metric">
                <strong>AI&#x6d3b;&#x7528;&#x6642;&#x306e;&#x52b9;&#x7387;&#x6539;&#x5584;</strong>
                <span class="accent-green" id="aiEfficiency">0%</span>
                <small id="aiEfficiencyDetail">AI&#x5229;&#x7528;&#x6642;&#x306e;&#x4f5c;&#x696d;&#x6642;&#x9593;&#x77ed;&#x7e2e;&#x76ee;&#x5b89;</small>
              </div>
              <div class="metric">
                <strong>AI&#x6d3b;&#x7528;&#x5f8c;&#x306e;&#x4f5c;&#x696d;&#x6642;&#x9593;</strong>
                <span class="accent-amber" id="aiAdjustedHours">0&#x6642;&#x9593;</span>
                <small>&#x6708;&#x9593;&#x306e;&#x5b9f;&#x4f5c;&#x696d;&#x6642;&#x9593;&#x306e;&#x76ee;&#x5b89;</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="AI&#x526f;&#x696d;&#x6642;&#x7d66;FAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>AI&#x6d3b;&#x7528;&#x6642;&#x306e;&#x52b9;&#x7387;&#x6539;&#x5584;&#x306f;&#x3069;&#x3046;&#x8a08;&#x7b97;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>AI&#x3092;&#x4f7f;&#x7528;&#x3059;&#x308b;&#x5834;&#x5408;&#x3001;&#x4f5c;&#x696d;&#x6642;&#x9593;&#x304c;30%&#x77ed;&#x7e2e;&#x3055;&#x308c;&#x308b;&#x60f3;&#x5b9a;&#x3067;&#x8a66;&#x7b97;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x3002;&#x5b9f;&#x969b;&#x306e;&#x6539;&#x5584;&#x7387;&#x306f;&#x696d;&#x52d9;&#x5185;&#x5bb9;&#x3084;&#x30b9;&#x30ad;&#x30eb;&#x306b;&#x3088;&#x3063;&#x3066;&#x5909;&#x308f;&#x308a;&#x307e;&#x3059;&#x3002;</p>
            </details>
            <details>
              <summary>&#x6642;&#x7d66;&#x306f;&#x7a0e;&#x91d1;&#x3084;&#x7d4c;&#x8cbb;&#x3092;&#x542b;&#x307f;&#x307e;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x3053;&#x306e;&#x30c4;&#x30fc;&#x30eb;&#x306e;&#x6642;&#x7d66;&#x306f;&#x3001;&#x6848;&#x4ef6;&#x5358;&#x4fa1;&#x3092;&#x4f5c;&#x696d;&#x6642;&#x9593;&#x3067;&#x5272;&#x3063;&#x305f;&#x7c21;&#x6613;&#x8a66;&#x7b97;&#x3067;&#x3059;&#x3002;&#x7a0e;&#x91d1;&#x3084;&#x7d4c;&#x8cbb;&#x3092;&#x53cd;&#x6620;&#x3057;&#x305f;&#x3044;&#x5834;&#x5408;&#x306f;&#x3001;&#x7a0e;&#x91d1;&#x30fb;&#x9752;&#x8272;&#x7533;&#x544a;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;&#x3082;&#x4f75;&#x7528;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;</p>
            </details>
            <details>
              <summary>AI&#x3092;&#x4f7f;&#x308f;&#x306a;&#x3044;&#x5834;&#x5408;&#x3082;&#x6bd4;&#x8f03;&#x3067;&#x304d;&#x307e;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>AI&#x4f7f;&#x7528;&#x6709;&#x7121;&#x306e;&#x30c1;&#x30a7;&#x30c3;&#x30af;&#x3092;&#x5916;&#x3059;&#x3068;&#x3001;&#x901a;&#x5e38;&#x306e;&#x4f5c;&#x696d;&#x6642;&#x9593;&#x3092;&#x3082;&#x3068;&#x306b;&#x6642;&#x7d66;&#x3068;&#x6708;&#x53ce;&#x3092;&#x8868;&#x793a;&#x3057;&#x307e;&#x3059;&#x3002;</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="AI&#x526f;&#x696d;&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;">
          <section class="tool-heading">
            <h2>&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;</h2>
            <p>AI&#x6d3b;&#x7528;&#x3067;&#x4e0a;&#x304c;&#x3063;&#x305f;&#x6642;&#x7d66;&#x3092;&#x3001;&#x6708;&#x53ce;&#x3084;&#x624b;&#x53d6;&#x308a;&#x306e;&#x8a66;&#x7b97;&#x306b;&#x3064;&#x306a;&#x3052;&#x3089;&#x308c;&#x307e;&#x3059;&#x3002;</p>
          </section>
          <div class="related-links">
            <a href="#side-income">&#x526f;&#x696d;&#x6708;&#x53ce;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#take-home">&#x526f;&#x696d;&#x624b;&#x53d6;&#x308a;&#x8a08;&#x7b97;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#tax">&#x526f;&#x696d;&#x7a0e;&#x91d1;&#x30fb;&#x9752;&#x8272;&#x7533;&#x544a;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="ai-efficiency" aria-label="AI副業効率化シミュレーター">
        <section class="tool-heading">
          <h2>AI副業効率化シミュレーター</h2>
          <p>現在の副業作業時間、売上、AIによる時間削減率、AIツール月額費用、外注費削減額から、AI導入後の時給改善と年間追加利益を試算します。</p>
        </section>

        <section class="workspace" aria-label="AI副業効率化の計算">
          <form class="input-panel" id="aiEfficiencyForm">
            <div class="field">
              <label for="aiEfficiencyHours">現在の副業作業時間 <span class="unit">時間 / 月</span></label>
              <input id="aiEfficiencyHours" name="aiEfficiencyHours" type="number" inputmode="decimal" min="0.1" max="10000" step="0.5" value="80" required aria-describedby="aiEfficiencyHoursError">
              <p class="error" id="aiEfficiencyHoursError"></p>
            </div>
            <div class="field">
              <label for="aiEfficiencySales">現在の副業売上 <span class="unit">円 / 月</span></label>
              <input id="aiEfficiencySales" name="aiEfficiencySales" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="300000" required aria-describedby="aiEfficiencySalesError">
              <p class="error" id="aiEfficiencySalesError"></p>
            </div>
            <label class="check-field" for="aiEfficiencyUse">
              <input id="aiEfficiencyUse" name="aiEfficiencyUse" type="checkbox" checked>
              <span>AIツールを導入する</span>
            </label>
            <div class="field">
              <label for="aiEfficiencyReduction">AIによる時間削減率 <span class="unit">%</span></label>
              <input id="aiEfficiencyReduction" name="aiEfficiencyReduction" type="number" inputmode="decimal" min="0" max="90" step="1" value="30" required aria-describedby="aiEfficiencyReductionError">
              <p class="error" id="aiEfficiencyReductionError"></p>
            </div>
            <div class="field">
              <label for="aiToolMonthlyCost">AIツール月額費用 <span class="unit">円 / 月</span></label>
              <input id="aiToolMonthlyCost" name="aiToolMonthlyCost" type="number" inputmode="numeric" min="0" max="10000000" step="1000" value="5000" required aria-describedby="aiToolMonthlyCostError">
              <p class="error" id="aiToolMonthlyCostError"></p>
            </div>
            <div class="field">
              <label for="outsourcingReduction">外注費削減額 <span class="unit">円 / 月</span></label>
              <input id="outsourcingReduction" name="outsourcingReduction" type="number" inputmode="numeric" min="0" max="1000000000" step="5000" value="20000" required aria-describedby="outsourcingReductionError">
              <p class="error" id="outsourcingReductionError"></p>
            </div>
            <div class="field">
              <label for="aiEfficiencyTargetHourly">目標時給 <span class="unit">円</span></label>
              <input id="aiEfficiencyTargetHourly" name="aiEfficiencyTargetHourly" type="number" inputmode="numeric" min="0" max="1000000" step="500" value="5000" required aria-describedby="aiEfficiencyTargetHourlyError">
              <p class="error" id="aiEfficiencyTargetHourlyError"></p>
            </div>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">AI導入後の予想時給</p>
              <p class="amount" id="aiEfficiencyHourly">0円</p>
            </div>
            <p class="notice" id="aiEfficiencyNotice">入力を確認してください。AI導入効果は税引前の簡易シミュレーションです。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>削減時間</strong>
                <span class="accent-amber" id="aiEfficiencySavedHours">0時間</span>
                <small>AI活用で減らせる月間作業時間</small>
              </div>
              <div class="metric">
                <strong>利益率改善</strong>
                <span class="accent-blue" id="aiEfficiencyProfitImprovement">0%</span>
                <small>AI導入前後の利益率差</small>
              </div>
              <div class="metric">
                <strong>年間追加利益</strong>
                <span class="accent-green" id="aiEfficiencyAnnualProfit">0円</span>
                <small>外注費削減額 - AIツール費用の年額目安</small>
              </div>
              <div class="metric">
                <strong>おすすめAI活用方法</strong>
                <span class="accent-green text-metric" id="aiEfficiencyRecommendation">未計算</span>
                <small>時間削減率と目標時給との差から判定</small>
              </div>
              <div class="metric">
                <strong>副業時給改善シミュレーターへの導線</strong>
                <span class="accent-blue text-metric" id="aiEfficiencyGuide">時給改善も確認</span>
                <small>経費や外注費を含めた時給分析へ進む</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="AI副業効率化シミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>AIによる時間削減率は何%で入力すればいいですか？</summary>
              <p>文章作成、調査、資料作成、画像生成、コード補助などで短縮できる割合を入力します。最初は20%から30%で試算し、実績に合わせて調整すると現実的です。</p>
            </details>
            <details>
              <summary>AIツール月額費用は利益から差し引きますか？</summary>
              <p>はい。AI導入後の利益と時給は、AIツール月額費用を差し引き、外注費削減額を加味して計算しています。</p>
            </details>
            <details>
              <summary>AI導入有無をオフにするとどうなりますか？</summary>
              <p>AIによる時間削減とAIツール費用を0として計算します。AIを使わない場合の現状時給に近い目安として確認できます。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="AI副業効率化関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>AI効率化は、時給改善、利益率改善、使うAIツールの選び方を合わせて見ると実行に移しやすくなります。</p>
          </section>
          <div class="related-links">
            <a href="#hourly-improvement">副業時給改善シミュレーター</a>
            <a href="#side-profit-margin">副業利益率シミュレーター</a>
            <a href="article-ai-tools-comparison.html">AIツール比較記事</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="side-time-management" aria-label="副業時間管理シミュレーター">
        <section class="tool-heading">
          <h2>副業時間管理シミュレーター</h2>
          <p>本業、通勤、睡眠、家事、休日、副業作業時間から、副業を無理なく続けられる時間とAI活用による改善余地を分析します。</p>
        </section>

        <section class="workspace" aria-label="副業時間管理の計算">
          <form class="input-panel" id="sideTimeManagementForm">
            <div class="field">
              <label for="mainJobHours">本業勤務時間 <span class="unit">時間 / 平日</span></label>
              <input id="mainJobHours" name="mainJobHours" type="number" inputmode="decimal" min="0" max="24" step="0.5" value="8" required aria-describedby="mainJobHoursError">
              <p class="error" id="mainJobHoursError"></p>
            </div>
            <div class="field">
              <label for="commuteHours">通勤時間 <span class="unit">時間 / 平日</span></label>
              <input id="commuteHours" name="commuteHours" type="number" inputmode="decimal" min="0" max="8" step="0.25" value="1.5" required aria-describedby="commuteHoursError">
              <p class="error" id="commuteHoursError"></p>
            </div>
            <div class="field">
              <label for="sleepHours">睡眠時間 <span class="unit">時間 / 日</span></label>
              <input id="sleepHours" name="sleepHours" type="number" inputmode="decimal" min="0" max="24" step="0.5" value="7" required aria-describedby="sleepHoursError">
              <p class="error" id="sleepHoursError"></p>
            </div>
            <div class="field">
              <label for="houseworkHours">家事時間 <span class="unit">時間 / 日</span></label>
              <input id="houseworkHours" name="houseworkHours" type="number" inputmode="decimal" min="0" max="12" step="0.25" value="2" required aria-describedby="houseworkHoursError">
              <p class="error" id="houseworkHoursError"></p>
            </div>
            <div class="field">
              <label for="holidayFreeHours">休日時間 <span class="unit">自由に使える時間 / 休日1日</span></label>
              <input id="holidayFreeHours" name="holidayFreeHours" type="number" inputmode="decimal" min="0" max="24" step="0.5" value="8" required aria-describedby="holidayFreeHoursError">
              <p class="error" id="holidayFreeHoursError"></p>
            </div>
            <div class="field">
              <label for="sideWorkHours">副業作業時間 <span class="unit">時間 / 週</span></label>
              <input id="sideWorkHours" name="sideWorkHours" type="number" inputmode="decimal" min="0" max="168" step="0.5" value="12" required aria-describedby="sideWorkHoursError">
              <p class="error" id="sideWorkHoursError"></p>
            </div>
            <label class="check-field" for="timeManagementAiUse">
              <input id="timeManagementAiUse" name="timeManagementAiUse" type="checkbox" checked>
              <span>AIを活用する</span>
            </label>
            <div class="field">
              <label for="timeManagementAiReduction">AIによる時短率 <span class="unit">%</span></label>
              <input id="timeManagementAiReduction" name="timeManagementAiReduction" type="number" inputmode="decimal" min="0" max="90" step="1" value="25" required aria-describedby="timeManagementAiReductionError">
              <p class="error" id="timeManagementAiReductionError"></p>
            </div>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">1日の自由時間</p>
              <p class="amount" id="dailyFreeTime">0時間</p>
            </div>
            <p class="notice" id="sideTimeManagementNotice">入力を確認してください。時間配分は平日5日・休日2日の簡易シミュレーションです。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>副業可能時間</strong>
                <span class="accent-blue" id="availableSideWorkTime">0時間 / 週</span>
                <small>平日の自由時間と休日時間から計算</small>
              </div>
              <div class="metric">
                <strong>副業継続可能性</strong>
                <span class="accent-green text-metric" id="sideWorkSustainability">未計算</span>
                <small>副業作業時間と余力のバランス</small>
              </div>
              <div class="metric">
                <strong>AI導入による改善時間</strong>
                <span class="accent-amber" id="aiTimeImprovement">0時間 / 週</span>
                <small>AI時短率を反映した削減時間</small>
              </div>
              <div class="metric">
                <strong>おすすめ改善ポイント</strong>
                <span class="accent-green text-metric" id="timeManagementImprovementPoint">未計算</span>
                <small>不足時間と生活リズムから判定</small>
              </div>
              <div class="metric">
                <strong>副業時給改善シミュレーターへの導線</strong>
                <span class="accent-blue text-metric" id="timeManagementHourlyGuide">時給改善も確認</span>
                <small>限られた時間で収益性を上げる分析へ進む</small>
              </div>
              <div class="metric">
                <strong>FIRE達成への影響</strong>
                <span class="accent-amber text-metric" id="timeManagementFireImpact">未計算</span>
                <small>副業時間の余力が積立力に与える影響</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="副業時間管理シミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>休日時間は何を入力すればいいですか？</summary>
              <p>睡眠や家事を除いた、休日1日に自由に使える時間の目安を入力してください。副業に全て使う前提ではなく、休息や家族時間も残す前提で見ると現実的です。</p>
            </details>
            <details>
              <summary>副業作業時間は週単位ですか？</summary>
              <p>はい。副業作業時間は1週間あたりの実作業時間として入力します。平日夜と休日の合計を入れると、継続可能性を確認しやすくなります。</p>
            </details>
            <details>
              <summary>AIによる時短率は何%で入力すればいいですか？</summary>
              <p>調査、文章作成、資料作成、動画編集、画像作成などで短縮できる割合を入力します。最初は10%から30%で試算し、実績に合わせて調整してください。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="副業時間管理関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>副業時間を確認したら、限られた時間で時給と利益率をどう上げるかも合わせて確認できます。</p>
          </section>
          <div class="related-links">
            <a href="#hourly-improvement">副業時給改善シミュレーター</a>
            <a href="#ai-efficiency">AI副業効率化シミュレーター</a>
            <a href="#fire">FIRE達成シミュレーター</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="hourly-improvement" aria-label="副業時給改善シミュレーター">
        <section class="tool-heading">
          <h2>副業時給改善シミュレーター</h2>
          <p>副業売上、作業時間、経費、外注費、AIツール利用有無、AI活用時間削減率、目標時給から、現在の実質時給と改善余地を分析します。</p>
        </section>

        <section class="workspace" aria-label="副業時給改善の計算">
          <form class="input-panel" id="hourlyImprovementForm">
            <div class="field">
              <label for="improvementSales">副業売上 <span class="unit">円</span></label>
              <input id="improvementSales" name="improvementSales" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="300000" required aria-describedby="improvementSalesError">
              <p class="error" id="improvementSalesError"></p>
            </div>
            <div class="field">
              <label for="improvementHours">作業時間 <span class="unit">時間</span></label>
              <input id="improvementHours" name="improvementHours" type="number" inputmode="decimal" min="0.1" max="10000" step="0.5" value="80" required aria-describedby="improvementHoursError">
              <p class="error" id="improvementHoursError"></p>
            </div>
            <div class="field">
              <label for="improvementExpenses">経費 <span class="unit">円</span></label>
              <input id="improvementExpenses" name="improvementExpenses" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="50000" required aria-describedby="improvementExpensesError">
              <p class="error" id="improvementExpensesError"></p>
            </div>
            <div class="field">
              <label for="improvementOutsourcing">外注費 <span class="unit">円</span></label>
              <input id="improvementOutsourcing" name="improvementOutsourcing" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="20000" required aria-describedby="improvementOutsourcingError">
              <p class="error" id="improvementOutsourcingError"></p>
            </div>
            <label class="check-field" for="improvementAiUse">
              <input id="improvementAiUse" name="improvementAiUse" type="checkbox" checked>
              <span>AIツールを利用する</span>
            </label>
            <div class="field">
              <label for="improvementAiReduction">AI活用時間削減率 <span class="unit">%</span></label>
              <input id="improvementAiReduction" name="improvementAiReduction" type="number" inputmode="decimal" min="0" max="90" step="1" value="30" required aria-describedby="improvementAiReductionError">
              <p class="error" id="improvementAiReductionError"></p>
            </div>
            <div class="field">
              <label for="targetHourlyRate">目標時給 <span class="unit">円</span></label>
              <input id="targetHourlyRate" name="targetHourlyRate" type="number" inputmode="numeric" min="0" max="1000000" step="500" value="5000" required aria-describedby="targetHourlyRateError">
              <p class="error" id="targetHourlyRateError"></p>
            </div>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">現在の実質時給</p>
              <p class="amount" id="currentEffectiveHourly">0円</p>
            </div>
            <p class="notice" id="hourlyImprovementNotice">入力を確認してください。時給や利益率は税引前の簡易分析です。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>利益率</strong>
                <span class="accent-blue" id="improvementProfitMargin">0%</span>
                <small>利益額 ÷ 副業売上</small>
              </div>
              <div class="metric">
                <strong>AI導入後の予想時給</strong>
                <span class="accent-green" id="aiImprovedHourly">0円</span>
                <small>AI活用時間削減率を反映した時給</small>
              </div>
              <div class="metric">
                <strong>改善可能時間</strong>
                <span class="accent-amber" id="improvableHours">0時間</span>
                <small>AI活用で削減できる作業時間の目安</small>
              </div>
              <div class="metric">
                <strong>おすすめ改善ポイント</strong>
                <span class="accent-green text-metric" id="hourlyImprovementPoint">未計算</span>
                <small>利益率、時給、目標時給との差から判定</small>
              </div>
              <div class="metric">
                <strong>利益率シミュレーターへの導線</strong>
                <span class="accent-blue text-metric" id="profitMarginGuide">利益率も確認</span>
                <small>売上、経費、広告費、外注費の詳細分析へ進む</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="副業時給改善シミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>実質時給はどう計算していますか？</summary>
              <p>副業売上から経費と外注費を差し引いた利益を、作業時間で割って計算しています。税金を差し引く前の簡易的な時給です。</p>
            </details>
            <details>
              <summary>AI活用時間削減率は何%で入力すればいいですか？</summary>
              <p>文章作成、調査、資料作成などで実際に短縮できそうな割合を入力します。最初は20%から30%程度で試算し、実績に合わせて調整すると現実的です。</p>
            </details>
            <details>
              <summary>目標時給に届かない場合は何を見直すべきですか？</summary>
              <p>単価アップ、作業時間の短縮、外注費や経費の見直しが主な改善候補です。利益率の内訳を確認したい場合は、副業利益率シミュレーターも合わせて使ってください。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="副業時給改善関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>時給改善は、AI活用による作業時間短縮と、利益率の改善を合わせて見ると判断しやすくなります。</p>
          </section>
          <div class="related-links">
            <a href="#side-profit-margin">副業利益率シミュレーター</a>
            <a href="#ai-hourly">AI副業時給シミュレーター</a>
            <a href="#take-home">副業手取り計算シミュレーター</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="side-profit-margin" aria-label="副業利益率シミュレーター">
        <section class="tool-heading">
          <h2>副業利益率シミュレーター</h2>
          <p>副業売上、経費、作業時間、広告費、外注費、AIツール利用有無から、利益額、利益率、時給換算、改善ポイントを分析します。</p>
        </section>

        <section class="workspace" aria-label="副業利益率の計算">
          <form class="input-panel" id="sideProfitMarginForm">
            <div class="field">
              <label for="profitSales">副業売上 <span class="unit">円</span></label>
              <input id="profitSales" name="profitSales" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="300000" required aria-describedby="profitSalesError">
              <p class="error" id="profitSalesError"></p>
            </div>
            <div class="field">
              <label for="profitExpenses">経費 <span class="unit">円</span></label>
              <input id="profitExpenses" name="profitExpenses" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="50000" required aria-describedby="profitExpensesError">
              <p class="error" id="profitExpensesError"></p>
            </div>
            <div class="field">
              <label for="profitHours">作業時間 <span class="unit">時間</span></label>
              <input id="profitHours" name="profitHours" type="number" inputmode="decimal" min="0.1" max="10000" step="0.5" value="80" required aria-describedby="profitHoursError">
              <p class="error" id="profitHoursError"></p>
            </div>
            <div class="field">
              <label for="profitAdCost">広告費 <span class="unit">円</span></label>
              <input id="profitAdCost" name="profitAdCost" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="30000" required aria-describedby="profitAdCostError">
              <p class="error" id="profitAdCostError"></p>
            </div>
            <div class="field">
              <label for="profitOutsourcingCost">外注費 <span class="unit">円</span></label>
              <input id="profitOutsourcingCost" name="profitOutsourcingCost" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="20000" required aria-describedby="profitOutsourcingCostError">
              <p class="error" id="profitOutsourcingCostError"></p>
            </div>
            <label class="check-field" for="profitAiUse">
              <input id="profitAiUse" name="profitAiUse" type="checkbox" checked>
              <span>AIツールを利用する</span>
            </label>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">利益額</p>
              <p class="amount" id="profitAmount">0円</p>
            </div>
            <p class="notice" id="profitMarginNotice">入力を確認してください。利益率や時給換算は、税金を差し引く前の簡易分析です。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>利益率</strong>
                <span class="accent-blue" id="profitMarginRate">0%</span>
                <small>利益額 ÷ 副業売上</small>
              </div>
              <div class="metric">
                <strong>時給換算</strong>
                <span class="accent-green" id="profitHourlyRate">0円</span>
                <small>利益額 ÷ 作業時間</small>
              </div>
              <div class="metric">
                <strong>AI活用による改善効果</strong>
                <span class="accent-amber text-metric" id="profitAiEffect">0円</span>
                <small>作業時間を25%短縮した場合の時給改善目安</small>
              </div>
              <div class="metric">
                <strong>おすすめ改善ポイント</strong>
                <span class="accent-green text-metric" id="profitImprovementPoint">未計算</span>
                <small>利益率、広告費、外注費、時給効率から判定</small>
              </div>
              <div class="metric">
                <strong>税金シミュレーターへの導線</strong>
                <span class="accent-blue text-metric" id="profitTaxGuide">利益が出たら税金も確認</span>
                <small>利益額をもとに税金・手取りへ進む</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="副業利益率シミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>副業の利益率は何%を目安にすればいいですか？</summary>
              <p>業種によって変わりますが、まずは30%以上を一つの目安にすると見直しやすくなります。広告費や外注費が大きい副業では、利益率だけでなく時給換算も合わせて確認しましょう。</p>
            </details>
            <details>
              <summary>作業時間は月間で入力しますか？</summary>
              <p>このツールでは、入力した売上や経費と同じ期間の作業時間を入れてください。月間売上なら月間作業時間、年間売上なら年間作業時間でそろえると時給換算が見やすくなります。</p>
            </details>
            <details>
              <summary>税金は反映されていますか？</summary>
              <p>このツールは税引前の利益分析です。税金後の手取りを確認したい場合は、副業手取り計算シミュレーターや副業税金・青色申告シミュレーターも合わせて使ってください。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="副業利益率関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>利益率を確認したら、月収、手取り、税金の順に見ると、実際に残る金額まで整理できます。</p>
          </section>
          <div class="related-links">
            <a href="#side-income">副業月収シミュレーター</a>
            <a href="#take-home">副業手取り計算シミュレーター</a>
            <a href="#tax">副業税金・青色申告シミュレーター</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="tax" aria-label="&#x526f;&#x696d;&#x7a0e;&#x91d1;&#x30fb;&#x9752;&#x8272;&#x7533;&#x544a;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;">
        <section class="tool-heading">
          <h2>&#x526f;&#x696d;&#x7a0e;&#x91d1;&#x30fb;&#x9752;&#x8272;&#x7533;&#x544a;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
          <p>&#x5e74;&#x9593;&#x526f;&#x696d;&#x53ce;&#x5165;&#x3001;&#x7d4c;&#x8cbb;&#x3001;&#x5404;&#x7a0e;&#x7387;&#x3001;&#x9752;&#x8272;&#x7533;&#x544a;&#x63a7;&#x9664;&#x984d;&#x3092;&#x5165;&#x308c;&#x308b;&#x3068;&#x3001;&#x8ab2;&#x7a0e;&#x6240;&#x5f97;&#x30fb;&#x7a0e;&#x984d;&#x30fb;&#x624b;&#x53d6;&#x308a;&#x306e;&#x76ee;&#x5b89;&#x304c;&#x3059;&#x3050;&#x306b;&#x66f4;&#x65b0;&#x3055;&#x308c;&#x307e;&#x3059;&#x3002;</p>
        </section>

        <section class="workspace" aria-label="&#x526f;&#x696d;&#x7a0e;&#x91d1;&#x306e;&#x8a08;&#x7b97;">
          <form class="input-panel" id="taxForm">
            <div class="field">
              <label for="annualSideIncome">&#x5e74;&#x9593;&#x526f;&#x696d;&#x53ce;&#x5165; <span class="unit">&#x5186;</span></label>
              <input id="annualSideIncome" name="annualSideIncome" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="2400000" required aria-describedby="annualSideIncomeError">
              <p class="error" id="annualSideIncomeError"></p>
            </div>
            <div class="field">
              <label for="expenses">&#x7d4c;&#x8cbb; <span class="unit">&#x5186;</span></label>
              <input id="expenses" name="expenses" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="400000" required aria-describedby="expensesError">
              <p class="error" id="expensesError"></p>
            </div>
            <div class="field">
              <label for="incomeTaxRate">&#x6240;&#x5f97;&#x7a0e;&#x7387; <span class="unit">%</span></label>
              <input id="incomeTaxRate" name="incomeTaxRate" type="number" inputmode="decimal" min="0" max="45" step="0.1" value="10" required aria-describedby="incomeTaxRateError">
              <p class="error" id="incomeTaxRateError"></p>
            </div>
            <div class="field">
              <label for="residentTaxRate">&#x4f4f;&#x6c11;&#x7a0e;&#x7387; <span class="unit">%</span></label>
              <input id="residentTaxRate" name="residentTaxRate" type="number" inputmode="decimal" min="0" max="20" step="0.1" value="10" required aria-describedby="residentTaxRateError">
              <p class="error" id="residentTaxRateError"></p>
            </div>
            <div class="field">
              <label for="blueDeduction">&#x9752;&#x8272;&#x7533;&#x544a;&#x63a7;&#x9664;&#x984d; <span class="unit">&#x5186;</span></label>
              <input id="blueDeduction" name="blueDeduction" type="number" inputmode="numeric" min="0" max="650000" step="10000" value="650000" required aria-describedby="blueDeductionError">
              <p class="error" id="blueDeductionError"></p>
            </div>
            <div class="actions">
              <button type="reset">&#x30ea;&#x30bb;&#x30c3;&#x30c8;</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">&#x624b;&#x53d6;&#x308a;&#x984d;</p>
              <p class="amount" id="takeHome">0&#x5186;</p>
            </div>
            <p class="notice" id="taxNotice">&#x5165;&#x529b;&#x3092;&#x78ba;&#x8a8d;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;&#x30a8;&#x30e9;&#x30fc;&#x304c;&#x3042;&#x308b;&#x9805;&#x76ee;&#x306f;&#x8d64;&#x304f;&#x8868;&#x793a;&#x3055;&#x308c;&#x307e;&#x3059;&#x3002;</p>
            <div class="result-grid">
              <div class="metric">
                <strong>&#x8ab2;&#x7a0e;&#x6240;&#x5f97;</strong>
                <span class="accent-blue" id="taxableIncome">0&#x5186;</span>
                <small>&#x53ce;&#x5165; - &#x7d4c;&#x8cbb; - &#x9752;&#x8272;&#x7533;&#x544a;&#x63a7;&#x9664;</small>
              </div>
              <div class="metric">
                <strong>&#x6240;&#x5f97;&#x7a0e;</strong>
                <span class="accent-amber" id="incomeTaxAmount">0&#x5186;</span>
                <small>&#x8ab2;&#x7a0e;&#x6240;&#x5f97; &#xd7; &#x6240;&#x5f97;&#x7a0e;&#x7387;</small>
              </div>
              <div class="metric">
                <strong>&#x4f4f;&#x6c11;&#x7a0e;</strong>
                <span class="accent-amber" id="residentTaxAmount">0&#x5186;</span>
                <small>&#x8ab2;&#x7a0e;&#x6240;&#x5f97; &#xd7; &#x4f4f;&#x6c11;&#x7a0e;&#x7387;</small>
              </div>
              <div class="metric">
                <strong>&#x624b;&#x53d6;&#x308a;&#x984d;</strong>
                <span class="accent-green" id="takeHomeDetail">0&#x5186;</span>
                <small>&#x53ce;&#x5165; - &#x7d4c;&#x8cbb; - &#x6240;&#x5f97;&#x7a0e; - &#x4f4f;&#x6c11;&#x7a0e;</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="FAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>&#x9752;&#x8272;&#x7533;&#x544a;&#x63a7;&#x9664;&#x984d;&#x306f;&#x3044;&#x304f;&#x3089;&#x3067;&#x5165;&#x529b;&#x3059;&#x308c;&#x3070;&#x3044;&#x3044;&#x3067;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x6761;&#x4ef6;&#x3092;&#x6e80;&#x305f;&#x3059;&#x5834;&#x5408;&#x306f;65&#x4e07;&#x5186;&#x3001;&#x305d;&#x308c;&#x4ee5;&#x5916;&#x306f;55&#x4e07;&#x5186;&#x3084;10&#x4e07;&#x5186;&#x306a;&#x3069;&#x3001;&#x81ea;&#x5206;&#x306e;&#x7533;&#x544a;&#x65b9;&#x6cd5;&#x306b;&#x5408;&#x308f;&#x305b;&#x3066;&#x5165;&#x529b;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;</p>
            </details>
            <details>
              <summary>&#x6240;&#x5f97;&#x7a0e;&#x7387;&#x306f;&#x4f55;&#x3092;&#x5165;&#x308c;&#x307e;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x7d66;&#x4e0e;&#x306a;&#x3069;&#x4ed6;&#x306e;&#x6240;&#x5f97;&#x3068;&#x5408;&#x7b97;&#x3057;&#x305f;&#x3068;&#x304d;&#x306e;&#x6982;&#x7b97;&#x7a0e;&#x7387;&#x3092;&#x5165;&#x308c;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;&#x6b63;&#x78ba;&#x306a;&#x7a0e;&#x984d;&#x306f;&#x7a0e;&#x7406;&#x58eb;&#x3084;&#x7a0e;&#x52d9;&#x7f72;&#x306b;&#x78ba;&#x8a8d;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;</p>
            </details>
            <details>
              <summary>&#x3053;&#x306e;&#x8a08;&#x7b97;&#x7d50;&#x679c;&#x306f;&#x78ba;&#x5b9a;&#x7533;&#x544a;&#x306b;&#x305d;&#x306e;&#x307e;&#x307e;&#x4f7f;&#x3048;&#x307e;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x7c21;&#x6613;&#x8a66;&#x7b97;&#x3067;&#x3059;&#x3002;&#x5fa9;&#x8208;&#x7279;&#x5225;&#x6240;&#x5f97;&#x7a0e;&#x3001;&#x5404;&#x7a2e;&#x63a7;&#x9664;&#x3001;&#x4e8b;&#x696d;&#x7a0e;&#x306a;&#x3069;&#x306f;&#x542b;&#x307e;&#x306a;&#x3044;&#x305f;&#x3081;&#x3001;&#x76ee;&#x5b89;&#x3068;&#x3057;&#x3066;&#x4f7f;&#x3063;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="&#x7a0e;&#x91d1;&#x30fb;&#x9752;&#x8272;&#x7533;&#x544a;&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;">
          <section class="tool-heading">
            <h2>&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;</h2>
            <p>&#x7a0e;&#x984d;&#x3092;&#x628a;&#x63e1;&#x3057;&#x305f;&#x3042;&#x3068;&#x306b;&#x3001;&#x6700;&#x7d42;&#x7684;&#x306a;&#x624b;&#x53d6;&#x308a;&#x3084;&#x526f;&#x696d;&#x53ce;&#x76ca;&#x3092;&#x78ba;&#x8a8d;&#x3067;&#x304d;&#x307e;&#x3059;&#x3002;</p>
          </section>
          <div class="related-links">
            <a href="#income-tax">&#x526f;&#x696d;&#x6240;&#x5f97;&#x7a0e;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#resident-tax">&#x526f;&#x696d;&#x4f4f;&#x6c11;&#x7a0e;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#take-home">&#x526f;&#x696d;&#x624b;&#x53d6;&#x308a;&#x8a08;&#x7b97;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="income-tax" aria-label="&#x526f;&#x696d;&#x6240;&#x5f97;&#x7a0e;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;">
        <section class="tool-heading">
          <h2>&#x526f;&#x696d;&#x6240;&#x5f97;&#x7a0e;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
          <p>&#x5e74;&#x9593;&#x526f;&#x696d;&#x58f2;&#x4e0a;&#x304b;&#x3089;&#x7d4c;&#x8cbb;&#x30fb;&#x9752;&#x8272;&#x7533;&#x544a;&#x63a7;&#x9664;&#x30fb;&#x57fa;&#x790e;&#x63a7;&#x9664;&#x30fb;&#x305d;&#x306e;&#x4ed6;&#x63a7;&#x9664;&#x3092;&#x5dee;&#x3057;&#x5f15;&#x304d;&#x3001;&#x6240;&#x5f97;&#x7a0e;&#x3068;&#x5fa9;&#x8208;&#x7279;&#x5225;&#x6240;&#x5f97;&#x7a0e;&#x306e;&#x6982;&#x7b97;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
        </section>

        <section class="workspace" aria-label="&#x526f;&#x696d;&#x6240;&#x5f97;&#x7a0e;&#x306e;&#x8a08;&#x7b97;">
          <form class="input-panel" id="incomeTaxForm">
            <div class="field">
              <label for="incomeTaxSales">&#x5e74;&#x9593;&#x526f;&#x696d;&#x58f2;&#x4e0a; <span class="unit">&#x5186;</span></label>
              <input id="incomeTaxSales" name="incomeTaxSales" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="1800000" required aria-describedby="incomeTaxSalesError">
              <p class="error" id="incomeTaxSalesError"></p>
            </div>
            <div class="field">
              <label for="incomeTaxExpenses">&#x5e74;&#x9593;&#x7d4c;&#x8cbb; <span class="unit">&#x5186;</span></label>
              <input id="incomeTaxExpenses" name="incomeTaxExpenses" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="300000" required aria-describedby="incomeTaxExpensesError">
              <p class="error" id="incomeTaxExpensesError"></p>
            </div>
            <div class="field">
              <label for="incomeTaxBlueDeduction">&#x9752;&#x8272;&#x7533;&#x544a;&#x63a7;&#x9664;&#x984d; <span class="unit">&#x5186;</span></label>
              <input id="incomeTaxBlueDeduction" name="incomeTaxBlueDeduction" type="number" inputmode="numeric" min="0" max="650000" step="10000" value="650000" required aria-describedby="incomeTaxBlueDeductionError">
              <p class="error" id="incomeTaxBlueDeductionError"></p>
            </div>
            <div class="field">
              <label for="incomeTaxBasicDeduction">&#x57fa;&#x790e;&#x63a7;&#x9664;&#x984d; <span class="unit">&#x5186;</span></label>
              <input id="incomeTaxBasicDeduction" name="incomeTaxBasicDeduction" type="number" inputmode="numeric" min="0" max="10000000" step="10000" value="480000" required aria-describedby="incomeTaxBasicDeductionError">
              <p class="error" id="incomeTaxBasicDeductionError"></p>
            </div>
            <div class="field">
              <label for="incomeTaxOtherDeduction">&#x305d;&#x306e;&#x4ed6;&#x63a7;&#x9664;&#x984d; <span class="unit">&#x5186;</span></label>
              <input id="incomeTaxOtherDeduction" name="incomeTaxOtherDeduction" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="0" required aria-describedby="incomeTaxOtherDeductionError">
              <p class="error" id="incomeTaxOtherDeductionError"></p>
            </div>
            <div class="field">
              <label for="incomeTaxRateInput">&#x6240;&#x5f97;&#x7a0e;&#x7387; <span class="unit">%</span></label>
              <input id="incomeTaxRateInput" name="incomeTaxRateInput" type="number" inputmode="decimal" min="0" max="45" step="0.1" value="10" required aria-describedby="incomeTaxRateInputError">
              <p class="error" id="incomeTaxRateInputError"></p>
            </div>
            <div class="field">
              <label for="reconstructionTaxRate">&#x5fa9;&#x8208;&#x7279;&#x5225;&#x6240;&#x5f97;&#x7a0e;&#x7387; <span class="unit">%</span></label>
              <input id="reconstructionTaxRate" name="reconstructionTaxRate" type="number" inputmode="decimal" min="0" max="10" step="0.01" value="2.1" required aria-describedby="reconstructionTaxRateError">
              <p class="error" id="reconstructionTaxRateError"></p>
            </div>
            <div class="actions">
              <button type="reset">&#x30ea;&#x30bb;&#x30c3;&#x30c8;</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">&#x6240;&#x5f97;&#x7a0e;&#x5408;&#x8a08;</p>
              <p class="amount" id="incomeTaxTotal">0&#x5186;</p>
            </div>
            <p class="notice" id="incomeTaxNotice">&#x5165;&#x529b;&#x3092;&#x78ba;&#x8a8d;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;&#x30a8;&#x30e9;&#x30fc;&#x304c;&#x3042;&#x308b;&#x9805;&#x76ee;&#x306f;&#x8d64;&#x304f;&#x8868;&#x793a;&#x3055;&#x308c;&#x307e;&#x3059;&#x3002;</p>
            <div class="result-grid">
              <div class="metric">
                <strong>&#x526f;&#x696d;&#x6240;&#x5f97;</strong>
                <span class="accent-blue" id="incomeTaxSideIncome">0&#x5186;</span>
                <small>&#x58f2;&#x4e0a; - &#x7d4c;&#x8cbb; - &#x9752;&#x8272;&#x7533;&#x544a;&#x63a7;&#x9664;</small>
              </div>
              <div class="metric">
                <strong>&#x8ab2;&#x7a0e;&#x6240;&#x5f97;</strong>
                <span class="accent-blue" id="incomeTaxTaxableIncome">0&#x5186;</span>
                <small>&#x526f;&#x696d;&#x6240;&#x5f97; - &#x57fa;&#x790e;&#x63a7;&#x9664; - &#x305d;&#x306e;&#x4ed6;&#x63a7;&#x9664;</small>
              </div>
              <div class="metric">
                <strong>&#x6240;&#x5f97;&#x7a0e;&#x984d;</strong>
                <span class="accent-amber" id="incomeTaxAmountResult">0&#x5186;</span>
                <small>&#x8ab2;&#x7a0e;&#x6240;&#x5f97; &#xd7; &#x6240;&#x5f97;&#x7a0e;&#x7387;</small>
              </div>
              <div class="metric">
                <strong>&#x5fa9;&#x8208;&#x7279;&#x5225;&#x6240;&#x5f97;&#x7a0e;</strong>
                <span class="accent-amber" id="reconstructionTaxAmount">0&#x5186;</span>
                <small>&#x6240;&#x5f97;&#x7a0e;&#x984d; &#xd7; &#x5fa9;&#x8208;&#x7279;&#x5225;&#x6240;&#x5f97;&#x7a0e;&#x7387;</small>
              </div>
              <div class="metric">
                <strong>&#x6708;&#x5e73;&#x5747;&#x306e;&#x7a0e;&#x8ca0;&#x62c5;</strong>
                <span class="accent-green" id="incomeTaxMonthly">0&#x5186;</span>
                <small>&#x6240;&#x5f97;&#x7a0e;&#x5408;&#x8a08; &#xf7; 12</small>
              </div>
              <div class="metric">
                <strong>&#x4f4f;&#x6c11;&#x7a0e;&#x3078;&#x306e;&#x5f71;&#x97ff;</strong>
                <span class="accent-blue text-metric" id="incomeTaxResidentGuide">&#x672a;&#x8a08;&#x7b97;</span>
                <small>&#x4f4f;&#x6c11;&#x7a0e;&#x3082;&#x5225;&#x9014;&#x767a;&#x751f;&#x3059;&#x308b;&#x53ef;&#x80fd;&#x6027;</small>
              </div>
              <div class="metric">
                <strong>&#x624b;&#x53d6;&#x308a;&#x8a08;&#x7b97;&#x3078;&#x306e;&#x6848;&#x5185;</strong>
                <span class="accent-blue text-metric" id="incomeTaxTakeHomeGuide">&#x672a;&#x8a08;&#x7b97;</span>
                <small>&#x624b;&#x5143;&#x306b;&#x6b8b;&#x308b;&#x91d1;&#x984d;&#x306f;&#x624b;&#x53d6;&#x308a;&#x30c4;&#x30fc;&#x30eb;&#x3067;&#x78ba;&#x8a8d;</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="&#x526f;&#x696d;&#x6240;&#x5f97;&#x7a0e;FAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>&#x6240;&#x5f97;&#x7a0e;&#x7387;&#x306f;&#x4f55;%&#x3092;&#x5165;&#x529b;&#x3059;&#x308c;&#x3070;&#x3044;&#x3044;&#x3067;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x7d66;&#x4e0e;&#x306a;&#x3069;&#x4ed6;&#x306e;&#x6240;&#x5f97;&#x3068;&#x5408;&#x7b97;&#x3057;&#x305f;&#x3068;&#x304d;&#x306e;&#x6982;&#x7b97;&#x7a0e;&#x7387;&#x3092;&#x5165;&#x529b;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;&#x8ab2;&#x7a0e;&#x6240;&#x5f97;&#x304c;&#x5897;&#x3048;&#x308b;&#x3068;&#x7a0e;&#x7387;&#x304c;&#x4e0a;&#x304c;&#x308b;&#x5834;&#x5408;&#x304c;&#x3042;&#x308a;&#x307e;&#x3059;&#x3002;</p>
            </details>
            <details>
              <summary>&#x5fa9;&#x8208;&#x7279;&#x5225;&#x6240;&#x5f97;&#x7a0e;&#x306f;&#x3069;&#x3046;&#x8a08;&#x7b97;&#x3057;&#x307e;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x3053;&#x306e;&#x30c4;&#x30fc;&#x30eb;&#x3067;&#x306f;&#x3001;&#x6240;&#x5f97;&#x7a0e;&#x984d;&#x306b;&#x5fa9;&#x8208;&#x7279;&#x5225;&#x6240;&#x5f97;&#x7a0e;&#x7387;&#x3092;&#x304b;&#x3051;&#x3066;&#x7c21;&#x6613;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;&#x521d;&#x671f;&#x5024;&#x306f;2.1%&#x3067;&#x3059;&#x3002;</p>
            </details>
            <details>
              <summary>&#x4f4f;&#x6c11;&#x7a0e;&#x3084;&#x624b;&#x53d6;&#x308a;&#x306f;&#x3053;&#x306e;&#x7d50;&#x679c;&#x3060;&#x3051;&#x3067;&#x5206;&#x304b;&#x308a;&#x307e;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x6240;&#x5f97;&#x7a0e;&#x3060;&#x3051;&#x3067;&#x306a;&#x304f;&#x4f4f;&#x6c11;&#x7a0e;&#x3084;&#x793e;&#x4f1a;&#x4fdd;&#x967a;&#x6599;&#x306e;&#x5f71;&#x97ff;&#x3082;&#x8003;&#x3048;&#x308b;&#x3068;&#x3001;&#x624b;&#x53d6;&#x308a;&#x306e;&#x5168;&#x4f53;&#x611f;&#x3092;&#x628a;&#x63e1;&#x3057;&#x3084;&#x3059;&#x304f;&#x306a;&#x308a;&#x307e;&#x3059;&#x3002;&#x4e0b;&#x306e;&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;&#x3082;&#x4f75;&#x7528;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="&#x526f;&#x696d;&#x6240;&#x5f97;&#x7a0e;&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;">
          <section class="tool-heading">
            <h2>&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;</h2>
            <p>&#x6240;&#x5f97;&#x7a0e;&#x306e;&#x5f8c;&#x306b;&#x3001;&#x4f4f;&#x6c11;&#x7a0e;&#x3001;&#x624b;&#x53d6;&#x308a;&#x3001;&#x526f;&#x696d;&#x7a0e;&#x91d1;&#x5168;&#x4f53;&#x3092;&#x78ba;&#x8a8d;&#x3067;&#x304d;&#x307e;&#x3059;&#x3002;</p>
          </section>
          <div class="related-links">
            <a href="#resident-tax">&#x526f;&#x696d;&#x4f4f;&#x6c11;&#x7a0e;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#take-home">&#x526f;&#x696d;&#x624b;&#x53d6;&#x308a;&#x8a08;&#x7b97;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#tax">&#x526f;&#x696d;&#x7a0e;&#x91d1;&#x30fb;&#x9752;&#x8272;&#x7533;&#x544a;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="resident-tax" aria-label="&#x526f;&#x696d;&#x4f4f;&#x6c11;&#x7a0e;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;">
        <section class="tool-heading">
          <h2>&#x526f;&#x696d;&#x4f4f;&#x6c11;&#x7a0e;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
          <p>&#x5e74;&#x9593;&#x526f;&#x696d;&#x58f2;&#x4e0a;&#x304b;&#x3089;&#x7d4c;&#x8cbb;&#x30fb;&#x9752;&#x8272;&#x7533;&#x544a;&#x63a7;&#x9664;&#x30fb;&#x57fa;&#x790e;&#x63a7;&#x9664;&#x3092;&#x5dee;&#x3057;&#x5f15;&#x304d;&#x3001;&#x4f4f;&#x6c11;&#x7a0e;&#x306e;&#x6240;&#x5f97;&#x5272;&#x30fb;&#x5747;&#x7b49;&#x5272;&#x30fb;&#x6708;&#x5e73;&#x5747;&#x8ca0;&#x62c5;&#x3068;&#x666e;&#x901a;&#x5fb4;&#x53ce;&#x306e;&#x6ce8;&#x610f;&#x70b9;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
        </section>

        <section class="workspace" aria-label="&#x526f;&#x696d;&#x4f4f;&#x6c11;&#x7a0e;&#x306e;&#x8a08;&#x7b97;">
          <form class="input-panel" id="residentTaxForm">
            <div class="field">
              <label for="residentTaxSales">&#x5e74;&#x9593;&#x526f;&#x696d;&#x58f2;&#x4e0a; <span class="unit">&#x5186;</span></label>
              <input id="residentTaxSales" name="residentTaxSales" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="1200000" required aria-describedby="residentTaxSalesError">
              <p class="error" id="residentTaxSalesError"></p>
            </div>
            <div class="field">
              <label for="residentTaxExpenses">&#x5e74;&#x9593;&#x7d4c;&#x8cbb; <span class="unit">&#x5186;</span></label>
              <input id="residentTaxExpenses" name="residentTaxExpenses" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="200000" required aria-describedby="residentTaxExpensesError">
              <p class="error" id="residentTaxExpensesError"></p>
            </div>
            <div class="field">
              <label for="residentTaxBlueDeduction">&#x9752;&#x8272;&#x7533;&#x544a;&#x63a7;&#x9664;&#x984d; <span class="unit">&#x5186;</span></label>
              <input id="residentTaxBlueDeduction" name="residentTaxBlueDeduction" type="number" inputmode="numeric" min="0" max="650000" step="10000" value="100000" required aria-describedby="residentTaxBlueDeductionError">
              <p class="error" id="residentTaxBlueDeductionError"></p>
            </div>
            <div class="field">
              <label for="residentTaxBasicDeduction">&#x57fa;&#x790e;&#x63a7;&#x9664;&#x984d; <span class="unit">&#x5186;</span></label>
              <input id="residentTaxBasicDeduction" name="residentTaxBasicDeduction" type="number" inputmode="numeric" min="0" max="10000000" step="10000" value="430000" required aria-describedby="residentTaxBasicDeductionError">
              <p class="error" id="residentTaxBasicDeductionError"></p>
            </div>
            <div class="field">
              <label for="residentTaxRateInput">&#x4f4f;&#x6c11;&#x7a0e;&#x7387; <span class="unit">%</span></label>
              <input id="residentTaxRateInput" name="residentTaxRateInput" type="number" inputmode="decimal" min="0" max="20" step="0.1" value="10" required aria-describedby="residentTaxRateInputError">
              <p class="error" id="residentTaxRateInputError"></p>
            </div>
            <div class="field">
              <label for="residentTaxPerCapita">&#x5747;&#x7b49;&#x5272;&#x984d; <span class="unit">&#x5186;</span></label>
              <input id="residentTaxPerCapita" name="residentTaxPerCapita" type="number" inputmode="numeric" min="0" max="100000" step="500" value="5000" required aria-describedby="residentTaxPerCapitaError">
              <p class="error" id="residentTaxPerCapitaError"></p>
            </div>
            <div class="actions">
              <button type="reset">&#x30ea;&#x30bb;&#x30c3;&#x30c8;</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">&#x5e74;&#x9593;&#x4f4f;&#x6c11;&#x7a0e;&#x306e;&#x6982;&#x7b97;&#x984d;</p>
              <p class="amount" id="residentTaxAnnualTotal">0&#x5186;</p>
            </div>
            <p class="notice" id="residentTaxNotice">&#x5165;&#x529b;&#x3092;&#x78ba;&#x8a8d;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;&#x30a8;&#x30e9;&#x30fc;&#x304c;&#x3042;&#x308b;&#x9805;&#x76ee;&#x306f;&#x8d64;&#x304f;&#x8868;&#x793a;&#x3055;&#x308c;&#x307e;&#x3059;&#x3002;</p>
            <div class="result-grid">
              <div class="metric">
                <strong>&#x526f;&#x696d;&#x6240;&#x5f97;</strong>
                <span class="accent-blue" id="residentTaxIncome">0&#x5186;</span>
                <small>&#x58f2;&#x4e0a; - &#x7d4c;&#x8cbb; - &#x9752;&#x8272;&#x7533;&#x544a;&#x63a7;&#x9664;</small>
              </div>
              <div class="metric">
                <strong>&#x8ab2;&#x7a0e;&#x6240;&#x5f97;</strong>
                <span class="accent-blue" id="residentTaxTaxableIncome">0&#x5186;</span>
                <small>&#x526f;&#x696d;&#x6240;&#x5f97; - &#x57fa;&#x790e;&#x63a7;&#x9664;</small>
              </div>
              <div class="metric">
                <strong>&#x4f4f;&#x6c11;&#x7a0e;&#x6240;&#x5f97;&#x5272;</strong>
                <span class="accent-amber" id="residentTaxIncomeBased">0&#x5186;</span>
                <small>&#x8ab2;&#x7a0e;&#x6240;&#x5f97; &#xd7; &#x4f4f;&#x6c11;&#x7a0e;&#x7387;</small>
              </div>
              <div class="metric">
                <strong>&#x5747;&#x7b49;&#x5272;</strong>
                <span class="accent-amber" id="residentTaxPerCapitaResult">0&#x5186;</span>
                <small>&#x81ea;&#x6cbb;&#x4f53;&#x3054;&#x3068;&#x306e;&#x5b9a;&#x984d;&#x76ee;&#x5b89;</small>
              </div>
              <div class="metric">
                <strong>&#x6708;&#x5e73;&#x5747;&#x306e;&#x4f4f;&#x6c11;&#x7a0e;&#x8ca0;&#x62c5;</strong>
                <span class="accent-green" id="residentTaxMonthly">0&#x5186;</span>
                <small>&#x5e74;&#x9593;&#x4f4f;&#x6c11;&#x7a0e; &#xf7; 12</small>
              </div>
              <div class="metric">
                <strong>&#x666e;&#x901a;&#x5fb4;&#x53ce;&#x306e;&#x6ce8;&#x610f;&#x70b9;</strong>
                <span class="accent-blue text-metric" id="residentTaxCollectionNote">&#x672a;&#x8a08;&#x7b97;</span>
                <small>&#x81ea;&#x5206;&#x3067;&#x7d0d;&#x4ed8;&#x3092;&#x9078;&#x3076;&#x969b;&#x306e;&#x76ee;&#x5b89;</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="&#x526f;&#x696d;&#x4f4f;&#x6c11;&#x7a0e;FAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>&#x666e;&#x901a;&#x5fb4;&#x53ce;&#x3092;&#x9078;&#x3079;&#x3070;&#x5fc5;&#x305a;&#x4f1a;&#x793e;&#x306b;&#x77e5;&#x3089;&#x308c;&#x307e;&#x305b;&#x3093;&#x304b;&#xFF1F;</summary>
              <p>&#x5fc5;&#x305a;&#x77e5;&#x3089;&#x308c;&#x306a;&#x3044;&#x3068;&#x306f;&#x8a00;&#x3044;&#x5207;&#x308c;&#x307e;&#x305b;&#x3093;&#x3002;&#x78ba;&#x5b9a;&#x7533;&#x544a;&#x66f8;&#x7b2c;&#x4e8c;&#x8868;&#x3084;&#x4f4f;&#x6c11;&#x7a0e;&#x7533;&#x544a;&#x3067;&#x300c;&#x81ea;&#x5206;&#x3067;&#x7d0d;&#x4ed8;&#x300d;&#x3092;&#x9078;&#x3073;&#x3001;&#x5ff5;&#x306e;&#x305f;&#x3081;&#x81ea;&#x6cbb;&#x4f53;&#x306b;&#x53cd;&#x6620;&#x53ef;&#x5426;&#x3092;&#x78ba;&#x8a8d;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;</p>
            </details>
            <details>
              <summary>&#x4f4f;&#x6c11;&#x7a0e;&#x7387;&#x306f;&#x4f55;%&#x3067;&#x5165;&#x529b;&#x3059;&#x308c;&#x3070;&#x3044;&#x3044;&#x3067;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x591a;&#x304f;&#x306e;&#x5834;&#x5408;&#x306f;&#x6240;&#x5f97;&#x5272;10%&#x304c;&#x76ee;&#x5b89;&#x3067;&#x3059;&#x3002;&#x5747;&#x7b49;&#x5272;&#x306f;&#x81ea;&#x6cbb;&#x4f53;&#x306b;&#x3088;&#x3063;&#x3066;&#x7570;&#x306a;&#x308b;&#x305f;&#x3081;&#x3001;&#x304a;&#x4f4f;&#x307e;&#x3044;&#x306e;&#x81ea;&#x6cbb;&#x4f53;&#x306e;&#x91d1;&#x984d;&#x306b;&#x8abf;&#x6574;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;</p>
            </details>
            <details>
              <summary>&#x526f;&#x696d;&#x6240;&#x5f97;20&#x4e07;&#x5186;&#x4ee5;&#x4e0b;&#x306a;&#x3089;&#x4f4f;&#x6c11;&#x7a0e;&#x7533;&#x544a;&#x306f;&#x4e0d;&#x8981;&#x3067;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x6240;&#x5f97;&#x7a0e;&#x306e;&#x78ba;&#x5b9a;&#x7533;&#x544a;&#x304c;&#x4e0d;&#x8981;&#x3067;&#x3082;&#x3001;&#x4f4f;&#x6c11;&#x7a0e;&#x306e;&#x7533;&#x544a;&#x304c;&#x5fc5;&#x8981;&#x306a;&#x5834;&#x5408;&#x304c;&#x3042;&#x308a;&#x307e;&#x3059;&#x3002;&#x526f;&#x696d;&#x6240;&#x5f97;&#x304c;&#x3042;&#x308b;&#x5834;&#x5408;&#x306f;&#x81ea;&#x6cbb;&#x4f53;&#x306b;&#x78ba;&#x8a8d;&#x3059;&#x308b;&#x3068;&#x5b89;&#x5fc3;&#x3067;&#x3059;&#x3002;</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="&#x526f;&#x696d;&#x4f4f;&#x6c11;&#x7a0e;&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;">
          <section class="tool-heading">
            <h2>&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;</h2>
            <p>&#x526f;&#x696d;&#x306e;&#x7a0e;&#x984d;&#x3001;&#x624b;&#x53d6;&#x308a;&#x3001;&#x6708;&#x53ce;&#x306e;&#x5168;&#x4f53;&#x611f;&#x3092;&#x4e00;&#x7dd2;&#x306b;&#x78ba;&#x8a8d;&#x3067;&#x304d;&#x307e;&#x3059;&#x3002;</p>
          </section>
          <div class="related-links">
            <a href="#income-tax">&#x526f;&#x696d;&#x6240;&#x5f97;&#x7a0e;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#tax">&#x526f;&#x696d;&#x7a0e;&#x91d1;&#x30fb;&#x9752;&#x8272;&#x7533;&#x544a;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#take-home">&#x526f;&#x696d;&#x624b;&#x53d6;&#x308a;&#x8a08;&#x7b97;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="take-home" aria-label="&#x526f;&#x696d;&#x624b;&#x53d6;&#x308a;&#x8a08;&#x7b97;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;">
        <section class="tool-heading">
          <h2>&#x526f;&#x696d;&#x624b;&#x53d6;&#x308a;&#x8a08;&#x7b97;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
          <p>&#x526f;&#x696d;&#x53ce;&#x5165;&#x304b;&#x3089;&#x7d4c;&#x8cbb;&#x30fb;&#x7a0e;&#x91d1;&#x30fb;&#x793e;&#x4f1a;&#x4fdd;&#x967a;&#x6599;&#x306e;&#x76ee;&#x5b89;&#x3092;&#x5dee;&#x3057;&#x5f15;&#x304d;&#x3001;&#x5e74;&#x9593;&#x3068;&#x6708;&#x5e73;&#x5747;&#x306e;&#x624b;&#x53d6;&#x308a;&#x984d;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
        </section>

        <section class="workspace" aria-label="&#x526f;&#x696d;&#x624b;&#x53d6;&#x308a;&#x306e;&#x8a08;&#x7b97;">
          <form class="input-panel" id="takeHomeForm">
            <div class="field">
              <label for="takeHomeSales">&#x5e74;&#x9593;&#x526f;&#x696d;&#x58f2;&#x4e0a; <span class="unit">&#x5186;</span></label>
              <input id="takeHomeSales" name="takeHomeSales" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="3000000" required aria-describedby="takeHomeSalesError">
              <p class="error" id="takeHomeSalesError"></p>
            </div>
            <div class="field">
              <label for="takeHomeExpenses">&#x5e74;&#x9593;&#x7d4c;&#x8cbb; <span class="unit">&#x5186;</span></label>
              <input id="takeHomeExpenses" name="takeHomeExpenses" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="600000" required aria-describedby="takeHomeExpensesError">
              <p class="error" id="takeHomeExpensesError"></p>
            </div>
            <div class="field">
              <label for="takeHomeIncomeTaxRate">&#x6240;&#x5f97;&#x7a0e;&#x7387; <span class="unit">%</span></label>
              <input id="takeHomeIncomeTaxRate" name="takeHomeIncomeTaxRate" type="number" inputmode="decimal" min="0" max="45" step="0.1" value="10" required aria-describedby="takeHomeIncomeTaxRateError">
              <p class="error" id="takeHomeIncomeTaxRateError"></p>
            </div>
            <div class="field">
              <label for="takeHomeResidentTaxRate">&#x4f4f;&#x6c11;&#x7a0e;&#x7387; <span class="unit">%</span></label>
              <input id="takeHomeResidentTaxRate" name="takeHomeResidentTaxRate" type="number" inputmode="decimal" min="0" max="20" step="0.1" value="10" required aria-describedby="takeHomeResidentTaxRateError">
              <p class="error" id="takeHomeResidentTaxRateError"></p>
            </div>
            <label class="check-field" for="hasSocialInsurance">
              <input id="hasSocialInsurance" name="hasSocialInsurance" type="checkbox">
              <span>&#x793e;&#x4f1a;&#x4fdd;&#x967a;&#x6599;&#x3042;&#x308a;&#x3067;&#x8a66;&#x7b97;&#x3059;&#x308b;</span>
            </label>
            <div class="field">
              <label for="takeHomeBlueDeduction">&#x9752;&#x8272;&#x7533;&#x544a;&#x63a7;&#x9664;&#x984d; <span class="unit">&#x5186;</span></label>
              <input id="takeHomeBlueDeduction" name="takeHomeBlueDeduction" type="number" inputmode="numeric" min="0" max="650000" step="10000" value="650000" required aria-describedby="takeHomeBlueDeductionError">
              <p class="error" id="takeHomeBlueDeductionError"></p>
            </div>
            <div class="actions">
              <button type="reset">&#x30ea;&#x30bb;&#x30c3;&#x30c8;</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">&#x5e74;&#x9593;&#x624b;&#x53d6;&#x308a;&#x984d;</p>
              <p class="amount" id="finalTakeHome">0&#x5186;</p>
            </div>
            <p class="notice" id="takeHomeNotice">&#x5165;&#x529b;&#x3092;&#x78ba;&#x8a8d;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;&#x30a8;&#x30e9;&#x30fc;&#x304c;&#x3042;&#x308b;&#x9805;&#x76ee;&#x306f;&#x8d64;&#x304f;&#x8868;&#x793a;&#x3055;&#x308c;&#x307e;&#x3059;&#x3002;</p>
            <div class="result-grid">
              <div class="metric">
                <strong>&#x6240;&#x5f97;&#x91d1;&#x984d;</strong>
                <span class="accent-blue" id="takeHomeIncomeAmount">0&#x5186;</span>
                <small>&#x58f2;&#x4e0a; - &#x7d4c;&#x8cbb;</small>
              </div>
              <div class="metric">
                <strong>&#x8ab2;&#x7a0e;&#x6240;&#x5f97;</strong>
                <span class="accent-blue" id="takeHomeTaxableIncome">0&#x5186;</span>
                <small>&#x6240;&#x5f97;&#x91d1;&#x984d; - &#x9752;&#x8272;&#x7533;&#x544a;&#x63a7;&#x9664;</small>
              </div>
              <div class="metric">
                <strong>&#x6240;&#x5f97;&#x7a0e;</strong>
                <span class="accent-amber" id="takeHomeIncomeTax">0&#x5186;</span>
                <small>&#x8ab2;&#x7a0e;&#x6240;&#x5f97; &#xd7; &#x6240;&#x5f97;&#x7a0e;&#x7387;</small>
              </div>
              <div class="metric">
                <strong>&#x4f4f;&#x6c11;&#x7a0e;</strong>
                <span class="accent-amber" id="takeHomeResidentTax">0&#x5186;</span>
                <small>&#x8ab2;&#x7a0e;&#x6240;&#x5f97; &#xd7; &#x4f4f;&#x6c11;&#x7a0e;&#x7387;</small>
              </div>
              <div class="metric">
                <strong>&#x6982;&#x7b97;&#x7a0e;&#x984d;&#x5408;&#x8a08;</strong>
                <span class="accent-amber" id="takeHomeTotalTax">0&#x5186;</span>
                <small>&#x6240;&#x5f97;&#x7a0e; + &#x4f4f;&#x6c11;&#x7a0e;</small>
              </div>
              <div class="metric">
                <strong>&#x6708;&#x5e73;&#x5747;&#x624b;&#x53d6;&#x308a;&#x984d;</strong>
                <span class="accent-green" id="monthlyFinalTakeHome">0&#x5186;</span>
                <small id="socialInsuranceDetail">&#x793e;&#x4f1a;&#x4fdd;&#x967a;&#x6599;&#x306f;&#x672a;&#x53cd;&#x6620;</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="&#x526f;&#x696d;&#x624b;&#x53d6;&#x308a;FAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>&#x624b;&#x53d6;&#x308a;&#x984d;&#x306f;&#x3069;&#x3046;&#x8a08;&#x7b97;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x5e74;&#x9593;&#x526f;&#x696d;&#x58f2;&#x4e0a;&#x304b;&#x3089;&#x5e74;&#x9593;&#x7d4c;&#x8cbb;&#x3001;&#x6240;&#x5f97;&#x7a0e;&#x3001;&#x4f4f;&#x6c11;&#x7a0e;&#x3001;&#x793e;&#x4f1a;&#x4fdd;&#x967a;&#x6599;&#x3042;&#x308a;&#x306e;&#x5834;&#x5408;&#x306f;&#x305d;&#x306e;&#x6982;&#x7b97;&#x984d;&#x3092;&#x5dee;&#x3057;&#x5f15;&#x3044;&#x3066;&#x3044;&#x307e;&#x3059;&#x3002;</p>
            </details>
            <details>
              <summary>&#x793e;&#x4f1a;&#x4fdd;&#x967a;&#x6599;&#x306f;&#x3044;&#x304f;&#x3089;&#x3067;&#x8a66;&#x7b97;&#x3055;&#x308c;&#x307e;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x7c21;&#x6613;&#x8a66;&#x7b97;&#x3068;&#x3057;&#x3066;&#x6240;&#x5f97;&#x91d1;&#x984d;&#x306e;15%&#x3092;&#x624b;&#x53d6;&#x308a;&#x304b;&#x3089;&#x63a7;&#x9664;&#x3057;&#x307e;&#x3059;&#x3002;&#x5b9f;&#x969b;&#x306e;&#x91d1;&#x984d;&#x306f;&#x52a0;&#x5165;&#x72b6;&#x6cc1;&#x3084;&#x81ea;&#x6cbb;&#x4f53;&#x306b;&#x3088;&#x3063;&#x3066;&#x5909;&#x308f;&#x308a;&#x307e;&#x3059;&#x3002;</p>
            </details>
            <details>
              <summary>&#x7a0e;&#x91d1;&#x30fb;&#x9752;&#x8272;&#x7533;&#x544a;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;&#x3068;&#x306e;&#x9055;&#x3044;&#x306f;&#x4f55;&#x3067;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x3053;&#x306e;&#x30c4;&#x30fc;&#x30eb;&#x306f;&#x7a0e;&#x91d1;&#x5f8c;&#x306e;&#x6700;&#x7d42;&#x7684;&#x306a;&#x624b;&#x53d6;&#x308a;&#x984d;&#x3092;&#x898b;&#x308b;&#x305f;&#x3081;&#x306e;&#x30c4;&#x30fc;&#x30eb;&#x3067;&#x3059;&#x3002;&#x7a0e;&#x984d;&#x306e;&#x5185;&#x8a33;&#x3092;&#x91cd;&#x8996;&#x3059;&#x308b;&#x5834;&#x5408;&#x306f;&#x7a0e;&#x91d1;&#x30fb;&#x9752;&#x8272;&#x7533;&#x544a;&#x30c4;&#x30fc;&#x30eb;&#x3082;&#x4f75;&#x7528;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;">
          <section class="tool-heading">
            <h2>&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;</h2>
            <p>&#x526f;&#x696d;&#x306e;&#x58f2;&#x4e0a;&#x3001;&#x7a0e;&#x91d1;&#x3001;&#x6642;&#x7d66;&#x3092;&#x5225;&#x89d2;&#x5ea6;&#x304b;&#x3089;&#x78ba;&#x8a8d;&#x3067;&#x304d;&#x307e;&#x3059;&#x3002;</p>
          </section>
          <div class="related-links">
            <a href="#income-tax">&#x526f;&#x696d;&#x6240;&#x5f97;&#x7a0e;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#resident-tax">&#x526f;&#x696d;&#x4f4f;&#x6c11;&#x7a0e;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#tax">&#x526f;&#x696d;&#x7a0e;&#x91d1;&#x30fb;&#x9752;&#x8272;&#x7533;&#x544a;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="nisa" aria-label="&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;">
        <section class="tool-heading">
          <h2>&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
          <p>&#x521d;&#x671f;&#x6295;&#x8cc7;&#x984d;&#x3068;&#x6bce;&#x6708;&#x306e;&#x7a4d;&#x7acb;&#x984d;&#x3092;&#x3082;&#x3068;&#x306b;&#x3001;&#x904b;&#x7528;&#x5e74;&#x6570;&#x5f8c;&#x306e;&#x5c06;&#x6765;&#x8cc7;&#x7523;&#x3001;&#x5143;&#x672c;&#x3001;&#x904b;&#x7528;&#x76ca;&#x3001;&#x76ee;&#x6a19;&#x9054;&#x6210;&#x307e;&#x3067;&#x306e;&#x5e74;&#x6570;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
        </section>

        <section class="workspace" aria-label="&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;&#x306e;&#x8a08;&#x7b97;">
          <form class="input-panel" id="nisaForm">
            <div class="field">
              <label for="nisaInitial">&#x521d;&#x671f;&#x6295;&#x8cc7;&#x984d; <span class="unit">&#x5186;</span></label>
              <input id="nisaInitial" name="nisaInitial" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="1000000" required aria-describedby="nisaInitialError">
              <p class="error" id="nisaInitialError"></p>
            </div>
            <div class="field">
              <label for="nisaMonthly">&#x6bce;&#x6708;&#x7a4d;&#x7acb;&#x984d; <span class="unit">&#x5186; / &#x6708;</span></label>
              <input id="nisaMonthly" name="nisaMonthly" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="50000" required aria-describedby="nisaMonthlyError">
              <p class="error" id="nisaMonthlyError"></p>
            </div>
            <div class="field">
              <label for="nisaAnnualReturn">&#x60f3;&#x5b9a;&#x5e74;&#x5229; <span class="unit">%</span></label>
              <input id="nisaAnnualReturn" name="nisaAnnualReturn" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="4" required aria-describedby="nisaAnnualReturnError">
              <p class="error" id="nisaAnnualReturnError"></p>
            </div>
            <div class="field">
              <label for="nisaYears">&#x904b;&#x7528;&#x5e74;&#x6570; <span class="unit">&#x5e74;</span></label>
              <input id="nisaYears" name="nisaYears" type="number" inputmode="decimal" min="0" max="100" step="0.5" value="20" required aria-describedby="nisaYearsError">
              <p class="error" id="nisaYearsError"></p>
            </div>
            <div class="field">
              <label for="nisaTarget">&#x76ee;&#x6a19;&#x91d1;&#x984d; <span class="unit">&#x5186;</span></label>
              <input id="nisaTarget" name="nisaTarget" type="number" inputmode="numeric" min="0" max="10000000000" step="10000" value="30000000" required aria-describedby="nisaTargetError">
              <p class="error" id="nisaTargetError"></p>
            </div>
            <div class="actions">
              <button type="reset">&#x30ea;&#x30bb;&#x30c3;&#x30c8;</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">&#x5c06;&#x6765;&#x8cc7;&#x7523;&#x984d;</p>
              <p class="amount" id="nisaFutureAssets">0&#x5186;</p>
            </div>
            <p class="notice" id="nisaNotice">&#x5165;&#x529b;&#x3092;&#x78ba;&#x8a8d;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;&#x30a8;&#x30e9;&#x30fc;&#x304c;&#x3042;&#x308b;&#x9805;&#x76ee;&#x306f;&#x8d64;&#x304f;&#x8868;&#x793a;&#x3055;&#x308c;&#x307e;&#x3059;&#x3002;</p>
            <div class="result-grid">
              <div class="metric">
                <strong>&#x5143;&#x672c;&#x5408;&#x8a08;</strong>
                <span class="accent-blue" id="nisaPrincipal">0&#x5186;</span>
                <small>&#x521d;&#x671f;&#x6295;&#x8cc7;&#x984d; + &#x6bce;&#x6708;&#x7a4d;&#x7acb;&#x984d; &#xd7; &#x6708;&#x6570;</small>
              </div>
              <div class="metric">
                <strong>&#x904b;&#x7528;&#x76ca;</strong>
                <span class="accent-green" id="nisaProfit">0&#x5186;</span>
                <small>&#x5c06;&#x6765;&#x8cc7;&#x7523;&#x984d; - &#x5143;&#x672c;&#x5408;&#x8a08;</small>
              </div>
              <div class="metric">
                <strong>&#x76ee;&#x6a19;&#x9054;&#x6210;&#x307e;&#x3067;&#x306e;&#x5e74;&#x6570;</strong>
                <span class="accent-amber" id="nisaAchievementYears">&#x672a;&#x8a08;&#x7b97;</span>
                <small>&#x76ee;&#x6a19;&#x91d1;&#x984d;&#x306b;&#x5c4a;&#x304f;&#x307e;&#x3067;&#x306e;&#x76ee;&#x5b89;</small>
              </div>
              <div class="metric">
                <strong>FIRE&#x9054;&#x6210;&#x3078;&#x306e;&#x76ee;&#x5b89;</strong>
                <span class="accent-blue" id="nisaFireGuide">&#x672a;&#x8a08;&#x7b97;</span>
                <small id="nisaFireDetail">FIRE&#x9054;&#x6210;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;&#x3068;&#x4f75;&#x7528;&#x3057;&#x3066;&#x78ba;&#x8a8d;</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;FAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>&#x65b0;NISA&#x306e;&#x975e;&#x8ab2;&#x7a0e;&#x52b9;&#x679c;&#x306f;&#x53cd;&#x6620;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x3053;&#x306e;&#x30c4;&#x30fc;&#x30eb;&#x306f;&#x7a0e;&#x5f15;&#x524d;&#x306e;&#x904b;&#x7528;&#x8a66;&#x7b97;&#x3067;&#x3059;&#x3002;&#x65b0;NISA&#x53e3;&#x5ea7;&#x5185;&#x306e;&#x904b;&#x7528;&#x76ca;&#x306f;&#x4e00;&#x822c;&#x7684;&#x306b;&#x975e;&#x8ab2;&#x7a0e;&#x3067;&#x3059;&#x304c;&#x3001;&#x624b;&#x6570;&#x6599;&#x3084;&#x5236;&#x5ea6;&#x4e0a;&#x9650;&#x306f;&#x542b;&#x3081;&#x3066;&#x3044;&#x307e;&#x305b;&#x3093;&#x3002;</p>
            </details>
            <details>
              <summary>&#x60f3;&#x5b9a;&#x5e74;&#x5229;&#x306f;&#x4f55;%&#x3067;&#x5165;&#x308c;&#x308c;&#x3070;&#x3044;&#x3044;&#x3067;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x5e74;&#x5229;&#x306f;&#x5c06;&#x6765;&#x3092;&#x4fdd;&#x8a3c;&#x3059;&#x308b;&#x3082;&#x306e;&#x3067;&#x306f;&#x3042;&#x308a;&#x307e;&#x305b;&#x3093;&#x3002;3%&#x3001;4%&#x3001;5%&#x306a;&#x3069;&#x8907;&#x6570;&#x306e;&#x30d1;&#x30bf;&#x30fc;&#x30f3;&#x3067;&#x8a66;&#x3059;&#x3068;&#x3001;&#x76ee;&#x6a19;&#x306b;&#x5bfe;&#x3059;&#x308b;&#x611f;&#x5ea6;&#x304c;&#x898b;&#x3048;&#x3084;&#x3059;&#x304f;&#x306a;&#x308a;&#x307e;&#x3059;&#x3002;</p>
            </details>
            <details>
              <summary>FIRE&#x9054;&#x6210;&#x3078;&#x306e;&#x76ee;&#x5b89;&#x306f;&#x3069;&#x3046;&#x898b;&#x308c;&#x3070;&#x3044;&#x3044;&#x3067;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x76ee;&#x6a19;&#x91d1;&#x984d;&#x306b;&#x5bfe;&#x3059;&#x308b;&#x5230;&#x9054;&#x7387;&#x3092;&#x8868;&#x793a;&#x3057;&#x307e;&#x3059;&#x3002;&#x751f;&#x6d3b;&#x8cbb;&#x304b;&#x3089;&#x5fc5;&#x8981;&#x8cc7;&#x7523;&#x3092;&#x7d30;&#x304b;&#x304f;&#x898b;&#x305f;&#x3044;&#x5834;&#x5408;&#x306f;&#x3001;FIRE&#x9054;&#x6210;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;&#x3082;&#x5408;&#x308f;&#x305b;&#x3066;&#x4f7f;&#x3063;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="FIRE&#x9054;&#x6210;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;&#x3078;&#x306e;&#x5185;&#x90e8;&#x30ea;&#x30f3;&#x30af;">
          <section class="tool-heading">
            <h2>&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;</h2>
            <p>&#x7a4d;&#x7acb;&#x6295;&#x8cc7;&#x306e;&#x7d50;&#x679c;&#x3092;&#x3001;FIRE&#x9054;&#x6210;&#x307e;&#x3067;&#x306e;&#x5e74;&#x6570;&#x3068;&#x5408;&#x308f;&#x305b;&#x3066;&#x78ba;&#x8a8d;&#x3067;&#x304d;&#x307e;&#x3059;&#x3002;</p>
          </section>
          <div class="related-links">
            <a href="#ideco">iDeCo&#x7bc0;&#x7a0e;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#fire">FIRE&#x9054;&#x6210;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#retirement">&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="ideco" aria-label="iDeCo&#x7bc0;&#x7a0e;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;">
        <section class="tool-heading">
          <h2>iDeCo&#x7bc0;&#x7a0e;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
          <p>&#x6bce;&#x6708;&#x306e;iDeCo&#x639b;&#x91d1;&#x3001;&#x8ab2;&#x7a0e;&#x6240;&#x5f97;&#x3001;&#x7a0e;&#x7387;&#x3001;&#x904b;&#x7528;&#x5e74;&#x6570;&#x304b;&#x3089;&#x3001;&#x5e74;&#x9593;&#x306e;&#x7bc0;&#x7a0e;&#x984d;&#x3068;&#x904b;&#x7528;&#x5f8c;&#x306e;&#x60f3;&#x5b9a;&#x8cc7;&#x7523;&#x984d;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
        </section>

        <section class="workspace" aria-label="iDeCo&#x7bc0;&#x7a0e;&#x306e;&#x8a08;&#x7b97;">
          <form class="input-panel" id="idecoForm">
            <div class="field">
              <label for="idecoAnnualIncome">&#x5e74;&#x53ce; <span class="unit">&#x5186;</span></label>
              <input id="idecoAnnualIncome" name="idecoAnnualIncome" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="5000000" required aria-describedby="idecoAnnualIncomeError">
              <p class="error" id="idecoAnnualIncomeError"></p>
            </div>
            <div class="field">
              <label for="idecoTaxableIncome">&#x8ab2;&#x7a0e;&#x6240;&#x5f97; <span class="unit">&#x5186;</span></label>
              <input id="idecoTaxableIncome" name="idecoTaxableIncome" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="3000000" required aria-describedby="idecoTaxableIncomeError">
              <p class="error" id="idecoTaxableIncomeError"></p>
            </div>
            <div class="field">
              <label for="idecoIncomeTaxRate">&#x6240;&#x5f97;&#x7a0e;&#x7387; <span class="unit">%</span></label>
              <input id="idecoIncomeTaxRate" name="idecoIncomeTaxRate" type="number" inputmode="decimal" min="0" max="45" step="0.1" value="10" required aria-describedby="idecoIncomeTaxRateError">
              <p class="error" id="idecoIncomeTaxRateError"></p>
            </div>
            <div class="field">
              <label for="idecoResidentTaxRate">&#x4f4f;&#x6c11;&#x7a0e;&#x7387; <span class="unit">%</span></label>
              <input id="idecoResidentTaxRate" name="idecoResidentTaxRate" type="number" inputmode="decimal" min="0" max="20" step="0.1" value="10" required aria-describedby="idecoResidentTaxRateError">
              <p class="error" id="idecoResidentTaxRateError"></p>
            </div>
            <div class="field">
              <label for="idecoMonthlyContribution">&#x6bce;&#x6708;&#x306e;iDeCo&#x639b;&#x91d1; <span class="unit">&#x5186; / &#x6708;</span></label>
              <input id="idecoMonthlyContribution" name="idecoMonthlyContribution" type="number" inputmode="numeric" min="0" max="68000" step="1000" value="23000" required aria-describedby="idecoMonthlyContributionError">
              <p class="error" id="idecoMonthlyContributionError"></p>
            </div>
            <div class="field">
              <label for="idecoYears">&#x904b;&#x7528;&#x5e74;&#x6570; <span class="unit">&#x5e74;</span></label>
              <input id="idecoYears" name="idecoYears" type="number" inputmode="decimal" min="0" max="100" step="0.5" value="20" required aria-describedby="idecoYearsError">
              <p class="error" id="idecoYearsError"></p>
            </div>
            <div class="field">
              <label for="idecoAnnualReturn">&#x60f3;&#x5b9a;&#x5e74;&#x5229; <span class="unit">%</span></label>
              <input id="idecoAnnualReturn" name="idecoAnnualReturn" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="3" required aria-describedby="idecoAnnualReturnError">
              <p class="error" id="idecoAnnualReturnError"></p>
            </div>
            <div class="actions">
              <button type="reset">&#x30ea;&#x30bb;&#x30c3;&#x30c8;</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">&#x5e74;&#x9593;&#x7bc0;&#x7a0e;&#x984d;&#x5408;&#x8a08;</p>
              <p class="amount" id="idecoAnnualSaving">0&#x5186;</p>
            </div>
            <p class="notice" id="idecoNotice">&#x5165;&#x529b;&#x3092;&#x78ba;&#x8a8d;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;&#x30a8;&#x30e9;&#x30fc;&#x304c;&#x3042;&#x308b;&#x9805;&#x76ee;&#x306f;&#x8d64;&#x304f;&#x8868;&#x793a;&#x3055;&#x308c;&#x307e;&#x3059;&#x3002;</p>
            <div class="result-grid">
              <div class="metric">
                <strong>&#x5e74;&#x9593;&#x639b;&#x91d1;&#x984d;</strong>
                <span class="accent-blue" id="idecoAnnualContribution">0&#x5186;</span>
                <small>&#x6bce;&#x6708;&#x306e;iDeCo&#x639b;&#x91d1; &#xd7; 12&#x304b;&#x6708;</small>
              </div>
              <div class="metric">
                <strong>&#x6240;&#x5f97;&#x7a0e;&#x306e;&#x7bc0;&#x7a0e;&#x984d;</strong>
                <span class="accent-green" id="idecoIncomeTaxSaving">0&#x5186;</span>
                <small>&#x639b;&#x91d1;&#x63a7;&#x9664;&#x5bfe;&#x8c61;&#x984d; &#xd7; &#x6240;&#x5f97;&#x7a0e;&#x7387;</small>
              </div>
              <div class="metric">
                <strong>&#x4f4f;&#x6c11;&#x7a0e;&#x306e;&#x7bc0;&#x7a0e;&#x984d;</strong>
                <span class="accent-green" id="idecoResidentTaxSaving">0&#x5186;</span>
                <small>&#x639b;&#x91d1;&#x63a7;&#x9664;&#x5bfe;&#x8c61;&#x984d; &#xd7; &#x4f4f;&#x6c11;&#x7a0e;&#x7387;</small>
              </div>
              <div class="metric">
                <strong>&#x904b;&#x7528;&#x5f8c;&#x306e;&#x60f3;&#x5b9a;&#x8cc7;&#x7523;&#x984d;</strong>
                <span class="accent-blue" id="idecoFutureAssets">0&#x5186;</span>
                <small>&#x6bce;&#x6708;&#x7a4d;&#x7acb;&#x3092;&#x60f3;&#x5b9a;&#x5e74;&#x5229;&#x3067;&#x904b;&#x7528;&#x3057;&#x305f;&#x76ee;&#x5b89;</small>
              </div>
              <div class="metric">
                <strong>&#x7bc0;&#x7a0e;+&#x904b;&#x7528;&#x76ca;&#x306e;&#x5408;&#x8a08;&#x30e1;&#x30ea;&#x30c3;&#x30c8;</strong>
                <span class="accent-amber" id="idecoTotalMerit">0&#x5186;</span>
                <small id="idecoMeritDetail">&#x7bc0;&#x7a0e;&#x984d;&#x306e;&#x7d2f;&#x8a08; + &#x904b;&#x7528;&#x76ca;</small>
              </div>
              <div class="metric">
                <strong>&#x65b0;NISA&#x3068;&#x306e;&#x9055;&#x3044;</strong>
                <span class="accent-blue" id="idecoNisaDifference">&#x672a;&#x8a08;&#x7b97;</span>
                <small>iDeCo&#x306f;&#x639b;&#x91d1;&#x306e;&#x6240;&#x5f97;&#x63a7;&#x9664;&#x3001;&#x65b0;NISA&#x306f;&#x904b;&#x7528;&#x76ca;&#x975e;&#x8ab2;&#x7a0e;&#x304c;&#x4e3b;&#x306a;&#x7279;&#x5fb4;</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="iDeCo&#x7bc0;&#x7a0e;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;FAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>iDeCo&#x306e;&#x7bc0;&#x7a0e;&#x984d;&#x306f;&#x3069;&#x3046;&#x8a08;&#x7b97;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x5e74;&#x9593;&#x639b;&#x91d1;&#x984d;&#x3092;&#x8ab2;&#x7a0e;&#x6240;&#x5f97;&#x306e;&#x7bc4;&#x56f2;&#x5185;&#x3067;&#x63a7;&#x9664;&#x5bfe;&#x8c61;&#x3068;&#x3057;&#x3001;&#x6240;&#x5f97;&#x7a0e;&#x7387;&#x3068;&#x4f4f;&#x6c11;&#x7a0e;&#x7387;&#x3092;&#x639b;&#x3051;&#x3066;&#x6982;&#x7b97;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x3002;&#x5b9f;&#x969b;&#x306e;&#x7a0e;&#x984d;&#x306f;&#x6240;&#x5f97;&#x63a7;&#x9664;&#x3084;&#x8ab2;&#x7a0e;&#x72b6;&#x6cc1;&#x306b;&#x3088;&#x3063;&#x3066;&#x5909;&#x308f;&#x308a;&#x307e;&#x3059;&#x3002;</p>
            </details>
            <details>
              <summary>&#x6bce;&#x6708;&#x306e;&#x639b;&#x91d1;&#x306b;&#x4e0a;&#x9650;&#x306f;&#x3042;&#x308a;&#x307e;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>iDeCo&#x306e;&#x639b;&#x91d1;&#x4e0a;&#x9650;&#x306f;&#x8077;&#x696d;&#x3084;&#x52a0;&#x5165;&#x3057;&#x3066;&#x3044;&#x308b;&#x5e74;&#x91d1;&#x5236;&#x5ea6;&#x306b;&#x3088;&#x3063;&#x3066;&#x7570;&#x306a;&#x308a;&#x307e;&#x3059;&#x3002;&#x3053;&#x306e;&#x30c4;&#x30fc;&#x30eb;&#x3067;&#x306f;&#x7c21;&#x6613;&#x8a66;&#x7b97;&#x7528;&#x306b;&#x6708;68,000&#x5186;&#x3092;&#x5165;&#x529b;&#x4e0a;&#x9650;&#x306b;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x3002;</p>
            </details>
            <details>
              <summary>&#x65b0;NISA&#x3068;iDeCo&#x306f;&#x3069;&#x3061;&#x3089;&#x3092;&#x512a;&#x5148;&#x3059;&#x3079;&#x304d;&#x3067;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>iDeCo&#x306f;&#x539f;&#x5247;60&#x6b73;&#x307e;&#x3067;&#x5f15;&#x304d;&#x51fa;&#x305b;&#x306a;&#x3044;&#x4ee3;&#x308f;&#x308a;&#x306b;&#x639b;&#x91d1;&#x306e;&#x6240;&#x5f97;&#x63a7;&#x9664;&#x304c;&#x3042;&#x308a;&#x307e;&#x3059;&#x3002;&#x65b0;NISA&#x306f;&#x6d41;&#x52d5;&#x6027;&#x304c;&#x9ad8;&#x304f;&#x3001;&#x904b;&#x7528;&#x76ca;&#x975e;&#x8ab2;&#x7a0e;&#x304c;&#x4e3b;&#x306a;&#x30e1;&#x30ea;&#x30c3;&#x30c8;&#x3067;&#x3059;&#x3002;&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x3068;&#x4e2d;&#x671f;&#x8cc7;&#x91d1;&#x306e;&#x30d0;&#x30e9;&#x30f3;&#x30b9;&#x3067;&#x5224;&#x65ad;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="iDeCo&#x7bc0;&#x7a0e;&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;">
          <section class="tool-heading">
            <h2>&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;</h2>
            <p>iDeCo&#x306e;&#x7bc0;&#x7a0e;&#x52b9;&#x679c;&#x3092;&#x3001;&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x3001;&#x65b0;NISA&#x3001;FIRE&#x9054;&#x6210;&#x3068;&#x5408;&#x308f;&#x305b;&#x3066;&#x78ba;&#x8a8d;&#x3067;&#x304d;&#x307e;&#x3059;&#x3002;</p>
          </section>
          <div class="related-links">
            <a href="#retirement">&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#nisa">&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#fire">FIRE&#x9054;&#x6210;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="fire" aria-label="FIRE&#x9054;&#x6210;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;">
        <section class="tool-heading">
          <h2>FIRE&#x9054;&#x6210;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
          <p>&#x73fe;&#x5728;&#x8cc7;&#x7523;&#x3001;&#x6bce;&#x6708;&#x7a4d;&#x7acb;&#x984d;&#x3001;&#x60f3;&#x5b9a;&#x5e74;&#x5229;&#x3001;&#x76ee;&#x6a19;&#x8cc7;&#x7523;&#x3001;&#x5e74;&#x6570;&#x3092;&#x5165;&#x308c;&#x308b;&#x3068;&#x3001;&#x9054;&#x6210;&#x5e74;&#x6570;&#x3068;&#x5c06;&#x6765;&#x8cc7;&#x7523;&#x306e;&#x76ee;&#x5b89;&#x304c;&#x3059;&#x3050;&#x306b;&#x66f4;&#x65b0;&#x3055;&#x308c;&#x307e;&#x3059;&#x3002;</p>
        </section>

        <section class="workspace" aria-label="FIRE&#x9054;&#x6210;&#x306e;&#x8a08;&#x7b97;">
          <form class="input-panel" id="fireForm">
            <div class="field">
              <label for="currentAssets">&#x73fe;&#x5728;&#x8cc7;&#x7523; <span class="unit">&#x5186;</span></label>
              <input id="currentAssets" name="currentAssets" type="number" inputmode="numeric" min="0" max="10000000000" step="10000" value="3000000" required aria-describedby="currentAssetsError">
              <p class="error" id="currentAssetsError"></p>
            </div>
            <div class="field">
              <label for="monthlyInvestment">&#x6bce;&#x6708;&#x7a4d;&#x7acb;&#x984d; <span class="unit">&#x5186; / &#x6708;</span></label>
              <input id="monthlyInvestment" name="monthlyInvestment" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="100000" required aria-describedby="monthlyInvestmentError">
              <p class="error" id="monthlyInvestmentError"></p>
            </div>
            <div class="field">
              <label for="annualReturn">&#x60f3;&#x5b9a;&#x5e74;&#x5229; <span class="unit">%</span></label>
              <input id="annualReturn" name="annualReturn" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="4" required aria-describedby="annualReturnError">
              <p class="error" id="annualReturnError"></p>
            </div>
            <div class="field">
              <label for="targetAssets">&#x76ee;&#x6a19;&#x8cc7;&#x7523; <span class="unit">&#x5186;</span></label>
              <input id="targetAssets" name="targetAssets" type="number" inputmode="numeric" min="0" max="10000000000" step="10000" value="50000000" required aria-describedby="targetAssetsError">
              <p class="error" id="targetAssetsError"></p>
            </div>
            <div class="field">
              <label for="years">&#x5e74;&#x6570; <span class="unit">&#x5e74;</span></label>
              <input id="years" name="years" type="number" inputmode="decimal" min="0" max="100" step="0.5" value="20" required aria-describedby="yearsError">
              <p class="error" id="yearsError"></p>
            </div>
            <div class="actions">
              <button type="reset">&#x30ea;&#x30bb;&#x30c3;&#x30c8;</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">&#x9054;&#x6210;&#x5e74;&#x6570;</p>
              <p class="amount" id="achievementYears">0&#x5e74;</p>
            </div>
            <p class="notice" id="fireNotice">&#x5165;&#x529b;&#x3092;&#x78ba;&#x8a8d;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;&#x30a8;&#x30e9;&#x30fc;&#x304c;&#x3042;&#x308b;&#x9805;&#x76ee;&#x306f;&#x8d64;&#x304f;&#x8868;&#x793a;&#x3055;&#x308c;&#x307e;&#x3059;&#x3002;</p>
            <div class="result-grid">
              <div class="metric">
                <strong>&#x5c06;&#x6765;&#x8cc7;&#x7523;</strong>
                <span class="accent-blue" id="futureAssets">0&#x5186;</span>
                <small>&#x5165;&#x529b;&#x3057;&#x305f;&#x5e74;&#x6570;&#x5f8c;&#x306e;&#x898b;&#x8fbc;&#x307f;</small>
              </div>
              <div class="metric">
                <strong>&#x76ee;&#x6a19;&#x3068;&#x306e;&#x5dee;&#x984d;</strong>
                <span class="accent-green" id="gapAmount">0&#x5186;</span>
                <small>&#x5c06;&#x6765;&#x8cc7;&#x7523; - &#x76ee;&#x6a19;&#x8cc7;&#x7523;</small>
              </div>
              <div class="metric">
                <strong>&#x7a4d;&#x7acb;&#x7dcf;&#x984d;</strong>
                <span class="accent-amber" id="totalInvestment">0&#x5186;</span>
                <small>&#x73fe;&#x5728;&#x8cc7;&#x7523; + &#x6bce;&#x6708;&#x7a4d;&#x7acb;&#x984d; &#xd7; &#x6708;&#x6570;</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="FIRE&#x9054;&#x6210;FAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>FIRE&#x9054;&#x6210;&#x5e74;&#x6570;&#x306f;&#x3069;&#x3046;&#x8a08;&#x7b97;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x73fe;&#x5728;&#x8cc7;&#x7523;&#x3068;&#x6bce;&#x6708;&#x306e;&#x7a4d;&#x7acb;&#x984d;&#x3092;&#x3001;&#x5165;&#x529b;&#x3057;&#x305f;&#x60f3;&#x5b9a;&#x5e74;&#x5229;&#x3067;&#x904b;&#x7528;&#x3059;&#x308b;&#x524d;&#x63d0;&#x3067;&#x3001;&#x76ee;&#x6a19;&#x8cc7;&#x7523;&#x306b;&#x5230;&#x9054;&#x3059;&#x308b;&#x307e;&#x3067;&#x306e;&#x5e74;&#x6570;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x3002;</p>
            </details>
            <details>
              <summary>&#x76ee;&#x6a19;&#x8cc7;&#x7523;&#x306f;&#x3069;&#x3046;&#x6c7a;&#x3081;&#x308c;&#x3070;&#x3044;&#x3044;&#x3067;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x4e00;&#x822c;&#x7684;&#x306b;&#x306f;&#x5e74;&#x9593;&#x751f;&#x6d3b;&#x8cbb;&#x306e;25&#x5e74;&#x5206;&#x3092;&#x4e00;&#x3064;&#x306e;&#x76ee;&#x5b89;&#x3068;&#x3057;&#x307e;&#x3059;&#x3002;&#x5bb6;&#x65cf;&#x69cb;&#x6210;&#x3001;&#x4f4f;&#x5c45;&#x8cbb;&#x3001;&#x533b;&#x7642;&#x8cbb;&#x3001;&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x3082;&#x542b;&#x3081;&#x3066;&#x8abf;&#x6574;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;</p>
            </details>
            <details>
              <summary>&#x65b0;NISA&#x3084;iDeCo&#x3068;&#x4f75;&#x7528;&#x3067;&#x304d;&#x307e;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x3067;&#x304d;&#x307e;&#x3059;&#x3002;&#x65b0;NISA&#x306f;&#x904b;&#x7528;&#x76ca;&#x975e;&#x8ab2;&#x7a0e;&#x3001;iDeCo&#x306f;&#x639b;&#x91d1;&#x306e;&#x6240;&#x5f97;&#x63a7;&#x9664;&#x304c;&#x7279;&#x5fb4;&#x3067;&#x3059;&#x3002;&#x8cc7;&#x91d1;&#x306e;&#x4f7f;&#x3044;&#x9053;&#x3084;&#x5f15;&#x304d;&#x51fa;&#x3057;&#x6642;&#x671f;&#x306b;&#x5408;&#x308f;&#x305b;&#x3066;&#x4f7f;&#x3044;&#x5206;&#x3051;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="FIRE&#x9054;&#x6210;&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;">
          <section class="tool-heading">
            <h2>&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;</h2>
            <p>FIRE&#x9054;&#x6210;&#x307e;&#x3067;&#x306e;&#x9053;&#x306e;&#x308a;&#x3092;&#x3001;&#x6295;&#x8cc7;&#x30fb;&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x30fb;&#x526f;&#x696d;&#x53ce;&#x76ca;&#x3068;&#x5408;&#x308f;&#x305b;&#x3066;&#x78ba;&#x8a8d;&#x3067;&#x304d;&#x307e;&#x3059;&#x3002;</p>
          </section>
          <div class="related-links">
            <a href="#nisa">&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#ideco">iDeCo&#x7bc0;&#x7a0e;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#retirement">&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="employee-fire" aria-label="会社員FIRE年数計算シミュレーター">
        <section class="tool-heading">
          <h2>会社員FIRE年数計算シミュレーター</h2>
          <p>現在資産、毎月積立額、副業月収、年間生活費、想定年利、配当収入、目標FIRE資産から、会社員がFIREに到達するまでの年数と副業・配当の効果を試算します。</p>
        </section>

        <section class="workspace" aria-label="会社員FIRE年数の計算">
          <form class="input-panel" id="employeeFireForm">
            <div class="field">
              <label for="employeeFireAge">現在年齢 <span class="unit">歳</span></label>
              <input id="employeeFireAge" name="employeeFireAge" type="number" inputmode="numeric" min="0" max="100" step="1" value="35" required aria-describedby="employeeFireAgeError">
              <p class="error" id="employeeFireAgeError"></p>
            </div>
            <div class="field">
              <label for="employeeFireAssets">現在資産 <span class="unit">円</span></label>
              <input id="employeeFireAssets" name="employeeFireAssets" type="number" inputmode="numeric" min="0" max="10000000000" step="10000" value="5000000" required aria-describedby="employeeFireAssetsError">
              <p class="error" id="employeeFireAssetsError"></p>
            </div>
            <div class="field">
              <label for="employeeFireMonthly">毎月積立額 <span class="unit">円 / 月</span></label>
              <input id="employeeFireMonthly" name="employeeFireMonthly" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="100000" required aria-describedby="employeeFireMonthlyError">
              <p class="error" id="employeeFireMonthlyError"></p>
            </div>
            <div class="field">
              <label for="employeeFireSideIncome">副業月収 <span class="unit">円 / 月</span></label>
              <input id="employeeFireSideIncome" name="employeeFireSideIncome" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="50000" required aria-describedby="employeeFireSideIncomeError">
              <p class="error" id="employeeFireSideIncomeError"></p>
            </div>
            <div class="field">
              <label for="employeeFireLivingCost">年間生活費 <span class="unit">円 / 年</span></label>
              <input id="employeeFireLivingCost" name="employeeFireLivingCost" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="3600000" required aria-describedby="employeeFireLivingCostError">
              <p class="error" id="employeeFireLivingCostError"></p>
            </div>
            <div class="field">
              <label for="employeeFireReturn">想定年利 <span class="unit">%</span></label>
              <input id="employeeFireReturn" name="employeeFireReturn" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="4" required aria-describedby="employeeFireReturnError">
              <p class="error" id="employeeFireReturnError"></p>
            </div>
            <div class="field">
              <label for="employeeFireDividendIncome">配当収入 <span class="unit">円 / 月</span></label>
              <input id="employeeFireDividendIncome" name="employeeFireDividendIncome" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="20000" required aria-describedby="employeeFireDividendIncomeError">
              <p class="error" id="employeeFireDividendIncomeError"></p>
            </div>
            <div class="field">
              <label for="employeeFireTarget">目標FIRE資産 <span class="unit">円</span></label>
              <input id="employeeFireTarget" name="employeeFireTarget" type="number" inputmode="numeric" min="0" max="10000000000" step="10000" value="90000000" required aria-describedby="employeeFireTargetError">
              <p class="error" id="employeeFireTargetError"></p>
            </div>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">FIRE達成年数</p>
              <p class="amount" id="employeeFireYears">0年</p>
            </div>
            <p class="notice" id="employeeFireNotice">入力を確認してください。投資利回りや配当収入は将来の成果を保証するものではありません。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>達成予想年齢</strong>
                <span class="accent-green" id="employeeFireAchieveAge">0歳</span>
                <small>現在年齢 + FIRE達成年数</small>
              </div>
              <div class="metric">
                <strong>必要追加積立額</strong>
                <span class="accent-amber" id="employeeFireAdditionalMonthly">0円</span>
                <small>20年以内の達成を目指す場合の追加月額目安</small>
              </div>
              <div class="metric">
                <strong>副業による短縮年数</strong>
                <span class="accent-blue" id="employeeFireSideIncomeEffect">0年</span>
                <small>副業月収を積立に回す場合の短縮目安</small>
              </div>
              <div class="metric">
                <strong>配当再投資効果</strong>
                <span class="accent-green text-metric" id="employeeFireDividendEffect">0円</span>
                <small>配当収入を再投資に回す場合の積立上乗せ効果</small>
              </div>
              <div class="metric">
                <strong>サイドFIREとの比較</strong>
                <span class="accent-amber text-metric" id="employeeFireSideFireComparison">0円</span>
                <small>副業・配当で生活費を補う場合の必要資産目安</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="会社員FIRE年数計算シミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>会社員FIRE年数はどう計算していますか？</summary>
              <p>現在資産に毎月積立額、副業月収、配当収入を加え、入力した想定年利で運用した場合に、目標FIRE資産へ到達するまでの年数を概算しています。</p>
            </details>
            <details>
              <summary>副業月収はすべて積立に回す前提ですか？</summary>
              <p>このツールでは、入力した副業月収をFIRE用の追加積立に回す前提で試算しています。実際には税金や経費を差し引いた手取りで調整してください。</p>
            </details>
            <details>
              <summary>サイドFIREとの比較は何を見ればよいですか？</summary>
              <p>副業収入や配当収入で生活費の一部を補える場合、完全FIREより必要資産が少なくなる可能性があります。比較結果は、サイドFIREで必要になりそうな資産額との差を示す目安です。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="会社員FIRE関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>会社員FIREは、通常FIRE、サイドFIRE、配当再投資を合わせて見ると、現実的な到達ルートを考えやすくなります。</p>
          </section>
          <div class="related-links">
            <a href="#fire">FIREシミュレーター</a>
            <a href="#side-fire">サイドFIREシミュレーター</a>
            <a href="#dividend-reinvestment">配当再投資シミュレーター</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="cash-flow" aria-label="会社員キャッシュフローシミュレーター">
        <section class="tool-heading">
          <h2>会社員キャッシュフローシミュレーター</h2>
          <p>給与収入、副業収入、家賃、食費、通信費、保険料、投資額、ローン返済額、その他支出から、毎月収支、年間貯蓄額、投資可能額、固定費改善余地を分析します。</p>
        </section>

        <section class="workspace" aria-label="会社員キャッシュフローの計算">
          <form class="input-panel" id="cashFlowForm">
            <div class="field">
              <label for="cashFlowSalary">給与収入 <span class="unit">円 / 月</span></label>
              <input id="cashFlowSalary" name="cashFlowSalary" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="350000" required aria-describedby="cashFlowSalaryError">
              <p class="error" id="cashFlowSalaryError"></p>
            </div>
            <div class="field">
              <label for="cashFlowSideIncome">副業収入 <span class="unit">円 / 月</span></label>
              <input id="cashFlowSideIncome" name="cashFlowSideIncome" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="50000" required aria-describedby="cashFlowSideIncomeError">
              <p class="error" id="cashFlowSideIncomeError"></p>
            </div>
            <div class="field">
              <label for="cashFlowRent">家賃 <span class="unit">円 / 月</span></label>
              <input id="cashFlowRent" name="cashFlowRent" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="90000" required aria-describedby="cashFlowRentError">
              <p class="error" id="cashFlowRentError"></p>
            </div>
            <div class="field">
              <label for="cashFlowFood">食費 <span class="unit">円 / 月</span></label>
              <input id="cashFlowFood" name="cashFlowFood" type="number" inputmode="numeric" min="0" max="100000000" step="5000" value="60000" required aria-describedby="cashFlowFoodError">
              <p class="error" id="cashFlowFoodError"></p>
            </div>
            <div class="field">
              <label for="cashFlowCommunication">通信費 <span class="unit">円 / 月</span></label>
              <input id="cashFlowCommunication" name="cashFlowCommunication" type="number" inputmode="numeric" min="0" max="100000000" step="1000" value="12000" required aria-describedby="cashFlowCommunicationError">
              <p class="error" id="cashFlowCommunicationError"></p>
            </div>
            <div class="field">
              <label for="cashFlowInsurance">保険料 <span class="unit">円 / 月</span></label>
              <input id="cashFlowInsurance" name="cashFlowInsurance" type="number" inputmode="numeric" min="0" max="100000000" step="1000" value="15000" required aria-describedby="cashFlowInsuranceError">
              <p class="error" id="cashFlowInsuranceError"></p>
            </div>
            <div class="field">
              <label for="cashFlowInvestment">投資額 <span class="unit">円 / 月</span></label>
              <input id="cashFlowInvestment" name="cashFlowInvestment" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="80000" required aria-describedby="cashFlowInvestmentError">
              <p class="error" id="cashFlowInvestmentError"></p>
            </div>
            <div class="field">
              <label for="cashFlowLoan">ローン返済額 <span class="unit">円 / 月</span></label>
              <input id="cashFlowLoan" name="cashFlowLoan" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="30000" required aria-describedby="cashFlowLoanError">
              <p class="error" id="cashFlowLoanError"></p>
            </div>
            <div class="field">
              <label for="cashFlowOther">その他支出 <span class="unit">円 / 月</span></label>
              <input id="cashFlowOther" name="cashFlowOther" type="number" inputmode="numeric" min="0" max="100000000" step="5000" value="70000" required aria-describedby="cashFlowOtherError">
              <p class="error" id="cashFlowOtherError"></p>
            </div>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">毎月収支</p>
              <p class="amount" id="cashFlowMonthlyBalance">0円</p>
            </div>
            <p class="notice" id="cashFlowNotice">入力を確認してください。固定費や投資額の見直しは、生活防衛資金を確保したうえで判断してください。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>年間貯蓄額</strong>
                <span class="accent-green" id="cashFlowAnnualSavings">0円</span>
                <small>投資後に残る現金余力の年間目安</small>
              </div>
              <div class="metric">
                <strong>投資可能額</strong>
                <span class="accent-blue" id="cashFlowInvestableAmount">0円</span>
                <small>生活費・固定費を差し引いた月額余力</small>
              </div>
              <div class="metric">
                <strong>固定費改善余地</strong>
                <span class="accent-amber" id="cashFlowFixedCostGap">0円</span>
                <small>収入の35%を目安にした固定費見直し余地</small>
              </div>
              <div class="metric">
                <strong>FIRE達成への影響</strong>
                <span class="accent-green text-metric" id="cashFlowFireImpact">0年</span>
                <small>投資額と黒字を資産形成に回す場合の目安</small>
              </div>
              <div class="metric">
                <strong>おすすめ改善ポイント</strong>
                <span class="accent-amber text-metric" id="cashFlowImprovementPoint">入力を確認してください</span>
                <small>収支、固定費、投資率から優先度を表示</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="会社員キャッシュフローシミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>毎月収支は何を表していますか？</summary>
              <p>給与収入と副業収入から、家賃、食費、通信費、保険料、投資額、ローン返済額、その他支出を差し引いた残りです。投資後にも黒字が残るほど家計の余裕があります。</p>
            </details>
            <details>
              <summary>投資可能額と投資額の違いは何ですか？</summary>
              <p>投資額は現在すでに投資へ回している金額です。投資可能額は、投資を除いた生活費や固定費を支払った後に理論上投資へ回せる余力を示します。</p>
            </details>
            <details>
              <summary>固定費改善余地はどう見ればよいですか？</summary>
              <p>家賃、通信費、保険料、ローン返済額を固定費として、月収の35%を超える部分を見直し余地の目安にしています。まずは通信費や保険料など変更しやすい支出から確認してください。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="会社員キャッシュフロー関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>キャッシュフローを整えたら、固定費、FIRE、生活防衛資金を合わせて確認すると、資産形成の優先順位を決めやすくなります。</p>
          </section>
          <div class="related-links">
            <a href="#fixed-cost-reduction">固定費削減シミュレーター</a>
            <a href="#fire">FIREシミュレーター</a>
            <a href="#emergency-fund">生活防衛資金シミュレーター</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="emergency-fund" aria-label="生活防衛資金シミュレーター">
        <section class="tool-heading">
          <h2>生活防衛資金シミュレーター</h2>
          <p>毎月生活費、家族人数、雇用形態、現在貯蓄額、失業時想定期間、副業収入の有無から、投資やFIREの前に確保したい生活防衛資金を試算します。</p>
        </section>

        <section class="workspace" aria-label="生活防衛資金の計算">
          <form class="input-panel" id="emergencyFundForm">
            <div class="field">
              <label for="emergencyMonthlyCost">毎月生活費 <span class="unit">円 / 月</span></label>
              <input id="emergencyMonthlyCost" name="emergencyMonthlyCost" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="250000" required aria-describedby="emergencyMonthlyCostError">
              <p class="error" id="emergencyMonthlyCostError"></p>
            </div>
            <div class="field">
              <label for="familyCount">家族人数 <span class="unit">人</span></label>
              <input id="familyCount" name="familyCount" type="number" inputmode="numeric" min="1" max="20" step="1" value="2" required aria-describedby="familyCountError">
              <p class="error" id="familyCountError"></p>
            </div>
            <div class="field">
              <label for="employmentType">雇用形態</label>
              <select id="employmentType" name="employmentType" required aria-describedby="employmentTypeError">
                <option value="employee">会社員・公務員</option>
                <option value="contract">契約社員・派遣社員</option>
                <option value="self">自営業・フリーランス</option>
              </select>
              <p class="error" id="employmentTypeError"></p>
            </div>
            <div class="field">
              <label for="emergencySavings">現在貯蓄額 <span class="unit">円</span></label>
              <input id="emergencySavings" name="emergencySavings" type="number" inputmode="numeric" min="0" max="10000000000" step="10000" value="1000000" required aria-describedby="emergencySavingsError">
              <p class="error" id="emergencySavingsError"></p>
            </div>
            <div class="field">
              <label for="unemploymentMonths">失業時想定期間 <span class="unit">か月</span></label>
              <input id="unemploymentMonths" name="unemploymentMonths" type="number" inputmode="numeric" min="1" max="60" step="1" value="6" required aria-describedby="unemploymentMonthsError">
              <p class="error" id="unemploymentMonthsError"></p>
            </div>
            <div class="field">
              <label for="sideIncomeStatus">副業収入有無</label>
              <select id="sideIncomeStatus" name="sideIncomeStatus" required aria-describedby="sideIncomeStatusError">
                <option value="none">副業収入なし</option>
                <option value="small">月5万円程度あり</option>
                <option value="stable">月10万円以上あり</option>
              </select>
              <p class="error" id="sideIncomeStatusError"></p>
            </div>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">必要生活防衛資金</p>
              <p class="amount" id="requiredEmergencyFund">0円</p>
            </div>
            <p class="notice" id="emergencyFundNotice">入力を確認してください。生活防衛資金は投資判断の前提となる安全資金の目安です。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>現在との差額</strong>
                <span class="accent-amber" id="emergencyFundGap">0円</span>
                <small>必要生活防衛資金 - 現在貯蓄額</small>
              </div>
              <div class="metric">
                <strong>必要積立額</strong>
                <span class="accent-green" id="emergencyFundMonthlySaving">0円</span>
                <small>1年で不足額を準備する場合の月額目安</small>
              </div>
              <div class="metric">
                <strong>副業収入による改善効果</strong>
                <span class="accent-blue text-metric" id="emergencyFundSideIncomeEffect">0円</span>
                <small>失業時に副業収入がある場合の必要額圧縮目安</small>
              </div>
              <div class="metric">
                <strong>FIRE前に必要な安全資金</strong>
                <span class="accent-green text-metric" id="emergencyFundFireSafety">0円</span>
                <small>FIRE前に現金で確保したい最低ライン</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="生活防衛資金シミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>生活防衛資金は何か月分が目安ですか？</summary>
              <p>会社員なら6か月前後、自営業やフリーランスなら12か月以上を一つの目安にします。このツールでは雇用形態と失業時想定期間をもとに、やや保守的な必要額を出しています。</p>
            </details>
            <details>
              <summary>副業収入がある場合は少なくしてもいいですか？</summary>
              <p>副業収入が安定している場合、失業時の不足額を一部補える可能性があります。ただし副業も止まるリスクがあるため、過度に少なく見積もらないことが大切です。</p>
            </details>
            <details>
              <summary>FIRE前に生活防衛資金は必要ですか？</summary>
              <p>必要です。FIREや投資を急ぐ前に、相場下落や失業、病気に備える現金を確保しておくと、資産を安値で取り崩すリスクを下げられます。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="生活防衛資金関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>生活防衛資金を確保したうえで、FIREや老後資金の計画へ進むと、無理のない資産形成を考えやすくなります。</p>
          </section>
          <div class="related-links">
            <a href="#fire">FIREシミュレーター</a>
            <a href="#retirement">老後資金シミュレーター</a>
            <a href="#employee-fire">会社員FIRE年数計算シミュレーター</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="fixed-cost-reduction" aria-label="固定費削減シミュレーター">
        <section class="tool-heading">
          <h2>固定費削減シミュレーター</h2>
          <p>家賃、通信費、保険料、サブスク費用、食費、クレカ年会費、その他固定費から、毎月固定費合計と削減可能額、年間節約額を試算します。</p>
        </section>

        <section class="workspace" aria-label="固定費削減の計算">
          <form class="input-panel" id="fixedCostForm">
            <div class="field">
              <label for="rentCost">家賃 <span class="unit">円 / 月</span></label>
              <input id="rentCost" name="rentCost" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="90000" required aria-describedby="rentCostError">
              <p class="error" id="rentCostError"></p>
            </div>
            <div class="field">
              <label for="communicationCost">通信費 <span class="unit">円 / 月</span></label>
              <input id="communicationCost" name="communicationCost" type="number" inputmode="numeric" min="0" max="100000000" step="1000" value="12000" required aria-describedby="communicationCostError">
              <p class="error" id="communicationCostError"></p>
            </div>
            <div class="field">
              <label for="insuranceCost">保険料 <span class="unit">円 / 月</span></label>
              <input id="insuranceCost" name="insuranceCost" type="number" inputmode="numeric" min="0" max="100000000" step="1000" value="18000" required aria-describedby="insuranceCostError">
              <p class="error" id="insuranceCostError"></p>
            </div>
            <div class="field">
              <label for="subscriptionCost">サブスク費用 <span class="unit">円 / 月</span></label>
              <input id="subscriptionCost" name="subscriptionCost" type="number" inputmode="numeric" min="0" max="100000000" step="500" value="5000" required aria-describedby="subscriptionCostError">
              <p class="error" id="subscriptionCostError"></p>
            </div>
            <div class="field">
              <label for="foodCost">食費 <span class="unit">円 / 月</span></label>
              <input id="foodCost" name="foodCost" type="number" inputmode="numeric" min="0" max="100000000" step="5000" value="70000" required aria-describedby="foodCostError">
              <p class="error" id="foodCostError"></p>
            </div>
            <div class="field">
              <label for="creditCardAnnualFee">クレカ年会費 <span class="unit">円 / 年</span></label>
              <input id="creditCardAnnualFee" name="creditCardAnnualFee" type="number" inputmode="numeric" min="0" max="10000000" step="1000" value="11000" required aria-describedby="creditCardAnnualFeeError">
              <p class="error" id="creditCardAnnualFeeError"></p>
            </div>
            <div class="field">
              <label for="otherFixedCost">その他固定費 <span class="unit">円 / 月</span></label>
              <input id="otherFixedCost" name="otherFixedCost" type="number" inputmode="numeric" min="0" max="100000000" step="1000" value="15000" required aria-describedby="otherFixedCostError">
              <p class="error" id="otherFixedCostError"></p>
            </div>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">毎月固定費合計</p>
              <p class="amount" id="fixedCostMonthlyTotal">0円</p>
            </div>
            <p class="notice" id="fixedCostNotice">入力を確認してください。削減可能額は一般的な見直し余地から計算した概算です。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>削減可能額</strong>
                <span class="accent-green" id="fixedCostReducible">0円</span>
                <small>毎月見直せる可能性がある金額</small>
              </div>
              <div class="metric">
                <strong>年間節約額</strong>
                <span class="accent-amber" id="fixedCostAnnualSaving">0円</span>
                <small>削減可能額を12か月続けた場合</small>
              </div>
              <div class="metric">
                <strong>投資へ回した場合の将来資産額</strong>
                <span class="accent-blue" id="fixedCostFutureAssets">0円</span>
                <small>20年・年4%で積み立てた場合の目安</small>
              </div>
              <div class="metric">
                <strong>FIRE達成への影響</strong>
                <span class="accent-green text-metric" id="fixedCostFireImpact">0円</span>
                <small>目標資産3,000万円に対する改善目安</small>
              </div>
              <div class="metric">
                <strong>おすすめ改善ポイント</strong>
                <span class="accent-amber text-metric" id="fixedCostImprovementPoint">入力を確認してください</span>
                <small>金額の大きい項目から見直すと効果が出やすいです</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="固定費削減シミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>削減可能額はどう計算していますか？</summary>
              <p>通信費、保険料、サブスク、食費など、見直しやすさが違うため項目ごとに削減率の目安を変えて概算しています。実際の削減額は契約内容や生活スタイルで変わります。</p>
            </details>
            <details>
              <summary>クレカ年会費はどのように扱いますか？</summary>
              <p>入力した年会費を12か月で割り、月額固定費として合計に含めています。ポイント還元や特典より年会費の負担が大きい場合は、カードの見直し候補になります。</p>
            </details>
            <details>
              <summary>節約額を投資に回すとどれくらい変わりますか？</summary>
              <p>このツールでは、毎月の削減可能額を20年間、年4%で積み立てた場合の将来資産額を表示します。固定費削減は一度見直すと効果が続きやすく、FIREや老後資金にも影響します。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="固定費削減関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>固定費を下げた分は、生活防衛資金やFIRE準備、クレジットカードの見直しと合わせて考えると効果を確認しやすくなります。</p>
          </section>
          <div class="related-links">
            <a href="#fire">FIREシミュレーター</a>
            <a href="#emergency-fund">生活防衛資金シミュレーター</a>
            <a href="article-credit-card-comparison.html">クレカ比較記事</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="retirement" aria-label="&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;">
        <section class="tool-heading">
          <h2>&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
          <p>&#x73fe;&#x5728;&#x306e;&#x5e74;&#x9f62;&#x30fb;&#x8caf;&#x84c4;&#x30fb;&#x6bce;&#x6708;&#x306e;&#x7a4d;&#x7acb;&#x984d;&#x304b;&#x3089;&#x3001;&#x9000;&#x8077;&#x6642;&#x70b9;&#x306e;&#x4e88;&#x60f3;&#x8cc7;&#x7523;&#x984d;&#x3001;&#x76ee;&#x6a19;&#x8cc7;&#x91d1;&#x3068;&#x306e;&#x5dee;&#x984d;&#x3001;&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x306e;&#x4e0d;&#x8db3;&#x984d;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
        </section>

        <section class="workspace" aria-label="&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x306e;&#x8a08;&#x7b97;">
          <form class="input-panel" id="retirementForm">
            <div class="field">
              <label for="currentAge">&#x73fe;&#x5728;&#x306e;&#x5e74;&#x9f62; <span class="unit">&#x6b73;</span></label>
              <input id="currentAge" name="currentAge" type="number" inputmode="numeric" min="0" max="100" step="1" value="35" required aria-describedby="currentAgeError">
              <p class="error" id="currentAgeError"></p>
            </div>
            <div class="field">
              <label for="retirementAge">&#x9000;&#x8077;&#x4e88;&#x5b9a;&#x5e74;&#x9f62; <span class="unit">&#x6b73;</span></label>
              <input id="retirementAge" name="retirementAge" type="number" inputmode="numeric" min="1" max="100" step="1" value="65" required aria-describedby="retirementAgeError">
              <p class="error" id="retirementAgeError"></p>
            </div>
            <div class="field">
              <label for="retirementSavings">&#x73fe;&#x5728;&#x306e;&#x8caf;&#x84c4;&#x984d; <span class="unit">&#x5186;</span></label>
              <input id="retirementSavings" name="retirementSavings" type="number" inputmode="numeric" min="0" max="10000000000" step="10000" value="5000000" required aria-describedby="retirementSavingsError">
              <p class="error" id="retirementSavingsError"></p>
            </div>
            <div class="field">
              <label for="retirementMonthly">&#x6bce;&#x6708;&#x306e;&#x7a4d;&#x7acb;&#x984d; <span class="unit">&#x5186; / &#x6708;</span></label>
              <input id="retirementMonthly" name="retirementMonthly" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="80000" required aria-describedby="retirementMonthlyError">
              <p class="error" id="retirementMonthlyError"></p>
            </div>
            <div class="field">
              <label for="retirementReturn">&#x60f3;&#x5b9a;&#x5e74;&#x5229; <span class="unit">%</span></label>
              <input id="retirementReturn" name="retirementReturn" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="3" required aria-describedby="retirementReturnError">
              <p class="error" id="retirementReturnError"></p>
            </div>
            <div class="field">
              <label for="retirementTarget">&#x8001;&#x5f8c;&#x306b;&#x5fc5;&#x8981;&#x306a;&#x76ee;&#x6a19;&#x8cc7;&#x91d1; <span class="unit">&#x5186;</span></label>
              <input id="retirementTarget" name="retirementTarget" type="number" inputmode="numeric" min="0" max="10000000000" step="10000" value="30000000" required aria-describedby="retirementTargetError">
              <p class="error" id="retirementTargetError"></p>
            </div>
            <div class="field">
              <label for="monthlyLivingCost">&#x9000;&#x8077;&#x5f8c;&#x306e;&#x6bce;&#x6708;&#x751f;&#x6d3b;&#x8cbb; <span class="unit">&#x5186; / &#x6708;</span></label>
              <input id="monthlyLivingCost" name="monthlyLivingCost" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="260000" required aria-describedby="monthlyLivingCostError">
              <p class="error" id="monthlyLivingCostError"></p>
            </div>
            <div class="field">
              <label for="monthlyPension">&#x5e74;&#x91d1;&#x898b;&#x8fbc;&#x307f;&#x984d; <span class="unit">&#x5186; / &#x6708;</span></label>
              <input id="monthlyPension" name="monthlyPension" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="160000" required aria-describedby="monthlyPensionError">
              <p class="error" id="monthlyPensionError"></p>
            </div>
            <div class="actions">
              <button type="reset">&#x30ea;&#x30bb;&#x30c3;&#x30c8;</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">&#x9000;&#x8077;&#x6642;&#x70b9;&#x306e;&#x4e88;&#x60f3;&#x8cc7;&#x7523;&#x984d;</p>
              <p class="amount" id="retirementFutureAssets">0&#x5186;</p>
            </div>
            <p class="notice" id="retirementNotice">&#x5165;&#x529b;&#x3092;&#x78ba;&#x8a8d;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;&#x9000;&#x8077;&#x4e88;&#x5b9a;&#x5e74;&#x9f62;&#x306f;&#x73fe;&#x5728;&#x306e;&#x5e74;&#x9f62;&#x3088;&#x308a;&#x5927;&#x304d;&#x304f;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;</p>
            <div class="result-grid">
              <div class="metric">
                <strong>&#x76ee;&#x6a19;&#x8cc7;&#x91d1;&#x3068;&#x306e;&#x5dee;&#x984d;</strong>
                <span class="accent-green" id="retirementTargetGap">0&#x5186;</span>
                <small>&#x9000;&#x8077;&#x6642;&#x8cc7;&#x7523; - &#x76ee;&#x6a19;&#x8cc7;&#x91d1;</small>
              </div>
              <div class="metric">
                <strong>&#x5fc5;&#x8981;&#x306a;&#x8ffd;&#x52a0;&#x7a4d;&#x7acb;&#x984d;</strong>
                <span class="accent-amber" id="requiredAdditionalMonthly">0&#x5186;</span>
                <small>&#x76ee;&#x6a19;&#x9054;&#x6210;&#x306b;&#x8db3;&#x308a;&#x306a;&#x3044;&#x6708;&#x984d;&#x306e;&#x76ee;&#x5b89;</small>
              </div>
              <div class="metric">
                <strong>&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x306e;&#x4e0d;&#x8db3;&#x984d;</strong>
                <span class="accent-amber" id="retirementShortage">0&#x5186;</span>
                <small>&#x751f;&#x6d3b;&#x8cbb;&#x3068;&#x5e74;&#x91d1;&#x306e;&#x5dee;&#x984d;&#x3092;30&#x5e74;&#x5206;&#x3067;&#x8a66;&#x7b97;</small>
              </div>
              <div class="metric">
                <strong>FIRE&#x9054;&#x6210;&#x3068;&#x306e;&#x6bd4;&#x8f03;</strong>
                <span class="accent-blue" id="fireComparison">0&#x5186;</span>
                <small>&#x5e74;&#x9593;&#x751f;&#x6d3b;&#x8cbb;25&#x5e74;&#x5206;&#x3068;&#x306e;&#x6bd4;&#x8f03;</small>
              </div>
              <div class="metric">
                <strong>&#x65b0;NISA&#x6d3b;&#x7528;&#x6642;&#x306e;&#x76ee;&#x5b89;</strong>
                <span class="accent-green" id="nisaGuide">0&#x5186;</span>
                <small>&#x5e74;&#x9593;360&#x4e07;&#x5186;&#x67a0;&#x306b;&#x5bfe;&#x3059;&#x308b;&#x7a4d;&#x7acb;&#x30da;&#x30fc;&#x30b9;</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;FAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x306e;&#x4e0d;&#x8db3;&#x984d;&#x306f;&#x3069;&#x3046;&#x8a08;&#x7b97;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x9000;&#x8077;&#x5f8c;&#x306e;&#x6bce;&#x6708;&#x751f;&#x6d3b;&#x8cbb;&#x304b;&#x3089;&#x5e74;&#x91d1;&#x898b;&#x8fbc;&#x307f;&#x984d;&#x3092;&#x5dee;&#x3057;&#x5f15;&#x304d;&#x3001;30&#x5e74;&#x5206;&#x306e;&#x4e0d;&#x8db3;&#x7dcf;&#x984d;&#x3092;&#x51fa;&#x3057;&#x305f;&#x3046;&#x3048;&#x3067;&#x3001;&#x9000;&#x8077;&#x6642;&#x70b9;&#x306e;&#x4e88;&#x60f3;&#x8cc7;&#x7523;&#x984d;&#x3068;&#x306e;&#x5dee;&#x984d;&#x3092;&#x8868;&#x793a;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x3002;</p>
            </details>
            <details>
              <summary>&#x5fc5;&#x8981;&#x306a;&#x8ffd;&#x52a0;&#x7a4d;&#x7acb;&#x984d;&#x306f;&#x4f55;&#x3092;&#x8868;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x73fe;&#x5728;&#x306e;&#x7a4d;&#x7acb;&#x984d;&#x3067;&#x306f;&#x76ee;&#x6a19;&#x8cc7;&#x91d1;&#x306b;&#x5c4a;&#x304b;&#x306a;&#x3044;&#x5834;&#x5408;&#x306b;&#x3001;&#x9000;&#x8077;&#x4e88;&#x5b9a;&#x5e74;&#x9f62;&#x307e;&#x3067;&#x306b;&#x8ffd;&#x52a0;&#x3067;&#x5fc5;&#x8981;&#x306b;&#x306a;&#x308a;&#x305d;&#x3046;&#x306a;&#x6708;&#x984d;&#x3092;&#x6982;&#x7b97;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x3002;</p>
            </details>
            <details>
              <summary>FIRE&#x9054;&#x6210;&#x3068;&#x306e;&#x6bd4;&#x8f03;&#x306f;&#x4f55;&#x3092;&#x57fa;&#x6e96;&#x306b;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x5e74;&#x9593;&#x751f;&#x6d3b;&#x8cbb;&#x306e;25&#x5e74;&#x5206;&#x3092;FIRE&#x76ee;&#x6a19;&#x984d;&#x3068;&#x3057;&#x3066;&#x3001;&#x9000;&#x8077;&#x6642;&#x70b9;&#x306e;&#x4e88;&#x60f3;&#x8cc7;&#x7523;&#x984d;&#x3068;&#x306e;&#x5dee;&#x984d;&#x3092;&#x8868;&#x793a;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x3002;4%&#x30eb;&#x30fc;&#x30eb;&#x306e;&#x7c21;&#x6613;&#x7684;&#x306a;&#x76ee;&#x5b89;&#x3067;&#x3059;&#x3002;</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;">
          <section class="tool-heading">
            <h2>&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;</h2>
            <p>FIRE&#x9054;&#x6210;&#x3084;&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;&#x3068;&#x5408;&#x308f;&#x305b;&#x3066;&#x3001;&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x306e;&#x8a08;&#x753b;&#x3092;&#x78ba;&#x8a8d;&#x3067;&#x304d;&#x307e;&#x3059;&#x3002;</p>
          </section>
          <div class="related-links">
            <a href="#dividend-reinvestment">&#x914d;&#x5f53;&#x518d;&#x6295;&#x8cc7;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#fire">FIRE&#x9054;&#x6210;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#nisa">&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="education" aria-label="&#x6559;&#x80b2;&#x8cbb;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;">
        <section class="tool-heading">
          <h2>&#x6559;&#x80b2;&#x8cbb;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
          <p>&#x5b50;&#x3069;&#x3082;&#x306e;&#x4eba;&#x6570;&#x3001;&#x9032;&#x5b66;&#x30b3;&#x30fc;&#x30b9;&#x3001;&#x5927;&#x5b66;&#x9032;&#x5b66;&#x6709;&#x7121;&#x3001;&#x73fe;&#x5728;&#x306e;&#x8caf;&#x84c4;&#x984d;&#x3001;&#x6bce;&#x6708;&#x7a4d;&#x7acb;&#x984d;&#x304b;&#x3089;&#x3001;&#x5c06;&#x6765;&#x5fc5;&#x8981;&#x306a;&#x6559;&#x80b2;&#x8cbb;&#x3068;&#x4e0d;&#x8db3;&#x984d;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
        </section>

        <section class="workspace" aria-label="&#x6559;&#x80b2;&#x8cbb;&#x306e;&#x8a08;&#x7b97;">
          <form class="input-panel" id="educationForm">
            <div class="field">
              <label for="childrenCount">&#x5b50;&#x3069;&#x3082;&#x306e;&#x4eba;&#x6570; <span class="unit">&#x4eba;</span></label>
              <input id="childrenCount" name="childrenCount" type="number" inputmode="numeric" min="1" max="10" step="1" value="1" required aria-describedby="childrenCountError">
              <p class="error" id="childrenCountError"></p>
            </div>
            <div class="field">
              <label for="educationCourse">&#x9032;&#x5b66;&#x30b3;&#x30fc;&#x30b9;</label>
              <select id="educationCourse" name="educationCourse" required aria-describedby="educationCourseError">
                <option value="public">&#x516c;&#x7acb;&#x30e1;&#x30a4;&#x30f3;</option>
                <option value="private">&#x79c1;&#x7acb;&#x30e1;&#x30a4;&#x30f3;</option>
              </select>
              <p class="error" id="educationCourseError"></p>
            </div>
            <label class="check-field" for="universityEnabled">
              <input id="universityEnabled" name="universityEnabled" type="checkbox" checked>
              <span>&#x5927;&#x5b66;&#x9032;&#x5b66;&#x3042;&#x308a;&#x3067;&#x8a66;&#x7b97;&#x3059;&#x308b;</span>
            </label>
            <div class="field">
              <label for="educationSavings">&#x73fe;&#x5728;&#x306e;&#x8caf;&#x84c4;&#x984d; <span class="unit">&#x5186;</span></label>
              <input id="educationSavings" name="educationSavings" type="number" inputmode="numeric" min="0" max="10000000000" step="10000" value="1000000" required aria-describedby="educationSavingsError">
              <p class="error" id="educationSavingsError"></p>
            </div>
            <div class="field">
              <label for="educationMonthly">&#x6bce;&#x6708;&#x7a4d;&#x7acb;&#x984d; <span class="unit">&#x5186; / &#x6708;</span></label>
              <input id="educationMonthly" name="educationMonthly" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="30000" required aria-describedby="educationMonthlyError">
              <p class="error" id="educationMonthlyError"></p>
            </div>
            <div class="field">
              <label for="educationReturn">&#x60f3;&#x5b9a;&#x5e74;&#x5229; <span class="unit">%</span></label>
              <input id="educationReturn" name="educationReturn" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="2" required aria-describedby="educationReturnError">
              <p class="error" id="educationReturnError"></p>
            </div>
            <div class="actions">
              <button type="reset">&#x30ea;&#x30bb;&#x30c3;&#x30c8;</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">&#x5fc5;&#x8981;&#x6559;&#x80b2;&#x8cbb;&#x7dcf;&#x984d;</p>
              <p class="amount" id="educationTotalCost">0&#x5186;</p>
            </div>
            <p class="notice" id="educationNotice">&#x5165;&#x529b;&#x3092;&#x78ba;&#x8a8d;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;&#x6587;&#x79d1;&#x7701;&#x7b49;&#x306e;&#x516c;&#x8868;&#x30c7;&#x30fc;&#x30bf;&#x3092;&#x3082;&#x3068;&#x306b;&#x3057;&#x305f;&#x6982;&#x7b97;&#x3067;&#x3059;&#x3002;</p>
            <div class="result-grid">
              <div class="metric">
                <strong>&#x4e0d;&#x8db3;&#x984d;</strong>
                <span class="accent-amber" id="educationShortage">0&#x5186;</span>
                <small>&#x5fc5;&#x8981;&#x6559;&#x80b2;&#x8cbb; - &#x5c06;&#x6765;&#x306e;&#x6e96;&#x5099;&#x984d;</small>
              </div>
              <div class="metric">
                <strong>&#x5fc5;&#x8981;&#x7a4d;&#x7acb;&#x984d;</strong>
                <span class="accent-green" id="educationRequiredMonthly">0&#x5186;</span>
                <small>&#x5927;&#x5b66;&#x5165;&#x5b66;&#x307e;&#x3067;18&#x5e74;&#x3067;&#x6e96;&#x5099;&#x3059;&#x308b;&#x6708;&#x984d;&#x76ee;&#x5b89;</small>
              </div>
              <div class="metric">
                <strong>&#x5927;&#x5b66;&#x8cbb;&#x7528;&#x76ee;&#x5b89;</strong>
                <span class="accent-blue" id="universityCostGuide">0&#x5186;</span>
                <small>&#x5927;&#x5b66;&#x9032;&#x5b66;&#x3042;&#x308a;&#x306e;&#x5834;&#x5408;&#x306e;&#x6982;&#x7b97;</small>
              </div>
              <div class="metric">
                <strong>&#x6e96;&#x5099;&#x6e08;&#x307f;&#x898b;&#x8fbc;&#x307f;</strong>
                <span class="accent-blue" id="educationFutureAssets">0&#x5186;</span>
                <small>&#x73fe;&#x5728;&#x8caf;&#x84c4; + &#x6bce;&#x6708;&#x7a4d;&#x7acb;&#x306e;18&#x5e74;&#x5f8c;&#x76ee;&#x5b89;</small>
              </div>
              <div class="metric">
                <strong>&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x3078;&#x306e;&#x5f71;&#x97ff;</strong>
                <span class="accent-amber text-metric" id="retirementImpact">0&#x5186;</span>
                <small>&#x6559;&#x80b2;&#x8cbb;&#x4e0d;&#x8db3;&#x3092;&#x8001;&#x5f8c;&#x6e96;&#x5099;&#x304b;&#x3089;&#x88dc;&#x3046;&#x5834;&#x5408;&#x306e;&#x76ee;&#x5b89;</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="&#x6559;&#x80b2;&#x8cbb;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;FAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>&#x6559;&#x80b2;&#x8cbb;&#x306e;&#x76ee;&#x5b89;&#x306f;&#x4f55;&#x3092;&#x3082;&#x3068;&#x306b;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x6587;&#x90e8;&#x79d1;&#x5b66;&#x7701;&#x306e;&#x5b50;&#x4f9b;&#x306e;&#x5b66;&#x7fd2;&#x8cbb;&#x8abf;&#x67fb;&#x306a;&#x3069;&#x3092;&#x53c2;&#x8003;&#x306b;&#x3001;&#x516c;&#x7acb;&#x30e1;&#x30a4;&#x30f3;&#x306f;&#x9ad8;&#x6821;&#x307e;&#x3067;&#x7d04;596&#x4e07;&#x5186;&#x3001;&#x79c1;&#x7acb;&#x30e1;&#x30a4;&#x30f3;&#x306f;&#x7d04;1,976&#x4e07;&#x5186;&#x3092;1&#x4eba;&#x3042;&#x305f;&#x308a;&#x306e;&#x76ee;&#x5b89;&#x3068;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x3002;</p>
            </details>
            <details>
              <summary>&#x5927;&#x5b66;&#x8cbb;&#x7528;&#x306f;&#x3044;&#x304f;&#x3089;&#x3067;&#x8a08;&#x7b97;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x5927;&#x5b66;&#x9032;&#x5b66;&#x3042;&#x308a;&#x306e;&#x5834;&#x5408;&#x3001;1&#x4eba;&#x3042;&#x305f;&#x308a;500&#x4e07;&#x5186;&#x3092;&#x6982;&#x7b97;&#x3068;&#x3057;&#x3066;&#x8ffd;&#x52a0;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x3002;&#x5b66;&#x90e8;&#x3001;&#x81ea;&#x5b85;&#x901a;&#x5b66;&#x3001;&#x4e0b;&#x5bbf;&#x3001;&#x56fd;&#x516c;&#x7acb;&#x30fb;&#x79c1;&#x7acb;&#x3067;&#x5b9f;&#x969b;&#x306e;&#x91d1;&#x984d;&#x306f;&#x5909;&#x308f;&#x308a;&#x307e;&#x3059;&#x3002;</p>
            </details>
            <details>
              <summary>&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x3078;&#x306e;&#x5f71;&#x97ff;&#x306f;&#x3069;&#x3046;&#x898b;&#x308c;&#x3070;&#x3044;&#x3067;&#x3059;&#x304b;&#xFF1F;</summary>
              <p>&#x6559;&#x80b2;&#x8cbb;&#x306e;&#x4e0d;&#x8db3;&#x3092;&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x7528;&#x306e;&#x8caf;&#x84c4;&#x304b;&#x3089;&#x88dc;&#x3046;&#x3068;&#x3001;&#x9000;&#x8077;&#x5f8c;&#x306e;&#x6e96;&#x5099;&#x984d;&#x304c;&#x6e1b;&#x308a;&#x307e;&#x3059;&#x3002;&#x6559;&#x80b2;&#x8cbb;&#x3068;&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x306f;&#x5206;&#x3051;&#x3066;&#x8a66;&#x7b97;&#x3059;&#x308b;&#x3068;&#x5b89;&#x5fc3;&#x3067;&#x3059;&#x3002;</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="&#x6559;&#x80b2;&#x8cbb;&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;">
          <section class="tool-heading">
            <h2>&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;</h2>
            <p>&#x6559;&#x80b2;&#x8cbb;&#x3068;&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x306f;&#x540c;&#x6642;&#x306b;&#x6e96;&#x5099;&#x3057;&#x305f;&#x3044;&#x30e9;&#x30a4;&#x30d5;&#x30d7;&#x30e9;&#x30f3;&#x8cc7;&#x91d1;&#x3067;&#x3059;&#x3002;&#x6295;&#x8cc7;&#x3068;&#x8001;&#x5f8c;&#x306e;&#x8a66;&#x7b97;&#x3082;&#x5408;&#x308f;&#x305b;&#x3066;&#x78ba;&#x8a8d;&#x3067;&#x304d;&#x307e;&#x3059;&#x3002;</p>
          </section>
          <div class="related-links">
            <a href="#retirement">&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#nisa">&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#ideco">iDeCo&#x7bc0;&#x7a0e;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="education-insurance" aria-label="&#x5b66;&#x8cc7;&#x4fdd;&#x967a;&#x6bd4;&#x8f03;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;">
        <section class="tool-heading">
          <h2>&#x5b66;&#x8cc7;&#x4fdd;&#x967a;&#x6bd4;&#x8f03;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
          <p>&#x7a4d;&#x7acb;&#x578b;&#x306e;&#x5b66;&#x8cc7;&#x4fdd;&#x967a;&#x3068;&#x901a;&#x5e38;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;&#x3092;&#x6bd4;&#x8f03;&#x3057;&#x3001;&#x5927;&#x5b66;&#x9032;&#x5b66;&#x6642;&#x306b;&#x53d7;&#x3051;&#x53d6;&#x308c;&#x308b;&#x91d1;&#x984d;&#x306e;&#x76ee;&#x5b89;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
        </section>

        <section class="workspace" aria-label="&#x5b66;&#x8cc7;&#x4fdd;&#x967a;&#x3068;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;&#x306e;&#x6bd4;&#x8f03;">
          <form class="input-panel" id="educationInsuranceForm">
            <div class="field">
              <label for="educationInsuranceMonthly">&#x6bce;&#x6708;&#x7a4d;&#x7acb;&#x984d; <span class="unit">&#x5186; / &#x6708;</span></label>
              <input id="educationInsuranceMonthly" name="educationInsuranceMonthly" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="30000" required aria-describedby="educationInsuranceMonthlyError">
              <p class="error" id="educationInsuranceMonthlyError"></p>
            </div>
            <div class="field">
              <label for="educationInsuranceYears">&#x7a4d;&#x7acb;&#x5e74;&#x6570; <span class="unit">&#x5e74;</span></label>
              <input id="educationInsuranceYears" name="educationInsuranceYears" type="number" inputmode="numeric" min="1" max="30" step="1" value="15" required aria-describedby="educationInsuranceYearsError">
              <p class="error" id="educationInsuranceYearsError"></p>
            </div>
            <div class="field">
              <label for="educationInsuranceReturn">&#x60f3;&#x5b9a;&#x5229;&#x56de;&#x308a; <span class="unit">%</span></label>
              <input id="educationInsuranceReturn" name="educationInsuranceReturn" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="3" required aria-describedby="educationInsuranceReturnError">
              <p class="error" id="educationInsuranceReturnError"></p>
            </div>
            <div class="field">
              <label for="educationInsuranceRefundRate">&#x5b66;&#x8cc7;&#x4fdd;&#x967a;&#x8fd4;&#x623b;&#x7387; <span class="unit">%</span></label>
              <input id="educationInsuranceRefundRate" name="educationInsuranceRefundRate" type="number" inputmode="decimal" min="0" max="200" step="0.1" value="105" required aria-describedby="educationInsuranceRefundRateError">
              <p class="error" id="educationInsuranceRefundRateError"></p>
            </div>
            <div class="field">
              <label for="childAge">&#x5b50;&#x3069;&#x3082;&#x306e;&#x5e74;&#x9f62; <span class="unit">&#x6b73;</span></label>
              <input id="childAge" name="childAge" type="number" inputmode="numeric" min="0" max="30" step="1" value="3" required aria-describedby="childAgeError">
              <p class="error" id="childAgeError"></p>
            </div>
            <div class="field">
              <label for="universityStartAge">&#x5927;&#x5b66;&#x9032;&#x5b66;&#x4e88;&#x5b9a;&#x5e74;&#x9f62; <span class="unit">&#x6b73;</span></label>
              <input id="universityStartAge" name="universityStartAge" type="number" inputmode="numeric" min="1" max="40" step="1" value="18" required aria-describedby="universityStartAgeError">
              <p class="error" id="universityStartAgeError"></p>
            </div>
            <div class="actions">
              <button type="reset">&#x30ea;&#x30bb;&#x30c3;&#x30c8;</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">&#x901a;&#x5e38;&#x6295;&#x8cc7;&#x306e;&#x60f3;&#x5b9a;&#x8cc7;&#x7523;&#x984d;</p>
              <p class="amount" id="educationInvestmentAssets">0&#x5186;</p>
            </div>
            <p class="notice" id="educationInsuranceNotice">&#x5165;&#x529b;&#x3092;&#x78ba;&#x8a8d;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;&#x5927;&#x5b66;&#x9032;&#x5b66;&#x4e88;&#x5b9a;&#x5e74;&#x9f62;&#x306f\u5b50\u3069\u3082\u306e\u5e74\u9f62\u3088\u308a\u5927\u304d\u304f\u3057\u3066\u304f\u3060\u3055\u3044\u3002;</p>
            <div class="result-grid">
              <div class="metric">
                <strong>&#x7a4d;&#x7acb;&#x7dcf;&#x984d;</strong>
                <span class="accent-blue" id="educationInsuranceTotalPaid">0&#x5186;</span>
                <small>&#x6bce;&#x6708;&#x7a4d;&#x7acb;&#x984d; x &#x7a4d;&#x7acb;&#x5e74;&#x6570;</small>
              </div>
              <div class="metric">
                <strong>&#x5b66;&#x8cc7;&#x4fdd;&#x967a;&#x53d7;&#x53d6;&#x984d;</strong>
                <span class="accent-green" id="educationInsurancePayout">0&#x5186;</span>
                <small>&#x7a4d;&#x7acb;&#x7dcf;&#x984d; x &#x8fd4;&#x623b;&#x7387;</small>
              </div>
              <div class="metric">
                <strong>&#x5dee;&#x984d;&#x6bd4;&#x8f03;</strong>
                <span class="accent-amber" id="educationInsuranceDifference">0&#x5186;</span>
                <small>&#x901a;&#x5e38;&#x6295;&#x8cc7; - &#x5b66;&#x8cc7;&#x4fdd;&#x967a;&#x53d7;&#x53d6;&#x984d;</small>
              </div>
              <div class="metric">
                <strong>&#x6559;&#x80b2;&#x8cbb;&#x4e0d;&#x8db3;&#x984d;</strong>
                <span class="accent-amber" id="educationInsuranceShortage">0&#x5186;</span>
                <small>&#x5927;&#x5b66;&#x8cbb;&#x7528;500&#x4e07;&#x5186;&#x3068;&#x306e;&#x5dee;&#x984d;</small>
              </div>
              <div class="metric">
                <strong>&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x3078;&#x306e;&#x5f71;&#x97ff;</strong>
                <span class="accent-green text-metric" id="educationInsuranceRetirementImpact">0&#x5186;</span>
                <small>&#x4e0d;&#x8db3;&#x984d;&#x3092;&#x8001;&#x5f8c;&#x6e96;&#x5099;&#x304b;&#x3089;&#x88dc;&#x3046\u5834\u5408\u306e\u76ee\u5b89;</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="&#x5b66;&#x8cc7;&#x4fdd;&#x967a;&#x6bd4;&#x8f03;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;FAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>&#x5b66;&#x8cc7;&#x4fdd;&#x967a;&#x8fd4;&#x623b;&#x7387;&#x3068;&#x306f\u4f55\u3067\u3059\u304b&#xff1f;</summary>
              <p>&#x652f;&#x6255;&#x3063;&#x305f;&#x4fdd;&#x967a;&#x6599;&#x7dcf;&#x984d;&#x306b\u5bfe\u3057\u3066\u3001\u5c06\u6765\u53d7\u3051\u53d6\u308c\u308b\u91d1\u984d\u304c\u4f55%&#x304b\u3092\u8868\u3059\u76ee\u5b89\u3067\u3059\u3002;100%&#x3092\u8d85\u3048\u308b\u3068\u652f\u6255\u984d\u3088\u308a\u53d7\u53d6\u984d\u304c\u591a\u3044\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002;</p>
            </details>
            <details>
              <summary>&#x901a;&#x5e38;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;&#x306f\u5143\u672c\u4fdd\u8a3c\u3067\u3059\u304b&#xff1f;</summary>
              <p>&#x3044\u3044\u3048\u3002;&#x901a;&#x5e38;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;&#x306f\u5229\u56de\u308a\u304c\u671f\u5f85\u3067\u304d\u308b\u4e00\u65b9\u3067\u3001\u5143\u672c\u5272\u308c\u306e\u30ea\u30b9\u30af\u3082\u3042\u308a\u307e\u3059\u3002;&#x5b66\u8cc7\u4fdd\u967a\u3068\u6295\u8cc7\u306f\u3001\u5b89\u5b9a\u6027\u3068\u5897\u3084\u3059\u529b\u306e\u30d0\u30e9\u30f3\u30b9\u3067\u6bd4\u8f03\u3059\u308b\u3068\u5224\u65ad\u3057\u3084\u3059\u304f\u306a\u308a\u307e\u3059\u3002;</p>
            </details>
            <details>
              <summary>&#x6559;&#x80b2;&#x8cbb;&#x4e0d;&#x8db3;&#x984d;&#x306f\u4f55\u3092\u57fa\u6e96\u306b\u3057\u3066\u3044\u307e\u3059\u304b&#xff1f;</summary>
              <p>&#x5927;&#x5b66\u8cbb\u7528\u306e\u76ee\u5b89\u3068\u3057\u3066500&#x4e07;&#x5186\u3092\u57fa\u6e96\u306b\u3057\u3001\u5b66\u8cc7\u4fdd\u967a\u3068\u901a\u5e38\u6295\u8cc7\u306e\u3046\u3061\u91d1\u984d\u304c\u5927\u304d\u3044\u65b9\u3067\u3069\u308c\u304f\u3089\u8db3\u308a\u306a\u3044\u304b\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002;</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="&#x5b66;&#x8cc7;&#x4fdd;&#x967a;&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;">
          <section class="tool-heading">
            <h2>&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;</h2>
            <p>&#x5b66;&#x8cc7;&#x4fdd;&#x967a\u3068\u7a4d\u7acb\u6295\u8cc7\u306e\u6bd4\u8f03\u306f\u3001\u6559\u80b2\u8cbb\u5168\u4f53\u3068\u8001\u5f8c\u8cc7\u91d1\u306e\u8a08\u753b\u3068\u5408\u308f\u305b\u3066\u898b\u308b\u3068\u30d0\u30e9\u30f3\u30b9\u3092\u53d6\u308a\u3084\u3059\u304f\u306a\u308a\u307e\u3059\u3002;</p>
          </section>
          <div class="related-links">
            <a href="#education">&#x6559;&#x80b2;&#x8cbb;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#retirement">&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#nisa">&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="dividend" aria-label="&#x914d;&#x5f53;&#x91d1;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;">
        <section class="tool-heading">
          <h2>&#x914d;&#x5f53;&#x91d1;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
          <p>&#x521d;&#x671f;&#x6295;&#x8cc7;&#x984d;&#x3001;&#x6bce;&#x6708;&#x8ffd;&#x52a0;&#x6295;&#x8cc7;&#x984d;&#x3001;&#x60f3;&#x5b9a;&#x914d;&#x5f53;&#x5229;&#x56de;&#x308a;&#x3001;&#x904b;&#x7528;&#x5e74;&#x6570;&#x3001;&#x914d;&#x5f53;&#x518d;&#x6295;&#x8cc7;&#x6709;&#x7121;&#x304b;&#x3089;&#x3001;&#x5e74;&#x9593;&#x914d;&#x5f53;&#x91d1;&#x3068;&#x5c06;&#x6765;&#x306e;&#x7d2f;&#x8a08;&#x914d;&#x5f53;&#x91d1;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
        </section>

        <section class="workspace" aria-label="&#x914d;&#x5f53;&#x91d1;&#x306e;&#x8a08;&#x7b97;">
          <form class="input-panel" id="dividendForm">
            <div class="field">
              <label for="dividendInitial">&#x521d;&#x671f;&#x6295;&#x8cc7;&#x984d; <span class="unit">&#x5186;</span></label>
              <input id="dividendInitial" name="dividendInitial" type="number" inputmode="numeric" min="0" max="10000000000" step="10000" value="1000000" required aria-describedby="dividendInitialError">
              <p class="error" id="dividendInitialError"></p>
            </div>
            <div class="field">
              <label for="dividendMonthly">&#x6bce;&#x6708;&#x8ffd;&#x52a0;&#x6295;&#x8cc7;&#x984d; <span class="unit">&#x5186; / &#x6708;</span></label>
              <input id="dividendMonthly" name="dividendMonthly" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="50000" required aria-describedby="dividendMonthlyError">
              <p class="error" id="dividendMonthlyError"></p>
            </div>
            <div class="field">
              <label for="dividendYield">&#x60f3;&#x5b9a;&#x914d;&#x5f53;&#x5229;&#x56de;&#x308a; <span class="unit">%</span></label>
              <input id="dividendYield" name="dividendYield" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="4" required aria-describedby="dividendYieldError">
              <p class="error" id="dividendYieldError"></p>
            </div>
            <div class="field">
              <label for="dividendYears">&#x904b;&#x7528;&#x5e74;&#x6570; <span class="unit">&#x5e74;</span></label>
              <input id="dividendYears" name="dividendYears" type="number" inputmode="numeric" min="1" max="100" step="1" value="20" required aria-describedby="dividendYearsError">
              <p class="error" id="dividendYearsError"></p>
            </div>
            <label class="check-field" for="dividendReinvest">
              <input id="dividendReinvest" name="dividendReinvest" type="checkbox" checked>
              <span>&#x914d;&#x5f53;&#x91d1;&#x3092;&#x518d;&#x6295;&#x8cc7;&#x3059;&#x308b;</span>
            </label>
            <div class="actions">
              <button type="reset">&#x30ea;&#x30bb;&#x30c3;&#x30c8;</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">&#x5e74;&#x9593;&#x914d;&#x5f53;&#x91d1;</p>
              <p class="amount" id="annualDividend">0&#x5186;</p>
            </div>
            <p class="notice" id="dividendNotice">&#x5165;&#x529b;&#x3092;&#x78ba;&#x8a8d;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;&#x914d;&#x5f53;&#x5229;&#x56de;&#x308a;&#x306f;&#x5143;&#x672c;&#x3084;&#x914d;&#x5f53;&#x3092;&#x4fdd;&#x8a3c;&#x3059;&#x308b;&#x3082;&#x306e;&#x3067;&#x306f;&#x3042;&#x308a;&#x307e;&#x305b;&#x3093;&#x3002;</p>
            <div class="result-grid">
              <div class="metric">
                <strong>&#x6708;&#x5e73;&#x5747;&#x914d;&#x5f53;&#x91d1;</strong>
                <span class="accent-green" id="monthlyDividend">0&#x5186;</span>
                <small>&#x5e74;&#x9593;&#x914d;&#x5f53;&#x91d1; / 12&#x304b;&#x6708;</small>
              </div>
              <div class="metric">
                <strong>&#x7d2f;&#x8a08;&#x914d;&#x5f53;&#x91d1;</strong>
                <span class="accent-blue" id="totalDividend">0&#x5186;</span>
                <small>&#x904b;&#x7528;&#x671f;&#x9593;&#x4e2d;&#x306b;&#x767a;&#x751f;&#x3059;&#x308b;&#x914d;&#x5f53;&#x91d1;&#x306e;&#x6982;&#x7b97;</small>
              </div>
              <div class="metric">
                <strong>&#x6700;&#x7d42;&#x8cc7;&#x7523;&#x984d;</strong>
                <span class="accent-blue" id="dividendFinalAssets">0&#x5186;</span>
                <small>&#x6295;&#x8cc7;&#x5143;&#x672c; + &#x518d;&#x6295;&#x8cc7;&#x3055;&#x308c;&#x305f;&#x914d;&#x5f53;&#x91d1;&#x306e;&#x76ee;&#x5b89;</small>
              </div>
              <div class="metric">
                <strong>FIRE&#x9054;&#x6210;&#x3078;&#x306e;&#x5f71;&#x97ff;</strong>
                <span class="accent-amber text-metric" id="dividendFireImpact">0&#x5186;</span>
                <small>&#x914d;&#x5f53;&#x53ce;&#x5165;&#x304c;&#x5e74;&#x9593;&#x751f;&#x6d3b;&#x8cbb;360&#x4e07;&#x5186;&#x3092;&#x3069;&#x308c;&#x304f;&#x3089;&#x3044;&#x88dc;&#x3046;&#x304b;</small>
              </div>
              <div class="metric">
                <strong>&#x65b0;NISA&#x6d3b;&#x7528;&#x6642;&#x306e;&#x6bd4;&#x8f03;</strong>
                <span class="accent-green text-metric" id="dividendNisaComparison">0&#x5186;</span>
                <small>&#x6210;&#x9577;&#x6295;&#x8cc7;&#x67a0;&#x30fb;&#x975e;&#x8ab2;&#x7a0e;&#x67a0;&#x306e;&#x6d3b;&#x7528;&#x76ee;&#x5b89;</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="&#x914d;&#x5f53;&#x91d1;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;FAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>&#x914d;&#x5f53;&#x5229;&#x56de;&#x308a;&#x306f;&#x4f55;%&#x3067;&#x5165;&#x529b;&#x3059;&#x308c;&#x3070;&#x3044;&#x3044;&#x3067;&#x3059;&#x304b;&#xff1f;</summary>
              <p>&#x4fdd;&#x6709;&#x3057;&#x305f;&#x3044;&#x682a;&#x5f0f;&#x3084;ETF&#x306e;&#x60f3;&#x5b9a;&#x5229;&#x56de;&#x308a;&#x3092;&#x5165;&#x529b;&#x3057;&#x307e;&#x3059;&#x3002;&#x9ad8;&#x914d;&#x5f53;&#x5546;&#x54c1;&#x3067;&#x3082;&#x6e1b;&#x914d;&#x3084;&#x4fa1;&#x683c;&#x4e0b;&#x843d;&#x306e;&#x30ea;&#x30b9;&#x30af;&#x304c;&#x3042;&#x308b;&#x305f;&#x3081;&#x3001;&#x4fdd;&#x5b88;&#x7684;&#x306a;&#x6570;&#x5b57;&#x3067;&#x8a66;&#x7b97;&#x3059;&#x308b;&#x3068;&#x73fe;&#x5b9f;&#x7684;&#x3067;&#x3059;&#x3002;</p>
            </details>
            <details>
              <summary>&#x914d;&#x5f53;&#x518d;&#x6295;&#x8cc7;&#x3042;&#x308a;&#x3068;&#x306a;&#x3057;&#x306e;&#x9055;&#x3044;&#x306f;&#x4f55;&#x3067;&#x3059;&#x304b;&#xff1f;</summary>
              <p>&#x518d;&#x6295;&#x8cc7;&#x3042;&#x308a;&#x3067;&#x306f;&#x914d;&#x5f53;&#x91d1;&#x3092;&#x8ffd;&#x52a0;&#x6295;&#x8cc7;&#x306b;&#x56de;&#x3059;&#x60f3;&#x5b9a;&#x3067;&#x3001;&#x6700;&#x7d42;&#x8cc7;&#x7523;&#x984d;&#x304c;&#x5897;&#x3048;&#x3084;&#x3059;&#x304f;&#x306a;&#x308a;&#x307e;&#x3059;&#x3002;&#x306a;&#x3057;&#x3067;&#x306f;&#x914d;&#x5f53;&#x3092;&#x751f;&#x6d3b;&#x8cbb;&#x3084;&#x73fe;&#x91d1;&#x53ce;&#x5165;&#x3068;&#x3057;&#x3066;&#x53d7;&#x3051;&#x53d6;&#x308b;&#x60f3;&#x5b9a;&#x3067;&#x3059;&#x3002;</p>
            </details>
            <details>
              <summary>&#x65b0;NISA&#x3067;&#x914d;&#x5f53;&#x6295;&#x8cc7;&#x3092;&#x3059;&#x308b;&#x30e1;&#x30ea;&#x30c3;&#x30c8;&#x306f;&#x3042;&#x308a;&#x307e;&#x3059;&#x304b;&#xff1f;</summary>
              <p>&#x65b0;NISA&#x306e;&#x975e;&#x8ab2;&#x7a0e;&#x67a0;&#x3092;&#x4f7f;&#x3046;&#x3068;&#x3001;&#x6761;&#x4ef6;&#x3092;&#x6e80;&#x305f;&#x3059;&#x914d;&#x5f53;&#x91d1;&#x3084;&#x58f2;&#x5374;&#x76ca;&#x3092;&#x975e;&#x8ab2;&#x7a0e;&#x3067;&#x53d7;&#x3051;&#x53d6;&#x308c;&#x308b;&#x5834;&#x5408;&#x304c;&#x3042;&#x308a;&#x307e;&#x3059;&#x3002;&#x8ab2;&#x7a0e;&#x53e3;&#x5ea7;&#x3068;&#x306e;&#x9055;&#x3044;&#x3092;&#x78ba;&#x8a8d;&#x3057;&#x3066;&#x6d3b;&#x7528;&#x3059;&#x308b;&#x3068;&#x52b9;&#x7387;&#x7684;&#x3067;&#x3059;&#x3002;</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="&#x914d;&#x5f53;&#x91d1;&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;">
          <section class="tool-heading">
            <h2>&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;</h2>
            <p>&#x914d;&#x5f53;&#x53ce;&#x5165;&#x306f;FIRE&#x8a08;&#x753b;&#x3084;&#x65b0;NISA&#x306e;&#x975e;&#x8ab2;&#x7a0e;&#x67a0;&#x3068;&#x5408;&#x308f;&#x305b;&#x3066;&#x898b;&#x308b;&#x3068;&#x3001;&#x5c06;&#x6765;&#x306e;&#x30ad;&#x30e3;&#x30c3;&#x30b7;&#x30e5;&#x30d5;&#x30ed;&#x30fc;&#x304c;&#x628a;&#x63e1;&#x3057;&#x3084;&#x3059;&#x304f;&#x306a;&#x308a;&#x307e;&#x3059;&#x3002;</p>
          </section>
          <div class="related-links">
            <a href="#fire">FIRE&#x9054;&#x6210;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#nisa">&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#ideco">iDeCo&#x7bc0;&#x7a0e;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="dividend-etf" aria-label="配当ETF比較シミュレーター">
        <section class="tool-heading">
          <h2>配当ETF比較シミュレーター</h2>
          <p>初期投資額、毎月積立額、ETF選択、想定配当利回り、想定株価成長率、運用年数、配当再投資有無、新NISA利用有無から、複数の高配当ETFの配当収入と資産成長を比較します。</p>
        </section>

        <section class="workspace" aria-label="配当ETF比較の計算">
          <form class="input-panel" id="dividendEtfForm">
            <div class="field">
              <label for="dividendEtfInitial">初期投資額 <span class="unit">円</span></label>
              <input id="dividendEtfInitial" name="dividendEtfInitial" type="number" inputmode="numeric" min="0" max="10000000000" step="10000" value="1000000" required aria-describedby="dividendEtfInitialError">
              <p class="error" id="dividendEtfInitialError"></p>
            </div>
            <div class="field">
              <label for="dividendEtfMonthly">毎月積立額 <span class="unit">円 / 月</span></label>
              <input id="dividendEtfMonthly" name="dividendEtfMonthly" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="50000" required aria-describedby="dividendEtfMonthlyError">
              <p class="error" id="dividendEtfMonthlyError"></p>
            </div>
            <div class="field">
              <label for="dividendEtfChoice">ETF選択</label>
              <select id="dividendEtfChoice" name="dividendEtfChoice" required>
                <option value="VYM">VYM</option>
                <option value="HDV">HDV</option>
                <option value="SPYD">SPYD</option>
                <option value="VIG">VIG</option>
                <option value="CUSTOM">カスタム</option>
              </select>
              <p class="error" id="dividendEtfChoiceError"></p>
            </div>
            <div class="field">
              <label for="dividendEtfYield">想定配当利回り <span class="unit">%</span></label>
              <input id="dividendEtfYield" name="dividendEtfYield" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="3.2" required aria-describedby="dividendEtfYieldError">
              <p class="error" id="dividendEtfYieldError"></p>
            </div>
            <div class="field">
              <label for="dividendEtfGrowth">想定株価成長率 <span class="unit">%</span></label>
              <input id="dividendEtfGrowth" name="dividendEtfGrowth" type="number" inputmode="decimal" min="-30" max="30" step="0.1" value="3" required aria-describedby="dividendEtfGrowthError">
              <p class="error" id="dividendEtfGrowthError"></p>
            </div>
            <div class="field">
              <label for="dividendEtfYears">運用年数 <span class="unit">年</span></label>
              <input id="dividendEtfYears" name="dividendEtfYears" type="number" inputmode="numeric" min="1" max="100" step="1" value="20" required aria-describedby="dividendEtfYearsError">
              <p class="error" id="dividendEtfYearsError"></p>
            </div>
            <label class="check-field" for="dividendEtfReinvest">
              <input id="dividendEtfReinvest" name="dividendEtfReinvest" type="checkbox" checked>
              <span>配当金を再投資する</span>
            </label>
            <label class="check-field" for="dividendEtfNisa">
              <input id="dividendEtfNisa" name="dividendEtfNisa" type="checkbox" checked>
              <span>新NISAを利用する</span>
            </label>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">年間配当金</p>
              <p class="amount" id="dividendEtfAnnualDividend">0円</p>
            </div>
            <p class="notice" id="dividendEtfNotice">入力を確認してください。ETFの利回りや株価成長率は将来の成果を保証するものではありません。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>月平均配当金</strong>
                <span class="accent-green" id="dividendEtfMonthlyDividend">0円</span>
                <small>年間配当金 / 12か月</small>
              </div>
              <div class="metric">
                <strong>累計配当金</strong>
                <span class="accent-blue" id="dividendEtfTotalDividend">0円</span>
                <small>運用期間中に発生する配当金の概算</small>
              </div>
              <div class="metric">
                <strong>最終資産額</strong>
                <span class="accent-blue" id="dividendEtfFinalAssets">0円</span>
                <small>株価成長と配当再投資を反映した目安</small>
              </div>
              <div class="metric">
                <strong>ETF別比較</strong>
                <span class="accent-amber text-metric" id="dividendEtfComparison">未計算</span>
                <small>配当重視と資産成長重視の比較</small>
              </div>
              <div class="metric">
                <strong>FIRE達成への影響</strong>
                <span class="accent-green text-metric" id="dividendEtfFireImpact">未計算</span>
                <small>年間生活費360万円に対する配当カバー率</small>
              </div>
              <div class="metric">
                <strong>おすすめETF特徴</strong>
                <span class="accent-amber text-metric" id="dividendEtfFeature">未計算</span>
                <small>選択ETFの特徴と新NISA利用時の目安</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="配当ETF比較シミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>配当ETFはどれを選べばよいですか？</summary>
              <p>安定感を重視するならVYM、財務健全性を意識するならHDV、配当利回りを重視するならSPYD、増配傾向を重視するならVIGが比較候補になります。実際の投資では経費率、構成銘柄、為替リスクも確認してください。</p>
            </details>
            <details>
              <summary>配当再投資ありとなしでは何が変わりますか？</summary>
              <p>再投資ありでは配当金を追加投資に回すため、最終資産額が増えやすくなります。なしの場合は配当金を現金収入として受け取る前提なので、生活費の補助として見やすくなります。</p>
            </details>
            <details>
              <summary>新NISAで高配当ETFを買うメリットはありますか？</summary>
              <p>新NISAを使うと、条件を満たす範囲で配当や売却益を非課税で受け取れる可能性があります。ただし海外ETFでは外国税額や分配金の扱いに注意が必要です。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="配当ETF比較関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>配当ETFは、配当金、再投資、新NISAの非課税枠を合わせて見ると、収入重視か資産成長重視かを判断しやすくなります。</p>
          </section>
          <div class="related-links">
            <a href="#dividend">配当金シミュレーター</a>
            <a href="#dividend-reinvestment">配当再投資シミュレーター</a>
            <a href="#nisa">新NISAシミュレーター</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="dividend-life" aria-label="配当生活達成シミュレーター">
        <section class="tool-heading">
          <h2>配当生活達成シミュレーター</h2>
          <p>毎月生活費、現在資産、毎月積立額、想定配当利回り、想定年利、運用年数、配当再投資有無から、生活費を配当収入だけでまかなうための必要資産額を試算します。</p>
        </section>

        <section class="workspace" aria-label="配当生活達成の計算">
          <form class="input-panel" id="dividendLifeForm">
            <div class="field">
              <label for="dividendLifeMonthlyCost">毎月生活費 <span class="unit">円 / 月</span></label>
              <input id="dividendLifeMonthlyCost" name="dividendLifeMonthlyCost" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="250000" required aria-describedby="dividendLifeMonthlyCostError">
              <p class="error" id="dividendLifeMonthlyCostError"></p>
            </div>
            <div class="field">
              <label for="dividendLifeAssets">現在資産 <span class="unit">円</span></label>
              <input id="dividendLifeAssets" name="dividendLifeAssets" type="number" inputmode="numeric" min="0" max="10000000000" step="10000" value="5000000" required aria-describedby="dividendLifeAssetsError">
              <p class="error" id="dividendLifeAssetsError"></p>
            </div>
            <div class="field">
              <label for="dividendLifeMonthly">毎月積立額 <span class="unit">円 / 月</span></label>
              <input id="dividendLifeMonthly" name="dividendLifeMonthly" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="100000" required aria-describedby="dividendLifeMonthlyError">
              <p class="error" id="dividendLifeMonthlyError"></p>
            </div>
            <div class="field">
              <label for="dividendLifeYield">想定配当利回り <span class="unit">%</span></label>
              <input id="dividendLifeYield" name="dividendLifeYield" type="number" inputmode="decimal" min="0.1" max="30" step="0.1" value="4" required aria-describedby="dividendLifeYieldError">
              <p class="error" id="dividendLifeYieldError"></p>
            </div>
            <div class="field">
              <label for="dividendLifeReturn">想定年利 <span class="unit">%</span></label>
              <input id="dividendLifeReturn" name="dividendLifeReturn" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="4" required aria-describedby="dividendLifeReturnError">
              <p class="error" id="dividendLifeReturnError"></p>
            </div>
            <div class="field">
              <label for="dividendLifeYears">運用年数 <span class="unit">年</span></label>
              <input id="dividendLifeYears" name="dividendLifeYears" type="number" inputmode="numeric" min="1" max="100" step="1" value="20" required aria-describedby="dividendLifeYearsError">
              <p class="error" id="dividendLifeYearsError"></p>
            </div>
            <label class="check-field" for="dividendLifeReinvest">
              <input id="dividendLifeReinvest" name="dividendLifeReinvest" type="checkbox" checked>
              <span>配当金を再投資する</span>
            </label>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">必要資産額</p>
              <p class="amount" id="dividendLifeRequiredAssets">0円</p>
            </div>
            <p class="notice" id="dividendLifeNotice">入力を確認してください。配当利回りや運用利回りは将来の成果を保証するものではありません。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>年間必要配当金</strong>
                <span class="accent-green" id="dividendLifeAnnualDividend">0円</span>
                <small>毎月生活費 × 12か月</small>
              </div>
              <div class="metric">
                <strong>配当生活達成予想年</strong>
                <span class="accent-blue" id="dividendLifeAchieveYear">未計算</span>
                <small>運用年数内で必要資産に届く時期</small>
              </div>
              <div class="metric">
                <strong>現在との差額</strong>
                <span class="accent-amber" id="dividendLifeGap">0円</span>
                <small>必要資産額 - 現在資産</small>
              </div>
              <div class="metric">
                <strong>毎月必要積立額</strong>
                <span class="accent-green" id="dividendLifeRequiredMonthly">0円</span>
                <small>設定した運用年数で達成するための目安</small>
              </div>
              <div class="metric">
                <strong>FIRE達成との比較</strong>
                <span class="accent-amber text-metric" id="dividendLifeFireComparison">未計算</span>
                <small>4%ルールのFIRE必要資産との比較</small>
              </div>
              <div class="metric">
                <strong>新NISA利用時の効果</strong>
                <span class="accent-blue text-metric" id="dividendLifeNisaEffect">未計算</span>
                <small>年間投資枠と非課税保有限度額の目安</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="配当生活達成シミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>配当生活に必要な資産額はどう計算していますか？</summary>
              <p>年間生活費を想定配当利回りで割って計算しています。例えば年間生活費300万円、配当利回り4%なら必要資産は約7,500万円です。</p>
            </details>
            <details>
              <summary>配当利回りは何%で入力すればよいですか？</summary>
              <p>保有したい株式やETFの想定利回りを入力します。高い利回りほど必要資産は少なく見えますが、減配や価格下落リスクもあるため保守的な数字で確認すると現実的です。</p>
            </details>
            <details>
              <summary>新NISAだけで配当生活は達成できますか？</summary>
              <p>新NISAの非課税保有限度額は目安として1,800万円のため、生活費と配当利回りによっては課税口座との併用が必要になります。このツールでは必要資産と新NISA枠の関係を簡易表示しています。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="配当生活達成関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>配当生活は、年間配当金、再投資効果、FIRE必要資産を合わせて確認すると現実的な目標額を決めやすくなります。</p>
          </section>
          <div class="related-links">
            <a href="#dividend">配当金シミュレーター</a>
            <a href="#dividend-reinvestment">配当再投資シミュレーター</a>
            <a href="#fire">FIRE達成シミュレーター</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="nisa-withdrawal" aria-label="NISA取り崩しシミュレーター">
        <section class="tool-heading">
          <h2>NISA取り崩しシミュレーター</h2>
          <p>現在のNISA資産額、毎月追加投資額、想定年利、取り崩し開始年齢、毎月取り崩し額、運用継続有無から、老後に何年取り崩せるかを試算します。</p>
        </section>

        <section class="workspace" aria-label="NISA取り崩しの計算">
          <form class="input-panel" id="nisaWithdrawalForm">
            <div class="field">
              <label for="nisaWithdrawalAssets">現在のNISA資産額 <span class="unit">円</span></label>
              <input id="nisaWithdrawalAssets" name="nisaWithdrawalAssets" type="number" inputmode="numeric" min="0" max="10000000000" step="10000" value="10000000" required aria-describedby="nisaWithdrawalAssetsError">
              <p class="error" id="nisaWithdrawalAssetsError"></p>
            </div>
            <div class="field">
              <label for="nisaWithdrawalMonthlyInvestment">毎月追加投資額 <span class="unit">円 / 月</span></label>
              <input id="nisaWithdrawalMonthlyInvestment" name="nisaWithdrawalMonthlyInvestment" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="50000" required aria-describedby="nisaWithdrawalMonthlyInvestmentError">
              <p class="error" id="nisaWithdrawalMonthlyInvestmentError"></p>
            </div>
            <div class="field">
              <label for="nisaWithdrawalReturn">想定年利 <span class="unit">%</span></label>
              <input id="nisaWithdrawalReturn" name="nisaWithdrawalReturn" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="4" required aria-describedby="nisaWithdrawalReturnError">
              <p class="error" id="nisaWithdrawalReturnError"></p>
            </div>
            <div class="field">
              <label for="withdrawalStartAge">取り崩し開始年齢 <span class="unit">歳</span></label>
              <input id="withdrawalStartAge" name="withdrawalStartAge" type="number" inputmode="numeric" min="0" max="100" step="1" value="65" required aria-describedby="withdrawalStartAgeError">
              <p class="error" id="withdrawalStartAgeError"></p>
            </div>
            <div class="field">
              <label for="monthlyWithdrawal">毎月取り崩し額 <span class="unit">円 / 月</span></label>
              <input id="monthlyWithdrawal" name="monthlyWithdrawal" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="150000" required aria-describedby="monthlyWithdrawalError">
              <p class="error" id="monthlyWithdrawalError"></p>
            </div>
            <label class="check-field" for="continueInvestment">
              <input id="continueInvestment" name="continueInvestment" type="checkbox" checked>
              <span>取り崩し中も運用を継続する</span>
            </label>
            <div class="field">
              <label for="targetMaintainYears">目標維持年数 <span class="unit">年</span></label>
              <input id="targetMaintainYears" name="targetMaintainYears" type="number" inputmode="numeric" min="1" max="80" step="1" value="30" required aria-describedby="targetMaintainYearsError">
              <p class="error" id="targetMaintainYearsError"></p>
            </div>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">取り崩し可能年数</p>
              <p class="amount" id="withdrawalAvailableYears">未計算</p>
            </div>
            <p class="notice" id="nisaWithdrawalNotice">入力を確認してください。運用利回りや取り崩し年数は将来の成果を保証するものではありません。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>毎月取り崩し可能額</strong>
                <span class="accent-green" id="possibleMonthlyWithdrawal">0円</span>
                <small>目標維持年数に合わせた月額目安</small>
              </div>
              <div class="metric">
                <strong>資産が尽きる年齢</strong>
                <span class="accent-amber" id="depletionAge">未計算</span>
                <small>現在の取り崩し額で資産が尽きる年齢</small>
              </div>
              <div class="metric">
                <strong>運用継続時の残高推移</strong>
                <span class="accent-blue text-metric" id="withdrawalBalanceTrend">未計算</span>
                <small>目標維持年数後の残高目安</small>
              </div>
              <div class="metric">
                <strong>老後資金への影響</strong>
                <span class="accent-green text-metric" id="withdrawalRetirementImpact">未計算</span>
                <small>老後生活費に対する取り崩しの支え</small>
              </div>
              <div class="metric">
                <strong>FIRE達成との比較</strong>
                <span class="accent-amber text-metric" id="withdrawalFireComparison">未計算</span>
                <small>4%ルールの目安と比較</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="NISA取り崩しシミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>NISA取り崩しはどう計算していますか？</summary>
              <p>毎月の取り崩し額を差し引きながら、運用継続を選んだ場合は残高に月次換算の利回りを反映して、資産が何年持つかを試算しています。</p>
            </details>
            <details>
              <summary>毎月取り崩し可能額は何を基準にしていますか？</summary>
              <p>目標維持年数の間、資産が尽きにくい月額を逆算しています。運用継続ありの場合は利回りを反映し、なしの場合は単純に資産を月数で割った目安です。</p>
            </details>
            <details>
              <summary>FIREや老後資金の計画にも使えますか？</summary>
              <p>使えます。新NISAの取り崩しだけで生活費をどれくらい補えるかを見たうえで、FIRE達成シミュレーターや老後資金シミュレーターと合わせて確認すると全体像が見えやすくなります。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="NISA取り崩し関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>NISAの取り崩しは、積立時の資産形成、老後資金の不足額、FIRE必要資産と合わせて確認すると判断しやすくなります。</p>
          </section>
          <div class="related-links">
            <a href="#nisa">新NISA・積立投資シミュレーター</a>
            <a href="#retirement">老後資金シミュレーター</a>
            <a href="#fire">FIRE達成シミュレーター</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="credit-card-investment" aria-label="クレカ積立比較シミュレーター">
        <section class="tool-heading">
          <h2>クレカ積立比較シミュレーター</h2>
          <p>毎月積立額、積立年数、想定年利、クレカ還元率から、通常積立とクレジットカード積立の最終資産額、累計ポイント、FIRE達成への影響を比較します。</p>
        </section>

        <section class="workspace" aria-label="クレカ積立比較の計算">
          <form class="input-panel" id="creditCardInvestmentForm">
            <div class="field">
              <label for="cardMonthly">毎月積立額 <span class="unit">円 / 月</span></label>
              <input id="cardMonthly" name="cardMonthly" type="number" inputmode="numeric" min="0" max="100000000" step="1000" value="50000" required aria-describedby="cardMonthlyError">
              <p class="error" id="cardMonthlyError"></p>
            </div>
            <div class="field">
              <label for="cardYears">積立年数 <span class="unit">年</span></label>
              <input id="cardYears" name="cardYears" type="number" inputmode="numeric" min="1" max="100" step="1" value="20" required aria-describedby="cardYearsError">
              <p class="error" id="cardYearsError"></p>
            </div>
            <div class="field">
              <label for="cardAnnualReturn">想定年利 <span class="unit">%</span></label>
              <input id="cardAnnualReturn" name="cardAnnualReturn" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="4" required aria-describedby="cardAnnualReturnError">
              <p class="error" id="cardAnnualReturnError"></p>
            </div>
            <div class="field">
              <label for="cardRewardRate">クレカ還元率 <span class="unit">%</span></label>
              <input id="cardRewardRate" name="cardRewardRate" type="number" inputmode="decimal" min="0" max="10" step="0.1" value="1" required aria-describedby="cardRewardRateError">
              <p class="error" id="cardRewardRateError"></p>
            </div>
            <label class="check-field" for="cardPointReinvest">
              <input id="cardPointReinvest" name="cardPointReinvest" type="checkbox" checked>
              <span>ポイントを再投資する</span>
            </label>
            <label class="check-field" for="cardNisaUse">
              <input id="cardNisaUse" name="cardNisaUse" type="checkbox" checked>
              <span>NISAを利用する</span>
            </label>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">クレカ積立の最終資産額</p>
              <p class="amount" id="cardFinalAssets">0円</p>
            </div>
            <p class="notice" id="cardInvestmentNotice">入力を確認してください。ポイント還元率や運用利回りは将来の成果を保証するものではありません。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>通常積立の最終資産額</strong>
                <span class="accent-blue" id="normalInvestmentFinalAssets">0円</span>
                <small>ポイントを考慮しない積立投資の目安</small>
              </div>
              <div class="metric">
                <strong>累計ポイント還元</strong>
                <span class="accent-green" id="cardTotalPoints">0円</span>
                <small>積立額に還元率をかけたポイント相当額</small>
              </div>
              <div class="metric">
                <strong>ポイント再投資効果</strong>
                <span class="accent-amber" id="cardPointReinvestmentEffect">0円</span>
                <small>ポイントを再投資した場合の上乗せ目安</small>
              </div>
              <div class="metric">
                <strong>差額比較</strong>
                <span class="accent-green" id="cardDifference">0円</span>
                <small>クレカ積立 - 通常積立</small>
              </div>
              <div class="metric">
                <strong>FIRE達成への影響</strong>
                <span class="accent-amber text-metric" id="cardFireImpact">0円</span>
                <small>目標FIRE資産3000万円に対する上乗せ効果</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="クレカ積立比較シミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>クレカ積立は通常積立より有利ですか？</summary>
              <p>同じ投資商品へ積み立てるなら、ポイント還元分だけ有利になりやすいです。ただし、還元率、上限額、対象カード、証券会社の条件は変わることがあります。</p>
            </details>
            <details>
              <summary>ポイントは再投資したほうがいいですか？</summary>
              <p>長期で資産形成するなら、ポイントも投資に回すことで複利効果を得やすくなります。生活費に使う場合は、再投資効果は出ませんが実質的な支出削減になります。</p>
            </details>
            <details>
              <summary>NISA利用有無は何に影響しますか？</summary>
              <p>このツールでは、NISA利用時は運用益を非課税で見やすくし、年間投資枠の目安も表示します。実際の対象商品や枠の使い方は証券会社の条件を確認してください。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="クレカ積立比較関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>クレカ積立は、新NISAや配当再投資と合わせて確認すると、ポイント還元を含めた資産形成の全体像を整理しやすくなります。</p>
          </section>
          <div class="related-links">
            <a href="#nisa">新NISA・積立投資シミュレーター</a>
            <a href="#dividend-reinvestment">配当再投資シミュレーター</a>
            <a href="#fire">FIRE達成シミュレーター</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="dividend-reinvestment" aria-label="配当再投資シミュレーター">
        <section class="tool-heading">
          <h2>配当再投資シミュレーター</h2>
          <p>初期投資額、毎月追加投資額、想定配当利回り、想定株価成長率、運用年数から、配当金を再投資した場合の資産成長と再投資による増加額を試算します。</p>
        </section>

        <section class="workspace" aria-label="配当再投資の計算">
          <form class="input-panel" id="dividendReinvestmentForm">
            <div class="field">
              <label for="dividendReinvestmentInitial">初期投資額 <span class="unit">円</span></label>
              <input id="dividendReinvestmentInitial" name="dividendReinvestmentInitial" type="number" inputmode="numeric" min="0" max="10000000000" step="10000" value="1000000" required aria-describedby="dividendReinvestmentInitialError">
              <p class="error" id="dividendReinvestmentInitialError"></p>
            </div>
            <div class="field">
              <label for="dividendReinvestmentMonthly">毎月追加投資額 <span class="unit">円 / 月</span></label>
              <input id="dividendReinvestmentMonthly" name="dividendReinvestmentMonthly" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="50000" required aria-describedby="dividendReinvestmentMonthlyError">
              <p class="error" id="dividendReinvestmentMonthlyError"></p>
            </div>
            <div class="field">
              <label for="dividendReinvestmentYield">想定配当利回り <span class="unit">%</span></label>
              <input id="dividendReinvestmentYield" name="dividendReinvestmentYield" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="4" required aria-describedby="dividendReinvestmentYieldError">
              <p class="error" id="dividendReinvestmentYieldError"></p>
            </div>
            <div class="field">
              <label for="dividendReinvestmentGrowth">想定株価成長率 <span class="unit">%</span></label>
              <input id="dividendReinvestmentGrowth" name="dividendReinvestmentGrowth" type="number" inputmode="decimal" min="-30" max="30" step="0.1" value="3" required aria-describedby="dividendReinvestmentGrowthError">
              <p class="error" id="dividendReinvestmentGrowthError"></p>
            </div>
            <div class="field">
              <label for="dividendReinvestmentYears">運用年数 <span class="unit">年</span></label>
              <input id="dividendReinvestmentYears" name="dividendReinvestmentYears" type="number" inputmode="numeric" min="1" max="100" step="1" value="20" required aria-describedby="dividendReinvestmentYearsError">
              <p class="error" id="dividendReinvestmentYearsError"></p>
            </div>
            <label class="check-field" for="dividendReinvestmentEnabled">
              <input id="dividendReinvestmentEnabled" name="dividendReinvestmentEnabled" type="checkbox" checked>
              <span>配当金を再投資する</span>
            </label>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">最終資産額</p>
              <p class="amount" id="dividendReinvestmentFinalAssets">0円</p>
            </div>
            <p class="notice" id="dividendReinvestmentNotice">入力を確認してください。配当利回りや株価成長率は将来の成果を保証するものではありません。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>累計配当金</strong>
                <span class="accent-blue" id="dividendReinvestmentTotalDividend">0円</span>
                <small>運用期間中に発生する配当金の概算</small>
              </div>
              <div class="metric">
                <strong>年間配当金</strong>
                <span class="accent-green" id="dividendReinvestmentAnnualDividend">0円</span>
                <small>最終年時点の資産額から見た年間配当の目安</small>
              </div>
              <div class="metric">
                <strong>再投資による増加額</strong>
                <span class="accent-amber" id="dividendReinvestmentIncrease">0円</span>
                <small>配当を受け取った場合との最終資産額の差</small>
              </div>
              <div class="metric">
                <strong>FIRE達成への影響</strong>
                <span class="accent-amber text-metric" id="dividendReinvestmentFireImpact">0円</span>
                <small>年間生活費360万円を配当でどれくらい補えるか</small>
              </div>
              <div class="metric">
                <strong>新NISA利用時の比較</strong>
                <span class="accent-green text-metric" id="dividendReinvestmentNisaComparison">0円</span>
                <small>年間投資枠と非課税保有限度額に対する目安</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="配当再投資シミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>配当再投資とは何ですか？</summary>
              <p>受け取った配当金を生活費として使わず、同じ投資商品や別の商品へ追加投資する考え方です。元本が増えやすくなるため、長期では資産成長に差が出る場合があります。</p>
            </details>
            <details>
              <summary>想定株価成長率は何%で入れればいいですか？</summary>
              <p>投資対象によって変わります。高く入れすぎると楽観的な結果になりやすいため、まずは0%から数%程度で保守的に試算し、複数パターンで比較するのがおすすめです。</p>
            </details>
            <details>
              <summary>新NISAで配当再投資するメリットはありますか？</summary>
              <p>新NISAの非課税枠を使うと、条件を満たす配当金や売却益を非課税で受け取れる場合があります。再投資を続ける場合は、年間投資枠と非課税保有限度額の範囲も合わせて確認しましょう。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="配当再投資関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>配当再投資は、配当金、FIRE、新NISAの考え方とセットで確認すると、資産形成の全体像をつかみやすくなります。</p>
          </section>
          <div class="related-links">
            <a href="#dividend">配当金シミュレーター</a>
            <a href="#fire">FIRE達成シミュレーター</a>
            <a href="#nisa">新NISA・積立投資シミュレーター</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="side-fire" aria-label="&#x30b5;&#x30a4;&#x30c9;FIRE&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;">
        <section class="tool-heading">
          <h2>&#x30b5;&#x30a4;&#x30c9;FIRE&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
          <p>&#x751f;&#x6d3b;&#x8cbb;&#x3001;&#x526f;&#x696d;&#x53ce;&#x5165;&#x3001;&#x914d;&#x5f53;&#x53ce;&#x5165;&#x3001;&#x6295;&#x8cc7;&#x53ce;&#x76ca;&#x304b;&#x3089;&#x3001;&#x30b5;&#x30a4;&#x30c9;FIRE&#x9054;&#x6210;&#x53ef;&#x80fd;&#x6027;&#x3068;&#x5fc5;&#x8981;&#x8cc7;&#x7523;&#x984d;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
        </section>

        <section class="workspace" aria-label="&#x30b5;&#x30a4;&#x30c9;FIRE&#x306e;&#x8a08;&#x7b97;">
          <form class="input-panel" id="sideFireForm">
            <div class="field">
              <label for="sideFireCurrentAge">&#x73fe;&#x5728;&#x306e;&#x5e74;&#x9f62; <span class="unit">&#x6b73;</span></label>
              <input id="sideFireCurrentAge" name="sideFireCurrentAge" type="number" inputmode="numeric" min="0" max="100" step="1" value="35" required aria-describedby="sideFireCurrentAgeError">
              <p class="error" id="sideFireCurrentAgeError"></p>
            </div>
            <div class="field">
              <label for="sideFireTargetAge">FIRE&#x76ee;&#x6a19;&#x5e74;&#x9f62; <span class="unit">&#x6b73;</span></label>
              <input id="sideFireTargetAge" name="sideFireTargetAge" type="number" inputmode="numeric" min="1" max="100" step="1" value="50" required aria-describedby="sideFireTargetAgeError">
              <p class="error" id="sideFireTargetAgeError"></p>
            </div>
            <div class="field">
              <label for="sideFireAssets">&#x73fe;&#x5728;&#x8cc7;&#x7523; <span class="unit">&#x5186;</span></label>
              <input id="sideFireAssets" name="sideFireAssets" type="number" inputmode="numeric" min="0" max="10000000000" step="10000" value="5000000" required aria-describedby="sideFireAssetsError">
              <p class="error" id="sideFireAssetsError"></p>
            </div>
            <div class="field">
              <label for="sideFireMonthly">&#x6bce;&#x6708;&#x7a4d;&#x7acb;&#x984d; <span class="unit">&#x5186; / &#x6708;</span></label>
              <input id="sideFireMonthly" name="sideFireMonthly" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="80000" required aria-describedby="sideFireMonthlyError">
              <p class="error" id="sideFireMonthlyError"></p>
            </div>
            <div class="field">
              <label for="sideFireReturn">&#x60f3;&#x5b9a;&#x5e74;&#x5229; <span class="unit">%</span></label>
              <input id="sideFireReturn" name="sideFireReturn" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="4" required aria-describedby="sideFireReturnError">
              <p class="error" id="sideFireReturnError"></p>
            </div>
            <div class="field">
              <label for="sideFireLivingCost">&#x6bce;&#x6708;&#x751f;&#x6d3b;&#x8cbb; <span class="unit">&#x5186; / &#x6708;</span></label>
              <input id="sideFireLivingCost" name="sideFireLivingCost" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="250000" required aria-describedby="sideFireLivingCostError">
              <p class="error" id="sideFireLivingCostError"></p>
            </div>
            <div class="field">
              <label for="sideFireSideIncome">&#x526f;&#x696d;&#x6708;&#x53ce; <span class="unit">&#x5186; / &#x6708;</span></label>
              <input id="sideFireSideIncome" name="sideFireSideIncome" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="80000" required aria-describedby="sideFireSideIncomeError">
              <p class="error" id="sideFireSideIncomeError"></p>
            </div>
            <div class="field">
              <label for="sideFireDividendIncome">&#x914d;&#x5f53;&#x53ce;&#x5165; <span class="unit">&#x5186; / &#x6708;</span></label>
              <input id="sideFireDividendIncome" name="sideFireDividendIncome" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="30000" required aria-describedby="sideFireDividendIncomeError">
              <p class="error" id="sideFireDividendIncomeError"></p>
            </div>
            <div class="actions">
              <button type="reset">&#x30ea;&#x30bb;&#x30c3;&#x30c8;</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">FIRE&#x9054;&#x6210;&#x4e88;&#x60f3;&#x5e74;</p>
              <p class="amount" id="sideFireAchieveYear">0&#x5e74;</p>
            </div>
            <p class="notice" id="sideFireNotice">&#x5165;&#x529b;&#x3092;&#x78ba;&#x8a8d;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;FIRE&#x76ee;&#x6a19;&#x5e74;&#x9f62;&#x306f;&#x73fe;&#x5728;&#x306e;&#x5e74;&#x9f62;&#x3088;&#x308a;&#x5927;&#x304d;&#x304f;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;</p>
            <div class="result-grid">
              <div class="metric">
                <strong>&#x5fc5;&#x8981;&#x8cc7;&#x7523;&#x984d;</strong>
                <span class="accent-blue" id="sideFireRequiredAssets">0&#x5186;</span>
                <small>&#x526f;&#x696d;&#x30fb;&#x914d;&#x5f53;&#x5f8c;&#x306e;&#x4e0d;&#x8db3;&#x751f;&#x6d3b;&#x8cbb; x 25&#x5e74;</small>
              </div>
              <div class="metric">
                <strong>&#x4e0d;&#x8db3;&#x984d;</strong>
                <span class="accent-amber" id="sideFireShortage">0&#x5186;</span>
                <small>&#x76ee;&#x6a19;&#x5e74;&#x9f62;&#x6642;&#x70b9;&#x306e;&#x4e88;&#x60f3;&#x8cc7;&#x7523;&#x3068;&#x306e;&#x5dee;&#x984d;</small>
              </div>
              <div class="metric">
                <strong>&#x6bce;&#x6708;&#x5fc5;&#x8981;&#x7a4d;&#x7acb;&#x984d;</strong>
                <span class="accent-green" id="sideFireRequiredMonthly">0&#x5186;</span>
                <small>&#x76ee;&#x6a19;&#x5e74;&#x9f62;&#x307e;&#x3067;&#x306b;&#x5fc5;&#x8981;&#x306a;&#x6708;&#x984d;&#x76ee;&#x5b89;</small>
              </div>
              <div class="metric">
                <strong>&#x526f;&#x696d;&#x53ce;&#x5165;&#x306b;&#x3088;&#x308b;&#x77ed;&#x7e2e;&#x5e74;&#x6570;</strong>
                <span class="accent-blue" id="sideFireSideIncomeEffect">0&#x5e74;</span>
                <small>&#x526f;&#x696d;&#x53ce;&#x5165;&#x3092;&#x53cd;&#x6620;&#x3057;&#x305f;&#x5834;&#x5408;&#x306e;&#x9054;&#x6210;&#x5e74;&#x6570;&#x6539;&#x5584;</small>
              </div>
              <div class="metric">
                <strong>&#x914d;&#x5f53;&#x53ce;&#x5165;&#x306b;&#x3088;&#x308b;&#x6539;&#x5584;&#x52b9;&#x679c;</strong>
                <span class="accent-green text-metric" id="sideFireDividendEffect">0&#x5186;</span>
                <small>&#x5fc5;&#x8981;&#x8cc7;&#x7523;&#x984d;&#x3092;&#x3069;&#x308c;&#x304f;&#x3089;&#x4e0b;&#x3052;&#x308b;&#x304b;</small>
              </div>
              <div class="metric">
                <strong>&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x3068;&#x306e;&#x6bd4;&#x8f03;</strong>
                <span class="accent-amber text-metric" id="sideFireRetirementComparison">0&#x5186;</span>
                <small>&#x8001;&#x5f8c;&#x8cc7;&#x91d1;3,000&#x4e07;&#x5186;&#x3068;&#x306e;&#x6bd4;&#x8f03;</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="&#x30b5;&#x30a4;&#x30c9;FIRE&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;FAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>&#x30b5;&#x30a4;&#x30c9;FIRE&#x3068;&#x901a;&#x5e38;&#x306e;FIRE&#x306e;&#x9055;&#x3044;&#x306f;&#x4f55;&#x3067;&#x3059;&#x304b;&#xff1f;</summary>
              <p>&#x901a;&#x5e38;&#x306e;FIRE&#x306f;&#x751f;&#x6d3b;&#x8cbb;&#x306e;&#x5927;&#x90e8;&#x5206;&#x3092;&#x8cc7;&#x7523;&#x53ce;&#x5165;&#x3067;&#x8cc4;&#x3046;&#x8003;&#x3048;&#x65b9;&#x3067;&#x3059;&#x3002;&#x30b5;&#x30a4;&#x30c9;FIRE&#x306f;&#x526f;&#x696d;&#x3084;&#x5c0f;&#x3055;&#x306a;&#x52b4;&#x50cd;&#x53ce;&#x5165;&#x3092;&#x6b8b;&#x3059;&#x305f;&#x3081;&#x3001;&#x5fc5;&#x8981;&#x8cc7;&#x7523;&#x984d;&#x3092;&#x6291;&#x3048;&#x3084;&#x3059;&#x3044;&#x306e;&#x304c;&#x7279;&#x5fb4;&#x3067;&#x3059;&#x3002;</p>
            </details>
            <details>
              <summary>&#x526f;&#x696d;&#x6708;&#x53ce;&#x306f;&#x5168;&#x90e8;&#x751f;&#x6d3b;&#x8cbb;&#x306b;&#x4f7f;&#x3046;&#x524d;&#x63d0;&#x3067;&#x3059;&#x304b;&#xff1f;</summary>
              <p>&#x3053;&#x306e;&#x30c4;&#x30fc;&#x30eb;&#x3067;&#x306f;&#x3001;&#x526f;&#x696d;&#x6708;&#x53ce;&#x3092;&#x751f;&#x6d3b;&#x8cbb;&#x306e;&#x88dc;&#x586b;&#x3068;&#x3057;&#x3066;&#x8a08;&#x7b97;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x3002;&#x5b9f;&#x969b;&#x306b;&#x306f;&#x7a0e;&#x91d1;&#x3001;&#x7d4c;&#x8cbb;&#x3001;&#x53ce;&#x5165;&#x5909;&#x52d5;&#x304c;&#x3042;&#x308b;&#x305f;&#x3081;&#x3001;&#x4fdd;&#x5b88;&#x7684;&#x306b;&#x5c11;&#x3057;&#x4f4e;&#x3081;&#x306e;&#x91d1;&#x984d;&#x3067;&#x8a66;&#x7b97;&#x3059;&#x308b;&#x3068;&#x73fe;&#x5b9f;&#x7684;&#x3067;&#x3059;&#x3002;</p>
            </details>
            <details>
              <summary>&#x914d;&#x5f53;&#x53ce;&#x5165;&#x306f;&#x6708;&#x984d;&#x3067;&#x5165;&#x529b;&#x3057;&#x3066;&#x3044;&#x3044;&#x3067;&#x3059;&#x304b;&#xff1f;</summary>
              <p>&#x306f;&#x3044;&#x3002;&#x5e74;&#x9593;&#x914d;&#x5f53;&#x91d1;&#x3092;12&#x3067;&#x5272;&#x3063;&#x305f;&#x6708;&#x5e73;&#x5747;&#x306e;&#x76ee;&#x5b89;&#x3092;&#x5165;&#x529b;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;&#x5b9f;&#x969b;&#x306e;&#x914d;&#x5f53;&#x652f;&#x6255;&#x3044;&#x306f;&#x6bce;&#x6708;&#x3067\u306f\u306a\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002;</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="&#x30b5;&#x30a4;&#x30c9;FIRE&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;">
          <section class="tool-heading">
            <h2>&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;</h2>
            <p>&#x30b5;&#x30a4;&#x30c9;FIRE&#x306f;&#x3001;FIRE&#x76ee;&#x6a19;&#x3001;&#x914d;&#x5f53;&#x53ce;&#x5165;&#x3001;&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x306e;&#x30d0;&#x30e9;&#x30f3;&#x30b9;&#x3092;&#x5408;&#x308f;&#x305b;&#x3066;&#x898b;&#x308b;&#x3068;&#x8a08;&#x753b;&#x3057;&#x3084;&#x3059;&#x304f;&#x306a;&#x308a;&#x307e;&#x3059;&#x3002;</p>
          </section>
          <div class="related-links">
            <a href="#fire">FIRE&#x9054;&#x6210;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#dividend">&#x914d;&#x5f53;&#x91d1;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#retirement">&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="mortgage" aria-label="&#x4f4f;&#x5b85;&#x30ed;&#x30fc;&#x30f3;&#x8fd4;&#x6e08;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;">
        <section class="tool-heading">
          <h2>&#x4f4f;&#x5b85;&#x30ed;&#x30fc;&#x30f3;&#x8fd4;&#x6e08;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>
          <p>&#x501f;&#x5165;&#x91d1;&#x984d;&#x3001;&#x982d;&#x91d1;&#x3001;&#x91d1;&#x5229;&#x3001;&#x8fd4;&#x6e08;&#x5e74;&#x6570;&#x3001;&#x30dc;&#x30fc;&#x30ca;&#x30b9;&#x8fd4;&#x6e08;&#x3001;&#x7e70;&#x4e0a;&#x8fd4;&#x6e08;&#x984d;&#x304b;&#x3089;&#x3001;&#x6bce;&#x6708;&#x8fd4;&#x6e08;&#x984d;&#x3068;&#x7dcf;&#x8fd4;&#x6e08;&#x984d;&#x3092;&#x8a66;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>
        </section>

        <section class="workspace" aria-label="&#x4f4f;&#x5b85;&#x30ed;&#x30fc;&#x30f3;&#x306e;&#x8a08;&#x7b97;">
          <form class="input-panel" id="mortgageForm">
            <div class="field">
              <label for="mortgageBorrowing">&#x501f;&#x5165;&#x91d1;&#x984d; <span class="unit">&#x5186;</span></label>
              <input id="mortgageBorrowing" name="mortgageBorrowing" type="number" inputmode="numeric" min="0" max="10000000000" step="100000" value="35000000" required aria-describedby="mortgageBorrowingError">
              <p class="error" id="mortgageBorrowingError"></p>
            </div>
            <div class="field">
              <label for="downPayment">&#x982d;&#x91d1; <span class="unit">&#x5186;</span></label>
              <input id="downPayment" name="downPayment" type="number" inputmode="numeric" min="0" max="10000000000" step="100000" value="3000000" required aria-describedby="downPaymentError">
              <p class="error" id="downPaymentError"></p>
            </div>
            <div class="field">
              <label for="mortgageRate">&#x91d1;&#x5229; <span class="unit">%</span></label>
              <input id="mortgageRate" name="mortgageRate" type="number" inputmode="decimal" min="0" max="20" step="0.01" value="1.2" required aria-describedby="mortgageRateError">
              <p class="error" id="mortgageRateError"></p>
            </div>
            <div class="field">
              <label for="mortgageYears">&#x8fd4;&#x6e08;&#x5e74;&#x6570; <span class="unit">&#x5e74;</span></label>
              <input id="mortgageYears" name="mortgageYears" type="number" inputmode="numeric" min="1" max="50" step="1" value="35" required aria-describedby="mortgageYearsError">
              <p class="error" id="mortgageYearsError"></p>
            </div>
            <label class="check-field" for="bonusRepayment">
              <input id="bonusRepayment" name="bonusRepayment" type="checkbox">
              <span>&#x30dc;&#x30fc;&#x30ca;&#x30b9;&#x8fd4;&#x6e08;&#x3042;&#x308a;&#x3067;&#x8a66;&#x7b97;&#x3059;&#x308b;</span>
            </label>
            <div class="field">
              <label for="prepaymentAmount">&#x7e70;&#x4e0a;&#x8fd4;&#x6e08;&#x984d; <span class="unit">&#x5186;</span></label>
              <input id="prepaymentAmount" name="prepaymentAmount" type="number" inputmode="numeric" min="0" max="10000000000" step="100000" value="1000000" required aria-describedby="prepaymentAmountError">
              <p class="error" id="prepaymentAmountError"></p>
            </div>
            <div class="field">
              <label for="mortgageAnnualIncome">&#x5e74;&#x53ce;&#xff08;&#x8fd4;&#x6e08;&#x6bd4;&#x7387;&#x8a08;&#x7b97;&#x7528;&#xff09; <span class="unit">&#x5186;</span></label>
              <input id="mortgageAnnualIncome" name="mortgageAnnualIncome" type="number" inputmode="numeric" min="0" max="1000000000" step="100000" value="6000000" required aria-describedby="mortgageAnnualIncomeError">
              <p class="error" id="mortgageAnnualIncomeError"></p>
            </div>
            <div class="actions">
              <button type="reset">&#x30ea;&#x30bb;&#x30c3;&#x30c8;</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">&#x6bce;&#x6708;&#x8fd4;&#x6e08;&#x984d;</p>
              <p class="amount" id="mortgageMonthlyPayment">0&#x5186;</p>
            </div>
            <p class="notice" id="mortgageNotice">&#x5165;&#x529b;&#x3092;&#x78ba;&#x8a8d;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;&#x982d;&#x91d1;&#x30fb;&#x7e70;&#x4e0a;&#x8fd4;&#x6e08;&#x984d;&#x306f;&#x501f;&#x5165;&#x91d1;&#x984d;&#x4ee5;&#x4e0b;&#x3067;&#x8a2d;&#x5b9a;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;</p>
            <div class="result-grid">
              <div class="metric">
                <strong>&#x7dcf;&#x8fd4;&#x6e08;&#x984d;</strong>
                <span class="accent-blue" id="mortgageTotalPayment">0&#x5186;</span>
                <small>&#x5143;&#x91d1; + &#x5229;&#x606f;&#x306e;&#x6982;&#x7b97;</small>
              </div>
              <div class="metric">
                <strong>&#x5229;&#x606f;&#x7dcf;&#x984d;</strong>
                <span class="accent-amber" id="mortgageInterestTotal">0&#x5186;</span>
                <small>&#x7dcf;&#x8fd4;&#x6e08;&#x984d; - &#x5b9f;&#x969b;&#x306e;&#x501f;&#x5165;&#x5143;&#x91d1;</small>
              </div>
              <div class="metric">
                <strong>&#x7e70;&#x4e0a;&#x8fd4;&#x6e08;&#x52b9;&#x679c;</strong>
                <span class="accent-green" id="prepaymentEffect">0&#x5186;</span>
                <small>&#x5229;&#x606f;&#x8efd;&#x6e1b;&#x306e;&#x6982;&#x7b97;</small>
              </div>
              <div class="metric">
                <strong>&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x3078;&#x306e;&#x5f71;&#x97ff;</strong>
                <span class="accent-amber text-metric" id="mortgageRetirementImpact">0&#x5186;</span>
                <small>&#x8fd4;&#x6e08;&#x6bd4;&#x7387;&#x304b;&#x3089;&#x898b;&#x305f;&#x5bb6;&#x8a08;&#x4f59;&#x529b;&#x306e;&#x76ee;&#x5b89;</small>
              </div>
              <div class="metric">
                <strong>&#x5e74;&#x53ce;&#x306b;&#x5bfe;&#x3059;&#x308b;&#x8fd4;&#x6e08;&#x6bd4;&#x7387;</strong>
                <span class="accent-blue" id="repaymentRatio">0%</span>
                <small>&#x5e74;&#x9593;&#x8fd4;&#x6e08;&#x984d; / &#x5e74;&#x53ce;</small>
              </div>
              <div class="metric">
                <strong>&#x30dc;&#x30fc;&#x30ca;&#x30b9;&#x8fd4;&#x6e08;&#x76ee;&#x5b89;</strong>
                <span class="accent-green" id="bonusPaymentGuide">0&#x5186;</span>
                <small>&#x30dc;&#x30fc;&#x30ca;&#x30b9;&#x8fd4;&#x6e08;&#x3042;&#x308a;&#x306e;&#x5834;&#x5408;&#x306e;1&#x56de;&#x3042;&#x305f;&#x308a;&#x76ee;&#x5b89;</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="&#x4f4f;&#x5b85;&#x30ed;&#x30fc;&#x30f3;&#x8fd4;&#x6e08;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;FAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>&#x6bce;&#x6708;&#x8fd4;&#x6e08;&#x984d;&#x306f;&#x3069;&#x3046;&#x8a08;&#x7b97;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x304b;&#xff1f;</summary>
              <p>&#x5143;&#x5229;&#x5747;&#x7b49;&#x8fd4;&#x6e08;&#x3092;&#x524d;&#x63d0;&#x306b;&#x3001;&#x5b9f;&#x969b;&#x306e;&#x501f;&#x5165;&#x5143;&#x91d1;&#x3001;&#x91d1;&#x5229;&#x3001;&#x8fd4;&#x6e08;&#x671f;&#x9593;&#x304b;&#x3089;&#x6982;&#x7b97;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x3002;&#x91d1;&#x878d;&#x6a5f;&#x95a2;&#x306e;&#x4fdd;&#x8a3c;&#x6599;&#x3001;&#x56e3;&#x4fe1;&#x3001;&#x624b;&#x6570;&#x6599;&#x306f;&#x542b;&#x307f;&#x307e;&#x305b;&#x3093;&#x3002;</p>
            </details>
            <details>
              <summary>&#x30dc;&#x30fc;&#x30ca;&#x30b9;&#x8fd4;&#x6e08;&#x306f;&#x3069;&#x306e;&#x3088;&#x3046;&#x306b;&#x6271;&#x3063;&#x3066;&#x3044;&#x307e;&#x3059;&#x304b;&#xff1f;</summary>
              <p>&#x30dc;&#x30fc;&#x30ca;&#x30b9;&#x8fd4;&#x6e08;&#x3042;&#x308a;&#x306e;&#x5834;&#x5408;&#x3001;&#x501f;&#x5165;&#x5143;&#x91d1;&#x306e;20%&#x3092;&#x5e74;2&#x56de;&#x306e;&#x30dc;&#x30fc;&#x30ca;&#x30b9;&#x8fd4;&#x6e08;&#x5206;&#x3068;&#x3057;&#x3066;&#x6982;&#x7b97;&#x3057;&#x3001;&#x6bce;&#x6708;&#x8fd4;&#x6e08;&#x984d;&#x306f;&#x6b8b;&#x308a;&#x306e;&#x5143;&#x91d1;&#x3092;&#x3082;&#x3068;&#x306b;&#x8868;&#x793a;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x3002;</p>
            </details>
            <details>
              <summary>&#x8fd4;&#x6e08;&#x6bd4;&#x7387;&#x306f;&#x4f55;%&#x304c;&#x76ee;&#x5b89;&#x3067;&#x3059;&#x304b;&#xff1f;</summary>
              <p>&#x4e00;&#x822c;&#x7684;&#x306b;&#x306f;20%&#x304b;&#x3089;25%&#x524d;&#x5f8c;&#x307e;&#x3067;&#x306b;&#x6291;&#x3048;&#x308b;&#x3068;&#x3001;&#x6559;&#x80b2;&#x8cbb;&#x3084;&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x306e;&#x6e96;&#x5099;&#x3068;&#x4e21;&#x7acb;&#x3057;&#x3084;&#x3059;&#x304f;&#x306a;&#x308a;&#x307e;&#x3059;&#x3002;&#x3053;&#x306e;&#x30c4;&#x30fc;&#x30eb;&#x3067;&#x306f;&#x5bb6;&#x8a08;&#x306e;&#x8ca0;&#x62c5;&#x611f;&#x3092;&#x898b;&#x308b;&#x76ee;&#x5b89;&#x3068;&#x3057;&#x3066;&#x8868;&#x793a;&#x3057;&#x3066;&#x3044;&#x307e;&#x3059;&#x3002;</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="&#x4f4f;&#x5b85;&#x30ed;&#x30fc;&#x30f3;&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;">
          <section class="tool-heading">
            <h2>&#x95a2;&#x9023;&#x30c4;&#x30fc;&#x30eb;</h2>
            <p>&#x4f4f;&#x5b85;&#x30ed;&#x30fc;&#x30f3;&#x306f;&#x6559;&#x80b2;&#x8cbb;&#x3068;&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x306e;&#x6e96;&#x5099;&#x306b;&#x5927;&#x304d;&#x304f;&#x5f71;&#x97ff;&#x3057;&#x307e;&#x3059;&#x3002;&#x30e9;&#x30a4;&#x30d5;&#x30d7;&#x30e9;&#x30f3;&#x8cc7;&#x91d1;&#x3068;&#x5408;&#x308f;&#x305b;&#x3066;&#x78ba;&#x8a8d;&#x3067;&#x304d;&#x307e;&#x3059;&#x3002;</p>
          </section>
          <div class="related-links">
            <a href="#education">&#x6559;&#x80b2;&#x8cbb;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#retirement">&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#fire">FIRE&#x9054;&#x6210;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
          </div>
        </section>
      </section>

      <footer class="site-footer">
        <nav class="footer-links" aria-label="&#x30b5;&#x30a4;&#x30c8;&#x60c5;&#x5831;">
          <a href="#top">&#x30c8;&#x30c3;&#x30d7;</a>
          <a href="#side-income">&#x526f;&#x696d;&#x6708;&#x53ce;</a>
          <a href="#ai-hourly">AI&#x526f;&#x696d;&#x6642;&#x7d66;</a>
          <a href="#ai-efficiency">AI副業効率化</a>
          <a href="#hourly-improvement">副業時給改善</a>
          <a href="#side-profit-margin">&#x526f;&#x696d;&#x5229;&#x76ca;&#x7387;</a>
          <a href="#take-home">&#x526f;&#x696d;&#x624b;&#x53d6;&#x308a;</a>
          <a href="#tax">&#x7a0e;&#x91d1;&#x30fb;&#x9752;&#x8272;&#x7533;&#x544a;</a>
          <a href="#income-tax">&#x526f;&#x696d;&#x6240;&#x5f97;&#x7a0e;</a>
          <a href="#resident-tax">&#x526f;&#x696d;&#x4f4f;&#x6c11;&#x7a0e;</a>
          <a href="#nisa">&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;</a>
          <a href="#nisa-withdrawal">NISA取り崩し</a>
          <a href="#credit-card-investment">&#x30af;&#x30ec;&#x30ab;&#x7a4d;&#x7acb;</a>
          <a href="#ideco">iDeCo&#x7bc0;&#x7a0e;</a>
          <a href="#dividend">&#x914d;&#x5f53;&#x91d1;</a>
          <a href="#dividend-reinvestment">&#x914d;&#x5f53;&#x518d;&#x6295;&#x8cc7;</a>
          <a href="#dividend-life">配当生活達成</a>
          <a href="#fire">FIRE&#x9054;&#x6210;</a>
          <a href="#employee-fire">&#x4f1a;&#x793e;&#x54e1;FIRE</a>
            <a href="#side-fire">&#x30b5;&#x30a4;&#x30c9;FIRE</a>
            <a href="#emergency-fund">&#x751f;&#x6d3b;&#x9632;&#x885b;&#x8cc7;&#x91d1;</a>
            <a href="#fixed-cost-reduction">固定費削減</a>
            <a href="#retirement">&#x8001;&#x5f8c;&#x8cc7;&#x91d1;</a>
          <a href="#education">&#x6559;&#x80b2;&#x8cbb;</a>
          <a href="#education-insurance">&#x5b66;&#x8cc7;&#x4fdd;&#x967a;</a>
          <a href="#mortgage">&#x4f4f;&#x5b85;&#x30ed;&#x30fc;&#x30f3;</a>
          <a href="privacy.html">&#x30d7;&#x30e9;&#x30a4;&#x30d0;&#x30b7;&#x30fc;&#x30dd;&#x30ea;&#x30b7;&#x30fc;</a>
          <a href="disclaimer.html">&#x514d;&#x8cac;&#x4e8b;&#x9805;</a>
          <a href="contact.html">&#x304a;&#x554f;&#x3044;&#x5408;&#x308f;&#x305b;</a>
          <a href="operator.html">&#x904b;&#x55b6;&#x8005;&#x60c5;&#x5831;</a>
        </nav>
        <p>&copy; &#x8cc7;&#x7523;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</p>
      </footer>
    </div>
  </main>`;

const yen = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
  maximumFractionDigits: 0,
});

const fieldRules = {
  hourly: { label: "\u6642\u7d66", min: 0, max: 100000, unit: "\u5186", integer: false },
  hours: { label: "\u4f5c\u696d\u6642\u9593", min: 0, max: 744, unit: "\u6642\u9593", integer: false },
  projects: { label: "\u6848\u4ef6\u6570", min: 0, max: 100, unit: "\u4ef6", integer: true },
  tax: { label: "\u7a0e\u7387", min: 0, max: 100, unit: "%", integer: false },
  projectPrice: { label: "\u6848\u4ef6\u5358\u4fa1", min: 0, max: 100000000, unit: "\u5186", integer: false },
  projectHours: { label: "\u4f5c\u696d\u6642\u9593", min: 0.1, max: 1000, unit: "\u6642\u9593", integer: false },
  monthlyAiProjects: { label: "\u6708\u6848\u4ef6\u6570", min: 0, max: 100, unit: "\u4ef6", integer: true },
  aiEfficiencyHours: { label: "現在の副業作業時間", min: 0.1, max: 10000, unit: "\u6642\u9593", integer: false },
  aiEfficiencySales: { label: "現在の副業売上", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  aiEfficiencyReduction: { label: "AIによる時間削減率", min: 0, max: 90, unit: "%", integer: false },
  aiToolMonthlyCost: { label: "AIツール月額費用", min: 0, max: 10000000, unit: "\u5186", integer: false },
  outsourcingReduction: { label: "外注費削減額", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  aiEfficiencyTargetHourly: { label: "目標時給", min: 0, max: 1000000, unit: "\u5186", integer: false },
  improvementSales: { label: "副業売上", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  improvementHours: { label: "作業時間", min: 0.1, max: 10000, unit: "\u6642\u9593", integer: false },
  improvementExpenses: { label: "経費", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  improvementOutsourcing: { label: "外注費", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  improvementAiReduction: { label: "AI活用時間削減率", min: 0, max: 90, unit: "%", integer: false },
  targetHourlyRate: { label: "目標時給", min: 0, max: 1000000, unit: "\u5186", integer: false },
  mainJobHours: { label: "本業勤務時間", min: 0, max: 24, unit: "\u6642\u9593", integer: false },
  commuteHours: { label: "通勤時間", min: 0, max: 8, unit: "\u6642\u9593", integer: false },
  sleepHours: { label: "睡眠時間", min: 0, max: 24, unit: "\u6642\u9593", integer: false },
  houseworkHours: { label: "家事時間", min: 0, max: 12, unit: "\u6642\u9593", integer: false },
  holidayFreeHours: { label: "休日時間", min: 0, max: 24, unit: "\u6642\u9593", integer: false },
  sideWorkHours: { label: "副業作業時間", min: 0, max: 168, unit: "\u6642\u9593", integer: false },
  timeManagementAiReduction: { label: "AIによる時短率", min: 0, max: 90, unit: "%", integer: false },
  profitSales: { label: "\u526f\u696d\u58f2\u4e0a", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  profitExpenses: { label: "\u7d4c\u8cbb", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  profitHours: { label: "\u4f5c\u696d\u6642\u9593", min: 0.1, max: 10000, unit: "\u6642\u9593", integer: false },
  profitAdCost: { label: "\u5e83\u544a\u8cbb", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  profitOutsourcingCost: { label: "\u5916\u6ce8\u8cbb", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  annualSideIncome: { label: "\u5e74\u9593\u526f\u696d\u53ce\u5165", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  expenses: { label: "\u7d4c\u8cbb", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  incomeTaxRate: { label: "\u6240\u5f97\u7a0e\u7387", min: 0, max: 45, unit: "%", integer: false },
  residentTaxRate: { label: "\u4f4f\u6c11\u7a0e\u7387", min: 0, max: 20, unit: "%", integer: false },
  blueDeduction: { label: "\u9752\u8272\u7533\u544a\u63a7\u9664\u984d", min: 0, max: 650000, unit: "\u5186", integer: false },
  residentTaxSales: { label: "\u5e74\u9593\u526f\u696d\u58f2\u4e0a", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  residentTaxExpenses: { label: "\u5e74\u9593\u7d4c\u8cbb", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  residentTaxBlueDeduction: { label: "\u9752\u8272\u7533\u544a\u63a7\u9664\u984d", min: 0, max: 650000, unit: "\u5186", integer: false },
  residentTaxBasicDeduction: { label: "\u57fa\u790e\u63a7\u9664\u984d", min: 0, max: 10000000, unit: "\u5186", integer: false },
  residentTaxRateInput: { label: "\u4f4f\u6c11\u7a0e\u7387", min: 0, max: 20, unit: "%", integer: false },
  residentTaxPerCapita: { label: "\u5747\u7b49\u5272\u984d", min: 0, max: 100000, unit: "\u5186", integer: false },
  incomeTaxSales: { label: "\u5e74\u9593\u526f\u696d\u58f2\u4e0a", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  incomeTaxExpenses: { label: "\u5e74\u9593\u7d4c\u8cbb", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  incomeTaxBlueDeduction: { label: "\u9752\u8272\u7533\u544a\u63a7\u9664\u984d", min: 0, max: 650000, unit: "\u5186", integer: false },
  incomeTaxBasicDeduction: { label: "\u57fa\u790e\u63a7\u9664\u984d", min: 0, max: 10000000, unit: "\u5186", integer: false },
  incomeTaxOtherDeduction: { label: "\u305d\u306e\u4ed6\u63a7\u9664\u984d", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  incomeTaxRateInput: { label: "\u6240\u5f97\u7a0e\u7387", min: 0, max: 45, unit: "%", integer: false },
  reconstructionTaxRate: { label: "\u5fa9\u8208\u7279\u5225\u6240\u5f97\u7a0e\u7387", min: 0, max: 10, unit: "%", integer: false },
  takeHomeSales: { label: "\u5e74\u9593\u526f\u696d\u58f2\u4e0a", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  takeHomeExpenses: { label: "\u5e74\u9593\u7d4c\u8cbb", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  takeHomeIncomeTaxRate: { label: "\u6240\u5f97\u7a0e\u7387", min: 0, max: 45, unit: "%", integer: false },
  takeHomeResidentTaxRate: { label: "\u4f4f\u6c11\u7a0e\u7387", min: 0, max: 20, unit: "%", integer: false },
  takeHomeBlueDeduction: { label: "\u9752\u8272\u7533\u544a\u63a7\u9664\u984d", min: 0, max: 650000, unit: "\u5186", integer: false },
  nisaInitial: { label: "\u521d\u671f\u6295\u8cc7\u984d", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  nisaMonthly: { label: "\u6bce\u6708\u7a4d\u7acb\u984d", min: 0, max: 100000000, unit: "\u5186", integer: false },
  nisaAnnualReturn: { label: "\u60f3\u5b9a\u5e74\u5229", min: 0, max: 30, unit: "%", integer: false },
  nisaYears: { label: "\u904b\u7528\u5e74\u6570", min: 0, max: 100, unit: "\u5e74", integer: false },
  nisaTarget: { label: "\u76ee\u6a19\u91d1\u984d", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  nisaWithdrawalAssets: { label: "現在のNISA資産額", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  nisaWithdrawalMonthlyInvestment: { label: "毎月追加投資額", min: 0, max: 100000000, unit: "\u5186", integer: false },
  nisaWithdrawalReturn: { label: "想定年利", min: 0, max: 30, unit: "%", integer: false },
  withdrawalStartAge: { label: "取り崩し開始年齢", min: 0, max: 100, unit: "\u6b73", integer: true },
  monthlyWithdrawal: { label: "毎月取り崩し額", min: 0, max: 100000000, unit: "\u5186", integer: false },
  targetMaintainYears: { label: "目標維持年数", min: 1, max: 80, unit: "\u5e74", integer: true },
  cardMonthly: { label: "\u6bce\u6708\u7a4d\u7acb\u984d", min: 0, max: 100000000, unit: "\u5186", integer: false },
  cardYears: { label: "\u7a4d\u7acb\u5e74\u6570", min: 1, max: 100, unit: "\u5e74", integer: true },
  cardAnnualReturn: { label: "\u60f3\u5b9a\u5e74\u5229", min: 0, max: 30, unit: "%", integer: false },
  cardRewardRate: { label: "\u30af\u30ec\u30ab\u9084\u5143\u7387", min: 0, max: 10, unit: "%", integer: false },
  idecoAnnualIncome: { label: "\u5e74\u53ce", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  idecoTaxableIncome: { label: "\u8ab2\u7a0e\u6240\u5f97", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  idecoIncomeTaxRate: { label: "\u6240\u5f97\u7a0e\u7387", min: 0, max: 45, unit: "%", integer: false },
  idecoResidentTaxRate: { label: "\u4f4f\u6c11\u7a0e\u7387", min: 0, max: 20, unit: "%", integer: false },
  idecoMonthlyContribution: { label: "\u6bce\u6708\u306eiDeCo\u639b\u91d1", min: 0, max: 68000, unit: "\u5186", integer: false },
  idecoYears: { label: "\u904b\u7528\u5e74\u6570", min: 0, max: 100, unit: "\u5e74", integer: false },
  idecoAnnualReturn: { label: "\u60f3\u5b9a\u5e74\u5229", min: 0, max: 30, unit: "%", integer: false },
  currentAssets: { label: "\u73fe\u5728\u8cc7\u7523", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  monthlyInvestment: { label: "\u6bce\u6708\u7a4d\u7acb\u984d", min: 0, max: 100000000, unit: "\u5186", integer: false },
  annualReturn: { label: "\u60f3\u5b9a\u5e74\u5229", min: 0, max: 30, unit: "%", integer: false },
  targetAssets: { label: "\u76ee\u6a19\u8cc7\u7523", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  years: { label: "\u5e74\u6570", min: 0, max: 100, unit: "\u5e74", integer: false },
  currentAge: { label: "\u73fe\u5728\u306e\u5e74\u9f62", min: 0, max: 100, unit: "\u6b73", integer: true },
  retirementAge: { label: "\u9000\u8077\u4e88\u5b9a\u5e74\u9f62", min: 1, max: 100, unit: "\u6b73", integer: true },
  retirementSavings: { label: "\u73fe\u5728\u306e\u8caf\u84c4\u984d", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  retirementMonthly: { label: "\u6bce\u6708\u306e\u7a4d\u7acb\u984d", min: 0, max: 100000000, unit: "\u5186", integer: false },
  retirementReturn: { label: "\u60f3\u5b9a\u5e74\u5229", min: 0, max: 30, unit: "%", integer: false },
  retirementTarget: { label: "\u8001\u5f8c\u306b\u5fc5\u8981\u306a\u76ee\u6a19\u8cc7\u91d1", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  monthlyLivingCost: { label: "\u9000\u8077\u5f8c\u306e\u6bce\u6708\u751f\u6d3b\u8cbb", min: 0, max: 100000000, unit: "\u5186", integer: false },
  monthlyPension: { label: "\u5e74\u91d1\u898b\u8fbc\u307f\u984d", min: 0, max: 100000000, unit: "\u5186", integer: false },
  childrenCount: { label: "\u5b50\u3069\u3082\u306e\u4eba\u6570", min: 1, max: 10, unit: "\u4eba", integer: true },
  educationSavings: { label: "\u73fe\u5728\u306e\u8caf\u84c4\u984d", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  educationMonthly: { label: "\u6bce\u6708\u7a4d\u7acb\u984d", min: 0, max: 100000000, unit: "\u5186", integer: false },
  educationReturn: { label: "\u60f3\u5b9a\u5e74\u5229", min: 0, max: 30, unit: "%", integer: false },
  educationInsuranceMonthly: { label: "\u6bce\u6708\u7a4d\u7acb\u984d", min: 0, max: 100000000, unit: "\u5186", integer: false },
  educationInsuranceYears: { label: "\u7a4d\u7acb\u5e74\u6570", min: 1, max: 30, unit: "\u5e74", integer: true },
  educationInsuranceReturn: { label: "\u60f3\u5b9a\u5229\u56de\u308a", min: 0, max: 30, unit: "%", integer: false },
  educationInsuranceRefundRate: { label: "\u5b66\u8cc7\u4fdd\u967a\u8fd4\u623b\u7387", min: 0, max: 200, unit: "%", integer: false },
  childAge: { label: "\u5b50\u3069\u3082\u306e\u5e74\u9f62", min: 0, max: 30, unit: "\u6b73", integer: true },
  universityStartAge: { label: "\u5927\u5b66\u9032\u5b66\u4e88\u5b9a\u5e74\u9f62", min: 1, max: 40, unit: "\u6b73", integer: true },
  dividendInitial: { label: "\u521d\u671f\u6295\u8cc7\u984d", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  dividendMonthly: { label: "\u6bce\u6708\u8ffd\u52a0\u6295\u8cc7\u984d", min: 0, max: 100000000, unit: "\u5186", integer: false },
  dividendYield: { label: "\u60f3\u5b9a\u914d\u5f53\u5229\u56de\u308a", min: 0, max: 30, unit: "%", integer: false },
  dividendYears: { label: "\u904b\u7528\u5e74\u6570", min: 1, max: 100, unit: "\u5e74", integer: true },
  dividendEtfInitial: { label: "初期投資額", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  dividendEtfMonthly: { label: "毎月積立額", min: 0, max: 100000000, unit: "\u5186", integer: false },
  dividendEtfYield: { label: "想定配当利回り", min: 0, max: 30, unit: "%", integer: false },
  dividendEtfGrowth: { label: "想定株価成長率", min: -30, max: 30, unit: "%", integer: false },
  dividendEtfYears: { label: "運用年数", min: 1, max: 100, unit: "\u5e74", integer: true },
  dividendLifeMonthlyCost: { label: "毎月生活費", min: 0, max: 100000000, unit: "\u5186", integer: false },
  dividendLifeAssets: { label: "現在資産", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  dividendLifeMonthly: { label: "毎月積立額", min: 0, max: 100000000, unit: "\u5186", integer: false },
  dividendLifeYield: { label: "想定配当利回り", min: 0.1, max: 30, unit: "%", integer: false },
  dividendLifeReturn: { label: "想定年利", min: 0, max: 30, unit: "%", integer: false },
  dividendLifeYears: { label: "運用年数", min: 1, max: 100, unit: "\u5e74", integer: true },
  dividendReinvestmentInitial: { label: "\u521d\u671f\u6295\u8cc7\u984d", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  dividendReinvestmentMonthly: { label: "\u6bce\u6708\u8ffd\u52a0\u6295\u8cc7\u984d", min: 0, max: 100000000, unit: "\u5186", integer: false },
  dividendReinvestmentYield: { label: "\u60f3\u5b9a\u914d\u5f53\u5229\u56de\u308a", min: 0, max: 30, unit: "%", integer: false },
  dividendReinvestmentGrowth: { label: "\u60f3\u5b9a\u682a\u4fa1\u6210\u9577\u7387", min: -30, max: 30, unit: "%", integer: false },
  dividendReinvestmentYears: { label: "\u904b\u7528\u5e74\u6570", min: 1, max: 100, unit: "\u5e74", integer: true },
  employeeFireAge: { label: "\u73fe\u5728\u5e74\u9f62", min: 0, max: 100, unit: "\u6b73", integer: true },
  employeeFireAssets: { label: "\u73fe\u5728\u8cc7\u7523", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  employeeFireMonthly: { label: "\u6bce\u6708\u7a4d\u7acb\u984d", min: 0, max: 100000000, unit: "\u5186", integer: false },
  employeeFireSideIncome: { label: "\u526f\u696d\u6708\u53ce", min: 0, max: 100000000, unit: "\u5186", integer: false },
  employeeFireLivingCost: { label: "\u5e74\u9593\u751f\u6d3b\u8cbb", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  employeeFireReturn: { label: "\u60f3\u5b9a\u5e74\u5229", min: 0, max: 30, unit: "%", integer: false },
  employeeFireDividendIncome: { label: "\u914d\u5f53\u53ce\u5165", min: 0, max: 100000000, unit: "\u5186", integer: false },
  employeeFireTarget: { label: "\u76ee\u6a19FIRE\u8cc7\u7523", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  cashFlowSalary: { label: "給与収入", min: 0, max: 100000000, unit: "\u5186", integer: false },
  cashFlowSideIncome: { label: "副業収入", min: 0, max: 100000000, unit: "\u5186", integer: false },
  cashFlowRent: { label: "家賃", min: 0, max: 100000000, unit: "\u5186", integer: false },
  cashFlowFood: { label: "食費", min: 0, max: 100000000, unit: "\u5186", integer: false },
  cashFlowCommunication: { label: "通信費", min: 0, max: 100000000, unit: "\u5186", integer: false },
  cashFlowInsurance: { label: "保険料", min: 0, max: 100000000, unit: "\u5186", integer: false },
  cashFlowInvestment: { label: "投資額", min: 0, max: 100000000, unit: "\u5186", integer: false },
  cashFlowLoan: { label: "ローン返済額", min: 0, max: 100000000, unit: "\u5186", integer: false },
  cashFlowOther: { label: "その他支出", min: 0, max: 100000000, unit: "\u5186", integer: false },
  emergencyMonthlyCost: { label: "\u6bce\u6708\u751f\u6d3b\u8cbb", min: 0, max: 100000000, unit: "\u5186", integer: false },
  familyCount: { label: "\u5bb6\u65cf\u4eba\u6570", min: 1, max: 20, unit: "\u4eba", integer: true },
  emergencySavings: { label: "\u73fe\u5728\u8caf\u84c4\u984d", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  unemploymentMonths: { label: "\u5931\u696d\u6642\u60f3\u5b9a\u671f\u9593", min: 1, max: 60, unit: "\u304b\u6708", integer: true },
  rentCost: { label: "家賃", min: 0, max: 100000000, unit: "\u5186", integer: false },
  communicationCost: { label: "通信費", min: 0, max: 100000000, unit: "\u5186", integer: false },
  insuranceCost: { label: "保険料", min: 0, max: 100000000, unit: "\u5186", integer: false },
  subscriptionCost: { label: "サブスク費用", min: 0, max: 100000000, unit: "\u5186", integer: false },
  foodCost: { label: "食費", min: 0, max: 100000000, unit: "\u5186", integer: false },
  creditCardAnnualFee: { label: "クレカ年会費", min: 0, max: 10000000, unit: "\u5186", integer: false },
  otherFixedCost: { label: "その他固定費", min: 0, max: 100000000, unit: "\u5186", integer: false },
  sideFireCurrentAge: { label: "\u73fe\u5728\u306e\u5e74\u9f62", min: 0, max: 100, unit: "\u6b73", integer: true },
  sideFireTargetAge: { label: "FIRE\u76ee\u6a19\u5e74\u9f62", min: 1, max: 100, unit: "\u6b73", integer: true },
  sideFireAssets: { label: "\u73fe\u5728\u8cc7\u7523", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  sideFireMonthly: { label: "\u6bce\u6708\u7a4d\u7acb\u984d", min: 0, max: 100000000, unit: "\u5186", integer: false },
  sideFireReturn: { label: "\u60f3\u5b9a\u5e74\u5229", min: 0, max: 30, unit: "%", integer: false },
  sideFireLivingCost: { label: "\u6bce\u6708\u751f\u6d3b\u8cbb", min: 0, max: 100000000, unit: "\u5186", integer: false },
  sideFireSideIncome: { label: "\u526f\u696d\u6708\u53ce", min: 0, max: 100000000, unit: "\u5186", integer: false },
  sideFireDividendIncome: { label: "\u914d\u5f53\u53ce\u5165", min: 0, max: 100000000, unit: "\u5186", integer: false },
  mortgageBorrowing: { label: "\u501f\u5165\u91d1\u984d", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  downPayment: { label: "\u982d\u91d1", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  mortgageRate: { label: "\u91d1\u5229", min: 0, max: 20, unit: "%", integer: false },
  mortgageYears: { label: "\u8fd4\u6e08\u5e74\u6570", min: 1, max: 50, unit: "\u5e74", integer: true },
  prepaymentAmount: { label: "\u7e70\u4e0a\u8fd4\u6e08\u984d", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  mortgageAnnualIncome: { label: "\u5e74\u53ce", min: 0, max: 1000000000, unit: "\u5186", integer: false },
};

function formatLimit(value, unit) {
  return `${value.toLocaleString("ja-JP")}${unit}`;
}

function getFieldValue(name) {
  const input = document.querySelector(`#${name}`);
  const rule = fieldRules[name];
  const rawValue = input.value.trim();
  const error = document.querySelector(`#${name}Error`);
  let message = "";
  let value = 0;

  if (rawValue === "") {
    message = `${rule.label}\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002`;
  } else if (!/^-?\d+(\.\d+)?$/.test(rawValue)) {
    message = `${rule.label}\u306f\u534a\u89d2\u6570\u5b57\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002`;
  } else {
    value = Number(rawValue);
    if (!Number.isFinite(value)) {
      message = `${rule.label}\u306f\u6570\u5024\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002`;
    } else if (value < rule.min) {
      message = `${rule.label}\u306f\u30de\u30a4\u30ca\u30b9\u306b\u3067\u304d\u307e\u305b\u3093\u3002`;
    } else if (value > rule.max) {
      message = `${rule.label}\u306f${formatLimit(rule.max, rule.unit)}\u4ee5\u4e0b\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002`;
    } else if (rule.integer && !Number.isInteger(value)) {
      message = `${rule.label}\u306f\u6574\u6570\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002`;
    }
  }

  input.setAttribute("aria-invalid", message ? "true" : "false");
  error.textContent = message;
  return { valid: message === "", value };
}

function setText(id, value) {
  document.querySelector(`#${id}`).textContent = value;
}

function renderSideIncome() {
  const values = {
    hourly: getFieldValue("hourly"),
    hours: getFieldValue("hours"),
    projects: getFieldValue("projects"),
    tax: getFieldValue("tax"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#incomeNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("monthly", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("yearly", yen.format(0));
    setText("netMonthly", yen.format(0));
    setText("netYearly", yen.format(0));
    return;
  }

  const monthly = values.hourly.value * values.hours.value * values.projects.value;
  const yearly = monthly * 12;
  const netMonthly = monthly * (1 - values.tax.value / 100);
  const netYearly = netMonthly * 12;

  setText("monthly", yen.format(monthly));
  setText("yearly", yen.format(yearly));
  setText("netMonthly", yen.format(netMonthly));
  setText("netYearly", yen.format(netYearly));
}

function renderAiHourly() {
  const values = {
    projectPrice: getFieldValue("projectPrice"),
    projectHours: getFieldValue("projectHours"),
    monthlyAiProjects: getFieldValue("monthlyAiProjects"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#aiHourlyNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("aiHourlyRate", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("aiMonthlyIncome", yen.format(0));
    setText("aiEfficiency", "0%");
    setText("aiAdjustedHours", "0\u6642\u9593");
    document.querySelector("#aiEfficiencyDetail").textContent = "AI\u5229\u7528\u6642\u306e\u4f5c\u696d\u6642\u9593\u77ed\u7e2e\u76ee\u5b89";
    return;
  }

  const aiEnabled = document.querySelector("#aiEnabled").checked;
  const improvementRate = aiEnabled ? 0.3 : 0;
  const projectPrice = values.projectPrice.value;
  const projectHours = values.projectHours.value;
  const monthlyProjects = values.monthlyAiProjects.value;
  const adjustedProjectHours = projectHours * (1 - improvementRate);
  const monthlyIncome = projectPrice * monthlyProjects;
  const monthlyHours = adjustedProjectHours * monthlyProjects;
  const hourlyRate = monthlyHours > 0 ? monthlyIncome / monthlyHours : 0;
  const savedHours = projectHours * monthlyProjects - monthlyHours;

  setText("aiHourlyRate", yen.format(hourlyRate));
  setText("aiMonthlyIncome", yen.format(monthlyIncome));
  setText("aiEfficiency", `${Math.round(improvementRate * 100)}%`);
  setText("aiAdjustedHours", `${monthlyHours.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}\u6642\u9593`);
  document.querySelector("#aiEfficiencyDetail").textContent = aiEnabled
    ? `\u6708\u9593\u3067\u7d04${savedHours.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}\u6642\u9593\u3092\u77ed\u7e2e`
    : "AI\u3092\u4f7f\u308f\u306a\u3044\u901a\u5e38\u4f5c\u696d\u306e\u8a66\u7b97";
}

function renderHourlyImprovement() {
  const values = {
    improvementSales: getFieldValue("improvementSales"),
    improvementHours: getFieldValue("improvementHours"),
    improvementExpenses: getFieldValue("improvementExpenses"),
    improvementOutsourcing: getFieldValue("improvementOutsourcing"),
    improvementAiReduction: getFieldValue("improvementAiReduction"),
    targetHourlyRate: getFieldValue("targetHourlyRate"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#hourlyImprovementNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("currentEffectiveHourly", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("improvementProfitMargin", "0%");
    setText("aiImprovedHourly", yen.format(0));
    setText("improvableHours", "0\u6642\u9593");
    setText("hourlyImprovementPoint", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("profitMarginGuide", "\u5165\u529b\u30a8\u30e9\u30fc");
    return;
  }

  const sales = values.improvementSales.value;
  const hours = values.improvementHours.value;
  const expenses = values.improvementExpenses.value;
  const outsourcing = values.improvementOutsourcing.value;
  const targetHourly = values.targetHourlyRate.value;
  const aiUse = document.querySelector("#improvementAiUse").checked;
  const aiReductionRate = aiUse ? values.improvementAiReduction.value / 100 : 0;
  const profit = sales - expenses - outsourcing;
  const profitMargin = sales > 0 ? (profit / sales) * 100 : 0;
  const currentHourly = hours > 0 ? profit / hours : 0;
  const improvedHours = Math.max(hours * (1 - aiReductionRate), 0.1);
  const savedHours = Math.max(hours - improvedHours, 0);
  const aiHourly = improvedHours > 0 ? profit / improvedHours : 0;
  const targetGap = Math.max(targetHourly - aiHourly, 0);
  const neededProfitForTarget = targetHourly * improvedHours;
  const additionalProfit = Math.max(neededProfitForTarget - profit, 0);
  const targetHours = targetHourly > 0 && profit > 0 ? profit / targetHourly : null;
  const extraTimeReduction = targetHours !== null ? Math.max(improvedHours - targetHours, 0) : 0;
  const improvementPoint = profit <= 0
    ? "まず経費と外注費を見直し、利益を黒字化するのが優先です"
    : targetGap <= 0
      ? "目標時給を達成しています。単価アップか作業時間の上限管理で維持しましょう"
      : additionalProfit <= sales * 0.15
        ? `${yen.format(additionalProfit)}の単価アップまたは追加利益で目標時給に近づきます`
        : `${extraTimeReduction.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}時間の追加短縮、または高単価案件への切り替えが有効です`;
  const profitGuide = profitMargin < 30
    ? "利益率が低めです。副業利益率シミュレーターで経費と外注費の内訳を確認しましょう"
    : "利益率は安定しています。次はAI活用と単価アップで時給改善を狙えます";

  setText("currentEffectiveHourly", yen.format(currentHourly));
  setText("improvementProfitMargin", `${profitMargin.toFixed(1)}%`);
  setText("aiImprovedHourly", yen.format(aiHourly));
  setText("improvableHours", `${savedHours.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}\u6642\u9593`);
  setText("hourlyImprovementPoint", improvementPoint);
  setText("profitMarginGuide", profitGuide);
}

function renderSideTimeManagement() {
  const values = {
    mainJobHours: getFieldValue("mainJobHours"),
    commuteHours: getFieldValue("commuteHours"),
    sleepHours: getFieldValue("sleepHours"),
    houseworkHours: getFieldValue("houseworkHours"),
    holidayFreeHours: getFieldValue("holidayFreeHours"),
    sideWorkHours: getFieldValue("sideWorkHours"),
    timeManagementAiReduction: getFieldValue("timeManagementAiReduction"),
  };
  let hasError = Object.values(values).some((item) => !item.valid);

  const fixedDailyHours = values.mainJobHours.valid && values.commuteHours.valid && values.sleepHours.valid && values.houseworkHours.valid
    ? values.mainJobHours.value + values.commuteHours.value + values.sleepHours.value + values.houseworkHours.value
    : 0;
  if (!hasError && fixedDailyHours > 24) {
    const error = document.querySelector("#mainJobHoursError");
    error.textContent = "本業・通勤・睡眠・家事の合計が24時間を超えています。";
    document.querySelector("#mainJobHours").setAttribute("aria-invalid", "true");
    hasError = true;
  }

  document.querySelector("#sideTimeManagementNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("dailyFreeTime", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("availableSideWorkTime", "0\u6642\u9593 / \u9031");
    setText("sideWorkSustainability", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("aiTimeImprovement", "0\u6642\u9593 / \u9031");
    setText("timeManagementImprovementPoint", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("timeManagementHourlyGuide", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("timeManagementFireImpact", "\u5165\u529b\u30a8\u30e9\u30fc");
    return;
  }

  const dailyFree = Math.max(24 - fixedDailyHours, 0);
  const weekdayAvailable = dailyFree * 5;
  const holidayAvailable = values.holidayFreeHours.value * 2;
  const weeklyAvailable = weekdayAvailable + holidayAvailable;
  const sideHours = values.sideWorkHours.value;
  const aiUse = document.querySelector("#timeManagementAiUse").checked;
  const aiReductionRate = aiUse ? values.timeManagementAiReduction.value / 100 : 0;
  const aiSavedHours = sideHours * aiReductionRate;
  const sideHoursAfterAi = Math.max(sideHours - aiSavedHours, 0);
  const remainingBeforeAi = weeklyAvailable - sideHours;
  const remainingAfterAi = weeklyAvailable - sideHoursAfterAi;
  const utilization = weeklyAvailable > 0 ? (sideHours / weeklyAvailable) * 100 : 0;
  const effectiveUtilization = weeklyAvailable > 0 ? (sideHoursAfterAi / weeklyAvailable) * 100 : 0;

  const sustainability = weeklyAvailable <= 0
    ? "副業に使える時間がほぼありません"
    : remainingBeforeAi < 0
      ? `週${Math.abs(remainingBeforeAi).toLocaleString("ja-JP", { maximumFractionDigits: 1 })}時間不足しています`
      : utilization >= 85
        ? "継続負荷が高めです。休息時間を削りすぎない調整が必要です"
        : utilization >= 65
          ? "継続は可能ですが、繁忙期に備えてAI時短や作業日を固定しましょう"
          : "継続しやすい時間配分です。余力を単価アップや学習に回せます";
  const improvementPoint = remainingBeforeAi < 0
    ? "副業時間を減らす、休日作業を分散する、AIで下書きや調査を短縮するのが優先です"
    : dailyFree < 2
      ? "平日の自由時間が少なめです。短時間タスク化し、休日に重い作業を寄せましょう"
      : effectiveUtilization >= 75
        ? "AI時短後も負荷が高めです。案件単価アップと作業範囲の見直しが有効です"
        : "時間の余力があります。副業時給改善シミュレーターで収益性も確認しましょう";
  const hourlyGuide = remainingAfterAi >= 3
    ? "AI導入後に週3時間以上の余力があります。副業時給改善シミュレーターで高単価化を確認しましょう"
    : "時間余力が少ないため、まず時給改善で同じ時間あたりの収益を上げましょう";
  const fireImpact = sideHoursAfterAi >= 10 && remainingAfterAi >= 2
    ? "週10時間以上を継続できるため、副業収入を投資へ回すFIRE加速に使いやすい状態です"
    : sideHoursAfterAi >= 5
      ? "週5時間以上は確保できています。小さく継続して積立原資を増やす設計が現実的です"
      : "副業時間が少なめです。FIREを急ぐより、生活リズムと本業の安定を優先しましょう";

  setText("dailyFreeTime", `${dailyFree.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}\u6642\u9593`);
  setText("availableSideWorkTime", `${weeklyAvailable.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}\u6642\u9593 / \u9031`);
  setText("sideWorkSustainability", sustainability);
  setText("aiTimeImprovement", `${aiSavedHours.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}\u6642\u9593 / \u9031`);
  setText("timeManagementImprovementPoint", improvementPoint);
  setText("timeManagementHourlyGuide", hourlyGuide);
  setText("timeManagementFireImpact", fireImpact);
}

function renderAiEfficiency() {
  const values = {
    aiEfficiencyHours: getFieldValue("aiEfficiencyHours"),
    aiEfficiencySales: getFieldValue("aiEfficiencySales"),
    aiEfficiencyReduction: getFieldValue("aiEfficiencyReduction"),
    aiToolMonthlyCost: getFieldValue("aiToolMonthlyCost"),
    outsourcingReduction: getFieldValue("outsourcingReduction"),
    aiEfficiencyTargetHourly: getFieldValue("aiEfficiencyTargetHourly"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#aiEfficiencyNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("aiEfficiencyHourly", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("aiEfficiencySavedHours", "0\u6642\u9593");
    setText("aiEfficiencyProfitImprovement", "0%");
    setText("aiEfficiencyAnnualProfit", yen.format(0));
    setText("aiEfficiencyRecommendation", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("aiEfficiencyGuide", "\u5165\u529b\u30a8\u30e9\u30fc");
    return;
  }

  const hours = values.aiEfficiencyHours.value;
  const sales = values.aiEfficiencySales.value;
  const aiUse = document.querySelector("#aiEfficiencyUse").checked;
  const reductionRate = aiUse ? values.aiEfficiencyReduction.value / 100 : 0;
  const aiCost = aiUse ? values.aiToolMonthlyCost.value : 0;
  const outsourcingReduction = aiUse ? values.outsourcingReduction.value : 0;
  const targetHourly = values.aiEfficiencyTargetHourly.value;
  const savedHours = hours * reductionRate;
  const afterHours = Math.max(hours - savedHours, 0.1);
  const currentProfit = sales;
  const afterProfit = sales + outsourcingReduction - aiCost;
  const currentHourly = hours > 0 ? currentProfit / hours : 0;
  const afterHourly = afterHours > 0 ? afterProfit / afterHours : 0;
  const currentMargin = sales > 0 ? (currentProfit / sales) * 100 : 0;
  const afterMargin = sales > 0 ? (afterProfit / sales) * 100 : 0;
  const marginImprovement = afterMargin - currentMargin;
  const annualAdditionalProfit = (afterProfit - currentProfit) * 12;
  const targetGap = Math.max(targetHourly - afterHourly, 0);
  const recommendation = !aiUse
    ? "AI未導入の場合の現状目安です。定型作業から小さく試すと効果を測りやすいです"
    : afterProfit <= 0
      ? "AI費用が重くなっています。まず月額費用の低いツールか無料枠で検証しましょう"
      : targetGap <= 0
        ? "目標時給を達成しています。文章作成、調査、テンプレ化を標準化して効果を維持しましょう"
        : savedHours >= hours * 0.3
          ? "時間削減は進んでいます。次は単価アップや外注費削減の対象を広げると時給改善しやすいです"
          : "調査、下書き、要約、画像作成など定型作業をAIに寄せると削減時間を増やしやすいです";
  const guide = afterHourly >= targetHourly
    ? "副業時給改善シミュレーターで経費と外注費を含めた維持ラインを確認しましょう"
    : "副業時給改善シミュレーターで目標時給に必要な単価アップや追加短縮時間を確認しましょう";

  setText("aiEfficiencyHourly", yen.format(afterHourly));
  setText("aiEfficiencySavedHours", `${savedHours.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}\u6642\u9593 / \u6708`);
  setText("aiEfficiencyProfitImprovement", `${marginImprovement.toFixed(1)}pt`);
  setText("aiEfficiencyAnnualProfit", yen.format(annualAdditionalProfit));
  setText("aiEfficiencyRecommendation", recommendation);
  setText("aiEfficiencyGuide", guide);
  document.querySelector("#aiEfficiencyHourly").setAttribute("data-current-hourly", yen.format(currentHourly));
}

function renderSideProfitMargin() {
  const values = {
    profitSales: getFieldValue("profitSales"),
    profitExpenses: getFieldValue("profitExpenses"),
    profitHours: getFieldValue("profitHours"),
    profitAdCost: getFieldValue("profitAdCost"),
    profitOutsourcingCost: getFieldValue("profitOutsourcingCost"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#profitMarginNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("profitAmount", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("profitMarginRate", "0%");
    setText("profitHourlyRate", yen.format(0));
    setText("profitAiEffect", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("profitImprovementPoint", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("profitTaxGuide", "\u5165\u529b\u30a8\u30e9\u30fc");
    return;
  }

  const sales = values.profitSales.value;
  const expenses = values.profitExpenses.value;
  const hours = values.profitHours.value;
  const adCost = values.profitAdCost.value;
  const outsourcingCost = values.profitOutsourcingCost.value;
  const aiUse = document.querySelector("#profitAiUse").checked;
  const totalCost = expenses + adCost + outsourcingCost;
  const profit = sales - totalCost;
  const profitMargin = sales > 0 ? (profit / sales) * 100 : 0;
  const hourlyRate = hours > 0 ? profit / hours : 0;
  const aiReducedHours = aiUse ? hours * 0.75 : hours;
  const aiHourlyRate = aiReducedHours > 0 ? profit / aiReducedHours : 0;
  const aiImprovement = Math.max(aiHourlyRate - hourlyRate, 0);
  const adRatio = sales > 0 ? (adCost / sales) * 100 : 0;
  const outsourcingRatio = sales > 0 ? (outsourcingCost / sales) * 100 : 0;
  let improvement = "\u5229\u76ca\u7387\u3068\u6642\u7d66\u52b9\u7387\u306f\u826f\u597d\u3067\u3059\u3002\u5358\u4fa1\u30a2\u30c3\u30d7\u3068\u7d99\u7d9a\u6848\u4ef6\u5316\u3092\u691c\u8a0e\u3057\u307e\u3057\u3087\u3046";

  if (profit < 0) {
    improvement = "\u8d64\u5b57\u3067\u3059\u3002\u5e83\u544a\u8cbb\u30fb\u5916\u6ce8\u8cbb\u30fb\u56fa\u5b9a\u8cbb\u3092\u5148\u306b\u898b\u76f4\u3057\u307e\u3057\u3087\u3046";
  } else if (profitMargin < 20) {
    improvement = "\u5229\u76ca\u7387\u304c\u4f4e\u3081\u3067\u3059\u3002\u5024\u4e0a\u3052\u3001\u7d4c\u8cbb\u524a\u6e1b\u3001\u5de5\u6570\u524a\u6e1b\u306e\u512a\u5148\u9806\u3092\u6c7a\u3081\u307e\u3057\u3087\u3046";
  } else if (adRatio > 25) {
    improvement = "\u5e83\u544a\u8cbb\u306e\u6bd4\u7387\u304c\u9ad8\u3081\u3067\u3059\u3002\u8cbb\u7528\u5bfe\u52b9\u679c\u3068\u81ea\u7136\u6d41\u5165\u306e\u5f37\u5316\u3092\u78ba\u8a8d\u3057\u307e\u3057\u3087\u3046";
  } else if (outsourcingRatio > 25) {
    improvement = "\u5916\u6ce8\u8cbb\u306e\u6bd4\u7387\u304c\u9ad8\u3081\u3067\u3059\u3002\u5916\u6ce8\u7bc4\u56f2\u3068\u5185\u88fd\u5316\u306e\u30d0\u30e9\u30f3\u30b9\u3092\u898b\u76f4\u3057\u307e\u3057\u3087\u3046";
  } else if (hourlyRate < 2000) {
    improvement = "\u6642\u7d66\u52b9\u7387\u304c\u4f4e\u3081\u3067\u3059\u3002AI\u6d3b\u7528\u3001\u30c6\u30f3\u30d7\u30ec\u5316\u3001\u9ad8\u5358\u4fa1\u30e1\u30cb\u30e5\u30fc\u5316\u304c\u6539\u5584\u5019\u88dc\u3067\u3059";
  }

  const aiText = aiUse
    ? `${yen.format(aiImprovement)} / \u6642\u9593\u306e\u6539\u5584\u76ee\u5b89`
    : "\u672a\u5229\u7528\u3002AI\u5c0e\u5165\u3067\u4f5c\u696d\u6642\u9593\u77ed\u7e2e\u3092\u691c\u8a0e";
  const taxGuide = profit > 0
    ? `${yen.format(profit)}\u306e\u5229\u76ca\u3092\u7a0e\u91d1\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u3067\u78ba\u8a8d`
    : "\u5229\u76ca\u304c\u51fa\u305f\u3089\u7a0e\u91d1\u3068\u624b\u53d6\u308a\u3092\u78ba\u8a8d";

  setText("profitAmount", yen.format(profit));
  setText("profitMarginRate", `${profitMargin.toFixed(1)}%`);
  setText("profitHourlyRate", yen.format(hourlyRate));
  setText("profitAiEffect", aiText);
  setText("profitImprovementPoint", improvement);
  setText("profitTaxGuide", taxGuide);
}

function renderTax() {
  const values = {
    annualSideIncome: getFieldValue("annualSideIncome"),
    expenses: getFieldValue("expenses"),
    incomeTaxRate: getFieldValue("incomeTaxRate"),
    residentTaxRate: getFieldValue("residentTaxRate"),
    blueDeduction: getFieldValue("blueDeduction"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#taxNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("takeHome", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("taxableIncome", yen.format(0));
    setText("incomeTaxAmount", yen.format(0));
    setText("residentTaxAmount", yen.format(0));
    setText("takeHomeDetail", yen.format(0));
    return;
  }

  const annualSideIncome = values.annualSideIncome.value;
  const expenses = values.expenses.value;
  const taxableIncome = Math.max(annualSideIncome - expenses - values.blueDeduction.value, 0);
  const incomeTax = taxableIncome * (values.incomeTaxRate.value / 100);
  const residentTax = taxableIncome * (values.residentTaxRate.value / 100);
  const takeHome = annualSideIncome - expenses - incomeTax - residentTax;

  setText("takeHome", yen.format(takeHome));
  setText("taxableIncome", yen.format(taxableIncome));
  setText("incomeTaxAmount", yen.format(incomeTax));
  setText("residentTaxAmount", yen.format(residentTax));
  setText("takeHomeDetail", yen.format(takeHome));
}

function renderResidentTax() {
  const values = {
    residentTaxSales: getFieldValue("residentTaxSales"),
    residentTaxExpenses: getFieldValue("residentTaxExpenses"),
    residentTaxBlueDeduction: getFieldValue("residentTaxBlueDeduction"),
    residentTaxBasicDeduction: getFieldValue("residentTaxBasicDeduction"),
    residentTaxRateInput: getFieldValue("residentTaxRateInput"),
    residentTaxPerCapita: getFieldValue("residentTaxPerCapita"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#residentTaxNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("residentTaxAnnualTotal", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("residentTaxIncome", yen.format(0));
    setText("residentTaxTaxableIncome", yen.format(0));
    setText("residentTaxIncomeBased", yen.format(0));
    setText("residentTaxPerCapitaResult", yen.format(0));
    setText("residentTaxMonthly", yen.format(0));
    setText("residentTaxCollectionNote", "\u672a\u8a08\u7b97");
    return;
  }

  const income = Math.max(
    values.residentTaxSales.value - values.residentTaxExpenses.value - values.residentTaxBlueDeduction.value,
    0,
  );
  const taxableIncome = Math.max(income - values.residentTaxBasicDeduction.value, 0);
  const incomeBasedTax = taxableIncome * (values.residentTaxRateInput.value / 100);
  const perCapitaTax = income > 0 ? values.residentTaxPerCapita.value : 0;
  const annualTotal = incomeBasedTax + perCapitaTax;
  const monthlyTax = annualTotal / 12;
  const collectionNote = annualTotal > 0
    ? "\u7533\u544a\u6642\u306b\u300c\u81ea\u5206\u3067\u7d0d\u4ed8\u300d\u3092\u9078\u3073\u3001\u81ea\u6cbb\u4f53\u306b\u53cd\u6620\u3092\u78ba\u8a8d"
    : "\u8ab2\u7a0e\u6240\u5f97\u306f0\u5186\u76ee\u5b89\u3002\u7533\u544a\u8981\u5426\u306f\u81ea\u6cbb\u4f53\u306b\u78ba\u8a8d";

  setText("residentTaxAnnualTotal", yen.format(annualTotal));
  setText("residentTaxIncome", yen.format(income));
  setText("residentTaxTaxableIncome", yen.format(taxableIncome));
  setText("residentTaxIncomeBased", yen.format(incomeBasedTax));
  setText("residentTaxPerCapitaResult", yen.format(perCapitaTax));
  setText("residentTaxMonthly", yen.format(monthlyTax));
  setText("residentTaxCollectionNote", collectionNote);
}

function renderIncomeTax() {
  const values = {
    incomeTaxSales: getFieldValue("incomeTaxSales"),
    incomeTaxExpenses: getFieldValue("incomeTaxExpenses"),
    incomeTaxBlueDeduction: getFieldValue("incomeTaxBlueDeduction"),
    incomeTaxBasicDeduction: getFieldValue("incomeTaxBasicDeduction"),
    incomeTaxOtherDeduction: getFieldValue("incomeTaxOtherDeduction"),
    incomeTaxRateInput: getFieldValue("incomeTaxRateInput"),
    reconstructionTaxRate: getFieldValue("reconstructionTaxRate"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#incomeTaxNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("incomeTaxTotal", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("incomeTaxSideIncome", yen.format(0));
    setText("incomeTaxTaxableIncome", yen.format(0));
    setText("incomeTaxAmountResult", yen.format(0));
    setText("reconstructionTaxAmount", yen.format(0));
    setText("incomeTaxMonthly", yen.format(0));
    setText("incomeTaxResidentGuide", "\u672a\u8a08\u7b97");
    setText("incomeTaxTakeHomeGuide", "\u672a\u8a08\u7b97");
    return;
  }

  const sideIncome = Math.max(
    values.incomeTaxSales.value - values.incomeTaxExpenses.value - values.incomeTaxBlueDeduction.value,
    0,
  );
  const taxableIncome = Math.max(
    sideIncome - values.incomeTaxBasicDeduction.value - values.incomeTaxOtherDeduction.value,
    0,
  );
  const incomeTax = taxableIncome * (values.incomeTaxRateInput.value / 100);
  const reconstructionTax = incomeTax * (values.reconstructionTaxRate.value / 100);
  const totalIncomeTax = incomeTax + reconstructionTax;
  const monthlyTax = totalIncomeTax / 12;
  const residentGuide = taxableIncome > 0
    ? "\u4f4f\u6c11\u7a0e\u3082\u8ab2\u7a0e\u6240\u5f97\u306b\u5fdc\u3058\u3066\u5225\u9014\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u3042\u308a"
    : "\u8ab2\u7a0e\u6240\u5f97\u306f0\u5186\u76ee\u5b89\u3002\u4f4f\u6c11\u7a0e\u7533\u544a\u306f\u81ea\u6cbb\u4f53\u306b\u78ba\u8a8d";
  const takeHomeGuide = totalIncomeTax > 0
    ? "\u624b\u53d6\u308a\u306f\u6240\u5f97\u7a0e\u306b\u52a0\u3048\u3066\u4f4f\u6c11\u7a0e\u3082\u542b\u3081\u3066\u78ba\u8a8d"
    : "\u6240\u5f97\u7a0e\u306f0\u5186\u76ee\u5b89\u3002\u624b\u53d6\u308a\u306f\u7d4c\u8cbb\u3068\u4ed6\u7a0e\u76ee\u3082\u78ba\u8a8d";

  setText("incomeTaxTotal", yen.format(totalIncomeTax));
  setText("incomeTaxSideIncome", yen.format(sideIncome));
  setText("incomeTaxTaxableIncome", yen.format(taxableIncome));
  setText("incomeTaxAmountResult", yen.format(incomeTax));
  setText("reconstructionTaxAmount", yen.format(reconstructionTax));
  setText("incomeTaxMonthly", yen.format(monthlyTax));
  setText("incomeTaxResidentGuide", residentGuide);
  setText("incomeTaxTakeHomeGuide", takeHomeGuide);
}

function renderTakeHome() {
  const values = {
    takeHomeSales: getFieldValue("takeHomeSales"),
    takeHomeExpenses: getFieldValue("takeHomeExpenses"),
    takeHomeIncomeTaxRate: getFieldValue("takeHomeIncomeTaxRate"),
    takeHomeResidentTaxRate: getFieldValue("takeHomeResidentTaxRate"),
    takeHomeBlueDeduction: getFieldValue("takeHomeBlueDeduction"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#takeHomeNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("finalTakeHome", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("takeHomeIncomeAmount", yen.format(0));
    setText("takeHomeTaxableIncome", yen.format(0));
    setText("takeHomeIncomeTax", yen.format(0));
    setText("takeHomeResidentTax", yen.format(0));
    setText("takeHomeTotalTax", yen.format(0));
    setText("monthlyFinalTakeHome", yen.format(0));
    document.querySelector("#socialInsuranceDetail").textContent = "\u793e\u4f1a\u4fdd\u967a\u6599\u306f\u672a\u53cd\u6620";
    return;
  }

  const sales = values.takeHomeSales.value;
  const expenses = values.takeHomeExpenses.value;
  const incomeAmount = Math.max(sales - expenses, 0);
  const taxableIncome = Math.max(incomeAmount - values.takeHomeBlueDeduction.value, 0);
  const incomeTax = taxableIncome * (values.takeHomeIncomeTaxRate.value / 100);
  const residentTax = taxableIncome * (values.takeHomeResidentTaxRate.value / 100);
  const totalTax = incomeTax + residentTax;
  const hasSocialInsurance = document.querySelector("#hasSocialInsurance").checked;
  const socialInsurance = hasSocialInsurance ? incomeAmount * 0.15 : 0;
  const finalTakeHome = sales - expenses - totalTax - socialInsurance;
  const monthlyFinalTakeHome = finalTakeHome / 12;

  setText("finalTakeHome", yen.format(finalTakeHome));
  setText("takeHomeIncomeAmount", yen.format(incomeAmount));
  setText("takeHomeTaxableIncome", yen.format(taxableIncome));
  setText("takeHomeIncomeTax", yen.format(incomeTax));
  setText("takeHomeResidentTax", yen.format(residentTax));
  setText("takeHomeTotalTax", yen.format(totalTax));
  setText("monthlyFinalTakeHome", yen.format(monthlyFinalTakeHome));
  document.querySelector("#socialInsuranceDetail").textContent = hasSocialInsurance
    ? `\u793e\u4f1a\u4fdd\u967a\u6599\u306e\u6982\u7b97 ${yen.format(socialInsurance)} \u3092\u63a7\u9664`
    : "\u793e\u4f1a\u4fdd\u967a\u6599\u306f\u672a\u53cd\u6620";
}

function renderNisa() {
  const values = {
    nisaInitial: getFieldValue("nisaInitial"),
    nisaMonthly: getFieldValue("nisaMonthly"),
    nisaAnnualReturn: getFieldValue("nisaAnnualReturn"),
    nisaYears: getFieldValue("nisaYears"),
    nisaTarget: getFieldValue("nisaTarget"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#nisaNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("nisaFutureAssets", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("nisaPrincipal", yen.format(0));
    setText("nisaProfit", yen.format(0));
    setText("nisaAchievementYears", "\u672a\u8a08\u7b97");
    setText("nisaFireGuide", "\u672a\u8a08\u7b97");
    document.querySelector("#nisaFireDetail").textContent = "FIRE\u9054\u6210\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u3068\u4f75\u7528\u3057\u3066\u78ba\u8a8d";
    return;
  }

  const initial = values.nisaInitial.value;
  const monthly = values.nisaMonthly.value;
  const annualReturn = values.nisaAnnualReturn.value;
  const months = Math.round(values.nisaYears.value * 12);
  const target = values.nisaTarget.value;
  const futureAssets = calculateFutureAssets(initial, monthly, annualReturn, months);
  const principal = initial + monthly * months;
  const profit = futureAssets - principal;
  const achievementMonths = findAchievementMonths(initial, monthly, annualReturn, target);
  const achievementRatio = target > 0 ? Math.min(futureAssets / target, 9.99) : 1;

  setText("nisaFutureAssets", yen.format(futureAssets));
  setText("nisaPrincipal", yen.format(principal));
  setText("nisaProfit", yen.format(profit));
  setText("nisaAchievementYears", formatYears(achievementMonths));
  setText("nisaFireGuide", `${Math.round(achievementRatio * 100).toLocaleString("ja-JP")}%`);
  document.querySelector("#nisaFireDetail").textContent = futureAssets >= target
    ? "\u5165\u529b\u3057\u305f\u904b\u7528\u5e74\u6570\u5185\u306b\u76ee\u6a19\u5230\u9054\u306e\u76ee\u5b89"
    : `\u76ee\u6a19\u307e\u3067\u3042\u3068${yen.format(Math.max(target - futureAssets, 0))}`;
}

function simulateWithdrawalMonths(assets, monthlyInvestment, monthlyWithdrawal, annualReturn, continueInvestment, maxMonths = 1200) {
  if (monthlyWithdrawal <= 0) {
    return { months: null, finalAssets: assets };
  }

  const monthlyReturn = continueInvestment ? annualReturn / 100 / 12 : 0;
  let balance = assets;

  for (let month = 1; month <= maxMonths; month += 1) {
    if (monthlyReturn > 0) {
      balance *= 1 + monthlyReturn;
    }
    balance += monthlyInvestment;
    balance -= monthlyWithdrawal;
    if (balance <= 0) {
      return { months: month, finalAssets: 0 };
    }
  }

  return { months: null, finalAssets: balance };
}

function calculatePossibleWithdrawal(assets, monthlyInvestment, annualReturn, years, continueInvestment) {
  const months = years * 12;
  if (months <= 0) {
    return 0;
  }

  const monthlyReturn = continueInvestment ? annualReturn / 100 / 12 : 0;
  if (monthlyReturn === 0) {
    return assets / months + monthlyInvestment;
  }

  return assets * monthlyReturn / (1 - (1 + monthlyReturn) ** -months) + monthlyInvestment;
}

function renderNisaWithdrawal() {
  const values = {
    nisaWithdrawalAssets: getFieldValue("nisaWithdrawalAssets"),
    nisaWithdrawalMonthlyInvestment: getFieldValue("nisaWithdrawalMonthlyInvestment"),
    nisaWithdrawalReturn: getFieldValue("nisaWithdrawalReturn"),
    withdrawalStartAge: getFieldValue("withdrawalStartAge"),
    monthlyWithdrawal: getFieldValue("monthlyWithdrawal"),
    targetMaintainYears: getFieldValue("targetMaintainYears"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#nisaWithdrawalNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("withdrawalAvailableYears", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("possibleMonthlyWithdrawal", yen.format(0));
    setText("depletionAge", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("withdrawalBalanceTrend", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("withdrawalRetirementImpact", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("withdrawalFireComparison", "\u5165\u529b\u30a8\u30e9\u30fc");
    return;
  }

  const assets = values.nisaWithdrawalAssets.value;
  const monthlyInvestment = values.nisaWithdrawalMonthlyInvestment.value;
  const annualReturn = values.nisaWithdrawalReturn.value;
  const startAge = values.withdrawalStartAge.value;
  const monthlyWithdrawal = values.monthlyWithdrawal.value;
  const targetYears = values.targetMaintainYears.value;
  const continueInvestment = document.querySelector("#continueInvestment").checked;
  const preparedAssets = assets;
  const simulation = simulateWithdrawalMonths(preparedAssets, monthlyInvestment, monthlyWithdrawal, annualReturn, continueInvestment);
  const possibleMonthly = calculatePossibleWithdrawal(preparedAssets, monthlyInvestment, annualReturn, targetYears, continueInvestment);
  const targetSimulation = simulateWithdrawalMonths(
    preparedAssets,
    monthlyInvestment,
    monthlyWithdrawal,
    annualReturn,
    continueInvestment,
    targetYears * 12,
  );
  const availableYears = simulation.months === null ? "100年以上" : formatYears(simulation.months);
  const depletionAge = simulation.months === null
    ? "100歳以降も残る目安"
    : `${startAge + Math.ceil(simulation.months / 12)}歳`;
  const trend = targetSimulation.finalAssets > 0
    ? `${targetYears}年後も${yen.format(targetSimulation.finalAssets)}残る目安`
    : `${targetYears}年以内に資産が尽きる可能性`;
  const retirementCoverage = monthlyWithdrawal > 0
    ? `毎月${yen.format(monthlyWithdrawal)}を老後生活費の一部として使える目安`
    : "取り崩し額を入力すると老後資金への影響を確認できます";
  const annualWithdrawal = monthlyWithdrawal * 12;
  const fireTarget = annualWithdrawal * 25;
  const fireComparison = fireTarget <= 0
    ? "取り崩し額を入力するとFIRE目安と比較できます"
    : preparedAssets >= fireTarget
      ? `4%ルールのFIRE目安${yen.format(fireTarget)}を上回る資産額`
      : `4%ルールのFIRE目安まで${yen.format(fireTarget - preparedAssets)}不足`;

  setText("withdrawalAvailableYears", availableYears);
  setText("possibleMonthlyWithdrawal", yen.format(possibleMonthly));
  setText("depletionAge", depletionAge);
  setText("withdrawalBalanceTrend", trend);
  setText("withdrawalRetirementImpact", retirementCoverage);
  setText("withdrawalFireComparison", fireComparison);
}

function renderIdeco() {
  const values = {
    idecoAnnualIncome: getFieldValue("idecoAnnualIncome"),
    idecoTaxableIncome: getFieldValue("idecoTaxableIncome"),
    idecoIncomeTaxRate: getFieldValue("idecoIncomeTaxRate"),
    idecoResidentTaxRate: getFieldValue("idecoResidentTaxRate"),
    idecoMonthlyContribution: getFieldValue("idecoMonthlyContribution"),
    idecoYears: getFieldValue("idecoYears"),
    idecoAnnualReturn: getFieldValue("idecoAnnualReturn"),
  };
  let hasError = Object.values(values).some((item) => !item.valid);

  if (
    values.idecoAnnualIncome.valid &&
    values.idecoTaxableIncome.valid &&
    values.idecoTaxableIncome.value > values.idecoAnnualIncome.value
  ) {
    const input = document.querySelector("#idecoTaxableIncome");
    const error = document.querySelector("#idecoTaxableIncomeError");
    input.setAttribute("aria-invalid", "true");
    error.textContent = "\u8ab2\u7a0e\u6240\u5f97\u306f\u5e74\u53ce\u4ee5\u4e0b\u306e\u91d1\u984d\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002";
    hasError = true;
  }

  document.querySelector("#idecoNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("idecoAnnualSaving", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("idecoAnnualContribution", yen.format(0));
    setText("idecoIncomeTaxSaving", yen.format(0));
    setText("idecoResidentTaxSaving", yen.format(0));
    setText("idecoFutureAssets", yen.format(0));
    setText("idecoTotalMerit", yen.format(0));
    setText("idecoNisaDifference", "\u672a\u8a08\u7b97");
    document.querySelector("#idecoMeritDetail").textContent = "\u7bc0\u7a0e\u984d\u306e\u7d2f\u8a08 + \u904b\u7528\u76ca";
    return;
  }

  const annualContribution = values.idecoMonthlyContribution.value * 12;
  const deductibleContribution = Math.min(annualContribution, values.idecoTaxableIncome.value);
  const incomeTaxSaving = deductibleContribution * (values.idecoIncomeTaxRate.value / 100);
  const residentTaxSaving = deductibleContribution * (values.idecoResidentTaxRate.value / 100);
  const annualSaving = incomeTaxSaving + residentTaxSaving;
  const months = Math.round(values.idecoYears.value * 12);
  const futureAssets = calculateFutureAssets(
    0,
    values.idecoMonthlyContribution.value,
    values.idecoAnnualReturn.value,
    months,
  );
  const principal = values.idecoMonthlyContribution.value * months;
  const investmentProfit = futureAssets - principal;
  const totalTaxSaving = annualSaving * values.idecoYears.value;
  const totalMerit = totalTaxSaving + investmentProfit;
  const liquidityText = values.idecoYears.value < 5
    ? "\u7bc0\u7a0e\u306f\u5f97\u3084\u3059\u3044\u4e00\u65b9\u3001\u539f\u524760\u6b73\u307e\u3067\u5f15\u304d\u51fa\u305b\u307e\u305b\u3093"
    : "\u8001\u5f8c\u8cc7\u91d1\u5411\u3051\u306fiDeCo\u3001\u81ea\u7531\u5ea6\u91cd\u8996\u306f\u65b0NISA\u304c\u76ee\u5b89";

  setText("idecoAnnualSaving", yen.format(annualSaving));
  setText("idecoAnnualContribution", yen.format(annualContribution));
  setText("idecoIncomeTaxSaving", yen.format(incomeTaxSaving));
  setText("idecoResidentTaxSaving", yen.format(residentTaxSaving));
  setText("idecoFutureAssets", yen.format(futureAssets));
  setText("idecoTotalMerit", yen.format(totalMerit));
  setText("idecoNisaDifference", liquidityText);
  document.querySelector("#idecoMeritDetail").textContent = `${yen.format(totalTaxSaving)}\u306e\u7bc0\u7a0e\u7d2f\u8a08 + ${yen.format(investmentProfit)}\u306e\u904b\u7528\u76ca`;
}

function calculateFutureAssets(currentAssets, monthlyInvestment, annualReturn, months) {
  const monthlyReturn = annualReturn / 100 / 12;
  if (monthlyReturn === 0) {
    return currentAssets + monthlyInvestment * months;
  }

  const growth = (1 + monthlyReturn) ** months;
  return currentAssets * growth + monthlyInvestment * ((growth - 1) / monthlyReturn);
}

function applyInvestmentTax(grossAssets, principal, nisaUse) {
  if (nisaUse) {
    return grossAssets;
  }

  const taxRate = 0.20315;
  const profit = Math.max(grossAssets - principal, 0);
  return principal + profit * (1 - taxRate);
}

function renderCreditCardInvestment() {
  const values = {
    cardMonthly: getFieldValue("cardMonthly"),
    cardYears: getFieldValue("cardYears"),
    cardAnnualReturn: getFieldValue("cardAnnualReturn"),
    cardRewardRate: getFieldValue("cardRewardRate"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#cardInvestmentNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("normalInvestmentFinalAssets", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("cardFinalAssets", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("cardTotalPoints", yen.format(0));
    setText("cardPointReinvestmentEffect", yen.format(0));
    setText("cardDifference", yen.format(0));
    setText("cardFireImpact", "\u5165\u529b\u30a8\u30e9\u30fc");
    return;
  }

  const monthly = values.cardMonthly.value;
  const months = values.cardYears.value * 12;
  const annualReturn = values.cardAnnualReturn.value;
  const rewardRate = values.cardRewardRate.value / 100;
  const pointReinvest = document.querySelector("#cardPointReinvest").checked;
  const nisaUse = document.querySelector("#cardNisaUse").checked;
  const monthlyPoints = monthly * rewardRate;
  const totalPoints = monthlyPoints * months;
  const principal = monthly * months;
  const normalGross = calculateFutureAssets(0, monthly, annualReturn, months);
  const normalAssets = applyInvestmentTax(normalGross, principal, nisaUse);
  const reinvestPrincipal = principal + totalPoints;
  const reinvestGross = calculateFutureAssets(0, monthly + monthlyPoints, annualReturn, months);
  const reinvestAssets = applyInvestmentTax(reinvestGross, reinvestPrincipal, nisaUse);
  const cardAssets = pointReinvest ? reinvestAssets : normalAssets + totalPoints;
  const pointReinvestmentEffect = Math.max(reinvestAssets - normalAssets - totalPoints, 0);
  const difference = Math.max(cardAssets - normalAssets, 0);
  const fireTarget = 30000000;
  const fireImpact = fireTarget > 0 ? Math.min((difference / fireTarget) * 100, 999) : 0;
  const annualInvestment = monthly * 12;
  const nisaText = nisaUse
    ? annualInvestment <= 3600000
      ? "NISA\u5e74\u9593\u6295\u8cc7\u67a0\u306e\u7bc4\u56f2\u5185\u3067\u6d3b\u7528\u3057\u3084\u3059\u3044\u76ee\u5b89"
      : "NISA\u5e74\u9593\u6295\u8cc7\u67a0\u3092\u8d85\u3048\u308b\u305f\u3081\u3001\u8a3c\u5238\u4f1a\u793e\u306e\u6761\u4ef6\u78ba\u8a8d\u304c\u5fc5\u8981"
    : "\u8ab2\u7a0e\u53e3\u5ea7\u3067\u306f\u904b\u7528\u76ca\u306b\u7a0e\u91d1\u304c\u304b\u304b\u308b\u524d\u63d0\u306e\u7c21\u6613\u8a66\u7b97";

  setText("normalInvestmentFinalAssets", yen.format(normalAssets));
  setText("cardFinalAssets", yen.format(cardAssets));
  setText("cardTotalPoints", yen.format(totalPoints));
  setText("cardPointReinvestmentEffect", pointReinvest ? yen.format(pointReinvestmentEffect) : "\u518d\u6295\u8cc7\u306a\u3057");
  setText("cardDifference", yen.format(difference));
  setText("cardFireImpact", `FIRE\u76ee\u6a193,000\u4e07\u5186\u306b\u5bfe\u3057\u3066\u7d04${fireImpact.toFixed(2)}%\u306e\u4e0a\u4e57\u305b\u3002${nisaText}`);
}

function findAchievementMonths(currentAssets, monthlyInvestment, annualReturn, targetAssets) {
  if (currentAssets >= targetAssets) {
    return 0;
  }

  if (monthlyInvestment === 0 && annualReturn === 0) {
    return null;
  }

  for (let month = 1; month <= 1200; month += 1) {
    const assets = calculateFutureAssets(currentAssets, monthlyInvestment, annualReturn, month);
    if (assets >= targetAssets) {
      return month;
    }
  }

  return null;
}

function formatYears(months) {
  if (months === null) {
    return "\u672a\u9054\u6210";
  }
  if (months === 0) {
    return "\u9054\u6210\u6e08\u307f";
  }

  const years = Math.floor(months / 12);
  const remainder = months % 12;
  if (years === 0) {
    return `${remainder}\u304b\u6708`;
  }
  if (remainder === 0) {
    return `${years}\u5e74`;
  }
  return `${years}\u5e74${remainder}\u304b\u6708`;
}

function renderFire() {
  const values = {
    currentAssets: getFieldValue("currentAssets"),
    monthlyInvestment: getFieldValue("monthlyInvestment"),
    annualReturn: getFieldValue("annualReturn"),
    targetAssets: getFieldValue("targetAssets"),
    years: getFieldValue("years"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#fireNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("achievementYears", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("futureAssets", yen.format(0));
    setText("gapAmount", yen.format(0));
    setText("totalInvestment", yen.format(0));
    return;
  }

  const currentAssets = values.currentAssets.value;
  const monthlyInvestment = values.monthlyInvestment.value;
  const annualReturn = values.annualReturn.value;
  const targetAssets = values.targetAssets.value;
  const months = Math.round(values.years.value * 12);
  const futureAssets = calculateFutureAssets(currentAssets, monthlyInvestment, annualReturn, months);
  const achievementMonths = findAchievementMonths(currentAssets, monthlyInvestment, annualReturn, targetAssets);
  const totalInvestment = currentAssets + monthlyInvestment * months;

  setText("achievementYears", formatYears(achievementMonths));
  setText("futureAssets", yen.format(futureAssets));
  setText("gapAmount", yen.format(futureAssets - targetAssets));
  setText("totalInvestment", yen.format(totalInvestment));
}

function calculateRequiredMonthly(currentAssets, currentMonthly, annualReturn, months, targetAssets) {
  const projected = calculateFutureAssets(currentAssets, currentMonthly, annualReturn, months);
  if (projected >= targetAssets || months <= 0) {
    return 0;
  }

  const monthlyReturn = annualReturn / 100 / 12;
  const shortage = targetAssets - projected;
  if (monthlyReturn === 0) {
    return shortage / months;
  }

  const growth = (1 + monthlyReturn) ** months;
  return shortage / ((growth - 1) / monthlyReturn);
}

function renderRetirement() {
  const values = {
    currentAge: getFieldValue("currentAge"),
    retirementAge: getFieldValue("retirementAge"),
    retirementSavings: getFieldValue("retirementSavings"),
    retirementMonthly: getFieldValue("retirementMonthly"),
    retirementReturn: getFieldValue("retirementReturn"),
    retirementTarget: getFieldValue("retirementTarget"),
    monthlyLivingCost: getFieldValue("monthlyLivingCost"),
    monthlyPension: getFieldValue("monthlyPension"),
  };
  let hasError = Object.values(values).some((item) => !item.valid);

  if (values.retirementAge.valid && values.currentAge.valid && values.retirementAge.value <= values.currentAge.value) {
    const input = document.querySelector("#retirementAge");
    const error = document.querySelector("#retirementAgeError");
    input.setAttribute("aria-invalid", "true");
    error.textContent = "\u9000\u8077\u4e88\u5b9a\u5e74\u9f62\u306f\u73fe\u5728\u306e\u5e74\u9f62\u3088\u308a\u5927\u304d\u304f\u3057\u3066\u304f\u3060\u3055\u3044\u3002";
    hasError = true;
  }

  document.querySelector("#retirementNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("retirementFutureAssets", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("retirementTargetGap", yen.format(0));
    setText("requiredAdditionalMonthly", yen.format(0));
    setText("retirementShortage", yen.format(0));
    setText("fireComparison", yen.format(0));
    setText("nisaGuide", "\u5165\u529b\u30a8\u30e9\u30fc");
    return;
  }

  const monthsToRetirement = (values.retirementAge.value - values.currentAge.value) * 12;
  const futureAssets = calculateFutureAssets(
    values.retirementSavings.value,
    values.retirementMonthly.value,
    values.retirementReturn.value,
    monthsToRetirement,
  );
  const targetGap = futureAssets - values.retirementTarget.value;
  const requiredAdditionalMonthly = calculateRequiredMonthly(
    values.retirementSavings.value,
    values.retirementMonthly.value,
    values.retirementReturn.value,
    monthsToRetirement,
    values.retirementTarget.value,
  );
  const monthlyShortfall = Math.max(values.monthlyLivingCost.value - values.monthlyPension.value, 0);
  const neededAfterRetirement = monthlyShortfall * 12 * 30;
  const retirementShortage = Math.max(neededAfterRetirement - futureAssets, 0);
  const fireTarget = values.monthlyLivingCost.value * 12 * 25;
  const fireGap = futureAssets - fireTarget;
  const annualNisaUse = values.retirementMonthly.value * 12;
  const nisaUseRate = Math.min((annualNisaUse / 3600000) * 100, 999);

  setText("retirementFutureAssets", yen.format(futureAssets));
  setText("retirementTargetGap", yen.format(targetGap));
  setText("requiredAdditionalMonthly", yen.format(requiredAdditionalMonthly));
  setText("retirementShortage", yen.format(retirementShortage));
  setText("fireComparison", yen.format(fireGap));
  setText("nisaGuide", `${yen.format(annualNisaUse)} / \u5e74\uff08\u67a0\u306e${nisaUseRate.toFixed(1)}%\uff09`);
}

function renderEducation() {
  const values = {
    childrenCount: getFieldValue("childrenCount"),
    educationSavings: getFieldValue("educationSavings"),
    educationMonthly: getFieldValue("educationMonthly"),
    educationReturn: getFieldValue("educationReturn"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#educationNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("educationTotalCost", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("educationShortage", yen.format(0));
    setText("educationRequiredMonthly", yen.format(0));
    setText("universityCostGuide", yen.format(0));
    setText("educationFutureAssets", yen.format(0));
    setText("retirementImpact", yen.format(0));
    return;
  }

  const children = values.childrenCount.value;
  const course = document.querySelector("#educationCourse").value;
  const hasUniversity = document.querySelector("#universityEnabled").checked;
  const baseCostPerChild = course === "private" ? 19760000 : 5960000;
  const universityCostPerChild = hasUniversity ? 5000000 : 0;
  const universityCost = universityCostPerChild * children;
  const totalCost = (baseCostPerChild + universityCostPerChild) * children;
  const months = 18 * 12;
  const futureAssets = calculateFutureAssets(
    values.educationSavings.value,
    values.educationMonthly.value,
    values.educationReturn.value,
    months,
  );
  const shortage = Math.max(totalCost - futureAssets, 0);
  const requiredMonthly = calculateRequiredMonthly(
    values.educationSavings.value,
    values.educationMonthly.value,
    values.educationReturn.value,
    months,
    totalCost,
  );
  const retirementImpact = shortage > 0
    ? `${yen.format(shortage)}\u3092\u8001\u5f8c\u8cc7\u91d1\u304b\u3089\u88dc\u3046\u53ef\u80fd\u6027`
    : "\u6559\u80b2\u8cbb\u4e0d\u8db3\u306f0\u5186\u76ee\u5b89";

  setText("educationTotalCost", yen.format(totalCost));
  setText("educationShortage", yen.format(shortage));
  setText("educationRequiredMonthly", yen.format(requiredMonthly));
  setText("universityCostGuide", yen.format(universityCost));
  setText("educationFutureAssets", yen.format(futureAssets));
  setText("retirementImpact", retirementImpact);
}

function renderEducationInsurance() {
  const values = {
    educationInsuranceMonthly: getFieldValue("educationInsuranceMonthly"),
    educationInsuranceYears: getFieldValue("educationInsuranceYears"),
    educationInsuranceReturn: getFieldValue("educationInsuranceReturn"),
    educationInsuranceRefundRate: getFieldValue("educationInsuranceRefundRate"),
    childAge: getFieldValue("childAge"),
    universityStartAge: getFieldValue("universityStartAge"),
  };
  let hasError = Object.values(values).some((item) => !item.valid);

  if (values.universityStartAge.valid && values.childAge.valid && values.universityStartAge.value <= values.childAge.value) {
    const input = document.querySelector("#universityStartAge");
    const error = document.querySelector("#universityStartAgeError");
    input.setAttribute("aria-invalid", "true");
    error.textContent = "\u5927\u5b66\u9032\u5b66\u4e88\u5b9a\u5e74\u9f62\u306f\u5b50\u3069\u3082\u306e\u5e74\u9f62\u3088\u308a\u5927\u304d\u304f\u3057\u3066\u304f\u3060\u3055\u3044\u3002";
    hasError = true;
  }

  document.querySelector("#educationInsuranceNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("educationInvestmentAssets", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("educationInsuranceTotalPaid", yen.format(0));
    setText("educationInsurancePayout", yen.format(0));
    setText("educationInsuranceDifference", yen.format(0));
    setText("educationInsuranceShortage", yen.format(0));
    setText("educationInsuranceRetirementImpact", "\u5165\u529b\u30a8\u30e9\u30fc");
    return;
  }

  const monthsToUniversity = (values.universityStartAge.value - values.childAge.value) * 12;
  const savingMonths = Math.min(values.educationInsuranceYears.value * 12, monthsToUniversity);
  const totalPaid = values.educationInsuranceMonthly.value * savingMonths;
  const insurancePayout = totalPaid * (values.educationInsuranceRefundRate.value / 100);
  const investmentAssets = calculateFutureAssets(
    0,
    values.educationInsuranceMonthly.value,
    values.educationInsuranceReturn.value,
    savingMonths,
  );
  const difference = investmentAssets - insurancePayout;
  const universityCost = 5000000;
  const preparedAssets = Math.max(insurancePayout, investmentAssets);
  const shortage = Math.max(universityCost - preparedAssets, 0);
  const retirementImpact = shortage > 0
    ? `${yen.format(shortage)}\u3092\u8001\u5f8c\u8cc7\u91d1\u304b\u3089\u88dc\u3046\u53ef\u80fd\u6027`
    : "\u6559\u80b2\u8cbb\u4e0d\u8db3\u306f0\u5186\u76ee\u5b89";

  setText("educationInvestmentAssets", yen.format(investmentAssets));
  setText("educationInsuranceTotalPaid", yen.format(totalPaid));
  setText("educationInsurancePayout", yen.format(insurancePayout));
  setText("educationInsuranceDifference", yen.format(difference));
  setText("educationInsuranceShortage", yen.format(shortage));
  setText("educationInsuranceRetirementImpact", retirementImpact);
}

function renderDividend() {
  const values = {
    dividendInitial: getFieldValue("dividendInitial"),
    dividendMonthly: getFieldValue("dividendMonthly"),
    dividendYield: getFieldValue("dividendYield"),
    dividendYears: getFieldValue("dividendYears"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#dividendNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("annualDividend", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("monthlyDividend", yen.format(0));
    setText("totalDividend", yen.format(0));
    setText("dividendFinalAssets", yen.format(0));
    setText("dividendFireImpact", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("dividendNisaComparison", "\u5165\u529b\u30a8\u30e9\u30fc");
    return;
  }

  const reinvest = document.querySelector("#dividendReinvest").checked;
  const yieldRate = values.dividendYield.value / 100;
  const years = values.dividendYears.value;
  let assets = values.dividendInitial.value;
  let totalDividend = 0;
  let annualDividend = assets * yieldRate;

  for (let year = 1; year <= years; year += 1) {
    assets += values.dividendMonthly.value * 12;
    annualDividend = assets * yieldRate;
    totalDividend += annualDividend;
    if (reinvest) {
      assets += annualDividend;
    }
  }

  const finalAssets = reinvest ? assets : assets;
  const monthlyDividend = annualDividend / 12;
  const fireExpense = 3600000;
  const fireCoverage = fireExpense > 0 ? Math.min((annualDividend / fireExpense) * 100, 999) : 0;
  const annualInvestment = values.dividendMonthly.value * 12;
  const nisaGuide = annualInvestment <= 3600000
    ? `\u6bce\u5e74\u306e\u8ffd\u52a0\u6295\u8cc7${yen.format(annualInvestment)}\u306f\u5e74\u9593\u6295\u8cc7\u67a0\u5185\u306e\u76ee\u5b89`
    : `\u6bce\u5e74\u306e\u8ffd\u52a0\u6295\u8cc7${yen.format(annualInvestment)}\u306f\u65b0NISA\u5e74\u9593\u67a0\u3092\u8d85\u3048\u308b\u76ee\u5b89`;

  setText("annualDividend", yen.format(annualDividend));
  setText("monthlyDividend", yen.format(monthlyDividend));
  setText("totalDividend", yen.format(totalDividend));
  setText("dividendFinalAssets", yen.format(finalAssets));
  setText("dividendFireImpact", `\u5e74\u9593\u751f\u6d3b\u8cbb360\u4e07\u5186\u306e\u7d04${fireCoverage.toFixed(1)}%\u3092\u914d\u5f53\u3067\u88dc\u3046\u76ee\u5b89`);
  setText("dividendNisaComparison", nisaGuide);
}

const dividendEtfPresets = {
  VYM: { yield: 3.2, growth: 3.0, feature: "分散性が高く、配当と値上がりのバランスを取りやすい高配当ETF候補です。" },
  HDV: { yield: 3.8, growth: 2.2, feature: "財務健全性やディフェンシブ性を意識しやすく、比較的安定配当を重視したい人向けです。" },
  SPYD: { yield: 4.5, growth: 1.5, feature: "配当利回りを重視しやすい一方、景気敏感セクターの影響を受けやすい点に注意が必要です。" },
  VIG: { yield: 2.0, growth: 4.5, feature: "高配当よりも増配と資産成長を重視したい人向けの比較候補です。" },
  CUSTOM: { yield: 3.2, growth: 3.0, feature: "入力した利回りと成長率で、任意のETFや組み合わせを試算できます。" },
};

function projectDividendEtf(initialAssets, monthlyInvestment, dividendYield, growthRate, years, reinvest) {
  let assets = initialAssets;
  let totalDividend = 0;
  let annualDividend = 0;

  for (let year = 1; year <= years; year += 1) {
    assets += monthlyInvestment * 12;
    assets = Math.max(assets * (1 + growthRate / 100), 0);
    annualDividend = Math.max(assets * (dividendYield / 100), 0);
    totalDividend += annualDividend;
    if (reinvest) {
      assets += annualDividend;
    }
  }

  return { assets, totalDividend, annualDividend };
}

function renderDividendEtf() {
  const values = {
    dividendEtfInitial: getFieldValue("dividendEtfInitial"),
    dividendEtfMonthly: getFieldValue("dividendEtfMonthly"),
    dividendEtfYield: getFieldValue("dividendEtfYield"),
    dividendEtfGrowth: getFieldValue("dividendEtfGrowth"),
    dividendEtfYears: getFieldValue("dividendEtfYears"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#dividendEtfNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("dividendEtfAnnualDividend", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("dividendEtfMonthlyDividend", yen.format(0));
    setText("dividendEtfTotalDividend", yen.format(0));
    setText("dividendEtfFinalAssets", yen.format(0));
    setText("dividendEtfComparison", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("dividendEtfFireImpact", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("dividendEtfFeature", "\u5165\u529b\u30a8\u30e9\u30fc");
    return;
  }

  const selected = document.querySelector("#dividendEtfChoice").value;
  const reinvest = document.querySelector("#dividendEtfReinvest").checked;
  const nisa = document.querySelector("#dividendEtfNisa").checked;
  const selectedPreset = dividendEtfPresets[selected] || dividendEtfPresets.CUSTOM;
  const selectedYield = values.dividendEtfYield.value;
  const selectedGrowth = values.dividendEtfGrowth.value;
  const selectedPlan = projectDividendEtf(
    values.dividendEtfInitial.value,
    values.dividendEtfMonthly.value,
    selectedYield,
    selectedGrowth,
    values.dividendEtfYears.value,
    reinvest,
  );
  const comparisonPlans = Object.entries(dividendEtfPresets)
    .filter(([key]) => key !== "CUSTOM")
    .map(([key, preset]) => ({
      key,
      ...preset,
      plan: projectDividendEtf(
        values.dividendEtfInitial.value,
        values.dividendEtfMonthly.value,
        preset.yield,
        preset.growth,
        values.dividendEtfYears.value,
        reinvest,
      ),
    }));
  const bestDividend = comparisonPlans.reduce((best, item) => item.plan.annualDividend > best.plan.annualDividend ? item : best, comparisonPlans[0]);
  const bestAssets = comparisonPlans.reduce((best, item) => item.plan.assets > best.plan.assets ? item : best, comparisonPlans[0]);
  const monthlyDividend = selectedPlan.annualDividend / 12;
  const fireCoverage = Math.min((selectedPlan.annualDividend / 3600000) * 100, 999);
  const annualInvestment = values.dividendEtfMonthly.value * 12;
  const nisaGuide = nisa
    ? annualInvestment <= 3600000
      ? `新NISA利用時は年間投資額${yen.format(annualInvestment)}が年360万円枠内の目安です。`
      : `新NISA利用時でも年間投資額${yen.format(annualInvestment)}は年360万円枠を超える目安です。`
    : "課税口座前提のため、配当や売却益への課税も考慮してください。";
  const comparisonText = `配当重視は${bestDividend.key}（年${yen.format(bestDividend.plan.annualDividend)}）、資産成長重視は${bestAssets.key}（最終${yen.format(bestAssets.plan.assets)}）の目安`;
  const featureText = `${selected}：${selectedPreset.feature} ${nisaGuide}`;

  setText("dividendEtfAnnualDividend", yen.format(selectedPlan.annualDividend));
  setText("dividendEtfMonthlyDividend", yen.format(monthlyDividend));
  setText("dividendEtfTotalDividend", yen.format(selectedPlan.totalDividend));
  setText("dividendEtfFinalAssets", yen.format(selectedPlan.assets));
  setText("dividendEtfComparison", comparisonText);
  setText("dividendEtfFireImpact", `年間生活費360万円の約${fireCoverage.toFixed(1)}%を配当で補う目安`);
  setText("dividendEtfFeature", featureText);
}

function projectDividendLifeAssets(currentAssets, monthlyInvestment, annualReturn, dividendYield, months, reinvest) {
  const monthlyReturn = annualReturn / 100 / 12;
  const monthlyDividendYield = dividendYield / 100 / 12;
  let assets = currentAssets;

  for (let month = 1; month <= months; month += 1) {
    assets = Math.max(assets * (1 + monthlyReturn), 0);
    assets += monthlyInvestment;
    if (reinvest) {
      assets += Math.max(assets * monthlyDividendYield, 0);
    }
  }

  return assets;
}

function findDividendLifeAchievementMonth(currentAssets, monthlyInvestment, annualReturn, dividendYield, targetAssets, maxMonths, reinvest) {
  if (currentAssets >= targetAssets) {
    return 0;
  }

  for (let month = 1; month <= maxMonths; month += 1) {
    const assets = projectDividendLifeAssets(currentAssets, monthlyInvestment, annualReturn, dividendYield, month, reinvest);
    if (assets >= targetAssets) {
      return month;
    }
  }

  return null;
}

function calculateDividendLifeRequiredMonthly(currentAssets, annualReturn, dividendYield, months, targetAssets, reinvest) {
  if (months <= 0 || currentAssets >= targetAssets) {
    return 0;
  }

  const currentProjection = projectDividendLifeAssets(currentAssets, 0, annualReturn, dividendYield, months, reinvest);
  if (currentProjection >= targetAssets) {
    return 0;
  }

  let low = 0;
  let high = 100000000;
  for (let count = 0; count < 60; count += 1) {
    const mid = (low + high) / 2;
    const projected = projectDividendLifeAssets(currentAssets, mid, annualReturn, dividendYield, months, reinvest);
    if (projected >= targetAssets) {
      high = mid;
    } else {
      low = mid;
    }
  }

  return high;
}

function renderDividendLife() {
  const values = {
    dividendLifeMonthlyCost: getFieldValue("dividendLifeMonthlyCost"),
    dividendLifeAssets: getFieldValue("dividendLifeAssets"),
    dividendLifeMonthly: getFieldValue("dividendLifeMonthly"),
    dividendLifeYield: getFieldValue("dividendLifeYield"),
    dividendLifeReturn: getFieldValue("dividendLifeReturn"),
    dividendLifeYears: getFieldValue("dividendLifeYears"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#dividendLifeNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("dividendLifeRequiredAssets", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("dividendLifeAnnualDividend", yen.format(0));
    setText("dividendLifeAchieveYear", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("dividendLifeGap", yen.format(0));
    setText("dividendLifeRequiredMonthly", yen.format(0));
    setText("dividendLifeFireComparison", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("dividendLifeNisaEffect", "\u5165\u529b\u30a8\u30e9\u30fc");
    return;
  }

  const monthlyCost = values.dividendLifeMonthlyCost.value;
  const currentAssets = values.dividendLifeAssets.value;
  const monthlyInvestment = values.dividendLifeMonthly.value;
  const dividendYield = values.dividendLifeYield.value;
  const annualReturn = values.dividendLifeReturn.value;
  const months = values.dividendLifeYears.value * 12;
  const reinvest = document.querySelector("#dividendLifeReinvest").checked;
  const annualNeededDividend = monthlyCost * 12;
  const requiredAssets = annualNeededDividend / (dividendYield / 100);
  const achievementMonth = findDividendLifeAchievementMonth(
    currentAssets,
    monthlyInvestment,
    annualReturn,
    dividendYield,
    requiredAssets,
    months,
    reinvest,
  );
  const gap = Math.max(requiredAssets - currentAssets, 0);
  const requiredMonthly = calculateDividendLifeRequiredMonthly(
    currentAssets,
    annualReturn,
    dividendYield,
    months,
    requiredAssets,
    reinvest,
  );
  const fireTarget = annualNeededDividend * 25;
  const fireDifference = requiredAssets - fireTarget;
  const fireComparison = fireDifference <= 0
    ? `4%ルールのFIRE必要資産より${yen.format(Math.abs(fireDifference))}少ない目安`
    : `4%ルールのFIRE必要資産より${yen.format(fireDifference)}多い目安`;
  const annualInvestment = monthlyInvestment * 12;
  const nisaEffect = requiredAssets <= 18000000
    ? "必要資産が新NISA非課税保有限度額1,800万円内に収まる目安"
    : annualInvestment <= 3600000
      ? "年間投資額は新NISA枠内でも、必要資産は1,800万円を超えるため課税口座との併用が必要な目安"
      : "毎年の積立額が新NISA年間投資枠を超えるため、入金計画と課税口座の併用確認が必要";

  setText("dividendLifeRequiredAssets", yen.format(requiredAssets));
  setText("dividendLifeAnnualDividend", yen.format(annualNeededDividend));
  setText("dividendLifeAchieveYear", achievementMonth === null ? "運用期間内は未達成" : formatYears(achievementMonth));
  setText("dividendLifeGap", yen.format(gap));
  setText("dividendLifeRequiredMonthly", yen.format(requiredMonthly));
  setText("dividendLifeFireComparison", fireComparison);
  setText("dividendLifeNisaEffect", nisaEffect);
}

function calculateDividendReinvestmentPlan(values, reinvest) {
  const yieldRate = values.dividendReinvestmentYield.value / 100;
  const growthRate = values.dividendReinvestmentGrowth.value / 100;
  const years = values.dividendReinvestmentYears.value;
  let assets = values.dividendReinvestmentInitial.value;
  let totalDividend = 0;
  let annualDividend = assets * yieldRate;

  for (let year = 1; year <= years; year += 1) {
    assets += values.dividendReinvestmentMonthly.value * 12;
    assets *= 1 + growthRate;
    annualDividend = Math.max(assets * yieldRate, 0);
    totalDividend += annualDividend;
    if (reinvest) {
      assets += annualDividend;
    }
  }

  return {
    finalAssets: Math.max(assets, 0),
    totalDividend,
    annualDividend,
  };
}

function renderDividendReinvestment() {
  const values = {
    dividendReinvestmentInitial: getFieldValue("dividendReinvestmentInitial"),
    dividendReinvestmentMonthly: getFieldValue("dividendReinvestmentMonthly"),
    dividendReinvestmentYield: getFieldValue("dividendReinvestmentYield"),
    dividendReinvestmentGrowth: getFieldValue("dividendReinvestmentGrowth"),
    dividendReinvestmentYears: getFieldValue("dividendReinvestmentYears"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#dividendReinvestmentNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("dividendReinvestmentFinalAssets", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("dividendReinvestmentTotalDividend", yen.format(0));
    setText("dividendReinvestmentAnnualDividend", yen.format(0));
    setText("dividendReinvestmentIncrease", yen.format(0));
    setText("dividendReinvestmentFireImpact", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("dividendReinvestmentNisaComparison", "\u5165\u529b\u30a8\u30e9\u30fc");
    return;
  }

  const reinvest = document.querySelector("#dividendReinvestmentEnabled").checked;
  const selectedPlan = calculateDividendReinvestmentPlan(values, reinvest);
  const reinvestPlan = calculateDividendReinvestmentPlan(values, true);
  const cashPlan = calculateDividendReinvestmentPlan(values, false);
  const reinvestIncrease = Math.max(reinvestPlan.finalAssets - cashPlan.finalAssets, 0);
  const fireExpense = 3600000;
  const fireCoverage = fireExpense > 0 ? Math.min((selectedPlan.annualDividend / fireExpense) * 100, 999) : 0;
  const annualInvestment = values.dividendReinvestmentMonthly.value * 12;
  const nisaGuide = annualInvestment <= 3600000 && selectedPlan.finalAssets <= 18000000
    ? "\u5e74\u9593\u6295\u8cc7\u67a0\u3068\u975e\u8ab2\u7a0e\u4fdd\u6709\u9650\u5ea6\u984d\u306e\u7bc4\u56f2\u5185\u306b\u53ce\u307e\u308b\u76ee\u5b89"
    : annualInvestment <= 3600000
      ? "\u5e74\u9593\u6295\u8cc7\u67a0\u5185\u3067\u3082\u975e\u8ab2\u7a0e\u4fdd\u6709\u9650\u5ea6\u984d\u306e\u7ba1\u7406\u304c\u5fc5\u8981\u306a\u76ee\u5b89"
      : "\u6bce\u5e74\u306e\u8ffd\u52a0\u6295\u8cc7\u304c\u65b0NISA\u5e74\u9593\u67a0\u3092\u8d85\u3048\u308b\u76ee\u5b89";

  setText("dividendReinvestmentFinalAssets", yen.format(selectedPlan.finalAssets));
  setText("dividendReinvestmentTotalDividend", yen.format(selectedPlan.totalDividend));
  setText("dividendReinvestmentAnnualDividend", yen.format(selectedPlan.annualDividend));
  setText("dividendReinvestmentIncrease", yen.format(reinvestIncrease));
  setText("dividendReinvestmentFireImpact", `\u5e74\u9593\u751f\u6d3b\u8cbb360\u4e07\u5186\u306e\u7d04${fireCoverage.toFixed(1)}%\u3092\u914d\u5f53\u3067\u88dc\u3046\u76ee\u5b89`);
  setText("dividendReinvestmentNisaComparison", nisaGuide);
}

function renderEmployeeFire() {
  const values = {
    employeeFireAge: getFieldValue("employeeFireAge"),
    employeeFireAssets: getFieldValue("employeeFireAssets"),
    employeeFireMonthly: getFieldValue("employeeFireMonthly"),
    employeeFireSideIncome: getFieldValue("employeeFireSideIncome"),
    employeeFireLivingCost: getFieldValue("employeeFireLivingCost"),
    employeeFireReturn: getFieldValue("employeeFireReturn"),
    employeeFireDividendIncome: getFieldValue("employeeFireDividendIncome"),
    employeeFireTarget: getFieldValue("employeeFireTarget"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#employeeFireNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("employeeFireYears", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("employeeFireAchieveAge", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("employeeFireAdditionalMonthly", yen.format(0));
    setText("employeeFireSideIncomeEffect", "0\u5e74");
    setText("employeeFireDividendEffect", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("employeeFireSideFireComparison", "\u5165\u529b\u30a8\u30e9\u30fc");
    return;
  }

  const monthlyContribution = values.employeeFireMonthly.value + values.employeeFireSideIncome.value + values.employeeFireDividendIncome.value;
  const noSideMonthlyContribution = values.employeeFireMonthly.value + values.employeeFireDividendIncome.value;
  const noDividendMonthlyContribution = values.employeeFireMonthly.value + values.employeeFireSideIncome.value;
  const achievementMonths = findAchievementMonths(
    values.employeeFireAssets.value,
    monthlyContribution,
    values.employeeFireReturn.value,
    values.employeeFireTarget.value,
  );
  const noSideAchievementMonths = findAchievementMonths(
    values.employeeFireAssets.value,
    noSideMonthlyContribution,
    values.employeeFireReturn.value,
    values.employeeFireTarget.value,
  );
  const noDividendAchievementMonths = findAchievementMonths(
    values.employeeFireAssets.value,
    noDividendMonthlyContribution,
    values.employeeFireReturn.value,
    values.employeeFireTarget.value,
  );
  const targetMonths = 20 * 12;
  const requiredAdditionalMonthly = calculateRequiredMonthly(
    values.employeeFireAssets.value,
    monthlyContribution,
    values.employeeFireReturn.value,
    targetMonths,
    values.employeeFireTarget.value,
  );
  const yearsText = formatYears(achievementMonths);
  const achieveAge = achievementMonths === null
    ? "\u672a\u9054\u6210"
    : `${(values.employeeFireAge.value + achievementMonths / 12).toFixed(1)}\u6b73`;
  const sideIncomeEffect = achievementMonths !== null && noSideAchievementMonths !== null
    ? Math.max((noSideAchievementMonths - achievementMonths) / 12, 0)
    : 0;
  const dividendEffectYears = achievementMonths !== null && noDividendAchievementMonths !== null
    ? Math.max((noDividendAchievementMonths - achievementMonths) / 12, 0)
    : 0;
  const sideFireRequiredAssets = Math.max(values.employeeFireLivingCost.value - (values.employeeFireSideIncome.value + values.employeeFireDividendIncome.value) * 12, 0) * 25;
  const sideFireDifference = Math.max(values.employeeFireTarget.value - sideFireRequiredAssets, 0);
  const dividendEffectText = `${yen.format(values.employeeFireDividendIncome.value)} / \u6708\u306e\u518d\u6295\u8cc7\u3067\u7d04${dividendEffectYears.toFixed(1)}\u5e74\u77ed\u7e2e\u306e\u76ee\u5b89`;
  const sideFireComparison = sideFireRequiredAssets <= 0
    ? "\u526f\u696d\u30fb\u914d\u5f53\u3067\u751f\u6d3b\u8cbb\u3092\u8986\u3048\u308b\u76ee\u5b89"
    : `\u30b5\u30a4\u30c9FIRE\u5fc5\u8981\u8cc7\u7523\u306f${yen.format(sideFireRequiredAssets)}\u3001\u5b8c\u5168FIRE\u3088\u308a${yen.format(sideFireDifference)}\u4f4e\u3044\u76ee\u5b89`;

  setText("employeeFireYears", yearsText);
  setText("employeeFireAchieveAge", achieveAge);
  setText("employeeFireAdditionalMonthly", yen.format(requiredAdditionalMonthly));
  setText("employeeFireSideIncomeEffect", `${sideIncomeEffect.toFixed(1)}\u5e74`);
  setText("employeeFireDividendEffect", dividendEffectText);
  setText("employeeFireSideFireComparison", sideFireComparison);
}

function renderCashFlow() {
  const values = {
    cashFlowSalary: getFieldValue("cashFlowSalary"),
    cashFlowSideIncome: getFieldValue("cashFlowSideIncome"),
    cashFlowRent: getFieldValue("cashFlowRent"),
    cashFlowFood: getFieldValue("cashFlowFood"),
    cashFlowCommunication: getFieldValue("cashFlowCommunication"),
    cashFlowInsurance: getFieldValue("cashFlowInsurance"),
    cashFlowInvestment: getFieldValue("cashFlowInvestment"),
    cashFlowLoan: getFieldValue("cashFlowLoan"),
    cashFlowOther: getFieldValue("cashFlowOther"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#cashFlowNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("cashFlowMonthlyBalance", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("cashFlowAnnualSavings", yen.format(0));
    setText("cashFlowInvestableAmount", yen.format(0));
    setText("cashFlowFixedCostGap", yen.format(0));
    setText("cashFlowFireImpact", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("cashFlowImprovementPoint", "\u5165\u529b\u30a8\u30e9\u30fc");
    return;
  }

  const monthlyIncome = values.cashFlowSalary.value + values.cashFlowSideIncome.value;
  const fixedCosts = values.cashFlowRent.value + values.cashFlowCommunication.value + values.cashFlowInsurance.value + values.cashFlowLoan.value;
  const livingCosts = values.cashFlowFood.value + values.cashFlowOther.value;
  const totalOutflow = fixedCosts + livingCosts + values.cashFlowInvestment.value;
  const monthlyBalance = monthlyIncome - totalOutflow;
  const annualSavings = Math.max(monthlyBalance, 0) * 12;
  const investableAmount = Math.max(monthlyIncome - fixedCosts - livingCosts, 0);
  const fixedCostTarget = monthlyIncome * 0.35;
  const fixedCostGap = Math.max(fixedCosts - fixedCostTarget, 0);
  const annualAssetGrowth = (values.cashFlowInvestment.value + Math.max(monthlyBalance, 0)) * 12;
  const fireTarget = 30000000;
  const fireYears = annualAssetGrowth > 0 ? fireTarget / annualAssetGrowth : null;
  const investmentRate = monthlyIncome > 0 ? (values.cashFlowInvestment.value + Math.max(monthlyBalance, 0)) / monthlyIncome : 0;
  const fixedCostRate = monthlyIncome > 0 ? fixedCosts / monthlyIncome : 0;
  const fireImpact = fireYears === null
    ? "投資・黒字がないため、まず収支改善が必要です"
    : `FIRE資産3,000万円まで単純計算で約${fireYears.toFixed(1)}年`;
  let improvementPoint = "黒字を維持しつつ、投資額と生活防衛資金のバランスを確認しましょう。";

  if (monthlyBalance < 0) {
    improvementPoint = "毎月赤字です。固定費削減とローン返済額の見直しを優先しましょう。";
  } else if (fixedCostGap > 0) {
    improvementPoint = `固定費が収入の35%を超えています。まず月${yen.format(fixedCostGap)}程度の見直し余地があります。`;
  } else if (investmentRate < 0.15) {
    improvementPoint = "投資率が15%未満です。生活防衛資金を確保したうえで、黒字の一部を投資へ回せるか確認しましょう。";
  } else if (fixedCostRate < 0.3 && investmentRate >= 0.2) {
    improvementPoint = "固定費と投資率のバランスは良好です。副業収入や昇給分を追加投資に回すとFIREが近づきます。";
  }

  setText("cashFlowMonthlyBalance", yen.format(monthlyBalance));
  setText("cashFlowAnnualSavings", yen.format(annualSavings));
  setText("cashFlowInvestableAmount", yen.format(investableAmount));
  setText("cashFlowFixedCostGap", yen.format(fixedCostGap));
  setText("cashFlowFireImpact", fireImpact);
  setText("cashFlowImprovementPoint", improvementPoint);
}

function renderEmergencyFund() {
  const values = {
    emergencyMonthlyCost: getFieldValue("emergencyMonthlyCost"),
    familyCount: getFieldValue("familyCount"),
    emergencySavings: getFieldValue("emergencySavings"),
    unemploymentMonths: getFieldValue("unemploymentMonths"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#emergencyFundNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("requiredEmergencyFund", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("emergencyFundGap", yen.format(0));
    setText("emergencyFundMonthlySaving", yen.format(0));
    setText("emergencyFundSideIncomeEffect", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("emergencyFundFireSafety", "\u5165\u529b\u30a8\u30e9\u30fc");
    return;
  }

  const employmentType = document.querySelector("#employmentType").value;
  const sideIncomeStatus = document.querySelector("#sideIncomeStatus").value;
  const employmentBuffer = {
    employee: 1,
    contract: 1.25,
    self: 1.6,
  }[employmentType] || 1;
  const sideIncomeMonthly = {
    none: 0,
    small: 50000,
    stable: 100000,
  }[sideIncomeStatus] || 0;
  const familyBuffer = 1 + Math.max(values.familyCount.value - 1, 0) * 0.08;
  const baseMonths = Math.max(values.unemploymentMonths.value, employmentType === "self" ? 12 : employmentType === "contract" ? 9 : 6);
  const grossRequired = values.emergencyMonthlyCost.value * baseMonths * employmentBuffer * familyBuffer;
  const sideIncomeEffect = Math.min(sideIncomeMonthly * baseMonths, grossRequired * 0.4);
  const requiredFund = Math.max(grossRequired - sideIncomeEffect, values.emergencyMonthlyCost.value * 3);
  const gap = Math.max(requiredFund - values.emergencySavings.value, 0);
  const monthlySaving = gap / 12;
  const fireSafetyMonths = Math.max(baseMonths, 12);
  const fireSafetyFund = values.emergencyMonthlyCost.value * fireSafetyMonths * familyBuffer;
  const sideIncomeText = sideIncomeEffect > 0
    ? `${yen.format(sideIncomeEffect)}\u5206\u3001\u5fc5\u8981\u8cc7\u91d1\u3092\u5727\u7e2e\u3059\u308b\u76ee\u5b89`
    : "\u526f\u696d\u53ce\u5165\u306b\u3088\u308b\u5727\u7e2e\u52b9\u679c\u306f0\u5186";

  setText("requiredEmergencyFund", yen.format(requiredFund));
  setText("emergencyFundGap", yen.format(gap));
  setText("emergencyFundMonthlySaving", yen.format(monthlySaving));
  setText("emergencyFundSideIncomeEffect", sideIncomeText);
  setText("emergencyFundFireSafety", `${yen.format(fireSafetyFund)}\u3092FIRE\u524d\u306e\u73fe\u91d1\u76ee\u5b89\u3068\u3057\u3066\u78ba\u4fdd`);
}

function renderFixedCostReduction() {
  const values = {
    rentCost: getFieldValue("rentCost"),
    communicationCost: getFieldValue("communicationCost"),
    insuranceCost: getFieldValue("insuranceCost"),
    subscriptionCost: getFieldValue("subscriptionCost"),
    foodCost: getFieldValue("foodCost"),
    creditCardAnnualFee: getFieldValue("creditCardAnnualFee"),
    otherFixedCost: getFieldValue("otherFixedCost"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#fixedCostNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("fixedCostMonthlyTotal", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("fixedCostReducible", yen.format(0));
    setText("fixedCostAnnualSaving", yen.format(0));
    setText("fixedCostFutureAssets", yen.format(0));
    setText("fixedCostFireImpact", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("fixedCostImprovementPoint", "\u5165\u529b\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044");
    return;
  }

  const cardMonthlyCost = values.creditCardAnnualFee.value / 12;
  const monthlyTotal = values.rentCost.value
    + values.communicationCost.value
    + values.insuranceCost.value
    + values.subscriptionCost.value
    + values.foodCost.value
    + cardMonthlyCost
    + values.otherFixedCost.value;
  const reducibleItems = {
    "\u5bb6\u8cc3": values.rentCost.value * 0.05,
    "\u901a\u4fe1\u8cbb": values.communicationCost.value * 0.35,
    "\u4fdd\u967a\u6599": values.insuranceCost.value * 0.25,
    "\u30b5\u30d6\u30b9\u30af": values.subscriptionCost.value * 0.4,
    "\u98df\u8cbb": values.foodCost.value * 0.08,
    "\u30af\u30ec\u30ab\u5e74\u4f1a\u8cbb": cardMonthlyCost * 0.5,
    "\u305d\u306e\u4ed6\u56fa\u5b9a\u8cbb": values.otherFixedCost.value * 0.15,
  };
  const reducible = Object.values(reducibleItems).reduce((sum, item) => sum + item, 0);
  const annualSaving = reducible * 12;
  const futureAssets = calculateFutureAssets(0, reducible, 4, 20 * 12);
  const fireTarget = 30000000;
  const fireImpactRate = fireTarget > 0 ? (futureAssets / fireTarget) * 100 : 0;
  const fireImpact = reducible > 0
    ? `20\u5e74\u9593\u6295\u8cc7\u3059\u308b\u3068FIRE\u76ee\u6a193,000\u4e07\u5186\u306e\u7d04${fireImpactRate.toFixed(1)}%\u306b\u76f8\u5f53`
    : "\u524a\u6e1b\u53ef\u80fd\u984d\u304c0\u5186\u306e\u305f\u3081\u3001FIRE\u3078\u306e\u8ffd\u52a0\u52b9\u679c\u306f0\u5186\u3067\u3059";
  const topItem = Object.entries(reducibleItems).sort((a, b) => b[1] - a[1])[0];
  const improvementMessages = {
    "\u5bb6\u8cc3": "\u5bb6\u8cc3\u306f\u66f4\u65b0\u6642\u306e\u4ea4\u6e09\u3084\u4f4f\u307f\u66ff\u3048\u3067\u52b9\u679c\u304c\u5927\u304d\u304f\u306a\u308a\u3084\u3059\u3044\u9805\u76ee\u3067\u3059\u3002",
    "\u901a\u4fe1\u8cbb": "\u901a\u4fe1\u8cbb\u306f\u683c\u5b89\u30d7\u30e9\u30f3\u3084\u56de\u7dda\u306e\u898b\u76f4\u3057\u3067\u6bce\u6708\u306e\u524a\u6e1b\u306b\u3064\u306a\u304c\u308a\u3084\u3059\u3044\u3067\u3059\u3002",
    "\u4fdd\u967a\u6599": "\u4fdd\u967a\u6599\u306f\u91cd\u8907\u4fdd\u969c\u3084\u5fc5\u8981\u4fdd\u969c\u984d\u3092\u78ba\u8a8d\u3059\u308b\u3068\u898b\u76f4\u3057\u3084\u3059\u3044\u3067\u3059\u3002",
    "\u30b5\u30d6\u30b9\u30af": "\u30b5\u30d6\u30b9\u30af\u306f\u4f7f\u3063\u3066\u3044\u306a\u3044\u5951\u7d04\u3092\u89e3\u7d04\u3059\u308b\u3060\u3051\u3067\u52b9\u679c\u304c\u51fa\u3084\u3059\u3044\u9805\u76ee\u3067\u3059\u3002",
    "\u98df\u8cbb": "\u98df\u8cbb\u306f\u5916\u98df\u983b\u5ea6\u3084\u307e\u3068\u3081\u8cb7\u3044\u306e\u8a2d\u8a08\u3067\u7121\u7406\u306a\u304f\u8abf\u6574\u3057\u3084\u3059\u3044\u3067\u3059\u3002",
    "\u30af\u30ec\u30ab\u5e74\u4f1a\u8cbb": "\u30af\u30ec\u30ab\u5e74\u4f1a\u8cbb\u306f\u7279\u5178\u3068\u9084\u5143\u984d\u3092\u6bd4\u3079\u3001\u5e74\u4f1a\u8cbb\u7121\u6599\u30ab\u30fc\u30c9\u3078\u306e\u5207\u308a\u66ff\u3048\u3082\u691c\u8a0e\u3067\u304d\u307e\u3059\u3002",
    "\u305d\u306e\u4ed6\u56fa\u5b9a\u8cbb": "\u305d\u306e\u4ed6\u56fa\u5b9a\u8cbb\u306f\u5c11\u984d\u5951\u7d04\u3092\u68da\u5378\u3057\u3059\u308b\u3068\u3001\u6bce\u6708\u306e\u652f\u51fa\u3092\u4e0b\u3052\u3084\u3059\u3044\u3067\u3059\u3002",
  };
  const improvementPoint = topItem && topItem[1] > 0
    ? improvementMessages[topItem[0]]
    : "\u56fa\u5b9a\u8cbb\u304c\u5c11\u306a\u3044\u72b6\u614b\u3067\u3059\u3002\u3053\u306e\u307e\u307e\u6295\u8cc7\u3084\u751f\u6d3b\u9632\u885b\u8cc7\u91d1\u306b\u4f59\u529b\u3092\u56de\u3057\u3084\u3059\u3044\u3067\u3059\u3002";

  setText("fixedCostMonthlyTotal", yen.format(monthlyTotal));
  setText("fixedCostReducible", `${yen.format(reducible)} / \u6708`);
  setText("fixedCostAnnualSaving", yen.format(annualSaving));
  setText("fixedCostFutureAssets", yen.format(futureAssets));
  setText("fixedCostFireImpact", fireImpact);
  setText("fixedCostImprovementPoint", improvementPoint);
}

function renderSideFire() {
  const values = {
    sideFireCurrentAge: getFieldValue("sideFireCurrentAge"),
    sideFireTargetAge: getFieldValue("sideFireTargetAge"),
    sideFireAssets: getFieldValue("sideFireAssets"),
    sideFireMonthly: getFieldValue("sideFireMonthly"),
    sideFireReturn: getFieldValue("sideFireReturn"),
    sideFireLivingCost: getFieldValue("sideFireLivingCost"),
    sideFireSideIncome: getFieldValue("sideFireSideIncome"),
    sideFireDividendIncome: getFieldValue("sideFireDividendIncome"),
  };
  let hasError = Object.values(values).some((item) => !item.valid);

  if (values.sideFireTargetAge.valid && values.sideFireCurrentAge.valid && values.sideFireTargetAge.value <= values.sideFireCurrentAge.value) {
    const input = document.querySelector("#sideFireTargetAge");
    const error = document.querySelector("#sideFireTargetAgeError");
    input.setAttribute("aria-invalid", "true");
    error.textContent = "FIRE\u76ee\u6a19\u5e74\u9f62\u306f\u73fe\u5728\u306e\u5e74\u9f62\u3088\u308a\u5927\u304d\u304f\u3057\u3066\u304f\u3060\u3055\u3044\u3002";
    hasError = true;
  }

  document.querySelector("#sideFireNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("sideFireAchieveYear", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("sideFireRequiredAssets", yen.format(0));
    setText("sideFireShortage", yen.format(0));
    setText("sideFireRequiredMonthly", yen.format(0));
    setText("sideFireSideIncomeEffect", "0\u5e74");
    setText("sideFireDividendEffect", yen.format(0));
    setText("sideFireRetirementComparison", "\u5165\u529b\u30a8\u30e9\u30fc");
    return;
  }

  const monthlyLivingCost = values.sideFireLivingCost.value;
  const sideIncome = values.sideFireSideIncome.value;
  const dividendIncome = values.sideFireDividendIncome.value;
  const uncoveredMonthlyCost = Math.max(monthlyLivingCost - sideIncome - dividendIncome, 0);
  const noSideMonthlyCost = Math.max(monthlyLivingCost - dividendIncome, 0);
  const noDividendMonthlyCost = Math.max(monthlyLivingCost - sideIncome, 0);
  const requiredAssets = uncoveredMonthlyCost * 12 * 25;
  const noSideRequiredAssets = noSideMonthlyCost * 12 * 25;
  const noDividendRequiredAssets = noDividendMonthlyCost * 12 * 25;
  const monthsToTargetAge = (values.sideFireTargetAge.value - values.sideFireCurrentAge.value) * 12;
  const projectedAssets = calculateFutureAssets(
    values.sideFireAssets.value,
    values.sideFireMonthly.value,
    values.sideFireReturn.value,
    monthsToTargetAge,
  );
  const shortage = Math.max(requiredAssets - projectedAssets, 0);
  const requiredAdditionalMonthly = calculateRequiredMonthly(
    values.sideFireAssets.value,
    values.sideFireMonthly.value,
    values.sideFireReturn.value,
    monthsToTargetAge,
    requiredAssets,
  );
  const requiredMonthly = shortage > 0 ? values.sideFireMonthly.value + requiredAdditionalMonthly : values.sideFireMonthly.value;
  const achievementMonths = findAchievementMonths(
    values.sideFireAssets.value,
    values.sideFireMonthly.value,
    values.sideFireReturn.value,
    requiredAssets,
  );
  const noSideAchievementMonths = findAchievementMonths(
    values.sideFireAssets.value,
    values.sideFireMonthly.value,
    values.sideFireReturn.value,
    noSideRequiredAssets,
  );
  const currentYear = new Date().getFullYear();
  const achievementYear = achievementMonths === null
    ? "\u672a\u9054\u6210"
    : `${currentYear + Math.ceil(achievementMonths / 12)}\u5e74 / ${values.sideFireCurrentAge.value + Math.ceil(achievementMonths / 12)}\u6b73`;
  const sideIncomeShortening = achievementMonths !== null && noSideAchievementMonths !== null
    ? Math.max((noSideAchievementMonths - achievementMonths) / 12, 0)
    : 0;
  const dividendEffect = Math.max(noDividendRequiredAssets - requiredAssets, 0);
  const retirementBase = 30000000;
  const retirementComparison = requiredAssets > retirementBase
    ? `\u8001\u5f8c\u8cc7\u91d13,000\u4e07\u5186\u3088\u308a${yen.format(requiredAssets - retirementBase)}\u9ad8\u3044\u76ee\u5b89`
    : `\u8001\u5f8c\u8cc7\u91d13,000\u4e07\u5186\u3088\u308a${yen.format(retirementBase - requiredAssets)}\u4f4e\u3044\u76ee\u5b89`;

  setText("sideFireAchieveYear", achievementYear);
  setText("sideFireRequiredAssets", yen.format(requiredAssets));
  setText("sideFireShortage", yen.format(shortage));
  setText("sideFireRequiredMonthly", yen.format(requiredMonthly));
  setText("sideFireSideIncomeEffect", `${sideIncomeShortening.toFixed(1)}\u5e74`);
  setText("sideFireDividendEffect", `${yen.format(dividendEffect)}\u5206\u306e\u5fc5\u8981\u8cc7\u7523\u3092\u5727\u7e2e`);
  setText("sideFireRetirementComparison", retirementComparison);
}

function calculateMortgagePayment(principal, annualRate, years) {
  const months = years * 12;
  if (principal <= 0 || months <= 0) {
    return { monthly: 0, total: 0, interest: 0 };
  }

  const monthlyRate = annualRate / 100 / 12;
  const monthly = monthlyRate === 0
    ? principal / months
    : principal * monthlyRate / (1 - (1 + monthlyRate) ** -months);
  const total = monthly * months;

  return {
    monthly,
    total,
    interest: Math.max(total - principal, 0),
  };
}

function renderMortgage() {
  const values = {
    mortgageBorrowing: getFieldValue("mortgageBorrowing"),
    downPayment: getFieldValue("downPayment"),
    mortgageRate: getFieldValue("mortgageRate"),
    mortgageYears: getFieldValue("mortgageYears"),
    prepaymentAmount: getFieldValue("prepaymentAmount"),
    mortgageAnnualIncome: getFieldValue("mortgageAnnualIncome"),
  };
  let hasError = Object.values(values).some((item) => !item.valid);

  if (values.downPayment.valid && values.mortgageBorrowing.valid && values.downPayment.value > values.mortgageBorrowing.value) {
    const input = document.querySelector("#downPayment");
    const error = document.querySelector("#downPaymentError");
    input.setAttribute("aria-invalid", "true");
    error.textContent = "\u982d\u91d1\u306f\u501f\u5165\u91d1\u984d\u4ee5\u4e0b\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002";
    hasError = true;
  }

  if (values.prepaymentAmount.valid && values.mortgageBorrowing.valid && values.downPayment.valid) {
    const principal = Math.max(values.mortgageBorrowing.value - values.downPayment.value, 0);
    if (values.prepaymentAmount.value > principal) {
      const input = document.querySelector("#prepaymentAmount");
      const error = document.querySelector("#prepaymentAmountError");
      input.setAttribute("aria-invalid", "true");
      error.textContent = "\u7e70\u4e0a\u8fd4\u6e08\u984d\u306f\u5b9f\u969b\u306e\u501f\u5165\u5143\u91d1\u4ee5\u4e0b\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002";
      hasError = true;
    }
  }

  document.querySelector("#mortgageNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("mortgageMonthlyPayment", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("mortgageTotalPayment", yen.format(0));
    setText("mortgageInterestTotal", yen.format(0));
    setText("prepaymentEffect", yen.format(0));
    setText("mortgageRetirementImpact", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("repaymentRatio", "0%");
    setText("bonusPaymentGuide", yen.format(0));
    return;
  }

  const principal = Math.max(values.mortgageBorrowing.value - values.downPayment.value, 0);
  const hasBonus = document.querySelector("#bonusRepayment").checked;
  const bonusPrincipal = hasBonus ? principal * 0.2 : 0;
  const monthlyPrincipal = principal - bonusPrincipal;
  const monthlyPlan = calculateMortgagePayment(monthlyPrincipal, values.mortgageRate.value, values.mortgageYears.value);
  const bonusPlan = calculateMortgagePayment(bonusPrincipal, values.mortgageRate.value, values.mortgageYears.value);
  const totalPayment = monthlyPlan.total + bonusPlan.total;
  const interestTotal = monthlyPlan.interest + bonusPlan.interest;
  const afterPrepaymentPrincipal = Math.max(principal - values.prepaymentAmount.value, 0);
  const afterPrepaymentPlan = calculateMortgagePayment(afterPrepaymentPrincipal, values.mortgageRate.value, values.mortgageYears.value);
  const prepaymentEffect = Math.max(interestTotal - afterPrepaymentPlan.interest, 0);
  const annualPayment = totalPayment / values.mortgageYears.value;
  const repaymentRatio = values.mortgageAnnualIncome.value > 0
    ? (annualPayment / values.mortgageAnnualIncome.value) * 100
    : 0;
  const bonusPayment = hasBonus ? bonusPlan.monthly * 6 : 0;
  const retirementImpact = repaymentRatio >= 30
    ? "\u8fd4\u6e08\u6bd4\u7387\u304c\u9ad8\u3081\u3067\u3001\u8001\u5f8c\u8cc7\u91d1\u306e\u7a4d\u7acb\u4f59\u529b\u304c\u5727\u8feb\u3055\u308c\u3084\u3059\u3044\u76ee\u5b89\u3067\u3059"
    : repaymentRatio >= 25
      ? "\u8fd4\u6e08\u6bd4\u7387\u306f\u3084\u3084\u9ad8\u3081\u3067\u3001\u6559\u80b2\u8cbb\u3068\u8001\u5f8c\u8cc7\u91d1\u306e\u540c\u6642\u6e96\u5099\u306b\u6ce8\u610f\u304c\u5fc5\u8981\u3067\u3059"
      : "\u8001\u5f8c\u8cc7\u91d1\u306e\u7a4d\u7acb\u3068\u4e26\u884c\u3057\u3084\u3059\u3044\u8fd4\u6e08\u6bd4\u7387\u306e\u76ee\u5b89\u3067\u3059";

  setText("mortgageMonthlyPayment", yen.format(monthlyPlan.monthly));
  setText("mortgageTotalPayment", yen.format(totalPayment));
  setText("mortgageInterestTotal", yen.format(interestTotal));
  setText("prepaymentEffect", yen.format(prepaymentEffect));
  setText("mortgageRetirementImpact", retirementImpact);
  setText("repaymentRatio", `${repaymentRatio.toFixed(1)}%`);
  setText("bonusPaymentGuide", yen.format(bonusPayment));
}

function currentRoute() {
  const route = window.location.hash.replace("#", "");
  if (route === "side-income" || route === "ai-hourly" || route === "ai-efficiency" || route === "hourly-improvement" || route === "side-time-management" || route === "side-profit-margin" || route === "take-home" || route === "tax" || route === "income-tax" || route === "resident-tax" || route === "nisa" || route === "nisa-withdrawal" || route === "credit-card-investment" || route === "ideco" || route === "dividend" || route === "dividend-etf" || route === "dividend-reinvestment" || route === "dividend-life" || route === "fire" || route === "employee-fire" || route === "cash-flow" || route === "side-fire" || route === "emergency-fund" || route === "fixed-cost-reduction" || route === "retirement" || route === "education" || route === "education-insurance" || route === "mortgage") {
    return route;
  }
  return "top";
}

function renderRoute() {
  const route = currentRoute();
  const seo = routeSeo[route] || routeSeo.top;
  document.title = seo.title;
  descriptionMeta.setAttribute("content", seo.description);
  document.querySelectorAll("[data-view]").forEach((view) => {
    view.classList.toggle("is-active", view.dataset.view === route);
  });
  document.querySelectorAll("[data-route]").forEach((link) => {
    link.setAttribute("aria-current", link.dataset.route === route ? "page" : "false");
  });
}

function renderTopToolSearch() {
  const searchInput = document.querySelector("#topToolSearch");
  const status = document.querySelector("#topToolSearchStatus");
  if (!searchInput || !status) {
    return;
  }

  const query = searchInput.value.trim().toLowerCase();
  const topView = document.querySelector('[data-view="top"]');
  const cards = Array.from(topView.querySelectorAll(".category-section .tool-card"));
  let visibleCount = 0;

  cards.forEach((card) => {
    const text = card.textContent.toLowerCase();
    const href = card.getAttribute("href") || "";
    const visible = !query || text.includes(query) || href.toLowerCase().includes(query);
    card.classList.toggle("is-hidden-by-search", !visible);
    if (visible) {
      visibleCount += 1;
    }
  });

  topView.querySelectorAll(".category-section").forEach((section) => {
    const visibleCards = section.querySelectorAll(".tool-card:not(.is-hidden-by-search)").length;
    section.classList.toggle("is-hidden-by-search", query && visibleCards === 0);
  });

  status.textContent = query
    ? `${visibleCount}個のツールが見つかりました。`
    : `${cards.length}個のツールから検索できます。`;
}

document.querySelector("#sideIncomeForm").addEventListener("input", renderSideIncome);
document.querySelector("#sideIncomeForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderSideIncome);
});
document.querySelector("#aiHourlyForm").addEventListener("input", renderAiHourly);
document.querySelector("#aiHourlyForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderAiHourly);
});
document.querySelector("#aiEfficiencyForm").addEventListener("input", renderAiEfficiency);
document.querySelector("#aiEfficiencyForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderAiEfficiency);
});
document.querySelector("#hourlyImprovementForm").addEventListener("input", renderHourlyImprovement);
document.querySelector("#hourlyImprovementForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderHourlyImprovement);
});
document.querySelector("#sideTimeManagementForm").addEventListener("input", renderSideTimeManagement);
document.querySelector("#sideTimeManagementForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderSideTimeManagement);
});
document.querySelector("#sideProfitMarginForm").addEventListener("input", renderSideProfitMargin);
document.querySelector("#sideProfitMarginForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderSideProfitMargin);
});
document.querySelector("#taxForm").addEventListener("input", renderTax);
document.querySelector("#taxForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderTax);
});
document.querySelector("#residentTaxForm").addEventListener("input", renderResidentTax);
document.querySelector("#residentTaxForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderResidentTax);
});
document.querySelector("#incomeTaxForm").addEventListener("input", renderIncomeTax);
document.querySelector("#incomeTaxForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderIncomeTax);
});
document.querySelector("#takeHomeForm").addEventListener("input", renderTakeHome);
document.querySelector("#takeHomeForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderTakeHome);
});
document.querySelector("#nisaForm").addEventListener("input", renderNisa);
document.querySelector("#nisaForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderNisa);
});
document.querySelector("#nisaWithdrawalForm").addEventListener("input", renderNisaWithdrawal);
document.querySelector("#nisaWithdrawalForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderNisaWithdrawal);
});
document.querySelector("#creditCardInvestmentForm").addEventListener("input", renderCreditCardInvestment);
document.querySelector("#creditCardInvestmentForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderCreditCardInvestment);
});
document.querySelector("#idecoForm").addEventListener("input", renderIdeco);
document.querySelector("#idecoForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderIdeco);
});
document.querySelector("#fireForm").addEventListener("input", renderFire);
document.querySelector("#fireForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderFire);
});
document.querySelector("#retirementForm").addEventListener("input", renderRetirement);
document.querySelector("#retirementForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderRetirement);
});
document.querySelector("#educationForm").addEventListener("input", renderEducation);
document.querySelector("#educationForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderEducation);
});
document.querySelector("#educationInsuranceForm").addEventListener("input", renderEducationInsurance);
document.querySelector("#educationInsuranceForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderEducationInsurance);
});
document.querySelector("#dividendForm").addEventListener("input", renderDividend);
document.querySelector("#dividendForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderDividend);
});
document.querySelector("#dividendEtfForm").addEventListener("input", renderDividendEtf);
document.querySelector("#dividendEtfForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderDividendEtf);
});
document.querySelector("#dividendReinvestmentForm").addEventListener("input", renderDividendReinvestment);
document.querySelector("#dividendReinvestmentForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderDividendReinvestment);
});
document.querySelector("#dividendLifeForm").addEventListener("input", renderDividendLife);
document.querySelector("#dividendLifeForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderDividendLife);
});
document.querySelector("#employeeFireForm").addEventListener("input", renderEmployeeFire);
document.querySelector("#employeeFireForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderEmployeeFire);
});
document.querySelector("#cashFlowForm").addEventListener("input", renderCashFlow);
document.querySelector("#cashFlowForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderCashFlow);
});
document.querySelector("#sideFireForm").addEventListener("input", renderSideFire);
document.querySelector("#sideFireForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderSideFire);
});
document.querySelector("#emergencyFundForm").addEventListener("input", renderEmergencyFund);
document.querySelector("#emergencyFundForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderEmergencyFund);
});
document.querySelector("#fixedCostForm").addEventListener("input", renderFixedCostReduction);
document.querySelector("#fixedCostForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderFixedCostReduction);
});
document.querySelector("#mortgageForm").addEventListener("input", renderMortgage);
document.querySelector("#mortgageForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderMortgage);
});
document.querySelector("#topToolSearch").addEventListener("input", renderTopToolSearch);
window.addEventListener("hashchange", renderRoute);

renderSideIncome();
renderAiHourly();
renderAiEfficiency();
renderHourlyImprovement();
renderSideTimeManagement();
renderSideProfitMargin();
renderTax();
renderResidentTax();
renderIncomeTax();
renderTakeHome();
renderNisa();
renderNisaWithdrawal();
renderCreditCardInvestment();
renderIdeco();
renderFire();
renderRetirement();
renderEducation();
renderEducationInsurance();
renderDividend();
renderDividendEtf();
renderDividendReinvestment();
renderDividendLife();
renderEmployeeFire();
renderCashFlow();
renderSideFire();
renderEmergencyFund();
renderFixedCostReduction();
renderMortgage();
renderTopToolSearch();
renderRoute();

~~~

### dividend-etf.html

~~~html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="W8lV0ZXsiS6lCYIRGsdxAnk8X0vIfJix8UBz6ie2gnc" />
    <meta http-equiv="refresh" content="0; url=index.html#dividend-etf">
    <meta name="description" content="初期投資額、毎月積立額、ETF選択、想定配当利回り、想定株価成長率、運用年数、配当再投資有無、新NISA利用有無から、年間配当金、累計配当金、最終資産額、ETF別比較を試算できます。">
    <title>【2026年対応】初心者向け配当ETF比較シミュレーター｜3分で高配当ETF比較</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <main>
      <div class="app-shell">
        <p><a href="index.html#dividend-etf">配当ETF比較シミュレーターを開く</a></p>
        <footer class="site-footer">
          <nav class="footer-links" aria-label="サイト情報">
            <a href="index.html#top">トップ</a>
            <a href="index.html#dividend">配当金</a>
            <a href="index.html#dividend-etf">配当ETF比較</a>
            <a href="index.html#dividend-reinvestment">配当再投資</a>
            <a href="index.html#nisa">新NISA</a>
            <a href="index.html#fire">FIRE達成</a>
            <a href="privacy.html">プライバシーポリシー</a>
            <a href="disclaimer.html">免責事項</a>
            <a href="contact.html">お問い合わせ</a>
            <a href="operator.html">運営者情報</a>
          </nav>
          <p>&copy; 資産シミュレーター</p>
        </footer>
      </div>
    </main>
  </body>
</html>

~~~

### category-investment.html

~~~html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="新NISA、NISA取り崩し、クレカ積立、iDeCo、配当金、配当ETF比較、配当再投資、配当生活達成、証券口座比較をまとめた投資カテゴリページです。">
    <title>【2026年対応】初心者向け投資カテゴリ｜新NISA・iDeCoなど8ツール</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <main>
      <div class="app-shell content-page">
        <header class="header">
          <h1>投資カテゴリ</h1>
          <p class="lead">資産形成に使う投資系ツールと記事をまとめています。新NISA、NISA取り崩し、クレカ積立、iDeCo、配当金、配当ETF比較、配当再投資、配当生活達成を比較しながら、目的に合う使い方を確認できます。</p>
          <nav class="tool-nav" aria-label="カテゴリリンク">
            <a href="index.html#top">トップ</a>
            <a href="category-side-business.html">副業</a>
            <a href="category-tax.html">税金</a>
            <a href="category-investment.html">投資</a>
            <a href="category-fire.html">FIRE</a>
            <a href="category-housing.html">住宅</a>
            <a href="category-education.html">教育</a>
            <a href="category-retirement.html">老後</a>
          </nav>
        </header>
        <section class="content-panel">
          <h2>関連ツール</h2>
          <p>積立投資、節税、配当、再投資の目安を確認できます。</p>
          <div class="article-list">
            <a class="article-link" href="index.html#nisa">
              <strong>新NISA・積立投資シミュレーター</strong>
              <span>積立額と将来資産を確認</span>
            </a>
            <a class="article-link" href="index.html#nisa-withdrawal">
              <strong>NISA取り崩しシミュレーター</strong>
              <span>老後に何年取り崩せるかを確認</span>
            </a>
            <a class="article-link" href="index.html#credit-card-investment">
              <strong>クレカ積立比較シミュレーター</strong>
              <span>ポイント還元と通常積立との差を確認</span>
            </a>
            <a class="article-link" href="index.html#ideco">
              <strong>iDeCo節税シミュレーター</strong>
              <span>節税額と将来資産を試算</span>
            </a>
            <a class="article-link" href="index.html#dividend">
              <strong>配当金シミュレーター</strong>
              <span>年間配当金と累計配当金を確認</span>
            </a>
            <a class="article-link" href="index.html#dividend-etf">
              <strong>配当ETF比較シミュレーター</strong>
              <span>高配当ETFごとの配当収入と資産成長を比較</span>
            </a>
            <a class="article-link" href="index.html#dividend-reinvestment">
              <strong>配当再投資シミュレーター</strong>
              <span>配当再投資による資産成長を確認</span>
            </a>
            <a class="article-link" href="index.html#dividend-life">
              <strong>配当生活達成シミュレーター</strong>
              <span>生活費を配当でまかなう必要資産を確認</span>
            </a>
          </div>
          <h2>関連記事</h2>
          <p>制度の始め方、証券口座、配当やFIREにつながる記事へ移動できます。</p>
          <div class="article-list">
            <a class="article-link" href="article-new-nisa-start.html">
              <strong>新NISAの始め方</strong>
              <span>新NISAの基本と積立額の決め方</span>
            </a>
            <a class="article-link" href="article-ideco-start.html">
              <strong>iDeCoの始め方</strong>
              <span>節税効果と新NISAとの使い分け</span>
            </a>
            <a class="article-link" href="article-rakuten-sbi-securities-comparison.html">
              <strong>楽天証券 vs SBI証券 完全比較</strong>
              <span>新NISA、クレカ積立、高配当投資を比較</span>
            </a>
            <a class="article-link" href="article-securities-account-comparison.html">
              <strong>初心者向けおすすめ証券口座比較</strong>
              <span>証券口座の選び方を比較</span>
            </a>
            <a class="article-link" href="article-fire-strategy.html">
              <strong>FIRE達成の基本戦略</strong>
              <span>投資と目標資産の考え方</span>
            </a>
          </div>
          <h2>関連カテゴリ</h2>
          <p>近いテーマのカテゴリも合わせて確認すると、収入、税金、投資、ライフプランのつながりを見やすくなります。</p>
          <div class="related-links">
            <a href="category-fire.html">FIREカテゴリ</a>
            <a href="category-retirement.html">老後カテゴリ</a>
            <a href="category-side-business.html">副業カテゴリ</a>
          </div>
        </section>
      </div>
    </main>
  </body>
</html>

~~~

### sitemap.xml

~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://side-income-simulator.vercel.app/</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/side-income.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/ai-hourly.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/ai-efficiency.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/hourly-improvement.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/side-time-management.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/side-profit-margin.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/take-home.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/tax.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/income-tax.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/resident-tax.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/nisa.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/nisa-withdrawal.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/credit-card-investment.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/ideco.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/dividend.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/dividend-etf.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/dividend-reinvestment.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/dividend-life.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/fire.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/employee-fire.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/cash-flow.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/side-fire.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/emergency-fund.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/fixed-cost-reduction.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/retirement.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/education.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/education-insurance.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/mortgage.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/category-side-business.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/category-tax.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/category-investment.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/category-fire.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/category-housing.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/category-education.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/category-retirement.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/article-side-income.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/article-fire-strategy.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/article-side-tax.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/article-ai-side-business.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/article-side-income-50000.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/article-side-income-100000.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/article-resident-tax-guide.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/article-income-tax-guide.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/article-blue-return-start.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/article-company-side-tax-saving.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/article-fire-basic.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/article-new-nisa-start.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/article-ideco-start.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/article-retirement-2000.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/article-rakuten-sbi-securities-comparison.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/article-securities-account-comparison.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/article-accounting-software-comparison.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/article-credit-card-comparison.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/article-ai-tools-comparison.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/privacy.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/disclaimer.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/contact.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/operator.html</loc>
  </url>
</urlset>

~~~

