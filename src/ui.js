import "figma-plugin-ds/dist/figma-plugin-ds.css";
document.getElementById("copy").onclick = () => {
    parent.postMessage({ pluginMessage: { type: "copy" } }, "*");
};
document.getElementById("generate").onclick = () => {
    const textbox = document.getElementById("theme");
    parent.postMessage({ pluginMessage: { type: "generate", theme: textbox.innerHTML } }, "*");
};
