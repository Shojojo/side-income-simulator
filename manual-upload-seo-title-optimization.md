# SEOタイトル最適化 手動アップロード用

## 変更内容
- 全HTMLのtitleを「2026年対応」「初心者向け」「数字入り」のSEO向けタイトルへ変更
- SPA表示用のscript.js内 routeSeo.title も同じ方針へ変更
- index.html のscript.jsキャッシュバージョンを更新

## 変更ファイル一覧
- script.js
- ai-hourly.html
- article-accounting-software-comparison.html
- article-ai-side-business.html
- article-ai-tools-comparison.html
- article-blue-return-start.html
- article-company-side-tax-saving.html
- article-credit-card-comparison.html
- article-fire-basic.html
- article-fire-strategy.html
- article-ideco-start.html
- article-income-tax-guide.html
- article-new-nisa-start.html
- article-resident-tax-guide.html
- article-retirement-2000.html
- article-securities-account-comparison.html
- article-side-income-100000.html
- article-side-income-50000.html
- article-side-income.html
- article-side-tax.html
- category-education.html
- category-fire.html
- category-housing.html
- category-investment.html
- category-retirement.html
- category-side-business.html
- category-tax.html
- contact.html
- credit-card-investment.html
- disclaimer.html
- dividend-reinvestment.html
- dividend.html
- education-insurance.html
- education.html
- emergency-fund.html
- employee-fire.html
- fire.html
- ideco.html
- income-tax.html
- index.html
- mortgage.html
- nisa.html
- operator.html
- privacy.html
- resident-tax.html
- retirement.html
- side-fire.html
- side-income.html
- side-profit-margin.html
- take-home.html
- tax.html

## アップロード手順
1. GitHub の対象リポジトリで各ファイルを開きます。
2. 下の完全内容で同名ファイルを置き換えます。
3. すべて反映後、Vercel のデプロイ完了を確認します。

## script.js

````javascript
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

const seoDescription = "\u526f\u696d\u6708\u53ce\u3001AI\u526f\u696d\u6642\u7d66\u3001\u526f\u696d\u5229\u76ca\u7387\u3001\u526f\u696d\u624b\u53d6\u308a\u3001\u526f\u696d\u6240\u5f97\u7a0e\u3001\u526f\u696d\u4f4f\u6c11\u7a0e\u3001\u65b0NISA\u30fb\u7a4d\u7acb\u6295\u8cc7\u3001\u30af\u30ec\u30ab\u7a4d\u7acb\u6bd4\u8f03\u3001iDeCo\u7bc0\u7a0e\u3001\u914d\u5f53\u91d1\u3001\u914d\u5f53\u518d\u6295\u8cc7\u3001FIRE\u9054\u6210\u3001\u4f1a\u793e\u54e1FIRE\u3001\u30b5\u30a4\u30c9FIRE\u3001\u751f\u6d3b\u9632\u885b\u8cc7\u91d1\u3001\u8001\u5f8c\u8cc7\u91d1\u3001\u6559\u80b2\u8cbb\u3001\u5b66\u8cc7\u4fdd\u967a\u6bd4\u8f03\u3001\u4f4f\u5b85\u30ed\u30fc\u30f3\u3001\u526f\u696d\u7a0e\u91d1\u30fb\u9752\u8272\u7533\u544a\u3092\u307e\u3068\u3081\u3066\u8a66\u7b97\u3067\u304d\u308b\u30b9\u30de\u30db\u5bfe\u5fdc\u306e\u8cc7\u7523\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u3067\u3059\u3002";
const descriptionMeta = document.querySelector('meta[name="description"]') || document.createElement("meta");
descriptionMeta.setAttribute("name", "description");
descriptionMeta.setAttribute("content", seoDescription);
document.head.appendChild(descriptionMeta);

const routeSeo = {
  top: {
    title: "【2026年対応】初心者向け資産シミュレーター20選｜副業・税金・FIRE計算",
    description: seoDescription,
  },
  "side-income": {
    title: "【2026年対応】初心者向け副業月収シミュレーター｜3分で収入計算",
    description: "\u6642\u7d66\u3001\u4f5c\u696d\u6642\u9593\u3001\u6848\u4ef6\u6570\u3001\u7a0e\u7387\u304b\u3089\u526f\u696d\u306e\u6708\u53ce\u30fb\u5e74\u53ce\u30fb\u7a0e\u5f15\u5f8c\u306e\u624b\u53d6\u308a\u76ee\u5b89\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  "ai-hourly": {
    title: "【2026年対応】初心者向けAI副業時給シミュレーター｜3分で効率計算",
    description: "\u6848\u4ef6\u5358\u4fa1\u3001\u4f5c\u696d\u6642\u9593\u3001\u6708\u6848\u4ef6\u6570\u304b\u3089AI\u526f\u696d\u306e\u6642\u7d66\u3001\u6708\u53ce\u3001AI\u6d3b\u7528\u6642\u306e\u52b9\u7387\u6539\u5584\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
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
  dividend: {
    title: "【2026年対応】初心者向け配当金シミュレーター｜3分で年間配当計算",
    description: "\u521d\u671f\u6295\u8cc7\u984d\u3001\u6bce\u6708\u8ffd\u52a0\u6295\u8cc7\u984d\u3001\u60f3\u5b9a\u914d\u5f53\u5229\u56de\u308a\u3001\u904b\u7528\u5e74\u6570\u3001\u914d\u5f53\u518d\u6295\u8cc7\u6709\u7121\u304b\u3089\u5e74\u9593\u914d\u5f53\u91d1\u3001\u7d2f\u8a08\u914d\u5f53\u91d1\u3001\u6700\u7d42\u8cc7\u7523\u984d\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  "dividend-reinvestment": {
    title: "【2026年対応】初心者向け配当再投資シミュレーター｜3分で複利計算",
    description: "\u521d\u671f\u6295\u8cc7\u984d\u3001\u6bce\u6708\u8ffd\u52a0\u6295\u8cc7\u984d\u3001\u60f3\u5b9a\u914d\u5f53\u5229\u56de\u308a\u3001\u60f3\u5b9a\u682a\u4fa1\u6210\u9577\u7387\u3001\u904b\u7528\u5e74\u6570\u3001\u914d\u5f53\u518d\u6295\u8cc7\u6709\u7121\u304b\u3089\u6700\u7d42\u8cc7\u7523\u984d\u3001\u7d2f\u8a08\u914d\u5f53\u91d1\u3001\u518d\u6295\u8cc7\u306b\u3088\u308b\u5897\u52a0\u984d\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  "side-fire": {
    title: "【2026年対応】初心者向けサイドFIREシミュレーター｜3分で必要資産計算",
    description: "\u73fe\u5728\u306e\u5e74\u9f62\u3001FIRE\u76ee\u6a19\u5e74\u9f62\u3001\u73fe\u5728\u8cc7\u7523\u3001\u6bce\u6708\u7a4d\u7acb\u984d\u3001\u60f3\u5b9a\u5e74\u5229\u3001\u6bce\u6708\u751f\u6d3b\u8cbb\u3001\u526f\u696d\u6708\u53ce\u3001\u914d\u5f53\u53ce\u5165\u304b\u3089\u30b5\u30a4\u30c9FIRE\u9054\u6210\u53ef\u80fd\u6027\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  "emergency-fund": {
    title: "【2026年対応】初心者向け生活防衛資金シミュレーター｜3分で必要額計算",
    description: "\u6bce\u6708\u751f\u6d3b\u8cbb\u3001\u5bb6\u65cf\u4eba\u6570\u3001\u96c7\u7528\u5f62\u614b\u3001\u73fe\u5728\u8caf\u84c4\u984d\u3001\u5931\u696d\u6642\u60f3\u5b9a\u671f\u9593\u3001\u526f\u696d\u53ce\u5165\u6709\u7121\u304b\u3089\u5fc5\u8981\u306a\u751f\u6d3b\u9632\u885b\u8cc7\u91d1\u3068\u4e0d\u8db3\u984d\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
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
          <a href="#side-profit-margin" data-route="side-profit-margin">&#x526f;&#x696d;&#x5229;&#x76ca;&#x7387;</a>
          <a href="#take-home" data-route="take-home">&#x526f;&#x696d;&#x624b;&#x53d6;&#x308a;</a>
          <a href="#tax" data-route="tax">&#x7a0e;&#x91d1;&#x30fb;&#x9752;&#x8272;&#x7533;&#x544a;</a>
          <a href="#income-tax" data-route="income-tax">&#x526f;&#x696d;&#x6240;&#x5f97;&#x7a0e;</a>
          <a href="#resident-tax" data-route="resident-tax">&#x526f;&#x696d;&#x4f4f;&#x6c11;&#x7a0e;</a>
          <a href="#nisa" data-route="nisa">&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;</a>
          <a href="#credit-card-investment" data-route="credit-card-investment">&#x30af;&#x30ec;&#x30ab;&#x7a4d;&#x7acb;</a>
          <a href="#ideco" data-route="ideco">iDeCo&#x7bc0;&#x7a0e;</a>
          <a href="#dividend" data-route="dividend">&#x914d;&#x5f53;&#x91d1;</a>
          <a href="#dividend-reinvestment" data-route="dividend-reinvestment">&#x914d;&#x5f53;&#x518d;&#x6295;&#x8cc7;</a>
          <a href="#fire" data-route="fire">FIRE&#x9054;&#x6210;</a>
          <a href="#employee-fire" data-route="employee-fire">&#x4f1a;&#x793e;&#x54e1;FIRE</a>
          <a href="#side-fire" data-route="side-fire">&#x30b5;&#x30a4;&#x30c9;FIRE</a>
          <a href="#emergency-fund" data-route="emergency-fund">&#x751f;&#x6d3b;&#x9632;&#x885b;&#x8cc7;&#x91d1;</a>
          <a href="#retirement" data-route="retirement">&#x8001;&#x5f8c;&#x8cc7;&#x91d1;</a>
          <a href="#education" data-route="education">&#x6559;&#x80b2;&#x8cbb;</a>
          <a href="#education-insurance" data-route="education-insurance">&#x5b66;&#x8cc7;&#x4fdd;&#x967a;</a>
          <a href="#mortgage" data-route="mortgage">&#x4f4f;&#x5b85;&#x30ed;&#x30fc;&#x30f3;</a>
        </nav>
      </header>

      <section class="view" data-view="top" aria-label="&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;&#x4e00;&#x89a7;">
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
              <span>新NISA、iDeCo、配当金、証券口座比較へ移動</span>
            </a>
            <a class="article-link" href="category-fire.html">
              <strong>FIREカテゴリ</strong>
              <span>FIRE、会社員FIRE、サイドFIRE、配当再投資を整理</span>
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
            <li><a href="#side-profit-margin"><strong>&#x526f;&#x696d;&#x5229;&#x76ca;&#x7387;</strong><span>&#x58f2;&#x4e0a;&#x30fb;&#x7d4c;&#x8cbb;&#x30fb;&#x4f5c;&#x696d;&#x6642;&#x9593;&#x304b;&#x3089;&#x5229;&#x76ca;&#x7387;&#x3092;&#x5206;&#x6790;</span></a></li>
            <li><a href="#take-home"><strong>&#x526f;&#x696d;&#x624b;&#x53d6;&#x308a;</strong><span>&#x7a0e;&#x91d1;&#x5f8c;&#x306e;&#x624b;&#x5143;&#x306b;&#x6b8b;&#x308b;&#x91d1;&#x984d;&#x3092;&#x8a66;&#x7b97;</span></a></li>
            <li><a href="#income-tax"><strong>&#x526f;&#x696d;&#x6240;&#x5f97;&#x7a0e;</strong><span>&#x6240;&#x5f97;&#x7a0e;&#x3068;&#x5fa9;&#x8208;&#x7279;&#x5225;&#x6240;&#x5f97;&#x7a0e;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#resident-tax"><strong>&#x526f;&#x696d;&#x4f4f;&#x6c11;&#x7a0e;</strong><span>&#x666e;&#x901a;&#x5fb4;&#x53ce;&#x306e;&#x6ce8;&#x610f;&#x70b9;&#x3068;&#x7a0e;&#x984d;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#nisa"><strong>&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;</strong><span>&#x7a4d;&#x7acb;&#x306e;&#x5c06;&#x6765;&#x984d;&#x3068;&#x904b;&#x7528;&#x76ca;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#credit-card-investment"><strong>&#x30af;&#x30ec;&#x30ab;&#x7a4d;&#x7acb;&#x6bd4;&#x8f03;</strong><span>&#x30dd;&#x30a4;&#x30f3;&#x30c8;&#x9084;&#x5143;&#x3068;&#x901a;&#x5e38;&#x7a4d;&#x7acb;&#x306e;&#x5dee;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#ideco"><strong>iDeCo&#x7bc0;&#x7a0e;</strong><span>&#x6bce;&#x6708;&#x306e;&#x639b;&#x91d1;&#x304b;&#x3089;&#x7bc0;&#x7a0e;&#x984d;&#x3068;&#x5c06;&#x6765;&#x8cc7;&#x7523;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#dividend"><strong>&#x914d;&#x5f53;&#x91d1;</strong><span>&#x5e74;&#x9593;&#x914d;&#x5f53;&#x91d1;&#x3068;&#x6708;&#x5e73;&#x5747;&#x914d;&#x5f53;&#x91d1;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#dividend-reinvestment"><strong>&#x914d;&#x5f53;&#x518d;&#x6295;&#x8cc7;</strong><span>&#x914d;&#x5f53;&#x3092;&#x518d;&#x6295;&#x8cc7;&#x3057;&#x305f;&#x5834;&#x5408;&#x306e;&#x8cc7;&#x7523;&#x6210;&#x9577;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#fire"><strong>FIRE&#x9054;&#x6210;</strong><span>&#x76ee;&#x6a19;&#x8cc7;&#x7523;&#x307e;&#x3067;&#x306e;&#x5e74;&#x6570;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#employee-fire"><strong>&#x4f1a;&#x793e;&#x54e1;FIRE</strong><span>&#x7a4d;&#x7acb;&#x3001;&#x526f;&#x696d;&#x3001;&#x914d;&#x5f53;&#x3092;&#x542b;&#x3081;&#x3066;&#x9054;&#x6210;&#x5e74;&#x6570;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#side-fire"><strong>&#x30b5;&#x30a4;&#x30c9;FIRE</strong><span>&#x526f;&#x696d;&#x53ce;&#x5165;&#x3068;&#x914d;&#x5f53;&#x53ce;&#x5165;&#x3092;&#x542b;&#x3081;&#x3066;&#x9054;&#x6210;&#x53ef;&#x80fd;&#x6027;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#emergency-fund"><strong>&#x751f;&#x6d3b;&#x9632;&#x885b;&#x8cc7;&#x91d1;</strong><span>&#x6295;&#x8cc7;&#x3084;FIRE&#x306e;&#x524d;&#x306b;&#x78ba;&#x4fdd;&#x3057;&#x305f;&#x3044;&#x5b89;&#x5168;&#x8cc7;&#x91d1;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#retirement"><strong>&#x8001;&#x5f8c;&#x8cc7;&#x91d1;</strong><span>&#x9000;&#x8077;&#x6642;&#x8cc7;&#x7523;&#x3068;&#x4e0d;&#x8db3;&#x984d;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#education-insurance"><strong>&#x5b66;&#x8cc7;&#x4fdd;&#x967a;&#x6bd4;&#x8f03;</strong><span>&#x5b66;&#x8cc7;&#x4fdd;&#x967a;&#x3068;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;&#x306e;&#x53d7;&#x53d6;&#x984d;&#x3092;&#x6bd4;&#x8f03;</span></a></li>
            <li><a href="#mortgage"><strong>&#x4f4f;&#x5b85;&#x30ed;&#x30fc;&#x30f3;</strong><span>&#x6bce;&#x6708;&#x8fd4;&#x6e08;&#x984d;&#x3068;&#x5e74;&#x53ce;&#x306b;&#x5bfe;&#x3059;&#x308b;&#x8fd4;&#x6e08;&#x6bd4;&#x7387;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
          </ol>
        </section>

        <section class="article-panel" aria-label="&#x304a;&#x3059;&#x3059;&#x3081;&#x8a18;&#x4e8b;">
          <section class="tool-heading">
            <h2>&#x304a;&#x3059;&#x3059;&#x3081;&#x8a18;&#x4e8b;</h2>
            <p>&#x30c4;&#x30fc;&#x30eb;&#x306e;&#x7d50;&#x679c;&#x3092;&#x3001;&#x526f;&#x696d;&#x30fb;&#x7a0e;&#x91d1;&#x30fb;FIRE&#x30fb;AI&#x6d3b;&#x7528;&#x306e;&#x5b9f;&#x884c;&#x306b;&#x3064;&#x306a;&#x3052;&#x308b;&#x305f;&#x3081;&#x306e;&#x30ac;&#x30a4;&#x30c9;&#x3067;&#x3059;&#x3002;</p>
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
          <a href="#side-profit-margin">&#x526f;&#x696d;&#x5229;&#x76ca;&#x7387;</a>
          <a href="#take-home">&#x526f;&#x696d;&#x624b;&#x53d6;&#x308a;</a>
          <a href="#tax">&#x7a0e;&#x91d1;&#x30fb;&#x9752;&#x8272;&#x7533;&#x544a;</a>
          <a href="#income-tax">&#x526f;&#x696d;&#x6240;&#x5f97;&#x7a0e;</a>
          <a href="#resident-tax">&#x526f;&#x696d;&#x4f4f;&#x6c11;&#x7a0e;</a>
          <a href="#nisa">&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;</a>
          <a href="#credit-card-investment">&#x30af;&#x30ec;&#x30ab;&#x7a4d;&#x7acb;</a>
          <a href="#ideco">iDeCo&#x7bc0;&#x7a0e;</a>
          <a href="#dividend">&#x914d;&#x5f53;&#x91d1;</a>
          <a href="#dividend-reinvestment">&#x914d;&#x5f53;&#x518d;&#x6295;&#x8cc7;</a>
          <a href="#fire">FIRE&#x9054;&#x6210;</a>
          <a href="#employee-fire">&#x4f1a;&#x793e;&#x54e1;FIRE</a>
            <a href="#side-fire">&#x30b5;&#x30a4;&#x30c9;FIRE</a>
            <a href="#emergency-fund">&#x751f;&#x6d3b;&#x9632;&#x885b;&#x8cc7;&#x91d1;</a>
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
  emergencyMonthlyCost: { label: "\u6bce\u6708\u751f\u6d3b\u8cbb", min: 0, max: 100000000, unit: "\u5186", integer: false },
  familyCount: { label: "\u5bb6\u65cf\u4eba\u6570", min: 1, max: 20, unit: "\u4eba", integer: true },
  emergencySavings: { label: "\u73fe\u5728\u8caf\u84c4\u984d", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  unemploymentMonths: { label: "\u5931\u696d\u6642\u60f3\u5b9a\u671f\u9593", min: 1, max: 60, unit: "\u304b\u6708", integer: true },
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
  if (route === "side-income" || route === "ai-hourly" || route === "side-profit-margin" || route === "take-home" || route === "tax" || route === "income-tax" || route === "resident-tax" || route === "nisa" || route === "credit-card-investment" || route === "ideco" || route === "dividend" || route === "dividend-reinvestment" || route === "fire" || route === "employee-fire" || route === "side-fire" || route === "emergency-fund" || route === "retirement" || route === "education" || route === "education-insurance" || route === "mortgage") {
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

document.querySelector("#sideIncomeForm").addEventListener("input", renderSideIncome);
document.querySelector("#sideIncomeForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderSideIncome);
});
document.querySelector("#aiHourlyForm").addEventListener("input", renderAiHourly);
document.querySelector("#aiHourlyForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderAiHourly);
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
document.querySelector("#dividendReinvestmentForm").addEventListener("input", renderDividendReinvestment);
document.querySelector("#dividendReinvestmentForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderDividendReinvestment);
});
document.querySelector("#employeeFireForm").addEventListener("input", renderEmployeeFire);
document.querySelector("#employeeFireForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderEmployeeFire);
});
document.querySelector("#sideFireForm").addEventListener("input", renderSideFire);
document.querySelector("#sideFireForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderSideFire);
});
document.querySelector("#emergencyFundForm").addEventListener("input", renderEmergencyFund);
document.querySelector("#emergencyFundForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderEmergencyFund);
});
document.querySelector("#mortgageForm").addEventListener("input", renderMortgage);
document.querySelector("#mortgageForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderMortgage);
});
window.addEventListener("hashchange", renderRoute);

renderSideIncome();
renderAiHourly();
renderSideProfitMargin();
renderTax();
renderResidentTax();
renderIncomeTax();
renderTakeHome();
renderNisa();
renderCreditCardInvestment();
renderIdeco();
renderFire();
renderRetirement();
renderEducation();
renderEducationInsurance();
renderDividend();
renderDividendReinvestment();
renderEmployeeFire();
renderSideFire();
renderEmergencyFund();
renderMortgage();
renderRoute();

````

## ai-hourly.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="W8lV0ZXsiS6lCYIRGsdxAnk8X0vIfJix8UBz6ie2gnc" />
    <meta http-equiv="refresh" content="0; url=index.html#ai-hourly">
    <meta name="description" content="案件単価、作業時間、月案件数からAI副業の時給、月収、AI活用時の効率改善を試算できます。">
    <title>【2026年対応】初心者向けAI副業時給シミュレーター｜3分で効率計算</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <main>
      <div class="app-shell">
        <p><a href="index.html#ai-hourly">AI副業時給シミュレーターを開く</a></p>
      </div>
    </main>
  </body>
</html>

````

## article-accounting-software-comparison.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="副業の確定申告に使いやすい会計ソフトを、入力のしやすさ、銀行連携、青色申告、料金、スマホ対応で比較します。">
    <title>【2026年対応】初心者向け副業会計ソフト比較｜5項目で選ぶ</title>
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
          <h1>副業向けおすすめ会計ソフト比較</h1>
          <p class="lead">副業の会計ソフトは、料金だけでなく、取引入力のしやすさ、証憑管理、青色申告への対応、税金シミュレーターとの相性で選ぶと失敗しにくくなります。</p>
          <nav class="tool-nav" aria-label="関連リンク">
            <a href="index.html#tax">副業税金</a>
            <a href="index.html#income-tax">所得税</a>
            <a href="index.html#resident-tax">住民税</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="article-blue-return-start.html">青色申告の始め方</a>
            <a href="article-company-side-tax-saving.html">会社員の副業税金対策</a>
          </nav>
        </header>
        <section class="content-panel">
          <p>副業で売上が増えると、避けて通れないのが帳簿づけと確定申告です。最初はスプレッドシートでも管理できますが、売上先が増え、経費の種類が増え、クレジットカードや銀行口座の明細が増えると、手作業だけではミスが起きやすくなります。会計ソフトを使うと、取引の自動取り込み、仕訳候補、レシート保存、申告書作成まで一つの流れで管理しやすくなります。</p>
          <p>この記事では、副業向けの会計ソフトとして、freee会計、マネーフォワード クラウド確定申告、やよいの青色申告オンライン、Taxnote、スプレッドシート管理を比較します。料金プランや機能は変更されるため、申し込み前に公式ページで最新情報を確認してください。</p>
          <h2>副業会計ソフトを選ぶ基準</h2>
          <p>副業向け会計ソフトは、税理士向けの高度な機能よりも、日々の入力が続くかどうかが重要です。確定申告は年に一度ですが、帳簿づけは毎月の習慣です。毎月まとめて入力する人、スマホでレシートを撮る人、銀行やカード明細を自動連携したい人など、使い方によって合うソフトは変わります。</p>
          <h3>青色申告をするかどうか</h3>
          <p>青色申告を検討している人は、複式簿記、貸借対照表、損益計算書、電子申告、控除に必要な書類作成に対応しているかを確認しましょう。青色申告は節税メリットがある一方で、帳簿の整備が必要です。副業所得が伸びてきたら、会計ソフトを早めに導入して記録の抜けを減らす方が安心です。</p>
          <h3>銀行・カード連携</h3>
          <p>副業用の銀行口座やクレジットカードを分けておくと、会計ソフトの自動連携が効きやすくなります。事業と生活費が混ざった明細を後から分けるのは手間がかかります。副業向けクレジットカード比較の記事も参考にしながら、支払い導線を整理しておくと、確定申告前の負担を減らせます。</p>
          <h2>会計ソフト比較表</h2>
          <div class="comparison-table" role="region" aria-label="副業向け会計ソフト比較表" tabindex="0">
            <table>
              <thead><tr><th>サービス</th><th>向いている人</th><th>強み</th><th>注意点</th><th>副業での使い方</th></tr></thead>
              <tbody>
                <tr><td>freee会計</td><td>簿記が苦手で質問形式に近い入力を好む人</td><td>入力導線が分かりやすく、スマホ操作もしやすい</td><td>細かい仕訳を自分で管理したい人は慣れが必要</td><td>レシート、銀行、カードをまとめて管理</td></tr>
                <tr><td>マネーフォワード クラウド確定申告</td><td>銀行・カード・家計管理との連携を重視する人</td><td>明細連携と自動仕訳の活用幅が広い</td><td>連携サービスが多いほど初期設定を丁寧に行う必要</td><td>副業用口座とカードを連携して月次確認</td></tr>
                <tr><td>やよいの青色申告オンライン</td><td>定番ソフトの安心感やサポートを重視する人</td><td>申告ソフトとしての知名度と導入しやすさ</td><td>プランごとのサポート範囲を確認する</td><td>青色申告の帳簿作成を落ち着いて進める</td></tr>
                <tr><td>Taxnote</td><td>スマホで簡単に収支を記録したい人</td><td>シンプルで入力の心理的負担が少ない</td><td>高度な自動化や申告書作成範囲は確認が必要</td><td>小規模副業の収支メモから始める</td></tr>
                <tr><td>スプレッドシート</td><td>売上・経費が少なく低コストで始めたい人</td><td>自由度が高く費用を抑えられる</td><td>申告書作成や仕訳判断は自分で行う必要</td><td>初期の収支管理、会計ソフト導入前の整理</td></tr>
              </tbody>
            </table>
          </div>
          <h2>副業規模別の選び方</h2>
          <p>月数万円規模の副業なら、最初は売上、経費、入金日、支払日、取引先を漏れなく記録することが優先です。会計ソフトの高度な機能を使いこなすより、毎月の記録を止めないことが大切です。副業で月5万円を目指す段階では、領収書を残し、カード明細を事業用に分け、納税資金を別口座に置くところから始めましょう。</p>
          <p>月10万円以上を目指す段階では、取引数が増えやすく、経費の判断や青色申告の有無が手取りに影響します。副業所得税シミュレーター、住民税シミュレーター、副業手取り計算を使うと、売上が増えたときの税負担を把握しやすくなります。会計ソフトは、税金を減らす魔法ではなく、正しく計算するための土台です。</p>
          <h3>会計ソフト導入前にやること</h3>
          <p>まず、副業専用の銀行口座と支払い手段を決めます。次に、売上入金、経費支払い、領収書保存、請求書発行の流れを決めます。最後に、会計ソフトへ連携する明細を絞ります。生活費のカードをそのまま連携すると、プライベート支出の除外作業が増えます。小さな副業でも、入口の設計を整えるだけで記帳はかなり楽になります。</p>
          <h2>税金シミュレーターとの使い分け</h2>
          <p>会計ソフトは実際の帳簿や申告書を作るためのものです。一方、このサイトの副業税金シミュレーター、所得税シミュレーター、住民税シミュレーターは、売上や経費を入力して概算の税負担をつかむためのものです。会計ソフトで実績を整理し、シミュレーターで今後の納税資金や手取りを見積もると、資金繰りの不安を減らせます。</p>
          <h2>会計ソフト導入で失敗しやすい点</h2>
          <p>よくある失敗は、確定申告の直前に会計ソフトを入れて、1年分の明細をまとめて整理しようとすることです。取引の目的、領収書の有無、事業との関連性は、時間が経つほど思い出しにくくなります。特に副業は、本業の忙しさで記録が後回しになりがちです。毎月末に30分だけでも、売上、入金、経費、未払い、領収書を確認する習慣を作ると、申告前の負担が大きく減ります。</p>
          <p>もう一つの失敗は、会計ソフトの自動仕訳を完全に信じてしまうことです。自動連携は便利ですが、科目の判断、家事按分、事業用と私用の区分は利用者側の確認が必要です。例えば通信費、家賃、電気代、スマホ代は、副業に使った割合をどう考えるかで処理が変わります。自動化は作業を減らすための補助であり、判断まで丸投げできるものではありません。</p>
          <h3>毎月のチェックリスト</h3>
          <p>副業会計では、月末に売上の入金漏れ、請求書の発行漏れ、経費の領収書、カード明細、銀行残高、納税資金を確認します。会計ソフトに入力した数字を副業手取り計算シミュレーターに入れると、税引後の手元資金が見えます。所得税と住民税は後から発生するため、売上が入った時点で一部を納税用に分けておくと安心です。</p>
          <h2>税理士に相談するタイミング</h2>
          <p>副業が小さいうちは自分で管理できても、売上が増え、外注費、在庫、減価償却、家事按分、消費税、インボイスなどが絡むと判断が難しくなります。会計ソフトで記録を整えておけば、税理士に相談するときも状況を説明しやすくなります。相談するか迷う場合は、まず会計ソフトで1カ月分の取引を整理し、分からない仕訳や控除だけをメモしておくと、短時間でも具体的な相談ができます。</p>
          <h2>公式情報リンク</h2>
          <p>料金や機能は更新されるため、導入前に公式情報を確認してください。<a href="https://www.freee.co.jp/">freee会計</a>、<a href="https://biz.moneyforward.com/tax_return/">マネーフォワード クラウド確定申告</a>、<a href="https://www.yayoi-kk.co.jp/shinkoku/aoiroshinkoku/">やよいの青色申告オンライン</a>、<a href="https://taxnoteapp.com/">Taxnote</a> の各ページで、対象者、料金、サポート範囲を確認しましょう。</p>
          <h2>FAQ</h2>
          <div class="faq-list">
            <details><summary>副業が小さいうちから会計ソフトは必要ですか？</summary><p>取引が少ないうちはスプレッドシートでも管理できます。ただし、青色申告を考える人、カード明細が多い人、確定申告前に慌てたくない人は早めの導入が向いています。</p></details>
            <details><summary>会計ソフトを使えば税金は安くなりますか？</summary><p>会計ソフト自体が税金を安くするわけではありません。経費や控除を整理し、正確に申告しやすくなることで、結果として手取り管理がしやすくなります。</p></details>
            <details><summary>青色申告と白色申告でソフト選びは変わりますか？</summary><p>変わります。青色申告では帳簿や書類の要件が重くなるため、青色申告対応、電子申告対応、サポート範囲を重視して選びましょう。</p></details>
          </div>
        </section>
      </div>
    </main>
  </body>
</html>

````

## article-ai-side-business.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="AI副業時給シミュレーターの使い方を解説します。案件単価、作業時間、月案件数からAI活用時の時給と効率改善を確認できます。">
    <title>【2026年対応】初心者向けAI副業時給シミュレーターの使い方｜3分解説</title>
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
          <h1>AI副業時給シミュレーターの使い方</h1>
          <p class="lead">AIを使った場合の作業時間短縮と時給の変化を確認するための考え方です。</p>
          <nav class="tool-nav" aria-label="関連リンク">
            <a href="index.html#ai-hourly">AI副業時給</a>
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#take-home">副業手取り</a>
          </nav>
        </header>
        <section class="content-panel">
          <h2>時給を見る理由</h2>
          <p>副業は売上だけでなく、作業時間に対してどれだけ効率よく収益を得られるかも重要です。案件単価と作業時間を入れることで、実質的な時給を確認できます。</p>
          <h2>AI活用の見方</h2>
          <p>AIを使うことで調査、下書き、整理などの時間を短縮できる場合があります。ただし確認や修正の時間は残るため、結果は目安として使ってください。</p>
        </section>
      </div>
    </main>
  </body>
</html>

````

## article-ai-tools-comparison.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="副業の作業時間を短縮したい人向けに、文章作成、調査、資料作成、画像作成、タスク管理に使えるAIツールを比較します。">
    <title>【2026年対応】初心者向け副業AIツール比較｜5項目で選ぶ</title>
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
          <h1>副業効率化おすすめAIツール比較</h1>
          <p class="lead">AIツールは副業の収益を直接増やすというより、調査、文章作成、資料作成、改善案づくりの時間を短縮し、時給を上げるための道具として使うと効果的です。</p>
          <nav class="tool-nav" aria-label="関連リンク">
            <a href="index.html#ai-hourly">AI副業時給</a>
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#tax">副業税金</a>
            <a href="article-ai-side-business.html">AI副業で収益を上げる方法</a>
            <a href="article-side-income-50000.html">月5万円を稼ぐ方法</a>
          </nav>
        </header>
        <section class="content-panel">
          <p>副業でAIツールを使う目的は、楽をして一瞬で稼ぐことではありません。調査、構成作成、文章の下書き、画像案、表の整理、メール作成、コード補助など、時間がかかる作業を短縮し、限られた作業時間の価値を上げることです。AIを使って作業時間が半分になれば、同じ報酬でも実質時給は上がります。</p>
          <p>この記事では、副業効率化に使いやすいAIツールとして、ChatGPT、Claude、Gemini、Perplexity、Notion AI、Canva、画像生成・デザイン系ツールを比較します。料金、利用制限、モデル性能、対応機能は変わります。契約前には各公式ページで最新情報を確認してください。</p>
          <h2>副業AIツールを選ぶ基準</h2>
          <p>AIツールは「どれが最強か」ではなく、「自分の副業のどこに時間がかかっているか」で選びます。ライターなら構成、リサーチ、校正。デザイナーならラフ案、画像生成、コピー案。エンジニアならコード補助、仕様整理、テスト観点。事務系副業ならメール、議事録、表作成、マニュアル化が候補になります。</p>
          <h3>出力品質と確認コスト</h3>
          <p>AIの出力は便利ですが、内容の正確性を必ず確認する必要があります。調査結果、法律、税金、金融商品、医療、契約条件などは、AIの回答だけで判断してはいけません。AIで下書きを作り、公式情報や一次情報で確認し、自分の言葉で仕上げる流れを作ると、品質と効率のバランスが取りやすくなります。</p>
          <h3>有料プランにするタイミング</h3>
          <p>無料プランで試して、毎週使う作業が見つかったら有料プランを検討します。月額料金を払う場合は、AI副業時給シミュレーターで「何時間短縮できれば元が取れるか」を確認しましょう。例えば月額数千円のツールでも、作業時間を数時間短縮でき、案件の納品品質が上がるなら十分に回収できる可能性があります。</p>
          <h2>AIツール比較表</h2>
          <div class="comparison-table" role="region" aria-label="副業効率化AIツール比較表" tabindex="0">
            <table>
              <thead><tr><th>AIツール</th><th>向いている作業</th><th>強み</th><th>注意点</th><th>副業での使い方</th></tr></thead>
              <tbody>
                <tr><td>ChatGPT</td><td>文章、企画、要約、コード、相談</td><td>汎用性が高く、幅広い作業の壁打ちに使いやすい</td><td>事実確認と機密情報の扱いに注意</td><td>記事構成、メール下書き、改善案、コード補助</td></tr>
                <tr><td>Claude</td><td>長文読解、文章整理、構成作成</td><td>長い資料や文章の整理に使いやすい</td><td>料金・利用上限は公式で確認</td><td>提案書、長文記事、規約や資料の要約</td></tr>
                <tr><td>Gemini</td><td>Google系サービスとの併用、調査、文章</td><td>Google Workspaceを使う人と相性がよい</td><td>連携範囲やプラン条件を確認</td><td>ドキュメント整理、メール、スプレッドシート周り</td></tr>
                <tr><td>Perplexity</td><td>調査、情報収集、出典確認</td><td>検索型の調査に使いやすい</td><td>出典の中身は自分で確認する</td><td>市場調査、記事リサーチ、比較の下調べ</td></tr>
                <tr><td>Notion AI</td><td>メモ、タスク、社内資料風の整理</td><td>情報管理とAI補助を一体化しやすい</td><td>Notionを使っていない人は導入コストがある</td><td>案件管理、作業ログ、テンプレート作成</td></tr>
                <tr><td>Canva</td><td>画像、資料、SNS投稿、簡単なデザイン</td><td>デザイン作成とAI補助を組み合わせやすい</td><td>商用利用条件や素材ライセンスを確認</td><td>バナー案、SNS画像、資料デザイン</td></tr>
              </tbody>
            </table>
          </div>
          <h2>副業タイプ別のおすすめ活用</h2>
          <p>ライティング副業では、AIに丸投げするより、構成案、見出し案、想定読者、FAQ案、校正観点を出してもらう使い方が向いています。最終的な文章は自分で確認し、一次情報をもとに整えることで、薄い記事になりにくくなります。SEO記事では、検索意図、比較表、内部リンク、FAQを先に設計すると効率的です。</p>
          <p>デザインやSNS副業では、ラフ案、キャッチコピー案、配色案、投稿文案の作成にAIを使えます。ただし、生成画像やテンプレート素材の商用利用条件は必ず確認しましょう。クライアントワークでは、AI利用の可否、素材の権利、納品物の範囲を事前に合意しておくとトラブルを避けやすくなります。</p>
          <p>事務・自動化系の副業では、メール文、議事録、マニュアル、チェックリスト、スプレッドシート関数、簡単なコードの下書きにAIが役立ちます。特に、毎回同じ作業をしている部分をテンプレート化すると、継続案件の時給が上がります。AI副業時給シミュレーターで、短縮時間と報酬を見ながら改善すると効果が見えやすくなります。</p>
          <h3>AI利用で注意する情報管理</h3>
          <p>副業でAIを使うときは、個人情報、クライアント名、未公開情報、契約内容、ログイン情報を入力しないように注意します。必要なら匿名化し、固有名詞を置き換え、公開されても困らない情報だけを使います。特に会社員の副業では、本業の情報をAIに入力しないことが重要です。便利さよりも信頼を守ることを優先しましょう。</p>
          <h2>AIツールと収益シミュレーション</h2>
          <p>AIツールを導入したら、作業時間がどれだけ短くなったかを記録します。副業月収シミュレーターでは、時給、作業時間、案件数から月収を試算できます。AI副業時給シミュレーターでは、ツール費用を差し引いた実質時給を確認できます。売上が増えたら、副業手取り計算、所得税、住民税のシミュレーターで税金への影響も見ておきましょう。</p>
          <h2>AIで時給を上げる具体的な流れ</h2>
          <p>AIツールを副業に入れるときは、作業を分解してから使うと効果が出やすくなります。例えば記事制作なら、テーマ調査、検索意図の整理、見出し作成、本文下書き、比較表、FAQ、校正、内部リンク確認という工程があります。このうちAIが得意なのは、候補を出すこと、構成を整えること、表現を言い換えること、抜け漏れを点検することです。最終判断や事実確認は人が行うと決めておくと、品質を落とさず時短できます。</p>
          <p>デザインや資料作成でも同じです。最初から完成品を求めるのではなく、ラフ案を複数出し、方向性を選び、細部を人が整える方が安定します。AIに依頼する文章も、「おしゃれにして」ではなく、「副業初心者向けに、見出しを5個、比較表の項目を6個、注意点を3個」のように条件を具体化しましょう。指示が具体的になるほど、修正回数が減り、実質時給が上がります。</p>
          <h3>プロンプトを資産化する</h3>
          <p>よく使う指示文はテンプレートとして残しておくと便利です。記事構成用、SNS投稿用、メール返信用、見積もり文用、校正用、調査用などに分けると、次の案件で再利用できます。Notionやスプレッドシートに、目的、入力する情報、出力形式、注意点を保存しておけば、毎回ゼロから考えずに済みます。AIツールそのものより、再利用できる作業手順を作ることが副業効率化の核になります。</p>
          <h2>AI利用で避けたい失敗</h2>
          <p>避けたいのは、AIの出力を確認せずに納品すること、クライアントの秘密情報を入力すること、無料素材や生成物の権利確認をしないことです。AIは自然な文章を作るため、間違っていてももっともらしく見えることがあります。金融、税金、法律、医療、契約条件、商品比較のように読者の判断に影響する内容は、公式ページや一次情報で必ず確認しましょう。副業で信頼を失うと、短期の時短よりも大きな損失になります。</p>
          <h2>公式情報リンク</h2>
          <p>機能や料金は更新されます。最新情報は <a href="https://openai.com/chatgpt/pricing">ChatGPT公式料金ページ</a>、<a href="https://www.anthropic.com/claude">Claude公式ページ</a>、<a href="https://gemini.google/">Gemini公式ページ</a>、<a href="https://www.perplexity.ai/">Perplexity公式ページ</a>、<a href="https://www.notion.com/product/ai">Notion AI公式ページ</a>、<a href="https://www.canva.com/">Canva公式ページ</a>で確認してください。</p>
          <h2>FAQ</h2>
          <div class="faq-list">
            <details><summary>副業でAIを使うと収入は増えますか？</summary><p>AIを使うだけで収入が増えるわけではありません。作業時間を短縮し、納品品質を上げ、継続案件や高単価案件につなげることで収益改善が期待できます。</p></details>
            <details><summary>無料AIツールだけで十分ですか？</summary><p>最初は無料で十分です。毎週使う作業があり、短縮時間がツール代を上回るなら有料プランを検討するとよいでしょう。</p></details>
            <details><summary>AIで作った文章をそのまま納品してよいですか？</summary><p>そのまま納品するのは避けましょう。事実確認、表現調整、権利確認、クライアントの方針確認を行い、自分の責任で仕上げることが大切です。</p></details>
          </div>
        </section>
      </div>
    </main>
  </body>
</html>

````

## article-blue-return-start.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="副業で青色申告を始めるための届出、帳簿、控除、会計管理の基本を初心者向けに解説します。">
    <title>【2026年対応】初心者向け青色申告の始め方｜5ステップ解説</title>
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
          <h1>青色申告の始め方</h1>
          <p class="lead">青色申告は、帳簿づけの手間が増える一方で、控除や赤字の扱いなどのメリットがあります。副業を継続するなら早めに仕組みを作りましょう。</p>
          <nav class="tool-nav" aria-label="関連リンク">
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#income-tax">所得税</a>
            <a href="index.html#resident-tax">住民税</a>
            <a href="index.html#nisa">新NISA</a>
            <a href="index.html#ideco">iDeCo</a>
            <a href="index.html#fire">FIRE</a>
            <a href="index.html#retirement">老後資金</a>
          </nav>
        </header>
        <section class="content-panel">
          <p>青色申告は、帳簿づけの手間が増える一方で、控除や赤字の扱いなどのメリットがあります。副業を継続するなら早めに仕組みを作りましょう。</p>
          <h2>青色申告とは</h2>
          <p>青色申告は、一定の帳簿を備えて正しく申告する人に認められる申告方法です。国税庁は、青色申告特別控除として55万円、一定の要件を満たす場合は65万円、または10万円の控除があることを案内しています。控除額は帳簿の形式や電子申告などの要件で変わります。</p>
          <h3>最初に見る数字</h3>
          <p>目標を考えるときは、売上や資産額だけでなく、手取り、税金、毎月の積立余力まで並べて確認します。数字を分けると、今すぐ変えるべき行動と、時間をかけて育てる行動が見えます。</p>
          <h2>始めるための手続き</h2>
          <p>青色申告を始めるには、原則として青色申告承認申請書を期限までに提出します。開業した場合は開業届もあわせて検討します。提出期限を過ぎると、その年は青色申告を使えない可能性があるため、開始時期を決めたら早めに準備しましょう。</p>
          <h3>続けるための工夫</h3>
          <p>一度だけ大きく頑張るより、毎月同じ手順で確認できる仕組みを作る方が安定します。入力する数字を固定し、月末に見直す習慣を作ると、収入や資産形成の変化を追いやすくなります。</p>
          <h2>帳簿づけの基本</h2>
          <p>青色申告では、日々の取引を記録します。売上、外注費、通信費、消耗品費、広告宣伝費、旅費交通費など、科目ごとに整理します。領収書や請求書、クレジットカード明細も保存しておきましょう。</p>
          <h3>注意したい落とし穴</h3>
          <p>制度や税率は人によって前提が変わります。特に税金、住民税、投資制度、年金は、勤務先、自治体、所得、年齢によって扱いが異なることがあります。シミュレーターの結果は概算として使い、必要に応じて公式情報を確認してください。</p>
          <h2>シミュレーターで控除の効果を見る</h2>
          <p>青色申告特別控除は、課税所得を下げる効果があります。副業税金・青色申告シミュレーターでは、青色申告控除額を入力し、所得税や住民税、手取りの目安を確認できます。</p>
          <h3>次にやること</h3>
          <p>記事を読んだら、自分の数字を入力して試算しましょう。副業の収入は副業月収シミュレーター、税金は所得税・住民税シミュレーター、資産形成は新NISA・iDeCo・FIRE・老後資金シミュレーターを使うと、次の行動を決めやすくなります。</p>
          <h2>青色申告を始める確認手順</h2>
          <p>まず、自分の副業が継続的に行われているか、売上や経費の記録があるかを確認します。次に、青色申告承認申請書や開業届の提出時期を確認します。会計ソフトを使う場合は、銀行口座やクレジットカードの連携を設定し、売上と経費を月ごとに整理します。領収書や請求書は、紙でもデータでも後から確認できる形で保存しておきましょう。</p>
          <h3>見直しタイミング</h3>
          <p>青色申告は一度始めたら終わりではなく、帳簿の質を毎年見直すことが大切です。売上が増えたとき、外注費が発生したとき、在庫を持つようになったとき、家事按分が必要になったときは、処理が複雑になります。控除額だけに注目せず、申告に耐えられる記録が残っているかを確認しましょう。</p>
          <h2>記録しておきたい項目</h2>
          <p>あとから見直せるように、日付、金額、目的、判断理由を残しておきましょう。副業なら売上、経費、作業時間、取引先、請求日を記録します。税金なら所得、控除、納付予定額、住民税の通知内容を残します。投資や老後資金なら、毎月の積立額、評価額、生活費、目標額を記録します。数字だけでなく、その月に何を変えたかも残すと、次の改善につながります。</p>
          <h3>失敗しにくい進め方</h3>
          <p>最初から大きな金額を動かすより、小さく始めて毎月見直す方が続きます。副業では低単価のまま作業量を増やしすぎないこと、税金では納税資金を別に残すこと、投資では生活費まで投資に回さないことが大切です。シミュレーターの結果が良くても、現実の生活に無理があれば長続きしません。自分の時間、家計、リスク許容度に合わせて調整しましょう。</p>
          <h2>関連シミュレーター</h2>
          <p>副業収入、税金、手取り、投資、老後資金はつながっています。単独の記事として読むだけでなく、トップページの各ツールで実際の数字を入れると、家計に与える影響が具体的になります。</p>
          <h2>FAQ</h2>
          <div class="faq-list">
            <details><summary>この記事の内容だけで判断してよいですか？</summary><p>制度や税金は個別事情で変わります。この記事は一般的な整理として使い、最終判断は公式情報や専門家の確認も合わせて行ってください。</p></details>
            <details><summary>どのシミュレーターを使えばいいですか？</summary><p>副業収入は副業月収、税金は所得税・住民税、投資や老後資金は新NISA・iDeCo・FIRE・老後資金シミュレーターを使うと確認しやすいです。</p></details>
            <details><summary>スマホでも確認できますか？</summary><p>各シミュレーターはスマホでも入力しやすいように作っています。記事を読んだあと、そのまま関連リンクから試算できます。</p></details>
          </div>
        </section>
      </div>
    </main>
  </body>
</html>

````

## article-company-side-tax-saving.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="会社員が副業をするときの税金対策、経費管理、住民税、普通徴収、納税資金の考え方を解説します。">
    <title>【2026年対応】初心者向け会社員の副業税金対策｜5つのポイント</title>
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
          <h1>会社員の副業税金対策</h1>
          <p class="lead">会社員の副業では、収入を増やすだけでなく、税金と手取りを管理することが欠かせません。経費、所得税、住民税、納付方法を早めに整理しましょう。</p>
          <nav class="tool-nav" aria-label="関連リンク">
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#income-tax">所得税</a>
            <a href="index.html#resident-tax">住民税</a>
            <a href="index.html#nisa">新NISA</a>
            <a href="index.html#ideco">iDeCo</a>
            <a href="index.html#fire">FIRE</a>
            <a href="index.html#retirement">老後資金</a>
          </nav>
        </header>
        <section class="content-panel">
          <p>会社員の副業では、収入を増やすだけでなく、税金と手取りを管理することが欠かせません。経費、所得税、住民税、納付方法を早めに整理しましょう。</p>
          <h2>税金対策は脱税ではなく管理</h2>
          <p>副業の税金対策とは、払うべき税金をごまかすことではありません。売上、経費、控除、納税時期を正しく把握し、過不足の少ない申告に近づけることです。会社員は本業の給与が年末調整されているため、副業分の所得を見落としやすい傾向があります。</p>
          <h3>最初に見る数字</h3>
          <p>目標を考えるときは、売上や資産額だけでなく、手取り、税金、毎月の積立余力まで並べて確認します。数字を分けると、今すぐ変えるべき行動と、時間をかけて育てる行動が見えます。</p>
          <h2>経費を正しく記録する</h2>
          <p>副業に必要な支出は、経費として扱える可能性があります。業務用ツール、通信費、資料代、消耗品、外注費などを記録し、自宅やスマホを兼用している場合は事業で使った割合を説明できるようにしておきます。</p>
          <h3>続けるための工夫</h3>
          <p>一度だけ大きく頑張るより、毎月同じ手順で確認できる仕組みを作る方が安定します。入力する数字を固定し、月末に見直す習慣を作ると、収入や資産形成の変化を追いやすくなります。</p>
          <h2>所得税と住民税を分けて考える</h2>
          <p>所得税は国税、住民税は地方税です。確定申告の要否と住民税の申告要否は別の確認が必要です。給与所得者の副業では所得が20万円を超えるかどうかがよく話題になりますが、住民税まで含めて確認しましょう。</p>
          <h3>注意したい落とし穴</h3>
          <p>制度や税率は人によって前提が変わります。特に税金、住民税、投資制度、年金は、勤務先、自治体、所得、年齢によって扱いが異なることがあります。シミュレーターの結果は概算として使い、必要に応じて公式情報を確認してください。</p>
          <h2>普通徴収と会社への影響</h2>
          <p>副業分の住民税について普通徴収を希望できる場合があります。ただし、自治体や所得区分によって扱いが異なります。会社の就業規則も確認し、税金、時間、健康、勤務先ルールのすべてを管理しましょう。</p>
          <h3>次にやること</h3>
          <p>記事を読んだら、自分の数字を入力して試算しましょう。副業の収入は副業月収シミュレーター、税金は所得税・住民税シミュレーター、資産形成は新NISA・iDeCo・FIRE・老後資金シミュレーターを使うと、次の行動を決めやすくなります。</p>
          <h2>会社員が確認する手順</h2>
          <p>最初に勤務先の就業規則を確認し、副業が認められているか、事前申請が必要かを見ます。次に、副業の売上と経費を記録し、所得税と住民税の概算を出します。普通徴収を希望する場合は、申告書の該当欄だけでなく、自治体の扱いも確認しましょう。会社に知られにくくすることだけを目的にせず、正しく申告し、納税資金を準備することが基本です。</p>
          <h3>見直しタイミング</h3>
          <p>副業収入が増えたとき、取引先が変わったとき、給与所得以外の所得が増えたときは、税金対策を見直します。経費の範囲を広げすぎると説明が難しくなるため、業務との関係を記録しておきましょう。税金の管理ができるようになると、手取りの見通しが立ち、無理な案件を減らす判断もしやすくなります。</p>
          <h2>記録しておきたい項目</h2>
          <p>あとから見直せるように、日付、金額、目的、判断理由を残しておきましょう。副業なら売上、経費、作業時間、取引先、請求日を記録します。税金なら所得、控除、納付予定額、住民税の通知内容を残します。投資や老後資金なら、毎月の積立額、評価額、生活費、目標額を記録します。数字だけでなく、その月に何を変えたかも残すと、次の改善につながります。</p>
          <h3>失敗しにくい進め方</h3>
          <p>最初から大きな金額を動かすより、小さく始めて毎月見直す方が続きます。副業では低単価のまま作業量を増やしすぎないこと、税金では納税資金を別に残すこと、投資では生活費まで投資に回さないことが大切です。シミュレーターの結果が良くても、現実の生活に無理があれば長続きしません。自分の時間、家計、リスク許容度に合わせて調整しましょう。</p>
          <h2>関連シミュレーター</h2>
          <p>副業収入、税金、手取り、投資、老後資金はつながっています。単独の記事として読むだけでなく、トップページの各ツールで実際の数字を入れると、家計に与える影響が具体的になります。</p>
          <h2>FAQ</h2>
          <div class="faq-list">
            <details><summary>この記事の内容だけで判断してよいですか？</summary><p>制度や税金は個別事情で変わります。この記事は一般的な整理として使い、最終判断は公式情報や専門家の確認も合わせて行ってください。</p></details>
            <details><summary>どのシミュレーターを使えばいいですか？</summary><p>副業収入は副業月収、税金は所得税・住民税、投資や老後資金は新NISA・iDeCo・FIRE・老後資金シミュレーターを使うと確認しやすいです。</p></details>
            <details><summary>スマホでも確認できますか？</summary><p>各シミュレーターはスマホでも入力しやすいように作っています。記事を読んだあと、そのまま関連リンクから試算できます。</p></details>
          </div>
        </section>
      </div>
    </main>
  </body>
</html>

````

## article-credit-card-comparison.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="副業の経費管理に使いやすいクレジットカードを、年会費、ポイント、明細管理、会計ソフト連携、事業用の使いやすさで比較します。">
    <title>【2026年対応】初心者向け副業クレジットカード比較｜5項目で選ぶ</title>
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
          <h1>副業向けおすすめクレジットカード比較</h1>
          <p class="lead">副業用クレジットカードは、ポイント還元だけでなく、経費の分離、明細管理、会計ソフト連携、支払いタイミングの安定まで含めて選ぶと便利です。</p>
          <nav class="tool-nav" aria-label="関連リンク">
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#tax">副業税金</a>
            <a href="index.html#income-tax">所得税</a>
            <a href="index.html#resident-tax">住民税</a>
            <a href="article-accounting-software-comparison.html">会計ソフト比較</a>
            <a href="article-company-side-tax-saving.html">会社員の副業税金対策</a>
          </nav>
        </header>
        <section class="content-panel">
          <p>副業で経費が発生するようになったら、支払い手段を整理するだけで帳簿づけが楽になります。プライベートのカードで経費を払うと、後から明細を見返して事業用と生活用を分ける必要があります。副業用のクレジットカードを決めておけば、会計ソフトへの連携、領収書の確認、納税資金の見積もりがしやすくなります。</p>
          <p>この記事では、副業で使いやすいカードの選び方を、三井住友カード（NL）、楽天カード、PayPayカード、JCB CARD W、ビジネスカード系サービスを例に比較します。年会費、還元率、キャンペーン、付帯サービスは変更されます。申し込み前に必ず公式ページで最新条件を確認してください。</p>
          <h2>副業向けカード選びの基準</h2>
          <p>副業向けカードで最も大切なのは、経費を分けやすいことです。ポイント還元は魅力ですが、経費管理が複雑になるカードを選ぶと、確定申告前に時間を失います。副業は本業や生活と並行して進めるため、経理の作業時間を減らせるかどうかが、実質的なメリットになります。</p>
          <h3>年会費と固定費</h3>
          <p>副業を始めたばかりなら、年会費無料または低コストのカードから始めるのが現実的です。売上がまだ小さい段階で高年会費カードを持つと、ポイントや特典で回収できないことがあります。事業規模が大きくなり、出張、広告費、外注費、備品購入が増えてから、ビジネスカードや上位カードを検討しても遅くありません。</p>
          <h3>会計ソフト連携と明細管理</h3>
          <p>カード明細を会計ソフトに取り込めると、記帳の負担が減ります。副業用カードを一枚決め、広告費、サーバー代、書籍、ツール利用料などをそこに集約すれば、経費候補の一覧が作りやすくなります。会計ソフト比較の記事と合わせて、どのカード明細を取り込むかを決めておきましょう。</p>
          <h2>副業向けクレジットカード比較表</h2>
          <div class="comparison-table" role="region" aria-label="副業向けクレジットカード比較表" tabindex="0">
            <table>
              <thead><tr><th>カード候補</th><th>向いている人</th><th>強み</th><th>注意点</th><th>副業での使い方</th></tr></thead>
              <tbody>
                <tr><td>三井住友カード（NL）</td><td>セキュリティと日常利用のバランスを重視する人</td><td>ナンバーレス設計で普段使いしやすい</td><td>還元条件は対象店舗や支払い方法を確認</td><td>副業用の少額経費、サブスク支払い</td></tr>
                <tr><td>楽天カード</td><td>楽天市場や楽天証券を使う人</td><td>楽天ポイントをまとめやすい</td><td>経済圏依存が強くなりやすい</td><td>物販仕入れ、備品購入、NISA口座との相性確認</td></tr>
                <tr><td>PayPayカード</td><td>PayPayやYahoo!系サービスを使う人</td><td>コード決済やネットサービスと合わせやすい</td><td>ポイント条件や対象支払いを確認</td><td>日常支払いと副業支払いを分けて管理</td></tr>
                <tr><td>JCB CARD W</td><td>年会費を抑えて標準的なカードを使いたい人</td><td>若年層向けに始めやすい設計</td><td>申込条件や年齢条件を確認</td><td>副業初期の固定費支払い</td></tr>
                <tr><td>ビジネスカード系</td><td>副業規模が大きく請求書・備品・外注費が増えた人</td><td>利用枠や追加カード、経費管理機能を期待できる</td><td>審査、年会費、対象者を確認</td><td>事業支出を本格的に分離する</td></tr>
              </tbody>
            </table>
          </div>
          <h2>副業カードは一枚に絞るべきか</h2>
          <p>副業初期は、一枚に絞る方が管理しやすいです。複数カードを使うと、ポイントは増える可能性がありますが、明細確認、引落日、領収書、会計ソフト連携が分散します。副業の目的が収益化なら、ポイント最適化よりも本業後の限られた時間を守ることの方が重要です。</p>
          <p>ただし、事業規模が大きくなったら、固定費用、広告費用、仕入れ用などでカードを分ける選択肢もあります。その場合も、会計ソフトに取り込む明細を決め、月末に確認する流れを作りましょう。副業手取り計算シミュレーターで税引後の利益を確認し、カード利用額が利益に対して大きくなりすぎていないかを見ることも大切です。</p>
          <h3>カードで払う経費の例</h3>
          <p>副業でカード払いしやすい経費には、サーバー代、ドメイン代、デザインツール、AIツール、会計ソフト、書籍、セミナー、交通費、広告費、備品などがあります。経費になるかどうかは、事業との関連性、使用実態、記録の残し方によって変わります。迷う支出はメモを残し、必要に応じて税理士や税務署に確認しましょう。</p>
          <h2>税金と資金繰りへの影響</h2>
          <p>クレジットカードは支払いを後ろ倒しにできるため、資金繰りに役立つことがあります。一方で、引落日に資金が足りないと信用に影響します。副業売上が入る前にカードで支出を増やしすぎると、利益が出ているように見えても手元資金が不足します。副業所得税シミュレーターと住民税シミュレーターを使い、納税資金を先に分けてからカード支出を管理しましょう。</p>
          <h2>副業カード運用のルール</h2>
          <p>副業用カードを作ったら、最初に使う支出と使わない支出を決めておきます。例えば、サーバー代、ドメイン代、会計ソフト、AIツール、広告費、書籍、備品は副業カードで払う一方、食費、日用品、家族の支出は使わないと決めます。この線引きが曖昧だと、カード明細を会計ソフトに取り込んでも、結局一つひとつ除外する作業が増えてしまいます。</p>
          <p>領収書の保存方法も決めておきましょう。オンライン決済ならメール明細をフォルダに分ける、紙の領収書ならスマホで撮影する、月末に会計ソフトへ取り込むなど、同じ手順を繰り返すと抜け漏れが減ります。カード明細に店名しか残らない場合、何を買ったのか分からなくなることがあります。備品や書籍の購入では、購入目的をメモしておくと後で説明しやすくなります。</p>
          <h3>ポイントと経費の考え方</h3>
          <p>カード利用でポイントが付くと得をした気分になりますが、ポイントを得るために不要な経費を増やすのは本末転倒です。副業の目的は利益を残すことであり、ポイントは副次的なメリットです。広告費やツール代は、売上にどう貢献したかを定期的に見直しましょう。月平均の税負担や手取りを確認すると、支出の増やしすぎに気づきやすくなります。ポイントを使った支払いも、記録上の扱いをメモしておくと後で確認しやすくなります。</p>
          <h2>会社員副業で注意したいこと</h2>
          <p>会社員が副業カードを使う場合、本業の経費や会社情報と混ぜないことが重要です。会社貸与の端末、会社メール、会社名義のサービスを副業に使うと、就業規則や情報管理の問題につながります。副業用カード、個人のメールアドレス、副業用のクラウドストレージを分け、仕事の境界を明確にしましょう。税金面では、所得税、住民税、普通徴収の注意点も確認し、必要に応じて自治体や専門家に相談してください。</p>
          <h2>公式情報リンク</h2>
          <p>カード条件は頻繁に変わります。最新の年会費、ポイント条件、対象店舗、申込条件は、<a href="https://www.smbc-card.com/">三井住友カード</a>、<a href="https://www.rakuten-card.co.jp/">楽天カード</a>、<a href="https://www.paypay-card.co.jp/">PayPayカード</a>、<a href="https://www.jcb.co.jp/">JCBカード</a>、利用を検討するビジネスカードの公式ページで確認してください。</p>
          <h2>FAQ</h2>
          <div class="faq-list">
            <details><summary>副業用カードは個人カードでも大丈夫ですか？</summary><p>小規模副業では個人カードを使う人もいます。ただし、事業支出と生活費が混ざらないように、副業用として使うカードを決めると管理しやすくなります。</p></details>
            <details><summary>ポイント還元率だけで選んでよいですか？</summary><p>還元率だけで選ぶのはおすすめしません。会計ソフト連携、明細の見やすさ、引落日の管理、年会費、普段使うサービスとの相性も含めて比較しましょう。</p></details>
            <details><summary>カード明細だけで経費証明になりますか？</summary><p>カード明細だけでは内容が不足する場合があります。領収書、請求書、メール明細、利用目的のメモなども残しておくと確認しやすくなります。</p></details>
          </div>
        </section>
      </div>
    </main>
  </body>
</html>

````

## article-fire-basic.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="FIREの意味、必要資産、4%ルール、サイドFIRE、注意点を初心者向けに解説します。">
    <title>【2026年対応】初心者向けFIREとは何か｜4%ルールと必要資産</title>
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
          <h1>FIREとは何か</h1>
          <p class="lead">FIREは、経済的自立と早期リタイアを目指す考え方です。単に仕事を辞めることではなく、生活費と資産収入のバランスを設計することが中心です。</p>
          <nav class="tool-nav" aria-label="関連リンク">
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#income-tax">所得税</a>
            <a href="index.html#resident-tax">住民税</a>
            <a href="index.html#nisa">新NISA</a>
            <a href="index.html#ideco">iDeCo</a>
            <a href="index.html#fire">FIRE</a>
            <a href="index.html#retirement">老後資金</a>
          </nav>
        </header>
        <section class="content-panel">
          <p>FIREは、経済的自立と早期リタイアを目指す考え方です。単に仕事を辞めることではなく、生活費と資産収入のバランスを設計することが中心です。</p>
          <h2>FIREの基本</h2>
          <p>FIREはFinancial Independence, Retire Earlyの略で、経済的自立と早期リタイアを意味します。資産収入や取り崩しで生活費をまかなえる状態を目指す考え方です。完全に働かない形だけでなく、好きな仕事を少し続けるサイドFIREなど複数の考え方があります。</p>
          <h3>最初に見る数字</h3>
          <p>目標を考えるときは、売上や資産額だけでなく、手取り、税金、毎月の積立余力まで並べて確認します。数字を分けると、今すぐ変えるべき行動と、時間をかけて育てる行動が見えます。</p>
          <h2>必要資産の考え方</h2>
          <p>FIREでよく使われる目安に、年間生活費の25倍という考え方があります。年間生活費が300万円なら、目標資産は7,500万円が一つの目安です。ただし、利回り、インフレ、税金、医療費、家族構成で必要額は変わります。</p>
          <h3>続けるための工夫</h3>
          <p>一度だけ大きく頑張るより、毎月同じ手順で確認できる仕組みを作る方が安定します。入力する数字を固定し、月末に見直す習慣を作ると、収入や資産形成の変化を追いやすくなります。</p>
          <h2>収入を増やすか支出を下げるか</h2>
          <p>FIREを早める方法は、収入を増やす、支出を下げる、運用利回りを上げる、時間をかける、の組み合わせです。運用利回りだけに頼るとリスクが大きくなるため、まずは固定費の見直しと副業収入の追加が現実的です。</p>
          <h3>注意したい落とし穴</h3>
          <p>制度や税率は人によって前提が変わります。特に税金、住民税、投資制度、年金は、勤務先、自治体、所得、年齢によって扱いが異なることがあります。シミュレーターの結果は概算として使い、必要に応じて公式情報を確認してください。</p>
          <h2>FIREの注意点</h2>
          <p>FIREには、相場下落、病気、家族の変化、インフレ、働かないことによる孤立感などのリスクがあります。早期リタイアを急ぐより、働き方の自由度を上げる段階的なFIREを考えると、失敗しにくくなります。</p>
          <h3>次にやること</h3>
          <p>記事を読んだら、自分の数字を入力して試算しましょう。副業の収入は副業月収シミュレーター、税金は所得税・住民税シミュレーター、資産形成は新NISA・iDeCo・FIRE・老後資金シミュレーターを使うと、次の行動を決めやすくなります。</p>
          <h2>FIREを考える確認手順</h2>
          <p>まず現在資産、毎月の積立額、年間生活費を確認します。次に、目標資産を年間生活費の25倍などで仮置きし、FIRE達成シミュレーターで到達年数を見ます。新NISAやiDeCoを使う場合は、運用益や節税効果も別で確認します。副業収入を積立に回す場合は、副業月収と手取りを計算し、無理なく続けられる金額を決めましょう。</p>
          <h3>見直しタイミング</h3>
          <p>FIRE計画は、相場が良いときほど楽観的になりがちです。年に一度は生活費、資産額、積立額、想定利回りを見直しましょう。結婚、出産、住宅購入、転職、親の介護などで必要資金は変わります。完全リタイアだけにこだわらず、サイドFIREや働き方の調整も選択肢に入れると、現実的な計画になります。</p>
          <h2>記録しておきたい項目</h2>
          <p>あとから見直せるように、日付、金額、目的、判断理由を残しておきましょう。副業なら売上、経費、作業時間、取引先、請求日を記録します。税金なら所得、控除、納付予定額、住民税の通知内容を残します。投資や老後資金なら、毎月の積立額、評価額、生活費、目標額を記録します。数字だけでなく、その月に何を変えたかも残すと、次の改善につながります。</p>
          <h3>失敗しにくい進め方</h3>
          <p>最初から大きな金額を動かすより、小さく始めて毎月見直す方が続きます。副業では低単価のまま作業量を増やしすぎないこと、税金では納税資金を別に残すこと、投資では生活費まで投資に回さないことが大切です。シミュレーターの結果が良くても、現実の生活に無理があれば長続きしません。自分の時間、家計、リスク許容度に合わせて調整しましょう。</p>
          <h2>関連シミュレーター</h2>
          <p>副業収入、税金、手取り、投資、老後資金はつながっています。単独の記事として読むだけでなく、トップページの各ツールで実際の数字を入れると、家計に与える影響が具体的になります。</p>
          <h2>FAQ</h2>
          <div class="faq-list">
            <details><summary>この記事の内容だけで判断してよいですか？</summary><p>制度や税金は個別事情で変わります。この記事は一般的な整理として使い、最終判断は公式情報や専門家の確認も合わせて行ってください。</p></details>
            <details><summary>どのシミュレーターを使えばいいですか？</summary><p>副業収入は副業月収、税金は所得税・住民税、投資や老後資金は新NISA・iDeCo・FIRE・老後資金シミュレーターを使うと確認しやすいです。</p></details>
            <details><summary>スマホでも確認できますか？</summary><p>各シミュレーターはスマホでも入力しやすいように作っています。記事を読んだあと、そのまま関連リンクから試算できます。</p></details>
          </div>
        </section>
      </div>
    </main>
  </body>
</html>

````

## article-fire-strategy.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="FIRE達成シミュレーターの使い方を解説します。現在資産、積立額、年利、目標資産から達成までの距離を確認できます。">
    <title>【2026年対応】初心者向けFIRE達成シミュレーターの使い方｜5ステップ解説</title>
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
          <h1>FIRE達成シミュレーターの使い方</h1>
          <p class="lead">FIREに必要な資産額と積立ペースを比較するための基本的な見方です。</p>
          <nav class="tool-nav" aria-label="関連リンク">
            <a href="index.html#fire">FIRE達成</a>
            <a href="index.html#nisa">新NISA</a>
            <a href="index.html#retirement">老後資金</a>
          </nav>
        </header>
        <section class="content-panel">
          <h2>目標資産の置き方</h2>
          <p>FIREの目標資産は、年間生活費の25年分をひとつの目安として考えられます。ただし住居費、家族構成、社会保険、税金によって必要額は変わります。</p>
          <h2>複数パターンで確認する</h2>
          <p>想定年利は将来を保証するものではありません。3%、4%、5%など複数の条件で試すと、積立額や年数を変えたときの影響が見えやすくなります。</p>
        </section>
      </div>
    </main>
  </body>
</html>

````

## article-ideco-start.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="iDeCoの基本、節税効果、掛金、始める手順、新NISAとの違いを初心者向けに解説します。">
    <title>【2026年対応】初心者向けiDeCoの始め方｜節税3つの基本</title>
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
          <h1>iDeCoの始め方</h1>
          <p class="lead">iDeCoは老後資金づくりに使える制度で、掛金の所得控除が大きな特徴です。一方で原則60歳まで引き出せないため、目的を明確にして始めましょう。</p>
          <nav class="tool-nav" aria-label="関連リンク">
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#income-tax">所得税</a>
            <a href="index.html#resident-tax">住民税</a>
            <a href="index.html#nisa">新NISA</a>
            <a href="index.html#ideco">iDeCo</a>
            <a href="index.html#fire">FIRE</a>
            <a href="index.html#retirement">老後資金</a>
          </nav>
        </header>
        <section class="content-panel">
          <p>iDeCoは老後資金づくりに使える制度で、掛金の所得控除が大きな特徴です。一方で原則60歳まで引き出せないため、目的を明確にして始めましょう。</p>
          <h2>iDeCoの基本</h2>
          <p>iDeCoは個人型確定拠出年金のことで、自分で掛金を出し、自分で運用商品を選び、老後資金を作る制度です。厚生労働省は、加入者が拠出した掛金は全額所得控除の対象になると案内しています。所得税や住民税の負担を軽くしながら、将来資産を準備できる点が特徴です。</p>
          <h3>最初に見る数字</h3>
          <p>目標を考えるときは、売上や資産額だけでなく、手取り、税金、毎月の積立余力まで並べて確認します。数字を分けると、今すぐ変えるべき行動と、時間をかけて育てる行動が見えます。</p>
          <h2>始める手順</h2>
          <p>iDeCoを始めるには、金融機関を選び、加入資格や掛金上限を確認し、申込書類またはオンライン手続きで申し込みます。職業や勤務先の企業年金の有無によって掛金の上限が異なるため、最初に確認しましょう。</p>
          <h3>続けるための工夫</h3>
          <p>一度だけ大きく頑張るより、毎月同じ手順で確認できる仕組みを作る方が安定します。入力する数字を固定し、月末に見直す習慣を作ると、収入や資産形成の変化を追いやすくなります。</p>
          <h2>節税効果の見方</h2>
          <p>iDeCoの掛金は所得控除になるため、課税所得がある人ほど節税効果を感じやすくなります。iDeCo節税シミュレーターでは、年収、課税所得、所得税率、住民税率、毎月の掛金、運用年数、想定年利を入力できます。</p>
          <h3>注意したい落とし穴</h3>
          <p>制度や税率は人によって前提が変わります。特に税金、住民税、投資制度、年金は、勤務先、自治体、所得、年齢によって扱いが異なることがあります。シミュレーターの結果は概算として使い、必要に応じて公式情報を確認してください。</p>
          <h2>新NISAとの使い分け</h2>
          <p>新NISAは運用益が非課税で、資金の自由度が高い制度です。iDeCoは掛金の所得控除が強みですが、引き出し制限があります。老後資金として確実に積み立てたいお金はiDeCo、途中で使う可能性があるお金は新NISA、という使い分けが一つの考え方です。</p>
          <h3>次にやること</h3>
          <p>記事を読んだら、自分の数字を入力して試算しましょう。副業の収入は副業月収シミュレーター、税金は所得税・住民税シミュレーター、資産形成は新NISA・iDeCo・FIRE・老後資金シミュレーターを使うと、次の行動を決めやすくなります。</p>
          <h2>iDeCoを始める確認手順</h2>
          <p>まず加入資格と掛金上限を確認します。会社員の場合は勤務先の企業年金の有無で上限が変わることがあります。次に、毎月の掛金を決めます。iDeCoは原則60歳まで引き出せないため、生活防衛資金や近い将来使うお金を確保したうえで始めましょう。金融機関は手数料、商品ラインナップ、サポートで比較します。</p>
          <h3>見直しタイミング</h3>
          <p>iDeCoは老後資金向けの制度なので、短期的な相場変動で慌てて判断しないことが大切です。一方で、年収、課税所得、家計、年齢が変わったときは掛金を見直しましょう。新NISAと違って流動性が低いため、節税効果だけで決めず、老後まで使わない資金かどうかを確認してください。</p>
          <h2>記録しておきたい項目</h2>
          <p>あとから見直せるように、日付、金額、目的、判断理由を残しておきましょう。副業なら売上、経費、作業時間、取引先、請求日を記録します。税金なら所得、控除、納付予定額、住民税の通知内容を残します。投資や老後資金なら、毎月の積立額、評価額、生活費、目標額を記録します。数字だけでなく、その月に何を変えたかも残すと、次の改善につながります。</p>
          <h3>失敗しにくい進め方</h3>
          <p>最初から大きな金額を動かすより、小さく始めて毎月見直す方が続きます。副業では低単価のまま作業量を増やしすぎないこと、税金では納税資金を別に残すこと、投資では生活費まで投資に回さないことが大切です。シミュレーターの結果が良くても、現実の生活に無理があれば長続きしません。自分の時間、家計、リスク許容度に合わせて調整しましょう。</p>
          <h2>関連シミュレーター</h2>
          <p>副業収入、税金、手取り、投資、老後資金はつながっています。単独の記事として読むだけでなく、トップページの各ツールで実際の数字を入れると、家計に与える影響が具体的になります。</p>
          <h2>FAQ</h2>
          <div class="faq-list">
            <details><summary>この記事の内容だけで判断してよいですか？</summary><p>制度や税金は個別事情で変わります。この記事は一般的な整理として使い、最終判断は公式情報や専門家の確認も合わせて行ってください。</p></details>
            <details><summary>どのシミュレーターを使えばいいですか？</summary><p>副業収入は副業月収、税金は所得税・住民税、投資や老後資金は新NISA・iDeCo・FIRE・老後資金シミュレーターを使うと確認しやすいです。</p></details>
            <details><summary>スマホでも確認できますか？</summary><p>各シミュレーターはスマホでも入力しやすいように作っています。記事を読んだあと、そのまま関連リンクから試算できます。</p></details>
          </div>
        </section>
      </div>
    </main>
  </body>
</html>

````

## article-income-tax-guide.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="副業の所得税について、売上・経費・控除・復興特別所得税・確定申告の考え方を解説します。">
    <title>【2026年対応】初心者向け副業の所得税完全ガイド｜確定申告5つの基本</title>
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
          <h1>副業の所得税完全ガイド</h1>
          <p class="lead">副業の所得税は、売上そのものではなく所得をもとに考えます。経費や控除を整理し、住民税や手取りへの影響も一緒に確認しましょう。</p>
          <nav class="tool-nav" aria-label="関連リンク">
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#income-tax">所得税</a>
            <a href="index.html#resident-tax">住民税</a>
            <a href="index.html#nisa">新NISA</a>
            <a href="index.html#ideco">iDeCo</a>
            <a href="index.html#fire">FIRE</a>
            <a href="index.html#retirement">老後資金</a>
          </nav>
        </header>
        <section class="content-panel">
          <p>副業の所得税は、売上そのものではなく所得をもとに考えます。経費や控除を整理し、住民税や手取りへの影響も一緒に確認しましょう。</p>
          <h2>所得税は売上ではなく所得にかかる</h2>
          <p>副業の税金で最初に押さえたいのは、売上と所得の違いです。売上は入金された金額、所得は売上から必要経費などを差し引いた金額です。たとえば年間売上が100万円でも、経費が30万円あれば所得は70万円です。さらに青色申告控除や基礎控除、その他控除が関係する場合があります。</p>
          <h3>最初に見る数字</h3>
          <p>目標を考えるときは、売上や資産額だけでなく、手取り、税金、毎月の積立余力まで並べて確認します。数字を分けると、今すぐ変えるべき行動と、時間をかけて育てる行動が見えます。</p>
          <h2>復興特別所得税も忘れない</h2>
          <p>所得税を計算するときは、復興特別所得税も確認します。国税庁の手引きでは、基準所得税額に2.1%を乗じて計算する形が示されています。少額に見えても、確定申告では記入漏れに注意したい項目です。</p>
          <h3>続けるための工夫</h3>
          <p>一度だけ大きく頑張るより、毎月同じ手順で確認できる仕組みを作る方が安定します。入力する数字を固定し、月末に見直す習慣を作ると、収入や資産形成の変化を追いやすくなります。</p>
          <h2>確定申告が必要になるケース</h2>
          <p>会社員の場合、給与所得や退職所得以外の所得が一定額を超えると確定申告が必要になるケースがあります。所得が20万円を超えるかどうかはよく使われる目安ですが、還付申告や住民税では扱いが変わることがあります。</p>
          <h3>注意したい落とし穴</h3>
          <p>制度や税率は人によって前提が変わります。特に税金、住民税、投資制度、年金は、勤務先、自治体、所得、年齢によって扱いが異なることがあります。シミュレーターの結果は概算として使い、必要に応じて公式情報を確認してください。</p>
          <h2>手取りと納税資金を管理する</h2>
          <p>所得税は副業の利益を圧迫しますが、経費記録や控除の整理で過不足の少ない申告に近づけられます。売上が増えたら、入金額の一部を税金用口座に移し、所得税と住民税の両方を見込んでおきましょう。</p>
          <h3>次にやること</h3>
          <p>記事を読んだら、自分の数字を入力して試算しましょう。副業の収入は副業月収シミュレーター、税金は所得税・住民税シミュレーター、資産形成は新NISA・iDeCo・FIRE・老後資金シミュレーターを使うと、次の行動を決めやすくなります。</p>
          <h2>所得税を確認する手順</h2>
          <p>最初に年間売上を集計し、次に経費を整理します。経費を差し引いた副業所得から、青色申告控除、基礎控除、その他控除を考え、課税所得の目安を出します。所得税率は本業の給与など他の所得と合算した結果で変わるため、シミュレーターでは概算として入力します。復興特別所得税も含めて確認すると、納税資金を準備しやすくなります。</p>
          <h3>見直しタイミング</h3>
          <p>副業所得が増えたとき、経費の内容が変わったとき、医療費控除やふるさと納税など他の控除を使うときは、所得税の見直しが必要です。年末にまとめて確認すると漏れが出やすいため、毎月の売上と経費を記録しましょう。住民税も翌年に発生するため、所得税だけでなく手取り全体で考えることが大切です。</p>
          <h2>記録しておきたい項目</h2>
          <p>あとから見直せるように、日付、金額、目的、判断理由を残しておきましょう。副業なら売上、経費、作業時間、取引先、請求日を記録します。税金なら所得、控除、納付予定額、住民税の通知内容を残します。投資や老後資金なら、毎月の積立額、評価額、生活費、目標額を記録します。数字だけでなく、その月に何を変えたかも残すと、次の改善につながります。</p>
          <h3>失敗しにくい進め方</h3>
          <p>最初から大きな金額を動かすより、小さく始めて毎月見直す方が続きます。副業では低単価のまま作業量を増やしすぎないこと、税金では納税資金を別に残すこと、投資では生活費まで投資に回さないことが大切です。シミュレーターの結果が良くても、現実の生活に無理があれば長続きしません。自分の時間、家計、リスク許容度に合わせて調整しましょう。</p>
          <h2>関連シミュレーター</h2>
          <p>副業収入、税金、手取り、投資、老後資金はつながっています。単独の記事として読むだけでなく、トップページの各ツールで実際の数字を入れると、家計に与える影響が具体的になります。</p>
          <h2>FAQ</h2>
          <div class="faq-list">
            <details><summary>この記事の内容だけで判断してよいですか？</summary><p>制度や税金は個別事情で変わります。この記事は一般的な整理として使い、最終判断は公式情報や専門家の確認も合わせて行ってください。</p></details>
            <details><summary>どのシミュレーターを使えばいいですか？</summary><p>副業収入は副業月収、税金は所得税・住民税、投資や老後資金は新NISA・iDeCo・FIRE・老後資金シミュレーターを使うと確認しやすいです。</p></details>
            <details><summary>スマホでも確認できますか？</summary><p>各シミュレーターはスマホでも入力しやすいように作っています。記事を読んだあと、そのまま関連リンクから試算できます。</p></details>
          </div>
        </section>
      </div>
    </main>
  </body>
</html>

````

## article-new-nisa-start.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="新NISAの基本、つみたて投資枠・成長投資枠、口座開設、積立額の決め方を初心者向けに解説します。">
    <title>【2026年対応】初心者向け新NISAの始め方｜3ステップ解説</title>
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
          <h1>新NISAの始め方</h1>
          <p class="lead">新NISAは、長期の資産形成に使いやすい非課税制度です。制度の枠を知ったうえで、無理のない積立額から始めることが大切です。</p>
          <nav class="tool-nav" aria-label="関連リンク">
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#income-tax">所得税</a>
            <a href="index.html#resident-tax">住民税</a>
            <a href="index.html#nisa">新NISA</a>
            <a href="index.html#ideco">iDeCo</a>
            <a href="index.html#fire">FIRE</a>
            <a href="index.html#retirement">老後資金</a>
          </nav>
        </header>
        <section class="content-panel">
          <p>新NISAは、長期の資産形成に使いやすい非課税制度です。制度の枠を知ったうえで、無理のない積立額から始めることが大切です。</p>
          <h2>新NISAの基本</h2>
          <p>新NISAは、投資で得た利益が一定の枠内で非課税になる制度です。金融庁の制度案内では、つみたて投資枠と成長投資枠があり、年間投資枠はつみたて投資枠120万円、成長投資枠240万円、合計360万円が目安として示されています。非課税保有限度額は総枠1,800万円です。</p>
          <h3>最初に見る数字</h3>
          <p>目標を考えるときは、売上や資産額だけでなく、手取り、税金、毎月の積立余力まで並べて確認します。数字を分けると、今すぐ変えるべき行動と、時間をかけて育てる行動が見えます。</p>
          <h2>口座開設の流れ</h2>
          <p>新NISAを始めるには、金融機関でNISA口座を開設します。証券会社や銀行で申し込み、本人確認、税務署審査などを経て開設されます。金融機関によって取扱商品、手数料、画面の使いやすさが異なるため、長く使いやすいところを選びましょう。</p>
          <h3>続けるための工夫</h3>
          <p>一度だけ大きく頑張るより、毎月同じ手順で確認できる仕組みを作る方が安定します。入力する数字を固定し、月末に見直す習慣を作ると、収入や資産形成の変化を追いやすくなります。</p>
          <h2>積立額の決め方</h2>
          <p>初心者は、毎月の余剰資金から積立額を決めるのがおすすめです。家計が不安定な状態で投資額を大きくすると、下落時に続けられなくなります。まずは月5,000円や1万円から始め、慣れてきたら増額を検討しましょう。</p>
          <h3>注意したい落とし穴</h3>
          <p>制度や税率は人によって前提が変わります。特に税金、住民税、投資制度、年金は、勤務先、自治体、所得、年齢によって扱いが異なることがあります。シミュレーターの結果は概算として使い、必要に応じて公式情報を確認してください。</p>
          <h2>商品選びの注意点</h2>
          <p>つみたて投資枠では、長期・積立・分散投資に向いた一定の商品が対象です。短期で大きく増やすことを狙うより、長く続ける仕組みを作る方が新NISAの特徴に合っています。</p>
          <h3>次にやること</h3>
          <p>記事を読んだら、自分の数字を入力して試算しましょう。副業の収入は副業月収シミュレーター、税金は所得税・住民税シミュレーター、資産形成は新NISA・iDeCo・FIRE・老後資金シミュレーターを使うと、次の行動を決めやすくなります。</p>
          <h2>新NISAを始める確認手順</h2>
          <p>最初に生活防衛資金を確認し、すぐに使う予定のあるお金を投資に回さないようにします。次に、毎月の余剰資金から積立額を決め、つみたて投資枠を中心に長期で続ける設計を考えます。商品を選ぶときは、手数料、投資対象、分散性、純資産、運用方針を確認しましょう。制度の枠が大きくても、無理に満額を使う必要はありません。</p>
          <h3>見直しタイミング</h3>
          <p>新NISAは長期投資向けの制度ですが、放置しすぎるのもよくありません。年に一度は積立額、家計、保有商品、目標金額を確認しましょう。収入が増えたら積立額を上げ、支出が増えたら一時的に下げる判断も必要です。FIREや老後資金の目標とつなげて見ると、投資の目的がぶれにくくなります。</p>
          <h2>記録しておきたい項目</h2>
          <p>あとから見直せるように、日付、金額、目的、判断理由を残しておきましょう。副業なら売上、経費、作業時間、取引先、請求日を記録します。税金なら所得、控除、納付予定額、住民税の通知内容を残します。投資や老後資金なら、毎月の積立額、評価額、生活費、目標額を記録します。数字だけでなく、その月に何を変えたかも残すと、次の改善につながります。</p>
          <h3>失敗しにくい進め方</h3>
          <p>最初から大きな金額を動かすより、小さく始めて毎月見直す方が続きます。副業では低単価のまま作業量を増やしすぎないこと、税金では納税資金を別に残すこと、投資では生活費まで投資に回さないことが大切です。シミュレーターの結果が良くても、現実の生活に無理があれば長続きしません。自分の時間、家計、リスク許容度に合わせて調整しましょう。</p>
          <h2>関連シミュレーター</h2>
          <p>副業収入、税金、手取り、投資、老後資金はつながっています。単独の記事として読むだけでなく、トップページの各ツールで実際の数字を入れると、家計に与える影響が具体的になります。</p>
          <h2>FAQ</h2>
          <div class="faq-list">
            <details><summary>この記事の内容だけで判断してよいですか？</summary><p>制度や税金は個別事情で変わります。この記事は一般的な整理として使い、最終判断は公式情報や専門家の確認も合わせて行ってください。</p></details>
            <details><summary>どのシミュレーターを使えばいいですか？</summary><p>副業収入は副業月収、税金は所得税・住民税、投資や老後資金は新NISA・iDeCo・FIRE・老後資金シミュレーターを使うと確認しやすいです。</p></details>
            <details><summary>スマホでも確認できますか？</summary><p>各シミュレーターはスマホでも入力しやすいように作っています。記事を読んだあと、そのまま関連リンクから試算できます。</p></details>
          </div>
        </section>
      </div>
    </main>
  </body>
</html>

````

## article-resident-tax-guide.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="副業の住民税について、所得の計算、普通徴収、会社員が注意したい点を初心者向けに解説します。">
    <title>【2026年対応】初心者向け副業の住民税完全ガイド｜普通徴収3つの注意点</title>
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
          <h1>副業の住民税完全ガイド</h1>
          <p class="lead">副業の住民税は、所得税よりも見落とされやすい税金です。会社員が副業をする場合は、金額の計算だけでなく納付方法も確認しておきましょう。</p>
          <nav class="tool-nav" aria-label="関連リンク">
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#income-tax">所得税</a>
            <a href="index.html#resident-tax">住民税</a>
            <a href="index.html#nisa">新NISA</a>
            <a href="index.html#ideco">iDeCo</a>
            <a href="index.html#fire">FIRE</a>
            <a href="index.html#retirement">老後資金</a>
          </nav>
        </header>
        <section class="content-panel">
          <p>副業の住民税は、所得税よりも見落とされやすい税金です。会社員が副業をする場合は、金額の計算だけでなく納付方法も確認しておきましょう。</p>
          <h2>住民税は副業所得にもかかる</h2>
          <p>住民税は、前年の所得をもとに自治体が計算する地方税です。副業で得た収入も、経費を差し引いた所得として扱われる場合があります。所得税の確定申告が不要なケースでも、住民税の申告が必要になることがあるため、「20万円以下なら何もしなくてよい」と単純に考えないことが大切です。</p>
          <h3>最初に見る数字</h3>
          <p>目標を考えるときは、売上や資産額だけでなく、手取り、税金、毎月の積立余力まで並べて確認します。数字を分けると、今すぐ変えるべき行動と、時間をかけて育てる行動が見えます。</p>
          <h2>所得割と均等割</h2>
          <p>住民税は大きく所得割と均等割に分けられます。所得割は課税所得に税率をかけて計算する部分で、多くの場合は10%前後が目安です。均等割は所得にかかわらず一定額がかかる部分で、自治体によって金額が異なります。</p>
          <h3>続けるための工夫</h3>
          <p>一度だけ大きく頑張るより、毎月同じ手順で確認できる仕組みを作る方が安定します。入力する数字を固定し、月末に見直す習慣を作ると、収入や資産形成の変化を追いやすくなります。</p>
          <h2>普通徴収を選ぶときの注意点</h2>
          <p>会社員が副業をしている場合、住民税の納付方法として「普通徴収」を選ぶ場面があります。普通徴収は自分で納付する方法です。ただし、必ず希望どおりになるとは限らず、給与所得に関する住民税は会社経由で特別徴収されるのが基本です。</p>
          <h3>注意したい落とし穴</h3>
          <p>制度や税率は人によって前提が変わります。特に税金、住民税、投資制度、年金は、勤務先、自治体、所得、年齢によって扱いが異なることがあります。シミュレーターの結果は概算として使い、必要に応じて公式情報を確認してください。</p>
          <h2>手取りへの影響を確認する</h2>
          <p>住民税は翌年に発生するため、売上が入った年と支払いのタイミングがずれます。副業売上の一部は税金用に分けておきましょう。所得税、住民税、手取りはつながっているため、複数のシミュレーターで確認すると安心です。</p>
          <h3>次にやること</h3>
          <p>記事を読んだら、自分の数字を入力して試算しましょう。副業の収入は副業月収シミュレーター、税金は所得税・住民税シミュレーター、資産形成は新NISA・iDeCo・FIRE・老後資金シミュレーターを使うと、次の行動を決めやすくなります。</p>
          <h2>住民税を確認する手順</h2>
          <p>まず年間副業売上から経費を差し引き、副業所得を出します。次に基礎控除や青色申告控除の影響を見て、課税所得の目安を確認します。住民税率と均等割額を入力すると、年間負担と月平均が見えます。会社員の場合は、確定申告書や住民税申告書の納付方法欄も確認しましょう。普通徴収を希望する場合でも、提出後に自治体へ確認すると安心です。</p>
          <h3>見直しタイミング</h3>
          <p>住民税は前年所得をもとに翌年支払うため、副業が伸びた翌年に負担が増えやすい税金です。売上が増えた月だけで判断せず、年間所得で考えましょう。引っ越し、転職、副業形態の変更、所得区分の変更があった場合も見直しが必要です。所得税の申告だけで終わらせず、住民税の通知が届いたら内容を確認してください。</p>
          <h2>記録しておきたい項目</h2>
          <p>あとから見直せるように、日付、金額、目的、判断理由を残しておきましょう。副業なら売上、経費、作業時間、取引先、請求日を記録します。税金なら所得、控除、納付予定額、住民税の通知内容を残します。投資や老後資金なら、毎月の積立額、評価額、生活費、目標額を記録します。数字だけでなく、その月に何を変えたかも残すと、次の改善につながります。</p>
          <h3>失敗しにくい進め方</h3>
          <p>最初から大きな金額を動かすより、小さく始めて毎月見直す方が続きます。副業では低単価のまま作業量を増やしすぎないこと、税金では納税資金を別に残すこと、投資では生活費まで投資に回さないことが大切です。シミュレーターの結果が良くても、現実の生活に無理があれば長続きしません。自分の時間、家計、リスク許容度に合わせて調整しましょう。</p>
          <h2>関連シミュレーター</h2>
          <p>副業収入、税金、手取り、投資、老後資金はつながっています。単独の記事として読むだけでなく、トップページの各ツールで実際の数字を入れると、家計に与える影響が具体的になります。</p>
          <h2>FAQ</h2>
          <div class="faq-list">
            <details><summary>この記事の内容だけで判断してよいですか？</summary><p>制度や税金は個別事情で変わります。この記事は一般的な整理として使い、最終判断は公式情報や専門家の確認も合わせて行ってください。</p></details>
            <details><summary>どのシミュレーターを使えばいいですか？</summary><p>副業収入は副業月収、税金は所得税・住民税、投資や老後資金は新NISA・iDeCo・FIRE・老後資金シミュレーターを使うと確認しやすいです。</p></details>
            <details><summary>スマホでも確認できますか？</summary><p>各シミュレーターはスマホでも入力しやすいように作っています。記事を読んだあと、そのまま関連リンクから試算できます。</p></details>
          </div>
        </section>
      </div>
    </main>
  </body>
</html>

````

## article-retirement-2000.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="老後資金2000万円問題の背景、必要額の考え方、年金・生活費・資産形成の準備方法を解説します。">
    <title>【2026年対応】初心者向け老後資金2000万円問題とは｜必要額の考え方</title>
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
          <h1>老後資金2000万円問題とは</h1>
          <p class="lead">老後資金2000万円問題は、老後に必要な金額を考えるきっかけになったテーマです。数字だけを怖がるのではなく、自分の生活費で試算することが大切です。</p>
          <nav class="tool-nav" aria-label="関連リンク">
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#income-tax">所得税</a>
            <a href="index.html#resident-tax">住民税</a>
            <a href="index.html#nisa">新NISA</a>
            <a href="index.html#ideco">iDeCo</a>
            <a href="index.html#fire">FIRE</a>
            <a href="index.html#retirement">老後資金</a>
          </nav>
        </header>
        <section class="content-panel">
          <p>老後資金2000万円問題は、老後に必要な金額を考えるきっかけになったテーマです。数字だけを怖がるのではなく、自分の生活費で試算することが大切です。</p>
          <h2>2000万円問題の背景</h2>
          <p>老後資金2000万円問題は、2019年に金融審議会の報告書が話題になったことで広く知られるようになりました。高齢夫婦無職世帯の毎月の不足額を長期間で積み上げると、老後にまとまった資金が必要になるという文脈で語られました。ただし、2000万円はすべての人にそのまま当てはまる数字ではありません。</p>
          <h3>最初に見る数字</h3>
          <p>目標を考えるときは、売上や資産額だけでなく、手取り、税金、毎月の積立余力まで並べて確認します。数字を分けると、今すぐ変えるべき行動と、時間をかけて育てる行動が見えます。</p>
          <h2>必要額は自分の生活費で決める</h2>
          <p>老後資金を考えるときは、まず退職後の毎月生活費を見積もります。食費、住居費、水道光熱費、通信費、保険料、医療費、交際費、趣味、車関連費などを分けて書き出します。次に、年金見込み額や退職後の収入を確認し、毎月の不足額を出します。</p>
          <h3>続けるための工夫</h3>
          <p>一度だけ大きく頑張るより、毎月同じ手順で確認できる仕組みを作る方が安定します。入力する数字を固定し、月末に見直す習慣を作ると、収入や資産形成の変化を追いやすくなります。</p>
          <h2>準備方法は複数ある</h2>
          <p>老後資金は、貯金だけでなく、長期投資、iDeCo、新NISA、副業収入、働く期間の延長などを組み合わせて準備できます。特に現役世代は、毎月の積立額を早めに決めるほど時間を味方につけやすくなります。</p>
          <h3>注意したい落とし穴</h3>
          <p>制度や税率は人によって前提が変わります。特に税金、住民税、投資制度、年金は、勤務先、自治体、所得、年齢によって扱いが異なることがあります。シミュレーターの結果は概算として使い、必要に応じて公式情報を確認してください。</p>
          <h2>シミュレーターで不足額を確認する</h2>
          <p>老後資金シミュレーターでは、現在の年齢、退職予定年齢、現在の貯蓄、毎月の積立額、想定年利、目標資金、退職後の毎月生活費、年金見込み額を入力できます。2000万円という数字に合わせるより、自分の生活費と年金見込み額で試算することが大切です。</p>
          <h3>次にやること</h3>
          <p>記事を読んだら、自分の数字を入力して試算しましょう。副業の収入は副業月収シミュレーター、税金は所得税・住民税シミュレーター、資産形成は新NISA・iDeCo・FIRE・老後資金シミュレーターを使うと、次の行動を決めやすくなります。</p>
          <h2>老後資金を確認する手順</h2>
          <p>まず現在の年齢、退職予定年齢、現在の貯蓄、毎月の積立額を入力します。次に、退職後の毎月生活費と年金見込み額を入れ、不足額を確認します。生活費と年金の差が月5万円なら30年で1,800万円、月10万円なら3,600万円です。2000万円という数字に合わせるより、自分の不足額を把握することが重要です。</p>
          <h3>見直しタイミング</h3>
          <p>老後資金は、年齢が上がるほど計画の修正余地が小さくなります。毎年、貯蓄額、積立額、運用状況、年金見込み、退職予定年齢を見直しましょう。住宅ローン、医療費、親の介護、働く期間の延長などでも必要額は変わります。新NISAやiDeCo、副業収入を組み合わせると、準備方法の選択肢が増えます。</p>
          <h2>記録しておきたい項目</h2>
          <p>あとから見直せるように、日付、金額、目的、判断理由を残しておきましょう。副業なら売上、経費、作業時間、取引先、請求日を記録します。税金なら所得、控除、納付予定額、住民税の通知内容を残します。投資や老後資金なら、毎月の積立額、評価額、生活費、目標額を記録します。数字だけでなく、その月に何を変えたかも残すと、次の改善につながります。</p>
          <h3>失敗しにくい進め方</h3>
          <p>最初から大きな金額を動かすより、小さく始めて毎月見直す方が続きます。副業では低単価のまま作業量を増やしすぎないこと、税金では納税資金を別に残すこと、投資では生活費まで投資に回さないことが大切です。シミュレーターの結果が良くても、現実の生活に無理があれば長続きしません。自分の時間、家計、リスク許容度に合わせて調整しましょう。</p>
          <h2>関連シミュレーター</h2>
          <p>副業収入、税金、手取り、投資、老後資金はつながっています。単独の記事として読むだけでなく、トップページの各ツールで実際の数字を入れると、家計に与える影響が具体的になります。</p>
          <h2>FAQ</h2>
          <div class="faq-list">
            <details><summary>この記事の内容だけで判断してよいですか？</summary><p>制度や税金は個別事情で変わります。この記事は一般的な整理として使い、最終判断は公式情報や専門家の確認も合わせて行ってください。</p></details>
            <details><summary>どのシミュレーターを使えばいいですか？</summary><p>副業収入は副業月収、税金は所得税・住民税、投資や老後資金は新NISA・iDeCo・FIRE・老後資金シミュレーターを使うと確認しやすいです。</p></details>
            <details><summary>スマホでも確認できますか？</summary><p>各シミュレーターはスマホでも入力しやすいように作っています。記事を読んだあと、そのまま関連リンクから試算できます。</p></details>
          </div>
        </section>
      </div>
    </main>
  </body>
</html>

````

## article-securities-account-comparison.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="初心者が証券口座を選ぶときの基準を、NISA対応、手数料、画面の使いやすさ、ポイント連携、商品ラインナップで比較します。">
    <title>【2026年対応】初心者向けおすすめ証券口座比較｜5項目で選ぶ</title>
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
          <h1>初心者向けおすすめ証券口座比較</h1>
          <p class="lead">証券口座は、手数料の安さだけでなく、NISAの使いやすさ、積立設定、ポイント連携、サポート、長く続けられる画面設計まで含めて選ぶことが大切です。</p>
          <nav class="tool-nav" aria-label="関連リンク">
            <a href="index.html#nisa">新NISA</a>
            <a href="index.html#dividend">配当金</a>
            <a href="index.html#fire">FIRE</a>
            <a href="index.html#side-fire">サイドFIRE</a>
            <a href="index.html#retirement">老後資金</a>
            <a href="article-new-nisa-start.html">新NISAの始め方</a>
          </nav>
        </header>
        <section class="content-panel">
          <p>投資を始めるとき、最初につまずきやすいのが証券口座選びです。銀行、ネット証券、対面証券など選択肢は多く、さらにNISA、投信積立、国内株、米国株、ポイント投資、クレカ積立など、見る項目も増えています。初心者ほど「ランキング上位だから」「キャンペーンがあるから」だけで決めず、自分が実際に使う機能に絞って比べるのがおすすめです。</p>
          <p>この記事では、初心者が比較しやすいように、SBI証券、楽天証券、マネックス証券、松井証券、auカブコム証券を例に、口座選びの見方を整理します。各社の条件、手数料、キャンペーン、ポイント還元は変更されることがあります。申し込み前には必ず公式ページで最新条件を確認してください。</p>
          <h2>初心者が証券口座で見るべき基準</h2>
          <p>初心者が最初に見るべきなのは、売買手数料の細かい差よりも、長く使い続けられるかどうかです。投資は一度だけの買い物ではなく、毎月積み立て、年に数回見直し、必要に応じて商品を変更する行動の積み重ねです。画面が分かりにくい、積立設定が面倒、保有状況が見づらいと、せっかく始めても継続しにくくなります。</p>
          <h3>NISA対応と商品ラインナップ</h3>
          <p>新NISAを使うなら、つみたて投資枠と成長投資枠の両方を使いやすいかを確認します。投資信託の本数が多いか、低コストのインデックスファンドを選びやすいか、国内株や米国株にも対応しているかで、将来の選択肢が変わります。最初は投資信託だけで十分でも、配当金や個別株に興味が出たときに同じ口座で管理できると便利です。</p>
          <h3>手数料とポイント連携</h3>
          <p>ネット証券は手数料競争が進んでいますが、無料条件や対象商品は会社によって異なります。ポイント投資やクレカ積立は魅力的ですが、還元率だけで選ぶと、普段使っていない経済圏に合わせる手間が増えることもあります。楽天ポイント、Vポイント、Pontaポイントなど、自分が日常で使いやすいポイントと相性がよいかも見ておきましょう。</p>
          <h2>証券口座比較表</h2>
          <div class="comparison-table" role="region" aria-label="初心者向け証券口座比較表" tabindex="0">
            <table>
              <thead><tr><th>証券口座</th><th>向いている人</th><th>NISAの見やすさ</th><th>ポイント連携</th><th>初心者の注意点</th></tr></thead>
              <tbody>
                <tr><td>SBI証券</td><td>商品数や機能の広さを重視する人</td><td>投信、国内株、米国株など幅広く使いやすい</td><td>複数ポイントに対応する仕組みがある</td><td>機能が多いため最初は設定項目を絞る</td></tr>
                <tr><td>楽天証券</td><td>楽天経済圏や画面の分かりやすさを重視する人</td><td>積立設定や保有確認を日常的に見やすい</td><td>楽天ポイントとの相性がよい</td><td>ポイント条件やキャンペーン変更を確認する</td></tr>
                <tr><td>マネックス証券</td><td>米国株や分析情報も見たい人</td><td>NISAと米国株を組み合わせたい人に候補</td><td>クレカ積立などの条件を確認したい</td><td>利用カードや還元条件を公式で確認する</td></tr>
                <tr><td>松井証券</td><td>サポートやシンプルな利用感を重視する人</td><td>長期投資を落ち着いて始めたい人に候補</td><td>ポイント制度は最新条件を確認</td><td>商品数よりサポート重視かを考える</td></tr>
                <tr><td>auカブコム証券</td><td>au、Ponta、通信系サービスと合わせたい人</td><td>積立や国内株の利用に候補</td><td>Pontaポイントとの連携を確認</td><td>自分の生活圏に合うかを先に見る</td></tr>
              </tbody>
            </table>
          </div>
          <h2>初心者におすすめしやすい選び方</h2>
          <p>迷ったときは、最初に「新NISAで投資信託を毎月積み立てる」用途に絞って選ぶと判断しやすくなります。国内株や米国株、信用取引、FXなどは後から使う可能性があっても、最初からすべてを理解する必要はありません。低コストの投資信託を選びやすく、積立日、金額、引落方法を設定しやすい口座なら、最初の一歩として十分です。</p>
          <p>一方で、将来配当金を増やしたい人は、国内株や米国株の管理しやすさも見ておくとよいでしょう。配当金シミュレーターで年間配当金の目安を確認し、FIREシミュレーターで必要資産額を見れば、証券口座を選ぶ目的がはっきりします。投資は口座開設がゴールではなく、家計の中で継続できる金額を決めるところから始まります。</p>
          <h3>複数口座を使い分けるべきか</h3>
          <p>初心者は、まず一つの口座で慣れるのがおすすめです。複数口座を持つと、商品比較やキャンペーン活用はしやすくなりますが、保有状況、損益、積立設定、書類管理が分散します。確定申告が必要な取引をする場合も、管理する資料が増えます。NISA口座は一人一金融機関が基本なので、変更の手間も考慮して選びましょう。</p>
          <h2>証券口座選びと家計シミュレーション</h2>
          <p>証券口座を選んだら、次は毎月いくら投資できるかを決めます。新NISAシミュレーターでは、毎月積立額、想定年利、運用年数から将来資産を試算できます。副業収入がある人は、副業月収シミュレーターや副業手取り計算で、税金を引いた後に投資へ回せる金額を確認しましょう。老後資金シミュレーターと組み合わせると、投資が将来の不足額をどのくらい埋めるかも見えます。</p>
          <h2>失敗しにくい申し込み前チェック</h2>
          <p>口座開設前には、本人確認書類、マイナンバー、入出金に使う銀行口座、NISA口座の有無を確認しておきます。すでに別の金融機関でNISA口座を持っている場合は、新しい金融機関でそのまま開設できないことがあります。前年に買付をしているか、変更できる時期か、保有商品をどう扱うかによって手続きが変わるため、勢いだけで申し込まず、現在の口座状況を整理しましょう。</p>
          <p>キャンペーンも大切ですが、キャンペーンだけを理由に選ぶと、終了後に使いにくさが残ることがあります。初心者は、毎月の積立設定が簡単か、スマホで評価額を確認しやすいか、投資信託の検索画面で信託報酬や投資対象を見比べやすいかを優先すると安心です。長期投資では、最初の数カ月よりも、5年、10年続けられる環境の方が大きな差になります。</p>
          <h3>初回設定で決めておきたいこと</h3>
          <p>口座開設後は、積立金額、積立日、引落方法、購入する商品、ポイント利用の有無を決めます。最初から複数商品を買いすぎると、何に投資しているのか分かりにくくなります。全世界株式や米国株式など、投資対象の広いインデックスファンドを中心に考え、慣れてから配当株や個別株を検討すると管理しやすいです。新NISAは枠が大きい制度ですが、満額を使う必要はありません。家計に余裕がある範囲で、長く続けられる金額を選びましょう。</p>
          <h2>口座開設後の見直しポイント</h2>
          <p>証券口座は開設して終わりではありません。年に一度は、積立額、保有商品、手数料、ポイント条件、家計の余裕資金を確認しましょう。収入が増えたら積立額を増やす、教育費や住宅ローンが重くなったら一時的に減らすなど、生活に合わせた調整が必要です。FIREや老後資金を目指す人は、資産額だけでなく、生活費、配当金、退職後の必要額も一緒に見ると、投資の目的がぶれにくくなります。</p>
          <h2>公式情報リンク</h2>
          <p>制度や口座条件は変わるため、最終確認は公式ページで行いましょう。NISA制度の基本は <a href="https://www.fsa.go.jp/policy/nisa2/">金融庁 NISA特設ウェブサイト</a>、各口座の最新条件は <a href="https://www.sbisec.co.jp/visitor/nisa">SBI証券</a>、<a href="https://www.rakuten-sec.co.jp/nisa/">楽天証券</a>、<a href="https://www.monex.co.jp/">マネックス証券</a>、<a href="https://www.matsui.co.jp/">松井証券</a>、<a href="https://kabu.com/">auカブコム証券</a>で確認できます。</p>
          <h2>FAQ</h2>
          <div class="faq-list">
            <details><summary>初心者はどの証券口座を選べばいいですか？</summary><p>一つの正解はありません。新NISAで投資信託を積み立てたいなら、低コスト商品を選びやすく、積立設定が分かりやすく、普段使うポイントやカードと相性がよい口座から選ぶと続けやすいです。</p></details>
            <details><summary>NISA口座はあとから変更できますか？</summary><p>変更は可能ですが、手続き時期や保有商品の扱いに注意が必要です。頻繁に変える前提ではなく、最初に長く使えるかを確認して選びましょう。</p></details>
            <details><summary>投資額はいくらから始めるべきですか？</summary><p>生活防衛資金を確保したうえで、毎月続けられる金額から始めるのが現実的です。新NISAシミュレーターで少額から試算し、家計に無理がなければ増額を検討しましょう。</p></details>
          </div>
        </section>
      </div>
    </main>
  </body>
</html>

````

## article-side-income-100000.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="副業で月10万円を目指すための単価設計、継続案件、外注化、税金管理を解説します。">
    <title>【2026年対応】初心者向け副業で月10万円を目指す方法｜7つの手順</title>
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
          <h1>副業で月10万円を目指す方法</h1>
          <p class="lead">月10万円の副業収入は、生活費の補填だけでなく資産形成にも効きます。一方で、時間を増やすだけでは疲弊しやすいため、単価と仕組みを整えることが大切です。</p>
          <nav class="tool-nav" aria-label="関連リンク">
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#income-tax">所得税</a>
            <a href="index.html#resident-tax">住民税</a>
            <a href="index.html#nisa">新NISA</a>
            <a href="index.html#ideco">iDeCo</a>
            <a href="index.html#fire">FIRE</a>
            <a href="index.html#retirement">老後資金</a>
          </nav>
        </header>
        <section class="content-panel">
          <p>月10万円の副業収入は、生活費の補填だけでなく資産形成にも効きます。一方で、時間を増やすだけでは疲弊しやすいため、単価と仕組みを整えることが大切です。</p>
          <h2>月10万円に必要な考え方</h2>
          <p>副業で月10万円を目指す場合、月5万円の延長で作業量を倍にするだけでは続きにくくなります。本業、家事、睡眠を削って売上を作ると、短期的には達成できても品質が落ち、継続依頼も減りやすくなります。月10万円は、作業時間、単価、案件の継続率をセットで設計する目標です。</p>
          <h3>最初に見る数字</h3>
          <p>目標を考えるときは、売上や資産額だけでなく、手取り、税金、毎月の積立余力まで並べて確認します。数字を分けると、今すぐ変えるべき行動と、時間をかけて育てる行動が見えます。</p>
          <h2>単価を上げるための準備</h2>
          <p>単価を上げるには、成果物だけでなく依頼者の手間を減らすことが重要です。ヒアリング項目を用意する、初稿の意図を説明する、修正回数を減らす、納品データを整理する。このような小さな工夫が、継続依頼や単価アップにつながります。</p>
          <h3>続けるための工夫</h3>
          <p>一度だけ大きく頑張るより、毎月同じ手順で確認できる仕組みを作る方が安定します。入力する数字を固定し、月末に見直す習慣を作ると、収入や資産形成の変化を追いやすくなります。</p>
          <h2>継続案件を増やす</h2>
          <p>月10万円を安定させるには、単発案件だけでなく継続案件が必要です。毎月決まった作業があると、営業に使う時間が減り、収入の見通しも立てやすくなります。SNS投稿、月次レポート、記事更新、経理補助などは継続化しやすい仕事です。</p>
          <h3>注意したい落とし穴</h3>
          <p>制度や税率は人によって前提が変わります。特に税金、住民税、投資制度、年金は、勤務先、自治体、所得、年齢によって扱いが異なることがあります。シミュレーターの結果は概算として使い、必要に応じて公式情報を確認してください。</p>
          <h2>税金と手取りを早めに確認する</h2>
          <p>月10万円になると年間売上は120万円です。経費を差し引いた所得が増えるため、所得税や住民税の影響も無視できません。副業所得税シミュレーター、住民税シミュレーター、副業手取り計算を使い、手元に残る金額を確認しましょう。</p>
          <h3>次にやること</h3>
          <p>記事を読んだら、自分の数字を入力して試算しましょう。副業の収入は副業月収シミュレーター、税金は所得税・住民税シミュレーター、資産形成は新NISA・iDeCo・FIRE・老後資金シミュレーターを使うと、次の行動を決めやすくなります。</p>
          <h2>月10万円へ進む確認手順</h2>
          <p>月10万円を目指すなら、営業、制作、修正、請求の流れを分けて管理します。毎週の作業時間を決め、営業日と制作日を分けると、納期遅れを防ぎやすくなります。案件ごとに時給換算を出し、低すぎる案件は値上げ、範囲調整、終了の候補にします。継続案件が増えたら、作業手順をテンプレート化し、自分しか分からない作業を減らしましょう。</p>
          <h3>見直しタイミング</h3>
          <p>月10万円を超えると、税金だけでなく本業とのバランスも重要になります。睡眠不足が続く、休日がなくなる、納品品質が落ちる場合は、作業量ではなく単価を見直す時期です。売上の一部を税金用に分け、残りを生活費と資産形成に配分します。新NISAやiDeCoに回す金額を決めると、副業収入が将来の資産に変わっていきます。</p>
          <h2>記録しておきたい項目</h2>
          <p>あとから見直せるように、日付、金額、目的、判断理由を残しておきましょう。副業なら売上、経費、作業時間、取引先、請求日を記録します。税金なら所得、控除、納付予定額、住民税の通知内容を残します。投資や老後資金なら、毎月の積立額、評価額、生活費、目標額を記録します。数字だけでなく、その月に何を変えたかも残すと、次の改善につながります。</p>
          <h3>失敗しにくい進め方</h3>
          <p>最初から大きな金額を動かすより、小さく始めて毎月見直す方が続きます。副業では低単価のまま作業量を増やしすぎないこと、税金では納税資金を別に残すこと、投資では生活費まで投資に回さないことが大切です。シミュレーターの結果が良くても、現実の生活に無理があれば長続きしません。自分の時間、家計、リスク許容度に合わせて調整しましょう。</p>
          <h2>関連シミュレーター</h2>
          <p>副業収入、税金、手取り、投資、老後資金はつながっています。単独の記事として読むだけでなく、トップページの各ツールで実際の数字を入れると、家計に与える影響が具体的になります。</p>
          <h2>FAQ</h2>
          <div class="faq-list">
            <details><summary>この記事の内容だけで判断してよいですか？</summary><p>制度や税金は個別事情で変わります。この記事は一般的な整理として使い、最終判断は公式情報や専門家の確認も合わせて行ってください。</p></details>
            <details><summary>どのシミュレーターを使えばいいですか？</summary><p>副業収入は副業月収、税金は所得税・住民税、投資や老後資金は新NISA・iDeCo・FIRE・老後資金シミュレーターを使うと確認しやすいです。</p></details>
            <details><summary>スマホでも確認できますか？</summary><p>各シミュレーターはスマホでも入力しやすいように作っています。記事を読んだあと、そのまま関連リンクから試算できます。</p></details>
          </div>
        </section>
      </div>
    </main>
  </body>
</html>

````

## article-side-income-50000.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="副業で月5万円を稼ぐための案件選び、時間設計、単価アップ、税金管理を初心者向けに解説します。">
    <title>【2026年対応】初心者向け副業で月5万円を稼ぐ方法｜7つの手順</title>
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
          <h1>副業で月5万円を稼ぐ方法</h1>
          <p class="lead">月5万円は、副業を家計改善につなげる最初の現実的な目標です。必要な時間、単価、税金までまとめて考えると、無理なく続けやすくなります。</p>
          <nav class="tool-nav" aria-label="関連リンク">
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#income-tax">所得税</a>
            <a href="index.html#resident-tax">住民税</a>
            <a href="index.html#nisa">新NISA</a>
            <a href="index.html#ideco">iDeCo</a>
            <a href="index.html#fire">FIRE</a>
            <a href="index.html#retirement">老後資金</a>
          </nav>
        </header>
        <section class="content-panel">
          <p>月5万円は、副業を家計改善につなげる最初の現実的な目標です。必要な時間、単価、税金までまとめて考えると、無理なく続けやすくなります。</p>
          <h2>月5万円はどのくらいの目標か</h2>
          <p>副業で月5万円を目指すときは、まず売上と手取りを分けて考えます。月5万円の売上があっても、経費や税金を差し引くと手元に残る金額は少し下がります。時給、作業時間、案件数を数字にしておくと、達成までの距離が見えます。たとえば時給2,500円なら月20時間、時給5,000円なら月10時間が目安です。平日夜に1時間、週末に数時間を確保できる人なら、現実的に挑戦しやすい水準です。</p>
          <h3>最初に見る数字</h3>
          <p>目標を考えるときは、売上や資産額だけでなく、手取り、税金、毎月の積立余力まで並べて確認します。数字を分けると、今すぐ変えるべき行動と、時間をかけて育てる行動が見えます。</p>
          <h2>おすすめの副業ジャンル</h2>
          <p>初心者が月5万円を狙いやすいジャンルは、Webライティング、資料作成、SNS運用補助、画像作成、動画編集の一部作業、オンライン事務、データ整理などです。AIツールを使える場合は、下書き作成、構成案、リサーチ整理、表現チェックに活用すると、同じ時間で処理できる量を増やせます。</p>
          <h3>続けるための工夫</h3>
          <p>一度だけ大きく頑張るより、毎月同じ手順で確認できる仕組みを作る方が安定します。入力する数字を固定し、月末に見直す習慣を作ると、収入や資産形成の変化を追いやすくなります。</p>
          <h2>時間と単価をシミュレーションする</h2>
          <p>月5万円を達成するには、必要な作業時間を先に計算しましょう。時給1,500円なら約34時間、時給2,000円なら25時間、時給3,000円なら約17時間です。まずは副業月収シミュレーターで、時給、月の作業時間、案件数を入力し、月収と年収の目安を確認してください。</p>
          <h3>注意したい落とし穴</h3>
          <p>制度や税率は人によって前提が変わります。特に税金、住民税、投資制度、年金は、勤務先、自治体、所得、年齢によって扱いが異なることがあります。シミュレーターの結果は概算として使い、必要に応じて公式情報を確認してください。</p>
          <h2>月5万円を続けるコツ</h2>
          <p>毎週の作業時間を固定し、案件ごとの作業時間を記録しましょう。時給換算で低すぎる案件は、次回から条件を見直す材料になります。月5万円を超えたら、テンプレート化、チェックリスト化、単価交渉を進めると、月10万円への道が見えます。</p>
          <h3>次にやること</h3>
          <p>記事を読んだら、自分の数字を入力して試算しましょう。副業の収入は副業月収シミュレーター、税金は所得税・住民税シミュレーター、資産形成は新NISA・iDeCo・FIRE・老後資金シミュレーターを使うと、次の行動を決めやすくなります。</p>
          <h2>月5万円を現実にする確認手順</h2>
          <p>最初の週は、得意な作業を一つ選び、募集案件を20件ほど見て相場を確認します。次の週にプロフィールや実績欄を整え、3件から5件に応募します。受注できたら、作業時間、修正回数、納品までに困った点を記録してください。1件ごとの振り返りを残すと、次に同じ作業をしたときの時間が短くなります。月末には、売上、経費、作業時間をまとめ、時給換算で続けるべき案件かを判断します。</p>
          <h3>見直しタイミング</h3>
          <p>月5万円を一度達成しても、毎月同じように続くとは限りません。依頼者の都合で案件が止まることもあるため、収入源を一つに偏らせないことが大切です。継続案件を一つ持ちながら、単発案件や新しいスキル習得も少しずつ進めましょう。税金用に売上の一部を残し、残りを生活費、貯蓄、投資に分けると、副業収入が家計改善に直結しやすくなります。</p>
          <h2>記録しておきたい項目</h2>
          <p>あとから見直せるように、日付、金額、目的、判断理由を残しておきましょう。副業なら売上、経費、作業時間、取引先、請求日を記録します。税金なら所得、控除、納付予定額、住民税の通知内容を残します。投資や老後資金なら、毎月の積立額、評価額、生活費、目標額を記録します。数字だけでなく、その月に何を変えたかも残すと、次の改善につながります。</p>
          <h3>失敗しにくい進め方</h3>
          <p>最初から大きな金額を動かすより、小さく始めて毎月見直す方が続きます。副業では低単価のまま作業量を増やしすぎないこと、税金では納税資金を別に残すこと、投資では生活費まで投資に回さないことが大切です。シミュレーターの結果が良くても、現実の生活に無理があれば長続きしません。自分の時間、家計、リスク許容度に合わせて調整しましょう。</p>
          <h2>関連シミュレーター</h2>
          <p>副業収入、税金、手取り、投資、老後資金はつながっています。単独の記事として読むだけでなく、トップページの各ツールで実際の数字を入れると、家計に与える影響が具体的になります。</p>
          <h2>FAQ</h2>
          <div class="faq-list">
            <details><summary>この記事の内容だけで判断してよいですか？</summary><p>制度や税金は個別事情で変わります。この記事は一般的な整理として使い、最終判断は公式情報や専門家の確認も合わせて行ってください。</p></details>
            <details><summary>どのシミュレーターを使えばいいですか？</summary><p>副業収入は副業月収、税金は所得税・住民税、投資や老後資金は新NISA・iDeCo・FIRE・老後資金シミュレーターを使うと確認しやすいです。</p></details>
            <details><summary>スマホでも確認できますか？</summary><p>各シミュレーターはスマホでも入力しやすいように作っています。記事を読んだあと、そのまま関連リンクから試算できます。</p></details>
          </div>
        </section>
      </div>
    </main>
  </body>
</html>

````

## article-side-income.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="副業月収シミュレーターの使い方を解説します。時給、作業時間、案件数、税率を入力して月収と手取りの目安を確認できます。">
    <title>【2026年対応】初心者向け副業月収シミュレーターの使い方｜3ステップ解説</title>
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
          <h1>副業月収シミュレーターの使い方</h1>
          <p class="lead">副業の売上感を早めにつかむための入力方法と結果の見方です。</p>
          <nav class="tool-nav" aria-label="関連リンク">
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#tax">税金・青色申告</a>
          </nav>
        </header>
        <section class="content-panel">
          <h2>入力の考え方</h2>
          <p>時給は実際に受け取る単価だけでなく、準備や修正にかかる時間も含めて考えると現実に近づきます。案件数は無理のない平均値を入れると、継続した場合の月収を確認しやすくなります。</p>
          <h2>結果の見方</h2>
          <p>月収と年収は売上ベースの目安です。税引後の金額は入力した税率を反映した簡易計算なので、より細かく確認したい場合は副業手取り計算や税金・青色申告シミュレーターも使ってください。</p>
        </section>
      </div>
    </main>
  </body>
</html>

````

## article-side-tax.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="副業の税金と手取りの考え方を解説します。売上、経費、所得税、住民税、青色申告控除の基本を確認できます。">
    <title>【2026年対応】初心者向け副業の税金と手取り｜5つの基本</title>
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
          <h1>副業の税金と手取りの考え方</h1>
          <p class="lead">副業収入を見るときは、売上だけでなく経費と税金を差し引いた手取りを確認することが大切です。</p>
          <nav class="tool-nav" aria-label="関連リンク">
            <a href="index.html#tax">税金・青色申告</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#side-income">副業月収</a>
          </nav>
        </header>
        <section class="content-panel">
          <h2>売上と所得の違い</h2>
          <p>副業の売上から必要経費を差し引いたものが所得の目安です。税金は売上そのものではなく、所得をもとに考えるのが基本です。</p>
          <h2>青色申告控除の見方</h2>
          <p>青色申告控除は課税所得を下げる効果があります。条件や手続きにより扱いが変わるため、実際の申告では最新情報や専門家への確認も行ってください。</p>
        </section>
      </div>
    </main>
  </body>
</html>

````

## category-education.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="教育費、学資保険比較、住宅ローン、老後資金への影響をまとめた教育カテゴリページです。">
    <title>【2026年対応】初心者向け教育カテゴリ｜教育費と学資保険を比較</title>
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
          <h1>教育カテゴリ</h1>
          <p class="lead">教育費は住宅ローンや老後資金と重なりやすい大きな支出です。必要教育費、不足額、学資保険と積立投資の比較を確認できます。</p>
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
          <p>教育費の総額、不足額、積立額、学資保険比較を確認できます。</p>
          <div class="article-list">
            <a class="article-link" href="index.html#education">
              <strong>教育費シミュレーター</strong>
              <span>子どもの人数と進学ルートから教育費を試算</span>
            </a>
            <a class="article-link" href="index.html#education-insurance">
              <strong>学資保険比較シミュレーター</strong>
              <span>学資保険と積立投資の受取額を比較</span>
            </a>
            <a class="article-link" href="index.html#retirement">
              <strong>老後資金シミュレーター</strong>
              <span>教育費が老後資金へ与える影響を確認</span>
            </a>
            <a class="article-link" href="index.html#mortgage">
              <strong>住宅ローン返済シミュレーター</strong>
              <span>教育費と住宅ローンの両立を確認</span>
            </a>
          </div>
          <h2>関連記事</h2>
          <p>教育費と合わせて、老後資金やFIREの考え方も確認できます。</p>
          <div class="article-list">
            <a class="article-link" href="article-retirement-2000.html">
              <strong>老後資金2000万円問題とは</strong>
              <span>教育費後の老後資金を考える</span>
            </a>
            <a class="article-link" href="article-new-nisa-start.html">
              <strong>新NISAの始め方</strong>
              <span>教育費準備にも使える積立投資の基本</span>
            </a>
            <a class="article-link" href="article-fire-basic.html">
              <strong>FIREとは何か</strong>
              <span>教育費と必要資産の考え方</span>
            </a>
          </div>
          <h2>関連カテゴリ</h2>
          <p>近いテーマのカテゴリも合わせて確認すると、収入、税金、投資、ライフプランのつながりを見やすくなります。</p>
          <div class="related-links">
            <a href="category-housing.html">住宅カテゴリ</a>
            <a href="category-retirement.html">老後カテゴリ</a>
            <a href="category-investment.html">投資カテゴリ</a>
          </div>
        </section>
      </div>
    </main>
  </body>
</html>

````

## category-fire.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="FIRE、会社員FIRE、サイドFIRE、生活防衛資金、配当再投資、新NISA、老後資金をまとめたFIREカテゴリページです。">
    <title>【2026年対応】初心者向けFIREカテゴリ｜達成年数と必要資産を比較</title>
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
          <h1>FIREカテゴリ</h1>
          <p class="lead">FIREを目指す人向けに、必要資産、達成年数、副業収入、配当再投資、生活防衛資金、サイドFIREの考え方をまとめています。</p>
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
          <p>完全FIRE、会社員FIRE、サイドFIRE、配当再投資を比較できます。</p>
          <div class="article-list">
            <a class="article-link" href="index.html#fire">
              <strong>FIRE達成シミュレーター</strong>
              <span>目標資産までの年数を確認</span>
            </a>
            <a class="article-link" href="index.html#employee-fire">
              <strong>会社員FIRE年数計算シミュレーター</strong>
              <span>副業と配当を含めたFIRE達成年数を確認</span>
            </a>
            <a class="article-link" href="index.html#side-fire">
              <strong>サイドFIREシミュレーター</strong>
              <span>生活費を副業と配当で補う場合を試算</span>
            </a>
            <a class="article-link" href="index.html#emergency-fund">
              <strong>生活防衛資金シミュレーター</strong>
              <span>FIRE前に確保したい安全資金を確認</span>
            </a>
            <a class="article-link" href="index.html#dividend-reinvestment">
              <strong>配当再投資シミュレーター</strong>
              <span>配当再投資による資産成長を確認</span>
            </a>
          </div>
          <h2>関連記事</h2>
          <p>FIREの基礎と戦略、投資制度、老後資金の考え方を確認できます。</p>
          <div class="article-list">
            <a class="article-link" href="article-fire-basic.html">
              <strong>FIREとは何か</strong>
              <span>FIREの意味と必要資産を解説</span>
            </a>
            <a class="article-link" href="article-fire-strategy.html">
              <strong>FIRE達成の基本戦略</strong>
              <span>収入、支出、投資のバランス</span>
            </a>
            <a class="article-link" href="article-new-nisa-start.html">
              <strong>新NISAの始め方</strong>
              <span>FIREに使う非課税投資の基本</span>
            </a>
            <a class="article-link" href="article-retirement-2000.html">
              <strong>老後資金2000万円問題とは</strong>
              <span>FIREと老後資金を合わせて考える</span>
            </a>
          </div>
          <h2>関連カテゴリ</h2>
          <p>近いテーマのカテゴリも合わせて確認すると、収入、税金、投資、ライフプランのつながりを見やすくなります。</p>
          <div class="related-links">
            <a href="category-investment.html">投資カテゴリ</a>
            <a href="category-retirement.html">老後カテゴリ</a>
            <a href="category-side-business.html">副業カテゴリ</a>
          </div>
        </section>
      </div>
    </main>
  </body>
</html>

````

## category-housing.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="住宅ローン返済、教育費、老後資金への影響を確認できる住宅カテゴリページです。">
    <title>【2026年対応】初心者向け住宅カテゴリ｜住宅ローンを3分で確認</title>
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
          <h1>住宅カテゴリ</h1>
          <p class="lead">住宅ローンは毎月の固定費と老後資金に大きく影響します。返済額、返済比率、教育費や老後資金とのバランスを確認できます。</p>
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
          <p>住宅ローンとライフプラン資金を合わせて確認できます。</p>
          <div class="article-list">
            <a class="article-link" href="index.html#mortgage">
              <strong>住宅ローン返済シミュレーター</strong>
              <span>毎月返済額、総返済額、返済比率を確認</span>
            </a>
            <a class="article-link" href="index.html#education">
              <strong>教育費シミュレーター</strong>
              <span>教育費と住宅ローンの両立を確認</span>
            </a>
            <a class="article-link" href="index.html#retirement">
              <strong>老後資金シミュレーター</strong>
              <span>住宅費が老後資金に与える影響を確認</span>
            </a>
            <a class="article-link" href="index.html#fire">
              <strong>FIRE達成シミュレーター</strong>
              <span>住宅ローン返済中の資産形成を確認</span>
            </a>
          </div>
          <h2>関連記事</h2>
          <p>住宅ローンと直接関係する資金計画の記事は、教育費や老後資金と合わせて読むと判断しやすくなります。</p>
          <div class="article-list">
            <a class="article-link" href="article-retirement-2000.html">
              <strong>老後資金2000万円問題とは</strong>
              <span>老後資金と生活費の考え方</span>
            </a>
            <a class="article-link" href="article-fire-basic.html">
              <strong>FIREとは何か</strong>
              <span>生活費と必要資産の考え方</span>
            </a>
            <a class="article-link" href="article-company-side-tax-saving.html">
              <strong>会社員の副業税金対策</strong>
              <span>住宅費がある会社員の副業資金管理</span>
            </a>
          </div>
          <h2>関連カテゴリ</h2>
          <p>近いテーマのカテゴリも合わせて確認すると、収入、税金、投資、ライフプランのつながりを見やすくなります。</p>
          <div class="related-links">
            <a href="category-education.html">教育カテゴリ</a>
            <a href="category-retirement.html">老後カテゴリ</a>
            <a href="category-fire.html">FIREカテゴリ</a>
          </div>
        </section>
      </div>
    </main>
  </body>
</html>

````

## category-investment.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="新NISA、クレカ積立、iDeCo、配当金、配当再投資、証券口座比較をまとめた投資カテゴリページです。">
    <title>【2026年対応】初心者向け投資カテゴリ｜新NISA・iDeCoなど5ツール</title>
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
          <p class="lead">資産形成に使う投資系ツールと記事をまとめています。新NISA、クレカ積立、iDeCo、配当金、配当再投資を比較しながら、目的に合う使い方を確認できます。</p>
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
            <a class="article-link" href="index.html#dividend-reinvestment">
              <strong>配当再投資シミュレーター</strong>
              <span>配当再投資による資産成長を確認</span>
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

````

## category-retirement.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="生活防衛資金、老後資金、iDeCo、新NISA、FIRE、住宅ローン、教育費をまとめて確認できる老後カテゴリページです。">
    <title>【2026年対応】初心者向け老後カテゴリ｜老後資金と生活防衛資金を確認</title>
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
          <h1>老後カテゴリ</h1>
          <p class="lead">老後資金は、投資、年金、生活費、住宅ローン、教育費の影響を受けます。生活防衛資金も確認しながら、必要額と不足額、準備方法を整理できます。</p>
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
          <p>老後資金と投資、FIRE、住宅・教育費への影響を合わせて確認できます。</p>
          <div class="article-list">
            <a class="article-link" href="index.html#emergency-fund">
              <strong>生活防衛資金シミュレーター</strong>
              <span>投資やFIRE前に確保したい安全資金を確認</span>
            </a>
            <a class="article-link" href="index.html#retirement">
              <strong>老後資金シミュレーター</strong>
              <span>退職時資産と不足額を確認</span>
            </a>
            <a class="article-link" href="index.html#ideco">
              <strong>iDeCo節税シミュレーター</strong>
              <span>老後資金準備と節税額を確認</span>
            </a>
            <a class="article-link" href="index.html#nisa">
              <strong>新NISA・積立投資シミュレーター</strong>
              <span>積立投資の将来資産を確認</span>
            </a>
            <a class="article-link" href="index.html#fire">
              <strong>FIRE達成シミュレーター</strong>
              <span>老後資金とFIRE目標を比較</span>
            </a>
            <a class="article-link" href="index.html#mortgage">
              <strong>住宅ローン返済シミュレーター</strong>
              <span>住宅費が老後資金に与える影響を確認</span>
            </a>
          </div>
          <h2>関連記事</h2>
          <p>老後資金の基本、iDeCo、新NISA、FIREの記事へ移動できます。</p>
          <div class="article-list">
            <a class="article-link" href="article-retirement-2000.html">
              <strong>老後資金2000万円問題とは</strong>
              <span>老後資金の必要額を考える</span>
            </a>
            <a class="article-link" href="article-ideco-start.html">
              <strong>iDeCoの始め方</strong>
              <span>老後資金準備と節税の基本</span>
            </a>
            <a class="article-link" href="article-new-nisa-start.html">
              <strong>新NISAの始め方</strong>
              <span>長期積立投資の基本</span>
            </a>
            <a class="article-link" href="article-fire-basic.html">
              <strong>FIREとは何か</strong>
              <span>早期リタイアと老後資金の関係</span>
            </a>
          </div>
          <h2>関連カテゴリ</h2>
          <p>近いテーマのカテゴリも合わせて確認すると、収入、税金、投資、ライフプランのつながりを見やすくなります。</p>
          <div class="related-links">
            <a href="category-investment.html">投資カテゴリ</a>
            <a href="category-fire.html">FIREカテゴリ</a>
            <a href="category-education.html">教育カテゴリ</a>
          </div>
        </section>
      </div>
    </main>
  </body>
</html>

````

## category-side-business.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="副業月収、AI副業、利益率、手取り、税金、会計ソフト、クレジットカード、AIツールの記事とシミュレーターをまとめたカテゴリページです。">
    <title>【2026年対応】初心者向け副業カテゴリ｜20ツールから目的別に探す</title>
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
          <h1>副業カテゴリ</h1>
          <p class="lead">副業を始める、収入を伸ばす、利益率を改善する、手取りを確認するためのツールと記事をまとめています。まず月収と利益率、手取りを見て、税金や経費管理へ進むと全体像がつかみやすくなります。</p>
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
          <p>副業の収入、時給、手取り、税金を順番に確認できます。</p>
          <div class="article-list">
            <a class="article-link" href="index.html#side-income">
              <strong>副業月収シミュレーター</strong>
              <span>時給、作業時間、案件数から副業月収を試算</span>
            </a>
            <a class="article-link" href="index.html#ai-hourly">
              <strong>AI副業時給シミュレーター</strong>
              <span>AI活用時の時給と効率改善を確認</span>
            </a>
            <a class="article-link" href="index.html#side-profit-margin">
              <strong>副業利益率シミュレーター</strong>
              <span>売上、経費、作業時間から利益率と時給効率を確認</span>
            </a>
            <a class="article-link" href="index.html#take-home">
              <strong>副業手取り計算シミュレーター</strong>
              <span>税金後の手取り額を確認</span>
            </a>
            <a class="article-link" href="index.html#tax">
              <strong>副業税金・青色申告シミュレーター</strong>
              <span>所得、控除、税金の目安を整理</span>
            </a>
          </div>
          <h2>関連記事</h2>
          <p>副業の始め方、収入アップ、会計・カード・AI活用の記事へ移動できます。</p>
          <div class="article-list">
            <a class="article-link" href="article-side-income-50000.html">
              <strong>副業で月5万円を稼ぐ方法</strong>
              <span>副業初期の時間設計と案件選び</span>
            </a>
            <a class="article-link" href="article-side-income-100000.html">
              <strong>副業で月10万円を目指す方法</strong>
              <span>単価アップと継続案件の考え方</span>
            </a>
            <a class="article-link" href="article-accounting-software-comparison.html">
              <strong>副業向けおすすめ会計ソフト比較</strong>
              <span>確定申告に使いやすい会計ソフトを比較</span>
            </a>
            <a class="article-link" href="article-credit-card-comparison.html">
              <strong>副業向けおすすめクレジットカード比較</strong>
              <span>経費管理に使いやすいカードを比較</span>
            </a>
            <a class="article-link" href="article-ai-tools-comparison.html">
              <strong>副業効率化おすすめAIツール比較</strong>
              <span>作業時間を短縮するAIツールを比較</span>
            </a>
          </div>
          <h2>関連カテゴリ</h2>
          <p>近いテーマのカテゴリも合わせて確認すると、収入、税金、投資、ライフプランのつながりを見やすくなります。</p>
          <div class="related-links">
            <a href="category-tax.html">税金カテゴリ</a>
            <a href="category-investment.html">投資カテゴリ</a>
            <a href="category-fire.html">FIREカテゴリ</a>
          </div>
        </section>
      </div>
    </main>
  </body>
</html>

````

## category-tax.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="副業の所得税、住民税、手取り、青色申告、会社員の税金対策をまとめたカテゴリページです。">
    <title>【2026年対応】初心者向け税金カテゴリ｜所得税・住民税4ツール</title>
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
          <h1>税金カテゴリ</h1>
          <p class="lead">副業の売上が増えたら、手取りと税金の確認が欠かせません。所得税、住民税、青色申告、普通徴収の注意点をまとめて確認できます。</p>
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
          <p>副業所得、所得税、住民税、最終手取りを分けて確認できます。</p>
          <div class="article-list">
            <a class="article-link" href="index.html#tax">
              <strong>副業税金・青色申告シミュレーター</strong>
              <span>副業所得と税額の全体像を確認</span>
            </a>
            <a class="article-link" href="index.html#income-tax">
              <strong>副業所得税シミュレーター</strong>
              <span>所得税と復興特別所得税を試算</span>
            </a>
            <a class="article-link" href="index.html#resident-tax">
              <strong>副業住民税シミュレーター</strong>
              <span>住民税と普通徴収の注意点を確認</span>
            </a>
            <a class="article-link" href="index.html#take-home">
              <strong>副業手取り計算シミュレーター</strong>
              <span>税金後の手取り額を確認</span>
            </a>
          </div>
          <h2>関連記事</h2>
          <p>税金の基礎、住民税、所得税、青色申告の記事をまとめています。</p>
          <div class="article-list">
            <a class="article-link" href="article-side-tax.html">
              <strong>副業税金の基礎知識</strong>
              <span>売上、経費、所得、申告の入り口</span>
            </a>
            <a class="article-link" href="article-resident-tax-guide.html">
              <strong>副業の住民税完全ガイド</strong>
              <span>住民税と普通徴収の注意点</span>
            </a>
            <a class="article-link" href="article-income-tax-guide.html">
              <strong>副業の所得税完全ガイド</strong>
              <span>所得税と控除の整理</span>
            </a>
            <a class="article-link" href="article-blue-return-start.html">
              <strong>青色申告の始め方</strong>
              <span>届出、帳簿、控除の基本</span>
            </a>
            <a class="article-link" href="article-company-side-tax-saving.html">
              <strong>会社員の副業税金対策</strong>
              <span>会社員が注意したい副業税金管理</span>
            </a>
          </div>
          <h2>関連カテゴリ</h2>
          <p>近いテーマのカテゴリも合わせて確認すると、収入、税金、投資、ライフプランのつながりを見やすくなります。</p>
          <div class="related-links">
            <a href="category-side-business.html">副業カテゴリ</a>
            <a href="category-investment.html">投資カテゴリ</a>
            <a href="category-retirement.html">老後カテゴリ</a>
          </div>
        </section>
      </div>
    </main>
  </body>
</html>

````

## contact.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="資産シミュレーターへのお問い合わせページです。不具合、掲載内容、広告、サイト運営に関する連絡先を掲載しています。">
    <title>【2026年対応】初心者向けお問い合わせ｜資産シミュレーター</title>
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
          <h1>お問い合わせ</h1>
          <p class="lead">サイト内容や不具合に関するご連絡はこちらをご確認ください。</p>
          <nav class="tool-nav" aria-label="サイト内リンク">
            <a href="index.html#top">トップ</a>
            <a href="privacy.html">プライバシーポリシー</a>
            <a href="disclaimer.html">免責事項</a>
            <a href="operator.html">運営者情報</a>
          </nav>
        </header>
        <section class="content-panel">
          <h2>連絡先</h2>
          <p>現在、お問い合わせはサイト管理者の確認用ページとして掲載しています。GitHubまたはVercelの運営環境で連絡フォームを追加する場合は、このページにフォームURLまたはメールアドレスを掲載してください。</p>
          <h2>お問い合わせ内容の例</h2>
          <ul>
            <li>シミュレーターの表示や計算に関する不具合</li>
            <li>掲載内容の修正依頼</li>
            <li>広告配信やプライバシーに関する確認</li>
          </ul>
        </section>
      </div>
    </main>
  </body>
</html>

````

## credit-card-investment.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="W8lV0ZXsiS6lCYIRGsdxAnk8X0vIfJix8UBz6ie2gnc" />
    <meta http-equiv="refresh" content="0; url=index.html#credit-card-investment">
    <meta name="description" content="毎月積立額、積立年数、想定年利、クレカ還元率、ポイント再投資有無、NISA利用有無から、クレカ積立と通常積立の差を比較できます。">
    <title>【2026年対応】初心者向けクレカ積立比較シミュレーター｜3分でポイント計算</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <main>
      <div class="app-shell">
        <p><a href="index.html#credit-card-investment">クレカ積立比較シミュレーターを開く</a></p>
        <footer class="site-footer">
          <nav class="footer-links" aria-label="サイト情報">
            <a href="index.html#top">トップ</a>
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#nisa">新NISA・積立投資</a>
            <a href="index.html#credit-card-investment">クレカ積立</a>
            <a href="index.html#ideco">iDeCo節税</a>
            <a href="index.html#dividend-reinvestment">配当再投資</a>
            <a href="index.html#fire">FIRE達成</a>
            <a href="index.html#retirement">老後資金</a>
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

````

## disclaimer.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="資産シミュレーターの免責事項です。計算結果、税金、投資、年金、老後資金に関する注意点を掲載しています。">
    <title>【2026年対応】初心者向け免責事項｜資産シミュレーター</title>
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
          <h1>免責事項</h1>
          <p class="lead">当サイトの計算結果と掲載情報の利用にあたっての注意事項です。</p>
          <nav class="tool-nav" aria-label="サイト内リンク">
            <a href="index.html#top">トップ</a>
            <a href="privacy.html">プライバシーポリシー</a>
            <a href="contact.html">お問い合わせ</a>
            <a href="operator.html">運営者情報</a>
          </nav>
        </header>
        <section class="content-panel">
          <h2>計算結果について</h2>
          <p>当サイトのシミュレーターは、入力値に基づく簡易的な試算を目的としています。実際の税額、手取り額、投資成果、年金額、老後資金は個別条件により異なります。</p>
          <h2>投資・税務判断について</h2>
          <p>掲載内容は特定の金融商品や投資行動を推奨するものではありません。税務や制度の判断が必要な場合は、税理士、社会保険労務士、金融機関などの専門家に確認してください。</p>
          <h2>損害等について</h2>
          <p>当サイトの情報や計算結果を利用したことによって生じた損害について、当サイトでは責任を負いかねます。</p>
        </section>
      </div>
    </main>
  </body>
</html>

````

## dividend-reinvestment.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="W8lV0ZXsiS6lCYIRGsdxAnk8X0vIfJix8UBz6ie2gnc" />
    <meta http-equiv="refresh" content="0; url=index.html#dividend-reinvestment">
    <meta name="description" content="初期投資額、毎月追加投資額、想定配当利回り、想定株価成長率、運用年数、配当再投資有無から、最終資産額、累計配当金、再投資による増加額を試算できます。">
    <title>【2026年対応】初心者向け配当再投資シミュレーター｜3分で複利計算</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <main>
      <div class="app-shell">
        <p><a href="index.html#dividend-reinvestment">配当再投資シミュレーターを開く</a></p>
        <footer class="site-footer">
          <nav class="footer-links" aria-label="サイト情報">
            <a href="index.html#top">トップ</a>
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#ai-hourly">AI副業時給</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#tax">税金・青色申告</a>
            <a href="index.html#nisa">新NISA・積立投資</a>
            <a href="index.html#ideco">iDeCo節税</a>
            <a href="index.html#dividend">配当金</a>
            <a href="index.html#dividend-reinvestment">配当再投資</a>
            <a href="index.html#fire">FIRE達成</a>
            <a href="index.html#side-fire">サイドFIRE</a>
            <a href="index.html#retirement">老後資金</a>
            <a href="index.html#education">教育費</a>
            <a href="index.html#mortgage">住宅ローン</a>
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

````

## dividend.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="W8lV0ZXsiS6lCYIRGsdxAnk8X0vIfJix8UBz6ie2gnc" />
    <meta http-equiv="refresh" content="0; url=index.html#dividend">
    <meta name="description" content="初期投資額、毎月追加投資額、想定配当利回り、運用年数、配当再投資有無から年間配当金、月平均配当金、累計配当金、最終資産額を試算できます。">
    <title>【2026年対応】初心者向け配当金シミュレーター｜3分で年間配当計算</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <main>
      <div class="app-shell">
        <p><a href="index.html#dividend">配当金シミュレーターを開く</a></p>
        <footer class="site-footer">
          <nav class="footer-links" aria-label="サイト情報">
            <a href="index.html#top">トップ</a>
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#ai-hourly">AI副業時給</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#tax">税金・青色申告</a>
            <a href="index.html#nisa">新NISA・積立投資</a>
            <a href="index.html#ideco">iDeCo節税</a>
            <a href="index.html#dividend">配当金</a>
            <a href="index.html#fire">FIRE達成</a>
            <a href="index.html#retirement">老後資金</a>
            <a href="index.html#education">教育費</a>
            <a href="index.html#mortgage">住宅ローン</a>
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

````

## education-insurance.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="W8lV0ZXsiS6lCYIRGsdxAnk8X0vIfJix8UBz6ie2gnc" />
    <meta http-equiv="refresh" content="0; url=index.html#education-insurance">
    <meta name="description" content="毎月積立額、積立年数、想定利回り、学資保険返戻率、子どもの年齢、大学進学予定年齢から学資保険と通常積立投資を比較できます。">
    <title>【2026年対応】初心者向け学資保険比較シミュレーター｜3分で受取額比較</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <main>
      <div class="app-shell">
        <p><a href="index.html#education-insurance">学資保険比較シミュレーターを開く</a></p>
        <footer class="site-footer">
          <nav class="footer-links" aria-label="サイト情報">
            <a href="index.html#top">トップ</a>
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#ai-hourly">AI副業時給</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#tax">税金・青色申告</a>
            <a href="index.html#nisa">新NISA・積立投資</a>
            <a href="index.html#ideco">iDeCo節税</a>
            <a href="index.html#dividend">配当金</a>
            <a href="index.html#fire">FIRE達成</a>
            <a href="index.html#side-fire">サイドFIRE</a>
            <a href="index.html#retirement">老後資金</a>
            <a href="index.html#education">教育費</a>
            <a href="index.html#education-insurance">学資保険</a>
            <a href="index.html#mortgage">住宅ローン</a>
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

````

## education.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="W8lV0ZXsiS6lCYIRGsdxAnk8X0vIfJix8UBz6ie2gnc" />
    <meta http-equiv="refresh" content="0; url=index.html#education">
    <meta name="description" content="子どもの人数、進学コース、大学進学有無、現在の貯蓄額、毎月積立額、想定年利から将来必要な教育費と不足額を試算できます。">
    <title>【2026年対応】初心者向け教育費シミュレーター｜3分で必要額計算</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <main>
      <div class="app-shell">
        <p><a href="index.html#education">教育費シミュレーターを開く</a></p>
        <footer class="site-footer">
          <nav class="footer-links" aria-label="サイト情報">
            <a href="index.html#top">トップ</a>
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#ai-hourly">AI副業時給</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#tax">税金・青色申告</a>
            <a href="index.html#nisa">新NISA・積立投資</a>
            <a href="index.html#ideco">iDeCo節税</a>
            <a href="index.html#fire">FIRE達成</a>
            <a href="index.html#retirement">老後資金</a>
            <a href="index.html#education">教育費</a>
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

````

## emergency-fund.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="W8lV0ZXsiS6lCYIRGsdxAnk8X0vIfJix8UBz6ie2gnc" />
    <meta http-equiv="refresh" content="0; url=index.html#emergency-fund">
    <meta name="description" content="毎月生活費、家族人数、雇用形態、現在貯蓄額、失業時想定期間、副業収入有無から、必要な生活防衛資金と不足額を試算できます。">
    <title>【2026年対応】初心者向け生活防衛資金シミュレーター｜3分で必要額計算</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <main>
      <div class="app-shell">
        <p><a href="index.html#emergency-fund">生活防衛資金シミュレーターを開く</a></p>
        <footer class="site-footer">
          <nav class="footer-links" aria-label="サイト情報">
            <a href="index.html#top">トップ</a>
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#nisa">新NISA・積立投資</a>
            <a href="index.html#fire">FIRE達成</a>
            <a href="index.html#employee-fire">会社員FIRE</a>
            <a href="index.html#side-fire">サイドFIRE</a>
            <a href="index.html#emergency-fund">生活防衛資金</a>
            <a href="index.html#retirement">老後資金</a>
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

````

## employee-fire.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="W8lV0ZXsiS6lCYIRGsdxAnk8X0vIfJix8UBz6ie2gnc" />
    <meta http-equiv="refresh" content="0; url=index.html#employee-fire">
    <meta name="description" content="現在年齢、現在資産、毎月積立額、副業月収、年間生活費、想定年利、配当収入、目標FIRE資産から、会社員のFIRE達成までの年数を試算できます。">
    <title>【2026年対応】初心者向け会社員FIRE年数シミュレーター｜3分で達成年数計算</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <main>
      <div class="app-shell">
        <p><a href="index.html#employee-fire">会社員FIRE年数計算シミュレーターを開く</a></p>
        <footer class="site-footer">
          <nav class="footer-links" aria-label="サイト情報">
            <a href="index.html#top">トップ</a>
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#nisa">新NISA・積立投資</a>
            <a href="index.html#dividend">配当金</a>
            <a href="index.html#dividend-reinvestment">配当再投資</a>
            <a href="index.html#fire">FIRE達成</a>
            <a href="index.html#employee-fire">会社員FIRE</a>
            <a href="index.html#side-fire">サイドFIRE</a>
            <a href="index.html#retirement">老後資金</a>
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

````

## fire.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="W8lV0ZXsiS6lCYIRGsdxAnk8X0vIfJix8UBz6ie2gnc" />
    <meta http-equiv="refresh" content="0; url=index.html#fire">
    <meta name="description" content="現在資産、毎月積立額、想定年利、目標資産からFIRE達成までの年数と将来資産を試算できます。">
    <title>【2026年対応】初心者向けFIRE達成シミュレーター｜3分で必要資産計算</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <main>
      <div class="app-shell">
        <p><a href="index.html#fire">FIRE達成シミュレーターを開く</a></p>
      </div>
    </main>
  </body>
</html>

````

## ideco.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="W8lV0ZXsiS6lCYIRGsdxAnk8X0vIfJix8UBz6ie2gnc" />
    <meta http-equiv="refresh" content="0; url=index.html#ideco">
    <meta name="description" content="年収、課税所得、所得税率、住民税率、毎月のiDeCo掛金、運用年数、想定年利から年間節税額と将来資産の目安を試算できます。">
    <title>【2026年対応】初心者向けiDeCo節税シミュレーター｜3分で節税計算</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <main>
      <div class="app-shell">
        <p><a href="index.html#ideco">iDeCo節税シミュレーターを開く</a></p>
        <footer class="site-footer">
          <nav class="footer-links" aria-label="サイト情報">
            <a href="index.html#top">トップ</a>
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#ai-hourly">AI副業時給</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#tax">税金・青色申告</a>
            <a href="index.html#nisa">新NISA・積立投資</a>
            <a href="index.html#ideco">iDeCo節税</a>
            <a href="index.html#fire">FIRE達成</a>
            <a href="index.html#retirement">老後資金</a>
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

````

## income-tax.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="W8lV0ZXsiS6lCYIRGsdxAnk8X0vIfJix8UBz6ie2gnc" />
    <meta http-equiv="refresh" content="0; url=index.html#income-tax">
    <meta name="description" content="年間副業売上、経費、青色申告控除、基礎控除、その他控除、所得税率、復興特別所得税率から副業の所得税概算を確認できます。">
    <title>【2026年対応】初心者向け副業所得税シミュレーター｜3分で税額計算</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <main>
      <div class="app-shell">
        <p><a href="index.html#income-tax">副業所得税シミュレーターを開く</a></p>
        <footer class="site-footer">
          <nav class="footer-links" aria-label="サイト情報">
            <a href="index.html#top">トップ</a>
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#ai-hourly">AI副業時給</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#tax">税金・青色申告</a>
            <a href="index.html#income-tax">副業所得税</a>
            <a href="index.html#resident-tax">副業住民税</a>
            <a href="index.html#nisa">新NISA・積立投資</a>
            <a href="index.html#ideco">iDeCo節税</a>
            <a href="index.html#fire">FIRE達成</a>
            <a href="index.html#retirement">老後資金</a>
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

````

## index.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="W8lV0ZXsiS6lCYIRGsdxAnk8X0vIfJix8UBz6ie2gnc" />
    <meta name="description" content="副業月収、AI副業時給、副業利益率、副業手取り、副業所得税、副業住民税、新NISA・積立投資、クレカ積立比較、iDeCo節税、配当金、配当再投資、FIRE達成、会社員FIRE、サイドFIRE、生活防衛資金、老後資金、教育費、学資保険比較、住宅ローン、副業税金・青色申告をまとめて試算できるスマホ対応の資産シミュレーターです。">
    <title>【2026年対応】初心者向け資産シミュレーター20選｜副業・税金・FIRE計算</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="script.js?v=20260606-seo-title-optimization"></script>
  </head>
  <body></body>
</html>

````

## mortgage.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="W8lV0ZXsiS6lCYIRGsdxAnk8X0vIfJix8UBz6ie2gnc" />
    <meta http-equiv="refresh" content="0; url=index.html#mortgage">
    <meta name="description" content="借入金額、頭金、金利、返済年数、ボーナス返済、繰上返済額から毎月返済額、総返済額、利息総額、返済比率を試算できます。">
    <title>【2026年対応】初心者向け住宅ローン返済シミュレーター｜3分で月額計算</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <main>
      <div class="app-shell">
        <p><a href="index.html#mortgage">住宅ローン返済シミュレーターを開く</a></p>
        <footer class="site-footer">
          <nav class="footer-links" aria-label="サイト情報">
            <a href="index.html#top">トップ</a>
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#ai-hourly">AI副業時給</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#tax">税金・青色申告</a>
            <a href="index.html#nisa">新NISA・積立投資</a>
            <a href="index.html#ideco">iDeCo節税</a>
            <a href="index.html#fire">FIRE達成</a>
            <a href="index.html#retirement">老後資金</a>
            <a href="index.html#education">教育費</a>
            <a href="index.html#mortgage">住宅ローン</a>
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

````

## nisa.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="W8lV0ZXsiS6lCYIRGsdxAnk8X0vIfJix8UBz6ie2gnc" />
    <meta http-equiv="refresh" content="0; url=index.html#nisa">
    <meta name="description" content="初期投資額、毎月積立額、想定年利、運用年数から新NISAの将来資産額と運用益を試算できます。">
    <title>【2026年対応】初心者向け新NISAシミュレーター｜3分で積立投資計算</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <main>
      <div class="app-shell">
        <p><a href="index.html#nisa">新NISA・積立投資シミュレーターを開く</a></p>
      </div>
    </main>
  </body>
</html>

````

## operator.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="資産シミュレーターの運営者情報です。サイトの目的、掲載内容、運営方針について掲載しています。">
    <title>【2026年対応】初心者向け運営者情報｜資産シミュレーター</title>
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
          <h1>運営者情報</h1>
          <p class="lead">資産シミュレーターの運営方針とサイトの目的です。</p>
          <nav class="tool-nav" aria-label="サイト内リンク">
            <a href="index.html#top">トップ</a>
            <a href="privacy.html">プライバシーポリシー</a>
            <a href="disclaimer.html">免責事項</a>
            <a href="contact.html">お問い合わせ</a>
          </nav>
        </header>
        <section class="content-panel">
          <h2>サイト名</h2>
          <p>資産シミュレーター</p>
          <h2>サイトの目的</h2>
          <p>副業収入、税金、手取り、投資、FIRE、老後資金、iDeCoなどのお金に関する概算を、スマホからでもすぐ確認できるようにすることを目的としています。</p>
          <h2>運営方針</h2>
          <p>計算結果はあくまで目安として提示し、ユーザーが自分の条件を変えながら比較しやすい情報設計を心がけています。</p>
        </section>
      </div>
    </main>
  </body>
</html>

````

## privacy.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="資産シミュレーターのプライバシーポリシーです。アクセス解析、広告配信、Cookie、個人情報の取り扱いについて掲載しています。">
    <title>【2026年対応】初心者向けプライバシーポリシー｜資産シミュレーター</title>
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
          <h1>プライバシーポリシー</h1>
          <p class="lead">資産シミュレーターにおける情報の取り扱いについて説明します。</p>
          <nav class="tool-nav" aria-label="サイト内リンク">
            <a href="index.html#top">トップ</a>
            <a href="disclaimer.html">免責事項</a>
            <a href="contact.html">お問い合わせ</a>
            <a href="operator.html">運営者情報</a>
          </nav>
        </header>
        <section class="content-panel">
          <h2>アクセス解析について</h2>
          <p>当サイトでは、サイト改善のためにGoogle Analyticsを利用する場合があります。Google AnalyticsはCookieを使用して匿名の利用状況を収集します。個人を特定する情報は収集していません。</p>
          <h2>広告配信について</h2>
          <p>当サイトでは、Google AdSenseなどの第三者配信広告サービスを利用する場合があります。広告配信事業者は、ユーザーの興味に応じた広告を表示するためCookieを使用することがあります。</p>
          <h2>Cookieについて</h2>
          <p>Cookieはブラウザ設定により無効化できます。Cookieを無効にしても、当サイトのシミュレーターの基本機能は利用できます。</p>
          <h2>個人情報について</h2>
          <p>お問い合わせ時に入力された情報は、返信や確認のために利用し、目的外で利用しません。</p>
        </section>
      </div>
    </main>
  </body>
</html>

````

## resident-tax.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="W8lV0ZXsiS6lCYIRGsdxAnk8X0vIfJix8UBz6ie2gnc" />
    <meta http-equiv="refresh" content="0; url=index.html#resident-tax">
    <meta name="description" content="年間副業売上、経費、青色申告控除、基礎控除、住民税率、均等割額から副業の住民税概算と普通徴収の注意点を確認できます。">
    <title>【2026年対応】初心者向け副業住民税シミュレーター｜3分で普通徴収も確認</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <main>
      <div class="app-shell">
        <p><a href="index.html#resident-tax">副業住民税シミュレーターを開く</a></p>
        <footer class="site-footer">
          <nav class="footer-links" aria-label="サイト情報">
            <a href="index.html#top">トップ</a>
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#ai-hourly">AI副業時給</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#tax">税金・青色申告</a>
            <a href="index.html#income-tax">副業所得税</a>
            <a href="index.html#resident-tax">副業住民税</a>
            <a href="index.html#nisa">新NISA・積立投資</a>
            <a href="index.html#ideco">iDeCo節税</a>
            <a href="index.html#fire">FIRE達成</a>
            <a href="index.html#retirement">老後資金</a>
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

````

## retirement.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="W8lV0ZXsiS6lCYIRGsdxAnk8X0vIfJix8UBz6ie2gnc" />
    <meta http-equiv="refresh" content="0; url=index.html#retirement">
    <meta name="description" content="現在の年齢、貯蓄、毎月の積立額、想定年利、退職後生活費、年金見込み額から老後資金の不足額と必要な追加積立額を試算できます。">
    <title>【2026年対応】初心者向け老後資金シミュレーター｜3分で不足額計算</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <main>
      <div class="app-shell">
        <p><a href="index.html#retirement">老後資金シミュレーターを開く</a></p>
        <footer class="site-footer">
          <nav class="footer-links" aria-label="サイト情報">
            <a href="index.html#top">トップ</a>
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#ai-hourly">AI副業時給</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#tax">税金・青色申告</a>
            <a href="index.html#nisa">新NISA・積立投資</a>
            <a href="index.html#ideco">iDeCo節税</a>
            <a href="index.html#fire">FIRE達成</a>
            <a href="index.html#retirement">老後資金</a>
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

````

## side-fire.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="W8lV0ZXsiS6lCYIRGsdxAnk8X0vIfJix8UBz6ie2gnc" />
    <meta http-equiv="refresh" content="0; url=index.html#side-fire">
    <meta name="description" content="現在の年齢、FIRE目標年齢、現在資産、毎月積立額、想定年利、生活費、副業月収、配当収入からサイドFIRE達成可能性を試算できます。">
    <title>【2026年対応】初心者向けサイドFIREシミュレーター｜3分で必要資産計算</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <main>
      <div class="app-shell">
        <p><a href="index.html#side-fire">サイドFIREシミュレーターを開く</a></p>
        <footer class="site-footer">
          <nav class="footer-links" aria-label="サイト情報">
            <a href="index.html#top">トップ</a>
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#ai-hourly">AI副業時給</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#tax">税金・青色申告</a>
            <a href="index.html#nisa">新NISA・積立投資</a>
            <a href="index.html#ideco">iDeCo節税</a>
            <a href="index.html#dividend">配当金</a>
            <a href="index.html#fire">FIRE達成</a>
            <a href="index.html#side-fire">サイドFIRE</a>
            <a href="index.html#retirement">老後資金</a>
            <a href="index.html#education">教育費</a>
            <a href="index.html#mortgage">住宅ローン</a>
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

````

## side-income.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="W8lV0ZXsiS6lCYIRGsdxAnk8X0vIfJix8UBz6ie2gnc" />
    <meta http-equiv="refresh" content="0; url=index.html#side-income">
    <meta name="description" content="時給、作業時間、案件数、税率から副業の月収・年収・税引後の手取り目安を試算できます。">
    <title>【2026年対応】初心者向け副業月収シミュレーター｜3分で収入計算</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <main>
      <div class="app-shell">
        <p><a href="index.html#side-income">副業月収シミュレーターを開く</a></p>
      </div>
    </main>
  </body>
</html>

````

## side-profit-margin.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="W8lV0ZXsiS6lCYIRGsdxAnk8X0vIfJix8UBz6ie2gnc" />
    <meta http-equiv="refresh" content="0; url=index.html#side-profit-margin">
    <meta name="description" content="副業売上、経費、作業時間、広告費、外注費、AIツール利用有無から、利益額、利益率、時給換算、改善ポイントを分析できます。">
    <title>【2026年対応】初心者向け副業利益率シミュレーター｜3分で利益分析</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <main>
      <div class="app-shell">
        <p><a href="index.html#side-profit-margin">副業利益率シミュレーターを開く</a></p>
        <footer class="site-footer">
          <nav class="footer-links" aria-label="サイト情報">
            <a href="index.html#top">トップ</a>
            <a href="index.html#side-income">副業月収</a>
            <a href="index.html#ai-hourly">AI副業時給</a>
            <a href="index.html#side-profit-margin">副業利益率</a>
            <a href="index.html#take-home">副業手取り</a>
            <a href="index.html#tax">税金・青色申告</a>
            <a href="index.html#income-tax">副業所得税</a>
            <a href="index.html#resident-tax">副業住民税</a>
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

````

## take-home.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="W8lV0ZXsiS6lCYIRGsdxAnk8X0vIfJix8UBz6ie2gnc" />
    <meta http-equiv="refresh" content="0; url=index.html#take-home">
    <meta name="description" content="年間副業売上、経費、所得税率、住民税率、社会保険料、青色申告控除から副業の最終手取り額を試算できます。">
    <title>【2026年対応】初心者向け副業手取り計算シミュレーター｜3分で税引後計算</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <main>
      <div class="app-shell">
        <p><a href="index.html#take-home">副業手取り計算シミュレーターを開く</a></p>
      </div>
    </main>
  </body>
</html>

````

## tax.html

````html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="W8lV0ZXsiS6lCYIRGsdxAnk8X0vIfJix8UBz6ie2gnc" />
    <meta http-equiv="refresh" content="0; url=index.html#tax">
    <meta name="description" content="年間副業収入、経費、所得税率、住民税率、青色申告控除額から課税所得と手取り額を試算できます。">
    <title>【2026年対応】初心者向け副業税金シミュレーター｜3分で青色申告も確認</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <main>
      <div class="app-shell">
        <p><a href="index.html#tax">副業税金・青色申告シミュレーターを開く</a></p>
      </div>
    </main>
  </body>
</html>

````

