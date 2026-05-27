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
