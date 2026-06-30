# GitHub手動アップロード用ファイル

## 変更ファイル一覧

- script.js
- sitemap.xml
- article-side-income-50000.html
- article-side-income-100000.html
- article-resident-tax-guide.html
- article-income-tax-guide.html
- article-blue-return-start.html
- article-company-side-tax-saving.html
- article-fire-basic.html
- article-new-nisa-start.html
- article-ideco-start.html
- article-retirement-2000.html

## script.js の完全内容

```javascript
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

const seoDescription = "\u526f\u696d\u6708\u53ce\u3001AI\u526f\u696d\u6642\u7d66\u3001\u526f\u696d\u624b\u53d6\u308a\u3001\u526f\u696d\u6240\u5f97\u7a0e\u3001\u526f\u696d\u4f4f\u6c11\u7a0e\u3001\u65b0NISA\u30fb\u7a4d\u7acb\u6295\u8cc7\u3001iDeCo\u7bc0\u7a0e\u3001FIRE\u9054\u6210\u3001\u8001\u5f8c\u8cc7\u91d1\u3001\u526f\u696d\u7a0e\u91d1\u30fb\u9752\u8272\u7533\u544a\u3092\u307e\u3068\u3081\u3066\u8a66\u7b97\u3067\u304d\u308b\u30b9\u30de\u30db\u5bfe\u5fdc\u306e\u8cc7\u7523\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u3067\u3059\u3002";
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
  retirement: {
    title: "\u8001\u5f8c\u8cc7\u91d1\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc",
    description: "\u73fe\u5728\u306e\u5e74\u9f62\u3001\u8caf\u84c4\u3001\u6bce\u6708\u306e\u7a4d\u7acb\u984d\u3001\u9000\u8077\u5f8c\u751f\u6d3b\u8cbb\u3001\u5e74\u91d1\u898b\u8fbc\u984d\u304b\u3089\u8001\u5f8c\u8cc7\u91d1\u306e\u4e0d\u8db3\u984d\u3092\u8a66\u7b97\u3067\u304d\u307e\u3059\u3002",
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
          <a href="#fire" data-route="fire">FIRE&#x9054;&#x6210;</a>
          <a href="#retirement" data-route="retirement">&#x8001;&#x5f8c;&#x8cc7;&#x91d1;</a>
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
            <li><a href="#fire"><strong>FIRE&#x9054;&#x6210;</strong><span>&#x76ee;&#x6a19;&#x8cc7;&#x7523;&#x307e;&#x3067;&#x306e;&#x5e74;&#x6570;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#retirement"><strong>&#x8001;&#x5f8c;&#x8cc7;&#x91d1;</strong><span>&#x9000;&#x8077;&#x6642;&#x8cc7;&#x7523;&#x3068;&#x4e0d;&#x8db3;&#x984d;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
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
          <a href="#fire">FIRE&#x9054;&#x6210;</a>
          <a href="#retirement">&#x8001;&#x5f8c;&#x8cc7;&#x91d1;</a>
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

function currentRoute() {
  const route = window.location.hash.replace("#", "");
  if (route === "side-income" || route === "ai-hourly" || route === "take-home" || route === "tax" || route === "income-tax" || route === "resident-tax" || route === "nisa" || route === "ideco" || route === "fire" || route === "retirement") {
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
renderRoute();

```

## sitemap.xml の完全内容

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
    <loc>https://side-income-simulator.vercel.app/fire.html</loc>
  </url>
  <url>
    <loc>https://side-income-simulator.vercel.app/retirement.html</loc>
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

## article-side-income-50000.html の完全内容

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="副業で月5万円を稼ぐための案件選び、時間設計、単価アップ、税金管理を初心者向けに解説します。">
    <title>副業で月5万円を稼ぐ方法</title>
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

```

## article-side-income-100000.html の完全内容

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="副業で月10万円を目指すための単価設計、継続案件、外注化、税金管理を解説します。">
    <title>副業で月10万円を目指す方法</title>
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

```

## article-resident-tax-guide.html の完全内容

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="副業の住民税について、所得の計算、普通徴収、会社員が注意したい点を初心者向けに解説します。">
    <title>副業の住民税完全ガイド</title>
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

```

## article-income-tax-guide.html の完全内容

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="副業の所得税について、売上・経費・控除・復興特別所得税・確定申告の考え方を解説します。">
    <title>副業の所得税完全ガイド</title>
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

```

## article-blue-return-start.html の完全内容

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="副業で青色申告を始めるための届出、帳簿、控除、会計管理の基本を初心者向けに解説します。">
    <title>青色申告の始め方</title>
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

```

## article-company-side-tax-saving.html の完全内容

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="会社員が副業をするときの税金対策、経費管理、住民税、普通徴収、納税資金の考え方を解説します。">
    <title>会社員の副業税金対策</title>
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

```

## article-fire-basic.html の完全内容

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="FIREの意味、必要資産、4%ルール、サイドFIRE、注意点を初心者向けに解説します。">
    <title>FIREとは何か</title>
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

```

## article-new-nisa-start.html の完全内容

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="新NISAの基本、つみたて投資枠・成長投資枠、口座開設、積立額の決め方を初心者向けに解説します。">
    <title>新NISAの始め方</title>
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

```

## article-ideco-start.html の完全内容

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="iDeCoの基本、節税効果、掛金、始める手順、新NISAとの違いを初心者向けに解説します。">
    <title>iDeCoの始め方</title>
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

```

## article-retirement-2000.html の完全内容

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1671825304176893"
     crossorigin="anonymous"></script>
    <meta name="description" content="老後資金2000万円問題の背景、必要額の考え方、年金・生活費・資産形成の準備方法を解説します。">
    <title>老後資金2000万円問題とは</title>
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

```

