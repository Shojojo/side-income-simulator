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
