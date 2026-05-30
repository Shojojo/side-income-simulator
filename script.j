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

const seoDescription = "\u526f\u696d\u6708\u53ce\u3001AI\u526f\u696d\u6642\u7d66\u3001FIRE\u9054\u6210\u3001\u526f\u696d\u7a0e\u91d1\u30fb\u9752\u8272\u7533\u544a\u3092\u307e\u3068\u3081\u3066\u8a66\u7b97\u3067\u304d\u308b\u30b9\u30de\u30db\u5bfe\u5fdc\u306e\u8cc7\u7523\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u3067\u3059\u3002";
const descriptionMeta = document.querySelector('meta[name="description"]') || document.createElement("meta");
descriptionMeta.setAttribute("name", "description");
descriptionMeta.setAttribute("content", seoDescription);
document.head.appendChild(descriptionMeta);

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
`;
document.head.appendChild(extraStyle);

document.body.innerHTML = `
  <main>
    <div class="app-shell">
      <header class="header">
        <h1>&#x8cc7;&#x7523;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h1>
        <p class="lead">&#x526f;&#x696d;&#x53ce;&#x5165;&#x3001;AI&#x6d3b;&#x7528;&#x3001;&#x7a0e;&#x91d1;&#x3001;FIRE&#x9054;&#x6210;&#x307e;&#x3067;&#x306e;&#x9053;&#x306e;&#x308a;&#x3092;&#x3001;&#x540c;&#x3058;&#x5165;&#x529b;&#x611f;&#x3067;&#x7d20;&#x65e9;&#x304f;&#x8a66;&#x305b;&#x308b;&#x8a08;&#x7b97;&#x30c4;&#x30fc;&#x30eb;&#x3067;&#x3059;&#x3002;</p>
        <nav class="tool-nav" aria-label="&#x30c4;&#x30fc;&#x30eb;&#x5207;&#x308a;&#x66ff;&#x3048;">
          <a href="#top" data-route="top">&#x30c8;&#x30c3;&#x30d7;</a>
          <a href="#side-income" data-route="side-income">&#x526f;&#x696d;&#x6708;&#x53ce;</a>
          <a href="#ai-hourly" data-route="ai-hourly">AI&#x526f;&#x696d;&#x6642;&#x7d66;</a>
          <a href="#tax" data-route="tax">&#x7a0e;&#x91d1;&#x30fb;&#x9752;&#x8272;&#x7533;&#x544a;</a>
          <a href="#fire" data-route="fire">FIRE&#x9054;&#x6210;</a>
        </nav>
      </header>

      <section class="view" data-view="top" aria-label="&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;&#x4e00;&#x89a7;">
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

        <section class="article-panel" aria-label="&#x521d;&#x5fc3;&#x8005;&#x5411;&#x3051;&#x8a18;&#x4e8b;">
          <section class="tool-heading">
            <h2>&#x521d;&#x5fc3;&#x8005;&#x5411;&#x3051;&#x30ac;&#x30a4;&#x30c9;</h2>
            <p>&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;&#x306e;&#x4f7f;&#x3044;&#x65b9;&#x3084;&#x526f;&#x696d;&#x30fb;&#x7a0e;&#x91d1;&#x30fb;FIRE&#x30fb;AI&#x6d3b;&#x7528;&#x306e;&#x57fa;&#x672c;&#x3092;&#x3001;&#x521d;&#x3081;&#x3066;&#x3067;&#x3082;&#x8aad;&#x307f;&#x3084;&#x3059;&#x304f;&#x307e;&#x3068;&#x3081;&#x307e;&#x3057;&#x305f;&#x3002;</p>
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
      </section>

      <footer class="site-footer">
        <nav class="footer-links" aria-label="繧ｵ繧､繝域ュ蝣ｱ">
          <a href="#top">繝医ャ繝�</a>
          <a href="#side-income">蜑ｯ讌ｭ譛亥庶</a>
          <a href="#ai-hourly">AI蜑ｯ讌ｭ譎らｵｦ</a>
          <a href="#tax">遞朱≡繝ｻ髱定牡逕ｳ蜻�</a>
          <a href="#fire">FIRE驕疲�</a>
          <a href="privacy.html">繝励Λ繧､繝舌す繝ｼ繝昴Μ繧ｷ繝ｼ</a>
          <a href="disclaimer.html">蜈崎ｲｬ莠矩��</a>
          <a href="contact.html">縺雁撫縺�粋繧上○</a>
          <a href="operator.html">驕句霧閠�ュ蝣ｱ</a>
        </nav>
        <p>&copy; 雉�肇繧ｷ繝溘Η繝ｬ繝ｼ繧ｿ繝ｼ</p>
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
  currentAssets: { label: "\u73fe\u5728\u8cc7\u7523", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  monthlyInvestment: { label: "\u6bce\u6708\u7a4d\u7acb\u984d", min: 0, max: 100000000, unit: "\u5186", integer: false },
  annualReturn: { label: "\u60f3\u5b9a\u5e74\u5229", min: 0, max: 30, unit: "%", integer: false },
  targetAssets: { label: "\u76ee\u6a19\u8cc7\u7523", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  years: { label: "\u5e74\u6570", min: 0, max: 100, unit: "\u5e74", integer: false },
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

function currentRoute() {
  const route = window.location.hash.replace("#", "");
  if (route === "side-income" || route === "ai-hourly" || route === "tax" || route === "fire") {
    return route;
  }
  return "top";
}

function renderRoute() {
  const route = currentRoute();
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
document.querySelector("#fireForm").addEventListener("input", renderFire);
document.querySelector("#fireForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderFire);
});
window.addEventListener("hashchange", renderRoute);

renderSideIncome();
renderAiHourly();
renderTax();
renderFire();
renderRoute();
