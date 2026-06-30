# GitHub手動アップロード用 変更ファイル一覧と完全内容

## 変更ファイル一覧

- `index.html`
- `script.js`
- `style.css`
- `analytics.js`
- `fire.html`
- `tax.html`
- `side-income.html`
- `retirement.html`
- `sitemap.xml`
- `README.md`

## index.html

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="副業月収、税金、FIRE達成、老後資金をまとめて試算できるスマホ対応の資産シミュレーターです。">
    <title>&#x8cc7;&#x7523;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</title>
    <link rel="stylesheet" href="style.css">
    <script>
      window.GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
      window.ADSENSE_CLIENT = "ca-pub-XXXXXXXXXXXXXXXX";
    </script>
    <script defer src="script.js"></script>
  </head>
  <body></body>
</html>

```

## script.js

```js
var GA_MEASUREMENT_ID = window.GA_MEASUREMENT_ID || "G-XXXXXXXXXX";
var ADSENSE_CLIENT = window.ADSENSE_CLIENT || "ca-pub-XXXXXXXXXXXXXXXX";

(function () {
  if (ADSENSE_CLIENT && ADSENSE_CLIENT !== "ca-pub-XXXXXXXXXXXXXXXX") {
    const adScript = document.createElement("script");
    adScript.async = true;
    adScript.crossOrigin = "anonymous";
    adScript.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(ADSENSE_CLIENT)}`;
    document.head.appendChild(adScript);
  }

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

  window.sendAssetSimulatorPageView = function sendAssetSimulatorPageView() {
    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: `${window.location.pathname}${window.location.search}${window.location.hash}`,
    });
  };
})();

const routeMeta = {
  top: {
    title: "資産シミュレーター",
    description: "副業月収、税金、FIRE達成、老後資金をまとめて試算できるスマホ対応の資産シミュレーターです。",
  },
  "side-income": {
    title: "副業月収シミュレーター",
    description: "時給、作業時間、案件数、税率から副業の月収・年収・税引後収入を試算できます。",
  },
  tax: {
    title: "副業税金・青色申告シミュレーター",
    description: "年間副業収入、経費、所得税率、住民税率、青色申告控除額から課税所得と手取り額を試算できます。",
  },
  fire: {
    title: "FIRE達成シミュレーター",
    description: "現在資産、毎月積立額、想定年利、目標資産からFIRE達成までの目安を試算できます。",
  },
  nisa: {
    title: "新NISAシミュレーター",
    description: "老後資金やFIRE計画とあわせて確認したい新NISA活用の目安をまとめています。",
  },
  retirement: {
    title: "老後資金シミュレーター｜退職時資産・不足額・追加積立額を試算",
    description: "現在の年齢、貯蓄、毎月の積立額、想定年利、退職後生活費、年金見込み額から老後資金の不足額と必要な追加積立額を試算できます。",
  },
};

function ensureMeta(name, content) {
  const meta = document.querySelector(`meta[name="${name}"]`) || document.createElement("meta");
  meta.setAttribute("name", name);
  meta.setAttribute("content", content);
  document.head.appendChild(meta);
}

document.body.innerHTML = `
  <main>
    <div class="app-shell">
      <header class="header">
        <h1>資産シミュレーター</h1>
        <p class="lead">副業収入、税金、FIRE達成、老後資金までの道のりを、同じ入力感で素早く試せる計算ツールです。</p>
        <nav class="tool-nav" aria-label="ツール切り替え">
          <a href="#top" data-route="top">トップ</a>
          <a href="#side-income" data-route="side-income">副業月収</a>
          <a href="#tax" data-route="tax">税金・青色申告</a>
          <a href="#fire" data-route="fire">FIRE達成</a>
          <a href="#nisa" data-route="nisa">新NISA</a>
          <a href="#retirement" data-route="retirement">老後資金</a>
        </nav>
      </header>

      <section class="view" data-view="top" aria-label="シミュレーター一覧">
        <div class="tool-grid">
          <a class="tool-card" href="#side-income">
            <p class="eyebrow">Income</p>
            <h2>副業月収シミュレーター</h2>
            <p>時給、作業時間、案件数、税率から、月収・年収・税引後の目安を計算します。</p>
            <div class="tool-meta">
              <span>月収</span>
              <span>年収</span>
              <span>税引後</span>
            </div>
            <span class="open-label">ツールを開く</span>
          </a>

          <a class="tool-card" href="#tax">
            <p class="eyebrow">Tax</p>
            <h2>副業税金・青色申告シミュレーター</h2>
            <p>年間副業収入、経費、所得税率、住民税率、青色申告控除額から手取りを試算します。</p>
            <div class="tool-meta">
              <span>課税所得</span>
              <span>所得税</span>
              <span>手取り</span>
            </div>
            <span class="open-label">ツールを開く</span>
          </a>

          <a class="tool-card" href="#fire">
            <p class="eyebrow">FIRE</p>
            <h2>FIRE達成シミュレーター</h2>
            <p>現在資産、毎月積立額、想定年利、目標資産、年数から、達成年数と将来資産を計算します。</p>
            <div class="tool-meta">
              <span>達成年数</span>
              <span>将来資産</span>
              <span>積立計画</span>
            </div>
            <span class="open-label">ツールを開く</span>
          </a>

          <a class="tool-card" href="#nisa">
            <p class="eyebrow">NISA</p>
            <h2>新NISAシミュレーター</h2>
            <p>年間投資枠や非課税枠を、老後資金・FIRE計画とあわせて確認できます。</p>
            <div class="tool-meta">
              <span>非課税枠</span>
              <span>積立枠</span>
              <span>成長枠</span>
            </div>
            <span class="open-label">確認する</span>
          </a>

          <a class="tool-card" href="#retirement">
            <p class="eyebrow">Retirement</p>
            <h2>老後資金シミュレーター</h2>
            <p>現在の年齢・貯蓄・毎月の積立額から、退職時点の資産と老後資金の不足額を試算します。</p>
            <div class="tool-meta">
              <span>退職時資産</span>
              <span>不足額</span>
              <span>追加積立</span>
            </div>
            <span class="open-label">ツールを開く</span>
          </a>
        </div>
      </section>

      <section class="view" data-view="side-income" aria-label="副業月収シミュレーター">
        <section class="tool-heading">
          <h2>副業月収シミュレーター</h2>
          <p>時給、月の作業時間、案件数、税率を入れると、月収・年収・税引後の目安がすぐに更新されます。</p>
        </section>

        <section class="workspace" aria-label="副業収入の計算">
          <form class="input-panel" id="sideIncomeForm">
            <div class="field">
              <label for="hourly">時給 <span class="unit">円</span></label>
              <input id="hourly" name="hourly" type="number" inputmode="numeric" min="0" max="100000" step="100" value="2000" required aria-describedby="hourlyError">
              <p class="error" id="hourlyError"></p>
            </div>
            <div class="field">
              <label for="hours">作業時間 <span class="unit">時間 / 月・1案件</span></label>
              <input id="hours" name="hours" type="number" inputmode="decimal" min="0" max="744" step="0.5" value="20" required aria-describedby="hoursError">
              <p class="error" id="hoursError"></p>
            </div>
            <div class="field">
              <label for="projects">案件数 <span class="unit">件 / 月</span></label>
              <input id="projects" name="projects" type="number" inputmode="numeric" min="0" max="100" step="1" value="3" required aria-describedby="projectsError">
              <p class="error" id="projectsError"></p>
            </div>
            <div class="field">
              <label for="tax">税率 <span class="unit">%</span></label>
              <input id="tax" name="tax" type="number" inputmode="decimal" min="0" max="100" step="0.1" value="20" required aria-describedby="taxError">
              <p class="error" id="taxError"></p>
            </div>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">月収</p>
              <p class="amount" id="monthly">0円</p>
            </div>
            <p class="notice" id="incomeNotice">入力を確認してください。エラーがある項目は赤く表示されます。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>年収</strong>
                <span class="accent-blue" id="yearly">0円</span>
                <small>月収 × 12</small>
              </div>
              <div class="metric">
                <strong>税引後 / 月</strong>
                <span class="accent-green" id="netMonthly">0円</span>
                <small>月収から税率分を差し引き</small>
              </div>
              <div class="metric">
                <strong>税引後 / 年</strong>
                <span class="accent-amber" id="netYearly">0円</span>
                <small>税引後月収 × 12</small>
              </div>
            </div>
          </section>
        </section>
      </section>

      <section class="view" data-view="tax" aria-label="副業税金・青色申告シミュレーター">
        <section class="tool-heading">
          <h2>副業税金・青色申告シミュレーター</h2>
          <p>年間副業収入、経費、各税率、青色申告控除額を入れると、課税所得・税額・手取りの目安がすぐに更新されます。</p>
        </section>

        <section class="workspace" aria-label="副業税金の計算">
          <form class="input-panel" id="taxForm">
            <div class="field">
              <label for="annualSideIncome">年間副業収入 <span class="unit">円</span></label>
              <input id="annualSideIncome" name="annualSideIncome" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="2400000" required aria-describedby="annualSideIncomeError">
              <p class="error" id="annualSideIncomeError"></p>
            </div>
            <div class="field">
              <label for="expenses">経費 <span class="unit">円</span></label>
              <input id="expenses" name="expenses" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="400000" required aria-describedby="expensesError">
              <p class="error" id="expensesError"></p>
            </div>
            <div class="field">
              <label for="incomeTaxRate">所得税率 <span class="unit">%</span></label>
              <input id="incomeTaxRate" name="incomeTaxRate" type="number" inputmode="decimal" min="0" max="45" step="0.1" value="10" required aria-describedby="incomeTaxRateError">
              <p class="error" id="incomeTaxRateError"></p>
            </div>
            <div class="field">
              <label for="residentTaxRate">住民税率 <span class="unit">%</span></label>
              <input id="residentTaxRate" name="residentTaxRate" type="number" inputmode="decimal" min="0" max="20" step="0.1" value="10" required aria-describedby="residentTaxRateError">
              <p class="error" id="residentTaxRateError"></p>
            </div>
            <div class="field">
              <label for="blueDeduction">青色申告控除額 <span class="unit">円</span></label>
              <input id="blueDeduction" name="blueDeduction" type="number" inputmode="numeric" min="0" max="650000" step="10000" value="650000" required aria-describedby="blueDeductionError">
              <p class="error" id="blueDeductionError"></p>
            </div>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">手取り額</p>
              <p class="amount" id="takeHome">0円</p>
            </div>
            <p class="notice" id="taxNotice">入力を確認してください。エラーがある項目は赤く表示されます。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>課税所得</strong>
                <span class="accent-blue" id="taxableIncome">0円</span>
                <small>収入 - 経費 - 青色申告控除</small>
              </div>
              <div class="metric">
                <strong>所得税</strong>
                <span class="accent-amber" id="incomeTaxAmount">0円</span>
                <small>課税所得 × 所得税率</small>
              </div>
              <div class="metric">
                <strong>住民税</strong>
                <span class="accent-amber" id="residentTaxAmount">0円</span>
                <small>課税所得 × 住民税率</small>
              </div>
              <div class="metric">
                <strong>手取り額</strong>
                <span class="accent-green" id="takeHomeDetail">0円</span>
                <small>収入 - 経費 - 所得税 - 住民税</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="FAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>青色申告控除額はいくらで入力すればいいですか？</summary>
              <p>条件を満たす場合は65万円、それ以外は55万円や10万円など、自分の申告方法に合わせて入力してください。</p>
            </details>
            <details>
              <summary>所得税率は何を入れますか？</summary>
              <p>給与など他の所得と合算したときの概算税率を入れてください。正確な税額は税理士や税務署に確認してください。</p>
            </details>
            <details>
              <summary>この計算結果は確定申告にそのまま使えますか？</summary>
              <p>簡易試算です。復興特別所得税、各種控除、事業税などは含まないため、目安として使ってください。</p>
            </details>
          </div>
        </section>
      </section>

      <section class="view" data-view="fire" aria-label="FIRE達成シミュレーター">
        <section class="tool-heading">
          <h2>FIRE達成シミュレーター</h2>
          <p>現在資産、毎月積立額、想定年利、目標資産、年数を入れると、達成年数と将来資産の目安がすぐに更新されます。</p>
        </section>

        <section class="workspace" aria-label="FIRE達成の計算">
          <form class="input-panel" id="fireForm">
            <div class="field">
              <label for="currentAssets">現在資産 <span class="unit">円</span></label>
              <input id="currentAssets" name="currentAssets" type="number" inputmode="numeric" min="0" max="10000000000" step="10000" value="3000000" required aria-describedby="currentAssetsError">
              <p class="error" id="currentAssetsError"></p>
            </div>
            <div class="field">
              <label for="monthlyInvestment">毎月積立額 <span class="unit">円 / 月</span></label>
              <input id="monthlyInvestment" name="monthlyInvestment" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="100000" required aria-describedby="monthlyInvestmentError">
              <p class="error" id="monthlyInvestmentError"></p>
            </div>
            <div class="field">
              <label for="annualReturn">想定年利 <span class="unit">%</span></label>
              <input id="annualReturn" name="annualReturn" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="4" required aria-describedby="annualReturnError">
              <p class="error" id="annualReturnError"></p>
            </div>
            <div class="field">
              <label for="targetAssets">目標資産 <span class="unit">円</span></label>
              <input id="targetAssets" name="targetAssets" type="number" inputmode="numeric" min="0" max="10000000000" step="10000" value="50000000" required aria-describedby="targetAssetsError">
              <p class="error" id="targetAssetsError"></p>
            </div>
            <div class="field">
              <label for="years">年数 <span class="unit">年</span></label>
              <input id="years" name="years" type="number" inputmode="decimal" min="0" max="100" step="0.5" value="20" required aria-describedby="yearsError">
              <p class="error" id="yearsError"></p>
            </div>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">達成年数</p>
              <p class="amount" id="achievementYears">0年</p>
            </div>
            <p class="notice" id="fireNotice">入力を確認してください。エラーがある項目は赤く表示されます。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>将来資産</strong>
                <span class="accent-blue" id="futureAssets">0円</span>
                <small>入力した年数後の見込み</small>
              </div>
              <div class="metric">
                <strong>目標との差額</strong>
                <span class="accent-green" id="gapAmount">0円</span>
                <small>将来資産 - 目標資産</small>
              </div>
              <div class="metric">
                <strong>積立総額</strong>
                <span class="accent-amber" id="totalInvestment">0円</span>
                <small>現在資産 + 毎月積立額 × 月数</small>
              </div>
            </div>
          </section>
        </section>
      </section>

      <section class="view" data-view="nisa" aria-label="新NISAシミュレーター">
        <section class="tool-heading">
          <h2>新NISAシミュレーター</h2>
          <p>老後資金やFIRE計画とあわせて、年間投資枠と生涯非課税限度額の使い方を確認できます。</p>
        </section>
        <section class="link-panel">
          <div class="metric">
            <strong>年間投資枠の目安</strong>
            <span class="accent-blue">360万円</span>
            <small>つみたて投資枠120万円 + 成長投資枠240万円</small>
          </div>
          <div class="metric">
            <strong>生涯非課税限度額</strong>
            <span class="accent-green">1,800万円</span>
            <small>成長投資枠はうち1,200万円まで</small>
          </div>
          <div class="internal-links">
            <a href="#retirement">老後資金シミュレーターで確認する</a>
            <a href="#fire">FIRE達成シミュレーターで確認する</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="retirement" aria-label="老後資金シミュレーター">
        <section class="tool-heading">
          <h2>老後資金シミュレーター</h2>
          <p>現在の年齢・貯蓄・毎月の積立額から、退職時点の予想資産額、目標資金との差額、老後資金の不足額を試算します。</p>
        </section>

        <section class="workspace" aria-label="老後資金の計算">
          <form class="input-panel" id="retirementForm">
            <div class="field">
              <label for="currentAge">現在の年齢 <span class="unit">歳</span></label>
              <input id="currentAge" name="currentAge" type="number" inputmode="numeric" min="0" max="100" step="1" value="35" required aria-describedby="currentAgeError">
              <p class="error" id="currentAgeError"></p>
            </div>
            <div class="field">
              <label for="retirementAge">退職予定年齢 <span class="unit">歳</span></label>
              <input id="retirementAge" name="retirementAge" type="number" inputmode="numeric" min="1" max="100" step="1" value="65" required aria-describedby="retirementAgeError">
              <p class="error" id="retirementAgeError"></p>
            </div>
            <div class="field">
              <label for="retirementSavings">現在の貯蓄額 <span class="unit">円</span></label>
              <input id="retirementSavings" name="retirementSavings" type="number" inputmode="numeric" min="0" max="10000000000" step="10000" value="5000000" required aria-describedby="retirementSavingsError">
              <p class="error" id="retirementSavingsError"></p>
            </div>
            <div class="field">
              <label for="retirementMonthly">毎月の積立額 <span class="unit">円 / 月</span></label>
              <input id="retirementMonthly" name="retirementMonthly" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="80000" required aria-describedby="retirementMonthlyError">
              <p class="error" id="retirementMonthlyError"></p>
            </div>
            <div class="field">
              <label for="retirementReturn">想定年利 <span class="unit">%</span></label>
              <input id="retirementReturn" name="retirementReturn" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="3" required aria-describedby="retirementReturnError">
              <p class="error" id="retirementReturnError"></p>
            </div>
            <div class="field">
              <label for="retirementTarget">老後に必要な目標資金 <span class="unit">円</span></label>
              <input id="retirementTarget" name="retirementTarget" type="number" inputmode="numeric" min="0" max="10000000000" step="10000" value="30000000" required aria-describedby="retirementTargetError">
              <p class="error" id="retirementTargetError"></p>
            </div>
            <div class="field">
              <label for="monthlyLivingCost">退職後の毎月生活費 <span class="unit">円 / 月</span></label>
              <input id="monthlyLivingCost" name="monthlyLivingCost" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="260000" required aria-describedby="monthlyLivingCostError">
              <p class="error" id="monthlyLivingCostError"></p>
            </div>
            <div class="field">
              <label for="monthlyPension">年金見込み額 <span class="unit">円 / 月</span></label>
              <input id="monthlyPension" name="monthlyPension" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="160000" required aria-describedby="monthlyPensionError">
              <p class="error" id="monthlyPensionError"></p>
            </div>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">退職時点の予想資産額</p>
              <p class="amount" id="retirementFutureAssets">0円</p>
            </div>
            <p class="notice" id="retirementNotice">入力を確認してください。退職予定年齢は現在の年齢より大きくしてください。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>目標資金との差額</strong>
                <span class="accent-green" id="retirementTargetGap">0円</span>
                <small>退職時資産 - 目標資金</small>
              </div>
              <div class="metric">
                <strong>必要な追加積立額</strong>
                <span class="accent-amber" id="requiredAdditionalMonthly">0円</span>
                <small>目標達成に足りない月額の目安</small>
              </div>
              <div class="metric">
                <strong>老後資金の不足額</strong>
                <span class="accent-amber" id="retirementShortage">0円</span>
                <small>生活費と年金の差額を30年分で試算</small>
              </div>
              <div class="metric">
                <strong>FIRE達成との比較</strong>
                <span class="accent-blue" id="fireComparison">0円</span>
                <small>年間生活費25年分との比較</small>
              </div>
              <div class="metric">
                <strong>新NISA活用時の目安</strong>
                <span class="accent-green" id="nisaGuide">0円</span>
                <small>年間360万円枠に対する積立ペース</small>
              </div>
            </div>
            <div class="internal-links">
              <a href="#fire">FIREシミュレーターでも確認する</a>
              <a href="#nisa">新NISAシミュレーターの目安を見る</a>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="老後資金シミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>老後資金の不足額はどう計算していますか？</summary>
              <p>退職後の毎月生活費から年金見込み額を差し引き、30年分の不足総額を出したうえで、退職時点の予想資産額との差額を表示しています。</p>
            </details>
            <details>
              <summary>必要な追加積立額は何を表していますか？</summary>
              <p>現在の積立額では目標資金に届かない場合に、退職予定年齢までに追加で必要になりそうな月額を概算しています。</p>
            </details>
            <details>
              <summary>FIRE達成との比較は何を基準にしていますか？</summary>
              <p>年間生活費の25年分をFIRE目標額として、退職時点の予想資産額との差額を表示しています。4%ルールの簡易的な目安です。</p>
            </details>
            <details>
              <summary>新NISA活用時の目安はどう見ればいいですか？</summary>
              <p>現在の毎月積立額を年額に直し、新NISAの年間投資枠360万円に対してどれくらい使えているかを表示しています。</p>
            </details>
          </div>
        </section>
      </section>
    </div>
  </main>`;

const yen = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
  maximumFractionDigits: 0,
});

const fieldRules = {
  hourly: { label: "時給", min: 0, max: 100000, unit: "円", integer: false },
  hours: { label: "作業時間", min: 0, max: 744, unit: "時間", integer: false },
  projects: { label: "案件数", min: 0, max: 100, unit: "件", integer: true },
  tax: { label: "税率", min: 0, max: 100, unit: "%", integer: false },
  annualSideIncome: { label: "年間副業収入", min: 0, max: 1000000000, unit: "円", integer: false },
  expenses: { label: "経費", min: 0, max: 1000000000, unit: "円", integer: false },
  incomeTaxRate: { label: "所得税率", min: 0, max: 45, unit: "%", integer: false },
  residentTaxRate: { label: "住民税率", min: 0, max: 20, unit: "%", integer: false },
  blueDeduction: { label: "青色申告控除額", min: 0, max: 650000, unit: "円", integer: false },
  currentAssets: { label: "現在資産", min: 0, max: 10000000000, unit: "円", integer: false },
  monthlyInvestment: { label: "毎月積立額", min: 0, max: 100000000, unit: "円", integer: false },
  annualReturn: { label: "想定年利", min: 0, max: 30, unit: "%", integer: false },
  targetAssets: { label: "目標資産", min: 0, max: 10000000000, unit: "円", integer: false },
  years: { label: "年数", min: 0, max: 100, unit: "年", integer: false },
  currentAge: { label: "現在の年齢", min: 0, max: 100, unit: "歳", integer: true },
  retirementAge: { label: "退職予定年齢", min: 1, max: 100, unit: "歳", integer: true },
  retirementSavings: { label: "現在の貯蓄額", min: 0, max: 10000000000, unit: "円", integer: false },
  retirementMonthly: { label: "毎月の積立額", min: 0, max: 100000000, unit: "円", integer: false },
  retirementReturn: { label: "想定年利", min: 0, max: 30, unit: "%", integer: false },
  retirementTarget: { label: "老後に必要な目標資金", min: 0, max: 10000000000, unit: "円", integer: false },
  monthlyLivingCost: { label: "退職後の毎月生活費", min: 0, max: 100000000, unit: "円", integer: false },
  monthlyPension: { label: "年金見込み額", min: 0, max: 100000000, unit: "円", integer: false },
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
    message = `${rule.label}を入力してください。`;
  } else if (!/^-?\d+(\.\d+)?$/.test(rawValue)) {
    message = `${rule.label}は半角数字で入力してください。`;
  } else {
    value = Number(rawValue);
    if (!Number.isFinite(value)) {
      message = `${rule.label}は数値で入力してください。`;
    } else if (value < rule.min) {
      message = `${rule.label}は${formatLimit(rule.min, rule.unit)}以上で入力してください。`;
    } else if (value > rule.max) {
      message = `${rule.label}は${formatLimit(rule.max, rule.unit)}以下で入力してください。`;
    } else if (rule.integer && !Number.isInteger(value)) {
      message = `${rule.label}は整数で入力してください。`;
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
    setText("monthly", "入力エラー");
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
    setText("takeHome", "入力エラー");
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
    return "未達成";
  }
  if (months === 0) {
    return "達成済み";
  }

  const years = Math.floor(months / 12);
  const remainder = months % 12;
  if (years === 0) {
    return `${remainder}か月`;
  }
  if (remainder === 0) {
    return `${years}年`;
  }
  return `${years}年${remainder}か月`;
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
    setText("achievementYears", "入力エラー");
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
    error.textContent = "退職予定年齢は現在の年齢より大きくしてください。";
    hasError = true;
  }

  document.querySelector("#retirementNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("retirementFutureAssets", "入力エラー");
    setText("retirementTargetGap", yen.format(0));
    setText("requiredAdditionalMonthly", yen.format(0));
    setText("retirementShortage", yen.format(0));
    setText("fireComparison", yen.format(0));
    setText("nisaGuide", "入力エラー");
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
  setText("nisaGuide", `${yen.format(annualNisaUse)} / 年（枠の${nisaUseRate.toFixed(1)}%）`);
}

function currentRoute() {
  const route = window.location.hash.replace("#", "");
  if (route === "side-income" || route === "tax" || route === "fire" || route === "nisa" || route === "retirement") {
    return route;
  }
  return "top";
}

function renderRoute() {
  const route = currentRoute();
  const meta = routeMeta[route] || routeMeta.top;

  document.title = meta.title;
  ensureMeta("description", meta.description);

  document.querySelectorAll("[data-view]").forEach((view) => {
    view.classList.toggle("is-active", view.dataset.view === route);
  });
  document.querySelectorAll("[data-route]").forEach((link) => {
    link.setAttribute("aria-current", link.dataset.route === route ? "page" : "false");
  });

  if (typeof window.sendAssetSimulatorPageView === "function") {
    window.sendAssetSimulatorPageView();
  }
}

function bindCalculator(formId, render) {
  document.querySelector(`#${formId}`).addEventListener("input", render);
  document.querySelector(`#${formId}`).addEventListener("reset", () => {
    window.requestAnimationFrame(render);
  });
}

bindCalculator("sideIncomeForm", renderSideIncome);
bindCalculator("taxForm", renderTax);
bindCalculator("fireForm", renderFire);
bindCalculator("retirementForm", renderRetirement);
window.addEventListener("hashchange", renderRoute);

renderSideIncome();
renderTax();
renderFire();
renderRetirement();
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
input:focus-visible {
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

input {
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

input:focus {
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

## analytics.js

```js
(function () {
  const measurementId = window.GA_MEASUREMENT_ID;
  const adsenseClient = window.ADSENSE_CLIENT;

  if (adsenseClient && adsenseClient !== "ca-pub-XXXXXXXXXXXXXXXX") {
    const adScript = document.createElement("script");
    adScript.async = true;
    adScript.crossOrigin = "anonymous";
    adScript.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(adsenseClient)}`;
    document.head.appendChild(adScript);
  }

  if (!measurementId || measurementId === "G-XXXXXXXXXX") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    send_page_view: false,
  });

  function pagePath() {
    return `${window.location.pathname}${window.location.search}${window.location.hash}`;
  }

  function sendPageView() {
    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pagePath(),
    });
  }

  window.addEventListener("hashchange", sendPageView);
  sendPageView();
})();

```

## fire.html

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="refresh" content="0; url=index.html#fire">
    <title>FIRE達成シミュレーター</title>
    <script>
      window.GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
      window.ADSENSE_CLIENT = "ca-pub-XXXXXXXXXXXXXXXX";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <p><a href="index.html#fire">FIRE達成シミュレーターを開く</a></p>
  </body>
</html>

```

## tax.html

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="refresh" content="0; url=index.html#tax">
    <meta name="description" content="年間副業収入、経費、所得税率、住民税率、青色申告控除額から課税所得と手取り額を試算できます。">
    <title>副業税金・青色申告シミュレーター</title>
    <script>
      window.GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
      window.ADSENSE_CLIENT = "ca-pub-XXXXXXXXXXXXXXXX";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <p><a href="index.html#tax">副業税金・青色申告シミュレーターを開く</a></p>
  </body>
</html>

```

## side-income.html

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="refresh" content="0; url=index.html#side-income">
    <title>副業月収シミュレーター</title>
    <script>
      window.GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
      window.ADSENSE_CLIENT = "ca-pub-XXXXXXXXXXXXXXXX";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <p><a href="index.html#side-income">副業月収シミュレーターを開く</a></p>
  </body>
</html>

```

## retirement.html

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="refresh" content="0; url=index.html#retirement">
    <meta name="description" content="現在の年齢、貯蓄、毎月の積立額、想定年利、退職後生活費、年金見込み額から老後資金の不足額と必要な追加積立額を試算できます。">
    <title>老後資金シミュレーター</title>
    <script>
      window.GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
      window.ADSENSE_CLIENT = "ca-pub-XXXXXXXXXXXXXXXX";
    </script>
    <script defer src="analytics.js"></script>
  </head>
  <body>
    <p><a href="index.html#retirement">老後資金シミュレーターを開く</a></p>
  </body>
</html>

```

## sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
  </url>
  <url>
    <loc>https://example.com/side-income.html</loc>
  </url>
  <url>
    <loc>https://example.com/tax.html</loc>
  </url>
  <url>
    <loc>https://example.com/fire.html</loc>
  </url>
  <url>
    <loc>https://example.com/retirement.html</loc>
  </url>
</urlset>

```

## README.md

```md
# 資産シミュレーター

スマホ対応の静的HTMLサイトです。副業月収シミュレーター、副業税金・青色申告シミュレーター、FIRE達成シミュレーター、老後資金シミュレーターを収録しています。Vercelではビルドなしで公開できます。

## ファイル構成

- `index.html`: トップページと各シミュレーター
- `style.css`: 画面デザイン
- `script.js`: 画面切り替えと計算ロジック
- `tax.html`: 税金・青色申告シミュレーターへのリダイレクト
- `retirement.html`: 老後資金シミュレーターへのリダイレクト
- `sitemap.xml`: 検索エンジン向けサイトマップ
- `analytics.js`: Google Analytics読み込みとページビュー送信
- `vercel.json`: Vercel公開用設定
- `.gitignore`: VercelやOSのローカル生成ファイルを除外

## Vercelで公開する

1. このフォルダをGitHubなどのGitリポジトリにpushします。
2. Vercelで「Add New...」からリポジトリをImportします。
3. Framework Presetは「Other」のままで公開できます。
4. Build Commandは不要です。
5. Output Directoryは未指定、またはルートのままで公開できます。

## Google Analyticsを有効化する

各HTMLファイルの `<head>` 内にある `GA_MEASUREMENT_ID` に、GA4の測定IDを設定してください。

```html
window.GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
```

`G-XXXXXXXXXX` のままならGoogle Analyticsは読み込まれません。
トップページ、副業月収、税金・青色申告、FIRE達成のハッシュ切り替えもページビューとして送信されます。

## Google AdSenseを有効化する

各HTMLファイルの `<head>` 内にある `ADSENSE_CLIENT` に、AdSenseのパブリッシャーIDを設定してください。

```html
window.ADSENSE_CLIENT = "ca-pub-XXXXXXXXXXXXXXXX";
```

`ca-pub-XXXXXXXXXXXXXXXX` のままならAdSenseは読み込まれません。

```

