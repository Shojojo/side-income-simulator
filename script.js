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

const seoDescription = "31歳の会社員が長時間労働の合間に、副業、AI活用、固定費改善、新NISA、FIREを検証する実体験型の資産形成メディアです。長時間労働や急な対応がある中でも、次の一手を選びやすい導線を用意しています。 49種類のシミュレーターで収入、支出、投資、税金を確認できます。";
const descriptionMeta = document.querySelector('meta[name="description"]') || document.createElement("meta");
descriptionMeta.setAttribute("name", "description");
descriptionMeta.setAttribute("content", seoDescription);
document.head.appendChild(descriptionMeta);

const routeSeo = {
  top: {
    title: "会社員の副業・FIRE実体験メディア｜本業後に進める資産形成【2026年版】",
    description: "31歳の会社員が長時間労働の合間に、副業、AI活用、固定費改善、新NISA、FIREを検証する実体験型の資産形成メディアです。長時間労働や急な対応がある中でも、次の一手を選びやすい導線を用意しています。",
  },
  "side-income": {
    title: "副業月収シミュレーター｜会社員の本業後副業を実体験で試算【2026年版】",
    description: "本業後の限られた時間で副業収入を伸ばしたい会社員向けに、月収、手取り、作業時間を実体験目線で確認できます。長時間労働や急な欠勤対応があっても、無理なく続ける副業設計と手取り確認に役立ちます。",
  },
  "ai-hourly": {
    title: "AI副業時給シミュレーター｜会社員のAI活用と時給改善【2026年版】",
    description: "長時間労働後でも副業を続けるために、AI活用で作業時間をどれだけ短縮できるか、時給と月収を現実的に試算します。本業後1時間でも作業を止めないために、AIで短縮できる部分と自分で判断すべき部分を分けて考えます。",
  },
  "ai-efficiency": {
    title: "AI副業効率化シミュレーター｜本業後の時短と利益改善【2026年版】",
    description: "本業後1時間でも副業を進めたい会社員向けに、AI導入による削減時間、利益率改善、年間追加利益を検証できます。本業後1時間でも作業を止めないために、AIで短縮できる部分と自分で判断すべき部分を分けて考えます。",
  },
  "ai-roi": {
    title: "AI導入ROIシミュレーター｜副業AI活用の投資対効果を確認【2026年版】",
    description: "AIツール費用が副業利益に見合うかを、削減時間、外注費削減、売上増加率から会社員目線で分析できます。本業後1時間でも作業を止めないために、AIで短縮できる部分と自分で判断すべき部分を分けて考えます。",
  },
  "ai-automation": {
    title: "AI副業自動化シミュレーター｜会社員の時短・利益改善・継続性を分析【2026年版】",
    description: "現在の副業作業時間、売上、自動化可能割合、AI費用、外注費から、削減時間、利益改善、ROI、副業継続性を診断します。本業後の限られた時間でも止まらない副業設計に役立ちます。",
  },
  "ai-time-reduction": {
    title: "AI作業時間削減診断｜会社員の副業時間を短縮し利益改善【2026年版】",
    description: "現在の作業時間、副業ジャンル、AI利用頻度、外注有無、時給、作業内容、目標月収から、AIで削減できる時間と効率化度、利益改善を診断します。本業後の限られた時間を守る判断に役立ちます。",
  },
  "ai-outsourcing": {
    title: "AI外注費削減シミュレーター｜副業の外注費と利益率を改善【2026年版】",
    description: "副業で増えがちな外注費をAI活用でどこまで抑えられるか、利益率、ROI、回収期間を実務目線で確認できます。本業後1時間でも作業を止めないために、AIで短縮できる部分と自分で判断すべき部分を分けて考えます。",
  },
  "ai-profit-max": {
    title: "AI副業利益最大化シミュレーター｜会社員の収益改善とROI分析【2026年版】",
    description: "本業後の限られた作業時間を前提に、AI導入後の利益額、時給改善、年間追加利益、目標月収までの距離を分析します。本業後1時間でも作業を止めないために、AIで短縮できる部分と自分で判断すべき部分を分けて考えます。",
  },
  "hourly-improvement": {
    title: "副業時給改善シミュレーター｜会社員の作業時間と利益率を見直す【2026年版】",
    description: "副業売上だけでなく作業時間、経費、AI活用を入れて実質時給を確認し、忙しい会社員でも続けやすい改善策を探せます。本業後の限られた時間でも、資産形成の判断を進めやすいように整理しています。",
  },
  "side-time-management": {
    title: "副業時間管理シミュレーター｜本業後1時間の継続可能性を分析【2026年版】",
    description: "勤務時間、通勤、睡眠、家事を差し引き、本業後に副業を続けられる時間とAI時短の効果を現実的に確認できます。長時間労働や急な欠勤対応があっても、無理なく続ける副業設計と手取り確認に役立ちます。",
  },
  "side-fatigue": {
    title: "副業疲労度シミュレーター｜会社員のburnoutリスク診断【2026年版】",
    description: "長時間労働や急な対応がある会社員向けに、副業時間、睡眠、休日、AI活用から疲労度と継続リスクを診断します。長時間労働や急な欠勤対応があっても、無理なく続ける副業設計と手取り確認に役立ちます。",
  },
  "side-continuity": {
    title: "副業継続率診断｜会社員が本業後に続けられる可能性を確認【2026年版】",
    description: "副業時間、本業勤務、睡眠、副業月収、疲労度、目標月収、AI活用から継続率を診断します。本業後の疲れや長時間労働も考慮し、無理なく続く副業設計に役立ちます。",
  },
  "side-motivation": {
    title: "副業モチベーション診断｜会社員が本業後に続ける力を確認【2026年版】",
    description: "副業目標月収、現在収益、本業勤務時間、副業時間、睡眠、疲労度、AI活用、趣味時間からモチベーション維持可能性を診断します。本業後の疲れがあっても続く副業設計に役立ちます。",
  },
  "side-risk": {
    title: "副業リスク診断｜会社員の税務・疲労・収益依存を確認【2026年版】",
    description: "副業収入が伸びる前に、税務、burnout、収益依存のリスクを確認し、本業と両立しやすい改善ポイントを整理します。長時間労働や急な欠勤対応があっても、無理なく続ける副業設計と手取り確認に役立ちます。",
  },
  "side-safety": {
    title: "会社員副業安全度診断｜会社バレ・税務・疲労リスクを確認【2026年版】",
    description: "副業ジャンル、月収、本業勤務時間、普通徴収、確定申告、会社規定、AI活用、匿名性から、会社員が安全に副業を続けられるか診断します。副業を伸ばす前にリスクを整理できます。",
  },
  "side-profit-margin": {
    title: "副業利益率シミュレーター｜売上より手残りを重視する会社員向け【2026年版】",
    description: "副業売上、経費、広告費、外注費、AI活用から利益率と時給を分析し、本業後でも続く収益設計を考えられます。長時間労働や急な欠勤対応があっても、無理なく続ける副業設計と手取り確認に役立ちます。",
  },
  incorporation: {
    title: "副業法人化判断シミュレーター｜個人事業と法人化を手取り比較【2026年版】",
    description: "副業利益が増えた会社員向けに、個人事業と法人化の手取り、維持費、社会保険負担を実務目線で比較できます。長時間労働や急な欠勤対応があっても、無理なく続ける副業設計と手取り確認に役立ちます。",
  },
  "take-home": {
    title: "副業手取り計算シミュレーター｜会社員の税引後収入を確認【2026年版】",
    description: "副業売上から経費、所得税、住民税、社会保険を引いた手取りを試算し、本業後の副業収入を現実的に把握できます。長時間労働や急な欠勤対応があっても、無理なく続ける副業設計と手取り確認に役立ちます。",
  },
  tax: {
    title: "副業税金・青色申告シミュレーター｜会社員の税金対策入門【2026年版】",
    description: "副業収入、経費、青色申告控除から課税所得と手取りを試算し、会社員が確定申告前に税負担を確認できます。長時間労働や急な欠勤対応があっても、無理なく続ける副業設計と手取り確認に役立ちます。",
  },
  "employee-tax-saving": {
    title: "会社員節税シミュレーター｜iDeCo・副業・控除をまとめて確認【2026年版】",
    description: "会社員が使えるiDeCo、ふるさと納税、保険控除、副業所得の影響をまとめ、FIRE実践にもつながる節税額を試算します。長時間労働や急な欠勤対応があっても、無理なく続ける副業設計と手取り確認に役立ちます。",
  },
  "resident-tax": {
    title: "副業住民税シミュレーター｜普通徴収と会社員の注意点【2026年版】",
    description: "副業所得から住民税の概算を出し、普通徴収の注意点や会社員が本業に影響を出しにくくする考え方を確認できます。長時間労働や急な欠勤対応があっても、無理なく続ける副業設計と手取り確認に役立ちます。",
  },
  "income-tax": {
    title: "副業所得税シミュレーター｜会社員の確定申告前チェック【2026年版】",
    description: "副業売上、経費、控除、復興特別所得税から所得税を概算し、住民税や手取りへの影響も自然に確認できます。長時間労働や急な欠勤対応があっても、無理なく続ける副業設計と手取り確認に役立ちます。",
  },
  "investment-risk": {
    title: "投資リスク許容度診断｜会社員の資産配分と投資スタイルを確認【2026年版】",
    description: "年齢、年収、総資産、投資経験、投資額、投資目的、暴落時の行動、副業収入、FIRE希望から、会社員に合う投資リスク許容度と資産配分を診断します。",
  },
  nisa: {
    title: "新NISA・積立投資シミュレーター｜会社員の長期資産形成【2026年版】",
    description: "本業後の副業や固定費改善で作った余力を新NISAへ回す前提で、将来資産と複利効果を確認できます。副業収入、固定費改善、長期投資を組み合わせて、FIRE実践にどうつなげるかを考えられます。",
  },
  "nisa-fast": {
    title: "新NISA最速積立シミュレーター｜FIREを目指す会社員の成長速度【2026年版】",
    description: "毎月積立とボーナス投資を使い、会社員がFIRE実践に向けて新NISAで資産形成する速度を試算できます。副業収入、固定費改善、長期投資を組み合わせて、FIRE実践にどうつなげるかを考えられます。",
  },
  "nisa-withdrawal": {
    title: "NISA取り崩しシミュレーター｜老後資金とFIRE後の使い方【2026年版】",
    description: "新NISA資産を何年取り崩せるか、毎月いくら使えるかを確認し、老後資金やFIRE後の生活設計に役立てられます。副業収入、固定費改善、長期投資を組み合わせて、FIRE実践にどうつなげるかを考えられます。",
  },
  "credit-card-investment": {
    title: "クレカ積立比較シミュレーター｜新NISAとポイント再投資を比較【2026年版】",
    description: "クレカ積立のポイント還元と通常積立の差を試算し、会社員の新NISA活用と長期投資の効率を確認できます。本業後の限られた時間でも、資産形成の判断を進めやすいように整理しています。",
  },
  ideco: {
    title: "iDeCo節税シミュレーター｜会社員の控除と将来資産を試算【2026年版】",
    description: "会社員のiDeCo掛金による所得税・住民税の節税額と将来資産を確認し、FIRE実践との相性も考えられます。副業収入、固定費改善、長期投資を組み合わせて、FIRE実践にどうつなげるかを考えられます。",
  },
  fire: {
    title: "FIRE達成シミュレーター｜会社員が40歳FIREを目指す資産計算【2026年版】",
    description: "現在資産、積立額、年利、目標資産からFIREまでの距離を出し、副業と固定費改善を組み合わせた実践計画を確認できます。副業収入、固定費改善、長期投資を組み合わせて、FIRE実践にどうつなげるかを考えられます。",
  },
  "fire-rate": {
    title: "FIRE達成率シミュレーター｜会社員の資産形成スコア診断【2026年版】",
    description: "現在資産、副業収入、生活費、配当収入からFIRE達成可能性をスコア化し、改善すべき行動を見つけられます。副業収入、固定費改善、長期投資を組み合わせて、FIRE実践にどうつなげるかを考えられます。",
  },
  "fire-cost-optimization": {
    title: "FIRE生活費最適化シミュレーター｜固定費改善で達成時期を短縮【2026年版】",
    description: "現在年齢、目標FIRE年齢、現在資産、生活費、削減可能額、投資額、副業収入、配当収入から、生活費改善でFIRE達成がどれだけ早まるか確認できます。",
  },
  "fire-stress": {
    title: "FIREストレス診断｜会社員のFIRE後不安と働き方リスクを確認【2026年版】",
    description: "現在資産、生活費、副業収入、配当収入、仕事ストレス度、孤独耐性からFIRE後のストレスリスクを診断します。完全退職だけでなくサイドFIREも含めて、無理のない自由度を考えられます。",
  },
  "employee-fire": {
    title: "会社員FIRE年数計算シミュレーター｜副業と投資で達成年齢を確認【2026年版】",
    description: "会社員が副業収入、積立額、配当収入を組み合わせた場合、FIREまで何年かかるかを実体験目線で試算します。副業収入、固定費改善、長期投資を組み合わせて、FIRE実践にどうつなげるかを考えられます。",
  },
  "cash-flow": {
    title: "会社員キャッシュフローシミュレーター｜家計と投資余力を見える化【2026年版】",
    description: "給与、副業、固定費、投資額をまとめて入力し、本業だけに依存しない資産形成ペースと改善余地を確認できます。忙しい会社員でも一度見直すと効果が続く項目を中心に、投資余力づくりへつなげます。",
  },
  "life-cost": {
    title: "生活コスト最適化シミュレーター｜固定費改善とFIRE短縮を分析【2026年版】",
    description: "家賃、通信費、食費、投資額、副業収入から生活コストを見直し、FIRE達成への影響を会社員目線で確認できます。忙しい会社員でも一度見直すと効果が続く項目を中心に、投資余力づくりへつなげます。",
  },
  dividend: {
    title: "配当金シミュレーター｜会社員の高配当投資と月平均配当【2026年版】",
    description: "投資額と利回りから年間配当金、月平均配当、累計配当を試算し、FIRE実践に使える配当収入を確認できます。副業収入、固定費改善、長期投資を組み合わせて、FIRE実践にどうつなげるかを考えられます。",
  },
  "dividend-etf": {
    title: "配当ETF比較シミュレーター｜新NISAで高配当ETFを比較【2026年版】",
    description: "高配当ETFの配当収入、資産成長、再投資効果を比較し、会社員の長期投資とFIRE計画に役立てられます。副業収入、固定費改善、長期投資を組み合わせて、FIRE実践にどうつなげるかを考えられます。",
  },
  "dividend-stock": {
    title: "高配当株比較シミュレーター｜配当収入とETF比較を確認【2026年版】",
    description: "複数の高配当株を比較し、配当収入、資産成長、新NISA利用、FIRE達成への影響を整理できます。副業収入、固定費改善、長期投資を組み合わせて、FIRE実践にどうつなげるかを考えられます。",
  },
  "dividend-mental": {
    title: "配当メンタル安定度診断｜高配当投資を続ける精神安定度を確認【2026年版】",
    description: "現在資産、高配当株比率、生活費、配当収入、投資経験、暴落耐性、現金比率から配当投資を続ける精神安定度を診断します。FIRE前後の配当依存リスクも確認できます。",
  },
  "dividend-reinvestment": {
    title: "配当再投資シミュレーター｜会社員の複利とFIRE効果を確認【2026年版】",
    description: "配当を再投資した場合の最終資産、累計配当、複利効果を試算し、FIRE実践に向けた投資設計を確認できます。副業収入、固定費改善、長期投資を組み合わせて、FIRE実践にどうつなげるかを考えられます。",
  },
  "dividend-life": {
    title: "配当生活達成シミュレーター｜生活費を配当でまかなう必要資産【2026年版】",
    description: "毎月生活費と配当利回りから必要資産額を出し、会社員が配当生活やFIREを目指す現実的な距離を確認できます。副業収入、固定費改善、長期投資を組み合わせて、FIRE実践にどうつなげるかを考えられます。",
  },
  "dividend-life-years": {
    title: "配当生活年数シミュレーター｜配当収入で何年暮らせるか確認【2026年版】",
    description: "現在資産、生活費、配当利回り、インフレ率から、配当生活の継続年数と新NISA活用時の改善効果を分析します。副業収入、固定費改善、長期投資を組み合わせて、FIRE実践にどうつなげるかを考えられます。",
  },
  "side-fire": {
    title: "サイドFIREシミュレーター｜副業収入と配当で必要資産を下げる【2026年版】",
    description: "生活費、副業月収、配当収入を入力し、会社員がサイドFIREを目指す場合の必要資産と短縮効果を確認できます。長時間労働や急な欠勤対応があっても、無理なく続ける副業設計と手取り確認に役立ちます。",
  },
  "emergency-fund": {
    title: "生活防衛資金シミュレーター｜会社員がFIRE前に備える安全資金【2026年版】",
    description: "毎月生活費、家族人数、雇用形態、副業収入から生活防衛資金を試算し、FIRE前の土台づくりを確認できます。忙しい会社員でも一度見直すと効果が続く項目を中心に、投資余力づくりへつなげます。",
  },
  "fixed-cost-reduction": {
    title: "固定費削減シミュレーター｜会社員の年間節約額と投資効果【2026年版】",
    description: "通信費、保険、サブスクなどを見直し、長時間労働でも続けやすい固定費改善と投資へ回した効果を試算します。忙しい会社員でも一度見直すと効果が続く項目を中心に、投資余力づくりへつなげます。",
  },
  retirement: {
    title: "老後資金シミュレーター｜会社員の不足額と追加積立を確認【2026年版】",
    description: "現在年齢、貯蓄、年金見込み、退職後生活費から老後資金の不足額を出し、NISAやFIRE実践との関係も確認できます。教育費、住宅ローン、老後資金を分けずに見て、家計と資産形成のバランスを確認できます。",
  },
  education: {
    title: "教育費シミュレーター｜会社員家庭の進学費用と不足額を試算【2026年版】",
    description: "子どもの人数、進学ルート、大学進学、積立額から教育費を試算し、老後資金への影響もあわせて確認できます。教育費、住宅ローン、老後資金を分けずに見て、家計と資産形成のバランスを確認できます。",
  },
  "education-insurance": {
    title: "学資保険比較シミュレーター｜教育費と積立投資を比べる【2026年版】",
    description: "学資保険の返戻率と通常積立投資を比較し、教育費準備と老後資金のバランスを会社員目線で確認できます。教育費、住宅ローン、老後資金を分けずに見て、家計と資産形成のバランスを確認できます。",
  },
  mortgage: {
    title: "住宅ローン返済シミュレーター｜会社員の返済比率と老後資金への影響【2026年版】",
    description: "借入額、頭金、金利、返済年数から毎月返済額と利息を出し、教育費や老後資金への影響も確認できます。教育費、住宅ローン、老後資金を分けずに見て、家計と資産形成のバランスを確認できます。",
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
    gap: 16px;
    padding: 18px;
    border: 1px solid rgba(18, 115, 93, 0.2);
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0 14px 34px rgba(24, 33, 47, 0.08);
  }

  .search-control {
    position: relative;
    display: grid;
    gap: 8px;
  }

  .search-control::before {
    content: "検索";
    position: absolute;
    top: 16px;
    left: 14px;
    z-index: 1;
    pointer-events: none;
    color: var(--green);
    font-size: 0.8rem;
    font-weight: 900;
    letter-spacing: 0;
  }

  .search-control input {
    width: 100%;
    min-height: 54px;
    border: 1px solid rgba(18, 115, 93, 0.28);
    border-radius: 8px;
    padding: 0 14px 0 54px;
    font-size: 1rem;
    font-weight: 700;
    color: var(--ink);
    background: #fff;
    box-shadow: 0 8px 22px rgba(24, 33, 47, 0.06);
    transition: border-color 0.18s ease, box-shadow 0.18s ease;
  }

  .search-control input::placeholder {
    color: #7a8796;
    font-weight: 600;
  }

  .search-control input:focus {
    border-color: rgba(18, 115, 93, 0.62);
    box-shadow: 0 0 0 4px rgba(18, 115, 93, 0.12), 0 10px 24px rgba(24, 33, 47, 0.08);
    outline: none;
  }

  .search-actions,
  .quick-start-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 10px;
  }

  .search-actions a,
  .quick-start-grid a {
    min-height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(217, 222, 231, 0.95);
    border-radius: 8px;
    padding: 9px 12px;
    color: var(--ink);
    text-align: center;
    text-decoration: none;
    font-weight: 800;
    background: #ffffff;
    box-shadow: 0 1px 0 rgba(24, 33, 47, 0.04);
    transition: border-color 0.18s ease, background 0.18s ease, transform 0.18s ease;
  }

  .search-actions a:hover,
  .quick-start-grid a:hover,
  .search-actions a:focus-visible,
  .quick-start-grid a:focus-visible {
    border-color: rgba(18, 115, 93, 0.42);
    background: rgba(240, 248, 244, 0.92);
    transform: translateY(-1px);
  }

  .tool-card.is-hidden-by-search,
  .category-section.is-hidden-by-search {
    display: none;
  }

  .search-status {
    width: fit-content;
    display: inline-flex;
    align-items: center;
    border-radius: 8px;
    padding: 6px 10px;
    color: #2f6d56;
    background: #edf7f2;
    font-size: 0.86rem;
    font-weight: 800;
    line-height: 1.4;
  }

  @media (max-width: 520px) {
    .top-search-panel {
      gap: 14px;
      padding: 14px;
    }

    .search-control input {
      min-height: 52px;
      font-size: 0.95rem;
    }

    .search-actions {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
    }

    .search-actions a {
      min-height: 40px;
      padding: 8px 10px;
      font-size: 0.86rem;
    }
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
        <p class="article-meta">最終更新日：2026年6月16日</p>
        <p class="lead">&#x526f;&#x696d;&#x53ce;&#x5165;&#x3001;AI&#x6d3b;&#x7528;&#x3001;&#x7a0e;&#x91d1;&#x3001;FIRE&#x9054;&#x6210;&#x3001;&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x307e;&#x3067;&#x306e;&#x9053;&#x306e;&#x308a;&#x3092;&#x3001;&#x540c;&#x3058;&#x5165;&#x529b;&#x611f;&#x3067;&#x7d20;&#x65e9;&#x304f;&#x8a66;&#x305b;&#x308b;&#x8a08;&#x7b97;&#x30c4;&#x30fc;&#x30eb;&#x3067;&#x3059;&#x3002;</p>
        <nav class="tool-nav" aria-label="&#x30c4;&#x30fc;&#x30eb;&#x5207;&#x308a;&#x66ff;&#x3048;">
          <a href="#top" data-route="top">&#x30c8;&#x30c3;&#x30d7;</a>
          <a href="#side-income" data-route="side-income">&#x526f;&#x696d;&#x6708;&#x53ce;</a>
          <a href="#ai-hourly" data-route="ai-hourly">AI&#x526f;&#x696d;&#x6642;&#x7d66;</a>
          <a href="#ai-efficiency" data-route="ai-efficiency">AI副業効率化</a>
          <a href="#ai-roi" data-route="ai-roi">AI導入ROI</a>
          <a href="#ai-automation" data-route="ai-automation">AI副業自動化</a>
          <a href="#ai-time-reduction" data-route="ai-time-reduction">AI作業時間削減</a>
          <a href="#ai-outsourcing" data-route="ai-outsourcing">AI外注費削減</a>
          <a href="#ai-profit-max" data-route="ai-profit-max">AI利益最大化</a>
          <a href="#hourly-improvement" data-route="hourly-improvement">副業時給改善</a>
          <a href="#side-time-management" data-route="side-time-management">副業時間管理</a>
          <a href="#side-fatigue" data-route="side-fatigue">副業疲労度</a>
          <a href="#side-continuity" data-route="side-continuity">副業継続率診断</a>
          <a href="#side-motivation" data-route="side-motivation">副業モチベーション</a>
          <a href="#side-risk" data-route="side-risk">副業リスク診断</a>
          <a href="#side-safety" data-route="side-safety">副業安全度</a>
          <a href="#side-profit-margin" data-route="side-profit-margin">&#x526f;&#x696d;&#x5229;&#x76ca;&#x7387;</a>
          <a href="#incorporation" data-route="incorporation">副業法人化判断</a>
          <a href="#take-home" data-route="take-home">&#x526f;&#x696d;&#x624b;&#x53d6;&#x308a;</a>
          <a href="#tax" data-route="tax">&#x7a0e;&#x91d1;&#x30fb;&#x9752;&#x8272;&#x7533;&#x544a;</a>
          <a href="#employee-tax-saving" data-route="employee-tax-saving">会社員節税</a>
          <a href="#income-tax" data-route="income-tax">&#x526f;&#x696d;&#x6240;&#x5f97;&#x7a0e;</a>
          <a href="#resident-tax" data-route="resident-tax">&#x526f;&#x696d;&#x4f4f;&#x6c11;&#x7a0e;</a>
          <a href="#investment-risk" data-route="investment-risk">投資リスク診断</a>
          <a href="#nisa" data-route="nisa">&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;</a>
          <a href="#nisa-fast" data-route="nisa-fast">新NISA最速積立</a>
          <a href="#nisa-withdrawal" data-route="nisa-withdrawal">NISA取り崩し</a>
          <a href="#credit-card-investment" data-route="credit-card-investment">&#x30af;&#x30ec;&#x30ab;&#x7a4d;&#x7acb;</a>
          <a href="#ideco" data-route="ideco">iDeCo&#x7bc0;&#x7a0e;</a>
          <a href="#dividend" data-route="dividend">&#x914d;&#x5f53;&#x91d1;</a>
          <a href="#dividend-etf" data-route="dividend-etf">配当ETF比較</a>
          <a href="#dividend-stock" data-route="dividend-stock">高配当株比較</a>
          <a href="#dividend-mental" data-route="dividend-mental">配当メンタル</a>
          <a href="#dividend-reinvestment" data-route="dividend-reinvestment">&#x914d;&#x5f53;&#x518d;&#x6295;&#x8cc7;</a>
          <a href="#dividend-life" data-route="dividend-life">配当生活達成</a>
          <a href="#dividend-life-years" data-route="dividend-life-years">配当生活年数</a>
          <a href="#fire" data-route="fire">FIRE&#x9054;&#x6210;</a>
          <a href="#fire-rate" data-route="fire-rate">FIRE達成率</a>
          <a href="#fire-cost-optimization" data-route="fire-cost-optimization">FIRE生活費最適化</a>
          <a href="#fire-stress" data-route="fire-stress">FIREストレス診断</a>
          <a href="#employee-fire" data-route="employee-fire">&#x4f1a;&#x793e;&#x54e1;FIRE</a>
          <a href="#cash-flow" data-route="cash-flow">会社員キャッシュフロー</a>
          <a href="#life-cost" data-route="life-cost">生活コスト最適化</a>
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
        <section class="article-panel media-intro-panel" aria-label="サイト導入">
          <p class="eyebrow">Real Experience</p>
          <section class="tool-heading">
            <h2>働きながら副業・FIREを目指す会社員の資産形成メディア</h2>
            <p>このサイトは、単にシミュレーターを並べた一覧ではありません。運送業の管理職として働きながら、副業収入、AI活用、固定費改善、新NISA、長期投資、FIRE戦略を実際に試し、その数字を整理するために作っています。</p>
          </section>
          <div class="experience-block">
            <h3>サイト導入</h3>
            <p>運営者は31歳の会社員です。運送業の管理職として、約30名規模の現場管理、人員調整、当日欠勤対応、夜間対応などを経験してきました。予定通りに終わらない日や、急な欠勤で段取りを組み直す日も多く、本業だけに収入を依存する働き方に少しずつ不安を感じるようになりました。</p>
            <p>だからこそ、平日に何時間も副業する前提ではなく、本業後の1時間でも積み上がる方法を重視しています。副業、AI、固定費削減、NISA、FIREをバラバラに考えるのではなく、毎月の収支と時間の使い方に落とし込めるように、各シミュレーターと記事をつなげています。</p>
          </div>
        </section>

        <section class="article-panel" aria-label="実録記事">
          <section class="tool-heading">
            <h2>まず読んでほしい実録記事</h2>
            <p>このサイトを「ツール一覧」ではなく、働きながら資産形成を進める記録として読むなら、まずこの3本から確認してください。</p>
          </section>
          <div class="next-read-grid">
            <a class="next-read-card" href="article-after-work-sidejob-1hour.html">
              <strong>本業後1時間副業を続けるためにやめたこと</strong>
              <span>運送業管理職として働きながら、毎日3時間ではなく短時間で積み上げる設計に変えた話です。</span>
              <span class="next-read-reason">関連理由：副業を始める前に、まず現実的な時間設計を確認できます。</span>
            </a>
            <a class="next-read-card" href="article-fire-31-company-worker.html">
              <strong>31歳会社員が40歳FIREを目指す理由</strong>
              <span>会社員収入だけに依存する不安から、固定費改善・副業・NISA・長期投資を組み合わせる理由をまとめています。</span>
              <span class="next-read-reason">関連理由：このサイト全体のFIRE目標と資産形成の背景がわかります。</span>
            </a>
            <a class="next-read-card" href="article-ai-sidejob-manager-reality.html">
              <strong>管理職をしながらAI副業を続ける現実</strong>
              <span>本業後の疲労がある中で、ChatGPTなどのAIをどう使って副業時間を短縮しているかを整理しています。</span>
              <span class="next-read-reason">関連理由：AI副業を「楽に稼ぐ話」ではなく、継続するための道具として見られます。</span>
            </a>
            <a class="next-read-card" href="article-side-tax.html">
              <strong>副業税金の基礎知識</strong>
              <span>副業収入が出たあとに必要になる所得、経費、住民税、青色申告の入口を確認できます。</span>
              <span class="next-read-reason">関連理由：副業から税金へ進む悩み導線を押さえられます。</span>
            </a>
          </div>
        </section>

        <section class="article-panel media-story-panel" aria-label="なぜこのサイトを作ったか">
          <section class="tool-heading">
            <h2>なぜこのサイトを作ったか</h2>
            <p>長時間労働や急なトラブル対応を経験すると、収入源が本業だけという状態の怖さを現実として感じます。</p>
          </section>
          <div class="media-grid">
            <div class="experience-block">
              <h3>本業だけに依存しないため</h3>
              <p>管理職として働いていると、責任は増えても自由な時間は増えにくいと感じます。副業収入を少しずつ作り、固定費を整え、投資へ回す流れを作ることで、会社員収入だけに頼らない状態を目指しています。</p>
            </div>
            <div class="experience-block">
              <h3>40歳までにFIREを目指すため</h3>
              <p>FIREは夢物語ではなく、収入、支出、投資額、利回り、時間の使い方を数字に分けて考えるテーマです。40歳までにどこまで近づけるかを、自分の家計と働き方に合わせて検証しています。</p>
            </div>
            <div class="experience-block">
              <h3>忙しい会社員でも使える形にするため</h3>
              <p>仕事後に難しい表計算を作る余力がない日でも、数分でざっくり確認できることを大切にしています。まず概算で方向性をつかみ、必要なら公式情報や専門家確認へ進むための入口として使える構成にしています。</p>
            </div>
          </div>
        </section>

        <section class="article-panel" aria-label="このサイトでわかること">
          <section class="tool-heading">
            <h2>このサイトでわかること</h2>
            <p>副業や投資を始める前に、収入、支出、税金、将来資産をまとめて見える化できます。</p>
          </section>
          <div class="article-list">
            <a class="article-link" href="#side-income"><strong>副業収入</strong><span>時給、作業時間、案件数から月収と年収の目安を確認</span></a>
            <a class="article-link" href="#fire"><strong>FIRE</strong><span>必要資産、達成年数、生活費改善による短縮効果を確認</span></a>
            <a class="article-link" href="#nisa"><strong>NISA</strong><span>毎月積立、年利、運用年数から将来資産を確認</span></a>
            <a class="article-link" href="#life-cost"><strong>固定費改善</strong><span>家賃、通信費、保険料、食費などの改善余地を確認</span></a>
            <a class="article-link" href="#ai-efficiency"><strong>AI副業</strong><span>AI活用による時間削減、時給改善、利益率改善を確認</span></a>
            <a class="article-link" href="#retirement"><strong>老後資金</strong><span>退職時資産、年金見込み、老後生活費から不足額を確認</span></a>
          </div>
        </section>

        <section class="article-panel" aria-label="実際に検証している内容">
          <section class="tool-heading">
            <h2>実際に検証している内容</h2>
            <p>机上の一般論だけではなく、限られた平日時間の中で試している内容をもとに、数字で確認できる形にしています。</p>
          </section>
          <div class="media-grid proof-grid">
            <div class="experience-block">
              <h3>AIツール活用</h3>
              <p>記事構成、調査、下書き、作業整理にAIを使い、本業後の短い時間でどこまで時短できるかを検証しています。</p>
            </div>
            <div class="experience-block">
              <h3>本業後1時間副業</h3>
              <p>毎日長時間は難しいため、平日1時間でも進む作業設計、案件選び、AIでの下準備を重視しています。</p>
            </div>
            <div class="experience-block">
              <h3>固定費改善</h3>
              <p>副業時間を増やすだけでなく、通信費、保険、サブスク、生活コストを見直して投資余力を作る考え方を試しています。</p>
            </div>
            <div class="experience-block">
              <h3>長期投資</h3>
              <p>新NISAや配当、再投資を使い、短期の利益ではなく長く続く資産形成のペースを確認しています。</p>
            </div>
            <div class="experience-block">
              <h3>FIRE戦略</h3>
              <p>完全FIREだけでなく、会社員FIRE、サイドFIRE、配当生活、老後資金を組み合わせて現実的な選択肢を探しています。</p>
            </div>
          </div>
        </section>

        <section class="article-panel" aria-label="まず最初に使うべきシミュレーター">
          <section class="tool-heading">
            <h2>まず最初に使うべきシミュレーター</h2>
            <p>初めて来た人は、細かいツールを全部見るより、この順番で確認すると家計と資産形成の全体像をつかみやすいです。</p>
          </section>
          <div class="article-list">
            <a class="article-link" href="#side-income"><strong>1. 副業月収シミュレーター</strong><span>本業以外でどれくらい収入を作れるか、最初に確認します</span></a>
            <a class="article-link" href="#take-home"><strong>2. 副業手取り計算シミュレーター</strong><span>売上ではなく、税金後に残る金額を見ます</span></a>
            <a class="article-link" href="#life-cost"><strong>3. 生活コスト最適化シミュレーター</strong><span>副業で増やす前に、毎月の支出改善余地を確認します</span></a>
            <a class="article-link" href="#nisa"><strong>4. 新NISAシミュレーター</strong><span>余力を投資へ回した場合の将来資産を見ます</span></a>
            <a class="article-link" href="#fire"><strong>5. FIRE達成シミュレーター</strong><span>副業、固定費改善、投資をFIREまでの距離に変換します</span></a>
          </div>
        </section>

        <section class="top-search-panel" aria-label="ツール検索">
          <section class="tool-heading">
            <h2>目的からシミュレーターを探す</h2>
            <p>副業、税金、FIRE、NISA、老後資金など、気になる言葉で43個のシミュレーターを絞り込めます。</p>
          </section>
          <div class="search-control">
            <label class="visually-hidden" for="topToolSearch">ツール検索</label>
            <input id="topToolSearch" type="search" placeholder="例: 副業 税金 FIRE NISA 老後 AI 固定費" autocomplete="off">
            <p class="search-status" id="topToolSearchStatus">43個のツールから検索できます。</p>
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
            <p>目的が決まっている場合は、近いテーマから直接確認できます。</p>
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

        <section class="article-panel" aria-label="初心者向け記事">
          <section class="tool-heading">
            <h2>初心者向け</h2>
            <p>何から見ればいいか迷ったら、副業の時間設計、税金、固定費、投資の順で読むと全体像をつかみやすいです。</p>
          </section>
          <div class="next-read-grid">
            <a class="next-read-card" href="article-after-work-sidejob-1hour.html"><strong>本業後1時間副業を続けるためにやめたこと</strong><span>忙しい会社員が副業を始める前に、時間の使い方を整える記事です。</span><span class="next-read-reason">関連理由：最初に無理な副業計画を避けられます。</span></a>
            <a class="next-read-card" href="article-side-income-50000.html"><strong>副業で月5万円を稼ぐ方法</strong><span>月5万円を目標に、作業時間と単価を現実的に考えます。</span><span class="next-read-reason">関連理由：時間設計の次に収益目標を決められます。</span></a>
            <a class="next-read-card" href="article-side-tax.html"><strong>副業税金の基礎知識</strong><span>副業収入が出たあとに必要な税金の入口を整理します。</span><span class="next-read-reason">関連理由：副業収入を手取りで考える準備になります。</span></a>
            <a class="next-read-card" href="article-new-nisa-start.html"><strong>新NISAの始め方</strong><span>副業や固定費改善で作った余力を長期投資へ回す考え方です。</span><span class="next-read-reason">関連理由：税金の次に投資へつなげられます。</span></a>
          </div>
        </section>

        <section class="article-panel" aria-label="FIREを目指す人向け">
          <section class="tool-heading">
            <h2>FIREを目指す人向け</h2>
            <p>FIREは必要資産だけでなく、副業、固定費、NISA、老後資金をつなげて見る方が現実的です。</p>
          </section>
          <div class="next-read-grid">
            <a class="next-read-card" href="article-fire-31-company-worker.html"><strong>31歳会社員が40歳FIREを目指す理由</strong><span>会社員収入だけに依存しないためにFIREを考え始めた背景です。</span><span class="next-read-reason">関連理由：FIREを目指す動機と現実感を確認できます。</span></a>
            <a class="next-read-card" href="article-fire-basic.html"><strong>FIREとは何か</strong><span>FIREの意味、必要資産、生活費の基本を整理します。</span><span class="next-read-reason">関連理由：目標資産を考える土台になります。</span></a>
            <a class="next-read-card" href="article-new-nisa-start.html"><strong>新NISAの始め方</strong><span>FIREに向けた長期投資の入口としてNISAを確認します。</span><span class="next-read-reason">関連理由：副業・固定費改善で作った余力の受け皿になります。</span></a>
            <a class="next-read-card" href="article-retirement-2000.html"><strong>老後資金2000万円問題とは</strong><span>FIRE後も老後資金を無視せず、長期の生活費を考えます。</span><span class="next-read-reason">関連理由：FIREと老後資金のつながりを確認できます。</span></a>
          </div>
        </section>

        <section class="article-panel ranking-panel" aria-label="人気ツールランキング">
          <section class="tool-heading">
            <h2>人気ツールランキング</h2>
            <p>副業、AI、FIRE、生活費改善で使われやすい主要シミュレーターを上位にまとめました。</p>
          </section>
          <ol class="ranking-list">
            <li><a href="#side-income"><strong>副業月収シミュレーター</strong><span>時給、作業時間、案件数から副業収入の入口を確認</span></a></li>
            <li><a href="#ai-efficiency"><strong>AI副業効率化シミュレーター</strong><span>AI活用後の削減時間、時給、年間追加利益を確認</span></a></li>
            <li><a href="#fire"><strong>FIRE達成シミュレーター</strong><span>目標資産までの年数と毎月積立の距離感を確認</span></a></li>
            <li><a href="#life-cost"><strong>生活コスト最適化シミュレーター</strong><span>固定費・変動費の改善余地と投資効果を確認</span></a></li>
            <li><a href="#nisa"><strong>新NISAシミュレーター</strong><span>毎月積立と年利から将来資産を試算</span></a></li>
          </ol>
        </section>

        <section class="article-panel ranking-panel" aria-label="人気記事ランキング">
          <section class="tool-heading">
            <h2>人気記事ランキング</h2>
            <p>副業を始める人、税金が気になる人、FIREやNISAを考える人が最初に読みやすい記事です。</p>
          </section>
          <ol class="ranking-list">
            <li><a href="article-after-work-sidejob-1hour.html"><strong>本業後1時間副業を続けるためにやめたこと</strong><span>運送業管理職として働きながら副業時間を作る実体験</span></a></li>
            <li><a href="article-fire-31-company-worker.html"><strong>31歳会社員が40歳FIREを目指す理由</strong><span>会社員収入だけに依存しないための資産形成</span></a></li>
            <li><a href="article-ai-sidejob-manager-reality.html"><strong>管理職をしながらAI副業を続ける現実</strong><span>本業後の疲労とAI活用のリアル</span></a></li>
            <li><a href="article-side-income-50000.html"><strong>副業で月5万円を稼ぐ方法</strong><span>本業後の限られた時間で収入を作る考え方</span></a></li>
            <li><a href="article-ai-tools-comparison.html"><strong>副業向けおすすめAIツール比較</strong><span>ChatGPT、Claude、Geminiなどを副業用途で比較</span></a></li>
          </ol>
        </section>

        <section class="article-panel" aria-label="FIRE人気カテゴリ">
          <section class="tool-heading">
            <h2>FIRE人気カテゴリ</h2>
            <p>FIREを目指す人は、必要資産だけでなく生活費、積立、配当、取り崩しをセットで確認すると現実的です。</p>
          </section>
          <div class="article-list">
            <a class="article-link" href="category-fire.html">
              <strong>FIREカテゴリを見る</strong>
              <span>FIRE、会社員FIRE、サイドFIRE、配当生活をまとめて確認</span>
            </a>
            <a class="article-link" href="#fire">
              <strong>FIRE達成シミュレーター</strong>
              <span>目標資産までの年数と不足額を確認</span>
            </a>
            <a class="article-link" href="#fire-rate">
              <strong>FIRE達成率シミュレーター</strong>
              <span>現在資産、収支、投資状況から達成可能性をスコア化</span>
            </a>
            <a class="article-link" href="#employee-fire">
              <strong>会社員FIRE年数計算シミュレーター</strong>
              <span>給与、副業、配当を含めたFIRE年数を確認</span>
            </a>
            <a class="article-link" href="#life-cost">
              <strong>生活コスト最適化シミュレーター</strong>
              <span>生活費改善がFIREに与える影響を確認</span>
            </a>
          </div>
        </section>

        <section class="article-panel" aria-label="副業人気カテゴリ">
          <section class="tool-heading">
            <h2>副業人気カテゴリ</h2>
            <p>副業を始める人は、収入、手取り、時間管理、AI活用、税金をまとめて見ると失敗しにくくなります。</p>
          </section>
          <div class="article-list">
            <a class="article-link" href="category-side-business.html">
              <strong>副業カテゴリを見る</strong>
              <span>副業収入、AI副業、手取り、利益率、時間管理をまとめて確認</span>
            </a>
            <a class="article-link" href="#side-income">
              <strong>副業月収シミュレーター</strong>
              <span>時給、作業時間、案件数から副業収入を確認</span>
            </a>
            <a class="article-link" href="#ai-efficiency">
              <strong>AI副業効率化シミュレーター</strong>
              <span>AI活用で時給と作業時間がどう変わるか確認</span>
            </a>
            <a class="article-link" href="#take-home">
              <strong>副業手取り計算シミュレーター</strong>
              <span>税金後に手元へ残る金額を確認</span>
            </a>
            <a class="article-link" href="#side-time-management">
              <strong>副業時間管理シミュレーター</strong>
              <span>本業後でも続けられる作業時間を確認</span>
            </a>
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
            <a class="article-link" href="category-ai.html">
              <strong>AIカテゴリ</strong>
              <span>AI副業効率化、AI導入ROI、時給改善、AIツール比較へ移動</span>
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

          <a class="tool-card" href="#ai-roi">
            <p class="eyebrow">AI ROI</p>
            <h2>AI導入ROIシミュレーター</h2>
            <p>AIツール導入による時間削減、利益改善、ROI、回収期間を分析し、費用対効果を確認します。</p>
            <div class="tool-meta">
              <span>削減時間</span>
              <span>ROI</span>
              <span>回収期間</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#ai-automation">
            <p class="eyebrow">AI Automation</p>
            <h2>AI副業自動化シミュレーター</h2>
            <p>AI導入で自動化できる作業時間、利益改善、ROI、副業継続性を分析します。</p>
            <div class="tool-meta">
              <span>削減時間</span>
              <span>利益改善</span>
              <span>継続性</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#ai-time-reduction">
            <p class="eyebrow">AI Time Reduction</p>
            <h2>AI作業時間削減診断</h2>
            <p>副業ジャンル、AI利用頻度、作業内容から、AIで削減できる時間と利益改善を診断します。</p>
            <div class="tool-meta">
              <span>削減時間</span>
              <span>効率化度</span>
              <span>利益改善</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#ai-outsourcing">
            <p class="eyebrow">AI Outsourcing</p>
            <h2>AI外注費削減シミュレーター</h2>
            <p>AI導入によって削減できる外注費、利益率改善、ROI、回収期間を分析します。</p>
            <div class="tool-meta">
              <span>外注費削減</span>
              <span>ROI</span>
              <span>回収期間</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#ai-profit-max">
            <p class="eyebrow">AI Profit</p>
            <h2>AI副業利益最大化シミュレーター</h2>
            <p>AI導入による利益増加、作業効率、時給改善、目標月収までの距離を分析します。</p>
            <div class="tool-meta">
              <span>利益改善</span>
              <span>時給改善</span>
              <span>ROI</span>
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

          <a class="tool-card" href="#side-fatigue">
            <p class="eyebrow">Fatigue</p>
            <h2>副業疲労度シミュレーター</h2>
            <p>本業、副業、睡眠、休日、AI活用、運動、ストレス度から、副業継続による疲労度とburnoutリスクを分析します。</p>
            <div class="tool-meta">
              <span>疲労度</span>
              <span>burnout</span>
              <span>改善提案</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#side-continuity">
            <p class="eyebrow">Continuity</p>
            <h2>副業継続率診断</h2>
            <p>副業時間、疲労度、収益、目標月収、AI活用から、本業後でも副業を続けられる可能性を診断します。</p>
            <div class="tool-meta">
              <span>継続率</span>
              <span>挫折リスク</span>
              <span>改善提案</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#side-motivation">
            <p class="eyebrow">Motivation</p>
            <h2>副業モチベーション診断</h2>
            <p>目標月収、現在収益、本業時間、副業時間、睡眠、疲労度、趣味時間から副業を続ける意欲の維持しやすさを診断します。</p>
            <div class="tool-meta">
              <span>維持スコア</span>
              <span>挫折リスク</span>
              <span>AI改善</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#side-risk">
            <p class="eyebrow">Risk Check</p>
            <h2>副業リスク診断</h2>
            <p>副業内容、作業時間、収益依存度、睡眠、確定申告状況から、税務・burnout・収益不安定リスクを診断します。</p>
            <div class="tool-meta">
              <span>リスクスコア</span>
              <span>税務</span>
              <span>改善提案</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#side-safety">
            <p class="eyebrow">Safety Check</p>
            <h2>会社員副業安全度診断</h2>
            <p>副業内容、働き方、税務状況、会社規定、匿名性から、会社員として安全に副業を続けられるか診断します。</p>
            <div class="tool-meta">
              <span>安全度</span>
              <span>会社バレ</span>
              <span>税務・疲労</span>
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

          <a class="tool-card" href="#employee-tax-saving">
            <p class="eyebrow">Employee Tax</p>
            <h2>会社員節税シミュレーター</h2>
            <p>年収、扶養、iDeCo、ふるさと納税、保険控除、住宅ローン控除から会社員の節税可能額を試算します。</p>
            <div class="tool-meta">
              <span>節税可能額</span>
              <span>控除効果</span>
              <span>FIRE影響</span>
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

          <a class="tool-card" href="#incorporation">
            <p class="eyebrow">Company or Sole</p>
            <h2>副業法人化判断シミュレーター</h2>
            <p>個人事業の税負担と法人化後の維持費・法人税・社会保険増加額を比較し、法人化の目安を確認します。</p>
            <div class="tool-meta">
              <span>法人化判断</span>
              <span>維持費</span>
              <span>会計導線</span>
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
          <a class="tool-card" href="#investment-risk">
            <p class="eyebrow">Risk Check</p>
            <h2>投資リスク許容度診断</h2>
            <p>年齢、資産状況、投資経験、投資目的、暴落時の行動から、会社員に合う投資スタイルと資産配分を診断します。</p>
            <div class="tool-meta">
              <span>リスク許容度</span>
              <span>資産配分</span>
              <span>FIRE適性</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

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

          <a class="tool-card" href="#nisa-fast">
            <p class="eyebrow">NISA Fast</p>
            <h2>新NISA最速積立シミュレーター</h2>
            <p>毎月積立額、ボーナス積立額、想定年利、運用年数から、新NISAで最速資産形成した場合の成長速度を試算します。</p>
            <div class="tool-meta">
              <span>最終資産</span>
              <span>複利効果</span>
              <span>FIRE影響</span>
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

          <a class="tool-card" href="#fire-rate">
            <p class="eyebrow">FIRE Score</p>
            <h2>FIRE達成率シミュレーター</h2>
            <p>現在資産、毎月積立、副業収入、年間生活費、配当収入から、FIRE達成可能性をスコア化します。</p>
            <div class="tool-meta">
              <span>達成率</span>
              <span>不足資産</span>
              <span>改善提案</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#fire-cost-optimization">
            <p class="eyebrow">FIRE Cost</p>
            <h2>FIRE生活費最適化シミュレーター</h2>
            <p>生活費削減、追加投資、副業収入、配当収入から、FIRE達成時期がどれだけ短縮されるかを分析します。</p>
            <div class="tool-meta">
              <span>必要資産</span>
              <span>短縮年数</span>
              <span>改善提案</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#fire-stress">
            <p class="eyebrow">FIRE Stress</p>
            <h2>FIREストレス診断</h2>
            <p>FIRE準備状況、生活費、収入不安、仕事ストレス、孤独耐性から、FIRE後のストレスリスクを診断します。</p>
            <div class="tool-meta">
              <span>ストレススコア</span>
              <span>収入不安</span>
              <span>サイドFIRE比較</span>
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

          <a class="tool-card" href="#life-cost">
            <p class="eyebrow">Life Cost</p>
            <h2>生活コスト最適化シミュレーター</h2>
            <p>家賃、通信費、保険料、食費、光熱費、交通費、サブスク費用、娯楽費から、生活コストの改善余地と投資・FIREへの影響を分析します。</p>
            <div class="tool-meta">
              <span>生活費合計</span>
              <span>年間節約</span>
              <span>FIRE短縮</span>
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

          <a class="tool-card" href="#dividend-stock">
            <p class="eyebrow">Dividend Stock</p>
            <h2>高配当株比較シミュレーター</h2>
            <p>複数の高配当株を比較し、配当収入、資産成長、FIRE達成への影響、ETFとの違いを分析します。</p>
            <div class="tool-meta">
              <span>銘柄別比較</span>
              <span>年間配当</span>
              <span>ETF比較</span>
            </div>
            <span class="open-label">&#x30c4;&#x30fc;&#x30eb;&#x3092;&#x958b;&#x304f;</span>
          </a>

          <a class="tool-card" href="#dividend-mental">
            <p class="eyebrow">Dividend Mental</p>
            <h2>配当メンタル安定度診断</h2>
            <p>現在資産、高配当株比率、生活費、配当収入、暴落耐性、現金比率から配当投資を続ける精神安定度を診断します。</p>
            <div class="tool-meta">
              <span>安定度</span>
              <span>暴落耐性</span>
              <span>依存リスク</span>
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

          <a class="tool-card" href="#dividend-life-years">
            <p class="eyebrow">Dividend Years</p>
            <h2>配当生活年数シミュレーター</h2>
            <p>現在資産、毎月生活費、配当利回り、インフレ率から、配当生活を何年間続けられるかを試算します。</p>
            <div class="tool-meta">
              <span>継続年数</span>
              <span>残高推移</span>
              <span>FIRE継続</span>
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
            <li><a href="#ai-roi"><strong>AI導入ROI</strong><span>AIツール費用に対する投資対効果と回収期間を確認</span></a></li>
            <li><a href="#ai-automation"><strong>AI副業自動化</strong><span>AI導入で削減できる時間、利益改善、継続性を確認</span></a></li>
            <li><a href="#ai-time-reduction"><strong>AI作業時間削減診断</strong><span>副業ジャンルと作業内容から削減時間、効率化度、利益改善を確認</span></a></li>
            <li><a href="#ai-outsourcing"><strong>AI外注費削減</strong><span>AI導入で外注費削減、利益率改善、ROIを確認</span></a></li>
            <li><a href="#ai-profit-max"><strong>AI副業利益最大化</strong><span>AI導入後の利益額、時給改善、目標月収までの距離を確認</span></a></li>
            <li><a href="#hourly-improvement"><strong>副業時給改善</strong><span>売上、作業時間、AI活用から実質時給を改善</span></a></li>
            <li><a href="#side-time-management"><strong>副業時間管理</strong><span>本業、睡眠、家事、副業時間から継続可能性を確認</span></a></li>
            <li><a href="#side-fatigue"><strong>副業疲労度</strong><span>本業、副業、睡眠、休日からburnoutリスクを確認</span></a></li>
            <li><a href="#side-continuity"><strong>副業継続率診断</strong><span>副業時間、疲労度、収益、AI活用から続けやすさを確認</span></a></li>
            <li><a href="#side-motivation"><strong>副業モチベーション診断</strong><span>目標月収、疲労度、趣味時間から続ける意欲を確認</span></a></li>
            <li><a href="#side-risk"><strong>副業リスク診断</strong><span>税務、burnout、収益依存のリスクをまとめて確認</span></a></li>
            <li><a href="#side-safety"><strong>会社員副業安全度診断</strong><span>会社バレ、税務、疲労、会社規定のリスクを確認</span></a></li>
            <li><a href="#side-profit-margin"><strong>&#x526f;&#x696d;&#x5229;&#x76ca;&#x7387;</strong><span>&#x58f2;&#x4e0a;&#x30fb;&#x7d4c;&#x8cbb;&#x30fb;&#x4f5c;&#x696d;&#x6642;&#x9593;&#x304b;&#x3089;&#x5229;&#x76ca;&#x7387;&#x3092;&#x5206;&#x6790;</span></a></li>
            <li><a href="#incorporation"><strong>副業法人化判断</strong><span>個人事業と法人化の手取り差額、維持費、判断目安を比較</span></a></li>
            <li><a href="#take-home"><strong>&#x526f;&#x696d;&#x624b;&#x53d6;&#x308a;</strong><span>&#x7a0e;&#x91d1;&#x5f8c;&#x306e;&#x624b;&#x5143;&#x306b;&#x6b8b;&#x308b;&#x91d1;&#x984d;&#x3092;&#x8a66;&#x7b97;</span></a></li>
            <li><a href="#income-tax"><strong>&#x526f;&#x696d;&#x6240;&#x5f97;&#x7a0e;</strong><span>&#x6240;&#x5f97;&#x7a0e;&#x3068;&#x5fa9;&#x8208;&#x7279;&#x5225;&#x6240;&#x5f97;&#x7a0e;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#employee-tax-saving"><strong>会社員節税</strong><span>控除、iDeCo、ふるさと納税で節税可能額を確認</span></a></li>
            <li><a href="#resident-tax"><strong>&#x526f;&#x696d;&#x4f4f;&#x6c11;&#x7a0e;</strong><span>&#x666e;&#x901a;&#x5fb4;&#x53ce;&#x306e;&#x6ce8;&#x610f;&#x70b9;&#x3068;&#x7a0e;&#x984d;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#investment-risk"><strong>投資リスク許容度診断</strong><span>年齢、資産、経験、暴落耐性から投資スタイルを確認</span></a></li>
            <li><a href="#nisa"><strong>&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;</strong><span>&#x7a4d;&#x7acb;&#x306e;&#x5c06;&#x6765;&#x984d;&#x3068;&#x904b;&#x7528;&#x76ca;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#nisa-fast"><strong>新NISA最速積立</strong><span>毎月積立とボーナス積立で資産形成速度を確認</span></a></li>
            <li><a href="#nisa-withdrawal"><strong>NISA取り崩し</strong><span>老後に何年取り崩せるかと毎月使える額を確認</span></a></li>
            <li><a href="#credit-card-investment"><strong>&#x30af;&#x30ec;&#x30ab;&#x7a4d;&#x7acb;&#x6bd4;&#x8f03;</strong><span>&#x30dd;&#x30a4;&#x30f3;&#x30c8;&#x9084;&#x5143;&#x3068;&#x901a;&#x5e38;&#x7a4d;&#x7acb;&#x306e;&#x5dee;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#ideco"><strong>iDeCo&#x7bc0;&#x7a0e;</strong><span>&#x6bce;&#x6708;&#x306e;&#x639b;&#x91d1;&#x304b;&#x3089;&#x7bc0;&#x7a0e;&#x984d;&#x3068;&#x5c06;&#x6765;&#x8cc7;&#x7523;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#dividend"><strong>&#x914d;&#x5f53;&#x91d1;</strong><span>&#x5e74;&#x9593;&#x914d;&#x5f53;&#x91d1;&#x3068;&#x6708;&#x5e73;&#x5747;&#x914d;&#x5f53;&#x91d1;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#dividend-etf"><strong>配当ETF比較</strong><span>複数ETFの配当収入と資産成長を比較</span></a></li>
            <li><a href="#dividend-stock"><strong>高配当株比較</strong><span>複数銘柄の配当収入、資産成長、ETFとの違いを比較</span></a></li>
            <li><a href="#dividend-mental"><strong>配当メンタル安定度診断</strong><span>配当投資を続ける精神安定度と依存リスクを確認</span></a></li>
            <li><a href="#dividend-reinvestment"><strong>&#x914d;&#x5f53;&#x518d;&#x6295;&#x8cc7;</strong><span>&#x914d;&#x5f53;&#x3092;&#x518d;&#x6295;&#x8cc7;&#x3057;&#x305f;&#x5834;&#x5408;&#x306e;&#x8cc7;&#x7523;&#x6210;&#x9577;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#dividend-life"><strong>配当生活達成</strong><span>生活費を配当収入だけでまかなう必要資産を確認</span></a></li>
            <li><a href="#dividend-life-years"><strong>配当生活年数</strong><span>現在資産と生活費から配当生活の継続年数を確認</span></a></li>
            <li><a href="#fire"><strong>FIRE&#x9054;&#x6210;</strong><span>&#x76ee;&#x6a19;&#x8cc7;&#x7523;&#x307e;&#x3067;&#x306e;&#x5e74;&#x6570;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#fire-rate"><strong>FIRE達成率</strong><span>現在資産、収支、投資状況からFIRE可能性をスコア化</span></a></li>
            <li><a href="#fire-cost-optimization"><strong>FIRE生活費最適化</strong><span>生活費削減で必要資産と達成時期がどう変わるか確認</span></a></li>
            <li><a href="#fire-stress"><strong>FIREストレス診断</strong><span>FIRE後の収入不安、孤独、満足度を事前に確認</span></a></li>
            <li><a href="#employee-fire"><strong>&#x4f1a;&#x793e;&#x54e1;FIRE</strong><span>&#x7a4d;&#x7acb;&#x3001;&#x526f;&#x696d;&#x3001;&#x914d;&#x5f53;&#x3092;&#x542b;&#x3081;&#x3066;&#x9054;&#x6210;&#x5e74;&#x6570;&#x3092;&#x78ba;&#x8a8d;</span></a></li>
            <li><a href="#cash-flow"><strong>会社員キャッシュフロー</strong><span>毎月収支、投資可能額、固定費改善余地を確認</span></a></li>
            <li><a href="#life-cost"><strong>生活コスト最適化</strong><span>固定費・変動費の改善余地と投資効果を確認</span></a></li>
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
            <a class="article-link" href="article-after-work-sidejob-1hour.html">
              <strong>本業後1時間副業を続けるためにやめたこと</strong>
              <span>運送業管理職として働きながら副業時間を作る実体験</span>
            </a>
            <a class="article-link" href="article-fire-31-company-worker.html">
              <strong>31歳会社員が40歳FIREを目指す理由</strong>
              <span>会社員収入への依存不安と、固定費改善・副業・NISAの考え方</span>
            </a>
            <a class="article-link" href="article-ai-sidejob-manager-reality.html">
              <strong>管理職をしながらAI副業を続ける現実</strong>
              <span>本業後の疲労、ChatGPT活用、作業時間短縮のリアル</span>
            </a>
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
            <p>AI効率化は、自動化できる作業、時給改善、利益率改善、使うAIツールの選び方を合わせて見ると実行に移しやすくなります。</p>
          </section>
          <div class="related-links">
            <a href="#ai-automation">AI副業自動化シミュレーター</a>
            <a href="#ai-time-reduction">AI作業時間削減診断</a>
            <a href="#hourly-improvement">副業時給改善シミュレーター</a>
            <a href="#side-profit-margin">副業利益率シミュレーター</a>
            <a href="article-ai-tools-comparison.html">AIツール比較記事</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="ai-roi" aria-label="AI導入ROIシミュレーター">
        <section class="tool-heading">
          <h2>AI導入ROIシミュレーター</h2>
          <p>AIツール導入による時間削減、利益改善、ROI、回収期間を分析します。月額費用を払う価値があるかを数字で確認できます。</p>
        </section>

        <section class="workspace" aria-label="AI導入ROIの計算">
          <form class="input-panel" id="aiRoiForm">
            <div class="field">
              <label for="aiRoiHours">現在の作業時間 <span class="unit">時間 / 月</span></label>
              <input id="aiRoiHours" name="aiRoiHours" type="number" inputmode="decimal" min="0.1" max="10000" step="0.5" value="80" required aria-describedby="aiRoiHoursError">
              <p class="error" id="aiRoiHoursError"></p>
            </div>
            <div class="field">
              <label for="aiRoiSales">現在の副業売上 <span class="unit">円 / 月</span></label>
              <input id="aiRoiSales" name="aiRoiSales" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="300000" required aria-describedby="aiRoiSalesError">
              <p class="error" id="aiRoiSalesError"></p>
            </div>
            <div class="field">
              <label for="aiRoiToolCost">AIツール月額費用 <span class="unit">円 / 月</span></label>
              <input id="aiRoiToolCost" name="aiRoiToolCost" type="number" inputmode="numeric" min="0" max="10000000" step="1000" value="5000" required aria-describedby="aiRoiToolCostError">
              <p class="error" id="aiRoiToolCostError"></p>
            </div>
            <div class="field">
              <label for="aiRoiReduction">AIによる時短率 <span class="unit">%</span></label>
              <input id="aiRoiReduction" name="aiRoiReduction" type="number" inputmode="decimal" min="0" max="95" step="1" value="30" required aria-describedby="aiRoiReductionError">
              <p class="error" id="aiRoiReductionError"></p>
            </div>
            <div class="field">
              <label for="aiRoiHourlyRate">時給単価 <span class="unit">円</span></label>
              <input id="aiRoiHourlyRate" name="aiRoiHourlyRate" type="number" inputmode="numeric" min="0" max="1000000" step="500" value="3000" required aria-describedby="aiRoiHourlyRateError">
              <p class="error" id="aiRoiHourlyRateError"></p>
            </div>
            <div class="field">
              <label for="aiRoiOutsourcingReduction">外注費削減額 <span class="unit">円 / 月</span></label>
              <input id="aiRoiOutsourcingReduction" name="aiRoiOutsourcingReduction" type="number" inputmode="numeric" min="0" max="1000000000" step="5000" value="20000" required aria-describedby="aiRoiOutsourcingReductionError">
              <p class="error" id="aiRoiOutsourcingReductionError"></p>
            </div>
            <div class="field">
              <label for="aiRoiSalesIncrease">AI導入後の予想売上増加率 <span class="unit">%</span></label>
              <input id="aiRoiSalesIncrease" name="aiRoiSalesIncrease" type="number" inputmode="decimal" min="0" max="300" step="1" value="10" required aria-describedby="aiRoiSalesIncreaseError">
              <p class="error" id="aiRoiSalesIncreaseError"></p>
            </div>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">ROI（投資対効果）</p>
              <p class="amount" id="aiRoiRate">0%</p>
            </div>
            <p class="notice" id="aiRoiNotice">入力を確認してください。ROIは税引前の簡易シミュレーションです。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>AI導入後の削減時間</strong>
                <span class="accent-amber" id="aiRoiSavedHours">0時間</span>
                <small>月間で削減できる作業時間</small>
              </div>
              <div class="metric">
                <strong>年間削減時間</strong>
                <span class="accent-blue" id="aiRoiAnnualSavedHours">0時間</span>
                <small>月間削減時間 x 12か月</small>
              </div>
              <div class="metric">
                <strong>年間追加利益</strong>
                <span class="accent-green" id="aiRoiAnnualProfit">0円</span>
                <small>時間価値、売上増、外注費削減、AI費用から計算</small>
              </div>
              <div class="metric">
                <strong>回収期間</strong>
                <span class="accent-blue" id="aiRoiPaybackPeriod">未計算</span>
                <small>AIツール費用を何か月で回収できるか</small>
              </div>
              <div class="metric">
                <strong>おすすめAI活用方法</strong>
                <span class="accent-green text-metric" id="aiRoiRecommendation">未計算</span>
                <small>ROIと削減時間から活用方針を判定</small>
              </div>
              <div class="metric">
                <strong>副業時給改善シミュレーターへの導線</strong>
                <span class="accent-blue text-metric" id="aiRoiHourlyGuide">時給改善も確認</span>
                <small>実質時給、利益率、改善余地へ進む</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="AI導入ROIシミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>ROIはどう計算していますか？</summary>
              <p>年間追加利益を年間AIツール費用で割って計算しています。年間追加利益には、削減時間の価値、売上増加、外注費削減、AIツール費用を反映しています。</p>
            </details>
            <details>
              <summary>時給単価には何を入れればいいですか？</summary>
              <p>自分の副業作業1時間あたりの価値を入力してください。案件単価がある場合は実質時給、まだ分からない場合は目標時給を入れると目安になります。</p>
            </details>
            <details>
              <summary>AIツール費用が高い場合も使うべきですか？</summary>
              <p>削減時間や売上増加が費用を上回るなら検討余地があります。ROIが低い場合は、有料プランの前に無料枠や用途を絞った導入から始めるのが現実的です。</p>
            </details>
            <details>
              <summary>どんな副業でAI導入効果が出やすいですか？</summary>
              <p>文章作成、調査、資料作成、動画編集の下準備、画像作成、コード補助など、毎回似た作業が発生する副業では時間削減効果を確認しやすいです。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="AI導入ROI関連ツール">
          <section class="tool-heading">
            <h2>関連ツール・関連記事</h2>
            <p>AI導入の費用対効果を見たら、自動化できる作業、実質時給、利益率、AIツール選びも合わせて確認できます。</p>
          </section>
          <div class="related-links">
            <a href="#ai-efficiency">AI副業効率化シミュレーター</a>
            <a href="#ai-automation">AI副業自動化シミュレーター</a>
            <a href="#ai-time-reduction">AI作業時間削減診断</a>
            <a href="#side-profit-margin">副業利益率シミュレーター</a>
            <a href="article-ai-tools-comparison.html">副業向けAIツール比較記事</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="ai-automation" aria-label="AI副業自動化シミュレーター">
        <section class="tool-heading">
          <h2>AI副業自動化シミュレーター</h2>
          <p>現在の副業作業時間、売上、自動化可能割合、AIツール費用、外注費、現在の時給、目標月収から、AI導入で削減できる時間と利益改善、副業継続性を分析します。</p>
        </section>

        <section class="workspace" aria-label="AI副業自動化の計算">
          <form class="input-panel" id="aiAutomationForm">
            <div class="field">
              <label for="aiAutomationHours">現在の副業作業時間 <span class="unit">時間 / 月</span></label>
              <input id="aiAutomationHours" name="aiAutomationHours" type="number" inputmode="decimal" min="0.1" max="10000" step="0.5" value="80" required aria-describedby="aiAutomationHoursError">
              <p class="error" id="aiAutomationHoursError"></p>
            </div>
            <div class="field">
              <label for="aiAutomationSales">現在の副業売上 <span class="unit">円 / 月</span></label>
              <input id="aiAutomationSales" name="aiAutomationSales" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="300000" required aria-describedby="aiAutomationSalesError">
              <p class="error" id="aiAutomationSalesError"></p>
            </div>
            <label class="check-field" for="aiAutomationUse">
              <input id="aiAutomationUse" name="aiAutomationUse" type="checkbox" checked>
              <span>AIツールを導入する</span>
            </label>
            <div class="field">
              <label for="aiAutomationRate">自動化可能割合 <span class="unit">%</span></label>
              <input id="aiAutomationRate" name="aiAutomationRate" type="number" inputmode="decimal" min="0" max="95" step="1" value="35" required aria-describedby="aiAutomationRateError">
              <p class="error" id="aiAutomationRateError"></p>
            </div>
            <div class="field">
              <label for="aiAutomationCost">AIツール月額費用 <span class="unit">円 / 月</span></label>
              <input id="aiAutomationCost" name="aiAutomationCost" type="number" inputmode="numeric" min="0" max="10000000" step="1000" value="5000" required aria-describedby="aiAutomationCostError">
              <p class="error" id="aiAutomationCostError"></p>
            </div>
            <div class="field">
              <label for="aiAutomationOutsourcing">外注費 <span class="unit">円 / 月</span></label>
              <input id="aiAutomationOutsourcing" name="aiAutomationOutsourcing" type="number" inputmode="numeric" min="0" max="1000000000" step="5000" value="30000" required aria-describedby="aiAutomationOutsourcingError">
              <p class="error" id="aiAutomationOutsourcingError"></p>
            </div>
            <div class="field">
              <label for="aiAutomationHourly">現在の時給 <span class="unit">円</span></label>
              <input id="aiAutomationHourly" name="aiAutomationHourly" type="number" inputmode="numeric" min="0" max="1000000" step="500" value="3000" required aria-describedby="aiAutomationHourlyError">
              <p class="error" id="aiAutomationHourlyError"></p>
            </div>
            <div class="field">
              <label for="aiAutomationTargetIncome">目標月収 <span class="unit">円 / 月</span></label>
              <input id="aiAutomationTargetIncome" name="aiAutomationTargetIncome" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="500000" required aria-describedby="aiAutomationTargetIncomeError">
              <p class="error" id="aiAutomationTargetIncomeError"></p>
            </div>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">削減可能時間</p>
              <p class="amount" id="aiAutomationSavedHours">0時間</p>
            </div>
            <p class="notice" id="aiAutomationNotice">入力を確認してください。AI自動化の効果は税引前の簡易シミュレーションです。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>年間削減時間</strong>
                <span class="accent-amber" id="aiAutomationAnnualSavedHours">0時間</span>
                <small>月間削減時間 x 12か月</small>
              </div>
              <div class="metric">
                <strong>AI導入後の予想利益</strong>
                <span class="accent-green" id="aiAutomationProfit">0円</span>
                <small>売上、時間価値、外注費、AI費用から計算</small>
              </div>
              <div class="metric">
                <strong>時給改善</strong>
                <span class="accent-blue" id="aiAutomationHourlyImprovement">0円</span>
                <small>AI導入前後の実質時給差</small>
              </div>
              <div class="metric">
                <strong>副業継続性改善</strong>
                <span class="accent-green text-metric" id="aiAutomationContinuity">入力待ち</span>
                <small>作業負荷と目標月収への近さから判定</small>
              </div>
              <div class="metric">
                <strong>ROI（投資対効果）</strong>
                <span class="accent-amber" id="aiAutomationRoi">0%</span>
                <small>AI費用に対する月間改善額の割合</small>
              </div>
              <div class="metric">
                <strong>おすすめAI活用方法</strong>
                <span class="accent-blue text-metric" id="aiAutomationRecommendation">入力待ち</span>
                <small>自動化割合とROIから活用方法を提案</small>
              </div>
              <div class="metric">
                <strong>関連ツール導線</strong>
                <span class="accent-green text-metric" id="aiAutomationRelatedTools">AI効率化、AI導入ROI、AI利益最大化</span>
                <small>次に確認したいシミュレーター</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="AI副業自動化シミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>自動化可能割合はどう決めればいいですか？</summary>
              <p>調査、要約、下書き、定型返信、資料作成、画像作成など、毎回似た作業のうちAIに任せられる割合を入力します。最初は20%から40%で試算すると現実的です。</p>
            </details>
            <details>
              <summary>AI導入で完全に自動化できますか？</summary>
              <p>完全自動化より、定型作業を減らして判断や品質確認に時間を残す考え方が現実的です。特に副業では、納品前チェックや顧客対応は人の判断を残した方が安全です。</p>
            </details>
            <details>
              <summary>副業継続性改善は何を見ていますか？</summary>
              <p>削減時間、目標月収との差、AI費用を差し引いた利益改善をもとに、無理なく続けやすくなるかを判定しています。本業後の疲労がある人ほど、時間削減の効果が大きくなります。</p>
            </details>
            <details>
              <summary>AIツール費用が高い場合は導入しない方がいいですか？</summary>
              <p>ROIが低い場合は、有料プランを増やす前に用途を絞るのがおすすめです。下書き、リサーチ、テンプレ作成など、短時間で効果が出やすい作業から試してください。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="AI副業自動化関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>AI自動化の効果を見たら、効率化、ROI、利益最大化も合わせて確認すると導入判断がしやすくなります。</p>
          </section>
          <div class="related-links">
            <a href="#ai-efficiency">AI副業効率化シミュレーター</a>
            <a href="#ai-roi">AI導入ROIシミュレーター</a>
            <a href="#ai-time-reduction">AI作業時間削減診断</a>
            <a href="#ai-profit-max">AI副業利益最大化シミュレーター</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="ai-time-reduction" aria-label="AI作業時間削減診断">
        <section class="tool-heading">
          <h2>AI作業時間削減診断</h2>
          <p>現在の作業時間、副業ジャンル、AI利用頻度、外注有無、現在の時給、作業内容、目標月収から、AIツール導入によって削減できる作業時間と利益改善を診断します。</p>
        </section>

        <section class="workspace" aria-label="AI作業時間削減の診断">
          <form class="input-panel" id="aiTimeReductionForm">
            <div class="field">
              <label for="aiTimeReductionHours">現在の作業時間 <span class="unit">時間 / 月</span></label>
              <input id="aiTimeReductionHours" name="aiTimeReductionHours" type="number" inputmode="decimal" min="0.1" max="10000" step="0.5" value="80" required aria-describedby="aiTimeReductionHoursError">
              <p class="error" id="aiTimeReductionHoursError"></p>
            </div>
            <div class="field">
              <label for="aiTimeReductionGenre">副業ジャンル</label>
              <select id="aiTimeReductionGenre" name="aiTimeReductionGenre">
                <option value="writing">ライティング・ブログ</option>
                <option value="video">動画編集・SNS</option>
                <option value="design">デザイン・画像制作</option>
                <option value="coding">Web制作・コード補助</option>
                <option value="admin">事務・リサーチ</option>
                <option value="other">その他</option>
              </select>
            </div>
            <label class="check-field" for="aiTimeReductionUse">
              <input id="aiTimeReductionUse" name="aiTimeReductionUse" type="checkbox" checked>
              <span>AIを利用している</span>
            </label>
            <div class="field">
              <label for="aiTimeReductionFrequency">AI利用頻度</label>
              <select id="aiTimeReductionFrequency" name="aiTimeReductionFrequency">
                <option value="low">週1回程度</option>
                <option value="medium" selected>週2〜4回</option>
                <option value="high">ほぼ毎日</option>
              </select>
            </div>
            <label class="check-field" for="aiTimeReductionOutsource">
              <input id="aiTimeReductionOutsource" name="aiTimeReductionOutsource" type="checkbox">
              <span>外注している作業がある</span>
            </label>
            <div class="field">
              <label for="aiTimeReductionHourly">現在の時給 <span class="unit">円</span></label>
              <input id="aiTimeReductionHourly" name="aiTimeReductionHourly" type="number" inputmode="numeric" min="0" max="1000000" step="500" value="3000" required aria-describedby="aiTimeReductionHourlyError">
              <p class="error" id="aiTimeReductionHourlyError"></p>
            </div>
            <div class="field">
              <label for="aiTimeReductionTask">作業内容</label>
              <select id="aiTimeReductionTask" name="aiTimeReductionTask">
                <option value="research">調査・構成作成</option>
                <option value="draft" selected>文章・台本の下書き</option>
                <option value="edit">編集・校正・チェック</option>
                <option value="creative">画像・動画の素材作成</option>
                <option value="communication">メール・提案文・返信</option>
              </select>
            </div>
            <div class="field">
              <label for="aiTimeReductionTargetIncome">目標月収 <span class="unit">円 / 月</span></label>
              <input id="aiTimeReductionTargetIncome" name="aiTimeReductionTargetIncome" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="300000" required aria-describedby="aiTimeReductionTargetIncomeError">
              <p class="error" id="aiTimeReductionTargetIncomeError"></p>
            </div>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">削減可能時間</p>
              <p class="amount" id="aiTimeReductionSavedHours">0時間</p>
            </div>
            <p class="notice" id="aiTimeReductionNotice">入力を確認してください。AIによる時短効果は作業内容や品質確認の手間によって変わるため、診断結果は目安として利用してください。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>年間削減時間</strong>
                <span class="accent-amber" id="aiTimeReductionAnnualSavedHours">0時間</span>
                <small>月間削減時間 x 12か月</small>
              </div>
              <div class="metric">
                <strong>AI効率化スコア</strong>
                <span class="accent-blue" id="aiTimeReductionScore">0 / 100</span>
                <small>ジャンル、作業内容、利用頻度から診断</small>
              </div>
              <div class="metric">
                <strong>時給改善予測</strong>
                <span class="accent-green" id="aiTimeReductionHourlyImprovement">0円</span>
                <small>削減時間を反映した実質時給の改善目安</small>
              </div>
              <div class="metric">
                <strong>利益改善予測</strong>
                <span class="accent-green" id="aiTimeReductionProfitImprovement">0円</span>
                <small>削減時間を時給換算した月間改善額</small>
              </div>
              <div class="metric">
                <strong>おすすめAI活用方法</strong>
                <span class="accent-blue text-metric" id="aiTimeReductionRecommendation">入力待ち</span>
                <small>副業ジャンルと作業内容に合わせた使い方</small>
              </div>
              <div class="metric">
                <strong>関連ツール導線</strong>
                <span class="accent-amber text-metric" id="aiTimeReductionRelatedTools">AI自動化、AI効率化、AI導入ROI</span>
                <small>次に確認したいシミュレーター</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="AI作業時間削減診断FAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>AIでどの作業時間を削減しやすいですか？</summary>
              <p>調査、構成作成、文章や台本の下書き、要約、校正、提案文、画像や動画素材の下準備など、繰り返しが多い作業ほど削減しやすいです。最終確認や判断は人が残す前提で考えると現実的です。</p>
            </details>
            <details>
              <summary>AI利用頻度は高いほど良いですか？</summary>
              <p>頻度が高いほど時短効果は出やすいですが、使う目的が曖昧だと確認や修正に時間がかかります。まずは本業後に負担が大きい作業を1つ選び、テンプレ化して使うのがおすすめです。</p>
            </details>
            <details>
              <summary>外注している場合もAIを使う意味はありますか？</summary>
              <p>あります。外注をゼロにするより、依頼文、構成、チェックリスト、初稿作成をAIで整えると、外注費ややり取り時間を減らしやすくなります。</p>
            </details>
            <details>
              <summary>削減時間はそのまま利益になりますか？</summary>
              <p>削減時間を高単価作業、営業、改善作業に回せる場合は利益改善につながりやすいです。休息に回す場合も、副業継続性を高める意味では大きな効果があります。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="AI作業時間削減関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>削減できる作業時間を確認したら、自動化、AI効率化、ROIまで見ると、AI導入を続けるべきか判断しやすくなります。</p>
          </section>
          <div class="related-links">
            <a href="#ai-automation">AI副業自動化シミュレーター</a>
            <a href="#ai-efficiency">AI副業効率化シミュレーター</a>
            <a href="#ai-roi">AI導入ROIシミュレーター</a>
            <a href="article-ai-tools-comparison.html">副業向けAIツール比較記事</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="ai-outsourcing" aria-label="AI外注費削減シミュレーター">
        <section class="tool-heading">
          <h2>AI外注費削減シミュレーター</h2>
          <p>外注している作業の一部をAIで内製化した場合に、削減できる外注費、利益率改善、AI導入ROI、回収期間を分析します。</p>
        </section>

        <section class="workspace" aria-label="AI外注費削減の計算">
          <form class="input-panel" id="aiOutsourcingForm">
            <div class="field">
              <label for="aiOutsourcingCost">現在の外注費 <span class="unit">円 / 月</span></label>
              <input id="aiOutsourcingCost" name="aiOutsourcingCost" type="number" inputmode="numeric" min="0" max="1000000000" step="5000" value="80000" required aria-describedby="aiOutsourcingCostError">
              <p class="error" id="aiOutsourcingCostError"></p>
            </div>
            <div class="field">
              <label for="aiOutsourcingTask">外注業務内容</label>
              <select id="aiOutsourcingTask" name="aiOutsourcingTask" required>
                <option value="writing">記事・文章作成</option>
                <option value="design">画像・デザイン作成</option>
                <option value="video">動画編集補助</option>
                <option value="research">リサーチ・資料作成</option>
                <option value="admin">事務・入力作業</option>
              </select>
              <p class="error" id="aiOutsourcingTaskError"></p>
            </div>
            <div class="field">
              <label for="aiOutsourcingAiCost">AI導入費用 <span class="unit">円 / 月</span></label>
              <input id="aiOutsourcingAiCost" name="aiOutsourcingAiCost" type="number" inputmode="numeric" min="0" max="10000000" step="1000" value="8000" required aria-describedby="aiOutsourcingAiCostError">
              <p class="error" id="aiOutsourcingAiCostError"></p>
            </div>
            <div class="field">
              <label for="aiOutsourcingReduction">AIによる削減率 <span class="unit">%</span></label>
              <input id="aiOutsourcingReduction" name="aiOutsourcingReduction" type="number" inputmode="decimal" min="0" max="95" step="1" value="35" required aria-describedby="aiOutsourcingReductionError">
              <p class="error" id="aiOutsourcingReductionError"></p>
            </div>
            <div class="field">
              <label for="aiOutsourcingSales">現在の副業売上 <span class="unit">円 / 月</span></label>
              <input id="aiOutsourcingSales" name="aiOutsourcingSales" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="300000" required aria-describedby="aiOutsourcingSalesError">
              <p class="error" id="aiOutsourcingSalesError"></p>
            </div>
            <div class="field">
              <label for="aiOutsourcingMargin">現在の利益率 <span class="unit">%</span></label>
              <input id="aiOutsourcingMargin" name="aiOutsourcingMargin" type="number" inputmode="decimal" min="0" max="100" step="1" value="35" required aria-describedby="aiOutsourcingMarginError">
              <p class="error" id="aiOutsourcingMarginError"></p>
            </div>
            <div class="field">
              <label for="aiOutsourcingHours">作業時間 <span class="unit">時間 / 月</span></label>
              <input id="aiOutsourcingHours" name="aiOutsourcingHours" type="number" inputmode="decimal" min="0.1" max="10000" step="0.5" value="70" required aria-describedby="aiOutsourcingHoursError">
              <p class="error" id="aiOutsourcingHoursError"></p>
            </div>
            <div class="field">
              <label for="aiOutsourcingHourlyRate">時給単価 <span class="unit">円</span></label>
              <input id="aiOutsourcingHourlyRate" name="aiOutsourcingHourlyRate" type="number" inputmode="numeric" min="0" max="1000000" step="500" value="3000" required aria-describedby="aiOutsourcingHourlyRateError">
              <p class="error" id="aiOutsourcingHourlyRateError"></p>
            </div>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">削減可能外注費</p>
              <p class="amount" id="aiOutsourcingMonthlySaving">0円</p>
            </div>
            <p class="notice" id="aiOutsourcingNotice">入力を確認してください。AI導入効果は税引前の簡易シミュレーションです。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>年間削減額</strong>
                <span class="accent-green" id="aiOutsourcingAnnualSaving">0円</span>
                <small>外注費削減からAI費用を差し引いた年額</small>
              </div>
              <div class="metric">
                <strong>利益率改善</strong>
                <span class="accent-blue" id="aiOutsourcingMarginImprovement">0pt</span>
                <small>AI導入後の利益率改善幅</small>
              </div>
              <div class="metric">
                <strong>AI導入ROI</strong>
                <span class="accent-amber" id="aiOutsourcingRoi">0%</span>
                <small>年間純削減額 ÷ 年間AI導入費用</small>
              </div>
              <div class="metric">
                <strong>回収期間</strong>
                <span class="accent-blue" id="aiOutsourcingPayback">未計算</span>
                <small>AI費用を削減効果で回収する目安</small>
              </div>
              <div class="metric">
                <strong>おすすめAI活用方法</strong>
                <span class="accent-green text-metric" id="aiOutsourcingRecommendation">未計算</span>
                <small>外注業務内容に合わせた活用方針</small>
              </div>
              <div class="metric">
                <strong>副業利益率シミュレーターへの導線</strong>
                <span class="accent-blue text-metric" id="aiOutsourcingProfitGuide">利益率も確認</span>
                <small>外注費、経費、作業時間を含めて確認</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="AI外注費削減シミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>外注費はすべてAIで削減できますか？</summary>
              <p>すべてを置き換える前提ではなく、下書き、構成、リサーチ、素材作成など一部をAIで内製化する目安として見てください。最終確認や専門判断は人の確認が必要です。</p>
            </details>
            <details>
              <summary>AI導入費用には何を入れればいいですか？</summary>
              <p>ChatGPT、Claude、Canva、CapCut、Notion AIなど、外注費削減に使うAIツールの月額合計を入力してください。</p>
            </details>
            <details>
              <summary>利益率改善はどう計算していますか？</summary>
              <p>現在利益に、外注費削減額からAI導入費用を差し引いた純削減額を加えて、売上に対する利益率の変化を表示しています。</p>
            </details>
            <details>
              <summary>外注を完全にやめるべきですか？</summary>
              <p>品質や納期に関わる作業は外注を残し、AIで下準備や修正回数を減らす使い方が現実的です。重要な作業ほどAIと外注を組み合わせて判断してください。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="AI外注費削減関連ツール">
          <section class="tool-heading">
            <h2>関連ツール・関連記事</h2>
            <p>外注費削減の結果を、AI導入ROI、AI副業利益最大化、副業利益率と合わせて確認できます。</p>
          </section>
          <div class="related-links">
            <a href="#ai-roi">AI導入ROIシミュレーター</a>
            <a href="#ai-profit-max">AI副業利益最大化シミュレーター</a>
            <a href="#side-profit-margin">副業利益率シミュレーター</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="ai-profit-max" aria-label="AI副業利益最大化シミュレーター">
        <section class="tool-heading">
          <h2>AI副業利益最大化シミュレーター</h2>
          <p>AIツール導入による利益増加、作業効率、時給改善、ROI、目標月収までの短縮期間を分析します。</p>
        </section>

        <section class="workspace" aria-label="AI副業利益最大化の計算">
          <form class="input-panel" id="aiProfitMaxForm">
            <div class="field">
              <label for="aiProfitSales">現在の副業売上 <span class="unit">円 / 月</span></label>
              <input id="aiProfitSales" name="aiProfitSales" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="300000" required aria-describedby="aiProfitSalesError">
              <p class="error" id="aiProfitSalesError"></p>
            </div>
            <div class="field">
              <label for="aiProfitMargin">現在の利益率 <span class="unit">%</span></label>
              <input id="aiProfitMargin" name="aiProfitMargin" type="number" inputmode="decimal" min="0" max="100" step="1" value="45" required aria-describedby="aiProfitMarginError">
              <p class="error" id="aiProfitMarginError"></p>
            </div>
            <div class="field">
              <label for="aiProfitHours">現在の作業時間 <span class="unit">時間 / 月</span></label>
              <input id="aiProfitHours" name="aiProfitHours" type="number" inputmode="decimal" min="0.1" max="10000" step="0.5" value="80" required aria-describedby="aiProfitHoursError">
              <p class="error" id="aiProfitHoursError"></p>
            </div>
            <div class="field">
              <label for="aiProfitToolCost">AIツール月額費用 <span class="unit">円 / 月</span></label>
              <input id="aiProfitToolCost" name="aiProfitToolCost" type="number" inputmode="numeric" min="0" max="10000000" step="1000" value="5000" required aria-describedby="aiProfitToolCostError">
              <p class="error" id="aiProfitToolCostError"></p>
            </div>
            <div class="field">
              <label for="aiProfitReduction">AIによる時短率 <span class="unit">%</span></label>
              <input id="aiProfitReduction" name="aiProfitReduction" type="number" inputmode="decimal" min="0" max="95" step="1" value="35" required aria-describedby="aiProfitReductionError">
              <p class="error" id="aiProfitReductionError"></p>
            </div>
            <div class="field">
              <label for="aiProfitOutsourcingReduction">外注費削減額 <span class="unit">円 / 月</span></label>
              <input id="aiProfitOutsourcingReduction" name="aiProfitOutsourcingReduction" type="number" inputmode="numeric" min="0" max="1000000000" step="5000" value="20000" required aria-describedby="aiProfitOutsourcingReductionError">
              <p class="error" id="aiProfitOutsourcingReductionError"></p>
            </div>
            <div class="field">
              <label for="aiProfitSalesIncrease">AI導入後の売上増加率 <span class="unit">%</span></label>
              <input id="aiProfitSalesIncrease" name="aiProfitSalesIncrease" type="number" inputmode="decimal" min="0" max="300" step="1" value="15" required aria-describedby="aiProfitSalesIncreaseError">
              <p class="error" id="aiProfitSalesIncreaseError"></p>
            </div>
            <div class="field">
              <label for="aiProfitTargetIncome">目標月収 <span class="unit">円 / 月</span></label>
              <input id="aiProfitTargetIncome" name="aiProfitTargetIncome" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="500000" required aria-describedby="aiProfitTargetIncomeError">
              <p class="error" id="aiProfitTargetIncomeError"></p>
            </div>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">AI導入後の利益額</p>
              <p class="amount" id="aiProfitAfterProfit">0円</p>
            </div>
            <p class="notice" id="aiProfitNotice">入力を確認してください。利益額は税引前の簡易シミュレーションです。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>利益率改善</strong>
                <span class="accent-green" id="aiProfitMarginImprovement">0pt</span>
                <small>AI導入前後の利益率差</small>
              </div>
              <div class="metric">
                <strong>時給改善</strong>
                <span class="accent-blue" id="aiProfitHourlyImprovement">0円</span>
                <small>AI導入後の実質時給と改善額</small>
              </div>
              <div class="metric">
                <strong>年間追加利益</strong>
                <span class="accent-amber" id="aiProfitAnnualAdditional">0円</span>
                <small>月間追加利益 x 12か月</small>
              </div>
              <div class="metric">
                <strong>ROI（投資対効果）</strong>
                <span class="accent-green" id="aiProfitRoi">0%</span>
                <small>年間追加利益 ÷ 年間AI費用</small>
              </div>
              <div class="metric">
                <strong>目標達成までの短縮期間</strong>
                <span class="accent-blue text-metric" id="aiProfitTargetShortening">未計算</span>
                <small>目標月収に近づくまでの短縮目安</small>
              </div>
              <div class="metric">
                <strong>おすすめAI活用方法</strong>
                <span class="accent-green text-metric" id="aiProfitRecommendation">未計算</span>
                <small>利益最大化に向けた使い方</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="AI副業利益最大化シミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>利益率は何を入力すればいいですか？</summary>
              <p>売上から経費、外注費、ツール費などを差し引いた利益の割合を入力してください。まだ分からない場合は、まず副業利益率シミュレーターで現状を確認すると精度が上がります。</p>
            </details>
            <details>
              <summary>AIツール費用が増えると利益は下がりますか？</summary>
              <p>単純に費用だけ増えると利益は下がります。ただし、時短によって高単価作業や営業に時間を回せたり、外注費を減らせたりする場合は、費用以上の効果が出ることがあります。</p>
            </details>
            <details>
              <summary>目標月収までの短縮期間はどう見ればいいですか？</summary>
              <p>現在利益とAI導入後の利益差から、目標月収に近づくスピードを簡易的に示しています。実際には案件獲得や単価アップも必要なので、あくまで改善余地の目安として見てください。</p>
            </details>
            <details>
              <summary>どの作業からAI化すると効果が出やすいですか？</summary>
              <p>調査、構成作成、下書き、要約、定型メール、SNS投稿案、画像や動画のたたき台など、毎回繰り返す作業から始めると効果を測りやすいです。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="AI副業利益最大化関連ツール">
          <section class="tool-heading">
            <h2>関連ツール・関連記事</h2>
            <p>利益最大化の結果を、AI導入ROI、AI副業効率化、副業利益率と合わせて確認できます。</p>
          </section>
          <div class="related-links">
            <a href="#ai-roi">AI導入ROIシミュレーター</a>
            <a href="#ai-automation">AI副業自動化シミュレーター</a>
            <a href="#ai-efficiency">AI副業効率化シミュレーター</a>
            <a href="#side-profit-margin">副業利益率シミュレーター</a>
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
            <a href="#side-motivation">副業モチベーション診断</a>
            <a href="#ai-efficiency">AI副業効率化シミュレーター</a>
            <a href="#fire">FIRE達成シミュレーター</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="side-fatigue" aria-label="副業疲労度シミュレーター">
        <section class="tool-heading">
          <h2>副業疲労度シミュレーター</h2>
          <p>本業、副業、睡眠、休日、運動、ストレス度から、副業を続けたときの疲労度とburnoutリスクを簡易分析します。</p>
        </section>

        <section class="workspace" aria-label="副業疲労度の計算">
          <form class="input-panel" id="sideFatigueForm">
            <div class="field">
              <label for="fatigueMainJobHours">本業勤務時間 <span class="unit">時間 / 平日</span></label>
              <input id="fatigueMainJobHours" name="fatigueMainJobHours" type="number" inputmode="decimal" min="0" max="24" step="0.5" value="9" required aria-describedby="fatigueMainJobHoursError">
              <p class="error" id="fatigueMainJobHoursError"></p>
            </div>
            <div class="field">
              <label for="fatigueCommuteHours">通勤時間 <span class="unit">時間 / 平日</span></label>
              <input id="fatigueCommuteHours" name="fatigueCommuteHours" type="number" inputmode="decimal" min="0" max="8" step="0.25" value="1.5" required aria-describedby="fatigueCommuteHoursError">
              <p class="error" id="fatigueCommuteHoursError"></p>
            </div>
            <div class="field">
              <label for="fatigueSideHours">副業時間 <span class="unit">時間 / 週</span></label>
              <input id="fatigueSideHours" name="fatigueSideHours" type="number" inputmode="decimal" min="0" max="168" step="0.5" value="12" required aria-describedby="fatigueSideHoursError">
              <p class="error" id="fatigueSideHoursError"></p>
            </div>
            <div class="field">
              <label for="fatigueSleepHours">睡眠時間 <span class="unit">時間 / 日</span></label>
              <input id="fatigueSleepHours" name="fatigueSleepHours" type="number" inputmode="decimal" min="0" max="24" step="0.5" value="6.5" required aria-describedby="fatigueSleepHoursError">
              <p class="error" id="fatigueSleepHoursError"></p>
            </div>
            <div class="field">
              <label for="fatigueHolidayDays">休日数 <span class="unit">日 / 週</span></label>
              <input id="fatigueHolidayDays" name="fatigueHolidayDays" type="number" inputmode="decimal" min="0" max="7" step="0.5" value="2" required aria-describedby="fatigueHolidayDaysError">
              <p class="error" id="fatigueHolidayDaysError"></p>
            </div>
            <label class="check-field" for="fatigueAiUse">
              <input id="fatigueAiUse" name="fatigueAiUse" type="checkbox" checked>
              <span>AIを活用している</span>
            </label>
            <div class="field">
              <label for="fatigueExerciseHours">運動時間 <span class="unit">時間 / 週</span></label>
              <input id="fatigueExerciseHours" name="fatigueExerciseHours" type="number" inputmode="decimal" min="0" max="40" step="0.5" value="2" required aria-describedby="fatigueExerciseHoursError">
              <p class="error" id="fatigueExerciseHoursError"></p>
            </div>
            <div class="field">
              <label for="fatigueStressLevel">ストレス度 <span class="unit">1〜10</span></label>
              <input id="fatigueStressLevel" name="fatigueStressLevel" type="number" inputmode="decimal" min="1" max="10" step="1" value="6" required aria-describedby="fatigueStressLevelError">
              <p class="error" id="fatigueStressLevelError"></p>
            </div>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">疲労度スコア</p>
              <p class="amount" id="fatigueScore">0 / 100</p>
            </div>
            <p class="notice" id="sideFatigueNotice">入力を確認してください。この結果は医療的な診断ではなく、生活リズムを見直すための簡易目安です。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>副業継続リスク</strong>
                <span class="accent-blue text-metric" id="sideFatigueContinuationRisk">未計算</span>
                <small>副業時間と回復時間のバランス</small>
              </div>
              <div class="metric">
                <strong>burnoutリスク</strong>
                <span class="accent-amber text-metric" id="burnoutRisk">未計算</span>
                <small>睡眠不足、休日不足、ストレスから判定</small>
              </div>
              <div class="metric">
                <strong>改善推奨ポイント</strong>
                <span class="accent-green text-metric" id="fatigueImprovementPoint">未計算</span>
                <small>最初に見直したい行動</small>
              </div>
              <div class="metric">
                <strong>AI導入による改善効果</strong>
                <span class="accent-blue text-metric" id="fatigueAiEffect">未計算</span>
                <small>副業時間の圧縮による負荷軽減</small>
              </div>
              <div class="metric">
                <strong>副業時間管理シミュレーターへの導線</strong>
                <span class="accent-green text-metric" id="fatigueTimeManagementGuide">時間管理も確認</span>
                <small>使える時間と継続可能性を詳しく確認</small>
              </div>
              <div class="metric">
                <strong>FIRE達成への影響</strong>
                <span class="accent-amber text-metric" id="fatigueFireImpact">未計算</span>
                <small>無理な副業が長期目標へ与える影響</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="副業疲労度シミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>burnoutリスクは診断ですか？</summary>
              <p>診断ではありません。本業時間、睡眠、休日、ストレス度などから生活リズムの負荷を簡易的に見る目安です。強い不調が続く場合は、早めに専門家や医療機関へ相談してください。</p>
            </details>
            <details>
              <summary>副業時間は多いほど良いですか？</summary>
              <p>短期的には作業量を増やせますが、睡眠や休日を削り続けると継続しにくくなります。副業は続けられる時間設計と時給改善をセットで考えるのがおすすめです。</p>
            </details>
            <details>
              <summary>AI活用は疲労度を下げますか？</summary>
              <p>下書き、調査、要約、資料作成などを短縮できれば、副業時間の圧縮につながります。ただし確認作業や学習時間も必要なので、過度な期待ではなく実績に合わせて見直してください。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="副業疲労度関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>疲労度を確認したら、時間配分とAI時短の効果も合わせて見てください。</p>
          </section>
          <div class="related-links">
            <a href="#side-safety">会社員副業安全度診断</a>
            <a href="#side-time-management">副業時間管理シミュレーター</a>
            <a href="#side-motivation">副業モチベーション診断</a>
            <a href="#ai-efficiency">AI副業効率化シミュレーター</a>
            <a href="#fire">FIRE達成シミュレーター</a>
          </div>
        </section>
      </section>


      <section class="view" data-view="side-continuity" aria-label="副業継続率診断">
        <section class="tool-heading">
          <h2>副業継続率診断</h2>
          <p>副業時間、本業勤務時間、睡眠、収益、疲労度、AI活用から、本業後でも副業を続けられる可能性を診断します。</p>
        </section>

        <section class="workspace" aria-label="副業継続率の診断">
          <form class="input-panel" id="sideContinuityForm">
            <div class="field"><label for="continuitySideHours">副業時間 <span class="unit">時間 / 週</span></label><input id="continuitySideHours" name="continuitySideHours" type="number" inputmode="decimal" min="0" max="168" step="0.5" value="10" required aria-describedby="continuitySideHoursError"><p class="error" id="continuitySideHoursError"></p></div>
            <div class="field"><label for="continuityMainJobHours">本業勤務時間 <span class="unit">時間 / 平日</span></label><input id="continuityMainJobHours" name="continuityMainJobHours" type="number" inputmode="decimal" min="0" max="24" step="0.5" value="9" required aria-describedby="continuityMainJobHoursError"><p class="error" id="continuityMainJobHoursError"></p></div>
            <div class="field"><label for="continuitySleepHours">睡眠時間 <span class="unit">時間 / 日</span></label><input id="continuitySleepHours" name="continuitySleepHours" type="number" inputmode="decimal" min="0" max="24" step="0.5" value="6.5" required aria-describedby="continuitySleepHoursError"><p class="error" id="continuitySleepHoursError"></p></div>
            <div class="field"><label for="continuityIncome">副業月収 <span class="unit">円</span></label><input id="continuityIncome" name="continuityIncome" type="number" inputmode="numeric" min="0" max="1000000000" step="1000" value="50000" required aria-describedby="continuityIncomeError"><p class="error" id="continuityIncomeError"></p></div>
            <div class="field"><label for="continuityFatigueLevel">疲労度 <span class="unit">1〜10</span></label><input id="continuityFatigueLevel" name="continuityFatigueLevel" type="number" inputmode="numeric" min="1" max="10" step="1" value="6" required aria-describedby="continuityFatigueLevelError"><p class="error" id="continuityFatigueLevelError"></p></div>
            <div class="field"><label for="continuityTargetIncome">目標月収 <span class="unit">円</span></label><input id="continuityTargetIncome" name="continuityTargetIncome" type="number" inputmode="numeric" min="0" max="1000000000" step="1000" value="100000" required aria-describedby="continuityTargetIncomeError"><p class="error" id="continuityTargetIncomeError"></p></div>
            <label class="check-field" for="continuityAiUse"><input id="continuityAiUse" name="continuityAiUse" type="checkbox" checked><span>AIを活用している</span></label>
            <div class="actions"><button type="reset">リセット</button></div>
          </form>
          <section class="result-panel" aria-live="polite">
            <div class="hero-result"><p class="eyebrow">副業継続率スコア</p><p class="amount" id="continuityScore">0%</p></div>
            <p class="notice" id="sideContinuityNotice">入力を確認してください。この診断は医療的な判断ではなく、副業を続けるための生活設計の目安です。</p>
            <div class="result-grid">
              <div class="metric"><strong>挫折リスク</strong><span class="accent-amber text-metric" id="continuityDropoutRisk">未計算</span><small>時間、睡眠、疲労、収益ギャップから判定</small></div>
              <div class="metric"><strong>改善ポイント</strong><span class="accent-green text-metric" id="continuityImprovement">未計算</span><small>最初に見直したい項目</small></div>
              <div class="metric"><strong>AI活用による改善効果</strong><span class="accent-blue text-metric" id="continuityAiEffect">未計算</span><small>作業時間削減による継続率改善</small></div>
              <div class="metric"><strong>収益と目標の距離</strong><span class="accent-green text-metric" id="continuityIncomeGap">未計算</span><small>目標月収とのギャップ</small></div>
              <div class="metric"><strong>おすすめ関連ツール</strong><span class="accent-blue text-metric" id="continuityRelatedTools">未計算</span><small>次に確認したいシミュレーター</small></div>
            </div>
          </section>
        </section>
        <section class="faq-panel" aria-label="副業継続率診断FAQ"><h3>FAQ</h3><div class="faq-list">
          <details><summary>副業継続率スコアは何を表していますか？</summary><p>副業時間、本業勤務時間、睡眠時間、疲労度、収益と目標の差を合わせた簡易スコアです。高いほど続けやすい目安ですが、体調や家庭事情も含めて判断してください。</p></details>
          <details><summary>疲労度はどう入力すればいいですか？</summary><p>1がかなり余裕、10が限界に近い状態として入力してください。長時間労働や急な欠勤対応が多い時期は、少し高めに入れると現実に近づきます。</p></details>
          <details><summary>AI活用を入れると何が変わりますか？</summary><p>調査、下書き、要約、資料作成などで作業時間が約20%軽くなる前提で、継続率を少し改善して表示します。</p></details>
          <details><summary>スコアが低い場合は副業をやめるべきですか？</summary><p>すぐにやめる判断ではなく、副業時間、睡眠、目標月収、AI活用のどこを見直すべきかを確認するためのサインです。</p></details>
        </div></section>
        <section class="article-panel" aria-label="副業継続率診断関連ツール"><section class="tool-heading"><h2>関連ツール</h2><p>継続率を確認したら、モチベーション、疲労度、時間管理、AI効率化も合わせて見ると改善ポイントが具体的になります。</p></section><div class="related-links"><a href="#side-motivation">副業モチベーション診断</a><a href="#side-fatigue">副業疲労度シミュレーター</a><a href="#side-time-management">副業時間管理シミュレーター</a><a href="#ai-efficiency">AI副業効率化シミュレーター</a><a href="#hourly-improvement">副業時給改善シミュレーター</a></div></section>
      </section>

      <section class="view" data-view="side-motivation" aria-label="副業モチベーション診断">
        <section class="tool-heading">
          <h2>副業モチベーション診断</h2>
          <p>副業目標月収、現在の副業月収、本業時間、副業時間、睡眠、疲労度、趣味時間、継続期間から、本業後でも副業への意欲を保ちやすいか診断します。</p>
        </section>

        <section class="workspace" aria-label="副業モチベーションの診断">
          <form class="input-panel" id="sideMotivationForm">
            <div class="field"><label for="motivationTargetIncome">副業目標月収 <span class="unit">円</span></label><input id="motivationTargetIncome" name="motivationTargetIncome" type="number" inputmode="numeric" min="0" max="1000000000" step="1000" value="100000" required aria-describedby="motivationTargetIncomeError"><p class="error" id="motivationTargetIncomeError"></p></div>
            <div class="field"><label for="motivationCurrentIncome">現在の副業月収 <span class="unit">円</span></label><input id="motivationCurrentIncome" name="motivationCurrentIncome" type="number" inputmode="numeric" min="0" max="1000000000" step="1000" value="30000" required aria-describedby="motivationCurrentIncomeError"><p class="error" id="motivationCurrentIncomeError"></p></div>
            <div class="field"><label for="motivationMainJobHours">本業勤務時間 <span class="unit">時間 / 平日</span></label><input id="motivationMainJobHours" name="motivationMainJobHours" type="number" inputmode="decimal" min="0" max="24" step="0.5" value="9" required aria-describedby="motivationMainJobHoursError"><p class="error" id="motivationMainJobHoursError"></p></div>
            <div class="field"><label for="motivationSideHours">副業時間 <span class="unit">時間 / 週</span></label><input id="motivationSideHours" name="motivationSideHours" type="number" inputmode="decimal" min="0" max="168" step="0.5" value="8" required aria-describedby="motivationSideHoursError"><p class="error" id="motivationSideHoursError"></p></div>
            <div class="field"><label for="motivationSleepHours">睡眠時間 <span class="unit">時間 / 日</span></label><input id="motivationSleepHours" name="motivationSleepHours" type="number" inputmode="decimal" min="0" max="24" step="0.5" value="6.5" required aria-describedby="motivationSleepHoursError"><p class="error" id="motivationSleepHoursError"></p></div>
            <div class="field"><label for="motivationFatigueLevel">疲労度 <span class="unit">1〜10</span></label><input id="motivationFatigueLevel" name="motivationFatigueLevel" type="number" inputmode="numeric" min="1" max="10" step="1" value="6" required aria-describedby="motivationFatigueLevelError"><p class="error" id="motivationFatigueLevelError"></p></div>
            <label class="check-field" for="motivationAiUse"><input id="motivationAiUse" name="motivationAiUse" type="checkbox" checked><span>AIを活用している</span></label>
            <div class="field"><label for="motivationHobbyHours">趣味時間 <span class="unit">時間 / 週</span></label><input id="motivationHobbyHours" name="motivationHobbyHours" type="number" inputmode="decimal" min="0" max="168" step="0.5" value="4" required aria-describedby="motivationHobbyHoursError"><p class="error" id="motivationHobbyHoursError"></p></div>
            <div class="field"><label for="motivationMonths">継続期間 <span class="unit">か月</span></label><input id="motivationMonths" name="motivationMonths" type="number" inputmode="numeric" min="0" max="600" step="1" value="6" required aria-describedby="motivationMonthsError"><p class="error" id="motivationMonthsError"></p></div>
            <div class="actions"><button type="reset">リセット</button></div>
          </form>
          <section class="result-panel" aria-live="polite">
            <div class="hero-result"><p class="eyebrow">モチベーション維持スコア</p><p class="amount" id="motivationScore">0 / 100</p></div>
            <p class="notice" id="sideMotivationNotice">入力を確認してください。この診断は医療的な判断ではなく、本業後に副業を続けるための生活設計の目安です。</p>
            <div class="result-grid">
              <div class="metric"><strong>挫折リスク</strong><span class="accent-amber text-metric" id="motivationDropoutRisk">未計算</span><small>目標との距離、疲労、作業負荷から判定</small></div>
              <div class="metric"><strong>疲労リスク</strong><span class="accent-amber text-metric" id="motivationFatigueRisk">未計算</span><small>睡眠と本業後の負荷を確認</small></div>
              <div class="metric"><strong>改善推奨ポイント</strong><span class="accent-green text-metric" id="motivationImprovement">未計算</span><small>最初に見直したい行動</small></div>
              <div class="metric"><strong>AI導入による改善効果</strong><span class="accent-blue text-metric" id="motivationAiEffect">未計算</span><small>時短による意欲維持の目安</small></div>
              <div class="metric"><strong>おすすめ関連ツール</strong><span class="accent-blue text-metric" id="motivationRelatedTools">未計算</span><small>次に確認したいシミュレーター</small></div>
              <div class="metric"><strong>副業継続率診断への導線</strong><span class="accent-green text-metric" id="motivationContinuityGuide">継続率も確認</span><small>意欲だけでなく生活リズムから続けやすさを確認</small></div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="副業モチベーション診断FAQ"><h3>FAQ</h3><div class="faq-list">
          <details><summary>モチベーション維持スコアは何を表していますか？</summary><p>目標月収との距離、現在の副業収入、本業勤務時間、副業時間、睡眠、疲労度、趣味時間、継続期間を合わせた簡易スコアです。高いほど無理なく続けやすい目安です。</p></details>
          <details><summary>副業の目標月収は高いほど良いですか？</summary><p>高い目標は行動の理由になりますが、現在収益との差が大きすぎると挫折リスクも上がります。まずは月5万円、次に月10万円のように分けて考える方が続けやすいです。</p></details>
          <details><summary>趣味時間を入れる理由は何ですか？</summary><p>副業だけに時間を寄せすぎると、短期的には進んでも本業後の回復が追いつかなくなります。趣味や休息の時間も、長く副業を続けるための大事な余白として見ています。</p></details>
          <details><summary>AI活用はモチベーション維持に効きますか？</summary><p>調査、下書き、要約、定型作業を短縮できると、平日1時間でも進んだ感覚を作りやすくなります。ただし確認作業は必要なので、任せる作業を絞ることが大切です。</p></details>
        </div></section>
        <section class="article-panel" aria-label="副業モチベーション関連ツール"><section class="tool-heading"><h2>関連ツール</h2><p>モチベーションを確認したら、継続率、疲労度、時間管理を合わせて見ると、現実的に続ける順番が見えます。</p></section><div class="related-links"><a href="#side-continuity">副業継続率診断</a><a href="#side-fatigue">副業疲労度シミュレーター</a><a href="#side-time-management">副業時間管理シミュレーター</a><a href="#ai-efficiency">AI副業効率化シミュレーター</a></div></section>
      </section>

      <section class="view" data-view="side-risk" aria-label="副業リスク診断">
        <section class="tool-heading">
          <h2>副業リスク診断</h2>
          <p>副業ジャンル、作業時間、本業勤務時間、収益依存度、睡眠、確定申告状況から、税務・burnout・収益不安定リスクをまとめて診断します。</p>
        </section>

        <section class="workspace" aria-label="副業リスク診断の計算">
          <form class="input-panel" id="sideRiskForm">
            <div class="field">
              <label for="sideRiskGenre">副業ジャンル</label>
              <select id="sideRiskGenre" name="sideRiskGenre">
                <option value="content">ブログ・SNS・コンテンツ制作</option>
                <option value="creative">動画編集・デザイン・制作</option>
                <option value="consulting">コンサル・講師・専門サービス</option>
                <option value="commerce">物販・せどり</option>
                <option value="investment">投資・配当・金融系</option>
                <option value="other">その他</option>
              </select>
            </div>
            <div class="field">
              <label for="sideRiskHours">副業時間 <span class="unit">時間 / 週</span></label>
              <input id="sideRiskHours" name="sideRiskHours" type="number" inputmode="decimal" min="0" max="168" step="0.5" value="12" required aria-describedby="sideRiskHoursError">
              <p class="error" id="sideRiskHoursError"></p>
            </div>
            <div class="field">
              <label for="sideRiskMainJobHours">本業勤務時間 <span class="unit">時間 / 平日</span></label>
              <input id="sideRiskMainJobHours" name="sideRiskMainJobHours" type="number" inputmode="decimal" min="0" max="24" step="0.5" value="9" required aria-describedby="sideRiskMainJobHoursError">
              <p class="error" id="sideRiskMainJobHoursError"></p>
            </div>
            <div class="field">
              <label for="sideRiskIncome">副業収入 <span class="unit">円 / 月</span></label>
              <input id="sideRiskIncome" name="sideRiskIncome" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="80000" required aria-describedby="sideRiskIncomeError">
              <p class="error" id="sideRiskIncomeError"></p>
            </div>
            <div class="field">
              <label for="sideRiskDependence">収益依存度 <span class="unit">%</span></label>
              <input id="sideRiskDependence" name="sideRiskDependence" type="number" inputmode="decimal" min="0" max="100" step="1" value="20" required aria-describedby="sideRiskDependenceError">
              <p class="error" id="sideRiskDependenceError"></p>
            </div>
            <label class="check-field" for="sideRiskAiUse">
              <input id="sideRiskAiUse" name="sideRiskAiUse" type="checkbox" checked>
              <span>AIを活用している</span>
            </label>
            <div class="field">
              <label for="sideRiskSleepHours">睡眠時間 <span class="unit">時間 / 日</span></label>
              <input id="sideRiskSleepHours" name="sideRiskSleepHours" type="number" inputmode="decimal" min="0" max="24" step="0.5" value="6.5" required aria-describedby="sideRiskSleepHoursError">
              <p class="error" id="sideRiskSleepHoursError"></p>
            </div>
            <label class="check-field" for="sideRiskTaxReturn">
              <input id="sideRiskTaxReturn" name="sideRiskTaxReturn" type="checkbox">
              <span>確定申告の準備ができている</span>
            </label>
            <label class="check-field" for="sideRiskOutsourcing">
              <input id="sideRiskOutsourcing" name="sideRiskOutsourcing" type="checkbox">
              <span>外注や分担を活用している</span>
            </label>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">副業リスクスコア</p>
              <p class="amount" id="sideRiskScore">0 / 100</p>
            </div>
            <p class="notice" id="sideRiskNotice">入力を確認してください。この診断は副業のリスクを整理するための簡易目安です。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>税務リスク</strong>
                <span class="accent-amber text-metric" id="sideRiskTaxRisk">未計算</span>
                <small>副業収入と確定申告準備から判定</small>
              </div>
              <div class="metric">
                <strong>burnoutリスク</strong>
                <span class="accent-amber text-metric" id="sideRiskBurnoutRisk">未計算</span>
                <small>本業、副業、睡眠時間の負荷</small>
              </div>
              <div class="metric">
                <strong>収益不安定リスク</strong>
                <span class="accent-blue text-metric" id="sideRiskIncomeRisk">未計算</span>
                <small>収益依存度とジャンル特性を反映</small>
              </div>
              <div class="metric">
                <strong>おすすめ改善ポイント</strong>
                <span class="accent-green text-metric" id="sideRiskImprovement">未計算</span>
                <small>最初に見直したい行動</small>
              </div>
              <div class="metric">
                <strong>副業時間管理への導線</strong>
                <span class="accent-blue text-metric" id="sideRiskTimeGuide">時間管理も確認</span>
                <small>本業後に使える時間を確認</small>
              </div>
              <div class="metric">
                <strong>副業利益率への導線</strong>
                <span class="accent-green text-metric" id="sideRiskProfitGuide">利益率も確認</span>
                <small>収益依存を下げるために利益率を確認</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="副業リスク診断FAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>副業リスクスコアは何を意味しますか？</summary>
              <p>税務、burnout、収益依存、作業時間の偏りをまとめた簡易スコアです。高いほど注意が必要ですが、医療・税務の専門診断ではありません。</p>
            </details>
            <details>
              <summary>確定申告をしていないと必ず危険ですか？</summary>
              <p>副業所得の金額や状況によって必要性は変わります。ただ、収入が継続している場合は早めに帳簿、経費、申告要否を確認しておく方が安全です。</p>
            </details>
            <details>
              <summary>burnoutリスクが高い場合はどうすればいいですか？</summary>
              <p>まず睡眠時間と休日を削りすぎていないか確認してください。作業量を増やすより、AI活用、外注、作業日の固定、低単価作業の見直しが優先です。</p>
            </details>
            <details>
              <summary>収益依存度はどう入力すればいいですか？</summary>
              <p>生活費や家計に対して、副業収入がどれくらい欠かせないかの感覚を%で入力してください。高いほど収益が止まったときの不安定リスクが上がります。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="副業リスク診断関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>リスクが高い項目は、時間管理、疲労度、利益率のツールで分解すると改善しやすくなります。</p>
          </section>
          <div class="related-links">
            <a href="#side-safety">会社員副業安全度診断</a>
            <a href="#side-fatigue">副業疲労度シミュレーター</a>
            <a href="#side-time-management">副業時間管理シミュレーター</a>
            <a href="#side-profit-margin">副業利益率シミュレーター</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="side-safety" aria-label="会社員副業安全度診断">
        <section class="tool-heading">
          <h2>会社員副業安全度診断</h2>
          <p>副業ジャンル、副業月収、本業勤務時間、普通徴収、確定申告、会社の副業規定、副業作業時間、AI活用、匿名性から、会社員として安全に副業を継続できるか診断します。</p>
        </section>

        <section class="workspace" aria-label="会社員副業安全度の診断">
          <form class="input-panel" id="sideSafetyForm">
            <div class="field">
              <label for="sideSafetyGenre">副業ジャンル</label>
              <select id="sideSafetyGenre" name="sideSafetyGenre">
                <option value="content">ブログ・SNS・コンテンツ制作</option>
                <option value="creative">動画編集・デザイン・制作</option>
                <option value="consulting">コンサル・講師・専門サービス</option>
                <option value="commerce">物販・せどり</option>
                <option value="investment">投資・配当・金融系</option>
                <option value="other">その他</option>
              </select>
            </div>
            <div class="field">
              <label for="sideSafetyIncome">副業月収 <span class="unit">円 / 月</span></label>
              <input id="sideSafetyIncome" name="sideSafetyIncome" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="80000" required aria-describedby="sideSafetyIncomeError">
              <p class="error" id="sideSafetyIncomeError"></p>
            </div>
            <div class="field">
              <label for="sideSafetyMainJobHours">本業勤務時間 <span class="unit">時間 / 平日</span></label>
              <input id="sideSafetyMainJobHours" name="sideSafetyMainJobHours" type="number" inputmode="decimal" min="0" max="24" step="0.5" value="9" required aria-describedby="sideSafetyMainJobHoursError">
              <p class="error" id="sideSafetyMainJobHoursError"></p>
            </div>
            <label class="check-field" for="sideSafetyResidentTax">
              <input id="sideSafetyResidentTax" name="sideSafetyResidentTax" type="checkbox" checked>
              <span>住民税の普通徴収を確認している</span>
            </label>
            <label class="check-field" for="sideSafetyTaxReturn">
              <input id="sideSafetyTaxReturn" name="sideSafetyTaxReturn" type="checkbox">
              <span>確定申告の準備ができている</span>
            </label>
            <div class="field">
              <label for="sideSafetyHours">副業作業時間 <span class="unit">時間 / 週</span></label>
              <input id="sideSafetyHours" name="sideSafetyHours" type="number" inputmode="decimal" min="0" max="168" step="0.5" value="12" required aria-describedby="sideSafetyHoursError">
              <p class="error" id="sideSafetyHoursError"></p>
            </div>
            <div class="field">
              <label for="sideSafetyRule">会社副業規定</label>
              <select id="sideSafetyRule" name="sideSafetyRule">
                <option value="allowed">許可・届出済み</option>
                <option value="conditional" selected>条件付き・要確認</option>
                <option value="unknown">未確認</option>
                <option value="prohibited">禁止・かなり厳しい</option>
              </select>
            </div>
            <label class="check-field" for="sideSafetyAiUse">
              <input id="sideSafetyAiUse" name="sideSafetyAiUse" type="checkbox" checked>
              <span>AIを活用して作業時間を短縮している</span>
            </label>
            <label class="check-field" for="sideSafetyAnonymous">
              <input id="sideSafetyAnonymous" name="sideSafetyAnonymous" type="checkbox" checked>
              <span>匿名性を保っている</span>
            </label>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">副業安全度スコア</p>
              <p class="amount" id="sideSafetyScore">0 / 100</p>
            </div>
            <p class="notice" id="sideSafetyNotice">入力を確認してください。この診断は会社規定や税務判断を代替するものではなく、副業を安全に続けるための簡易チェックです。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>会社バレリスク</strong>
                <span class="accent-amber text-metric" id="sideSafetyCompanyRisk">未計算</span>
                <small>会社規定、匿名性、普通徴収の確認状況</small>
              </div>
              <div class="metric">
                <strong>税務リスク</strong>
                <span class="accent-amber text-metric" id="sideSafetyTaxRisk">未計算</span>
                <small>副業月収、確定申告、住民税の確認状況</small>
              </div>
              <div class="metric">
                <strong>burnoutリスク</strong>
                <span class="accent-blue text-metric" id="sideSafetyBurnoutRisk">未計算</span>
                <small>本業勤務時間と副業作業時間の負荷</small>
              </div>
              <div class="metric">
                <strong>おすすめ改善ポイント</strong>
                <span class="accent-green text-metric" id="sideSafetyImprovement">未計算</span>
                <small>最初に整えたい安全対策</small>
              </div>
              <div class="metric">
                <strong>安全に継続する方法</strong>
                <span class="accent-blue text-metric" id="sideSafetyMethod">未計算</span>
                <small>会社員として副業を続けるための行動</small>
              </div>
              <div class="metric">
                <strong>関連ツール導線</strong>
                <span class="accent-green text-metric" id="sideSafetyRelatedTools">副業リスク、所得税、疲労度</span>
                <small>次に確認したいシミュレーター</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="会社員副業安全度診断FAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>普通徴収にすれば会社に絶対バレませんか？</summary>
              <p>絶対ではありません。自治体の処理、給与所得との扱い、会社規定、SNSや実名活動など、複数の要因があります。普通徴収の確認は大切ですが、匿名性や規定確認も合わせて見てください。</p>
            </details>
            <details>
              <summary>副業月収が少なくても確定申告は必要ですか？</summary>
              <p>副業所得や給与以外の所得状況によって変わります。売上ではなく所得、経費、控除で判断するため、収入が継続する場合は早めに帳簿を残し、申告要否を確認してください。</p>
            </details>
            <details>
              <summary>会社の副業規定はどこを見ればいいですか？</summary>
              <p>就業規則、兼業規定、秘密保持、競業避止、SNS発信、会社資産の利用禁止などを確認してください。判断に迷う場合は、無理に実名活動や同業領域へ踏み込まない方が安全です。</p>
            </details>
            <details>
              <summary>安全度が低い場合、まず何を直すべきですか？</summary>
              <p>会社規定の確認、税務準備、作業時間の圧縮の順で見直すのがおすすめです。特に本業が忙しい場合は、AI活用や作業時間の上限設定でburnoutリスクを下げてください。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="会社員副業安全度関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>安全度を確認したら、リスク、税金、疲労度を分けて見ると、どこから改善すべきか判断しやすくなります。</p>
          </section>
          <div class="related-links">
            <a href="#side-risk">副業リスク診断</a>
            <a href="#income-tax">副業所得税シミュレーター</a>
            <a href="#side-fatigue">副業疲労度シミュレーター</a>
            <a href="article-company-side-tax-saving.html">会社員の副業税金対策</a>
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

      <section class="view" data-view="incorporation" aria-label="副業法人化判断シミュレーター">
        <section class="tool-heading">
          <h2>副業法人化判断シミュレーター</h2>
          <p>副業利益、税率、法人維持費、社会保険増加額、役員報酬額から、個人事業と法人化のどちらが有利かを比較します。</p>
        </section>

        <section class="workspace" aria-label="副業法人化判断の計算">
          <form class="input-panel" id="incorporationForm">
            <div class="field">
              <label for="incorporationSales">年間副業売上 <span class="unit">円</span></label>
              <input id="incorporationSales" name="incorporationSales" type="number" inputmode="numeric" min="0" max="1000000000" step="100000" value="8000000" required aria-describedby="incorporationSalesError">
              <p class="error" id="incorporationSalesError"></p>
            </div>
            <div class="field">
              <label for="incorporationExpenses">年間経費 <span class="unit">円</span></label>
              <input id="incorporationExpenses" name="incorporationExpenses" type="number" inputmode="numeric" min="0" max="1000000000" step="100000" value="2000000" required aria-describedby="incorporationExpensesError">
              <p class="error" id="incorporationExpensesError"></p>
            </div>
            <div class="field">
              <label for="incorporationSalary">現在の給与年収 <span class="unit">円</span></label>
              <input id="incorporationSalary" name="incorporationSalary" type="number" inputmode="numeric" min="0" max="1000000000" step="100000" value="5000000" required aria-describedby="incorporationSalaryError">
              <p class="error" id="incorporationSalaryError"></p>
            </div>
            <div class="field">
              <label for="corporateMaintenanceCost">想定法人維持費 <span class="unit">円/年</span></label>
              <input id="corporateMaintenanceCost" name="corporateMaintenanceCost" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="700000" required aria-describedby="corporateMaintenanceCostError">
              <p class="error" id="corporateMaintenanceCostError"></p>
            </div>
            <div class="field">
              <label for="incorporationIncomeTaxRate">所得税率 <span class="unit">%</span></label>
              <input id="incorporationIncomeTaxRate" name="incorporationIncomeTaxRate" type="number" inputmode="decimal" min="0" max="60" step="0.1" value="20" required aria-describedby="incorporationIncomeTaxRateError">
              <p class="error" id="incorporationIncomeTaxRateError"></p>
            </div>
            <div class="field">
              <label for="corporateTaxRate">法人税率 <span class="unit">%</span></label>
              <input id="corporateTaxRate" name="corporateTaxRate" type="number" inputmode="decimal" min="0" max="60" step="0.1" value="23.2" required aria-describedby="corporateTaxRateError">
              <p class="error" id="corporateTaxRateError"></p>
            </div>
            <div class="field">
              <label for="socialInsuranceIncrease">社会保険増加額 <span class="unit">円/年</span></label>
              <input id="socialInsuranceIncrease" name="socialInsuranceIncrease" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="600000" required aria-describedby="socialInsuranceIncreaseError">
              <p class="error" id="socialInsuranceIncreaseError"></p>
            </div>
            <div class="field">
              <label for="executiveSalary">役員報酬額 <span class="unit">円/年</span></label>
              <input id="executiveSalary" name="executiveSalary" type="number" inputmode="numeric" min="0" max="1000000000" step="100000" value="3000000" required aria-describedby="executiveSalaryError">
              <p class="error" id="executiveSalaryError"></p>
            </div>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">節税差額</p>
              <p class="amount" id="incorporationTaxSaving">0円</p>
            </div>
            <p class="notice" id="incorporationNotice">入力を確認してください。法人化判断は税理士・社労士への相談前の概算です。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>個人事業時の手取り</strong>
                <span class="accent-blue" id="soleProprietorTakeHome">0円</span>
                <small>副業利益から所得税・住民税目安を差し引いた金額</small>
              </div>
              <div class="metric">
                <strong>法人化時の手取り</strong>
                <span class="accent-green" id="corporateTakeHome">0円</span>
                <small>役員報酬手取りと法人残利益の合計目安</small>
              </div>
              <div class="metric">
                <strong>法人化おすすめ目安</strong>
                <span class="accent-amber text-metric" id="incorporationRecommendation">未計算</span>
                <small>差額、利益規模、維持費から判定</small>
              </div>
              <div class="metric">
                <strong>法人維持コスト</strong>
                <span class="accent-blue" id="corporateCostResult">0円</span>
                <small>法人維持費と社会保険増加額の合計</small>
              </div>
              <div class="metric">
                <strong>おすすめ改善ポイント</strong>
                <span class="accent-green text-metric" id="incorporationImprovementPoint">未計算</span>
                <small>経費、役員報酬、会計管理の見直しポイント</small>
              </div>
              <div class="metric">
                <strong>会計ソフト比較記事への導線</strong>
                <span class="accent-blue text-metric" id="incorporationAccountingGuide">法人化前に会計管理を確認</span>
                <small>freee、マネーフォワード、弥生の比較記事へ</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="副業法人化判断シミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>副業はいくらから法人化を検討すべきですか？</summary>
              <p>明確な一律基準はありませんが、利益が継続して大きくなり、税率、社会保険、会計費用、法人住民税などを含めても手取りが増える段階で検討しやすくなります。このツールでは維持費を入れた差額を先に確認できます。</p>
            </details>
            <details>
              <summary>法人化すれば必ず節税になりますか？</summary>
              <p>必ず節税になるわけではありません。法人維持費、税理士費用、社会保険、役員報酬設計によっては個人事業のままの方が手取りが残ることもあります。</p>
            </details>
            <details>
              <summary>役員報酬はどう入力すればいいですか？</summary>
              <p>法人から自分に支払う年間報酬の目安を入力してください。役員報酬は税金や社会保険に影響するため、実際に決める場合は税理士や社労士に相談するのが安全です。</p>
            </details>
            <details>
              <summary>この結果だけで法人化を決めてもいいですか？</summary>
              <p>いいえ。このツールは概算比較です。消費税、インボイス、社会保険、法人住民税、会計処理、信用面なども関係するため、判断材料の入口として使ってください。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="副業法人化判断関連リンク">
          <section class="tool-heading">
            <h2>関連ツール・関連記事</h2>
            <p>法人化を考える前に、利益率、所得税、会計管理を合わせて確認すると判断しやすくなります。</p>
          </section>
          <div class="related-links">
            <a href="#income-tax">副業所得税シミュレーター</a>
            <a href="#side-profit-margin">副業利益率シミュレーター</a>
            <a href="article-accounting-software-comparison.html">副業向け会計ソフト比較</a>
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

      <section class="view" data-view="employee-tax-saving" aria-label="会社員節税シミュレーター">
        <section class="tool-heading">
          <h2>会社員節税シミュレーター</h2>
          <p>年収、扶養有無、iDeCo掛金、新NISA積立額、副業所得、ふるさと納税額、保険控除額、住宅ローン控除有無から、会社員が使いやすい節税額と資産形成への影響を試算します。</p>
        </section>

        <section class="workspace" aria-label="会社員節税の計算">
          <form class="input-panel" id="employeeTaxSavingForm">
            <div class="field">
              <label for="employeeTaxIncome">年収 <span class="unit">円</span></label>
              <input id="employeeTaxIncome" name="employeeTaxIncome" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="5000000" required aria-describedby="employeeTaxIncomeError">
              <p class="error" id="employeeTaxIncomeError"></p>
            </div>
            <div class="field checkbox-field">
              <label for="employeeTaxDependent">
                <input id="employeeTaxDependent" name="employeeTaxDependent" type="checkbox">
                扶養家族がいる
              </label>
            </div>
            <div class="field">
              <label for="employeeTaxIdeco">iDeCo掛金 <span class="unit">円/月</span></label>
              <input id="employeeTaxIdeco" name="employeeTaxIdeco" type="number" inputmode="numeric" min="0" max="68000" step="1000" value="23000" required aria-describedby="employeeTaxIdecoError">
              <p class="error" id="employeeTaxIdecoError"></p>
            </div>
            <div class="field">
              <label for="employeeTaxNisa">新NISA積立額 <span class="unit">円/月</span></label>
              <input id="employeeTaxNisa" name="employeeTaxNisa" type="number" inputmode="numeric" min="0" max="300000" step="1000" value="50000" required aria-describedby="employeeTaxNisaError">
              <p class="error" id="employeeTaxNisaError"></p>
            </div>
            <div class="field">
              <label for="employeeTaxSideIncome">副業所得 <span class="unit">円/年</span></label>
              <input id="employeeTaxSideIncome" name="employeeTaxSideIncome" type="number" inputmode="numeric" min="0" max="1000000000" step="10000" value="600000" required aria-describedby="employeeTaxSideIncomeError">
              <p class="error" id="employeeTaxSideIncomeError"></p>
            </div>
            <div class="field">
              <label for="employeeTaxFurusato">ふるさと納税額 <span class="unit">円/年</span></label>
              <input id="employeeTaxFurusato" name="employeeTaxFurusato" type="number" inputmode="numeric" min="0" max="10000000" step="1000" value="50000" required aria-describedby="employeeTaxFurusatoError">
              <p class="error" id="employeeTaxFurusatoError"></p>
            </div>
            <div class="field">
              <label for="employeeTaxInsurance">保険控除額 <span class="unit">円/年</span></label>
              <input id="employeeTaxInsurance" name="employeeTaxInsurance" type="number" inputmode="numeric" min="0" max="1000000" step="1000" value="40000" required aria-describedby="employeeTaxInsuranceError">
              <p class="error" id="employeeTaxInsuranceError"></p>
            </div>
            <div class="field checkbox-field">
              <label for="employeeTaxMortgage">
                <input id="employeeTaxMortgage" name="employeeTaxMortgage" type="checkbox">
                住宅ローン控除を利用している
              </label>
            </div>
            <div class="actions">
              <button type="reset">&#x30ea;&#x30bb;&#x30c3;&#x30c8;</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">節税可能額</p>
              <p class="amount" id="employeeTaxSavingTotal">0円</p>
            </div>
            <p class="notice" id="employeeTaxSavingNotice">入力を確認してください。エラーがある項目は赤く表示されます。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>所得税軽減額</strong>
                <span class="accent-amber" id="employeeTaxIncomeReduction">0円</span>
                <small>iDeCo、保険控除、住宅ローン控除の概算効果</small>
              </div>
              <div class="metric">
                <strong>住民税軽減額</strong>
                <span class="accent-amber" id="employeeTaxResidentReduction">0円</span>
                <small>控除、ふるさと納税、住宅ローン控除の概算効果</small>
              </div>
              <div class="metric">
                <strong>おすすめ節税方法</strong>
                <span class="accent-green text-metric" id="employeeTaxRecommendation">未計算</span>
                <small>入力条件から優先度の高い見直しを表示</small>
              </div>
              <div class="metric">
                <strong>iDeCo活用効果</strong>
                <span class="accent-blue" id="employeeTaxIdecoEffect">0円</span>
                <small>年間掛金による所得税・住民税の軽減目安</small>
              </div>
              <div class="metric">
                <strong>ふるさと納税目安</strong>
                <span class="accent-blue text-metric" id="employeeTaxFurusatoGuide">未計算</span>
                <small>年収と副業所得から見た簡易上限の目安</small>
              </div>
              <div class="metric">
                <strong>FIRE達成への影響</strong>
                <span class="accent-green text-metric" id="employeeTaxFireImpact">未計算</span>
                <small>節税分と新NISA積立を資産形成に回す効果</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="会社員節税シミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>会社員でも節税できる方法はありますか？</summary>
              <p>iDeCo、ふるさと納税、生命保険料控除、住宅ローン控除などは会社員でも使いやすい制度です。ただし、使える金額や効果は年収、家族構成、他の控除によって変わります。</p>
            </details>
            <details>
              <summary>新NISAは節税になりますか？</summary>
              <p>新NISAの積立額は所得控除にはなりません。ただし、運用益が非課税になるため、長期投資やFIREを目指す場合の資産形成効果として考えるのが自然です。</p>
            </details>
            <details>
              <summary>副業所得がある場合はどう見ればいいですか？</summary>
              <p>副業所得が増えると所得税や住民税も増えやすくなります。節税額だけでなく、副業所得税シミュレーターで納税額も確認しておくと、手元に残る金額を把握しやすくなります。</p>
            </details>
            <details>
              <summary>ふるさと納税は上限まで使うべきですか？</summary>
              <p>上限の目安はありますが、住宅ローン控除や医療費控除など他の控除があると変わることがあります。まずは控えめに見積もり、正確な上限は自治体や公式シミュレーターでも確認してください。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="会社員節税関連リンク">
          <section class="tool-heading">
            <h2>関連ツール・関連記事</h2>
            <p>会社員の節税は、控除、納税額、固定費の見直しをセットで見ると行動に移しやすくなります。</p>
          </section>
          <div class="related-links">
            <a href="#ideco">iDeCo節税シミュレーター</a>
            <a href="#income-tax">副業所得税シミュレーター</a>
            <a href="#fixed-cost-reduction">固定費削減シミュレーター</a>
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
            <a href="#side-safety">会社員副業安全度診断</a>
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

      <section class="view" data-view="investment-risk" aria-label="投資リスク許容度診断">
        <section class="tool-heading">
          <h2>投資リスク許容度診断</h2>
          <p>年齢、年収、総資産、投資経験年数、投資額、投資目的、暴落時の行動、FIRE希望、副業収入から、会社員に合う投資スタイルと資産配分を診断します。</p>
        </section>

        <section class="workspace" aria-label="投資リスク許容度の診断">
          <form class="input-panel" id="investmentRiskForm">
            <div class="field">
              <label for="investmentRiskAge">年齢 <span class="unit">歳</span></label>
              <input id="investmentRiskAge" name="investmentRiskAge" type="number" inputmode="numeric" min="18" max="100" step="1" value="31" required aria-describedby="investmentRiskAgeError">
              <p class="error" id="investmentRiskAgeError"></p>
            </div>
            <div class="field">
              <label for="investmentRiskIncome">年収 <span class="unit">円</span></label>
              <input id="investmentRiskIncome" name="investmentRiskIncome" type="number" inputmode="numeric" min="0" max="1000000000" step="100000" value="5000000" required aria-describedby="investmentRiskIncomeError">
              <p class="error" id="investmentRiskIncomeError"></p>
            </div>
            <div class="field">
              <label for="investmentRiskAssets">総資産 <span class="unit">円</span></label>
              <input id="investmentRiskAssets" name="investmentRiskAssets" type="number" inputmode="numeric" min="0" max="10000000000" step="100000" value="3000000" required aria-describedby="investmentRiskAssetsError">
              <p class="error" id="investmentRiskAssetsError"></p>
            </div>
            <div class="field">
              <label for="investmentRiskExperience">投資経験年数 <span class="unit">年</span></label>
              <input id="investmentRiskExperience" name="investmentRiskExperience" type="number" inputmode="decimal" min="0" max="80" step="0.5" value="3" required aria-describedby="investmentRiskExperienceError">
              <p class="error" id="investmentRiskExperienceError"></p>
            </div>
            <div class="field">
              <label for="investmentRiskAmount">投資額 <span class="unit">円</span></label>
              <input id="investmentRiskAmount" name="investmentRiskAmount" type="number" inputmode="numeric" min="0" max="10000000000" step="100000" value="1500000" required aria-describedby="investmentRiskAmountError">
              <p class="error" id="investmentRiskAmountError"></p>
            </div>
            <div class="field">
              <label for="investmentRiskPurpose">投資目的</label>
              <select id="investmentRiskPurpose" name="investmentRiskPurpose">
                <option value="growth">長期資産形成</option>
                <option value="fire" selected>FIRE・経済的自由</option>
                <option value="dividend">配当収入づくり</option>
                <option value="retirement">老後資金</option>
                <option value="short">短期利益</option>
              </select>
            </div>
            <div class="field">
              <label for="investmentRiskCrashAction">暴落時の行動</label>
              <select id="investmentRiskCrashAction" name="investmentRiskCrashAction">
                <option value="buy">追加投資する</option>
                <option value="hold" selected>売らずに保有する</option>
                <option value="partial">一部売却する</option>
                <option value="sell">かなり不安で売却しそう</option>
              </select>
            </div>
            <label class="check-field" for="investmentRiskFire">
              <input id="investmentRiskFire" name="investmentRiskFire" type="checkbox" checked>
              <span>FIREを目指している</span>
            </label>
            <label class="check-field" for="investmentRiskSideIncome">
              <input id="investmentRiskSideIncome" name="investmentRiskSideIncome" type="checkbox" checked>
              <span>副業収入がある</span>
            </label>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">リスク許容度スコア</p>
              <p class="amount" id="investmentRiskScore">0 / 100</p>
            </div>
            <p class="notice" id="investmentRiskNotice">入力を確認してください。この診断は投資助言ではなく、年齢・資産・経験・暴落耐性から投資スタイルを整理する簡易目安です。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>おすすめ資産配分</strong>
                <span class="accent-green text-metric" id="investmentRiskAllocation">未計算</span>
                <small>現金、インデックス、高配当、その他の目安</small>
              </div>
              <div class="metric">
                <strong>おすすめ投資スタイル</strong>
                <span class="accent-blue text-metric" id="investmentRiskStyle">未計算</span>
                <small>積立、配当、分散、守りの比率</small>
              </div>
              <div class="metric">
                <strong>高配当株向きか</strong>
                <span class="accent-amber text-metric" id="investmentRiskDividendFit">未計算</span>
                <small>配当収入と暴落耐性の相性</small>
              </div>
              <div class="metric">
                <strong>インデックス投資向きか</strong>
                <span class="accent-green text-metric" id="investmentRiskIndexFit">未計算</span>
                <small>長期積立と分散投資の相性</small>
              </div>
              <div class="metric">
                <strong>FIRE適性</strong>
                <span class="accent-blue text-metric" id="investmentRiskFireFit">未計算</span>
                <small>FIRE目標と投資リスクのバランス</small>
              </div>
              <div class="metric">
                <strong>おすすめ改善ポイント</strong>
                <span class="accent-amber text-metric" id="investmentRiskImprovement">未計算</span>
                <small>最初に整えたい行動</small>
              </div>
              <div class="metric">
                <strong>関連ツール導線</strong>
                <span class="accent-green text-metric" id="investmentRiskRelatedTools">高配当株、配当ETF、FIRE達成率</span>
                <small>次に確認したいシミュレーター</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="投資リスク許容度診断FAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>リスク許容度スコアが高いほど良いですか？</summary>
              <p>高ければ良いというより、値動きに耐えられる範囲を知るための目安です。スコアが高くても生活防衛資金が少ない場合は、投資額を増やす前に現金を厚くしてください。</p>
            </details>
            <details>
              <summary>高配当株とインデックス投資はどちらを選ぶべきですか？</summary>
              <p>長期の資産形成を重視するならインデックス投資、配当収入による心理的な安心感を重視するなら高配当株や配当ETFも候補になります。どちらか一方ではなく、目的別に組み合わせるのが現実的です。</p>
            </details>
            <details>
              <summary>暴落時の行動はどう入力すればいいですか？</summary>
              <p>過去に大きな下落を経験していない場合は、少し保守的に入力してください。本業が忙しい時期や生活費不安があると、想像以上に売りたくなることがあります。</p>
            </details>
            <details>
              <summary>FIREを目指すならリスクを高めるべきですか？</summary>
              <p>FIREを急ぐほどリスクを上げたくなりますが、途中で売却してしまうと逆効果です。副業収入、固定費削減、積立継続を組み合わせ、続けられる範囲のリスクに抑えることが大切です。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="投資リスク許容度関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>リスク許容度を確認したら、高配当株、配当ETF、FIRE達成率を合わせて見ると、投資スタイルを具体的な行動に落とし込みやすくなります。</p>
          </section>
          <div class="related-links">
            <a href="#dividend-stock">高配当株比較シミュレーター</a>
            <a href="#dividend-etf">配当ETF比較シミュレーター</a>
            <a href="#fire-rate">FIRE達成率シミュレーター</a>
            <a href="#dividend-mental">配当メンタル安定度診断</a>
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

      <section class="view" data-view="nisa-fast" aria-label="新NISA最速積立シミュレーター">
        <section class="tool-heading">
          <h2>新NISA最速積立シミュレーター</h2>
          <p>現在年齢、毎月積立額、ボーナス積立額、想定年利、運用年数、配当再投資有無、新NISA成長投資枠利用有無から、新NISAで最速資産形成した場合の成長速度を試算します。</p>
        </section>

        <section class="workspace" aria-label="新NISA最速積立の計算">
          <form class="input-panel" id="nisaFastForm">
            <div class="field">
              <label for="nisaFastAge">現在年齢 <span class="unit">歳</span></label>
              <input id="nisaFastAge" name="nisaFastAge" type="number" inputmode="numeric" min="0" max="100" step="1" value="31" required aria-describedby="nisaFastAgeError">
              <p class="error" id="nisaFastAgeError"></p>
            </div>
            <div class="field">
              <label for="nisaFastMonthly">毎月積立額 <span class="unit">円 / 月</span></label>
              <input id="nisaFastMonthly" name="nisaFastMonthly" type="number" inputmode="numeric" min="0" max="300000" step="10000" value="100000" required aria-describedby="nisaFastMonthlyError">
              <p class="error" id="nisaFastMonthlyError"></p>
            </div>
            <div class="field">
              <label for="nisaFastBonus">ボーナス積立額 <span class="unit">円 / 年</span></label>
              <input id="nisaFastBonus" name="nisaFastBonus" type="number" inputmode="numeric" min="0" max="2400000" step="10000" value="1200000" required aria-describedby="nisaFastBonusError">
              <p class="error" id="nisaFastBonusError"></p>
            </div>
            <div class="field">
              <label for="nisaFastReturn">想定年利 <span class="unit">%</span></label>
              <input id="nisaFastReturn" name="nisaFastReturn" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="5" required aria-describedby="nisaFastReturnError">
              <p class="error" id="nisaFastReturnError"></p>
            </div>
            <div class="field">
              <label for="nisaFastYears">運用年数 <span class="unit">年</span></label>
              <input id="nisaFastYears" name="nisaFastYears" type="number" inputmode="numeric" min="1" max="100" step="1" value="15" required aria-describedby="nisaFastYearsError">
              <p class="error" id="nisaFastYearsError"></p>
            </div>
            <label class="check-field" for="nisaFastDividendReinvest">
              <input id="nisaFastDividendReinvest" name="nisaFastDividendReinvest" type="checkbox" checked>
              <span>配当を再投資する</span>
            </label>
            <label class="check-field" for="nisaFastGrowthFrame">
              <input id="nisaFastGrowthFrame" name="nisaFastGrowthFrame" type="checkbox" checked>
              <span>新NISA成長投資枠も利用する</span>
            </label>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">最終資産額</p>
              <p class="amount" id="nisaFastFinalAssets">0円</p>
            </div>
            <p class="notice" id="nisaFastNotice">入力を確認してください。新NISAの制度上限、利回り、配当は将来の成果を保証するものではありません。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>年間資産増加額</strong>
                <span class="accent-blue" id="nisaFastAnnualIncrease">0円</span>
                <small>最終資産額を運用年数で割った平均</small>
              </div>
              <div class="metric">
                <strong>複利効果</strong>
                <span class="accent-green" id="nisaFastCompoundEffect">0円</span>
                <small>最終資産額 - 投資元本</small>
              </div>
              <div class="metric">
                <strong>FIRE達成への影響</strong>
                <span class="accent-amber text-metric" id="nisaFastFireImpact">未計算</span>
                <small>FIRE目標3,000万円に対する到達度</small>
              </div>
              <div class="metric">
                <strong>配当収入予測</strong>
                <span class="accent-green" id="nisaFastDividendIncome">0円</span>
                <small>最終資産額 × 3.5%の簡易目安</small>
              </div>
              <div class="metric">
                <strong>目標資産達成年齢</strong>
                <span class="accent-blue" id="nisaFastTargetAge">未計算</span>
                <small>3,000万円到達時の年齢目安</small>
              </div>
              <div class="metric">
                <strong>おすすめ改善ポイント</strong>
                <span class="accent-amber text-metric" id="nisaFastImprovement">未計算</span>
                <small>積立額、枠利用、配当再投資の見直し</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="新NISA最速積立シミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>新NISAで最速積立するとはどういう意味ですか？</summary>
              <p>毎月積立に加えてボーナス積立や成長投資枠も使い、年間投資枠をできるだけ早く使う前提で資産形成ペースを確認する考え方です。家計に無理がない範囲で試算してください。</p>
            </details>
            <details>
              <summary>毎月積立額はいくらまで入力できますか？</summary>
              <p>このツールではつみたて投資枠の月10万円を基準にしつつ、成長投資枠を使う場合のボーナス積立も合わせて年間360万円までを目安に見ます。</p>
            </details>
            <details>
              <summary>配当再投資を選ぶと何が変わりますか？</summary>
              <p>配当を使わず再投資する前提で、複利効果を少し強めに見ます。FIRE前の資産形成では、配当を受け取るより再投資した方が資産成長を優先しやすくなります。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="新NISA最速積立関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>新NISAの最速積立は、通常の新NISA試算、配当再投資、FIRE必要資産と合わせて見ると判断しやすくなります。</p>
          </section>
          <div class="related-links">
            <a href="#nisa">新NISAシミュレーター</a>
            <a href="#dividend-reinvestment">配当再投資シミュレーター</a>
            <a href="#fire">FIRE達成シミュレーター</a>
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

      <section class="view" data-view="fire-rate" aria-label="FIRE達成率シミュレーター">
        <section class="tool-heading">
          <h2>FIRE達成率シミュレーター</h2>
          <p>現在年齢、目標FIRE年齢、現在資産、毎月積立額、副業収入、年間生活費、想定年利、配当収入、負債有無から、FIRE達成可能性をスコア化します。</p>
        </section>

        <section class="workspace" aria-label="FIRE達成率の計算">
          <form class="input-panel" id="fireRateForm">
            <div class="field">
              <label for="fireRateAge">現在年齢 <span class="unit">歳</span></label>
              <input id="fireRateAge" name="fireRateAge" type="number" inputmode="numeric" min="0" max="100" step="1" value="31" required aria-describedby="fireRateAgeError">
              <p class="error" id="fireRateAgeError"></p>
            </div>
            <div class="field">
              <label for="fireRateTargetAge">目標FIRE年齢 <span class="unit">歳</span></label>
              <input id="fireRateTargetAge" name="fireRateTargetAge" type="number" inputmode="numeric" min="1" max="100" step="1" value="40" required aria-describedby="fireRateTargetAgeError">
              <p class="error" id="fireRateTargetAgeError"></p>
            </div>
            <div class="field">
              <label for="fireRateAssets">現在資産 <span class="unit">円</span></label>
              <input id="fireRateAssets" name="fireRateAssets" type="number" inputmode="numeric" min="0" max="10000000000" step="10000" value="5000000" required aria-describedby="fireRateAssetsError">
              <p class="error" id="fireRateAssetsError"></p>
            </div>
            <div class="field">
              <label for="fireRateMonthlyInvestment">毎月積立額 <span class="unit">円 / 月</span></label>
              <input id="fireRateMonthlyInvestment" name="fireRateMonthlyInvestment" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="100000" required aria-describedby="fireRateMonthlyInvestmentError">
              <p class="error" id="fireRateMonthlyInvestmentError"></p>
            </div>
            <div class="field">
              <label for="fireRateSideIncome">副業収入 <span class="unit">円 / 月</span></label>
              <input id="fireRateSideIncome" name="fireRateSideIncome" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="50000" required aria-describedby="fireRateSideIncomeError">
              <p class="error" id="fireRateSideIncomeError"></p>
            </div>
            <div class="field">
              <label for="fireRateAnnualLivingCost">年間生活費 <span class="unit">円 / 年</span></label>
              <input id="fireRateAnnualLivingCost" name="fireRateAnnualLivingCost" type="number" inputmode="numeric" min="1" max="1000000000" step="10000" value="3000000" required aria-describedby="fireRateAnnualLivingCostError">
              <p class="error" id="fireRateAnnualLivingCostError"></p>
            </div>
            <div class="field">
              <label for="fireRateReturn">想定年利 <span class="unit">%</span></label>
              <input id="fireRateReturn" name="fireRateReturn" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="5" required aria-describedby="fireRateReturnError">
              <p class="error" id="fireRateReturnError"></p>
            </div>
            <div class="field">
              <label for="fireRateDividendIncome">配当収入 <span class="unit">円 / 月</span></label>
              <input id="fireRateDividendIncome" name="fireRateDividendIncome" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="30000" required aria-describedby="fireRateDividendIncomeError">
              <p class="error" id="fireRateDividendIncomeError"></p>
            </div>
            <label class="checkbox-field" for="fireRateDebt">
              <input id="fireRateDebt" name="fireRateDebt" type="checkbox">
              <span>住宅ローンやカードローンなど、返済中の負債がある</span>
            </label>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">FIRE達成率スコア</p>
              <p class="amount" id="fireRateScore">0点</p>
            </div>
            <p class="notice" id="fireRateNotice">入力を確認してください。負債がある場合は返済計画と生活防衛資金も合わせて確認しましょう。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>達成予想年齢</strong>
                <span class="accent-green" id="fireRateAchieveAge">0歳</span>
                <small>現在資産と毎月積立で目標資産へ到達する年齢</small>
              </div>
              <div class="metric">
                <strong>不足資産額</strong>
                <span class="accent-amber" id="fireRateShortage">0円</span>
                <small>目標FIRE年齢時点で足りない資産額</small>
              </div>
              <div class="metric">
                <strong>改善推奨ポイント</strong>
                <span class="accent-blue text-metric" id="fireRateImprovement">入力待ち</span>
                <small>スコアを上げるための優先行動</small>
              </div>
              <div class="metric">
                <strong>副業による改善効果</strong>
                <span class="accent-green text-metric" id="fireRateSideIncomeEffect">0年</span>
                <small>副業収入を積立へ回した場合の短縮目安</small>
              </div>
              <div class="metric">
                <strong>配当再投資効果</strong>
                <span class="accent-amber text-metric" id="fireRateDividendEffect">0円</span>
                <small>配当収入を再投資した場合の上乗せ目安</small>
              </div>
              <div class="metric">
                <strong>おすすめ関連ツール</strong>
                <span class="accent-blue text-metric" id="fireRateRelatedTools">FIRE達成、サイドFIRE、配当生活達成</span>
                <small>次に確認したいシミュレーター</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="FIRE達成率FAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>FIRE達成率スコアは何を表していますか？</summary>
              <p>現在資産、目標年齢までの積立、想定年利、副業収入、配当収入、年間生活費から、目標FIRE年齢にどれくらい近いかを100点満点で示しています。投資成果を保証するものではなく、行動の優先順位を決める目安です。</p>
            </details>
            <details>
              <summary>負債があるとスコアは下がりますか？</summary>
              <p>返済中の負債がある場合は、FIRE後の固定支出やリスクが大きくなりやすいため、スコアに控えめなペナルティを入れています。住宅ローンなど目的のある負債も、返済比率と生活防衛資金を合わせて確認してください。</p>
            </details>
            <details>
              <summary>副業収入はすべて積立に回す前提ですか？</summary>
              <p>このシミュレーターでは、副業収入をFIREに向けた積立余力として扱っています。実際には税金、経費、生活費、休息時間も必要なので、副業手取りや副業税金シミュレーターと合わせて見るのがおすすめです。</p>
            </details>
            <details>
              <summary>配当収入は受け取りと再投資のどちらがよいですか？</summary>
              <p>FIRE前は再投資すると資産成長に回しやすく、FIRE後は生活費の補助として受け取る選択肢もあります。配当生活達成シミュレーターや配当再投資シミュレーターで、受け取りと再投資の差を比べてください。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="FIRE達成率関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>スコアだけで判断せず、FIRE達成年数、FIRE後のストレス、サイドFIRE、配当生活の必要資産も合わせて確認できます。</p>
          </section>
          <div class="related-links">
            <a href="#investment-risk">投資リスク許容度診断</a>
            <a href="#fire">FIRE達成シミュレーター</a>
            <a href="#fire-cost-optimization">FIRE生活費最適化シミュレーター</a>
            <a href="#fire-stress">FIREストレス診断</a>
            <a href="#side-fire">サイドFIREシミュレーター</a>
            <a href="#dividend-life">配当生活達成シミュレーター</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="fire-cost-optimization" aria-label="FIRE生活費最適化シミュレーター">
        <section class="tool-heading">
          <h2>FIRE生活費最適化シミュレーター</h2>
          <p>現在年齢、目標FIRE年齢、現在資産、毎月生活費、削減可能生活費、毎月投資額、副業収入、想定年利、配当収入から、生活費の最適化でFIRE達成時期がどれだけ短縮されるかを分析します。</p>
        </section>

        <section class="workspace" aria-label="FIRE生活費最適化の計算">
          <form class="input-panel" id="fireCostForm">
            <div class="field">
              <label for="fireCostAge">現在年齢 <span class="unit">歳</span></label>
              <input id="fireCostAge" name="fireCostAge" type="number" inputmode="numeric" min="0" max="100" step="1" value="31" required aria-describedby="fireCostAgeError">
              <p class="error" id="fireCostAgeError"></p>
            </div>
            <div class="field">
              <label for="fireCostTargetAge">目標FIRE年齢 <span class="unit">歳</span></label>
              <input id="fireCostTargetAge" name="fireCostTargetAge" type="number" inputmode="numeric" min="1" max="100" step="1" value="40" required aria-describedby="fireCostTargetAgeError">
              <p class="error" id="fireCostTargetAgeError"></p>
            </div>
            <div class="field">
              <label for="fireCostAssets">現在資産 <span class="unit">円</span></label>
              <input id="fireCostAssets" name="fireCostAssets" type="number" inputmode="numeric" min="0" max="10000000000" step="100000" value="5000000" required aria-describedby="fireCostAssetsError">
              <p class="error" id="fireCostAssetsError"></p>
            </div>
            <div class="field">
              <label for="fireCostMonthlyCost">毎月生活費 <span class="unit">円 / 月</span></label>
              <input id="fireCostMonthlyCost" name="fireCostMonthlyCost" type="number" inputmode="numeric" min="1" max="100000000" step="10000" value="250000" required aria-describedby="fireCostMonthlyCostError">
              <p class="error" id="fireCostMonthlyCostError"></p>
            </div>
            <div class="field">
              <label for="fireCostReducibleCost">削減可能生活費 <span class="unit">円 / 月</span></label>
              <input id="fireCostReducibleCost" name="fireCostReducibleCost" type="number" inputmode="numeric" min="0" max="100000000" step="5000" value="30000" required aria-describedby="fireCostReducibleCostError">
              <p class="error" id="fireCostReducibleCostError"></p>
            </div>
            <div class="field">
              <label for="fireCostMonthlyInvestment">毎月投資額 <span class="unit">円 / 月</span></label>
              <input id="fireCostMonthlyInvestment" name="fireCostMonthlyInvestment" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="100000" required aria-describedby="fireCostMonthlyInvestmentError">
              <p class="error" id="fireCostMonthlyInvestmentError"></p>
            </div>
            <div class="field">
              <label for="fireCostSideIncome">副業収入 <span class="unit">円 / 月</span></label>
              <input id="fireCostSideIncome" name="fireCostSideIncome" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="50000" required aria-describedby="fireCostSideIncomeError">
              <p class="error" id="fireCostSideIncomeError"></p>
            </div>
            <div class="field">
              <label for="fireCostReturn">想定年利 <span class="unit">%</span></label>
              <input id="fireCostReturn" name="fireCostReturn" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="5" required aria-describedby="fireCostReturnError">
              <p class="error" id="fireCostReturnError"></p>
            </div>
            <div class="field">
              <label for="fireCostDividendIncome">配当収入 <span class="unit">円 / 月</span></label>
              <input id="fireCostDividendIncome" name="fireCostDividendIncome" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="30000" required aria-describedby="fireCostDividendIncomeError">
              <p class="error" id="fireCostDividendIncomeError"></p>
            </div>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">FIRE必要資産</p>
              <p class="amount" id="fireCostRequiredAssets">0円</p>
            </div>
            <p class="notice" id="fireCostNotice">入力を確認してください。生活費を削りすぎると継続しにくいため、無理のない削減額で試算してください。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>生活費削減効果</strong>
                <span class="accent-green" id="fireCostReductionEffect">0円</span>
                <small>削減後の生活費で下がる必要資産の目安</small>
              </div>
              <div class="metric">
                <strong>FIRE達成短縮年数</strong>
                <span class="accent-blue" id="fireCostShorteningYears">0年</span>
                <small>生活費削減と追加投資を合わせた短縮目安</small>
              </div>
              <div class="metric">
                <strong>追加投資効果</strong>
                <span class="accent-amber" id="fireCostAdditionalInvestmentEffect">0円</span>
                <small>削減額を目標年齢まで投資した場合の上乗せ</small>
              </div>
              <div class="metric">
                <strong>副業収入効果</strong>
                <span class="accent-green text-metric" id="fireCostSideIncomeEffect">0年</span>
                <small>副業収入を投資へ回した場合の短縮目安</small>
              </div>
              <div class="metric">
                <strong>おすすめ改善ポイント</strong>
                <span class="accent-blue text-metric" id="fireCostImprovement">入力を確認してください</span>
                <small>生活費、投資、副業、配当の優先順位</small>
              </div>
              <div class="metric">
                <strong>関連ツール導線</strong>
                <span class="accent-amber text-metric" id="fireCostRelatedTools">FIRE達成率、固定費削減、生活コスト最適化</span>
                <small>次に確認したいシミュレーター</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="FIRE生活費最適化FAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>生活費を下げるとFIRE必要資産も下がりますか？</summary>
              <p>下がります。FIREでは年間生活費の25年分を目安にすることが多いため、毎月3万円の削減でも年間36万円、必要資産では約900万円の差になることがあります。</p>
            </details>
            <details>
              <summary>削減した生活費はすべて投資に回す前提ですか？</summary>
              <p>このシミュレーターでは、削減額を追加投資に回した場合の効果も表示します。ただし生活防衛資金が不足している場合は、先に現金の安全資金を整えるのがおすすめです。</p>
            </details>
            <details>
              <summary>副業収入と固定費削減はどちらを優先すべきですか？</summary>
              <p>本業が忙しい会社員は、まず固定費削減で毎月の支出を下げると効果が続きます。そのうえで副業収入を積み上げると、FIRE達成時期を短縮しやすくなります。</p>
            </details>
            <details>
              <summary>生活費を削りすぎるリスクはありますか？</summary>
              <p>あります。無理な節約は継続できず、反動で支出が増えることもあります。通信費、保険、サブスクなど一度見直すと負担が少ない項目から始めるのが現実的です。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="FIRE生活費最適化関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>生活費を整えたら、FIRE達成率、固定費削減、生活コスト、キャッシュフローを合わせて確認すると、改善順が決めやすくなります。</p>
          </section>
          <div class="related-links">
            <a href="#fire-rate">FIRE達成率シミュレーター</a>
            <a href="#fixed-cost-reduction">固定費削減シミュレーター</a>
            <a href="#life-cost">生活コスト最適化シミュレーター</a>
            <a href="#cash-flow">会社員キャッシュフローシミュレーター</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="fire-stress" aria-label="FIREストレス診断">
        <section class="tool-heading">
          <h2>FIREストレス診断</h2>
          <p>現在年齢、現在資産、生活費、副業収入、配当収入、仕事ストレス度、孤独耐性、FIRE希望年齢、趣味の有無から、FIRE後のストレスリスクを診断します。</p>
        </section>

        <section class="workspace" aria-label="FIREストレスの診断">
          <form class="input-panel" id="fireStressForm">
            <div class="field">
              <label for="fireStressAge">現在年齢 <span class="unit">歳</span></label>
              <input id="fireStressAge" name="fireStressAge" type="number" inputmode="numeric" min="0" max="100" step="1" value="31" required aria-describedby="fireStressAgeError">
              <p class="error" id="fireStressAgeError"></p>
            </div>
            <div class="field">
              <label for="fireStressAssets">現在資産 <span class="unit">円</span></label>
              <input id="fireStressAssets" name="fireStressAssets" type="number" inputmode="numeric" min="0" max="10000000000" step="10000" value="5000000" required aria-describedby="fireStressAssetsError">
              <p class="error" id="fireStressAssetsError"></p>
            </div>
            <div class="field">
              <label for="fireStressMonthlyCost">毎月生活費 <span class="unit">円 / 月</span></label>
              <input id="fireStressMonthlyCost" name="fireStressMonthlyCost" type="number" inputmode="numeric" min="1" max="100000000" step="10000" value="250000" required aria-describedby="fireStressMonthlyCostError">
              <p class="error" id="fireStressMonthlyCostError"></p>
            </div>
            <div class="field">
              <label for="fireStressSideIncome">副業収入 <span class="unit">円 / 月</span></label>
              <input id="fireStressSideIncome" name="fireStressSideIncome" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="50000" required aria-describedby="fireStressSideIncomeError">
              <p class="error" id="fireStressSideIncomeError"></p>
            </div>
            <div class="field">
              <label for="fireStressDividendIncome">配当収入 <span class="unit">円 / 月</span></label>
              <input id="fireStressDividendIncome" name="fireStressDividendIncome" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="30000" required aria-describedby="fireStressDividendIncomeError">
              <p class="error" id="fireStressDividendIncomeError"></p>
            </div>
            <div class="field">
              <label for="fireStressWorkStress">仕事ストレス度 <span class="unit">1〜10</span></label>
              <input id="fireStressWorkStress" name="fireStressWorkStress" type="number" inputmode="numeric" min="1" max="10" step="1" value="8" required aria-describedby="fireStressWorkStressError">
              <p class="error" id="fireStressWorkStressError"></p>
            </div>
            <div class="field">
              <label for="fireStressSolitudeTolerance">孤独耐性 <span class="unit">1〜10</span></label>
              <input id="fireStressSolitudeTolerance" name="fireStressSolitudeTolerance" type="number" inputmode="numeric" min="1" max="10" step="1" value="6" required aria-describedby="fireStressSolitudeToleranceError">
              <p class="error" id="fireStressSolitudeToleranceError"></p>
            </div>
            <div class="field">
              <label for="fireStressTargetAge">FIRE希望年齢 <span class="unit">歳</span></label>
              <input id="fireStressTargetAge" name="fireStressTargetAge" type="number" inputmode="numeric" min="1" max="100" step="1" value="40" required aria-describedby="fireStressTargetAgeError">
              <p class="error" id="fireStressTargetAgeError"></p>
            </div>
            <label class="checkbox-field" for="fireStressHasHobby">
              <input id="fireStressHasHobby" name="fireStressHasHobby" type="checkbox" checked>
              <span>FIRE後も続けたい趣味や活動がある</span>
            </label>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">FIREストレススコア</p>
              <p class="amount" id="fireStressScore">0点</p>
            </div>
            <p class="notice" id="fireStressNotice">入力を確認してください。FIRE後の安心感は資産額だけでなく、収入源、生活費、人とのつながりにも左右されます。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>収入不安リスク</strong>
                <span class="accent-amber text-metric" id="fireStressIncomeRisk">入力待ち</span>
                <small>生活費を副業・配当・資産でどれだけ支えられるか</small>
              </div>
              <div class="metric">
                <strong>孤独リスク</strong>
                <span class="accent-blue text-metric" id="fireStressSolitudeRisk">入力待ち</span>
                <small>退職後の時間と人との接点に関する目安</small>
              </div>
              <div class="metric">
                <strong>生活満足度予測</strong>
                <span class="accent-green text-metric" id="fireStressSatisfaction">入力待ち</span>
                <small>自由時間、収入安定、趣味の有無を含めた予測</small>
              </div>
              <div class="metric">
                <strong>おすすめ改善ポイント</strong>
                <span class="accent-blue text-metric" id="fireStressImprovement">入力待ち</span>
                <small>FIRE前に整えたい行動</small>
              </div>
              <div class="metric">
                <strong>サイドFIREとの比較</strong>
                <span class="accent-green text-metric" id="fireStressSideFireCompare">入力待ち</span>
                <small>完全FIREとサイドFIREの相性</small>
              </div>
              <div class="metric">
                <strong>おすすめ関連ツール</strong>
                <span class="accent-amber text-metric" id="fireStressRelatedTools">FIRE達成率、サイドFIRE、配当生活年数</span>
                <small>次に確認したいシミュレーター</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="FIREストレス診断FAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>FIREストレススコアは何を表していますか？</summary>
              <p>資産額、生活費、副業収入、配当収入、仕事ストレス、孤独耐性、趣味の有無から、FIRE後に感じやすい不安を100点満点で示した目安です。低いほどストレスリスクが高いと考えてください。</p>
            </details>
            <details>
              <summary>資産が十分ならストレスは少なくなりますか？</summary>
              <p>資産は大きな安心材料ですが、生活費の高さ、収入源の少なさ、人との接点の減少でも不安は残ります。完全FIREだけでなく、サイドFIREや配当収入、副業収入を残す選択肢も確認してください。</p>
            </details>
            <details>
              <summary>仕事ストレスが高い場合は早くFIREした方がよいですか？</summary>
              <p>仕事ストレスが高いほどFIREへの動機は強くなりますが、準備不足で退職すると別の不安が増えます。生活防衛資金、固定費、サイドFIREの収入源を整えながら、段階的に自由度を上げる方が現実的です。</p>
            </details>
            <details>
              <summary>孤独リスクはどう下げられますか？</summary>
              <p>FIRE後に続けたい趣味、学び、地域活動、副業、発信などを先に持っておくと下げやすいです。働く時間をゼロにするより、少しだけ社会との接点を残すサイドFIREも選択肢になります。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="FIREストレス関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>FIRE後の不安を見たら、達成率、サイドFIRE、配当生活の継続年数も合わせて確認すると現実的な計画に近づきます。</p>
          </section>
          <div class="related-links">
            <a href="#fire-rate">FIRE達成率シミュレーター</a>
            <a href="#side-fire">サイドFIREシミュレーター</a>
            <a href="#dividend-mental">配当メンタル安定度診断</a>
            <a href="#dividend-life-years">配当生活年数シミュレーター</a>
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
            <a href="#fire-cost-optimization">FIRE生活費最適化シミュレーター</a>
            <a href="#fire">FIREシミュレーター</a>
            <a href="#emergency-fund">生活防衛資金シミュレーター</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="life-cost" aria-label="生活コスト最適化シミュレーター">
        <section class="tool-heading">
          <h2>生活コスト最適化シミュレーター</h2>
          <p>家賃、通信費、保険料、食費、光熱費、交通費、サブスク費用、娯楽費、投資額、副業収入から、毎月の生活コスト合計、削減可能額、投資効果、FIRE達成短縮年数を分析します。</p>
        </section>

        <section class="workspace" aria-label="生活コスト最適化の計算">
          <form class="input-panel" id="lifeCostForm">
            <div class="field">
              <label for="lifeCostRent">家賃 <span class="unit">円 / 月</span></label>
              <input id="lifeCostRent" name="lifeCostRent" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="90000" required aria-describedby="lifeCostRentError">
              <p class="error" id="lifeCostRentError"></p>
            </div>
            <div class="field">
              <label for="lifeCostCommunication">通信費 <span class="unit">円 / 月</span></label>
              <input id="lifeCostCommunication" name="lifeCostCommunication" type="number" inputmode="numeric" min="0" max="100000000" step="1000" value="12000" required aria-describedby="lifeCostCommunicationError">
              <p class="error" id="lifeCostCommunicationError"></p>
            </div>
            <div class="field">
              <label for="lifeCostInsurance">保険料 <span class="unit">円 / 月</span></label>
              <input id="lifeCostInsurance" name="lifeCostInsurance" type="number" inputmode="numeric" min="0" max="100000000" step="1000" value="15000" required aria-describedby="lifeCostInsuranceError">
              <p class="error" id="lifeCostInsuranceError"></p>
            </div>
            <div class="field">
              <label for="lifeCostFood">食費 <span class="unit">円 / 月</span></label>
              <input id="lifeCostFood" name="lifeCostFood" type="number" inputmode="numeric" min="0" max="100000000" step="5000" value="70000" required aria-describedby="lifeCostFoodError">
              <p class="error" id="lifeCostFoodError"></p>
            </div>
            <div class="field">
              <label for="lifeCostUtilities">光熱費 <span class="unit">円 / 月</span></label>
              <input id="lifeCostUtilities" name="lifeCostUtilities" type="number" inputmode="numeric" min="0" max="100000000" step="1000" value="22000" required aria-describedby="lifeCostUtilitiesError">
              <p class="error" id="lifeCostUtilitiesError"></p>
            </div>
            <div class="field">
              <label for="lifeCostTransport">交通費 <span class="unit">円 / 月</span></label>
              <input id="lifeCostTransport" name="lifeCostTransport" type="number" inputmode="numeric" min="0" max="100000000" step="1000" value="15000" required aria-describedby="lifeCostTransportError">
              <p class="error" id="lifeCostTransportError"></p>
            </div>
            <div class="field">
              <label for="lifeCostSubscription">サブスク費用 <span class="unit">円 / 月</span></label>
              <input id="lifeCostSubscription" name="lifeCostSubscription" type="number" inputmode="numeric" min="0" max="100000000" step="500" value="6000" required aria-describedby="lifeCostSubscriptionError">
              <p class="error" id="lifeCostSubscriptionError"></p>
            </div>
            <div class="field">
              <label for="lifeCostEntertainment">娯楽費 <span class="unit">円 / 月</span></label>
              <input id="lifeCostEntertainment" name="lifeCostEntertainment" type="number" inputmode="numeric" min="0" max="100000000" step="5000" value="30000" required aria-describedby="lifeCostEntertainmentError">
              <p class="error" id="lifeCostEntertainmentError"></p>
            </div>
            <div class="field">
              <label for="lifeCostInvestment">投資額 <span class="unit">円 / 月</span></label>
              <input id="lifeCostInvestment" name="lifeCostInvestment" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="80000" required aria-describedby="lifeCostInvestmentError">
              <p class="error" id="lifeCostInvestmentError"></p>
            </div>
            <div class="field">
              <label for="lifeCostSideIncome">副業収入 <span class="unit">円 / 月</span></label>
              <input id="lifeCostSideIncome" name="lifeCostSideIncome" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="50000" required aria-describedby="lifeCostSideIncomeError">
              <p class="error" id="lifeCostSideIncomeError"></p>
            </div>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">毎月生活コスト合計</p>
              <p class="amount" id="lifeCostMonthlyTotal">0円</p>
            </div>
            <p class="notice" id="lifeCostNotice">入力を確認してください。削減可能額は固定費と変動費の一般的な見直し余地から計算した概算です。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>削減可能額</strong>
                <span class="accent-amber" id="lifeCostReducible">0円</span>
                <small>通信費、保険料、サブスク、食費などの月額見直し目安</small>
              </div>
              <div class="metric">
                <strong>年間節約額</strong>
                <span class="accent-green" id="lifeCostAnnualSaving">0円</span>
                <small>削減可能額を12か月続けた場合</small>
              </div>
              <div class="metric">
                <strong>投資へ回した場合の将来資産額</strong>
                <span class="accent-blue" id="lifeCostFutureAssets">0円</span>
                <small>削減額を年利4%、20年で積み立てた概算</small>
              </div>
              <div class="metric">
                <strong>FIRE達成短縮年数</strong>
                <span class="accent-green text-metric" id="lifeCostFireShortening">0年</span>
                <small>削減額を追加投資へ回す場合の単純目安</small>
              </div>
              <div class="metric">
                <strong>おすすめ改善ポイント</strong>
                <span class="accent-amber text-metric" id="lifeCostImprovementPoint">入力を確認してください</span>
                <small>固定費・変動費・投資額のバランスから表示</small>
              </div>
              <div class="metric">
                <strong>固定費削減への導線</strong>
                <span class="accent-blue text-metric" id="lifeCostFixedCostGuide">固定費削減シミュレーターで詳細確認</span>
                <small><a href="#fixed-cost-reduction">固定費削減シミュレーターへ進む</a></small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="生活コスト最適化シミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>固定費と変動費は分けて見た方がいいですか？</summary>
              <p>分けて見るのがおすすめです。通信費、保険料、サブスクのような固定費は一度見直すと効果が続き、食費や娯楽費は無理なく続けられる範囲を探すことが大切です。</p>
            </details>
            <details>
              <summary>削減可能額はそのまま投資に回していいですか？</summary>
              <p>生活防衛資金が不足している場合は、まず現金の安全資金を優先してください。余裕がある場合は、新NISAや長期投資へ回すと資産形成の速度を上げやすくなります。</p>
            </details>
            <details>
              <summary>FIRE達成短縮年数はどう見ればいいですか？</summary>
              <p>削減額を追加投資へ回した場合に、3,000万円の資産形成までの年数がどれくらい縮むかを単純計算した目安です。実際は利回りや収入変動もあるため、方向性の確認に使ってください。</p>
            </details>
            <details>
              <summary>副業収入も生活コスト改善に関係しますか？</summary>
              <p>関係します。副業収入があると赤字補填や追加投資に回せる余力が増えますが、生活費が膨らむと効果が薄くなるため、支出と収入をセットで見ることが重要です。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="生活コスト最適化関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>生活コストの全体像を見たら、固定費、毎月収支、FIRE達成までの距離を合わせて確認すると改善順が決めやすくなります。</p>
          </section>
          <div class="related-links">
            <a href="#fixed-cost-reduction">固定費削減シミュレーター</a>
            <a href="#fire-cost-optimization">FIRE生活費最適化シミュレーター</a>
            <a href="#cash-flow">会社員キャッシュフローシミュレーター</a>
            <a href="#fire">FIREシミュレーター</a>
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
            <a href="#fire-cost-optimization">FIRE生活費最適化シミュレーター</a>
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
            <a href="#investment-risk">投資リスク許容度診断</a>
            <a href="#dividend">配当金シミュレーター</a>
            <a href="#dividend-reinvestment">配当再投資シミュレーター</a>
            <a href="#dividend-mental">配当メンタル安定度診断</a>
            <a href="#nisa">新NISAシミュレーター</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="dividend-stock" aria-label="高配当株比較シミュレーター">
        <section class="tool-heading">
          <h2>高配当株比較シミュレーター</h2>
          <p>初期投資額、毎月追加投資額、銘柄選択、想定配当利回り、想定株価成長率、運用年数、配当再投資有無、新NISA利用有無から、高配当株の配当収入と資産成長を比較します。</p>
        </section>

        <section class="workspace" aria-label="高配当株比較の計算">
          <form class="input-panel" id="dividendStockForm">
            <div class="field">
              <label for="dividendStockInitial">初期投資額 <span class="unit">円</span></label>
              <input id="dividendStockInitial" name="dividendStockInitial" type="number" inputmode="numeric" min="0" max="10000000000" step="10000" value="1000000" required aria-describedby="dividendStockInitialError">
              <p class="error" id="dividendStockInitialError"></p>
            </div>
            <div class="field">
              <label for="dividendStockMonthly">毎月追加投資額 <span class="unit">円 / 月</span></label>
              <input id="dividendStockMonthly" name="dividendStockMonthly" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="50000" required aria-describedby="dividendStockMonthlyError">
              <p class="error" id="dividendStockMonthlyError"></p>
            </div>
            <div class="field">
              <label for="dividendStockChoice">銘柄選択</label>
              <select id="dividendStockChoice" name="dividendStockChoice" required>
                <option value="NTT">NTT</option>
                <option value="JT">JT</option>
                <option value="KDDI">KDDI</option>
                <option value="MITSUBISHI">三菱商事</option>
                <option value="BANK">メガバンク系</option>
                <option value="CUSTOM">カスタム</option>
              </select>
              <p class="error" id="dividendStockChoiceError"></p>
            </div>
            <div class="field">
              <label for="dividendStockYield">想定配当利回り <span class="unit">%</span></label>
              <input id="dividendStockYield" name="dividendStockYield" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="3.8" required aria-describedby="dividendStockYieldError">
              <p class="error" id="dividendStockYieldError"></p>
            </div>
            <div class="field">
              <label for="dividendStockGrowth">想定株価成長率 <span class="unit">%</span></label>
              <input id="dividendStockGrowth" name="dividendStockGrowth" type="number" inputmode="decimal" min="-30" max="30" step="0.1" value="2.5" required aria-describedby="dividendStockGrowthError">
              <p class="error" id="dividendStockGrowthError"></p>
            </div>
            <div class="field">
              <label for="dividendStockYears">運用年数 <span class="unit">年</span></label>
              <input id="dividendStockYears" name="dividendStockYears" type="number" inputmode="numeric" min="1" max="100" step="1" value="20" required aria-describedby="dividendStockYearsError">
              <p class="error" id="dividendStockYearsError"></p>
            </div>
            <label class="check-field" for="dividendStockReinvest">
              <input id="dividendStockReinvest" name="dividendStockReinvest" type="checkbox" checked>
              <span>配当金を再投資する</span>
            </label>
            <label class="check-field" for="dividendStockNisa">
              <input id="dividendStockNisa" name="dividendStockNisa" type="checkbox" checked>
              <span>新NISAを利用する</span>
            </label>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">年間配当金</p>
              <p class="amount" id="dividendStockAnnualDividend">0円</p>
            </div>
            <p class="notice" id="dividendStockNotice">入力を確認してください。個別株の配当利回りや株価成長率は将来の成果を保証するものではありません。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>月平均配当金</strong>
                <span class="accent-green" id="dividendStockMonthlyDividend">0円</span>
                <small>年間配当金 / 12か月</small>
              </div>
              <div class="metric">
                <strong>累計配当金</strong>
                <span class="accent-blue" id="dividendStockTotalDividend">0円</span>
                <small>運用期間中に発生する配当金の概算</small>
              </div>
              <div class="metric">
                <strong>最終資産額</strong>
                <span class="accent-blue" id="dividendStockFinalAssets">0円</span>
                <small>株価成長と配当再投資を反映した目安</small>
              </div>
              <div class="metric">
                <strong>銘柄別比較</strong>
                <span class="accent-amber text-metric" id="dividendStockComparison">未計算</span>
                <small>配当重視と資産成長重視の比較</small>
              </div>
              <div class="metric">
                <strong>FIRE達成への影響</strong>
                <span class="accent-green text-metric" id="dividendStockFireImpact">未計算</span>
                <small>年間生活費360万円に対する配当カバー率</small>
              </div>
              <div class="metric">
                <strong>おすすめ高配当株特徴</strong>
                <span class="accent-amber text-metric" id="dividendStockFeature">未計算</span>
                <small>選択銘柄の特徴と新NISA利用時の目安</small>
              </div>
              <div class="metric">
                <strong>ETFとの比較</strong>
                <span class="accent-blue text-metric" id="dividendStockEtfComparison">未計算</span>
                <small>個別株とETFの分散性・集中リスクの違い</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="高配当株比較シミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>高配当株と高配当ETFはどちらが初心者向けですか？</summary>
              <p>分散性を重視するならETF、銘柄を選んで配当利回りや成長性を狙うなら個別株が候補です。初心者はまずETFで分散し、慣れてから個別株を少しずつ比較する方が管理しやすいです。</p>
            </details>
            <details>
              <summary>配当利回りが高い銘柄ほど良いですか？</summary>
              <p>利回りが高すぎる場合、株価下落や減配リスクが隠れていることがあります。配当利回りだけでなく、業績、配当性向、財務、事業の安定性も確認してください。</p>
            </details>
            <details>
              <summary>新NISAで高配当株を買うメリットはありますか？</summary>
              <p>新NISAでは配当や売却益が非課税になる可能性があります。配当を受け取る目的でも使いやすい一方、成長投資枠の使い方や銘柄集中リスクには注意が必要です。</p>
            </details>
            <details>
              <summary>配当再投資はした方がいいですか？</summary>
              <p>FIRE前に資産を増やしたい段階では、配当再投資により複利効果を狙いやすくなります。FIRE後や生活費補助が目的なら、受け取りとの使い分けも考えられます。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="高配当株比較関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>高配当株は、ETFとの違い、配当再投資、新NISAの非課税枠を合わせて見ると判断しやすくなります。</p>
          </section>
          <div class="related-links">
            <a href="#investment-risk">投資リスク許容度診断</a>
            <a href="#dividend-etf">配当ETF比較シミュレーター</a>
            <a href="#dividend-mental">配当メンタル安定度診断</a>
            <a href="#dividend-reinvestment">配当再投資シミュレーター</a>
            <a href="#nisa">新NISAシミュレーター</a>
          </div>
        </section>
      </section>

      <section class="view" data-view="dividend-mental" aria-label="配当メンタル安定度診断">
        <section class="tool-heading">
          <h2>配当メンタル安定度診断</h2>
          <p>現在資産、高配当株比率、毎月生活費、配当収入、投資経験、暴落耐性、現金比率から、配当投資を続けられる精神安定度を診断します。</p>
        </section>

        <section class="workspace" aria-label="配当メンタル安定度の診断">
          <form class="input-panel" id="dividendMentalForm">
            <div class="field"><label for="dividendMentalAssets">現在資産 <span class="unit">円</span></label><input id="dividendMentalAssets" name="dividendMentalAssets" type="number" inputmode="numeric" min="0" max="10000000000" step="10000" value="8000000" required aria-describedby="dividendMentalAssetsError"><p class="error" id="dividendMentalAssetsError"></p></div>
            <div class="field"><label for="dividendMentalHighDividendRatio">高配当株比率 <span class="unit">%</span></label><input id="dividendMentalHighDividendRatio" name="dividendMentalHighDividendRatio" type="number" inputmode="decimal" min="0" max="100" step="1" value="45" required aria-describedby="dividendMentalHighDividendRatioError"><p class="error" id="dividendMentalHighDividendRatioError"></p></div>
            <div class="field"><label for="dividendMentalMonthlyCost">毎月生活費 <span class="unit">円 / 月</span></label><input id="dividendMentalMonthlyCost" name="dividendMentalMonthlyCost" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="250000" required aria-describedby="dividendMentalMonthlyCostError"><p class="error" id="dividendMentalMonthlyCostError"></p></div>
            <div class="field"><label for="dividendMentalIncome">配当収入 <span class="unit">円 / 月</span></label><input id="dividendMentalIncome" name="dividendMentalIncome" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="40000" required aria-describedby="dividendMentalIncomeError"><p class="error" id="dividendMentalIncomeError"></p></div>
            <div class="field"><label for="dividendMentalExperience">投資経験年数 <span class="unit">年</span></label><input id="dividendMentalExperience" name="dividendMentalExperience" type="number" inputmode="decimal" min="0" max="80" step="0.5" value="4" required aria-describedby="dividendMentalExperienceError"><p class="error" id="dividendMentalExperienceError"></p></div>
            <div class="field"><label for="dividendMentalCrashTolerance">暴落耐性 <span class="unit">1〜10</span></label><input id="dividendMentalCrashTolerance" name="dividendMentalCrashTolerance" type="number" inputmode="numeric" min="1" max="10" step="1" value="6" required aria-describedby="dividendMentalCrashToleranceError"><p class="error" id="dividendMentalCrashToleranceError"></p></div>
            <label class="check-field" for="dividendMentalSideIncome"><input id="dividendMentalSideIncome" name="dividendMentalSideIncome" type="checkbox" checked><span>副業収入がある</span></label>
            <div class="field"><label for="dividendMentalCashRatio">現金比率 <span class="unit">%</span></label><input id="dividendMentalCashRatio" name="dividendMentalCashRatio" type="number" inputmode="decimal" min="0" max="100" step="1" value="25" required aria-describedby="dividendMentalCashRatioError"><p class="error" id="dividendMentalCashRatioError"></p></div>
            <label class="check-field" for="dividendMentalFire"><input id="dividendMentalFire" name="dividendMentalFire" type="checkbox" checked><span>FIREを希望している</span></label>
            <div class="actions"><button type="reset">リセット</button></div>
          </form>
          <section class="result-panel" aria-live="polite">
            <div class="hero-result"><p class="eyebrow">メンタル安定度スコア</p><p class="amount" id="dividendMentalScore">0 / 100</p></div>
            <p class="notice" id="dividendMentalNotice">入力を確認してください。この診断は投資助言ではなく、配当投資を続けるためのリスク整理の目安です。</p>
            <div class="result-grid">
              <div class="metric"><strong>暴落耐性</strong><span class="accent-blue text-metric" id="dividendMentalCrashResult">未計算</span><small>下落時に売らずに続けやすいか</small></div>
              <div class="metric"><strong>配当依存リスク</strong><span class="accent-amber text-metric" id="dividendMentalDependenceRisk">未計算</span><small>生活費に対する配当収入の依存度</small></div>
              <div class="metric"><strong>FIRE継続安定性</strong><span class="accent-green text-metric" id="dividendMentalFireStability">未計算</span><small>FIRE後も配当投資を続けやすいか</small></div>
              <div class="metric"><strong>おすすめ改善ポイント</strong><span class="accent-green text-metric" id="dividendMentalImprovement">未計算</span><small>最初に整えたい行動</small></div>
              <div class="metric"><strong>おすすめ資産配分</strong><span class="accent-blue text-metric" id="dividendMentalAllocation">未計算</span><small>現金、高配当株、ETFのバランス目安</small></div>
              <div class="metric"><strong>関連ツール導線</strong><span class="accent-amber text-metric" id="dividendMentalRelatedTools">未計算</span><small>次に確認したいシミュレーター</small></div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="配当メンタル安定度診断FAQ"><h3>FAQ</h3><div class="faq-list">
          <details><summary>メンタル安定度スコアは何を表していますか？</summary><p>高配当株比率、現金比率、生活費に対する配当依存度、投資経験、暴落耐性、副業収入の有無を合わせて、配当投資を続けやすい状態かを簡易的に見ています。</p></details>
          <details><summary>高配当株比率は高いほど良いですか？</summary><p>配当収入は増えやすくなりますが、個別株や高配当銘柄に偏りすぎると減配や株価下落への不安が大きくなります。ETFや現金も含めた分散が大切です。</p></details>
          <details><summary>現金比率はどれくらい必要ですか？</summary><p>生活費の6か月から1年分を目安に確保すると、暴落時に焦って売るリスクを下げやすくなります。FIREを目指す場合は、生活防衛資金を厚めに見ておくと安心です。</p></details>
          <details><summary>配当収入だけで生活できれば安心ですか？</summary><p>配当は減配や無配になる可能性があります。配当だけに依存せず、副業収入、現金、インデックス投資、生活費削減を組み合わせると精神的に続けやすくなります。</p></details>
        </div></section>
        <section class="article-panel" aria-label="配当メンタル関連ツール"><section class="tool-heading"><h2>関連ツール</h2><p>配当投資の安心感は、銘柄比較、ETF比較、FIRE後のストレス確認を合わせて見ると判断しやすくなります。</p></section><div class="related-links"><a href="#dividend-stock">高配当株比較シミュレーター</a><a href="#dividend-etf">配当ETF比較シミュレーター</a><a href="#fire-stress">FIREストレス診断</a><a href="#dividend-life-years">配当生活年数シミュレーター</a></div></section>
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

      <section class="view" data-view="dividend-life-years" aria-label="配当生活年数シミュレーター">
        <section class="tool-heading">
          <h2>配当生活年数シミュレーター</h2>
          <p>現在資産、毎月生活費、想定配当利回り、毎月追加投資額、想定年利、運用継続有無、配当再投資有無、インフレ率から、配当生活を何年間続けられるかを試算します。</p>
        </section>

        <section class="workspace" aria-label="配当生活年数の計算">
          <form class="input-panel" id="dividendLifeYearsForm">
            <div class="field">
              <label for="dividendLifeYearsAssets">現在資産 <span class="unit">円</span></label>
              <input id="dividendLifeYearsAssets" name="dividendLifeYearsAssets" type="number" inputmode="numeric" min="0" max="10000000000" step="10000" value="30000000" required aria-describedby="dividendLifeYearsAssetsError">
              <p class="error" id="dividendLifeYearsAssetsError"></p>
            </div>
            <div class="field">
              <label for="dividendLifeYearsLivingCost">毎月生活費 <span class="unit">円 / 月</span></label>
              <input id="dividendLifeYearsLivingCost" name="dividendLifeYearsLivingCost" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="220000" required aria-describedby="dividendLifeYearsLivingCostError">
              <p class="error" id="dividendLifeYearsLivingCostError"></p>
            </div>
            <div class="field">
              <label for="dividendLifeYearsYield">想定配当利回り <span class="unit">%</span></label>
              <input id="dividendLifeYearsYield" name="dividendLifeYearsYield" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="4" required aria-describedby="dividendLifeYearsYieldError">
              <p class="error" id="dividendLifeYearsYieldError"></p>
            </div>
            <div class="field">
              <label for="dividendLifeYearsMonthlyInvestment">毎月追加投資額 <span class="unit">円 / 月</span></label>
              <input id="dividendLifeYearsMonthlyInvestment" name="dividendLifeYearsMonthlyInvestment" type="number" inputmode="numeric" min="0" max="100000000" step="10000" value="50000" required aria-describedby="dividendLifeYearsMonthlyInvestmentError">
              <p class="error" id="dividendLifeYearsMonthlyInvestmentError"></p>
            </div>
            <div class="field">
              <label for="dividendLifeYearsReturn">想定年利 <span class="unit">%</span></label>
              <input id="dividendLifeYearsReturn" name="dividendLifeYearsReturn" type="number" inputmode="decimal" min="-30" max="30" step="0.1" value="3" required aria-describedby="dividendLifeYearsReturnError">
              <p class="error" id="dividendLifeYearsReturnError"></p>
            </div>
            <label class="check-field" for="dividendLifeYearsContinue">
              <input id="dividendLifeYearsContinue" name="dividendLifeYearsContinue" type="checkbox" checked>
              <span>配当生活中も追加投資を続ける</span>
            </label>
            <label class="check-field" for="dividendLifeYearsReinvest">
              <input id="dividendLifeYearsReinvest" name="dividendLifeYearsReinvest" type="checkbox">
              <span>配当金を再投資する</span>
            </label>
            <div class="field">
              <label for="dividendLifeYearsInflation">インフレ率 <span class="unit">%</span></label>
              <input id="dividendLifeYearsInflation" name="dividendLifeYearsInflation" type="number" inputmode="decimal" min="0" max="20" step="0.1" value="2" required aria-describedby="dividendLifeYearsInflationError">
              <p class="error" id="dividendLifeYearsInflationError"></p>
            </div>
            <div class="actions">
              <button type="reset">リセット</button>
            </div>
          </form>

          <section class="result-panel" aria-live="polite">
            <div class="hero-result">
              <p class="eyebrow">配当生活可能年数</p>
              <p class="amount" id="dividendLifeYearsPossibleYears">未計算</p>
            </div>
            <p class="notice" id="dividendLifeYearsNotice">入力を確認してください。配当利回りや運用利回りは将来の成果を保証するものではありません。</p>
            <div class="result-grid">
              <div class="metric">
                <strong>年間配当金</strong>
                <span class="accent-green" id="dividendLifeYearsAnnualDividend">0円</span>
                <small>現在資産 × 想定配当利回り</small>
              </div>
              <div class="metric">
                <strong>月平均配当金</strong>
                <span class="accent-blue" id="dividendLifeYearsMonthlyDividend">0円</span>
                <small>年間配当金 ÷ 12か月</small>
              </div>
              <div class="metric">
                <strong>資産残高推移</strong>
                <span class="accent-amber text-metric" id="dividendLifeYearsBalanceTrend">未計算</span>
                <small>生活費、配当、運用、インフレを反映</small>
              </div>
              <div class="metric">
                <strong>FIRE継続可能性</strong>
                <span class="accent-green text-metric" id="dividendLifeYearsFireSustainability">未計算</span>
                <small>年間生活費に対する配当カバー率</small>
              </div>
              <div class="metric">
                <strong>新NISA活用時の改善効果</strong>
                <span class="accent-blue text-metric" id="dividendLifeYearsNisaEffect">未計算</span>
                <small>追加投資と非課税枠の使い方</small>
              </div>
              <div class="metric">
                <strong>おすすめ改善ポイント</strong>
                <span class="accent-amber text-metric" id="dividendLifeYearsImprovement">未計算</span>
                <small>生活費、積立、利回りの見直し案</small>
              </div>
            </div>
          </section>
        </section>

        <section class="faq-panel" aria-label="配当生活年数シミュレーターFAQ">
          <h3>FAQ</h3>
          <div class="faq-list">
            <details>
              <summary>配当生活可能年数はどう計算していますか？</summary>
              <p>年間生活費から配当収入を差し引き、不足分を資産から取り崩す前提で試算しています。運用継続、追加投資、配当再投資、インフレ率も年ごとに反映しています。</p>
            </details>
            <details>
              <summary>配当再投資を選ぶと結果はどう変わりますか？</summary>
              <p>配当を生活費に使わず資産へ戻すため、資産残高は伸びやすくなります。一方で生活費は資産取り崩しでまかなうため、FIRE後に配当を使う想定とは結果が変わります。</p>
            </details>
            <details>
              <summary>インフレ率は入れたほうがいいですか？</summary>
              <p>長期の配当生活では生活費が上がる可能性があるため、1〜2%程度でも入れて確認すると保守的に見られます。インフレを無視すると継続年数が長く見えやすい点に注意してください。</p>
            </details>
          </div>
        </section>

        <section class="article-panel" aria-label="配当生活年数関連ツール">
          <section class="tool-heading">
            <h2>関連ツール</h2>
            <p>配当生活の継続年数は、必要資産、再投資効果、FIRE後のストレス、FIRE必要資産と合わせて確認すると判断しやすくなります。</p>
          </section>
          <div class="related-links">
            <a href="#dividend-life">配当生活達成シミュレーター</a>
            <a href="#dividend-reinvestment">配当再投資シミュレーター</a>
            <a href="#fire-stress">FIREストレス診断</a>
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
            <p>&#x30b5;&#x30a4;&#x30c9;FIRE&#x306f;&#x3001;FIRE&#x76ee;&#x6a19;&#x3001;FIRE&#x5f8c;&#x306e;&#x30b9;&#x30c8;&#x30ec;&#x30b9;&#x3001;&#x914d;&#x5f53;&#x53ce;&#x5165;&#x3001;&#x8001;&#x5f8c;&#x8cc7;&#x91d1;&#x306e;&#x30d0;&#x30e9;&#x30f3;&#x30b9;&#x3092;&#x5408;&#x308f;&#x305b;&#x3066;&#x898b;&#x308b;&#x3068;&#x8a08;&#x753b;&#x3057;&#x3084;&#x3059;&#x304f;&#x306a;&#x308a;&#x307e;&#x3059;&#x3002;</p>
          </section>
          <div class="related-links">
            <a href="#fire">FIRE&#x9054;&#x6210;&#x30b7;&#x30df;&#x30e5;&#x30ec;&#x30fc;&#x30bf;&#x30fc;</a>
            <a href="#fire-stress">FIREストレス診断</a>
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
          <a href="#ai-roi">AI導入ROI</a>
          <a href="#ai-time-reduction">AI作業時間削減</a>
          <a href="#ai-outsourcing">AI外注費削減</a>
          <a href="#ai-profit-max">AI利益最大化</a>
          <a href="#hourly-improvement">副業時給改善</a>
          <a href="#side-time-management">副業時間管理</a>
          <a href="#side-fatigue">副業疲労度</a>
          <a href="#side-motivation">副業モチベーション</a>
          <a href="#side-risk">副業リスク診断</a>
          <a href="#side-safety">副業安全度</a>
          <a href="#side-profit-margin">&#x526f;&#x696d;&#x5229;&#x76ca;&#x7387;</a>
          <a href="#incorporation">副業法人化判断</a>
          <a href="#take-home">&#x526f;&#x696d;&#x624b;&#x53d6;&#x308a;</a>
          <a href="#tax">&#x7a0e;&#x91d1;&#x30fb;&#x9752;&#x8272;&#x7533;&#x544a;</a>
          <a href="#employee-tax-saving">会社員節税</a>
          <a href="#income-tax">&#x526f;&#x696d;&#x6240;&#x5f97;&#x7a0e;</a>
          <a href="#resident-tax">&#x526f;&#x696d;&#x4f4f;&#x6c11;&#x7a0e;</a>
          <a href="#investment-risk">投資リスク診断</a>
          <a href="#nisa">&#x65b0;NISA&#x30fb;&#x7a4d;&#x7acb;&#x6295;&#x8cc7;</a>
          <a href="#nisa-fast">新NISA最速積立</a>
          <a href="#nisa-withdrawal">NISA取り崩し</a>
          <a href="#credit-card-investment">&#x30af;&#x30ec;&#x30ab;&#x7a4d;&#x7acb;</a>
          <a href="#ideco">iDeCo&#x7bc0;&#x7a0e;</a>
          <a href="#dividend">&#x914d;&#x5f53;&#x91d1;</a>
          <a href="#dividend-stock">高配当株比較</a>
          <a href="#dividend-mental">配当メンタル</a>
          <a href="#dividend-reinvestment">&#x914d;&#x5f53;&#x518d;&#x6295;&#x8cc7;</a>
          <a href="#dividend-life">配当生活達成</a>
          <a href="#dividend-life-years">配当生活年数</a>
          <a href="#fire">FIRE&#x9054;&#x6210;</a>
          <a href="#fire-rate">FIRE達成率</a>
          <a href="#fire-cost-optimization">FIRE生活費最適化</a>
          <a href="#employee-fire">&#x4f1a;&#x793e;&#x54e1;FIRE</a>
          <a href="#life-cost">生活コスト最適化</a>
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

function insertLastUpdatedDates() {
  const routeDates = {
    "investment-risk": "2026年6月19日",
    "dividend-stock": "2026年6月19日",
    "dividend-etf": "2026年6月19日",
    "fire-rate": "2026年6月19日",
    "fire-cost-optimization": "2026年6月19日",
    "fixed-cost-reduction": "2026年6月19日",
    "life-cost": "2026年6月19日",
    "cash-flow": "2026年6月19日",
    "ai-time-reduction": "2026年6月16日",
    "side-safety": "2026年6月19日",
    "side-risk": "2026年6月19日",
    "side-fatigue": "2026年6月19日",
    "income-tax": "2026年6月19日",
    "ai-automation": "2026年6月16日",
    "ai-efficiency": "2026年6月16日",
    "ai-roi": "2026年6月16日",
    "dividend-mental": "2026年6月16日",
    "fire-stress": "2026年6月16日",
  };
  document.querySelectorAll(".view > .tool-heading").forEach((heading) => {
    if (heading.querySelector(".article-meta")) {
      return;
    }
    const title = heading.querySelector(":scope > h2");
    const view = heading.closest("[data-view]");
    const date = routeDates[view?.dataset.view] || "2026年6月14日";
    if (title) {
      title.insertAdjacentHTML("afterend", `<p class="article-meta">最終更新日：${date}</p>`);
    }
  });
}

insertLastUpdatedDates();

const comparisonSections = {
  "side-income": `
        <section class="article-panel comparison-section" aria-label="副業比較表">
          <section class="tool-heading">
            <h2>副業比較表</h2>
            <p>会社員が本業後に取り組む前提で、必要時間やAIとの相性を比較しています。</p>
          </section>
          <div class="comparison-table" role="region" aria-label="副業比較表" tabindex="0">
            <table>
              <thead><tr><th>副業タイプ</th><th>必要時間</th><th>初期費用</th><th>収益化速度</th><th>継続難易度</th><th>AI活用相性</th><th>会社員向きか</th></tr></thead>
              <tbody>
                <tr><td>Webライティング</td><td>平日1時間から可</td><td>低い</td><td>早め</td><td>中</td><td>構成・下書きで高い</td><td>本業後でも分割しやすい</td></tr>
                <tr><td>資料作成・事務代行</td><td>まとまった夜時間が必要</td><td>低い</td><td>早め</td><td>中</td><td>要約・整形で高い</td><td>管理職経験を活かしやすい</td></tr>
                <tr><td>動画編集</td><td>長め</td><td>中</td><td>中</td><td>高</td><td>台本・字幕で中</td><td>休日作業向き</td></tr>
                <tr><td>ブログ・メディア運営</td><td>短時間を継続</td><td>低〜中</td><td>遅め</td><td>高</td><td>調査・構成で高い</td><td>長期で積み上げたい人向き</td></tr>
              </tbody>
            </table>
          </div>
          <p class="verification-note"><strong>実際に運営者も検証中。</strong>運送業の管理職として当日欠勤対応や夜間対応があるため、毎日3時間前提ではなく、平日1時間でも進む副業を中心に比較しています。AIで短縮できる作業と、自分の経験を入れる作業を分けて見ています。</p>
        </section>`,
  "ai-efficiency": `
        <section class="article-panel comparison-section" aria-label="AI副業比較表">
          <section class="tool-heading">
            <h2>副業比較表</h2>
            <p>AIを使う前提で、会社員が本業後に続けやすい副業を比較しています。</p>
          </section>
          <div class="comparison-table" role="region" aria-label="AI副業比較表" tabindex="0">
            <table>
              <thead><tr><th>副業タイプ</th><th>必要時間</th><th>初期費用</th><th>収益化速度</th><th>継続難易度</th><th>AI活用相性</th><th>会社員向きか</th></tr></thead>
              <tbody>
                <tr><td>記事作成補助</td><td>平日1時間から可</td><td>低い</td><td>早め</td><td>中</td><td>ChatGPT/Claudeと相性が高い</td><td>疲れた夜でも分割しやすい</td></tr>
                <tr><td>SNS投稿作成</td><td>短時間</td><td>低い</td><td>中</td><td>中</td><td>アイデア出しで高い</td><td>スキマ時間向き</td></tr>
                <tr><td>動画ショート編集</td><td>中〜長</td><td>中</td><td>中</td><td>高</td><td>CapCutで一部短縮</td><td>休日にまとめる人向き</td></tr>
                <tr><td>資料・リサーチ代行</td><td>中</td><td>低い</td><td>早め</td><td>中</td><td>要約・整理で高い</td><td>本業スキルを活かしやすい</td></tr>
              </tbody>
            </table>
          </div>
          <p class="verification-note"><strong>実際に運営者も検証中。</strong>本業後は集中力が残りにくいため、AIは楽に稼ぐ道具ではなく、調査・構成・下書きの時間を減らして副業を止めないための道具として見ています。</p>
        </section>
        <section class="article-panel comparison-section" aria-label="AIツール比較表">
          <section class="tool-heading">
            <h2>AIツール比較</h2>
            <p>副業作業を短縮する目的で、主要AIツールの得意分野を比較しています。</p>
          </section>
          <div class="comparison-table" role="region" aria-label="AIツール比較表" tabindex="0">
            <table>
              <thead><tr><th>AIツール</th><th>得意分野</th><th>時間短縮</th><th>初心者向き</th><th>副業相性</th></tr></thead>
              <tbody>
                <tr><td>ChatGPT</td><td>構成、下書き、FAQ、説明文</td><td>高い</td><td>高い</td><td>文章・企画系で使いやすい</td></tr>
                <tr><td>Claude</td><td>長文整理、自然な文章調整</td><td>高い</td><td>中〜高</td><td>記事改善や読みやすさ調整向き</td></tr>
                <tr><td>Gemini</td><td>調査補助、Google系連携</td><td>中</td><td>中</td><td>情報整理や比較検討向き</td></tr>
                <tr><td>CapCut</td><td>動画編集、字幕、ショート動画</td><td>中〜高</td><td>高い</td><td>動画副業やSNS運用向き</td></tr>
              </tbody>
            </table>
          </div>
          <p class="verification-note"><strong>実際に運営者も検証中。</strong>文章作成はChatGPTやClaude、動画まわりはCapCutのように、作業ごとに使い分ける方が本業後の限られた時間では現実的だと感じています。</p>
        </section>`,
  fire: `
        <section class="article-panel comparison-section" aria-label="FIRE戦略比較表">
          <section class="tool-heading">
            <h2>FIRE戦略比較表</h2>
            <p>40歳FIREを目指す会社員目線で、投資・副業・固定費・高配当の戦略を比較しています。</p>
          </section>
          <div class="comparison-table" role="region" aria-label="FIRE戦略比較表" tabindex="0">
            <table>
              <thead><tr><th>戦略</th><th>必要年数</th><th>難易度</th><th>再現性</th><th>向いている人</th></tr></thead>
              <tbody>
                <tr><td>投資中心</td><td>長め</td><td>中</td><td>高い</td><td>毎月積立を長く続けられる会社員</td></tr>
                <tr><td>副業併用</td><td>短縮しやすい</td><td>高</td><td>中</td><td>本業後1時間でも収入づくりを続けたい人</td></tr>
                <tr><td>固定費削減型</td><td>中</td><td>低〜中</td><td>高い</td><td>忙しくて副業時間を増やしにくい人</td></tr>
                <tr><td>高配当型</td><td>中〜長</td><td>中</td><td>中</td><td>配当収入で心理的な余裕を作りたい人</td></tr>
              </tbody>
            </table>
          </div>
          <p class="verification-note"><strong>実際に運営者も検証中。</strong>運送業管理職として働く中では、副業時間を増やすだけに頼るのは難しいため、固定費削減とNISA積立を土台にし、副業収入でFIRE年数を短縮する形を現実的に見ています。</p>
        </section>`,
  "fixed-cost-reduction": `
        <section class="article-panel comparison-section" aria-label="固定費比較表">
          <section class="tool-heading">
            <h2>固定費比較表</h2>
            <p>会社員が忙しい時期でも一度見直すと効果が続きやすい固定費を比較しています。</p>
          </section>
          <div class="comparison-table" role="region" aria-label="固定費比較表" tabindex="0">
            <table>
              <thead><tr><th>項目</th><th>見直しやすさ</th><th>節約インパクト</th><th>会社員視点の注意点</th><th>副業・投資へのつなげ方</th></tr></thead>
              <tbody>
                <tr><td>通信費</td><td>高い</td><td>中</td><td>手続きだけで効果が続きやすい</td><td>浮いた分をNISA積立へ回しやすい</td></tr>
                <tr><td>保険</td><td>中</td><td>高</td><td>保障不足にならない範囲で確認</td><td>固定費を下げるとFIRE必要資産も下がる</td></tr>
                <tr><td>サブスク</td><td>高い</td><td>小〜中</td><td>使っていないサービスを月1回確認</td><td>AIツール費用と入れ替えて効率化も可</td></tr>
                <tr><td>家賃</td><td>低〜中</td><td>大</td><td>通勤時間や生活満足度も考える</td><td>大きく下がれば投資余力が増える</td></tr>
                <tr><td>食費</td><td>中</td><td>中</td><td>無理な節約は疲労につながる</td><td>削りすぎず継続できる範囲で調整</td></tr>
              </tbody>
            </table>
          </div>
          <p class="verification-note"><strong>実際に運営者も検証中。</strong>本業が忙しい時期ほど副業時間を増やすより、通信費や保険、サブスクのように一度見直すと毎月効く項目から整える方が続けやすいと感じています。</p>
        </section>`,
  "life-cost": `
        <section class="article-panel comparison-section" aria-label="固定費比較表">
          <section class="tool-heading">
            <h2>固定費比較表</h2>
            <p>固定費と変動費を分け、FIREや投資に効きやすい改善先を比較しています。</p>
          </section>
          <div class="comparison-table" role="region" aria-label="生活コスト固定費比較表" tabindex="0">
            <table>
              <thead><tr><th>項目</th><th>見直しやすさ</th><th>節約インパクト</th><th>会社員視点の注意点</th><th>副業・投資へのつなげ方</th></tr></thead>
              <tbody>
                <tr><td>通信費</td><td>高い</td><td>中</td><td>仕事連絡に支障が出ない範囲で見直す</td><td>削減分を毎月積立に回しやすい</td></tr>
                <tr><td>保険</td><td>中</td><td>高</td><td>不安だけで入りすぎない</td><td>必要保障を残して投資余力を作る</td></tr>
                <tr><td>サブスク</td><td>高い</td><td>小〜中</td><td>副業に使うAIツールとは分けて考える</td><td>使わない娯楽費を作業効率化へ回す</td></tr>
                <tr><td>家賃</td><td>低</td><td>大</td><td>通勤時間が増えると疲労も増える</td><td>住居費を下げるとFIRE必要資産も下がる</td></tr>
                <tr><td>食費</td><td>中</td><td>中</td><td>忙しい日の外食を責めすぎない</td><td>無理なく整えて長期継続を優先</td></tr>
              </tbody>
            </table>
          </div>
          <p class="verification-note"><strong>実際に運営者も検証中。</strong>長時間労働の日は食費を削りすぎると続かないため、通信費・保険・サブスクのように生活の疲労を増やしにくい固定費から優先して見ています。</p>
        </section>`
};

function insertComparisonSections() {
  Object.entries(comparisonSections).forEach(([route, html]) => {
    const view = document.querySelector(`[data-view="${route}"]`);
    if (!view || view.querySelector(".comparison-section")) {
      return;
    }
    const workspace = view.querySelector(".workspace");
    const heading = view.querySelector(":scope > .tool-heading");
    const container = document.createElement("div");
    container.innerHTML = html.trim();
    const sections = Array.from(container.children);
    const anchor = workspace || heading;
    sections.reverse().forEach((section) => {
      if (anchor) {
        anchor.insertAdjacentElement("afterend", section);
      } else {
        view.appendChild(section);
      }
    });
  });
}

insertComparisonSections();

const operatorExperience = {
  side: "運営者は31歳の会社員で、運送業の管理職として約30名規模の現場管理、人員調整、当日欠勤対応、夜間対応を経験しています。仕事が終わってから副業をしようと思っていても、当日の欠勤連絡や現場の調整で帰宅が遅くなり、予定していた1時間が消える日は普通にあります。だからこそ、休日にまとめて頑張るだけでなく、平日1時間でも進む作業量、手取り、税金、時給を見ながら続ける形を重視しています。",
  ai: "運営者は運送業の管理職として、日々の現場判断、調整、夜間対応をしながら副業と資産形成を試しています。本業後は集中力も時間も残りにくく、ゼロから文章を書いたり調べ物をしたりすると、それだけで副業時間が終わってしまうことがあります。AIツールは楽をするためというより、下書き、リサーチ、構成作り、画像や動画の準備を短縮して、限られた平日1時間を前に進めるために使っています。",
  tax: "副業を始めると、売上よりも手取りと税金の見え方が大事になります。会社員収入だけに依存しないために副業を検証していますが、住民税、所得税、青色申告、経費を見ないまま売上だけ喜ぶと、あとで思ったより残らない感覚が出ます。忙しい時期ほど帳簿や税金確認を後回しにしやすいので、確定申告前に慌てるのではなく、月ごとに納税分を分けるための目安として使っています。",
  investment: "40歳までにFIREを目指すには、副業収入だけで一気に変えるより、新NISA、配当、長期投資、固定費削減を組み合わせる方が現実的だと感じています。管理職として働く中で、急な欠勤対応や夜間対応が続くと、労働時間を増やして収入を伸ばす方法には限界があります。だから毎月の積立を自動化し、副業で増えた分や固定費削減で浮いた分を投資へ回す形を検証しています。",
  fire: "運営者は31歳の会社員として働きながら、40歳までのFIREを目標にしています。理由は、すぐに仕事を辞めたいというより、急なトラブル対応や長時間労働が続いた時に、会社員収入だけに生活を預けている状態へ不安を感じたからです。FIREは遠い理想ではなく、固定費を下げる、副業収入を作る、投資を続ける、生活防衛資金を持つという小さな選択を積み上げた先にあるものとして考えています。",
  household: "本業が忙しい時期ほど、収入を増やす前に固定費や毎月収支を整える効果を感じます。副業時間を増やしたくても、当日欠勤対応や現場調整で夜の予定が崩れることがあります。その点、通信費や保険料、サブスクの見直しは、一度手を入れると毎月効き続けます。浮いたお金を生活防衛資金や新NISAに回せると、忙しい月でも資産形成が止まりにくくなります。",
  life: "教育費、住宅ローン、老後資金は、後回しにすると一気に重く見えるテーマです。FIREを目指していても、将来の大きな支出を無視して積立額だけ増やすと、どこかで無理が出ます。今すぐ正確な答えを出すというより、住宅、教育、老後の負担を早めに見える化し、固定費削減や長期投資と組み合わせて毎月の行動に落とし込むために作っています。",
};

const routeExperienceProfiles = {
  "side-income": { title: "副業月収シミュレーター", kind: "side", reason: "副業を始める前に、最初に知りたいのは月収の夢ではなく、現実的に何時間働いていくら残るかです。時給、作業時間、案件数を分けて見ることで、無理な目標を立てる前に、自分の生活リズムに合う副業量を確認できます。", use: "結果は、月5万円や月10万円を目指すときの作業量の逆算に使ってください。平日に時間が取れない場合は、案件数を増やすより単価や作業効率を上げる方が現実的なこともあります。", articles: [["副業で月5万円を稼ぐ方法", "article-side-income-50000.html"], ["副業の税金完全ガイド", "article-side-tax.html"], ["FIRE達成の基本戦略", "article-fire-strategy.html"]] },
  "ai-hourly": { title: "AI副業時給シミュレーター", kind: "ai", reason: "AI副業は、作業時間が短くなる一方で、単価設定を間違えると時給が伸びません。このツールは、案件単価と作業時間を並べて、AIを使った後の実質時給を冷静に見るために作りました。", use: "AIで時間が半分になっても、修正や確認に時間がかかるなら時給は思ったほど伸びません。結果を見ながら、単価を上げるのか、作業手順を減らすのか、案件を絞るのかを決める材料にしてください。", articles: [["副業向けおすすめAIツール比較", "article-ai-tools-comparison.html"], ["副業効率化おすすめAIツール比較", "article-ai-side-business.html"], ["副業で月10万円を目指す方法", "article-side-income-100000.html"]] },
  "ai-efficiency": { title: "AI副業効率化シミュレーター", kind: "ai", reason: "AIツールは便利ですが、月額費用を払っても利益が増えなければ意味がありません。時間削減、外注費削減、ツール費用を一緒に見て、AI導入が本当に副業の利益率を上げるか確認するために作りました。", use: "AI導入後の時給だけでなく、年間追加利益を見てください。月額費用が高くても、削減時間を売上につなげられるなら投資価値があります。逆に時間が浮くだけなら、まず作業手順の見直しが先です。", articles: [["副業向けおすすめAIツール比較", "article-ai-tools-comparison.html"], ["副業効率化おすすめAIツール比較", "article-ai-side-business.html"], ["副業利益率シミュレーター", "index.html#side-profit-margin"]] },
  "ai-roi": { title: "AI導入ROIシミュレーター", kind: "ai", reason: "AIツールは便利でも、月額費用に見合う効果があるかを見ないと固定費だけが増えます。本業後の限られた副業時間を使う立場では、削減時間、売上増、外注費削減、回収期間をまとめて確認することが大切です。", use: "ROIが高い場合は、下書き、調査、要約、資料作成など繰り返し作業へAIを広げてください。ROIが低い場合は、有料プランを増やす前に無料枠や低額プランで用途を絞る方が安全です。", articles: [["副業向けおすすめAIツール比較", "article-ai-tools-comparison.html"], ["副業時給改善シミュレーター", "index.html#hourly-improvement"], ["副業利益率シミュレーター", "index.html#side-profit-margin"]] },
  "ai-automation": { title: "AI副業自動化シミュレーター", kind: "ai", reason: "本業後の副業時間は限られているため、毎回同じ作業をどこまでAIで自動化できるかを先に見たくて作りました。時間削減だけでなく、利益改善と継続性まで同時に確認できます。", use: "自動化できる時間が多くても、AI費用が重いと利益は残りません。削減時間、外注費、ROIを見て、下書き、調査、定型返信、チェック作業から小さく自動化してください。", articles: [["副業向けおすすめAIツール比較", "article-ai-tools-comparison.html"], ["管理職をしながらAI副業を続ける現実", "article-ai-sidejob-manager-reality.html"], ["本業後1時間副業を続けるためにやめたこと", "article-after-work-sidejob-1hour.html"]] },
  "ai-time-reduction": { title: "AI作業時間削減診断", kind: "ai", reason: "本業後の副業時間は、急な残業や欠勤対応が入るとすぐ削られます。AIを使うなら、便利さよりも実際に何時間戻せるかを先に見たくて作りました。副業ジャンルと作業内容ごとに、削減しやすい作業を分けて診断できます。", use: "削減可能時間が出たら、その時間を休息、営業、高単価作業のどれに回すか決めてください。スコアが低い場合は、有料AIを増やすより、まず調査、下書き、返信文など繰り返し作業を1つだけテンプレ化するのが現実的です。", articles: [["副業向けおすすめAIツール比較", "article-ai-tools-comparison.html"], ["管理職をしながらAI副業を続ける現実", "article-ai-sidejob-manager-reality.html"], ["本業後1時間副業を続けるためにやめたこと", "article-after-work-sidejob-1hour.html"]] },
  "ai-outsourcing": { title: "AI外注費削減シミュレーター", kind: "ai", reason: "副業が少し伸びてくると、記事作成、画像、動画、リサーチなどを外注したくなります。ただ、外注費が増えすぎると利益率が下がるため、AIで下準備や定型作業をどこまで内製化できるか確認するために作りました。", use: "削減できる外注費だけでなく、AI導入費用を差し引いた純削減額と回収期間を見てください。品質が必要な作業は外注を残し、AIで指示書、構成、初稿、チェック作業を短縮するのが現実的です。", articles: [["副業向けおすすめAIツール比較", "article-ai-tools-comparison.html"], ["AI導入ROIシミュレーター", "index.html#ai-roi"], ["副業利益率シミュレーター", "index.html#side-profit-margin"]] },
  "ai-profit-max": { title: "AI副業利益最大化シミュレーター", kind: "ai", reason: "AIを副業に入れるなら、時短だけで終わらせず、利益率、時給、目標月収までの距離まで見たいと感じて作りました。本業後の限られた時間では、浮いた時間をどの作業に回すかで収益の伸び方が変わります。", use: "AI導入後の利益額とROIを見て、ツール費用を増やす価値があるか判断してください。利益改善が小さい場合は、調査、下書き、テンプレ化など低リスクな作業から試し、浮いた時間を営業や高単価作業へ回す設計にしましょう。", articles: [["副業向けおすすめAIツール比較", "article-ai-tools-comparison.html"], ["副業効率化おすすめAIツール比較", "article-ai-side-business.html"], ["副業利益率シミュレーター", "index.html#side-profit-margin"]] },
  "side-time-management": { title: "副業時間管理シミュレーター", kind: "ai", reason: "副業は収入目標より先に、続けられる時間を確認する必要があります。本業、通勤、睡眠、家事を引いた残り時間を見ないまま予定を詰めると、数週間で苦しくなります。", use: "副業可能時間が少ない場合は、毎日やる前提ではなく、週末にまとめる、AIで下準備を短縮する、単価の高い作業へ絞るなどの改善に使ってください。", articles: [["副業向けおすすめAIツール比較", "article-ai-tools-comparison.html"], ["副業で月5万円を稼ぐ方法", "article-side-income-50000.html"], ["会社員の副業税金対策", "article-company-side-tax-saving.html"]] },
  "side-fatigue": { title: "副業疲労度シミュレーター", kind: "ai", reason: "副業は収入を増やす手段ですが、睡眠や休日を削り続けると長く続きません。管理職として急な欠勤対応や夜間対応を経験していると、本業後の疲労を無視した副業計画は崩れやすいと感じます。会社員として安全に副業を続けるには、疲労だけでなく会社規定や税務準備も合わせて見る必要があります。", use: "疲労度が高い場合は、副業時間を増やすより、AI活用、作業日の固定、睡眠時間の確保を優先してください。あわせて会社員副業安全度診断で、会社バレリスクや税務リスクも確認すると、無理なく続ける順番が見えます。", articles: [["副業向けおすすめAIツール比較", "article-ai-tools-comparison.html"], ["本業後1時間副業を続けるためにやめたこと", "article-after-work-sidejob-1hour.html"], ["会社員の副業税金対策", "article-company-side-tax-saving.html"]] },
  "side-continuity": { title: "副業継続率診断", kind: "ai", reason: "副業は始めるより続ける方が難しいです。本業後の疲労、睡眠、収益と目標の差をまとめて見て、無理な計画になっていないか確認するために作りました。", use: "スコアが低い場合は、作業時間を増やすより、睡眠、AI活用、目標月収の分割を優先してください。継続できる形に戻すことが、結果的に収益とFIREへの近道になります。", articles: [["本業後1時間副業を続けるためにやめたこと", "article-after-work-sidejob-1hour.html"], ["副業向けおすすめAIツール比較", "article-ai-tools-comparison.html"], ["副業で月5万円を稼ぐ方法", "article-side-income-50000.html"]] },
  "side-motivation": { title: "副業モチベーション診断", kind: "ai", reason: "副業はやる気だけで続けようとすると、本業が忙しい週や急な対応が入った時に崩れやすいです。目標月収、現在収益、疲労、睡眠、趣味時間をまとめて見て、気持ちが切れにくい設計か確認するために作りました。", use: "スコアが低い場合は、根性で作業時間を増やすより、目標を小さく分け、AIで作業を減らし、回復時間を先に確保してください。モチベーションは気合いではなく、続く仕組みで守るのが現実的です。", articles: [["本業後1時間副業を続けるためにやめたこと", "article-after-work-sidejob-1hour.html"], ["管理職をしながらAI副業を続ける現実", "article-ai-sidejob-manager-reality.html"], ["副業で月5万円を稼ぐ方法", "article-side-income-50000.html"]] },
  "side-risk": { title: "副業リスク診断", kind: "side", reason: "副業は収入が増えるほど、税務、疲労、収益依存のリスクも見えにくくなります。本業後に限られた時間で進める会社員ほど、稼ぐ前に崩れやすいポイントを早めに確認しておきたいと考えて作りました。会社規定、普通徴収、匿名性まで含めて見る場合は会社員副業安全度診断も合わせて使えます。", use: "スコアが高い項目から順番に見直してください。税務リスクが高ければ帳簿と申告準備、burnoutリスクが高ければ睡眠と作業時間、収益依存が高ければ生活防衛資金と利益率改善を優先すると現実的です。会社バレや会社規定の不安がある場合は、安全度診断で先に確認してください。", articles: [["会社員の副業税金対策", "article-company-side-tax-saving.html"], ["本業後1時間副業を続けるためにやめたこと", "article-after-work-sidejob-1hour.html"], ["副業向けおすすめAIツール比較", "article-ai-tools-comparison.html"]] },
  "side-safety": { title: "会社員副業安全度診断", kind: "side", reason: "副業を続けるうえで怖いのは、売上が少ないことだけではありません。会社規定を確認していない、住民税や確定申告の準備が曖昧、匿名性が弱い、本業後の作業時間が多すぎると、会社員として続けにくくなります。運送業の管理職として急な欠勤対応や夜間対応がある中で、副業を伸ばす前に安全度を確認するために作りました。", use: "スコアが低い場合は、会社規定の確認、普通徴収と確定申告の準備、匿名性の見直し、副業時間の上限設定を優先してください。副業リスク診断、所得税シミュレーター、疲労度シミュレーターを合わせると、収入を伸ばす前に整えるべき順番が見えます。", articles: [["会社員の副業税金対策", "article-company-side-tax-saving.html"], ["副業の所得税完全ガイド", "article-income-tax-guide.html"], ["本業後1時間副業を続けるためにやめたこと", "article-after-work-sidejob-1hour.html"]] },
  "hourly-improvement": { title: "副業時給改善シミュレーター", kind: "ai", reason: "副業は売上だけを見ると順調に見えても、作業時間と経費を入れると時給が低いことがあります。限られた時間で副業を続ける会社員ほど、時給換算での改善が大切です。", use: "目標時給に届かない場合は、AIで時間を減らす、外注を使う、広告費を整理する、低単価案件を減らすなど、改善ポイントを一つずつ試してください。", articles: [["副業向けおすすめAIツール比較", "article-ai-tools-comparison.html"], ["副業で月10万円を目指す方法", "article-side-income-100000.html"], ["副業の所得税完全ガイド", "article-income-tax-guide.html"]] },
  "side-profit-margin": { title: "副業利益率シミュレーター", kind: "side", reason: "売上が増えても、広告費、外注費、ツール費、作業時間が増えすぎると手元に残る利益は少なくなります。副業を長く続けるには、売上より利益率と時給を見ておく必要があります。", use: "利益率が低い場合は、経費削減だけでなく、単価、作業時間、AI活用の見直しをセットで考えてください。税金シミュレーターと合わせると手取り感もつかみやすくなります。", articles: [["副業の税金完全ガイド", "article-side-tax.html"], ["副業向けおすすめ会計ソフト比較", "article-accounting-software-comparison.html"], ["副業向けおすすめAIツール比較", "article-ai-tools-comparison.html"]] },
  incorporation: { title: "副業法人化判断シミュレーター", kind: "tax", reason: "副業利益が増えてくると、個人事業のまま続けるか、法人化するかで迷いやすくなります。ただ、法人化は節税だけでなく、維持費、社会保険、会計処理、役員報酬の設計まで関係するため、手取り差額と維持コストを同時に見られるようにしました。", use: "法人化が有利に見えても、役員報酬額、法人維持費、社会保険増加額を変えて複数パターンで試してください。差額が小さい場合は、利益率改善や会計ソフトでの経費管理を先に整える方が現実的です。", articles: [["副業向けおすすめ会計ソフト比較", "article-accounting-software-comparison.html"], ["副業の所得税完全ガイド", "article-income-tax-guide.html"], ["会社員の副業税金対策", "article-company-side-tax-saving.html"]] },
  tax: { title: "副業税金シミュレーター", kind: "tax", reason: "副業では、売上がそのまま使えるお金になるわけではありません。所得税、住民税、青色申告控除をざっくりでも見ておくと、納税時期に慌てずに済みます。", use: "結果は、毎月いくら納税用に分けておくかの目安にしてください。副業収入を投資へ回す場合も、税金分を先に避けてから積立額を決めると安全です。", articles: [["副業の税金完全ガイド", "article-side-tax.html"], ["副業の住民税完全ガイド", "article-resident-tax-guide.html"], ["青色申告の始め方", "article-blue-return-start.html"]] },
  "employee-tax-saving": { title: "会社員節税シミュレーター", kind: "tax", reason: "会社員は源泉徴収で税金が自動的に引かれるため、節税を自分で管理している感覚を持ちにくいと感じます。iDeCo、ふるさと納税、保険控除、住宅ローン控除を一つずつ確認し、FIREに向けて手元に残せるお金を見える化するために作りました。", use: "節税額が出たら、その金額を使い切らず、生活防衛資金や新NISA積立に回す前提で見てください。副業所得がある場合は、節税だけでなく所得税と住民税の納税資金も合わせて確認すると安心です。", articles: [["会社員の副業税金対策", "article-company-side-tax-saving.html"], ["iDeCoの始め方", "article-ideco-start.html"], ["新NISAの始め方", "article-new-nisa-start.html"]] },
  "income-tax": { title: "副業所得税シミュレーター", kind: "tax", reason: "副業所得が増えると、所得税と復興特別所得税の負担も増えます。手取りを考えるなら、経費や控除を入れた課税所得で見ることが大切です。会社員の場合は、所得税だけでなく住民税や会社規定との関係も見落とせません。", use: "所得税の概算を見たら、住民税や手取り計算も合わせて確認してください。売上が伸びた月ほど、納税用資金を分ける習慣が役立ちます。会社員副業安全度診断で、普通徴収や確定申告準備も合わせて確認できます。", articles: [["副業の所得税完全ガイド", "article-income-tax-guide.html"], ["会社員の副業税金対策", "article-company-side-tax-saving.html"], ["青色申告の始め方", "article-blue-return-start.html"]] },
  "investment-risk": { title: "投資リスク許容度診断", kind: "investment", reason: "投資は利回りだけで決めると、暴落時に続けられなくなることがあります。本業で急な対応や長時間労働があると、相場を見る余裕がない日もあるため、年齢、資産、経験、暴落時の行動を先に整理するために作りました。", use: "スコアが低い場合は投資額を増やすより、現金比率と少額積立を優先してください。スコアが高い場合も、高配当株、配当ETF、インデックス投資を分けて、FIRE目標に合う配分を確認しましょう。", articles: [["新NISAの始め方", "article-new-nisa-start.html"], ["楽天証券 vs SBI証券 完全比較", "article-rakuten-sbi-securities-comparison.html"], ["FIRE達成の基本戦略", "article-fire-strategy.html"]] },
  "resident-tax": { title: "副業住民税シミュレーター", kind: "tax", reason: "副業の住民税は、会社員が特に気にしやすい部分です。普通徴収を選ぶ注意点も含め、税額の目安を早めに見ておくために作りました。", use: "住民税額が見えたら、所得税と合わせて年間の税負担を確認してください。普通徴収を選ぶ場合も自治体の扱いに差があるため、確定申告前に確認するのが安全です。", articles: [["副業の住民税完全ガイド", "article-resident-tax-guide.html"], ["会社員の副業税金対策", "article-company-side-tax-saving.html"], ["副業向けおすすめ会計ソフト比較", "article-accounting-software-comparison.html"]] },
  "take-home": { title: "副業手取り計算シミュレーター", kind: "tax", reason: "副業は売上よりも、税金や社会保険料を考えた後の手取りが重要です。手取りが見えると、生活費、投資、納税準備に分けやすくなります。", use: "結果は副業収入の使い道を決める前に見てください。手取りの一部を生活防衛資金やNISAに回すと、収入増がそのまま資産形成につながりやすくなります。", articles: [["副業の税金完全ガイド", "article-side-tax.html"], ["副業で月5万円を稼ぐ方法", "article-side-income-50000.html"], ["新NISAの始め方", "article-new-nisa-start.html"]] },
  nisa: { title: "新NISAシミュレーター", kind: "investment", reason: "FIREを目指すうえで、新NISAは長期投資の中心にしやすい制度です。ただし、毎月いくら積み立てるかは収入や固定費によって変わります。", use: "将来資産額だけでなく、毎月積立額が家計に無理なく続くかを見てください。副業収入や固定費削減で増えた余力をNISAへ回すと、行動と資産形成がつながります。", articles: [["新NISAの始め方", "article-new-nisa-start.html"], ["楽天証券 vs SBI証券 完全比較", "article-rakuten-sbi-securities-comparison.html"], ["FIREとは何か", "article-fire-basic.html"]] },
  "nisa-fast": { title: "新NISA最速積立シミュレーター", kind: "investment", reason: "新NISAは枠をどう使うかで資産形成の速度が変わります。毎月積立とボーナス積立を分けて、無理なく早く埋めるペースを確認するために作りました。", use: "最終資産額だけでなく、生活防衛資金を残して続けられる金額かを見てください。FIREを急ぐ場合も、成長投資枠、配当再投資、固定費削減を組み合わせる方が現実的です。", articles: [["新NISAの始め方", "article-new-nisa-start.html"], ["楽天証券 vs SBI証券 完全比較", "article-rakuten-sbi-securities-comparison.html"], ["FIRE達成の基本戦略", "article-fire-strategy.html"]] },
  "nisa-withdrawal": { title: "NISA取り崩しシミュレーター", kind: "investment", reason: "資産形成は積み立てるだけでなく、将来どう使うかまで考える必要があります。老後やFIRE後に何年取り崩せるかを見える化するために作りました。", use: "取り崩し可能年数が短い場合は、毎月取り崩し額を下げる、運用継続を考える、老後資金や配当収入を組み合わせるなどの調整に使ってください。", articles: [["老後資金2000万円問題とは", "article-retirement-2000.html"], ["新NISAの始め方", "article-new-nisa-start.html"], ["FIRE達成の基本戦略", "article-fire-strategy.html"]] },
  "credit-card-investment": { title: "クレカ積立比較シミュレーター", kind: "investment", reason: "クレカ積立はポイント還元が魅力ですが、還元率だけで判断すると本質を見失います。通常積立との差を数字で確認するために作りました。", use: "差額が小さくても、長期ではポイント再投資が効いてきます。新NISAや配当再投資と合わせて、無理なく続く証券口座とカードを選ぶ材料にしてください。", articles: [["楽天証券 vs SBI証券 完全比較", "article-rakuten-sbi-securities-comparison.html"], ["副業向けおすすめクレジットカード比較", "article-credit-card-comparison.html"], ["新NISAの始め方", "article-new-nisa-start.html"]] },
  ideco: { title: "iDeCo節税シミュレーター", kind: "investment", reason: "iDeCoは節税効果がある一方で、原則60歳まで引き出せない制度です。新NISAとは性格が違うため、節税額と将来資産を分けて見る必要があります。", use: "節税額だけでなく、資金拘束も考えてください。老後資金目的ならiDeCo、柔軟性を重視するなら新NISAというように、目的別に使い分ける判断材料になります。", articles: [["iDeCoの始め方", "article-ideco-start.html"], ["新NISAの始め方", "article-new-nisa-start.html"], ["老後資金2000万円問題とは", "article-retirement-2000.html"]] },
  dividend: { title: "配当金シミュレーター", kind: "investment", reason: "配当金は、資産形成の途中でもキャッシュフローを感じやすい投資です。ただし利回りだけを見ると、減配や価格下落のリスクを見落としがちです。", use: "年間配当金と月平均配当金を見て、生活費の何割を補えるか確認してください。再投資するか受け取るかで、資産成長と現金収入のバランスが変わります。", articles: [["FIREとは何か", "article-fire-basic.html"], ["新NISAの始め方", "article-new-nisa-start.html"], ["初心者向けおすすめ証券口座比較", "article-securities-account-comparison.html"]] },
  "dividend-etf": { title: "配当ETF比較シミュレーター", kind: "investment", reason: "高配当ETFは名前だけで選ぶと、配当重視なのか資産成長重視なのかが分かりにくいです。VYM、HDV、SPYD、VIGなどを同じ条件で比較するために作りました。", use: "ETF別比較では、年間配当が大きい候補と最終資産額が大きい候補を分けて見てください。新NISAで使う場合は、非課税枠と外国税の扱いも確認しましょう。", articles: [["楽天証券 vs SBI証券 完全比較", "article-rakuten-sbi-securities-comparison.html"], ["新NISAの始め方", "article-new-nisa-start.html"], ["FIRE達成の基本戦略", "article-fire-strategy.html"]] },
  "dividend-stock": { title: "高配当株比較シミュレーター", kind: "investment", reason: "高配当株は配当利回りだけで選ぶと、減配や株価下落、銘柄集中のリスクを見落としやすいです。ETFと個別株の違いを数字で比べ、FIREに向けて配当収入と資産成長のバランスを確認するために作りました。", use: "年間配当金だけでなく、最終資産額、銘柄別比較、ETFとの比較を合わせて見てください。個別株に偏りすぎる場合は、配当ETFや新NISAの積立と組み合わせて分散するのが現実的です。", articles: [["楽天証券 vs SBI証券 完全比較", "article-rakuten-sbi-securities-comparison.html"], ["新NISAの始め方", "article-new-nisa-start.html"], ["FIRE達成の基本戦略", "article-fire-strategy.html"]] },
  "dividend-mental": { title: "配当メンタル安定度診断", kind: "investment", reason: "配当投資は利回りだけでなく、暴落時に売らずに続けられるかが大切です。高配当株比率、現金比率、生活費、配当依存度をまとめて見て、精神的に続けやすい状態か確認するために作りました。", use: "スコアが低い場合は、高配当株を増やす前に現金比率と分散を整えてください。FIREを目指す場合ほど、配当だけに頼らず、副業収入や生活費削減も残すと安心感が上がります。", articles: [["楽天証券 vs SBI証券 完全比較", "article-rakuten-sbi-securities-comparison.html"], ["FIRE達成の基本戦略", "article-fire-strategy.html"], ["新NISAの始め方", "article-new-nisa-start.html"]] },
  "dividend-reinvestment": { title: "配当再投資シミュレーター", kind: "investment", reason: "配当は受け取るだけでなく、再投資することで資産成長に回せます。短期の満足感と長期の複利効果を比べるために作りました。", use: "再投資による増加額を見て、今は配当を使う時期なのか、資産を増やす時期なのか判断してください。FIRE前は再投資、FIRE後は受け取りという使い分けも考えられます。", articles: [["配当生活達成シミュレーター", "index.html#dividend-life"], ["新NISAの始め方", "article-new-nisa-start.html"], ["FIREとは何か", "article-fire-basic.html"]] },
  "dividend-life": { title: "配当生活達成シミュレーター", kind: "fire", reason: "配当生活は魅力的ですが、必要資産を計算すると現実的な距離感が見えます。生活費を配当だけでまかなうには、利回りと支出の両方を見る必要があります。", use: "必要資産が大きく見える場合は、固定費削減、副業収入、サイドFIREを組み合わせてください。完全な配当生活だけを目指すより、複数の収入源を持つ方が現実的です。", articles: [["FIRE達成の基本戦略", "article-fire-strategy.html"], ["新NISAの始め方", "article-new-nisa-start.html"], ["老後資金2000万円問題とは", "article-retirement-2000.html"]] },
  "dividend-life-years": { title: "配当生活年数シミュレーター", kind: "fire", reason: "配当生活は必要資産だけでなく、今ある資産で何年続くかを見ることも大切です。完全FIRE前に、配当、取り崩し、インフレをまとめて確認するために作りました。", use: "継続年数が短い場合は、生活費を下げる、追加投資を続ける、配当を再投資する、新NISAで非課税枠を使うなど、複数の改善策を組み合わせてください。", articles: [["FIRE達成の基本戦略", "article-fire-strategy.html"], ["新NISAの始め方", "article-new-nisa-start.html"], ["老後資金2000万円問題とは", "article-retirement-2000.html"]] },
  fire: { title: "FIRE達成シミュレーター", kind: "fire", reason: "FIREは憧れだけで考えると遠く感じますが、現在資産、毎月積立、利回り、目標資産に分けると行動へ落とし込めます。40歳までにFIREを目指す運営者自身の確認用としても使っています。", use: "達成年数が長い場合は、積立額を増やすだけでなく、副業収入、固定費削減、新NISA、配当再投資を組み合わせてください。1つの数字を大きく変えるより、複数の改善を積む方が続けやすいです。", articles: [["FIREとは何か", "article-fire-basic.html"], ["FIRE達成の基本戦略", "article-fire-strategy.html"], ["新NISAの始め方", "article-new-nisa-start.html"]] },
  "fire-rate": { title: "FIRE達成率シミュレーター", kind: "fire", reason: "FIREを目指していると、達成年数だけでは今の計画がどれくらい現実的なのか分かりにくいことがあります。現在資産、収支、投資、副業、配当、負債をまとめて見て、40歳までのFIRE目標に対してどこを改善すべきか確認するために作りました。", use: "スコアが低い場合は、積立額だけを無理に増やすより、固定費削減、副業収入、配当再投資、負債整理を組み合わせてください。スコアが高い場合も、生活防衛資金と税金を残したうえで継続できる計画か確認することが大切です。", articles: [["FIRE達成の基本戦略", "article-fire-strategy.html"], ["FIREとは何か", "article-fire-basic.html"], ["新NISAの始め方", "article-new-nisa-start.html"]] },
  "fire-cost-optimization": { title: "FIRE生活費最適化シミュレーター", kind: "fire", reason: "FIREは収入や利回りだけでなく、毎月生活費をいくらで安定させられるかで必要資産が大きく変わります。本業後に副業時間を増やすだけでは限界があるため、生活費改善でFIRE時期をどれだけ短縮できるか見るために作りました。", use: "削減可能額が大きい場合は、無理な節約ではなく固定費から順番に見直してください。削減額を投資へ回す効果と、生活費が下がって必要資産が減る効果を分けて見ると、FIRE計画の優先順位が決めやすくなります。", articles: [["FIRE達成の基本戦略", "article-fire-strategy.html"], ["会社員の副業税金対策", "article-company-side-tax-saving.html"], ["新NISAの始め方", "article-new-nisa-start.html"]] },
  "fire-stress": { title: "FIREストレス診断", kind: "fire", reason: "FIREは資産額だけ達成しても、収入不安や孤独感が残ると続きにくいと感じています。会社員として長時間労働や急な対応を経験する一方で、退職後の過ごし方まで先に考えるために作りました。", use: "スコアが低い場合は、完全FIREを急ぐより、生活費を下げる、副業や配当を残す、趣味や人との接点を作るなど、サイドFIRE寄りの準備を優先してください。", articles: [["31歳会社員が40歳FIREを目指す理由", "article-fire-31-company-worker.html"], ["FIRE達成の基本戦略", "article-fire-strategy.html"], ["老後資金2000万円問題とは", "article-retirement-2000.html"]] },
  "employee-fire": { title: "会社員FIRE年数計算シミュレーター", kind: "fire", reason: "会社員がFIREを目指す場合、給与だけでなく副業収入や配当収入を含めた年数を見る必要があります。運営者も本業を続けながらFIREを目指しているため、会社員目線の現実的な年数を確認できるようにしました。", use: "副業による短縮年数と配当再投資効果を見て、どの行動がFIRE年数を縮めるか確認してください。副業時間が限られる人ほど、固定費削減や投資の自動化も合わせて考えると続きます。", articles: [["FIREとは何か", "article-fire-basic.html"], ["会社員の副業税金対策", "article-company-side-tax-saving.html"], ["副業で月10万円を目指す方法", "article-side-income-100000.html"]] },
  "side-fire": { title: "サイドFIREシミュレーター", kind: "fire", reason: "完全FIREよりも、副業や配当を残しながら働き方を軽くするサイドFIREの方が現実的な人もいます。会社員として忙しく働きながら資産形成する立場から、段階的な自由度を確認するために作りました。", use: "副業収入や配当収入で生活費をどれだけ補えるかを見てください。必要資産が下がる場合は、完全退職より先に働き方を変える選択肢も見えます。", articles: [["FIRE達成の基本戦略", "article-fire-strategy.html"], ["副業で月5万円を稼ぐ方法", "article-side-income-50000.html"], ["配当生活達成シミュレーター", "index.html#dividend-life"]] },
  "cash-flow": { title: "会社員キャッシュフローシミュレーター", kind: "household", reason: "FIREや投資を考える前に、毎月いくら残るかを把握する必要があります。給与、副業、家賃、食費、通信費、保険料、投資額を並べると、改善すべき場所が見えます。", use: "毎月収支が赤字なら、投資額を増やす前に固定費を見直してください。黒字なら、その一部を生活防衛資金や新NISAへ回すことで、資産形成のペースを作れます。", articles: [["FIRE達成の基本戦略", "article-fire-strategy.html"], ["副業で月5万円を稼ぐ方法", "article-side-income-50000.html"], ["新NISAの始め方", "article-new-nisa-start.html"]] },
  "life-cost": { title: "生活コスト最適化シミュレーター", kind: "household", reason: "FIREを目指すと、収入を増やす前に毎月の生活コストをどこまで整えられるかが大きいです。管理職として本業が忙しい中で、副業時間を増やすだけでは限界があるため、固定費と変動費を分けて改善余地を見るために作りました。", use: "削減可能額は、無理な節約ではなく投資へ回しても生活が崩れない範囲を探すために使ってください。固定費削減、キャッシュフロー、FIREシミュレーターと合わせると、毎月の行動が資産形成にどうつながるか見えやすくなります。", articles: [["FIRE達成の基本戦略", "article-fire-strategy.html"], ["副業で月5万円を稼ぐ方法", "article-side-income-50000.html"], ["新NISAの始め方", "article-new-nisa-start.html"]] },
  "emergency-fund": { title: "生活防衛資金シミュレーター", kind: "household", reason: "副業や投資を始める前に、生活防衛資金がないとトラブル時に資産を崩すことになります。現場仕事で急な変化を経験しているからこそ、先に安全資金を見える化したいと考えました。", use: "不足額がある場合は、投資を急ぐより先に数か月分の生活費を確保してください。副業収入がある人も、止まる可能性を考えて保守的に見積もるのがおすすめです。", articles: [["FIRE達成の基本戦略", "article-fire-strategy.html"], ["固定費削減シミュレーター", "index.html#fixed-cost-reduction"], ["老後資金2000万円問題とは", "article-retirement-2000.html"]] },
  "fixed-cost-reduction": { title: "固定費削減シミュレーター", kind: "household", reason: "忙しい会社員にとって、固定費削減は副業より先に効くことがあります。一度見直すと毎月効果が続くため、時間が限られる人ほど優先度が高い改善です。", use: "年間節約額を見たら、その金額を投資へ回した場合の将来資産も確認してください。通信費、保険料、サブスクなど、変えやすい支出から始めると負担が少ないです。", articles: [["FIRE達成の基本戦略", "article-fire-strategy.html"], ["副業向けおすすめクレジットカード比較", "article-credit-card-comparison.html"], ["新NISAの始め方", "article-new-nisa-start.html"]] },
  retirement: { title: "老後資金シミュレーター", kind: "life", reason: "FIREを目指していても、老後資金の不足を無視することはできません。退職時点の資産、年金見込み、生活費を分けて見ることで、必要な積立額が現実的になります。", use: "不足額が大きい場合は、NISA、iDeCo、固定費削減、副業収入を組み合わせてください。退職後の生活費を少し下げるだけでも必要資産は大きく変わります。", articles: [["老後資金2000万円問題とは", "article-retirement-2000.html"], ["iDeCoの始め方", "article-ideco-start.html"], ["新NISAの始め方", "article-new-nisa-start.html"]] },
  education: { title: "教育費シミュレーター", kind: "life", reason: "教育費は進学ルートによって大きく変わります。将来の支出を早めに見ておくことで、老後資金や住宅ローンとのバランスを取りやすくなります。", use: "不足額が出た場合は、毎月積立額を増やすだけでなく、学資保険やNISA、生活費の見直しも合わせて考えてください。老後資金を削りすぎないことも大切です。", articles: [["老後資金2000万円問題とは", "article-retirement-2000.html"], ["新NISAの始め方", "article-new-nisa-start.html"], ["学資保険比較シミュレーター", "index.html#education-insurance"]] },
  "education-insurance": { title: "学資保険比較シミュレーター", kind: "life", reason: "教育費準備では、学資保険の安心感と通常積立投資の成長性を比べる必要があります。どちらが正解かではなく、家庭のリスク許容度に合うかを確認するために作りました。", use: "差額だけでなく、途中解約リスク、元本割れ、投資の値動きも考えてください。教育費と老後資金を同時に圧迫しない積立額を探すことが大切です。", articles: [["教育費シミュレーター", "index.html#education"], ["新NISAの始め方", "article-new-nisa-start.html"], ["老後資金2000万円問題とは", "article-retirement-2000.html"]] },
  mortgage: { title: "住宅ローン返済シミュレーター", kind: "life", reason: "住宅ローンは毎月の固定費に直結し、FIREや老後資金にも影響します。借入額、金利、返済年数を分けて、無理のない返済比率を見たい人向けに作りました。", use: "返済比率が高い場合は、借入額、頭金、固定費、教育費を合わせて見直してください。繰上返済だけでなく、投資や生活防衛資金とのバランスも大切です。", articles: [["固定費削減シミュレーター", "index.html#fixed-cost-reduction"], ["老後資金2000万円問題とは", "article-retirement-2000.html"], ["FIRE達成の基本戦略", "article-fire-strategy.html"]] },
};

const relatedToolGroups = {
  side: [
    ["副業月収シミュレーター", "index.html#side-income"],
    ["副業手取り計算シミュレーター", "index.html#take-home"],
    ["副業利益率シミュレーター", "index.html#side-profit-margin"],
    ["副業時間管理シミュレーター", "index.html#side-time-management"],
    ["副業継続率診断", "index.html#side-continuity"],
    ["副業モチベーション診断", "index.html#side-motivation"],
    ["副業リスク診断", "index.html#side-risk"],
    ["会社員副業安全度診断", "index.html#side-safety"],
  ],
  ai: [
    ["AI副業効率化シミュレーター", "index.html#ai-efficiency"],
    ["AI導入ROIシミュレーター", "index.html#ai-roi"],
    ["AI副業自動化シミュレーター", "index.html#ai-automation"],
    ["AI作業時間削減診断", "index.html#ai-time-reduction"],
    ["AI外注費削減シミュレーター", "index.html#ai-outsourcing"],
    ["AI副業利益最大化シミュレーター", "index.html#ai-profit-max"],
    ["副業時給改善シミュレーター", "index.html#hourly-improvement"],
    ["副業時間管理シミュレーター", "index.html#side-time-management"],
    ["副業継続率診断", "index.html#side-continuity"],
    ["副業モチベーション診断", "index.html#side-motivation"],
    ["副業疲労度シミュレーター", "index.html#side-fatigue"],
  ],
  tax: [
    ["副業税金シミュレーター", "index.html#tax"],
    ["会社員節税シミュレーター", "index.html#employee-tax-saving"],
    ["副業所得税シミュレーター", "index.html#income-tax"],
    ["副業住民税シミュレーター", "index.html#resident-tax"],
    ["副業手取り計算シミュレーター", "index.html#take-home"],
  ],
  investment: [
    ["投資リスク許容度診断", "index.html#investment-risk"],
    ["新NISAシミュレーター", "index.html#nisa"],
    ["新NISA最速積立シミュレーター", "index.html#nisa-fast"],
    ["iDeCo節税シミュレーター", "index.html#ideco"],
    ["配当金シミュレーター", "index.html#dividend"],
    ["高配当株比較シミュレーター", "index.html#dividend-stock"],
    ["配当メンタル安定度診断", "index.html#dividend-mental"],
    ["配当生活年数シミュレーター", "index.html#dividend-life-years"],
    ["クレカ積立比較シミュレーター", "index.html#credit-card-investment"],
  ],
  fire: [
    ["FIRE達成シミュレーター", "index.html#fire"],
    ["FIRE達成率シミュレーター", "index.html#fire-rate"],
    ["FIRE生活費最適化シミュレーター", "index.html#fire-cost-optimization"],
    ["FIREストレス診断", "index.html#fire-stress"],
    ["会社員FIRE年数計算シミュレーター", "index.html#employee-fire"],
    ["サイドFIREシミュレーター", "index.html#side-fire"],
    ["配当生活達成シミュレーター", "index.html#dividend-life"],
    ["配当生活年数シミュレーター", "index.html#dividend-life-years"],
  ],
  household: [
    ["FIRE生活費最適化シミュレーター", "index.html#fire-cost-optimization"],
    ["会社員キャッシュフローシミュレーター", "index.html#cash-flow"],
    ["生活コスト最適化シミュレーター", "index.html#life-cost"],
    ["固定費削減シミュレーター", "index.html#fixed-cost-reduction"],
    ["生活防衛資金シミュレーター", "index.html#emergency-fund"],
    ["住宅ローン返済シミュレーター", "index.html#mortgage"],
  ],
  life: [
    ["老後資金シミュレーター", "index.html#retirement"],
    ["教育費シミュレーター", "index.html#education"],
    ["住宅ローン返済シミュレーター", "index.html#mortgage"],
    ["学資保険比較シミュレーター", "index.html#education-insurance"],
  ],
};

const relatedArticleGroups = {
  side: [
    ["本業後1時間副業を続けるためにやめたこと", "article-after-work-sidejob-1hour.html"],
    ["副業で月5万円を稼ぐ方法", "article-side-income-50000.html"],
    ["管理職をしながらAI副業を続ける現実", "article-ai-sidejob-manager-reality.html"],
    ["副業向けおすすめAIツール比較", "article-ai-tools-comparison.html"],
    ["会社員の副業税金対策", "article-company-side-tax-saving.html"],
  ],
  ai: [
    ["管理職をしながらAI副業を続ける現実", "article-ai-sidejob-manager-reality.html"],
    ["本業後1時間副業を続けるためにやめたこと", "article-after-work-sidejob-1hour.html"],
    ["副業向けおすすめAIツール比較", "article-ai-tools-comparison.html"],
    ["AI副業で収益を上げる方法", "article-ai-side-business.html"],
    ["副業で月5万円を稼ぐ方法", "article-side-income-50000.html"],
  ],
  tax: [
    ["副業の税金完全ガイド", "article-side-tax.html"],
    ["副業の所得税完全ガイド", "article-income-tax-guide.html"],
    ["副業の住民税完全ガイド", "article-resident-tax-guide.html"],
    ["会社員の副業税金対策", "article-company-side-tax-saving.html"],
    ["青色申告の始め方", "article-blue-return-start.html"],
  ],
  investment: [
    ["新NISAの始め方", "article-new-nisa-start.html"],
    ["楽天証券 vs SBI証券 完全比較", "article-rakuten-sbi-securities-comparison.html"],
    ["初心者向けおすすめ証券口座比較", "article-securities-account-comparison.html"],
    ["iDeCoの始め方", "article-ideco-start.html"],
    ["FIREとは何か", "article-fire-basic.html"],
  ],
  fire: [
    ["31歳会社員が40歳FIREを目指す理由", "article-fire-31-company-worker.html"],
    ["FIRE達成の基本戦略", "article-fire-strategy.html"],
    ["FIREとは何か", "article-fire-basic.html"],
    ["新NISAの始め方", "article-new-nisa-start.html"],
    ["本業後1時間副業を続けるためにやめたこと", "article-after-work-sidejob-1hour.html"],
  ],
  household: [
    ["FIRE達成の基本戦略", "article-fire-strategy.html"],
    ["副業向けおすすめクレジットカード比較", "article-credit-card-comparison.html"],
    ["新NISAの始め方", "article-new-nisa-start.html"],
    ["副業で月5万円を稼ぐ方法", "article-side-income-50000.html"],
    ["会社員の副業税金対策", "article-company-side-tax-saving.html"],
  ],
  life: [
    ["老後資金2000万円問題とは", "article-retirement-2000.html"],
    ["新NISAの始め方", "article-new-nisa-start.html"],
    ["iDeCoの始め方", "article-ideco-start.html"],
    ["FIREとは何か", "article-fire-basic.html"],
    ["FIRE達成の基本戦略", "article-fire-strategy.html"],
  ],
};

const nextReadFlows = {
  side: [
    {
      title: "本業後1時間副業を続けるためにやめたこと",
      href: "article-after-work-sidejob-1hour.html",
      desc: "副業を始める前に、忙しい会社員でも続く時間設計を確認できます。",
      reason: "副業の入口として、まず無理な作業計画を避けるため"
    },
    {
      title: "副業税金の基礎知識",
      href: "article-side-tax.html",
      desc: "副業収入が出たあとに必要な所得、経費、住民税の考え方を整理します。",
      reason: "収入が増えた次に、税金と手取りを確認するため"
    },
    {
      title: "固定費削減シミュレーター",
      href: "index.html#fixed-cost-reduction",
      desc: "副業で増やすだけでなく、毎月の支出を下げて投資余力を作ります。",
      reason: "副業収入を使い切らず、家計改善へつなげるため"
    },
    {
      title: "新NISAの始め方",
      href: "article-new-nisa-start.html",
      desc: "副業と固定費改善で作った余力を長期投資へ回す入口です。",
      reason: "副業から投資へ進む流れを作るため"
    },
    {
      title: "31歳会社員が40歳FIREを目指す理由",
      href: "article-fire-31-company-worker.html",
      desc: "副業、固定費改善、NISAをFIRE目標につなげる実体験記事です。",
      reason: "最後にFIREまでの全体像へ接続するため"
    }
  ],
  ai: [
    {
      title: "管理職をしながらAI副業を続ける現実",
      href: "article-ai-sidejob-manager-reality.html",
      desc: "本業後の疲労がある中で、AIをどう使って副業を続けるかを整理します。",
      reason: "AI副業を現実的な時短手段として見るため"
    },
    {
      title: "本業後1時間副業を続けるためにやめたこと",
      href: "article-after-work-sidejob-1hour.html",
      desc: "AI活用の前に、平日1時間でも進む作業設計を確認できます。",
      reason: "AIで短縮する前に、作業時間の枠を決めるため"
    },
    {
      title: "副業税金の基礎知識",
      href: "article-side-tax.html",
      desc: "AI副業で収益が出たあとに必要な税金の入口です。",
      reason: "AIで収益化した後の手取りを守るため"
    },
    {
      title: "副業向けおすすめAIツール比較",
      href: "article-ai-tools-comparison.html",
      desc: "ChatGPT、Claude、Gemini、Canvaなどを副業用途で比較します。",
      reason: "自分の副業に合うAIツールを選ぶため"
    }
  ],
  tax: [
    {
      title: "副業税金の基礎知識",
      href: "article-side-tax.html",
      desc: "副業収入、経費、所得税、住民税の基本をまとめています。",
      reason: "税金ページの前提を押さえるため"
    },
    {
      title: "会社員の副業税金対策",
      href: "article-company-side-tax-saving.html",
      desc: "会社員が副業収入を得たときに見ておきたい税金対策です。",
      reason: "税金を払うだけでなく、事前準備へつなげるため"
    },
    {
      title: "固定費削減シミュレーター",
      href: "index.html#fixed-cost-reduction",
      desc: "納税後に残るお金を増やすため、毎月の支出も見直します。",
      reason: "税金確認の次に、家計改善へ進むため"
    },
    {
      title: "新NISAの始め方",
      href: "article-new-nisa-start.html",
      desc: "手取りや固定費を整えたあと、長期投資の入口を確認します。",
      reason: "残ったお金を資産形成へ回すため"
    }
  ],
  household: [
    {
      title: "本業後1時間副業を続けるためにやめたこと",
      href: "article-after-work-sidejob-1hour.html",
      desc: "家計改善と副業時間を両立するための実体験記事です。",
      reason: "支出を整える前に、収入づくりの現実も見るため"
    },
    {
      title: "固定費削減シミュレーター",
      href: "index.html#fixed-cost-reduction",
      desc: "通信費、保険料、サブスクなどの削減余地を確認できます。",
      reason: "家計改善の中心になる固定費を具体化するため"
    },
    {
      title: "新NISAの始め方",
      href: "article-new-nisa-start.html",
      desc: "削減できたお金を長期投資へ回す考え方です。",
      reason: "節約を投資余力へ変えるため"
    },
    {
      title: "31歳会社員が40歳FIREを目指す理由",
      href: "article-fire-31-company-worker.html",
      desc: "固定費改善をFIRE目標へつなげる背景を確認できます。",
      reason: "家計改善を将来の自由度へつなげるため"
    }
  ],
  investment: [
    {
      title: "新NISAの始め方",
      href: "article-new-nisa-start.html",
      desc: "長期投資を始める前に、制度と積立の基本を確認します。",
      reason: "投資カテゴリの入口として制度を押さえるため"
    },
    {
      title: "楽天証券 vs SBI証券 完全比較",
      href: "article-rakuten-sbi-securities-comparison.html",
      desc: "新NISA、クレカ積立、高配当投資の使いやすさを比較します。",
      reason: "投資を始める口座選びへ進むため"
    },
    {
      title: "31歳会社員が40歳FIREを目指す理由",
      href: "article-fire-31-company-worker.html",
      desc: "投資をFIRE目標にどうつなげるかを実体験で確認できます。",
      reason: "投資を目的化せず、FIRE戦略へ接続するため"
    },
    {
      title: "老後資金2000万円問題とは",
      href: "article-retirement-2000.html",
      desc: "投資と老後資金を同時に考えるための記事です。",
      reason: "FIRE後や老後まで視野を広げるため"
    }
  ],
  fire: [
    {
      title: "31歳会社員が40歳FIREを目指す理由",
      href: "article-fire-31-company-worker.html",
      desc: "会社員収入だけに依存しないためにFIREを考えた背景です。",
      reason: "FIREを目指す動機と現実感を確認するため"
    },
    {
      title: "本業後1時間副業を続けるためにやめたこと",
      href: "article-after-work-sidejob-1hour.html",
      desc: "FIREへ向けて副業収入を作るための時間設計です。",
      reason: "FIREの前段階として副業収入を考えるため"
    },
    {
      title: "新NISAの始め方",
      href: "article-new-nisa-start.html",
      desc: "FIRE資産を作るための長期投資の入口です。",
      reason: "副業と固定費改善で作った余力を投資へ回すため"
    },
    {
      title: "老後資金2000万円問題とは",
      href: "article-retirement-2000.html",
      desc: "FIRE後も続く老後資金の不安を整理します。",
      reason: "FIREと老後資金を切り離さず考えるため"
    }
  ],
  life: [
    {
      title: "老後資金2000万円問題とは",
      href: "article-retirement-2000.html",
      desc: "将来の生活費と必要資金を考える入口です。",
      reason: "ライフプラン全体の前提を確認するため"
    },
    {
      title: "固定費削減シミュレーター",
      href: "index.html#fixed-cost-reduction",
      desc: "教育費、住宅、老後資金に備えるため毎月支出を整えます。",
      reason: "大きな支出に備える前に家計を軽くするため"
    },
    {
      title: "新NISAの始め方",
      href: "article-new-nisa-start.html",
      desc: "将来資金を長期で準備するための基本です。",
      reason: "老後・教育・住宅の準備を投資へつなげるため"
    },
    {
      title: "31歳会社員が40歳FIREを目指す理由",
      href: "article-fire-31-company-worker.html",
      desc: "将来不安からFIREを目指す背景を確認できます。",
      reason: "老後や教育費とFIRE目標の関係を見るため"
    }
  ],
  default: [
    {
      title: "本業後1時間副業を続けるためにやめたこと",
      href: "article-after-work-sidejob-1hour.html",
      desc: "忙しい会社員が副業時間を作る実体験記事です。",
      reason: "このサイトの実体験軸を知るため"
    },
    {
      title: "副業税金の基礎知識",
      href: "article-side-tax.html",
      desc: "副業収入が出た後に必要な税金の入口です。",
      reason: "収入から手取りへつなげるため"
    },
    {
      title: "新NISAの始め方",
      href: "article-new-nisa-start.html",
      desc: "副業や固定費改善で作った余力を投資へ回します。",
      reason: "家計改善を資産形成へつなげるため"
    },
    {
      title: "31歳会社員が40歳FIREを目指す理由",
      href: "article-fire-31-company-worker.html",
      desc: "副業、固定費、投資をFIRE目標へつなげる記事です。",
      reason: "最終的な資産形成の方向性を確認するため"
    }
  ]
};

function buildNextReadCards(kind = "default", currentHref = "") {
  const items = [...(nextReadFlows[kind] || nextReadFlows.default), ...nextReadFlows.default]
    .filter((item, index, array) => item.href !== currentHref && array.findIndex((other) => other.href === item.href) === index)
    .slice(0, 4);

  return items.map((item) => `
            <a class="next-read-card" href="${item.href}">
              <strong>${item.title}</strong>
              <span>${item.desc}</span>
              <span class="next-read-reason">関連理由：${item.reason}</span>
            </a>`).join("");
}

function buildNextReadSection(kind = "default", currentHref = "") {
  return `
        <section class="next-read-section" aria-label="次に読むべき記事">
          <section class="tool-heading">
            <h2>次に読むべき記事</h2>
            <p>副業から税金、固定費改善、投資、FIREへ進めるように、悩みの流れでつながる記事を選んでいます。</p>
          </section>
          <div class="next-read-grid">${buildNextReadCards(kind, currentHref)}
          </div>
        </section>`;
}

function buildRelatedToolLinks(kind, currentRoute) {
  const currentHref = `index.html#${currentRoute}`;
  const fallback = [
    ["新NISAシミュレーター", "index.html#nisa"],
    ["FIRE達成シミュレーター", "index.html#fire"],
    ["副業月収シミュレーター", "index.html#side-income"],
    ["生活コスト最適化シミュレーター", "index.html#life-cost"],
    ["固定費削減シミュレーター", "index.html#fixed-cost-reduction"],
  ];
  const links = [...(relatedToolGroups[kind] || relatedToolGroups.side), ...fallback]
    .filter(([, href], index, array) => href !== currentHref && array.findIndex(([, otherHref]) => otherHref === href) === index)
    .slice(0, 5);

  return links.map(([label, href]) => `<a href="${href}">${label}</a>`).join("");
}

function buildExperienceSection(profile) {
  const experience = operatorExperience[profile.kind] || operatorExperience.side;
  const route = Object.keys(routeExperienceProfiles).find((key) => routeExperienceProfiles[key] === profile);
  const articleLinks = [...profile.articles, ...(relatedArticleGroups[profile.kind] || relatedArticleGroups.side)]
    .filter(([, href], index, array) => array.findIndex(([, otherHref]) => otherHref === href) === index)
    .slice(0, 5);
  const links = articleLinks.map(([label, href]) => `<a href="${href}">${label}</a>`).join("");
  const relatedTools = buildRelatedToolLinks(profile.kind, route);
  return `
        <section class="article-section" aria-label="${profile.title}の実体験ベース解説">
          <section class="tool-heading">
            <h2>${profile.title}の使い方と運営者メモ</h2>
            <p>計算結果をただ眺めるだけで終わらせず、忙しい会社員が副業・資産形成へつなげるための見方をまとめています。</p>
          </section>
          <div class="experience-block">
            <h3>このシミュレーターを作った理由</h3>
            <p>${profile.reason}</p>
            <p>お金の不安は、漠然と考えていると大きく見えます。入力項目を分けて数字にすると、今日見直せるもの、数か月かけて改善するもの、長期で積み上げるものが整理しやすくなります。</p>
          </div>
          <div class="experience-block">
            <h3>運営者の実体験</h3>
            <p>${experience}</p>
            <p>会社員として働きながら副業、AI活用、NISA、固定費削減、長期投資を試していると、理想通りに時間を使えない日の方が多いと感じます。だからこのサイトでは、短時間でも確認でき、数字を変えながら自分の条件に近づけられることを重視しています。</p>
          </div>
          <div class="experience-block">
            <h3>この結果をどう活用するか</h3>
            <p>${profile.use}</p>
            <p>一度の計算で結論を出すより、収入が少ない場合、支出を下げた場合、積立額を増やした場合など、複数パターンを試すのがおすすめです。特に副業収入を投資へ回す場合は、税金と生活防衛資金を先に見てから無理のない金額を決めてください。</p>
          </div>
          ${buildNextReadSection(profile.kind)}
          <div class="experience-block">
            <h3>おすすめ関連記事</h3>
            <p>このページと合わせて読むと、計算結果を行動に移しやすくなります。</p>
            <div class="related-links">${links}</div>
          </div>
          <div class="experience-block">
            <h3>関連ツール</h3>
            <p>近いテーマのシミュレーターをカテゴリ連動・人気順優先で5件表示しています。</p>
            <div class="related-links">${relatedTools}</div>
          </div>
        </section>`;
}

function insertExperienceSections() {
  Object.entries(routeExperienceProfiles).forEach(([route, profile]) => {
    const view = document.querySelector(`[data-view="${route}"]`);
    if (!view || view.querySelector(".article-section")) {
      return;
    }

    const faq = view.querySelector(".faq-panel");
    const workspace = view.querySelector(".workspace");
    const section = document.createElement("div");
    section.innerHTML = buildExperienceSection(profile).trim();
    const articleSection = section.firstElementChild;

    if (faq) {
      faq.insertAdjacentElement("afterend", articleSection);
    } else if (workspace) {
      workspace.insertAdjacentElement("afterend", articleSection);
    } else {
      view.appendChild(articleSection);
    }
  });
}

try {
  insertExperienceSections();
} catch (error) {
  console.warn("体験談セクションの追加をスキップしました。", error);
}

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
  aiAutomationHours: { label: "現在の副業作業時間", min: 0.1, max: 10000, unit: "時間", integer: false },
  aiAutomationSales: { label: "現在の副業売上", min: 0, max: 1000000000, unit: "円", integer: false },
  aiAutomationRate: { label: "自動化可能割合", min: 0, max: 95, unit: "%", integer: false },
  aiAutomationCost: { label: "AIツール月額費用", min: 0, max: 10000000, unit: "円", integer: false },
  aiAutomationOutsourcing: { label: "外注費", min: 0, max: 1000000000, unit: "円", integer: false },
  aiAutomationHourly: { label: "現在の時給", min: 0, max: 1000000, unit: "円", integer: false },
  aiAutomationTargetIncome: { label: "目標月収", min: 0, max: 1000000000, unit: "円", integer: false },
  aiTimeReductionHours: { label: "現在の作業時間", min: 0.1, max: 10000, unit: "時間", integer: false },
  aiTimeReductionHourly: { label: "現在の時給", min: 0, max: 1000000, unit: "円", integer: false },
  aiTimeReductionTargetIncome: { label: "目標月収", min: 0, max: 1000000000, unit: "円", integer: false },
  aiProfitSales: { label: "現在の副業売上", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  aiProfitMargin: { label: "現在の利益率", min: 0, max: 100, unit: "%", integer: false },
  aiProfitHours: { label: "現在の作業時間", min: 0.1, max: 10000, unit: "\u6642\u9593", integer: false },
  aiProfitToolCost: { label: "AIツール月額費用", min: 0, max: 10000000, unit: "\u5186", integer: false },
  aiProfitReduction: { label: "AIによる時短率", min: 0, max: 95, unit: "%", integer: false },
  aiProfitOutsourcingReduction: { label: "外注費削減額", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  aiProfitSalesIncrease: { label: "AI導入後の売上増加率", min: 0, max: 300, unit: "%", integer: false },
  aiProfitTargetIncome: { label: "目標月収", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  aiOutsourcingCost: { label: "現在の外注費", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  aiOutsourcingAiCost: { label: "AI導入費用", min: 0, max: 10000000, unit: "\u5186", integer: false },
  aiOutsourcingReduction: { label: "AIによる削減率", min: 0, max: 95, unit: "%", integer: false },
  aiOutsourcingSales: { label: "現在の副業売上", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  aiOutsourcingMargin: { label: "現在の利益率", min: 0, max: 100, unit: "%", integer: false },
  aiOutsourcingHours: { label: "作業時間", min: 0.1, max: 10000, unit: "\u6642\u9593", integer: false },
  aiOutsourcingHourlyRate: { label: "時給単価", min: 0, max: 1000000, unit: "\u5186", integer: false },
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
  fatigueMainJobHours: { label: "本業勤務時間", min: 0, max: 24, unit: "\u6642\u9593", integer: false },
  fatigueCommuteHours: { label: "通勤時間", min: 0, max: 8, unit: "\u6642\u9593", integer: false },
  fatigueSideHours: { label: "副業時間", min: 0, max: 168, unit: "\u6642\u9593", integer: false },
  fatigueSleepHours: { label: "睡眠時間", min: 0, max: 24, unit: "\u6642\u9593", integer: false },
  fatigueHolidayDays: { label: "休日数", min: 0, max: 7, unit: "\u65e5", integer: false },
  fatigueExerciseHours: { label: "運動時間", min: 0, max: 40, unit: "\u6642\u9593", integer: false },
  fatigueStressLevel: { label: "ストレス度", min: 1, max: 10, unit: "", integer: true },
  continuitySideHours: { label: "副業時間", min: 0, max: 168, unit: "時間", integer: false },
  continuityMainJobHours: { label: "本業勤務時間", min: 0, max: 24, unit: "時間", integer: false },
  continuitySleepHours: { label: "睡眠時間", min: 0, max: 24, unit: "時間", integer: false },
  continuityIncome: { label: "副業月収", min: 0, max: 1000000000, unit: "円", integer: false },
  continuityFatigueLevel: { label: "疲労度", min: 1, max: 10, unit: "", integer: true },
  continuityTargetIncome: { label: "目標月収", min: 0, max: 1000000000, unit: "円", integer: false },
  motivationTargetIncome: { label: "副業目標月収", min: 0, max: 1000000000, unit: "円", integer: false },
  motivationCurrentIncome: { label: "現在の副業月収", min: 0, max: 1000000000, unit: "円", integer: false },
  motivationMainJobHours: { label: "本業勤務時間", min: 0, max: 24, unit: "時間", integer: false },
  motivationSideHours: { label: "副業時間", min: 0, max: 168, unit: "時間", integer: false },
  motivationSleepHours: { label: "睡眠時間", min: 0, max: 24, unit: "時間", integer: false },
  motivationFatigueLevel: { label: "疲労度", min: 1, max: 10, unit: "", integer: true },
  motivationHobbyHours: { label: "趣味時間", min: 0, max: 168, unit: "時間", integer: false },
  motivationMonths: { label: "継続期間", min: 0, max: 600, unit: "か月", integer: true },
  sideRiskHours: { label: "副業時間", min: 0, max: 168, unit: "\u6642\u9593", integer: false },
  sideRiskMainJobHours: { label: "本業勤務時間", min: 0, max: 24, unit: "\u6642\u9593", integer: false },
  sideRiskIncome: { label: "副業収入", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  sideRiskDependence: { label: "収益依存度", min: 0, max: 100, unit: "%", integer: false },
  sideRiskSleepHours: { label: "睡眠時間", min: 0, max: 24, unit: "\u6642\u9593", integer: false },
  sideSafetyIncome: { label: "副業月収", min: 0, max: 1000000000, unit: "円", integer: false },
  sideSafetyMainJobHours: { label: "本業勤務時間", min: 0, max: 24, unit: "時間", integer: false },
  sideSafetyHours: { label: "副業作業時間", min: 0, max: 168, unit: "時間", integer: false },
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
  employeeTaxIncome: { label: "年収", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  employeeTaxIdeco: { label: "iDeCo掛金", min: 0, max: 68000, unit: "\u5186", integer: false },
  employeeTaxNisa: { label: "新NISA積立額", min: 0, max: 300000, unit: "\u5186", integer: false },
  employeeTaxSideIncome: { label: "副業所得", min: 0, max: 1000000000, unit: "\u5186", integer: false },
  employeeTaxFurusato: { label: "ふるさと納税額", min: 0, max: 10000000, unit: "\u5186", integer: false },
  employeeTaxInsurance: { label: "保険控除額", min: 0, max: 1000000, unit: "\u5186", integer: false },
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
  nisaFastAge: { label: "現在年齢", min: 0, max: 100, unit: "\u6b73", integer: true },
  nisaFastMonthly: { label: "毎月積立額", min: 0, max: 300000, unit: "\u5186", integer: false },
  nisaFastBonus: { label: "ボーナス積立額", min: 0, max: 2400000, unit: "\u5186", integer: false },
  nisaFastReturn: { label: "想定年利", min: 0, max: 30, unit: "%", integer: false },
  nisaFastYears: { label: "運用年数", min: 1, max: 100, unit: "\u5e74", integer: true },
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
  fireRateAge: { label: "現在年齢", min: 0, max: 100, unit: "\u6b73", integer: true },
  fireRateTargetAge: { label: "目標FIRE年齢", min: 1, max: 100, unit: "\u6b73", integer: true },
  fireRateAssets: { label: "現在資産", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  fireRateMonthlyInvestment: { label: "毎月積立額", min: 0, max: 100000000, unit: "\u5186", integer: false },
  fireRateSideIncome: { label: "副業収入", min: 0, max: 100000000, unit: "\u5186", integer: false },
  fireRateAnnualLivingCost: { label: "年間生活費", min: 1, max: 1000000000, unit: "\u5186", integer: false },
  fireRateReturn: { label: "想定年利", min: 0, max: 30, unit: "%", integer: false },
  fireRateDividendIncome: { label: "配当収入", min: 0, max: 100000000, unit: "\u5186", integer: false },
  fireCostAge: { label: "現在年齢", min: 0, max: 100, unit: "歳", integer: true },
  fireCostTargetAge: { label: "目標FIRE年齢", min: 1, max: 100, unit: "歳", integer: true },
  fireCostAssets: { label: "現在資産", min: 0, max: 10000000000, unit: "円", integer: false },
  fireCostMonthlyCost: { label: "毎月生活費", min: 1, max: 100000000, unit: "円", integer: false },
  fireCostReducibleCost: { label: "削減可能生活費", min: 0, max: 100000000, unit: "円", integer: false },
  fireCostMonthlyInvestment: { label: "毎月投資額", min: 0, max: 100000000, unit: "円", integer: false },
  fireCostSideIncome: { label: "副業収入", min: 0, max: 100000000, unit: "円", integer: false },
  fireCostReturn: { label: "想定年利", min: 0, max: 30, unit: "%", integer: false },
  fireCostDividendIncome: { label: "配当収入", min: 0, max: 100000000, unit: "円", integer: false },
  fireStressAge: { label: "現在年齢", min: 0, max: 100, unit: "歳", integer: true },
  fireStressAssets: { label: "現在資産", min: 0, max: 10000000000, unit: "円", integer: false },
  fireStressMonthlyCost: { label: "毎月生活費", min: 1, max: 100000000, unit: "円", integer: false },
  fireStressSideIncome: { label: "副業収入", min: 0, max: 100000000, unit: "円", integer: false },
  fireStressDividendIncome: { label: "配当収入", min: 0, max: 100000000, unit: "円", integer: false },
  fireStressWorkStress: { label: "仕事ストレス度", min: 1, max: 10, unit: "", integer: true },
  fireStressSolitudeTolerance: { label: "孤独耐性", min: 1, max: 10, unit: "", integer: true },
  fireStressTargetAge: { label: "FIRE希望年齢", min: 1, max: 100, unit: "歳", integer: true },
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
  investmentRiskAge: { label: "年齢", min: 18, max: 100, unit: "歳", integer: true },
  investmentRiskIncome: { label: "年収", min: 0, max: 1000000000, unit: "円", integer: false },
  investmentRiskAssets: { label: "総資産", min: 0, max: 10000000000, unit: "円", integer: false },
  investmentRiskExperience: { label: "投資経験年数", min: 0, max: 80, unit: "年", integer: false },
  investmentRiskAmount: { label: "投資額", min: 0, max: 10000000000, unit: "円", integer: false },
  dividendEtfInitial: { label: "初期投資額", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  dividendEtfMonthly: { label: "毎月積立額", min: 0, max: 100000000, unit: "\u5186", integer: false },
  dividendEtfYield: { label: "想定配当利回り", min: 0, max: 30, unit: "%", integer: false },
  dividendEtfGrowth: { label: "想定株価成長率", min: -30, max: 30, unit: "%", integer: false },
  dividendEtfYears: { label: "運用年数", min: 1, max: 100, unit: "\u5e74", integer: true },
  dividendStockInitial: { label: "初期投資額", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  dividendStockMonthly: { label: "毎月追加投資額", min: 0, max: 100000000, unit: "\u5186", integer: false },
  dividendStockYield: { label: "想定配当利回り", min: 0, max: 30, unit: "%", integer: false },
  dividendStockGrowth: { label: "想定株価成長率", min: -30, max: 30, unit: "%", integer: false },
  dividendStockYears: { label: "運用年数", min: 1, max: 100, unit: "\u5e74", integer: true },
  dividendMentalAssets: { label: "現在資産", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  dividendMentalHighDividendRatio: { label: "高配当株比率", min: 0, max: 100, unit: "%", integer: false },
  dividendMentalMonthlyCost: { label: "毎月生活費", min: 0, max: 100000000, unit: "\u5186", integer: false },
  dividendMentalIncome: { label: "配当収入", min: 0, max: 100000000, unit: "\u5186", integer: false },
  dividendMentalExperience: { label: "投資経験年数", min: 0, max: 80, unit: "\u5e74", integer: false },
  dividendMentalCrashTolerance: { label: "暴落耐性", min: 1, max: 10, unit: "", integer: true },
  dividendMentalCashRatio: { label: "現金比率", min: 0, max: 100, unit: "%", integer: false },
  dividendLifeMonthlyCost: { label: "毎月生活費", min: 0, max: 100000000, unit: "\u5186", integer: false },
  dividendLifeAssets: { label: "現在資産", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  dividendLifeMonthly: { label: "毎月積立額", min: 0, max: 100000000, unit: "\u5186", integer: false },
  dividendLifeYield: { label: "想定配当利回り", min: 0.1, max: 30, unit: "%", integer: false },
  dividendLifeReturn: { label: "想定年利", min: 0, max: 30, unit: "%", integer: false },
  dividendLifeYears: { label: "運用年数", min: 1, max: 100, unit: "\u5e74", integer: true },
  dividendLifeYearsAssets: { label: "現在資産", min: 0, max: 10000000000, unit: "\u5186", integer: false },
  dividendLifeYearsLivingCost: { label: "毎月生活費", min: 0, max: 100000000, unit: "\u5186", integer: false },
  dividendLifeYearsYield: { label: "想定配当利回り", min: 0, max: 30, unit: "%", integer: false },
  dividendLifeYearsMonthlyInvestment: { label: "毎月追加投資額", min: 0, max: 100000000, unit: "\u5186", integer: false },
  dividendLifeYearsReturn: { label: "想定年利", min: -30, max: 30, unit: "%", integer: false },
  dividendLifeYearsInflation: { label: "インフレ率", min: 0, max: 20, unit: "%", integer: false },
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
  lifeCostRent: { label: "家賃", min: 0, max: 100000000, unit: "\u5186", integer: false },
  lifeCostCommunication: { label: "通信費", min: 0, max: 100000000, unit: "\u5186", integer: false },
  lifeCostInsurance: { label: "保険料", min: 0, max: 100000000, unit: "\u5186", integer: false },
  lifeCostFood: { label: "食費", min: 0, max: 100000000, unit: "\u5186", integer: false },
  lifeCostUtilities: { label: "光熱費", min: 0, max: 100000000, unit: "\u5186", integer: false },
  lifeCostTransport: { label: "交通費", min: 0, max: 100000000, unit: "\u5186", integer: false },
  lifeCostSubscription: { label: "サブスク費用", min: 0, max: 100000000, unit: "\u5186", integer: false },
  lifeCostEntertainment: { label: "娯楽費", min: 0, max: 100000000, unit: "\u5186", integer: false },
  lifeCostInvestment: { label: "投資額", min: 0, max: 100000000, unit: "\u5186", integer: false },
  lifeCostSideIncome: { label: "副業収入", min: 0, max: 100000000, unit: "\u5186", integer: false },
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

function renderSideFatigue() {
  const values = {
    fatigueMainJobHours: getFieldValue("fatigueMainJobHours"),
    fatigueCommuteHours: getFieldValue("fatigueCommuteHours"),
    fatigueSideHours: getFieldValue("fatigueSideHours"),
    fatigueSleepHours: getFieldValue("fatigueSleepHours"),
    fatigueHolidayDays: getFieldValue("fatigueHolidayDays"),
    fatigueExerciseHours: getFieldValue("fatigueExerciseHours"),
    fatigueStressLevel: getFieldValue("fatigueStressLevel"),
  };
  let hasError = Object.values(values).some((item) => !item.valid);

  const fixedWeekdayHours = values.fatigueMainJobHours.valid && values.fatigueCommuteHours.valid && values.fatigueSleepHours.valid
    ? values.fatigueMainJobHours.value + values.fatigueCommuteHours.value + values.fatigueSleepHours.value
    : 0;
  if (!hasError && fixedWeekdayHours > 24) {
    document.querySelector("#fatigueMainJobHoursError").textContent = "本業・通勤・睡眠の合計が24時間を超えています。";
    document.querySelector("#fatigueMainJobHours").setAttribute("aria-invalid", "true");
    hasError = true;
  }

  document.querySelector("#sideFatigueNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("fatigueScore", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("sideFatigueContinuationRisk", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("burnoutRisk", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("fatigueImprovementPoint", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("fatigueAiEffect", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("fatigueTimeManagementGuide", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("fatigueFireImpact", "\u5165\u529b\u30a8\u30e9\u30fc");
    return;
  }

  const mainJob = values.fatigueMainJobHours.value;
  const commute = values.fatigueCommuteHours.value;
  const sideHours = values.fatigueSideHours.value;
  const sleep = values.fatigueSleepHours.value;
  const holidays = values.fatigueHolidayDays.value;
  const exercise = values.fatigueExerciseHours.value;
  const stress = values.fatigueStressLevel.value;
  const aiUse = document.querySelector("#fatigueAiUse").checked;
  const weeklyWorkLoad = (mainJob + commute) * 5 + sideHours;
  const sleepPenalty = Math.max(7 - sleep, 0) * 9;
  const sidePenalty = Math.max(sideHours - 8, 0) * 1.8 + Math.max(sideHours - 15, 0) * 1.2;
  const jobPenalty = Math.max(weeklyWorkLoad - 50, 0) * 0.9;
  const holidayPenalty = Math.max(2 - holidays, 0) * 12;
  const stressPenalty = stress * 5.5;
  const exerciseBonus = Math.min(exercise, 4) * 3;
  const aiBonus = aiUse ? Math.min(sideHours * 0.18, 5) : 0;
  const score = Math.max(0, Math.min(100, Math.round(18 + sleepPenalty + sidePenalty + jobPenalty + holidayPenalty + stressPenalty - exerciseBonus - aiBonus)));
  const aiSavedHours = aiUse ? sideHours * 0.18 : 0;
  const adjustedSideHours = Math.max(sideHours - aiSavedHours, 0);

  const continuationRisk = score >= 75
    ? "高リスク。副業時間を減らし、睡眠と休日を先に戻す目安です"
    : score >= 55
      ? "中リスク。繁忙期は副業量を抑え、作業日を固定しましょう"
      : "低〜中リスク。現状は続けやすいですが、睡眠と休日の記録は続けましょう";
  const burnout = score >= 80 || (sleep < 6 && stress >= 8)
    ? "burnoutリスク高め。短期収益より休息と相談先の確保を優先してください"
    : score >= 60 || stress >= 7
      ? "burnoutリスク中程度。副業を毎日詰め込まず、休む日を決めましょう"
      : "burnoutリスクは低めの目安です。無理に作業量を増やしすぎないことが大切です";
  const improvement = sleep < 6.5
    ? "まず睡眠時間を30分増やすのが優先です"
    : holidays < 1.5
      ? "休日を最低1.5日分は確保し、副業を入れない時間を作りましょう"
      : stress >= 8
        ? "ストレス度が高めです。案件数や納期、連絡頻度の見直しが有効です"
        : sideHours >= 15
          ? "副業時間が多めです。AI活用や単価アップで作業時間を圧縮しましょう"
          : "現状は継続しやすい範囲です。運動と睡眠を崩さずに副業を続けましょう";
  const aiEffect = aiUse
    ? `AI活用により週${aiSavedHours.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}時間ほど負荷を下げる目安です`
    : "AI未活用です。調査、下書き、要約をAIに寄せると疲労軽減につながります";
  const timeGuide = adjustedSideHours >= 10
    ? "副業時間管理シミュレーターで、平日と休日の作業配分をさらに確認しましょう"
    : "副業時間は抑えめです。時給改善とAI効率化で収益性を確認しましょう";
  const fireImpact = score >= 70
    ? "疲労度が高いまま副業を続けると、FIREのための長期継続が崩れやすい状態です"
    : sideHours >= 8
      ? "副業時間を継続できれば、投資原資を増やしてFIRE達成を後押ししやすい状態です"
      : "疲労を抑えながら小さく続ける段階です。固定費削減やNISAと組み合わせましょう";

  setText("fatigueScore", `${score} / 100`);
  setText("sideFatigueContinuationRisk", continuationRisk);
  setText("burnoutRisk", burnout);
  setText("fatigueImprovementPoint", improvement);
  setText("fatigueAiEffect", aiEffect);
  setText("fatigueTimeManagementGuide", timeGuide);
  setText("fatigueFireImpact", fireImpact);
}


function renderSideContinuity() {
  const values = {
    continuitySideHours: getFieldValue("continuitySideHours"),
    continuityMainJobHours: getFieldValue("continuityMainJobHours"),
    continuitySleepHours: getFieldValue("continuitySleepHours"),
    continuityIncome: getFieldValue("continuityIncome"),
    continuityFatigueLevel: getFieldValue("continuityFatigueLevel"),
    continuityTargetIncome: getFieldValue("continuityTargetIncome"),
  };
  let hasError = Object.values(values).some((item) => !item.valid);
  const fixedDaily = values.continuityMainJobHours.valid && values.continuitySleepHours.valid ? values.continuityMainJobHours.value + values.continuitySleepHours.value : 0;
  if (!hasError && fixedDaily > 24) {
    document.querySelector("#continuityMainJobHoursError").textContent = "本業勤務時間と睡眠時間の合計が24時間を超えています。";
    document.querySelector("#continuityMainJobHours").setAttribute("aria-invalid", "true");
    hasError = true;
  }
  document.querySelector("#sideContinuityNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("continuityScore", "入力エラー");
    setText("continuityDropoutRisk", "入力エラー");
    setText("continuityImprovement", "入力エラー");
    setText("continuityAiEffect", "入力エラー");
    setText("continuityIncomeGap", "入力エラー");
    setText("continuityRelatedTools", "入力エラー");
    return;
  }
  const sideHours = values.continuitySideHours.value;
  const mainJobHours = values.continuityMainJobHours.value;
  const sleepHours = values.continuitySleepHours.value;
  const monthlyIncome = values.continuityIncome.value;
  const fatigueLevel = values.continuityFatigueLevel.value;
  const targetIncome = values.continuityTargetIncome.value;
  const aiUse = document.querySelector("#continuityAiUse").checked;
  const incomeRate = targetIncome > 0 ? Math.min(monthlyIncome / targetIncome, 1.4) : 1;
  const aiSavedHours = aiUse ? sideHours * 0.2 : 0;
  const effectiveSideHours = Math.max(sideHours - aiSavedHours, 0);
  let score = 72;
  score += Math.min(incomeRate, 1) * 18;
  score += aiUse ? 6 : 0;
  score -= Math.max(effectiveSideHours - 10, 0) * 1.6;
  score -= Math.max(mainJobHours - 9, 0) * 4;
  score -= Math.max(7 - sleepHours, 0) * 9;
  score -= Math.max(fatigueLevel - 5, 0) * 6;
  score -= incomeRate < 0.5 ? 8 : 0;
  score = Math.max(0, Math.min(100, Math.round(score)));
  const incomeGap = Math.max(targetIncome - monthlyIncome, 0);
  const dropoutRisk = score >= 80 ? "低め。今のペースなら継続しやすい目安です" : score >= 60 ? "中程度。繁忙期は作業量を落とす前提で続けましょう" : score >= 40 ? "高め。睡眠と副業時間の見直しを優先してください" : "かなり高め。目標を下げ、休息と作業設計を立て直す段階です";
  const improvement = sleepHours < 6.5 ? "まず睡眠を30分増やし、副業を毎日固定にしすぎないことが優先です" : fatigueLevel >= 8 ? "疲労度が高いため、案件数や納期、連絡頻度を減らしましょう" : effectiveSideHours > 14 ? "副業時間が多めです。AI活用や単価改善で作業時間を圧縮しましょう" : incomeRate < 0.5 ? "目標月収との差が大きめです。短期目標を小さく分けて挫折を防ぎましょう" : "現状は継続しやすい範囲です。収益より生活リズムを崩さない運用を続けましょう";
  const aiEffect = aiUse ? "AI活用で週" + aiSavedHours.toLocaleString("ja-JP", { maximumFractionDigits: 1 }) + "時間ほど負荷を下げる想定です" : "AI未活用です。調査、下書き、要約から使うと継続負荷を下げやすくなります";
  const incomeGapText = incomeGap === 0 ? "目標月収に到達しています。現在の副業月収は" + yen.format(monthlyIncome) + "です" : "目標まであと" + yen.format(incomeGap) + "です。焦らず小さな目標に分けましょう";
  const relatedTools = fatigueLevel >= 7 ? "副業疲労度シミュレーターでburnoutリスクを確認しましょう" : effectiveSideHours >= 12 ? "副業時間管理シミュレーターで作業配分を見直しましょう" : "AI副業効率化と副業時給改善で、短時間でも伸びる形を確認しましょう";
  setText("continuityScore", score + "%");
  setText("continuityDropoutRisk", dropoutRisk);
  setText("continuityImprovement", improvement);
  setText("continuityAiEffect", aiEffect);
  setText("continuityIncomeGap", incomeGapText);
  setText("continuityRelatedTools", relatedTools);
}

function renderSideMotivation() {
  const values = {
    motivationTargetIncome: getFieldValue("motivationTargetIncome"),
    motivationCurrentIncome: getFieldValue("motivationCurrentIncome"),
    motivationMainJobHours: getFieldValue("motivationMainJobHours"),
    motivationSideHours: getFieldValue("motivationSideHours"),
    motivationSleepHours: getFieldValue("motivationSleepHours"),
    motivationFatigueLevel: getFieldValue("motivationFatigueLevel"),
    motivationHobbyHours: getFieldValue("motivationHobbyHours"),
    motivationMonths: getFieldValue("motivationMonths"),
  };
  let hasError = Object.values(values).some((item) => !item.valid);
  const fixedDaily = values.motivationMainJobHours.valid && values.motivationSleepHours.valid
    ? values.motivationMainJobHours.value + values.motivationSleepHours.value
    : 0;
  if (!hasError && fixedDaily > 24) {
    document.querySelector("#motivationMainJobHoursError").textContent = "本業勤務時間と睡眠時間の合計が24時間を超えています。";
    document.querySelector("#motivationMainJobHours").setAttribute("aria-invalid", "true");
    hasError = true;
  }

  document.querySelector("#sideMotivationNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("motivationScore", "入力エラー");
    setText("motivationDropoutRisk", "入力エラー");
    setText("motivationFatigueRisk", "入力エラー");
    setText("motivationImprovement", "入力エラー");
    setText("motivationAiEffect", "入力エラー");
    setText("motivationRelatedTools", "入力エラー");
    setText("motivationContinuityGuide", "入力エラー");
    return;
  }

  const targetIncome = values.motivationTargetIncome.value;
  const currentIncome = values.motivationCurrentIncome.value;
  const mainJobHours = values.motivationMainJobHours.value;
  const sideHours = values.motivationSideHours.value;
  const sleepHours = values.motivationSleepHours.value;
  const fatigueLevel = values.motivationFatigueLevel.value;
  const hobbyHours = values.motivationHobbyHours.value;
  const months = values.motivationMonths.value;
  const aiUse = document.querySelector("#motivationAiUse").checked;
  const incomeRate = targetIncome > 0 ? Math.min(currentIncome / targetIncome, 1.5) : 1;
  const aiSavedHours = aiUse ? sideHours * 0.22 : 0;
  const effectiveSideHours = Math.max(sideHours - aiSavedHours, 0);

  let score = 58;
  score += Math.min(incomeRate, 1) * 20;
  score += Math.min(months, 12) * 1.1;
  score += aiUse ? 6 : 0;
  score += hobbyHours >= 2 ? 5 : -5;
  score -= Math.max(targetIncome - currentIncome, 0) / Math.max(targetIncome, 1) > 0.75 ? 8 : 0;
  score -= Math.max(effectiveSideHours - 10, 0) * 1.8;
  score -= Math.max(mainJobHours - 9, 0) * 4.5;
  score -= Math.max(7 - sleepHours, 0) * 8;
  score -= Math.max(fatigueLevel - 5, 0) * 6;
  score = Math.max(0, Math.min(100, Math.round(score)));

  const incomeGap = Math.max(targetIncome - currentIncome, 0);
  const dropoutRisk = score >= 80
    ? "低め。今の目標と生活リズムなら、継続しやすい目安です"
    : score >= 60
      ? "中程度。繁忙期は副業時間を落として、途切れない設計にしましょう"
      : score >= 40
        ? "高め。目標月収を分割し、睡眠と趣味時間を先に戻す段階です"
        : "かなり高め。収益目標より回復時間と作業量の立て直しを優先してください";
  const fatigueRisk = fatigueLevel >= 8 || sleepHours < 6
    ? "高め。本業後の疲労が強く、毎日作業前提は崩れやすい状態です"
    : fatigueLevel >= 6 || effectiveSideHours >= 12
      ? "中程度。作業日を固定し、休む日を先に決めると続けやすくなります"
      : "低〜中程度。今の睡眠と副業時間なら比較的続けやすい目安です";
  const improvement = sleepHours < 6.5
    ? "まず睡眠時間を30分戻し、作業量を週単位で調整しましょう"
    : hobbyHours < 2
      ? "趣味や休息の時間が少なめです。週2時間以上の回復枠を先に確保しましょう"
      : incomeGap > targetIncome * 0.7
        ? "目標との差が大きめです。月収目標を3段階に分けると挫折しにくくなります"
        : effectiveSideHours > 12
          ? "副業時間が多めです。AIやテンプレ化で作業を圧縮しましょう"
          : "現状は続けやすい範囲です。小さな達成を記録してペースを維持しましょう";
  const aiEffect = aiUse
    ? `AI活用により週${aiSavedHours.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}時間ほど作業負荷を下げる想定です`
    : "AI未活用です。調査、下書き、要約、定型返信から使うと、平日1時間でも進めやすくなります";
  const relatedTools = score < 55
    ? "副業継続率診断と副業疲労度シミュレーターで、先に続けられる生活設計を確認しましょう"
    : effectiveSideHours >= 10
      ? "副業時間管理シミュレーターで、平日と休日の作業配分を見直しましょう"
      : "AI副業効率化と副業利益率シミュレーターで、短時間でも収益が伸びる形を確認しましょう";
  const continuityGuide = incomeGap === 0
    ? "目標月収には届いています。次は継続率診断で疲労と睡眠のバランスを確認しましょう"
    : `目標まであと${yen.format(incomeGap)}です。継続率診断で無理なく続くペースも確認しましょう`;

  setText("motivationScore", `${score} / 100`);
  setText("motivationDropoutRisk", dropoutRisk);
  setText("motivationFatigueRisk", fatigueRisk);
  setText("motivationImprovement", improvement);
  setText("motivationAiEffect", aiEffect);
  setText("motivationRelatedTools", relatedTools);
  setText("motivationContinuityGuide", continuityGuide);
}

function renderSideRisk() {
  const values = {
    sideRiskHours: getFieldValue("sideRiskHours"),
    sideRiskMainJobHours: getFieldValue("sideRiskMainJobHours"),
    sideRiskIncome: getFieldValue("sideRiskIncome"),
    sideRiskDependence: getFieldValue("sideRiskDependence"),
    sideRiskSleepHours: getFieldValue("sideRiskSleepHours"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#sideRiskNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("sideRiskScore", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("sideRiskTaxRisk", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("sideRiskBurnoutRisk", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("sideRiskIncomeRisk", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("sideRiskImprovement", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("sideRiskTimeGuide", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("sideRiskProfitGuide", "\u5165\u529b\u30a8\u30e9\u30fc");
    return;
  }

  const genre = document.querySelector("#sideRiskGenre").value;
  const sideHours = values.sideRiskHours.value;
  const mainJobHours = values.sideRiskMainJobHours.value;
  const monthlyIncome = values.sideRiskIncome.value;
  const dependence = values.sideRiskDependence.value;
  const sleep = values.sideRiskSleepHours.value;
  const aiUse = document.querySelector("#sideRiskAiUse").checked;
  const taxReady = document.querySelector("#sideRiskTaxReturn").checked;
  const outsourcing = document.querySelector("#sideRiskOutsourcing").checked;
  const annualIncome = monthlyIncome * 12;
  const genreRisk = {
    content: 8,
    creative: 10,
    consulting: 8,
    commerce: 16,
    investment: 14,
    other: 10,
  }[genre] || 10;
  const taxRiskScore = Math.min(
    100,
    Math.round((annualIncome >= 200000 ? 30 : 12) + (taxReady ? -18 : 24) + genreRisk + Math.max(monthlyIncome - 100000, 0) / 10000),
  );
  const burnoutRiskScore = Math.min(
    100,
    Math.round(18 + Math.max(sideHours - 8, 0) * 2.2 + Math.max(mainJobHours - 8, 0) * 7 + Math.max(7 - sleep, 0) * 13 - (aiUse ? 8 : 0) - (outsourcing ? 7 : 0)),
  );
  const incomeRiskScore = Math.min(
    100,
    Math.round(15 + dependence * 0.75 + (["content", "commerce", "investment"].includes(genre) ? 12 : 5) + (outsourcing ? -5 : 0)),
  );
  const totalScore = Math.max(0, Math.min(100, Math.round(taxRiskScore * 0.32 + burnoutRiskScore * 0.38 + incomeRiskScore * 0.3)));
  const level = (score) => score >= 70 ? "高" : score >= 45 ? "中" : "低";
  const taxRisk = taxRiskScore >= 70
    ? "高リスク。帳簿、経費、申告要否を早めに整理してください"
    : taxRiskScore >= 45
      ? "中リスク。副業収入が継続するなら申告準備を前倒ししましょう"
      : "低〜中リスク。収入が増えたら帳簿と経費管理を継続しましょう";
  const burnoutRisk = burnoutRiskScore >= 70
    ? "高リスク。睡眠と副業時間を先に見直す目安です"
    : burnoutRiskScore >= 45
      ? "中リスク。繁忙期は作業量を抑え、AIや外注で負荷を下げましょう"
      : "低〜中リスク。現状の睡眠と作業量を崩さない運用が大切です";
  const incomeRisk = incomeRiskScore >= 70
    ? "高リスク。副業収入に頼りすぎず、生活防衛資金と収益源の分散を優先"
    : incomeRiskScore >= 45
      ? "中リスク。単発収入に偏らないよう、継続案件や固定費削減も確認"
      : "低〜中リスク。依存度を上げすぎず、利益率を定期的に確認しましょう";
  let improvement = "副業時間、税務準備、利益率を月1回見直すとリスクを抑えやすくなります";
  if (!taxReady && annualIncome >= 200000) {
    improvement = "最優先は税務準備です。売上、経費、帳簿、確定申告の要否を整理しましょう";
  } else if (burnoutRiskScore >= incomeRiskScore && burnoutRiskScore >= taxRiskScore) {
    improvement = "最優先は作業時間と睡眠です。副業時間管理と疲労度の見直しから始めましょう";
  } else if (incomeRiskScore >= 60) {
    improvement = "収益依存度が高めです。生活防衛資金と利益率改善で収入停止時の不安を下げましょう";
  } else if (!aiUse) {
    improvement = "AI未活用です。調査、下書き、要約などから時短を試すと負荷を下げやすいです";
  }
  const timeGuide = burnoutRiskScore >= 45
    ? "副業時間管理シミュレーターで、本業後に無理なく使える時間を確認しましょう"
    : "今の時間配分は比較的安定しています。繁忙期だけ作業量を下げる余白を残しましょう";
  const profitGuide = incomeRiskScore >= 45
    ? "副業利益率シミュレーターで、売上より利益率と時給効率を確認しましょう"
    : "利益率を定期確認し、低単価作業が増えすぎないようにしましょう";

  setText("sideRiskScore", `${totalScore} / 100`);
  setText("sideRiskTaxRisk", `${level(taxRiskScore)}：${taxRisk}`);
  setText("sideRiskBurnoutRisk", `${level(burnoutRiskScore)}：${burnoutRisk}`);
  setText("sideRiskIncomeRisk", `${level(incomeRiskScore)}：${incomeRisk}`);
  setText("sideRiskImprovement", improvement);
  setText("sideRiskTimeGuide", timeGuide);
  setText("sideRiskProfitGuide", profitGuide);
}

function renderSideSafety() {
  const values = {
    sideSafetyIncome: getFieldValue("sideSafetyIncome"),
    sideSafetyMainJobHours: getFieldValue("sideSafetyMainJobHours"),
    sideSafetyHours: getFieldValue("sideSafetyHours"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#sideSafetyNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("sideSafetyScore", "入力エラー");
    setText("sideSafetyCompanyRisk", "入力エラー");
    setText("sideSafetyTaxRisk", "入力エラー");
    setText("sideSafetyBurnoutRisk", "入力エラー");
    setText("sideSafetyImprovement", "入力エラー");
    setText("sideSafetyMethod", "入力エラー");
    setText("sideSafetyRelatedTools", "入力エラー");
    return;
  }

  const genre = document.querySelector("#sideSafetyGenre").value;
  const monthlyIncome = values.sideSafetyIncome.value;
  const mainJobHours = values.sideSafetyMainJobHours.value;
  const sideHours = values.sideSafetyHours.value;
  const residentTaxReady = document.querySelector("#sideSafetyResidentTax").checked;
  const taxReturnReady = document.querySelector("#sideSafetyTaxReturn").checked;
  const rule = document.querySelector("#sideSafetyRule").value;
  const aiUse = document.querySelector("#sideSafetyAiUse").checked;
  const anonymous = document.querySelector("#sideSafetyAnonymous").checked;
  const annualIncome = monthlyIncome * 12;
  const ruleRisk = { allowed: 6, conditional: 22, unknown: 38, prohibited: 58 }[rule] || 25;
  const genreRisk = {
    content: 10,
    creative: 12,
    consulting: 18,
    commerce: 16,
    investment: 14,
    other: 12,
  }[genre] || 12;
  const companyRiskScore = Math.max(0, Math.min(
    100,
    Math.round(ruleRisk + genreRisk + (anonymous ? -14 : 20) + (residentTaxReady ? -8 : 14) + Math.max(monthlyIncome - 150000, 0) / 10000),
  ));
  const taxRiskScore = Math.max(0, Math.min(
    100,
    Math.round((annualIncome >= 200000 ? 34 : 14) + (taxReturnReady ? -20 : 24) + (residentTaxReady ? -8 : 15) + Math.max(monthlyIncome - 100000, 0) / 12000),
  ));
  const burnoutRiskScore = Math.max(0, Math.min(
    100,
    Math.round(18 + Math.max(mainJobHours - 8, 0) * 8 + Math.max(sideHours - 8, 0) * 2.5 - (aiUse ? 8 : 0)),
  ));
  const safetyScore = Math.max(0, Math.min(100, Math.round(100 - (companyRiskScore * 0.38 + taxRiskScore * 0.34 + burnoutRiskScore * 0.28))));
  const level = (score) => score >= 70 ? "高" : score >= 45 ? "中" : "低";
  const companyRisk = companyRiskScore >= 70
    ? "高リスク。会社規定、匿名性、普通徴収の確認を最優先にしてください"
    : companyRiskScore >= 45
      ? "中リスク。規定や発信内容を確認し、実名活動は慎重に進めましょう"
      : "低〜中リスク。規定確認と匿名性を維持しながら継続しましょう";
  const taxRisk = taxRiskScore >= 70
    ? "高リスク。帳簿、確定申告、住民税の扱いを早めに整理してください"
    : taxRiskScore >= 45
      ? "中リスク。副業収入が続くなら申告準備と納税資金を分けましょう"
      : "低〜中リスク。収入が増えた月も帳簿と納税資金を継続管理しましょう";
  const burnoutRisk = burnoutRiskScore >= 70
    ? "高リスク。本業後の副業時間を減らし、睡眠と休息を先に確保してください"
    : burnoutRiskScore >= 45
      ? "中リスク。繁忙期は作業量を落とし、AIで下書きや調査を短縮しましょう"
      : "低〜中リスク。今の作業量を増やしすぎず、上限時間を決めて続けましょう";
  let improvement = "月1回、会社規定、税務準備、作業時間の3点を見直すと安全に続けやすくなります";
  if (rule === "unknown" || rule === "prohibited") {
    improvement = "最優先は会社規定の確認です。禁止領域や同業競合、実名発信を避けて安全側で進めましょう";
  } else if (!residentTaxReady || (!taxReturnReady && annualIncome >= 200000)) {
    improvement = "最優先は税務準備です。普通徴収、帳簿、確定申告の要否を早めに確認してください";
  } else if (!anonymous) {
    improvement = "匿名性が弱めです。プロフィール、SNS、実績公開、連絡先の出し方を見直しましょう";
  } else if (burnoutRiskScore >= 55) {
    improvement = "作業時間の上限を決め、AIで調査や下書きを短縮して疲労の蓄積を避けましょう";
  } else if (!aiUse) {
    improvement = "AI未活用です。調査、構成、定型返信から時短すると安全度を上げやすいです";
  }
  const method = [
    "就業規則を確認する",
    "売上と経費を毎月記録する",
    "税金用資金を別に置く",
    "匿名性を守る",
    "週の副業時間に上限を作る",
  ].join(" / ");
  const relatedTools = companyRiskScore >= taxRiskScore && companyRiskScore >= burnoutRiskScore
    ? "副業リスク診断で会社バレ以外のリスクも確認"
    : taxRiskScore >= burnoutRiskScore
      ? "副業所得税シミュレーターで納税額を確認"
      : "副業疲労度シミュレーターで作業負荷を確認";

  setText("sideSafetyScore", `${safetyScore} / 100`);
  setText("sideSafetyCompanyRisk", `${level(companyRiskScore)}：${companyRisk}`);
  setText("sideSafetyTaxRisk", `${level(taxRiskScore)}：${taxRisk}`);
  setText("sideSafetyBurnoutRisk", `${level(burnoutRiskScore)}：${burnoutRisk}`);
  setText("sideSafetyImprovement", improvement);
  setText("sideSafetyMethod", method);
  setText("sideSafetyRelatedTools", relatedTools);
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

function renderAiRoi() {
  const values = {
    aiRoiHours: getFieldValue("aiRoiHours"),
    aiRoiSales: getFieldValue("aiRoiSales"),
    aiRoiToolCost: getFieldValue("aiRoiToolCost"),
    aiRoiReduction: getFieldValue("aiRoiReduction"),
    aiRoiHourlyRate: getFieldValue("aiRoiHourlyRate"),
    aiRoiOutsourcingReduction: getFieldValue("aiRoiOutsourcingReduction"),
    aiRoiSalesIncrease: getFieldValue("aiRoiSalesIncrease"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#aiRoiNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("aiRoiRate", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("aiRoiSavedHours", "0\u6642\u9593");
    setText("aiRoiAnnualSavedHours", "0\u6642\u9593");
    setText("aiRoiAnnualProfit", yen.format(0));
    setText("aiRoiPaybackPeriod", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("aiRoiRecommendation", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("aiRoiHourlyGuide", "\u5165\u529b\u30a8\u30e9\u30fc");
    return;
  }

  const monthlySavedHours = values.aiRoiHours.value * (values.aiRoiReduction.value / 100);
  const annualSavedHours = monthlySavedHours * 12;
  const monthlyTimeValue = monthlySavedHours * values.aiRoiHourlyRate.value;
  const monthlySalesIncrease = values.aiRoiSales.value * (values.aiRoiSalesIncrease.value / 100);
  const monthlyGrossBenefit = monthlyTimeValue + monthlySalesIncrease + values.aiRoiOutsourcingReduction.value;
  const monthlyAdditionalProfit = monthlyGrossBenefit - values.aiRoiToolCost.value;
  const annualAdditionalProfit = monthlyAdditionalProfit * 12;
  const annualAiCost = values.aiRoiToolCost.value * 12;
  const roi = annualAiCost > 0 ? (annualAdditionalProfit / annualAiCost) * 100 : annualAdditionalProfit > 0 ? 999 : 0;
  const paybackMonths = monthlyGrossBenefit > 0 ? values.aiRoiToolCost.value / monthlyGrossBenefit : null;
  const paybackText = values.aiRoiToolCost.value === 0
    ? "\u8cbb\u75280\u5186"
    : paybackMonths === null
      ? "\u56de\u53ce\u56f0\u96e3"
      : `${paybackMonths.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}\u304b\u6708`;
  let recommendation = "用途を絞って小さく導入しましょう。";

  if (annualAdditionalProfit <= 0) {
    recommendation = "費用が効果を上回る目安です。無料枠、低額プラン、作業手順の見直しを優先しましょう。";
  } else if (roi >= 300) {
    recommendation = "ROIは高めです。下書き、調査、定型作業、外注前の準備にAIを広げる価値があります。";
  } else if (roi >= 100) {
    recommendation = "費用回収できる目安です。売上増につながる作業へ優先的にAIを使いましょう。";
  } else if (monthlySavedHours >= 10) {
    recommendation = "時間削減効果はあります。浮いた時間を高単価作業や営業に回せるか確認しましょう。";
  }

  const hourlyGuide = `削減時間${monthlySavedHours.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}\u6642\u9593/\u6708\u3092\u3001\u526f\u696d\u6642\u7d66\u6539\u5584\u3067\u5b9f\u8cea\u6642\u7d66\u3078\u53cd\u6620`;

  setText("aiRoiRate", `${roi.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}%`);
  setText("aiRoiSavedHours", `${monthlySavedHours.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}\u6642\u9593`);
  setText("aiRoiAnnualSavedHours", `${annualSavedHours.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}\u6642\u9593`);
  setText("aiRoiAnnualProfit", yen.format(annualAdditionalProfit));
  setText("aiRoiPaybackPeriod", paybackText);
  setText("aiRoiRecommendation", recommendation);
  setText("aiRoiHourlyGuide", hourlyGuide);
}

function renderAiAutomation() {
  const values = {
    aiAutomationHours: getFieldValue("aiAutomationHours"),
    aiAutomationSales: getFieldValue("aiAutomationSales"),
    aiAutomationRate: getFieldValue("aiAutomationRate"),
    aiAutomationCost: getFieldValue("aiAutomationCost"),
    aiAutomationOutsourcing: getFieldValue("aiAutomationOutsourcing"),
    aiAutomationHourly: getFieldValue("aiAutomationHourly"),
    aiAutomationTargetIncome: getFieldValue("aiAutomationTargetIncome"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#aiAutomationNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("aiAutomationSavedHours", "入力エラー");
    setText("aiAutomationAnnualSavedHours", "0時間");
    setText("aiAutomationProfit", yen.format(0));
    setText("aiAutomationHourlyImprovement", yen.format(0));
    setText("aiAutomationContinuity", "入力内容を確認してください");
    setText("aiAutomationRoi", "入力エラー");
    setText("aiAutomationRecommendation", "入力内容を確認してください");
    setText("aiAutomationRelatedTools", "AI効率化、AI導入ROI、AI利益最大化");
    return;
  }

  const hours = values.aiAutomationHours.value;
  const sales = values.aiAutomationSales.value;
  const aiUse = document.querySelector("#aiAutomationUse").checked;
  const automationRate = aiUse ? values.aiAutomationRate.value / 100 : 0;
  const aiCost = aiUse ? values.aiAutomationCost.value : 0;
  const outsourcing = values.aiAutomationOutsourcing.value;
  const currentHourly = values.aiAutomationHourly.value || (hours > 0 ? sales / hours : 0);
  const targetIncome = values.aiAutomationTargetIncome.value;
  const savedHours = hours * automationRate;
  const annualSavedHours = savedHours * 12;
  const afterHours = Math.max(hours - savedHours, 0.1);
  const timeValue = savedHours * currentHourly;
  const outsourcingReduction = outsourcing * automationRate;
  const currentProfit = sales - outsourcing;
  const afterProfit = sales + timeValue + outsourcingReduction - outsourcing - aiCost;
  const currentEffectiveHourly = hours > 0 ? currentProfit / hours : 0;
  const afterHourly = afterHours > 0 ? afterProfit / afterHours : 0;
  const hourlyImprovement = afterHourly - currentEffectiveHourly;
  const monthlyBenefit = timeValue + outsourcingReduction;
  const netMonthlyBenefit = monthlyBenefit - aiCost;
  const roi = aiCost > 0 ? (netMonthlyBenefit / aiCost) * 100 : netMonthlyBenefit > 0 ? 999 : 0;
  const incomeProgress = targetIncome > 0 ? Math.min(afterProfit / targetIncome, 1) : 1;
  const loadReduction = hours > 0 ? savedHours / hours : 0;
  const continuityScore = Math.max(0, Math.min(100, Math.round(loadReduction * 55 + incomeProgress * 35 + (netMonthlyBenefit > 0 ? 10 : 0))));
  const continuity = continuityScore >= 75
    ? "大きく改善。作業時間を減らしながら目標月収に近づける設計です"
    : continuityScore >= 50
      ? "中程度に改善。定型作業の自動化を広げると継続しやすくなります"
      : "改善余地あり。AI費用を抑え、まず下書き・調査・テンプレ化から試しましょう";
  const recommendation = !aiUse
    ? "AI未導入の現状目安です。繰り返し作業を棚卸しして、小さく自動化候補を選びましょう。"
    : netMonthlyBenefit <= 0
      ? "AI費用が効果を上回っています。無料枠や低額プランで、定型作業だけ自動化しましょう。"
      : automationRate >= 0.4
        ? "自動化効果は高めです。調査、下書き、チェックリスト、定型返信をワークフロー化しましょう。"
        : "自動化割合は控えめです。まず毎回同じ手順になる作業をテンプレ化し、AIに任せる範囲を広げましょう。";
  const relatedTools = roi >= 100
    ? "AI利益最大化で浮いた時間を収益化できるか確認"
    : netMonthlyBenefit > 0
      ? "AI導入ROIで費用対効果を詳しく確認"
      : "AI副業効率化で削減時間と費用のバランスを確認";

  setText("aiAutomationSavedHours", `${savedHours.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}時間 / 月`);
  setText("aiAutomationAnnualSavedHours", `${annualSavedHours.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}時間`);
  setText("aiAutomationProfit", yen.format(afterProfit));
  setText("aiAutomationHourlyImprovement", yen.format(hourlyImprovement));
  setText("aiAutomationContinuity", continuity);
  setText("aiAutomationRoi", `${roi.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}%`);
  setText("aiAutomationRecommendation", recommendation);
  setText("aiAutomationRelatedTools", relatedTools);
}

function renderAiTimeReduction() {
  const values = {
    aiTimeReductionHours: getFieldValue("aiTimeReductionHours"),
    aiTimeReductionHourly: getFieldValue("aiTimeReductionHourly"),
    aiTimeReductionTargetIncome: getFieldValue("aiTimeReductionTargetIncome"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#aiTimeReductionNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("aiTimeReductionSavedHours", "入力エラー");
    setText("aiTimeReductionAnnualSavedHours", "0時間");
    setText("aiTimeReductionScore", "入力エラー");
    setText("aiTimeReductionHourlyImprovement", yen.format(0));
    setText("aiTimeReductionProfitImprovement", yen.format(0));
    setText("aiTimeReductionRecommendation", "入力内容を確認してください");
    setText("aiTimeReductionRelatedTools", "AI自動化、AI効率化、AI導入ROI");
    return;
  }

  const hours = values.aiTimeReductionHours.value;
  const hourly = values.aiTimeReductionHourly.value;
  const targetIncome = values.aiTimeReductionTargetIncome.value;
  const genre = document.querySelector("#aiTimeReductionGenre").value;
  const frequency = document.querySelector("#aiTimeReductionFrequency").value;
  const task = document.querySelector("#aiTimeReductionTask").value;
  const aiUse = document.querySelector("#aiTimeReductionUse").checked;
  const hasOutsource = document.querySelector("#aiTimeReductionOutsource").checked;
  const genreRates = { writing: 0.34, video: 0.22, design: 0.26, coding: 0.3, admin: 0.38, other: 0.2 };
  const frequencyMultipliers = { low: 0.65, medium: 1, high: 1.2 };
  const taskMultipliers = { research: 1.1, draft: 1.2, edit: 0.95, creative: 0.9, communication: 1.05 };
  const baseRate = genreRates[genre] || 0.2;
  const aiMultiplier = aiUse ? 1 : 0.25;
  const outsourceBonus = hasOutsource ? 0.04 : 0;
  const reductionRate = Math.min(0.72, Math.max(0, baseRate * frequencyMultipliers[frequency] * taskMultipliers[task] * aiMultiplier + outsourceBonus));
  const savedHours = hours * reductionRate;
  const annualSavedHours = savedHours * 12;
  const afterHours = Math.max(hours - savedHours, 0.1);
  const currentMonthlyValue = hours * hourly;
  const afterHourly = currentMonthlyValue / afterHours;
  const hourlyImprovement = afterHourly - hourly;
  const profitImprovement = savedHours * hourly + (hasOutsource ? Math.min(savedHours * hourly * 0.25, 50000) : 0);
  const targetProgress = targetIncome > 0 ? Math.min(currentMonthlyValue / targetIncome, 1) : 1;
  const score = Math.max(0, Math.min(100, Math.round(reductionRate * 100 + (aiUse ? 18 : 0) + (frequency === "high" ? 10 : frequency === "medium" ? 6 : 2) + (hasOutsource ? 6 : 0) + targetProgress * 12)));
  const genreLabels = {
    writing: "構成、見出し、下書き、校正をAIテンプレ化すると削減効果が出やすいです",
    video: "台本、字幕案、ショート動画の構成案をAIで先に作ると編集前の迷いを減らせます",
    design: "ラフ案、コピー、配色案、素材指示をAIで作り、制作前の準備時間を短縮しましょう",
    coding: "要件整理、コード補助、エラー調査、テスト観点の洗い出しにAIを使うと効果が出やすいです",
    admin: "調査、要約、表作成、メール文面、チェックリスト化はAIとの相性が高いです",
    other: "まず毎回繰り返す作業を1つ選び、AI用の指示文を固定すると時短しやすくなります",
  };
  const recommendation = aiUse
    ? genreLabels[genre]
    : "AI未利用のため、削減余地は控えめです。まず調査、下書き、返信文など失敗しても戻しやすい作業から試しましょう";
  const relatedTools = score >= 75
    ? "AI副業自動化で、削減できる作業をワークフロー化しましょう"
    : score >= 50
      ? "AI副業効率化で、ツール費用と利益改善のバランスを確認しましょう"
      : "AI導入ROIで、有料ツールを使う前に費用対効果を確認しましょう";

  setText("aiTimeReductionSavedHours", `${savedHours.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}時間 / 月`);
  setText("aiTimeReductionAnnualSavedHours", `${annualSavedHours.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}時間`);
  setText("aiTimeReductionScore", `${score} / 100`);
  setText("aiTimeReductionHourlyImprovement", yen.format(hourlyImprovement));
  setText("aiTimeReductionProfitImprovement", yen.format(profitImprovement));
  setText("aiTimeReductionRecommendation", recommendation);
  setText("aiTimeReductionRelatedTools", relatedTools);
}

function renderAiOutsourcing() {
  const values = {
    aiOutsourcingCost: getFieldValue("aiOutsourcingCost"),
    aiOutsourcingAiCost: getFieldValue("aiOutsourcingAiCost"),
    aiOutsourcingReduction: getFieldValue("aiOutsourcingReduction"),
    aiOutsourcingSales: getFieldValue("aiOutsourcingSales"),
    aiOutsourcingMargin: getFieldValue("aiOutsourcingMargin"),
    aiOutsourcingHours: getFieldValue("aiOutsourcingHours"),
    aiOutsourcingHourlyRate: getFieldValue("aiOutsourcingHourlyRate"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#aiOutsourcingNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("aiOutsourcingMonthlySaving", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("aiOutsourcingAnnualSaving", yen.format(0));
    setText("aiOutsourcingMarginImprovement", "0pt");
    setText("aiOutsourcingRoi", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("aiOutsourcingPayback", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("aiOutsourcingRecommendation", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("aiOutsourcingProfitGuide", "\u5165\u529b\u30a8\u30e9\u30fc");
    return;
  }

  const task = document.querySelector("#aiOutsourcingTask").value;
  const monthlyGrossSaving = values.aiOutsourcingCost.value * (values.aiOutsourcingReduction.value / 100);
  const monthlyNetSaving = monthlyGrossSaving - values.aiOutsourcingAiCost.value;
  const annualNetSaving = monthlyNetSaving * 12;
  const currentProfit = values.aiOutsourcingSales.value * (values.aiOutsourcingMargin.value / 100);
  const afterProfit = currentProfit + monthlyNetSaving;
  const currentMargin = values.aiOutsourcingSales.value > 0 ? (currentProfit / values.aiOutsourcingSales.value) * 100 : 0;
  const afterMargin = values.aiOutsourcingSales.value > 0 ? (afterProfit / values.aiOutsourcingSales.value) * 100 : 0;
  const marginImprovement = afterMargin - currentMargin;
  const annualAiCost = values.aiOutsourcingAiCost.value * 12;
  const roi = annualAiCost > 0 ? (annualNetSaving / annualAiCost) * 100 : annualNetSaving > 0 ? 999 : 0;
  const paybackMonths = monthlyGrossSaving > 0 ? values.aiOutsourcingAiCost.value / monthlyGrossSaving : null;
  const paybackText = values.aiOutsourcingAiCost.value === 0
    ? "\u8cbb\u75280\u5186"
    : paybackMonths === null
      ? "\u56de\u53ce\u56f0\u96e3"
      : `${paybackMonths.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}\u304b\u6708`;
  const taskRecommendations = {
    writing: "記事や文章作成は、構成案、見出し、初稿、リライト案をAIで作り、最終編集だけ人が行うと外注費を下げやすいです。",
    design: "画像やデザインは、Canvaや生成AIでラフ案と素材作成を内製化し、最終デザインだけ外注すると品質を保ちやすいです。",
    video: "動画編集は、台本、字幕案、カット構成、サムネ案をAIで作り、編集の重い部分だけ外注すると削減しやすいです。",
    research: "リサーチや資料作成は、情報整理、比較表、要約、たたき台作成をAIに任せると外注前の準備時間を減らせます。",
    admin: "事務や入力作業は、テンプレ化、文章生成、表の整理、定型返信をAIに寄せると毎月の固定的な外注費を下げやすいです。",
  };
  let recommendation = taskRecommendations[task] || taskRecommendations.writing;

  if (monthlyNetSaving <= 0) {
    recommendation = "AI導入費用が削減効果を上回る目安です。まず無料枠や低額プランで、外注前の下準備だけAI化しましょう。";
  } else if (roi >= 300) {
    recommendation = `${recommendation} ROIが高めなので、指示書作成やチェック作業にも広げる価値があります。`;
  } else if (marginImprovement < 2) {
    recommendation = `${recommendation} 利益率改善は小さめなので、削減率を上げるより外注範囲の整理を優先しましょう。`;
  }

  const savedTimeValue = values.aiOutsourcingHours.value * (values.aiOutsourcingReduction.value / 100) * values.aiOutsourcingHourlyRate.value;
  const profitGuide = `副業利益率シミュレーターで、外注費${yen.format(values.aiOutsourcingCost.value)}と時間価値${yen.format(savedTimeValue)}を含めて確認`;

  setText("aiOutsourcingMonthlySaving", yen.format(monthlyGrossSaving));
  setText("aiOutsourcingAnnualSaving", yen.format(annualNetSaving));
  setText("aiOutsourcingMarginImprovement", `${marginImprovement.toFixed(1)}pt`);
  setText("aiOutsourcingRoi", `${roi.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}%`);
  setText("aiOutsourcingPayback", paybackText);
  setText("aiOutsourcingRecommendation", recommendation);
  setText("aiOutsourcingProfitGuide", profitGuide);
}

function renderAiProfitMax() {
  const values = {
    aiProfitSales: getFieldValue("aiProfitSales"),
    aiProfitMargin: getFieldValue("aiProfitMargin"),
    aiProfitHours: getFieldValue("aiProfitHours"),
    aiProfitToolCost: getFieldValue("aiProfitToolCost"),
    aiProfitReduction: getFieldValue("aiProfitReduction"),
    aiProfitOutsourcingReduction: getFieldValue("aiProfitOutsourcingReduction"),
    aiProfitSalesIncrease: getFieldValue("aiProfitSalesIncrease"),
    aiProfitTargetIncome: getFieldValue("aiProfitTargetIncome"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#aiProfitNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("aiProfitAfterProfit", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("aiProfitMarginImprovement", "0pt");
    setText("aiProfitHourlyImprovement", yen.format(0));
    setText("aiProfitAnnualAdditional", yen.format(0));
    setText("aiProfitRoi", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("aiProfitTargetShortening", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("aiProfitRecommendation", "\u5165\u529b\u30a8\u30e9\u30fc");
    return;
  }

  const sales = values.aiProfitSales.value;
  const currentProfit = sales * (values.aiProfitMargin.value / 100);
  const afterSales = sales * (1 + values.aiProfitSalesIncrease.value / 100);
  const savedHours = values.aiProfitHours.value * (values.aiProfitReduction.value / 100);
  const afterHours = Math.max(values.aiProfitHours.value - savedHours, 0.1);
  const currentHourly = currentProfit / values.aiProfitHours.value;
  const salesIncreaseProfit = (afterSales - sales) * (values.aiProfitMargin.value / 100);
  const timeValue = savedHours * currentHourly;
  const afterProfit = currentProfit + salesIncreaseProfit + timeValue + values.aiProfitOutsourcingReduction.value - values.aiProfitToolCost.value;
  const currentMargin = sales > 0 ? (currentProfit / sales) * 100 : 0;
  const afterMargin = afterSales > 0 ? (afterProfit / afterSales) * 100 : 0;
  const marginImprovement = afterMargin - currentMargin;
  const afterHourly = afterProfit / afterHours;
  const hourlyImprovement = afterHourly - currentHourly;
  const monthlyAdditionalProfit = afterProfit - currentProfit;
  const annualAdditionalProfit = monthlyAdditionalProfit * 12;
  const annualAiCost = values.aiProfitToolCost.value * 12;
  const roi = annualAiCost > 0 ? (annualAdditionalProfit / annualAiCost) * 100 : annualAdditionalProfit > 0 ? 999 : 0;
  const currentGap = Math.max(values.aiProfitTargetIncome.value - currentProfit, 0);
  const afterGap = Math.max(values.aiProfitTargetIncome.value - afterProfit, 0);
  const currentMonths = currentProfit > 0 ? currentGap / currentProfit : null;
  const afterMonths = monthlyAdditionalProfit > 0 ? afterGap / monthlyAdditionalProfit : null;
  const shorteningMonths = currentMonths !== null && afterMonths !== null
    ? Math.max(currentMonths - afterMonths, 0)
    : afterGap === 0 ? currentGap > 0 ? 1 : 0 : null;
  const targetText = afterGap === 0
    ? "\u76ee\u6a19\u6708\u53ce\u5230\u9054\u570f\u5185"
    : shorteningMonths === null
      ? "\u77ed\u7e2e\u306b\u306f\u58f2\u4e0a\u5897\u304b\u5358\u4fa1\u6539\u5584\u304c\u5fc5\u8981"
      : `${shorteningMonths.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}\u304b\u6708\u77ed\u7e2e\u306e\u76ee\u5b89`;
  let recommendation = "\u8abf\u67fb\u3001\u4e0b\u66f8\u304d\u3001\u69cb\u6210\u4f5c\u308a\u304b\u3089AI\u3092\u5c0e\u5165\u3057\u307e\u3057\u3087\u3046\u3002";

  if (annualAdditionalProfit <= 0) {
    recommendation = "\u30c4\u30fc\u30eb\u8cbb\u7528\u304c\u52b9\u679c\u3092\u4e0a\u56de\u308b\u76ee\u5b89\u3067\u3059\u3002\u307e\u305a\u7121\u6599\u67a0\u3084\u5b9a\u578b\u4f5c\u696d\u306e\u307f\u3067\u691c\u8a3c\u3057\u307e\u3057\u3087\u3046\u3002";
  } else if (afterProfit >= values.aiProfitTargetIncome.value) {
    recommendation = "\u76ee\u6a19\u6708\u53ce\u306b\u5c4a\u304f\u76ee\u5b89\u3067\u3059\u3002\u6d6e\u3044\u305f\u6642\u9593\u3092\u55b6\u696d\u3001\u7d99\u7d9a\u6848\u4ef6\u3001\u5358\u4fa1\u30a2\u30c3\u30d7\u306b\u56de\u3057\u307e\u3057\u3087\u3046\u3002";
  } else if (roi >= 300) {
    recommendation = "ROI\u306f\u9ad8\u3081\u3067\u3059\u3002\u8a18\u4e8b\u69cb\u6210\u3001\u8981\u7d04\u3001\u30ea\u30b5\u30fc\u30c1\u3001\u753b\u50cf\u30fb\u52d5\u753b\u306e\u4e0b\u6e96\u5099\u307e\u3067\u5e83\u3052\u308b\u4fa1\u5024\u304c\u3042\u308a\u307e\u3059\u3002";
  } else if (savedHours >= 10) {
    recommendation = "\u6642\u9593\u524a\u6e1b\u52b9\u679c\u306f\u51fa\u3066\u3044\u307e\u3059\u3002\u6d6e\u3044\u305f\u6642\u9593\u3092\u5358\u4fa1\u306e\u9ad8\u3044\u4f5c\u696d\u306b\u5bc4\u305b\u307e\u3057\u3087\u3046\u3002";
  }

  setText("aiProfitAfterProfit", yen.format(afterProfit));
  setText("aiProfitMarginImprovement", `${marginImprovement.toFixed(1)}pt`);
  setText("aiProfitHourlyImprovement", `${yen.format(afterHourly)}（+${yen.format(hourlyImprovement)}）`);
  setText("aiProfitAnnualAdditional", yen.format(annualAdditionalProfit));
  setText("aiProfitRoi", `${roi.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}%`);
  setText("aiProfitTargetShortening", targetText);
  setText("aiProfitRecommendation", recommendation);
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

function renderIncorporation() {
  const values = {
    incorporationSales: getFieldValue("incorporationSales"),
    incorporationExpenses: getFieldValue("incorporationExpenses"),
    incorporationSalary: getFieldValue("incorporationSalary"),
    corporateMaintenanceCost: getFieldValue("corporateMaintenanceCost"),
    incorporationIncomeTaxRate: getFieldValue("incorporationIncomeTaxRate"),
    corporateTaxRate: getFieldValue("corporateTaxRate"),
    socialInsuranceIncrease: getFieldValue("socialInsuranceIncrease"),
    executiveSalary: getFieldValue("executiveSalary"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#incorporationNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("incorporationTaxSaving", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("soleProprietorTakeHome", yen.format(0));
    setText("corporateTakeHome", yen.format(0));
    setText("incorporationRecommendation", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("corporateCostResult", yen.format(0));
    setText("incorporationImprovementPoint", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("incorporationAccountingGuide", "\u5165\u529b\u30a8\u30e9\u30fc");
    return;
  }

  const sideProfit = Math.max(values.incorporationSales.value - values.incorporationExpenses.value, 0);
  const personalTaxRate = (values.incorporationIncomeTaxRate.value + 10) / 100;
  const soleTax = sideProfit * personalTaxRate;
  const soleTakeHome = Math.max(sideProfit - soleTax, 0);
  const executiveSalary = Math.min(values.executiveSalary.value, sideProfit);
  const salaryTax = executiveSalary * personalTaxRate;
  const corporateProfitBeforeTax = Math.max(
    sideProfit - executiveSalary - values.corporateMaintenanceCost.value - values.socialInsuranceIncrease.value,
    0,
  );
  const corporateTax = corporateProfitBeforeTax * (values.corporateTaxRate.value / 100);
  const corporateRemaining = Math.max(corporateProfitBeforeTax - corporateTax, 0);
  const executiveTakeHome = Math.max(executiveSalary - salaryTax, 0);
  const corporateTakeHome = Math.max(executiveTakeHome + corporateRemaining, 0);
  const taxSaving = corporateTakeHome - soleTakeHome;
  const corporateCost = values.corporateMaintenanceCost.value + values.socialInsuranceIncrease.value;
  const profitRate = values.incorporationSales.value > 0 ? (sideProfit / values.incorporationSales.value) * 100 : 0;
  const costRate = sideProfit > 0 ? (corporateCost / sideProfit) * 100 : 0;
  let recommendation = "個人事業のまま比較検討";
  let improvement = "まずは経費、会計管理、納税資金を整え、利益が継続するか確認しましょう。";

  if (sideProfit < 3000000) {
    recommendation = "法人化は慎重に検討";
    improvement = "利益規模に対して法人維持費が重くなりやすいため、まず利益率改善と会計管理を優先しましょう。";
  } else if (taxSaving > 500000 && costRate < 25) {
    recommendation = "法人化を専門家に相談する目安";
    improvement = "手取り差額が出ています。役員報酬、社会保険、消費税、法人住民税を含めて税理士・社労士へ確認しましょう。";
  } else if (taxSaving > 0) {
    recommendation = "条件次第で法人化を検討";
    improvement = "法人化でやや有利な目安です。維持費を抑えつつ、役員報酬額を複数パターンで比較してください。";
  } else if (profitRate < 30) {
    recommendation = "利益率改善を優先";
    improvement = "法人化より先に、広告費、外注費、AI活用、単価改善で利益率を上げる方が効果的な可能性があります。";
  } else {
    recommendation = "個人事業のまま管理強化";
    improvement = "現時点では法人維持コストが重い目安です。会計ソフトで売上・経費・税金を見える化しましょう。";
  }

  const accountingGuide = values.incorporationSales.value >= 10000000
    ? "売上1,000万円超のため、消費税やインボイスも含めて会計ソフトと専門家相談を検討"
    : "法人化前に会計ソフトで売上、経費、納税資金を分けて管理";

  setText("incorporationTaxSaving", yen.format(taxSaving));
  setText("soleProprietorTakeHome", yen.format(soleTakeHome));
  setText("corporateTakeHome", yen.format(corporateTakeHome));
  setText("incorporationRecommendation", recommendation);
  setText("corporateCostResult", yen.format(corporateCost));
  setText("incorporationImprovementPoint", improvement);
  setText("incorporationAccountingGuide", accountingGuide);
}

function getSimplifiedIncomeTaxRate(taxableBase) {
  if (taxableBase <= 1950000) return 0.05;
  if (taxableBase <= 3300000) return 0.1;
  if (taxableBase <= 6950000) return 0.2;
  if (taxableBase <= 9000000) return 0.23;
  if (taxableBase <= 18000000) return 0.33;
  return 0.4;
}

function renderEmployeeTaxSaving() {
  const values = {
    employeeTaxIncome: getFieldValue("employeeTaxIncome"),
    employeeTaxIdeco: getFieldValue("employeeTaxIdeco"),
    employeeTaxNisa: getFieldValue("employeeTaxNisa"),
    employeeTaxSideIncome: getFieldValue("employeeTaxSideIncome"),
    employeeTaxFurusato: getFieldValue("employeeTaxFurusato"),
    employeeTaxInsurance: getFieldValue("employeeTaxInsurance"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#employeeTaxSavingNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("employeeTaxSavingTotal", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("employeeTaxIncomeReduction", yen.format(0));
    setText("employeeTaxResidentReduction", yen.format(0));
    setText("employeeTaxRecommendation", "\u672a\u8a08\u7b97");
    setText("employeeTaxIdecoEffect", yen.format(0));
    setText("employeeTaxFurusatoGuide", "\u672a\u8a08\u7b97");
    setText("employeeTaxFireImpact", "\u672a\u8a08\u7b97");
    return;
  }

  const income = values.employeeTaxIncome.value;
  const idecoAnnual = values.employeeTaxIdeco.value * 12;
  const nisaAnnual = values.employeeTaxNisa.value * 12;
  const sideIncome = values.employeeTaxSideIncome.value;
  const furusato = values.employeeTaxFurusato.value;
  const insuranceDeduction = Math.min(values.employeeTaxInsurance.value, 120000);
  const hasDependent = document.querySelector("#employeeTaxDependent").checked;
  const hasMortgage = document.querySelector("#employeeTaxMortgage").checked;
  const salaryDeduction = Math.min(Math.max(income * 0.3, 550000), 1950000);
  const basicDeduction = 480000;
  const dependentDeduction = hasDependent ? 380000 : 0;
  const taxableBase = Math.max(income + sideIncome - salaryDeduction - basicDeduction - dependentDeduction, 0);
  const incomeTaxRate = getSimplifiedIncomeTaxRate(taxableBase);
  const taxableDeduction = Math.min(idecoAnnual + insuranceDeduction, taxableBase);
  const furusatoEligible = Math.max(Math.floor((income * 0.02 + sideIncome * 0.03) / 1000) * 1000, 0);
  const furusatoEffective = Math.min(furusato, furusatoEligible);
  const furusatoReduction = Math.max(furusatoEffective - 2000, 0);
  const mortgageCredit = hasMortgage ? Math.min(income * 0.004, 200000) : 0;
  const incomeTaxReduction = taxableDeduction * incomeTaxRate + mortgageCredit * 0.6;
  const residentTaxReduction = taxableDeduction * 0.1 + furusatoReduction + mortgageCredit * 0.4;
  const totalSaving = incomeTaxReduction + residentTaxReduction;
  const idecoEffect = idecoAnnual * (incomeTaxRate + 0.1);
  const fireBoostMonthly = (totalSaving + nisaAnnual) / 12;
  const fireProgress = ((totalSaving + nisaAnnual) / 30000000) * 100;

  let recommendation = "iDeCoとふるさと納税を使い、浮いた税額を投資や生活防衛資金へ回す設計がおすすめ";
  if (idecoAnnual === 0) {
    recommendation = "まずはiDeCo掛金を少額から試すと、所得税と住民税の軽減効果を確認しやすい";
  } else if (furusato < furusatoEligible * 0.5) {
    recommendation = "ふるさと納税の利用額が目安より控えめ。上限を確認しながら活用余地をチェック";
  } else if (nisaAnnual === 0) {
    recommendation = "新NISAは所得控除ではないものの、節税分の受け皿として長期投資に回しやすい";
  } else if (hasMortgage) {
    recommendation = "住宅ローン控除と他の控除が重なるため、ふるさと納税上限は控えめに確認";
  }

  const furusatoGuide = furusatoEligible > 0
    ? `簡易上限は約${yen.format(furusatoEligible)}。入力額との差は${yen.format(Math.max(furusatoEligible - furusato, 0))}`
    : "副業所得や年収が少ない場合は上限が小さくなります";
  const fireImpact = `節税分と新NISA積立を合わせると月${yen.format(fireBoostMonthly)}、FIRE資産3,000万円の約${fireProgress.toFixed(1)}%/年に相当`;

  setText("employeeTaxSavingTotal", yen.format(totalSaving));
  setText("employeeTaxIncomeReduction", yen.format(incomeTaxReduction));
  setText("employeeTaxResidentReduction", yen.format(residentTaxReduction));
  setText("employeeTaxRecommendation", recommendation);
  setText("employeeTaxIdecoEffect", yen.format(idecoEffect));
  setText("employeeTaxFurusatoGuide", furusatoGuide);
  setText("employeeTaxFireImpact", fireImpact);
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

function calculateNisaFastPlan(values, dividendReinvest, growthFrameUse) {
  const monthlyRate = values.nisaFastReturn.value / 100 / 12;
  const months = values.nisaFastYears.value * 12;
  const annualLimit = growthFrameUse ? 3600000 : 1200000;
  const lifetimeLimit = 18000000;
  const fireTarget = 30000000;
  let assets = 0;
  let principal = 0;
  let targetMonth = null;

  for (let month = 1; month <= months; month += 1) {
    const yearIndex = Math.floor((month - 1) / 12);
    const yearStartPrincipal = Math.min(yearIndex * annualLimit, lifetimeLimit);
    const yearInvested = Math.max(principal - yearStartPrincipal, 0);
    const remainingAnnualLimit = Math.max(annualLimit - yearInvested, 0);
    const remainingLifetimeLimit = Math.max(lifetimeLimit - principal, 0);
    const monthlyInvestment = Math.min(values.nisaFastMonthly.value, remainingAnnualLimit, remainingLifetimeLimit);
    assets += monthlyInvestment;
    principal += monthlyInvestment;

    if (month % 12 === 0) {
      const investedThisYear = Math.max(principal - yearStartPrincipal, 0);
      const bonusLimit = Math.max(annualLimit - investedThisYear, 0);
      const bonusInvestment = Math.min(values.nisaFastBonus.value, bonusLimit, Math.max(lifetimeLimit - principal, 0));
      assets += bonusInvestment;
      principal += bonusInvestment;
    }

    const dividendBoost = dividendReinvest ? 0.003 / 12 : 0;
    assets *= 1 + monthlyRate + dividendBoost;

    if (targetMonth === null && assets >= fireTarget) {
      targetMonth = month;
    }
  }

  return {
    assets,
    principal,
    compoundEffect: Math.max(assets - principal, 0),
    annualIncrease: values.nisaFastYears.value > 0 ? assets / values.nisaFastYears.value : 0,
    targetMonth,
    annualLimit,
  };
}

function renderNisaFast() {
  const values = {
    nisaFastAge: getFieldValue("nisaFastAge"),
    nisaFastMonthly: getFieldValue("nisaFastMonthly"),
    nisaFastBonus: getFieldValue("nisaFastBonus"),
    nisaFastReturn: getFieldValue("nisaFastReturn"),
    nisaFastYears: getFieldValue("nisaFastYears"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#nisaFastNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("nisaFastFinalAssets", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("nisaFastAnnualIncrease", yen.format(0));
    setText("nisaFastCompoundEffect", yen.format(0));
    setText("nisaFastFireImpact", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("nisaFastDividendIncome", yen.format(0));
    setText("nisaFastTargetAge", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("nisaFastImprovement", "入力を確認してください");
    return;
  }

  const dividendReinvest = document.querySelector("#nisaFastDividendReinvest").checked;
  const growthFrameUse = document.querySelector("#nisaFastGrowthFrame").checked;
  const plan = calculateNisaFastPlan(values, dividendReinvest, growthFrameUse);
  const fireTarget = 30000000;
  const fireRate = fireTarget > 0 ? Math.min((plan.assets / fireTarget) * 100, 999) : 0;
  const dividendIncome = plan.assets * 0.035;
  const targetAge = plan.targetMonth === null
    ? "\u904b\u7528\u671f\u9593\u5185\u306f\u672a\u9054\u6210"
    : `${(values.nisaFastAge.value + Math.ceil(plan.targetMonth / 12)).toLocaleString("ja-JP")}\u6b73`;
  const annualInvestment = values.nisaFastMonthly.value * 12 + values.nisaFastBonus.value;
  const improvement = annualInvestment >= plan.annualLimit
    ? "年間投資枠の上限に近いペースです。生活防衛資金と継続性を優先しましょう。"
    : growthFrameUse
      ? "\u30dc\u30fc\u30ca\u30b9\u7a4d\u7acb\u3084\u56fa\u5b9a\u8cbb\u524a\u6e1b\u5206\u3092\u6210\u9577\u6295\u8cc7\u67a0\u3078\u56de\u3059\u3068\u3001\u76ee\u6a19\u9054\u6210\u304c\u65e9\u307e\u308a\u3084\u3059\u3044\u3067\u3059\u3002"
      : "最速ペースを見たい場合は、成長投資枠も使うパターンで比較してください。";

  setText("nisaFastFinalAssets", yen.format(plan.assets));
  setText("nisaFastAnnualIncrease", yen.format(plan.annualIncrease));
  setText("nisaFastCompoundEffect", yen.format(plan.compoundEffect));
  setText("nisaFastFireImpact", `FIRE\u76ee\u6a193,000\u4e07\u5186\u306e\u7d04${fireRate.toFixed(1)}%\u306b\u76f8\u5f53`);
  setText("nisaFastDividendIncome", `${yen.format(dividendIncome)} / \u5e74`);
  setText("nisaFastTargetAge", targetAge);
  setText("nisaFastImprovement", improvement);
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

function renderFireRate() {
  const values = {
    fireRateAge: getFieldValue("fireRateAge"),
    fireRateTargetAge: getFieldValue("fireRateTargetAge"),
    fireRateAssets: getFieldValue("fireRateAssets"),
    fireRateMonthlyInvestment: getFieldValue("fireRateMonthlyInvestment"),
    fireRateSideIncome: getFieldValue("fireRateSideIncome"),
    fireRateAnnualLivingCost: getFieldValue("fireRateAnnualLivingCost"),
    fireRateReturn: getFieldValue("fireRateReturn"),
    fireRateDividendIncome: getFieldValue("fireRateDividendIncome"),
  };
  let hasError = Object.values(values).some((item) => !item.valid);

  if (values.fireRateAge.valid && values.fireRateTargetAge.valid && values.fireRateTargetAge.value <= values.fireRateAge.value) {
    const input = document.querySelector("#fireRateTargetAge");
    const error = document.querySelector("#fireRateTargetAgeError");
    input.setAttribute("aria-invalid", "true");
    error.textContent = "目標FIRE年齢は現在年齢より大きくしてください。";
    hasError = true;
  }

  document.querySelector("#fireRateNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("fireRateScore", "入力エラー");
    setText("fireRateAchieveAge", "入力エラー");
    setText("fireRateShortage", yen.format(0));
    setText("fireRateImprovement", "入力内容を確認してください");
    setText("fireRateSideIncomeEffect", "入力エラー");
    setText("fireRateDividendEffect", yen.format(0));
    setText("fireRateRelatedTools", "FIRE達成、サイドFIRE、配当生活達成");
    return;
  }

  const age = values.fireRateAge.value;
  const targetAge = values.fireRateTargetAge.value;
  const currentAssets = values.fireRateAssets.value;
  const monthlyInvestment = values.fireRateMonthlyInvestment.value;
  const sideIncome = values.fireRateSideIncome.value;
  const annualLivingCost = values.fireRateAnnualLivingCost.value;
  const annualReturn = values.fireRateReturn.value;
  const dividendIncome = values.fireRateDividendIncome.value;
  const hasDebt = document.querySelector("#fireRateDebt").checked;
  const targetAssets = annualLivingCost * 25;
  const monthsToTargetAge = Math.max((targetAge - age) * 12, 1);
  const monthlyTotal = monthlyInvestment + sideIncome + dividendIncome;
  const projectedAtTarget = calculateFutureAssets(currentAssets, monthlyTotal, annualReturn, monthsToTargetAge);
  const shortage = Math.max(targetAssets - projectedAtTarget, 0);
  const achievementMonths = findAchievementMonths(currentAssets, monthlyTotal, annualReturn, targetAssets);
  const achievementAge = achievementMonths === null ? "未達成" : `${age + Math.ceil(achievementMonths / 12)}歳`;
  const baseMonths = findAchievementMonths(currentAssets, monthlyInvestment + dividendIncome, annualReturn, targetAssets);
  const noDividendMonths = findAchievementMonths(currentAssets, monthlyInvestment + sideIncome, annualReturn, targetAssets);
  const progressScore = Math.min(projectedAtTarget / targetAssets, 1) * 70;
  const savingsPower = Math.min((monthlyTotal * 12) / Math.max(annualLivingCost + monthlyTotal * 12, 1), 0.6) / 0.6 * 20;
  const dividendCover = Math.min((dividendIncome * 12) / annualLivingCost, 1) * 10;
  const debtPenalty = hasDebt ? 12 : 0;
  const score = Math.max(0, Math.min(100, Math.round(progressScore + savingsPower + dividendCover - debtPenalty)));
  const sideShortening = baseMonths !== null && achievementMonths !== null
    ? Math.max((baseMonths - achievementMonths) / 12, 0)
    : 0;
  const dividendShortening = noDividendMonths !== null && achievementMonths !== null
    ? Math.max((noDividendMonths - achievementMonths) / 12, 0)
    : 0;
  const dividendAnnual = dividendIncome * 12;
  const improvement = shortage === 0 && !hasDebt
    ? "目標年齢時点では達成圏内です。生活防衛資金と税金分を残しながら継続しましょう。"
    : hasDebt
      ? "負債返済、生活防衛資金、固定費削減を先に整えるとFIRE計画が安定します。"
      : sideIncome === 0
        ? "副業収入や固定費削減で毎月の積立余力を増やすとスコアが上がります。"
        : "副業収入の手取り管理と配当再投資を組み合わせると達成時期を縮めやすいです。";
  const relatedGuide = score >= 80
    ? "配当生活達成とNISA取り崩しでFIRE後の使い方を確認"
    : score >= 50
      ? "サイドFIRE、固定費削減、配当再投資で改善余地を確認"
      : "FIRE達成、生活防衛資金、副業手取りを先に確認";

  setText("fireRateScore", `${score}点`);
  setText("fireRateAchieveAge", achievementAge);
  setText("fireRateShortage", yen.format(shortage));
  setText("fireRateImprovement", improvement);
  setText("fireRateSideIncomeEffect", `${sideShortening.toFixed(1)}年短縮`);
  setText("fireRateDividendEffect", `${yen.format(dividendAnnual)} / 年、約${dividendShortening.toFixed(1)}年短縮`);
  setText("fireRateRelatedTools", relatedGuide);
}

function renderFireCostOptimization() {
  const values = {
    fireCostAge: getFieldValue("fireCostAge"),
    fireCostTargetAge: getFieldValue("fireCostTargetAge"),
    fireCostAssets: getFieldValue("fireCostAssets"),
    fireCostMonthlyCost: getFieldValue("fireCostMonthlyCost"),
    fireCostReducibleCost: getFieldValue("fireCostReducibleCost"),
    fireCostMonthlyInvestment: getFieldValue("fireCostMonthlyInvestment"),
    fireCostSideIncome: getFieldValue("fireCostSideIncome"),
    fireCostReturn: getFieldValue("fireCostReturn"),
    fireCostDividendIncome: getFieldValue("fireCostDividendIncome"),
  };
  let hasError = Object.values(values).some((item) => !item.valid);

  if (values.fireCostAge.valid && values.fireCostTargetAge.valid && values.fireCostTargetAge.value <= values.fireCostAge.value) {
    const input = document.querySelector("#fireCostTargetAge");
    const error = document.querySelector("#fireCostTargetAgeError");
    input.setAttribute("aria-invalid", "true");
    error.textContent = "目標FIRE年齢は現在年齢より大きくしてください。";
    hasError = true;
  }

  if (values.fireCostMonthlyCost.valid && values.fireCostReducibleCost.valid && values.fireCostReducibleCost.value >= values.fireCostMonthlyCost.value) {
    const input = document.querySelector("#fireCostReducibleCost");
    const error = document.querySelector("#fireCostReducibleCostError");
    input.setAttribute("aria-invalid", "true");
    error.textContent = "削減可能生活費は毎月生活費より小さくしてください。";
    hasError = true;
  }

  document.querySelector("#fireCostNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("fireCostRequiredAssets", "入力エラー");
    setText("fireCostReductionEffect", yen.format(0));
    setText("fireCostShorteningYears", "入力エラー");
    setText("fireCostAdditionalInvestmentEffect", yen.format(0));
    setText("fireCostSideIncomeEffect", "入力エラー");
    setText("fireCostImprovement", "入力内容を確認してください");
    setText("fireCostRelatedTools", "FIRE達成率、固定費削減、生活コスト最適化");
    return;
  }

  const age = values.fireCostAge.value;
  const targetAge = values.fireCostTargetAge.value;
  const currentAssets = values.fireCostAssets.value;
  const monthlyCost = values.fireCostMonthlyCost.value;
  const reducibleCost = values.fireCostReducibleCost.value;
  const monthlyInvestment = values.fireCostMonthlyInvestment.value;
  const sideIncome = values.fireCostSideIncome.value;
  const annualReturn = values.fireCostReturn.value;
  const dividendIncome = values.fireCostDividendIncome.value;
  const optimizedMonthlyCost = Math.max(monthlyCost - reducibleCost, 0);
  const annualCost = monthlyCost * 12;
  const optimizedAnnualCost = optimizedMonthlyCost * 12;
  const annualDividend = dividendIncome * 12;
  const requiredAssets = Math.max(annualCost - annualDividend, annualCost * 0.1) * 25;
  const optimizedRequiredAssets = Math.max(optimizedAnnualCost - annualDividend, optimizedAnnualCost * 0.1) * 25;
  const reductionEffect = Math.max(requiredAssets - optimizedRequiredAssets, 0);
  const monthsToTargetAge = Math.max((targetAge - age) * 12, 1);
  const baseMonthlyInvestment = monthlyInvestment + sideIncome;
  const optimizedMonthlyInvestment = baseMonthlyInvestment + reducibleCost;
  const baseMonths = findAchievementMonths(currentAssets, baseMonthlyInvestment, annualReturn, requiredAssets);
  const optimizedMonths = findAchievementMonths(currentAssets, optimizedMonthlyInvestment, annualReturn, optimizedRequiredAssets);
  const noSideMonths = findAchievementMonths(currentAssets, monthlyInvestment + reducibleCost, annualReturn, optimizedRequiredAssets);
  const baseFuture = calculateFutureAssets(currentAssets, baseMonthlyInvestment, annualReturn, monthsToTargetAge);
  const optimizedFuture = calculateFutureAssets(currentAssets, optimizedMonthlyInvestment, annualReturn, monthsToTargetAge);
  const additionalInvestmentEffect = Math.max(optimizedFuture - baseFuture, 0);
  const shorteningYears = baseMonths !== null && optimizedMonths !== null
    ? Math.max((baseMonths - optimizedMonths) / 12, 0)
    : 0;
  const sideIncomeShortening = noSideMonths !== null && optimizedMonths !== null
    ? Math.max((noSideMonths - optimizedMonths) / 12, 0)
    : 0;
  const reductionRate = reducibleCost / monthlyCost;
  const investmentRate = optimizedMonthlyInvestment / Math.max(monthlyCost + optimizedMonthlyInvestment, 1);
  const improvement = reductionRate >= 0.2
    ? "削減効果は大きめです。無理な節約にならないよう、通信費、保険、サブスクなど負担の少ない項目から固定化しましょう。"
    : investmentRate >= 0.35
      ? "投資余力は強めです。生活防衛資金を残しながら、新NISAや配当投資へ継続的に回す設計が現実的です。"
      : sideIncome === 0
        ? "固定費削減に加えて、月1万円でも副業収入を作るとFIREまでの距離を縮めやすくなります。"
        : "生活費削減、副業収入、配当収入を組み合わせると、収入だけに頼らないFIRE計画に近づきます。";
  const relatedGuide = reductionRate >= 0.15
    ? "固定費削減と生活コスト最適化で、削減項目を具体化しましょう"
    : investmentRate < 0.25
      ? "会社員キャッシュフローで投資余力を確認しましょう"
      : "FIRE達成率と配当生活達成で到達後の安定性を確認しましょう";

  setText("fireCostRequiredAssets", yen.format(optimizedRequiredAssets));
  setText("fireCostReductionEffect", yen.format(reductionEffect));
  setText("fireCostShorteningYears", optimizedMonths === null ? "未達成" : `${shorteningYears.toFixed(1)}年短縮`);
  setText("fireCostAdditionalInvestmentEffect", yen.format(additionalInvestmentEffect));
  setText("fireCostSideIncomeEffect", sideIncome > 0 ? `${sideIncomeShortening.toFixed(1)}年短縮` : "副業収入なし");
  setText("fireCostImprovement", improvement);
  setText("fireCostRelatedTools", relatedGuide);
}

function renderFireStress() {
  const values = {
    fireStressAge: getFieldValue("fireStressAge"),
    fireStressAssets: getFieldValue("fireStressAssets"),
    fireStressMonthlyCost: getFieldValue("fireStressMonthlyCost"),
    fireStressSideIncome: getFieldValue("fireStressSideIncome"),
    fireStressDividendIncome: getFieldValue("fireStressDividendIncome"),
    fireStressWorkStress: getFieldValue("fireStressWorkStress"),
    fireStressSolitudeTolerance: getFieldValue("fireStressSolitudeTolerance"),
    fireStressTargetAge: getFieldValue("fireStressTargetAge"),
  };
  let hasError = Object.values(values).some((item) => !item.valid);

  if (values.fireStressAge.valid && values.fireStressTargetAge.valid && values.fireStressTargetAge.value <= values.fireStressAge.value) {
    const input = document.querySelector("#fireStressTargetAge");
    const error = document.querySelector("#fireStressTargetAgeError");
    input.setAttribute("aria-invalid", "true");
    error.textContent = "FIRE希望年齢は現在年齢より大きくしてください。";
    hasError = true;
  }

  document.querySelector("#fireStressNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("fireStressScore", "入力エラー");
    setText("fireStressIncomeRisk", "入力内容を確認してください");
    setText("fireStressSolitudeRisk", "入力内容を確認してください");
    setText("fireStressSatisfaction", "入力内容を確認してください");
    setText("fireStressImprovement", "入力内容を確認してください");
    setText("fireStressSideFireCompare", "入力内容を確認してください");
    setText("fireStressRelatedTools", "FIRE達成率、サイドFIRE、配当生活年数");
    return;
  }

  const age = values.fireStressAge.value;
  const targetAge = values.fireStressTargetAge.value;
  const currentAssets = values.fireStressAssets.value;
  const monthlyCost = values.fireStressMonthlyCost.value;
  const sideIncome = values.fireStressSideIncome.value;
  const dividendIncome = values.fireStressDividendIncome.value;
  const workStress = values.fireStressWorkStress.value;
  const solitudeTolerance = values.fireStressSolitudeTolerance.value;
  const hasHobby = document.querySelector("#fireStressHasHobby").checked;
  const annualCost = monthlyCost * 12;
  const annualPassiveIncome = (sideIncome + dividendIncome) * 12;
  const incomeCoverRate = Math.min(annualPassiveIncome / Math.max(annualCost, 1), 1.5);
  const assetCoverYears = currentAssets / Math.max(annualCost - annualPassiveIncome, annualCost * 0.1);
  const yearsUntilFire = Math.max(targetAge - age, 0);
  const preparationScore = Math.min(assetCoverYears / 25, 1) * 35;
  const incomeScore = Math.min(incomeCoverRate, 1) * 25;
  const stressReliefScore = Math.min(workStress / 10, 1) * 12;
  const solitudeScore = Math.min(solitudeTolerance / 10, 1) * 16;
  const hobbyScore = hasHobby ? 8 : 0;
  const rushPenalty = yearsUntilFire <= 3 && assetCoverYears < 15 ? 12 : yearsUntilFire <= 5 && assetCoverYears < 10 ? 8 : 0;
  const score = Math.max(0, Math.min(100, Math.round(preparationScore + incomeScore + stressReliefScore + solitudeScore + hobbyScore - rushPenalty)));
  const incomeRisk = incomeCoverRate >= 1
    ? "低め。副業収入と配当収入で生活費をかなり支えられる状態です"
    : incomeCoverRate >= 0.5 || assetCoverYears >= 20
      ? "中程度。資産はありますが、収入源をもう少し分散すると安心です"
      : "高め。生活費に対して継続収入が少なく、退職後の不安が残りやすいです";
  const solitudeRisk = solitudeTolerance >= 8 && hasHobby
    ? "低め。趣味や活動があり、退職後の時間を使いやすい状態です"
    : solitudeTolerance >= 5
      ? "中程度。働く時間が減った後の人との接点を先に作ると安心です"
      : "高め。完全FIREより、少し仕事や発信を残す形も検討したい状態です";
  const satisfaction = score >= 75
    ? "高め。お金、働き方、退職後の過ごし方をバランスよく準備できています"
    : score >= 50
      ? "普通。完全FIREの前に収入源か生活リズムをもう一段整えたい状態です"
      : "低め。資産額だけで退職を決めると、収入不安や孤独感が出やすい状態です";
  const improvement = score >= 75
    ? "FIRE後の税金、取り崩し、社会との接点を具体化しましょう。"
    : incomeCoverRate < 0.5
      ? "副業収入、配当収入、固定費削減で生活費を支える収入源を増やしましょう。"
      : solitudeTolerance < 5 || !hasHobby
        ? "退職後も続けたい趣味、学び、発信、ゆるい仕事を先に作ると安心です。"
        : "完全FIREだけでなく、サイドFIREで収入と自由時間のバランスを試しましょう。";
  const sideFireCompare = incomeCoverRate >= 0.6 || workStress >= 8
    ? "サイドFIRE向き。完全退職より、収入源と社会との接点を残す方が安定しやすいです"
    : assetCoverYears >= 25 && solitudeTolerance >= 7
      ? "完全FIREも検討圏内。生活費と孤独対策を最後に確認しましょう"
      : "まずはサイドFIRE準備。生活費を下げ、配当や副業で収入の土台を作りましょう";
  const relatedGuide = score >= 75
    ? "配当生活年数とNISA取り崩しでFIRE後の継続性を確認"
    : incomeCoverRate < 0.5
      ? "サイドFIRE、配当生活年数、固定費削減で不安を下げる"
      : "FIRE達成率、サイドFIRE、生活防衛資金で安全度を確認";

  setText("fireStressScore", `${score}点`);
  setText("fireStressIncomeRisk", incomeRisk);
  setText("fireStressSolitudeRisk", solitudeRisk);
  setText("fireStressSatisfaction", satisfaction);
  setText("fireStressImprovement", improvement);
  setText("fireStressSideFireCompare", sideFireCompare);
  setText("fireStressRelatedTools", relatedGuide);
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

function renderInvestmentRisk() {
  const values = {
    investmentRiskAge: getFieldValue("investmentRiskAge"),
    investmentRiskIncome: getFieldValue("investmentRiskIncome"),
    investmentRiskAssets: getFieldValue("investmentRiskAssets"),
    investmentRiskExperience: getFieldValue("investmentRiskExperience"),
    investmentRiskAmount: getFieldValue("investmentRiskAmount"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#investmentRiskNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("investmentRiskScore", "入力エラー");
    setText("investmentRiskAllocation", "入力エラー");
    setText("investmentRiskStyle", "入力エラー");
    setText("investmentRiskDividendFit", "入力エラー");
    setText("investmentRiskIndexFit", "入力エラー");
    setText("investmentRiskFireFit", "入力エラー");
    setText("investmentRiskImprovement", "入力エラー");
    setText("investmentRiskRelatedTools", "入力エラー");
    return;
  }

  const age = values.investmentRiskAge.value;
  const income = values.investmentRiskIncome.value;
  const assets = values.investmentRiskAssets.value;
  const experience = values.investmentRiskExperience.value;
  const investmentAmount = values.investmentRiskAmount.value;
  const purpose = document.querySelector("#investmentRiskPurpose").value;
  const crashAction = document.querySelector("#investmentRiskCrashAction").value;
  const wantsFire = document.querySelector("#investmentRiskFire").checked;
  const hasSideIncome = document.querySelector("#investmentRiskSideIncome").checked;
  const investmentRatio = assets > 0 ? investmentAmount / assets : 0;
  const incomeBufferYears = income > 0 ? assets / income : 0;
  const ageScore = age <= 35 ? 18 : age <= 45 ? 14 : age <= 55 ? 9 : 4;
  const experienceScore = Math.min(experience, 10) * 2;
  const crashScore = { buy: 24, hold: 18, partial: 8, sell: -8 }[crashAction] || 8;
  const purposeScore = { growth: 14, fire: 16, dividend: 10, retirement: 8, short: -4 }[purpose] || 8;
  const assetBufferScore = incomeBufferYears >= 2 ? 12 : incomeBufferYears >= 1 ? 8 : incomeBufferYears >= 0.5 ? 4 : -4;
  const ratioPenalty = investmentRatio > 0.85 ? 12 : investmentRatio > 0.65 ? 6 : investmentRatio < 0.1 ? 3 : 0;
  const sideIncomeBonus = hasSideIncome ? 6 : 0;
  const fireBonus = wantsFire ? 4 : 0;
  let score = 38 + ageScore + experienceScore + crashScore + purposeScore + assetBufferScore + sideIncomeBonus + fireBonus - ratioPenalty;
  score = Math.max(0, Math.min(100, Math.round(score)));

  const allocation = score >= 75
    ? "現金15〜25%、インデックス45〜60%、高配当株・ETF20〜35%、その他0〜10%"
    : score >= 55
      ? "現金25〜35%、インデックス40〜55%、高配当株・ETF10〜25%、その他0〜5%"
      : "現金40〜60%、インデックス25〜45%、高配当株・ETF0〜15%、その他は控えめ";
  const style = score >= 75
    ? "長期インデックスを主軸に、高配当株や配当ETFも一部組み合わせる攻守バランス型"
    : score >= 55
      ? "毎月積立のインデックス中心。配当投資は少額から試し、暴落時の感情を確認"
      : "まず生活防衛資金と少額積立。値動きに慣れるまでは分散投信中心が無難";
  const dividendFit = purpose === "dividend" || (score >= 60 && crashAction !== "sell")
    ? "向いています。ただし個別株に偏らず、配当ETFや現金比率も合わせて確認してください"
    : score >= 50
      ? "一部なら候補です。高配当株より先に配当ETFで分散を確認すると続けやすいです"
      : "現時点では慎重に。高配当株よりインデックスや現金比率の安定を優先しましょう";
  const indexFit = score >= 45
    ? "かなり向いています。毎月積立を自動化し、暴落時も売らない設計を作りやすいです"
    : "少額からなら向いています。まずは値動きに慣れる金額で長期積立を始めるのが安全です";
  const fireFit = !wantsFire
    ? "FIRE希望なし。老後資金や生活防衛資金を優先しながら、無理のない積立が合います"
    : score >= 75
      ? "FIRE適性は高めです。副業収入と固定費削減を投資へ回せると達成率を上げやすいです"
      : score >= 55
        ? "FIRE適性は中程度です。投資リスクを上げすぎず、副業と固定費改善も併用しましょう"
        : "FIREを急ぐ前に、現金比率、収支、暴落耐性を整える段階です";
  let improvement = "毎月積立を続けつつ、年1回は資産配分と生活防衛資金を見直しましょう";
  if (incomeBufferYears < 0.5) {
    improvement = "まず生活防衛資金を厚くしてください。投資額を増やすより、現金余力を作る方が先です";
  } else if (crashAction === "sell") {
    improvement = "暴落時に売却しそうな場合は、投資額を下げ、インデックス中心の少額積立から慣れましょう";
  } else if (investmentRatio > 0.75) {
    improvement = "総資産に対する投資比率が高めです。現金比率を確認し、急な支出に備えてください";
  } else if (purpose === "short") {
    improvement = "短期利益目的はリスクが高くなりやすいです。長期目的と分けて資金管理しましょう";
  } else if (wantsFire && !hasSideIncome) {
    improvement = "FIREを目指すなら、投資だけでなく副業収入や固定費改善も組み合わせると安定します";
  }
  const relatedTools = purpose === "dividend"
    ? "高配当株比較と配当ETF比較で、個別株とETFの違いを確認しましょう"
    : wantsFire
      ? "FIRE達成率シミュレーターで、投資方針がFIREにどう効くか確認しましょう"
      : "新NISAシミュレーターと配当ETF比較で、長期積立と配当のバランスを確認しましょう";

  setText("investmentRiskScore", `${score} / 100`);
  setText("investmentRiskAllocation", allocation);
  setText("investmentRiskStyle", style);
  setText("investmentRiskDividendFit", dividendFit);
  setText("investmentRiskIndexFit", indexFit);
  setText("investmentRiskFireFit", fireFit);
  setText("investmentRiskImprovement", improvement);
  setText("investmentRiskRelatedTools", relatedTools);
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

const dividendStockPresets = {
  NTT: { yield: 3.5, growth: 2.2, feature: "通信インフラ寄りで安定配当を意識しやすい一方、成長性は控えめに見積もる候補です。" },
  JT: { yield: 5.5, growth: 1.0, feature: "高利回りを狙いやすい一方、事業特性や減配リスクも確認したい銘柄候補です。" },
  KDDI: { yield: 3.2, growth: 2.8, feature: "通信系の安定感と増配傾向を見やすく、配当と成長のバランスを取りたい人向けです。" },
  MITSUBISHI: { yield: 3.0, growth: 4.0, feature: "商社株の代表候補として、配当だけでなく資源価格や事業分散、株価成長も確認したい銘柄です。" },
  BANK: { yield: 4.0, growth: 2.0, feature: "金利環境の影響を受けやすい一方、配当利回りを狙いやすい金融株候補です。" },
  CUSTOM: { yield: 3.8, growth: 2.5, feature: "入力した利回りと成長率で任意の高配当株や組み合わせを試算できます。" },
};

function renderDividendStock() {
  const values = {
    dividendStockInitial: getFieldValue("dividendStockInitial"),
    dividendStockMonthly: getFieldValue("dividendStockMonthly"),
    dividendStockYield: getFieldValue("dividendStockYield"),
    dividendStockGrowth: getFieldValue("dividendStockGrowth"),
    dividendStockYears: getFieldValue("dividendStockYears"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#dividendStockNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("dividendStockAnnualDividend", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("dividendStockMonthlyDividend", yen.format(0));
    setText("dividendStockTotalDividend", yen.format(0));
    setText("dividendStockFinalAssets", yen.format(0));
    setText("dividendStockComparison", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("dividendStockFireImpact", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("dividendStockFeature", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("dividendStockEtfComparison", "\u5165\u529b\u30a8\u30e9\u30fc");
    return;
  }

  const selected = document.querySelector("#dividendStockChoice").value;
  const reinvest = document.querySelector("#dividendStockReinvest").checked;
  const nisa = document.querySelector("#dividendStockNisa").checked;
  const selectedPreset = dividendStockPresets[selected] || dividendStockPresets.CUSTOM;
  const selectedPlan = projectDividendEtf(
    values.dividendStockInitial.value,
    values.dividendStockMonthly.value,
    values.dividendStockYield.value,
    values.dividendStockGrowth.value,
    values.dividendStockYears.value,
    reinvest,
  );
  const comparisonPlans = Object.entries(dividendStockPresets)
    .filter(([key]) => key !== "CUSTOM")
    .map(([key, preset]) => ({
      key,
      ...preset,
      plan: projectDividendEtf(
        values.dividendStockInitial.value,
        values.dividendStockMonthly.value,
        preset.yield,
        preset.growth,
        values.dividendStockYears.value,
        reinvest,
      ),
    }));
  const bestDividend = comparisonPlans.reduce((best, item) => item.plan.annualDividend > best.plan.annualDividend ? item : best, comparisonPlans[0]);
  const bestAssets = comparisonPlans.reduce((best, item) => item.plan.assets > best.plan.assets ? item : best, comparisonPlans[0]);
  const monthlyDividend = selectedPlan.annualDividend / 12;
  const fireCoverage = Math.min((selectedPlan.annualDividend / 3600000) * 100, 999);
  const annualInvestment = values.dividendStockMonthly.value * 12;
  const nisaGuide = nisa
    ? annualInvestment <= 3600000
      ? `新NISA利用時は年間投資額${yen.format(annualInvestment)}が年360万円枠内の目安です。`
      : `新NISA利用時でも年間投資額${yen.format(annualInvestment)}は年360万円枠を超える目安です。`
    : "課税口座前提のため、配当や売却益への課税も考慮してください。";
  const comparisonText = `配当重視は${bestDividend.key}（年${yen.format(bestDividend.plan.annualDividend)}）、資産成長重視は${bestAssets.key}（最終${yen.format(bestAssets.plan.assets)}）の目安`;
  const featureText = `${selected}：${selectedPreset.feature} ${nisaGuide}`;
  const etfComparison = values.dividendStockYield.value >= 4.5
    ? "個別株は高利回りを狙いやすい一方、ETFより銘柄集中と減配リスクが高くなりやすいです。高利回り株だけに寄せず、配当ETFも組み合わせると分散しやすくなります。"
    : "個別株は銘柄選定の自由度が高く、ETFは分散性と管理のしやすさが強みです。新NISAで長期保有する場合は、配当利回りだけでなく増配余地と業績安定性も見てください。";

  setText("dividendStockAnnualDividend", yen.format(selectedPlan.annualDividend));
  setText("dividendStockMonthlyDividend", yen.format(monthlyDividend));
  setText("dividendStockTotalDividend", yen.format(selectedPlan.totalDividend));
  setText("dividendStockFinalAssets", yen.format(selectedPlan.assets));
  setText("dividendStockComparison", comparisonText);
  setText("dividendStockFireImpact", `年間生活費360万円の約${fireCoverage.toFixed(1)}%を配当で補う目安`);
  setText("dividendStockFeature", featureText);
  setText("dividendStockEtfComparison", etfComparison);
}

function renderDividendMental() {
  const values = {
    dividendMentalAssets: getFieldValue("dividendMentalAssets"),
    dividendMentalHighDividendRatio: getFieldValue("dividendMentalHighDividendRatio"),
    dividendMentalMonthlyCost: getFieldValue("dividendMentalMonthlyCost"),
    dividendMentalIncome: getFieldValue("dividendMentalIncome"),
    dividendMentalExperience: getFieldValue("dividendMentalExperience"),
    dividendMentalCrashTolerance: getFieldValue("dividendMentalCrashTolerance"),
    dividendMentalCashRatio: getFieldValue("dividendMentalCashRatio"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#dividendMentalNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("dividendMentalScore", "入力エラー");
    setText("dividendMentalCrashResult", "入力エラー");
    setText("dividendMentalDependenceRisk", "入力エラー");
    setText("dividendMentalFireStability", "入力エラー");
    setText("dividendMentalImprovement", "入力エラー");
    setText("dividendMentalAllocation", "入力エラー");
    setText("dividendMentalRelatedTools", "入力エラー");
    return;
  }

  const assets = values.dividendMentalAssets.value;
  const highDividendRatio = values.dividendMentalHighDividendRatio.value;
  const monthlyCost = values.dividendMentalMonthlyCost.value;
  const dividendIncome = values.dividendMentalIncome.value;
  const experience = values.dividendMentalExperience.value;
  const crashTolerance = values.dividendMentalCrashTolerance.value;
  const cashRatio = values.dividendMentalCashRatio.value;
  const hasSideIncome = document.querySelector("#dividendMentalSideIncome").checked;
  const wantsFire = document.querySelector("#dividendMentalFire").checked;
  const annualCost = monthlyCost * 12;
  const annualDividend = dividendIncome * 12;
  const dividendCoverage = annualCost > 0 ? annualDividend / annualCost : 0;
  const cashAmount = assets * (cashRatio / 100);
  const cashMonths = monthlyCost > 0 ? cashAmount / monthlyCost : 999;
  const concentrationPenalty = highDividendRatio > 70 ? 18 : highDividendRatio > 55 ? 10 : highDividendRatio < 15 ? 4 : 0;
  const cashScore = cashMonths >= 12 ? 18 : cashMonths >= 6 ? 12 : cashMonths >= 3 ? 6 : -8;
  const experienceScore = Math.min(experience, 10) * 1.6;
  const crashScore = crashTolerance * 4.2;
  const dependencePenalty = dividendCoverage > 0.8 ? 16 : dividendCoverage > 0.5 ? 9 : dividendCoverage < 0.1 ? 4 : 0;
  const sideIncomeBonus = hasSideIncome ? 8 : 0;
  const firePenalty = wantsFire && dividendCoverage > 0.6 && cashMonths < 12 ? 7 : 0;
  let score = 42 + cashScore + experienceScore + crashScore + sideIncomeBonus - concentrationPenalty - dependencePenalty - firePenalty;
  score = Math.max(0, Math.min(100, Math.round(score)));

  const crashResult = crashTolerance >= 8 && cashMonths >= 6
    ? "高め。現金余力があり、暴落時も売却を急ぎにくい状態です"
    : crashTolerance >= 5
      ? "中程度。暴落時に不安が強くなる前提で、現金とETF分散を厚めにしましょう"
      : "低め。高配当株の比率を下げ、まず現金と分散ETFで値動きに慣れる段階です";
  const dependenceRisk = dividendCoverage >= 0.8
    ? "高め。生活費の多くを配当に頼るため、減配時の不安が大きくなりやすいです"
    : dividendCoverage >= 0.4
      ? "中程度。生活費の一部を配当で補えますが、副業や現金も残すと安定します"
      : "低め。現時点では配当依存は小さく、資産形成期として続けやすい状態です";
  const fireStability = !wantsFire
    ? "FIRE希望なし。配当は生活補助として無理なく使いやすい状態です"
    : score >= 75
      ? "FIRE後も比較的安定しやすい目安です。現金と分散を維持しましょう"
      : score >= 55
        ? "サイドFIRE寄りが現実的です。配当だけでなく副業収入も残すと安定します"
        : "完全FIRE前提では不安が残ります。生活費削減、現金比率、分散を先に整えましょう";
  const improvement = cashMonths < 6
    ? "まず生活費6か月分以上の現金を確保すると、暴落時に売らずに待ちやすくなります"
    : highDividendRatio > 60
      ? "高配当株比率が高めです。配当ETFやインデックス投資も組み合わせて集中を下げましょう"
      : dividendCoverage > 0.7
        ? "配当依存が高めです。副業収入や生活費削減も残して、減配時の逃げ道を作りましょう"
        : crashTolerance <= 4
          ? "暴落耐性が低めです。少額で値動きに慣れ、売買ルールを事前に決めましょう"
          : "現状は続けやすい範囲です。銘柄分散と現金比率を崩さずに継続しましょう";
  const allocation = score >= 75
    ? "現金15〜25%、高配当株30〜45%、配当ETF・投信30〜50%を目安に分散を維持"
    : cashMonths < 6
      ? "現金比率を先に上げ、生活費6〜12か月分を確保してから高配当株を増やす目安"
      : highDividendRatio > 60
        ? "高配当株を40〜50%以下に抑え、配当ETFやインデックスで分散する目安"
        : "現金20〜30%、高配当株25〜40%、ETF・投信30〜50%で無理なく続ける目安";
  const relatedTools = highDividendRatio > 55
    ? "高配当株比較と配当ETF比較で、個別株とETFの分散差を確認しましょう"
    : wantsFire
      ? "FIREストレス診断と配当生活年数シミュレーターで、FIRE後の不安も確認しましょう"
      : "配当ETF比較と配当再投資シミュレーターで、収入と資産成長のバランスを確認しましょう";

  setText("dividendMentalScore", `${score} / 100`);
  setText("dividendMentalCrashResult", crashResult);
  setText("dividendMentalDependenceRisk", dependenceRisk);
  setText("dividendMentalFireStability", fireStability);
  setText("dividendMentalImprovement", improvement);
  setText("dividendMentalAllocation", allocation);
  setText("dividendMentalRelatedTools", relatedTools);
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

function calculateDividendLifeYearsPlan(values, continueInvesting, reinvest) {
  const yieldRate = values.dividendLifeYearsYield.value / 100;
  const returnRate = values.dividendLifeYearsReturn.value / 100;
  const inflationRate = values.dividendLifeYearsInflation.value / 100;
  const initialAnnualCost = values.dividendLifeYearsLivingCost.value * 12;
  const maxYears = 80;
  let assets = values.dividendLifeYearsAssets.value;
  let annualCost = initialAnnualCost;
  let possibleYears = 0;
  let firstYearDividend = Math.max(assets * yieldRate, 0);
  let finalAnnualDividend = firstYearDividend;

  for (let year = 1; year <= maxYears; year += 1) {
    const annualDividend = Math.max(assets * yieldRate, 0);
    if (year === 1) {
      firstYearDividend = annualDividend;
    }
    finalAnnualDividend = annualDividend;
    const annualAdditionalInvestment = continueInvesting ? values.dividendLifeYearsMonthlyInvestment.value * 12 : 0;
    const dividendForLivingCost = reinvest ? 0 : annualDividend;
    const withdrawal = Math.max(annualCost - dividendForLivingCost, 0);

    assets += annualAdditionalInvestment;
    if (reinvest) {
      assets += annualDividend;
    }
    assets *= 1 + returnRate;
    assets -= withdrawal;

    if (assets <= 0) {
      return {
        possibleYears,
        finalAssets: 0,
        firstYearDividend,
        finalAnnualDividend,
        initialAnnualCost,
      };
    }

    possibleYears = year;
    annualCost *= 1 + inflationRate;
  }

  return {
    possibleYears: maxYears,
    finalAssets: assets,
    firstYearDividend,
    finalAnnualDividend,
    initialAnnualCost,
  };
}

function renderDividendLifeYears() {
  const values = {
    dividendLifeYearsAssets: getFieldValue("dividendLifeYearsAssets"),
    dividendLifeYearsLivingCost: getFieldValue("dividendLifeYearsLivingCost"),
    dividendLifeYearsYield: getFieldValue("dividendLifeYearsYield"),
    dividendLifeYearsMonthlyInvestment: getFieldValue("dividendLifeYearsMonthlyInvestment"),
    dividendLifeYearsReturn: getFieldValue("dividendLifeYearsReturn"),
    dividendLifeYearsInflation: getFieldValue("dividendLifeYearsInflation"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#dividendLifeYearsNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("dividendLifeYearsPossibleYears", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("dividendLifeYearsAnnualDividend", yen.format(0));
    setText("dividendLifeYearsMonthlyDividend", yen.format(0));
    setText("dividendLifeYearsBalanceTrend", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("dividendLifeYearsFireSustainability", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("dividendLifeYearsNisaEffect", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("dividendLifeYearsImprovement", "\u5165\u529b\u30a8\u30e9\u30fc");
    return;
  }

  const continueInvesting = document.querySelector("#dividendLifeYearsContinue").checked;
  const reinvest = document.querySelector("#dividendLifeYearsReinvest").checked;
  const plan = calculateDividendLifeYearsPlan(values, continueInvesting, reinvest);
  const annualCost = values.dividendLifeYearsLivingCost.value * 12;
  const monthlyDividend = plan.firstYearDividend / 12;
  const coverage = annualCost > 0 ? (plan.firstYearDividend / annualCost) * 100 : 0;
  const possibleYearsLabel = plan.possibleYears >= 80 ? "80年以上" : `${plan.possibleYears}年`;
  const balanceTrend = plan.possibleYears >= 80
    ? `80年後も残高${yen.format(plan.finalAssets)}の目安`
    : `${plan.possibleYears}年後に資産が尽きる目安`;
  const sustainability = coverage >= 100
    ? `初年度生活費の${coverage.toFixed(1)}%を配当でカバー。配当だけで生活費を上回る目安です。`
    : coverage >= 50
      ? `初年度生活費の${coverage.toFixed(1)}%を配当でカバー。不足分は取り崩しや副業収入で補う目安です。`
      : `初年度生活費の${coverage.toFixed(1)}%を配当でカバー。生活費削減や追加投資の優先度が高い目安です。`;
  const annualInvestment = continueInvesting ? values.dividendLifeYearsMonthlyInvestment.value * 12 : 0;
  const nisaEffect = annualInvestment === 0
    ? "追加投資なしのため、新NISAは既存資産の非課税運用枠として活用を検討する目安"
    : annualInvestment <= 3600000
      ? "毎年の追加投資は新NISA年間投資枠360万円内に収まる目安"
      : "毎年の追加投資が新NISA年間投資枠360万円を超えるため、課税口座との併用が必要な目安";
  const improvement = plan.possibleYears >= 80
    ? "継続年数は長めです。利回りを追いすぎず、分散と生活防衛資金を優先してください。"
    : coverage < 50
      ? "固定費削減、毎月追加投資の増額、配当再投資を組み合わせると継続年数を伸ばしやすくなります。"
      : "生活費の一部を配当で補えています。インフレ率を高めにしても続くか確認すると安心です。";

  setText("dividendLifeYearsPossibleYears", possibleYearsLabel);
  setText("dividendLifeYearsAnnualDividend", yen.format(plan.firstYearDividend));
  setText("dividendLifeYearsMonthlyDividend", yen.format(monthlyDividend));
  setText("dividendLifeYearsBalanceTrend", balanceTrend);
  setText("dividendLifeYearsFireSustainability", sustainability);
  setText("dividendLifeYearsNisaEffect", nisaEffect);
  setText("dividendLifeYearsImprovement", improvement);
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

function renderLifeCost() {
  const values = {
    lifeCostRent: getFieldValue("lifeCostRent"),
    lifeCostCommunication: getFieldValue("lifeCostCommunication"),
    lifeCostInsurance: getFieldValue("lifeCostInsurance"),
    lifeCostFood: getFieldValue("lifeCostFood"),
    lifeCostUtilities: getFieldValue("lifeCostUtilities"),
    lifeCostTransport: getFieldValue("lifeCostTransport"),
    lifeCostSubscription: getFieldValue("lifeCostSubscription"),
    lifeCostEntertainment: getFieldValue("lifeCostEntertainment"),
    lifeCostInvestment: getFieldValue("lifeCostInvestment"),
    lifeCostSideIncome: getFieldValue("lifeCostSideIncome"),
  };
  const hasError = Object.values(values).some((item) => !item.valid);

  document.querySelector("#lifeCostNotice").classList.toggle("is-visible", hasError);
  if (hasError) {
    setText("lifeCostMonthlyTotal", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("lifeCostReducible", yen.format(0));
    setText("lifeCostAnnualSaving", yen.format(0));
    setText("lifeCostFutureAssets", yen.format(0));
    setText("lifeCostFireShortening", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("lifeCostImprovementPoint", "\u5165\u529b\u30a8\u30e9\u30fc");
    setText("lifeCostFixedCostGuide", "\u5165\u529b\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044");
    return;
  }

  const rent = values.lifeCostRent.value;
  const communication = values.lifeCostCommunication.value;
  const insurance = values.lifeCostInsurance.value;
  const food = values.lifeCostFood.value;
  const utilities = values.lifeCostUtilities.value;
  const transport = values.lifeCostTransport.value;
  const subscription = values.lifeCostSubscription.value;
  const entertainment = values.lifeCostEntertainment.value;
  const investment = values.lifeCostInvestment.value;
  const sideIncome = values.lifeCostSideIncome.value;
  const fixedCosts = rent + communication + insurance + utilities + transport + subscription;
  const variableCosts = food + entertainment;
  const monthlyTotal = fixedCosts + variableCosts;
  const fixedReducible =
    Math.max(communication - 6000, 0) * 0.7 +
    Math.max(insurance - 8000, 0) * 0.55 +
    Math.max(subscription - 2000, 0) * 0.7 +
    Math.max(utilities - 15000, 0) * 0.35 +
    Math.max(transport - 10000, 0) * 0.3 +
    Math.max(rent - 85000, 0) * 0.12;
  const variableReducible =
    Math.max(food - 50000, 0) * 0.25 +
    Math.max(entertainment - 20000, 0) * 0.35;
  const reducible = Math.max(fixedReducible + variableReducible, 0);
  const annualSaving = reducible * 12;
  const futureAssets = calculateFutureAssets(0, reducible, 4, 20 * 12);
  const currentMonthlyAssetGrowth = investment + sideIncome;
  const improvedMonthlyAssetGrowth = currentMonthlyAssetGrowth + reducible;
  const fireTarget = 30000000;
  const currentYears = currentMonthlyAssetGrowth > 0 ? fireTarget / (currentMonthlyAssetGrowth * 12) : null;
  const improvedYears = improvedMonthlyAssetGrowth > 0 ? fireTarget / (improvedMonthlyAssetGrowth * 12) : null;
  const shortening = currentYears !== null && improvedYears !== null ? Math.max(currentYears - improvedYears, 0) : 0;
  const fixedRate = monthlyTotal > 0 ? fixedCosts / monthlyTotal : 0;
  let improvementPoint = "削減した金額を無理なく投資へ回すと、生活を崩さず資産形成を進めやすくなります。";

  if (reducible <= 1000) {
    improvementPoint = "大きな削減余地は少なめです。副業収入や投資額の継続性を確認し、生活防衛資金も整えておきましょう。";
  } else if (fixedRate >= 0.65) {
    improvementPoint = "固定費比率が高めです。家賃、通信費、保険料、サブスクの順に、一度見直すと効果が続く支出から確認しましょう。";
  } else if (communication + subscription >= 15000) {
    improvementPoint = "通信費とサブスクに見直し余地があります。プラン変更や使っていない契約の解約は、忙しい会社員でも始めやすい改善です。";
  } else if (food + entertainment >= 100000) {
    improvementPoint = "食費と娯楽費がやや大きめです。削りすぎるより、平日だけ予算を決めるなど継続できる範囲で整えるのがおすすめです。";
  } else if (investment < reducible) {
    improvementPoint = "削減可能額が現在の投資額に近い水準です。生活防衛資金を確保したうえで、削減分を新NISAなどに回せるか確認しましょう。";
  }

  const guide = reducible > 0
    ? `月${yen.format(reducible)}前後の改善余地があります。固定費削減シミュレーターで通信費・保険料・サブスクを細かく確認しましょう。`
    : "固定費削減シミュレーターで、見落としているサブスクや保険料がないか確認しましょう。";

  setText("lifeCostMonthlyTotal", yen.format(monthlyTotal));
  setText("lifeCostReducible", yen.format(reducible));
  setText("lifeCostAnnualSaving", yen.format(annualSaving));
  setText("lifeCostFutureAssets", yen.format(futureAssets));
  setText("lifeCostFireShortening", `${shortening.toFixed(1)}\u5e74`);
  setText("lifeCostImprovementPoint", improvementPoint);
  setText("lifeCostFixedCostGuide", guide);
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
  if (route === "side-income" || route === "ai-hourly" || route === "ai-efficiency" || route === "ai-roi" || route === "ai-automation" || route === "ai-time-reduction" || route === "ai-outsourcing" || route === "ai-profit-max" || route === "hourly-improvement" || route === "side-time-management" || route === "side-fatigue" || route === "side-continuity" || route === "side-motivation" || route === "side-risk" || route === "side-safety" || route === "side-profit-margin" || route === "incorporation" || route === "take-home" || route === "tax" || route === "employee-tax-saving" || route === "income-tax" || route === "resident-tax" || route === "investment-risk" || route === "nisa" || route === "nisa-fast" || route === "nisa-withdrawal" || route === "credit-card-investment" || route === "ideco" || route === "dividend" || route === "dividend-etf" || route === "dividend-stock" || route === "dividend-mental" || route === "dividend-reinvestment" || route === "dividend-life" || route === "dividend-life-years" || route === "fire" || route === "fire-rate" || route === "fire-cost-optimization" || route === "fire-stress" || route === "employee-fire" || route === "cash-flow" || route === "life-cost" || route === "side-fire" || route === "emergency-fund" || route === "fixed-cost-reduction" || route === "retirement" || route === "education" || route === "education-insurance" || route === "mortgage") {
    return route;
  }
  return "top";
}

function renderRoute() {
  const route = currentRoute();
  const seo = routeSeo[route] || routeSeo.top;
  document.title = seo.title;
  descriptionMeta.setAttribute("content", seo.description);
  const pageHeading = document.querySelector(".header h1");
  if (pageHeading) {
    pageHeading.textContent = seo.title.split("｜")[0];
  }
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
document.querySelector("#aiRoiForm").addEventListener("input", renderAiRoi);
document.querySelector("#aiRoiForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderAiRoi);
});
document.querySelector("#aiAutomationForm").addEventListener("input", renderAiAutomation);
document.querySelector("#aiAutomationForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderAiAutomation);
});
document.querySelector("#aiTimeReductionForm").addEventListener("input", renderAiTimeReduction);
document.querySelector("#aiTimeReductionForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderAiTimeReduction);
});
document.querySelector("#aiOutsourcingForm").addEventListener("input", renderAiOutsourcing);
document.querySelector("#aiOutsourcingForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderAiOutsourcing);
});
document.querySelector("#aiProfitMaxForm").addEventListener("input", renderAiProfitMax);
document.querySelector("#aiProfitMaxForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderAiProfitMax);
});
document.querySelector("#hourlyImprovementForm").addEventListener("input", renderHourlyImprovement);
document.querySelector("#hourlyImprovementForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderHourlyImprovement);
});
document.querySelector("#sideTimeManagementForm").addEventListener("input", renderSideTimeManagement);
document.querySelector("#sideTimeManagementForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderSideTimeManagement);
});
document.querySelector("#sideFatigueForm").addEventListener("input", renderSideFatigue);
document.querySelector("#sideFatigueForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderSideFatigue);
});
document.querySelector("#sideContinuityForm").addEventListener("input", renderSideContinuity);
document.querySelector("#sideContinuityForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderSideContinuity);
});
document.querySelector("#sideMotivationForm").addEventListener("input", renderSideMotivation);
document.querySelector("#sideMotivationForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderSideMotivation);
});
document.querySelector("#sideRiskForm").addEventListener("input", renderSideRisk);
document.querySelector("#sideRiskForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderSideRisk);
});
document.querySelector("#sideSafetyForm").addEventListener("input", renderSideSafety);
document.querySelector("#sideSafetyForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderSideSafety);
});
document.querySelector("#sideProfitMarginForm").addEventListener("input", renderSideProfitMargin);
document.querySelector("#sideProfitMarginForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderSideProfitMargin);
});
document.querySelector("#incorporationForm").addEventListener("input", renderIncorporation);
document.querySelector("#incorporationForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderIncorporation);
});
document.querySelector("#taxForm").addEventListener("input", renderTax);
document.querySelector("#taxForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderTax);
});
document.querySelector("#employeeTaxSavingForm").addEventListener("input", renderEmployeeTaxSaving);
document.querySelector("#employeeTaxSavingForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderEmployeeTaxSaving);
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
document.querySelector("#investmentRiskForm").addEventListener("input", renderInvestmentRisk);
document.querySelector("#investmentRiskForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderInvestmentRisk);
});
document.querySelector("#nisaForm").addEventListener("input", renderNisa);
document.querySelector("#nisaForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderNisa);
});
document.querySelector("#nisaFastForm").addEventListener("input", renderNisaFast);
document.querySelector("#nisaFastForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderNisaFast);
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
document.querySelector("#fireRateForm").addEventListener("input", renderFireRate);
document.querySelector("#fireRateForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderFireRate);
});
document.querySelector("#fireCostForm").addEventListener("input", renderFireCostOptimization);
document.querySelector("#fireCostForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderFireCostOptimization);
});
document.querySelector("#fireStressForm").addEventListener("input", renderFireStress);
document.querySelector("#fireStressForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderFireStress);
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
document.querySelector("#dividendStockForm").addEventListener("input", renderDividendStock);
document.querySelector("#dividendStockForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderDividendStock);
});
document.querySelector("#dividendMentalForm").addEventListener("input", renderDividendMental);
document.querySelector("#dividendMentalForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderDividendMental);
});
document.querySelector("#dividendReinvestmentForm").addEventListener("input", renderDividendReinvestment);
document.querySelector("#dividendReinvestmentForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderDividendReinvestment);
});
document.querySelector("#dividendLifeForm").addEventListener("input", renderDividendLife);
document.querySelector("#dividendLifeForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderDividendLife);
});
document.querySelector("#dividendLifeYearsForm").addEventListener("input", renderDividendLifeYears);
document.querySelector("#dividendLifeYearsForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderDividendLifeYears);
});
document.querySelector("#employeeFireForm").addEventListener("input", renderEmployeeFire);
document.querySelector("#employeeFireForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderEmployeeFire);
});
document.querySelector("#cashFlowForm").addEventListener("input", renderCashFlow);
document.querySelector("#cashFlowForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderCashFlow);
});
document.querySelector("#lifeCostForm").addEventListener("input", renderLifeCost);
document.querySelector("#lifeCostForm").addEventListener("reset", () => {
  window.requestAnimationFrame(renderLifeCost);
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

function safeRender(name, renderFn) {
  try {
    renderFn();
  } catch (error) {
    console.warn(`${name}の初期計算をスキップしました。`, error);
  }
}

renderRoute();
safeRender("副業疲労度シミュレーター", renderSideFatigue);
safeRender("副業月収シミュレーター", renderSideIncome);
safeRender("AI副業時給シミュレーター", renderAiHourly);
safeRender("AI副業効率化シミュレーター", renderAiEfficiency);
safeRender("AI導入ROIシミュレーター", renderAiRoi);
safeRender("AI副業自動化シミュレーター", renderAiAutomation);
safeRender("AI作業時間削減診断", renderAiTimeReduction);
safeRender("AI外注費削減シミュレーター", renderAiOutsourcing);
safeRender("AI副業利益最大化シミュレーター", renderAiProfitMax);
safeRender("副業時給改善シミュレーター", renderHourlyImprovement);
safeRender("副業時間管理シミュレーター", renderSideTimeManagement);
safeRender("副業継続率診断", renderSideContinuity);
safeRender("副業モチベーション診断", renderSideMotivation);
safeRender("副業リスク診断", renderSideRisk);
safeRender("会社員副業安全度診断", renderSideSafety);
safeRender("副業利益率シミュレーター", renderSideProfitMargin);
safeRender("副業法人化判断シミュレーター", renderIncorporation);
safeRender("副業税金シミュレーター", renderTax);
safeRender("会社員節税シミュレーター", renderEmployeeTaxSaving);
safeRender("副業住民税シミュレーター", renderResidentTax);
safeRender("副業所得税シミュレーター", renderIncomeTax);
safeRender("副業手取り計算シミュレーター", renderTakeHome);
safeRender("投資リスク許容度診断", renderInvestmentRisk);
safeRender("新NISAシミュレーター", renderNisa);
safeRender("新NISA最速積立シミュレーター", renderNisaFast);
safeRender("NISA取り崩しシミュレーター", renderNisaWithdrawal);
safeRender("クレカ積立比較シミュレーター", renderCreditCardInvestment);
safeRender("iDeCo節税シミュレーター", renderIdeco);
safeRender("FIRE達成シミュレーター", renderFire);
safeRender("FIRE達成率シミュレーター", renderFireRate);
safeRender("FIRE生活費最適化シミュレーター", renderFireCostOptimization);
safeRender("FIREストレス診断", renderFireStress);
safeRender("老後資金シミュレーター", renderRetirement);
safeRender("教育費シミュレーター", renderEducation);
safeRender("学資保険比較シミュレーター", renderEducationInsurance);
safeRender("配当金シミュレーター", renderDividend);
safeRender("配当ETF比較シミュレーター", renderDividendEtf);
safeRender("高配当株比較シミュレーター", renderDividendStock);
safeRender("配当メンタル安定度診断", renderDividendMental);
safeRender("配当再投資シミュレーター", renderDividendReinvestment);
safeRender("配当生活達成シミュレーター", renderDividendLife);
safeRender("配当生活年数シミュレーター", renderDividendLifeYears);
safeRender("会社員FIRE年数計算シミュレーター", renderEmployeeFire);
safeRender("会社員キャッシュフローシミュレーター", renderCashFlow);
safeRender("生活コスト最適化シミュレーター", renderLifeCost);
safeRender("サイドFIREシミュレーター", renderSideFire);
safeRender("生活防衛資金シミュレーター", renderEmergencyFund);
safeRender("固定費削減シミュレーター", renderFixedCostReduction);
safeRender("住宅ローン返済シミュレーター", renderMortgage);
safeRender("トップ検索", renderTopToolSearch);
