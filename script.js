var GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
(function () {
        if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === "G-XXXXXXXXXX") {
                  return;
        }
      
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag() {
                  window.dataLayer.push(arguments);
        };
      
        var gaScript = document.createElement("script");
        gaScript.async = true;
        gaScript.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_MEASUREMENT_ID);
        document.head.appendChild(gaScript);
      
        window.gtag("js", new Date());
        window.gtag("config", GA_MEASUREMENT_ID, {
                  send_page_view: false
        });
      
        function sendGaPageView() {
                  window.gtag("event", "page_view", {
                              page_title: document.title,
                              page_location: window.location.href,
                              page_path: window.location.pathname + window.location.search + window.location.hash
                  });
        }
      
        window.addEventListener("hashchange", sendGaPageView);
        sendGaPageView();
}());

document.body.innerHTML = "<main>\n      <div class=\"app-shell\">\n        <header class=\"header\">\n          <h1>&#x8cc7;&#x7523;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h1>\n          <p class=\"lead\">&#x526f;&#x696d;&#x53ce;&#x5165;&#x3068;FIRE&#x9054;&#x6210;&#x307e;&#x3067;&#x306e;&#x9053;&#x306e;&#x308a;&#x3092;&#x3001;&#x540c;&#x3058;&#x5165;&#x529b;&#x611f;&#x3067;&#x7d20;&#x65e9;&#x304f;&#x8a66;&#x305b;&#x308b;&#x8a08;&#x7b97;&#x30c4;&#x30fc;&#x30eb;&#x3067;&#x3059;&#x3002;</p>\n          <nav class=\"tool-nav\" aria-label=\"&#x30c4;&#x30fc;&#x30eb;&#x5207;&#x308a;&#x66ff;&#x3048;\">\n            <a href=\"#top\" data-route=\"top\">&#x30c8;&#x30c3;&#x30d7;</a>\n            <a href=\"#side-income\" data-route=\"side-income\">&#x526f;&#x696d;&#x6708;&#x53ce;</a>\n            <a href=\"#fire\" data-route=\"fire\">FIRE&#x9054;&#x6210;</a>\n          </nav>\n        </header>\n\n        <section class=\"view\" data-view=\"top\" aria-label=\"&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;&#x4e00;&#x89a7;\">\n          <div class=\"tool-grid\">\n            <a class=\"tool-card\" href=\"#side-income\">\n              <p class=\"eyebrow\">Income</p>\n              <h2>&#x526f;&#x696d;&#x6708;&#x53ce;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>\n              <p>&#x6642;&#x7d66;&#x3001;&#x4f5c;&#x696d;&#x6642;&#x9593;&#x3001;&#x6848;&#x4ef6;&#x6570;&#x3001;&#x7a0e;&#x7387;&#x304b;&#x3089;&#x3001;&#x6708;&#x53ce;&#x30fb;&#x5e74;&#x53ce;&#x30fb;&#x7a0e;&#x5f15;&#x5f8c;&#x306e;&#x76ee;&#x5b89;&#x3092;&#x8a08;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>\n              <div class=\"tool-meta\">\n                <span>&#x6708;&#x53ce;</span>\n                <span>&#x5e74;&#x53ce;</span>\n                <span>&#x7a0e;&#x5f15;&#x5f8c;</span>\n              </div>\n              <span class=\"open-label\">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>\n            </a>\n\n            <a class=\"tool-card\" href=\"#fire\">\n              <p class=\"eyebrow\">FIRE</p>\n              <h2>FIRE&#x9054;&#x6210;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>\n              <p>&#x73fe;&#x5728;&#x8cc7;&#x7523;&#x3001;&#x6bce;&#x6708;&#x7a4d;&#x7acb;&#x984d;&#x3001;&#x60f3;&#x5b9a;&#x5e74;&#x5229;&#x3001;&#x76ee;&#x6a19;&#x8cc7;&#x7523;&#x3001;&#x5e74;&#x6570;&#x304b;&#x3089;&#x3001;&#x9054;&#x6210;&#x5e74;&#x6570;&#x3068;&#x5c06;&#x6765;&#x8cc7;&#x7523;&#x3092;&#x8a08;&#x7b97;&#x3057;&#x307e;&#x3059;&#x3002;</p>\n              <div class=\"tool-meta\">\n                <span>&#x9054;&#x6210;&#x5e74;&#x6570;</span>\n                <span>&#x5c06;&#x6765;&#x8cc7;&#x7523;</span>\n                <span>&#x7a4d;&#x7acb;&#x8a08;&#x753b;</span>\n              </div>\n              <span class=\"open-label\">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>\n            </a>\n          </div>\n        </section>\n\n        <section class=\"view\" data-view=\"side-income\" aria-label=\"&#x526f;&#x696d;&#x6708;&#x53ce;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;\">\n          <section class=\"tool-heading\">\n            <h2>&#x526f;&#x696d;&#x6708;&#x53ce;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>\n            <p>&#x6642;&#x7d66;&#x3001;&#x6708;&#x306e;&#x4f5c;&#x696d;&#x6642;&#x9593;&#x3001;&#x6848;&#x4ef6;&#x6570;&#x3001;&#x7a0e;&#x7387;&#x3092;&#x5165;&#x308c;&#x308b;&#x3068;&#x3001;&#x6708;&#x53ce;&#x30fb;&#x5e74;&#x53ce;&#x30fb;&#x7a0e;&#x5f15;&#x5f8c;&#x306e;&#x76ee;&#x5b89;&#x304c;&#x3059;&#x3050;&#x306b;&#x66f4;&#x65b0;&#x3055;&#x308c;&#x307e;&#x3059;&#x3002;</p>\n          </section>\n\n          <section class=\"workspace\" aria-label=\"&#x526f;&#x696d;&#x53ce;&#x5165;&#x306e;&#x8a08;&#x7b97;\">\n            <form class=\"input-panel\" id=\"sideIncomeForm\">\n              <div class=\"field\">\n                <label for=\"hourly\">&#x6642;&#x7d66; <span class=\"unit\">&#x5186;</span></label>\n                <input id=\"hourly\" name=\"hourly\" type=\"number\" inputmode=\"numeric\" min=\"0\" max=\"100000\" step=\"100\" value=\"2000\" required aria-describedby=\"hourlyError\">\n                <p class=\"error\" id=\"hourlyError\"></p>\n              </div>\n\n              <div class=\"field\">\n                <label for=\"hours\">&#x4f5c;&#x696d;&#x6642;&#x9593; <span class=\"unit\">&#x6642;&#x9593; / &#x6708;&#x30fb;1&#x6848;&#x4ef6;</span></label>\n                <input id=\"hours\" name=\"hours\" type=\"number\" inputmode=\"decimal\" min=\"0\" max=\"744\" step=\"0.5\" value=\"20\" required aria-describedby=\"hoursError\">\n                <p class=\"error\" id=\"hoursError\"></p>\n              </div>\n\n              <div class=\"field\">\n                <label for=\"projects\">&#x6848;&#x4ef6;&#x6570; <span class=\"unit\">&#x4ef6; / &#x6708;</span></label>\n                <input id=\"projects\" name=\"projects\" type=\"number\" inputmode=\"numeric\" min=\"0\" max=\"100\" step=\"1\" value=\"3\" required aria-describedby=\"projectsError\">\n                <p class=\"error\" id=\"projectsError\"></p>\n              </div>\n\n              <div class=\"field\">\n                <label for=\"tax\">&#x7a0e;&#x7387; <span class=\"unit\">%</span></label>\n                <input id=\"tax\" name=\"tax\" type=\"number\" inputmode=\"decimal\" min=\"0\" max=\"100\" step=\"0.1\" value=\"20\" required aria-describedby=\"taxError\">\n                <p class=\"error\" id=\"taxError\"></p>\n              </div>\n\n              <div class=\"actions\">\n                <button type=\"reset\">&#x30ea;&#x30bb;&#x30c3;&#x30c8;</button>\n              </div>\n            </form>\n\n            <section class=\"result-panel\" aria-live=\"polite\">\n              <div class=\"hero-result\">\n                <p class=\"eyebrow\">&#x6708;&#x53ce;</p>\n                <p class=\"amount\" id=\"monthly\">0&#x5186;</p>\n              </div>\n\n              <p class=\"notice\" id=\"incomeNotice\">&#x5165;&#x529b;&#x3092;&#x78ba;&#x8a8d;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;&#x30a8;&#x30e9;&#x30fc;&#x304c;&#x3042;&#x308b;&#x9805;&#x76ee;&#x306f;&#x8d64;&#x304f;&#x8868;&#x793a;&#x3055;&#x308c;&#x307e;&#x3059;&#x3002;</p>\n\n              <div class=\"result-grid\">\n                <div class=\"metric\">\n                  <strong>&#x5e74;&#x53ce;</strong>\n                  <span class=\"accent-blue\" id=\"yearly\">0&#x5186;</span>\n                  <small>&#x6708;&#x53ce; &#xd7; 12</small>\n                </div>\n\n                <div class=\"metric\">\n                  <strong>&#x7a0e;&#x5f15;&#x5f8c; / &#x6708;</strong>\n                  <span class=\"accent-green\" id=\"netMonthly\">0&#x5186;</span>\n                  <small>&#x6708;&#x53ce;&#x304b;&#x3089;&#x7a0e;&#x7387;&#x5206;&#x3092;&#x5dee;&#x3057;&#x5f15;&#x304d;</small>\n                </div>\n\n                <div class=\"metric\">\n                  <strong>&#x7a0e;&#x5f15;&#x5f8c; / &#x5e74;</strong>\n                  <span class=\"accent-amber\" id=\"netYearly\">0&#x5186;</span>\n                  <small>&#x7a0e;&#x5f15;&#x5f8c;&#x6708;&#x53ce; &#xd7; 12</small>\n                </div>\n              </div>\n            </section>\n          </section>\n        </section>\n\n        <section class=\"view\" data-view=\"fire\" aria-label=\"FIRE&#x9054;&#x6210;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;\">\n          <section class=\"tool-heading\">\n            <h2>FIRE&#x9054;&#x6210;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</h2>\n            <p>&#x73fe;&#x5728;&#x8cc7;&#x7523;&#x3001;&#x6bce;&#x6708;&#x7a4d;&#x7acb;&#x984d;&#x3001;&#x60f3;&#x5b9a;&#x5e74;&#x5229;&#x3001;&#x76ee;&#x6a19;&#x8cc7;&#x7523;&#x3001;&#x5e74;&#x6570;&#x3092;&#x5165;&#x308c;&#x308b;&#x3068;&#x3001;&#x9054;&#x6210;&#x5e74;&#x6570;&#x3068;&#x5c06;&#x6765;&#x8cc7;&#x7523;&#x306e;&#x76ee;&#x5b89;&#x304c;&#x3059;&#x3050;&#x306b;&#x66f4;&#x65b0;&#x3055;&#x308c;&#x307e;&#x3059;&#x3002;</p>\n          </section>\n\n          <section class=\"workspace\" aria-label=\"FIRE&#x9054;&#x6210;&#x306e;&#x8a08;&#x7b97;\">\n            <form class=\"input-panel\" id=\"fireForm\">\n              <div class=\"field\">\n                <label for=\"currentAssets\">&#x73fe;&#x5728;&#x8cc7;&#x7523; <span class=\"unit\">&#x5186;</span></label>\n                <input id=\"currentAssets\" name=\"currentAssets\" type=\"number\" inputmode=\"numeric\" min=\"0\" max=\"10000000000\" step=\"10000\" value=\"3000000\" required aria-describedby=\"currentAssetsError\">\n                <p class=\"error\" id=\"currentAssetsError\"></p>\n              </div>\n\n              <div class=\"field\">\n                <label for=\"monthlyInvestment\">&#x6bce;&#x6708;&#x7a4d;&#x7acb;&#x984d; <span class=\"unit\">&#x5186; / &#x6708;</span></label>\n                <input id=\"monthlyInvestment\" name=\"monthlyInvestment\" type=\"number\" inputmode=\"numeric\" min=\"0\" max=\"100000000\" step=\"10000\" value=\"100000\" required aria-describedby=\"monthlyInvestmentError\">\n                <p class=\"error\" id=\"monthlyInvestmentError\"></p>\n              </div>\n\n              <div class=\"field\">\n                <label for=\"annualReturn\">&#x60f3;&#x5b9a;&#x5e74;&#x5229; <span class=\"unit\">%</span></label>\n                <input id=\"annualReturn\" name=\"annualReturn\" type=\"number\" inputmode=\"decimal\" min=\"0\" max=\"30\" step=\"0.1\" value=\"4\" required aria-describedby=\"annualReturnError\">\n                <p class=\"error\" id=\"annualReturnError\"></p>\n              </div>\n\n              <div class=\"field\">\n                <label for=\"targetAssets\">&#x76ee;&#x6a19;&#x8cc7;&#x7523; <span class=\"unit\">&#x5186;</span></label>\n                <input id=\"targetAssets\" name=\"targetAssets\" type=\"number\" inputmode=\"numeric\" min=\"0\" max=\"10000000000\" step=\"10000\" value=\"50000000\" required aria-describedby=\"targetAssetsError\">\n                <p class=\"error\" id=\"targetAssetsError\"></p>\n              </div>\n\n              <div class=\"field\">\n                <label for=\"years\">&#x5e74;&#x6570; <span class=\"unit\">&#x5e74;</span></label>\n                <input id=\"years\" name=\"years\" type=\"number\" inputmode=\"decimal\" min=\"0\" max=\"100\" step=\"0.5\" value=\"20\" required aria-describedby=\"yearsError\">\n                <p class=\"error\" id=\"yearsError\"></p>\n              </div>\n\n              <div class=\"actions\">\n                <button type=\"reset\">&#x30ea;&#x30bb;&#x30c3;&#x30c8;</button>\n              </div>\n            </form>\n\n            <section class=\"result-panel\" aria-live=\"polite\">\n              <div class=\"hero-result\">\n                <p class=\"eyebrow\">&#x9054;&#x6210;&#x5e74;&#x6570;</p>\n                <p class=\"amount\" id=\"achievementYears\">0&#x5e74;</p>\n              </div>\n\n              <p class=\"notice\" id=\"fireNotice\">&#x5165;&#x529b;&#x3092;&#x78ba;&#x8a8d;&#x3057;&#x3066;&#x304f;&#x3060;&#x3055;&#x3044;&#x3002;&#x30a8;&#x30e9;&#x30fc;&#x304c;&#x3042;&#x308b;&#x9805;&#x76ee;&#x306f;&#x8d64;&#x304f;&#x8868;&#x793a;&#x3055;&#x308c;&#x307e;&#x3059;&#x3002;</p>\n\n              <div class=\"result-grid\">\n                <div class=\"metric\">\n                  <strong>&#x5c06;&#x6765;&#x8cc7;&#x7523;</strong>\n                  <span class=\"accent-blue\" id=\"futureAssets\">0&#x5186;</span>\n                  <small>&#x5165;&#x529b;&#x3057;&#x305f;&#x5e74;&#x6570;&#x5f8c;&#x306e;&#x898b;&#x8fbc;&#x307f;</small>\n                </div>\n\n                <div class=\"metric\">\n                  <strong>&#x76ee;&#x6a19;&#x3068;&#x306e;&#x5dee;&#x984d;</strong>\n                  <span class=\"accent-green\" id=\"gapAmount\">0&#x5186;</span>\n                  <small>&#x5c06;&#x6765;&#x8cc7;&#x7523; - &#x76ee;&#x6a19;&#x8cc7;&#x7523;</small>\n                </div>\n\n                <div class=\"metric\">\n                  <strong>&#x7a4d;&#x7acb;&#x7dcf;&#x984d;</strong>\n                  <span class=\"accent-amber\" id=\"totalInvestment\">0&#x5186;</span>\n                  <small>&#x73fe;&#x5728;&#x8cc7;&#x7523; + &#x6bce;&#x6708;&#x7a4d;&#x7acb;&#x984d; &#xd7; &#x6708;&#x6570;</small>\n                </div>\n              </div>\n            </section>\n          </section>\n        </section>\n      </div>\n    </main>";

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
      if (route === "side-income" || route === "fire") {
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
document.querySelector("#fireForm").addEventListener("input", renderFire);
document.querySelector("#fireForm").addEventListener("reset", () => {
      window.requestAnimationFrame(renderFire);
});
window.addEventListener("hashchange", renderRoute);

renderSideIncome();
renderFire();
renderRoute();
