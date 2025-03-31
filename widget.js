(function () {
    if (window.__supportWidgetLoaded) return;
    window.__supportWidgetLoaded = true;

    const scriptTag = document.currentScript;
    const supportFormURL = scriptTag.getAttribute("data-support-url");

    const style = document.createElement("style");
    style.textContent = `
        #support-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #444444;
            color: white;
            padding: 12px 20px;
            border-radius: 30px;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: background 0.3s;
            font-weight: bold;
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 16px;
        }

        #support-button:hover {
            background-color: #218838;
        }

        #support-button-icon {
            font-size: 20px;
        }

        #support-popup {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 360px;
            height: 500px;
            background: white;
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
            border-radius: 16px;
            display: none;
            flex-direction: column;
            z-index: 999;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
        }

        #support-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            background: #64B97C;
            color: white;
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
        }

        #support-title {
            font-size: 20px;
            font-weight: bold;
            color: white;
        }

        #close-support {
            background: none;
            border: none;
            font-size: 20px;
            color: white;
            cursor: pointer;
            font-weight: bold;
            transition: transform 0.2s ease;
        }

        #close-support:hover {
            transform: scale(1.2);
        }

        #support-iframe {
            width: 100%;
            height: 100%;
            border: none;
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
        }
    `;
    document.head.appendChild(style);

    const supportHTML = `
        <div id="support-button">
            <span id="support-button-icon">💬</span> Support
        </div>
        <div id="support-popup">
            <div id="support-header">
                <span id="support-title">Support</span>
                <button id="close-support">✖</button>
            </div>
            <iframe id="support-iframe" src="${supportFormURL}" frameborder="0"></iframe>
        </div>
    `;
    const container = document.createElement("div");
    container.innerHTML = supportHTML;
    document.body.appendChild(container);

    document.getElementById("support-button").addEventListener("click", function () {
        document.getElementById("support-iframe").src = supportFormURL;
        document.getElementById("support-popup").style.display = "flex";
    });

    document.getElementById("close-support").addEventListener("click", function () {
        document.getElementById("support-popup").style.display = "none";
    });
})();
