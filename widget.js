(function () {
    function initSupportWidget() {
        if (window.__supportWidgetLoaded) return;
        window.__supportWidgetLoaded = true;

        const scriptTag = document.getElementById("support-widget-script");
        const supportFormURL = scriptTag?.getAttribute("data-support-url");

        if (!supportFormURL) {
            console.error("[Support Widget] ❌ L'attribut 'data-support-url' est requis.");
            return;
        }

        // ... (reste du script inchangé)
    }

    if (document.readyState === "complete" || document.readyState === "interactive") {
        initSupportWidget();
    } else {
        window.addEventListener("DOMContentLoaded", initSupportWidget);
    }
})();
