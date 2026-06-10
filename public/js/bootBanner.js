// public/js/bootBanner.js

(function bootBanner() {
    console.log(
`%c
<PASTE YOUR MODERN-RETRO NAIMEAN'ING ASCII BLOCK HERE>
`,
"color:#00ff00;font-weight:bold;"
    );

    let dots = 0;
    const base = "Naimean.com - Booting";
    setInterval(() => {
        dots = (dots + 1) % 4; // 0–3 dots
        console.log(`%c${base}${".".repeat(dots)}`, "color:#00ff00;");
    }, 500);
})();
