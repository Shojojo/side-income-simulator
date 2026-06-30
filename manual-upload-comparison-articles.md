# GitHub手動アップロード用ファイル

## 変更ファイル一覧

- index.html
- script.js
- style.css
- sitemap.xml
- article-securities-account-comparison.html
- article-accounting-software-comparison.html
- article-credit-card-comparison.html
- article-ai-tools-comparison.html

## アップロード手順

1. GitHubの該当リポジトリを開きます。
2. 下記の各ファイル名で、同じ階層にファイルを作成または上書きします。
3. すべて反映後、Vercelのデプロイ完了を確認します。
4. トップページの記事欄から4本の記事が開けるか確認します。

## index.html

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="W8lV0ZXsiS6lCYIRGsdxAnk8X0vIfJix8UBz6ie2gnc" />
    <meta name="description" content="副業月収、AI副業時給、副業手取り、副業所得税、副業住民税、新NISA・積立投資、iDeCo節税、配当金、FIRE達成、サイドFIRE、老後資金、教育費、学資保険比較、住宅ローン、副業税金・青色申告をまとめて試算できるスマホ対応の資産シミュレーターです。">
    <title>&#x8cc7;&#x7523;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XM73JD15LP";
    </script>
    <script defer src="script.js?v=20260604-comparison-articles"></script>
  </head>
  <body></body>
</html>

```

## script.js

```js
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

const seoDescription = "\u526f\u696d\u6708\u53ce\u3001AI\u526f\u696d\u6642\u7d66\u3001\u526f\u696d\u624b\u53d6\u308a\u3001\u526f\u696d\u6240\u5f97\u7a0e\u3001\u526f\u696d\u4f4f\u6c11\u7a0e\u3001\u65b0NISA\u30fb\u7a4d\u7acb\u6295\u8cc7\u3001iDeCo\u7bc0\u7a0e\u3001\u914d\u5f53\u91d1\u3001FIRE\u9054\u6210\u3001\u30b5\u30a4\u30c9FIRE\u3001\u8001\u5f8c\u8cc7\u91d1\u3001\u6559\u80b2\u8cbb\u3001\u5b66\u8cc7\u4fdd\u967a\u6bd4\u8f03\u3001\u4f4f\u5b85\u30ed\u30fc\u30f3\u3001\u526f\u696d\u7a0e\u91d1\u30fb\u9752\u8272\u7533\u544a\u3092\u307e\u3068\u3081\u3066\u8a66\u7b97\u3067\u304d\u308b\u30b9\u30de\u30db\u5bfe\u5fdc\u306e\u8cc7\u7523\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u3067\u3059\u3002";
const descriptionMeta = document.querySelector('meta[name="description"]') || document.createElement("meta");
descriptionMeta.setAttribute("name", "description");
descriptionMeta.setAttribute("content", seoDescription);
document.head.appendChild(descriptionMeta);

const routeSeo = {
  top: {
    title: "\u8cc7\u7523\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc",
    description: seoDescription,
  },
  "side-income": {
    title: "\u526f\u696d\u6708\u53ce\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc",
    description: "\u6642\u7d66\u3001\u4f5c\u696d\u6642\u9593\u3001\u6848\u4ef6\u6570\u3001\u7a0e\u7387\u304b\u3089\u526f\u696d\u306e\u6708\u53ce\u30fb\u5e74\u53ce\u30fb\u7a0e\u5f15\u5f8c\u306e\u624b\u53d6\u308a\u76ee\u5b89\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  "ai-hourly": {
    title: "AI\u526f\u696d\u6642\u7d66\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc",
    description: "\u6848\u4ef6\u5358\u4fa1\u3001\u4f5c\u696d\u6642\u9593\u3001\u6708\u6848\u4ef6\u6570\u304b\u3089AI\u526f\u696d\u306e\u6642\u7d66\u3001\u6708\u53ce\u3001AI\u6d3b\u7528\u6642\u306e\u52b9\u7387\u6539\u5584\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  "take-home": {
    title: "\u526f\u696d\u624b\u53d6\u308a\u8a08\u7b97\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc",
    description: "\u5e74\u9593\u526f\u696d\u58f2\u4e0a\u3001\u7d4c\u8cbb\u3001\u7a0e\u7387\u3001\u793e\u4f1a\u4fdd\u967a\u6599\u3001\u9752\u8272\u7533\u544a\u63a7\u9664\u304b\u3089\u526f\u696d\u306e\u6700\u7d42\u624b\u53d6\u308a\u984d\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  tax: {
    title: "\u526f\u696d\u7a0e\u91d1\u30fb\u9752\u8272\u7533\u544a\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc",
    description: "\u5e74\u9593\u526f\u696d\u53ce\u5165\u3001\u7d4c\u8cbb\u3001\u6240\u5f97\u7a0e\u7387\u3001\u4f4f\u6c11\u7a0e\u7387\u3001\u9752\u8272\u7533\u544a\u63a7\u9664\u984d\u304b\u3089\u8ab2\u7a0e\u6240\u5f97\u3068\u624b\u53d6\u308a\u984d\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  "resident-tax": {
    title: "\u526f\u696d\u4f4f\u6c11\u7a0e\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc",
    description: "\u5e74\u9593\u526f\u696d\u58f2\u4e0a\u3001\u7d4c\u8cbb\u3001\u9752\u8272\u7533\u544a\u63a7\u9664\u3001\u57fa\u790e\u63a7\u9664\u3001\u4f4f\u6c11\u7a0e\u7387\u3001\u5747\u7b49\u5272\u984d\u304b\u3089\u526f\u696d\u306e\u4f4f\u6c11\u7a0e\u6982\u7b97\u3068\u666e\u901a\u5fb4\u53ce\u306e\u6ce8\u610f\u70b9\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",
  },
  "income-tax": {
    title: "\u526f\u696d\u6240\u5f97\u7a0e\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc",
    description: "\u5e74\u9593\u526f\u696d\u58f2\u4e0a\u3001\u7d4c\u8cbb\u3001\u9752\u8272\u7533\u544a\u63a7\u9664\u3001\u57fa\u790e\u63a7\u9664\u3001\u305d\u306e\u4ed6\u63a7\u9664\u3001\u6240\u5f97\u7a0e\u7387\u3001\u5fa9\u8208\u7279\u5225\u6240\u5f97\u7a0e\u7387\u304b\u3089\u526f\u696d\u306e\u6240\u5f97\u7a0e\u6982\u7b97\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",
  },
  nisa: {
    title: "\u65b0NISA\u30fb\u7a4d\u7acb\u6295\u8cc7\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc",
    description: "\u521d\u671f\u6295\u8cc7\u984d\u3001\u6bce\u6708\u7a4d\u7acb\u984d\u3001\u60f3\u5b9a\u5e74\u5229\u3001\u904b\u7528\u5e74\u6570\u304b\u3089\u65b0NISA\u306e\u5c06\u6765\u8cc7\u7523\u984d\u3068\u904b\u7528\u76ca\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  ideco: {
    title: "iDeCo\u7bc0\u7a0e\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc",
    description: "\u5e74\u53ce\u3001\u8ab2\u7a0e\u6240\u5f97\u3001\u7a0e\u7387\u3001\u6bce\u6708\u306eiDeCo\u639b\u91d1\u3001\u904b\u7528\u5e74\u6570\u304b\u3089\u5e74\u9593\u7bc0\u7a0e\u984d\u3068\u5c06\u6765\u8cc7\u7523\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  fire: {
    title: "FIRE\u9054\u6210\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc",
    description: "\u73fe\u5728\u8cc7\u7523\u3001\u6bce\u6708\u7a4d\u7acb\u984d\u3001\u60f3\u5b9a\u5e74\u5229\u3001\u76ee\u6a19\u8cc7\u7523\u304b\u3089FIRE\u9054\u6210\u307e\u3067\u306e\u5e74\u6570\u3068\u5c06\u6765\u8cc7\u7523\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  dividend: {
    title: "\u914d\u5f53\u91d1\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc",
    description: "\u521d\u671f\u6295\u8cc7\u984d\u3001\u6bce\u6708\u8ffd\u52a0\u6295\u8cc7\u984d\u3001\u60f3\u5b9a\u914d\u5f53\u5229\u56de\u308a\u3001\u904b\u7528\u5e74\u6570\u3001\u914d\u5f53\u518d\u6295\u8cc7\u6709\u7121\u304b\u3089\u5e74\u9593\u914d\u5f53\u91d1\u3001\u7d2f\u8a08\u914d\u5f53\u91d1\u3001\u6700\u7d42\u8cc7\u7523\u984d\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  "side-fire": {
    title: "\u30b5\u30a4\u30c9FIRE\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc",
    description: "\u73fe\u5728\u306e\u5e74\u9f62\u3001FIRE\u76ee\u6a19\u5e74\u9f62\u3001\u73fe\u5728\u8cc7\u7523\u3001\u6bce\u6708\u7a4d\u7acb\u984d\u3001\u60f3\u5b9a\u5e74\u5229\u3001\u6bce\u6708\u751f\u6d3b\u8cbb\u3001\u526f\u696d\u6708\u53ce\u3001\u914d\u5f53\u53ce\u5165\u304b\u3089\u30b5\u30a4\u30c9FIRE\u9054\u6210\u53ef\u80fd\u6027\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  retirement: {
    title: "\u8001\u5f8c\u8cc7\u91d1\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc",
    description: "\u73fe\u5728\u306e\u5e74\u9f62\u3001\u8caf\u84c4\u3001\u6bce\u6708\u306e\u7a4d\u7acb\u984d\u3001\u9000\u8077\u5f8c\u751f\u6d3b\u8cbb\u3001\u5e74\u91d1\u898b\u8fbc\u984d\u304b\u3089\u8001\u5f8c\u8cc7\u91d1\u306e\u4e0d\u8db3\u984d\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  education: {
    title: "\u6559\u80b2\u8cbb\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc",
    description: "\u5b50\u3069\u3082\u306e\u4eba\u6570\u3001\u9032\u5b66\u30b3\u30fc\u30b9\u3001\u5927\u5b66\u9032\u5b66\u6709\u7121\u3001\u73fe\u5728\u306e\u8caf\u84c4\u984d\u3001\u6bce\u6708\u7a4d\u7acb\u984d\u304b\u3089\u5c06\u6765\u5fc5\u8981\u306a\u6559\u80b2\u8cbb\u3068\u4e0d\u8db3\u984d\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
  },
  "education-insurance": {
    title: "\u5b66\u8cc7\u4fdd\u967a\u6bd4\u8f03\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc",
    description: "\u6bce\u6708\u7a4d\u7acb\u984d\u3001\u7a4d\u7acb\u5e74\u6570\u3001\u60f3\u5b9a\u5229\u56de\u308a\u3001\u5b66\u8cc7\u4fdd\u967a\u8fd4\u623b\u7387\u3001\u5b50\u3069\u3082\u306e\u5e74\u9f62\u3001\u5927\u5b66\u9032\u5b66\u4e88\u5b9a\u5e74\u9f62\u304b\u3089\u5b66\u8cc7\u4fdd\u967a\u3068\u901a\u5e38\u7a4d\u7acb\u6295\u8cc7\u3092\u6bd4\u8f03\u3067\u304d\u307e\u3059\u3002",
  },
  mortgage: {
    title: "\u4f4f\u5b85\u30ed\u30fc\u30f3\u8fd4\u6e08\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc",
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
          <a href="#take-home" data-route="take-home">&#x526f;&#x696d;&#x624b;&#x53d6;&#x308a;</a>
          <a href="#tax" data-route="tax">&#x7a0e;&#x91d1;&#x30fb;&#x9752;&#x8272;&#x7533;&#x544a;</a>
          <a href="#income-tax" data-route="income-tax">&#x526f;&#x696d;&#x6240;&#x5f97;&#x7a0e;</a>
          <a href="#resident-tax" data-route="resident-tax">&#x526f;&#x696d;&#x4f4f;&#x6c11;&#x7a0e;</a>
          <a href="#nisa" data-route="nisa">&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;</a>
          <a href="#ideco" data-route="ideco">iDeCo&#x7bc0;&#x7a0e;</a>
          <a href="#dividend" data-route="dividend">&#x914d;&#x5f53;&#x91d1;</a>
          <a href="#fire" data-route="fire">FIRE&#x9054;&#x6210;</a>
          <a href="#side-fire" data-route="side-fire">&#x30b5;&#x30a4;&#x30c9;FIRE</a>
          <a href="#retirement" data-route="retirement">&#x8001;&#x5f8c;&#x8cc7;&#x91d1;</a>
          <a href="#education" data-route="education">&#x6559;&#x80b2;&#x8cbb;</a>
          <a href="#education-insurance" data-route="education-insurance">&#x5b66;&#x8cc7;&#x4fdd;&#x967a;</a>
          <a href="#mortgage" data-route="mortgage">&#x4f4f;&#x5b85;&#x30ed;&#x30fc;&#x30f3;</a>
        </nav>
      </header>

      <section class="view" data-view="top" aria-label="&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;&#x4e00;&#x89a7;">
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
            <li><a href="#take-home"><strong>&#x526f;&#x696d;&#x624b;&#x53d6;&#x308a;</strong><span>&#x7a0e;&#x91d1;&#x5f8c;&#x306e;&#x624b;&#x5143;&#x306b;&#x6b8b;&#x308b;&#x91d1;&#x984d;&#x3092;&#x8a66;&#x7b97;</span></a></li>
            <li><a href="#income-tax"><strong>&#x526f;&#x696d;&#x6240;&#x5f97;&#x7a0e;</strong><span>&#x6240;&#x5f97;&#x7a0e;&#x3068;&#x5fa9;&#x8208;&#x7279;&#x5225;&#x6240;&#x5f97;&#x7a0e;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#resident-tax"><strong>&#x526f;&#x696d;&#x4f4f;&#x6c11;&#x7a0e;</strong><span>&#x666e;&#x901a;&#x5fb4;&#x53ce;&#x306e;&#x6ce8;&#x610f;&#x70b9;&#x3068;&#x7a0e;&#x984d;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#nisa"><strong>&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;</strong><span>&#x7a4d;&#x7acb;&#x306e;&#x5c06;&#x6765;&#x984d;&#x3068;&#x904b;&#x7528;&#x76ca;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#ideco"><strong>iDeCo&#x7bc0;&#x7a0e;</strong><span>&#x6bce;&#x6708;&#x306e;&#x639b;&#x91d1;&#x304b;&#x3089;&#x7bc0;&#x7a0e;&#x984d;&#x3068;&#x5c06;&#x6765;&#x8cc7;&#x7523;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#dividend"><strong>&#x914d;&#x5f53;&#x91d1;</strong><span>&#x5e74;&#x9593;&#x914d;&#x5f53;&#x91d1;&#x3068;&#x6708;&#x5e73;&#x5747;&#x914d;&#x5f53;&#x91d1;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#fire"><strong>FIRE&#x9054;&#x6210;</strong><span>&#x76ee;&#x6a19;&#x8cc7;&#x7523;&#x307e;&#x3067;&#x306e;&#x5e74;&#x6570;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#side-fire"><strong>&#x30b5;&#x30a4;&#x30c9;FIRE</strong><span>&#x526f;&#x696d;&#x53ce;&#x5165;&#x3068;&#x914d;&#x5f53;&#x53ce;&#x5165;&#x3092;&#x542b;&#x3081;&#x3066;&#x9054;&#x6210;&#x53ef;&#x80fd;&#x6027;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
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
            <a href="#fire">FIRE&#x9054;&#x6210;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#nisa">&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#ideco">iDeCo&#x7bc0;&#x7a0e;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
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
          <a href="#take-home">&#x526f;&#x696d;&#x624b;&#x53d6;&#x308a;</a>
          <a href="#tax">&#x7a0e;&#x91d1;&#x30fb;&#x9752;&#x8272;&#x7533;&#x544a;</a>
          <a href="#income-tax">&#x526f;&#x696d;&#x6240;&#x5f97;&#x7a0e;</a>
          <a href="#resident-tax">&#x526f;&#x696d;&#x4f4f;&#x6c11;&#x7a0e;</a>
          <a href="#nisa">&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;</a>
          <a href="#ideco">iDeCo&#x7bc0;&#x7a0e;</a>
          <a href="#dividend">&#x914d;&#x5f53;&#x91d1;</a>
          <a href="#fire">FIRE&#x9054;&#x6210;</a>
          <a href="#side-fire">&#x30b5;&#x30a4;&#x30c9;FIRE</a>
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
  if (route === "side-income" || route === "ai-hourly" || route === "take-home" || route === "tax" || route === "income-tax" || route === "resident-tax" || route === "nisa" || route === "ideco" || route === "dividend" || route === "fire" || route === "side-fire" || route === "retirement" || route === "education" || route === "education-insurance" || route === "mortgage") {
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
document.querySelector("#sideFireForm").addEventListener("input", renderSideFire);
document.querySelector("#sideFireForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderSideFire);
});
document.querySelector("#mortgageForm").addEventListener("input", renderMortgage);
document.querySelector("#mortgageForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderMortgage);
});
window.addEventListener("hashchange", renderRoute);

renderSideIncome();
renderAiHourly();
renderTax();
renderResidentTax();
renderIncomeTax();
renderTakeHome();
renderNisa();
renderIdeco();
renderFire();
renderRetirement();
renderEducation();
renderEducationInsurance();
renderDividend();
renderSideFire();
renderMortgage();
renderRoute();

```

## style.css

```css
:root {
  color-scheme: light;
  --bg: #f6f3ee;
  --panel: #ffffff;
  --ink: #18212f;
  --muted: #637083;
  --line: #d9dee7;
  --green: #12735d;
  --blue: #2457c5;
  --amber: #b86b00;
  --red: #b42318;
  --red-bg: #fff1ef;
  --shadow: 0 18px 48px rgba(24, 33, 47, 0.13);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  color: var(--ink);
  background:
    radial-gradient(circle at top left, rgba(36, 87, 197, 0.16), transparent 32rem),
    linear-gradient(145deg, #f6f3ee 0%, #eef4f2 54%, #f7f8fb 100%);
}

main {
  width: min(100%, 960px);
  margin: 0 auto;
  padding: 22px 16px 32px;
}

.app-shell,
.header,
.input-panel,
.metric,
.tool-heading,
.tool-card,
.link-panel {
  display: grid;
}

.app-shell {
  gap: 16px;
}

.header {
  gap: 8px;
  padding: 8px 2px 0;
}

h1,
h2,
p {
  margin: 0;
}

h1 {
  font-size: clamp(1.55rem, 8vw, 3.05rem);
  line-height: 1.08;
  letter-spacing: 0;
}

.lead,
.tool-heading p,
.tool-card p,
.metric small {
  color: var(--muted);
}

.lead {
  max-width: 42rem;
  font-size: 0.98rem;
  line-height: 1.75;
}

.tool-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
}

.tool-nav a {
  min-height: 38px;
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 0 12px;
  color: var(--ink);
  background: rgba(255, 255, 255, 0.76);
  font-size: 0.86rem;
  font-weight: 800;
  text-decoration: none;
}

.tool-nav a[aria-current="page"] {
  color: #fff;
  border-color: var(--green);
  background: var(--green);
}

.view {
  display: none;
}

.view.is-active {
  display: block;
}

.tool-grid,
.workspace,
.result-grid {
  display: grid;
  gap: 16px;
}

.tool-grid {
  gap: 14px;
}

.category-section,
.article-panel {
  display: grid;
  gap: 14px;
  margin-top: 16px;
}

.view > .category-section:first-child {
  margin-top: 0;
}

.category-heading {
  display: grid;
  gap: 5px;
  padding: 2px;
}

.category-heading h2 {
  margin: 0;
  color: var(--ink);
  font-size: clamp(1.12rem, 4.2vw, 1.48rem);
  line-height: 1.25;
  letter-spacing: 0;
}

.article-panel {
  padding: 16px;
  border: 1px solid rgba(217, 222, 231, 0.92);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: var(--shadow);
}

.article-panel .tool-heading {
  margin-bottom: 0;
  padding: 0;
}

.article-list,
.ranking-list,
.related-links {
  display: grid;
  gap: 10px;
}

.article-link,
.ranking-list a,
.related-links a {
  min-height: 48px;
  display: grid;
  gap: 4px;
  align-content: center;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 12px;
  color: var(--ink);
  background: #fbfcfe;
  text-decoration: none;
}

.article-link span,
.ranking-list span {
  color: var(--muted);
  font-size: 0.84rem;
  line-height: 1.5;
}

.ranking-list {
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: ranking;
}

.ranking-list li {
  counter-increment: ranking;
}

.ranking-list a {
  grid-template-columns: auto 1fr;
  column-gap: 10px;
}

.ranking-list a::before {
  content: counter(ranking);
  width: 28px;
  height: 28px;
  display: inline-grid;
  place-items: center;
  border-radius: 999px;
  color: #fff;
  background: var(--green);
  font-size: 0.86rem;
  font-weight: 850;
  grid-row: span 2;
}

.related-links {
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
}

.comparison-table {
  margin: 18px 0 24px;
  overflow-x: auto;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #ffffff;
}

.comparison-table table {
  width: 100%;
  min-width: 680px;
  border-collapse: collapse;
}

.comparison-table th,
.comparison-table td {
  padding: 12px 14px;
  border-bottom: 1px solid var(--line);
  border-right: 1px solid var(--line);
  text-align: left;
  vertical-align: top;
  line-height: 1.55;
}

.comparison-table th {
  color: var(--ink);
  background: #eef6f1;
  font-weight: 800;
  white-space: nowrap;
}

.comparison-table td:last-child,
.comparison-table th:last-child {
  border-right: 0;
}

.comparison-table tr:last-child td {
  border-bottom: 0;
}

.related-links a {
  color: var(--green);
  font-weight: 800;
}

.content-page {
  display: grid;
  gap: 16px;
}

.content-panel {
  display: grid;
  gap: 14px;
  padding: 18px;
  border: 1px solid rgba(217, 222, 231, 0.92);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: var(--shadow);
}

.content-panel h2,
.content-panel h3 {
  margin: 0;
  line-height: 1.35;
}

.content-panel p,
.content-panel li {
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.8;
}

.content-panel ul {
  display: grid;
  gap: 8px;
  margin: 0;
  padding-left: 1.2rem;
}

.content-panel a {
  color: var(--green);
  font-weight: 800;
}

.tool-card,
.input-panel,
.faq-panel,
.result-panel,
.link-panel {
  border: 1px solid rgba(217, 222, 231, 0.92);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: var(--shadow);
}

.tool-card {
  gap: 12px;
  min-height: 210px;
  padding: 18px;
  text-decoration: none;
}

.tool-card:focus-visible,
.tool-nav a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible {
  outline: 4px solid rgba(36, 87, 197, 0.16);
  outline-offset: 2px;
}

.tool-card h2,
.tool-heading h2 {
  color: var(--ink);
  font-size: clamp(1.25rem, 5vw, 1.72rem);
  line-height: 1.25;
  letter-spacing: 0;
}

.tool-card p,
.tool-heading p {
  font-size: 0.94rem;
  line-height: 1.75;
}

.tool-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}

.tool-meta span {
  padding: 7px 10px;
  border: 1px solid var(--line);
  border-radius: 8px;
  color: var(--ink);
  background: #fbfcfe;
  font-size: 0.8rem;
  font-weight: 800;
}

.open-label {
  color: var(--green);
  font-weight: 850;
}

.tool-heading {
  gap: 8px;
  margin-bottom: 16px;
  padding: 4px 2px 0;
}

.input-panel {
  gap: 14px;
  padding: 16px;
}

.field {
  display: grid;
  gap: 8px;
}

label {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  font-weight: 700;
  font-size: 0.95rem;
}

.unit {
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 600;
  white-space: nowrap;
}

input,
select {
  width: 100%;
  min-height: 48px;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 12px 13px;
  color: var(--ink);
  background: #fbfcfe;
  font: inherit;
  font-size: 1.05rem;
}

input:focus,
select:focus {
  border-color: var(--blue);
  box-shadow: 0 0 0 4px rgba(36, 87, 197, 0.14);
}

input[aria-invalid="true"] {
  border-color: var(--red);
  background: var(--red-bg);
}

.error {
  min-height: 1.15rem;
  margin: -2px 0 0;
  color: var(--red);
  font-size: 0.78rem;
  font-weight: 700;
  line-height: 1.35;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 2px;
}

button {
  min-height: 44px;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 0 14px;
  color: var(--ink);
  background: #fff;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

button:active {
  transform: translateY(1px);
}

.result-panel {
  overflow: hidden;
}

.hero-result {
  display: grid;
  gap: 10px;
  padding: 18px 16px;
  color: #fff;
  background: linear-gradient(135deg, #12735d 0%, #2457c5 100%);
}

.eyebrow {
  margin: 0;
  color: var(--blue);
  font-size: 0.78rem;
  font-weight: 800;
}

.hero-result .eyebrow {
  color: #fff;
}

.amount {
  margin: 0;
  font-size: clamp(2rem, 11vw, 4rem);
  font-weight: 850;
  line-height: 1;
  overflow-wrap: anywhere;
}

.metric {
  gap: 5px;
  min-height: 94px;
  padding: 16px;
  border-top: 1px solid var(--line);
}

.metric strong {
  color: var(--muted);
  font-size: 0.82rem;
}

.metric span {
  font-size: clamp(1.35rem, 7vw, 2.2rem);
  font-weight: 820;
  line-height: 1.1;
  overflow-wrap: anywhere;
}

.metric small {
  font-size: 0.78rem;
  line-height: 1.45;
}

.notice {
  display: none;
  padding: 11px 16px;
  color: var(--red);
  background: var(--red-bg);
  border-top: 1px solid rgba(180, 35, 24, 0.24);
  font-size: 0.86rem;
  font-weight: 800;
  line-height: 1.45;
}

.notice.is-visible {
  display: block;
}

.link-panel {
  gap: 0;
  overflow: hidden;
}

.internal-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 14px 16px 16px;
  border-top: 1px solid var(--line);
}

.internal-links a {
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 0 12px;
  color: var(--green);
  background: #fff;
  font-size: 0.86rem;
  font-weight: 800;
  text-decoration: none;
}

.faq-panel {
  display: grid;
  gap: 14px;
  margin-top: 16px;
  padding: 16px;
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

.accent-green {
  color: var(--green);
}

.accent-blue {
  color: var(--blue);
}

.accent-amber {
  color: var(--amber);
}

@media (min-width: 720px) {
  main {
    padding: 46px 24px;
  }

  .app-shell {
    gap: 22px;
  }

  .tool-grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }

  .workspace {
    grid-template-columns: minmax(280px, 0.9fr) minmax(360px, 1.1fr);
    align-items: start;
  }

  .input-panel {
    padding: 20px;
  }

  .result-grid {
    grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
  }

  .metric {
    border-left: 1px solid var(--line);
  }

  .metric:first-child {
    border-left: 0;
  }
}

```

## sitemap.xml

```xml
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
    <loc>https://side-income-simulator.vercel.app/ideco.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/dividend.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/fire.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/side-fire.html</loc>
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

```

## article-securities-account-comparison.html

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="初心者が証券口座を選ぶときの基準を、NISA対応、手数料、画面の使いやすさ、ポイント連携、商品ラインナップで比較します。">
    <title>初心者向けおすすめ証券口座比較</title>
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

```

## article-accounting-software-comparison.html

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="副業の確定申告に使いやすい会計ソフトを、入力のしやすさ、銀行連携、青色申告、料金、スマホ対応で比較します。">
    <title>副業向けおすすめ会計ソフト比較</title>
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

```

## article-credit-card-comparison.html

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="副業の経費管理に使いやすいクレジットカードを、年会費、ポイント、明細管理、会計ソフト連携、事業用の使いやすさで比較します。">
    <title>副業向けおすすめクレジットカード比較</title>
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

```

## article-ai-tools-comparison.html

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="副業の作業時間を短縮したい人向けに、文章作成、調査、資料作成、画像作成、タスク管理に使えるAIツールを比較します。">
    <title>副業効率化おすすめAIツール比較</title>
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

```

