export const GTM_ID = 'GTM-WW9BZ94J';
export const GA4_ID = 'G-B2E12P59HC';

export const injectTracking = () => {
    if (typeof window === 'undefined') return;
    if (document.getElementById('gtm-script')) return; // Prevent double injection

    // 1. Inject GTM
    const script = document.createElement('script');
    script.id = 'gtm-script';
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_ID}');`;
    document.head.appendChild(script);

    // 2. Inject GTM Noscript (Body)
    const noscript = document.createElement('noscript');
    noscript.id = 'gtm-noscript';
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.insertBefore(noscript, document.body.firstChild);

    // 3. Inject GA4
    const gtagScript = document.createElement('script');
    gtagScript.id = 'ga4-script';
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.appendChild(gtagScript);

    const gtagConfig = document.createElement('script');
    gtagConfig.id = 'ga4-config';
    gtagConfig.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA4_ID}');
    `;
    document.head.appendChild(gtagConfig);

    console.log('Tracking scripts injected.');
};
