(async () => {
    async function getScriptContent(src) {
        try {
            const response = await fetch(src);
            return await response.text();
        } catch (e) {
            return `/* Failed to fetch ${src} */`;
        }
    }

    for (let script of document.querySelectorAll("script[src]")) {
        const src = script.src;
        const code = await getScriptContent(src);
        const newScript = document.createElement("script");
        newScript.textContent = code;
        script.replaceWith(newScript);
    }

    const html = new XMLSerializer().serializeToString(document);
    const blob = new Blob([html], { type: "text/html" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "page.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
})();
      
