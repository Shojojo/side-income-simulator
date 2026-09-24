(() => {
  "use strict";

  const root = document.querySelector(".money-garden");
  if (!root) return;

  const STORAGE_KEY = "moneyGarden:v1:easy";
  const MAX_MONTHLY = 99_999_999;
  const HIGH_AMOUNT = 10_000_000;
  const breakdownKeys = ["hobby", "daily", "travel", "family", "other"];
  const errorIds = {
    hobby: "gardenBreakdownHobbyError",
    daily: "gardenBreakdownDailyError",
    travel: "gardenBreakdownTravelError",
    family: "gardenBreakdownFamilyError",
    other: "gardenBreakdownOtherError"
  };
  const actionLabels = {
    adjust: "今の範囲で配分を調整する",
    staged: "目標を段階的にする",
    income: "手取り収入を増やす方法を確認する",
    "fixed-cost": "固定費を見直す",
    household: "家計全体を確認する",
    keep: "現在の計画を維持する"
  };
  const stageCopy = {
    "00": ["植物のない土", "計画進捗 0/4"],
    planted: ["種を植えた土", "計画進捗 0/4"],
    "01": ["小さく閉じた緑の蕾", "計画進捗 1/4"],
    "02": ["花色が増えた蕾", "計画進捗 2/4"],
    "03": ["部分的に開花", "計画進捗 3/4"],
    "04": ["計画の花が満開", "計画進捗 4/4"]
  };

  const elements = {
    start: document.getElementById("moneyGardenStart"),
    steps: document.getElementById("moneyGardenSteps"),
    desired: document.getElementById("gardenDesiredAmount"),
    current: document.getElementById("gardenCurrentAmount"),
    desiredError: document.getElementById("gardenDesiredError"),
    currentError: document.getElementById("gardenCurrentError"),
    breakdownInputs: [...document.querySelectorAll("[data-garden-breakdown]")],
    breakdownTotal: document.getElementById("gardenBreakdownTotal"),
    breakdownStatus: document.getElementById("gardenBreakdownStatus"),
    actions: [...document.querySelectorAll('input[name="gardenNextAction"]')],
    actionLinks: document.getElementById("gardenActionLinks"),
    stageLabel: document.getElementById("gardenStageLabel"),
    progress: document.getElementById("gardenProgressText"),
    resultLead: document.getElementById("gardenResultLead"),
    desiredMonthly: document.getElementById("gardenDesiredMonthlyResult"),
    desiredAnnual: document.getElementById("gardenDesiredAnnualResult"),
    currentMonthly: document.getElementById("gardenCurrentMonthlyResult"),
    currentAnnual: document.getElementById("gardenCurrentAnnualResult"),
    differenceLabel: document.getElementById("gardenDifferenceLabel"),
    monthlyDifference: document.getElementById("gardenMonthlyDifference"),
    annualDifference: document.getElementById("gardenAnnualDifference"),
    summary: document.getElementById("gardenSummaryContent"),
    complete: document.getElementById("gardenComplete"),
    saveStatus: document.getElementById("gardenSaveStatus"),
    clear: document.getElementById("gardenClear")
  };

  const emptyState = () => ({
    version: 1,
    started: false,
    desiredRaw: "",
    currentRaw: "",
    breakdown: Object.fromEntries(breakdownKeys.map((key) => [key, ""])),
    action: "",
    completedSignature: "",
    updatedAt: ""
  });
  let state = emptyState();
  let storageAvailable = true;

  function normalizeDigits(value) {
    return String(value ?? "").replace(/[０-９]/g, (character) =>
      String.fromCharCode(character.charCodeAt(0) - 0xfee0)
    );
  }

  function parseAmount(raw) {
    const normalized = normalizeDigits(raw).trim().replace(/,/g, "");
    if (normalized === "") return { kind: "empty", value: null, message: "" };
    if (!/^\d+$/.test(normalized)) {
      return { kind: "invalid", value: null, message: "0以上の整数で入力してください。小数、記号、指数表記は使えません。" };
    }
    const value = Number(normalized);
    if (!Number.isSafeInteger(value) || value > MAX_MONTHLY) {
      return { kind: "invalid", value: null, message: "月額99,999,999円以下で入力してください。" };
    }
    return {
      kind: "valid",
      value,
      message: value >= HIGH_AMOUNT ? "大きな金額です。月額の入力か確認してください。" : ""
    };
  }

  function formatYen(value) {
    return `${value.toLocaleString("ja-JP")}円`;
  }

  function signatureFor(desired, current, breakdown, action) {
    return JSON.stringify({ desired, current, breakdown, action });
  }

  function calculate(desired, current) {
    return {
      difference: desired - current,
      shortage: Math.max(desired - current, 0),
      surplus: Math.max(current - desired, 0),
      desiredAnnual: desired * 12,
      currentAnnual: current * 12
    };
  }

  function readStateFromForm() {
    state.desiredRaw = elements.desired.value;
    state.currentRaw = elements.current.value;
    elements.breakdownInputs.forEach((input) => {
      state.breakdown[input.dataset.gardenBreakdown] = input.value;
    });
    state.action = elements.actions.find((input) => input.checked)?.value || "";
  }

  function applyStateToForm() {
    elements.desired.value = state.desiredRaw;
    elements.current.value = state.currentRaw;
    elements.breakdownInputs.forEach((input) => {
      input.value = state.breakdown[input.dataset.gardenBreakdown] || "";
    });
    elements.actions.forEach((input) => {
      input.checked = input.value === state.action;
    });
  }

  function setValidation(input, errorElement, parsed, required) {
    let message = parsed.message;
    if (required && parsed.kind === "empty") message = "金額を入力してください。0円の場合は0と入力してください。";
    const invalid = parsed.kind === "invalid" || (required && parsed.kind === "empty");
    input.setAttribute("aria-invalid", String(invalid));
    errorElement.textContent = message;
  }

  function save() {
    state.updatedAt = new Date().toISOString();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      storageAvailable = true;
      elements.saveStatus.textContent = "入力内容をこのブラウザに自動保存しました。";
    } catch (_error) {
      storageAvailable = false;
      elements.saveStatus.textContent = "自動保存を利用できません。計算はそのまま続けられます。";
    }
  }

  function restore() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      if (!saved || saved.version !== 1) return;
      const clean = emptyState();
      clean.started = Boolean(saved.started);
      clean.desiredRaw = typeof saved.desiredRaw === "string" ? saved.desiredRaw : "";
      clean.currentRaw = typeof saved.currentRaw === "string" ? saved.currentRaw : "";
      breakdownKeys.forEach((key) => {
        clean.breakdown[key] = typeof saved.breakdown?.[key] === "string" ? saved.breakdown[key] : "";
      });
      clean.action = Object.hasOwn(actionLabels, saved.action) ? saved.action : "";
      clean.completedSignature = typeof saved.completedSignature === "string" ? saved.completedSignature : "";
      clean.updatedAt = typeof saved.updatedAt === "string" ? saved.updatedAt : "";
      state = clean;
      elements.saveStatus.textContent = "このブラウザに保存されていた入力内容を復元しました。";
    } catch (_error) {
      storageAvailable = false;
      elements.saveStatus.textContent = "保存内容を読み込めませんでした。新しい計画として入力できます。";
    }
  }

  function renderActionLinks(action) {
    const links = {
      income: [["side-income.html", "副業月収を試算"], ["take-home.html", "副業の手取りを確認"]],
      "fixed-cost": [["fixed-cost-reduction.html", "固定費の削減余地を確認"]],
      household: [["cash-flow.html", "家計収支を確認"], ["emergency-fund.html", "生活防衛資金を確認"]]
    }[action] || [];
    elements.actionLinks.replaceChildren();
    links.forEach(([href, label]) => {
      const anchor = document.createElement("a");
      anchor.href = href;
      anchor.textContent = label;
      elements.actionLinks.append(anchor);
    });
    if (links.length) {
      const note = document.createElement("p");
      note.textContent = "リンク先の結果は自動反映されません。戻った後に手動で入力してください。";
      elements.actionLinks.append(note);
    }
  }

  function render() {
    const desired = parseAmount(state.desiredRaw);
    const current = parseAmount(state.currentRaw);
    const parsedBreakdown = Object.fromEntries(breakdownKeys.map((key) => [key, parseAmount(state.breakdown[key])]));
    const invalidBreakdown = Object.values(parsedBreakdown).some((entry) => entry.kind === "invalid");

    setValidation(elements.desired, elements.desiredError, desired, state.started);
    setValidation(elements.current, elements.currentError, current, desired.kind === "valid");
    elements.breakdownInputs.forEach((input) => {
      const key = input.dataset.gardenBreakdown;
      setValidation(input, document.getElementById(errorIds[key]), parsedBreakdown[key], false);
    });

    const breakdownValues = Object.values(parsedBreakdown).filter((entry) => entry.kind === "valid").map((entry) => entry.value);
    const breakdownTotal = breakdownValues.reduce((sum, value) => sum + value, 0);
    const hasBreakdown = breakdownValues.length > 0;
    elements.breakdownTotal.textContent = hasBreakdown ? formatYen(breakdownTotal) : "未入力";
    if (!hasBreakdown) {
      elements.breakdownStatus.textContent = "内訳は入力した項目だけを集計します。希望額へは加算しません。";
    } else if (desired.kind !== "valid") {
      elements.breakdownStatus.textContent = "希望額を入力すると、内訳との差を確認できます。";
    } else if (breakdownTotal > desired.value) {
      elements.breakdownStatus.textContent = `希望額を${formatYen(breakdownTotal - desired.value)}超えています。内訳は希望額へ加算されません。`;
    } else if (breakdownTotal < desired.value) {
      elements.breakdownStatus.textContent = `希望額のうち${formatYen(desired.value - breakdownTotal)}は未配分です。`;
    } else {
      elements.breakdownStatus.textContent = "内訳の合計と希望額が一致しています。";
    }

    const validMain = desired.kind === "valid" && current.kind === "valid";
    if (desired.kind === "valid") {
      elements.desiredMonthly.textContent = formatYen(desired.value);
      elements.desiredAnnual.textContent = `年額 ${formatYen(desired.value * 12)}`;
    } else {
      elements.desiredMonthly.textContent = "未設定";
      elements.desiredAnnual.textContent = "年額 未設定";
    }
    if (current.kind === "valid") {
      elements.currentMonthly.textContent = formatYen(current.value);
      elements.currentAnnual.textContent = `年額 ${formatYen(current.value * 12)}`;
    } else {
      elements.currentMonthly.textContent = "未設定";
      elements.currentAnnual.textContent = "年額 未設定";
    }

    let calculation = null;
    if (validMain) {
      calculation = calculate(desired.value, current.value);
      if (calculation.difference > 0) {
        elements.resultLead.textContent = `希望額まで毎月あと${formatYen(calculation.shortage)}です。`;
        elements.differenceLabel.textContent = "不足額";
        elements.monthlyDifference.textContent = formatYen(calculation.shortage);
        elements.annualDifference.textContent = `年額 ${formatYen(calculation.shortage * 12)}`;
      } else if (calculation.difference < 0) {
        elements.resultLead.textContent = `希望額を確保しても毎月${formatYen(calculation.surplus)}の余裕があります。`;
        elements.differenceLabel.textContent = "余裕額";
        elements.monthlyDifference.textContent = formatYen(calculation.surplus);
        elements.annualDifference.textContent = `年額 ${formatYen(calculation.surplus * 12)}`;
      } else {
        elements.resultLead.textContent = "希望する自由費と現在の自由費が一致しています。";
        elements.differenceLabel.textContent = "月額の差";
        elements.monthlyDifference.textContent = "0円";
        elements.annualDifference.textContent = "年額 0円";
      }
    } else {
      elements.resultLead.textContent = "希望額と現在額を入力すると、ここに差額を表示します。";
      elements.differenceLabel.textContent = "月額の差";
      elements.monthlyDifference.textContent = "未計算";
      elements.annualDifference.textContent = "年額 未計算";
    }

    renderActionLinks(state.action);
    const ready = validMain && Boolean(state.action) && !invalidBreakdown;
    elements.complete.disabled = !ready;
    elements.summary.replaceChildren();
    const summaryText = document.createElement("p");
    if (ready && calculation) {
      const differenceText = calculation.difference > 0
        ? `毎月あと${formatYen(calculation.shortage)}を検討`
        : calculation.difference < 0
          ? `毎月${formatYen(calculation.surplus)}の余裕`
          : "月額差は0円";
      summaryText.textContent = `希望する自由費は月${formatYen(desired.value)}、現在は月${formatYen(current.value)}。${differenceText}し、次の行動は「${actionLabels[state.action]}」です。`;
    } else {
      summaryText.textContent = "希望額、現在額、次の行動がそろうと計画の要約を表示します。";
    }
    elements.summary.append(summaryText);

    const currentSignature = ready
      ? signatureFor(desired.value, current.value, Object.fromEntries(breakdownKeys.map((key) => [key, parsedBreakdown[key].kind === "valid" ? parsedBreakdown[key].value : null])), state.action)
      : "";
    const completed = ready && state.completedSignature === currentSignature;
    let stage = "00";
    if (state.started) stage = "planted";
    if (desired.kind === "valid") stage = "01";
    if (validMain) stage = "02";
    if (ready) stage = "03";
    if (completed) stage = "04";
    root.dataset.gardenStage = stage;
    elements.stageLabel.textContent = stageCopy[stage][0];
    elements.progress.textContent = stageCopy[stage][1];
    elements.start.textContent = state.started ? "計画を入力中" : "計画を始める";
    elements.start.disabled = state.started;
    elements.complete.textContent = completed ? "計画が完成しました" : "この内容で計画を完成する";
    elements.complete.disabled = !ready || completed;

    return { desired, current, parsedBreakdown, ready, currentSignature };
  }

  function update({ invalidateCompletion = true, saveState = true } = {}) {
    readStateFromForm();
    state.started = true;
    if (invalidateCompletion) state.completedSignature = "";
    const view = render();
    if (saveState) save();
    return view;
  }

  elements.start.addEventListener("click", () => {
    state.started = true;
    render();
    save();
    elements.desired.focus();
  });

  [elements.desired, elements.current, ...elements.breakdownInputs].forEach((input) => {
    input.addEventListener("input", () => update());
    input.addEventListener("blur", () => {
      const parsed = parseAmount(input.value);
      if (parsed.kind === "valid") input.value = parsed.value.toLocaleString("ja-JP");
      update();
    });
  });

  document.querySelectorAll("[data-garden-preset]").forEach((button) => {
    button.addEventListener("click", () => {
      state.started = true;
      elements.desired.value = Number(button.dataset.gardenPreset).toLocaleString("ja-JP");
      update();
    });
  });

  elements.actions.forEach((input) => input.addEventListener("change", () => update()));

  elements.complete.addEventListener("click", () => {
    readStateFromForm();
    const view = render();
    if (!view.ready) return;
    state.completedSignature = view.currentSignature;
    render();
    save();
  });

  elements.clear.addEventListener("click", () => {
    if (!window.confirm("Money Gardenの保存内容と入力を削除しますか？")) return;
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (_error) {
      storageAvailable = false;
    }
    state = emptyState();
    applyStateToForm();
    render();
    elements.saveStatus.textContent = storageAvailable
      ? "Money Gardenの保存内容を削除しました。"
      : "保存領域を利用できません。画面上の入力は削除しました。";
  });

  restore();
  applyStateToForm();
  render();

  window.MoneyGardenDiagnostics = Object.freeze({ parseAmount, calculate, MAX_MONTHLY, STORAGE_KEY });
})();
